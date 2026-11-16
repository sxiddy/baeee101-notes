PAPERS({
  index: [
    { id: 'cat1-a1', kind: 'actual', exam: 'cat1', title: 'CAT-1 · Slot A1+TA1 · 09-08-2026', sub: 'Actual paper · Fall 2026–27' },
    { id: 'cat1-b2', kind: 'actual', exam: 'cat1', title: 'CAT-1 · Slot B2+TB2 · 18-08-2025', sub: 'Actual paper · Fall 2025–26 · with answer key' },
    { id: 'cat2-b1', kind: 'actual', exam: 'cat2', title: 'CAT-2 · Slot B1+TB1 · 28-09-2026', sub: 'Actual paper · Fall 2026–27' },
    { id: 'cat2-d1', kind: 'actual', exam: 'cat2', title: 'CAT-2 · Slot D1+TD1/D2+TD2 · September 2026', sub: 'Actual paper · Fall 2026–27 · Chennai' },
    { id: 'fat-a1', kind: 'actual', exam: 'fat', title: 'FAT · Slot A1 · November 2025', sub: 'Actual paper · Fall 2025–26 · two parts, all modules' },
    { id: 'fat-e1', kind: 'actual', exam: 'fat', title: 'FAT · Slot E1+TE1 · Nov/Dec 2025', sub: 'Actual paper · Fall 2025–26 · Chennai · two parts, all modules' }
  ],

  asked: {
    'm1-dc-machine': [{ paper: 'cat1-a1' }, { paper: 'cat1-b2' }, { paper: 'cat2-d1' }, { paper: 'fat-a1' }],
    'm1-dc-motor': [{ paper: 'cat1-a1' }, { paper: 'cat1-b2' }, { paper: 'fat-a1' }],
    'm1-induction-motor': [{ paper: 'cat1-b2' }],
    'm1-mesh': [{ paper: 'cat1-a1' }, { paper: 'fat-a1' }, { paper: 'fat-e1' }],
    'm1-nodal': [{ paper: 'cat1-b2' }, { paper: 'cat2-d1' }],
    'm1-rc-rlc': [{ paper: 'cat1-a1' }, { paper: 'cat1-b2' }, { paper: 'cat2-d1' }, { paper: 'fat-e1' }],
    'm1-rl-series': [{ paper: 'fat-a1' }, { paper: 'fat-e1' }],
    'm1-superposition': [{ paper: 'cat1-a1' }, { paper: 'cat1-b2' }, { paper: 'fat-e1' }],
    'm1-thevenin': [{ paper: 'cat1-a1' }, { paper: 'cat1-b2' }, { paper: 'cat2-d1' }, { paper: 'fat-a1' }],
    'm1-transformer': [{ paper: 'cat1-b2' }, { paper: 'fat-e1' }],
    'm2-bjt-config': [{ paper: 'fat-e1' }],
    'm2-diode-vi': [{ paper: 'cat2-d1' }, { paper: 'fat-a1' }],
    'm2-sat-basics': [{ paper: 'fat-a1' }],
    'm2-zener': [{ paper: 'cat2-d1' }],
    'm3-lettering-dim': [{ paper: 'cat2-b1' }],
    'm3-lines': [{ paper: 'fat-e1' }],
    'm3-ortho-basics': [{ paper: 'cat2-b1' }, { paper: 'fat-a1' }, { paper: 'fat-e1' }],
    'm3-six-views': [{ paper: 'cat2-b1' }, { paper: 'fat-a1' }],
    'm3-solids-hp': [{ paper: 'cat2-b1' }, { paper: 'fat-a1' }],
    'm3-solids-vp': [{ paper: 'cat2-b1' }, { paper: 'fat-e1' }],
    'm4-four-stroke': [{ paper: 'fat-a1' }],
    'm4-kinematic-pairs': [{ paper: 'fat-a1' }],
    'm4-links-dof': [{ paper: 'fat-a1' }],
    'm4-machining-basics': [{ paper: 'fat-a1' }],
    'm4-mechanisms': [{ paper: 'fat-a1' }],
    'm4-turning-milling': [{ paper: 'fat-a1' }],
    'm4-welding-basics': [{ paper: 'fat-e1' }],
    'm4-welding-classes': [{ paper: 'fat-e1' }]
  },

  papers: [
    {
      id: 'cat1-a1', kind: 'actual', exam: 'cat1', title: 'CAT-1 · Slot A1+TA1 · 09-08-2026', short: 'A1+TA1 paper', sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'A1+TA1'], ['Date', '09-08-2026'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Programme', 'B.Tech. (BCE, BIT, BDE, BYB)']],
      instructions: `<b>General instructions:</b> Answer all questions. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcome:</b> CO1: Analyse the electrical circuits, electrical motors and the role of power electronics in industrial applications.`,
      questions: [
        {
          n: '1', marks: 10, co: '1', bl: '3',
          notes: ['m1-mesh.2'],
          prompt: `<p>Apply mesh analysis to determine the mesh currents and branch currents in the network shown in Fig. 1. Hence, calculate the power dissipated by each element.</p>`,
          passage: `<p><b>Fig. 1</b> (described, not the scan): a 20 V source E in series with a source resistor Rs = 3 Ω feeds a resistor bridge. The bridge has four arms, R1 = 4 Ω (top corner to left corner), R2 = 2 Ω (top corner to right corner), R3 = 2 Ω (left corner to bottom corner) and R4 = 1 Ω (right corner to bottom corner), plus R5 = 5 Ω joining the left and right corners. The E and Rs branch is connected across the top and bottom corners of the bridge, and the bottom is grounded.</p>`,
          topics: ['m1-mesh']
        },
        {
          n: '2', marks: 10, co: '1', bl: '3',
          notes: ['m1-superposition.1'],
          prompt: `<p>Determine the current flowing through resistor R<sub>1</sub> in the circuit shown in Fig. 2 using the Superposition Theorem.</p>`,
          passage: `<p><b>Fig. 2</b> (described, not the scan): a ground rail along the bottom and a top rail. A 5 mA current source I (arrow pointing up) is the leftmost branch. Next is R1 = 2.2 kΩ from the top rail to ground, whose current is marked I<sub>R1</sub> (downwards). R2 = 3.3 kΩ sits in the top rail between the R1 branch and the next branch, an 8 V battery (longer plate on top) to ground. The last branch is R3 = 4.7 kΩ to ground.</p>`,
          topics: ['m1-superposition']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          notes: ['m1-thevenin.1'],
          prompt: `<p>Determine the Thevenin equivalent circuit across the terminals of resistor R for the network shown in Fig. 3. Also find the current through the load resistor (R = 10 Ω) of the network.</p>`,
          passage: `<p><b>Fig. 3</b> (described, not the scan): a ladder network driven by a 20 V source E. Along the top: R1 = 20 Ω, R3 = 12 Ω and R5 = 2 Ω in series. Shunt resistors to the bottom rail: R2 = 5 Ω after R1, and R4 = 16 Ω after R3. The load R is connected across the open terminals after R5 (R = 10 Ω).</p>`,
          topics: ['m1-thevenin']
        },
        {
          n: '4', marks: 10, co: '1', bl: '3',
          notes: ['m1-rc-rlc.1', 'm1-rc-rlc.4'],
          prompt: `<p>Analyze the series RLC circuit shown in Fig. 4 operating at 50 Hz. Determine the voltage across each element, real power, reactive power, apparent power and power factor of the circuit. Hence, identify whether the circuit operates at a leading or lagging power factor.</p>`,
          passage: `<p><b>Fig. 4</b> (described, not the scan): a single loop with a source E = 100 V ∠0° driving current I through R = 6 Ω, an inductive reactance X<sub>L</sub> = 7 Ω and a capacitive reactance X<sub>C</sub> = 15 Ω in series.</p>`,
          topics: ['m1-rc-rlc']
        },
        {
          n: '5', marks: 10, co: '1', bl: '3',
          notes: ['m1-dc-motor.0', 'm1-dc-motor.3'],
          prompt: `<p>Explain the working principle of a DC motor and mention its applications.</p>`,
          topics: ['m1-dc-motor', 'm1-dc-machine']
        }
      ]
    },

    {
      id: 'cat1-b2', kind: 'actual', exam: 'cat1', title: 'CAT-1 · Slot B2+TB2 · 18-08-2025', short: 'B2+TB2 paper', sub: 'Actual paper · Fall 2025–26 · with answer key',
      meta: [['Slot', 'B2+TB2'], ['Date', '18-08-2025'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Programme', 'B.Tech.']],
      instructions: `<b>General instructions:</b> Answer all questions. Rough work should not be done on the question paper; it is treated as malpractice. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcome:</b> CO1: Analyse the electrical circuits, electrical motors and the role of power electronics in industrial applications.`,
      questions: [
        {
          n: '1', marks: 10, co: '1', bl: '3',
          notes: ['m1-nodal.1'],
          prompt: `<p>Using nodal voltage analysis, determine the current I indicated in the figure below.</p>`,
          passage: `<p><b>Figure</b> (described, not the scan): a 100 V source in series with 250 Ω feeds a first node. From that node, a 100 Ω resistor goes to the bottom rail (the current I flows down through it) and a 50 Ω resistor leads to a second node. The second node has a 150 Ω resistor to the bottom rail and a 0.5 A current source (arrow up) in parallel with it.</p>`,
          topics: ['m1-nodal']
        },
        {
          n: '2', marks: 10, co: '1', bl: '3',
          notes: ['m1-superposition.1'],
          prompt: `<p>Using superposition theorem, determine the current i indicated in the figure below.</p>`,
          passage: `<p><b>Figure</b> (described, not the scan): four vertical branches between a top rail and a bottom rail. From the left: a 2 A current source (arrow pointing down), a 5 Ω resistor, a 4 Ω resistor and a 20 V source (+ at the top). The top rail has a 5 Ω resistor between the first two junctions and a 10 Ω resistor between the last two. The current i is marked downwards through the 4 Ω resistor.</p>`,
          topics: ['m1-superposition']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          notes: ['m1-thevenin.2'],
          prompt: `<p>In the network shown in the figure below, find the current that would flow if a 6 ohm resistor was connected between points A and B by using Thevenin's theorem.</p>`,
          passage: `<p><b>Figure</b> (described, not the scan): a 2 V battery on the left with a 2 Ω resistor in the top rail, then a 12 Ω resistor from the rail to the bottom, then a 5 Ω resistor in the top rail leading to the open terminal A. A 3 Ω resistor and a 4 V battery on the right connect the same rail to the bottom. Terminal B is on the bottom rail below A.</p>`,
          topics: ['m1-thevenin']
        },
        {
          n: '4', marks: 10, co: '1', bl: '3',
          notes: ['m1-rc-rlc.2'],
          prompt: `<p>An instantaneous voltage v(t) = 300 sin 314t V is applied across series connected resistance of 150 Ω, inductance of 0.2 H and capacitance of 150 mF.</p>`,
          parts: [
            { text: '(a) Compute the R.M.S. value of the current in the circuit and its phase angle with respect to the voltage.' },
            { text: '(b) Write the expression for the instantaneous current in the circuit.' },
            { text: '(c) Compute the r.m.s. value and the phase of the voltages appearing across the resistance and the inductance.' },
            { text: '(d) Calculate the power factor of the circuit.' },
            { text: '(e) Find the real and reactive power of the circuit.' }
          ],
          topics: ['m1-rc-rlc']
        },
        {
          n: '5', marks: 10, co: '1', bl: '2',
          notes: ['m1-dc-motor.3', 'm1-transformer.0', 'm1-induction-motor.1'],
          prompt: `<p>Answer parts (a), (b) and (c).</p>`,
          parts: [
            { text: 'Describe the function of the commutator, brushes, and armature in a DC machine.', marks: 6 },
            { text: 'Explain the working principle of transformer.', marks: 2 },
            { text: 'List any two applications of DC series motor and induction motor.', marks: 2 }
          ],
          topics: ['m1-dc-machine', 'm1-transformer', 'm1-dc-motor', 'm1-induction-motor']
        }
      ]
    },

    {
      id: 'cat2-b1', kind: 'actual', exam: 'cat2', title: 'CAT-2 · Slot B1+TB1 · 28-09-2026', short: 'B1+TB1 paper', sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'B1+TB1'], ['Date', '28-09-2026'], ['Time', '2 pm to 3.30 pm'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Book', 'Closed book'], ['Programme', 'B.Tech. and BCE']],
      instructions: `<b>General instructions:</b> Answer all questions. All dimensions of figures provided in the questions are in millimetres (mm). Lettering, numbering and dimensioning must be done as per the Bureau of Indian Standards (BIS). Orthographic projections must be drawn in landscape orientation within the answer booklet. Plan the layout before drawing to ensure adequate space for all required views, including the side view where applicable. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcome:</b> CO3: Apply BIS standards to create basic 2D and 3D representations of engineering components.`,
      questions: [
        {
          n: '1', marks: 10, co: '3', bl: '3',
          notes: ['m3-lettering-dim.4'],
          prompt: `<p>Manually redraw the given sketch shown in Fig. 1. Indicate all the required dimensions to make it fully defined sketch according to standard dimensioning conventions. All dimensions are in mm.</p>`,
          passage: `<p><b>Fig. 1</b> (described, not the scan): a flat front outline of a stepped component. A base plate 70 long (25 + 20 + 25) and 7 thick has a 20 wide, 6 deep rectangular step under its middle. A block 21 high stands on the plate, set in from both ends; its top has a V-shaped notch with sloping sides (printed 12 for the sloping part and 5 for the flat-bottomed part of the notch depth). The printed dimensions are 25, 20, 25, 7, 6, 21, 12 and 5; the redrawn sketch has to carry every dimension needed to make it fully defined.</p>`,
          topics: ['m3-lettering-dim']
        },
        {
          n: '2', marks: 10, co: '3', bl: '3',
          notes: ['m3-six-views.3'],
          prompt: `<p>Draw the front view, top view and left side view for the component shown in Fig. 2. Use first angle projection method.</p><p>Note: Use landscape orientation of answer sheet.</p>`,
          passage: `<p><b>Fig. 2</b> (described, not the scan): a pictorial view of a stepped block, direction X marking the front view. Overall length 72, depth 36, back edge 48, height 40 at the tall left part. The right part steps down in stages, with printed step sizes 24, 24, 24, 12 and 12 and a lower height of 24; a 12 high notch is cut at the front bottom corner.</p>`,
          topics: ['m3-six-views', 'm3-ortho-basics']
        },
        {
          n: '3', marks: 10, co: '3', bl: '3',
          notes: ['m3-six-views.3'],
          prompt: `<p>Draw the front view, top view and right side view for the component shown in Fig. 3. Use first angle projection method.</p><p>Note: Use landscape orientation of answer sheet.</p>`,
          passage: `<p><b>Fig. 3</b> (described, not the scan): a pictorial view of an angle bracket, direction X marking the front view. A base block 66 long has a chamfered (pentagon-shaped) front end. An upright plate rises at the back with a rounded top (a radius is printed at the top, partly cut off in the scan) and overall height 60. A sloping rib joins the upright to the base. Other printed dimensions: 12, 27, 42, 12, 15, 12, 18, 12, 12 and 12.</p>`,
          topics: ['m3-six-views', 'm3-ortho-basics']
        },
        {
          n: '4', marks: 10, co: '3', bl: '2',
          notes: ['m3-solids-hp.3'],
          prompt: `<p>A pentagonal prism of base side 30 mm and height 70 mm is resting on HP on its base with one of its base edge parallel to VP and its axis is also parallel to VP. Draw its projections.</p>`,
          topics: ['m3-solids-hp']
        },
        {
          n: '5', marks: 10, co: '3', bl: '2',
          notes: ['m3-solids-vp.4'],
          prompt: `<p>A cylinder of diameter 35 mm and height 70 mm is resting on H.P on one of its generators with its axis parallel to H.P and perpendicular to V.P. The nearest circular face of the cylinder is 20 mm in front of VP. Draw its projections.</p>`,
          topics: ['m3-solids-vp']
        }
      ]
    },

    {
      id: 'cat2-d1', kind: 'actual', exam: 'cat2', title: 'CAT-2 · Slot D1+TD1/D2+TD2 · September 2026', short: 'D1+TD1 paper', sub: 'Actual paper · Fall 2026–27 · Chennai',
      meta: [['Slot', 'D1+TD1 / D2+TD2'], ['Date', 'September 2026'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Campus', 'Chennai'], ['Programme', 'B.Tech.']],
      instructions: `<b>Course Outcomes:</b> CO1: Analyse the electrical circuits, electrical motors and the role of power electronics in industrial applications. CO2: Acquire foundational knowledge of electronic devices and communication systems.<br>Blooms Taxonomy levels: K1 Remembering, K2 Understanding, K3 Applying, K4 Analysing, K5 Evaluating, K6 Creating.`,
      questions: [
        {
          n: '1', marks: 10, co: '1', bl: '3',
          notes: ['m1-nodal.1'],
          prompt: `<p>Use nodal analysis to determine the voltage across BC and the current in the 12 V source for the circuit given in Figure 1. All resistances are in ohms.</p>`,
          passage: `<p><b>Figure 1</b> (described, not the scan): three nodes A, B and C, with the ground at the bottom. A 12 V source (+ at the top) in series with a 4 Ω resistor connects ground to node A. A 2 Ω resistor joins A to B, and a 4 Ω resistor joins B to C. A 4 Ω resistor joins B to ground and a 2 Ω resistor joins C to ground. A second 4 Ω resistor joins A directly to C, and a 9 A current source also joins A to C (arrow pointing toward C).</p>`,
          topics: ['m1-nodal']
        },
        {
          n: '2', marks: 10, co: '1', bl: '3',
          notes: ['m1-thevenin.1'],
          prompt: `<p>Using Thevenin's theorem, calculate the current flowing through the load resistance, R<sub>L</sub> connected across the terminals A and B for the network shown in Figure 2.</p>`,
          passage: `<p><b>Figure 2</b> (described, not the scan): on the left, a 24 V battery (+ at the top) in series with a 4 Ω resistor reaches the top node. From that node a 5 Ω and a 3 Ω resistor in series go down to the bottom node. Along the top, a 5 Ω resistor and a 12 V battery (+ on the left side) lead to terminal A. On the right, R<sub>L</sub> = 10 Ω is connected between A and the bottom end, with a 3 Ω resistor in the bottom rail before terminal B.</p>`,
          topics: ['m1-thevenin']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          notes: ['m1-rc-rlc.1', 'm1-rc-rlc.4'],
          prompt: `<p>A 230 V, 50 Hz, ac supply is applied to a coil of 0.06 H inductance and 2.5 Ω resistance connected in series with a 6.8 µF capacitor. Calculate (i) impedance, (ii) current, (iii) phase angle between voltage and current, (iv) power factor and (v) power consumed.</p>`,
          topics: ['m1-rc-rlc']
        },
        {
          n: '4', marks: 10, co: '1', bl: '2',
          notes: ['m1-dc-machine.1'],
          prompt: `<p>With the help of a neat, labelled diagram, explain the constructional details of a practical DC machine. Identify the major components and discuss their functions and significance in the operation of the machine.</p>`,
          topics: ['m1-dc-machine']
        },
        {
          n: '5', marks: 10, co: '2', bl: '2',
          notes: ['m2-zener.3'],
          prompt: `<p>Two diodes, A and B, are tested under reverse bias. Diode A is damaged when its reverse voltage exceeds a certain value, whereas diode B is deliberately operated in this region and maintains an approximately constant voltage across its terminals. Identify the likely type of each diode and explain the difference in their intended operation with the help of VI characteristics.</p><p>Discuss reverse breakdown, current limitation and the characteristics that make one device suitable for voltage regulation.</p>`,
          topics: ['m2-zener', 'm2-diode-vi']
        }
      ]
    },

    {
      id: 'fat-a1', kind: 'actual', exam: 'fat', title: 'FAT · Slot A1 · November 2025', short: 'A1 paper', sub: 'Actual paper · Fall 2025–26 · two parts, all modules',
      meta: [['Slot', 'A1 (all slots)'], ['Date', 'November 2025'], ['Duration', '2 × 90 minutes, one sheet per part'], ['Max marks', '100 (2 × 50)'], ['Part 1', 'Modules 1 and 2, 9:30 am to 11:00 am'], ['Part 2', 'Modules 3 and 4, 11:05 am to 12:35 pm'], ['Programme', 'All first-year B.Tech. students']],
      instructions: `<b>Both parts:</b> answer all questions (5 × 10 = 50 marks per part). BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create). Do not write anything on the question paper.<br><b>Part 2 only:</b> a non-programmable calculator is permitted; reference tables are not. All dimensions of figures are in millimetres. Lettering, numbering and dimensioning must be done as per BIS. Orthographic projections must be drawn in landscape orientation within the answer booklet. Plan the layout before drawing. Use appropriate pencils for object line, dimension line, extension line, arrowheads and numbers as per the standard.<br><b>Course Outcomes:</b> CO1: Analyse the electrical circuits, electrical motors and the role of power electronics in industrial applications. CO2: Acquire foundational knowledge of electronic devices and communication systems. CO3: Apply BIS standards to create basic 2D and 3D representations of engineering components. CO4: Explain the fundamental principles and applications of manufacturing processes, energy conversion systems, and mechanical automation technologies.`,
      questions: [
        {
          n: '1', marks: 10, co: '1', bl: '3',
          notes: ['m1-mesh.2', 'm1-thevenin.1'],
          prompt: `<p><b>Part 1 · Q1 (Modules 1 and 2).</b> Either (a) or (b).</p>`,
          parts: [
            { text: '(a) Apply mesh analysis to find all the loop currents and branch currents. V<sub>1</sub> = 12 V; V<sub>2</sub> = 6 V; R<sub>1</sub> = 3 Ω; R<sub>2</sub> = 8 Ω; R<sub>3</sub> = 6 Ω; R<sub>4</sub> = 4 Ω. <em>OR</em>' },
            { text: '(b) Find the Thevenin equivalent circuit of the circuit shown in the figure, to the left of the terminals a-b. Then find the current through R<sub>L</sub> = 6 Ω.' }
          ],
          passage: `<p><b>Figure for (a)</b> (described, not the scan): a three-mesh network with clockwise loop currents i<sub>1</sub> (left), i<sub>2</sub> (right) and i<sub>3</sub> (top). V<sub>1</sub> is in the left branch, V<sub>2</sub> in the right branch and R<sub>2</sub> is the shared middle vertical branch. R<sub>1</sub> and R<sub>3</sub> sit in the upper left and upper right sides and R<sub>4</sub> in the top branch, where mesh 3 closes over the top.</p><p><b>Figure for (b)</b> (described, not the scan): a 32 V source on the left, then a 4 Ω series resistor in the top rail, a 12 Ω resistor from the rail to the bottom, a 2 A current source (arrow up) in parallel with it, and a 1 Ω series resistor leading to terminal a. The load R<sub>L</sub> (variable resistor symbol) connects a to b on the bottom rail.</p>`,
          topics: ['m1-mesh', 'm1-thevenin']
        },
        {
          n: '2', marks: 10, co: '1', bl: '3',
          notes: ['m1-rl-series.1'],
          prompt: `<p><b>Part 1 · Q2.</b> An AC series RL circuit is made up of a resistor that has a resistance value of 20 Ω and an inductor that has a value of 20 mH. If the value of input voltage is 230 V, supply frequency is 50 Hz. Determine</p>`,
          parts: [
            { text: 'The value of the total impedance and current flow.' },
            { text: 'The value of the voltage drop across the resistor.' },
            { text: 'The value of the voltage drop across the inductor.' },
            { text: 'The phase angle (φ) between the supply voltage and current.' },
            { text: 'Draw the voltage phase diagram.' }
          ],
          topics: ['m1-rl-series']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          notes: ['m1-dc-motor.0', 'm1-dc-motor.3'],
          prompt: `<p><b>Part 1 · Q3.</b> With the help of a rough sketch, explain the working principle of a DC motor. Name the main parts, and their functions.</p>`,
          topics: ['m1-dc-motor', 'm1-dc-machine']
        },
        {
          n: '4', marks: 10, co: '2', bl: '2',
          notes: ['m2-diode-vi.2'],
          prompt: `<p><b>Part 1 · Q4.</b> With neat diagrams and waveforms describe the operation of a single phase half-wave and full-wave diode rectifiers with resistive load.</p>`,
          topics: ['m2-diode-vi']
        },
        {
          n: '5', marks: 10, co: '2', bl: '2',
          notes: ['m2-sat-transponder.0', 'm2-sat-basics.2'],
          prompt: `<p><b>Part 1 · Q5.</b> Draw and label the block diagrams for satellite communication system and list the advantages and disadvantages, applications of satellite communication system.</p>`,
          topics: ['m2-sat-basics']
        },
        {
          n: '6', marks: 10, co: '3', bl: '3',
          notes: ['m3-six-views.3'],
          prompt: `<p><b>Part 2 · Q1 (Modules 3 and 4).</b> Pictorial view of an object is shown in Fig. 1. Using first angle projection, draw its (a) front view, (b) top view and (c) right-hand side view.</p>`,
          passage: `<p><b>Fig. 1</b> (described, not the scan): a pictorial view with direction X marking the front view. A cylindrical lump of diameter 60 and height 50 has a central through hole of diameter 30 in its top. Beside it, a lug with a sloping top face (30 high at the free end) carries a hole of diameter 20 in its sloping front face, with the hole centre 20 up and 25 from the cylinder side. Other printed dimensions: 30 (width), 50 (overall length), 20 (end width).</p>`,
          topics: ['m3-six-views', 'm3-ortho-basics']
        },
        {
          n: '7', marks: 10, co: '3', bl: '3',
          notes: ['m3-isometric.4'],
          prompt: `<p><b>Part 2 · Q2.</b> Draw the isometric view of a pentagonal pyramid of base side 30 mm and axis 50 mm. The pyramid is kept on its base on the Horizontal Plane.</p>`,
          topics: ['m3-solids-hp']
        },
        {
          n: '8', marks: 10, co: '4', bl: '2',
          notes: ['m4-machining-basics.4', 'm4-turning-milling.0'],
          prompt: `<p><b>Part 2 · Q3.</b> Define machining and briefly explain any two conventional machining processes commonly used in manufacturing industries.</p>`,
          topics: ['m4-machining-basics', 'm4-turning-milling']
        },
        {
          n: '9', marks: 10, co: '4', bl: '3',
          notes: ['m4-links-dof.4', 'm4-four-bar.3'],
          prompt: `<p><b>Part 2 · Q4.</b> Kinematic links and degrees of freedom.</p>`,
          parts: [
            { text: 'Describe the various types of kinematic links with suitable examples.', marks: 5 },
            { text: 'Calculate the number of degrees of freedom of the linkages shown in Fig. 2 a) and b).', marks: 5 }
          ],
          passage: `<p><b>Fig. 2</b> (described, not the scan): two schematic linkages with a fixed link 1 between pivots O<sub>2</sub> and O<sub>4</sub>. (a) A four-bar chain: link 2 from O<sub>2</sub> to A, link 3 from A to B and link 4 from B to O<sub>4</sub>. (b) A five-link chain: link 2 from O<sub>2</sub> to A, link 3 from A to B, link 4 from B to C and link 5 from C to O<sub>4</sub>, with fixed link 1.</p>`,
          topics: ['m4-links-dof', 'm4-kinematic-pairs', 'm4-mechanisms']
        },
        {
          n: '10', marks: 10, co: '4', bl: '2',
          notes: ['m4-four-stroke.0', 'm4-four-stroke.1', 'm4-refrigeration.4'],
          prompt: `<p><b>Part 2 · Q5.</b> Either (a) or (b).</p>`,
          parts: [
            { text: '(a) Explain the working principle of a 4-Stroke Spark Ignition engine. Draw the necessary schematic diagrams along with the Pressure-Volume diagram. <em>OR</em>' },
            { text: '(b) Explain the working principle of a Vapour Compression Refrigeration System with the help of a neat schematic diagram.' }
          ],
          topics: ['m4-four-stroke']
        }
      ]
    },

    {
      id: 'fat-e1', kind: 'actual', exam: 'fat', title: 'FAT · Slot E1+TE1 · Nov/Dec 2025', short: 'E1+TE1 paper', sub: 'Actual paper · Fall 2025–26 · Chennai · two parts, all modules',
      meta: [['Slot', 'E1+TE1'], ['Exam', 'Final Assessment Test, Nov/Dec 2025'], ['Duration', '1 hour 30 minutes per part'], ['Max marks', '100 (2 × 50)'], ['Campus', 'Chennai'], ['Part 1', 'Electrical and electronics (CO1, CO2)'], ['Part 2', 'Graphics and mechanical (CO3, CO4)'], ['Programme', 'B.Tech.']],
      instructions: `<b>Both parts:</b> answer all questions (5 × 10 marks). Write only your registration number in the designated box on the question paper.<br><b>Course Outcomes:</b> CO1: Analyse the electrical circuits, electrical motors and the role of power electronics in industrial applications. CO2: Acquire foundational knowledge of electronic devices and communication systems. CO3: Apply BIS standards to create basic 2D and 3D representations of engineering components. CO4: Explain the fundamental principles and applications of manufacturing processes, energy conversion systems, and mechanical automation technologies. CO5: Analyse real-world examples where bio-inspired solutions have led to breakthroughs in engineering.<br>BL – Bloom's Taxonomy Levels: K1 Remembering, K2 Understanding, K3 Applying, K4 Analysing, K5 Evaluating, K6 Creating.`,
      questions: [
        {
          n: '1', marks: 10, co: '1', bl: '3',
          notes: ['m1-mesh.2'],
          prompt: `<p><b>Part 1 · Q1.</b> Determine the current supplied by each battery using loop analysis for the network shown in Fig. 1.</p>`,
          passage: `<p><b>Fig. 1</b> (described, not the scan): three clockwise loop currents I<sub>1</sub>, I<sub>2</sub>, I<sub>3</sub> side by side. Left branch: battery B<sub>1</sub> = 20 V. Top of loop 1: 5 Ω. Next vertical branch: 3 Ω in series with battery B<sub>2</sub> = 5 V (shared by loops 1 and 2). Top of loop 2: 4 Ω in series with battery B<sub>4</sub> = 5 V. Next vertical branch: 2 Ω in series with battery B<sub>3</sub> = 5 V (shared by loops 2 and 3). Top of loop 3: 8 Ω. Right branch: battery B<sub>5</sub> = 30 V. Polarity marks are small in the scan and are not reproduced here.</p>`,
          topics: ['m1-mesh']
        },
        {
          n: '2', marks: 10, co: '1', bl: '3',
          notes: ['m1-superposition.1'],
          prompt: `<p><b>Part 1 · Q2.</b> Use superposition theorem to find current I in the circuit shown in Fig. 2. All resistances are given in ohms.</p>`,
          passage: `<p><b>Fig. 2</b> (described, not the scan): a 120 A current source (arrow down) on the left, a 50 Ω resistor, a 150 Ω resistor and a 40 A current source (arrow down) on the right, all between a top rail and a bottom rail. A 10 V voltage source (– on the left, + on the right) sits in the top rail between the 50 Ω and 150 Ω branches. The current I is marked along the bottom rail between those two branches, pointing left.</p>`,
          topics: ['m1-superposition']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          notes: ['m1-rc-rlc.4'],
          prompt: `<p><b>Part 1 · Q3.</b></p>`,
          parts: [
            { text: 'a. An alternating voltage of (176+j132) V is applied to a circuit and the current in the circuit is given by (6.6+j8.8) A. Determine: i. values of elements present in the circuit; ii. power factor of the circuit; iii. power consumed.', marks: 5 },
            { text: 'b. A 100 V, 80 W lamp is to be operated on 230 Volts, 50 Hz AC supply. Calculate the inductance of the choke required to be connected in series with the lamp for its operation. The lamp can be taken as equivalent to non inductive resistance.', marks: 5 }
          ],
          topics: ['m1-rl-series', 'm1-rc-rlc']
        },
        {
          n: '4', marks: 10, co: '1', bl: '1',
          notes: ['m1-transformer.0', 'm1-transformer.1'],
          prompt: `<p><b>Part 1 · Q4.</b> Describe the construction and operating principle of a single phase transformer with neat sketch and mention its applications.</p>`,
          topics: ['m1-transformer']
        },
        {
          n: '5', marks: 10, co: '2', bl: '1',
          notes: ['m2-bjt-config.3'],
          prompt: `<p><b>Part 1 · Q5.</b> Explain about BJT with common base configuration with neat sketch and its V-I characteristics.</p>`,
          topics: ['m2-bjt-config']
        },
        {
          n: '6', marks: 10, co: '3', bl: '1',
          notes: ['m3-lines.0', 'm3-ortho-basics.2', 'm3-isometric.2', 'm3-perspective.1'],
          prompt: `<p><b>Part 2 · Q1.</b></p>`,
          parts: [
            { text: 'a) List any four major types of lines used in engineering drawings and state their uses.', marks: 4 },
            { text: 'b) Compare the First Angle and Third Angle methods of orthographic projection.', marks: 4 },
            { text: 'c) State whether the following statements are True or False: i. In an isometric projection, circles appear as ellipses. ii. In a perspective projection, the size of the object remains the same regardless of distance.', marks: 2 }
          ],
          topics: ['m3-lines', 'm3-ortho-basics']
        },
        {
          n: '7', marks: 10, co: '3', bl: '3',
          notes: ['m3-solids-vp.2'],
          prompt: `<p><b>Part 2 · Q2.</b> A hexagonal prism has one of its rectangular faces parallel to the H.P. Its axis is perpendicular to the V.P. and 3.5 cm above the ground. Draw its projections when the nearer end is 2 cm in front of the V.P. Side of base 2.5 cm long; axis 5 cm long.</p>`,
          topics: ['m3-solids-vp']
        },
        {
          n: '8', marks: 10, co: '4', bl: '2',
          notes: ['m4-arc-welding.4'],
          prompt: `<p><b>Part 2 · Q3.</b> Describe the working principle of any one metal joining process with the aid of a neat diagram.</p>`,
          topics: ['m4-welding-basics', 'm4-welding-classes']
        },
        {
          n: '9', marks: 10, co: '4', bl: '2',
          notes: ['m4-refrigeration.4'],
          prompt: `<p><b>Part 2 · Q4.</b> Discuss the construction and working of a basic vapor-compression refrigeration unit.</p>`,
          topics: []
        },
        {
          n: '10', marks: 10, co: '4', bl: '2',
          notes: ['m4-robotics.0', 'm4-robotics.1', 'm4-robotics.2'],
          prompt: `<p><b>Part 2 · Q5.</b></p>`,
          parts: [
            { text: 'a) What is a robot?', marks: 2 },
            { text: 'b) How do robots differ from automation?', marks: 3 },
            { text: 'c) Explain any one configuration of a robotic manipulator with a neat sketch.', marks: 5 }
          ],
          topics: []
        }
      ]
    }
  ]
});
