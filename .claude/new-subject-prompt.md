# Prompt: build a new VIT study-notes website for another subject (paste into a FRESH Claude Code session; pick Opus in the model menu)

Build a new study-notes website for a new VIT subject, with the SAME engine, features and quality as the BAEEE101 (Basic Engineering), BAENG101 (English) and BACHY105 (Chemistry) sites. Every feature those sites have must be in it.

## 0. Ask me first (one message, then wait)
1. Course code, official title, and site name ("<COURSE CODE> Notes", no "VIT" in the name). Slug = lowercase code, e.g. `baxxx101`.
2. The folder holding the PPTs/PDFs/photos (I send them as WhatsApp transfers: look in
   `C:\Users\Siddharth D\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\LocalState\sessions\47E5263DBFBF4BCFA7BD384357F7632EB0D64F70\transfers\` newest `2026-NN` folders first,
   and ignore files for other courses), the modules, and the syllabus PDF.
3. Pro price for this subject (one-time, per subject; default Rs 15).
4. Which modules belong to CAT-1, CAT-2 and FAT (do not guess; until I answer, those exam pages show the "not added yet" page).
5. Build all modules in this session, or one module per fresh session (my default: one module per fresh session; clear the session yourself after each module,
   update the WORKPLAN, commit, then tell me to type "continue the <subject> site").

## 1. Start point: copy the newest engine, do not rebuild it
- Engine = `C:\Users\Siddharth D\Projects\baeee101-notes` (newest; has everything below). Copy it into a NEW folder `C:\Users\Siddharth D\Projects\<slug>-notes`,
  `git init`, remove the BAEEE101 content, figures, widgets, questions, summaries and the `src/` material, and rebrand (see `tools/rebrand.js` in the English repo and how
  baeee101 did it): site name, folder/repo, product tag `<slug>-notes`, reviewer `review@<slug>`, Redis key prefix `<slug>:` on EVERY key in `api/_store.js` (the Upstash DB is shared
  with the other sites; never reuse another site's prefix), site `<slug>.vercel.app`, Pro price, home subject cards (add this subject, keep the others linking out).
- Do not edit the chemistry, English or basic-engineering repos. Do not start the merged site.
- The engine already has (keep all, test each after rebranding):
  - Notes in short tabs, redrawn theme-aware SVG figures with zoom, "Try it" widgets (Pro, small locked card for free users), module summaries (free, full),
    syllabus checklists (full, CAT-1, CAT-2, FAT; "Notes coming" state for lines without topics; topic counts deduplicated), question papers + "asked in CAT" badges,
    timed mock CAT (90 min) and mock FAT (180 min), night-before revision pack, formula sheet, flashcards (3 free per topic, all Pro), quiz + weak-spot + mastery,
    battles (1 preview free), focus timer (30 min free, 1-3 h Pro + stats), study music, streaks, share card, bookmarks + My notes, progress sync, search,
    PDF summaries (print view), Help?/Ideas + Messages, light/dark, phone-first 375 px.
  - Home page with subject search (cards: this subject + Chemistry -> bachy105.vercel.app, English -> baeng101.vercel.app, Basic Engineering -> baeee101.vercel.app).
  - Owner-only /admin portal (Overview, Students, Payments, Free access, Devices and resets, Messages, Battles, Subjects, Question papers, Settings incl. sign-in on/off,
    free/paid switch, pause payments, announcement) with a subject switcher and the Go Pro funnel stats.
  - "Why go Pro" page (outcome lead, grouped benefits, real previews, one-time price framing, UPI only, Terms/Refund next to Pay, no fake urgency).
  - Terms, Refund, Contact pages (wording "Pro features for study notes"), reviewer sign-in, pause switch, Google sign-in (vitstudent.ac.in only), device limit.
  - Free/Pro split is SERVER-SIDE in tools/build.js (free files vs pro-* files; api/content.js gates Pro files). Keep it that way.
- Payments stay OFF: `api/_mode.json` {"open": true} (no sign-in, Pro free for everyone) until I switch things in /admin. No Razorpay submission: the sites will be merged on one domain
  and Razorpay gets that domain approved (I edit the primary website in Business website details). Chemistry's site is already the approved primary on my account; the live key is shared.

## 2. Free vs Pro (same as the other sites)
FREE: all notes + diagrams, full module summaries, syllabus checklists (ticks), actual papers (questions only), "asked in CAT" badge without slot detail, focus 30 min, streaks,
share card, 3 sample flashcards/topic, one preview battle, Help?/Ideas.
PRO: formula sheet, all flashcards, music, focus 1-3 h + stats, full "asked in CAT" detail, "N% read" + study-time stats, model answers + model papers, practice answers and explanations,
quiz/weak-spot/mastery, unlimited battles, sync, bookmarks + My notes, mock CAT/FAT, revision pack, PDF summaries, widgets. Existing payers keep what they paid for.

## 3. Content quality and how to build it cheaply (lessons learned)
- Accuracy against my files is the top priority. Anything beyond them is labelled "Extra:" and only if I ask. If material for a syllabus line is missing, show it as "Notes coming";
  NEVER invent it. Tables only for comparisons, no "slides" wording on the site, plain student language, no registration numbers, faculty names, class numbers or the slide author's name.
- Extract text locally first (python-pptx / pdftotext; scan script pattern in baeee101 `tools/m3-scan.py`). Render slides/pages to small PNGs and look in batches of ~10 ONLY where a
  picture or table matters. Keep a `src/<module>/source-notes.md` transcription for image-heavy sources.
- Figures: draw with SVG GENERATORS (`tools/figs/<module>a.js`, reuse the m2a helpers), 600-wide viewBox, text size >= 22, classes `dt`/`ds`/`df`. Gemini's SVGs are NOT usable
  (disconnected circuits, wrong labels): use Gemini for QUESTIONS only. Check figures in batches (one phone-width screenshot for many).
- Numbers: write `tools/check-<module>.js` and script-check EVERY number/formula/answer. Hardest on anything Gemini flagged.
- Questions: Gemini (Claude in Chrome, my Pro account, gemini.google.com) drafts them (new chat per batch; insert the prompt with `document.execCommand('insertText')`, press Return
  or click the send arrow at about (1190,477) twice; read results by parsing the code block JSON into a <pre> then get_page_text; ask for plain JSON, no SVG). Claude rewrites them in
  house style (SPEC section 2), fixes distractors and checks numbers. For short sets Claude writing directly is cheaper. Include harder multi-step questions.
- Widgets: at most 5 per module, highest-value topics first, each played to the end in the browser, ending on a result screen, theme-aware, 375 px.
- Past papers (when I send them): English-site format (`content/papers-free.js`), every question typed out with marks/CO/BL, model answers using the notes' own figures
  (`<figure data-fig="id">`), `note trap`/`note exam` boxes, `asked` map for the badges, set `exam:'fat'` on FAT papers so the mock FAT lists them. Gemini types out photos, Claude checks every symbol.
- Usage rules (mine): before EVERY step post "The limit is now at X%" (mcp__ccd_session_mgmt__get_usage, 5-hour window) and STOP at 90% (background agents count). "Opus Plan": Opus plans,
  Sonnet does routine steps, never anything cheaper than Sonnet (no Haiku, not even for subagents). Tell me the real percent cost after the first topic of each module.
  Rough cost guide: ~1.6k tokens per figure for circuit-style diagrams, ~3-4k for drawing/geometry-heavy ones; one module of notes+figures is about 15-40% of a window.
- Before any summary: `node tools/build.js`, `node tools/validate.js --all`, `node tools/qa.js` and `node tools/qa.js --free`, all clean. Node for repo files (Python only to render PDFs/PPTX into src/).
  Write files with the Write tool; bash heredocs with backticks break.

## 4. Local testing, git, deploy
- Test on 127.0.0.1 only, never the live DB: `node tools/fakeredis.js` (port 5288), then `env PAYWALL=1 DEV_LOGIN=1 ADMIN_KEY=testkey UPSTASH_REDIS_REST_URL=http://127.0.0.1:5288 UPSTASH_REDIS_REST_TOKEN=x node tools/serve.js app <port>`
  in the background with Bash, then preview_start {url}. The preview tool's launch.json names may start another repo's servers: don't rely on them.
- Commit locally as you go (end commits with the attribution line the system gives). Never push until I type "push". After a push: confirm Vercel READY, then delete older deployments (keep production)
  from the signed-in Chrome tab via the Vercel API.
- NEW private GitHub repo (account sxiddy) and NEW Vercel project (team siddharth-uwu, Hobby; at most 12 files in api/, `_` files are helpers). Ask me before creating either.
- Setup that worked for baeee101 (repeat it, I type every secret, you never type or paste one): connect the shared Upstash DB (`upstash-kv-carmine-jacket`; the code reads KV_REST_API_URL/TOKEN) in
  Vercel -> Storage -> Connect Project (I click the final button); env vars SESSION_SECRET (random 96 hex), ADMIN_KEY, REVIEW_CODE, GOOGLE_CLIENT_ID (public; the shared "Web client 1" in Google Cloud project
  BACHY105 Notes, account authuser=3) and optional STUDENT_DOMAIN (default vitstudent.ac.in); add `https://<slug>.vercel.app` as an authorised JavaScript origin and `https://<slug>.vercel.app/api/login`
  as a redirect URI on that client; redeploy; then I open /admin, enter the ADMIN_KEY myself and turn sign-in on (site stays free). Verify from outside with curl: /api/stats with x-admin-key (200 vs 401),
  reviewer login (review@<slug> + REVIEW_CODE gives a cookie), /api/login with a fake token returns 401 cleanly, /api/session shows signin true and the client id. A real student Google login I test myself.
- Never accept terms, change payment/account settings, create accounts, enter passwords or secrets, or send anything outside the repo, Vercel and Google client config without asking me first.
- Times in IST, dd-mm-yyyy hh:mm AM/PM.

## 5. Keep a plan file
`.claude/WORKPLAN.md` (gitignored) with decisions, sources, done/next, and the state at the end of each session, plus a short `.claude/CLAUDE.md` with the always-on rules above
(copy baeee101's and adapt names), so "continue the <subject> site" always works from a fresh session. First step after my answers: write both files, commit the rebranded engine, run build/validate/qa clean, then start module 1.
