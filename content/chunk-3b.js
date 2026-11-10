CHUNK({
  chunk: '3b',
  module: 'm3',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm3-lines',
      title: 'BIS line types and line weights',
      short: 'Lines (IS 10714)',
      blurb: 'The IS 10714 line types A to K and where each is used, thick and thin line widths, and which line wins when two coincide.',
      source: 'Lecture 1, slides 7–14; Lecture 2, slides 2–5 (section views: Lecture 1, slide 9)',
      tabs: [
        {
          title: 'Line types',
          html: `<p class="lead">Every line on a drawing has a meaning. BIS lists them in <b>IS 10714</b>, each with a letter.</p>
<figure data-fig="m3-line-types"></figure>
<table class="tbl"><thead><tr><th>Line</th><th>Type</th><th>Main uses</th></tr></thead><tbody>
<tr><td>A</td><td>Continuous thick</td><td>Visible outlines and edges, lines of cuts and section arrows. Also crests of screw threads, limits of length of full-depth thread, parting lines of moulds in views, main representations in diagrams, maps and flow charts, system lines in structural metal engineering</td></tr>
<tr><td>B</td><td>Continuous thin (straight or curved)</td><td>Dimension, extension, projection and leader lines, hatching, imaginary lines of intersection, short centre lines, outlines of revolved sections. Also grid and reference lines, root of screw threads, interpretation lines of tapered features, framing of details, indication of repetitive details</td></tr>
<tr><td>C</td><td>Continuous thin freehand</td><td>Limits of partial or interrupted views and sections</td></tr>
<tr><td>D</td><td>Continuous thin with zigzags</td><td>Long-break line</td></tr>
<tr><td>E</td><td>Dashed thick</td><td>Permissible surface treatment</td></tr>
<tr><td>F</td><td>Dashed thin</td><td>Hidden outlines and hidden edges</td></tr>
<tr><td>G</td><td>Chain thin (long dash, dot)</td><td>Centre lines, lines of symmetry, trajectories, pitch circle of gears and holes</td></tr>
<tr><td>H</td><td>Chain thin, thick at the ends and at changes of direction</td><td>Cutting planes</td></tr>
<tr><td>J</td><td>Chain thick</td><td>Lines or surfaces to which a special requirement applies</td></tr>
<tr><td>K</td><td>Chain thin double-dashed</td><td>Outlines of adjacent parts, alternative and extreme positions of movable parts, centroidal lines, initial outlines before forming, parts in front of the cutting plane</td></tr>
</tbody></table>
<div class="note heads-up"><p>The Lecture 1 slides letter these lines differently (slide 7 calls hidden lines type C/D and the cutting plane type J; slide 12 adds an "I"). This table follows Lecture 2 and IS 10714 (letters A–K, no I). In the exam, learn the <b>appearance and use</b>; quote the letter as your teacher taught it.</p></div>
<div class="note heads-up"><p>Two of the Lecture 1 line tables letter the chain lines differently from Lecture 2 and IS 10714. They give <b>I</b> = chain thick and <b>J</b> = chain thick double-dashed. The standard (and Lecture 2) is <b>J</b> = chain thick and <b>K</b> = chain <b>thin</b> double-dashed. Use J and K as in the table above; the double-dashed line is thin.</p></div>`
        },
        {
          title: 'Applications',
          html: `<p class="lead">Four families of line cover most of a drawing. Pick the line by what the feature is.</p>
<table class="tbl"><thead><tr><th>Line</th><th>Applications</th></tr></thead><tbody>
<tr><td><b>Thick continuous</b></td><td>Visible outlines, visible edges, principal profiles, boundary of a sectioned area</td></tr>
<tr><td><b>Thin continuous</b></td><td>Dimension lines, extension and projection lines, leader lines, hatching (section lines), construction lines</td></tr>
<tr><td><b>Thin dashed</b></td><td>Hidden edges, hidden outlines, invisible internal details</td></tr>
<tr><td><b>Thin chain</b></td><td>Centre lines, axes of symmetry, pitch circles, trajectories</td></tr>
<tr><td><b>Thick chain</b></td><td>Cutting planes, special-surface indication</td></tr>
</tbody></table>
<div class="note why"><p>Takeaway: choose the correct line type to communicate shape, size, hidden details and section information. A hidden hole drawn as a continuous line reads as a solid edge.</p></div>
<div class="note heads-up"><p>This card draws the cutting plane as a <b>thick chain</b> line with arrows. In IS 10714 the cutting plane (H) is thin chain, thick at the ends and at changes of direction, which is what the Line types table shows.</p></div>`
        },
        {
          title: 'On a part',
          html: `<figure data-fig="m3-lines-demo"></figure>
<ul><li><b>Outline (A)</b>: every edge you can see.</li><li><b>Hidden (F)</b>: the blind hole in the base is behind the front face, so its edges are dashed.</li><li><b>Centre lines (G)</b> cross at the centre of every hole and run a little past the outline.</li><li><b>Extension and dimension lines (B)</b> carry the size; the <b>leader</b> points to the hole and carries the note Ø10.</li><li><b>Cutting-plane line (H)</b>: chain thin, thick at the ends, with the letter P and an arrow at each end showing the direction of viewing.</li><li><b>Section lines</b>: the thin hatching (B) drawn on the material the cutting plane has passed through.</li></ul>
<p>Other lines from the slides: a <b>short-break</b> line (thin freehand) ends a partial view; a <b>long-break</b> line (zigzag) shortens a long uniform part; a <b>locus line</b> (chain thin double-dashed) shows the extreme positions of a moving part.</p>`
        },
        {
          title: 'Section views',
          html: `<p class="lead">A <b>section looks inside an object</b>. It is used to show the interior construction of a part that hidden lines in the outside views cannot describe clearly.</p>
<ol class="steps"><li><b>Take an imaginary cut</b> through the object along a <b>cutting plane</b>.</li><li><b>Remove</b> a portion of the object.</li><li>Draw what is left: the inside features now show as visible edges, and the <b>cut material</b> is hatched.</li><li><b>Mark it</b>: the cutting plane is shown in an outside view by a cutting-plane line with arrows and letters, and the sectional view is labelled <b>SECTION A–A</b>.</li></ol>
<div class="kv"><div><span>Cutting plane</span><b>The imaginary plane of the cut</b></div><div><span>Cut material</span><b>Shown by section lines (hatching): thin lines at 45°, evenly spaced</b></div><div><span>Section label</span><b>SECTION A–A, matching the letters at the ends of the cutting-plane line</b></div></div>
<div class="note why"><p>Hidden lines get confusing when a part has many internal steps and holes. A section replaces a tangle of dashes with clean outlines and a hatched cut face.</p></div>`
        },
        {
          title: 'Line weights',
          html: `<p class="lead">Lines come in two main thicknesses: <b>thick : thin = 2 : 1</b>.</p>
<table class="tbl"><thead><tr><th>Group</th><th>Ratio</th><th>A0</th><th>A1</th><th>A3</th></tr></thead><tbody>
<tr><td>Thick</td><td>1</td><td>1.0</td><td>0.7</td><td>0.5</td></tr>
<tr><td>Medium</td><td>0.7</td><td>0.7</td><td>0.5</td><td>0.35</td></tr>
<tr><td>Thin</td><td>0.5</td><td>0.5</td><td>0.35</td><td>0.25</td></tr>
<tr><td>Ultra-thin</td><td>0.25</td><td>0.25</td><td>0.18</td><td>0.13</td></tr>
</tbody></table>
<p>Widths in mm (Lecture 1, slide 8). With pencils: <b>HB for thick lines, 2H for thin lines</b>.</p>
<h4>The four weight groups and their uses</h4>
<table class="tbl"><thead><tr><th>Group</th><th>Width</th><th>Used for</th></tr></thead><tbody>
<tr><td>1 Thick</td><td><b>0.7 mm</b></td><td>Visible object lines, outlines, border</td></tr>
<tr><td>2 Medium</td><td><b>0.5 mm</b></td><td>Dimension lines, leader lines, cutting planes</td></tr>
<tr><td>3 Thin</td><td><b>0.35 mm</b></td><td>Hidden lines, centre lines, projection lines, sectional hatching, imaginary lines</td></tr>
<tr><td>4 Ultra-thin</td><td><b>0.18 mm</b></td><td>Hatching, break lines, fill lines</td></tr>
</tbody></table>
<p>A second card keeps only three groups: thick 0.7 mm for visible edges and principal outlines; medium 0.5 mm for hidden edges or emphasis where the drawing practice asks for it; thin 0.35 mm for centre lines, section lines, dimension lines, leader lines and construction lines.</p>
<h4>Good practice</h4>
<ul><li>Maintain a clear thickness ratio.</li><li>Use only the line weights the drawing needs.</li><li>Keep line usage consistent throughout the drawing.</li></ul>
<div class="note heads-up"><p>The slides quote several sets of widths (0.7/0.35, 0.5/0.25, and 0.7/0.5/0.35/0.18). They agree on the rule: visible outlines thick, everything else thin, thick about twice thin. Minimum space between parallel lines: 0.7 mm.</p></div>
<div class="note heads-up"><p>One revision sheet gives the thick-line width by sheet size as A0 1.0, A1 0.7, A2 0.5, A3 0.35 mm. The weight table above gives A3 thick as <b>0.5</b> and thin as 0.25, so the two disagree for A3. Another sheet says thick 0.5 and thin 0.25 for lines A, E, I, J and B, C, D, F, G, H. Use the weight table (A0 1.0, A1 0.7, A3 0.5 thick; thick : thin = 2 : 1) unless your teacher gives a different set. The weight chart also puts hidden lines in the thin group (0.35 mm), while a second card puts them at 0.5 mm; either way a hidden line is drawn lighter than a visible one.</p></div>`
        },
        {
          title: 'Precedence',
          html: `<p class="lead">When two lines fall in the same place, draw only the more important one.</p>
<ol><li><b>Visible outline</b> (thick)</li><li><b>Hidden line</b></li><li><b>Cutting plane line</b></li><li><b>Centre line</b></li><li>Dimension, extension, leader lines and hatching</li></ol>
<div class="kv"><div><span>Visible vs hidden</span><b>Draw the visible line</b></div><div><span>Hidden vs centre</span><b>Draw the hidden line</b></div><div><span>Visible vs centre</span><b>Draw the visible line</b></div></div>
<h4>Good practice</h4>
<ul><li>All lines sharp and dense; dash and dot spacing uniform.</li><li>Centre lines and lines of symmetry extend slightly beyond the outline.</li><li>Section hatching: thin lines at <b>45°</b>, evenly spaced (about 2–3 mm apart).</li><li>First decide which features are visible, hidden or symmetric, then pick the line.</li></ul>`
        }
      ],
      flashcards: [
        { front: 'Line for visible outlines?', back: 'A: continuous thick.' },
        { front: 'Line for hidden edges?', back: 'Dashed thin (F in IS 10714).' },
        { front: 'Line for centre lines and symmetry?', back: 'Chain thin, long dash and dot (G).' },
        { front: 'Line for a cutting plane?', back: 'Chain thin, thick at the ends and at changes of direction (H).' },
        { front: 'Which lines are continuous thin (B)?', back: 'Dimension, extension, projection, leader lines and hatching (plus imaginary intersections, short centre lines).' },
        { front: 'Long-break line?', back: 'Continuous thin with zigzags (D).' },
        { front: 'Chain thin double-dashed (K) is used for?', back: 'Adjacent parts, extreme positions of moving parts, centroidal lines.' },
        { front: 'Ratio of thick to thin line width?', back: '2 : 1 (e.g. 0.7 and 0.35 mm).' },
        { front: 'Order of precedence when lines coincide?', back: 'Visible > hidden > cutting plane > centre line > dimension/extension.' },
        { front: 'At what angle is section hatching drawn?', back: '45°, thin lines, evenly spaced.' },
        { front: 'What is a section view?', back: 'A view that looks inside an object, made by an imaginary cut along a cutting plane with the front portion removed; the cut material is hatched and the view is labelled SECTION A–A.' },
        { front: 'The four BIS line-weight groups?', back: 'Thick 0.7, medium 0.5, thin 0.35, ultra-thin 0.18 mm.' }
      ],
      oneLiners: [
        'Visible = thick continuous; hidden = thin dashed; centre = thin chain.',
        'Cutting plane = thin chain, thick at ends and bends.',
        'Thick : thin = 2 : 1; HB thick, 2H thin.',
        'Precedence: visible, hidden, cutting plane, centre.',
        'Section = imaginary cut; cut face hatched; labelled SECTION A–A.',
        'Weights: 0.7 thick, 0.5 medium, 0.35 thin, 0.18 ultra-thin.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-lettering-dim',
      title: 'Lettering and dimensioning',
      short: 'Lettering, dimensions',
      blurb: 'Letter sizes for titles, notes and drawing numbers, the elements of a dimension, and the aligned and unidirectional systems.',
      source: 'Lecture 2, slides 6–10',
      tabs: [
        {
          title: 'Lettering',
          html: `<p class="lead">Lettering is generally done in <b>capital letters</b>. Different sizes are used for different purposes.</p>
<table class="tbl"><thead><tr><th>Item</th><th>Letter height</th></tr></thead><tbody>
<tr><td>Main titles</td><td>6–8 mm</td></tr>
<tr><td>Sub-titles</td><td>3–6 mm</td></tr>
<tr><td>Notes, dimension figures</td><td>3–5 mm</td></tr>
<tr><td>Drawing number in the title block</td><td>10–12 mm</td></tr>
</tbody></table>
<p>In the lettering chart, the <b>capital letters and the numerals have height h</b>. For lower-case letters of height <em>h</em>, the body takes <b>0.7h</b> and the ascender or descender <b>0.3h</b>. The chart also shows the numerals 0 to 9, a degree sign and a double-quote mark, with optional alternative forms of 3 and 4.</p>`
        },
        {
          title: 'Elements of a dimension',
          html: `<div class="kv"><div><span>Extension line</span><b>Thin line from the feature, leaving a small gap and running a little past the dimension line</b></div><div><span>Dimension line</span><b>Thin line with arrowheads, parallel to the length it measures</b></div><div><span>Arrowhead</span><b>Ends the dimension line, touching the extension line</b></div><div><span>Dimension figure</span><b>The size, in mm (no unit written)</b></div><div><span>Leader</span><b>Thin line from a note to the feature, ending in an arrowhead</b></div><div><span>Note</span><b>Text such as "2 HOLES, Ø12"</b></div></div>
<p>All of these are thin continuous lines (type B). The figure under <b>Lines on a part</b> shows them on a part.</p>`
        },
        {
          title: 'Aligned vs unidirectional',
          html: `<figure data-fig="m3-dim-systems"></figure>
<div class="vs"><div class="side"><h4>Aligned system</h4><p>Figures are placed <b>above the dimension line</b>, parallel to it, and read from the <b>bottom or the right side</b> of the sheet. Generally recommended.</p></div><div class="side"><h4>Unidirectional system</h4><p>All figures are <b>horizontal</b>, read from the bottom of the sheet; the dimension line is <b>broken</b> in the middle to take the figure.</p></div></div>
<div class="note heads-up"><p>The course figure ticks the correct form and crosses the wrong ones. In the <b>aligned</b> system it crosses three: a horizontal figure written <b>below</b> its horizontal dimension line; a vertical figure on the <b>right</b> of its vertical line; and a figure left <b>unrotated</b> (horizontal) beside a vertical line. The tick goes to the horizontal figure above its line and the vertical figure on the <b>left</b> of its line, turned to read upwards (from the right of the sheet).</p><p>In the <b>unidirectional</b> system it ticks the horizontal figure in a break of the dimension line, including on a vertical line, and crosses the figure that is turned to run along a vertical line.</p></div>`
        },
        {
          title: 'A dimensioned plate',
          html: `<p class="lead">The course dimensions one plate in both systems. The sizes are the same; only where and how the figures are written changes.</p>
<table class="tbl"><thead><tr><th>Feature</th><th>Dimension</th></tr></thead><tbody>
<tr><td>Plate width</td><td><b>50</b> overall</td></tr>
<tr><td>Plate height</td><td><b>60</b> overall</td></tr>
<tr><td>Hole</td><td><b>Ø16</b> by leader; centre <b>20</b> from the left edge and <b>30</b> up from the bottom</td></tr>
<tr><td>Notch on the right edge</td><td><b>10</b> deep from the right edge, <b>28</b> high, starting <b>16</b> up from the bottom</td></tr>
<tr><td>Large arc (separate view)</td><td><b>80</b>, a diameter dimension line through the centre mark</td></tr>
</tbody></table>
<table class="tbl"><thead><tr><th>Figure</th><th>Aligned system</th><th>Unidirectional system</th></tr></thead><tbody>
<tr><td>Horizontal sizes (20, 10, 50)</td><td>Above the dimension line</td><td>Horizontal, in a break of the line</td></tr>
<tr><td>Vertical sizes (30, 28, 16, 60)</td><td>Left of the line, turned to read from the right</td><td>Horizontal, in a break of the line</td></tr>
<tr><td>Diameter 80</td><td>Along the dimension line</td><td>Horizontal</td></tr>
</tbody></table>
<div class="note exam"><p>The 16 + 28 + 16 on the right edge add up to the overall 60. When you dimension a chain of sizes, check that they sum to the overall size.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Letter height for main titles? For notes?', back: 'Titles 6–8 mm; notes and dimension figures 3–5 mm.' },
        { front: 'Letter height of the drawing number in the title block?', back: '10–12 mm.' },
        { front: 'Lettering case on engineering drawings?', back: 'Generally capital letters.' },
        { front: 'Name the elements of a dimension.', back: 'Extension line, dimension line, arrowheads, dimension figure; leader and note for features.' },
        { front: 'Aligned system: where is the figure and how is it read?', back: 'Above and parallel to the dimension line; read from the bottom or the right side.' },
        { front: 'Unidirectional system?', back: 'All figures horizontal, read from the bottom, in a break in the dimension line.' },
        { front: 'Which dimensioning system is generally recommended?', back: 'The aligned system.' },
        { front: 'Aligned system: which figure placements are wrong?', back: 'A horizontal figure below its line; a vertical figure on the right of its line; an unrotated figure beside a vertical line.' },
        { front: 'Height of capitals and numerals in the lettering chart?', back: 'h. Lower-case: body 0.7h, ascender or descender 0.3h.' }
      ],
      oneLiners: [
        'Titles 6–8, sub-titles 3–6, notes 3–5, drawing number 10–12 mm.',
        'Aligned: above the line, read from bottom or right.',
        'Unidirectional: always horizontal, line broken.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm3-line-types', src: 'm3/pages/l2-02.png', crop: null, caption: 'IS 10714 line types A to K with their main use.', alt: 'Ten sample lines: thick, thin, freehand, zigzag, dashed thick and thin, chain thin, cutting plane, chain thick, double-dashed.' },
    { id: 'm3-lines-demo', src: 'm3/pages/l2-04.png', crop: null, caption: 'Outline, hidden, centre, extension, dimension and leader lines on one part, with the cutting-plane line (P arrows) and section lines (hatching); the hole is Ø10.', alt: 'Front view of a stepped block with a hole, hidden blind hole, centre lines, a 90 dimension, a Ø10 leader, a chain cutting-plane line with P arrows at both ends and a small hatched block for section lines.' },
    { id: 'm3-dim-systems', src: 'm3/pages/l2-08.png', crop: null, caption: 'The same 50 × 30 plate dimensioned in the aligned and the unidirectional system.', alt: 'Two rectangles; left with figures parallel to dimension lines, right with horizontal figures in broken dimension lines.' }
  ]
});
