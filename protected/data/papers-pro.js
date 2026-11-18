// Pro companion of papers-free.js: the "asked in" detail (which paper, which question, what was asked) and the
// official answer key where the paper came with one. Paper entries here carry only id and the questions' n + answer;
// app/js/boot.js merges them into the free copy by id.
PAPERS({
  asked: {
    'm1-dc-machine': [{ where: 'Q5', what: 'working principle of a DC motor and its applications', paper: 'cat1-a1' }, { where: 'Q5', what: 'functions of the commutator, brushes and armature in a DC machine (6 marks)', paper: 'cat1-b2' },  { where: 'Part 1, Q3', what: 'working principle of a DC motor with a rough sketch, main parts and functions', paper: 'fat-a1' }],
    'm1-dc-motor': [{ where: 'Q5', what: 'working principle of a DC motor and its applications', paper: 'cat1-a1' }, { where: 'Q5', what: 'two applications of a DC series motor (2 marks, with the induction motor)', paper: 'cat1-b2' }, { where: 'Part 1, Q3', what: 'working principle of a DC motor with a rough sketch, main parts and functions', paper: 'fat-a1' }],
    'm1-induction-motor': [{ where: 'Q5', what: 'two applications of an induction motor (2 marks, with the DC series motor)', paper: 'cat1-b2' }],
    'm1-mesh': [{ where: 'Q1', what: 'mesh analysis of a bridge with a source resistor (10 marks), then the power in each element', paper: 'cat1-a1' }, { where: 'Part 1, Q1', what: 'mesh analysis with two sources: all loop and branch currents (one of two choices)', paper: 'fat-a1' }],
    'm1-nodal': [{ where: 'Q1', what: 'nodal analysis with a voltage source and a 0.5 A current source: find I', paper: 'cat1-b2' }],
    'm1-rc-rlc': [{ where: 'Q4', what: 'series RLC at 50 Hz (6 Ω, 7 Ω, 15 Ω): element voltages, P, Q, S, power factor, leading or lagging', paper: 'cat1-a1' }, { where: 'Q4', what: 'v(t) = 300 sin 314t across R, L, C in series: rms current, phase, i(t), element voltages, power factor, P and Q', paper: 'cat1-b2' }],
    'm1-rl-series': [{ where: 'Part 1, Q2', what: 'series RL on 230 V, 50 Hz (20 Ω, 20 mH): impedance, element voltages, phase angle and phasor diagram', paper: 'fat-a1' }],
    'm1-superposition': [{ where: 'Q2', what: 'superposition with a 5 mA current source and an 8 V battery: current through R1', paper: 'cat1-a1' }, { where: 'Q2', what: 'superposition with a 2 A source and a 20 V source: find i', paper: 'cat1-b2' }],
    'm1-thevenin': [{ where: 'Q3', what: 'Thevenin equivalent of a ladder across the load, then the load current (R = 10 Ω)', paper: 'cat1-a1' }, { where: 'Q3', what: 'Thevenin equivalent between A and B, then the current in a 6 Ω resistor', paper: 'cat1-b2' },  { where: 'Part 1, Q1', what: 'Thevenin equivalent to the left of a-b, then the current in a 6 Ω load (one of two choices)', paper: 'fat-a1' }],
    'm1-transformer': [{ where: 'Q5', what: 'working principle of a transformer (2 marks)', paper: 'cat1-b2' }],
    'm2-bjt-config': [],
    'm2-diode-vi': [ { where: 'Part 1, Q4', what: 'half-wave and full-wave rectifiers with resistive load, diagrams and waveforms', paper: 'fat-a1' }],
    'm2-sat-basics': [{ where: 'Part 1, Q5', what: 'block diagram of a satellite communication system, with advantages, disadvantages and applications', paper: 'fat-a1' }],
    'm2-zener': [],
    'm3-lettering-dim': [{ where: 'Q1', what: 'redraw and fully dimension a stepped outline as per BIS', paper: 'cat2-b1' }],
    'm3-lines': [],
    'm3-ortho-basics': [{ where: 'Q2', what: 'front, top and left side views of a stepped block, first angle', paper: 'cat2-b1' }, { where: 'Q3', what: 'front, top and right side views of an angle bracket with a rounded top, first angle', paper: 'cat2-b1' }, { where: 'Part 2, Q1', what: 'front, top and right side views from a pictorial view (cylinder with a bored lug), first angle', paper: 'fat-a1' }],
    'm3-six-views': [{ where: 'Q2', what: 'front, top and left side views of a stepped block, first angle', paper: 'cat2-b1' }, { where: 'Q3', what: 'front, top and right side views of an angle bracket with a rounded top, first angle', paper: 'cat2-b1' }, { where: 'Part 2, Q1', what: 'front, top and right side views from a pictorial view (cylinder with a bored lug), first angle', paper: 'fat-a1' }],
    'm3-solids-hp': [{ where: 'Q4', what: 'projections of a pentagonal prism resting on its base on HP (side 30, height 70)', paper: 'cat2-b1' }, { where: 'Part 2, Q2', what: 'isometric view of a pentagonal pyramid (side 30, axis 50) on its base', paper: 'fat-a1' }],
    'm3-solids-vp': [{ where: 'Q5', what: 'projections of a cylinder (diameter 35, height 70) resting on a generator, axis perpendicular to VP', paper: 'cat2-b1' }],
    'm4-four-stroke': [{ where: 'Part 2, Q5', what: 'four-stroke SI engine with P-V diagram (or, in the other choice, vapour compression refrigeration)', paper: 'fat-a1' }],
    'm4-kinematic-pairs': [{ where: 'Part 2, Q4', what: 'types of kinematic links with examples, and degrees of freedom of a four-bar and a five-link chain', paper: 'fat-a1' }],
    'm4-links-dof': [{ where: 'Part 2, Q4', what: 'types of kinematic links with examples, and degrees of freedom of a four-bar and a five-link chain', paper: 'fat-a1' }],
    'm4-machining-basics': [{ where: 'Part 2, Q3', what: 'define machining and explain two conventional machining processes', paper: 'fat-a1' }],
    'm4-mechanisms': [{ where: 'Part 2, Q4', what: 'types of kinematic links with examples, and degrees of freedom of a four-bar and a five-link chain', paper: 'fat-a1' }],
    'm4-turning-milling': [{ where: 'Part 2, Q3', what: 'define machining and explain two conventional machining processes', paper: 'fat-a1' }],
    'm4-welding-basics': [],
    'm4-welding-classes': []
  },

  papers: [
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
