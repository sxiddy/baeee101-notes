SUMMARY({
  module: 'm3',
  tldr: `<p>Below about <b>100 nm</b>, materials change because of two things: a huge <b>surface area to volume ratio</b> and <b>quantum confinement</b>. That is why nano gold is red or green, melts lower and catalyses reactions, and why a quantum dot's colour depends on its size. You make nanomaterials top-down (milling) or bottom-up (sol–gel). The second half is liquid coolants: choose one by heat properties, electrical conductivity, flammability, toxicity, compatibility, environment and cost.</p>`,
  storyline: [
    { title: 'Scale', html: `<p>At least one dimension under 100 nm; classify as <b>0D–3D</b>.</p>` },
    { title: 'Why it differs', html: `<p><b>Surface area</b> and <b>quantum effects</b>, shown clearly by bulk vs nano gold.</p>` },
    { title: 'How to make it', html: `<p><b>Top-down</b> milling or <b>bottom-up</b> sol–gel.</p>` },
    { title: 'Quantum dots', html: `<p>Size tunes the band gap and so the colour.</p>` },
    { title: 'Coolants', html: `<p>Match the fluid to the job using the seven requirements.</p>` }
  ],
  bigIdeas: [
    { title: 'Nanomaterials', topic: 'm3-nanomaterials', html: `<p>At least one dimension <b>&lt; 100 nm</b>; 1 nm = 10<sup>−9</sup> m ≈ 10 atoms. Engineered nanomaterials appear in sunscreens (TiO<sub>2</sub>), dental fillers (silica), coatings and medicine.</p>` },
    { title: 'Classes', topic: 'm3-nano-classes', html: `<p><b>0D</b> dots and particles, <b>1D</b> wires and tubes, <b>2D</b> films, <b>3D</b> bulk built from nano units.</p>` },
    { title: 'Bulk vs nano gold', topic: 'm3-nano-gold', html: `<p>Nano gold is never gold-coloured: <b>SPR</b> gives 25 nm red, 50 nm green, 100 nm orange. Melts ~940 °C vs ~1080 °C; a very good catalyst.</p>` },
    { title: 'Why nano differs', topic: 'm3-why-nano', html: `<p>Cutting a 1 cm cube: area <b>6 → 12 → 18 cm²</b>, volume fixed. Quantum confinement gives discrete levels and a wider gap. Fewer defects mean higher strength.</p>` },
    { title: 'Top-down vs bottom-up', topic: 'm3-synthesis', html: `<p><b>Top-down</b> breaks bulk down (milling, etching, ablation). <b>Bottom-up</b> assembles atoms (sol–gel, CVD, chemical reduction).</p>` },
    { title: 'Mechanical milling', topic: 'm3-milling', html: `<p>~50 µm powder plus steel or WC balls in a shaken vial. <b>High output</b>, but 100–200 °C hot spots and <b>contamination</b> (over 10% beyond 30 h).</p>` },
    { title: 'Sol–gel', topic: 'm3-sol-gel', html: `<p>Metal alkoxide → <b>hydrolysis</b> → <b>condensation</b> (M–O–M) → aging → drying → calcination. Low temperature, monosized particles, slow.</p>` },
    { title: 'Quantum dots', topic: 'm3-quantum-dots', html: `<p>2–10 nm semiconductor particles (CdSe, CdS, InP). <b>Smaller = bluer</b>, larger = redder; the band gap falls as size grows.</p>` },
    { title: 'QD uses', topic: 'm3-qd-uses', html: `<p>Made by high-temperature, hydrothermal, microwave or ultrasonic routes. Used in <b>QD-OLED displays</b>, solar cells, bio-imaging, lighting and sensors.</p>` },
    { title: 'Coolant requirements', topic: 'm3-coolants', html: `<p>Chips reach <b>1000 W/cm²</b>. Check heat properties, electrical conductivity, flammability (flash point &lt; 93 °C), toxicity, Cu/Al compatibility, GWP/ODP and cost.</p>` },
    { title: 'Coolant types', topic: 'm3-coolant-types', html: `<p>Water, DI water + inhibitors, water–glycol, K formate/acetate (−70 °C), and <b>dielectric</b> fluids (HFE, PFC) for immersion cooling.</p>` }
  ],
  compare: [
    { title: 'Milling vs sol–gel', html: `<table class="tbl"><thead><tr><th></th><th>Mechanical milling</th><th>Sol–gel</th></tr></thead><tbody><tr><td>Approach</td><td>Top-down</td><td>Bottom-up</td></tr><tr><td>Strength</td><td>High production rate</td><td>Monosized particles, low temperature</td></tr><tr><td>Weakness</td><td>Contamination, hard to hit size</td><td>Very slow, agglomeration</td></tr></tbody></table>` },
    { title: 'Coolant choice', html: `<table class="tbl"><thead><tr><th>Coolant</th><th>Good at</th><th>Watch out</th></tr></thead><tbody><tr><td>Water</td><td>Heat transport, cheap</td><td>Freezes, conducts</td></tr><tr><td>Water–glycol</td><td>Low FP, high BP</td><td>Toxicity (ethylene glycol)</td></tr><tr><td>K formate/acetate</td><td>FP −70 °C, less corrosive</td><td>Cost</td></tr><tr><td>HFE</td><td>Dielectric, non-flammable, low GWP</td><td>Cost</td></tr><tr><td>PFC</td><td>Dielectric, zero ODP</td><td>High GWP</td></tr></tbody></table>` }
  ],
  numbers: [
    { value: '< 100 nm', what: 'Nanoscale limit' }, { value: '1 nm = 10⁻⁹ m', what: 'About 10 atoms side by side' },
    { value: '50,000–100,000 nm', what: 'Human hair diameter' }, { value: '25 / 50 / 100 nm', what: 'Gold in glass: red / green / orange' },
    { value: '~940 °C', what: 'Nano gold melting point (bulk ~1080 °C)' }, { value: '6 → 12 → 18 cm²', what: 'Area of a cube cut into 1, 8, 27 pieces' },
    { value: '> 30 h', what: 'Milling time where contamination exceeds 10%' }, { value: '2–10 nm', what: 'Quantum dot size' },
    { value: '1000 W/cm²', what: 'Heat flux from dense chips' }, { value: '93 °C', what: 'Flash point below which a liquid counts as flammable' },
    { value: '−70 °C', what: 'Freezing point of K formate/acetate solutions' }
  ],
  traps: [
    `<p>Smaller quantum dot = <b>bluer</b>, not redder.</p>`,
    `<p>A 3D nanomaterial is <b>not</b> nano in any dimension; it is built from nano units.</p>`,
    `<p>"PFC and HFE are inflammable" on the slide means <b>non-flammable</b>.</p>`,
    `<p>DI water still needs <b>corrosion inhibitors</b>.</p>`,
    `<p>PFC has zero ODP but <b>high GWP</b>; HFE is low on both.</p>`
  ]
});
