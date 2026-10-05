CHUNK({
  chunk: 'C',
  module: 'm2',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm2-solar-energy',
      title: 'Solar energy & conversion routes',
      short: 'Solar energy routes',
      blurb: 'How much power the Sun really delivers, the four ways of tapping it with their efficiencies, and the three kinds of solar cell this module covers.',
      source: 'Slides 43–45',
      tabs: [
        { title: 'Solar potential', html: `
          <p class="lead">The Sun delivers far more power than we could ever use. The real question is how much of it we can collect and convert.</p>
          <div class="kv">
            <div><span>Striking Earth</span><b>1.76 × 10<sup>5</sup> TW</b></div>
            <div><span>Global mean albedo</span><b>0.30</b></div>
            <div><span>Theoretical potential</span><b>1.2 × 10<sup>5</sup> TW</b></div>
            <div><span>1 hour of sunlight</span><b>≈ 14 TW for a year</b></div>
            <div><span>Practical potential</span><b>≈ 600 TW</b></div>
            <div><span>Practical range</span><b>50–1500 TW</b></div>
            <div><span>Onshore electricity</span><b>≈ 60 TW</b></div>
            <div><span>Photosynthesis</span><b>90 TW</b></div>
          </div>
          <h3>Theoretical vs practical</h3>
          <ul>
            <li><b>Theoretical</b>: 1.2 × 10<sup>5</sup> TW. That is what remains of the 1.76 × 10<sup>5</sup> TW striking Earth once the <b>albedo (0.30)</b> has reflected part of it back to space.</li>
            <li>The energy in <b>1 hour of sunlight</b> equals running <b>14 TW for a whole year</b>.</li>
            <li><b>Practical</b>: about 600 TW, anywhere between 50 TW and 1500 TW depending on the land fraction assumed and similar limits (source: <b>WEA 2000</b>, the World Energy Assessment).</li>
            <li><b>Onshore electricity</b> generation potential: about 60 TW, assuming <b>10% conversion efficiency</b>.</li>
            <li>For scale, <b>photosynthesis</b> already runs at about 90 TW.</li>
          </ul>
          <div class="note why"><p>The numbers check out against each other. Albedo 0.30 means 30% is reflected, so 1.76 × 10<sup>5</sup> × 0.70 ≈ 1.2 × 10<sup>5</sup> TW. A year has about 8760 hours, so one hour at 1.2 × 10<sup>5</sup> TW, spread over a year, is 1.2 × 10<sup>5</sup> / 8760 ≈ 14 TW. And 10% of the practical 600 TW gives the 60 TW of electricity.</p></div>
          <figure data-fig="m2-solar-panels"></figure>
          <div class="note exam"><p>When a question asks why solar is worth the trouble, the one-hour line is the one to quote: one hour of sunlight carries as much energy as 14 TW supplied for a full year.</p></div>
        ` },
        { title: 'Four routes', html: `
          <p class="lead">Slide 44 sorts every way of tapping sunlight into four routes, A to D. They differ in the part of the spectrum they use and in how much of the energy they keep.</p>
          <table class="tbl">
            <thead><tr><th>Route</th><th>Example / material</th><th>Light used</th><th>Efficiency η</th></tr></thead>
            <tbody>
              <tr><td><b>A. Photosynthesis</b></td><td>Plants</td><td>Visible</td><td><b>2–4%</b></td></tr>
              <tr><td><b>B. Water heaters</b></td><td>Flat plate, tube</td><td><b>IR radiation</b></td><td>not given</td></tr>
              <tr><td><b>C. Photovoltaic cells</b></td><td>p/n Si, Si, <b>GaAs</b></td><td>Visible</td><td><b>12–26%</b></td></tr>
              <tr><td><b>D. Chemical routes</b></td><td>Biomimetism, PEC cells</td><td>see next tab</td><td>0.01% to 14%, by branch</td></tr>
            </tbody>
          </table>
          <ul>
            <li>Routes A and C run on <b>visible light</b>; water heaters use the <b>infrared</b> (heat) part.</li>
            <li>Water heaters give hot water, not electricity. PV cells give electricity directly.</li>
            <li>Chemical routes either copy plants or use electrochemical cells that make electricity or fuels.</li>
          </ul>
          <p>Click each node of the tree to open its details, then compare the efficiency bars: PV and the PEC branches sit far above plants, and photogalvanic cells sit at the very bottom.</p>
          <div data-viz="solar-routes"></div>
          <div class="note trap"><p>PV efficiency appears as a different number on different slides: 12–26% here (the whole PV family), 14–25% for panels (slide 54), and 15–18%, 12–16%, 4–8% for the three forms of silicon. Quote the one that matches what the question is about.</p></div>
        ` },
        { title: 'Chemical routes', html: `
          <p class="lead">Route D uses chemistry rather than a plain semiconductor slab. It splits into copying plants (D1) and photoelectrochemical cells (D2), and D2 splits again by what the cell produces.</p>
          <ul>
            <li><b>D1: Biomimetism</b>, mimicking <b>photosynthesis</b> via chemicals.</li>
            <li><b>D2: PEC cells</b>, in two families:</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>a. LJSC (liquid junction solar cells)</h4>
              <ul>
                <li>(i) <b>Sc/Elect/M</b>, η = <b>13–14%</b></li>
                <li>(ii) <b>Photogalvanic cells</b>, M/Elect/M, η = <b>0.01%</b></li>
              </ul>
              <p>Output: electricity.</p>
            </div>
            <div class="side"><h4>b. Photoelectrosynthesis (PES) cells</h4>
              <ul>
                <li>(i) <b>Photoassisted electrolysis</b> cells, η = <b>13.3%</b></li>
                <li>(ii) <b>Photoassisted electrosynthesis</b> cells, e.g. <b>CO<sub>2</sub> → CH<sub>3</sub>OH</b>, <b>N<sub>2</sub> → NH<sub>3</sub></b></li>
              </ul>
              <p>Output: fuels and chemicals.</p>
            </div>
          </div>
          <div class="mnemonic"><p>Read the codes as the cell sandwich, left to right: Sc/Elect/M = <b>semiconductor | electrolyte | metal</b>; M/Elect/M = <b>metal | electrolyte | metal</b>. Swap the semiconductor for a metal and the efficiency collapses from 13–14% to 0.01%.</p></div>
          <div class="note why"><p>Photogalvanic cells are so weak because the light is absorbed by dye molecules dissolved in the electrolyte, between two plain metal plates. Most of the energy-rich molecules react back before they ever reach an electrode. With a semiconductor electrode, light is absorbed right at the junction, and its field separates the charges at once.</p></div>
          <figure data-fig="m2-solar-methods-tree"></figure>
        ` },
        { title: 'Three cell types', html: `
          <p class="lead">This module studies three kinds of solar energy conversion cell. Place each one on the route map before going further.</p>
          <div class="vs">
            <div class="side"><h4>Photovoltaic cells</h4><p>Route <b>C</b>. A solid semiconductor <b>p–n junction</b> turns light straight into electricity.</p></div>
            <div class="side"><h4>Photoelectrochemical cells</h4><p>Route <b>D2</b>. A semiconductor dipped in an <b>electrolyte</b>; it gives electricity (LJSC) or fuels (PES).</p></div>
            <div class="side"><h4>Dye-sensitized solar cells</h4><p>A <b>kind of PEC cell</b> in which a dye on TiO<sub>2</sub> does the light absorbing: the Grätzel cell.</p></div>
          </div>
          <p>The side-by-side comparison of all three (transparency, cost, efficiency, environmental impact) closes the dye-sensitized cells topic.</p>
        ` }
      ],
      flashcards: [
        { front: 'Theoretical solar energy potential, and where the number comes from?', back: '<b>1.2 × 10<sup>5</sup> TW</b>. 1.76 × 10<sup>5</sup> TW strikes Earth and the global mean albedo of <b>0.30</b> reflects about 30% of it.' },
        { front: 'Practical solar energy potential?', back: '<b>≈ 600 TW</b>, range <b>50–1500 TW</b> depending on land fraction etc. (WEA 2000).' },
        { front: 'Energy in one hour of sunlight equals...?', back: '<b>14 TW</b> supplied for a whole <b>year</b>.' },
        { front: 'Onshore solar electricity potential, and the efficiency assumed?', back: '<b>≈ 60 TW</b> at <b>10%</b> conversion efficiency.' },
        { front: 'Power captured by photosynthesis?', back: '<b>90 TW</b>.' },
        { front: 'Efficiency: photosynthesis vs PV cells (slide 44)?', back: 'Photosynthesis <b>2–4%</b> (visible light); PV cells <b>12–26%</b> (visible light).' },
        { front: 'Which solar route uses IR radiation?', back: '<b>Water heaters</b>: flat plate and tube types.' },
        { front: 'The two LJSC types and their efficiencies?', back: 'Sc/Elect/M: <b>13–14%</b>. Photogalvanic M/Elect/M: <b>0.01%</b>.' },
        { front: 'Efficiency of photoassisted electrolysis cells?', back: '<b>13.3%</b>.' },
        { front: 'Two reactions run by photoassisted electrosynthesis cells?', back: '<b>CO<sub>2</sub> → CH<sub>3</sub>OH</b> and <b>N<sub>2</sub> → NH<sub>3</sub></b>.' },
        { front: 'What is biomimetism (route D1)?', back: 'Mimicking <b>photosynthesis</b> via chemicals.' },
        { front: 'Three types of solar energy conversion cell?', back: '<b>Photovoltaic</b>, <b>photoelectrochemical</b> and <b>dye-sensitized</b> solar cells.' }
      ],
      oneLiners: [
        'Theoretical solar potential 1.2 × 10<sup>5</sup> TW (1.76 × 10<sup>5</sup> TW strikes Earth; global mean albedo 0.30).',
        '1 hour of sunlight ↔ 14 TW for a year.',
        'Practical potential ≈ 600 TW (50–1500 TW, WEA 2000); onshore electricity ≈ 60 TW at 10% efficiency; photosynthesis 90 TW.',
        'Four routes: A photosynthesis (plants, visible, η 2–4%), B water heaters (flat plate, tube, IR), C PV cells (p/n Si, GaAs, visible, η 12–26%), D chemical routes.',
        'D1 biomimetism mimics photosynthesis; D2 PEC cells split into LJSC (electricity) and PES (fuels).',
        'Sc/Elect/M 13–14%, photogalvanic M/Elect/M 0.01%, photoassisted electrolysis 13.3%, photoassisted electrosynthesis CO<sub>2</sub> → CH<sub>3</sub>OH and N<sub>2</sub> → NH<sub>3</sub>.',
        'The three solar cells studied: PV, PEC and DSSC (a kind of PEC cell).'
      ],
      formulas: [
        { name: 'Albedo correction', html: `1.76 × 10<sup>5</sup> TW × (1 − 0.30) ≈ 1.2 × 10<sup>5</sup> TW`, note: 'Sunlight striking Earth minus the reflected fraction gives the theoretical potential.' },
        { name: 'Onshore electricity potential', html: `600 TW × 10% ≈ 60 TW`, note: 'Practical potential times conversion efficiency.' },
        { name: 'Photoassisted electrosynthesis', html: `CO<sub>2</sub> → CH<sub>3</sub>OH ; N<sub>2</sub> → NH<sub>3</sub>`, note: 'Sunlight stored as fuels and chemicals (PES cells).' }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: 'm2-photovoltaics',
      title: 'Photovoltaic cells',
      short: 'Photovoltaic cells',
      blurb: 'The photovoltaic effect, why silicon wins, the three forms of silicon and their efficiencies, how a p–n junction turns light into current, other semiconductors, and the downsides of PV.',
      source: 'Slides 46–54',
      tabs: [
        { title: 'Photovoltaic effect', html: `
          <p class="lead">A <b>solar cell</b> converts the energy of sunlight <b>directly into electricity</b> by the photovoltaic effect. No turbine, no moving parts.</p>
          <p>The <b>photovoltaic effect</b> is the creation of a <b>voltage</b> (or the matching electric current) in a material when it is exposed to <b>electromagnetic radiation</b>.</p>
          <h3>Related to the photoelectric effect, but different</h3>
          <div class="vs">
            <div class="side"><h4>Photoelectric effect</h4><p>Light knocks electrons <b>out of</b> a surface (usually a metal) into the space around it.</p></div>
            <div class="side"><h4>Photovoltaic effect</h4><p>Light lifts electrons to higher energy <b>inside</b> a semiconductor. A junction separates them, and a <b>voltage</b> builds up across the material.</p></div>
          </div>
          <ul>
            <li>There are several types of PV cell, and they <b>all use semiconductors</b> to interact with photons from the Sun and generate a current.</li>
            <li>The usual material is <b>highly purified silicon</b>, obtained from <b>sand, quartz</b> etc., and then <b>"doped"</b> with intentional impurities at <b>controlled concentrations</b>.</li>
          </ul>
          <div class="note why"><p>Doping is what makes the cell work. A group-15 atom such as P gives n-type Si with spare electrons; a group-13 atom such as B gives p-type Si with holes. Put the two in contact and you get the p–n junction that separates the charges light creates.</p></div>
          <div class="note exam"><p>A two-line answer for photovoltaic vs photoelectric: both start with light absorbed by electrons. In the photoelectric effect the electron leaves the material; in the photovoltaic effect it stays inside and a voltage appears across the device.</p></div>
        ` },
        { title: 'Why silicon', html: `
          <p class="lead">Silicon is considered the most suitable material for solar energy conversion. Five reasons, each worth a line in an exam.</p>
          <ul>
            <li><b>Abundant</b>: the second most abundant element after oxygen, about <b>28% by mass</b>.</li>
            <li><b>Easy to obtain</b>: highly pure Si is readily made from <b>sand or quartz</b> by heating at high temperature in a furnace.</li>
            <li><b>Right band gap</b>: an excellent semiconductor with an optimum band gap of <b>1.23 eV at 300 K</b>.</li>
            <li><b>Cost effective</b>.</li>
            <li><b>Easily doped</b> with phosphorus (P), arsenic (As), antimony (Sb), boron (B), indium (In) or aluminium (Al).</li>
          </ul>
          <div class="eq" data-label="Silicon from silica">SiO<sub>2</sub> + C → Si + CO<sub>2</sub></div>
          <table class="tbl">
            <thead><tr><th>Dopant</th><th>Group</th><th>Gives</th><th>Majority carrier</th></tr></thead>
            <tbody>
              <tr><td>P, As, Sb</td><td>15 (5 valence e<sup>−</sup>)</td><td><b>n-type</b></td><td>electrons</td></tr>
              <tr><td>B, In, Al</td><td>13 (3 valence e<sup>−</sup>)</td><td><b>p-type</b></td><td>holes</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Why a gap near 1 eV counts as optimum: any photon with more energy than the gap can be absorbed. With a gap this size, all of visible light (about 1.6–3.1 eV) and part of the near-IR qualify, while the gap is still wide enough to give a useful voltage. A much wider gap would let most sunlight pass straight through.</p></div>
          <div class="note heads-up"><p>Slide 47 gives Si's band gap as <b>1.23 eV</b> at 300 K, so use that when a question quotes this slide. The standard value is <b>1.12 eV</b> (indirect gap), and the deck's own table on slide 53 lists c-Si as 1.12 eV.</p></div>
          <div class="note heads-up"><p>The furnace reaction on the slide, SiO<sub>2</sub> + C → Si + CO<sub>2</sub>, balances as written. In a real electric arc furnace the carbon leaves as carbon monoxide: SiO<sub>2</sub> + 2C → Si + 2CO. The silicon from this step still needs purifying (zone refining, Czochralski growth, covered earlier in this module) before it is good enough for cells.</p></div>
        ` },
        { title: 'Mono, poly, amorphous', html: `
          <p class="lead">PV cells are grouped by the structure of their silicon. The crystal structure, meaning how the atoms are arranged, largely decides the electrical properties, and so the efficiency and the price.</p>
          <figure data-fig="m2-pv-si-structures"></figure>
          <table class="tbl">
            <thead><tr><th></th><th>Single-crystal Si</th><th>Polycrystalline Si</th><th>Amorphous Si</th></tr></thead>
            <tbody>
              <tr><td>Atoms</td><td><b>Ordered array</b>, repeating with displacement through the whole sample</td><td>Many crystalline <b>sub-sections</b>, independently oriented; atomic order breaks <b>sharply at their interfaces</b></td><td><b>No atomic regularity</b> on any macroscopic scale (non-crystalline)</td></tr>
              <tr><td>Efficiency</td><td><b>15–18%</b></td><td><b>12–16%</b>, slowly improving</td><td><b>4–8%</b></td></tr>
              <tr><td>Cost / how made</td><td>Typically <b>expensive</b>: grown as one big crystal</td><td><b>Cheaper</b>: cast in ingots</td><td><b>Cheapest per watt</b></td></tr>
              <tr><td>Also</td><td>The top performer</td><td>The middle ground</td><td>Called <b>"thin film"</b>; easily deposited on a wide range of surface types</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Efficiency falls as order is lost. Every grain boundary and every disordered bond is a spot where a freshly made electron can drop back into a hole before it reaches the contacts. More order, fewer traps, more current. You pay for that order in the slow growth of a single big crystal.</p></div>
          <figure data-fig="m2-pv-mono-cell"></figure>
          <figure data-fig="m2-pv-poly-cell"></figure>
          <figure data-fig="m2-pv-amorphous-film"></figure>
          <div class="mnemonic"><p>Order pays: <b>mono 15–18</b> &gt; <b>poly 12–16</b> &gt; <b>amorphous 4–8</b>. Price runs the other way.</p></div>
        ` },
        { title: 'p–n junction', html: `
          <p class="lead">The heart of a PV cell is a <b>p–n junction</b>. Where n-type and p-type silicon meet, a thin charged layer forms with a built-in field, and that field turns light-made charges into a current.</p>
          <figure data-fig="m2-pv-pn-depletion"></figure>
          <ol class="steps">
            <li><b>Diffusion</b> Free electrons from the N-region diffuse into the P-region, and holes diffuse the other way.</li>
            <li><b>Depletion layer</b> They cancel near the boundary, leaving fixed <b>positive donor ions</b> on the N side and <b>negative acceptor ions</b> on the P side.</li>
            <li><b>Built-in potential</b> These fixed charges set up a <b>potential difference across the junction</b>: N side +, P side −, as the volts graph shows.</li>
            <li><b>Light makes pairs</b> A photon absorbed near the junction creates an <b>electron–hole pair</b>.</li>
            <li><b>Field separates them</b> The field sweeps the electron to the <b>n side</b> and the hole to the <b>p side</b>.</li>
            <li><b>Current flows</b> Electrons leave through the top contact, pass through the external load and come back through the back contact to fill holes.</li>
          </ol>
          <p>Move the light-intensity slider up and down and watch the current follow it: more photons, more pairs, more charge swept across.</p>
          <div data-viz="pn-junction"></div>
          <div class="note why"><p>Diffusion stops by itself. As more ions are uncovered the field grows, until it pushes back as hard as diffusion pushes forward. The layer is called "depleted" because it has lost its mobile carriers.</p></div>
          <div class="note trap"><p>Two different signs. The built-in potential is + on the N side (because of the donor ions), yet under light the N-side contact is the <b>negative terminal</b>, because that is where the field delivers the electrons.</p></div>
        ` },
        { title: 'Inside a working cell', html: `
          <p class="lead">Put the junction in sunlight, add contacts and a load, and you have a system that <b>converts light energy to electricity</b>.</p>
          <figure data-fig="m2-pv-cell-circuit"></figure>
          <ul>
            <li>On top: an <b>anti-reflection coating</b> and a grid <b>electrode</b> (the − terminal), open enough to let light in.</li>
            <li>Below: <b>N-type silicon</b>, then <b>P-type silicon</b>, with a full back <b>electrode</b> (the + terminal).</li>
            <li>Light creates + and − pairs at the junction. Electrons go up to the top electrode, round the <b>external load</b>, and back into the p side as current.</li>
          </ul>
          <figure data-fig="m2-pv-inside-eia"></figure>
          <p>The second view builds the cell in layers: <b>glass</b>, a <b>transparent negative terminal</b>, the <b>n-type layer</b>, the <b>junction</b>, the <b>p-type layer</b> and the <b>positive terminal</b>. Energy from light frees electrons, they move to the n side and out into the circuit, and the holes left behind are filled by electrons returning through the positive terminal.</p>
          <h3>Applications</h3>
          <div class="chips"><span class="chip">Aerospace</span><span class="chip">Satellites</span><span class="chip">and more (etc.)</span></div>
          <div class="note why"><p>Space was an early home for PV because a cell needs no fuel and has no moving parts, and sunlight in orbit is strong and never blocked by weather. There, weight and reliability matter more than cost.</p></div>
        ` },
        { title: 'Other semiconductors', html: `
          <p class="lead">Silicon is not the only choice. Slide 53, marked as additional information, lists band gaps of other PV and transparent-conductor materials.</p>
          <table class="tbl">
            <thead><tr><th>Material</th><th>E<sub>g</sub> (eV)</th><th>Gap</th><th>Crystal structure</th></tr></thead>
            <tbody>
              <tr><td>c-Si</td><td><b>1.12</b></td><td>indirect</td><td>diamond</td></tr>
              <tr><td>GaAs</td><td><b>1.424</b></td><td>direct</td><td>zinc blende</td></tr>
              <tr><td>InP</td><td>1.35</td><td>direct</td><td>zinc blende</td></tr>
              <tr><td>a-Si</td><td>~1.8</td><td>direct</td><td>none</td></tr>
              <tr><td>CdTe</td><td>1.45–1.5</td><td>direct</td><td>zinc blende</td></tr>
              <tr><td>CuInSe<sub>2</sub> (CIS)</td><td>0.96–1.04</td><td>direct</td><td>chalcopyrite</td></tr>
              <tr><td>Al<sub>x</sub>Ga<sub>1−x</sub>As, 0 ≤ x ≤ 0.45</td><td>1.424 + 1.247x</td><td>direct</td><td rowspan="2">zinc blende</td></tr>
              <tr><td>Al<sub>x</sub>Ga<sub>1−x</sub>As, 0.45 &lt; x ≤ 1</td><td>1.9 + 0.125x + 0.143x<sup>2</sup></td><td>indirect</td></tr>
            </tbody>
          </table>
          <p><small>On the slide: (i) = indirect, (d) = direct; dia = diamond, zb = zinc blende, ch = chalcopyrite.</small></p>
          <table class="tbl">
            <thead><tr><th>Material</th><th>E<sub>g</sub> (eV)</th></tr></thead>
            <tbody>
              <tr><td>CdS</td><td>2.42</td></tr>
              <tr><td>ZnS</td><td>3.58</td></tr>
              <tr><td>Zn<sub>0.3</sub>Cd<sub>0.7</sub>S</td><td>2.8</td></tr>
              <tr><td>ZnO</td><td>3.3</td></tr>
              <tr><td>In<sub>2</sub>O<sub>3</sub>:Sn (ITO)</td><td><b>3.7–4.4</b></td></tr>
              <tr><td>SnO<sub>2</sub>:F (FTO)</td><td><b>3.9–4.6</b></td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Direct-gap materials (GaAs, CdTe, CIS, a-Si) absorb light far more strongly than indirect-gap c-Si, so a thin layer does the job. That is why a-Si and CdTe work as thin films. In AlGaAs the gap grows with the Al fraction x and turns indirect past x = 0.45. Mixing ZnS and CdS gives a gap in between (2.8 eV), so alloying tunes the gap.</p></div>
          <div class="note example"><p>ITO and FTO have gaps above 3.7 eV, wider than any visible photon (up to about 3.1 eV), so visible light passes straight through them; doping makes them conduct. That combination is exactly what the glass coating of a dye-sensitized cell needs.</p></div>
          <details class="more"><summary>Original tables from slide 53</summary>
            <figure data-fig="m2-pv-gap-table"></figure>
            <figure data-fig="m2-pv-tco-gap-table"></figure>
          </details>
        ` },
        { title: 'Disadvantages', html: `
          <p class="lead">PV is clean while it runs, but it has six weak points the slides want you to be able to list.</p>
          <table class="tbl">
            <thead><tr><th>Problem</th><th>Detail</th></tr></thead>
            <tbody>
              <tr><td><b>Toxic chemicals</b></td><td><b>Cadmium and arsenic</b> are used in PV production. The impact is minor and easily controlled through <b>recycling and proper disposal</b>.</td></tr>
              <tr><td><b>Light → heat</b></td><td>Part of the light energy is converted into <b>heat</b> instead of electricity, which is one of the limitations.</td></tr>
              <tr><td><b>Cost</b></td><td>Somewhat <b>more expensive</b> than conventional sources, partly due to the cost of <b>manufacturing PV devices</b>.</td></tr>
              <tr><td><b>Variable</b></td><td>Output <b>depends on the sun</b>.</td></tr>
              <tr><td><b>Low efficiency</b></td><td>Panels reach <b>14–25%</b>, relatively low compared with other renewable energy systems.</td></tr>
              <tr><td><b>Fragile</b></td><td>Panels can be <b>damaged</b> relatively easily.</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Why light turns into heat: a photon with more energy than the band gap still makes only one electron–hole pair, and the extra energy is shed as heat. Photons below the gap are not absorbed at all. A hotter cell also gives a lower voltage, so the heat costs you twice.</p></div>
          <div class="note trap"><p>Slide 72 rates PV's environmental impact as "High" next to PEC and DSSC, while this slide calls the Cd/As impact minor and controllable. Both are the deck's lines: "High" is relative to the other two cells; "minor, handled by recycling" is the answer in a PV-disadvantages question.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Photovoltaic effect?', back: 'Creation of a <b>voltage</b> (or matching current) in a material on exposure to <b>electromagnetic radiation</b>.' },
        { front: 'Photovoltaic vs photoelectric effect?', back: 'Related but different: in the photoelectric effect the electron <b>leaves</b> the material; in the photovoltaic effect it stays <b>inside</b> and a voltage builds up.' },
        { front: 'How abundant is Si?', back: '<b>Second</b> most abundant element after oxygen, <b>~28% by mass</b>.' },
        { front: 'Reaction for Si from sand or quartz (as on slide 47)?', back: '<b>SiO<sub>2</sub> + C → Si + CO<sub>2</sub></b>, heating at high temperature in a furnace.' },
        { front: 'Si band gap quoted on slide 47?', back: '<b>1.23 eV at 300 K</b>. Standard value 1.12 eV, which slide 53 uses.' },
        { front: 'Dopants for Si listed on the slide?', back: '<b>P, As, Sb</b> (n-type) and <b>B, In, Al</b> (p-type).' },
        { front: 'Single-crystal Si: efficiency and cost?', back: '<b>15–18%</b>; typically expensive, grown as a big crystal.' },
        { front: 'Polycrystalline Si: efficiency and cost?', back: '<b>12–16%</b>, slowly improving; cheaper, <b>cast in ingots</b>.' },
        { front: 'Amorphous Si: efficiency and cost?', back: '<b>4–8%</b>; <b>cheapest per watt</b>; called "thin film", deposits on many surface types.' },
        { front: 'What is left in the depletion layer?', back: 'Fixed <b>positive donor ions</b> (N side) and <b>negative acceptor ions</b> (P side); no free carriers.' },
        { front: 'Applications of PV named on slide 52?', back: '<b>Aerospace</b> and <b>satellites</b>.' },
        { front: 'Six disadvantages of PV?', back: 'Toxic <b>Cd and As</b>; light → <b>heat</b>; <b>cost</b>; <b>variable</b>; efficiency only <b>14–25%</b>; <b>fragile</b>.' }
      ],
      oneLiners: [
        'Solar cell: sunlight → electricity directly by the photovoltaic effect; every PV type uses semiconductors.',
        'Photovoltaic ≠ photoelectric: in PV the electron stays inside and a voltage appears.',
        'Why Si: 2nd most abundant (~28% by mass), made from sand/quartz (SiO<sub>2</sub> + C → Si + CO<sub>2</sub>), Eg 1.23 eV at 300 K (slide), cost effective, easily doped (P, As, Sb, B, In, Al).',
        'Single-crystal 15–18% (expensive, grown as big crystal) &gt; poly 12–16% (cheaper, cast in ingots) &gt; amorphous 4–8% (cheapest per watt, thin film).',
        'p–n junction: diffusion → depletion layer of donor (+) and acceptor (−) ions → built-in field separates light-made e<sup>−</sup> and holes.',
        'PV disadvantages: Cd/As toxicity (minor, recyclable), light → heat, cost, variable output, 14–25% efficiency, fragile.',
        'Direct-gap GaAs 1.424 eV, CdTe 1.45–1.5 eV, CIS 0.96–1.04 eV; c-Si 1.12 eV is indirect; ITO 3.7–4.4 eV and FTO 3.9–4.6 eV are transparent conductors.'
      ],
      formulas: [
        { name: 'Silicon from silica (slide 47)', html: `SiO<sub>2</sub> + C → Si + CO<sub>2</sub>`, note: 'Heating sand or quartz with carbon in a furnace. Industrially written SiO₂ + 2C → Si + 2CO.' },
        { name: 'AlGaAs band gap', html: `E<sub>g</sub> = 1.424 + 1.247x eV (0 ≤ x ≤ 0.45, direct); E<sub>g</sub> = 1.9 + 0.125x + 0.143x<sup>2</sup> eV (0.45 &lt; x ≤ 1, indirect)`, note: 'x = Al fraction in Al<sub>x</sub>Ga<sub>1−x</sub>As (slide 53).' }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: 'm2-pec-cells',
      title: 'Photoelectrochemical cells',
      short: 'PEC cells',
      blurb: 'A semiconductor dipped in an electrolyte: how light makes it drive redox reactions, the LJSC and PES families, regenerative cells, what a good electrode needs, and where PEC beats PV.',
      source: 'Slides 55–59',
      tabs: [
        { title: 'What a PEC cell is', html: `
          <p class="lead">A photoelectrochemical (PEC) cell is a <b>photoactive semiconductor electrode</b> in contact with an <b>electrolyte</b>. Shine light on it and it generates a <b>photocurrent</b>.</p>
          <ul>
            <li>Slide definition 1: a photocurrent-generating device made up of an <b>electrolyte</b> and a <b>photoactive semiconductor electrode</b>.</li>
            <li>Slide definition 2: a device in which a photoactive semiconductor material is <b>in contact with an electrolyte</b>.</li>
          </ul>
          <ol class="steps">
            <li><b>Light in</b> Light with energy <b>greater than E<sub>g</sub></b>, the band gap of the semiconductor, falls on the SC/electrolyte junction.</li>
            <li><b>Pairs made</b> It produces <b>electron–hole pairs</b>.</li>
            <li><b>Pairs separated</b> The <b>junction potential</b> pulls electrons and holes apart in space.</li>
            <li><b>Redox driven</b> The separated charges drive <b>oxidation and reduction</b> reactions in the system.</li>
          </ol>
          <div class="eq" data-label="Condition for pair generation">hν &gt; E<sub>g</sub></div>
          <div class="note why"><p>A semiconductor touching an electrolyte behaves much like one half of a p–n junction. Charge flows across the interface until the energy levels match, which bends the bands near the surface and sets up a field. That field is the junction potential. In an n-type electrode it drives holes to the surface, where they oxidise something in solution, while electrons go round the external circuit and reduce something at the counter electrode.</p></div>
          <div class="note trap"><p>Photons with energy below E<sub>g</sub> do nothing, however bright the light. The condition is on the energy of each photon, not on the intensity.</p></div>
        ` },
        { title: 'LJSC and PES', html: `
          <p class="lead">PEC cells come in two types, sorted by what they produce: <b>electricity</b> (liquid junction solar cells) or <b>fuels</b> (photoelectrosynthesis cells).</p>
          <div class="vs">
            <div class="side"><h4>Liquid junction solar cell (LJSC)</h4>
              <p>Build: <b>n-SC / Electrolyte / Metal</b>.</p>
              <p>Electrons in the SC absorb the high-energy radiation and move from the <b>valence band</b> to the <b>conduction band</b>, which creates <b>holes (+)</b>.</p>
              <p>Converts solar energy into <b>electrical energy</b>.</p>
            </div>
            <div class="side"><h4>Photoelectrosynthesis (PES) cell</h4>
              <p>Converts solar energy into <b>chemical energy in the form of fuels</b>.</p>
              <p>From slide 44: <b>photoassisted electrolysis</b> cells (η 13.3%) and <b>photoassisted electrosynthesis</b> cells (CO<sub>2</sub> → CH<sub>3</sub>OH, N<sub>2</sub> → NH<sub>3</sub>).</p>
            </div>
          </div>
          <p>Also from the route map: the LJSC family includes Sc/Elect/M cells (η <b>13–14%</b>) and photogalvanic M/Elect/M cells (η <b>0.01%</b>).</p>
          <div class="note why"><p>The difference lies in what happens to the redox products. In an LJSC the reaction at one electrode is undone at the other, so the electrolyte never changes and only electricity comes out. In a PES cell the products are new substances (for example H<sub>2</sub> and O<sub>2</sub> from water, or CH<sub>3</sub>OH from CO<sub>2</sub>), so the sunlight ends up stored as fuel.</p></div>
          <div class="note heads-up"><p>Slide 56 says the "free electrons" in the SC absorb the radiation. Strictly it is the bound electrons in the valence band that absorb a photon and jump to the conduction band; only then are they free to move. Keep the valence band → conduction band wording, which is right.</p></div>
        ` },
        { title: 'Regenerative cells', html: `
          <p class="lead">A <b>regenerative</b> PEC cell is the electricity-making kind. One redox couple is oxidised at the semiconductor and reduced back at the counter electrode, so nothing gets used up.</p>
          <figure data-fig="m2-pec-band-diagram"></figure>
          <ol class="steps">
            <li><b>Absorb</b> A photon (hν) is absorbed in the <b>semiconductor electrode</b>; an electron jumps from the valence band (E<sub>v</sub>) to the conduction band (E<sub>c</sub>).</li>
            <li><b>Separate</b> The bent bands at the surface send the <b>hole (h<sup>+</sup>)</b> towards the electrolyte and the <b>electron</b> back into the bulk.</li>
            <li><b>Oxidise</b> At the SC surface the hole converts <b>Red → Ox</b>.</li>
            <li><b>Circuit</b> The electron flows out through the external meter to the <b>counter electrode</b>.</li>
            <li><b>Reduce</b> At the counter electrode the electron converts <b>Ox → Red</b>, restoring the electrolyte.</li>
          </ol>
          <figure data-fig="m2-pec-liquid-junction"></figure>
          <div class="note example"><p>The second figure is the same cell drawn as hardware: a semiconductor (CB, VB) and a metal plate in one electrolyte, joined through a meter. Sunlight makes e<sup>−</sup> and h<sup>+</sup>; red → ox happens at the semiconductor and ox → red at the metal.</p></div>
          <div class="note exam"><p>For a sketch question, draw the band diagram: bands bent at the SC surface, the hole heading into the solution, the electron going round the circuit, and the Red ⇌ Ox cycle closing between the two electrodes.</p></div>
        ` },
        { title: 'Electrode requirements', html: `
          <p class="lead">For efficient solar energy conversion, the electrode material has to meet four conditions.</p>
          <table class="tbl">
            <thead><tr><th>Requirement</th><th>What it buys you</th></tr></thead>
            <tbody>
              <tr><td>1. <b>Optimum band gap</b> (E<sub>g</sub>)</td><td>Too wide and most sunlight passes unabsorbed; too narrow and each absorbed photon gives only a small voltage.</td></tr>
              <tr><td>2. <b>Optimum doping level</b></td><td>Good <b>spatial separation</b> of the photo-generated carriers, and so a <b>high quantum efficiency</b>.</td></tr>
              <tr><td>3. Large <b>absorption coefficient (α)</b></td><td>Light is absorbed close to the surface, inside the junction field. Usually found in <b>direct band gap</b> SCs.</td></tr>
              <tr><td>4. <b>Applied bias</b> (external energy source)</td><td>Makes LJSCs <b>more efficient</b> by helping pull the carriers apart.</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Doping has a sweet spot. Too little and the electrode is a poor conductor; too much and the charged layer near the surface becomes so thin that pairs made deeper in the solid recombine before the field can reach them. Quantum efficiency is simply the fraction of absorbed photons that end up as collected electrons.</p></div>
          <div class="note example"><p>Using the slide 53 table: GaAs (1.424 eV, direct) and CdTe (1.45–1.5 eV, direct) satisfy conditions 1 and 3. c-Si (1.12 eV) has a good gap but is indirect, so it absorbs weakly and needs a thick layer.</p></div>
        ` },
        { title: 'PEC vs PV', html: `
          <p class="lead">Five major advantages of PEC cells over photovoltaic cells. Most follow from one fact: the junction is just a solid touching a liquid.</p>
          <table class="tbl">
            <thead><tr><th>Advantage</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td><b>Easy junction formation</b>: mere dipping of the SC electrode in the electrolyte</td><td>A PV junction needs careful doping of the solid; a liquid makes close contact on its own.</td></tr>
              <tr><td><b>In-situ water electrolysis</b> is possible</td><td>The charges already sit at a surface touching water, so they can split it on the spot and give a fuel.</td></tr>
              <tr><td><b>Polycrystalline bulk and thin film</b> electrodes reach efficiencies <b>comparable to single crystal</b> electrodes</td><td>The liquid wets every grain, so each grain gets its own junction at its surface. Cheap electrodes work.</td></tr>
              <tr><td><b>Novel reaction products</b> are possible, and <b>catalytic effects (photocatalysis)</b> can be induced on the SC surface</td><td>The surface is where the chemistry happens, so it can be tuned to make new products.</td></tr>
              <tr><td><b>Particulate systems</b> can be used</td><td>Powder grains suspended in the electrolyte each act as a tiny short-circuited cell, running both reactions on their own surface.</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>Scenario questions usually hinge on cheap electrodes or hydrogen production. The points that score: junction by simple dipping, poly and thin-film electrodes as good as single crystal, and water splitting in situ.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Photoelectrochemical cell?', back: 'A photoactive <b>semiconductor electrode</b> in contact with an <b>electrolyte</b>; light generates a photocurrent.' },
        { front: 'Condition for making electron–hole pairs in a PEC cell?', back: 'Light energy <b>greater than E<sub>g</sub></b> of the semiconductor.' },
        { front: 'What separates the pairs, and what do they then do?', back: 'The <b>junction potential</b>; the separated charges drive <b>oxidation and reduction</b>.' },
        { front: 'LJSC construction and output?', back: '<b>n-SC / Electrolyte / Metal</b>; solar → <b>electrical</b> energy.' },
        { front: 'What does a PES cell do?', back: 'Converts solar energy into <b>chemical energy in the form of fuels</b>.' },
        { front: 'Four requirements for PEC electrodes?', back: 'Optimum <b>E<sub>g</sub></b>; optimum <b>doping</b>; large <b>α</b>; <b>applied bias</b>.' },
        { front: 'Why should the doping level be optimum?', back: 'Good <b>spatial separation</b> of photo-generated carriers, hence high <b>quantum efficiency</b>.' },
        { front: 'Large absorption coefficient α is usually found in?', back: '<b>Direct band gap</b> semiconductors.' },
        { front: 'What makes a PEC cell "regenerative"?', back: 'Red → Ox at the SC and Ox → Red at the counter electrode: <b>no net chemical change</b>, only electricity out.' },
        { front: 'Five advantages of PEC over PV?', back: 'Easy junction (<b>dipping</b>); in-situ <b>water electrolysis</b>; poly/thin film ≈ single crystal; <b>photocatalysis</b> and novel products; <b>particulate</b> systems.' }
      ],
      oneLiners: [
        'PEC cell = photoactive SC electrode + electrolyte; hν &gt; E<sub>g</sub> makes e<sup>−</sup>–h<sup>+</sup> pairs, separated by the junction potential to drive redox.',
        'LJSC (n-SC/Electrolyte/Metal) → electricity; PES cells → fuels.',
        'Electrode needs: optimum E<sub>g</sub>, optimum doping (high quantum efficiency), large α (direct gap), applied bias.',
        'Regenerative cell: Red → Ox at the SC (holes), Ox → Red at the counter electrode (electrons).',
        'PEC over PV: junction by dipping, in-situ water electrolysis, poly/thin film ≈ single crystal, photocatalysis, particulate systems.'
      ],
      formulas: [
        { name: 'PEC pair generation', html: `hν &gt; E<sub>g</sub> → e<sup>−</sup> (CB) + h<sup>+</sup> (VB)`, note: 'Only photons above the band gap make carriers.' },
        { name: 'Regenerative cycle', html: `Red → Ox (at SC, by h<sup>+</sup>) ; Ox → Red (at counter electrode, by e<sup>−</sup>)`, note: 'The electrolyte is restored, so the only output is electricity.' }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: 'm2-dssc',
      title: 'Dye-sensitized solar cells',
      short: 'Dye-sensitized cells',
      blurb: 'The Grätzel cell: a dye on nanoporous TiO₂ catches the light and iodide carries electrons back. Parts and their specs, the working equations, a hibiscus-tea build, pros and cons, and PV vs PEC vs DSSC.',
      source: 'Slides 60–72',
      tabs: [
        { title: 'The Grätzel cell', html: `
          <p class="lead">A dye-sensitized solar cell (DSSC), or <b>Grätzel cell</b>, is a kind of PEC cell. A film of <b>TiO<sub>2</sub></b> coated with a <b>dye</b> catches the light, and an <b>iodide electrolyte</b> carries electrons back to the dye.</p>
          <figure data-fig="m2-dssc-schematic"></figure>
          <div class="kv">
            <div><span>Conductive glass</span><b>FTO or ITO</b></div>
            <div><span>Semiconductor</span><b>Nanoporous TiO<sub>2</sub></b></div>
            <div><span>Sensitizer (S) in the figure</span><b>Ru(bpy)<sub>3</sub><sup>2+</sup></b></div>
            <div><span>Electrolyte + redox</span><b>3I<sup>−</sup>/I<sub>3</sub><sup>−</sup></b></div>
            <div><span>Counter electrode</span><b>Pt or graphite</b></div>
            <div><span>Light</span><b>Visible</b></div>
          </div>
          <ul>
            <li>bpy = <b>bipyridyl ligand</b>.</li>
            <li>Dye states: <b>S<sub>o</sub></b> = ground state (reduced), <b>S<sup>+</sup></b> = oxidised, <b>S*</b> = excited state.</li>
            <li>The dyed TiO<sub>2</sub> side is the <b>anode</b> (the −ve plate); the counter electrode is the <b>cathode</b>.</li>
          </ul>
          <div class="note why"><p>TiO<sub>2</sub> on its own absorbs only UV. The dye's job is to absorb visible light and hand the electron to the TiO<sub>2</sub>. So light absorption (dye) and charge transport (TiO<sub>2</sub>) are split between two materials, whereas in a silicon cell one material does both.</p></div>
          <div class="note heads-up"><p>The figure marks the anode "+" and the cathode "−". In the working cell the signs are the other way round: electrons pile up in the dyed TiO<sub>2</sub> plate, which slide 60 correctly calls the −ve plate, so the counter electrode is +. "Energitics" and "legand" in the figure mean energetics and ligand.</p></div>
        ` },
        { title: 'Working principle', html: `
          <p class="lead">A DSSC works in four basic steps: <b>light absorption</b>, <b>electron injection</b>, <b>carrier transport</b> and <b>current collection</b>. Then the dye is regenerated so the cycle can repeat.</p>
          <ol class="steps">
            <li><b>Light absorption</b> Sunlight (photons) passes through the TiO<sub>2</sub> layer and is absorbed by the photosensitizer. Electrons are promoted from the ground state (Dye) to the <b>excited state (Dye*)</b>.</li>
            <li><b>Electron injection</b> The excited electrons, with a lifetime in the <b>nanosecond</b> range, escape the dye into the <b>conduction band of nanoporous TiO<sub>2</sub></b>, which lies below the dye's excited state. The dye is now <b>oxidised</b>.</li>
            <li><b>Carrier transport</b> These free electrons move through the TiO<sub>2</sub> and accumulate at the <b>−ve plate</b> (the dyed TiO<sub>2</sub> plate).</li>
            <li><b>Current collection</b> They flow through the external circuit as an electric current that powers the <b>light bulb</b>.</li>
            <li><b>Dye regeneration</b> The dye regains its lost electrons from the <b>iodide</b> electrolyte: I<sup>−</sup> is oxidised (loss of 2 electrons) to <b>tri-iodide, I<sub>3</sub><sup>−</sup></b>. Electrons arriving at the <b>graphite plate</b> reduce I<sub>3</sub><sup>−</sup> back to I<sup>−</sup>, and the dye is ready for the next excitation/oxidation/reduction cycle.</li>
          </ol>
          <div class="eq" data-label="Absorption">Dye<sub>o</sub> + hν → Dye*</div>
          <div class="eq" data-label="Injection">Dye* → Dye*<sup>+</sup> + e<sup>−</sup> (TiO<sub>2</sub>)</div>
          <div class="eq" data-label="Dye regeneration">2Dye<sup>+</sup> + 3I<sup>−</sup> → 2Dye + I<sub>3</sub><sup>−</sup></div>
          <div class="eq" data-label="At the counter electrode">I<sub>3</sub><sup>−</sup> + 2e<sup>−</sup> → 3I<sup>−</sup></div>
          <p><small>The first two lines are exactly as on slide 70. The last two are the standard way of writing what slide 60 says in words.</small></p>
          <p>Step through the cycle one stage at a time. Before reading each label, say which part should light up: glass, dye, TiO<sub>2</sub>, wire or electrolyte.</p>
          <div data-viz="dssc"></div>
          <div class="note why"><p>Injection works only because the TiO<sub>2</sub> conduction band sits <b>below</b> Dye*, so the electron rolls downhill. It also has to be quick, because the excited state lasts only nanoseconds before it would relax back and waste the photon.</p></div>
          <div class="note heads-up"><p>Slide 70 writes the oxidised dye as Dye*<sup>+</sup>. Once the electron has left, the dye is simply oxidised, and most books (and slide 61's own legend, S<sup>+</sup>) write it as Dye<sup>+</sup>.</p></div>
        ` },
        { title: 'Glass & working electrode', html: `
          <p class="lead">The cell is built on <b>transparent, conductive glass</b>. On it sits the <b>working electrode</b>: a porous film of a wide-gap oxide that holds the dye.</p>
          <h3>Transparent conductive substrate</h3>
          <ul>
            <li>The base on which the <b>semiconductor and the catalyst</b> are deposited; it also acts as the <b>current collector</b>.</li>
            <li>Needs <b>more than 80% transparency</b> and <b>high electrical conductivity</b>.</li>
            <li>Usual choices: <b>FTO</b> (fluorine-doped tin oxide, SnO<sub>2</sub>:F) and <b>ITO</b> (In<sub>2</sub>O<sub>3</sub>:Sn), as layers coated on <b>soda lime glass</b>.</li>
          </ul>
          <table class="tbl">
            <thead><tr><th></th><th>ITO</th><th>FTO</th></tr></thead>
            <tbody>
              <tr><td>Composition</td><td>In<sub>2</sub>O<sub>3</sub>:Sn</td><td>SnO<sub>2</sub>:F</td></tr>
              <tr><td>Transmittance</td><td><b>&gt; 80%</b></td><td><b>~75%</b> in the visible</td></tr>
              <tr><td>Sheet resistance</td><td><b>18 Ω/cm<sup>2</sup></b></td><td><b>8.5 Ω/cm<sup>2</sup></b></td></tr>
            </tbody>
          </table>
          <p>So ITO is clearer, FTO conducts better. Their wide gaps (ITO 3.7–4.4 eV, FTO 3.9–4.6 eV, slide 53) are why both look clear.</p>
          <div class="note heads-up"><p>The slide calls ITO "indium-doped tin oxide", but its formula In<sub>2</sub>O<sub>3</sub>:Sn shows what it is: <b>tin-doped indium oxide</b>. Sheet resistance is normally quoted in Ω/□ (ohms per square); keep the slide's numbers and units in answers.</p></div>
          <h3>Working electrode (WE)</h3>
          <ul>
            <li>Made by depositing a <b>thin layer of oxide semiconductor</b> on FTO or ITO glass: <b>TiO<sub>2</sub>, Nb<sub>2</sub>O<sub>5</sub>, ZnO, SnO<sub>2</sub></b> (n-type) and <b>NiO</b> (p-type).</li>
            <li>These oxides have a <b>wide band gap of 3–3.2 eV</b>.</li>
            <li><b>TiO<sub>2</sub></b> is used most, because it is <b>non-toxic</b> and <b>easily available</b>.</li>
            <li>To boost its activity, the TiO<sub>2</sub> layer is soaked in a mixture of a <b>photosensitive molecular sensitizer</b> and a solvent.</li>
            <li>The film is <b>highly porous</b> with a <b>large surface area</b>, so a large number of dye molecules attach to the <b>nanocrystalline TiO<sub>2</sub></b> and light absorption goes up.</li>
          </ul>
          <div class="note why"><p>A 3–3.2 eV gap means TiO<sub>2</sub> absorbs only light shorter than about 390–410 nm (λ ≈ 1240/E nm), which is UV. Hence the dye. Porosity matters because one flat layer of dye absorbs very little; a sponge-like film packs a huge area of dye into the light path.</p></div>
          <div class="note heads-up"><p>3–3.2 eV really describes TiO<sub>2</sub> (about 3.0 eV rutile, 3.2 eV anatase). The deck's own slide 53 puts ZnO at 3.3 eV.</p></div>
        ` },
        { title: 'Dyes', html: `
          <p class="lead">The dye (photosensitizer) is responsible for the <b>maximum absorption of light</b>. It has to absorb well, stay put on the TiO<sub>2</sub>, and last.</p>
          <h3>Properties a good dye needs</h3>
          <ul>
            <li>Should be <b>luminescent</b>.</li>
            <li>Its absorption spectrum should cover the <b>UV-vis and NIR</b> regions.</li>
            <li>Its <b>periphery should be hydrophobic</b>, for long-term stability of the cell.</li>
            <li><b>Co-absorbents</b> such as <b>chenodeoxycholic acid (CDCA)</b>, or <b>anchoring groups</b> such as alkoxy-silyl, phosphoric acid and <b>–COOH</b>, should be present to stop the dye <b>aggregating</b> on the TiO<sub>2</sub> surface.</li>
          </ul>
          <div class="note why"><p>Water that reaches the TiO<sub>2</sub> surface can push the dye off, so a water-repelling outer shell keeps the cell alive longer. Dye molecules that clump together pass energy among themselves and waste it instead of each injecting an electron, so they must sit spread out and anchored.</p></div>
          <div class="note heads-up"><p>"Co-absorbents" on the slide means co-<b>ad</b>sorbents: CDCA sits on the TiO<sub>2</sub> surface next to the dye molecules and keeps them apart.</p></div>
          <h3>Kinds of dye</h3>
          <ul>
            <li>A range of dyes is used in Grätzel cells, for example <b>ruthenium-polypyridine</b>, <b>indoline dye</b> and <b>metal-free organic dye</b>.</li>
            <li>Dyes can be extracted from simple foods: <b>hibiscus tea</b>, <b>tinned summer fruits</b>, <b>blackberries</b>.</li>
          </ul>
          <figure data-fig="m2-dssc-ru-dyes"></figure>
          <p>Naturally occurring dye sources shown on slide 66:</p>
          <div class="chips"><span class="chip">Beetroot (Beta vulgaris)</span><span class="chip">Grape skin (Vitis vinifera)</span><span class="chip">Raspberry (Rubus idaeus)</span><span class="chip">Black plum (Syzygium cumini)</span><span class="chip">Mangosteen (Garcinia mangostana)</span></div>
          <p>Pigments drawn: <b>betanin</b> (beetroot), <b>cyanidin</b>, <b>pelargonidin</b> and <b>peonidin</b> (the anthocyanin family of red-purple fruit pigments) and <b>mangostin</b> (mangosteen).</p>
          <figure data-fig="m2-dssc-natural-dyes"></figure>
        ` },
        { title: 'Electrolyte & counter electrode', html: `
          <p class="lead">The electrolyte carries electrons from the counter electrode back to the oxidised dye, and the counter electrode is where they are handed over.</p>
          <h3>Electrolyte</h3>
          <div class="chips"><span class="chip">I<sup>−</sup>/I<sub>3</sub><sup>−</sup></span><span class="chip">Br<sup>−</sup>/Br<sub>2</sub><sup>−</sup></span><span class="chip">SCN<sup>−</sup>/SCN<sub>2</sub></span><span class="chip">Co(II)/Co(III)</span></div>
          <p>It has five main components: <b>redox couple</b>, <b>solvent</b>, <b>additives</b>, <b>ionic liquids</b> and <b>cations</b>.</p>
          <p>Properties it should have:</p>
          <ul>
            <li>The redox couple must <b>regenerate the oxidised dye</b> efficiently.</li>
            <li><b>Chemical, thermal and electrochemical stability</b>.</li>
            <li><b>Non-corrosive</b> towards the DSSC components.</li>
            <li>Allows <b>fast diffusion</b> of charge carriers, enhances conductivity, and makes <b>effective contact</b> between the working and counter electrodes.</li>
          </ul>
          <h3>Counter electrode (CE)</h3>
          <p>Mostly made from <b>Pt</b>, <b>C</b>, <b>CoS</b>, <b>Au/GNP</b>, and alloy CEs such as <b>FeSe</b> and <b>CoNi<sub>0.25</sub></b>. In the classroom cell it is simply a graphite coating.</p>
          <div class="note why"><p>The CE has to reduce I<sub>3</sub><sup>−</sup> back to I<sup>−</sup> quickly, and that reaction is slow on bare conducting glass. So the CE is really a catalyst: platinum works best but is costly, and carbon/graphite is the cheap option.</p></div>
          <div class="note heads-up"><p>The bromide and thiocyanate couples are more often written Br<sup>−</sup>/Br<sub>3</sub><sup>−</sup> and SCN<sup>−</sup>/(SCN)<sub>2</sub>. If asked for examples, reproducing the slide's forms is fine.</p></div>
        ` },
        { title: 'Hibiscus-tea cell', html: `
          <p class="lead">A working Grätzel cell can be made on a lab bench from two coated glass plates, some hibiscus tea and a paper clip.</p>
          <ol class="steps">
            <li><b>Conducting glass</b> Take two transparent glass plates, each covered on one side with a transparent thin layer of conducting material.</li>
            <li><b>Graphite and TiO<sub>2</sub></b> On the conducting sides, coat one plate with <b>graphite</b> and the other with <b>titanium dioxide (TiO<sub>2</sub>)</b>.</li>
            <li><b>Dye it</b> Adsorb the dye onto the TiO<sub>2</sub> by dipping the plate in a <b>10<sup>−4</sup> M dye solution in alcohol</b> for about <b>10 min</b>.</li>
            <li><b>Sandwich</b> Carefully put the plates together and secure them with a <b>paper clip</b>.</li>
            <li><b>Electrolyte</b> Add a <b>drop of iodide electrolyte</b> between the plates. The cell is complete.</li>
          </ol>
          <figure data-fig="m2-dssc-hibiscus-cell"></figure>
          <div class="kv">
            <div><span>Upper plate</span><b>Dye-coated TiO<sub>2</sub> (anode)</b></div>
            <div><span>Lower plate</span><b>Graphite-coated conductor (cathode)</b></div>
            <div><span>Dye source</span><b>Hibiscus tea</b></div>
            <div><span>Dyeing</span><b>10<sup>−4</sup> M in alcohol, ~10 min</b></div>
          </div>
          <div class="note why"><p>Hibiscus works because its red-purple anthocyanins absorb visible light and carry –OH groups that bind to TiO<sub>2</sub>. Graphite stands in for platinum as a cheap catalyst for turning I<sub>3</sub><sup>−</sup> back into I<sup>−</sup>.</p></div>
          <div class="note heads-up"><p>Slide 68 says the plates are "perforated" with a conducting layer. It means <b>coated</b>; nothing is drilled.</p></div>
        ` },
        { title: 'Pros & cons', html: `
          <p class="lead">DSSCs are cheap and forgiving about light, but the liquid electrolyte is their weak spot.</p>
          <div class="vs">
            <div class="side"><h4>Advantages</h4>
              <ul>
                <li>Work at <b>wider angles</b> and in <b>low light</b></li>
                <li><b>Long life</b></li>
                <li>Good <b>price/performance ratio</b></li>
                <li><b>Low cost</b></li>
                <li><b>Mechanically tough</b> (good mechanical strength)</li>
                <li>Operate at <b>lower internal temperatures</b></li>
                <li><b>Lower electricity bills</b></li>
              </ul>
            </div>
            <div class="side"><h4>Disadvantages</h4>
              <ul>
                <li>The design uses a <b>liquid electrolyte</b>,</li>
                <li>which has <b>temperature stability</b> problems</li>
                <li><b>Costly</b> ruthenium (dye) and platinum (catalyst)</li>
                <li>The electrolyte solution contains <b>volatile organic compounds (VOCs)</b></li>
              </ul>
            </div>
          </div>
          <div class="note why"><p>A liquid can freeze in the cold and expand or leak in the heat, and volatile solvents slowly escape through the seals. That one design choice sits behind most DSSC disadvantages. On the plus side, the porous, dye-soaked film absorbs diffuse light well, so cloudy skies and slanted sunlight hurt it less than a flat silicon panel.</p></div>
          <div class="note trap"><p>"Low cost" and "costly Ru and Pt" both appear, and they do not clash. The cell as a whole is cheap to make; the best-performing versions just rely on two expensive elements. Natural dyes and graphite electrodes remove both.</p></div>
          <details class="more"><summary>Slide 71 as shown in class</summary>
            <figure data-fig="m2-dssc-pros-cons"></figure>
          </details>
        ` },
        { title: 'PV vs PEC vs DSSC', html: `
          <p class="lead">The final slide puts the three cell types side by side. Learn this table; a comparison question almost always turns up.</p>
          <table class="tbl">
            <thead><tr><th></th><th>Photovoltaic (PV)</th><th>Photoelectrochemical (PEC)</th><th>Dye-sensitized (DSSC)</th></tr></thead>
            <tbody>
              <tr><td>What it is</td><td>Converts sunlight <b>directly into electricity</b> by the photovoltaic effect, using a semiconductor</td><td>Converts light into <b>electrical or chemical energy</b> using a photoactive SC electrode, an electrolyte and a counter electrode (like a metal)</td><td>A <b>kind of PEC cell</b> using thin films with organic (natural and synthetic) dye and inorganic (<b>ruthenium</b>) sensitizer</td></tr>
              <tr><td>Uses</td><td><b>Semiconductors</b></td><td><b>SC/electrolyte junction</b></td><td><b>SC and dye</b></td></tr>
              <tr><td>Transparency</td><td><b>Opaque</b></td><td>Transparent</td><td>Transparent</td></tr>
              <tr><td>Power generation cost</td><td><b>High</b></td><td>Low</td><td>Low</td></tr>
              <tr><td>Power generation efficiency</td><td><b>High</b></td><td>Normal</td><td>Normal</td></tr>
              <tr><td>Environmental impact</td><td><b>High</b></td><td>Low</td><td>Low</td></tr>
            </tbody>
          </table>
          <div class="mnemonic"><p>PV is the odd one out on every feature row: <b>opaque, high cost, high efficiency, high impact</b>. PEC and DSSC give the same answers: transparent, low, normal, low.</p></div>
          <div class="note exam"><p>For a "which cell for this job" question: choose PV when output per area is everything (satellites, a small roof); choose a DSSC for windows, low light and tight budgets; choose a PEC (PES) cell when the goal is a fuel such as hydrogen rather than electricity.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Four basic steps of DSSC operation?', back: '<b>Light absorption</b>, <b>electron injection</b>, <b>carrier transport</b>, <b>current collection</b> (then dye regeneration).' },
        { front: 'Dye excitation and injection equations (slide 70)?', back: '<b>Dye<sub>o</sub> + hν → Dye*</b>; <b>Dye* → Dye*<sup>+</sup> + e<sup>−</sup> (TiO<sub>2</sub>)</b>.' },
        { front: 'Lifetime of the excited electrons, and where they go?', back: '<b>Nanosecond</b> range; injected into the <b>conduction band of nanoporous TiO<sub>2</sub></b>, which lies below Dye*.' },
        { front: 'How is the oxidised dye regenerated?', back: '<b>I<sup>−</sup></b> gives it electrons and is oxidised (loses 2 e<sup>−</sup>) to <b>I<sub>3</sub><sup>−</sup></b>; I<sub>3</sub><sup>−</sup> is reduced back at the graphite (or Pt) plate.' },
        { front: 'ITO vs FTO numbers?', back: 'ITO: <b>&gt; 80%</b> transmittance, <b>18 Ω/cm<sup>2</sup></b>. FTO: <b>~75%</b>, <b>8.5 Ω/cm<sup>2</sup></b>. Both on soda lime glass.' },
        { front: 'Working-electrode oxides and their band gap?', back: '<b>TiO<sub>2</sub>, Nb<sub>2</sub>O<sub>5</sub>, ZnO, SnO<sub>2</sub></b> (n-type), <b>NiO</b> (p-type); <b>3–3.2 eV</b>.' },
        { front: 'Why is TiO₂ the usual choice?', back: '<b>Non-toxic</b> and <b>easily available</b>; porous, high-area film holds lots of dye.' },
        { front: 'Properties of a good DSSC dye?', back: '<b>Luminescent</b>; absorbs <b>UV-vis and NIR</b>; <b>hydrophobic</b> periphery; <b>CDCA</b> or anchoring groups (alkoxy-silyl, phosphoric acid, –COOH) to prevent aggregation.' },
        { front: 'Five main components of a DSSC electrolyte?', back: '<b>Redox couple, solvent, additives, ionic liquids, cations</b>.' },
        { front: 'Counter-electrode materials?', back: '<b>Pt, C, CoS, Au/GNP</b>; alloys <b>FeSe</b> and <b>CoNi<sub>0.25</sub></b>.' },
        { front: 'Dye solution used for the hibiscus-tea cell?', back: '<b>10<sup>−4</sup> M</b> in alcohol, about <b>10 min</b>; upper TiO<sub>2</sub> plate = anode, lower graphite plate = cathode.' },
        { front: 'Main disadvantages of a DSSC?', back: '<b>Liquid electrolyte</b> with temperature stability problems, costly <b>Ru</b> dye and <b>Pt</b> catalyst, <b>VOCs</b> in the electrolyte.' }
      ],
      oneLiners: [
        'DSSC (Grätzel cell) = a PEC cell: dye on nanoporous TiO<sub>2</sub> on FTO/ITO glass, I<sup>−</sup>/I<sub>3</sub><sup>−</sup> electrolyte, Pt or graphite counter electrode.',
        'Four steps: light absorption, electron injection, carrier transport, current collection; then I<sup>−</sup> regenerates the dye.',
        'ITO: &gt; 80% transmittance, 18 Ω/cm<sup>2</sup>; FTO: ~75%, 8.5 Ω/cm<sup>2</sup>; substrate needs &gt; 80% transparency and high conductivity.',
        'WE oxides TiO<sub>2</sub>, Nb<sub>2</sub>O<sub>5</sub>, ZnO, SnO<sub>2</sub> (n) and NiO (p), Eg 3–3.2 eV; TiO<sub>2</sub> chosen for non-toxicity and availability.',
        'Dyes: Ru-polypyridine, indoline, metal-free organic; natural ones from hibiscus tea, tinned summer fruits, blackberries, beetroot, grapes, raspberry, black plum, mangosteen.',
        'Electrolyte = redox couple, solvent, additives, ionic liquids, cations; CE = Pt, C, CoS, Au/GNP, FeSe, CoNi<sub>0.25</sub>.',
        'PV: opaque, high cost, high efficiency, high environmental impact; PEC and DSSC: transparent, low cost, normal efficiency, low impact.'
      ],
      formulas: [
        { name: 'DSSC: dye excitation', html: `Dye<sub>o</sub> + hν → Dye*`, note: 'Light absorption by the photosensitizer.' },
        { name: 'DSSC: electron injection', html: `Dye* → Dye*<sup>+</sup> + e<sup>−</sup> (TiO<sub>2</sub>)`, note: 'As written on slide 70; usually written Dye⁺ for the oxidised dye.' },
        { name: 'DSSC: dye regeneration', html: `2Dye<sup>+</sup> + 3I<sup>−</sup> → 2Dye + I<sub>3</sub><sup>−</sup>`, note: 'Iodide loses 2 electrons in total to form tri-iodide.' },
        { name: 'DSSC: counter electrode', html: `I<sub>3</sub><sup>−</sup> + 2e<sup>−</sup> → 3I<sup>−</sup>`, note: 'At the graphite or Pt plate; closes the circuit.' }
      ]
    }
  ],

  figures: [
    { id: 'm2-solar-panels', src: 'm2/images/s43_f5dcfc0e.jpg', crop: null,
      caption: 'Flat PV panels tilted towards the Sun: the practical route to a slice of that ≈ 600 TW.',
      alt: 'Photo of solar panels on a green globe under a bright sun and blue sky.' },
    { id: 'm2-solar-methods-tree', src: 'm2/slides/s44.png', crop: [0.14, 0.188, 0.70, 0.747],
      caption: 'Slide 44 tree of methods for tapping solar energy. Follow the red arrows from D (chemical routes) down to the PEC sub-types and their efficiencies.',
      alt: 'Tree: A photosynthesis (plants, visible, 2–4%), B water heaters (flat plate, tube, IR), C photovoltaic cells (p/n Si, GaAs, visible, 12–26%), D chemical routes branching to D1 biomimetism and D2 PEC cells, which split into LJSC (Sc/Elect/M 13–14%, photogalvanic M/Elect/M 0.01%) and PES cells (photoassisted electrolysis 13.3%, photoassisted electrosynthesis CO2 to CH3OH, N2 to NH3).' },
    { id: 'm2-pv-si-structures', src: 'm2/images/s48_a6ea8f55.png', crop: null,
      caption: 'Atom arrangement in single-crystal (left), polycrystalline (middle) and amorphous (right) silicon. Look for the grain boundaries in the middle panel and the total lack of pattern on the right.',
      alt: 'Three panels of grey spheres on black: a perfect regular lattice, a lattice broken into differently oriented patches, and a random jumble.' },
    { id: 'm2-pv-mono-cell', src: 'm2/slides/s48.png', crop: [0.583, 0.536, 0.255, 0.413],
      caption: 'A single-crystal (mono) Si cell: uniform dark blue, with cut-off corners because it is sliced from a round grown crystal.',
      alt: 'Close-up of a dark blue monocrystalline silicon cell with thin silver contact lines and white diamond gaps at the corners.' },
    { id: 'm2-pv-poly-cell', src: 'm2/slides/s49.png', crop: [0.592, 0.458, 0.283, 0.504],
      caption: 'A polycrystalline Si cell: the speckled, flaky pattern is the many separately oriented grains.',
      alt: 'Close-up of a blue polycrystalline silicon cell with a mottled, crystal-flake texture and horizontal contact lines.' },
    { id: 'm2-pv-amorphous-film', src: 'm2/slides/s50.png', crop: [0.603, 0.461, 0.275, 0.489],
      caption: 'Amorphous Si thin-film panels: smooth and even, with no grain pattern at all.',
      alt: 'Smooth blue and purple thin-film panels arranged like tiles.' },
    { id: 'm2-pv-pn-depletion', src: 'm2/images/s51_72ac2241.gif', crop: null,
      caption: 'A p–n junction. Carriers diffuse across, leaving + donor ions and − acceptor ions in the depletion layer, and the graph below shows the potential stepping down from the N side to the P side.',
      alt: 'N-region (blue, free electrons and positive donor ions) and P-region (orange, holes and negative acceptor ions) with a yellow depletion layer between them, a diffusion arrow above, a battery symbol across the layer, and a volts graph dropping from + to − across the junction.' },
    { id: 'm2-pv-cell-circuit', src: 'm2/slides/s52.png', crop: [0.015, 0.075, 0.455, 0.49],
      caption: 'A PV cell in a circuit. Light passes the anti-reflection coating, pairs form at the n/p boundary, and electrons flow from the top electrode through the external load.',
      alt: 'Cross-section: anti-reflection coating and top electrode (−), N-type silicon over P-type silicon, bottom electrode (+), light arrows entering, plus and minus charge pairs, and a bulb as the external load with a current arrow.' },
    { id: 'm2-pv-inside-eia', src: 'm2/images/s52_2c21a9a6.png', crop: [0, 0.075, 1, 0.925],
      caption: 'Inside a PV cell (U.S. EIA). The three lower panels show light freeing electrons, the junction sorting electrons and holes, and electrons flowing out through the bulb.',
      alt: 'Layered cell: glass, transparent negative terminal, n-type layer, junction, p-type layer, positive terminal; below, three stages of freed electrons, holes filled by freed electrons, and electron flow (current) through a light bulb.' },
    { id: 'm2-pv-gap-table', src: 'm2/images/s53_664e6f84.png', crop: null,
      caption: 'Band gaps and crystal structures of PV semiconductors, as printed on slide 53.',
      alt: 'Table: c-Si 1.12 (i) dia; GaAs 1.424 (d) zb; InP 1.35 (d) zb; a-Si ~1.8 (d); CdTe 1.45–1.5 (d) zb; CuInSe2 0.96–1.04 (d) ch; AlxGa1-xAs formulas.' },
    { id: 'm2-pv-tco-gap-table', src: 'm2/images/s53_778d4422.png', crop: null,
      caption: 'Band gaps of wide-gap sulfides, oxides and transparent conductors, as printed on slide 53.',
      alt: 'Table: CdS 2.42, ZnS 3.58, Zn0.3Cd0.7S 2.8, ZnO 3.3, In2O3:Sn 3.7–4.4, SnO2:F 3.9–4.6 eV.' },
    { id: 'm2-pec-band-diagram', src: 'm2/images/s58_70f2d453.png', crop: null,
      caption: 'Regenerative PEC cell as a band diagram. The hole climbs to the surface and turns Red into Ox; the electron goes round the meter and the counter electrode turns Ox back into Red.',
      alt: 'Semiconductor electrode with bent conduction and valence bands, photon hν exciting an electron, hole h+ moving to the electrolyte, Red/Ox cycle in the electrolyte, counter electrode on the right, meter in the external circuit.' },
    { id: 'm2-pec-liquid-junction', src: 'm2/images/s58_0391b9b7.png', crop: [0, 0, 1, 0.9],
      caption: 'A semiconductor | liquid junction photovoltaic cell: a lit semiconductor and a metal electrode in the same electrolyte, joined through a meter.',
      alt: 'Sun sending hν to a semiconductor block with CB, VB, e− and h+; red to ox arrow at the semiconductor, ox to red at the metal electrode; external wire with a meter and electron arrows.' },
    { id: 'm2-dssc-schematic', src: 'm2/images/s61_d4e413fe.jpg', crop: [0, 0, 0.75, 0.965],
      caption: 'Grätzel cell layout. Follow the electron: S* injects into TiO₂, it goes up the conductive glass, round the bulb, into the counter electrode, and back through the Red/Ox couple to the dye.',
      alt: 'Conductive glass with a TiO2 layer and red adsorbed photosensitizer beads on the left, visible light arrows, energy levels S* and So/S+, a Red to Ox cycle in the 3I−/I3− electrolyte, a black counter electrode on the right, and a bulb in the external circuit labelled anode and cathode.' },
    { id: 'm2-dssc-ru-dyes', src: 'm2/images/s65_027a53c9.jpg', crop: null,
      caption: 'Ruthenium polypyridyl sensitizers (numbered 14–20 in the source). Nearly all carry –COOH groups on the bipyridine rings: those are the anchors that bind the dye to TiO₂.',
      alt: 'Seven chemical structures of ruthenium complexes with bipyridine ligands bearing COOH groups, some with NCS ligands, thiophene chains or CF3 groups.' },
    { id: 'm2-dssc-natural-dyes', src: 'm2/images/s66_ab1b2b60.jpg', crop: null,
      caption: 'Natural dye sources and their pigments: beetroot (betanin), grape skin, raspberry, black plum and mangosteen, with cyanidin, pelargonidin, peonidin and mangostin structures. The slide spells mangosteen as "Mangostee".',
      alt: 'Photos of beetroot, grapes, raspberries, black plums and mangosteen with the chemical structures of betanin, cyanidin, pelargonidin, mangostin and peonidin.' },
    { id: 'm2-dssc-hibiscus-cell', src: 'm2/slides/s69.png', crop: [0.075, 0.425, 0.815, 0.545],
      caption: 'A Grätzel cell made with hibiscus tea, held by a paper clip. The dark upper plate is the dyed TiO₂ anode; the lower plate carries the graphite cathode.',
      alt: 'Two offset glass plates, the upper one stained dark blue-purple, clamped with a paper clip; labels read upper plate dye coated TiO2 plate (anode), lower plate graphite coated conductor (cathode).' },
    { id: 'm2-dssc-pros-cons', src: 'm2/images/s71_894430c4.jpg', crop: null,
      caption: 'The advantages and disadvantages list exactly as slide 71 shows it.',
      alt: 'Two-column list. Advantages: wider angles and low light, long life, good price/performance, low cost, mechanical robustness, lower internal temperatures, lower electricity bills. Disadvantages: liquid electrolyte with temperature stability problems, costly ruthenium and platinum, volatile organic compounds.' }
  ]
});
