CHUNK({
  chunk: '4i',
  module: 'm4',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm4-four-bar',
      title: 'Four-bar linkage and its inversions',
      short: 'Four-bar linkage',
      blurb: 'The four links of a four-bar chain, Grashof\'s law, its three inversions, and the degrees of freedom of four-bar and five-bar linkages.',
      source: 'Standard engineering knowledge (course material not available)',
      tabs: [
        {
          title: 'The linkage',
          html: `<p class="lead">A <b>four-bar linkage</b> is the simplest closed-loop mechanism: <b>four rigid links joined end to end by four revolute (turning) pairs</b>, with one link fixed as the frame.</p>
<div class="note heads-up"><p>The course material for this topic was not available, so these notes are written from standard textbook content.</p></div>
<figure data-fig="m4-four-bar"></figure>
<ul><li><b>Frame (fixed link, p):</b> the stationary link that holds the two ground pivots A and D.</li>
<li><b>Crank (s):</b> the input link pivoted on the frame that can make a <b>full revolution</b>.</li>
<li><b>Coupler (l):</b> the floating link BC that joins crank and rocker; it does not touch the frame, and points on it trace useful curves.</li>
<li><b>Rocker (q):</b> the output link pivoted on the frame that only <b>oscillates</b> through an angle.</li></ul>
<div class="note example"><p>Windscreen wipers, bicycle pedalling with the leg, a sewing machine treadle and the hinge of a car bonnet all use four-bar linkages.</p></div>`
        },
        {
          title: 'Grashof\'s law',
          html: `<p class="lead"><b>Grashof's law</b> says that for a four-bar linkage, at least one link can rotate completely relative to the others if the sum of the shortest and longest links is not more than the sum of the other two.</p>
<div class="eq">s + l ≤ p + q</div>
<ul><li>Here s is the shortest link, l the longest, and p, q the remaining two.</li>
<li>If the condition holds, it is a <b>Grashof (class I) chain</b> and gives the crank–rocker, double-crank and double-rocker inversions depending on which link is fixed.</li>
<li>If s + l &gt; p + q, it is a <b>non-Grashof (class II) chain</b>: no link can make a full turn, and every inversion is a triple-rocker.</li></ul>
<div class="worked"><div class="given">Links of 2, 7, 6 and 5 cm.</div><div class="solve">s + l = 2 + 7 = 9; p + q = 6 + 5 = 11; 9 ≤ 11.</div><div class="result">Grashof chain: the 2 cm link can rotate fully.</div></div>`
        },
        {
          title: 'Inversions',
          html: `<p class="lead">An <b>inversion</b> is obtained by fixing a different link of the same kinematic chain. The relative motion between links does not change, but the absolute motions do. For a Grashof four-bar chain there are three distinct inversions.</p>
<table class="tbl"><thead><tr><th>Link fixed</th><th>Mechanism</th><th>Motion and example</th></tr></thead><tbody>
<tr><td>A link next to the shortest one</td><td>Crank–rocker</td><td>The shortest link turns fully and the opposite link rocks; beam engine, windscreen wiper drive</td></tr>
<tr><td>The shortest link</td><td>Double crank (drag link)</td><td>Both links pivoted on the frame turn fully; coupling rod of a locomotive (parallel crank), drag-link quick return</td></tr>
<tr><td>The link opposite the shortest</td><td>Double rocker</td><td>Both pivoted links only oscillate; the coupler can turn; Ackermann steering, Watt's straight-line mechanism</td></tr>
</tbody></table>
<div class="note exam"><p><b>Explain the inversions of a four-bar chain:</b> draw the linkage with frame, crank, coupler and rocker labelled, state Grashof's condition, then name each inversion with the link that is fixed and one example.</p></div>`
        },
        {
          title: 'DoF of linkages',
          html: `<p class="lead">The degrees of freedom (mobility) of a planar linkage come from the <b>Grubler criterion</b>, where N is the number of links (including the frame) and P<sub>1</sub> the number of one-DoF pairs.</p>
<div class="eq">F = 3(N − 1) − 2P<sub>1</sub> − P<sub>2</sub></div>
<div class="worked"><div class="given">Four-bar linkage: N = 4 links, P<sub>1</sub> = 4 revolute pairs, P<sub>2</sub> = 0.</div><div class="solve">F = 3(4 − 1) − 2(4) = 9 − 8</div><div class="result">F = 1: one input (turning the crank) fixes the position of every link.</div></div>
<div class="worked"><div class="given">Five-bar linkage: N = 5 links, P<sub>1</sub> = 5 revolute pairs.</div><div class="solve">F = 3(5 − 1) − 2(5) = 12 − 10</div><div class="result">F = 2: two independent inputs are needed to make its motion definite.</div></div>
<div class="note why"><p>F = 1 means a constrained mechanism; F = 0 means a rigid structure (a triangle of three links gives 3(2) − 2(3) = 0); F &lt; 0 is a statically indeterminate structure.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Name the four links of a four-bar linkage.', back: 'Frame (fixed), crank, coupler and rocker (follower).' },
        { front: 'State Grashof\'s law.', back: 'If s + l ≤ p + q (shortest plus longest not more than the other two), at least one link can rotate fully.' },
        { front: 'What is an inversion of a mechanism?', back: 'The mechanism obtained by fixing a different link of the same kinematic chain.' },
        { front: 'Three inversions of a Grashof four-bar chain?', back: 'Crank–rocker, double crank (drag link) and double rocker.' },
        { front: 'Which link is fixed to get a double crank?', back: 'The shortest link.' },
        { front: 'DoF of a four-bar linkage?', back: 'F = 3(4 − 1) − 2(4) = 1.' },
        { front: 'DoF of a five-bar linkage?', back: 'F = 3(5 − 1) − 2(5) = 2.' },
        { front: 'Give two uses of a four-bar linkage.', back: 'Windscreen wiper drive, beam engine, Ackermann steering, locomotive coupling rod.' }
      ],
      oneLiners: [
        'Four-bar: four links, four revolute pairs, one fixed.',
        'Grashof: s + l ≤ p + q → one link turns fully.',
        'Fix link next to shortest → crank–rocker; fix shortest → double crank; fix opposite → double rocker.',
        'DoF: four-bar 1, five-bar 2, three-bar triangle 0.'
      ],
      formulas: [
        { name: 'Grashof condition', html: `s + l ≤ p + q`, note: 's shortest, l longest link' },
        { name: 'Mobility (Grubler)', html: `F = 3(N − 1) − 2P<sub>1</sub> − P<sub>2</sub>`, note: '' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-hexapod',
      title: 'Hexapod (Stewart platform)',
      short: 'Hexapod',
      blurb: 'A parallel mechanism with six extensible legs that moves a platform in all six degrees of freedom.',
      source: 'Standard engineering knowledge (course material not available)',
      tabs: [
        {
          title: 'Construction',
          html: `<p class="lead">A <b>hexapod</b> or <b>Stewart platform</b> is a <b>parallel mechanism</b> in which a moving top platform is joined to a fixed base by <b>six extensible legs</b> (linear actuators).</p>
<div class="note heads-up"><p>The course material for this topic was not available, so these notes are written from standard textbook content.</p></div>
<figure data-fig="m4-hexapod"></figure>
<ul><li>Each leg is a linear actuator (hydraulic, pneumatic or an electric ball-screw) whose length can be changed.</li>
<li>Each leg is joined to the base and to the platform by <b>universal or spherical joints</b>, so the leg only pushes or pulls along its own axis.</li>
<li>By changing the six leg lengths together, the platform can be moved along <b>x, y and z</b> and tilted in <b>roll, pitch and yaw</b>: all <b>six degrees of freedom</b>.</li></ul>`
        },
        {
          title: 'Why and where',
          html: `<div class="vs"><div class="side"><h4>Parallel (hexapod)</h4><p>The six legs share the load, so it is very <b>stiff, strong and accurate</b> for its weight. Its workspace is small.</p></div><div class="side"><h4>Serial (robot arm)</h4><p>Links are joined one after another, so it has a <b>large workspace</b>, but errors and flexibility add up from joint to joint.</p></div></div>
<p><b>Applications:</b> flight and driving simulators (the cockpit sits on a hexapod), precise positioning of telescope mirrors and optics, machine tools that hold a cutting spindle, surgical robots, and earthquake and vibration test tables.</p>`
        }
      ],
      flashcards: [
        { front: 'What is a hexapod (Stewart platform)?', back: 'A parallel mechanism: a platform joined to a fixed base by six extensible legs.' },
        { front: 'How many DoF does a Stewart platform give?', back: 'Six: x, y, z translation and roll, pitch, yaw rotation.' },
        { front: 'How is the platform moved?', back: 'By changing the lengths of the six linear-actuator legs together.' },
        { front: 'One advantage and one drawback of a hexapod?', back: 'High stiffness and accuracy; small workspace.' },
        { front: 'Name two applications of a hexapod.', back: 'Flight simulators and precise positioning of optics; also machine tools and surgical robots.' },
        { front: 'What joints connect the legs?', back: 'Universal or spherical joints at both ends.' }
      ],
      oneLiners: [
        'Hexapod = parallel mechanism, 6 extensible legs, 6 DoF.',
        'Stiff and accurate, but small workspace.',
        'Used in flight simulators and precision positioning.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-mech-components',
      title: 'Mechanical components and motion control',
      short: 'Components, control',
      blurb: 'Gears, belts, chains, cams, bearings, couplings and screws that transmit motion, and how open-loop and closed-loop control move them.',
      source: 'Standard engineering knowledge (course material not available)',
      tabs: [
        {
          title: 'Components',
          html: `<p class="lead"><b>Mechanical components</b> are the standard parts that transmit and change motion and force in a machine.</p>
<div class="note heads-up"><p>The course material for this topic was not available, so these notes are written from standard textbook content.</p></div>
<table class="tbl"><thead><tr><th>Component</th><th>What it does</th><th>Example</th></tr></thead><tbody>
<tr><td>Gears (spur, helical, bevel, worm)</td><td>Transmit rotation between shafts with an exact speed ratio, without slip</td><td>Gearbox of a car; worm and wheel in a lift</td></tr>
<tr><td>Belt and pulley</td><td>Transmit rotation between shafts far apart; can slip, which protects against overload</td><td>Washing machine drive</td></tr>
<tr><td>Chain and sprocket</td><td>Positive drive over a distance, no slip</td><td>Bicycle, motorcycle</td></tr>
<tr><td>Cam and follower</td><td>Turn rotary motion into a set reciprocating or oscillating motion</td><td>Valve opening in an IC engine</td></tr>
<tr><td>Lead screw / ball screw</td><td>Turn rotation into accurate straight-line motion</td><td>CNC machine table, lathe carriage</td></tr>
<tr><td>Bearings</td><td>Support a rotating shaft and reduce friction</td><td>Ball bearing in a motor</td></tr>
<tr><td>Couplings and clutches</td><td>Join two shafts; a clutch can connect and disconnect them while running</td><td>Motor–pump coupling; car clutch</td></tr>
<tr><td>Springs and brakes</td><td>Store energy or absorb shock; stop motion by friction</td><td>Suspension springs; disc brakes</td></tr>
</tbody></table>`
        },
        {
          title: 'Motion control',
          html: `<p class="lead"><b>Motion control</b> is the controlled movement of a machine part to a required position, speed or force, using a controller, an actuator and (usually) a sensor.</p>
<figure data-fig="m4-motion-control"></figure>
<div class="vs"><div class="side"><h4>Open loop</h4><p>The controller sends a command to the actuator but <b>does not check the result</b>. Simple and cheap, but any load change or slip goes uncorrected. A stepper motor stepping a set number of pulses is an example.</p></div><div class="side"><h4>Closed loop</h4><p>A <b>sensor</b> (encoder, tachometer) measures the actual output and feeds it back; the controller acts on the <b>error</b> between the set value and the actual value. Accurate and self-correcting, but costlier. A servo motor in a CNC axis is an example.</p></div></div>
<div class="note example"><p>A toaster timer is open loop (it browns for a set time whatever the bread). A room air conditioner with a thermostat is closed loop (it stops cooling once the room reaches the set temperature).</p></div>`
        }
      ],
      flashcards: [
        { front: 'What does a cam and follower do?', back: 'Converts rotary motion into a set reciprocating or oscillating motion.' },
        { front: 'Gear drive vs belt drive?', back: 'Gears give an exact ratio without slip; belts can slip but suit long centre distances.' },
        { front: 'Purpose of a ball screw?', back: 'Converts rotation into accurate straight-line motion, as on a CNC table.' },
        { front: 'What is open-loop control?', back: 'Control with no feedback: the output is not measured or corrected.' },
        { front: 'What is closed-loop control?', back: 'Control where a sensor feeds back the output and the controller corrects the error.' },
        { front: 'Give an example of a closed-loop motion system.', back: 'A servo motor with an encoder driving a CNC axis.' }
      ],
      oneLiners: [
        'Gears: exact ratio; belts: can slip; chains: positive drive.',
        'Cam: rotary → reciprocating; screw: rotary → linear.',
        'Open loop: no feedback. Closed loop: sensor feedback corrects error.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-robotics',
      title: 'Introduction to robotics',
      short: 'Robotics',
      blurb: 'What a robot is, how robotics differs from automation, the parts of a robot and the main arm configurations.',
      source: 'Standard engineering knowledge (course material not available)',
      tabs: [
        {
          title: 'Robot',
          html: `<p class="lead">A <b>robot</b> is a <b>reprogrammable, multifunctional manipulator</b> designed to move materials, parts, tools or special devices through <b>variable programmed motions</b> to perform a variety of tasks (Robot Institute of America).</p>
<div class="note heads-up"><p>The course material for this topic was not available, so these notes are written from standard textbook content.</p></div>
<ul><li><b>Manipulator (arm):</b> the chain of links and joints that moves the tool.</li>
<li><b>End effector:</b> the gripper or tool at the end of the arm, such as a welding torch, spray gun or suction cup.</li>
<li><b>Actuators:</b> electric motors, or hydraulic and pneumatic cylinders, that drive the joints.</li>
<li><b>Sensors:</b> encoders for joint position, and vision, force and proximity sensors for the surroundings.</li>
<li><b>Controller:</b> the computer that stores the program and directs the motion.</li></ul>`
        },
        {
          title: 'Robot vs automation',
          html: `<table class="tbl"><thead><tr><th>Point</th><th>Fixed automation</th><th>Robot (flexible automation)</th></tr></thead><tbody>
<tr><td>Task</td><td>Built to do one fixed sequence of operations</td><td>Can be reprogrammed for different tasks</td></tr>
<tr><td>Change of product</td><td>Needs new machinery or major rebuilding</td><td>Needs only a new program and perhaps a new end effector</td></tr>
<tr><td>Best for</td><td>Very high volumes of one product</td><td>Medium volumes and product variety</td></tr>
<tr><td>Example</td><td>A bottling line or transfer machine</td><td>A welding robot that welds different car models</td></tr>
</tbody></table>
<div class="note why"><p>Every robot is a form of automation, but not all automation is robotic: automation is the wider idea of making a process run without human effort, and a robot is one reprogrammable machine used to achieve it.</p></div>`
        },
        {
          title: 'Configurations',
          html: `<p class="lead">Robot arms are classified by the type of their first three joints: <b>P</b> = prismatic (sliding) and <b>R</b> = revolute (turning). The joints decide the shape of the workspace.</p>
<figure data-fig="m4-robot-configs"></figure>
<table class="tbl"><thead><tr><th>Configuration</th><th>Joints</th><th>Workspace and use</th></tr></thead><tbody>
<tr><td>Cartesian (gantry)</td><td>P P P</td><td>Rectangular box; simple and accurate; pick and place, 3D printers, CNC</td></tr>
<tr><td>Cylindrical</td><td>R P P</td><td>Cylinder; base rotates, arm moves up and in or out; machine loading</td></tr>
<tr><td>Spherical (polar)</td><td>R R P</td><td>Part of a sphere; base rotates, arm tilts and extends; spot welding</td></tr>
<tr><td>SCARA</td><td>R R P</td><td>Arms turn in a horizontal plane, vertical slide at the end; fast assembly of small parts</td></tr>
<tr><td>Articulated (jointed arm)</td><td>R R R</td><td>Near sphere, most flexible, like a human arm; welding, painting</td></tr>
</tbody></table>`
        },
        {
          title: 'Uses',
          html: `<p class="lead">Robots are used where a task is <b>dangerous, dirty, dull or needs high precision</b>.</p>
<ul><li><b>Manufacturing:</b> spot and arc welding, spray painting, assembly, machine loading and palletising.</li>
<li><b>Medical:</b> surgical robots that make small, steady cuts.</li>
<li><b>Hazardous work:</b> bomb disposal, nuclear plant inspection, space and underwater exploration.</li>
<li><b>Service:</b> warehouse picking, cleaning robots and delivery robots.</li></ul>`
        }
      ],
      flashcards: [
        { front: 'Define a robot.', back: 'A reprogrammable, multifunctional manipulator that moves materials, parts or tools through variable programmed motions.' },
        { front: 'What is an end effector?', back: 'The gripper or tool at the end of the robot arm.' },
        { front: 'How does a robot differ from fixed automation?', back: 'A robot can be reprogrammed for new tasks; fixed automation does one fixed sequence.' },
        { front: 'Joints of a Cartesian robot?', back: 'P P P: three sliding joints.' },
        { front: 'Joints of a cylindrical robot?', back: 'R P P.' },
        { front: 'Joints of a spherical robot?', back: 'R R P.' },
        { front: 'What does SCARA suit best?', back: 'Fast assembly of small parts in a horizontal plane.' },
        { front: 'Which configuration is most like a human arm?', back: 'Articulated (R R R).' }
      ],
      oneLiners: [
        'Robot = reprogrammable multifunctional manipulator.',
        'Parts: manipulator, end effector, actuators, sensors, controller.',
        'Cartesian PPP, cylindrical RPP, spherical RRP, SCARA RRP, articulated RRR.',
        'Robots = flexible automation; fixed automation does one job.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-actuators',
      title: 'Pneumatic and hydraulic actuators',
      short: 'Actuators',
      blurb: 'How fluid-power actuators work, single- and double-acting cylinders, Pascal\'s law and a comparison of pneumatic and hydraulic systems.',
      source: 'Standard engineering knowledge (course material not available)',
      tabs: [
        {
          title: 'Actuators',
          html: `<p class="lead">An <b>actuator</b> is a device that converts energy (electrical, hydraulic or pneumatic) into <b>mechanical motion</b>. <b>Pneumatic</b> actuators use compressed air and <b>hydraulic</b> actuators use pressurised oil.</p>
<div class="note heads-up"><p>The course material for this topic was not available, so these notes are written from standard textbook content.</p></div>
<figure data-fig="m4-actuators"></figure>
<ul><li><b>Linear actuator (cylinder):</b> fluid pressure on a piston pushes the rod out in a straight line.</li>
<li><b>Single-acting cylinder:</b> fluid pushes the piston one way only; a spring or the load returns it.</li>
<li><b>Double-acting cylinder:</b> fluid is admitted to either side through two ports, so it pushes in both directions.</li>
<li><b>Rotary actuator (motor):</b> fluid turns a vane or gear to give continuous rotation.</li>
<li>A <b>direction control valve</b> routes the fluid to the right port, and the pump (hydraulic) or compressor (pneumatic) supplies the pressure.</li></ul>`
        },
        {
          title: 'Pascal\'s law',
          html: `<p class="lead"><b>Pascal's law:</b> pressure applied to a confined fluid is transmitted <b>equally in all directions</b>. Hydraulic systems use it to multiply force.</p>
<div class="eq">p = F<sub>1</sub>/A<sub>1</sub> = F<sub>2</sub>/A<sub>2</sub>   so   F<sub>2</sub> = F<sub>1</sub> × A<sub>2</sub>/A<sub>1</sub></div>
<div class="worked"><div class="given">A force of 100 N acts on a small piston of 10 cm². The large piston is 200 cm².</div><div class="solve">p = 100/(10 × 10⁻⁴) = 100 kPa; F<sub>2</sub> = 100 × 200/10</div><div class="result">F<sub>2</sub> = 2000 N (20 times the input force)</div></div>
<div class="note trap"><p>The force is multiplied but work is not: the large piston moves only 1/20 of the distance the small piston moves.</p></div>`
        },
        {
          title: 'Pneumatic vs hydraulic',
          html: `<table class="tbl"><thead><tr><th>Point</th><th>Pneumatic</th><th>Hydraulic</th></tr></thead><tbody>
<tr><td>Medium</td><td>Compressed air, about 6–8 bar</td><td>Oil, about 100–300 bar</td></tr>
<tr><td>Force</td><td>Low to medium, because the pressure is low</td><td>Very high for a small cylinder</td></tr>
<tr><td>Speed</td><td>Fast</td><td>Slower but smooth</td></tr>
<tr><td>Accuracy</td><td>Air is compressible, so positioning is less precise</td><td>Oil is nearly incompressible, so control is precise and holds load firmly</td></tr>
<tr><td>Cleanliness and cost</td><td>Clean, leaks are harmless, cheap</td><td>Oil leaks are messy and a fire risk; costlier</td></tr>
<tr><td>Uses</td><td>Pick-and-place, grippers, packaging, door openers</td><td>Excavators, presses, aircraft controls, car brakes, jacks</td></tr>
</tbody></table>`
        }
      ],
      flashcards: [
        { front: 'What is an actuator?', back: 'A device that converts electrical, hydraulic or pneumatic energy into mechanical motion.' },
        { front: 'Single- vs double-acting cylinder?', back: 'Single-acting: fluid pushes one way, a spring returns it. Double-acting: fluid pushes both ways through two ports.' },
        { front: 'State Pascal\'s law.', back: 'Pressure applied to a confined fluid is transmitted equally in all directions.' },
        { front: 'Hydraulic press: F1 = 100 N, A1 = 10 cm², A2 = 200 cm². Find F2.', back: 'F2 = 100 × 200/10 = 2000 N.' },
        { front: 'Why is hydraulic positioning more accurate than pneumatic?', back: 'Oil is nearly incompressible; air compresses.' },
        { front: 'Give one use each of pneumatic and hydraulic actuators.', back: 'Pneumatic: grippers, packaging. Hydraulic: excavators, presses, brakes.' }
      ],
      oneLiners: [
        'Pneumatic = air, low force, fast, clean.',
        'Hydraulic = oil, high force, precise.',
        'Pascal: F2 = F1 × A2/A1.',
        'Double-acting cylinder pushes both ways.'
      ],
      formulas: [
        { name: 'Pascal\'s law', html: `F<sub>2</sub> = F<sub>1</sub> × A<sub>2</sub>/A<sub>1</sub>`, note: 'pressure p = F/A is the same throughout' }
      ]
    }
  ],
  figures: [
    { id: 'm4-four-bar', src: 'own/README.txt', crop: null, caption: 'Four-bar linkage: frame, crank, coupler and rocker joined by four turning pairs.', alt: 'Four links A, B, C, D with the frame AD fixed, crank AB turning fully and rocker CD oscillating.' },
    { id: 'm4-hexapod', src: 'own/README.txt', crop: null, caption: 'Hexapod: six extensible legs join the moving platform to the fixed base.', alt: 'Hexagonal moving platform above a hexagonal base, joined by six crossing legs.' },
    { id: 'm4-motion-control', src: 'own/README.txt', crop: null, caption: 'Open-loop control has no feedback; closed-loop control feeds the sensed output back to the controller.', alt: 'Two block diagrams: controller, actuator and load; the second has a sensor feeding back to a summing point.' },
    { id: 'm4-robot-configs', src: 'own/README.txt', crop: null, caption: 'Robot arm configurations by joint type: Cartesian, cylindrical, spherical, SCARA and articulated.', alt: 'Five small sketches of robot arms showing sliding and turning joints.' },
    { id: 'm4-actuators', src: 'own/README.txt', crop: null, caption: 'Double-acting cylinder, and Pascal\'s law multiplying force between two pistons.', alt: 'A cylinder with piston, rod and two ports; below, a small and a large piston joined by oil.' }
  ]
});
