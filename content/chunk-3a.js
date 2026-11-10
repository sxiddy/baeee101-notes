CHUNK({
  chunk: '3a',
  module: 'm3',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm3-intro',
      title: 'Engineering drawing: importance, scope and standards',
      short: 'Intro and standards',
      blurb: 'Why engineers draw, sketch vs engineering drawing, where drawings are used, and the ASME, ISO and BIS standards.',
      source: 'Lecture 1, slides 2–6',
      tabs: [
        {
          title: 'Communicating a design',
          html: `<p class="lead">An idea travels to the factory through a chain of channels: <b>oral → written → sketch → engineering drawing → 3D model/CAD → manufacturing</b>. Each step is more precise than the one before.</p>
<ul><li>A <b>technical drawing</b> is a set of drawings that communicate an idea, design, schematic or model.</li><li>An <b>engineering drawing</b> is a type of technical drawing used to <b>fully and clearly define the requirements</b> for an engineered part or system.</li><li>It gives the <b>shape description, dimensions, tolerancing, annotations, parts list</b> and everything else needed for manufacturing and quality control.</li></ul>
<table class="tbl"><thead><tr><th>Channel</th><th>Labels in the course</th></tr></thead><tbody>
<tr><td>Oral</td><td>Speech, meetings</td></tr>
<tr><td>Written</td><td>Emails, specs, reports</td></tr>
<tr><td>Sketch</td><td>Quick, conceptual</td></tr>
<tr><td>Engineering drawing</td><td>Precise, measured, legal</td></tr>
<tr><td>3D model/CAD</td><td>Digital, visual, simulation</td></tr>
</tbody></table>
<div class="note why"><p>Engineering drawing is the universal language of engineers: it reduces errors in manufacturing and keeps a permanent record for reference and documentation.</p></div>`
        },
        {
          title: 'Sketch vs drawing',
          html: `<table class="tbl"><thead><tr><th>Aspect</th><th>Sketch</th><th>Engineering drawing</th></tr></thead><tbody>
<tr><td>Purpose</td><td>Capture an idea</td><td>Communicate a finished design</td></tr>
<tr><td>Execution</td><td>Freehand, fast</td><td>Precise instruments or CAD</td></tr>
<tr><td>Accuracy</td><td>Approximate, rough</td><td>Exact dimensions</td></tr>
<tr><td>Tools</td><td>Paper, pencil, pen</td><td>Drafting board, CAD software</td></tr>
<tr><td>Audience</td><td>Self, team, concept stage</td><td>Manufacturing, QC, legal, vendors</td></tr>
<tr><td>Time</td><td>Minutes (2–15 min)</td><td>Hours or days (depends on complexity)</td></tr>
<tr><td>Legal document?</td><td>No</td><td>Yes (binding agreement)</td></tr>
<tr><td>Skill</td><td>Basic drawing skill</td><td>Professional drafting standards</td></tr>
</tbody></table>
<p>A sketch is a quickly executed freehand drawing that is <b>not</b> meant to be a drawing of the finished part. It is used to express an idea.</p>
<div class="kv"><div><span>Lines</span><b>Freehand, rough</b></div><div><span>Precision</span><b>None needed</b></div><div><span>Execution time</span><b>Quick</b></div><div><span>Phase</span><b>Idea exploration</b></div><div><span>Used for</span><b>Personal notes, team brainstorms</b></div><div><span>Examples</span><b>A flask shape, a simple bracket, a gear</b></div></div>
<p>An engineering drawing is the one you use when the design is complete and has to be manufactured or used as a legal document. It carries precise measured lines, complete dimensions and legal-document status, and is used for manufacturing and QC.</p>
<div class="note heads-up"><p>The course gives the sketch time twice with different numbers: "2–5 min" in the sketch box and "2–15 min" in the comparison table. Quote <b>2–15 minutes</b> (the table, which adds "depends on complexity") and remember that a sketch is minutes, never hours.</p></div>`
        },
        {
          title: 'Scope and importance',
          html: `<p class="lead">Engineering drawing covers a set of drawings and skills used across every engineering branch. The course builds them in this order: <b>drawing standards and BIS lines</b>, <b>orthographic and isometric projections</b>, <b>dimensioning and section views</b>, <b>CAD fundamentals</b>.</p>
<div class="vs"><div class="side"><h4>Scope</h4><ul><li><b>Orthographic projections</b></li><li><b>Isometric views</b></li><li><b>Sectional views</b></li><li><b>Dimensioning and tolerancing</b></li><li><b>Standard parts</b> representation (bolts, nuts)</li><li><b>Detailing and conventions</b></li></ul></div><div class="side"><h4>Importance</h4><ul><li>The <b>universal language</b> of engineers and technical professionals</li><li>Conveys ideas <b>clearly and precisely</b>, reducing errors in manufacturing</li><li>Essential for <b>design, analysis, manufacturing, construction and maintenance</b></li><li>A <b>permanent record</b> for reference, communication and documentation</li></ul></div></div>
<h4>Why drawing matters</h4>
<div class="kv"><div><span>Communication</span><b>Clear, universal, unambiguous</b></div><div><span>Manufacturing</span><b>Accurate planning, process and quality parts</b></div><div><span>Inspection</span><b>Easy checking of dimensions and features</b></div><div><span>Documentation</span><b>Record for reference, maintenance and legal use</b></div></div>
<p><b>Engineering graphics</b> is the broader term: sketching, projections, CAD and the interpretation of drawings. <b>Engineering drawing</b> is the language used to communicate shape, size, features and manufacturing intent.</p>
<div class="note why"><p>Key takeaway: engineering drawing is the foundation of all engineering communication. Using the standard lines as per BIS gives clarity, accuracy and uniformity in technical drawings.</p></div>`
        },
        {
          title: 'Steps to a part',
          html: `<p class="lead">Role of the drawing in manufacturing, in seven steps:</p>
<ol><li><b>Design</b>, on paper or CAD</li><li><b>Drawing</b>, with all views and dimensions</li><li><b>Shape description</b>, communicated precisely to the manufacturer</li><li><b>Dimensions</b> for manufacturing</li><li><b>Tolerancing</b>: the allowable deviation</li><li><b>Annotations and notes</b>: material, finish, specifications</li><li><b>Manufacturing and QC</b>: inspect the part against the drawing</li></ol>
<h4>One language, many branches</h4>
<div class="kv"><div><span>Mechanical</span><b>Part drawings, assemblies, machine components, 3D CAD and GD&amp;T</b></div><div><span>Civil</span><b>Site plans, structural drawings, sections, infrastructure layouts</b></div><div><span>Electrical</span><b>Wiring diagrams, panel layouts, single-line diagrams, power systems</b></div><div><span>Electronics</span><b>PCB layouts, schematics, component placement, embedded systems</b></div></div>`
        },
        {
          title: 'ASME, ISO, BIS',
          html: `<p class="lead"><b>Standards</b> are a set of rules controlling how an engineering drawing is presented.</p>
<table class="tbl"><thead><tr><th></th><th>ASME (USA)</th><th>ISO (worldwide)</th><th>BIS (India)</th></tr></thead><tbody>
<tr><td>Body</td><td>American Society of Mechanical Engineers</td><td>International Organization for Standardization</td><td>Bureau of Indian Standards, the national standards body</td></tr>
<tr><td>Used by</td><td>Mainly USA and North America</td><td>Worldwide, <b>167 member countries</b></td><td>Mainly India; mandatory in government projects</td></tr>
<tr><td>Projection</td><td>Third angle</td><td>First or third, by country</td><td><b>First angle</b></td></tr>
<tr><td>Units</td><td>Inches (imperial)</td><td>Metric, mm</td><td>Metric, mm</td></tr>
<tr><td>Sheet sizes</td><td>ANSI/ASME Y14.1</td><td>ISO 5457 (A0–A5)</td><td><b>IS 10711:2001</b></td></tr>
<tr><td>Lines</td><td>ASME Y14.2-2008</td><td>ISO 128-20:1996</td><td><b>IS 10714:1986</b></td></tr>
<tr><td>Dimensioning</td><td>ASME Y14.5-2009</td><td>ISO 129:2009</td><td>IS 11669:1987</td></tr>
<tr><td>Tolerancing</td><td>ASME Y14.5-2009</td><td>ISO 286-1 (limits and fits)</td><td>IS 9192 (reference ISO 286)</td></tr>
</tbody></table>
<p>Why standards help: fewer reading, manufacturing and inspection mistakes; international communication; uniform conventions; legal and contract clarity; better efficiency and quality; lower errors and cost.</p>
<div class="note heads-up"><p>The source slide gives the ISO sheet standard as ISO 5455. ISO 5455 is about <b>scales</b>; sheet sizes and layout are ISO 5457 (with ISO 216 for the A sizes). BIS is the national standards body of India and its use is mandatory in government projects.</p></div>
<div class="note heads-up"><p>The course prints the year of the BIS line standard two ways: "IS 10714:2002" as the heading of the line table and "IS 10714:1986" in the standards comparison. If a year is asked, use <b>1986</b> from the comparison table; otherwise just write IS 10714.</p></div>`
        },
        {
          title: 'BIS in the course',
          html: `<div class="kv"><div><span>What is BIS</span><b>The national standards body of India; develops and promotes standards and quality</b></div><div><span>Why it matters</span><b>Uniform sheet layout, line conventions, symbols, dimensioning and projection practices</b></div></div>
<h4>Where you use BIS in this course</h4>
<ul><li><b>Drawing sheets and title blocks</b></li><li><b>Line types and line weights</b></li><li><b>Lettering and dimensioning</b></li><li><b>Orthographic projection</b></li></ul>
<h4>Benefits</h4>
<div class="chips"><span class="chip">Clear</span><span class="chip">Consistent</span><span class="chip">Easy to manufacture</span><span class="chip">Easy to inspect</span></div>
<div class="note why"><p>Standards make drawings universally understandable: anyone who knows the code can read the drawing without asking the person who made it.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Define an engineering drawing.', back: 'A technical drawing that fully and clearly defines the requirements for an engineered part or system.' },
        { front: 'Sketch vs engineering drawing: which is a legal document?', back: 'The engineering drawing (a binding agreement); a sketch is not.' },
        { front: 'What does an engineering drawing give the manufacturer?', back: 'Shape description, dimensions, tolerancing, annotations, parts list: everything needed to make and inspect the part.' },
        { front: 'Which projection does BIS use? ASME?', back: 'BIS: first angle. ASME: third angle.' },
        { front: 'BIS standard for lines? For sheet sizes?', back: 'Lines: IS 10714. Sheets: IS 10711:2001.' },
        { front: 'What is tolerancing?', back: 'Specifying the allowable deviation from a dimension.' },
        { front: 'What are standards in drawing?', back: 'A set of rules controlling how an engineering drawing is presented.' },
        { front: 'Name the six topics in the scope of engineering drawing.', back: 'Orthographic projections, isometric views, sectional views, dimensioning and tolerancing, standard parts, detailing and conventions.' },
        { front: 'Order of the communication channels for a design?', back: 'Oral, written, sketch, engineering drawing, 3D model/CAD, then manufacturing.' },
        { front: 'Standard numbers: dimensioning in ASME, ISO, BIS?', back: 'ASME Y14.5-2009; ISO 129:2009; IS 11669:1987. Tolerancing: ISO 286-1 and IS 9192.' },
        { front: 'How many member countries does ISO have?', back: '167.' }
      ],
      oneLiners: [
        'Sketch = idea, freehand, not legal; drawing = finished design, exact, legal.',
        'BIS = first angle, mm; ASME = third angle, inches.',
        'IS 10711 sheets, IS 10714 lines, IS 11669 dimensioning.',
        'Sketch time: minutes (2–15 min); engineering drawing: hours or days.',
        'BIS benefits: clear, consistent, easy to manufacture, easy to inspect.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-sheets',
      title: 'Drawing sheets, title block and scales',
      short: 'Sheets and scales',
      blurb: 'A-series sheet sizes, the layout of a sheet with margins and title block, and full, reduced and enlarged scales.',
      source: 'Lecture 1, slides 15–20',
      tabs: [
        {
          title: 'Sheet sizes',
          html: `<p class="lead">BIS sheet sizes follow <b>IS 10711:2001</b>. A0 is about 1 m²; each next size is the previous one <b>cut in half across its long side</b>, so all sizes have sides in the ratio 1 : √2.</p>
<figure data-fig="m3-sheet-sizes"></figure>
<table class="tbl"><thead><tr><th>Size</th><th>Trimmed (mm)</th><th>Untrimmed (mm)</th></tr></thead><tbody>
<tr><td>A0</td><td>841 × 1189</td><td>880 × 1230</td></tr><tr><td>A1</td><td>594 × 841</td><td>625 × 880</td></tr><tr><td>A2</td><td>420 × 594</td><td>450 × 625</td></tr>
<tr><td>A3</td><td>297 × 420</td><td>330 × 450</td></tr><tr><td>A4</td><td>210 × 297</td><td>240 × 330</td></tr><tr><td>A5</td><td>148 × 210</td><td>165 × 240</td></tr>
</tbody></table>
<p>The smaller sizes in the course figure keep halving the long side:</p>
<table class="tbl"><thead><tr><th>Size</th><th>Trimmed (mm)</th></tr></thead><tbody>
<tr><td>A6</td><td>105 × 148</td></tr><tr><td>A7</td><td>74 × 105</td></tr><tr><td>A8</td><td>52 × 74</td></tr>
</tbody></table>`
        },
        {
          title: 'Sheet layout',
          html: `<figure data-fig="m3-sheet-layout"></figure>
<div class="kv"><div><span>Border</span><b>Outer boundary of the sheet</b></div><div><span>Inner frame</span><b>Defines the working area; inner frame offset 10 mm</b></div><div><span>Drawing area</span><b>Where the drawing is placed</b></div><div><span>Margins</span><b>Space for handling and filing: a = 30 mm on the binding edge, b = 20 mm on the others</b></div><div><span>Title block</span><b>170 × 65 mm, bottom right; holds the drawing details</b></div><div><span>Centre marks</span><b>For positioning and scanning</b></div><div><span>Trim marks</span><b>Show the final cut size</b></div><div><span>Zone references</span><b>Coordinates for locating details</b></div></div>
<div class="note heads-up"><p>The A3 layout figure on slide 16 uses smaller margins (20 mm on the filing side, 5 mm on the others). Use a = 30, b = 20 and the 170 × 65 title block (slide 18) unless your teacher says otherwise.</p></div>`
        },
        {
          title: 'Title block',
          html: `<p class="lead">The title block (170 × 65 mm) sits in the bottom-right corner of the drawing area.</p>
<table class="tbl"><thead><tr><th>Group</th><th>Fields</th></tr></thead><tbody>
<tr><td>Company info</td><td>Company or college name, department, logo, address</td></tr>
<tr><td>Drawing info</td><td>Title of drawing, subject, scale, dimension unit</td></tr>
<tr><td>Document info</td><td>Drawing number, sheet size, sheet "1 of 1", revision number and date</td></tr>
<tr><td>Personal info</td><td>Drawn by, checked by, approved by (name, date, signature)</td></tr>
<tr><td>Standards</td><td>Projection symbol, tolerance, material, BIS/ISO marks</td></tr>
</tbody></table>
<h4>Fields (a) to (q)</h4>
<table class="tbl"><thead><tr><th>Field</th><th>Holds</th><th>Field</th><th>Holds</th></tr></thead><tbody>
<tr><td>(a)</td><td>Company or college name</td><td>(i)</td><td>Checked by</td></tr>
<tr><td>(b)</td><td>Department</td><td>(j)</td><td>Approved by</td></tr>
<tr><td>(c)</td><td>Subject</td><td>(l)</td><td>Revision number</td></tr>
<tr><td>(d)</td><td>Title of drawing</td><td>(m)</td><td>Revision date</td></tr>
<tr><td>(e)</td><td>Drawing number</td><td>(n)</td><td>Sheet size, and sheet "1 of 1"</td></tr>
<tr><td>(f)</td><td>Scale</td><td>(o)</td><td><b>Projection symbol</b></td></tr>
<tr><td>(g)</td><td>Unit (mm)</td><td>(p)</td><td>Tolerance</td></tr>
<tr><td>(h)</td><td>Drawn by</td><td>(q)</td><td>Material</td></tr>
</tbody></table>
<p>The course figure labels the fields (a) to (j) and (l) to (q); no field (k) is shown. Sample entries are a machine bracket at scale 1:1, unit mm, revision "Rev. 00" in the format DD/MM/YYYY, sheet size A2, material MS steel.</p>
<h4>Projection symbol in the title block</h4>
<p>Field (o) holds the symbol of the method used: a <b>truncated cone with its circular end view</b>. For <b>first angle</b> (BIS) the circles are drawn on the right of the cone; for <b>third angle</b> on the left.</p>`
        },
        {
          title: 'Scales',
          html: `<div class="eq" data-label="Scale">Scale = drawing size : actual size</div>
<figure data-fig="m3-scale-demo"></figure>
<div data-viz="scale-calc"></div>
<table class="tbl"><thead><tr><th>Kind</th><th>Examples</th><th>Use</th></tr></thead><tbody>
<tr><td>Full size</td><td>1 : 1</td><td>Object fits comfortably on the sheet (a 50 × 30 plate)</td></tr>
<tr><td>Enlarged</td><td>2 : 1, 5 : 1</td><td>Small parts: an M3 screw at 2 : 1 (Ø6 drawn Ø12, 10 long drawn 20); a Ø8 gear at 5 : 1 (drawn Ø40). Shows fine detail such as teeth shape, hole size and concentric features</td></tr>
<tr><td>Reduced</td><td>1 : 2, 1 : 5, 1 : 10, 1 : 100</td><td>Large parts and buildings: a 1000 mm shaft at 1 : 10 is drawn 100 mm; a 20 000 mm house at 1 : 100 is drawn 200 mm</td></tr>
</tbody></table>
<table class="tbl"><thead><tr><th>Scale</th><th>Factor</th><th>When to use it</th><th>Example</th></tr></thead><tbody>
<tr><td>1 : 2</td><td>0.5</td><td>Object slightly larger than convenient sheet space</td><td>100 mm bracket drawn 50 mm</td></tr>
<tr><td>1 : 5</td><td>0.2</td><td>Medium to large components, saving space but keeping detail</td><td>250 mm plummer block base drawn 50 mm; Ø40 bore drawn Ø8</td></tr>
<tr><td>1 : 10</td><td>0.1</td><td>Large machine parts or long members that do not fit at full size</td><td>1000 mm shaft drawn 100 mm</td></tr>
<tr><td>1 : 100</td><td>0.01</td><td>Very large objects: buildings, sites, layouts</td><td>20 000 mm plan drawn 200 mm</td></tr>
<tr><td>5 : 1</td><td>5</td><td>Tiny parts where fine detail must be seen</td><td>Ø8 gear drawn Ø40</td></tr>
</tbody></table>
<div class="worked"><div class="given"><p>A plummer block base is 250 mm long. Draw it at 1 : 5.</p></div><div class="solve"><div class="eq">scale factor = 1/5 = 0.2</div><div class="eq">drawn length = 250 × 0.2 = 50 mm</div></div></div>
<div class="note heads-up"><p>The scale slides write the <b>drawn</b> length on the reduced drawing (e.g. 50 mm) to show the shrink. On a real drawing you always write the <b>true</b> size, whatever the scale, and state the scale in the title block.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Trimmed size of A0? Of A3?', back: 'A0: 841 × 1189 mm. A3: 297 × 420 mm.' },
        { front: 'How do you get A1 from A0?', back: 'Cut A0 in half across its long side: 594 × 841.' },
        { front: 'Ratio of the sides of any A sheet?', back: '1 : √2.' },
        { front: 'Margins of a sheet (slide 18)?', back: 'a = 30 mm on the filing edge, b = 20 mm on the other edges.' },
        { front: 'Size and place of the title block?', back: '170 × 65 mm, bottom-right corner.' },
        { front: 'Define scale.', back: 'Drawing size : actual size.' },
        { front: '1000 mm shaft at 1 : 10: drawn length?', back: '100 mm.' },
        { front: 'Ø8 gear at 5 : 1: drawn diameter?', back: '40 mm.' }
      ],
      oneLiners: [
        'A0 841 × 1189; halve the long side for each next size.',
        'a = 30 (filing edge), b = 20, title block 170 × 65.',
        'Scale = drawing : actual; write the true size anyway.'
      ],
      formulas: [
        { name: 'Scale', html: 'Scale = drawing size : actual size', note: '1 : 1 full, 2 : 1 enlarged, 1 : 2 reduced.' },
        { name: 'Drawn length', html: 'drawn length = actual length × scale factor', note: 'Write the true size on the drawing.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-cad',
      title: 'Drawing instruments and introduction to CAD',
      short: 'Instruments and CAD',
      blurb: 'The manual drafting instruments and what each is for, then manual drafting compared with CAD.',
      source: 'Lecture 1, slides 21–24',
      tabs: [
        {
          title: 'Instruments',
          html: `<table class="tbl"><thead><tr><th>Instrument</th><th>Used for</th></tr></thead><tbody>
<tr><td>Scale ruler</td><td>Measuring and reading scales (e.g. a 1 : 100 plan)</td></tr>
<tr><td>Compass</td><td>Circles and arcs (e.g. a 25 mm radius circle)</td></tr>
<tr><td>Dividers</td><td>Transferring measurements and stepping off equal distances</td></tr>
<tr><td>Set squares</td><td>45° set square: 45°, vertical and horizontal lines. 30°/60° set square: 30°, 60° and their complements</td></tr>
<tr><td>Protractor</td><td>Measuring and setting angles (e.g. a 75° line from a baseline)</td></tr>
<tr><td>T-square</td><td>Horizontal lines; slide it down for parallel lines; guide for set squares</td></tr>
<tr><td>Mini drafter</td><td>Parallel, perpendicular and angular lines efficiently (e.g. a neat orthographic view sheet)</td></tr>
<tr><td>French curves</td><td>Smooth irregular curves (airfoil, ergonomic profile)</td></tr>
<tr><td>Templates</td><td>Repeated standard shapes: circles, symbols</td></tr>
</tbody></table>
<p>Pencils: <b>HB for thick lines</b>, <b>2H for thin lines</b> (Lecture 2, slide 3).</p>`
        },
        {
          title: 'Manual vs CAD',
          html: `<p class="lead"><b>CAD</b> (computer-aided design/drafting) draws the same part on screen with software such as AutoCAD, SolidWorks, CATIA or Fusion 360.</p>
<table class="tbl"><thead><tr><th>Aspect</th><th>Manual</th><th>CAD</th></tr></thead><tbody>
<tr><td>Tools</td><td>Manual instruments</td><td>Computer and software</td></tr>
<tr><td>Speed</td><td>Slower</td><td>Faster</td></tr>
<tr><td>Accuracy</td><td>Moderate, skill-based</td><td>High, software-assisted</td></tr>
<tr><td>Modifications</td><td>Difficult</td><td>Easy</td></tr>
<tr><td>Storage</td><td>Physical sheets</td><td>Digital files</td></tr>
<tr><td>Collaboration</td><td>Limited</td><td>Easy sharing and teamwork</td></tr>
<tr><td>Repetition</td><td>Time-consuming</td><td>Quick copy and reuse</td></tr>
<tr><td>Industry use</td><td>Limited today</td><td>Widely used</td></tr>
</tbody></table>
<div class="vs"><div class="side"><h4>Manual drafting</h4><ul><li>Done on drawing sheets with instruments</li><li>Corrections take more time</li><li>Accuracy depends strongly on user skill</li><li>Repetition and copying are difficult</li><li>Good for learning fundamentals and visualisation</li><li>Output: paper drawings</li></ul></div><div class="side"><h4>CAD</h4><ul><li>Software such as AutoCAD, SolidWorks, CATIA, Fusion 360</li><li>Faster editing, duplication and revision</li><li>Higher precision and standardisation</li><li>Easy storage, sharing, scaling and printing</li><li>2D drafting and 3D modelling</li><li>Output: digital files, PDFs, CNC-ready data</li></ul></div></div>`
        },
        {
          title: 'What CAD adds',
          html: `<ul><li>Faster editing, duplication and revision.</li><li>Higher precision and standardisation.</li><li>Easy storage, sharing, scaling and printing.</li><li>Supports <b>2D drafting and 3D modelling</b>; tools such as <b>layers</b> and a <b>grid</b>.</li><li>Outputs: digital files, PDFs, <b>CNC-ready data</b>.</li></ul>
<div class="note why"><p>Key takeaway: traditional drafting builds core drawing skills, while modern drafting improves speed, accuracy, revision control and industrial productivity. The standards (lines, projection, dimensioning) are the same in both.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Which instrument steps off equal distances?', back: 'Dividers.' },
        { front: 'Angles available with the two set squares?', back: '45° set square: 45°; 30°/60° set square: 30° and 60° (plus vertical and horizontal lines).' },
        { front: 'What is a French curve for?', back: 'Drawing smooth irregular curves.' },
        { front: 'Pencil grades for thick and thin lines?', back: 'HB thick, 2H thin.' },
        { front: 'Name four CAD packages from the slides.', back: 'AutoCAD, SolidWorks, CATIA, Fusion 360.' },
        { front: 'What is the mini drafter used for?', back: 'Drawing parallel, perpendicular and angular lines efficiently, e.g. a neat orthographic view sheet.' },
        { front: 'Key takeaway: manual drafting vs CAD?', back: 'Manual drafting builds core skills; CAD improves speed, accuracy, revision control and productivity.' },
        { front: 'Two advantages of CAD over manual drafting.', back: 'Easy modification and quick reuse; also digital storage, sharing, CNC-ready output.' }
      ],
      oneLiners: [
        'Dividers transfer distances; compass draws arcs; T-square for horizontals.',
        'CAD: faster, easier changes, digital, 2D + 3D, CNC-ready.',
        'HB pencil for thick lines, 2H for thin.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm3-sheet-sizes', src: 'm3/pages/l1-16.png', crop: null, caption: 'A-series sheets: each size is the previous one halved across its long side.', alt: 'A0 sheet divided into A1, A2, A3, A4 and A5 with a table of trimmed sizes.' },
    { id: 'm3-sheet-layout', src: 'm3/pages/l1-18.png', crop: null, caption: 'Layout of an A2 sheet: 30 mm filing margin, 20 mm other margins, 170 × 65 title block at bottom right.', alt: 'A2 sheet with inner frame, margins a and b, and a title block in the bottom-right corner.' },
    { id: 'm3-scale-demo', src: 'm3/pages/l1-20.png', crop: null, caption: 'Reduced scale 1 : 2: every length on the drawing is half the real length.', alt: 'An L bracket drawn at full size and at half size with 100 and 50 dimension lines.' }
  ]
});
