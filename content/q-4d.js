QUESTIONS({
  chunk: '4d',
  questions: [
    {
      id: 'm4-4d-01', module: 'm4', topic: 'm4-links-dof', type: 'numerical', level: 2,
      q: `<p>A four-bar linkage has a fixed frame, a crank, a coupler and a rocker, joined by four revolute pairs. Find its degrees of freedom.</p>`,
      options: ['0', '1', '2', '3'],
      correct: 1,
      answer: `<p><b>F = 1.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>N = 4 links, P<sub>1</sub> = 4 revolute pairs, P<sub>2</sub> = 0</p></div><div class="solve"><div class="eq">F = 3(N − 1) − 2P<sub>1</sub></div><div class="eq">F = 3(4 − 1) − 2(4) = 9 − 8 = 1</div></div><div class="result"><p>F = 1: one input fixes the whole motion.</p></div></div>`,
      points: ['One link is fixed', 'Each one-DoF pair imposes 2 restraints', 'F = 1']
    },
    {
      id: 'm4-4d-02', module: 'm4', topic: 'm4-links-dof', type: 'numerical', level: 3,
      q: `<p>A planar mechanism has 6 links, 7 one-DoF pairs and no two-DoF pairs. Find F. A designer adds one more link and two more one-DoF pairs: what is F now?</p>`,
      options: null, correct: null,
      answer: `<p><b>F = 1 for the 6-link mechanism, and F = 0 after the addition.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>First: N = 6, P<sub>1</sub> = 7. Second: N = 7, P<sub>1</sub> = 9.</p></div><div class="solve"><div class="eq">F = 3(6 − 1) − 2(7) = 15 − 14 = 1</div><div class="eq">F = 3(7 − 1) − 2(9) = 18 − 18 = 0</div></div><div class="result"><p>First F = 1; second F = 0 (a locked structure).</p></div></div><p>Each added link brings 3 DoF, and each added pair removes 2, so the two pairs here take away 4 against the link's 3, giving F = 0.</p>`,
      points: ['F = 3(N − 1) − 2P1', 'Added link +3, each pair −2', 'F = 0 means no motion']
    },
    {
      id: 'm4-4d-03', module: 'm4', topic: 'm4-links-dof', type: 'numerical', level: 2,
      q: `<p>A mechanism has 5 links, 4 one-DoF pairs and 1 two-DoF pair (for example a cam and follower contact). Find F.</p>`,
      options: null, correct: null,
      answer: `<p><b>F = 3.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>N = 5, P<sub>1</sub> = 4, P<sub>2</sub> = 1</p></div><div class="solve"><div class="eq">F = 3(N − 1) − 2P<sub>1</sub> − P<sub>2</sub></div><div class="eq">F = 3(4) − 2(4) − 1 = 12 − 8 − 1 = 3</div></div><div class="result"><p>F = 3</p></div></div>`,
      points: ['Two-DoF pair imposes 1 restraint', 'Use the full Grubler equation']
    },
    {
      id: 'm4-4d-04', module: 'm4', topic: 'm4-mechanisms', type: 'decide', level: 1,
      q: `<p>An IC engine valve is held on its seat by a spring and cannot move away until the cam pushes it. What type of constrained motion is this?</p>`,
      options: ['Completely constrained', 'Incompletely constrained', 'Successfully constrained', 'Unconstrained'],
      correct: 2,
      answer: `<p><b>Successfully constrained motion.</b></p>`,
      explain: `<p>Motion between the two elements is possible in more than one direction but is restricted to one by an external means, here the spring. The footstep bearing shaft held by axial load and the piston in a cylinder are other examples. A shaft that can both rotate and slide freely is incompletely constrained.</p>`,
      points: ['More than one direction possible', 'External means limits to one', 'Spring on the valve']
    },
    {
      id: 'm4-4d-05', module: 'm4', topic: 'm4-mechanisms', type: 'explain', level: 2,
      q: `<p>Is a car engine a mechanism or a machine, and what separates the two?</p>`,
      options: null, correct: null,
      answer: `<p><b>A machine.</b></p>`,
      explain: `<p>A mechanism is bodies assembled so that the motion of one gives constrained, predictable motion in the others (the slider crank is a mechanism). A machine is a mechanism or combination of mechanisms that, besides giving definite motions, also transmits and modifies mechanical energy into desired work. The engine uses the slider crank mechanism inside it.</p>`,
      points: ['Mechanism: constrained motion', 'Machine also transmits and modifies energy']
    },
    {
      id: 'm4-4d-06', module: 'm4', topic: 'm4-kinematic-pairs', type: 'decide', level: 1,
      q: `<p>A ball-and-socket joint can rotate about three axes. Which lower pair is it, and how many degrees of freedom does it have?</p>`,
      options: ['Spherical pair, 3 DoF', 'Revolute pair, 1 DoF', 'Cylindrical pair, 2 DoF', 'Screw pair, 1 DoF'],
      correct: 0,
      answer: `<p><b>Spherical pair, 3 DoF.</b></p>`,
      explain: `<p>A spherical pair has three pair variables (three angles). Revolute and prismatic pairs have 1 DoF, a cylindrical pair has 2 and a planar pair has 3. A screw pair has only 1 because turning and advance are tied by the thread.</p>`,
      points: ['Spherical: 3 DoF', 'Revolute and prismatic: 1', 'Cylindrical: 2', 'Planar: 3']
    },
    {
      id: 'm4-4d-07', module: 'm4', topic: 'm4-kinematic-pairs', type: 'interpret', level: 2,
      q: `<p>Classify these pairs as lower or higher and say why: a piston in a cylinder, gear teeth in mesh, a cam touching its follower.</p>`,
      options: null, correct: null,
      answer: `<p><b>Piston in cylinder: lower. Gear teeth and cam-follower: higher.</b></p>`,
      explain: `<p>Lower pairs have surface contact; higher pairs have point or line contact. The piston and cylinder touch over a surface. Gear teeth and a cam with its follower touch along a line or at a point.</p>`,
      points: ['Lower = surface contact', 'Higher = point or line contact']
    },
    {
      id: 'm4-4d-08', module: 'm4', topic: 'm4-links-dof', type: 'explain', level: 2,
      q: `<p>A student says a free block lying on a table has 6 degrees of freedom. When is that right, and how many does it have if it is restricted to move on the table surface only?</p>`,
      options: null, correct: null,
      answer: `<p><b>6 in space; 3 on a plane.</b></p>`,
      explain: `<p>A free rigid body in space can translate along x, y and z and rotate about each, so DoF = 6 − number of restraints = 6. A planar body has displacement along two axes and rotation about one, so DoF = 3 − number of restraints.</p>`,
      points: ['Three translations and three rotations = 6', 'Planar: 3', 'DoF = 6 (or 3) − restraints']
    }
  ]
});
