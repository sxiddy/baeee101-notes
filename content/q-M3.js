QUESTIONS({
  chunk: 'M3',
  questions: [
    {
      id: 'm3-q-01', module: 'm3', topic: 'm3-why-nano', type: 'numerical', level: 2,
      q: `<p>A catalyst company grinds a <b>1 cm platinum cube</b> into cubes of 1 mm side. A rival goes further, to cubes of 10 nm. Total volume stays the same in both cases. Compare the total surface areas with the original cube, and say why the rival's catalyst is so much more active.</p>`,
      options: ['1 mm cubes: 60 cm²; 10 nm cubes: 6 × 10⁶ cm² (600 m²)', '1 mm cubes: 6 cm²; 10 nm cubes: 6 cm², surface area does not change', '1 mm cubes: 600 cm²; 10 nm cubes: 60 m²', '1 mm cubes: 12 cm²; 10 nm cubes: 18 cm²'],
      correct: 0,
      answer: `<p>From 6 cm² to <b>60 cm²</b> (1 mm cubes) and to <b>6 × 10<sup>6</sup> cm² = 600 m²</b> (10 nm cubes). Catalysis happens at surfaces, so more area means far more active sites.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>Cube side a = 1 cm, cut into n pieces along each edge</li><li>1 mm: n = 10; 10 nm: n = 10<sup>6</sup></li></ul></div><div class="solve"><div class="eq">A = 6 × (a/n)<sup>2</sup> × n<sup>3</sup> = 6a<sup>2</sup>n</div><div class="eq">n = 10 → 60 cm²; n = 10<sup>6</sup> → 6 × 10<sup>6</sup> cm²</div></div><div class="result"><b>600 m² from one 1 cm³ of metal</b></div></div><p>The slide shows the same trend: 6 → 12 → 18 cm² for 1, 8 and 27 cubes. Higher surface area to volume ratio gives better catalytic efficiency.</p>`,
      points: ['Volume constant, area = 6a²n grows with subdivision', 'SA/V = 6/a rises as a shrinks', 'Catalysis is a surface process', 'One of the two root causes of nano behaviour (with quantum effects)']
    },
    {
      id: 'm3-q-02', module: 'm3', topic: 'm3-nano-gold', type: 'interpret', level: 2,
      q: `<p>A glassmaker adds gold to three batches of glass. One reflects <b>red</b>, one <b>green</b>, one <b>orange</b>. None looks gold. Using the slide data, match the batches to particle sizes and explain why none is golden.</p>`,
      options: null, correct: null,
      answer: `<p>Red ≈ <b>25 nm</b>, green ≈ <b>50 nm</b>, orange ≈ <b>100 nm</b>. Nano gold is never gold-coloured because its colour comes from surface plasmon resonance, which depends on size and shape.</p>`,
      explain: `<p>At the nanoscale, light's electromagnetic field drives a collective oscillation of the electrons on the particle surface (surface plasmon resonance). Certain wavelengths are absorbed and others scattered or reflected, and which ones depends on the particle's size, shape, material and the spacing between particles. Bulk gold has free electrons behaving normally, so it looks lustrous yellow.</p>`,
      points: ['Slide values: 25 nm red, 50 nm green, 100 nm orange (reflected)', 'Surface plasmon resonance', 'Colour depends on size, shape, material, spacing', 'Bulk gold: lustrous yellow metal']
    },
    {
      id: 'm3-q-03', module: 'm3', topic: 'm3-nano-gold', type: 'predict', level: 1,
      q: `<p>A jeweller solders two gold pieces at 1000 °C. A materials lab wants to sinter <b>gold nanoparticles</b> into a film. Will the lab need a higher or lower temperature than the jeweller, and why?</p>`,
      options: ['Higher, nano gold melts near 1300 °C', 'Lower, nano gold melts around 940 °C versus about 1080 °C for bulk', 'The same, melting point is a fixed property', 'Nano gold does not melt'],
      correct: 1,
      answer: `<p><b>Lower.</b> The slides give ~940 °C for nano gold against ~1080 °C for bulk gold.</p>`,
      explain: `<p>In a nanoparticle a large fraction of atoms sit at the surface, where they have fewer neighbours holding them in place. Less energy is needed to disorder them, so the melting point drops. This is one of the property changes the slides list in the bulk vs nano gold table.</p>`,
      points: ['Bulk Au ~1080 °C (slide), nano Au ~940 °C', 'Surface atoms are less tightly bound', 'Properties are size dependent at the nanoscale']
    },
    {
      id: 'm3-q-04', module: 'm3', topic: 'm3-nano-classes', type: 'decide', level: 1,
      q: `<p>Classify each by free dimensions: (a) a CdSe quantum dot in a TV, (b) a carbon nanotube in a sports racket, (c) an anti-reflection thin film on spectacles, (d) a bundle of many nanowires packed into a centimetre-sized block.</p>`,
      options: null, correct: null,
      answer: `<p>(a) <b>0D</b>, (b) <b>1D</b>, (c) <b>2D</b>, (d) <b>3D</b>.</p>`,
      explain: `<p>Count how many dimensions are outside the nanoscale. A quantum dot is nano in all three (0D). A nanotube is long in one direction and nano in two (1D). A thin film is nano only in thickness (2D). A bundle of nanowires is large in every direction but is built from nanomaterials (3D).</p>`,
      points: ['0D: all three nano (nanoparticles, colloids, QDs)', '1D: nanowires, rods, tubes', '2D: layers, coatings, thin films', '3D: bulk built from nanomaterials (bundles, dispersions, multilayers)']
    },
    {
      id: 'm3-q-05', module: 'm3', topic: 'm3-synthesis', type: 'decide', level: 2,
      q: `<p>Two orders arrive: (1) a tonne of nano-alloy powder for a car-parts plant, where cost and output matter most; (2) a few grams of uniform, monosized TiO<sub>2</sub> nanoparticles for a research solar cell. Which synthesis route fits each?</p>`,
      options: ['Sol–gel for both', 'Mechanical milling for (1), sol–gel for (2)', 'Sol–gel for (1), mechanical milling for (2)', 'Mechanical milling for both'],
      correct: 1,
      answer: `<p><b>Milling (top-down) for the tonne of alloy, sol–gel (bottom-up) for the uniform TiO<sub>2</sub>.</b></p>`,
      explain: `<p>Mechanical milling is cost-effective with high production rates and is used for nanoalloys and nanocomposites, but it struggles to hit a precise size and picks up contamination. Sol–gel builds metal oxides from metal alkoxides at low temperature and can give monosized particles, but its production rate is very slow. Each method's weakness is the other's strength.</p>`,
      points: ['Milling: top-down, high production rate, cheap', 'Milling cons: hard to reach target size, contamination', 'Sol–gel: bottom-up, metal oxides, monosized particles, low temperature', 'Sol–gel con: very slow production']
    },
    {
      id: 'm3-q-06', module: 'm3', topic: 'm3-milling', type: 'troubleshoot', level: 2,
      q: `<p>A student mills aluminium powder with hardened-steel balls in air for <b>40 hours</b> to "make it extra fine". Analysis shows over 10% iron plus oxide and nitride traces. What went wrong, and how should the run be set up next time?</p>`,
      options: null, correct: null,
      answer: `<p>The run was <b>too long and not inert</b>: tools wore into the powder and air reacted with it.</p>`,
      explain: `<p>The notes warn that working durations above 30 h push milling-tool contamination above 10%, and that trace O<sub>2</sub> and N<sub>2</sub> contaminate the product unless the vial is sealed under inert conditions (for example loaded in a glove box). Acceptable levels are Fe below 1–2% and trace elements below 300 ppm. Next time: shorter milling, an inert atmosphere, and if needed WC-coated or protectively coated tools, accepting that coatings add cost. Also expect 100–200 °C at the impact interphase, which can cause unwanted changes.</p>`,
      points: ['> 30 h milling → tool contamination > 10%', 'Fe from tools, O₂/N₂ from atmosphere', 'Use inert conditions (glove box)', 'Targets: Fe < 1–2%, traces < 300 ppm']
    },
    {
      id: 'm3-q-07', module: 'm3', topic: 'm3-sol-gel', type: 'explain', level: 2,
      q: `<p>A sol–gel batch of a metal alkoxide is mixed with water and left overnight. The next day the runny liquid has turned into a wobbly solid. Explain which chemical steps did this, with the bonds that formed.</p>`,
      options: null, correct: null,
      answer: `<p><b>Hydrolysis</b> then <b>condensation</b>: M–OR groups became M–OH, which linked into M–O–M (oxo) and M–OH–M (hydroxo) bridges, building a network, the gel.</p>`,
      explain: `<div class="eq" data-label="Hydrolysis">–M–OR + H<sub>2</sub>O → –M–OH + ROH</div><div class="eq" data-label="Condensation">–M–OH + HO–M– → –M–O–M– + H<sub>2</sub>O</div><p>As condensation proceeds, polymer-like metal–oxo chains grow and the viscosity rises until the sol sets into a porous gel. It would then be aged (polycondensation continues, porosity decreases), dried to remove water and solvent, and calcined to get the nanoparticles.</p>`,
      points: ['Precursor: metal alkoxide', 'Hydrolysis gives M–OH (sol)', 'Condensation gives M–O–M / M–OH–M bridges (gel)', 'Then aging, drying, calcination']
    },
    {
      id: 'm3-q-08', module: 'm3', topic: 'm3-quantum-dots', type: 'predict', level: 2,
      q: `<p>A display maker needs a CdSe quantum dot that glows <b>blue</b>, but the current batch glows red. Should the next batch be grown larger or smaller, and what happens to the band gap?</p>`,
      options: ['Larger dots, smaller band gap', 'Smaller dots, larger band gap', 'Larger dots, larger band gap', 'Size does not matter, change the element instead'],
      correct: 1,
      answer: `<p><b>Smaller.</b> A smaller dot has a wider band gap, so it emits higher-energy (bluer) light.</p>`,
      explain: `<p>In a quantum dot the electrons are confined, so the energy levels become discrete and the gap widens as the dot shrinks. Emitted photon energy is E = hc/λ, so a bigger gap means a shorter wavelength. The notes: 2–3 nm dots give blue/violet, 5–6 nm dots give red/orange; the band gap decreases and emission red-shifts as size increases.</p>`,
      points: ['Quantum confinement → discrete levels', 'Smaller dot → larger gap → shorter λ (blue)', 'Larger dot → smaller gap → red shift', '2–3 nm blue/violet, 5–6 nm red/orange']
    },
    {
      id: 'm3-q-09', module: 'm3', topic: 'm3-qd-uses', type: 'explain', level: 2,
      q: `<p>A biology lab wants to track three different proteins in one cell at the same time, each with a distinct, sharp colour, under a single light source. Why are quantum dots a better fit than one ordinary dye per protein?</p>`,
      options: null, correct: null,
      answer: `<p>Quantum dots of <b>different sizes</b> give <b>sharp, size-tuned colours</b> from the same material, all bright and stable.</p>`,
      explain: `<p>Because emission depends on the dot's size, three sizes of the same semiconductor give three well-separated, constant-wavelength colours. Their high extinction coefficient makes them bright, and they are used for imaging tissues and cells, diagnostics and drug delivery. The same tunability is why they give vivid colours in QD-OLED displays.</p>`,
      points: ['Emission colour tuned by size', 'Narrow, constant emission wavelength', 'High extinction coefficient (bright)', 'Listed use: bio-imaging, diagnostics, drug delivery']
    },
    {
      id: 'm3-q-10', module: 'm3', topic: 'm3-coolant-types', type: 'decide', level: 2,
      q: `<p>A data centre wants to <b>immerse server boards directly</b> in a liquid. The fluid must not conduct electricity, must not catch fire, and the company has a climate policy. Which coolant family and which member?</p>`,
      options: ['Water–ethylene glycol', 'Deionised water with corrosion inhibitors', 'A dielectric fluorocarbon, preferably HFE (low GWP, zero ODP)', 'Water–CaCl₂ brine'],
      correct: 2,
      answer: `<p><b>Dielectric coolant, preferably a hydrofluoroether (HFE).</b></p>`,
      explain: `<p>Water-based coolants conduct electricity and a spill can damage electronics, so direct contact rules them out; data centres use dielectric coolants for immersion and direct-to-chip cooling. Among fluorocarbons, PFC and HFE are non-flammable (flash point well above the 93 °C cut-off) and have low toxicity. PFC has high GWP, while HFE has low GWP and zero ODP, which fits the climate policy.</p>`,
      points: ['Electronics contact → non-aqueous / dielectric', 'Flammable if flash point < 93 °C; PFC and HFE are not', 'PFC: high GWP, zero ODP', 'HFE: low GWP, zero ODP']
    },
    {
      id: 'm3-q-11', module: 'm3', topic: 'm3-coolant-types', type: 'design', level: 3,
      q: `<p>A frozen-food plant needs a secondary coolant loop that stays liquid down to about <b>−60 °C</b>, sits near food, and runs through steel pipes that the owner does not want corroded. Water–NaCl brine is cheap. What would you recommend instead, and why?</p>`,
      options: null, correct: null,
      answer: `<p><b>Water–potassium formate or acetate</b> solution.</p>`,
      explain: `<p>Salt brines (water–NaCl, water–CaCl<sub>2</sub>) do have low freezing points but are highly corrosive. Water–potassium formate/acetate solutions are less corrosive, reach a freezing point around −70 °C, and are the ones the notes say food, beverage, chemical and pharmaceutical industries use. Plain water would freeze, and toxicity rules out careless use of ethylene glycol near food.</p>`,
      points: ['NaCl / CaCl₂ brines: low FP but highly corrosive', 'K formate/acetate: less corrosive, FP ≈ −70 °C', 'Used in food, beverage, pharma', 'Consider toxicity and material compatibility']
    },
    {
      id: 'm3-q-12', module: 'm3', topic: 'm3-coolants', type: 'interpret', level: 2,
      q: `<p>A gaming-PC builder fills a custom loop with <b>tap water</b> because "water has the best heat properties". Six months later the copper block is corroded and green deposits appear. Which coolant requirements were ignored, and what is the fix?</p>`,
      options: null, correct: null,
      answer: `<p>Ignored: <b>material compatibility</b> (corrosion) and water quality. Fix: <b>deionised water with corrosion inhibitors</b>, or a water–glycol mix with inhibitors.</p>`,
      explain: `<p>Water does have high thermal conductivity, high specific heat and low viscosity. But tap water carries minerals and pathogens. Deionised water is less corrosive, yet air exposure makes it corrosive too, so inhibitors such as phosphates, tolyltriazole or 2-ethylhexanoic acid should be added. Copper and aluminium are the preferred block materials precisely because they conduct heat well and are compatible with most properly treated coolants.</p>`,
      points: ['Tap water: minerals and pathogens', 'DI water less corrosive but still needs inhibitors', 'Inhibitors: phosphates, tolyltriazole, 2-ethylhexanoic acid', 'Wetted material and coolant must be compatible']
    }
  ]
});
