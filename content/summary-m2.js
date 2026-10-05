SUMMARY({
  module: 'm2',
  tldr: `<p>Every device in this module moves <b>electrons through a wire</b> and <b>ions through an electrolyte</b>. Galvanic cells and batteries turn a spontaneous redox reaction (ΔG &lt; 0) into current, and the Nernst equation gives the voltage. Fuel cells do the same with a continuous supply of fuel, and solar cells use light to create electron–hole pairs in a semiconductor. Semiconductors link it all, so their band gap, doping and purity come first.</p>`,
  storyline: [
    { title: 'Cells', html: `<p>A redox reaction split into two half cells gives an <b>EMF</b>; the Nernst equation adjusts it for concentration.</p>` },
    { title: 'Electrode materials', html: `<p><b>Semiconductors</b> (Si, Ge) with a ~1 eV gap, doped n- or p-type, purified by distillation, zone refining and Czochralski pulling.</p>` },
    { title: 'Storing and supplying energy', html: `<p><b>Batteries</b> store it (Li-ion is the leading secondary cell); <b>fuel cells</b> convert fuel continuously (PEMFC cool and pure-H<sub>2</sub>, SOFC hot and fuel-flexible).</p>` },
    { title: 'Harvesting light', html: `<p><b>PV</b> uses a p–n junction, <b>PEC</b> a semiconductor/electrolyte junction, and <b>DSSC</b> a dye on TiO<sub>2</sub> with an iodide electrolyte.</p>` }
  ],
  bigIdeas: [
    { title: 'Electrochemical cells', topic: 'm2-electrochemical-cells', html: `<p>Galvanic: <b>ΔG &lt; 0</b>, chemical → electrical. Electrolytic: ΔG &gt; 0. Anode (left) oxidises, cathode (right) reduces. The Daniell cell gives <b>1.1 V</b>; the salt bridge keeps charge balance. Nernst: E = E° − (0.0591/n) log Q.</p>` },
    { title: 'Semiconductors', topic: 'm2-semiconductors', html: `<p>Small gap (Si ~1 eV, Ge 0.7 eV per slides). <b>Conductivity rises with temperature</b>; insulator at 0 K. Intrinsic: n<sub>e</sub> = n<sub>h</sub>. <b>n-type</b>: P, As, Sb. <b>p-type</b>: B, Al, In.</p>` },
    { title: 'Purifying Si and Ge', topic: 'm2-semiconductor-purification', html: `<p>Target <b>99.9999%</b>. Distil GeCl<sub>4</sub> / SiHCl<sub>3</sub>, <b>zone refine</b> (impurities stay in the melt), then <b>Czochralski</b> pull from a seed for a single crystal.</p>` },
    { title: 'Battery families', topic: 'm2-batteries', html: `<p><b>Primary</b>: irreversible. <b>Secondary</b>: recharged by reverse current. <b>Fuel/flow</b>: reactants fed in continuously, no storage.</p>` },
    { title: 'Li-ion', topic: 'm2-li-ion', html: `<p>Li<sup>+</sup> shuttles between <b>graphite</b> and <b>LiCoO<sub>2</sub></b>. Light Li and a very negative E° give <b>3.7 V</b> per cell. Risks: overcharge releases O<sub>2</sub>, the electrolyte breaks down to CO<sub>2</sub>.</p>` },
    { title: 'Fuel cells', topic: 'm2-fuel-cells', html: `<p>Chemical → electrical <b>without combustion</b>, ≥ 40% efficient. Eight types by electrolyte. The H<sub>2</sub>–O<sub>2</sub> product is water. Cannot store electricity.</p>` },
    { title: 'PEMFC', topic: 'm2-pemfc', html: `<p><b>Nafion</b> carries H<sup>+</sup>, below <b>80 °C</b>, Pt electrodes, needs <b>pure H<sub>2</sub></b>. E°cell = 1.23 V; water forms at the cathode.</p>` },
    { title: 'SOFC', topic: 'm2-sofc', html: `<p><b>YSZ</b> ceramic carries O<sup>2−</sup> at <b>800–1000 °C</b>. Fuels H<sub>2</sub> + CO, sulphur-tolerant, over 60%, cogeneration. Slow start-up, costly fabrication.</p>` },
    { title: 'Solar routes', topic: 'm2-solar-energy', html: `<p>Photosynthesis 2–4%, PV 12–26%, PEC (LJSC for power, PES for fuels). Theoretical potential <b>1.2 × 10<sup>5</sup> TW</b>.</p>` },
    { title: 'Photovoltaics', topic: 'm2-photovoltaics', html: `<p>Si: abundant, easily doped. <b>Single crystal 15–18%</b>, poly 12–16%, amorphous 4–8%. The p–n junction field separates light-made e<sup>−</sup> and holes.</p>` },
    { title: 'PEC cells', topic: 'm2-pec-cells', html: `<p>Photoactive semiconductor in an electrolyte; <b>hν &gt; E<sub>g</sub></b> makes pairs that drive redox. Easy junction by dipping; in-situ water splitting.</p>` },
    { title: 'DSSC', topic: 'm2-dssc', html: `<p>Dye on nanoporous <b>TiO<sub>2</sub></b> on FTO/ITO glass, <b>I<sup>−</sup>/I<sub>3</sub><sup>−</sup></b> electrolyte, Pt/graphite counter electrode. Transparent, cheap, normal efficiency.</p>` }
  ],
  compare: [
    { title: 'PEMFC vs SOFC', html: `<table class="tbl"><thead><tr><th></th><th>PEMFC</th><th>SOFC</th></tr></thead><tbody><tr><td>Electrolyte</td><td>Nafion polymer</td><td>YSZ ceramic</td></tr><tr><td>Mobile ion</td><td>H<sup>+</sup> (anode → cathode)</td><td>O<sup>2−</sup> (cathode → anode)</td></tr><tr><td>Temperature</td><td>&lt; 80 °C</td><td>800–1000 °C</td></tr><tr><td>Fuel</td><td>Pure H<sub>2</sub></td><td>H<sub>2</sub> + CO, tolerates some S</td></tr><tr><td>Best for</td><td>Vehicles, quick start</td><td>Stationary power, cogeneration</td></tr></tbody></table>` },
    { title: 'PV vs PEC vs DSSC', html: `<table class="tbl"><thead><tr><th></th><th>PV</th><th>PEC</th><th>DSSC</th></tr></thead><tbody><tr><td>Junction</td><td>Semiconductor p–n</td><td>SC / electrolyte</td><td>SC + dye</td></tr><tr><td>Transparency</td><td>Opaque</td><td>Transparent</td><td>Transparent</td></tr><tr><td>Cost</td><td>High</td><td>Low</td><td>Low</td></tr><tr><td>Efficiency</td><td>High</td><td>Normal</td><td>Normal</td></tr><tr><td>Environmental impact</td><td>High</td><td>Low</td><td>Low</td></tr></tbody></table>` }
  ],
  numbers: [
    { value: '1.1 V', what: 'Daniell cell EMF' }, { value: '0.0591 / n', what: 'Nernst factor at 298 K' },
    { value: '0.79 V', what: 'Cd/Cu worked example' }, { value: '99.9999%', what: 'Purity needed for Si and Ge' },
    { value: '300 mm, 250 kg', what: 'Czochralski Si crystal' }, { value: '3.7 V', what: 'Max Li-ion cell voltage (vs 1.3 V Ni–Cd)' },
    { value: '500–1000', what: 'Li-ion cycles before capacity falls' }, { value: '≥ 40%', what: 'Fuel cell electrical efficiency' },
    { value: '1.23 V', what: 'E°cell of H₂–O₂ / PEMFC' }, { value: '< 80 °C', what: 'PEMFC operating temperature' },
    { value: '800–1000 °C', what: 'SOFC operating temperature' }, { value: '> 60%', what: 'SOFC efficiency' },
    { value: '15–18%', what: 'Single-crystal Si PV' }, { value: '4–8%', what: 'Amorphous Si PV' },
    { value: '3–3.2 eV', what: 'Band gap of DSSC oxide electrodes' }
  ],
  traps: [
    `<p>During <b>charging</b> a Li-ion cell, LiCoO<sub>2</sub> is the anode (oxidation). The names swap; the terminals do not.</p>`,
    `<p>The <b>salt bridge</b> carries ions, not electrons.</p>`,
    `<p>Semiconductor resistance <b>falls</b> with temperature; a metal's rises.</p>`,
    `<p>Zone refining purifies but leaves Si <b>polycrystalline</b>; Czochralski makes the single crystal.</p>`,
    `<p>A fuel cell <b>does not store</b> electricity.</p>`,
    `<p>In the Nernst equation use <b>[anode ion]/[cathode ion]</b> with the minus sign.</p>`
  ]
});
