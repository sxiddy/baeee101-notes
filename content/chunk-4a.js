CHUNK({
  chunk: '4a',
  module: 'm4',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm4-mfg-intro',
      title: 'What is manufacturing?',
      short: 'Manufacturing basics',
      blurb: 'What manufacturing means and the five families of methods used to turn raw material into a part.',
      source: 'Lecture 11, pages 1–5',
      tabs: [
        {
          title: 'The idea',
          html: `<p class="lead"><b>Manufacturing</b> is the conversion of <b>raw material into a useful product</b>. A steel ingot is raw material; a gearbox housing cut from it is a product.</p>
<p>Which process you pick depends mainly on two things: the <b>material</b> and the <b>shape</b> you need.</p>
<div class="note why"><p>A process that suits a brittle cast iron may crack a ductile aluminium alloy, and a hollow part with internal cavities cannot be made by cutting from a solid block. So material and shape narrow the choice before cost even comes in.</p></div>`
        },
        {
          title: 'Five families',
          html: `<p class="lead">The module groups manufacturing methods into five families.</p>
<div class="kv"><div><span>Metal casting</span><b>Pour molten metal into a mould and let it solidify</b></div><div><span>Metal forming</span><b>Deform solid metal into shape: extrusion, forging, rolling</b></div><div><span>Machining</span><b>Cut material away from a larger block</b></div><div><span>Joining processes</span><b>Weld or otherwise join parts together</b></div><div><span>Powder metallurgy</span><b>Make parts from metal powder</b></div></div>
<div class="note exam"><p>Learn the five names in this order. A "list the types of manufacturing" question is a five-mark gift.</p></div>`
        }
      ],
      flashcards: [
        { front: 'What is manufacturing?', back: 'Conversion of raw material into a useful product.' },
        { front: 'What mainly decides the choice of manufacturing process?', back: 'The material and the shape of the part.' },
        { front: 'Name the five families of manufacturing methods.', back: 'Metal casting, metal forming, machining, joining processes, powder metallurgy.' },
        { front: 'Which family removes material from a larger block?', back: 'Machining (subtractive manufacturing).' },
        { front: 'Which family deforms solid metal into shape?', back: 'Metal forming: extrusion, forging and rolling.' }
      ],
      oneLiners: [
        'Manufacturing = raw material into a useful product.',
        'Five families: casting, forming, machining, joining, powder metallurgy.',
        'Process choice depends mainly on material and shape.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-sand-casting',
      title: 'Sand casting',
      short: 'Sand casting',
      blurb: 'The expendable-mould process, the parts of a sand mould and the five steps from pattern to finished cast.',
      source: 'Lecture 11, pages 6–11',
      tabs: [
        {
          title: 'The process',
          html: `<p class="lead"><b>Sand casting</b> is an <b>expendable mould</b> process. The mould is temporary and is <b>broken</b> to take out the solidified cast, so each casting needs a new mould.</p>
<ul><li>There is <b>no limit</b> on size, shape or weight.</li><li>Suitable for materials with a <b>high melting point</b>.</li><li>The surface finish is <b>coarser</b> and the tolerance <b>wider</b>.</li></ul>
<p>Choose the <b>parting line</b> along a <b>flat plane</b> rather than a contoured one: it makes the casting cheaper.</p>
<figure data-fig="m4-sand-mold"></figure>`
        },
        {
          title: 'Parts of the mould',
          html: `<p class="lead">Know each part by what it does.</p>
<div class="kv"><div><span>Flask</span><b>Metal or wood frame. Drag = lower flask, cope = upper flask, cheek = intermediate flask</b></div><div><span>Pattern</span><b>Wood or metal copy of the part; makes the mould cavity</b></div><div><span>Parting line</span><b>Dividing line between the flasks that make up the mould</b></div><div><span>Moulding sand</span><b>Mixture of silica sand, clay and moisture, without losing its permeability</b></div><div><span>Core</span><b>Part of the mould, generally baked, used to create cavities</b></div><div><span>Pouring basin</span><b>Funnel-shaped cavity into which the molten metal is poured</b></div><div><span>Sprue</span><b>Passage through which the molten metal reaches the mould cavity</b></div><div><span>Runner</span><b>Channel that carries the metal from the sprue to the gate</b></div><div><span>Chaplets</span><b>Support the cores, to take care of their own weight</b></div><div><span>Riser</span><b>Column of molten metal in the mould that feeds the casting as it shrinks</b></div></div>`
        },
        {
          title: 'Five steps',
          html: `<p class="lead">From pattern to finished component:</p>
<ol class="steps"><li><b>Place the pattern</b> in the sand: the shape of the part to be cast.</li><li><b>Add the gating system</b> (pouring basin, sprue, runner, gate and riser).</li><li><b>Remove the pattern</b> and fill the mould cavity with molten metal.</li><li><b>Let it cool</b> until the metal solidifies.</li><li><b>Break the sand mould</b> and remove the cast component.</li></ol>`
        },
        {
          title: 'Why cast?',
          html: `<p class="lead">Casting can produce <b>large parts</b> and <b>complex shapes</b>, including internal cavities and hollow sections.</p>
<p>Materials that are <b>difficult or expensive</b> to make by other manufacturing processes can still be cast.</p>
<div class="chips"><span class="chip">Exhaust manifold</span><span class="chip">Gearbox housing</span></div>`
        },
        {
          title: 'Steps, defects, engine block',
          html: `<p class="lead">Sand casting questions usually ask for the steps <b>and</b> the defect that can arise at each step, with how to avoid it.</p>
<table class="tbl"><thead><tr><th>Step</th><th>What is done</th><th>Defect if done badly, and the cure</th></tr></thead><tbody>
<tr><td>1. Pattern making</td><td>A replica of the part, made oversize with allowances (shrinkage, machining, draft)</td><td>Wrong size or a torn mould: give correct shrinkage and draft allowances</td></tr>
<tr><td>2. Core making</td><td>Sand cores are made for holes and hollow parts and baked</td><td>Core shift or gas holes: support cores with core prints or chaplets, vent and dry them</td></tr>
<tr><td>3. Moulding</td><td>Sand is rammed round the pattern in the cope and drag; the pattern is removed and the gating system cut</td><td>Mould shift (mismatch): align cope and drag with pins. Blowholes: ram moderately and vent the mould. Metal penetration: use finer sand and proper ramming</td></tr>
<tr><td>4. Melting and pouring</td><td>Metal is melted in a furnace and poured steadily through the pouring basin and sprue</td><td>Cold shut and misrun: pour hotter and faster. Penetration: do not overheat the metal</td></tr>
<tr><td>5. Solidification</td><td>The metal cools and shrinks in the mould; the riser feeds liquid metal to the shrinking casting</td><td>Shrinkage cavity: place risers at the heaviest sections. Hot tears: correct composition and avoid sharp corners</td></tr>
<tr><td>6. Shake-out and fettling</td><td>The sand mould is broken, and gates, risers and fins are cut off; the surface is cleaned</td><td>Fins and rough surface: tight mould joint, finer facing sand</td></tr>
<tr><td>7. Inspection</td><td>Visual, dimensional and non-destructive tests</td><td>Hidden blowholes and cracks are found here</td></tr>
</tbody></table>
<h3>Casting an engine cylinder block</h3>
<ol class="steps"><li><b>Material:</b> grey cast iron (good castability, vibration damping) or an aluminium alloy (light).</li>
<li><b>Pattern and cores:</b> a split pattern gives the outer shape; sand cores form the cylinder bores, the water jackets and the oil passages, held by core prints.</li>
<li><b>Moulding:</b> the cope and drag are rammed in green or dry sand, the cores are set, and the mould is closed.</li>
<li><b>Pouring:</b> molten metal is poured through a gating system that fills thin walls quickly; risers feed the thick bearing sections.</li>
<li><b>Cooling and shake-out:</b> after solidification the sand and cores are knocked out (core sand comes out through openings).</li>
<li><b>Fettling and machining:</b> gates and risers are cut off, then the bores, deck face and bearing seats are machined, and the block is pressure-tested for leaks.</li></ol>`
        }
      ],
      flashcards: [
        { front: 'Why is sand casting called an expendable mould process?', back: 'The mould is temporary and non-reusable: it is broken to take out the solidified cast.' },
        { front: 'What is moulding sand made of?', back: 'A mixture of silica sand, clay and moisture, which must keep its permeability.' },
        { front: 'What is the drag, the cope and the cheek?', back: 'Drag = lower flask, cope = upper flask, cheek = intermediate flask.' },
        { front: 'What is the job of a riser?', back: 'A column of molten metal that feeds the casting as it shrinks.' },
        { front: 'Sprue vs runner?', back: 'Sprue: passage by which metal reaches the cavity. Runner: channel carrying metal from the sprue to the gate.' },
        { front: 'What is a core?', back: 'A generally baked part of the mould used to create cavities.' },
        { front: 'Give the five steps of sand casting.', back: 'Place pattern, add gating system, remove pattern and pour, cool and solidify, break mould and remove cast.' },
        { front: 'Where should the parting line be chosen?', back: 'Along a flat plane rather than a contoured one, for economical casting.' }
      ],
      oneLiners: [
        'Sand casting: expendable mould, no limit on size, coarse finish, wide tolerance.',
        'Moulding sand = silica sand + clay + moisture, must stay permeable.',
        'Pour path: pouring basin → sprue → runner → gate → cavity; riser feeds shrinkage.',
        'Flat parting line = cheaper casting.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-casting-design',
      title: 'Riser, pattern and chaplets',
      short: 'Riser, pattern, chaplets',
      blurb: 'Where to put the riser, what a pattern must allow for, why chaplets are used and the types of pattern.',
      source: 'Lecture 11, pages 12–14, 17',
      tabs: [
        {
          title: 'Riser placement',
          html: `<p class="lead">The riser supplies metal to the casting while it solidifies and holds the <b>final void</b>. It is cut off later, leaving a solid casting.</p>
<ul><li>Attach risers to the <b>heaviest sections</b>. All surrounding sections should be thinner.</li><li>The <b>thinnest sections</b> are farthest from the riser and <b>solidify first</b>.</li><li>Solidification then moves toward the heaviest section and finally the riser.</li><li>Taper sections where needed so that solidification runs <b>toward the risers</b>. That keeps voids out of the casting.</li></ul>
<div class="note why"><p>Metal shrinks as it turns from liquid to solid. If the riser is still liquid when the casting solidifies, it keeps topping up the shrinking metal, and the void ends up in the riser, which is thrown away.</p></div>`
        },
        {
          title: 'Pattern allowances',
          html: `<p class="lead">The pattern is not an exact copy of the finished part. Its construction must account for four things.</p>
<ul><li>The <b>mould parting line</b>.</li><li><b>Machined surfaces</b> (extra metal left to cut away).</li><li><b>Shrinkage</b> of the material.</li><li><b>Draft</b>, a slight taper that lets the pattern be extracted from the mould.</li></ul>
<div class="note example"><p>A cast iron pulley that is machined all over: the pattern is made oversize for shrinkage and for the metal that machining will remove.</p></div>`
        },
        {
          title: 'Chaplets',
          html: `<p class="lead"><b>Chaplets</b> are metal spacers placed in the mould to <b>support a core</b> or to hold it a fixed distance from the mould wall.</p>
<ul><li>They stop <b>core sag</b> before pouring and <b>core float</b> after pouring.</li><li>In theory the chaplet <b>fuses with the casting</b> and forms a continuous wall.</li></ul>`
        },
        {
          title: 'Types of pattern',
          html: `<p class="lead">Six patterns appear in the course.</p>
<div class="kv"><div><span>Single piece (solid)</span><b>One complete unit, no joints or loose pieces</b></div><div><span>Split</span><b>Two or more parts, usually separated at the parting line</b></div><div><span>Match plate</span><b>Cope and drag halves mounted on opposite sides of a plate</b></div><div><span>Sweep</span><b>Makes mould cavities, particularly for symmetrical castings</b></div><div><span>Gated</span><b>Makes several identical castings in a single mould</b></div><div><span>Skeleton</span><b>Makes moulds for simple, large castings</b></div></div>`
        },
        {
          title: 'Pattern, core, riser; allowances',
          html: `<p class="lead">Three parts of a mould do three different jobs, and each allowance on the pattern prevents a particular fault.</p>
<div class="kv"><div><span>Pattern</span><b>A replica of the part, used to make the mould cavity in sand; it is made oversize to allow for shrinkage and machining</b></div><div><span>Core</span><b>A sand shape placed in the mould to form holes, recesses and internal cavities that the pattern cannot</b></div><div><span>Riser</span><b>A reservoir of liquid metal that feeds the casting as it shrinks during solidification, so shrinkage cavities form in the riser, not the casting; it also lets gas escape</b></div></div>
<table class="tbl"><thead><tr><th>Allowance</th><th>Why it is given</th><th>If it is neglected</th></tr></thead><tbody>
<tr><td>Shrinkage</td><td>Metal contracts as it cools from the pouring temperature, so the pattern is made larger (about 1 % for cast iron, 2 % for steel)</td><td>The casting comes out <b>undersize</b> and may have to be scrapped</td></tr>
<tr><td>Draft (taper)</td><td>A slight taper of about 1–3° on vertical faces lets the pattern be drawn out of the sand</td><td>The <b>mould walls break</b> as the pattern is lifted, giving a damaged cavity and a rough casting</td></tr>
<tr><td>Machining</td><td>Extra metal on faces that will be machined</td><td>Not enough metal to clean up the surface, so the size cannot be reached</td></tr>
<tr><td>Distortion</td><td>Pattern shaped opposite to the expected warping of long, thin sections</td><td>The casting warps out of shape</td></tr>
<tr><td>Shake (rapping)</td><td>Pattern made slightly smaller because rapping it loose enlarges the cavity</td><td>The casting comes out slightly oversize</td></tr>
</tbody></table>
<table class="tbl"><thead><tr><th>Pattern type</th><th>Application</th></tr></thead><tbody>
<tr><td>Single piece (solid)</td><td>Simple shapes in small numbers, such as stuffing-box glands and simple brackets</td></tr>
<tr><td>Split</td><td>Shapes that cannot be withdrawn in one piece, such as pipes, valve bodies, cylinders</td></tr>
<tr><td>Match plate</td><td>Mass production of small castings on moulding machines, such as piston rings and small fittings</td></tr>
<tr><td>Sweep</td><td>Large symmetrical shapes such as bells, kettles and large pans</td></tr>
<tr><td>Gated</td><td>Many small identical castings in one mould</td></tr>
<tr><td>Skeleton</td><td>Very large simple castings such as turbine casings and large pipes</td></tr>
</tbody></table>`
        }
      ],
      flashcards: [
        { front: 'Where should a riser be attached?', back: 'To the heaviest section; surrounding sections should be thinner.', },
        { front: 'Which sections solidify first?', back: 'The thinnest, farthest from the riser. Solidification then moves toward the heaviest section and the riser.' },
        { front: 'What four things must pattern construction allow for?', back: 'Mould parting line, machined surfaces, shrinkage of the material and draft.' },
        { front: 'What is draft?', back: 'A taper on the pattern that helps it come out of the mould.' },
        { front: 'What are chaplets for?', back: 'Metal spacers that support a core: they prevent core sag before pouring and core float after pouring.' },
        { front: 'Which pattern makes several identical castings in one mould?', back: 'Gated pattern.' },
        { front: 'What is a match plate pattern?', back: 'The cope and drag halves of the pattern are mounted on opposite sides of a plate.' },
        { front: 'When is a skeleton pattern used?', back: 'To create moulds for simple, large castings.' }
      ],
      oneLiners: [
        'Riser on the heaviest section; solidification must run toward the riser.',
        'Pattern allows for parting line, machining, shrinkage and draft.',
        'Chaplets stop core sag (before) and core float (after pouring).',
        'Patterns: solid, split, match plate, sweep, gated, skeleton.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-casting-defects',
      title: 'Casting defects',
      short: 'Casting defects',
      blurb: 'The six defects in the course, what causes each one, and how to avoid shrinkage cavities.',
      source: 'Lecture 11, pages 15–16',
      tabs: [
        {
          title: 'Six defects',
          html: `<p class="lead">Learn each defect together with its <b>cause</b>.</p>
<table class="tbl"><thead><tr><th>Defect</th><th>Cause</th></tr></thead><tbody>
<tr><td>Shift or mismatch</td><td>Improper alignment of mould cavities on the cope and drag</td></tr>
<tr><td>Blowholes</td><td>Insufficient venting</td></tr>
<tr><td>Metal penetration</td><td>Improper mould strength, high pouring temperature</td></tr>
<tr><td>Shrinkage cavity</td><td>Poor design or feeding system</td></tr>
<tr><td>Cold shut</td><td>Low pouring temperature, lack of fluidity</td></tr>
<tr><td>Hot tears or hot cracks</td><td>Improper composition</td></tr>
</tbody></table>
<div class="note trap"><p>Cold shut is a <b>low</b> pouring temperature problem; metal penetration is a <b>high</b> one. Do not swap them.</p></div>`
        },
        {
          title: 'Avoiding shrinkage cavities',
          html: `<p class="lead">Where two sections meet, the metal there stays hot longest and forms a <b>hot spot</b>.</p>
<ul><li>Solidification of intersecting sections gives <b>hot spots</b> and shrinkage cavities.</li><li>Hot spots <b>retard solidification</b> and usually cause porosity and shrinkage cavities.</li><li>Liquid-to-solid shrinkage can leave a <b>void at the last point to solidify</b>.</li></ul>
<div class="note exam"><p>The fix is design: feed the last-to-freeze region with a riser and keep section thickness changing gradually (see Riser placement).</p></div>`
        },
        {
          title: 'Remedies',
          html: `<table class="tbl"><thead><tr><th>Defect</th><th>What it looks like</th><th>How to avoid it</th></tr></thead><tbody>
<tr><td>Mould shift (mismatch)</td><td>The two halves of the casting are offset at the parting line</td><td>Align cope and drag with dowel pins and check the box clamps</td></tr>
<tr><td>Blowholes</td><td>Smooth round holes from trapped gas, inside or at the surface</td><td>Vent the mould, use sand of correct moisture and permeability, do not ram too hard</td></tr>
<tr><td>Metal penetration</td><td>Metal enters the gaps between sand grains, giving a rough surface</td><td>Use finer sand, proper ramming and a lower pouring temperature</td></tr>
<tr><td>Shrinkage cavity</td><td>A rough-walled hole at the last part to solidify</td><td>Use risers and chills so solidification moves towards the riser</td></tr>
<tr><td>Cold shut</td><td>Two streams of metal meet but do not fuse, leaving a line</td><td>Raise the pouring temperature and speed; improve gating</td></tr>
<tr><td>Hot tear</td><td>Irregular cracks formed while the metal is weak and hot</td><td>Correct composition, avoid sharp corners, use collapsible cores</td></tr>
</tbody></table>`
        }
      ],
      flashcards: [
        { front: 'What causes shift or mismatch?', back: 'Improper alignment of the mould cavities on the cope and drag.' },
        { front: 'What causes blowholes?', back: 'Insufficient venting.' },
        { front: 'What causes metal penetration?', back: 'Improper mould strength and a high pouring temperature.' },
        { front: 'What causes a shrinkage cavity?', back: 'Poor design or feeding system.' },
        { front: 'What causes a cold shut?', back: 'Low pouring temperature and lack of fluidity.' },
        { front: 'What causes hot tears or hot cracks?', back: 'Improper composition.' },
        { front: 'Why do hot spots form?', back: 'Intersecting sections solidify together and retard solidification, giving porosity and shrinkage cavities.' }
      ],
      oneLiners: [
        'Mismatch: cope-drag misalignment. Blowholes: poor venting. Cold shut: low pour temperature.',
        'Metal penetration: weak mould or high pour temperature. Hot tears: wrong composition.',
        'Hot spots at intersecting sections give shrinkage cavities.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-extrusion',
      title: 'Extrusion',
      short: 'Extrusion',
      blurb: 'Squeezing a billet through a die to make long uniform sections: the sequence, the four types and what limits the size.',
      source: 'Lecture 11, pages 18–25',
      tabs: [
        {
          title: 'The process',
          html: `<p class="lead"><b>Extrusion</b> produces <b>long parts of uniform cross section</b>. The initial shape is squeezed through a die and comes out in the shape of the die opening. It makes cylindrical bars and hollow tubes.</p>
<figure data-fig="m4-extrusion"></figure>
<ol class="steps"><li><b>Heat</b> the billet of metal.</li><li><b>Insert</b> it into a container.</li><li><b>Force</b> it through a die hole.</li><li><b>Get</b> the desired cross section.</li></ol>
<p>Most parts are made by <b>hot extrusion</b>, because the flow stress of the metal is lower at high temperature. <b>Extrudability</b> is in reverse order of strength: Al, Cu, Mg and Zn alloys are easier to extrude than steels.</p>`
        },
        {
          title: 'Types',
          html: `<p class="lead">Two ways of classifying: by how the billet moves, and by temperature or pressure medium.</p>
<table class="tbl"><thead><tr><th>Type</th><th>What happens</th></tr></thead><tbody>
<tr><td>Hot extrusion</td><td>Above the recrystallisation temperature: easy flow, no work hardening</td></tr>
<tr><td>Cold extrusion</td><td>Room temperature or warm: no oxidation, higher strength from cold working, closer tolerances, better surface finish</td></tr>
<tr><td>Impact extrusion</td><td>Billet is pressed at high velocity with extreme force into a die by a punch</td></tr>
<tr><td>Hydrostatic extrusion</td><td>Billet is surrounded by pressurised liquid: less friction, ductility rises at high pressure, even flow, no residue on walls</td></tr>
</tbody></table>
<ul><li>In <b>direct</b> extrusion the billet slides along the container, so friction raises the force needed: the force is <b>more</b>.</li><li>In <b>indirect</b> extrusion the billet and container <b>move together</b>, so frictional forces are easily eliminated.</li><li><b>Thin-walled</b> extrusions are more difficult because metal flows with difficulty in a narrow path.</li></ul>`
        },
        {
          title: 'Force and size limits',
          html: `<p class="lead">High-strength alloys need <b>higher pressures</b> and a <b>slower extrusion rate</b>. <b>Die wear</b> is a major factor.</p>
<p>The largest extrudable cross section depends on:</p>
<ul><li>the <b>tonnage of the press</b> available;</li><li>the <b>material</b> being extruded;</li><li>the <b>complexity</b> of the cross section.</li></ul>
<p>Capacity is measured as the <b>CCD</b>, the circumscribing-circle diameter.</p>
<div class="kv"><div><span>Aluminium</span><b>CCD 6.3 mm to 1.02 m</b></div><div><span>Steel</span><b>CCD maximum 150 mm (larger forces needed)</b></div></div>`
        },
        {
          title: 'Design and flow',
          html: `<p class="lead">Good section design keeps the die from straining.</p>
<ul><li>Keep section walls <b>balanced</b> as far as function allows: unbalanced sections cause die strain and <b>extrusion distortion</b>.</li><li>When dimensions are critical, <b>cold drawing</b> the extruded section smooths the surface and improves dimensional accuracy.</li></ul>
<div class="vs"><div class="side"><h4>Flow pattern S</h4><p>No friction at the container and die interfaces. Homogeneous material with uniform composition.</p></div><div class="side"><h4>Flow pattern C</h4><p>Inhomogeneous material properties and non-uniform temperature. A larger <b>dead metal zone (DMZ)</b> forms, with more severe shear at the container wall.</p></div></div>`
        },
        {
          title: 'Direct vs indirect',
          html: `<figure data-fig="m4-direct-indirect"></figure>
<table class="tbl"><thead><tr><th>Point</th><th>Direct (forward) extrusion</th><th>Indirect (backward) extrusion</th></tr></thead><tbody>
<tr><td>Movement</td><td>Ram pushes the billet towards a die at the far end; product comes out in the <b>same direction</b> as the ram</td><td>The die sits on a hollow ram that moves into the billet; product comes out through the ram, <b>opposite</b> to the ram motion</td></tr>
<tr><td>Friction</td><td>Billet slides along the whole container wall, so friction is high</td><td>Billet does not move relative to the container, so friction is almost eliminated</td></tr>
<tr><td>Force needed</td><td>Higher, and highest at the start</td><td>Lower (25–30 % less) and nearly constant</td></tr>
<tr><td>Equipment</td><td>Simple, solid ram</td><td>Hollow ram limits the size and strength of the product</td></tr>
<tr><td>Uses</td><td>Most commercial sections: aluminium window frames, rods, bars</td><td>Tubes, cans and parts where low force and uniform flow matter</td></tr>
</tbody></table>
<p><b>Applications of extrusion:</b> aluminium door and window sections, tubes and pipes, rods and bars, heat sinks, railings, wires and cables (sheathing), and plastic pipes.</p>`
        }
      ],
      flashcards: [
        { front: 'What does extrusion produce?', back: 'Long parts of uniform cross section, such as cylindrical bars and hollow tubes.' },
        { front: 'Give the extrusion sequence.', back: 'Heat the billet, insert it into a container, force it through a die hole, get the desired cross section.' },
        { front: 'Why is most extrusion done hot?', back: 'The flow stress of the metal is lower at high temperature.' },
        { front: 'Which metals extrude more easily: aluminium or steel?', back: 'Aluminium. Extrudability is in reverse order of strength: Al, Cu, Mg, Zn alloys are above steels.' },
        { front: 'What is cold extrusion good for?', back: 'No oxidation, higher strength from cold working, closer tolerances and better surface finish.' },
        { front: 'What is hydrostatic extrusion?', back: 'The billet is surrounded by a pressurised liquid: less friction, more ductility at high pressure, even flow, no residue on walls.' },
        { front: 'What is CCD?', back: 'Circumscribing-circle diameter, the measure of extrusion capacity.' },
        { front: 'What limits the largest extrudable section?', back: 'Press tonnage, the material and the complexity of the cross section.' }
      ],
      oneLiners: [
        'Extrusion: billet squeezed through a die, long uniform sections.',
        'Hot extrusion above recrystallisation temperature; cold gives finish and tolerance.',
        'Aluminium CCD 6.3 mm–1.02 m, steel max 150 mm.',
        'Dead metal zone grows with non-uniform flow and temperature.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-forging',
      title: 'Forging',
      short: 'Forging',
      blurb: 'Shaping metal by controlled plastic deformation: closed die forging, nomenclature, grain flow and allowances.',
      source: 'Lecture 11, pages 26–33',
      tabs: [
        {
          title: 'The idea',
          html: `<p class="lead"><b>Forging</b> shapes metal by <b>controlled plastic deformation at high temperature</b>. It gives more mechanical strength and better structural integrity, and it <b>eliminates cavities, voids and pores</b>.</p>
<p>Forging complexity goes up with:</p>
<ul><li>thin sections in the part;</li><li>large changes in cross-sectional area;</li><li>shapes that need the die parting line to be cranked.</li></ul>
<h3>Closed die forging</h3>
<p>Also called impression-die forging. The metal is squeezed between two dies to a <b>more complex and highly deformed shape</b>, with a <b>refined and controlled grain structure</b>.</p>
<figure data-fig="m4-forging-die"></figure>`
        },
        {
          title: 'Nomenclature',
          html: `<p class="lead">Forged features are named by the direction the metal flows relative to the die motion.</p>
<div class="kv"><div><span>Rib and boss</span><b>Any wall filled by flow parallel to the die motion</b></div><div><span>Web</span><b>Wall filled by horizontal flow, perpendicular to die motion and parallel to the parting plane</b></div><div><span>Recess</span><b>Small web area surrounded by thicker metal</b></div></div>
<p><b>Parting line location</b> is a critical step in forging design. It sets the die cost, draft requirements, grain flow and trimming procedures.</p>
<p>Metal flow is easy to manage when ribs and bosses are not too high and narrow, and easiest when the web is thick and uniform. If you have a choice, place the parting line so metal flows <b>horizontally, parallel to the parting line</b>.</p>`
        },
        {
          title: 'Grain flow',
          html: `<p class="lead"><b>Grain flow</b> is the directional pattern the metal crystals take during plastic deformation.</p>
<ul><li>Forging leaves <b>unbroken grain flow</b> following the contour of the part.</li><li>The grain flow lines up with the <b>directions of principal stress</b>.</li><li>Mechanical properties along the grain flow are <b>better</b> than in the randomly oriented crystals of cast or weld metal.</li></ul>
<div class="note example"><p>A forged connecting rod: grain follows the rod's shape, so the stress path runs along the grain.</p></div>`
        },
        {
          title: 'Allowances',
          html: `<p class="lead">A hot-forged part needs extra metal and taper.</p>
<ul><li><b>Machining allowance</b>: surfaces that locate against other parts need machining. The allowance depends on the oxidation produced by heating to forging temperature.</li><li><b>Draft allowance</b>: greater on <b>inside</b> surfaces than outside ones, because the part tends to shrink onto projections in the die as it cools.</li><li><b>Radii</b> are needed to help the metal flow and fill the die.</li></ul>`
        }
      ],
      flashcards: [
        { front: 'What does forging do to voids and pores?', back: 'Eliminates cavities, voids and pores, and gives more strength and structural integrity.' },
        { front: 'What makes forging more complex?', back: 'Thin sections, large changes in cross-sectional area, and shapes needing a cranked parting line.' },
        { front: 'What is a web in forging?', back: 'The wall filled by horizontal flow, perpendicular to die motion and parallel to the parting plane.' },
        { front: 'What is a rib or boss?', back: 'Any wall filled by flow parallel to the die motion.' },
        { front: 'What is a recess?', back: 'A small web area surrounded by thicker metal.' },
        { front: 'Why is parting line location critical?', back: 'It determines die cost, draft requirements, grain flow and trimming procedures.' },
        { front: 'What is grain flow?', back: 'The directional pattern metal crystals take during plastic deformation.' },
        { front: 'Why is draft greater on inside surfaces?', back: 'The part shrinks onto die projections as it cools.' }
      ],
      oneLiners: [
        'Forging: plastic deformation at high temperature, no voids, refined grain.',
        'Grain flow follows part contour and aligns with principal stress.',
        'Inside draft > outside draft; radii help die filling.',
        'Parting line: choose so metal flows horizontally.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-rolling',
      title: 'Rolling',
      short: 'Rolling',
      blurb: 'Reducing thickness between rotating rolls: flat and shape rolling, roll gap, draft and back-up rolls.',
      source: 'Lecture 11, pages 34–39',
      tabs: [
        {
          title: 'The process',
          html: `<p class="lead">In <b>rolling</b> the metal is plastically deformed between <b>rotating rolls</b>. Thickness reduces and the cross section changes.</p>
<figure data-fig="m4-rolling"></figure>
<ul><li>The <b>volume stays the same</b>: reduction in thickness is made up by an increase in length and width.</li><li><b>Hot rolled</b> steel suits products where tight tolerances are not needed.</li></ul>
<div class="eq" data-label="Volume constant">t<sub>0</sub> w<sub>0</sub> L<sub>0</sub> = t<sub>1</sub> w<sub>1</sub> L<sub>1</sub></div>`
        },
        {
          title: 'Terms',
          html: `<p class="lead">Two terms you must define.</p>
<div class="kv"><div><span>Roll gap</span><b>Gap between the rolls</b></div><div><span>Draft</span><b>Initial thickness − final thickness</b></div></div>
<div class="eq" data-label="Draft">d = t<sub>0</sub> − t<sub>1</sub></div>
<div class="worked"><div class="given"><p>A plate 20 mm thick is rolled down to 17 mm.</p></div><div class="solve"><p>Draft = initial − final</p><div class="eq">d = 20 − 17 = 3 mm</div></div><div class="result"><p>Draft = 3 mm</p></div></div>
<p><b>Back-up rolls</b> are large rolls used to support smaller work rolls in high-load applications.</p>
<div data-viz="rolling-draft"></div>`
        },
        {
          title: 'Flat and shape rolling',
          html: `<p class="lead"><b>Flat rolling</b> makes plate and sheet. <b>Shape rolling</b> makes structural sections in stages (for example an H-section).</p>
<div class="chips"><span class="chip">I-sections (I-beams)</span><span class="chip">H-sections</span><span class="chip">Angle sections (L-beams)</span><span class="chip">Channel sections (U-channels)</span></div>`
        },
        {
          title: 'Cold rolled products',
          html: `<p class="lead">Cold rolling gives a better product than hot rolling.</p>
<ul><li>Better, more finished surfaces with <b>closer tolerances</b>.</li><li>Smooth surfaces that are often oily to the touch.</li><li>Bars are <b>true and square</b>, with well-defined edges and corners.</li><li>Tubes have better <b>concentric uniformity</b> and straightness.</li></ul>`
        }
      ],
      flashcards: [
        { front: 'What happens in rolling?', back: 'Metal is plastically deformed between rotating rolls, reducing thickness and changing cross section.' },
        { front: 'What stays constant in rolling?', back: 'Volume: thinner means longer and wider.' },
        { front: 'Define draft in rolling.', back: 'Initial thickness − final thickness.' },
        { front: 'What are back-up rolls?', back: 'Large rolls supporting smaller work rolls in high-load applications.' },
        { front: 'Name four rolled structural sections.', back: 'I-sections, H-sections, angle (L) sections, channel (U) sections.' },
        { front: 'Why choose cold-rolled steel?', back: 'Better finish and closer tolerances, true and square bars, better tube concentricity and straightness.' }
      ],
      oneLiners: [
        'Rolling: volume constant, thickness down, length and width up.',
        'Draft = t0 − t1.',
        'Back-up rolls stop work rolls bending under high load.'
      ],
      formulas: [
        { name: 'Draft', html: `d = t<sub>0</sub> − t<sub>1</sub>`, note: 'Initial minus final thickness' },
        { name: 'Volume constancy', html: `t<sub>0</sub> w<sub>0</sub> L<sub>0</sub> = t<sub>1</sub> w<sub>1</sub> L<sub>1</sub>`, note: 'No material lost in rolling' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-hot-cold',
      title: 'Hot vs cold working',
      short: 'Hot vs cold working',
      blurb: 'The comparison table for hot and cold rolling, forging and extrusion.',
      source: 'Lecture 11, pages 40–41',
      tabs: [
        {
          title: 'Comparison',
          html: `<p class="lead">Hot working is done <b>above</b> the recrystallisation temperature, cold working <b>below</b> it. The rule applies to rolling, forging and extrusion alike.</p>
<table class="tbl"><thead><tr><th>Point</th><th>Hot working</th><th>Cold working</th></tr></thead><tbody>
<tr><td>Temperature</td><td>Above recrystallisation</td><td>Below recrystallisation</td></tr>
<tr><td>Ductility</td><td>More at high temperature</td><td>Less at room temperature</td></tr>
<tr><td>Force</td><td>Less required</td><td>More tonnage required</td></tr>
<tr><td>Surface finish</td><td>Rough, from oxidation and scale</td><td>Better finish and dimensional accuracy</td></tr>
<tr><td>Residual stress</td><td>None formed</td><td>Induced by plastic deformation</td></tr>
<tr><td>Tool life</td><td>More</td><td>Less, due to wear</td></tr>
<tr><td>Energy</td><td>More, because heating is needed</td><td>Less heat energy, but more force</td></tr>
</tbody></table>
`
        },
        {
          title: 'Exam answer',
          html: `<p class="lead">A comparison question is a table answer. Lead with the temperature line, then work down.</p>
<div class="vs"><div class="side"><h4>Hot working</h4><p>Choose it when you need <b>low force</b>, <b>high ductility</b> and the finish does not matter.</p></div><div class="side"><h4>Cold working</h4><p>Choose it when you need a <b>smooth surface</b>, <b>close tolerance</b> and extra strength.</p></div></div>
<div class="note trap"><p>Hot working leaves <b>no</b> residual stress; cold working <b>induces</b> it. Students often reverse this.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Hot vs cold working: how is the line drawn?', back: 'Hot is above the recrystallisation temperature, cold is below it.' },
        { front: 'Which needs more force: hot or cold working?', back: 'Cold working needs more tonnage.' },
        { front: 'Which leaves residual stress?', back: 'Cold working. Hot working forms none.' },
        { front: 'Why is hot-worked surface rough?', back: 'Oxidation and scale formation.' },
        { front: 'Which gives longer tool life?', back: 'Hot working; cold working wears tools more.' },
        { front: 'Why does hot working use more energy?', back: 'The metal has to be heated.' }
      ],
      oneLiners: [
        'Hot: less force, rough finish, no residual stress, more energy.',
        'Cold: more force, better finish, residual stress, less tool life.',
        'Line between hot and cold = recrystallisation temperature.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm4-direct-indirect', src: 'own/README.txt', crop: null, caption: 'Direct extrusion: product leaves in the ram direction. Indirect: die on a hollow ram, product leaves through the ram.', alt: 'Two extrusion setups with ram, billet, container and die; arrows show product direction.' },
    { id: 'm4-sand-mold', src: 'm4/pages/p08.png', crop: null, caption: 'Section of a sand mould: cope and drag, parting line, pouring basin, sprue, runner, riser and core.', alt: 'Section view of a two-part sand mould with the gating system and a core.' },
    { id: 'm4-extrusion', src: 'm4/pages/p18.png', crop: null, caption: 'A billet in a container pushed by a ram through a die: the section leaves in the shape of the die opening.', alt: 'Billet, container, ram and die with an extruded bar leaving the die.' },
    { id: 'm4-forging-die', src: 'm4/pages/p28.png', crop: null, caption: 'Closed die forging: the billet is squeezed between two dies and fills the impression.', alt: 'Two dies closing on a billet.' },
    { id: 'm4-rolling', src: 'm4/pages/p34.png', crop: null, caption: 'Flat rolling: initial thickness t0 reduced to t1 between two rolls; the difference is the draft.', alt: 'Strip passing between two rolls, thickness reduced.' }
  ]
});
