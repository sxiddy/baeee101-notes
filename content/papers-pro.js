// Pro companion of papers-free.js: the "asked in" detail (which paper, which question, what was asked) and the
// official answer key where the paper came with one. Paper entries here carry only id and the questions' n + answer;
// app/js/boot.js merges them into the free copy by id.
PAPERS({
  asked: {
    'm1-dc-machine': [{ where: 'Q5', what: 'working principle of a DC motor and its applications', paper: 'cat1-a1' }, { where: 'Q5', what: 'functions of the commutator, brushes and armature in a DC machine (6 marks)', paper: 'cat1-b2' }, { where: 'Q4', what: 'construction of a practical DC machine with a labelled diagram, and the function of each part', paper: 'cat2-d1' }, { where: 'Part 1, Q3', what: 'working principle of a DC motor with a rough sketch, main parts and functions', paper: 'fat-a1' }],
    'm1-dc-motor': [{ where: 'Q5', what: 'working principle of a DC motor and its applications', paper: 'cat1-a1' }, { where: 'Q5', what: 'two applications of a DC series motor (2 marks, with the induction motor)', paper: 'cat1-b2' }, { where: 'Part 1, Q3', what: 'working principle of a DC motor with a rough sketch, main parts and functions', paper: 'fat-a1' }],
    'm1-induction-motor': [{ where: 'Q5', what: 'two applications of an induction motor (2 marks, with the DC series motor)', paper: 'cat1-b2' }],
    'm1-mesh': [{ where: 'Q1', what: 'mesh analysis of a bridge with a source resistor (10 marks), then the power in each element', paper: 'cat1-a1' }, { where: 'Part 1, Q1', what: 'mesh analysis with two sources: all loop and branch currents (one of two choices)', paper: 'fat-a1' }, { where: 'Part 1, Q1', what: 'loop analysis of a five-battery network: current from each battery', paper: 'fat-e1' }],
    'm1-nodal': [{ where: 'Q1', what: 'nodal analysis with a voltage source and a 0.5 A current source: find I', paper: 'cat1-b2' }, { where: 'Q1', what: 'nodal analysis with a 9 A current source and a 12 V source: voltage across BC and the 12 V source current', paper: 'cat2-d1' }],
    'm1-rc-rlc': [{ where: 'Q4', what: 'series RLC at 50 Hz (6 Ω, 7 Ω, 15 Ω): element voltages, P, Q, S, power factor, leading or lagging', paper: 'cat1-a1' }, { where: 'Q4', what: 'v(t) = 300 sin 314t across R, L, C in series: rms current, phase, i(t), element voltages, power factor, P and Q', paper: 'cat1-b2' }, { where: 'Q3', what: 'series coil and capacitor on 230 V, 50 Hz (0.06 H, 2.5 Ω, 6.8 µF): Z, I, phase angle, power factor, power', paper: 'cat2-d1' }, { where: 'Part 1, Q3', what: 'complex voltage (176+j132) V and current (6.6+j8.8) A: circuit elements, power factor, power (5 marks)', paper: 'fat-e1' }],
    'm1-rl-series': [{ where: 'Part 1, Q2', what: 'series RL on 230 V, 50 Hz (20 Ω, 20 mH): impedance, element voltages, phase angle and phasor diagram', paper: 'fat-a1' }, { where: 'Part 1, Q3', what: 'choke in series with a 100 V, 80 W lamp on 230 V, 50 Hz: find its inductance (5 marks)', paper: 'fat-e1' }],
    'm1-superposition': [{ where: 'Q2', what: 'superposition with a 5 mA current source and an 8 V battery: current through R1', paper: 'cat1-a1' }, { where: 'Q2', what: 'superposition with a 2 A source and a 20 V source: find i', paper: 'cat1-b2' }, { where: 'Part 1, Q2', what: 'superposition with two current sources and a 10 V source: find I', paper: 'fat-e1' }],
    'm1-thevenin': [{ where: 'Q3', what: 'Thevenin equivalent of a ladder across the load, then the load current (R = 10 Ω)', paper: 'cat1-a1' }, { where: 'Q3', what: 'Thevenin equivalent between A and B, then the current in a 6 Ω resistor', paper: 'cat1-b2' }, { where: 'Q2', what: 'Thevenin equivalent across A and B for a two-battery network, current in RL = 10 Ω', paper: 'cat2-d1' }, { where: 'Part 1, Q1', what: 'Thevenin equivalent to the left of a-b, then the current in a 6 Ω load (one of two choices)', paper: 'fat-a1' }],
    'm1-transformer': [{ where: 'Q5', what: 'working principle of a transformer (2 marks)', paper: 'cat1-b2' }, { where: 'Part 1, Q4', what: 'construction and principle of a single phase transformer, with applications', paper: 'fat-e1' }],
    'm2-bjt-config': [{ where: 'Part 1, Q5', what: 'BJT in common base configuration with sketch and V-I characteristics', paper: 'fat-e1' }],
    'm2-diode-vi': [{ where: 'Q5', what: 'a damaged diode against one used for regulation: type of each, VI characteristics, reverse breakdown, current limitation', paper: 'cat2-d1' }, { where: 'Part 1, Q4', what: 'half-wave and full-wave rectifiers with resistive load, diagrams and waveforms', paper: 'fat-a1' }],
    'm2-sat-basics': [{ where: 'Part 1, Q5', what: 'block diagram of a satellite communication system, with advantages, disadvantages and applications', paper: 'fat-a1' }],
    'm2-zener': [{ where: 'Q5', what: 'a damaged diode against one used for regulation: type of each, VI characteristics, reverse breakdown, current limitation', paper: 'cat2-d1' }],
    'm3-lettering-dim': [{ where: 'Q1', what: 'redraw and fully dimension a stepped outline as per BIS', paper: 'cat2-b1' }],
    'm3-lines': [{ where: 'Part 2, Q1', what: 'four types of lines and their uses, first against third angle projection, true or false on isometric and perspective', paper: 'fat-e1' }],
    'm3-ortho-basics': [{ where: 'Q2', what: 'front, top and left side views of a stepped block, first angle', paper: 'cat2-b1' }, { where: 'Q3', what: 'front, top and right side views of an angle bracket with a rounded top, first angle', paper: 'cat2-b1' }, { where: 'Part 2, Q1', what: 'front, top and right side views from a pictorial view (cylinder with a bored lug), first angle', paper: 'fat-a1' }, { where: 'Part 2, Q1', what: 'four types of lines and their uses, first against third angle projection, true or false on isometric and perspective', paper: 'fat-e1' }],
    'm3-six-views': [{ where: 'Q2', what: 'front, top and left side views of a stepped block, first angle', paper: 'cat2-b1' }, { where: 'Q3', what: 'front, top and right side views of an angle bracket with a rounded top, first angle', paper: 'cat2-b1' }, { where: 'Part 2, Q1', what: 'front, top and right side views from a pictorial view (cylinder with a bored lug), first angle', paper: 'fat-a1' }],
    'm3-solids-hp': [{ where: 'Q4', what: 'projections of a pentagonal prism resting on its base on HP (side 30, height 70)', paper: 'cat2-b1' }, { where: 'Part 2, Q2', what: 'isometric view of a pentagonal pyramid (side 30, axis 50) on its base', paper: 'fat-a1' }],
    'm3-solids-vp': [{ where: 'Q5', what: 'projections of a cylinder (diameter 35, height 70) resting on a generator, axis perpendicular to VP', paper: 'cat2-b1' }, { where: 'Part 2, Q2', what: 'projections of a hexagonal prism with a rectangular face parallel to HP, axis perpendicular to VP', paper: 'fat-e1' }],
    'm4-four-stroke': [{ where: 'Part 2, Q5', what: 'four-stroke SI engine with P-V diagram (or, in the other choice, vapour compression refrigeration)', paper: 'fat-a1' }],
    'm4-kinematic-pairs': [{ where: 'Part 2, Q4', what: 'types of kinematic links with examples, and degrees of freedom of a four-bar and a five-link chain', paper: 'fat-a1' }],
    'm4-links-dof': [{ where: 'Part 2, Q4', what: 'types of kinematic links with examples, and degrees of freedom of a four-bar and a five-link chain', paper: 'fat-a1' }],
    'm4-machining-basics': [{ where: 'Part 2, Q3', what: 'define machining and explain two conventional machining processes', paper: 'fat-a1' }],
    'm4-mechanisms': [{ where: 'Part 2, Q4', what: 'types of kinematic links with examples, and degrees of freedom of a four-bar and a five-link chain', paper: 'fat-a1' }],
    'm4-turning-milling': [{ where: 'Part 2, Q3', what: 'define machining and explain two conventional machining processes', paper: 'fat-a1' }],
    'm4-welding-basics': [{ where: 'Part 2, Q3', what: 'working principle of any one metal joining process with a diagram', paper: 'fat-e1' }],
    'm4-welding-classes': [{ where: 'Part 2, Q3', what: 'working principle of any one metal joining process with a diagram', paper: 'fat-e1' }]
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
      id: 'cat2-d1',
      questions: [
        {
          n: '1',
          answer: `
            <p>Model answer (no official key). Ground is the bottom rail. The 12 V source and its 4 Ω resistor feed node A, so A is written as (12 − V<sub>A</sub>)/4 coming in. The 9 A source takes current out of A and puts it into C.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">Node A: (12 − V<sub>A</sub>)/4 = (V<sub>A</sub> − V<sub>B</sub>)/2 + (V<sub>A</sub> − V<sub>C</sub>)/4 + 9, so 1.0V<sub>A</sub> − 0.5V<sub>B</sub> − 0.25V<sub>C</sub> = −6</div>
                <div class="eq">Node B: (V<sub>A</sub> − V<sub>B</sub>)/2 = V<sub>B</sub>/4 + (V<sub>B</sub> − V<sub>C</sub>)/4, so −0.5V<sub>A</sub> + 1.0V<sub>B</sub> − 0.25V<sub>C</sub> = 0</div>
                <div class="eq">Node C: (V<sub>A</sub> − V<sub>C</sub>)/4 + (V<sub>B</sub> − V<sub>C</sub>)/4 + 9 = V<sub>C</sub>/2, so −0.25V<sub>A</sub> − 0.25V<sub>B</sub> + 1.0V<sub>C</sub> = 9</div>
                <div class="eq">V<sub>A</sub> = −4 V, V<sub>B</sub> = 0 V, V<sub>C</sub> = 8 V</div>
                <div class="eq">V<sub>BC</sub> = V<sub>B</sub> − V<sub>C</sub> = −8 V</div>
                <div class="eq">Current in the 12 V source = (12 − V<sub>A</sub>)/4 = 16/4</div>
              </div>
              <div class="result"><p>V<sub>BC</sub> = <b>−8 V</b> (C is 8 V above B). Current in the 12 V source = <b>4 A</b>.</p></div>
            </div>
            <div class="note trap"><p>Check at A: the current leaving through the 2 Ω is (−4 − 0)/2 = −2 A, through the 4 Ω to C it is (−4 − 8)/4 = −3 A, and the 9 A source takes 9 A, so the total out is −2 − 3 + 9 = 4 A, equal to the 4 A coming in from the 12 V source.</p></div>`,
        },
        {
          n: '2',
          answer: `
            <p>Model answer. Reading Figure 2: the 24 V source and 4 Ω feed the top node N. Below N, 5 Ω and 3 Ω in series go to the bottom rail. From N along the top, a 5 Ω resistor and the 12 V battery (+ on the N side) lead to A. R<sub>L</sub> is across A and B, with a 3 Ω resistor in the bottom rail before B. Remove R<sub>L</sub>.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">V<sub>N</sub> = 24 × 8/(4 + 8) = 16 V (the 4 Ω in series with 5 + 3 = 8 Ω; no current flows in the A branch)</div>
                <div class="eq">V<sub>th</sub> = V<sub>AB</sub> = 16 − 12 = 4 V (the 12 V battery opposes V<sub>N</sub>)</div>
                <div class="eq">R<sub>th</sub> (24 V shorted) = 5 + (4 ‖ 8) + 3 = 5 + 2.667 + 3 = 10.667 Ω</div>
                <div class="eq">I<sub>L</sub> = V<sub>th</sub>/(R<sub>th</sub> + R<sub>L</sub>) = 4/(10.667 + 10)</div>
              </div>
              <div class="result"><p>I<sub>L</sub> = <b>0.194 A</b> (0.1935 A)</p></div>
            </div>
            <div class="note trap"><p>If your sheet has the 12 V battery turned the other way, V<sub>th</sub> = 16 + 12 = 28 V and I<sub>L</sub> = 28/20.667 = 1.355 A. The method is the same: check the + plate before you subtract.</p></div>`,
        },
        {
          n: '3',
          answer: `
            <p>Model answer. The coil (R = 2.5 Ω, L = 0.06 H) is in series with C = 6.8 µF on 230 V, 50 Hz, using the values as printed.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">X<sub>L</sub> = 2πfL = 2π × 50 × 0.06 = 18.85 Ω</div>
                <div class="eq">X<sub>C</sub> = 1/(2πfC) = 1/(2π × 50 × 6.8 × 10<sup>−6</sup>) = 468.1 Ω</div>
                <div class="eq">(i) Z = 2.5 + j(18.85 − 468.1) = 2.5 − j449.25 Ω, |Z| = 449.26 Ω</div>
                <div class="eq">(ii) I = 230/449.26 = 0.512 A</div>
                <div class="eq">(iii) φ = tan<sup>−1</sup>(−449.25/2.5) = 89.68°, current leading</div>
                <div class="eq">(iv) power factor = R/|Z| = 2.5/449.26 = 0.0056 leading</div>
                <div class="eq">(v) P = I²R = 0.512² × 2.5 = 0.66 W</div>
              </div>
              <div class="result"><p>|Z| = <b>449.3 Ω</b>, I = <b>0.512 A</b>, φ = <b>89.68°</b> (leading), pf = <b>0.0056</b>, P = <b>0.66 W</b></p></div>
            </div>
            <div class="note trap"><p>The power is almost zero because the circuit is nearly a pure capacitor. P can also be written VI cos φ = 230 × 0.512 × 0.0056 = 0.66 W.</p></div>`,
        },
        {
          n: '4',
          answer: `
            <p>Model answer (10 marks: neat labelled diagram about 4, parts and functions about 6).</p>
            <p><b>Diagram.</b> Draw the cross-section: circular yoke on the outside, field poles with pole shoes projecting inwards, the field coils on the poles, the armature core with slots inside, the shaft through the centre, and the commutator with the brushes at one end. Label each part.</p>
            <ul>
              <li><b>Yoke (frame).</b> A cast iron or steel ring that holds the poles. It gives mechanical strength, protects the machine and carries the return path of the flux.</li>
              <li><b>Field poles and pole shoes.</b> Laminated or solid steel poles carrying the field winding. They set up the main flux. The shoe spreads the flux over the armature surface and holds the coil.</li>
              <li><b>Field winding.</b> Copper coils on the poles. A DC current in them makes the field. Connected in shunt (many turns, fine wire) or series (few turns, thick wire).</li>
              <li><b>Armature core.</b> A cylinder of laminated silicon-steel discs with slots. Laminations cut eddy-current loss, and the core gives a low-reluctance path for the flux.</li>
              <li><b>Armature winding.</b> Copper coils in the slots. The emf is generated (generator) or torque is produced (motor) in this winding. Lap or wave connected.</li>
              <li><b>Commutator.</b> Copper segments insulated by mica, on the shaft. It changes the alternating emf of the armature coils into a unidirectional output (generator) or reverses the current in each coil at the right instant (motor).</li>
              <li><b>Brushes and brush gear.</b> Carbon blocks held by springs. They make the sliding contact between the rotating commutator and the outer circuit.</li>
              <li><b>Shaft, bearings and cooling fan.</b> Carry the rotor, reduce friction and remove heat.</li>
            </ul>
            <p><b>Significance.</b> Together these set the emf equation E = (PφZN)/(60A) for a generator and the torque T ∝ φI<sub>a</sub> for a motor. The same construction works as either a generator or a motor.</p>`,
        },
        {
          n: '5',
          answer: `
            <p>Model answer. Diode A is a normal PN junction (rectifier or signal) diode and diode B is a Zener diode. The two differ in doping and in what the breakdown is used for.</p>
            <table class="tbl"><thead><tr><th></th><th>Diode A (PN junction)</th><th>Diode B (Zener)</th></tr></thead><tbody>
              <tr><td>Doping</td><td>Light to moderate</td><td>Heavy, so the depletion layer is very thin</td></tr>
              <tr><td>Reverse breakdown</td><td>High voltage, avalanche, destructive</td><td>Sharp and low (Zener or avalanche), designed for it</td></tr>
              <tr><td>In reverse region</td><td>Reverse current rises sharply, the diode overheats and is damaged</td><td>Voltage stays almost constant at V<sub>Z</sub> over a wide current range</td></tr>
              <tr><td>Use</td><td>Rectification, switching</td><td>Voltage regulation, reference</td></tr>
            </tbody></table>
            <p><b>VI characteristics.</b> Forward region: both conduct above about 0.7 V (silicon). Reverse region: only a tiny leakage current up to the breakdown voltage. At V<sub>BR</sub> the characteristic turns almost vertical. For the Zener this vertical part (at V<sub>Z</sub>) is the working region. For diode A it is the damage region.</p>
            <p><b>Current limitation.</b> In breakdown the current is limited only by the external circuit, so a series resistor R<sub>s</sub> is needed: I<sub>Z</sub> = (V<sub>in</sub> − V<sub>Z</sub>)/R<sub>s</sub>. It must keep I<sub>Z</sub> between I<sub>Z(min)</sub> (to stay in breakdown) and I<sub>Z(max)</sub> = P<sub>Z(max)</sub>/V<sub>Z</sub> (to stay within its power rating). Without it a normal diode fails by thermal runaway, and a Zener burns out too.</p>
            <p><b>Why a Zener regulates.</b> The characteristic is very steep in breakdown, so the dynamic resistance r<sub>z</sub> = ΔV/ΔI is very small. A large change in current (from the supply or the load) then changes the voltage across it only slightly, and the load across the Zener sees nearly V<sub>Z</sub>.</p>`,
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
    },

    {
      id: 'fat-e1',
      questions: [
        {
          n: '1',
          answer: `
            <p>Model answer (no official key). The battery marks are small in the scan, so this reading is stated: B<sub>1</sub> and B<sub>5</sub> have + on top, B<sub>2</sub> and B<sub>3</sub> have + at the bottom, B<sub>4</sub> has + on its right plate, and all three loop currents run clockwise. If a plate is the other way round, change the sign of that battery in its loop equation and solve again.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">Loop 1 (B<sub>1</sub> + B<sub>2</sub>): 20 + 5 = 5I<sub>1</sub> + 3(I<sub>1</sub> − I<sub>2</sub>), so 8I<sub>1</sub> − 3I<sub>2</sub> = 25</div>
                <div class="eq">Loop 2 (−B<sub>2</sub> + B<sub>4</sub> + B<sub>3</sub>): −5 + 5 + 5 = 4I<sub>2</sub> + 2(I<sub>2</sub> − I<sub>3</sub>) + 3(I<sub>2</sub> − I<sub>1</sub>), so −3I<sub>1</sub> + 9I<sub>2</sub> − 2I<sub>3</sub> = 5</div>
                <div class="eq">Loop 3 (−B<sub>3</sub> − B<sub>5</sub>): −5 − 30 = 8I<sub>3</sub> + 2(I<sub>3</sub> − I<sub>2</sub>), so −2I<sub>2</sub> + 10I<sub>3</sub> = −35</div>
                <div class="eq">I<sub>1</sub> = 3.495 A, I<sub>2</sub> = 0.987 A, I<sub>3</sub> = −3.303 A</div>
                <div class="eq">Current supplied: B<sub>1</sub> = I<sub>1</sub> = 3.495 A; B<sub>2</sub> = I<sub>1</sub> − I<sub>2</sub> = 2.508 A; B<sub>4</sub> = I<sub>2</sub> = 0.987 A; B<sub>3</sub> = I<sub>2</sub> − I<sub>3</sub> = 4.289 A; B<sub>5</sub> = −I<sub>3</sub> = 3.303 A</div>
              </div>
              <div class="result"><p>B<sub>1</sub> <b>3.495 A</b>, B<sub>2</sub> <b>2.508 A</b>, B<sub>3</sub> <b>4.289 A</b>, B<sub>4</sub> <b>0.987 A</b>, B<sub>5</sub> <b>3.303 A</b>. All five battery currents come out positive, so all five supply power.</p></div>
            </div>
            <div class="note trap"><p>Power check: the batteries deliver 20(3.495) + 5(2.508) + 5(0.987) + 5(4.289) + 30(3.303) = 207.9 W, and the resistors dissipate 207.9 W.</p></div>`,
        },
        {
          n: '2',
          answer: `
            <p>Model answer. I is the current in the bottom rail between the 50 Ω and 150 Ω branches, taken to the left (the way it is marked). Take each source alone.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">120 A alone (40 A opened, 10 V shorted): the 120 A returns through the 50 Ω and 150 Ω in parallel. The 150 Ω share is 120 × 50/200 = 30 A, and it passes along the bottom rail to the right, so I′ = −30 A</div>
                <div class="eq">40 A alone: the 50 Ω branch takes 40 × 150/200 = 30 A, which flows left along the bottom rail, so I″ = +30 A</div>
                <div class="eq">10 V alone (current sources opened): one loop through 50 Ω and 150 Ω, I‴ = 10/(50 + 150) = 0.05 A, and the + on the right drives it down the 150 Ω and left along the bottom rail, so I‴ = +0.05 A</div>
                <div class="eq">I = −30 + 30 + 0.05</div>
              </div>
              <div class="result"><p>I = <b>0.05 A</b> to the left (50 mA)</p></div>
            </div>
            <div class="note trap"><p>The two big currents cancel, so the answer is the 10 V source's effect alone. A node check agrees: the top rail on the left sits at −6002.5 V, so the 50 Ω branch carries −120.05 A, and the bottom rail carries 120 − 120.05 = −0.05 A to the right, which is 0.05 A to the left.</p></div>`,
        },
        {
          n: '3',
          answer: `
            <p>Model answer.</p>
            <p><b>(a)</b> V = 176 + j132 = 220 ∠36.87° V; I = 6.6 + j8.8 = 11 ∠53.13° A.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">Z = V/I = (220/11) ∠(36.87° − 53.13°) = 20 ∠−16.26° = 19.2 − j5.6 Ω</div>
                <div class="eq">(i) R = 19.2 Ω in series with a capacitive reactance X<sub>C</sub> = 5.6 Ω (the current leads the voltage); at 50 Hz, C = 1/(2π × 50 × 5.6) = 568 µF</div>
                <div class="eq">(ii) power factor = cos 16.26° = 0.96 leading</div>
                <div class="eq">(iii) P = VI cos φ = 220 × 11 × 0.96 = 2323.2 W (also I²R = 121 × 19.2)</div>
              </div>
              <div class="result"><p>R = <b>19.2 Ω</b>, X<sub>C</sub> = <b>5.6 Ω</b>, pf = <b>0.96 leading</b>, P = <b>2.32 kW</b></p></div>
            </div>
            <p><b>(b)</b> The lamp is a pure resistance. 100 V and 80 W give its current and resistance.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">I = P/V = 80/100 = 0.8 A; R = V/I = 125 Ω</div>
                <div class="eq">Total |Z| = 230/0.8 = 287.5 Ω</div>
                <div class="eq">X<sub>L</sub> = √(287.5² − 125²) = 258.9 Ω</div>
                <div class="eq">L = X<sub>L</sub>/(2πf) = 258.9/(2π × 50)</div>
              </div>
              <div class="result"><p>L = <b>0.824 H</b></p></div>
            </div>
            <div class="note trap"><p>Check: the choke drops 0.8 × 258.9 = 207.1 V, and √(100² + 207.1²) = 230 V. A resistor in series would waste power, but a choke (ideally) uses none.</p></div>`,
        },
        {
          n: '4',
          answer: `
            <p>Model answer (about 3 marks sketch, 3 marks construction, 3 marks principle, 1 mark applications).</p>
            <p><b>Sketch.</b> Two windings on a laminated iron core, with the primary (N<sub>1</sub> turns, supply V<sub>1</sub>) on one limb and the secondary (N<sub>2</sub> turns, load, V<sub>2</sub>) on the other, sharing the common flux φ.</p>
            <p><b>Construction.</b> A core of thin silicon-steel laminations, insulated from each other, stacked in a closed magnetic circuit (core type or shell type). It carries the flux and the laminations reduce eddy-current loss. Two copper windings are insulated from the core and from each other. Large units have a tank of oil for cooling and insulation.</p>
            <p><b>Principle.</b> Mutual induction. An AC voltage V<sub>1</sub> on the primary makes an alternating flux in the core. This links the secondary and induces an emf in it. For an ideal transformer, V<sub>2</sub>/V<sub>1</sub> = N<sub>2</sub>/N<sub>1</sub> = I<sub>1</sub>/I<sub>2</sub>. It changes voltage and current levels but not the frequency, and it works only on AC. A step-up transformer has N<sub>2</sub> &gt; N<sub>1</sub>, a step-down has N<sub>2</sub> &lt; N<sub>1</sub>.</p>
            <p><b>Applications.</b> Raising voltage for power transmission and lowering it for distribution, isolation, power supplies for electronic devices, impedance matching, and measurement (current and potential transformers).</p>`,
        },
        {
          n: '5',
          answer: `
            <p>Model answer (about 3 marks sketch, 3 marks working, 4 marks characteristics).</p>
            <p><b>Common base (CB).</b> The base is common to the input and output. The input is applied between emitter and base, the output is taken between collector and base. A BJT has an emitter, base and collector, with two junctions (emitter-base and collector-base). For normal (active) use, the emitter-base junction is forward biased and the collector-base junction reverse biased. Draw the NPN transistor with the supplies V<sub>EE</sub> (emitter) and V<sub>CC</sub> (collector) and the currents I<sub>E</sub>, I<sub>C</sub>, I<sub>B</sub>.</p>
            <p><b>Current gain.</b> α = I<sub>C</sub>/I<sub>E</sub>, slightly less than 1 (0.95 to 0.99), so the CB circuit does not amplify current. It gives voltage and power gain because of the high output and low input resistance. The input resistance is low and the output resistance high. Used in high-frequency amplifiers.</p>
            <p><b>Input characteristics</b> (I<sub>E</sub> against V<sub>EB</sub> at constant V<sub>CB</sub>): they look like a forward diode curve, with I<sub>E</sub> rising sharply beyond about 0.7 V (silicon). They shift slightly with V<sub>CB</sub>.</p>
            <p><b>Output characteristics</b> (I<sub>C</sub> against V<sub>CB</sub> at constant I<sub>E</sub>): three regions.</p>
            <ul>
              <li><b>Active:</b> I<sub>C</sub> ≈ αI<sub>E</sub> and almost flat. The curves are nearly horizontal.</li>
              <li><b>Saturation:</b> both junctions forward biased, at small or negative V<sub>CB</sub>, where I<sub>C</sub> falls steeply.</li>
              <li><b>Cut-off:</b> I<sub>E</sub> = 0, only the small leakage current I<sub>CBO</sub> flows in the collector.</li>
            </ul>`,
        },
        {
          n: '6',
          answer: `
            <p>Model answer (a 4 + 4 + 2 mark split).</p>
            <p><b>(a) Four types of lines (BIS)</b></p>
            <table class="tbl"><thead><tr><th>Line</th><th>Use</th></tr></thead><tbody>
              <tr><td>Continuous thick</td><td>Visible outlines and edges</td></tr>
              <tr><td>Continuous thin</td><td>Dimension lines, extension lines, leader lines, hatching</td></tr>
              <tr><td>Dashed (medium)</td><td>Hidden edges and outlines</td></tr>
              <tr><td>Chain thin (long dash and dot)</td><td>Centre lines, axes of symmetry, pitch circles</td></tr>
            </tbody></table>
            <p>Others: chain thick at the ends (cutting planes), continuous thin freehand (break lines).</p>
            <p><b>(b) First angle against third angle</b></p>
            <table class="tbl"><thead><tr><th></th><th>First angle</th><th>Third angle</th></tr></thead><tbody>
              <tr><td>Object position</td><td>In the first quadrant, between the observer and the plane</td><td>In the third quadrant, with the plane between the observer and the object</td></tr>
              <tr><td>Plane</td><td>Plane is behind the object (opaque)</td><td>Plane is in front of the object (transparent)</td></tr>
              <tr><td>Top view</td><td>Below the front view</td><td>Above the front view</td></tr>
              <tr><td>Side view</td><td>Left view on the right of the front view</td><td>Left view on the left of the front view</td></tr>
              <tr><td>Used</td><td>India, Europe (BIS)</td><td>USA, Canada</td></tr>
            </tbody></table>
            <p><b>(c) True or false.</b> (i) <b>True.</b> A circle on any of the three principal planes is inclined to the viewing direction, so it appears as an ellipse in an isometric projection. (ii) <b>False.</b> In perspective projection an object appears smaller as it moves further away.</p>`,
        },
        {
          n: '7',
          answer: `
            <p>Model answer. The axis is perpendicular to VP, so the front view is the true shape of the base (a hexagon), and one rectangular face is parallel to HP, so the hexagon has a horizontal side at top and bottom.</p>
            <div class="worked">
              <div class="solve">
                <div class="eq">Hexagon of side 25 mm: across flats = 25√3 = 43.30 mm; across corners = 50 mm</div>
                <div class="eq">Axis 35 mm above HP: the lowest face is 35 − 21.65 = 13.35 mm and the top face 35 + 21.65 = 56.65 mm above XY</div>
                <div class="eq">Nearer end 20 mm in front of VP, axis 50 mm long: the top view covers 20 mm to 70 mm in front of XY</div>
              </div>
            </div>
            <ol>
              <li>Front view: draw a hexagon of side 25 mm with the top and bottom sides horizontal, centre 35 mm above XY. Mark the corners 1 to 6.</li>
              <li>Top view: project down. Draw a rectangle 50 mm wide (across corners) and 50 mm long, from 20 mm to 70 mm below XY.</li>
              <li>Draw the visible edges as lines running the full 50 mm length, at 12.5 mm either side of the centre line (the top face edges) and at 25 mm either side (the corner outlines). The bottom face edges lie directly under the same lines and need no dashed line.</li>
              <li>Add the centre lines and dimensions 25, 50, 35 and 20.</li>
            </ol>`,
        },
        {
          n: '8',
          answer: `
            <p>Model answer. Choose arc welding (the easiest to explain with a diagram).</p>
            <p><b>Principle.</b> Welding joins metals by melting the edges of the parts, with or without filler metal, so that they fuse and solidify into one piece. In <b>shielded metal arc welding (SMAW)</b> the heat comes from an electric arc between a coated electrode and the work.</p>
            <p><b>Diagram.</b> Draw a welding power supply (AC transformer or DC rectifier) with one cable to the work piece through a ground clamp and the other to the electrode holder, with the electrode and the arc over the joint. Label the weld pool, the slag, the solidified weld metal, the base metal and the shielding gas.</p>
            <ul>
              <li>The arc (temperature about 3500 °C or more) melts the electrode tip and the edges of the base metal. The molten electrode metal drops into the weld pool and acts as filler.</li>
              <li>The flux coating burns to make a shielding gas, which keeps air (oxygen and nitrogen) off the pool, and it leaves a slag layer that protects the cooling weld and is chipped off afterwards.</li>
              <li>Current is typically 50 to 400 A at 20 to 40 V, and the electrode is moved along the joint to build the bead.</li>
            </ul>
            <p><b>Use.</b> Structural steel, pipes, repairs and fabrication in general.</p>`,
        },
        {
          n: '9',
          answer: `
            <p>Model answer (standard textbook material; refrigeration is not yet covered in the course notes on this site).</p>
            <p><b>Construction.</b> Four main parts joined in a closed circuit by pipes, containing a refrigerant such as R-134a: <b>compressor</b>, <b>condenser</b>, <b>expansion (throttle) valve or capillary tube</b> and <b>evaporator</b>. Draw them in order with arrows on the pipes and label the two heat flows (Q<sub>in</sub> at the evaporator, Q<sub>out</sub> at the condenser).</p>
            <p><b>Working.</b></p>
            <ol>
              <li><b>Compression:</b> the compressor takes in low-pressure, low-temperature vapour from the evaporator and compresses it to a high-pressure, high-temperature vapour. This takes work.</li>
              <li><b>Condensation:</b> in the condenser (air or water cooled) the hot vapour gives up heat to the surroundings and condenses to a high-pressure liquid.</li>
              <li><b>Expansion:</b> the liquid passes through the expansion valve, where its pressure and temperature fall suddenly (a constant-enthalpy throttling). It leaves as a cold liquid-vapour mixture.</li>
              <li><b>Evaporation:</b> in the evaporator the cold refrigerant absorbs heat from the space to be cooled and evaporates fully. The low-pressure vapour goes back to the compressor.</li>
            </ol>
            <p><b>Performance.</b> COP = refrigerating effect/compressor work = heat absorbed in the evaporator/work input. Used in refrigerators, freezers, cold storage and air conditioners.</p>`,
        },
        {
          n: '10',
          answer: `
            <p>Model answer (standard textbook material; robotics is not yet covered in the course notes on this site).</p>
            <p><b>(a) What a robot is (2 marks).</b> A robot is a reprogrammable, multi-functional machine (a mechanism driven by actuators and guided by sensors and a controller) that can carry out a variety of tasks, such as moving parts or tools through programmed motions, with little or no human help.</p>
            <p><b>(b) Robots against automation (3 marks).</b></p>
            <table class="tbl"><thead><tr><th></th><th>Fixed automation</th><th>Robot</th></tr></thead><tbody>
              <tr><td>Task</td><td>One fixed job (for example a transfer line or a bottle-filling machine)</td><td>Many jobs, by reprogramming</td></tr>
              <tr><td>Flexibility</td><td>Low; a new product needs new equipment</td><td>High; a new program or tool is enough</td></tr>
              <tr><td>Use</td><td>High-volume, same product</td><td>Medium volume, varied products</td></tr>
              <tr><td>Sensing and decision</td><td>Little or none</td><td>Sensors and a controller let it adapt</td></tr>
            </tbody></table>
            <p><b>(c) One configuration (5 marks): articulated (revolute) arm.</b> Draw a base on the floor, a vertical rotating waist, a shoulder joint, an elbow joint and a wrist with a gripper (end effector) at the end, with each joint a rotation. Label the joints and the axes.</p>
            <ul>
              <li>The arm has three or more rotary joints (waist, shoulder, elbow, plus wrist joints), so it reaches a roughly spherical work envelope.</li>
              <li>Advantages: a large reach and great flexibility, which suits welding, painting and assembly. Disadvantages: more complex control and lower stiffness.</li>
            </ul>
            <p>Other configurations: Cartesian (three sliding joints, a box-shaped envelope), cylindrical, spherical (polar) and SCARA.</p>`,
        }
      ]
    }
  ]
});
