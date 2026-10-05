QUESTIONS({
  chunk: 'M2',
  questions: [
    {
      id: 'm2-q-01', module: 'm2', topic: 'm2-sofc', type: 'decide', level: 2,
      q: `<p>A steel plant wants on-site electricity from its own <b>coal gas</b> (mostly H<sub>2</sub> and CO, with traces of sulphur). It also needs a steady supply of process heat and runs around the clock, so start-up time barely matters. The shortlist is a PEMFC stack or an SOFC stack. Which should it pick?</p>`,
      options: [
        'PEMFC, because it runs cool and starts quickly',
        'SOFC, because it accepts CO as fuel, tolerates some sulphur and gives hot exhaust for cogeneration',
        'Either one, since both run happily on coal gas',
        'Neither, because no fuel cell can use CO'
      ],
      correct: 1,
      answer: `<p><b>SOFC.</b> It is built for exactly this: mixed H<sub>2</sub>/CO fuel, some sulphur, continuous operation and a use for waste heat.</p>`,
      explain: `<p>An SOFC uses a solid YSZ ceramic that carries O<sup>2−</sup> ions at 800–1000 °C. At the anode both fuels are oxidised: H<sub>2</sub> + CO + 2O<sup>2−</sup> → H<sub>2</sub>O + CO<sub>2</sub> + 4e<sup>−</sup>. The high temperature makes it relatively tolerant of small amounts of sulphur, which is why the slides say it can run on coal gas. Its hot exhaust can drive a turbine or supply process heat (cogeneration). The PEMFC works below 80 °C on a Pt catalyst and must be fed pure H<sub>2</sub>. Its one big advantage, fast start-up, does not matter to a plant that never shuts down.</p>`,
      points: ['SOFC fuels: H₂ and CO', 'Relatively sulphur-tolerant, so usable with coal gas', 'PEMFC needs pure H₂ (low temperature, precious-metal electrodes)', 'High-grade waste heat enables cogeneration', 'Long start-up of the SOFC is irrelevant for continuous duty']
    },
    {
      id: 'm2-q-02', module: 'm2', topic: 'm2-pemfc', type: 'decide', level: 2,
      q: `<p>A city bus company wants a fuel cell that can go from cold to full power in minutes several times a day. Refuelling depots can supply <b>high-purity hydrogen</b>. Which fuel cell suits the bus, and what is the one fuel condition they must never relax?</p>`,
      options: null, correct: null,
      answer: `<p><b>PEMFC</b>, provided the hydrogen stays pure.</p>`,
      explain: `<p>A PEMFC runs below 80 °C, so it warms up almost instantly compared with an SOFC that has to reach 800–1000 °C and suffers long start-up times. It uses a Nafion membrane to carry H<sup>+</sup> and platinum-based electrodes. At such low temperature the Pt catalyst is easily poisoned, so the slides insist it runs on pure H<sub>2</sub>. Feeding it reformed gas containing CO would degrade it.</p>`,
      points: ['PEMFC: < 80 °C, fast start', 'SOFC: 800–1000 °C, long start-up, better for stationary power', 'Nafion membrane conducts H⁺', 'Pure H₂ required because of low temperature + Pt electrodes']
    },
    {
      id: 'm2-q-03', module: 'm2', topic: 'm2-electrochemical-cells', type: 'numerical', level: 2,
      q: `<p>A student sets up a Daniell cell but uses <b>0.001 M ZnSO<sub>4</sub></b> and <b>0.1 M CuSO<sub>4</sub></b> instead of 1 M solutions. E°cell = 1.10 V. Will the voltmeter read more or less than 1.10 V at 298 K, and by how much?</p>`,
      options: ['About 1.04 V, lower', 'Exactly 1.10 V, concentration does not matter', 'About 1.16 V, higher', 'About 1.21 V, higher'],
      correct: 2,
      answer: `<p><b>Higher, about 1.16 V.</b> Diluting the product ion (Zn<sup>2+</sup>) relative to the reactant ion (Cu<sup>2+</sup>) pushes the reaction forward.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>Zn | Zn<sup>2+</sup> (0.001 M) ‖ Cu<sup>2+</sup> (0.1 M) | Cu, n = 2</li><li>E°cell = 1.10 V</li></ul></div><div class="solve"><div class="eq">E<sub>cell</sub> = E°<sub>cell</sub> − <span class="frac"><span>0.0591</span><span>n</span></span> log <span class="frac"><span>[Zn<sup>2+</sup>]</span><span>[Cu<sup>2+</sup>]</span></span></div><div class="eq">= 1.10 − 0.02955 × log(0.01) = 1.10 − 0.02955 × (−2)</div></div><div class="result"><b>E<sub>cell</sub> ≈ 1.16 V</b></div></div>`,
      points: ['Correct cell reaction Zn + Cu²⁺ → Zn²⁺ + Cu, n = 2', 'Q = [anode ion]/[cathode ion] = 0.01', 'Log term is negative, so E rises above E°', 'Answer ≈ 1.16 V']
    },
    {
      id: 'm2-q-04', module: 'm2', topic: 'm2-electrochemical-cells', type: 'troubleshoot', level: 1,
      q: `<p>A Daniell cell is assembled with both beakers and a copper wire joining the electrodes, but the student forgot the <b>salt bridge</b>. The voltmeter shows a flicker and then nothing. Explain what went wrong at the ionic level.</p>`,
      options: null, correct: null,
      answer: `<p>The circuit is <b>not closed for ions</b>, so charge piles up and the reaction stops almost at once.</p>`,
      explain: `<p>Zn → Zn<sup>2+</sup> + 2e<sup>−</sup> makes the zinc beaker fill with extra positive charge, while Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu leaves the copper beaker with excess negative (SO<sub>4</sub><sup>2−</sup>) charge. Without a salt bridge (KCl or NH<sub>4</sub>Cl in gelatine) no ions can move to balance this, so the build-up opposes further electron flow within an instant. The bridge maintains charge balance in both half cells and also minimises the liquid junction potential.</p>`,
      points: ['Electrons need a wire, ions need a path too', 'Charge imbalance builds in each half cell', 'Salt bridge: KCl / NH₄Cl in gelatine', 'Keeps charge balance, minimises liquid junction potential']
    },
    {
      id: 'm2-q-05', module: 'm2', topic: 'm2-semiconductors', type: 'predict', level: 2,
      q: `<p>An engineer takes one piece of pure silicon and one piece of copper and heats both from room temperature to 150 °C while measuring their resistance. Predict how each resistance changes and explain the difference.</p>`,
      options: ['Both resistances rise', 'Silicon resistance falls, copper resistance rises', 'Silicon resistance rises, copper resistance falls', 'Neither changes much'],
      correct: 1,
      answer: `<p><b>Silicon's resistance falls; copper's rises.</b></p>`,
      explain: `<p>Silicon is a semiconductor: a nearly full valence band, an empty conduction band and a small gap (≈ 1 eV). Heat promotes more electrons across the gap, creating free electrons and holes, so conductivity rises and resistivity falls. At 0 K none are promoted and silicon behaves as an insulator. Copper already has overlapping bands full of free electrons. Heating adds no carriers, it only makes the lattice vibrate harder and scatter them, so its resistance goes up.</p>`,
      points: ['Semiconductor: small band gap', 'Temperature promotes electrons VB → CB, more carriers', 'Resistivity of semiconductor decreases with temperature', 'Metal: carriers fixed, scattering increases']
    },
    {
      id: 'm2-q-06', module: 'm2', topic: 'm2-semiconductors', type: 'design', level: 2,
      q: `<p>You need a silicon layer in which the <b>majority carriers are holes</b>. The lab stocks phosphorus, arsenic, boron and aluminium. Which dopants would you use, and why do the other two do the opposite?</p>`,
      options: null, correct: null,
      answer: `<p>Use <b>boron or aluminium</b> (trivalent) to make p-type silicon.</p>`,
      explain: `<p>Silicon has four valence electrons, each shared in a bond. A trivalent atom such as B or Al has only three, so one bond around it is short an electron. That gap is a hole, and neighbouring electrons hop into it, making the hole move: holes become the majority carriers (n<sub>h</sub> ≫ n<sub>e</sub>). Phosphorus and arsenic are pentavalent: after four bonds, the fifth electron is left free, giving n-type silicon with electrons as majority carriers.</p>`,
      points: ['p-type = trivalent dopant (B, Al, Ga, In)', 'Missing bond electron = hole', 'n-type = pentavalent (P, As, Sb), spare electron', 'Doping controls and improves conductivity']
    },
    {
      id: 'm2-q-07', module: 'm2', topic: 'm2-semiconductor-purification', type: 'explain', level: 2,
      q: `<p>A silicon ingot has just been zone refined to 99.9999% purity, yet the chip maker still rejects it and sends it for Czochralski pulling. What is still wrong with the zone-refined ingot?</p>`,
      options: ['It still contains too many impurities', 'It is polycrystalline, with randomly oriented crystals of different sizes', 'It is amorphous and has no crystal structure at all', 'Zone refining leaves it n-type'],
      correct: 1,
      answer: `<p>It is pure but <b>polycrystalline</b>. Devices need one continuous single crystal.</p>`,
      explain: `<p>Zone refining works because impurities prefer the molten zone, so a moving heater sweeps them to one end. It says nothing about crystal order, and the product is polycrystalline: many crystals of different sizes with no regularity. In the Czochralski method a single-crystal seed is dipped into the melt and slowly pulled up while rotating, so atoms copy the seed's arrangement and grow one large single crystal (up to 300 mm across and over 250 kg).</p>`,
      points: ['Zone refining = purification (impurities stay in the melt)', 'Product is polycrystalline', 'Czochralski: seed crystal, pull + rotate', 'Gives a single crystal with uniform atomic arrangement']
    },
    {
      id: 'm2-q-08', module: 'm2', topic: 'm2-batteries', type: 'decide', level: 1,
      q: `<p>Match each job to a <b>primary cell, secondary cell or fuel cell</b>: (a) a pacemaker that must never be opened for years, (b) a laptop charged every night, (c) a spacecraft on a long mission that also needs drinking water for the crew.</p>`,
      options: null, correct: null,
      answer: `<p>(a) <b>Primary</b>, (b) <b>secondary</b>, (c) <b>fuel cell</b>.</p>`,
      explain: `<p>A primary cell's reaction is not reversible: it is used once until the reactants are gone, which suits sealed, low-drain devices like pacemakers and watches. A secondary cell (Li-ion, lead–acid, Ni–Cd, NiMH) can be reversed by pushing current in the opposite direction, so it suits daily recharging. A fuel cell keeps producing power as long as reactants are fed in, and an H<sub>2</sub>–O<sub>2</sub> cell's only product is water, which astronauts can drink.</p>`,
      points: ['Primary: irreversible reaction', 'Secondary: reversed by opposite current', 'Fuel cell: reactants supplied continuously, does not store energy', 'H₂–O₂ product is water']
    },
    {
      id: 'm2-q-09', module: 'm2', topic: 'm2-li-ion', type: 'explain', level: 2,
      q: `<p>A phone battery and an old Ni–Cd pack have the same size. The phone battery stores noticeably more energy. Using the chemistry of lithium, explain the two reasons given in the notes.</p>`,
      options: null, correct: null,
      answer: `<p>Lithium is <b>very light</b> and has a <b>very negative reduction potential</b>, which gives high specific energy and about 3.7 V per cell.</p>`,
      explain: `<p>Because lithium is so light, each gram of battery holds more energy (high specific energy density). Because Li<sup>+</sup> has a very large negative standard reduction potential, each cell reaches a maximum of 3.7 V, nearly three times the 1.3 V of Ni–Cd or NiMH. More voltage per cell means more energy in the same volume (higher volumetric energy density) and fewer cells in series.</p>`,
      points: ['Light element → high energy per mass', 'Very negative E° of Li⁺ → high cell voltage', '3.7 V vs 1.3 V (Ni–Cd/NiMH)', 'Higher volumetric energy density']
    },
    {
      id: 'm2-q-10', module: 'm2', topic: 'm2-li-ion', type: 'troubleshoot', level: 3,
      q: `<p>A cheap charger with a faulty cut-off keeps pushing current into a LiCoO<sub>2</sub> phone battery long after it is full. The pack swells and later catches fire. Trace the chain of events the notes describe.</p>`,
      options: [
        'Graphite melts and shorts the cell',
        'Overcharged LiCoO₂ releases O₂, which reacts with the flammable electrolyte and overheats it; hot carbonate electrolyte decomposes to CO₂ and pressure builds',
        'Lithium metal plates the cathode and reacts with water in the air',
        'The separator dissolves in water formed during charging'
      ],
      correct: 1,
      answer: `<p><b>Overcharge → O<sub>2</sub> from LiCoO<sub>2</sub> → reaction with flammable electrolyte → overheating → electrolyte breakdown to CO<sub>2</sub> → pressure and explosion.</b></p>`,
      explain: `<p>The notes list three explosion routes. Overcharging makes lithium cobalt oxide release oxygen, which reacts with the flammable organic electrolyte and heats the cell. On overheating, the carbonate solvent (dimethyl carbonate) decomposes to CO<sub>2</sub>, so pressure builds until the case fails. This is why Li-ion cells need protection circuits against overcharge and deep discharge.</p>`,
      points: ['Overcharging releases O₂ from LiCoO₂', 'O₂ + flammable electrolyte → overheating', 'Dimethyl carbonate → CO₂, pressure build-up', 'Protection circuitry is required']
    },
    {
      id: 'm2-q-11', module: 'm2', topic: 'm2-fuel-cells', type: 'interpret', level: 2,
      q: `<p>A salesperson claims their H<sub>2</sub>–O<sub>2</sub> fuel cell "stores energy like a battery, so you can charge it from solar panels at noon and use it at night". Judge the claim.</p>`,
      options: null, correct: null,
      answer: `<p><b>Misleading.</b> A fuel cell cannot store electricity. It only converts fuel to power while H<sub>2</sub> and O<sub>2</sub> are supplied.</p>`,
      explain: `<p>In a fuel cell, energy is withdrawn continuously as reactants are fed in, and it stops the moment the fuel stops. The notes list "cannot store electricity" as a disadvantage. To use solar power at night you would need a separate step, such as electrolysing water to make and store H<sub>2</sub>, and storing hydrogen is itself hard and hazardous because it is flammable. A secondary battery is what actually stores charge.</p>`,
      points: ['Fuel cell converts, does not store', 'Needs continuous supply of H₂ and O₂', 'Storage of H₂ is a listed problem (flammable)', 'Secondary battery is the storage device']
    },
    {
      id: 'm2-q-12', module: 'm2', topic: 'm2-photovoltaics', type: 'decide', level: 2,
      q: `<p>Two rooftop projects: a satellite panel where every watt per square metre counts and budget is secondary, and a cheap flexible strip to be stuck onto curved bus shelters. Which silicon type suits each?</p>`,
      options: [
        'Amorphous Si for the satellite, single-crystal Si for the shelters',
        'Single-crystal Si for the satellite, amorphous (thin-film) Si for the shelters',
        'Polycrystalline Si for both',
        'Single-crystal Si for both'
      ],
      correct: 1,
      answer: `<p><b>Single-crystal Si for the satellite, amorphous thin-film Si for the shelters.</b></p>`,
      explain: `<p>Single-crystal silicon is the most efficient (15–18%) because its ordered lattice has no grain boundaries, but it is expensive since it is grown as one large crystal. Amorphous silicon is only 4–8% efficient but is the cheapest per watt and is deposited as a thin film on many kinds of surfaces, which suits curved, flexible mounting. Polycrystalline (12–16%, cast in ingots) sits in between.</p>`,
      points: ['Single crystal 15–18%, expensive', 'Poly 12–16%, cheaper', 'Amorphous 4–8%, cheapest per watt, thin film on any surface', 'Order in the crystal affects electrical properties']
    },
    {
      id: 'm2-q-13', module: 'm2', topic: 'm2-dssc', type: 'troubleshoot', level: 3,
      q: `<p>A student's hibiscus-dye Grätzel cell gives a good current for a minute, then fades, even though the lamp stays on. The TiO<sub>2</sub> and dye look fine. Which part of the working cycle has most likely broken, and what would you check?</p>`,
      options: null, correct: null,
      answer: `<p>The <b>dye is not being regenerated</b>: check the iodide electrolyte (dried out or too little) and the graphite counter electrode contact.</p>`,
      explain: `<p>After a photon excites the dye (Dye + hν → Dye*) the electron is injected into the TiO<sub>2</sub> conduction band, leaving Dye<sup>+</sup>. The dye only works again if it takes an electron back from iodide: 2Dye<sup>+</sup> + 3I<sup>−</sup> → 2Dye + I<sub>3</sub><sup>−</sup>, and the I<sub>3</sub><sup>−</sup> must be reduced back at the counter electrode: I<sub>3</sub><sup>−</sup> + 2e<sup>−</sup> → 3I<sup>−</sup>. If the drop of electrolyte dries out or loses contact, oxidised dye accumulates and the current dies within moments, exactly as observed.</p>`,
      points: ['Cycle: absorption, injection, transport, collection', 'Dye regenerated by I⁻ → I₃⁻', 'I₃⁻ reduced at graphite/Pt counter electrode', 'Electrolyte failure stops regeneration']
    },
    {
      id: 'm2-q-14', module: 'm2', topic: 'm2-dssc', type: 'decide', level: 1,
      q: `<p>An architect wants power-generating <b>coloured, see-through windows</b> for an office tower and accepts moderate efficiency to keep cost and environmental impact low. PV, PEC or DSSC?</p>`,
      options: ['Silicon PV', 'DSSC', 'None of them can be transparent', 'PV, because it has the lowest environmental impact'],
      correct: 1,
      answer: `<p><b>DSSC.</b> It is transparent, cheap and low-impact, with normal efficiency.</p>`,
      explain: `<p>From the comparison table: PV cells are opaque, high cost, high efficiency and high environmental impact. PEC and DSSC cells are transparent, low cost, normal efficiency and low impact. A DSSC uses thin films on FTO/ITO glass with coloured dyes, so it doubles as tinted glazing.</p>`,
      points: ['PV: opaque, high cost, high efficiency, high impact', 'DSSC: transparent, low cost, normal efficiency, low impact', 'Built on transparent conducting glass (FTO/ITO)']
    },
    {
      id: 'm2-q-15', module: 'm2', topic: 'm2-pec-cells', type: 'predict', level: 3,
      q: `<p>A PEC cell uses an n-type semiconductor electrode with a band gap of 3.0 eV. A researcher shines a lamp that emits only photons of about 2.0 eV. Predict what happens and what change to the electrode would help.</p>`,
      options: null, correct: null,
      answer: `<p><b>Almost no photocurrent</b>: the photons carry less energy than E<sub>g</sub>, so no electron–hole pairs form. Choose an electrode with a smaller, optimum band gap.</p>`,
      explain: `<p>A PEC cell only works when light of energy greater than E<sub>g</sub> hits the semiconductor/electrolyte junction and creates electron–hole pairs that the junction potential separates. 2.0 eV &lt; 3.0 eV, so the light passes through or heats the electrode. The notes list the electrode requirements: optimum band gap, optimum doping, large absorption coefficient (direct-gap semiconductors) and, if needed, an applied bias.</p>`,
      points: ['Condition hν > Eg', 'e⁻–h⁺ pairs separated by junction potential', 'Optimum Eg, doping and absorption coefficient', 'Applied bias improves efficiency']
    }
  ]
});
