CHUNK({
  chunk: '3e',
  module: 'm3',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm3-points-lines',
      title: 'Projection of points and straight lines',
      short: 'Points and lines',
      blurb: 'The four quadrants, where the front and top views of a point fall in each, and how to project a line parallel to one plane and inclined to the other.',
      source: 'Engineering graphics lectures, pages 82–87',
      tabs: [
        {
          title: 'Quadrants',
          html: `<p class="lead">The <b>horizontal plane (HP)</b> and the <b>vertical plane (VP)</b> meet along the <b>reference line XY</b> and divide space into <b>four quadrants</b>. A point is described by its distance above or below HP and in front of or behind VP.</p>
<ul><li><b>Front view (a′, elevation):</b> seen looking at the VP; its distance from XY gives the height of the point above or below HP.</li>
<li><b>Top view (a, plan):</b> seen looking down on the HP; its distance from XY gives the distance of the point in front of or behind VP.</li>
<li>After the HP is rotated to lie in line with the VP, both views lie on one <b>projector</b> perpendicular to XY.</li></ul>
<table class="tbl"><thead><tr><th>Quadrant</th><th>Position of point</th><th>Front view a′</th><th>Top view a</th></tr></thead><tbody>
<tr><td>I</td><td>Above HP, in front of VP</td><td>Above XY</td><td>Below XY</td></tr>
<tr><td>II</td><td>Above HP, behind VP</td><td>Above XY</td><td>Above XY</td></tr>
<tr><td>III</td><td>Below HP, behind VP</td><td>Below XY</td><td>Above XY</td></tr>
<tr><td>IV</td><td>Below HP, in front of VP</td><td>Below XY</td><td>Below XY</td></tr>
</tbody></table>
<figure data-fig="m3-point-quadrants"></figure>
<div class="note why"><p>First angle projection places the object in quadrant I, which is why the top view comes below the front view in first angle drawings. In quadrants II and IV both views fall on the same side of XY and can overlap, so they are not used for drawing objects.</p></div>`
        },
        {
          title: 'Point: worked',
          html: `<div class="worked"><div class="given">A point A is 30 mm above HP and 40 mm in front of VP. Draw its projections.</div><div class="solve">The point is in quadrant I. Draw XY and a projector perpendicular to it. Mark a′ on the projector 30 mm <b>above</b> XY (height above HP). Mark a on the same projector 40 mm <b>below</b> XY (distance in front of VP). Label a′, a, X and Y, and write the distances as dimensions.</div><div class="result">a′ is 30 mm above XY; a is 40 mm below XY, on one projector.</div></div>
<div class="note trap"><p>Do not mix up the two distances: height above HP always shows in the <b>front view</b>; distance from VP always shows in the <b>top view</b>.</p></div>`
        },
        {
          title: 'Straight lines',
          html: `<p class="lead">A straight line is projected by projecting its two end points and joining them. A view shows the <b>true length (TL)</b> only when the line is <b>parallel to the plane</b> of that view.</p>
<figure data-fig="m3-line-projection"></figure>
<table class="tbl"><thead><tr><th>Position of line</th><th>Front view</th><th>Top view</th></tr></thead><tbody>
<tr><td>Parallel to both HP and VP</td><td>True length, parallel to XY</td><td>True length, parallel to XY</td></tr>
<tr><td>Perpendicular to HP</td><td>True length, perpendicular to XY</td><td>A point</td></tr>
<tr><td>Perpendicular to VP</td><td>A point</td><td>True length, perpendicular to XY</td></tr>
<tr><td>Parallel to HP, inclined φ to VP</td><td>Shorter, parallel to XY</td><td>True length, at φ to XY</td></tr>
<tr><td>Parallel to VP, inclined θ to HP</td><td>True length, at θ to XY</td><td>Shorter, parallel to XY</td></tr>
</tbody></table>`
        },
        {
          title: 'Line: worked',
          html: `<div class="worked"><div class="given">A line AB, 40 mm long, is parallel to HP and inclined at 45° to VP. End A is 15 mm above HP and 20 mm in front of VP. Draw its projections.</div><div class="solve">Because AB is parallel to HP, the <b>top view shows its true length</b>. Mark a 20 mm below XY. From a draw ab = 40 mm at 45° to XY, going away from XY. Mark a′ 15 mm above XY on the projector through a. Project b up to the horizontal line through a′ to get b′. Length a′b′ = 40 cos 45° = 28.3 mm.</div><div class="result">ab = 40 mm (TL) at 45°; a′b′ = 28.3 mm, parallel to XY, 15 mm above it.</div></div>
<div class="note exam"><p><b>Projection of a line:</b> first decide which view shows the true length (the view on the plane the line is parallel to); draw that view at the given angle; then project to get the other view parallel to XY. Label every end (a, b, a′, b′) and mark TL and the angle.</p></div>`
        }
      ],
      flashcards: [
        { front: 'What does the front view of a point show?', back: 'Its distance above or below HP.' },
        { front: 'What does the top view of a point show?', back: 'Its distance in front of or behind VP.' },
        { front: 'Point in quadrant I: where are a′ and a?', back: 'a′ above XY, a below XY.' },
        { front: 'Point in quadrant III: where are a′ and a?', back: 'a′ below XY, a above XY.' },
        { front: 'In which quadrants do both views fall on the same side of XY?', back: 'II (both above) and IV (both below).' },
        { front: 'When does a view show the true length of a line?', back: 'When the line is parallel to the plane of that view.' },
        { front: 'Line parallel to HP and inclined φ to VP: which view is TL?', back: 'The top view, drawn at φ to XY; the front view is parallel to XY and shorter.' },
        { front: 'Line perpendicular to HP: what is its top view?', back: 'A point.' },
        { front: 'AB = 40 mm, parallel to HP, 45° to VP. Length of the front view?', back: '40 cos 45° = 28.3 mm.' }
      ],
      oneLiners: [
        'Front view gives height from HP; top view gives distance from VP.',
        'Quadrant I: a′ above, a below XY. III: reversed.',
        'TL shows on the plane the line is parallel to.',
        'Line ∥ HP, φ to VP: top view TL at φ; front view parallel to XY.'
      ],
      formulas: [
        { name: 'Apparent length', html: `length of other view = TL × cos(angle)`, note: 'for a line parallel to one plane and inclined to the other' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-isometric',
      title: 'Isometric projection',
      short: 'Isometric',
      blurb: 'Isometric axes, the isometric scale, isometric view versus isometric projection, and drawing cylinders, cones, prisms and pyramids.',
      source: 'Engineering graphics lecture 9 (course material not available in full)',
      tabs: [
        {
          title: 'Isometric axes',
          html: `<p class="lead"><b>Isometric projection</b> is a pictorial projection in which the object is turned so that its three principal edges are <b>equally inclined to the plane of projection</b>. Those edges appear on the <b>isometric axes</b>, <b>120° apart</b>: one vertical and two at <b>30° to the horizontal</b>.</p>
<div class="note heads-up"><p>The course material for isometric projection was not available in full, so these notes are written from standard textbook content in the form the exam asks for.</p></div>
<figure data-fig="m3-isometric-scale"></figure>
<ul><li>Lines parallel to the isometric axes are <b>isometric lines</b>; only they are measured.</li>
<li>Lines not parallel to the axes (<b>non-isometric lines</b>) are drawn by locating their two ends on isometric lines and joining them.</li>
<li>Hidden edges are normally <b>not</b> shown in isometric drawings.</li></ul>`
        },
        {
          title: 'View vs projection',
          html: `<p class="lead">Because every edge is inclined to the plane, its projection is foreshortened to about <b>0.816 of its true length</b>. The <b>isometric scale</b> gives these reduced lengths.</p>
<div class="eq">isometric length / true length = cos 45° / cos 30° = √2/√3 ≈ 0.816</div>
<div class="vs"><div class="side"><h4>Isometric view (drawing)</h4><p>Drawn with <b>true lengths</b> along the isometric axes. Larger, quicker, and the usual exam answer when the question says "isometric view".</p></div><div class="side"><h4>Isometric projection</h4><p>Drawn with <b>isometric lengths</b> (0.816 × true, read from the isometric scale). It is the true projection, about 18 % smaller than the isometric view.</p></div></div>
<div class="note example"><p>A cylinder 70 mm high: in the isometric view the height is 70 mm; in the isometric projection it is 0.816 × 70 = 57.1 mm.</p></div>
<div class="note exam"><p><b>Isometric scale construction:</b> draw a horizontal line; from one end draw a line at 45° (true lengths marked on it) and a line at 30°; drop verticals from each true-length division to the 30° line. The divisions cut on the 30° line are isometric lengths.</p></div>`
        },
        {
          title: 'Circles: ellipses',
          html: `<p class="lead">A circle on any face appears as an <b>ellipse</b> in isometric. It is drawn inside an <b>isometric square (rhombus)</b> whose side equals the circle diameter, usually by the <b>four-centre method</b>.</p>
<ol class="steps"><li>Draw the rhombus of side D along the isometric axes for the face the circle lies on.</li>
<li>From the two obtuse-angle corners, draw lines to the mid-points of the opposite sides.</li>
<li>These lines cross at two points. The two obtuse corners and the two crossing points are the four centres.</li>
<li>With the obtuse corners as centres, draw the two large arcs between the mid-points; with the crossing points as centres, draw the two small arcs. The four arcs form the ellipse.</li></ol>
<div class="note trap"><p>True or false items often test this: in isometric, circles appear as <b>ellipses</b>, never as circles.</p></div>`
        },
        {
          title: 'Cylinder and cone',
          html: `<figure data-fig="m3-iso-cyl-cone"></figure>
<div class="worked"><div class="given">Draw the isometric view of a cylinder Ø50 mm, height 70 mm, axis vertical.</div><div class="solve">Draw the top face rhombus of side 50 along the two 30° axes and draw the ellipse in it by the four-centre method. Drop vertical lines of 70 mm from the centres used and draw the same ellipse at the base (only its front half visible). Join the two ellipses by vertical tangent lines (the extreme generators). Erase construction lines.</div><div class="result">Two equal ellipses 70 mm apart, joined by vertical tangents.</div></div>
<div class="worked"><div class="given">Draw the isometric view of a cone Ø50 mm, height 70 mm, base on HP.</div><div class="solve">Draw the base ellipse in a rhombus of side 50. From its centre draw the axis vertically up 70 mm to the apex. From the apex draw the two lines tangent to the ellipse. The part of the ellipse behind the tangent points is hidden and left out.</div><div class="result">Base ellipse with two tangents from the apex 70 mm above its centre.</div></div>`
        },
        {
          title: 'Prisms and pyramids',
          html: `<p class="lead">For a solid with a polygon base (hexagonal or pentagonal prism, pyramid), first draw the <b>plan of the base</b> with an enclosing rectangle, then transfer it to isometric.</p>
<ol class="steps"><li>Draw the true shape of the base (for example a hexagon of side 20) and enclose it in a rectangle; note where each corner lies along the rectangle sides.</li>
<li>Draw that rectangle as an isometric parallelogram (sides along the 30° axes) and transfer each corner by measuring along isometric lines.</li>
<li>For a prism, draw vertical edges of the full height from every corner and join the top corners to form the top face.</li>
<li>For a pyramid, locate the base centre, draw the axis vertically to the apex height, and join the apex to each visible base corner.</li>
<li>Darken visible edges; leave out hidden ones.</li></ol>
<div class="note exam"><p>Exam favourites: isometric view of a cone or cylinder (Ø50–60, height 60–85), a hexagonal prism (side 20, height 60) and a pentagonal pyramid (side 30, height 50–75). Draw in true lengths unless "isometric projection" is asked, then use the isometric scale.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Angle between isometric axes?', back: '120°; two axes are at 30° to the horizontal and one is vertical.' },
        { front: 'Isometric scale ratio?', back: 'About 0.816 (√2/√3) of the true length.' },
        { front: 'Isometric view vs isometric projection?', back: 'View uses true lengths; projection uses isometric lengths (0.816 × true), so it is smaller.' },
        { front: 'How does a circle appear in isometric?', back: 'As an ellipse, drawn in an isometric rhombus by the four-centre method.' },
        { front: 'Height of a 70 mm cylinder in isometric projection?', back: '0.816 × 70 = 57.1 mm.' },
        { front: 'What are non-isometric lines?', back: 'Lines not parallel to the isometric axes; drawn by joining their end points located on isometric lines.' },
        { front: 'Are hidden lines shown in isometric drawings?', back: 'Normally no.' },
        { front: 'How is a cone drawn in isometric?', back: 'Base ellipse in a rhombus, axis up to the apex, then two tangents from the apex to the ellipse.' }
      ],
      oneLiners: [
        'Isometric axes 120° apart; 30° to horizontal.',
        'Isometric scale = 0.816 × true length.',
        'View = true lengths; projection = isometric lengths.',
        'Circles → ellipses by the four-centre method.'
      ],
      formulas: [
        { name: 'Isometric scale', html: `L<sub>iso</sub> = L<sub>true</sub> × 0.816`, note: '√2/√3' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-perspective',
      title: 'Perspective projection',
      short: 'Perspective',
      blurb: 'How a perspective is formed by visual rays from a station point, its terms, its types, and the visual ray method for a cube.',
      source: 'Engineering graphics lecture 10 (course material not available in full)',
      tabs: [
        {
          title: 'Terms',
          html: `<p class="lead"><b>Perspective projection</b> shows an object as the <b>eye actually sees it</b> from one point: the <b>visual rays</b> from the object converge to the eye, and their intersection with a transparent <b>picture plane</b> forms the drawing.</p>
<div class="note heads-up"><p>The course material for perspective was not available in full, so these notes are written from standard textbook content.</p></div>
<figure data-fig="m3-perspective"></figure>
<div class="kv"><div><span>Station point (SP)</span><b>The position of the observer's eye</b></div><div><span>Picture plane (PP)</span><b>The vertical transparent plane between eye and object on which the perspective is drawn</b></div><div><span>Ground line (GL)</span><b>Where the picture plane meets the ground plane</b></div><div><span>Horizon line (HL)</span><b>A horizontal line on the picture plane at the level of the eye</b></div><div><span>Vanishing point (VP)</span><b>The point on the horizon line where parallel receding lines appear to meet</b></div></div>`
        },
        {
          title: 'Features and types',
          html: `<ul><li>Objects <b>farther away look smaller</b>; equal sizes do not appear equal, so true dimensions cannot be measured from a perspective.</li>
<li>Parallel lines that recede from the viewer <b>converge to a vanishing point</b>.</li>
<li>It gives the most realistic picture, so it is used by architects and for presentation drawings, not for manufacturing.</li></ul>
<table class="tbl"><thead><tr><th>Type</th><th>Vanishing points</th><th>Use</th></tr></thead><tbody>
<tr><td>One-point (parallel)</td><td>One: one face of the object is parallel to the picture plane</td><td>Room interiors, roads, rail tracks</td></tr>
<tr><td>Two-point (angular)</td><td>Two: vertical edges stay vertical; the faces are inclined to the picture plane</td><td>Exteriors of buildings, a cube seen corner first</td></tr>
<tr><td>Three-point (oblique)</td><td>Three: the picture plane is inclined to all three edges</td><td>Tall buildings seen from above or below</td></tr>
</tbody></table>
<div class="note trap"><p>True or false: "in perspective, all equal lengths look equal" is <b>false</b>. Size reduces with distance from the station point.</p></div>`
        },
        {
          title: 'Visual ray method',
          html: `<p class="lead">In the <b>visual ray method</b>, the perspective is found by drawing the rays from the station point to each corner of the object, in both the top view and the front view.</p>
<ol class="steps"><li>Draw the <b>top view</b> of the cube with the picture plane (PP) line in front of it and mark the station point in plan.</li>
<li>Draw the <b>front view</b> on the ground line, and the horizon line at the eye height; mark the station point in elevation.</li>
<li>Join the station point to every corner in the top view. Mark where each ray cuts the PP line, and drop projectors from these points.</li>
<li>Join the station point to every corner in the front view; where these rays cut the picture plane gives the heights.</li>
<li>Each corner of the perspective lies where its vertical projector meets its height. Join the corners and darken the visible edges.</li></ol>`
        }
      ],
      flashcards: [
        { front: 'What is perspective projection?', back: 'The view formed where visual rays from the object to the eye cut a picture plane; it shows the object as the eye sees it.' },
        { front: 'Define station point.', back: 'The position of the observer\'s eye.' },
        { front: 'Define horizon line.', back: 'A horizontal line on the picture plane at the level of the eye.' },
        { front: 'What is a vanishing point?', back: 'The point on the horizon where parallel receding lines appear to meet.' },
        { front: 'Do equal lengths look equal in perspective?', back: 'No; farther parts look smaller.' },
        { front: 'Three types of perspective?', back: 'One-point (parallel), two-point (angular), three-point (oblique).' },
        { front: 'Name the method used for the perspective of a cube in the course.', back: 'The visual ray method.' }
      ],
      oneLiners: [
        'Perspective = visual rays cut by a picture plane.',
        'SP eye, PP picture plane, GL ground line, HL eye level.',
        'Far parts look smaller; parallels meet at vanishing points.',
        'One-, two- and three-point perspective.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-freehand',
      title: 'Freehand sketching',
      short: 'Freehand sketching',
      blurb: 'Why engineers sketch freehand, the tools and techniques for lines, circles and arcs, and how to sketch orthographic and isometric views.',
      source: 'Engineering graphics lectures 7–8 (course material not available in full)',
      tabs: [
        {
          title: 'Why sketch',
          html: `<p class="lead"><b>Freehand sketching</b> is drawing without instruments (only pencil and eraser) to record an idea or an existing part quickly, with correct proportions though not to exact scale.</p>
<div class="note heads-up"><p>The course material for freehand sketching was not available in full, so these notes are written from standard textbook content.</p></div>
<ul><li>It lets an engineer <b>communicate an idea at once</b>, in a meeting or on the shop floor.</li>
<li>It is the <b>first step of design</b>: concepts are sketched, compared and improved before a CAD model is made.</li>
<li>It records the shape of an existing part for repair or reverse engineering, with dimensions added later.</li></ul>
<p><b>Tools:</b> a soft pencil (HB or 2B) with a conical point, a soft eraser and plain or grid paper.</p>`
        },
        {
          title: 'Lines and circles',
          html: `<ul><li><b>Straight lines:</b> mark the two end points, place the eye on the end point, and draw in short light strokes, moving the whole arm. Horizontal lines go left to right; vertical lines top to bottom. Darken once the shape is right.</li>
<li><b>Proportion:</b> estimate sizes by comparing with one reference length (for example the width), not by measuring.</li>
<li><b>Circles:</b> use the box-and-diagonal method shown below. Mark the radius on the centre lines and on the diagonals, then join the eight marks with short arcs.</li>
<li><b>Arcs and fillets:</b> sketch a square corner first, mark the radius on both sides and join with a smooth curve.</li></ul>
<figure data-fig="m3-freehand-circle"></figure>`
        },
        {
          title: 'Sketching views',
          html: `<ol class="steps"><li>Decide the views (front, top, side) and block in their <b>overall boxes</b> lightly, aligned on common projectors with equal gaps.</li>
<li>Add the main features (steps, slots, holes) inside each box, keeping proportions.</li>
<li>Sketch circles and arcs, then hidden lines (dashes) and centre lines.</li>
<li>Darken visible outlines; add dimensions if asked.</li></ol>
<p>For an <b>isometric sketch</b>, sketch the three axes at 120°, block in the overall box with true proportions, cut away steps and slots, and sketch circles as ellipses inside rhombuses.</p>`
        }
      ],
      flashcards: [
        { front: 'What is freehand sketching?', back: 'Drawing without instruments, keeping correct proportion but not exact scale.' },
        { front: 'Give two uses of freehand sketching.', back: 'Communicating ideas quickly and the first stage of design; also recording existing parts.' },
        { front: 'Which pencil suits sketching?', back: 'A soft pencil such as HB or 2B.' },
        { front: 'How do you sketch a circle freehand?', back: 'Draw a square and its centre lines and diagonals, mark the radius on them, and join the marks with arcs.' },
        { front: 'In which direction are horizontal lines sketched?', back: 'Left to right, in short light strokes.' },
        { front: 'First step in sketching orthographic views?', back: 'Block in the overall box of each view, aligned on projectors.' }
      ],
      oneLiners: [
        'Freehand = no instruments, right proportion.',
        'Light strokes first, darken last.',
        'Circle: box, centre lines, diagonals, mark radius, arcs.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-floor-plan',
      title: 'Residential floor plan (IS SP 7)',
      short: 'Floor plan',
      blurb: 'What a floor plan shows, how to draw one with standard symbols for walls, doors and windows, and the room sizes the National Building Code (SP 7) asks for.',
      source: 'Standard engineering knowledge (course material not available)',
      tabs: [
        {
          title: 'Floor plan',
          html: `<p class="lead">A <b>floor plan</b> is the <b>sectional top view of a building</b>, as if cut by a horizontal plane about 1 m to 1.2 m above the floor and seen from above. It shows walls, doors, windows, rooms and their sizes.</p>
<div class="note heads-up"><p>The course material for floor plans was not available, so these notes are written from standard textbook content.</p></div>
<figure data-fig="m3-floor-plan"></figure>
<ul><li><b>Walls</b> are drawn as two thick parallel lines (the cut section), usually 230 mm for outer and 115 mm for partition walls.</li>
<li><b>Doors</b> are shown as a gap in the wall with the shutter and its <b>swing arc</b>, and labelled D, D1.</li>
<li><b>Windows</b> are shown as a gap with thin parallel lines in the wall thickness, labelled W, W1.</li>
<li>Each room is named and its <b>internal size</b> written (for example 4.0 × 3.6 m); overall dimensions are given outside the plan.</li></ul>`
        },
        {
          title: 'SP 7 sizes',
          html: `<p class="lead"><b>SP 7</b> is the <b>National Building Code of India</b>, published by the Bureau of Indian Standards. It sets minimum sizes so that rooms are usable, lit and ventilated.</p>
<table class="tbl"><thead><tr><th>Room</th><th>Minimum requirement (NBC, approximate)</th></tr></thead><tbody>
<tr><td>Habitable room (living, bedroom)</td><td>Area at least 9.5 m², width at least 2.4 m; height at least 2.75 m</td></tr>
<tr><td>Kitchen</td><td>Area at least 5.0 m², width at least 1.8 m</td></tr>
<tr><td>Bathroom / WC</td><td>Bath 1.8 m², WC 1.1 m²; combined at least 2.8 m²</td></tr>
<tr><td>Doors</td><td>Main door about 1.0 × 2.1 m; inner doors about 0.9 × 2.1 m; toilet 0.75 × 2.1 m</td></tr>
<tr><td>Windows</td><td>Window area at least one-tenth of the floor area, for light and air</td></tr>
</tbody></table>`
        },
        {
          title: 'Drawing steps',
          html: `<ol class="steps"><li>Choose a scale (1:50 or 1:100) and draw the <b>outer walls</b> to the overall size.</li>
<li>Divide the plan into rooms with <b>partition walls</b>, placing the living room near the entrance, the kitchen near the dining area and toilets on an outer wall for ventilation.</li>
<li>Cut gaps for <b>doors</b> and draw the shutter and swing; cut gaps for <b>windows</b> on outer walls and draw their symbol.</li>
<li>Write the <b>room names and sizes</b>, add a door and window schedule (D, D1, W, W1 with sizes), the overall dimensions and a north arrow.</li>
<li>Darken the walls; keep dimension and symbol lines thin.</li></ol>
<div class="note exam"><p><b>Draw a residential floor plan:</b> show at least living, bedroom, kitchen and toilet; mark every door with its swing and every window; give room sizes that meet SP 7 minimums; add the overall dimensions and a legend for D and W.</p></div>`
        }
      ],
      flashcards: [
        { front: 'What is a floor plan?', back: 'A sectional top view of a building, cut horizontally about 1 m above the floor.' },
        { front: 'What is SP 7?', back: 'The National Building Code of India, published by BIS.' },
        { front: 'How is a door shown on a plan?', back: 'A gap in the wall with the shutter and its swing arc.' },
        { front: 'How is a window shown on a plan?', back: 'A gap in the wall with thin parallel lines across the wall thickness.' },
        { front: 'Minimum area of a habitable room (NBC)?', back: 'About 9.5 m², with width at least 2.4 m.' },
        { front: 'Usual scale for a house plan?', back: '1:50 or 1:100.' }
      ],
      oneLiners: [
        'Floor plan = horizontal section seen from above.',
        'Doors: gap + swing arc; windows: gap + thin lines.',
        'SP 7 = National Building Code; room ≥ 9.5 m².'
      ],
      formulas: []
    }
  ],
  figures: [
    {id: "m3-fat26-iso-cylinder", paper: "fat-a1-2026", src: "papers-cc/2026_Fall_FAT_A1_179448.pdf", crop: null, caption: "Model answer: isometric view of a cylinder Ø60 × 65 standing on its base.", alt: "Isometric cylinder with an elliptical top, two vertical outline lines and the front half of the base ellipse; height 65 and diameter 60 dimensioned."},
    {id: "m3-fat26-iso-cone", paper: "fat-a2-2026", src: "papers-cc/2026_Fall_FAT_A2_179466.pdf", crop: null, caption: "Model answer: isometric view of a cone, base Ø50, height 70, base on HP.", alt: "Isometric cone: front half of the base ellipse and two outline lines from the tangent points to the apex, with the axis; height 70 and diameter 50 dimensioned."},
    {id: "m3-fat26-iso-hexprism", paper: "fat-b1-2026", src: "papers-cc/2026_Fall_FAT_B1_179466.pdf", crop: null, caption: "Model answer: isometric view of a hexagonal prism, side 20, height 60, base on HP.", alt: "Isometric hexagonal prism: full hexagon on top, three visible side faces, height 60 and side 20 marked."},
    { id: 'm3-point-quadrants', src: 'vtop/m3-drawing/p82.png', crop: null, caption: 'Front view a′ and top view a of a point in each of the four quadrants.', alt: 'Four XY lines with the two views of a point above or below each.' },
    { id: 'm3-line-projection', src: 'vtop/m3-drawing/p86.png', crop: null, caption: 'A line parallel to one plane shows its true length in the view on that plane.', alt: 'Two sets of projections of a line on XY: one with the top view at 45°, one with the front view at 30°.' },
    { id: 'm3-isometric-scale', src: 'own/README.txt', crop: null, caption: 'Isometric axes 120° apart, and the isometric scale built from 45° and 30° lines.', alt: 'Three axes from a point, and two lines at 45° and 30° joined by vertical projectors.' },
    { id: 'm3-iso-cyl-cone', src: 'own/README.txt', crop: null, caption: 'Isometric views of a cylinder and a cone, each Ø50 × 70, with ellipses drawn in rhombuses.', alt: 'A vertical cylinder with elliptical ends and a cone with an elliptical base and apex above.' },
    { id: 'm3-perspective', src: 'own/README.txt', crop: null, caption: 'Perspective: visual rays from the object to the station point cut the picture plane; a cube in two-point perspective.', alt: 'Side view of eye, picture plane and object with rays, and a cube with edges running to two vanishing points.' },
    { id: 'm3-floor-plan', src: 'own/README.txt', crop: null, caption: 'A simple one-bedroom floor plan with door swings and window symbols.', alt: 'Plan with living room, bedroom, kitchen and toilet, doors with swing arcs and windows in outer walls.' },
    { id: 'm3-freehand-circle', src: 'own/README.txt', crop: null, caption: 'Sketching a circle freehand: square, diagonals, radius marks, then arcs.', alt: 'Four stages of a square becoming a sketched circle.' }
  ]
});
