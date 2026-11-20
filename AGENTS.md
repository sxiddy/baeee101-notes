# BAEEE101 Notes (Basic Engineering study site) — start here

When the owner says "continue the basic engineering site" (or similar): read `.Codex/WORKPLAN.md` (state, decisions,
next steps) and the hand-over prompt `C:\Users\Siddharth D\Downloads\basic-engineering-prompt.md`, then carry on with
the first unchecked item under "Next". Don't re-explain; just say in one line what you're picking up.

## Always-on rules (owner's)
- Before EVERY step post "The limit is now at X%" (mcp__ccd_session_mgmt__get_usage, 5-hour window). STOP at 90%.
  Background agents count too: don't let them run past 90% (that spills into paid extra usage).
- Opus Plan (owner, 06-10-2026): Opus plans, Sonnet does the routine steps. Never anything cheaper than Sonnet
  (no Haiku), including for subagents.
- **Gemini drafts, Codex checks** (prompt §3): Gemini (Codex in Chrome, owner's Pro account, gemini.google.com)
  drafts notes, questions, flashcards and diagram SVGs, several topics per prompt; Codex verifies against the source,
  fixes, and script-checks every number. Don't hand whole chunks to Codex subagents (cost test 06-10-2026: a Codex
  writer chunk ≈ 12–15 % of a 5-hour window; Gemini 6 questions + checking ≈ 1 %). Insert prompts with
  `document.execCommand('insertText')` into the Gemini box and read results with javascript_tool (long outputs get
  truncated: read in parts or field by field).
- Check SVG diagrams in batches (one phone-preview screenshot for many figures).
- Before any summary: `node tools/build.js`, `node tools/validate.js --all`, `node tools/qa.js` and `node tools/qa.js --free`, all clean.
- Node for repo files (Python only to render PDFs into src/). Write files with the Write tool; bash heredocs with backticks break.
- Local tests on 127.0.0.1 only, never the live DB. The browser preview tool's launch.json names may start the ENGLISH
  repo's servers: run this repo's with Bash in the background (see WORKPLAN) then preview_start {url}.
- Commit locally as you go. Never push until the owner types "push". After a push: confirm Vercel READY, then delete
  older deployments (keep current production) from the signed-in Chrome tab via the Vercel API.
- The owner types every secret. Don't accept terms, change payment/account settings, or send anything outside the repo
  and Vercel without asking. Payments stay OFF (api/_mode.json open). No Razorpay submission.
- Times in IST, dd-mm-yyyy hh:mm AM/PM. Don't touch the chemistry or English repos. Don't start the merged site.
- Never put on the site: registration numbers, faculty names, class numbers, the slide author's name, or the word "slides".
- **One fresh session per module** (owner, 06-10-2026): when a module is done, update WORKPLAN.md, commit, then clear the
  session yourself (mcp__ccd_session_mgmt__clear_session "self") and tell the owner to type "continue the basic engineering site".
