CHUNK({
  chunk: '3c',
  module: 'm3',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm3-ortho-basics',
      title: 'Orthographic projection: principle, quadrants, first and third angle',
      short: 'Ortho: 1st vs 3rd angle',
      blurb: 'What an orthographic projection is, the HP and VP and their four quadrants, and how first and third angle projection differ.',
      source: 'Lecture 3, pages 1–11',
      tabs: [
        {
          title: 'Principle',
          html: `<p class="lead">An <b>orthographic projection</b> is a 2-D representation of a 3-D object: several 2-D views, each showing a different side of the object.</p>
<figure data-fig="m3-ortho-principle"></figure>
<ul><li>The <b>projectors</b> (visual rays) are <b>parallel to each other</b> and <b>perpendicular to the plane of projection</b>.</li><li>The <b>observer is at infinity</b>, so the rays never converge.</li><li>The <b>object is placed between the observer and the plane of projection</b>: observer, then object, then plane.</li><li>A face parallel to the plane shows its <b>true size and shape</b>; a line parallel to the plane shows its true length (a′b′ = AB).</li></ul>`
        },
        {
          title: 'HP, VP and quadrants',
          html: `<p class="lead">Two principal planes cross at right angles: the <b>vertical plane (VP)</b> and the <b>horizontal plane (HP)</b>. Their line of intersection is the <b>reference line XY</b> (ground line). A third, the <b>profile plane (PP)</b>, is perpendicular to both.</p>
<figure data-fig="m3-quadrants"></figure>
<ul><li>The <b>front view</b> (elevation) is projected on the VP; the <b>top view</b> (plan) on the HP; the <b>side view</b> on the PP.</li><li>After projecting, the HP is <b>rotated through 90°</b> to lie in the plane of the VP, so all views sit on one sheet.</li><li>In the 2nd and 4th quadrants the two views would overlap after rotation, so only the <b>1st and 3rd quadrants</b> are used.</li></ul>
<table class="tbl"><thead><tr><th>Quadrant</th><th>Where the object is</th><th>Called</th><th>Demo point</th></tr></thead><tbody>
<tr><td><b>1st</b></td><td>Above the HP and in front of the VP</td><td>First angle projection</td><td>A (red)</td></tr>
<tr><td><b>2nd</b></td><td>Above the HP and behind the VP</td><td>Second angle projection</td><td>B (blue)</td></tr>
<tr><td><b>3rd</b></td><td>Below the HP and behind the VP</td><td>Third angle projection</td><td>C (green)</td></tr>
<tr><td><b>4th</b></td><td>Below the HP and in front of the VP</td><td>Fourth angle projection</td><td>D (orange)</td></tr>
</tbody></table>
<p>In the course demo each point has a front projection (a′, b′, c′, d′) on the VP and a top projection (a, b, c, d) on the HP. Then the HP is turned through 90° about XY: the part of the HP in front of the VP rotates <b>down</b>, the part behind it rotates <b>up</b>, until it lies in the plane of the VP.</p>
<div class="note heads-up"><p>The quadrant pictures in Lecture 3 carry the line "Always first quadrant to be used". The course's own comparison table lists the <b>third angle</b> as ANSI/ASME practice, so third-quadrant drawings exist. Read the line as: BIS drawings in India use the first quadrant. Check the projection symbol in the title block to see which one a drawing uses.</p></div>`
        },
        {
          title: 'First vs third angle',
          html: `<table class="tbl"><thead><tr><th>Aspect</th><th>First angle</th><th>Third angle</th></tr></thead><tbody>
<tr><td>Object placed in</td><td>1st quadrant</td><td>3rd quadrant</td></tr>
<tr><td>Order</td><td>Observer → object → plane</td><td>Observer → plane → object</td></tr>
<tr><td>Plane of projection</td><td>Behind the object</td><td>Between observer and object</td></tr>
<tr><td>Top view</td><td><b>Below</b> the front view</td><td><b>Above</b> the front view</td></tr>
<tr><td>Left side view</td><td>On the <b>right</b> of the front view</td><td>On the <b>left</b> of the front view</td></tr>
<tr><td>Views placed</td><td>Opposite to the viewing direction</td><td>Same side as seen</td></tr>
<tr><td>Standards and regions</td><td>BIS and ISO: India, Europe, most of Asia</td><td>ANSI and ASME: USA, Canada, Japan</td></tr>
</tbody></table>
<div data-viz="ortho-angle"></div>
<div class="note mnemonic"><p><b>First angle = opposite side; third angle = same side.</b> In first angle, what you see from the left is drawn on the right.</p></div>
<div class="note heads-up"><p>The "At a glance" table in Lecture 3 puts the first-angle top view <b>above</b> the front view and the right-side view to the <b>right</b>, the same as third angle. That is a slip. The correct first-angle positions are the top view <b>below</b> and the right-side view to the <b>left</b> of the front view, as the other Lecture 3 tables and the table above show. The two pictures beside it, where the first-angle top view sits below the front view, are right.</p></div>`
        },
        {
          title: 'Projection symbol',
          html: `<p class="lead">The symbol in the title block says which method the drawing uses. It is a <b>frustum of a cone</b> (truncated cone) drawn in front view, beside its circular end view.</p>
<figure data-fig="m3-proj-symbols"></figure>
<ul><li><b>First angle</b>: end view (two circles) on the <b>right</b> of the front view.</li><li><b>Third angle</b>: end view on the <b>left</b>.</li></ul>
<div class="note heads-up"><p>The title-block page in Lecture 1 (page 17) draws its "first angle" symbol with the circles on the left, which is the third-angle arrangement. Follow Lecture 3 (page 11): first angle has the circles on the right.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Define orthographic projection.', back: 'Representing a 3-D object by 2-D views made with projectors parallel to each other and perpendicular to the plane.' },
        { front: 'Where is the observer assumed to be?', back: 'At infinity, so the projectors are parallel.' },
        { front: 'What is the XY line?', back: 'The line of intersection of the HP and the VP (reference or ground line).' },
        { front: 'Position of an object in the 1st quadrant?', back: 'Above the HP and in front of the VP.' },
        { front: 'Why are the 2nd and 4th quadrants not used?', back: 'After the HP is rotated, the front and top views overlap.' },
        { front: 'First angle: where is the top view?', back: 'Below the front view.' },
        { front: 'Third angle: where is the left side view?', back: 'On the left of the front view.' },
        { front: 'Which projection does India (BIS) use?', back: 'First angle.' },
        { front: 'First angle: where is the plane of projection?', back: 'Behind the object (observer → object → plane).' },
        { front: 'First-angle symbol: where are the circles?', back: 'On the right of the truncated cone.' },
        { front: 'In orthographic projection, where is the object placed?', back: 'Between the observer and the plane of projection.' },
        { front: 'Describe the 2nd, 3rd and 4th quadrants.', back: '2nd: above HP, behind VP. 3rd: below HP, behind VP. 4th: below HP, in front of VP.' }
      ],
      oneLiners: [
        'Projectors parallel, perpendicular to the plane; observer at infinity.',
        '1st quadrant: above HP, in front of VP.',
        'First angle: top view below, left view on the right.',
        'Third angle: top view above, left view on the left.',
        'Quadrants: 1st above HP in front of VP; 2nd above, behind; 3rd below, behind; 4th below, in front.',
        'BIS and ISO: India, Europe, most of Asia; ANSI and ASME: USA, Canada, Japan.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-six-views',
      title: 'Six principal views and drawing the views of a block',
      short: 'Six views, problems',
      blurb: 'The glass-box idea, where each of the six views goes, how views line up, and the views of a block worked step by step.',
      source: 'Lecture 3, pages 12–23',
      tabs: [
        {
          title: 'The glass box',
          html: `<p class="lead">How the six principal views are made:</p>
<ol><li>The object is placed in a <b>glass box</b>.</li><li>Its image is projected onto each side of the box.</li><li>The box is <b>unfolded</b> flat.</li><li>The six sides are the principal views: <b>front, top, bottom, left side, right side, rear</b>.</li></ol>
<figure data-fig="m3-six-views-layout"></figure>
<p>The <b>rear view</b> is placed beyond the corresponding side view and clearly labelled.</p>
<table class="tbl"><thead><tr><th>View</th><th>First angle</th><th>Third angle</th></tr></thead><tbody>
<tr><td>Top view</td><td>Below the front view</td><td>Above the front view</td></tr>
<tr><td>Bottom view</td><td>Above the front view</td><td>Below the front view</td></tr>
<tr><td>Right-side view</td><td>Left of the front view</td><td>Right of the front view</td></tr>
<tr><td>Left-side view</td><td>Right of the front view</td><td>Left of the front view</td></tr>
</tbody></table>
<p><b>First angle = opposite side; third angle = same side.</b> The drawn picture of each view is identical in the two systems; only where it sits on the sheet changes.</p>`
        },
        {
          title: 'Choosing and aligning',
          html: `<h4>The front view</h4>
<p>Choose as the front view the side that shows the <b>most features</b> of the object and usually the <b>fewest hidden lines</b>. It is drawn first; the other views follow from it.</p>
<h4>View alignment</h4>
<div class="kv"><div><span>Front and top views</span><b>Aligned vertically; share the width</b></div><div><span>Front and side views</span><b>Aligned horizontally; share the height</b></div><div><span>Top and side views</span><b>Share the depth (carried across with a 45° line)</b></div></div>
<div class="note why"><p>Each view shows only two of the three sizes. Width comes from the front or top view, height from the front or side view, depth from the top or side view, so every size appears in two views.</p></div>`
        },
        {
          title: 'Worked: a block',
          html: `<div class="worked"><div class="given"><p>A block has a base 50 × 50 × 10 with two ribs 10 thick on opposite edges. Each rib has a 10 mm wide top, starting 20 mm from the left, and slopes down to the right corner of the base. Draw the front view (from A), side view (from B) and top view (from C) in first angle projection, full size (Lecture 3, page 18).</p></div><div class="solve"><div class="eq">Front view: base 50 × 10; rib outline from (20, 10) up to (20, 40), across to (30, 40), down the slope to (50, 10)</div><div class="eq">Top view: 50 × 50 square below the front view; the ribs show as strips 10 wide at the front and back, with lines at 20 and 30 from the left</div><div class="eq">Left side view: on the right of the front view; base 50 × 10 with the two ribs as uprights 10 wide and 30 high</div></div></div>
<figure data-fig="m3-ortho-block"></figure>
<h4>The same block in third angle</h4>
<table class="tbl"><thead><tr><th>View</th><th>First angle (worked above)</th><th>Third angle</th></tr></thead><tbody>
<tr><td>Front view</td><td>As drawn</td><td>The same picture</td></tr>
<tr><td>Top view</td><td>50 × 50 square <b>below</b> the front view</td><td>The same square <b>above</b> the front view</td></tr>
<tr><td>Side view</td><td>Left side view on the <b>right</b> of the front view</td><td>Left side view on the <b>left</b> of the front view</td></tr>
</tbody></table>
<p>Draw the three views exactly as in first angle, then move them: the top view goes above the front view and the side view to the side it was seen from. Projectors stay vertical between the front and top views and horizontal between the front and side views. Add the projection symbol for the method used.</p>
<div class="note heads-up"><p>The course material gives no height for the ribs. The drawing uses 30 mm above the base, which is what the course material's own views show.</p></div>`
        },
        {
          title: 'Method',
          html: `<ol><li>Draw the <b>XY line</b>.</li><li>Draw the <b>front view</b> above XY (first angle), using widths and heights.</li><li>Drop <b>vertical projectors</b> and draw the <b>top view</b> below XY, using widths and depths.</li><li>Carry heights across with <b>horizontal projectors</b>; carry depths from the top view with a <b>45° line</b>; draw the side view.</li><li>Show <b>hidden edges dashed</b> and <b>axes as centre lines</b>; label each view.</li></ol>
<p>The L-shaped solid (page 17) is worked this way: length L, width W and height H appear twice each across the three views. Practise the blocks on pages 19–23 the same way.</p>
<div class="note heads-up"><p>In first angle, the front of the object faces <b>away from the front view</b> in both the top view and the side view. Mixing this up flips the side view.</p></div>`
        },
        {
          title: 'Practice problems',
          html: `<p class="lead">Each problem asks for three views from the arrows A, B and C on the pictorial: <b>front view from A, side view from B, top view from C</b>. Draw full size, in <b>first angle</b> and in <b>third angle</b>. Text only here; the sizes are those printed on the course pictorials.</p>
<h4>How to lay out every problem</h4>
<ol class="steps"><li><b>First angle</b> Front view above XY, top view below it, left-side view on the right of the front view.</li><li><b>Third angle</b> Front view below the line, top view above it, left-side view on the left of the front view.</li><li><b>Project</b> Vertical projectors between front and top views; horizontal projectors between front and side views; carry depth with a 45° line.</li><li><b>Finish</b> Hidden edges dashed, label each view, add the projection symbol.</li></ol>
<figure data-fig="m3-l-solid-views"></figure>
<table class="tbl"><thead><tr><th>Problem</th><th>Given</th><th>Views to draw</th></tr></thead><tbody>
<tr><td><b>L-shaped solid</b> in the first quadrant</td><td>Length L, width W, height H, and thickness h, kept as letters</td><td>Front view: rectangle W × H with a line at h from the bottom. Top view: rectangle W × L with a line at h from the back edge. Left side view: an L, base L long and h thick, upright h thick and H high.</td></tr>
<tr><td><b>Block with two wedge ribs</b></td><td>Printed sizes: 80, 30, 30, 20, 20, 25, 25, 25, 5, 50 (mm); read each from the pictorial</td><td>Start with the base outline in the top view, add the two ribs 20 thick, then take every height from the pictorial. The sloping top of each rib shows as a slanting line in the front view and a straight edge in the top view.</td></tr>
<tr><td><b>C-shaped bar</b></td><td>Length 100, height 50, depth 30; arms and wall 10 thick; other sizes 40, 10, 30 as printed</td><td>Front view from A shows the C outline. The side view shows the arm levels as hidden lines. The top view is a 100 × 30 rectangle with the sloping end drawn as a slanting line.</td></tr>
<tr><td><b>Stepped block</b></td><td>Length 100, depth 60, height 30 on the high part and 15 on the low part; 60, 30 and 30 printed on the plan edges</td><td>Front view: a high part and a lower step. Top view: an L-shaped outline with a line where the level changes. Side view: two levels, 30 and 15 high.</td></tr>
<tr><td><b>Machine bracket</b></td><td>Top plate 100 wide, 80 deep, 10 thick. Two legs 15 thick, each a plate 80 deep with a rounded R40 end and a Ø40 hole. Boss Ø60, 20 high, with a Ø50 recess and a Ø30 hole. Overall height 90 (70 + 20)</td><td>Front view: plate, two legs, boss on top with centre lines. Top view: 100 × 80 rectangle, concentric circles Ø60, Ø50, Ø30, legs as hidden lines. Side view: the R40 profile with the Ø40 hole, the boss above.</td></tr>
<tr><td><b>Base with curved arm</b></td><td>Base plate 170 long, 55 wide, 15 thick; two Ø15 holes with Ø30 spot faces 5 deep, spaced 20, 75, 40 and 35 along the length; lobe R20 with Ø20 hole; boss R20 with Ø25 boss 5 high and Ø10 hole; curved slot (R50, with R15 and R8 marked); web 6 thick</td><td>Build the front view from the base up: plate, lobe, web, then the slot and boss. Project the top view for the holes and the 6 mm web. Take the heights 15, 20 and 60 as printed for the side view. Show the spot faces and holes as hidden circles and lines.</td></tr>
</tbody></table>
<div class="note heads-up"><p>The pictorial of the second block is printed with the views of the first block beside it. Draw the views of the second block from its own pictorial rather than copying them. Where the course pictorial leaves a size to be read off the drawing, the notes above name the printed sizes only.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Name the six principal views.', back: 'Front, top, bottom, left side, right side, rear.' },
        { front: 'How is the front view chosen?', back: 'The side showing the most features and usually the fewest hidden lines.' },
        { front: 'Which two views share the width?', back: 'Front and top (aligned vertically).' },
        { front: 'Which two views share the height?', back: 'Front and side (aligned horizontally).' },
        { front: 'How is depth carried from the top view to the side view?', back: 'With a 45° line (mitre line).' },
        { front: 'First angle: where is the bottom view?', back: 'Above the front view.' },
        { front: 'Where is the rear view placed?', back: 'Beyond the corresponding side view, clearly labelled.' },
        { front: 'In first angle, which way does the front of the object face in the top view?', back: 'Away from the front view (away from XY).' },
        { front: 'Third angle: where do the top view and the left-side view go?', back: 'Top view above the front view; left-side view on the left of it.' },
        { front: 'In the practice blocks, which arrow gives which view?', back: 'A: front view. B: side view. C: top view.' }
      ],
      oneLiners: [
        'Glass box: project, unfold, six views.',
        'Front + top share width; front + side share height; top + side share depth.',
        'Front view: most features, fewest hidden lines.',
        'Same pictures in both angles: only their places on the sheet swap.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm3-l-solid-views', src: 'own/README.txt', crop: null, caption: 'The L-shaped solid in first angle: front view from A, top view from C below it, left side view from B on the right.', alt: 'Rectangle W by H with a line at h, a rectangle W by L below the XY line, and an L-shaped side view on the right.' },
    { id: 'm3-ortho-principle', src: 'm3/pages/l3-03.png', crop: null, caption: 'Parallel projectors, perpendicular to the plane, from an observer at infinity: a′b′ is the true length of AB.', alt: 'A line AB projected by parallel horizontal rays onto a vertical plane as a′b′.' },
    { id: 'm3-quadrants', src: 'm3/pages/l3-05.png', crop: null, caption: 'The HP and VP divide space into four quadrants; the first and third are used.', alt: 'Side view of a vertical VP and horizontal HP crossing, with the four quadrants labelled.' },
    { id: 'm3-proj-symbols', src: 'm3/pages/l3-11.png', crop: null, caption: 'First angle: end view on the right of the cone. Third angle: on the left.', alt: 'Two symbols each made of a trapezium and two concentric circles, circles on the right for first angle and on the left for third angle.' },
    { id: 'm3-six-views-layout', src: 'm3/pages/l3-16.png', crop: null, caption: 'Placement of the six principal views around the front view in first and third angle.', alt: 'Two cross-shaped arrangements of labelled boxes for the six views.' },
    { id: 'm3-ortho-block', src: 'm3/pages/l3-18.png', crop: null, caption: 'Front, top and left side views of the page-18 block in first angle, with projectors.', alt: 'Front view with a sloping rib, top view square with two strips, side view with two uprights, around an XY line.' }
  ]
});
