# BACHY105 Notes — shared build spec

A dark, study-first notes app for **Applied Chemistry (BACHY105)**, built from three source decks:

| Module | Source | Title |
|---|---|---|
| `m2` | `src/m2/` (72 slides, PPTX) | Energy Devices |
| `m3` | `src/m3/` (52 slides, PPTX) | Functional Materials (Nanomaterials + Liquid coolants) |
| `m4` | `src/m4/` (38 pages, PDF) | Spectroscopic & Diffraction Techniques (UV-Vis, XRD) |

All paths below are relative to the project root (the folder containing this file).

## Source files you can read

- `src/<m>/text.txt` — extracted text, one block per slide/page (`===== SLIDE n =====` / `===== PAGE n =====`). Lines like `[IMAGE s23_be0fb458.png box=[x,y,w,h]]` mark embedded pictures and where they sit on the slide (fractions of slide width/height). `.wmf` images are equations; transcribe them from the slide render.
- `src/<m>/slides/sNN.png` (m2, m3; 1600×900) and `src/m4/pages/pNN.png` (m4; ~1060×600) — **renders of each slide/page. Always look at these** with the Read tool: many diagrams, tables and equations only exist visually.
- `src/<m>/hi/…` — the same renders at high resolution (used automatically for crops; you don't need to open them).
- `src/<m>/images/…` — embedded pictures pulled out of the file (png/jpg/gif; wmf = equation, not usable).
- `src/<m>/images.json` — per slide/page list of embedded images and boxes.

Text extraction of the PDF tables (pages 6–8) is garbled. Read those pages from the renders.

## What the app is

Sidebar (collapsible) → Home, then Module 2 / 3 / 4 each with its topics and a **Module summary**, then a **Practice** section (question bank listing every question with answers by module and topic, quiz, flashcards, formula sheet, lab calculators, my highlights & notes). A topic page shows a header and **tabs**; each tab is one focused idea. Study features: Recall mode (every `<b>` term is blanked until clicked), Focus mode, highlights, personal notes, progress, search.

Look and feel: dark graphite greys, **white is the highlight**. Body text is soft grey `#b3b3bb`; `<b>` renders bright white. So `<b>` is the single most important tool you have: it marks exactly what a student must remember, and Recall mode blanks it.

---

## 1. Content files (written by content agents)

One file per chunk: `content/chunk-<X>.js`. It is plain JavaScript that calls a global function. **Use backtick template strings for all HTML** (never put a backtick or `${` inside the HTML).

```js
CHUNK({
  chunk: 'B',
  module: 'm2',
  topics: [
    {
      id: 'm2-li-ion',                 // unique, kebab-case, prefixed with module id
      title: 'Lithium-ion batteries',   // page title
      short: 'Li-ion batteries',        // sidebar label, <= 24 chars
      blurb: 'Why lithium, how the cell is built, what happens on charge and discharge, variants, uses, and why they sometimes catch fire.',
      source: 'Slides 20–28',           // where this lives in the deck (use 'Pages 12–24' for m4)
      tabs: [
        { title: 'Why lithium', html: `
          <p class="lead">...</p>
          <p>...</p>
        ` },
        // 3–7 tabs
      ],
      flashcards: [ { front: 'Max voltage of one Li-ion cell?', back: '<b>3.7 V</b>, about 3× a Ni-Cd / NiMH cell (1.3 V).' } ],  // 5–12
      oneLiners: [ 'Li-ion cell voltage ≈ 3.6–3.7 V vs 1.3 V for Ni-Cd/NiMH.' ],   // 4–10 exam one-liners
      formulas: [ { name: 'Discharge (overall)', html: `Li<sub>1-n</sub>CoO<sub>2</sub> + Li<sub>n</sub>C<sub>6</sub> → LiCoO<sub>2</sub> + C<sub>6</sub>`, note: 'Reverse of the charging reaction.' } ]  // equations / formulas worth a formula sheet, may be []
    }
  ],
  figures: [
    { id: 'm2-liion-charge-discharge', src: 'm2/slides/s23.png', crop: [0.03, 0.10, 0.94, 0.88], caption: 'Charging (left) and discharging (right): Li⁺ shuttles between graphite and LiCoO₂ while electrons take the outer circuit.', alt: 'Two Li-ion cells side by side...' },
    { id: 'm2-daniell-cell', src: 'm2/images/s05_714faec4.png', crop: null, caption: '...', alt: '...' }
  ]
});
```

### Figures (the source diagrams)

The user wants **all the diagrams from the decks** in the notes. Every meaningful diagram, schematic, graph, table-as-image, photo of a device/structure/process must appear in some tab. Skip only: logos, slide-number art, pure decoration, duplicate images, and `.wmf` equation images (transcribe those as `.eq` text instead).

- `id`: unique, kebab-case, prefixed with module id (`m3-sol-gel-flow`).
- `src`: relative to `src/`. Either an embedded image (`m2/images/s05_714faec4.png`) or a slide/page render (`m2/slides/s23.png`, `m4/pages/p22.png`). Renders are automatically swapped for the high-res version when building, so crops stay sharp.
- `crop`: `null` (use whole image) or `[x, y, w, h]` as fractions of the source image (0–1). Use the `box` numbers from `text.txt` / `images.json` as a starting point when cropping a render around an embedded picture. When a diagram is made of several shapes/pictures plus labels (very common), crop the **slide render** so labels are kept. Cut off slide titles, page numbers and unrelated text.
- Prefer the embedded image when it is the whole diagram and has no labels outside it; prefer a render crop when labels/arrows sit on the slide around it.
- Place in HTML with `<figure data-fig="m2-daniell-cell"></figure>` (empty; the app fills image + caption). A figure may be used once.
- Build & check: `node tools/fig.js content/chunk-B.js` writes `tmp/preview/<id>.png` for every figure. **Open each preview with Read and confirm the crop is right** (nothing cut off, no slide title, no page number). Fix and rebuild until clean.
- Captions: one or two plain sentences that say what to notice, not "Figure showing...".

### Tab HTML vocabulary

Only these tags: `p h3 h4 b em sub sup br ul ol li table thead tbody tr th td div span figure details summary small code`. Only these classes/attributes:

| Markup | Use |
|---|---|
| `<p class="lead">` | First paragraph of a tab: the idea in 1–2 sentences. At most one per tab. |
| `<p>`, `<ul>`, `<ol>` | Normal text. Keep list items short (one line where possible). |
| `<b>` | **Must-remember** term, value or phrase. Rendered white; blanked in Recall mode. Bold a noun phrase or number, never a whole sentence. Roughly one per sentence or bullet, not more. Do not use `<strong>`. |
| `<h3>` | Sub-heading inside a tab (use sparingly; tab title is already the heading). |
| `<div class="eq">…</div>` | A displayed equation / reaction. Optional `data-label="At anode"`. Use `→`, `⇌`, `⟶`, `Δ`, `°`, `<sub>`, `<sup>` (e.g. `Zn → Zn<sup>2+</sup> + 2e<sup>−</sup>`). One reaction per `.eq`. |
| `<span class="frac"><span>top</span><span>bottom</span></span>` | Stacked fraction inside `.eq` (e.g. Nernst `0.0591/n`, Scherrer `Kλ/(β cos θ)`). |
| `<table class="tbl">` | Comparisons (with `<thead>`). Great for "A vs B vs C". |
| `<div class="kv"><div><span>Label</span><b>Value</b></div>…</div>` | Spec sheet / fact grid (operating temperature, electrolyte, efficiency…). |
| `<div class="vs"><div class="side"><h4>…</h4>…</div><div class="side"><h4>…</h4>…</div></div>` | Two-up contrast (2 or 3 `.side`). |
| `<ol class="steps"><li><b>Step name</b> what happens</li>…</ol>` | A real process/sequence (numbered, animated). Only for true sequences. |
| `<div class="chips"><span class="chip">…</span>…</div>` | Short example lists (materials, applications). |
| `<div class="note why">` | Intuition: the reason behind a fact. |
| `<div class="note exam">` | How this gets asked / what to write in an exam. |
| `<div class="note trap">` | A common mix-up. |
| `<div class="note heads-up">` | The slides give a value/statement that differs from the textbook standard. Keep the slide's version in the main text (it's what the exam expects) and explain the standard value here. |
| `<div class="note example">` | A named example / case. |
| `<div class="worked"><div class="given">…</div><div class="solve">…</div><div class="result">…</div></div>` | Worked numerical: given values, steps (use `<p>` / `.eq` inside), boxed result. |
| `<div class="mnemonic">` | A memory hook (only if genuinely useful). |
| `<details class="more"><summary>…</summary>…</details>` | Optional extra depth, collapsed. |
| `<figure data-fig="id"></figure>` | Source diagram (see Figures). |
| `<div data-viz="id"></div>` | Interactive/animated diagram from the list in §3. Place it where it explains the text around it. Each viz at most once across the whole app. |

Notes (`.note`) take a `<p>` or plain text inside; the app adds the label. Do not use inline styles, ids, other classes, links, images, or emoji.

### Writing style (important: the user explicitly does not want AI-sounding text)

Write like the sharpest student in the class explaining it to a friend the night before the exam: plain words, short sentences, concrete, confident, a little warm. Concise, but **nothing from the source is dropped**.

- Every source fact must survive: every definition, list item, example, material, number, unit, equation, advantage, disadvantage, application, named person/year. Compress wording, not content. Merge repeated slides.
- Order inside a topic: what it is → how it works → why it behaves that way → where it's used / pros & cons → how it's examined.
- Explain the *why* when the source only states the *what*, briefly and correctly (e.g. why electrons can't cross the electrolyte, why a smaller quantum dot emits bluer light). Keep added explanation accurate to standard chemistry; do not invent facts, numbers or examples that contradict the source.
- Use tables, `.kv`, `.vs`, `.steps`, `.chips` to replace walls of text. A tab should be readable in 1–3 minutes.
- Chemistry formatting: H<sub>2</sub>O, Zn<sup>2+</sup>, e<sup>−</sup>, 10<sup>−9</sup> m, °C, Å, λ, θ, ε, ΔG < 0. Use the real minus sign − in charges/exponents. Use en dash for ranges (3–7).
- Banned: "delve", "crucial", "pivotal", "vital role", "landscape", "realm", "harness", "leverage", "seamless", "robust", "unlock", "game-changer", "In summary", "In conclusion", "In essence", "It's worth noting", "It is important to note", "Let's dive", "Moreover", "Furthermore", "Additionally", "not only … but also", "isn't just … it's", rhetorical questions as openers, em-dash (—) asides, emoji, exclamation marks, "Imagine…" openers. Headings/tab titles are plain nouns ("Why lithium", "Charge & discharge"), not clever.
- Voice: second person is fine ("you'll see", "notice that"). No hedging filler.
- Known source slips (keep source value in text, explain in a `.note heads-up`): e.g. Si band gap given as 1.0 eV (slide 8) and 1.23 eV (slide 47) vs standard 1.12 eV; "Particle ≤ grain ≤ crystallite < unit cell" (inequality printed backwards); Scherrer example states k = 0.9 but computes with 0.94; Bragg example writes d = 3.69×10⁻¹⁰ **cm** (should be m, i.e. 3.69 Å); W Kα listed as 2.13 Å (standard ≈ 0.21 Å); "PFC and HFE are inflammable" (meaning non-flammable); nano gold "semiconductor, band gap 3.4 eV". Check each against what you actually see in the slides; add any other slips you find.

---

## 2. Questions files (written by question agents)

`content/q-<X>.js`:

```js
QUESTIONS({
  chunk: 'B',
  questions: [
    {
      id: 'm2-b-01',
      module: 'm2',
      topic: 'm2-fuel-cells-sofc',          // a topic id from the chunk (or 'summary' for module-wide/cross questions)
      type: 'decide',                        // decide | predict | explain | troubleshoot | design | numerical | interpret
      level: 2,                              // 1 warm-up, 2 solid, 3 stretch
      q: `<p>A steel plant wants on-site power from its <b>coal gas</b> (H<sub>2</sub> + CO with traces of sulphur) and also needs process heat. The engineers are choosing between a PEMFC stack and an SOFC stack. Which should they pick?</p>`,
      options: [ 'PEMFC: it starts fast and runs cool', 'SOFC: it takes CO as fuel, tolerates some sulphur and its hot exhaust can be reused', 'Either: both need pure H₂', 'Neither: fuel cells cannot use coal gas' ],  // 4 options or null
      correct: 1,                            // index into options, or null
      answer: `<p><b>SOFC.</b> ...one or two sentence verdict...</p>`,
      explain: `<p>...the reasoning, tied to specific facts from the notes...</p>`,
      points: [ 'SOFC runs at 800–1000 °C and accepts H₂ and CO', 'Relatively tolerant of small amounts of sulphur → usable with coal gas', 'PEMFC needs pure H₂ (Pt catalyst poisoned; low temperature)', 'High-grade waste heat → cogeneration' ]   // what an examiner wants to see
    }
  ]
});
```

- **Understanding-based, not recall.** Never "Define…", "List…", "State…", "Differentiate A and B", "What is…". Instead put the student in a situation: an engineer choosing between two systems, a lab result to interpret, a device that misbehaves, a design constraint, a "what happens if we change X", a numerical embedded in a real context. The student has to use the concept to answer.
- Example of the right flavour: "A power plant has two candidate systems… based on this, which fuel cell should it pick and why?"
- Answers must be correct and consistent with the notes/source. The verdict comes first, then reasoning, then `points`.
- Numericals: show full working in `explain` (use `.worked` blocks), with units, sensible significant figures, and the source's conventions (e.g. 0.0591/n at 298 K, 1 eV = 96.48 kJ/mol, c = 3.00×10⁸ m s⁻¹, h = 6.626×10⁻³⁴ J s).
- Give `options` (4, one correct, plausible distractors that reflect real misconceptions) to roughly **half** the questions; the rest are open (options: null, correct: null).
- Same HTML vocabulary as tabs. Same style rules.

---

## 3. Interactive diagrams (`data-viz` ids)

Built by viz agents in `app/js/viz/<file>.js` using `app/js/viz-core.js` (read it). Content agents place them with `<div data-viz="id"></div>`. Valid ids:

**Module 2 — `viz-m2a.js`**
- `cell-galvanic` — Daniell cell (Zn | ZnSO₄ ‖ CuSO₄ | Cu, salt bridge KCl). Animated e⁻ through the wire Zn → Cu, Zn²⁺ leaving the Zn rod, Cu²⁺ plating on Cu, salt-bridge ions (K⁺ toward the Cu side, Cl⁻ toward the Zn side), voltmeter 1.10 V. Toggle **Galvanic (ΔG < 0)** / **Electrolytic (ΔG > 0)**: an external supply drives the reverse reaction, electrons reverse, labels for anode/cathode and electrode sign update (galvanic: anode −, cathode +; electrolytic: anode +, cathode −; oxidation always at anode).
- `nernst` — Nernst calculator. Presets: Daniell (Zn/Cu, 1 M each, n = 2) and the slide example Cd | Cd²⁺ (0.01 M) ‖ Cu²⁺ (0.5 M) | Cu with E°: Cd −0.40 V, Cu +0.34 V. Inputs: E°(cathode), E°(anode), n, [anode ion], [cathode ion]. Output: E°cell = E°cathode − E°anode; Ecell = E°cell − (0.0591/n) log([anode ion]/[cathode ion]) with the steps shown and a gauge. Cd/Cu preset gives ≈ 0.79 V.
- `bands` — Band diagrams for conductor (overlapping bands), semiconductor (small gap ≈ 1 eV), insulator (large gap). Temperature slider 0–600 K: at 0 K the semiconductor has no electrons in the conduction band (acts as insulator); as T rises electrons hop across the gap, leaving holes; a conductivity meter rises for the semiconductor (and falls slightly for the metal).
- `doping` — 2-D silicon lattice (each Si shares 4 bonds). Modes: Intrinsic (a few thermally made e⁻/hole pairs, equal numbers), n-type (a P atom with a spare 5th electron that wanders; majority carrier e⁻), p-type (a B atom with a missing bond = hole that hops; majority carrier hole). Optional "apply field": electrons drift one way, holes the other.
- `zone-refining` — A rod with a ring heater travelling along it; the molten zone carries impurity dots and dumps them at the far end; pass counter; purity bar climbs with passes; crystallised pure region behind the zone.
- `czochralski` — Crucible of molten Si (heater around), seed crystal on a rotating rod dipped in, then slowly pulled up while rotating, growing a single-crystal ingot (boule). Labels: seed, pull & rotate, melt, crucible, heater, single crystal. Pull-speed slider optional.

**Module 2 — `viz-m2b.js`**
- `cell-types` — Classifier for primary / secondary / flow-&-fuel cells. Click an example (Leclanché dry cell, alkaline cell, lithium primary, lead–acid, Ni–Cd, NiMH, Li-ion, H₂–O₂ fuel cell, SOFC) and it flies into its bucket with the reason (reaction reversible? reactants stored inside or fed continuously?).
- `liion` — Graphite layers | separator + electrolyte | LiCoO₂ layers. Toggle **Charge / Discharge**. Charge: Li⁺ leaves LiCoO₂, crosses to graphite; electrons go from the LiCoO₂ side through the charger to graphite. Discharge: Li⁺ leaves graphite back into LiCoO₂; electrons flow graphite → bulb → LiCoO₂. Show the half-reactions for the current mode and a state-of-charge bar. Note that during charging the LiCoO₂ electrode is where oxidation happens.
- `fuelcell` — Toggle **PEMFC / SOFC**. PEMFC: H₂ in at anode → 2H₂ → 4H⁺ + 4e⁻ on Pt; H⁺ crosses the Nafion membrane to the cathode; e⁻ through an external load; O₂ + 4H⁺ + 4e⁻ → 2H₂O, water leaves on the cathode side; < 80 °C. SOFC: O₂ + 4e⁻ → 2O²⁻ at the LSM cathode; O²⁻ crosses the YSZ ceramic to the Ni–YSZ anode; H₂ + CO + 2O²⁻ → H₂O + CO₂ + 4e⁻; exhaust leaves on the anode side; 800–1000 °C. Readout card: electrolyte, mobile ion, temperature, fuel, catalyst/electrodes, efficiency.
- `pn-junction` — Silicon PV cell cross-section: n-layer (top), p-layer, depletion region with built-in field. Photons arrive, create e⁻–hole pairs; field sweeps e⁻ to the n side → top contact → external load → back contact; holes to the p side. Light-intensity slider changes photon rate and current.
- `dssc` — Grätzel cell step-through (autoplay + step buttons): (1) photon passes through glass/FTO and TiO₂ and is absorbed by dye: Dye + hν → Dye*; (2) injection: Dye* → Dye⁺ + e⁻ into TiO₂ conduction band; (3) e⁻ travels through TiO₂ to the FTO and around the external circuit (bulb) to the counter electrode (Pt / graphite); (4) I₃⁻ + 2e⁻ → 3I⁻ at the counter electrode; (5) 3I⁻ reach the dye and regenerate it: 2Dye⁺ + 3I⁻ → 2Dye + I₃⁻. Highlight the active part at each step.
- `solar-routes` — Interactive tree of solar-energy conversion methods from slide 44: Photosynthesis (plants, visible, η 2–4%), Water heaters (flat plate, tube; IR), Photovoltaic cells (p/n Si, GaAs; visible; η 12–26%), Chemical routes → D1 Biomimetism (mimicking photosynthesis via chemicals), D2 PEC cells → (a) LJSC: (i) Sc/Elect/M η 13–14%, (ii) Photogalvanic M/Elect/M η 0.01%; (b) Photoelectrosynthesis (PES) cells: (i) photoassisted electrolysis η 13.3%, (ii) photoassisted electrosynthesis (CO₂ → CH₃OH, N₂ → NH₃). Clicking a node shows detail; plus an efficiency bar comparison.

**Module 3 — `viz-m3a.js`**
- `nano-scale` — Logarithmic ruler from 1 mm down to 0.1 nm. Objects placed at scale: human hair 50,000–100,000 nm, red blood cell ~7,000 nm, bacterium ~1,000 nm, virus ~100 nm, quantum dot 2–10 nm, DNA width ~2 nm, 1 nm = 10 atoms side by side, atom ~0.1 nm. Nanoscale band (1–100 nm) highlighted. Zoom slider / drag.
- `nano-dims` — 0D / 1D / 2D / 3D selector: shows the shape (dot/particle, wire/rod/tube, sheet/film, bundle/dispersion/multilayer) with dimension arrows coloured by whether they are < 100 nm, and examples from the slides.
- `sa-volume` — Cube cut into n³ smaller cubes (n slider 1–10, isometric drawing animates the cuts). Readouts: volume stays 1 cm³, total surface area = 6n cm² (n = 1 → 6, 2 → 12, 3 → 18 as on the slide), SA/V ratio. Extra: "jump to nanocubes" 10 nm → n = 10⁶ → 6×10⁶ cm² = 600 m².
- `gold-color` — Bulk gold vs nano gold. Size slider for gold nanoparticles in glass using the slide's values (25 nm → red, 50 nm → green, 100 nm → orange, reflected); SPR animation: light's E-field makes the surface electron cloud slosh back and forth against the metal core. Toggle to bulk: shiny yellow, melts ~1080 °C (slide), vs nano ~940 °C. Look at slides 11–14 for the exact colours/labels.
- `topdown-bottomup` — Split scene: left, a bulk block is broken → pieces → powder → nanoparticles (milling, lithography style); right, atoms/molecules assemble → clusters → nanoparticles (chemical/biological). Play/replay.

**Module 3 — `viz-m3b.js`**
- `ball-mill` — Sealed vial with hardened-steel / WC balls tumbling and hitting powder (~50 µm start). Milling-time slider: particle size drops, temperature at impacts 100–200 °C, contamination (Fe) rises; past >30 h a warning shows milling-tool contamination >10%.
- `sol-gel` — Stepper: precursor M(OR)ₙ → hydrolysis (M–OR + H₂O → M–OH + ROH) → sol → condensation (M–OH + HO–M → M–O–M + H₂O) forming oxo/hydroxo bridges → gel network → aging (polycondensation continues, porosity changes) → drying (solvent removed) → calcination → nanoparticles. Particles/network animate per step.
- `confinement` — Energy levels vs particle size: bulk = continuous bands; shrink the size slider and the bands break into discrete levels and the gap widens (metal → semiconductor → insulator trend). Mark when size approaches the electron's de Broglie wavelength.
- `qd-size` — Quantum dot size slider 2–10 nm: dot grows, emitted colour moves from violet/blue (2–3 nm, high energy) to orange/red (5–6 nm+, low energy); band gap/levels diagram updates; readout of approximate emission wavelength and band gap (label as illustrative, CdSe-like). A row of vials glowing violet → red.
- `coolant-picker` — Scenario chooser (car engine in a cold climate; data-centre immersion cooling; laptop cold plate; food/pharma chiller down to −70 °C; general lab chiller) and constraint toggles (touches live electronics? below 0 °C? fire risk? environmental limits? budget?). Recommends a coolant class (water, deionised water + corrosion inhibitors, water–glycol, water–potassium formate/acetate, dielectric fluids e.g. HFE/PFC) with reasons from the requirement list: thermophysical properties, electrical conductivity, flammability (flash point < 93 °C = flammable), toxicity, material compatibility (Cu, Al), environment (GWP, ODP), cost.

**Module 4 — `viz-m4a.js`**
- `em-spectrum` — Log-scale spectrum radio → gamma with draggable marker. Readouts: region, λ, ν, E in eV and kJ/mol (1 eV = 96.48 kJ/mol), the molecular effect (nuclear spin, electron spin, rotation, vibration, valence-electron transitions, inner-shell electrons, nuclear) and the technique that uses that region (NMR, ESR/microwave, IR, UV-Vis, XRD, gamma/Mössbauer). Use the table on PDF pages 6–8 for region values and applications. A drawn wave changes wavelength with the marker.
- `wave-calc` — λν = c and E = hν calculator (enter λ with unit, or ν). Shows ν, λ, E (J, eV), region. Presets: the PDF numericals (λ = 5.00×10⁻⁸ m → ν = 6.00×10¹⁵ s⁻¹, UV; ν = 2.80×10²⁰ s⁻¹ → λ = 1.07×10⁻¹² m, gamma).
- `transitions` — MO energy ladder σ, π, n, π*, σ*. Buttons for σ→σ* (100–150 nm, C–H/C–C), n→σ* (150–250 nm, N/O/S lone pairs), π→π* (200–700 nm, unsaturated/aromatic), n→π* (250–500 nm, lone pair + unsaturation). Arrow length shows energy; energy order σ→σ* > n→σ* > π→π* > n→π*. Also a strip showing ε bands: forbidden ≤ 10, partly allowed 10–1000, allowed 1000–100000, highly allowed ≥ 100000.
- `color-wheel` — Complementary colour wheel: pick an absorbed band (or example: methylene blue absorbs 600–700 nm → looks blue; Congo red absorbs ~500 nm green → looks red; chlorophyll absorbs red + blue → looks green) and see the perceived colour and an absorbance curve.
- `beer-lambert` — Cuvette with a light beam. Sliders: concentration c (mol L⁻¹), path length L (cm), ε (L mol⁻¹ cm⁻¹). Shows A = εLc, T = 10⁻ᴬ, %T, beam fading through the cell, and an A-vs-c straight-line plot. "Solve for c" preset: A = 0.70, ε = 8400, L = 1 cm → c = 8.33×10⁻⁵ M.
- `spectrophotometer` — Animated beam path. Toggle single-beam (source → wavelength selector/monochromator → sample → detector → display) vs double-beam (source → monochromator → beam splitter/chopper → sample cell & reference cell → detector → ratio → recorder). Match the labels of the PDF figures on pages 21–22.

**Module 4 — `viz-m4b.js`**
- `xray-tube` — Tube: heated W filament cathode emits electrons (thermionic), accelerated by 25–150 kV to the anode target (Cu/Cr/Mo…), X-rays leave through a window. Toggle mechanism: Bremsstrahlung (electron swerves near a nucleus, loses KE, continuous "white" radiation) vs Characteristic (K-shell electron knocked out; L→K = Kα, M→K = Kβ). Spectrum plot: continuous hump + sharp Kα/Kβ lines. Anode picker with Kα: Cr 2.29 Å, Fe 1.94, Co 1.79, Cu 1.54 (8.04 keV, 1.5406 Å), Mo 0.71.
- `interference` — Two waves and their sum. Phase-difference slider (0 → 2π): in phase → constructive (double amplitude), π → destructive (flat line).
- `bragg` — Crystal planes (rows of atoms, spacing d). Two parallel rays at angle θ reflect from adjacent planes; the extra path (CB + BD = 2d sin θ) is highlighted. Sliders θ, d, λ. Readout 2d sin θ / λ; when it is (close to) an integer n the reflected waves line up and the detector lights (constructive); otherwise they cancel. "Snap to n = 1, 2, 3" buttons.
- `xrd-pattern` — Diffractogram (intensity vs 2θ) with several peaks. Crystallite-size slider (2–100 nm) broadens/narrows the peaks per Scherrer (β = Kλ / D cos θ). Toggle "amorphous": broad hump, no sharp peaks. Hover a peak for 2θ, FWHM, D.
- `xrd-calc` — Two calculators with steps: Bragg (solve for d, θ or λ; preset λ = 0.9 Å, θ = 7°, n = 1 → d ≈ 3.69 Å) and Scherrer (2θ, FWHM°, K, λ → θ, β in radians, D; preset 2θ = 21.61°, FWHM = 2.51°, K = 0.94, λ = 1.5406 Å → D ≈ 3.22 nm).
- `size-hierarchy` — Nested zoom: particle (measured by TEM) → grains (SEM) → crystallites (XRD, Scherrer) → unit cell. Click a level to zoom in. Shows the correct order: particle ≥ grain ≥ crystallite > unit cell.

---

## 4. Design tokens (single dark theme)

```
--bg #151517      page         --text #b3b3bb   body text
--bg-2 #1b1b1e    sidebar      --text-dim #80808a
--surface #202024 cards        --text-faint #5c5c66
--surface-2 #27272c raised     --white #f4f4f6  highlights / headings
--line #2f2f35    borders      --line-2 #3a3a41
Science colours (diagrams): electron #7cc0ff · cation / Li⁺ / H⁺ #ffb56b · anion / O²⁻ #c7a4ff · hole #ff8da1 · photon #ffe07a · heat #ff7b5c · good #86d4a9 · warn #e9c46a · bad #f08c8c · metal #9aa0a8 · graphite #5a5f66
Fonts: display "Source Serif 4" (headings), body "Hanken Grotesk", mono "JetBrains Mono" (numbers, labels, readouts)
```

---

## 5. Tooling (use node; Python cannot see this folder on this machine)

- `node tools/validate.js content/<file>.js` — schema, allowed HTML, figure/viz references, style warnings. Get it to **0 errors** and clear the style warnings.
- `node tools/fig.js content/chunk-<X>.js` — builds figures; open `tmp/preview/<id>.png` with Read to check each crop.
- `node tools/viz-snap.js app/js/viz/<file>.js <viz-id> [--wait ms] [--click "button text"] [--set "label=value"] [--select "label=value"] [--out name]` — mounts a diagram headlessly (jsdom), runs its animation, and writes `tmp/viz/<name>.png` of each `svg.viz-svg`, plus a dump of buttons/sliders/readouts/caption and runtime errors. Layout APIs (`getBBox`, `getTotalLength`, `getPointAtLength`) are stubbed to zero there, so compute geometry yourself (parametric paths / polylines) instead of relying on them.
- SVG rendering rules for diagrams: the `svg.viz-svg` root inherits `fill: #b3b3bb`; give every shape an explicit `fill` (`none` for strokes-only). Text inherits the body font (Hanken Grotesk); for numbers/readouts inside SVG use `font-family="JetBrains Mono, ui-monospace, monospace"`. Minimum font-size 13 in a ~640-wide viewBox.
- `node --check <file.js>` for syntax.
