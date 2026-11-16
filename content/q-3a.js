QUESTIONS({
  chunk: '3a',
  questions: [
    {
      id: 'm3-3a-01', module: 'm3', topic: 'm3-intro', type: 'decide', level: 1,
      q: `<p>A designer has a rough freehand drawing of a new bracket made in five minutes in a team meeting. A vendor asks for "the drawing" so they can quote and make 500 pieces. What should be sent?</p>`,
      options: ['The freehand sketch, since it shows the shape', 'A full engineering drawing with all views, dimensions, tolerances and notes', 'A photo of a 3-D printed sample', 'A written description of the bracket'],
      correct: 1,
      answer: `<p><b>A full engineering drawing.</b> A sketch only captures an idea; the vendor needs exact dimensions and tolerances, and the drawing is the binding document.</p>`,
      explain: `<p>A sketch is quick, freehand and approximate, made for the designer and the team. An engineering drawing communicates a finished design with precise dimensions, tolerancing, annotations and a parts list, and it acts as a legal (binding) document for manufacturing and quality control.</p>`,
      points: ['Sketch: idea, approximate, not legal', 'Drawing: exact dimensions, tolerances, notes', 'Vendor and QC work to the drawing', 'Drawing is a binding agreement']
    },
    {
      id: 'm3-3a-02', module: 'm3', topic: 'm3-intro', type: 'troubleshoot', level: 2,
      q: `<p>An Indian firm receives a drawing from a US supplier and machines the part. The side features come out on the wrong side, and a 2.5 dimension turns out to be 2.5 inches, not mm. What two differences between the standards caused this?</p>`,
      options: null, correct: null,
      answer: `<p><b>ASME drawings use third angle projection and inches; BIS drawings use first angle projection and millimetres.</b></p>`,
      explain: `<p>Read in first angle, a third angle drawing puts the side views on the wrong sides, so features appear mirrored. ASME also measures in inches (imperial), while BIS and ISO use mm. The projection symbol in the title block and the unit field would have warned the shop.</p>`,
      points: ['ASME: third angle, inches', 'BIS: first angle, mm', 'Check the projection symbol and unit in the title block']
    },
    {
      id: 'm3-3a-03', module: 'm3', topic: 'm3-sheets', type: 'numerical', level: 1,
      q: `<p>A shaft is 1000 mm long and 40 mm in diameter. It must fit on a sheet at 1 : 10. What length and diameter are drawn, and what is written on the dimensions?</p>`,
      options: null, correct: null,
      answer: `<p><b>Drawn 100 mm long and 4 mm in diameter; the dimensions still read 1000 and Ø40.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>Scale 1 : 10, so scale factor = 0.1.</p></div><div class="solve"><div class="eq">drawn length = 1000 × 0.1 = 100 mm</div><div class="eq">drawn diameter = 40 × 0.1 = 4 mm</div></div></div><p>The scale changes only the size of the picture. The figures written on the dimension lines are the true sizes, and the title block states the scale.</p>`,
      points: ['Scale = drawing size : actual size', 'Factor 0.1 for 1 : 10', '100 mm and 4 mm drawn', 'True sizes written']
    },
    {
      id: 'm3-3a-04', module: 'm3', topic: 'm3-sheets', type: 'decide', level: 1,
      q: `<p>A watch gear is 8 mm across. You want its teeth clear enough to dimension. Which scale do you choose?</p>`,
      options: ['1 : 5', '1 : 1', '5 : 1', '1 : 100'],
      correct: 2,
      answer: `<p><b>5 : 1 (enlarged).</b> The gear is drawn 40 mm across.</p>`,
      explain: `<p>Scale = drawing size : actual size, so an enlarged scale puts the bigger number first. At 5 : 1 the 8 mm gear is drawn 8 × 5 = 40 mm, large enough to show the teeth and the hole. 1 : 5 and 1 : 100 would shrink it further.</p>`,
      points: ['Enlarged scales: 2 : 1, 5 : 1', '8 × 5 = 40 mm drawn', 'Reduced scales put 1 first']
    },
    {
      id: 'm3-3a-05', module: 'm3', topic: 'm3-sheets', type: 'predict', level: 2,
      q: `<p>An A2 sheet (420 × 594) is folded in half across its long side. What size do you get, and what happens if you fold that again the same way?</p>`,
      options: ['297 × 420 (A3), then 210 × 297 (A4)', '420 × 297 (A1), then 594 × 841', '210 × 594, then 105 × 594', '297 × 594 (A3), then 148 × 297'],
      correct: 0,
      answer: `<p><b>A3 (297 × 420), then A4 (210 × 297).</b></p>`,
      explain: `<p>Each A size is the previous one halved across its long side: 594 / 2 = 297, giving 297 × 420. Halving 420 gives 210 × 297. Every A sheet keeps sides in the ratio 1 : √2, which is why halving gives the same shape.</p>`,
      points: ['Halve the long side', 'A2 → A3 → A4', 'Sides in ratio 1 : √2']
    },
    {
      id: 'm3-3a-06', module: 'm3', topic: 'm3-sheets', type: 'troubleshoot', level: 2,
      q: `<p>Drawings returned from filing have holes punched through part of the views on the left edge, and the title block is hard to find on the folded sheets. What layout rules were broken?</p>`,
      options: null, correct: null,
      answer: `<p><b>The 30 mm filing margin on the binding edge was not left, and the title block was not in the bottom-right corner.</b></p>`,
      explain: `<p>The sheet layout keeps a margin a = 30 mm on the filing (binding) edge and b = 20 mm on the other edges, so punching and handling never reach the drawing area. The 170 × 65 title block goes in the bottom-right corner of the drawing area, where it is found the same way on every sheet.</p>`,
      points: ['a = 30 mm on the filing edge', 'b = 20 mm on the other edges', 'Title block 170 × 65, bottom right']
    },
    {
      id: 'm3-3a-07', module: 'm3', topic: 'm3-cad', type: 'decide', level: 1,
      q: `<p>A student must mark six holes at exactly equal spacing along a line on a manual drawing. Which instrument does the job best?</p>`,
      options: ['Compass', 'Dividers', 'French curve', 'Protractor'],
      correct: 1,
      answer: `<p><b>Dividers.</b> They transfer a measurement and step off equal distances.</p>`,
      explain: `<p>Dividers are made for transferring measurements and stepping off equal distances. A compass draws circles and arcs, a French curve draws smooth irregular curves, and a protractor sets angles.</p>`,
      points: ['Dividers: equal spacing, transfer lengths', 'Compass: circles and arcs', 'Protractor: angles']
    },
    {
      id: 'm3-3a-08', module: 'm3', topic: 'm3-cad', type: 'explain', level: 2,
      q: `<p>A company redesigns a bracket ten times during a project and then sends it straight to a CNC machine. Explain why it drafts in CAD rather than by hand.</p>`,
      options: null, correct: null,
      answer: `<p><b>CAD makes repeated changes quick and accurate and produces CNC-ready data directly.</b></p>`,
      explain: `<p>In manual drafting, modifications are difficult and repetition is time-consuming. CAD allows fast editing, duplication and revision, keeps high software-assisted accuracy, stores digital files that are easy to share, and outputs PDFs and CNC-ready data. The drawing standards stay the same either way.</p>`,
      points: ['Modifications easy in CAD, hard by hand', 'Quick copy and reuse', 'Digital storage and sharing', 'CNC-ready output']
    },
    {
      id: 'm3-3a-09', module: 'm3', topic: 'm3-lines', type: 'interpret', level: 1,
      q: `<p>On a drawing you see a thin line made of long dashes with single dots between them, running through the middle of a circle and a little beyond it. What does it tell you?</p>`,
      options: ['A hidden edge', 'A centre line: the axis or symmetry of the hole', 'A cutting plane', 'The outline of an adjacent part'],
      correct: 1,
      answer: `<p><b>A centre line (chain thin):</b> the axis of the hole or a line of symmetry.</p>`,
      explain: `<p>Chain thin (long dash, dot) marks centre lines, lines of symmetry, trajectories and pitch circles. Centre lines extend slightly beyond the outline. A hidden edge is dashed thin, a cutting plane is chain thin with thick ends, and adjacent parts use chain thin double-dashed lines.</p>`,
      points: ['Chain thin = centre line, symmetry', 'Extends past the outline', 'Dashed = hidden; thick-ended chain = cutting plane']
    },
    {
      id: 'm3-3a-10', module: 'm3', topic: 'm3-lines', type: 'decide', level: 2,
      q: `<p>In the front view of a part, a hidden edge falls exactly on the centre line of a hole. Which line do you draw?</p>`,
      options: ['The centre line', 'The hidden line', 'Both, one over the other', 'Neither'],
      correct: 1,
      answer: `<p><b>The hidden line.</b> Hidden lines take precedence over centre lines.</p>`,
      explain: `<p>When lines coincide, only the more important one is drawn. The order is visible outline, then hidden line, then cutting plane, then centre line, then dimension and extension lines.</p>`,
      points: ['Precedence: visible > hidden > cutting plane > centre', 'Draw only the higher one']
    },
    {
      id: 'm3-3a-11', module: 'm3', topic: 'm3-lines', type: 'troubleshoot', level: 2,
      q: `<p>A student's drawing looks flat and hard to read: the outlines, dimension lines and hatching all look the same. The student used one HB pencil for everything. What should change?</p>`,
      options: null, correct: null,
      answer: `<p><b>Use two line weights: thick (HB) for visible outlines and thin (2H) for dimension, extension, hatching, centre and hidden lines, about 2 : 1.</b></p>`,
      explain: `<p>Line weight carries meaning. Thick lines emphasise visible outlines; thin lines are used for dimensions, extensions, leaders and hatching. The course material give thick : thin = 2 : 1, for example 0.7 and 0.35 mm, drawn with HB and 2H pencils.</p>`,
      points: ['Thick for visible outlines', 'Thin for dimensions, hatching, centre lines', 'Ratio 2 : 1', 'HB thick, 2H thin']
    },
    {
      id: 'm3-3a-12', module: 'm3', topic: 'm3-lettering-dim', type: 'troubleshoot', level: 2,
      q: `<p>On a drawing using the aligned system, a vertical dimension of 30 is written so that it reads from the left side of the sheet. Is that right? Where should the figure be?</p>`,
      options: null, correct: null,
      answer: `<p><b>No.</b> In the aligned system figures read from the bottom or the right side, so a vertical figure sits beside its dimension line and reads upwards from the right.</p>`,
      explain: `<p>Aligned system: figures are placed above (and parallel to) the dimension line and are read from the bottom or the right of the sheet. A figure read from the left is marked wrong on the course material. In the unidirectional system, every figure is horizontal in a break of the dimension line instead.</p>`,
      points: ['Aligned: above and parallel to the line', 'Read from the bottom or right', 'Unidirectional: horizontal, line broken']
    },
    {
      id: 'm3-3a-13', module: 'm3', topic: 'm3-lettering-dim', type: 'decide', level: 1,
      q: `<p>You are lettering a sheet. Which set of heights follows the course material's rules?</p>`,
      options: ['Title 8 mm, notes 4 mm, drawing number 12 mm', 'Title 3 mm, notes 8 mm, drawing number 5 mm', 'Title 12 mm, notes 2 mm, drawing number 3 mm', 'All lettering 5 mm'],
      correct: 0,
      answer: `<p><b>Title 8 mm, notes 4 mm, drawing number 12 mm.</b></p>`,
      explain: `<p>Main titles are 6–8 mm, sub-titles 3–6 mm, notes and dimension figures 3–5 mm, and the drawing number in the title block 10–12 mm. Lettering is generally in capitals.</p>`,
      points: ['Titles 6–8 mm', 'Notes 3–5 mm', 'Drawing number 10–12 mm']
    }
  ]
});
