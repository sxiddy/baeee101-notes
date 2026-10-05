QUESTIONS({
  chunk: '4a',
  questions: [
    {
      id: 'm4-4a-01', module: 'm4', topic: 'm4-sand-casting', type: 'decide', level: 1,
      q: `<p>A foundry must make a single huge gearbox housing with internal cavities from a high melting point alloy. Why is sand casting a sensible choice?</p>`,
      options: ['The mould is reusable, so the cost per part is tiny', 'There is no limit on size, shape or weight and it suits high melting point metals', 'It gives the finest surface finish and tightest tolerance', 'It needs no pattern'],
      correct: 1,
      answer: `<p><b>No limit on size, shape or weight, and it suits high melting point materials.</b></p>`,
      explain: `<p>Sand casting uses a temporary, <b>expendable mould</b> that is broken to remove the cast, so it is not reusable. Its price is a <b>coarser surface finish and wider tolerance</b>. The pattern makes the cavity and a core makes the internal hollows.</p>`,
      points: ['Expendable mould, broken after each cast', 'No limit on size, shape or weight', 'Suits high melting point metals', 'Coarser finish, wide tolerance is the trade-off']
    },
    {
      id: 'm4-4a-02', module: 'm4', topic: 'm4-casting-design', type: 'troubleshoot', level: 2,
      q: `<p>A casting has a shrinkage void deep inside its thickest section, far from the riser, while the thin sections are sound. What went wrong with the design?</p>`,
      options: null, correct: null,
      answer: `<p><b>The riser was not placed on the heaviest section, so solidification did not run toward it.</b></p>`,
      explain: `<p>The riser must be attached to the <b>heaviest section</b>, with all surrounding sections thinner. The thinnest sections far from the riser freeze first, and solidification should progress toward the heaviest section and then the riser, so the final void ends up in the riser. If the thick section freezes cut off from the riser, liquid-to-solid shrinkage leaves a void at the last point to solidify.</p>`,
      points: ['Riser on the heaviest section', 'Thin sections freeze first', 'Solidification must progress toward the riser', 'Taper sections to guide it']
    },
    {
      id: 'm4-4a-03', module: 'm4', topic: 'm4-casting-defects', type: 'troubleshoot', level: 1,
      q: `<p>Castings from one furnace show cold shuts. The pouring crew has started pouring at a lower temperature to save fuel. What should they change?</p>`,
      options: ['Pour hotter: a low pouring temperature and poor fluidity cause cold shut', 'Add more venting', 'Improve cope and drag alignment', 'Change the composition to stop hot tears'],
      correct: 0,
      answer: `<p><b>Raise the pouring temperature.</b></p>`,
      explain: `<p>Cold shut comes from a <b>low pouring temperature and lack of fluidity</b>. Venting cures blowholes, alignment cures shift or mismatch, and composition control cures hot tears.</p>`,
      points: ['Cold shut = low pouring temperature, poor fluidity', 'Blowholes = venting', 'Mismatch = alignment', 'Hot tears = composition']
    },
    {
      id: 'm4-4a-04', module: 'm4', topic: 'm4-casting-defects', type: 'predict', level: 2,
      q: `<p>A foundry raises the pouring temperature well above normal and also uses a weakly rammed sand mould. Which defect is most likely to appear, and which defect would a low pouring temperature have caused instead?</p>`,
      options: null, correct: null,
      answer: `<p><b>Metal penetration</b> (high temperature, weak mould); a low temperature would give <b>cold shut</b>.</p>`,
      explain: `<p>Metal penetration comes from improper mould strength and a high pouring temperature: molten metal pushes into the sand. Cold shut is the opposite temperature fault.</p>`,
      points: ['Metal penetration: weak mould, high temperature', 'Cold shut: low temperature, poor fluidity']
    },
    {
      id: 'm4-4a-05', module: 'm4', topic: 'm4-extrusion', type: 'decide', level: 2,
      q: `<p>A company wants long aluminium window frames and a separate run of long steel rods of the same section. Which will extrude more easily, and what does that mean for the press?</p>`,
      options: ['Steel, because it is stronger and holds its shape', 'Aluminium, because extrudability is in reverse order of strength; steel needs higher pressure', 'Both equally, because they use the same die', 'Neither can be extruded hot'],
      correct: 1,
      answer: `<p><b>Aluminium.</b> Extrudability falls as strength rises.</p>`,
      explain: `<p>Al, Cu, Mg and Zn alloys extrude more easily than steels. High-strength alloys need higher pressures and slower extrusion, and the larger forces limit steel to a CCD of about 150 mm, against 6.3 mm to 1.02 m for aluminium.</p>`,
      points: ['Extrudability is in reverse order of strength', 'Steel needs more force', 'CCD: aluminium 6.3 mm–1.02 m, steel up to 150 mm']
    },
    {
      id: 'm4-4a-06', module: 'm4', topic: 'm4-extrusion', type: 'explain', level: 2,
      q: `<p>Why is most extrusion done hot, and when would a manufacturer still choose cold extrusion?</p>`,
      options: null, correct: null,
      answer: `<p><b>Hot</b> because the flow stress is lower; <b>cold</b> for finish and accuracy.</p>`,
      explain: `<p>Above the recrystallisation temperature the metal flows easily and does not work harden. Cold extrusion at room or warm temperature gives no oxidation, higher strength from cold working, closer tolerances and a better surface finish.</p>`,
      points: ['Hot: lower flow stress, no work hardening', 'Cold: no oxidation, higher strength, closer tolerance, better finish']
    },
    {
      id: 'm4-4a-07', module: 'm4', topic: 'm4-forging', type: 'decide', level: 2,
      q: `<p>An engineer must choose between a cast and a forged connecting rod for a highly stressed engine. Which should they pick, and what is the key reason?</p>`,
      options: ['Cast: random grain is stronger', 'Forged: grain flow follows the part contour and lines up with the principal stresses, and voids are eliminated', 'Cast: it has no parting line', 'Either: strength is the same'],
      correct: 1,
      answer: `<p><b>Forged.</b></p>`,
      explain: `<p>Forging gives unbroken grain flow along the contour, aligned with the principal stresses, so properties along the grain are better than in randomly oriented cast or weld metal. It also eliminates cavities, voids and pores.</p>`,
      points: ['Unbroken grain flow', 'Aligned with principal stress', 'No voids or pores']
    },
    {
      id: 'm4-4a-08', module: 'm4', topic: 'm4-rolling', type: 'numerical', level: 1,
      q: `<p>A steel plate 24 mm thick, 300 mm wide and 1.0 m long passes through the rolls and leaves 20 mm thick and 300 mm wide. Find the draft and the new length.</p>`,
      options: null, correct: null,
      answer: `<p><b>Draft 4 mm; length 1.2 m.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>t<sub>0</sub> = 24 mm, t<sub>1</sub> = 20 mm, w = 300 mm, L<sub>0</sub> = 1.0 m</p></div><div class="solve"><p>Draft:</p><div class="eq">d = 24 − 20 = 4 mm</div><p>Volume is constant and the width is unchanged:</p><div class="eq">24 × 1.0 = 20 × L<sub>1</sub> ⇒ L<sub>1</sub> = 1.2 m</div></div><div class="result"><p>d = 4 mm, L<sub>1</sub> = 1.2 m</p></div></div>`,
      points: ['Draft = initial − final thickness', 'Volume stays constant', 'Thinner means longer']
    },
    {
      id: 'm4-4a-09', module: 'm4', topic: 'm4-hot-cold', type: 'decide', level: 1,
      q: `<p>A shop needs bars with a smooth surface, close tolerance and no scale, and can afford a large press. Which working method fits?</p>`,
      options: ['Hot working: less force and no residual stress', 'Cold working: better finish and accuracy, at the cost of more force and some residual stress', 'Hot working: better surface finish', 'Cold working: no tool wear'],
      correct: 1,
      answer: `<p><b>Cold working.</b></p>`,
      explain: `<p>Hot working leaves a rough surface from oxidation and scale. Cold working gives better finish and dimensional accuracy but needs more tonnage, induces residual stress and wears tools faster.</p>`,
      points: ['Cold: better finish and accuracy', 'More force, residual stress, less tool life']
    },
    {
      id: 'm4-4a-10', module: 'm4', topic: 'm4-casting-design', type: 'design', level: 2,
      q: `<p>You are designing the pattern for a cast iron pulley that will be machined all over and cast in two halves. List what the pattern must allow for and why a draft is needed.</p>`,
      options: null, correct: null,
      answer: `<p><b>Parting line, machined surfaces, shrinkage and draft.</b></p>`,
      explain: `<p>The pattern is made oversize for <b>shrinkage</b> and for the metal machining will remove. The <b>parting line</b> decides how the mould splits, and <b>draft</b> is a slight taper that lets the pattern be drawn out of the sand without breaking the mould.</p>`,
      points: ['Mould parting line', 'Machining allowance', 'Shrinkage allowance', 'Draft for extraction']
    }
  ]
});
