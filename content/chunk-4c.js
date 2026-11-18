CHUNK({
  chunk: '4c',
  module: 'm4',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm4-machining-basics',
      title: 'Machining and cutting tools',
      short: 'Machining, cutting tools',
      blurb: 'Subtractive manufacturing, single point against multi-point tools, where the cutting heat goes and the types of chip.',
      source: 'Lecture 13, pages 66–72',
      tabs: [
        {
          title: 'What machining is',
          html: `<p class="lead"><b>Machining</b> is <b>subtractive manufacturing</b>: it removes material from a larger block to create the desired shape and surface finish.</p>
<ul><li>A <b>close tolerance zone</b> can be reached, which matters for critical engineering applications.</li><li>On a drawing, a <b>horizontal bar</b> added to the basic surface symbol means material removal by machining is required. The plain symbol means the surface may be produced by any method.</li></ul>`
        },
        {
          title: 'Cutting tools',
          html: `<p class="lead">A cutting tool has one or more <b>sharp cutting edges</b> and is made of a <b>harder material</b> than the work. There should be more material behind the cutting edge.</p>
<div class="vs"><div class="side"><h4>Single point tools</h4><p>One cutting edge.</p><div class="chips"><span class="chip">Single point cutting tool</span><span class="chip">Boring tool</span><span class="chip">Shaping tool</span><span class="chip">Planing tool</span></div></div><div class="side"><h4>Multi-point tools</h4><p>Two or more cutting edges.</p><div class="chips"><span class="chip">Milling cutters</span><span class="chip">Drill bit</span><span class="chip">Reamer</span><span class="chip">Broaching tool</span><span class="chip">Grinding wheel</span></div></div></div>`
        },
        {
          title: 'Heat in cutting',
          html: `<p class="lead">Elasto-plastic deformation, sticking and sliding friction all generate heat. The shear zone is where most of it appears.</p>
<div class="kv"><div><span>Chips</span><b>Primary zone of heat generation is the shear zone, where the material is deformed and cut</b></div><div><span>Cutting tool</span><b>Around 10–20% of the heat; the tool heats up, leading to wear and reduced tool life</b></div><div><span>Workpiece</span><b>Around 3–5% of the heat</b></div></div>`
        },
        {
          title: 'Chip types',
          html: `<p class="lead">Almost all materials suit conventional machining. The nature of the material decides how the chip forms. Ductile materials are machined at <b>high speeds</b>.</p>
<div class="chips"><span class="chip">Continuous chips</span><span class="chip">Continuous chips with built-up edge</span><span class="chip">Discontinuous chips</span><span class="chip">Serrated or segmented chips</span></div>`
        },
        {
          title: 'Machining; tool types',
          html: `<p class="lead"><b>Machining</b> is a material-removal process in which a cutting tool harder than the work removes unwanted material as <b>chips</b>, to give the required shape, size and finish. Conventional machining processes include <b>turning</b> (lathe), <b>drilling</b>, <b>milling</b>, <b>shaping</b> and <b>grinding</b>.</p>
<table class="tbl"><thead><tr><th>Point</th><th>Single-point tool</th><th>Multi-point tool</th></tr></thead><tbody>
<tr><td>Cutting edges</td><td>One main cutting edge</td><td>Two or more edges cutting at the same time</td></tr>
<tr><td>Examples</td><td>Lathe turning tool, boring tool, shaping and planing tools</td><td>Drill, milling cutter, reamer, broach, grinding wheel</td></tr>
<tr><td>Material removal</td><td>Lower rate</td><td>Higher rate, since several edges cut</td></tr>
<tr><td>Heat and wear</td><td>All heat on one edge, so it wears faster</td><td>Load and heat shared, longer life</td></tr>
<tr><td>Making and resharpening</td><td>Simple and cheap</td><td>Complex and costly</td></tr>
</tbody></table>
<figure data-fig="m4-cutting-tools"></figure>`
        }
      ],
      flashcards: [
        { front: 'What is machining?', back: 'Subtractive manufacturing: removing material from a larger block to get the desired shape and finish.' },
        { front: 'What does a horizontal bar on a surface symbol mean?', back: 'Material removal by machining is required.' },
        { front: 'Single point vs multi-point tool?', back: 'Single point has one cutting edge (turning, boring, shaping, planing); multi-point has two or more (milling cutters, drill, reamer, broach, grinding wheel).' },
        { front: 'What must a cutting tool be made of?', back: 'A material harder than the work, with more material behind the cutting edge.' },
        { front: 'Where does most cutting heat go?', back: 'Mostly into the chips (shear zone); about 10–20% into the tool and 3–5% into the workpiece.' },
        { front: 'Name the four chip types.', back: 'Continuous, continuous with built-up edge, discontinuous, serrated or segmented.' }
      ],
      oneLiners: [
        'Machining = subtractive; close tolerances.',
        'Tool harder than work; single point (1 edge) vs multi-point (2+).',
        'Heat: mainly chips, 10–20% tool, 3–5% work.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-hole-making',
      title: 'Drilling, boring and tapping',
      short: 'Drill, bore, tap',
      blurb: 'Hole-making operations and what each one is for.',
      source: 'Lecture 13, pages 72–75',
      tabs: [
        {
          title: 'Classification',
          html: `<p class="lead">Conventional machining processes divide by how the tool moves.</p>
<table class="tbl"><thead><tr><th>Tool motion</th><th>Processes</th></tr></thead><tbody>
<tr><td>Rotating tool</td><td>Slab milling, tapping, drilling, grinding, boring</td></tr>
<tr><td>Reciprocating tool</td><td>Turning, broaching, planing, shaping</td></tr>
</tbody></table>`
        },
        {
          title: 'Drilling',
          html: `<p class="lead">Hole making is among the most important manufacturing operations, and <b>drilling</b> is the major, common process for it.</p>
<ul><li>The drill bit has a <b>large length-to-diameter ratio</b>.</li><li>Some metals and non-metals <b>expand significantly</b> with the heat of drilling.</li><li>For better finish and dimensional accuracy, drilled holes may go on to <b>reaming and honing</b>.</li></ul>`
        },
        {
          title: 'Boring',
          html: `<p class="lead"><b>Boring</b> enlarges an existing hole, typically after drilling.</p>
<ul><li>Used for greater <b>accuracy of diameter</b>, to make a precise internal diameter, or to cut a tapered hole.</li><li>Done on lathes, drilling machines or specialised boring machines.</li><li>Drilling and boring both remove internal material from a workpiece.</li></ul>`
        },
        {
          title: 'Tapping',
          html: `<p class="lead"><b>Tapping</b> cuts internal threads. A tap is a chip-producing threading tool with multiple cutting teeth.</p>
<p>The tap rotates in the hole and cuts away material to form the thread profile. It is needed for secure fastenings in manufacturing and construction.</p>`
        },
        {
          title: 'Drilling vs reaming',
          html: `<table class="tbl"><thead><tr><th>Point</th><th>Drilling</th><th>Reaming</th></tr></thead><tbody>
<tr><td>Purpose</td><td><b>Makes a new hole</b> in solid material</td><td><b>Finishes an existing hole</b> to an accurate size and smooth surface</td></tr>
<tr><td>Tool</td><td>Twist drill with two cutting lips and a pointed tip</td><td>Reamer with many straight or helical cutting edges</td></tr>
<tr><td>Material removed</td><td>Large</td><td>Very small (about 0.1–0.5 mm on diameter)</td></tr>
<tr><td>Accuracy and finish</td><td>Moderate; hole is often slightly oversize and rough</td><td>High dimensional accuracy and good finish</td></tr>
<tr><td>Speed and feed</td><td>Higher speed</td><td>Lower speed, higher feed</td></tr>
<tr><td>Sequence</td><td>Done first</td><td>Done after drilling (and before honing)</td></tr>
</tbody></table>
<div class="note exam"><p>Boring enlarges an existing hole with a single-point tool and corrects its position; reaming only sizes and smooths it, following the drilled hole.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Name the rotating-tool machining processes.', back: 'Slab milling, tapping, drilling, grinding, boring.' },
        { front: 'Name the reciprocating-tool processes.', back: 'Turning, broaching, planing, shaping.' },
        { front: 'What follows drilling for better finish and accuracy?', back: 'Reaming and honing.' },
        { front: 'What is boring?', back: 'Enlarging an existing hole, typically after drilling, for accurate or tapered internal diameters.' },
        { front: 'What is a tap?', back: 'A chip-producing threading tool with multiple cutting teeth; it cuts internal threads.' }
      ],
      oneLiners: [
        'Drilling makes the hole; reaming and honing finish it.',
        'Boring enlarges an existing hole to a precise diameter.',
        'Tapping cuts internal threads.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-turning-milling',
      title: 'Turning, milling, shaping and grinding',
      short: 'Turn, mill, grind',
      blurb: 'Lathe turning with feed and depth of cut, the milling types, shaping against planing, and the grinding processes.',
      source: 'Lecture 13, pages 76–80',
      tabs: [
        {
          title: 'Turning',
          html: `<p class="lead"><b>Turning</b> is usually done on a <b>lathe</b>. A single point cutting tool removes material from a <b>rotating</b> workpiece to make cylindrical shapes.</p>
<figure data-fig="m4-turning"></figure>
<div class="kv"><div><span>Feed (mm/rev)</span><b>Distance the tool travels per revolution of the workpiece</b></div><div><span>Depth of cut (mm)</span><b>Perpendicular distance the tool penetrates the workpiece in one pass</b></div></div>
<p>Several lathe operations can be done <b>without regripping</b> the workpiece. Short, stubby parts are easier to machine than long, thin ones, which need <b>tailstock or steady-rest support</b>.</p>`
        },
        {
          title: 'Milling',
          html: `<p class="lead"><b>Milling</b> uses a rotating cutting tool to remove material from a workpiece.</p>
<table class="tbl"><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td>Slab milling</td><td>Cutter axis is parallel to the workpiece</td></tr>
<tr><td>Face milling</td><td>Cutter axis is perpendicular to the workpiece</td></tr>
<tr><td>End milling</td><td>Mills slots; the cutter has edges on both its periphery and its tip</td></tr>
<tr><td>Up milling</td><td>Better for certain materials or applications</td></tr>
<tr><td>Down milling</td><td>Better surface finish and longer tool life</td></tr>
</tbody></table>`
        },
        {
          title: 'Shaping vs planing',
          html: `<p class="lead">Both use <b>linear motion cutting</b> to make flat surfaces or profiles.</p>
<div class="vs"><div class="side"><h4>Shaping</h4><p>The workpiece is stationary and the tool reciprocates horizontally. For <b>smaller jobs</b>.</p></div><div class="side"><h4>Planing</h4><p>The tool is stationary and the workpiece reciprocates on its table. For <b>larger, oversized</b> workpieces.</p></div></div>`
        },
        {
          title: 'Grinding',
          html: `<p class="lead"><b>Grinding</b> is abrasive machining with a wheel of abrasive grains such as <b>aluminium oxide or silicon carbide</b>. The workpiece is fed against the rotating wheel.</p>
<div class="kv"><div><span>Surface grinding</span><b>Makes flat surfaces</b></div><div><span>Cylindrical grinding</span><b>Grinds the outside diameter of a cylindrical part</b></div><div><span>Internal grinding</span><b>Grinds the inside diameter of holes or bores</b></div><div><span>Centreless grinding</span><b>Workpiece is supported by a blade and a regulating wheel, not held between centres</b></div></div>`
        }
      ],
      flashcards: [
        { front: 'What is turning?', back: 'A single point tool removes material from a rotating workpiece to make cylinders, usually on a lathe.' },
        { front: 'Define feed in turning.', back: 'Distance the tool travels per revolution of the workpiece (mm/rev).' },
        { front: 'Define depth of cut.', back: 'The perpendicular distance the tool penetrates the workpiece in a single pass (mm).' },
        { front: 'Slab vs face milling?', back: 'Slab: cutter axis parallel to the workpiece. Face: cutter axis perpendicular.' },
        { front: 'What is end milling used for?', back: 'Milling slots; the cutter has edges on its periphery and tip.' },
        { front: 'Up vs down milling?', back: 'Down milling gives a better finish and longer tool life.' },
        { front: 'Shaping vs planing?', back: 'Shaping: tool reciprocates, small jobs. Planing: workpiece reciprocates, large jobs.' },
        { front: 'What is centreless grinding?', back: 'Workpiece supported by a blade and a regulating wheel instead of centres.' }
      ],
      oneLiners: [
        'Feed = mm/rev; depth of cut = penetration per pass.',
        'Slab axis parallel, face axis perpendicular.',
        'Shaping small (tool moves); planing large (work moves).',
        'Grinding wheels: aluminium oxide or silicon carbide grains.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-cnc',
      title: 'CNC machining',
      short: 'CNC machining',
      blurb: 'What CNC is, point-to-point against contouring control, interpolation, and how an NC machine processes its program.',
      source: 'Lecture 13, pages 81–86',
      tabs: [
        {
          title: 'What CNC is',
          html: `<p class="lead"><b>CNC (computer numerical control)</b> was introduced in the early <b>1950s</b>. It controls the movement of machine components by <b>direct insertion of coded instructions as numerical data</b>.</p>
<p>It can control spindle on and off, tool changing, moving the workpiece or tool along set paths, and switching cutting fluid on and off.</p>`
        },
        {
          title: 'Control systems',
          html: `<p class="lead">Two kinds of control.</p>
<figure data-fig="m4-cnc-control"></figure>
<div class="vs"><div class="side"><h4>Point-to-point</h4><p>The tool moves at <b>maximum velocity</b> to cut non-productive time, then decelerates as it nears the numerically defined position. Used in <b>drilling, punching and straight milling</b>.</p></div><div class="side"><h4>Contouring</h4><p>Positioning and operation are both done along <b>controlled paths</b> while the tool is in contact with the material. Used in <b>milling, turning, engraving and profile cutting</b>.</p></div></div>`
        },
        {
          title: 'Interpolation',
          html: `<p class="lead">Along a path, the tool moves <b>incrementally</b> by one of several methods.</p>
<div class="chips"><span class="chip">Linear interpolation</span><span class="chip">Circular interpolation</span><span class="chip">Parabolic and cubic interpolation</span></div>`
        },
        {
          title: 'How an NC machine works',
          html: `<ol class="steps"><li><b>Data input</b> The numerical information is read and stored in computer memory.</li><li><b>Data processing</b> The programs are read into the machine control unit.</li><li><b>Data output</b> The information becomes pulsed commands to the servomotor, which moves the work table to set positions by linear or rotary movements, using stepping motors, lead screws or similar devices.</li></ol>`
        },
        {
          title: 'Machining applications',
          html: `<p class="lead">Two examples of a casting or forging finished by machining.</p>
<div class="vs"><div class="side"><h4>Brake disc (cast)</h4><p>Hub: turned and faced. Mounting holes and convection holes: drilled. Brake pad contact area: faced.</p></div><div class="side"><h4>Connecting rod (forged)</h4><p>Side faces: milling or grinding. Big end (crank pin) and small end (piston pin): boring and honing. Oil holes: drilling. Bolt hole: drilling, tapping or reaming. Split joint face: milling.</p></div></div>`
        }
      ],
      flashcards: [
        { front: 'What is CNC?', back: 'Computer numerical control: controlling machine movements by coded numerical instructions, introduced in the early 1950s.' },
        { front: 'Name four things CNC can control.', back: 'Spindle on/off, tool changing, tool or workpiece paths, cutting fluid on/off.' },
        { front: 'Point-to-point control: what happens and where is it used?', back: 'Tool moves at maximum velocity then decelerates near the target; used in drilling, punching and straight milling.' },
        { front: 'Contouring control: where is it used?', back: 'Milling, turning, engraving and profile cutting; positioning and operation along controlled paths.' },
        { front: 'Name three interpolation methods.', back: 'Linear, circular, parabolic and cubic.' },
        { front: 'Three principles of NC machines?', back: 'Data input, data processing, data output (pulsed commands to the servomotor).' },
        { front: 'Machining on a brake disc?', back: 'Hub turned and faced, mounting and convection holes drilled, pad contact area faced.' }
      ],
      oneLiners: [
        'CNC: coded numerical data controls the machine.',
        'Point-to-point: drilling. Contouring: milling and profiling.',
        'NC cycle: data input, data processing, data output to the servomotor.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm4-cutting-tools', src: 'own/README.txt', crop: null, caption: 'Single point tool: shank, face, flank, tip, rake angle α and relief angle γ. Multi-point tool: a plain milling cutter whose teeth each cut like a single point edge.', alt: 'Side view of a single point lathe tool with the rake face, flank, rake and relief angles and a curling chip; below, a toothed milling cutter rotating above a workpiece fed by the table.' },
    { id: 'm4-turning', src: 'm4/pages/p76.png', crop: null, caption: 'Turning on a lathe: the tool feeds along the rotating workpiece and cuts to a depth of cut.', alt: 'Workpiece in a chuck with a single point tool showing feed and depth of cut.' },
    { id: 'm4-cnc-control', src: 'm4/pages/p83.png', crop: null, caption: 'Point-to-point control moves between positions; contouring control follows a path while cutting.', alt: 'A point-to-point route beside a contoured path.' }
  ]
});
