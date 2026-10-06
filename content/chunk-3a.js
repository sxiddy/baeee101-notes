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
<tr><td>Time</td><td>Minutes (2–15 min)</td><td>Hours or days</td></tr>
<tr><td>Legal document?</td><td>No</td><td>Yes (binding agreement)</td></tr>
<tr><td>Skill</td><td>Basic drawing skill</td><td>Professional drafting standards</td></tr>
</tbody></table>
<p>A sketch is a quickly executed freehand drawing that is <b>not</b> meant to be a drawing of the finished part.</p>`
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
<tr><td>Projection</td><td>Third angle</td><td>First or third, by country</td><td><b>First angle</b></td></tr>
<tr><td>Units</td><td>Inches</td><td>mm</td><td>mm</td></tr>
<tr><td>Sheet sizes</td><td>ASME Y14.1</td><td>ISO 5457 (A0–A5)</td><td><b>IS 10711:2001</b></td></tr>
<tr><td>Lines</td><td>ASME Y14.2</td><td>ISO 128-20</td><td><b>IS 10714</b></td></tr>
<tr><td>Dimensioning</td><td>ASME Y14.5</td><td>ISO 129</td><td>IS 11669</td></tr>
</tbody></table>
<p>Why standards help: fewer reading, manufacturing and inspection mistakes; international communication; uniform conventions; legal and contract clarity; better efficiency and quality; lower errors and cost.</p>
<div class="note heads-up"><p>The source slide gives the ISO sheet standard as ISO 5455. ISO 5455 is about <b>scales</b>; sheet sizes and layout are ISO 5457 (with ISO 216 for the A sizes). BIS is the national standards body of India and its use is mandatory in government projects.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Define an engineering drawing.', back: 'A technical drawing that fully and clearly defines the requirements for an engineered part or system.' },
        { front: 'Sketch vs engineering drawing: which is a legal document?', back: 'The engineering drawing (a binding agreement); a sketch is not.' },
        { front: 'What does an engineering drawing give the manufacturer?', back: 'Shape description, dimensions, tolerancing, annotations, parts list: everything needed to make and inspect the part.' },
        { front: 'Which projection does BIS use? ASME?', back: 'BIS: first angle. ASME: third angle.' },
        { front: 'BIS standard for lines? For sheet sizes?', back: 'Lines: IS 10714. Sheets: IS 10711:2001.' },
        { front: 'What is tolerancing?', back: 'Specifying the allowable deviation from a dimension.' },
        { front: 'What are standards in drawing?', back: 'A set of rules controlling how an engineering drawing is presented.' }
      ],
      oneLiners: [
        'Sketch = idea, freehand, not legal; drawing = finished design, exact, legal.',
        'BIS = first angle, mm; ASME = third angle, inches.',
        'IS 10711 sheets, IS 10714 lines, IS 11669 dimensioning.'
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
</tbody></table>`
        },
        {
          title: 'Sheet layout',
          html: `<figure data-fig="m3-sheet-layout"></figure>
<div class="kv"><div><span>Border</span><b>Outer boundary of the sheet</b></div><div><span>Inner frame</span><b>Defines the working area</b></div><div><span>Margins</span><b>Space for handling and filing: a = 30 mm on the binding edge, b = 20 mm on the others</b></div><div><span>Title block</span><b>170 × 65 mm, bottom right; holds the drawing details</b></div><div><span>Centre marks</span><b>For positioning and scanning</b></div><div><span>Trim marks</span><b>Show the final cut size</b></div><div><span>Zone references</span><b>Coordinates for locating details</b></div></div>
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
</tbody></table>`
        },
        {
          title: 'Scales',
          html: `<div class="eq" data-label="Scale">Scale = drawing size : actual size</div>
<figure data-fig="m3-scale-demo"></figure>
<table class="tbl"><thead><tr><th>Kind</th><th>Examples</th><th>Use</th></tr></thead><tbody>
<tr><td>Full size</td><td>1 : 1</td><td>Object fits comfortably on the sheet (a 50 × 30 plate)</td></tr>
<tr><td>Enlarged</td><td>2 : 1, 5 : 1</td><td>Small parts: an M3 screw at 2 : 1, a Ø8 gear at 5 : 1 (drawn Ø40)</td></tr>
<tr><td>Reduced</td><td>1 : 2, 1 : 5, 1 : 10, 1 : 100</td><td>Large parts and buildings: a 1000 mm shaft at 1 : 10 is drawn 100 mm; a 20 000 mm house at 1 : 100 is drawn 200 mm</td></tr>
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
<tr><td>Mini drafter</td><td>Parallel, perpendicular and angled lines quickly</td></tr>
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
</tbody></table>`
        },
        {
          title: 'What CAD adds',
          html: `<ul><li>Faster editing, duplication and revision.</li><li>Higher precision and standardisation.</li><li>Easy storage, sharing, scaling and printing.</li><li>Supports <b>2D drafting and 3D modelling</b>; tools such as <b>layers</b> and a <b>grid</b>.</li><li>Outputs: digital files, PDFs, <b>CNC-ready data</b>.</li></ul>
<div class="note why"><p>Manual drafting builds the core skills and visualisation; CAD improves speed, accuracy, revision control and productivity. The standards (lines, projection, dimensioning) are the same in both.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Which instrument steps off equal distances?', back: 'Dividers.' },
        { front: 'Angles available with the two set squares?', back: '45° set square: 45°; 30°/60° set square: 30° and 60° (plus vertical and horizontal lines).' },
        { front: 'What is a French curve for?', back: 'Drawing smooth irregular curves.' },
        { front: 'Pencil grades for thick and thin lines?', back: 'HB thick, 2H thin.' },
        { front: 'Name four CAD packages from the slides.', back: 'AutoCAD, SolidWorks, CATIA, Fusion 360.' },
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
