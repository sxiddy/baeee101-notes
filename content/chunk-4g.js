CHUNK({
  chunk: '4g',
  module: 'm4',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm4-mechanisms',
      title: 'Kinematics, mechanisms and machines',
      short: 'Mechanisms, machines',
      blurb: 'What kinematics studies, how a mechanism differs from a machine, and the three kinds of constrained motion.',
      source: 'Lecture 19, pages 1–10',
      tabs: [
        {
          title: 'Kinematics',
          html: `<p class="lead"><b>Kinematics</b> deals only with the <b>geometric aspects of motion</b>, with no thought of forces.</p>
<ul><li>For kinematics, a machine can be treated as a <b>mechanism</b>.</li><li>A mechanism is a combination of interconnected <b>rigid bodies</b> that allows relative motion between them in a controlled manner.</li><li>A <b>kinematic pair</b> is a joint between two links that permits one kind of relative motion: sliding, turning, rolling or screw motion. It determines the degrees of freedom.</li></ul>`
        },
        {
          title: 'Mechanism vs machine',
          html: `<div class="vs"><div class="side"><h4>Mechanism</h4><p>A number of bodies assembled so that the motion of one causes <b>constrained and predictable motion</b> in the others.</p></div><div class="side"><h4>Machine</h4><p>A mechanism or combination of mechanisms that, besides giving definite motions to parts, also <b>transmits and modifies mechanical energy</b> into desired work.</p></div></div>
<div class="note example"><p>The slider crank mechanism turns reciprocating motion into rotary motion, or the other way round.</p></div>`
        },
        {
          title: 'Constrained motion',
          html: `<table class="tbl"><thead><tr><th>Type</th><th>Meaning</th><th>Example</th></tr></thead><tbody>
<tr><td>Completely constrained</td><td>Motion between the two elements is in a definite direction whatever the direction of force; linear or rotary</td><td>Revolute (turning) pair: shaft held by collars. Prismatic (sliding) pair: prism sliding in a hollow prism</td></tr>
<tr><td>Incompletely constrained</td><td>Motion possible in more than one direction, depending on the direction of the force</td><td>A shaft that can both slide and rotate in a bearing; each motion is independent</td></tr>
<tr><td>Successfully constrained</td><td>Motion possible in more than one direction, but an external means restricts it to one</td><td>Foot step bearing shaft held down by axial load; IC engine valve held on its seat by a spring; piston in an IC engine cylinder</td></tr>
</tbody></table>`
        },
        {
          title: 'Moving motion around',
          html: `<p class="lead">Mechanisms transfer and transform motion.</p>
<div class="kv"><div><span>Cam and follower</span><b>Rotary to reciprocating motion</b></div><div><span>Rack and pinion</span><b>Rotary and reciprocating</b></div><div><span>Helical gear pair, worm and worm wheel</span><b>Rotary to rotary, at different speeds</b></div><div><span>Wiper mechanism</span><b>Rotary to oscillatory motion</b></div></div>`
        }
      ],
      flashcards: [
        { front: 'What is kinematics?', back: 'The study of the geometry of motion without considering forces.' },
        { front: 'Define a mechanism.', back: 'Interconnected rigid bodies assembled so the motion of one causes constrained, predictable motion in the others.' },
        { front: 'How is a machine different from a mechanism?', back: 'A machine also transmits and modifies mechanical energy into useful work.' },
        { front: 'What is a kinematic pair?', back: 'A joint between two links permitting one type of relative motion; it determines the DoF.' },
        { front: 'Completely vs incompletely constrained motion?', back: 'Completely: one definite direction whatever the force. Incompletely: more than one direction, depending on force direction.' },
        { front: 'What is successfully constrained motion? Example?', back: 'More than one direction possible, but an external means limits it to one; e.g. IC engine valve held by a spring.' },
        { front: 'Which mechanism turns rotary into oscillatory motion?', back: 'Wiper mechanism.' }
      ],
      oneLiners: [
        'Kinematics = motion geometry, no forces.',
        'Machine = mechanism + energy transmission.',
        'Constrained motion: complete, incomplete, successful.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-links-dof',
      title: 'Links, chains and degrees of freedom',
      short: 'Links and DoF',
      blurb: 'Kinematic links and chains, link types, degrees of freedom, and the Grubler and Kutzbach criteria with the slider crank worked.',
      source: 'Lecture 19, pages 11–16',
      tabs: [
        {
          title: 'Links and chains',
          html: `<p class="lead">A <b>link</b> is a member or combination of members of a mechanism that connects other members and moves relative to them. A link may be one or more rigid bodies.</p>
<p>A series of links joined by kinematic pairs is a <b>kinematic chain</b>.</p>
<figure data-fig="m4-slider-crank"></figure>
<p>The <b>slider crank mechanism</b> has four links: frame and guides, crank, connecting rod and slider.</p>
<p>Links are classed by how many ends can carry a revolute pair: <b>binary</b>, <b>ternary</b> and <b>quaternary</b>. A link is rigid, with no relative motion between joints within the link.</p>`
        },
        {
          title: 'Degrees of freedom',
          html: `<p class="lead">An unconstrained rigid body in space has <b>6 DoF</b>: translation along x, y and z, and rotation about each axis.</p>
<div class="eq" data-label="Spatial body">DoF = 6 − number of restraints</div>
<div class="eq" data-label="Planar body">DoF = 3 − number of restraints</div>
<p>The DoF of a pair is the number of independent relative motions, translational and rotational, it allows.</p>`
        },
        {
          title: 'Grubler criterion',
          html: `<p class="lead">Most mechanisms are planar. Let <b>N</b> = number of links, <b>F</b> = degrees of freedom, <b>P<sub>1</sub></b> = pairs with 1 DoF (2 restraints each) and <b>P<sub>2</sub></b> = pairs with 2 DoF (1 restraint each).</p>
<p>One link is fixed, so there are N − 1 movable links with 3(N − 1) DoF in all.</p>
<div class="eq" data-label="Grubler">F = 3(N − 1) − 2P<sub>1</sub> − P<sub>2</sub></div>
<p>If every pair has one DoF (P<sub>2</sub> = 0):</p>
<div class="eq" data-label="Kutzbach (source name)">F = 3(N − 1) − 2P<sub>1</sub></div>
<div class="note heads-up"><p>The source gives the full equation as Grubler's criterion and the P<sub>2</sub> = 0 version as Kutzbach's. Many textbooks name the full equation Kutzbach's and the simplified one Grubler's. Use the source's naming in the exam.</p></div>`
        },
        {
          title: 'Slider crank example',
          html: `<div class="worked"><div class="given"><p>Slider crank: frame, crank, connecting rod, slider, so N = 4. Pairs: 3 revolute and 1 prismatic, all 1 DoF, so P<sub>1</sub> = 4.</p></div><div class="solve"><div class="eq">F = 3(N − 1) − 2P<sub>1</sub></div><div class="eq">F = 3(4 − 1) − 2(4) = 9 − 8 = 1</div></div><div class="result"><p>F = 1</p></div></div>
<p>One input (turning the crank) fixes the position of every other part.</p>`
        }
      ],
      flashcards: [
        { front: 'What is a link?', back: 'A member or combination of members of a mechanism that connects other members and moves relative to them.' },
        { front: 'What is a kinematic chain?', back: 'A series of links connected by kinematic pairs.' },
        { front: 'Four links of a slider crank?', back: 'Frame and guides, crank, connecting rod, slider.' },
        { front: 'How many DoF has a free rigid body in space? On a plane?', back: '6 in space; 3 in a plane.' },
        { front: 'Write the Grubler criterion.', back: 'F = 3(N − 1) − 2P1 − P2.' },
        { front: 'Simplified form when all pairs have one DoF?', back: 'F = 3(N − 1) − 2P1 (the source calls this Kutzbach\'s criterion).' },
        { front: 'DoF of the slider crank mechanism?', back: 'F = 3(4 − 1) − 2(4) = 1.' }
      ],
      oneLiners: [
        'Free body: 6 DoF in space, 3 on a plane.',
        'F = 3(N − 1) − 2P1 − P2; one fixed link.',
        'Slider crank: N = 4, P1 = 4, F = 1.'
      ],
      formulas: [
        { name: 'Grubler criterion', html: `F = 3(N − 1) − 2P<sub>1</sub> − P<sub>2</sub>`, note: 'N links, P1 one-DoF pairs, P2 two-DoF pairs' },
        { name: 'One-DoF pairs only', html: `F = 3(N − 1) − 2P<sub>1</sub>`, note: 'Kutzbach in the course notation' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-kinematic-pairs',
      title: 'Kinematic pairs',
      short: 'Kinematic pairs',
      blurb: 'Lower and higher pairs, and the six lower pairs with their degrees of freedom.',
      source: 'Lecture 19, pages 17–20',
      tabs: [
        {
          title: 'Lower and higher',
          html: `<p class="lead">By the nature of contact, kinematic pairs are <b>lower pairs</b> (surface contact) or <b>higher pairs</b> (point or line contact).</p>
<div class="vs"><div class="side"><h4>Lower pair</h4><p>Surface contact. Examples below.</p></div><div class="side"><h4>Higher pair</h4><p>Point or line contact. Examples: gear teeth, cam and follower.</p></div></div>`
        },
        {
          title: 'Lower pairs',
          html: `<table class="tbl"><thead><tr><th>Pair</th><th>DoF</th><th>Pair variable</th></tr></thead><tbody>
<tr><td>Revolute (turning)</td><td>1</td><td>Angle θ</td></tr>
<tr><td>Prismatic (sliding)</td><td>1</td><td>Distance S</td></tr>
<tr><td>Cylindrical</td><td>2</td><td>θ and S</td></tr>
<tr><td>Screw</td><td>1</td><td>θ or S</td></tr>
<tr><td>Spherical</td><td>3</td><td>Three angles</td></tr>
<tr><td>Planar</td><td>3</td><td>S<sub>x</sub>, S<sub>y</sub> and an angle</td></tr>
</tbody></table>
<div class="note why"><p>A screw pair has only one DoF because the turn and the advance are tied together by the thread: turn it and it moves along.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Lower vs higher pair?', back: 'Lower: surface contact. Higher: point or line contact.' },
        { front: 'Give two higher pair examples.', back: 'Gear teeth, and a cam and follower.' },
        { front: 'DoF of a revolute pair and a prismatic pair?', back: '1 each.' },
        { front: 'DoF of a cylindrical pair?', back: '2 (rotation and sliding).' },
        { front: 'DoF of spherical and planar pairs?', back: '3 each.' },
        { front: 'DoF of a screw pair?', back: '1' }
      ],
      oneLiners: [
        'Lower = surface contact; higher = point or line contact.',
        'DoF: revolute 1, prismatic 1, screw 1, cylindrical 2, spherical 3, planar 3.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm4-slider-crank', src: 'm4/pages/p75.png', crop: null, caption: 'Slider crank mechanism: frame, crank, connecting rod and slider turn between rotary and reciprocating motion.', alt: 'Crank, connecting rod and slider on a frame.' }
  ]
});
