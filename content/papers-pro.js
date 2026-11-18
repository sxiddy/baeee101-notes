// Pro companion of papers-free.js: the "asked in" detail (which paper, which question, what was asked) and the
// official answer key where the paper came with one. Paper entries here carry only id and the questions' n + answer;
// app/js/boot.js merges them into the free copy by id.
PAPERS({
  asked: {
    'm4-hole-making': [{ where: 'Part 2, Q3(b)', what: 'drilling and reaming; differences in purpose and application', paper: 'fat-b1-2026' }],
    'm4-casting-design': [{ where: 'Part 2, Q3(a)', what: 'what a pattern is; types of pattern with applications', paper: 'fat-b1-2026' }],
    'm1-ac-basics': [{ where: 'Part 1, Q3', what: 'phase difference between a sine voltage and a cosine current', paper: 'fat-b1-2026' }],
    'm4-am-categories': [{ where: 'Q9(b)', what: 'categories of additive manufacturing with examples', paper: 'fat-a2-2026' }],
    'm4-solar-biomass': [{ where: 'Q9(a)', what: 'solar energy conversion technologies (with nuclear fission)', paper: 'fat-a2-2026' }],
    'm4-nuclear': [{ where: 'Q9(a)', what: 'nuclear fission and the main parts of a reactor (with solar technologies)', paper: 'fat-a2-2026' }],
    'm4-refrigeration': [{ where: 'Q8', what: 'components and working of a refrigeration system with a schematic', paper: 'fat-a2-2026' }],
    'm2-emosfet': [{ where: 'Q5', what: 'n-channel E-MOSFET construction, channel formation, drain and transfer characteristics with regions and V<sub>T</sub>', paper: 'fat-a2-2026' }],
    'm2-em-spectrum': [{ where: 'Q4', what: 'types of optical spectra and their ranges', paper: 'fat-a2-2026' }],
    'm2-optical': [{ where: 'Q4', what: 'types of optical spectra and their ranges', paper: 'fat-a2-2026' }],
    'm2-pn-junction': [{ where: 'Q3(a)', what: 'Zener versus avalanche breakdown mechanisms', paper: 'fat-a2-2026' }],
    'm1-bldc': [{ where: 'Q2', what: 'three-phase BLDC motor: construction, working and three applications', paper: 'fat-a2-2026' }, { where: 'Part 1, Q4', what: 'BLDC advantages over brushed DC motors, construction, working, applications', paper: 'fat-b1-2026' }],
    'm4-two-stroke': [{ where: 'Part 2, Q4', what: 'working of a two-stroke petrol engine with a labelled diagram', paper: 'fat-a1-2026' }, { where: 'Q10(a)', what: 'four-stroke engine with diagram, compared with a two-stroke engine', paper: 'fat-a2-2026' }, { where: 'Part 2, Q4', what: 'SI versus CI engines; four-stroke versus two-stroke', paper: 'fat-b1-2026' }],
    'm4-sand-casting': [{ where: 'Part 2, Q3(a)', what: 'sand casting with a labelled diagram; functions of basin, sprue, runner, riser, core, flask, pattern', paper: 'fat-a1-2026' }, { where: 'Q10(b)', what: 'criteria for choosing sand casting and the process steps with a diagram', paper: 'fat-a2-2026' }],
    'm3-isometric': [{ where: 'Part 2, Q2', what: 'isometric view of a cylinder Ø60 × 65 standing on its base', paper: 'fat-a1-2026' }, { where: 'Q7', what: 'isometric view of a cone Ø50 × 70 on its base, with dimensions', paper: 'fat-a2-2026' }, { where: 'Part 2, Q2', what: 'isometric view of a hexagonal prism, side 20, height 60, base on HP', paper: 'fat-b1-2026' }],
    'm2-modulation': [{ where: 'Part 1, Q5(b)', what: 'modulation and its need; AM versus FM', paper: 'fat-a1-2026' }],
    'm2-comm-system': [{ where: 'Part 1, Q5(a)', what: 'general communication system: block diagram and functions of the blocks', paper: 'fat-a1-2026' }],
    'm1-dc-machine': [{ where: 'Q5', what: 'working principle of a DC motor and its applications', paper: 'cat1-a1' }, { where: 'Q5', what: 'functions of the commutator, brushes and armature in a DC machine (6 marks)', paper: 'cat1-b2' },  { where: 'Part 1, Q3', what: 'working principle of a DC motor with a rough sketch, main parts and functions', paper: 'fat-a1' }],
    'm1-dc-motor': [{ where: 'Q5', what: 'working principle of a DC motor and its applications', paper: 'cat1-a1' }, { where: 'Q5', what: 'two applications of a DC series motor (2 marks, with the induction motor)', paper: 'cat1-b2' }, { where: 'Part 1, Q3', what: 'working principle of a DC motor with a rough sketch, main parts and functions', paper: 'fat-a1' }],
    'm1-induction-motor': [{ where: 'Q5', what: 'two applications of an induction motor (2 marks, with the DC series motor)', paper: 'cat1-b2' }],
    'm1-mesh': [{ where: 'Part 1, Q2', what: 'mesh analysis with a 12 V source at each end: voltage drop across each resistor', paper: 'fat-a1-2026' }, { where: 'Q1', what: 'mesh analysis of a bridge with a source resistor (10 marks), then the power in each element', paper: 'cat1-a1' }, { where: 'Part 1, Q1', what: 'mesh analysis with two sources: all loop and branch currents (one of two choices)', paper: 'fat-a1' }],
    'm1-nodal': [{ where: 'Q1', what: 'node voltage analysis with 6 A and 10 A sources: power in every resistor', paper: 'fat-a2-2026' }, { where: 'Part 1, Q1', what: 'nodal analysis with three current sources: current in the 5 Ω', paper: 'fat-b1-2026' }, { where: 'Q1', what: 'nodal analysis with a voltage source and a 0.5 A current source: find I', paper: 'cat1-b2' }],
    'm1-rc-rlc': [{ where: 'Part 1, Q3', what: 'series RLC (3 Ω, X<sub>L</sub> 7 Ω, X<sub>C</sub> 10 Ω) on 50 V: element voltages, P, Q, S, pf, leading or lagging', paper: 'fat-a1-2026' }, { where: 'Part 1, Q3', what: 'two-element circuit from v(t) and i(t) (sin and cos): R, C, pf, P and Q', paper: 'fat-b1-2026' }, { where: 'Q4', what: 'series RLC at 50 Hz (6 Ω, 7 Ω, 15 Ω): element voltages, P, Q, S, power factor, leading or lagging', paper: 'cat1-a1' }, { where: 'Q4', what: 'v(t) = 300 sin 314t across R, L, C in series: rms current, phase, i(t), element voltages, power factor, P and Q', paper: 'cat1-b2' }],
    'm1-rl-series': [{ where: 'Part 1, Q2', what: 'series RL on 230 V, 50 Hz (20 Ω, 20 mH): impedance, element voltages, phase angle and phasor diagram', paper: 'fat-a1' }],
    'm1-superposition': [{ where: 'Part 1, Q1', what: 'superposition: magnitude and direction of the current in branch AB (12 V and 9 A sources)', paper: 'fat-a1-2026' }, { where: 'Part 1, Q2', what: 'superposition: power in the 5 Ω (2 V source and 4 A source)', paper: 'fat-b1-2026' }, { where: 'Q2', what: 'superposition with a 5 mA current source and an 8 V battery: current through R1', paper: 'cat1-a1' }, { where: 'Q2', what: 'superposition with a 2 A source and a 20 V source: find i', paper: 'cat1-b2' }],
    'm1-thevenin': [{ where: 'Q3', what: 'Thevenin equivalent of a ladder across the load, then the load current (R = 10 Ω)', paper: 'cat1-a1' }, { where: 'Q3', what: 'Thevenin equivalent between A and B, then the current in a 6 Ω resistor', paper: 'cat1-b2' },  { where: 'Part 1, Q1', what: 'Thevenin equivalent to the left of a-b, then the current in a 6 Ω load (one of two choices)', paper: 'fat-a1' }],
    'm1-transformer': [{ where: 'Q5', what: 'working principle of a transformer (2 marks)', paper: 'cat1-b2' }],
    'm2-bjt-config': [{ where: 'Part 1, Q4', what: 'CE input and output characteristics with circuit and graphs; transistor as a switch', paper: 'fat-a1-2026' }, { where: 'Part 1, Q5(b)', what: 'operating modes of a transistor; CE operation and applications', paper: 'fat-b1-2026' }],
    'm2-diode-vi': [ { where: 'Part 1, Q4', what: 'half-wave and full-wave rectifiers with resistive load, diagrams and waveforms', paper: 'fat-a1' }],
    'm2-sat-basics': [{ where: 'Part 1, Q5(a)', what: 'basic principle of satellite communication (with the Zener regulator)', paper: 'fat-b1-2026' }, { where: 'Part 1, Q5', what: 'block diagram of a satellite communication system, with advantages, disadvantages and applications', paper: 'fat-a1' }],
    'm2-zener': [{ where: 'Q3', what: 'Zener versus avalanche breakdown; why it regulates; Zener current when load current rises; minimum current', paper: 'fat-a2-2026' }, { where: 'Part 1, Q5(a)', what: 'Zener diode as a voltage regulator (with satellite principle)', paper: 'fat-b1-2026' }],
    'm3-lettering-dim': [{ where: 'Q6', what: 'dimension the three views as per standard conventions', paper: 'fat-a2-2026' }, { where: 'Q1', what: 'redraw and fully dimension a stepped outline as per BIS', paper: 'cat2-b1' }],
    'm3-lines': [],
    'm3-ortho-basics': [{ where: 'Part 2, Q1', what: 'front, top and right side views of a bracket with a notched upright and a U-slot, first angle', paper: 'fat-a1-2026' }, { where: 'Part 2, Q1', what: 'front, top and right side views of a stepped block with raised blocks, first angle', paper: 'fat-b1-2026' }, { where: 'Q2', what: 'front, top and left side views of a stepped block, first angle', paper: 'cat2-b1' }, { where: 'Q3', what: 'front, top and right side views of an angle bracket with a rounded top, first angle', paper: 'cat2-b1' }, { where: 'Part 2, Q1', what: 'front, top and right side views from a pictorial view (cylinder with a bored lug), first angle', paper: 'fat-a1' }],
    'm3-six-views': [{ where: 'Part 2, Q1', what: 'front, top and right side views of a bracket with a notched upright and a U-slot, first angle', paper: 'fat-a1-2026' }, { where: 'Q6', what: 'first-angle front, top and right views of a stepped block with an inclined face, fully dimensioned', paper: 'fat-a2-2026' }, { where: 'Part 2, Q1', what: 'front, top and right side views of a stepped block with raised blocks, first angle', paper: 'fat-b1-2026' }, { where: 'Q2', what: 'front, top and left side views of a stepped block, first angle', paper: 'cat2-b1' }, { where: 'Q3', what: 'front, top and right side views of an angle bracket with a rounded top, first angle', paper: 'cat2-b1' }, { where: 'Part 2, Q1', what: 'front, top and right side views from a pictorial view (cylinder with a bored lug), first angle', paper: 'fat-a1' }],
    'm3-solids-hp': [{ where: 'Part 2, Q2', what: 'isometric view of a cylinder Ø60 × 65 standing on its base', paper: 'fat-a1-2026' }, { where: 'Q7', what: 'isometric view of a cone Ø50 × 70 on its base, with dimensions', paper: 'fat-a2-2026' }, { where: 'Part 2, Q2', what: 'isometric view of a hexagonal prism, side 20, height 60, base on HP', paper: 'fat-b1-2026' }, { where: 'Q4', what: 'projections of a pentagonal prism resting on its base on HP (side 30, height 70)', paper: 'cat2-b1' }, { where: 'Part 2, Q2', what: 'isometric view of a pentagonal pyramid (side 30, axis 50) on its base', paper: 'fat-a1' }],
    'm3-solids-vp': [{ where: 'Q5', what: 'projections of a cylinder (diameter 35, height 70) resting on a generator, axis perpendicular to VP', paper: 'cat2-b1' }],
    'm4-four-stroke': [{ where: 'Q10(a)', what: 'four-stroke engine with diagram, compared with a two-stroke engine', paper: 'fat-a2-2026' }, { where: 'Part 2, Q4(b)', what: 'four-stroke versus two-stroke engines', paper: 'fat-b1-2026' }, { where: 'Part 2, Q5', what: 'four-stroke SI engine with P-V diagram (or, in the other choice, vapour compression refrigeration)', paper: 'fat-a1' }],
    'm4-kinematic-pairs': [{ where: 'Part 2, Q5', what: 'kinematic link, pair and chain with examples', paper: 'fat-a1-2026' }, { where: 'Part 2, Q4', what: 'types of kinematic links with examples, and degrees of freedom of a four-bar and a five-link chain', paper: 'fat-a1' }],
    'm4-links-dof': [{ where: 'Part 2, Q5', what: 'kinematic link, pair and chain with examples', paper: 'fat-a1-2026' }, { where: 'Part 2, Q4', what: 'types of kinematic links with examples, and degrees of freedom of a four-bar and a five-link chain', paper: 'fat-a1' }],
    'm4-machining-basics': [{ where: 'Part 2, Q3(b)', what: 'define machining; single point and multi-point cutting tools with sketches', paper: 'fat-a1-2026' }, { where: 'Part 2, Q3', what: 'define machining and explain two conventional machining processes', paper: 'fat-a1' }],
    'm4-mechanisms': [{ where: 'Part 2, Q5', what: 'kinematic link, pair and chain with examples', paper: 'fat-a1-2026' }, { where: 'Part 2, Q5', what: 'types of constrained motion with sketches', paper: 'fat-b1-2026' }, { where: 'Part 2, Q4', what: 'types of kinematic links with examples, and degrees of freedom of a four-bar and a five-link chain', paper: 'fat-a1' }],
    'm4-turning-milling': [{ where: 'Part 2, Q3', what: 'define machining and explain two conventional machining processes', paper: 'fat-a1' }],
    'm4-welding-basics': [],
    'm4-welding-classes': []
  },

  papers: [
    {
      id: 'fat-a1-2026',
      questions: [
        {
          n: '1',
          answer: `
            <p>Model answer (no official key). Take one source at a time, find its current in the 4 Ω branch AB, then add with signs. The 12 V source has + on top; the 9 A source pushes current up into the top rail at the right.</p>
            <div class="worked">
              <div class="given"><p>12 V with 2 Ω in series; 6 Ω from A to the bottom rail; 4 Ω from A to B; two 2 Ω from B to the bottom rail; 9 A source into B.</p></div>
              <div class="solve">
                <div class="eq"><b>Step 1: 12 V alone</b> (9 A source opened). Right of A: 4 + (2 ∥ 2) = 4 + 1 = 5 Ω</div>
                <div class="eq">Seen from the source: 2 + (6 ∥ 5) = 2 + 2.727 = 4.727 Ω, so I = 12/4.727 = 2.538 A</div>
                <div class="eq">V<sub>A</sub> = 2.538 × 2.727 = 6.923 V, so I′<sub>AB</sub> = 6.923/5 = 1.385 A from A to B</div>
                <div class="eq"><b>Step 2: 9 A alone</b> (12 V shorted). Left of B: 4 + (2 ∥ 6) = 4 + 1.5 = 5.5 Ω, in parallel with 2 ∥ 2 = 1 Ω</div>
                <div class="eq">Current divider: I″<sub>BA</sub> = 9 × 1/(1 + 5.5) = 1.385 A from B to A</div>
                <div class="eq"><b>Step 3: add.</b> I<sub>AB</sub> = 1.385 − 1.385 = 0 A</div>
              </div>
              <div class="result"><p>The two contributions are equal and opposite: <b>I<sub>AB</sub> = 0 A</b> (no current in branch AB).</p></div>
            </div>
            <div class="note trap"><p>Check by nodes: V<sub>A</sub> = V<sub>B</sub> = 9 V when both sources act, so the 4 Ω carries nothing. Exact fractions make it clear: each part is 18/13 A.</p></div>`,
        },
        {
          n: '2',
          answer: `
            <p>Model answer. Three clockwise meshes: I<sub>1</sub> through the left 12 V, 2 Ω and 4 Ω; I<sub>2</sub> through 4 Ω, 7 Ω and 6 Ω; I<sub>3</sub> through 6 Ω, 3 Ω and the right 12 V (+ on top, so going clockwise down through it is a drop of 12 V).</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">Mesh 1: 2I<sub>1</sub> + 4(I<sub>1</sub> − I<sub>2</sub>) = 12, so 6I<sub>1</sub> − 4I<sub>2</sub> = 12</div>
                <div class="eq">Mesh 2: 4(I<sub>2</sub> − I<sub>1</sub>) + 7I<sub>2</sub> + 6(I<sub>2</sub> − I<sub>3</sub>) = 0, so −4I<sub>1</sub> + 17I<sub>2</sub> − 6I<sub>3</sub> = 0</div>
                <div class="eq">Mesh 3: 6(I<sub>3</sub> − I<sub>2</sub>) + 3I<sub>3</sub> + 12 = 0, so −6I<sub>2</sub> + 9I<sub>3</sub> = −12</div>
                <div class="eq">From mesh 1: I<sub>1</sub> = 2 + (2/3)I<sub>2</sub>; from mesh 3: I<sub>3</sub> = −4/3 + (2/3)I<sub>2</sub></div>
                <div class="eq">Into mesh 2: −8 − (8/3)I<sub>2</sub> + 17I<sub>2</sub> + 8 − 4I<sub>2</sub> = 0, so I<sub>2</sub> = 0</div>
                <div class="eq">I<sub>1</sub> = 2 A, I<sub>2</sub> = 0 A, I<sub>3</sub> = −1.333 A (1.333 A anticlockwise)</div>
              </div>
            </div>
            <table class="tbl"><thead><tr><th>Resistor</th><th>Current</th><th>Voltage drop</th></tr></thead><tbody>
              <tr><td>2 Ω</td><td>I<sub>1</sub> = 2 A</td><td>4 V</td></tr>
              <tr><td>4 Ω</td><td>I<sub>1</sub> − I<sub>2</sub> = 2 A</td><td>8 V</td></tr>
              <tr><td>7 Ω</td><td>I<sub>2</sub> = 0</td><td>0 V</td></tr>
              <tr><td>6 Ω</td><td>I<sub>2</sub> − I<sub>3</sub> = 1.333 A</td><td>8 V</td></tr>
              <tr><td>3 Ω</td><td>1.333 A</td><td>4 V</td></tr>
            </tbody></table>
            <div class="note trap"><p>The circuit is symmetric in effect: both middle nodes sit at 8 V, so the 7 Ω between them carries no current. Check: 12 − 4 = 8 V and 12 − 4 = 8 V from each side.</p></div>`,
        },
        {
          n: '3',
          answer: `
            <p>Model answer.</p>
            <div class="worked">
              <div class="given"><p>E = 50∠0° V, f = 50 Hz, R = 3 Ω, X<sub>L</sub> = 7 Ω, X<sub>C</sub> = 10 Ω (in series)</p></div>
              <div class="solve">
                <div class="eq">Z = R + j(X<sub>L</sub> − X<sub>C</sub>) = 3 − j3 Ω = 4.243∠−45° Ω</div>
                <div class="eq">I = E/Z = 50∠0°/4.243∠−45° = 11.785∠45° A</div>
                <div class="eq">V<sub>R</sub> = IR = 11.785 × 3 = 35.36 V (in phase with I)</div>
                <div class="eq">V<sub>L</sub> = IX<sub>L</sub> = 11.785 × 7 = 82.50 V (90° ahead of I)</div>
                <div class="eq">V<sub>C</sub> = IX<sub>C</sub> = 11.785 × 10 = 117.85 V (90° behind I)</div>
                <div class="eq">Real power P = I²R = 11.785² × 3 = 416.67 W</div>
                <div class="eq">Reactive power Q = I²(X<sub>L</sub> − X<sub>C</sub>) = 138.9 × (−3) = −416.67 var (capacitive)</div>
                <div class="eq">Apparent power S = EI = 50 × 11.785 = 589.26 VA (check: √(416.67² + 416.67²) = 589.26)</div>
                <div class="eq">Power factor = cos φ = R/Z = 3/4.243 = 0.707</div>
              </div>
              <div class="result"><p>X<sub>C</sub> &gt; X<sub>L</sub>, so the circuit is capacitive: the current leads the voltage by 45°. Power factor <b>0.707 leading</b>.</p></div>
            </div>
            <div class="note trap"><p>V<sub>L</sub> and V<sub>C</sub> are each larger than the 50 V supply. That is normal in a series RLC: they are 180° apart and partly cancel. Phasor check: √(35.36² + (82.5 − 117.85)²) = 50 V.</p></div>`,
        },
        {
          n: '4',
          answer: `
            <p>Model answer (about 3 marks input, 4 marks output, 3 marks switch).</p>
            <p><b>CE circuit.</b> The emitter is common to input and output. V<sub>BB</sub> forward biases the base-emitter junction through R<sub>B</sub> (input current I<sub>B</sub>, input voltage V<sub>BE</sub>); V<sub>CC</sub> reverse biases the collector-base junction through R<sub>C</sub> (output current I<sub>C</sub>, output voltage V<sub>CE</sub>).</p>
            <figure data-fig="m2-bjt-config"></figure>
            <p><b>Input characteristic</b> (I<sub>B</sub> against V<sub>BE</sub>, with V<sub>CE</sub> constant). It looks like a forward-biased diode curve: almost no base current until V<sub>BE</sub> reaches the cut-in voltage (about 0.5 to 0.7 V for silicon), then I<sub>B</sub> rises steeply. A larger V<sub>CE</sub> shifts the curve slightly right (base-width modulation, the Early effect), because the wider collector depletion region leaves less base for recombination. Input resistance r<sub>i</sub> = ΔV<sub>BE</sub>/ΔI<sub>B</sub> is low (about 1 kΩ).</p>
            <figure data-fig="m2-ce-input"></figure>
            <p><b>Output characteristic</b> (I<sub>C</sub> against V<sub>CE</sub>, for fixed values of I<sub>B</sub>). I<sub>C</sub> rises quickly for V<sub>CE</sub> below about 0.2 to 1 V, then flattens: I<sub>C</sub> ≈ βI<sub>B</sub>, nearly independent of V<sub>CE</sub>. Each higher I<sub>B</sub> gives a higher curve. Three regions:</p>
            <ul>
              <li><b>Active region:</b> BE forward, CB reverse. Flat part of the curves; used for amplification.</li>
              <li><b>Saturation region:</b> both junctions forward biased. Steep part near the I<sub>C</sub> axis, V<sub>CE(sat)</sub> about 0.2 V; I<sub>C</sub> is set by the circuit, not by I<sub>B</sub>.</li>
              <li><b>Cut-off region:</b> both junctions reverse biased. Below the I<sub>B</sub> = 0 curve, only a tiny leakage I<sub>CEO</sub> flows.</li>
            </ul>
            <figure data-fig="m2-ce-output"></figure>
            <p><b>Transistor as a switch.</b> The load (for example a lamp or relay coil) is placed as R<sub>C</sub> in the collector circuit and the input drives the base through R<sub>B</sub>.</p>
            <ul>
              <li><b>Switch OFF</b>: input low (V<sub>in</sub> = 0), I<sub>B</sub> = 0, the transistor is in cut-off. I<sub>C</sub> ≈ 0, V<sub>CE</sub> ≈ V<sub>CC</sub>, like an open switch.</li>
              <li><b>Switch ON</b>: input high, enough base current (I<sub>B</sub> &gt; I<sub>C(sat)</sub>/β) drives it into saturation. V<sub>CE</sub> ≈ 0.2 V and I<sub>C</sub> ≈ V<sub>CC</sub>/R<sub>C</sub>, like a closed switch.</li>
              <li>The operating point jumps between the two ends of the load line, never resting in the active region, so very little power is lost in the transistor. Used in digital logic, relay drivers, LED drivers and motor control.</li>
            </ul>
            <figure data-fig="m2-bjt-switch"></figure>`,
        },
        {
          n: '5',
          answer: `
            <p>Model answer. Do either (a) or (b).</p>
            <p><b>(a) General communication system.</b> Communication is the transfer of information from a source to a destination through a channel. The block diagram is a chain: information source → input transducer → transmitter → channel (with noise added) → receiver → output transducer → destination.</p>
            <figure data-fig="m2-comm-block"></figure>
            <ul>
              <li><b>Information source:</b> produces the message: speech, music, picture, data.</li>
              <li><b>Input transducer:</b> converts the message into an electrical signal (microphone, camera, keyboard).</li>
              <li><b>Transmitter:</b> processes the signal for the channel: amplifies, filters and modulates it onto a high-frequency carrier, then feeds the antenna or cable.</li>
              <li><b>Channel:</b> the medium between transmitter and receiver: wires, coaxial cable, optical fibre or free space. It attenuates and distorts the signal.</li>
              <li><b>Noise:</b> unwanted random signals added mostly in the channel and receiver; they limit the quality of reception.</li>
              <li><b>Receiver:</b> picks up the weak signal, amplifies it, demodulates it to recover the original message and filters out noise.</li>
              <li><b>Output transducer and destination:</b> convert the electrical signal back to the original form (loudspeaker, display) for the user.</li>
            </ul>
            <p>A transceiver combines a transmitter and a receiver in one unit (mobile phone, walkie-talkie).</p>
            <p><b>(b) Modulation.</b> Modulation is the process of varying a property (amplitude, frequency or phase) of a high-frequency carrier wave in step with the low-frequency message signal. The receiver recovers the message by demodulation.</p>
            <p><b>Need for modulation:</b></p>
            <ul>
              <li><b>Practical antenna size:</b> an antenna must be about λ/4 long. For a 1 kHz audio signal λ = 300 km, so the antenna would be 75 km; at a 1 MHz carrier it is 75 m.</li>
              <li><b>Multiplexing:</b> different stations use different carrier frequencies, so many signals share one channel without mixing.</li>
              <li><b>Range:</b> high-frequency signals radiate efficiently and travel long distances.</li>
              <li><b>Less noise and interference,</b> and the chance to choose a frequency band suited to the channel.</li>
            </ul>
            <figure data-fig="m2-modulation-waves"></figure>
            <table class="tbl"><thead><tr><th>Point</th><th>AM</th><th>FM</th></tr></thead><tbody>
              <tr><td>What varies</td><td>Carrier amplitude follows the message</td><td>Carrier frequency follows the message; amplitude constant</td></tr>
              <tr><td>Bandwidth</td><td>Small: 2 × highest message frequency (10 kHz for broadcast)</td><td>Large (about 200 kHz for broadcast FM)</td></tr>
              <tr><td>Noise</td><td>Poor immunity: noise adds to amplitude</td><td>Good immunity: amplitude noise is clipped</td></tr>
              <tr><td>Fidelity</td><td>Lower</td><td>Higher</td></tr>
              <tr><td>Range and circuits</td><td>Long range (ground and sky wave), simple cheap circuits</td><td>Line of sight, more complex circuits</td></tr>
              <tr><td>Power efficiency</td><td>Most power wasted in the carrier</td><td>All transmitted power useful</td></tr>
              <tr><td>Uses</td><td>MW and SW radio broadcasting, aircraft radio</td><td>FM radio, TV sound, mobile and two-way radio</td></tr>
            </tbody></table>`,
        },
        {
          n: '6',
          answer: `
            <p>Model answer (method; the drawing of this part is not yet on the site). First angle: <b>top view below</b> the front view, <b>right side view on the left</b> of the front view, all three aligned by projectors.</p>
            <ol>
              <li>Read the pictorial: the arrow gives the front view direction. Note the overall sizes: length 60, width 35, upright height 25, base thickness 10, the notch in the upright (8 thick wall, 15 top, 7 deep, 25 along) and the U-slot in the base end (11 wide, 20 long, 12 wide lugs each side).</li>
              <li><b>Front view:</b> draw the 60 × 10 base and the 25 high upright on it. Show the upright's notch outline. The U-slot is seen end-on from the front, so its 20 length shows as hidden (dashed) lines in the base.</li>
              <li><b>Top view</b> below: the 60 × 35 outline, the upright's top with the notch lines, and the U-slot as a 11 × 20 cut-out at the end between two 12 wide lugs (visible lines, since it is open from the top).</li>
              <li><b>Right side view</b> on the left: project heights from the front view and depths from the top view through a 45° mitre line. The U-slot is seen end-on here as an 11 wide gap; hidden edges of the notch are dashed.</li>
              <li>Dimension each view once (aligned system, BIS), add centre lines and the first-angle symbol, and keep equal gaps between views, with the sheet turned sideways.</li>
            </ol>
            <div class="note trap"><p>The usual mark-losers: putting the side view on the right (that is third angle), missing hidden lines for the slot, and dimensioning the same size in two views.</p></div>`,
        },
        {
          n: '7',
          answer: `
            <p>Model answer. An isometric view uses true lengths along the three isometric axes (vertical, and two lines at 30° to the horizontal). A horizontal circle becomes an ellipse.</p>
            <div class="worked">
              <div class="given"><p>Cylinder: D = 60 mm, H = 65 mm, base on HP, axis vertical.</p></div>
              <div class="solve">
                <div class="eq">Enclosing square of each circle: 60 × 60, drawn as an isometric rhombus with sides along the 30° axes</div>
                <div class="eq">Ellipse major axis (horizontal) = 1.2247 × 60 = 73.5 mm; minor axis (vertical) = 0.7071 × 60 = 42.4 mm</div>
              </div>
            </div>
            <ol>
              <li>Draw the isometric rhombus (sides 60) of the bottom circle and inscribe the ellipse by the four-centre method: join each obtuse corner to the midpoints of the two far sides; the crossing points and the obtuse corners are the four arc centres.</li>
              <li>Repeat the rhombus and ellipse 65 mm higher for the top face (move every point straight up 65).</li>
              <li>Draw the two vertical outline lines tangent to both ellipses at the ends of the major axis.</li>
              <li>Show the full top ellipse and only the front half of the bottom ellipse; hidden lines are not drawn. Draw the axis as a chain line and dimension Ø60 and 65.</li>
            </ol>
            <figure data-fig="m3-fat26-iso-cylinder"></figure>
            <div class="note trap"><p>"Axis parallel to VP" with the base on HP just means the axis is vertical. If a question says isometric <em>projection</em>, scale every length by 0.816 first (60 → 49 mm, 65 → 53 mm).</p></div>`,
        },
        {
          n: '8',
          answer: `
            <p>Model answer. Do either (a) or (b).</p>
            <p><b>(a) Sand casting.</b> Molten metal is poured into a cavity made in moulding sand with a pattern; it solidifies into the shape of the cavity and the sand is broken to take the casting out.</p>
            <figure data-fig="m4-sand-mold"></figure>
            <p><b>Process steps:</b> make the pattern (with allowances) and cores → ram sand around the pattern in the drag and cope (flask halves) → remove the pattern, set the core, cut the gating system → close the mould and pour the molten metal → let it solidify and cool → knock out (shake out) the casting → fettle (cut off gates and risers, clean) and inspect.</p>
            <ul>
              <li><b>Pattern:</b> a replica of the part, slightly oversize (shrinkage, machining and draft allowances), used to form the mould cavity.</li>
              <li><b>Flask:</b> the box holding the sand; the top part is the cope, the bottom the drag (a middle part is a cheek).</li>
              <li><b>Pouring basin (cup):</b> funnel at the top that receives the metal from the ladle and reduces splashing and turbulence.</li>
              <li><b>Sprue:</b> vertical tapered passage that carries metal from the basin down to the runner; the taper stops air being drawn in.</li>
              <li><b>Runner:</b> horizontal channel, usually at the parting line, that takes metal from the sprue to the gates and the cavity.</li>
              <li><b>Riser:</b> a reservoir of molten metal above or beside the casting that feeds liquid metal into the casting as it shrinks, and lets gases escape. It solidifies last.</li>
              <li><b>Core:</b> a sand shape placed in the mould to make holes or internal cavities in the casting; held by core prints.</li>
            </ul>
            <p><b>(b) Machining</b> is a material removal process in which a sharp cutting tool removes excess material from a workpiece as chips, to obtain the required shape, size and surface finish. Examples: turning, drilling, milling, shaping, grinding.</p>
            <p><b>Single point cutting tool</b> (lathe, shaper and planer tools). One cutting edge removes material at a time. Parts to label on the sketch: shank (the body held in the tool post), face (chips flow over it), flank (below the cutting edge), cutting edge, nose (the tip, with a nose radius), and the angles: back and side rake, end and side relief (clearance), end and side cutting edge angles. Rake controls chip flow and cutting force; relief stops the flank rubbing the work.</p>
            <figure data-fig="m4-cutting-tools"></figure>
            <p><b>Multi-point cutting tool</b> (milling cutter, drill, broach, grinding wheel, reamer, saw). Several cutting edges cut at the same time or one after another. Each tooth acts like a small single-point tool with its own rake and relief, so the load and heat are shared, material is removed faster and tool life is longer.</p>
            <table class="tbl"><thead><tr><th>Single point</th><th>Multi-point</th></tr></thead><tbody>
              <tr><td>One main cutting edge</td><td>Two or more cutting edges</td></tr>
              <tr><td>Simple to make and resharpen</td><td>Complex, costly to make and regrind</td></tr>
              <tr><td>Lower material removal rate</td><td>Higher material removal rate</td></tr>
              <tr><td>Turning, shaping, planing, boring</td><td>Milling, drilling, broaching, grinding</td></tr>
            </tbody></table>`,
        },
        {
          n: '9',
          answer: `
            <p>Model answer. A two-stroke petrol (SI) engine completes one cycle in two strokes of the piston, that is one crankshaft revolution, so there is a power stroke every revolution. It has ports in the cylinder wall (inlet, transfer, exhaust) instead of valves, and a closed crankcase used for pre-compression. The piston opens and closes the ports.</p>
            <figure data-fig="m4-two-stroke-engine"></figure>
            <p><b>Labels:</b> cylinder, piston with deflector crown, spark plug, inlet port (to the crankcase), transfer port, exhaust port, crankcase, connecting rod, crank.</p>
            <ol>
              <li><b>First stroke (upward, compression and induction):</b> the piston moves from BDC to TDC. Above it, it closes the transfer and exhaust ports and compresses the charge in the cylinder. Below it, the rising piston lowers the crankcase pressure and uncovers the inlet port, so fresh air-petrol-oil mixture enters the crankcase. Near TDC the spark plug fires.</li>
              <li><b>Second stroke (downward, power and exhaust):</b> the burning gases push the piston down; this is the power stroke. The piston also compresses the mixture in the crankcase. Near the end of the stroke it first uncovers the exhaust port, so the burnt gases rush out, and then the transfer port, so the pre-compressed fresh charge flows from the crankcase into the cylinder. The deflector on the piston crown sends the charge up and helps push out the exhaust (<b>scavenging</b>).</li>
            </ol>
            <p><b>Features:</b> simple, light, no valves, high power for its size; but higher fuel and lubricating oil consumption, some fresh charge lost through the exhaust and more pollution. Used in mopeds, scooters, chainsaws, small outboard motors.</p>`,
        },
        {
          n: '10',
          answer: `
            <p>Model answer.</p>
            <p><b>(i) Kinematic link (element).</b> Each part of a machine that moves relative to another part and transmits motion. A link need not be one rigid piece; it must be resistant (transmit force without noticeable deformation). Examples: in the slider-crank mechanism of an engine, the crank, connecting rod, piston and the frame (cylinder) are the four links.</p>
            <ul>
              <li><b>Rigid link:</b> no appreciable deformation (crank, connecting rod).</li>
              <li><b>Flexible link:</b> deforms partly but still transmits motion (belt, rope, chain, spring).</li>
              <li><b>Fluid link:</b> motion transmitted by fluid pressure (hydraulic press, jack, brake).</li>
              <li>By number of joints: binary (2), ternary (3) and quaternary (4) links.</li>
            </ul>
            <p><b>(ii) Kinematic pair.</b> Two links in contact such that their relative motion is completely or successfully constrained. Classified:</p>
            <ul>
              <li>By relative motion: <b>sliding pair</b> (piston in cylinder, ram in guide), <b>turning pair</b> (shaft in a bearing, crank pin in connecting rod), <b>rolling pair</b> (ball bearing, wheel on rail), <b>screw pair</b> (lead screw and nut of a lathe), <b>spherical pair</b> (ball and socket joint).</li>
              <li>By contact: <b>lower pair</b> with surface contact (all the above except rolling) and <b>higher pair</b> with line or point contact (cam and follower, gear teeth, ball bearing).</li>
              <li>By how contact is kept: <b>closed (self-closed) pair</b>, held mechanically (shaft in bearing), and <b>open (force-closed) pair</b>, held by gravity or a spring (cam and follower).</li>
            </ul>
            <p><b>(iii) Kinematic chain.</b> A combination of kinematic pairs joined so that the last link connects back to the first and the relative motion of each link is definite. When one link of a chain is fixed it becomes a mechanism. Check with l = 2p − 4 and j = (3/2)l − 2 (l links, p pairs, j joints).</p>
            <ul>
              <li>Four-bar chain: l = 4, j = 4. Check j = (3/2)(4) − 2 = 4, so it is a constrained kinematic chain. Example: four-bar linkage, slider-crank (one turning pair replaced by a sliding pair).</li>
              <li>Three links with three joints: j = 3 but (3/2)(3) − 2 = 2.5, so it is a locked structure (truss), not a chain.</li>
              <li>Five links with five joints: (3/2)(5) − 2 = 5.5 &gt; 5, an unconstrained chain.</li>
            </ul>
            <figure data-fig="m4-slider-crank"></figure>`,
        }
      ]
    },

    {
      id: 'fat-a2-2026',
      questions: [
        {
          n: '1',
          answer: `
            <p>Model answer. Bottom rail is the reference (0 V). Write KCL at V<sub>1</sub> and V<sub>2</sub> with currents leaving through resistors equal to source currents entering. The 6 A source pushes current up into V<sub>1</sub>; the 10 A source draws current down out of V<sub>2</sub>.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">Node 1: V<sub>1</sub>/8 + (V<sub>1</sub> − V<sub>2</sub>)/4 = 6, so (× 8) 3V<sub>1</sub> − 2V<sub>2</sub> = 48</div>
                <div class="eq">Node 2: V<sub>2</sub>/2 + (V<sub>2</sub> − V<sub>1</sub>)/4 = −10, so (× 4) −V<sub>1</sub> + 3V<sub>2</sub> = −40</div>
                <div class="eq">From node 2: V<sub>1</sub> = 3V<sub>2</sub> + 40. Then 9V<sub>2</sub> + 120 − 2V<sub>2</sub> = 48, so V<sub>2</sub> = −72/7 = −10.286 V</div>
                <div class="eq">V<sub>1</sub> = 3(−10.286) + 40 = 9.143 V</div>
                <div class="eq">8 Ω: I = 9.143/8 = 1.143 A; P = V<sub>1</sub>²/8 = 10.45 W</div>
                <div class="eq">4 Ω: I = (9.143 + 10.286)/4 = 4.857 A; P = 19.429²/4 = 94.37 W</div>
                <div class="eq">2 Ω: I = 10.286/2 = 5.143 A (upwards); P = 10.286²/2 = 52.90 W</div>
              </div>
              <div class="result"><p>P<sub>8Ω</sub> = <b>10.45 W</b>, P<sub>4Ω</sub> = <b>94.37 W</b>, P<sub>2Ω</sub> = <b>52.90 W</b>. Total 157.71 W.</p></div>
            </div>
            <div class="note trap"><p>Check: power delivered by the sources = 6 × 9.143 + 10 × 10.286 = 54.86 + 102.86 = 157.71 W, equal to the total dissipated. A negative node voltage is correct here: the 10 A source pulls V<sub>2</sub> below ground.</p></div>`,
        },
        {
          n: '2',
          answer: `
            <p>Model answer. A brushless DC (BLDC) motor is a DC machine turned inside out: the permanent magnets are on the rotor and the armature windings are on the stator, so no brushes or commutator are needed. Commutation is done electronically.</p>
            <figure data-fig="m1-bldc-parts"></figure>
            <p><b>Construction:</b></p>
            <ul>
              <li><b>Stator:</b> laminated steel core with slots carrying a three-phase winding (usually star connected), like an induction motor stator.</li>
              <li><b>Rotor:</b> permanent magnets (ferrite or rare-earth NdFeB) on the shaft, inner rotor or outer rotor (can) type.</li>
              <li><b>Position sensors:</b> three Hall effect sensors 120° (electrical) apart sense the rotor pole position (sensorless drives use the back emf instead).</li>
              <li><b>Electronic controller:</b> a three-phase inverter of six transistors (MOSFETs or IGBTs) fed from a DC supply, plus the logic that reads the sensors.</li>
              <li>Shaft and bearings.</li>
            </ul>
            <figure data-fig="m1-bldc-drive"></figure>
            <p><b>Working principle.</b> Like any DC motor, torque comes from the attraction and repulsion between a magnetic field and a current-carrying winding. The controller energises two of the three phases at a time, creating a stator field. The rotor magnets try to line up with it. Just before they do, the Hall sensors signal the new rotor position and the controller switches to the next pair of phases, moving the stator field ahead by 60° electrical. Six steps make one electrical revolution (six-step or trapezoidal commutation), so the field keeps leading the rotor and the rotor turns continuously. Speed is varied by PWM of the inverter transistors (average voltage); direction by changing the switching sequence.</p>
            <p><b>Applications</b> (any three): computer cooling fans and hard disk drives, electric vehicles and e-bikes, drones and aeromodelling, cordless power tools, HVAC fans and compressors, washing machines, robotics and CNC positioning systems, medical equipment.</p>`,
        },
        {
          n: '3',
          answer: `
            <p>Model answer.</p>
            <p><b>(a) Zener versus avalanche breakdown.</b></p>
            <table class="tbl"><thead><tr><th>Point</th><th>Zener breakdown</th><th>Avalanche breakdown</th></tr></thead><tbody>
              <tr><td>Mechanism</td><td>A very strong electric field (about 3 × 10⁷ V/m) across a thin depletion layer pulls electrons straight out of their covalent bonds (field ionisation, tunnelling)</td><td>Minority carriers accelerated by the field gain enough energy to knock electrons out of bonds by collision; each new carrier does the same, so carriers multiply</td></tr>
              <tr><td>Doping</td><td>Heavily doped junction, thin depletion layer</td><td>Lightly doped junction, wide depletion layer</td></tr>
              <tr><td>Voltage</td><td>Below about 5 V</td><td>Above about 6 V</td></tr>
              <tr><td>Temperature coefficient</td><td>Negative: breakdown voltage falls as temperature rises</td><td>Positive: breakdown voltage rises with temperature</td></tr>
              <tr><td>Breakdown curve</td><td>Sharp knee</td><td>Also sharp, at higher voltage</td></tr>
            </tbody></table>
            <figure data-fig="m2-zener-vi"></figure>
            <p><b>Why it regulates.</b> In the breakdown region the reverse characteristic is almost vertical: the current through the Zener can change over a wide range (I<sub>Z(min)</sub> to I<sub>Z(max)</sub>) while the voltage across it stays nearly constant at V<sub>Z</sub>. The breakdown is not destructive as long as the power V<sub>Z</sub>I<sub>Z</sub> stays within the rating, so a Zener placed in reverse bias across the load holds the load voltage at V<sub>Z</sub>.</p>
            <p><b>(b) Load current increases.</b> In the regulator a series resistor R<sub>S</sub> feeds the Zener and the load in parallel. With V<sub>in</sub> and V<sub>Z</sub> fixed, the current in R<sub>S</sub> is fixed: I<sub>S</sub> = (V<sub>in</sub> − V<sub>Z</sub>)/R<sub>S</sub> = I<sub>Z</sub> + I<sub>L</sub>. So when the load current rises, the <b>Zener current falls by the same amount</b> (I<sub>Z</sub> = I<sub>S</sub> − I<sub>L</sub>) and the output voltage stays at V<sub>Z</sub>. When the load current falls, the Zener takes the extra current.</p>
            <figure data-fig="m2-zener-reg"></figure>
            <p><b>Minimum regulating current.</b> Regulation works only while the diode stays on the steep part of its curve. Below I<sub>Z(min)</sub> (the knee current I<sub>ZK</sub>) the Zener leaves the breakdown region, its voltage drops and it no longer clamps: the output then follows the load like a plain resistor divider. So R<sub>S</sub> is designed so that even at maximum load current, I<sub>Z</sub> ≥ I<sub>Z(min)</sub>, and at no load I<sub>Z</sub> does not exceed I<sub>Z(max)</sub> = P<sub>Z</sub>/V<sub>Z</sub>.</p>`,
        },
        {
          n: '4',
          answer: `
            <p>Model answer. The optical spectrum is the part of the electromagnetic spectrum just above the millimetre radio waves, occupied by light waves. Its wavelengths are given in micrometres (1 µm = 10⁻⁶ m), nanometres or angstroms (1 Å = 10⁻¹⁰ m). There are three types.</p>
            <figure data-fig="m2-em-spectrum"></figure>
            <table class="tbl"><thead><tr><th>Type</th><th>Range (as in the course)</th><th>Features and uses</th></tr></thead><tbody>
              <tr><td>Infrared</td><td>About 0.1 mm to 700 nm (100 µm to 0.7 µm)</td><td>Between millimetre waves and visible light. Radiated as heat. Used in TV remote controls, optical fibre links, night vision, heat sensing.</td></tr>
              <tr><td>Visible light</td><td>About 0.4 to 0.8 µm (400 to 800 nm, 4000 to 8000 Å)</td><td>The light the eye sees: red (longest wavelength, lowest frequency) through orange, yellow, green, blue to violet (shortest wavelength). Used for light-wave communication, fibre optics and lasers.</td></tr>
              <tr><td>Ultraviolet</td><td>About 4 to 400 nm</td><td>Beyond violet. Not used for communication; mainly medical (sterilising). Sources: the sun (sunburn), mercury vapour lamps, fluorescent lamps, sun lamps.</td></tr>
            </tbody></table>
            <p>Beyond ultraviolet lie X-rays, gamma rays and cosmic rays. They are electromagnetic radiation too, but are not used in communication systems.</p>
            <p>Frequency and wavelength are linked by c = fλ (c = 3 × 10⁸ m/s), so visible light at 0.5 µm has f = 6 × 10¹⁴ Hz.</p>`,
        },
        {
          n: '5',
          answer: `
            <p>Model answer.</p>
            <p><b>(a) Construction.</b> A lightly doped p-type substrate has two heavily doped n<sup>+</sup> regions diffused into it: the source and the drain. A thin layer of silicon dioxide (SiO₂) insulates the substrate surface between them, and a metal gate sits on the oxide. The substrate (body) is usually joined to the source. There is <b>no channel</b> built in between source and drain; the channel has to be induced (enhanced) by the gate.</p>
            <figure data-fig="m2-emosfet-structure"></figure>
            <p><b>Working and channel formation.</b></p>
            <ul>
              <li>V<sub>GS</sub> = 0: the n<sup>+</sup> source, p substrate and n<sup>+</sup> drain form two back-to-back pn junctions, so no drain current flows even with V<sub>DS</sub> applied (normally OFF).</li>
              <li>V<sub>GS</sub> positive: the gate, oxide and substrate act like a capacitor. The positive gate repels holes from the surface under the oxide, leaving negative acceptor ions (a depletion layer), and attracts minority electrons from the substrate.</li>
              <li>V<sub>GS</sub> ≥ V<sub>T</sub> (threshold voltage, typically 1 to 3 V): enough electrons collect under the oxide to form a thin n-type <b>inversion layer</b> linking source to drain. This induced n-channel lets electrons flow from source to drain, and I<sub>D</sub> flows.</li>
              <li>Increasing V<sub>GS</sub> above V<sub>T</sub> makes the channel deeper and I<sub>D</sub> larger: the gate voltage enhances the channel, hence the name.</li>
            </ul>
            <figure data-fig="m2-emosfet-working"></figure>
            <p><b>(b) Characteristics.</b></p>
            <p><b>Transfer characteristic</b> (I<sub>D</sub> against V<sub>GS</sub> at fixed V<sub>DS</sub>): zero current until V<sub>GS</sub> = V<sub>T</sub>, then a square-law rise: I<sub>D</sub> = k(V<sub>GS</sub> − V<sub>T</sub>)². Mark V<sub>T</sub> on the V<sub>GS</sub> axis.</p>
            <figure data-fig="m2-emosfet-transfer"></figure>
            <p><b>Drain characteristic</b> (I<sub>D</sub> against V<sub>DS</sub> for several V<sub>GS</sub> values, each above V<sub>T</sub>):</p>
            <ul>
              <li><b>Cut-off region:</b> V<sub>GS</sub> &lt; V<sub>T</sub>, no channel, I<sub>D</sub> ≈ 0 (the curve along the V<sub>DS</sub> axis).</li>
              <li><b>Ohmic (triode) region:</b> V<sub>DS</sub> &lt; V<sub>GS</sub> − V<sub>T</sub>. I<sub>D</sub> rises almost linearly with V<sub>DS</sub>; the device acts as a voltage-controlled resistor.</li>
              <li><b>Saturation region:</b> V<sub>DS</sub> ≥ V<sub>GS</sub> − V<sub>T</sub>. The channel pinches off at the drain end and I<sub>D</sub> becomes nearly constant, set by V<sub>GS</sub>. Used for amplification.</li>
              <li>The boundary between ohmic and saturation is the parabola V<sub>DS</sub> = V<sub>GS</sub> − V<sub>T</sub>, drawn dashed.</li>
            </ul>
            <figure data-fig="m2-mosfet-curves"></figure>`,
        },
        {
          n: '6',
          answer: `
            <p>Model answer (method; the drawing of this part is not yet on the site). First angle: top view below the front view, right side view to the left of the front view.</p>
            <ol>
              <li>Read the pictorial: the arrow marks the front. Overall sizes: length 50, depth 40, height 30. Along the top the widths are 10, 10, 10 and 20 (the rib, the slot, the step and the sloping part). The slot is 10 deep from the top and the step is 20 high. The two 30° marks at the base of Figure 2 are the isometric axis angles, not the slope of a face: the inclined face is fixed by the 10/10/10/20 widths and the heights, so it is not dimensioned with an angle.</li>
              <li><b>Front view:</b> the 50 × 30 outline with the stepped top (rib, 10 deep slot, step at 20) and the slope as a line where it is seen edge-on.</li>
              <li><b>Top view</b> below: the 50 × 40 rectangle with lines at each step of the top; the edges of the sloping face appear as lines too.</li>
              <li><b>Right side view</b> on the left of the front view: project heights across from the front view and depths from the top view using a 45° mitre line. Show any edge that is behind material as a dashed hidden line.</li>
              <li>Dimension all sizes (aligned system), each only once, with extension lines 1 to 2 mm clear of the object, arrowheads 3 mm long and figures above the dimension line. Add the first-angle symbol.</li>
            </ol>
            <div class="note trap"><p>Do not dimension to hidden lines, and do not repeat the 30 height in two views. Do not copy the 30° isometric angles into the orthographic views.</p></div>`,
        },
        {
          n: '7',
          answer: `
            <p>Model answer.</p>
            <div class="worked">
              <div class="given"><p>Cone: base D = 50 mm, height H = 70 mm, base on HP, axis vertical.</p></div>
              <div class="solve">
                <div class="eq">Base circle in isometric: enclosing rhombus with sides 50 along the 30° axes</div>
                <div class="eq">Ellipse major axis = 1.2247 × 50 = 61.2 mm; minor axis = 0.7071 × 50 = 35.4 mm</div>
                <div class="eq">Slant height (true length of a generator) = √(25² + 70²) = 74.3 mm (not needed for the drawing)</div>
              </div>
            </div>
            <ol>
              <li>Draw the isometric rhombus of the base (sides 50) and the base ellipse inside it by the four-centre method.</li>
              <li>From the centre of the ellipse draw the axis straight up 70 mm to the apex.</li>
              <li>From the apex draw two lines tangent to the ellipse: these are the outline generators.</li>
              <li>Keep the front part of the ellipse between the two tangent points; the back part is hidden and is not drawn. Thicken the outline, draw the axis as a chain line and dimension Ø50 and 70.</li>
            </ol>
            <figure data-fig="m3-fat26-iso-cone"></figure>
            <div class="note trap"><p>The outline lines touch the ellipse tangentially; they do not end at the ends of the major axis. Join them to the ends of the major axis and the cone looks wrong.</p></div>`,
        },
        {
          n: '8',
          answer: `
            <p>Model answer. Refrigeration is the removal of heat from a space or substance to keep it below the surrounding temperature. The common system is vapour compression refrigeration (VCRS), with four main components in a closed loop carrying a refrigerant (R-134a, R-600a, ammonia).</p>
            <figure data-fig="m4-vcrs-cycle"></figure>
            <ul>
              <li><b>Compressor:</b> draws low-pressure, low-temperature refrigerant vapour from the evaporator and compresses it to high pressure and high temperature (superheated vapour). It is the only part that needs work input.</li>
              <li><b>Condenser:</b> coils (usually at the back of a refrigerator) where the hot vapour gives its heat to the surroundings and condenses into high-pressure liquid.</li>
              <li><b>Expansion (throttle) valve or capillary tube:</b> drops the pressure of the liquid, so its boiling temperature falls well below the space temperature; the refrigerant leaves as a cold liquid-vapour mixture.</li>
              <li><b>Evaporator:</b> coils inside the space to be cooled. The cold refrigerant absorbs heat from the space and evaporates into low-pressure vapour, which returns to the compressor.</li>
            </ul>
            <p><b>Working (cycle 1-2-3-4):</b> 1-2 compression in the compressor; 2-3 heat rejection and condensation in the condenser; 3-4 throttling (constant enthalpy) in the expansion valve; 4-1 heat absorption and evaporation in the evaporator. The heat taken in the evaporator is the refrigerating effect.</p>
            <p>Performance: COP = refrigerating effect / work input = Q<sub>evaporator</sub>/W<sub>compressor</sub>. Capacity is quoted in tons of refrigeration (1 TR = 3.5 kW, about 211 kJ/min).</p>
            <p>Applications: domestic refrigerators, air conditioners, cold storage, water coolers, food processing.</p>`,
        },
        {
          n: '9',
          answer: `
            <p>Model answer. Do either (a) or (b).</p>
            <p><b>(a)(i) Nuclear fission.</b> A heavy nucleus such as U-235 absorbs a slow (thermal) neutron, becomes unstable and splits into two lighter nuclei (for example barium and krypton), releasing 2 to 3 fast neutrons and about 200 MeV of energy. The mass of the products is slightly less than the mass before; the lost mass appears as energy, E = mc². The released neutrons, once slowed down, cause more fissions: a <b>chain reaction</b>. In a reactor it is kept steady (one neutron from each fission goes on to cause another).</p>
            <figure data-fig="m4-nuclear-reactor"></figure>
            <ul>
              <li><b>Fuel:</b> enriched uranium (U-235) or plutonium, in rods.</li>
              <li><b>Moderator:</b> slows fast neutrons to thermal speed (heavy water, graphite, ordinary water).</li>
              <li><b>Control rods:</b> boron or cadmium rods that absorb neutrons; lowering or raising them controls the rate of reaction, or stops it.</li>
              <li><b>Coolant:</b> carries the heat away from the core to the steam generator (water, heavy water, CO₂, liquid sodium).</li>
              <li><b>Reflector:</b> surrounds the core and sends escaping neutrons back.</li>
              <li><b>Reactor vessel and shielding:</b> thick steel vessel and concrete walls that contain the core and stop radiation.</li>
              <li>Heat exchanger (steam generator), turbine and generator complete the power plant.</li>
            </ul>
            <p><b>(a)(ii) Solar energy conversion technologies.</b></p>
            <ul>
              <li><b>Solar photovoltaic (PV):</b> semiconductor (silicon) cells convert sunlight directly into DC electricity by the photovoltaic effect; photons free electrons at a pn junction. Cells form modules and arrays; an inverter gives AC. Used for rooftop and grid plants, street lights, satellites.</li>
              <li><b>Concentrated solar power (CSP):</b> mirrors or lenses (parabolic trough, solar tower with heliostats, parabolic dish, linear Fresnel) focus sunlight to heat a fluid to a high temperature, which makes steam to drive a turbine. Heat storage (molten salt) allows power after sunset.</li>
              <li><b>Solar thermal (low temperature):</b> flat-plate and evacuated-tube collectors heat water or air directly for homes, hostels and industry; solar cookers, dryers and stills.</li>
            </ul>
            <p><b>(b) Additive manufacturing categories</b> (ISO/ASTM 52900, seven groups). AM builds a part layer by layer from a 3D CAD (STL) model.</p>
            <table class="tbl"><thead><tr><th>Category</th><th>How it works</th><th>Example</th></tr></thead><tbody>
              <tr><td>Vat photopolymerisation</td><td>Liquid resin in a vat is cured layer by layer by UV light or a laser</td><td>Stereolithography (SLA), DLP</td></tr>
              <tr><td>Material extrusion</td><td>Thermoplastic filament is melted and pushed through a nozzle along the layer path</td><td>Fused deposition modelling (FDM)</td></tr>
              <tr><td>Material jetting</td><td>Droplets of build material are jetted like an inkjet and cured</td><td>PolyJet, MultiJet</td></tr>
              <tr><td>Binder jetting</td><td>A liquid binder is jetted onto a powder bed to bond the particles</td><td>Sand moulds, metal parts (then sintered)</td></tr>
              <tr><td>Powder bed fusion</td><td>A laser or electron beam melts or sinters regions of a powder layer</td><td>SLS, SLM, DMLS, EBM</td></tr>
              <tr><td>Directed energy deposition</td><td>Powder or wire is fed into a melt pool made by a laser, electron beam or arc</td><td>LENS, repair of turbine blades</td></tr>
              <tr><td>Sheet lamination</td><td>Sheets are cut and bonded layer by layer</td><td>Laminated object manufacturing (LOM), ultrasonic consolidation</td></tr>
            </tbody></table>
            <p>Uses: prototypes, custom medical implants, aerospace parts, tooling and moulds.</p>`,
        },
        {
          n: '10',
          answer: `
            <p>Model answer. Do either (a) or (b).</p>
            <p><b>(a) Four-stroke engine.</b> One working cycle takes four strokes of the piston, two revolutions of the crankshaft, with inlet and exhaust valves worked by a camshaft. (Petrol engine described; in a diesel engine only air is drawn in and fuel is injected at the end of compression.)</p>
            <figure data-fig="m4-four-stroke"></figure>
            <ol>
              <li><b>Suction:</b> inlet valve open, exhaust closed; the piston moves TDC to BDC and draws in the air-fuel mixture.</li>
              <li><b>Compression:</b> both valves closed; the piston moves BDC to TDC and compresses the charge (ratio about 8 to 10 for petrol). Near TDC the spark plug ignites it.</li>
              <li><b>Power (expansion):</b> both valves closed; the high-pressure gases push the piston TDC to BDC. This is the only stroke that gives work; the flywheel carries the engine through the others.</li>
              <li><b>Exhaust:</b> exhaust valve open; the piston moves BDC to TDC and pushes the burnt gases out.</li>
            </ol>
            <figure data-fig="m4-otto-pv"></figure>
            <table class="tbl"><thead><tr><th>Feature</th><th>Four-stroke</th><th>Two-stroke</th></tr></thead><tbody>
              <tr><td>Power strokes</td><td>One per two crank revolutions</td><td>One per crank revolution</td></tr>
              <tr><td>Flywheel</td><td>Heavier (uneven torque)</td><td>Lighter (more uniform torque)</td></tr>
              <tr><td>Valves or ports</td><td>Valves and valve gear</td><td>Ports, no valves; simpler</td></tr>
              <tr><td>Power for same size</td><td>Lower</td><td>Higher (in theory about double)</td></tr>
              <tr><td>Thermal efficiency, fuel use</td><td>Higher efficiency, lower fuel use</td><td>Lower; some fresh charge escapes with exhaust</td></tr>
              <tr><td>Lubrication and oil use</td><td>Separate sump, lower oil use</td><td>Oil mixed with fuel, higher oil use</td></tr>
              <tr><td>Wear, noise, pollution</td><td>Less</td><td>More</td></tr>
              <tr><td>Uses</td><td>Cars, buses, motorcycles, generators</td><td>Mopeds, chainsaws, small outboard motors</td></tr>
            </tbody></table>
            <p><b>(b) Choosing sand casting.</b> It is chosen when:</p>
            <ul>
              <li>the part has a complex shape with internal cavities (made with cores) that would be costly to machine or forge, such as engine blocks, pump housings, machine beds;</li>
              <li>the part is large or heavy (from a few grams to many tonnes);</li>
              <li>the metal is hard to work otherwise: cast iron, steel, aluminium, bronze, high-melting alloys;</li>
              <li>production quantity is small to medium, so cheap patterns and moulds are economical (tooling cost is low);</li>
              <li>moderate surface finish and tolerance are acceptable, with machining allowance on critical faces.</li>
            </ul>
            <figure data-fig="m4-sand-mold"></figure>
            <p><b>Process steps:</b></p>
            <ol>
              <li><b>Pattern making:</b> a replica of the part with shrinkage, machining and draft allowances; core boxes for cores.</li>
              <li><b>Moulding:</b> ram moulding sand (silica sand, clay binder, water) around the pattern in the drag, turn it over, then fill the cope. Remove the pattern, set cores, cut the pouring basin, sprue, runner, gates and risers, and close the mould.</li>
              <li><b>Melting and pouring:</b> melt the metal in a furnace (cupola, induction) and pour it through the gating system into the cavity.</li>
              <li><b>Solidification and cooling</b> in the mould; risers feed shrinkage.</li>
              <li><b>Shake-out:</b> break the sand mould and take out the casting.</li>
              <li><b>Fettling and cleaning:</b> cut off gates and risers, remove sand and fins, then heat treat, inspect for defects and machine if needed.</li>
            </ol>`,
        }
      ]
    },

    {
      id: 'fat-b1-2026',
      questions: [
        {
          n: '1',
          answer: `
            <p>Model answer. Take D as the reference node (0 V) and the unknown node voltages V<sub>L</sub>, V<sub>C</sub> and V<sub>R</sub>. Sources: 4 A leaves L and enters C; 3 A leaves C and enters R; 5 A leaves R and enters L. At each node, current leaving through resistors = source current entering.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">Node L: V<sub>L</sub>/4 + (V<sub>L</sub> − V<sub>C</sub>)/2 = 5 − 4 = 1, so (× 4) 3V<sub>L</sub> − 2V<sub>C</sub> = 4</div>
                <div class="eq">Node C: V<sub>C</sub>/2 + (V<sub>C</sub> − V<sub>L</sub>)/2 + (V<sub>C</sub> − V<sub>R</sub>)/3 = 4 − 3 = 1, so (× 6) −3V<sub>L</sub> + 8V<sub>C</sub> − 2V<sub>R</sub> = 6</div>
                <div class="eq">Node R: V<sub>R</sub>/5 + (V<sub>R</sub> − V<sub>C</sub>)/3 = 3 − 5 = −2, so (× 15) −5V<sub>C</sub> + 8V<sub>R</sub> = −30</div>
                <div class="eq">From L: V<sub>L</sub> = (4 + 2V<sub>C</sub>)/3; from R: V<sub>R</sub> = (5V<sub>C</sub> − 30)/8</div>
                <div class="eq">Into C: −(4 + 2V<sub>C</sub>) + 8V<sub>C</sub> − (5V<sub>C</sub> − 30)/4 = 6, so 4.75V<sub>C</sub> = 2.5 and V<sub>C</sub> = 0.5263 V</div>
                <div class="eq">V<sub>L</sub> = 1.6842 V, V<sub>R</sub> = −3.4211 V</div>
                <div class="eq">I<sub>5Ω</sub> = V<sub>R</sub>/5 = −3.4211/5 = −0.684 A</div>
              </div>
              <div class="result"><p>Current in the 5 Ω = <b>0.684 A</b>, flowing from D up to node R (the minus sign means opposite to the assumed R → D direction). Exactly 13/19 A.</p></div>
            </div>
            <div class="note trap"><p>Check: the three sources form a loop among L, C and R, so the net current into D is zero: V<sub>L</sub>/4 + V<sub>C</sub>/2 + V<sub>R</sub>/5 = 0.421 + 0.263 − 0.684 = 0.</p></div>`,
        },
        {
          n: '2',
          answer: `
            <p>Model answer. Find the 5 Ω current due to each source, add the currents, then find the power. The 2 V battery has + on top; the 4 A source draws current down out of node Y (as drawn).</p>
            <div class="worked">
              <div class="solve">
                <div class="eq"><b>2 V alone</b> (4 A opened): beyond X, 10 ∥ (5 + 15) = 10 ∥ 20 = 6.667 Ω</div>
                <div class="eq">I = 2/(1 + 6.667) = 0.2609 A; V<sub>X</sub> = 0.2609 × 6.667 = 1.739 V</div>
                <div class="eq">I′<sub>5Ω</sub> = 1.739/20 = 0.0870 A from X to Y</div>
                <div class="eq"><b>4 A alone</b> (2 V shorted): left of Y, 5 + (1 ∥ 10) = 5 + 0.909 = 5.909 Ω, in parallel with 15 Ω</div>
                <div class="eq">I″<sub>5Ω</sub> = 4 × 15/(15 + 5.909) = 2.8696 A from X to Y</div>
                <div class="eq">Total I<sub>5Ω</sub> = 0.0870 + 2.8696 = 2.9565 A (X to Y)</div>
                <div class="eq">P = I²R = 2.9565² × 5</div>
              </div>
              <div class="result"><p>P<sub>5Ω</sub> = <b>43.7 W</b></p></div>
            </div>
            <div class="note trap"><p>Superposition applies to currents and voltages, not to power: 5(0.087² + 2.8696²) = 41.2 W is wrong. Nodal check: V<sub>X</sub> = −0.870 V, V<sub>Y</sub> = −15.652 V, (V<sub>X</sub> − V<sub>Y</sub>)/5 = 2.9565 A. If your copy shows the 4 A arrow upward, the second part changes sign: I = 0.087 − 2.870 = −2.783 A and P = 38.7 W.</p></div>`,
        },
        {
          n: '3',
          answer: `
            <p>Model answer. Write both waves as sine functions so the phases can be compared. cos x = sin(x + 90°).</p>
            <div class="worked">
              <div class="given"><p>v = 200√2 sin(ωt + 20°) V; i = 10√2 cos(314t − 25°) A = 10√2 sin(314t + 65°) A; ω = 314 rad/s (f = 50 Hz)</p></div>
              <div class="solve">
                <div class="eq">RMS values: V = 200 V, I = 10 A. Phasors: V = 200∠20° V, I = 10∠65° A</div>
                <div class="eq">The current leads the voltage by 65° − 20° = 45°, so the circuit is R and C in series</div>
                <div class="eq">Z = V/I = 200∠20°/10∠65° = 20∠−45° Ω = 14.14 − j14.14 Ω</div>
                <div class="eq">R = Z cos 45° = 14.14 Ω; X<sub>C</sub> = Z sin 45° = 14.14 Ω</div>
                <div class="eq">C = 1/(ωX<sub>C</sub>) = 1/(314 × 14.14) = 225.2 µF</div>
                <div class="eq">Power factor = cos 45° = 0.707 leading</div>
                <div class="eq">Active power P = VI cos φ = 200 × 10 × 0.707 = 1414.2 W (= I²R = 100 × 14.14)</div>
                <div class="eq">Reactive power Q = VI sin φ = 1414.2 var (capacitive, leading)</div>
              </div>
              <div class="result"><p>R = <b>14.14 Ω</b>, C = <b>225.2 µF</b>, pf = <b>0.707 leading</b>, P = <b>1414.2 W</b>, Q = <b>1414.2 var</b> (S = 2000 VA).</p></div>
            </div>
            <div class="note trap"><p>The sign in the voltage is printed unclearly in the scan; it is read here as (ωt + 20°). Always convert cos to sin before taking the phase difference: comparing 20° with −25° directly gives a wrong (lagging) answer.</p></div>`,
        },
        {
          n: '4',
          answer: `
            <p>Model answer. A BLDC motor has permanent magnets on the rotor and the armature winding on the stator; an electronic controller replaces the commutator and brushes.</p>
            <p><b>Advantages over a conventional (brushed) DC motor:</b></p>
            <ul>
              <li>No brushes or commutator, so no sparking, no brush wear, very little maintenance and long life.</li>
              <li>Higher efficiency (no brush friction or brush voltage drop; no rotor copper loss since the rotor has magnets).</li>
              <li>Heat is produced in the stator, where it is easily removed.</li>
              <li>Higher speed range and higher power-to-weight ratio; compact.</li>
              <li>Quiet, low electrical noise (EMI), safe in explosive atmospheres.</li>
              <li>Precise speed and position control through the electronic drive; fast response (low rotor inertia).</li>
            </ul>
            <p>(Drawbacks: needs a controller and position sensing, higher initial cost.)</p>
            <figure data-fig="m1-bldc-parts"></figure>
            <p><b>Construction:</b> laminated stator with a three-phase winding; rotor with permanent magnets (inner or outer rotor); three Hall effect sensors to sense rotor position; shaft and bearings; electronic controller with a six-transistor inverter.</p>
            <figure data-fig="m1-bldc-drive"></figure>
            <p><b>Working:</b> the controller reads the Hall sensors and energises the right pair of stator phases, so the stator field pulls the rotor magnets round. As the rotor nears alignment, the sensors signal the new position and the controller switches to the next pair, moving the field ahead by 60° electrical. Six such steps per electrical revolution keep the field leading the rotor, so it rotates continuously. Speed is controlled by PWM of the transistors; reversing the switching sequence reverses the motor.</p>
            <p><b>Applications:</b> computer fans and disk drives, electric vehicles and e-bikes, drones, cordless tools, HVAC fans and compressors, washing machines, robotics and positioning systems, medical devices.</p>`,
        },
        {
          n: '5',
          answer: `
            <p>Model answer. Do either (a) or (b).</p>
            <p><b>(a)(i) Zener voltage regulator.</b> The Zener is connected in reverse bias across the load R<sub>L</sub>, fed from the unregulated input through a series resistor R<sub>S</sub>. Once in breakdown, the Zener voltage stays nearly constant at V<sub>Z</sub> over a wide range of current, so V<sub>out</sub> = V<sub>Z</sub>.</p>
            <figure data-fig="m2-zener-reg"></figure>
            <ul>
              <li>Input rises: I<sub>S</sub> = (V<sub>in</sub> − V<sub>Z</sub>)/R<sub>S</sub> rises; the extra current goes through the Zener and the extra voltage drops across R<sub>S</sub>. V<sub>out</sub> stays V<sub>Z</sub>.</li>
              <li>Load current rises: I<sub>S</sub> stays fixed, so I<sub>Z</sub> = I<sub>S</sub> − I<sub>L</sub> falls by the same amount; V<sub>out</sub> stays V<sub>Z</sub>.</li>
              <li>This works only while I<sub>Z(min)</sub> ≤ I<sub>Z</sub> ≤ I<sub>Z(max)</sub>.</li>
            </ul>
            <p><b>(a)(ii) Principle of satellite communication.</b> A communication satellite is a microwave repeater in space. An earth station transmits a modulated signal up to the satellite (<b>uplink</b>, for example 6 GHz in C band). The satellite's transponder receives it, amplifies it, shifts it to a different frequency (<b>downlink</b>, 4 GHz) so its own output does not jam its input, and retransmits it back to a wide area of the earth, where receiving stations pick it up. A geostationary satellite (about 36,000 km above the equator, period 24 h) appears fixed in the sky, so antennas need no tracking; three such satellites can cover almost the whole earth.</p>
            <figure data-fig="m2-sat-link"></figure>
            <p><b>(b) Operating modes of a transistor.</b></p>
            <table class="tbl"><thead><tr><th>Mode</th><th>BE junction</th><th>CB junction</th><th>Use</th></tr></thead><tbody>
              <tr><td>Cut-off</td><td>Reverse</td><td>Reverse</td><td>Switch OFF</td></tr>
              <tr><td>Active</td><td>Forward</td><td>Reverse</td><td>Amplifier</td></tr>
              <tr><td>Saturation</td><td>Forward</td><td>Forward</td><td>Switch ON</td></tr>
              <tr><td>Reverse active</td><td>Reverse</td><td>Forward</td><td>Rarely used</td></tr>
            </tbody></table>
            <p><b>CE configuration.</b> Emitter common to input and output; input applied between base and emitter, output taken between collector and emitter. A small base current controls a large collector current: I<sub>C</sub> = βI<sub>B</sub> (β about 50 to 300).</p>
            <figure data-fig="m2-bjt-config"></figure>
            <ul>
              <li><b>Input characteristic</b> (I<sub>B</sub> against V<sub>BE</sub>): like a diode, conduction starts at about 0.7 V; low input resistance.</li>
              <li><b>Output characteristic</b> (I<sub>C</sub> against V<sub>CE</sub> for steps of I<sub>B</sub>): flat active region where I<sub>C</sub> ≈ βI<sub>B</sub>, saturation near the axis, cut-off below I<sub>B</sub> = 0.</li>
            </ul>
            <figure data-fig="m2-ce-output"></figure>
            <p><b>Applications:</b> CE gives high current, voltage and power gain with a 180° phase reversal, so it is the usual <b>amplifier</b> stage (audio and RF amplifiers). Driven between cut-off and saturation it is used as an <b>electronic switch</b> (relay, LED and motor drivers, logic circuits).</p>`,
        },
        {
          n: '6',
          answer: `
            <p>Model answer (method; the drawing of this part is not yet on the site). First angle: top view below the front view, right side view to the left of the front view.</p>
            <ol>
              <li>Read the pictorial: the arrow gives the front view direction. Overall sizes: length 60, depth 45, height 30. Note the raised blocks (15 × 15 in plan, 10 high on top of the higher step), the 10 wide steps and the 15 high step at the right.</li>
              <li><b>Front view:</b> the 60 wide outline with the heights of each step and block projected from their true sizes.</li>
              <li><b>Top view</b> below: the 60 × 45 outline with the line of every step and block seen from above.</li>
              <li><b>Right side view</b> on the left of the front view, by projectors and a 45° mitre line. Hidden edges are dashed.</li>
              <li>Dimension each feature once (BIS aligned system), add the first-angle symbol and keep equal spacing, with the sheet turned sideways.</li>
            </ol>
            <div class="note trap"><p>Check every view against the others: each vertex in the front view must line up vertically with the top view and horizontally with the side view.</p></div>`,
        },
        {
          n: '7',
          answer: `
            <p>Model answer.</p>
            <div class="worked">
              <div class="given"><p>Hexagonal prism: side 20 mm, height 60 mm, base on HP, axis vertical, two base edges parallel to VP.</p></div>
              <div class="solve">
                <div class="eq">Across flats = √3 × 20 = 34.64 mm; across corners = 2 × 20 = 40 mm</div>
                <div class="eq">Enclosing rectangle of the hexagon: 40 (corner to corner, parallel to VP) × 34.64 (flat to flat)</div>
              </div>
            </div>
            <ol>
              <li>Draw the true hexagon (helping view) with two sides parallel to the VP line and box it in a 40 × 34.64 rectangle.</li>
              <li>Draw that rectangle in isometric: 40 along one 30° axis, 34.64 along the other.</li>
              <li>Locate the six corners on it by measuring along the axes only: the two corners on the 40 sides' mid-line at the ends, and the other four 10 mm in from each end on the 34.64 sides (the edges parallel to VP are 20 long, centred).</li>
              <li>Join the corners to get the base. Draw vertical lines 60 mm long from the visible corners and join their tops to make the top hexagon (all six top edges are visible).</li>
              <li>Show only visible edges (three side faces and the top face), thicken the outline, draw the axis and dimension 20 and 60.</li>
            </ol>
            <figure data-fig="m3-fat26-iso-hexprism"></figure>
            <div class="note trap"><p>A slanting hexagon side is not drawn at true length in isometric. Only lines parallel to the isometric axes are measured; the slanting sides come from joining the located corners.</p></div>`,
        },
        {
          n: '8',
          answer: `
            <p>Model answer. Do either (a) or (b).</p>
            <p><b>(a) Pattern.</b> A pattern is a replica of the object to be cast, used to make the mould cavity in sand. It is made slightly larger than the casting to allow for shrinkage, machining and draft (taper for withdrawal), and may carry core prints. Materials: wood, metal (aluminium, cast iron), plastic, wax.</p>
            <ul>
              <li><b>Single piece (solid) pattern:</b> one piece, moulded in the drag. Simple shapes, small numbers. Example: stuffing box, simple blocks.</li>
              <li><b>Split (two-piece) pattern:</b> made in two halves joined by dowel pins at the parting line; one half in the cope, one in the drag. Complex shapes such as pipes, spindles, taps.</li>
              <li><b>Multi-piece pattern:</b> three or more parts for very complex castings (with a cheek in the flask).</li>
              <li><b>Match plate pattern:</b> cope and drag halves mounted on opposite sides of one plate, with gates and runners. Mass production of small castings on moulding machines (piston rings, small parts).</li>
              <li><b>Gated pattern:</b> several patterns joined by gates and runners, making many castings in one mould. Small castings in quantity.</li>
              <li><b>Loose piece pattern:</b> parts that would prevent withdrawal (projections) are held by loose pins and taken out separately after the main pattern.</li>
              <li><b>Cope and drag pattern:</b> split pattern with each half on its own plate, so cope and drag are rammed by different workers. Large castings.</li>
              <li><b>Sweep pattern:</b> a board swept round a spindle to form a symmetrical mould. Large round castings such as bells and pans.</li>
              <li><b>Skeleton pattern:</b> a wooden frame, filled with sand and strickled. Very large, simple castings (pipes, turbine casings) in small numbers.</li>
              <li><b>Follow board, segmental and shell patterns</b> for thin or large curved parts.</li>
            </ul>
            <p><b>(b) Drilling</b> makes a round hole in solid material with a rotating twist drill (a two-flute multi-point tool) fed axially into the work on a drilling machine. The point angle is usually 118°. The hole is rough, slightly oversize, with limited accuracy (about ±0.1 mm).</p>
            <p><b>Reaming</b> finishes an existing drilled or bored hole with a multi-tooth reamer, removing a very small amount (about 0.1 to 0.5 mm on diameter) at low speed with coolant. It gives an accurate size (H7 tolerance), a straight round hole and a smooth finish.</p>
            <table class="tbl"><thead><tr><th>Point</th><th>Drilling</th><th>Reaming</th></tr></thead><tbody>
              <tr><td>Purpose</td><td>Produce a new hole in solid material</td><td>Size and finish an existing hole</td></tr>
              <tr><td>Tool</td><td>Twist drill, 2 cutting edges</td><td>Reamer, many straight or helical flutes</td></tr>
              <tr><td>Material removed</td><td>Large</td><td>Very small (finishing allowance)</td></tr>
              <tr><td>Speed and feed</td><td>Higher speed</td><td>About half the drilling speed, higher feed</td></tr>
              <tr><td>Accuracy and finish</td><td>Low accuracy, rough surface</td><td>High accuracy, smooth surface</td></tr>
              <tr><td>Applications</td><td>Holes for bolts, rivets, clearance and tapping</td><td>Dowel and pin holes, bearing and bush seats, precision fits</td></tr>
            </tbody></table>`,
        },
        {
          n: '9',
          answer: `
            <p>Model answer.</p>
            <p><b>(a) SI versus CI engines.</b></p>
            <table class="tbl"><thead><tr><th>Point</th><th>Spark ignition (SI)</th><th>Compression ignition (CI)</th></tr></thead><tbody>
              <tr><td>Fuel</td><td>Petrol (volatile, high self-ignition temperature)</td><td>Diesel (less volatile, lower self-ignition temperature)</td></tr>
              <tr><td>Cycle</td><td>Otto cycle (heat added at constant volume)</td><td>Diesel cycle (heat added at constant pressure)</td></tr>
              <tr><td>Charge drawn in</td><td>Air-fuel mixture (carburettor or port injection)</td><td>Air only; fuel injected at the end of compression</td></tr>
              <tr><td>Ignition</td><td>Spark plug</td><td>Heat of compressed air; fuel injector</td></tr>
              <tr><td>Compression ratio</td><td>6 to 10</td><td>15 to 22</td></tr>
              <tr><td>Speed control</td><td>Quantity of mixture (throttle)</td><td>Quantity of fuel injected</td></tr>
              <tr><td>Weight and cost</td><td>Lighter, cheaper</td><td>Heavier, costlier (higher pressures)</td></tr>
              <tr><td>Efficiency</td><td>Lower</td><td>Higher</td></tr>
              <tr><td>Uses</td><td>Cars, motorcycles, light vehicles</td><td>Trucks, buses, tractors, ships, generators</td></tr>
            </tbody></table>
            <p><b>(b) Four-stroke versus two-stroke engines.</b></p>
            <table class="tbl"><thead><tr><th>Point</th><th>Four-stroke</th><th>Two-stroke</th></tr></thead><tbody>
              <tr><td>Cycle</td><td>Four piston strokes, two crank revolutions</td><td>Two piston strokes, one crank revolution</td></tr>
              <tr><td>Power stroke</td><td>Once every two revolutions</td><td>Every revolution</td></tr>
              <tr><td>Flywheel and torque</td><td>Heavy flywheel, less uniform torque</td><td>Light flywheel, more uniform torque</td></tr>
              <tr><td>Valves</td><td>Inlet and exhaust valves with valve gear</td><td>Ports covered and uncovered by the piston</td></tr>
              <tr><td>Efficiency and fuel use</td><td>Higher efficiency, lower fuel consumption</td><td>Lower; fresh charge partly lost in scavenging</td></tr>
              <tr><td>Lubrication</td><td>Oil sump, lower oil use</td><td>Oil mixed with petrol, higher oil use</td></tr>
              <tr><td>Weight, cost, pollution</td><td>Heavier, costlier, cleaner</td><td>Lighter, cheaper, more smoke and noise</td></tr>
              <tr><td>Uses</td><td>Cars, buses, trucks, bikes</td><td>Mopeds, scooters, chainsaws, small boats</td></tr>
            </tbody></table>`,
        },
        {
          n: '10',
          answer: `
            <p>Model answer. Constrained motion is motion in which the relative motion between two elements of a pair is in a definite direction. There are three types.</p>
            <figure data-fig="m4-constrained-motion"></figure>
            <ol>
              <li><b>Completely constrained motion:</b> motion between the pair is limited to one definite direction, whatever the direction of the applied force. Example and sketch: a square bar in a square hole can only slide along its axis; a shaft with collars at each end in a round hole can only turn. Also the piston in a cylinder of a slider-crank chain.</li>
              <li><b>Incompletely constrained motion:</b> motion can take place in more than one direction, and which one happens depends on the direction of the force. Example and sketch: a round shaft in a round hole (without collars) can slide along its axis and also rotate; each motion is independent of the other.</li>
              <li><b>Successfully constrained motion:</b> motion is possible in more than one direction, but an external means (load, spring, gravity) makes it occur in one direction only. Example and sketch: a shaft in a foot-step bearing could rise and turn, but the vertical load W on it keeps it down, so it only rotates. Others: the IC engine valve kept on its seat by a spring; the piston of an IC engine.</li>
            </ol>
            <p>A kinematic pair must be completely or successfully constrained to be useful in a mechanism.</p>`,
        }
      ]
    },

    {
      id: 'cat1-b2',
      questions: [
        {
          n: '1',
          answer: `
            <p>From the official answer key. Let V<sub>1</sub> be the node after the 250 Ω resistor and V<sub>2</sub> the node with the 150 Ω resistor and the 0.5 A source.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">Node 1: (V<sub>1</sub> − 100)/250 + V<sub>1</sub>/100 + (V<sub>1</sub> − V<sub>2</sub>)/50 = 0, so 17V<sub>1</sub> − 10V<sub>2</sub> = 200</div>
                <div class="eq">Node 2: (V<sub>2</sub> − V<sub>1</sub>)/50 + V<sub>2</sub>/150 = 0.5, so −3V<sub>1</sub> + 4V<sub>2</sub> = 75</div>
                <div class="eq">V<sub>1</sub> = 40.789 V, V<sub>2</sub> = 49.342 V</div>
                <div class="eq">I = V<sub>1</sub>/100</div>
              </div>
              <div class="result"><p>I = <b>0.408 A</b></p></div>
            </div>`,
        },
        {
          n: '2',
          answer: `
            <p>From the official answer key. Take each source alone, and add the two currents (i is downward through the 4 Ω).</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">2 A source only (20 V shorted): (4 ‖ 10) + 5 = 7.857 Ω</div>
                <div class="eq">Current divider: 2 × 5/(5 + 7.857) = 0.7778 A, then 0.7778 × 10/(10 + 4) = 0.555 A, so i<sub>1</sub> = −0.555 A</div>
                <div class="eq">20 V source only (2 A opened): (V<sub>1</sub> − 20)/10 + V<sub>1</sub>/4 + V<sub>1</sub>/10 = 0, so V<sub>1</sub> = 4.444 V</div>
                <div class="eq">i<sub>2</sub> = V<sub>1</sub>/4 = 1.111 A</div>
                <div class="eq">i = i<sub>1</sub> + i<sub>2</sub></div>
              </div>
              <div class="result"><p>i = <b>0.556 A</b></p></div>
            </div>`,
        },
        {
          n: '3',
          answer: `
            <p>From the official answer key. Remove the 6 Ω resistor, find V<sub>th</sub> and R<sub>th</sub> at A and B, then put the 6 Ω back.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">Node 1: (V<sub>1</sub> − 2)/2 + V<sub>1</sub>/12 + (V<sub>1</sub> − V<sub>2</sub>)/5 = 0, so 47V<sub>1</sub> − 12V<sub>2</sub> = 60</div>
                <div class="eq">Node 2 (terminal A): (V<sub>2</sub> − V<sub>1</sub>)/5 + (V<sub>2</sub> − 4)/3 = 0, so −3V<sub>1</sub> + 8V<sub>2</sub> = 20</div>
                <div class="eq">V<sub>1</sub> = 2.118 V, V<sub>2</sub> = 3.294 V = V<sub>th</sub></div>
                <div class="eq">R<sub>th</sub> = ((2 ‖ 12) + 5) ‖ 3 = 2.0735 Ω</div>
                <div class="eq">I = V<sub>th</sub>/(R<sub>th</sub> + 6) = 3.294/(2.0735 + 6)</div>
              </div>
              <div class="result"><p>I = <b>0.408 A</b></p></div>
            </div>
            <div class="note trap"><p>The key prints 3.296 V in the last step, a rounding slip. Using 3.294 V gives the same 0.408 A.</p></div>`,
        },
        {
          n: '4',
          answer: `
            <p>From the official answer key, which uses C = 150 mF as printed in the question (so X<sub>C</sub> is almost nothing). Phases of V<sub>R</sub> and V<sub>L</sub> are worked here from the current's phase.</p>
            <div class="worked">
              <div class="given"><p>v(t) = 300 sin 314t V; R = 150 Ω; L = 0.2 H; C = 150 mF</p></div>
              <div class="solve">
                <div class="eq">V = 300/√2 = 212.13 V</div>
                <div class="eq">X<sub>L</sub> = ωL = 314 × 0.2 = 62.8 Ω; X<sub>C</sub> = 1/(ωC) = 0.021 Ω</div>
                <div class="eq">Z = R + j(X<sub>L</sub> − X<sub>C</sub>) = 150 + j62.779 Ω</div>
                <div class="eq">(a) I = V/Z = 1.3 A, lagging the voltage by φ = 22.71°</div>
                <div class="eq">(b) i(t) = 1.838 sin(314t − 22.71°) A</div>
                <div class="eq">(c) V<sub>R</sub> = IR = 195 V (in phase with the current, at −22.71°); V<sub>L</sub> = IX<sub>L</sub> = 81.64 V (leads the current by 90°, at +67.29°)</div>
                <div class="eq">(d) power factor = R/Z = cos φ = 0.9224 lagging</div>
                <div class="eq">(e) P = VI cos φ = 254.369 W; Q = VI sin φ = 106.465 VAr</div>
              </div>
            </div>`,
        },
        {
          n: '5',
          answer: `
            <p>Model answer (the official key covers Q1 to Q4 only). Marks: (a) 6, (b) 2, (c) 2.</p>
            <p><b>(a) Armature, commutator and brushes (6 marks).</b></p>
            <ul>
              <li><b>Armature:</b> a slotted core of laminated silicon steel carrying the copper winding. In a generator the winding cuts the field flux and the emf is induced in it. In a motor the current in it, in the field, produces the torque. The laminations cut eddy-current loss.</li>
              <li><b>Commutator:</b> copper segments insulated by mica, fixed on the shaft and connected to the armature coils. It acts as a mechanical rectifier in a generator (the alternating emf of the coils becomes a one-direction output) and reverses the coil current at the right moment in a motor, so the torque keeps one direction.</li>
              <li><b>Brushes:</b> carbon blocks pressed by springs on the commutator. They give the sliding contact that carries current between the rotating armature and the fixed outer circuit.</li>
            </ul>
            <p><b>(b) Transformer (2 marks).</b> Mutual induction: an alternating current in the primary makes an alternating flux in the iron core, which links the secondary and induces an emf in it. V<sub>2</sub>/V<sub>1</sub> = N<sub>2</sub>/N<sub>1</sub>. It changes voltage and current but not frequency, and works only on AC.</p>
            <p><b>(c) Applications (2 marks).</b> DC series motor: electric traction (trains, trams), cranes and hoists, starter motors (high starting torque). Induction motor: pumps, fans, compressors, lathes, conveyors, household appliances (rugged, cheap, nearly constant speed).</p>`,
        }
      ]
    },

    {
      id: 'cat1-a1',
      questions: [
        {
          n: '1',
          answer: `
            <p>Model answer (no official key came with this paper). Take I<sub>1</sub> through the source loop (E, R<sub>s</sub>, R<sub>1</sub>, R<sub>3</sub>), I<sub>2</sub> through R<sub>1</sub>, R<sub>2</sub>, R<sub>5</sub> and I<sub>3</sub> through R<sub>3</sub>, R<sub>5</sub>, R<sub>4</sub>, with the arrows chosen so that every shared resistor is crossed by two currents in opposite directions.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">Mesh 1: 9I<sub>1</sub> − 4I<sub>2</sub> − 2I<sub>3</sub> = 20</div>
                <div class="eq">Mesh 2: −4I<sub>1</sub> + 11I<sub>2</sub> − 5I<sub>3</sub> = 0</div>
                <div class="eq">Mesh 3: −2I<sub>1</sub> − 5I<sub>2</sub> + 8I<sub>3</sub> = 0</div>
                <div class="eq">I<sub>1</sub> = 4 A, I<sub>2</sub> = I<sub>3</sub> = 2.667 A</div>
                <div class="eq">Branch currents: R<sub>1</sub>: I<sub>1</sub> − I<sub>2</sub> = 1.333 A; R<sub>2</sub>: I<sub>2</sub> = 2.667 A; R<sub>3</sub>: I<sub>1</sub> − I<sub>3</sub> = 1.333 A; R<sub>4</sub>: I<sub>3</sub> = 2.667 A; R<sub>5</sub>: I<sub>2</sub> − I<sub>3</sub> = 0 A</div>
                <div class="eq">Power I²R: R<sub>s</sub> 48 W, R<sub>1</sub> 7.11 W, R<sub>2</sub> 14.22 W, R<sub>3</sub> 3.56 W, R<sub>4</sub> 7.11 W, R<sub>5</sub> 0 W</div>
                <div class="eq">Total 80 W = E × I<sub>1</sub> = 20 × 4 (source delivers 80 W)</div>
              </div>
              <div class="result"><p>Mesh currents 4 A, 2.667 A, 2.667 A. R<sub>5</sub> carries no current.</p></div>
            </div>
            <div class="note why"><p>R<sub>5</sub> carries nothing because the bridge is balanced: R<sub>1</sub>R<sub>4</sub> = 4 × 1 = 2 × 2 = R<sub>2</sub>R<sub>3</sub>. The two middle corners sit at the same 2.667 V, which is a quick check on the solution.</p></div>`,
        },
        {
          n: '2',
          answer: `
            <p>Model answer. R<sub>3</sub> is in parallel with the battery, so it does not change I<sub>R1</sub>. Work with each source alone and add the two currents in R<sub>1</sub>, all taken downward.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">5 mA source only (battery shorted): R<sub>1</sub> and R<sub>2</sub> share the current, I′ = 5 × 3.3/(2.2 + 3.3) = 3 mA</div>
                <div class="eq">8 V battery only (current source opened): I″ = 8/(2.2 + 3.3) = 1.4545 mA, also downward through R<sub>1</sub></div>
                <div class="eq">I<sub>R1</sub> = I′ + I″ = 3 + 1.4545</div>
              </div>
              <div class="result"><p>I<sub>R1</sub> = <b>4.45 mA</b> (downward)</p></div>
            </div>
            <div class="note trap"><p>Check with one node equation: V/2.2 + (V − 8)/3.3 = 5 gives V = 9.8 V, and 9.8/2.2 = 4.4545 mA.</p></div>`,
        },
        {
          n: '3',
          answer: `
            <p>Model answer. Remove R, find the open-circuit voltage at the end of R<sub>5</sub> and the resistance looking in with E shorted.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">With R open, R<sub>5</sub> carries no current, so V<sub>th</sub> is the voltage across R<sub>4</sub></div>
                <div class="eq">Node X (after R<sub>1</sub>): (V<sub>X</sub> − 20)/20 + V<sub>X</sub>/5 + (V<sub>X</sub> − V<sub>Y</sub>)/12 = 0</div>
                <div class="eq">Node Y (after R<sub>3</sub>): (V<sub>Y</sub> − V<sub>X</sub>)/12 + V<sub>Y</sub>/16 = 0</div>
                <div class="eq">V<sub>X</sub> = 3.5 V, V<sub>Y</sub> = V<sub>th</sub> = 2 V</div>
                <div class="eq">R<sub>th</sub> = [(20 ‖ 5) + 12] ‖ 16 + 2 = (4 + 12) ‖ 16 + 2 = 8 + 2 = 10 Ω</div>
                <div class="eq">I<sub>L</sub> = V<sub>th</sub>/(R<sub>th</sub> + R) = 2/(10 + 10)</div>
              </div>
              <div class="result"><p>Thevenin equivalent: 2 V in series with 10 Ω. I<sub>L</sub> = <b>0.1 A</b></p></div>
            </div>`,
        },
        {
          n: '4',
          answer: `
            <p>Model answer. The reactances are given, so work with the impedance directly.</p>
            <div class="worked">
              <div class="given"><p>E = 100 V; R = 6 Ω; X<sub>L</sub> = 7 Ω; X<sub>C</sub> = 15 Ω</p></div>
              <div class="solve">
                <div class="eq">Z = 6 + j(7 − 15) = 6 − j8 Ω, |Z| = 10 Ω, angle −53.13°</div>
                <div class="eq">I = 100/10 = 10 A, leading the voltage by 53.13°</div>
                <div class="eq">V<sub>R</sub> = IR = 60 V; V<sub>L</sub> = IX<sub>L</sub> = 70 V; V<sub>C</sub> = IX<sub>C</sub> = 150 V</div>
                <div class="eq">P = I²R = 600 W; Q = I²(X<sub>L</sub> − X<sub>C</sub>) = −800 VAr (800 VAr capacitive); S = EI = 1000 VA</div>
                <div class="eq">Power factor = P/S = R/|Z| = 0.6</div>
              </div>
              <div class="result"><p>Power factor 0.6 <b>leading</b>, because X<sub>C</sub> is larger than X<sub>L</sub> and the circuit is capacitive.</p></div>
            </div>
            <div class="note trap"><p>V<sub>C</sub> (150 V) and V<sub>L</sub> (70 V) are bigger than the 100 V supply but are 180° apart, so they largely cancel: 150 − 70 = 80 V, and √(60² + 80²) = 100 V.</p></div>`,
        },
        {
          n: '5',
          answer: `
            <p>Model answer, for 10 marks: principle with the force rule (about 5 marks), a labelled sketch or the main parts (2 marks) and applications (3 marks).</p>
            <p><b>Principle.</b> A current-carrying conductor placed in a magnetic field experiences a force, F = B I l (Fleming's left-hand rule gives its direction). In a DC motor the armature conductors carry current from the supply while sitting in the field of the stator poles. The conductors under the north pole are pushed one way and those under the south pole the other way, so the two sides of a coil make a torque and the armature turns.</p>
            <ul>
              <li>The commutator reverses the current in each coil as it passes the neutral axis, so the torque always has the same sense and rotation continues.</li>
              <li>As the armature turns, its conductors cut flux and a back emf E<sub>b</sub> is induced. It opposes the supply: V = E<sub>b</sub> + I<sub>a</sub>R<sub>a</sub>, so I<sub>a</sub> = (V − E<sub>b</sub>)/R<sub>a</sub>. This is how the motor draws only the current its load needs.</li>
              <li>Torque is T ∝ φ I<sub>a</sub>.</li>
            </ul>
            <p><b>Main parts.</b> Yoke and field poles with the field winding (make the flux), armature (rotor with winding), commutator and brushes (feed current to the rotating coils and reverse it), shaft and bearings.</p>
            <p><b>Applications.</b> Series motor: electric traction, cranes, hoists, starters (high starting torque). Shunt motor: lathes, fans, pumps, blowers (nearly constant speed). Compound motor: presses, shears, rolling mills (heavy starting load with steady speed).</p>`,
        }
      ]
    },

    {
      id: 'cat2-b1',
      questions: [
        {
          n: '1',
          answer: `
            <p>Model answer (a drawing question: marks go to the redrawn outline, the dimensioning and the neatness). Method:</p>
            <ol>
              <li>Redraw the outline in thick continuous lines at full size (1:1), starting from the 70 mm base (25 + 20 + 25) and 7 mm thickness, then the 6 mm × 20 mm step under the middle, then the 21 mm block and the V-notch.</li>
              <li>Use thin continuous lines for extension and dimension lines. Extension lines start a small gap from the outline and run about 2 mm past the dimension line.</li>
              <li>Put an arrowhead at each end of every dimension line and write the figure above the line, in upright BIS lettering about 3.5 mm high, readable from the bottom or the right of the sheet.</li>
              <li>Chain the horizontal sizes 25, 20, 25 and add the overall length 70 outside them. Dimension the heights 7, 6, 21 and the notch sizes 12 and 5. Dimension the notch angle or its width so that every point is fixed.</li>
              <li>Each size appears once only. Do not dimension to hidden lines, and keep dimensions outside the view.</li>
            </ol>
            <div class="note trap"><p>"Fully defined" means someone could make the part without measuring the drawing. Check that every step and the notch have both a size and a position, and that no dimension is repeated. Do not use outline or centre lines as dimension lines.</p></div>`,
        },
        {
          n: '2',
          answer: `
            <p>Model answer (drawing). First angle: the object sits between the observer and the plane, so the top view goes <b>below</b> the front view and the left side view goes on the <b>right</b> of the front view.</p>
            <ol>
              <li>Draw the XY line. Choose the front view from direction X, which shows the 72 mm length and the 40 mm height, with the 24 mm lower right part and the 12 mm steps.</li>
              <li>Project the top view straight down from the front view. It shows the 72 mm length and the 36 mm depth (48 mm at the back edge), and each step edge is a vertical line carried down from the front view.</li>
              <li>Draw the left side view to the right of the front view, by projecting across horizontally and using the 45° line (or compass arcs) from the top view. It shows the 36 mm depth and the 40 mm height, with the 12 mm notch at the bottom front corner.</li>
              <li>Show hidden edges (such as the notch seen from the other side) as dashed lines, and put the first-angle symbol and the dimensions in BIS style. Turn the sheet sideways, as the paper asks, and leave equal gaps between the views.</li>
            </ol>
            <div class="note trap"><p>The commonest loss of marks is putting the side view on the wrong side. Left side view in first angle sits on the right of the front view. Draw it from the left end of the object.</p></div>`,
        },
        {
          n: '3',
          answer: `
            <p>Model answer (drawing). First angle, so top view below the front view and right side view on the <b>left</b> of the front view.</p>
            <ol>
              <li>Front view (direction X): the 66 mm base, the 60 mm tall upright with its rounded top (draw the arc with the printed radius, centred on the hole or on the top centre line) and the sloping rib. Show the chamfer lines of the base.</li>
              <li>Top view below it: the 66 mm length, with the chamfered (pentagon-shaped) front end, the thickness of the upright at the back and the rib as a narrow rectangle. Project every vertical edge down from the front view.</li>
              <li>Right side view on the left of the front view: project across from the front view and use the 45° line from the top view for the depths (12, 15 and 18 mm steps). The arc top of the upright becomes straight lines where it is seen edge-on.</li>
              <li>Draw the rib as a visible triangle in the side view, and use dashed lines for hidden edges. Add the first-angle symbol and the BIS dimensions.</li>
            </ol>
            <div class="note trap"><p>The printed radius of the rounded top is partly cut off in the scan. Take it from the paper you are given, and draw the arc tangent to the two vertical sides, so that the top is a smooth half-round.</p></div>`,
        },
        {
          n: '4',
          answer: `
            <p>Model answer. The axis is perpendicular to HP (a prism standing on its base), and a base edge is parallel to VP. The top view shows the true shape of the base.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">Pentagon of side 30: width across corners = 1.618 × 30 = 48.54 mm; height (edge to opposite corner) = 46.17 mm</div>
                <div class="eq">Corners from the centre: side corners ±24.27 mm; front edge ends ±15 mm</div>
              </div>
            </div>
            <ol>
              <li>Top view first: draw a pentagon of side 30 with one edge parallel to XY (and nearest to it). It is 48.54 mm wide and 46.17 mm deep. Label the top corners a, b, c, d, e.</li>
              <li>Front view: project up from the top view. Draw the base on XY and the top end 70 mm above it, so the front view is a rectangle 48.54 mm wide and 70 mm high.</li>
              <li>Draw the vertical edges at x = ±24.27 (outline), ±15 (the front edge ends, visible) and the far corner on the centre line, shown <b>dashed</b> because the back faces are hidden.</li>
              <li>Show the dimensions (30, 70) and use thick continuous lines for the outline.</li>
            </ol>`,
        },
        {
          n: '5',
          answer: `
            <p>Model answer. The cylinder lies on HP on a generator (the line it touches the ground along), with its axis parallel to HP and perpendicular to VP. So the circular end faces are parallel to VP and the front view is a true circle.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">Radius = 17.5 mm, so the axis is 17.5 mm above XY</div>
                <div class="eq">Nearest circular face 20 mm in front of VP, length 70 mm, so the top view spans 20 mm to 90 mm in front of XY</div>
              </div>
            </div>
            <ol>
              <li>Front view: draw the circle of diameter 35 mm touching XY (centre 17.5 mm above it). Add the centre lines.</li>
              <li>Top view: project down. Draw a rectangle 35 mm wide (the diameter) and 70 mm long, with its near edge 20 mm below XY and its far edge 90 mm below XY.</li>
              <li>The axis shows as a centre line along the rectangle's middle. Because the circles face VP, the rear face is hidden behind the front one in the front view (it needs no dashed line: it is exactly behind the visible circle).</li>
              <li>Add dimensions 35, 70 and 20 in BIS style.</li>
            </ol>`,
        }
      ]
    },


    {
      id: 'fat-a1',
      questions: [
        {
          n: '1',
          answer: `
            <p>Model answer (no official key). Do either (a) or (b). Both are worked here.</p>
            <p><b>(a) Mesh analysis.</b> Reading the figure: V<sub>1</sub> (+ at the top) is in the left branch, V<sub>2</sub> (+ at the bottom) in the right branch, R<sub>2</sub> is the shared centre branch, R<sub>1</sub> and R<sub>3</sub> sit in the middle row (shared with the top mesh) and R<sub>4</sub> is in the top branch. All three loop currents are clockwise.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">Mesh 1: (3 + 8)i<sub>1</sub> − 8i<sub>2</sub> − 3i<sub>3</sub> = 12</div>
                <div class="eq">Mesh 2: −8i<sub>1</sub> + (8 + 6)i<sub>2</sub> − 6i<sub>3</sub> = 6</div>
                <div class="eq">Mesh 3: −3i<sub>1</sub> − 6i<sub>2</sub> + (3 + 6 + 4)i<sub>3</sub> = 0</div>
                <div class="eq">i<sub>1</sub> = 6.9 A, i<sub>2</sub> = 6.3 A, i<sub>3</sub> = 4.5 A</div>
                <div class="eq">Branch currents: R<sub>1</sub>: i<sub>1</sub> − i<sub>3</sub> = 2.4 A; R<sub>2</sub>: i<sub>1</sub> − i<sub>2</sub> = 0.6 A; R<sub>3</sub>: i<sub>2</sub> − i<sub>3</sub> = 1.8 A; R<sub>4</sub>: i<sub>3</sub> = 4.5 A</div>
              </div>
              <div class="result"><p>Loop currents <b>6.9 A, 6.3 A, 4.5 A</b></p></div>
            </div>
            <div class="note trap"><p>Check by nodes: the middle node is at V<sub>M</sub> = 4.8 V, and 2.4 A through R<sub>1</sub> = (12 − 4.8)/3, 0.6 A through R<sub>2</sub> = 4.8/8. If your sheet shows V<sub>2</sub> reversed, change the sign of the 6 V in Mesh 2 and solve again.</p></div>
            <p><b>(b) Thevenin to the left of a-b.</b> The 4 Ω and 12 Ω form a node with the 32 V source and the 2 A source (arrow up).</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">Open circuit: (32 − V)/4 + 2 = V/12, so V(1/4 + 1/12) = 10 and V<sub>th</sub> = 30 V (no current flows in the 1 Ω)</div>
                <div class="eq">R<sub>th</sub> (source shorted, current source opened) = (4 ‖ 12) + 1 = 3 + 1 = 4 Ω</div>
                <div class="eq">I<sub>L</sub> = 30/(4 + 6)</div>
              </div>
              <div class="result"><p>Thevenin: 30 V in series with 4 Ω. I<sub>L</sub> = <b>3 A</b></p></div>
            </div>`,
        },
        {
          n: '2',
          answer: `
            <p>Model answer.</p>
            <div class="worked">
              <div class="given"><p>R = 20 Ω; L = 20 mH; V = 230 V; f = 50 Hz</p></div>
              <div class="solve">
                <div class="eq">X<sub>L</sub> = 2πfL = 2π × 50 × 0.02 = 6.283 Ω</div>
                <div class="eq">(a) Z = √(20² + 6.283²) = 20.96 Ω; I = 230/20.96 = 10.97 A</div>
                <div class="eq">(b) V<sub>R</sub> = IR = 10.97 × 20 = 219.4 V</div>
                <div class="eq">(c) V<sub>L</sub> = IX<sub>L</sub> = 10.97 × 6.283 = 68.9 V</div>
                <div class="eq">(d) φ = tan<sup>−1</sup>(X<sub>L</sub>/R) = tan<sup>−1</sup>(6.283/20) = 17.44°, current lagging</div>
              </div>
            </div>
            <p><b>(e) Phasor diagram.</b> Draw I along the reference axis. V<sub>R</sub> (219.4 V) is along I. V<sub>L</sub> (68.9 V) is drawn 90° ahead of I, at the end of V<sub>R</sub>. The supply V (230 V) is the resultant, ahead of I by 17.44°.</p>
            <div class="note trap"><p>V<sub>R</sub> + V<sub>L</sub> = 288 V is not the supply. They add at right angles: √(219.4² + 68.9²) = 230 V.</p></div>`,
        },
        {
          n: '3',
          answer: `
            <p>Model answer (about 4 marks principle and sketch, 3 marks parts and functions, 3 marks application detail).</p>
            <p><b>Sketch.</b> Draw a rectangular coil between a north and a south pole, joined to a split-ring commutator with two brushes connected to the DC supply. Mark the field, the current directions and the force on each coil side.</p>
            <p><b>Principle.</b> A current-carrying conductor in a magnetic field feels a force F = B I l, in the direction given by Fleming's left-hand rule (thumb force, first finger field, second finger current). The two sides of the coil carry current in opposite directions, so the forces are opposite and make a torque. The commutator reverses the coil current each half turn, so the torque keeps one direction and the armature keeps turning. The rotation induces a back emf E<sub>b</sub> opposing the supply: V = E<sub>b</sub> + I<sub>a</sub>R<sub>a</sub>.</p>
            <ul>
              <li><b>Yoke and poles with field winding:</b> hold the field and produce the flux.</li>
              <li><b>Armature:</b> slotted laminated core with copper winding, where the force acts.</li>
              <li><b>Commutator:</b> copper segments that reverse the coil current.</li>
              <li><b>Brushes:</b> carbon blocks that bring the supply current to the rotating commutator.</li>
              <li><b>Shaft and bearings:</b> carry the torque to the load.</li>
            </ul>`,
        },
        {
          n: '4',
          answer: `
            <p>Model answer. Draw the circuit and the output waveforms for each (about 4 marks each) and explain the action (about 2 marks).</p>
            <p><b>Half-wave rectifier.</b> One diode in series with the load R<sub>L</sub> and the transformer secondary.</p>
            <ul>
              <li>Positive half cycle: the diode is forward biased, conducts, and the load gets the half sine. Negative half cycle: the diode is reverse biased, no current, and the load voltage is zero.</li>
              <li>Output is a pulsating DC with one pulse per input cycle. V<sub>dc</sub> = V<sub>m</sub>/π, V<sub>rms</sub> = V<sub>m</sub>/2, ripple frequency = f, efficiency about 40.6 %, PIV = V<sub>m</sub>.</li>
            </ul>
            <p><b>Full-wave rectifier.</b> Either two diodes with a centre-tapped transformer, or four diodes in a bridge, feeding R<sub>L</sub>.</p>
            <ul>
              <li>Centre-tap: D<sub>1</sub> conducts on the positive half cycle and D<sub>2</sub> on the negative one, with the load current in the same direction both times. Bridge: D<sub>1</sub>, D<sub>3</sub> conduct on one half cycle and D<sub>2</sub>, D<sub>4</sub> on the other.</li>
              <li>Output has two pulses per cycle. V<sub>dc</sub> = 2V<sub>m</sub>/π, V<sub>rms</sub> = V<sub>m</sub>/√2, ripple frequency = 2f, efficiency about 81.2 %, PIV = 2V<sub>m</sub> for the centre-tap and V<sub>m</sub> for the bridge.</li>
            </ul>
            <p><b>Compare.</b> The full-wave circuit gives double the average output, smaller ripple and better efficiency, at the cost of more diodes (or a centre-tapped transformer).</p>`,
        },
        {
          n: '5',
          answer: `
            <p>Model answer. Block diagram: <b>Uplink.</b> Earth station transmitter (baseband signal, modulator, up-converter, high-power amplifier, antenna) sends the signal up to the satellite. <b>Satellite.</b> Receive antenna, low-noise amplifier, transponder (frequency translation from the uplink to the downlink frequency) and power amplifier, then the transmit antenna. <b>Downlink.</b> Earth station receiver (antenna, low-noise amplifier, down-converter, demodulator, baseband output).</p>
            <p>Label the uplink and downlink frequency bands (for example 6 GHz up and 4 GHz down in C band). The different frequencies stop the satellite's own output from swamping its input.</p>
            <table class="tbl"><thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead><tbody>
              <tr><td>Wide coverage, even remote areas, ships and aircraft</td><td>High launch and satellite cost</td></tr>
              <tr><td>Broadcasts to many users at once; cost is independent of distance</td><td>Propagation delay (about 0.25 s for a geostationary link)</td></tr>
              <tr><td>High bandwidth and capacity</td><td>Signal loss and rain fade at high frequencies</td></tr>
              <tr><td>Quick set-up of links</td><td>Limited life (fuel, solar cells) and difficult repair</td></tr>
            </tbody></table>
            <p><b>Applications.</b> Television broadcasting, telephony and internet in remote areas, weather forecasting, navigation (GPS), remote sensing, disaster management and military use.</p>`,
        },
        {
          n: '6',
          answer: `
            <p>Model answer (drawing). First angle: top view <b>below</b> the front view, right side view on the <b>left</b> of the front view.</p>
            <ol>
              <li><b>Front view</b> (direction X): the cylindrical lump 60 mm wide and 50 mm high, next to the lug (the lug's sloping top, 30 mm high at the free end, shows as a slanted line). Mark the 20 mm hole in the lug's sloping face at the given position (20 mm up, 25 mm from the cylinder side) and show the 30 mm bore as dashed vertical lines.</li>
              <li><b>Top view</b> (below): the cylinder as a circle of diameter 60 mm with the 30 mm hole as a concentric circle (show the through hole as a continuous circle on the top face), joined to the lug rectangle (50 mm overall length, 20 mm and 30 mm widths). Add centre lines.</li>
              <li><b>Right side view</b> (left of the front view): project across with the 45° line from the top view. Show the 50 mm cylinder height, the lug's slope and the hidden hole lines (dashed) for the 30 mm bore and the 20 mm lug hole.</li>
              <li>Add the first-angle symbol, centre lines, dimensions in BIS style, and turn the sheet sideways with equal gaps between views.</li>
            </ol>
            <div class="note trap"><p>Hidden lines for the two holes are the usual mark-losers: a through hole in the top shows as two dashed vertical lines in the front and side views, and the sloping hole as dashed lines in the side view.</p></div>`,
        },
        {
          n: '7',
          answer: `
            <p>Model answer. An isometric view is drawn with the three axes at 120°: the vertical axis straight up and the two horizontal axes at 30° to the horizontal line.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">Base pentagon (side 30, one side parallel to the 30° axis): box 48.54 × 46.17 mm</div>
                <div class="eq">Corner points from the base centre: (±15, −20.65), (±24.27, 7.89), (0, 25.52)</div>
                <div class="eq">Isometric scale 0.8165: side 24.5 mm, axis 40.8 mm (an isometric drawing uses true lengths 30 and 50 if the paper says isometric view)</div>
              </div>
            </div>
            <ol>
              <li>Draw the enclosing rectangle of the pentagon (48.54 × 46.17 mm) in isometric: it becomes a rhombus with its sides along the two 30° axes.</li>
              <li>Mark the five corners of the pentagon on this rhombus by measuring along the axes only: the 30 mm side set 9.27 mm in from each end of the rhombus side (48.54 − 30)/2, the two side corners on the rhombus edges 28.54 mm along the other axis, and the far corner on the middle line at 46.17 mm.</li>
              <li>Join them to make the base. Find the centre of the pentagon on the isometric base and draw the vertical axis of 50 mm through it.</li>
              <li>Join the apex to the five base corners. Hidden edges are not drawn in an isometric view, so only the visible edges remain, with thick outlines.</li>
            </ol>
            <div class="note trap"><p>Measure only along the isometric axes, never along the slanted base lines directly. Offsets are measured on the rectangle's sides and then joined.</p></div>`,
        },
        {
          n: '8',
          answer: `
            <p>Model answer.</p>
            <p><b>Machining</b> is a manufacturing process in which excess material is removed from a workpiece in the form of chips, using a cutting tool, to get the required shape, size and surface finish. It is a subtractive process.</p>
            <p><b>Turning (lathe).</b> The workpiece is clamped in a chuck and rotates; a single-point tool moves along (or across) the axis and removes a layer. It makes cylindrical surfaces: plain turning, facing, taper turning, threading, grooving, drilling and boring. Cutting speed, feed and depth of cut control the cut.</p>
            <p><b>Milling.</b> A rotating multi-tooth cutter works on a workpiece fed under it on the table. Each tooth cuts a small chip. It makes flat surfaces, slots, gears and profiles; the common types are face (surface) milling and peripheral (slab) milling, in either up or down cut.</p>
            <p>Other conventional processes: drilling, shaping and planing, grinding.</p>`,
        },
        {
          n: '9',
          answer: `
            <p>Model answer.</p>
            <p><b>(a) Types of links</b> (a link is a rigid body that connects other bodies and transmits motion):</p>
            <ul>
              <li><b>Rigid link:</b> does not change shape under the loads in use. Example: connecting rod, crank.</li>
              <li><b>Flexible link:</b> bends or stretches but transmits tension. Example: belt, rope, chain.</li>
              <li><b>Fluid link:</b> transmits motion through a fluid under pressure. Example: hydraulic jack, brake line.</li>
              <li>By connections: <b>binary link</b> (two joints, such as a connecting rod), <b>ternary link</b> (three joints, such as a bell crank) and <b>quaternary link</b> (four joints).</li>
            </ul>
            <p><b>(b) Degrees of freedom</b> by Grübler's equation for planar mechanisms with only turning pairs: F = 3(n − 1) − 2j − h.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">(a) Four-bar chain: n = 4 links, j = 4 turning pairs, h = 0, so F = 3(4 − 1) − 2(4) = 9 − 8 = 1</div>
                <div class="eq">(b) Five-link chain (the one shown): n = 5, j = 5, so F = 3(5 − 1) − 2(5) = 12 − 10 = 2</div>
              </div>
              <div class="result"><p>F = <b>1</b> for the four-bar chain (a constrained mechanism). F = <b>2</b> for the five-link chain (it needs two inputs to be fully controlled).</p></div>
            </div>`,
        },
        {
          n: '10',
          answer: `
            <p>Model answer. Do either (a) or (b).</p>
            <p><b>(a) Four-stroke SI engine.</b> Four piston strokes (two crankshaft turns) make one cycle. Draw four small sketches (cylinder, piston, spark plug, inlet and exhaust valves) and the P-V diagram of the Otto cycle.</p>
            <ol>
              <li><b>Suction:</b> inlet valve open, piston moves from TDC to BDC, and air-fuel mixture enters.</li>
              <li><b>Compression:</b> both valves closed, piston moves BDC to TDC, and the mixture is compressed. A spark near the end ignites it.</li>
              <li><b>Power (expansion):</b> combustion raises the pressure, the hot gases push the piston down to BDC, and work is delivered. Both valves are closed.</li>
              <li><b>Exhaust:</b> exhaust valve open, piston moves up and pushes the burnt gases out.</li>
            </ol>
            <p><b>P-V diagram:</b> 1-2 adiabatic compression, 2-3 constant-volume heat addition (the spark), 3-4 adiabatic expansion, 4-1 constant-volume heat rejection (blow-down), then the exhaust and suction strokes appear as a horizontal line at about atmospheric pressure.</p>
            <p><b>(b) Vapour compression refrigeration.</b> Four components in a closed loop: compressor, condenser, expansion (throttle) valve and evaporator. Refrigerant vapour leaves the evaporator as low-pressure vapour, the compressor raises its pressure and temperature, the condenser rejects heat to the surroundings and turns it to liquid, the expansion valve drops the pressure (and temperature) and the cold low-pressure liquid-vapour mixture absorbs heat from the space in the evaporator and boils back to vapour.</p>
            <p>The refrigerating effect is the heat absorbed in the evaporator, and COP = refrigerating effect / compressor work.</p>
            <div class="note trap"><p>Refrigeration is not yet covered in the course notes on this site; this part of the answer is standard textbook material.</p></div>`,
        }
      ]
    }  ]
});
