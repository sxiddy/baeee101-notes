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
      source: 'Lecture 3, slides 1–11',
      tabs: [
        {
          title: 'Principle',
          html: `<p class="lead">An <b>orthographic projection</b> is a 2-D representation of a 3-D object: several 2-D views, each showing a different side of the object.</p>
<figure data-fig="m3-ortho-principle"></figure>
<ul><li>The <b>projectors</b> (visual rays) are <b>parallel to each other</b> and <b>perpendicular to the plane of projection</b>.</li><li>The <b>observer is at infinity</b>, so the rays never converge.</li><li>A face parallel to the plane shows its <b>true size and shape</b>; a line parallel to the plane shows its true length (a′b′ = AB).</li></ul>`
        },
        {
          title: 'HP, VP and quadrants',
          html: `<p class="lead">Two principal planes cross at right angles: the <b>vertical plane (VP)</b> and the <b>horizontal plane (HP)</b>. Their line of intersection is the <b>reference line XY</b> (ground line). A third, the <b>profile plane (PP)</b>, is perpendicular to both.</p>
<figure data-fig="m3-quadrants"></figure>
<ul><li>The <b>front view</b> (elevation) is projected on the VP; the <b>top view</b> (plan) on the HP; the <b>side view</b> on the PP.</li><li>After projecting, the HP is <b>rotated through 90°</b> to lie in the plane of the VP, so all views sit on one sheet.</li><li>In the 2nd and 4th quadrants the two views would overlap after rotation, so only the <b>1st and 3rd quadrants</b> are used.</li></ul>`
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
<tr><td>Used by</td><td>India (BIS), ISO, many countries</td><td>USA (ANSI/ASME), Canada, Japan</td></tr>
</tbody></table>
<div class="note mnemonic"><p><b>First angle = opposite side; third angle = same side.</b> In first angle, what you see from the left is drawn on the right.</p></div>`
        },
        {
          title: 'Projection symbol',
          html: `<p class="lead">The symbol in the title block says which method the drawing uses. It is a <b>frustum of a cone</b> (truncated cone) drawn in front view, beside its circular end view.</p>
<figure data-fig="m3-proj-symbols"></figure>
<ul><li><b>First angle</b>: end view (two circles) on the <b>right</b> of the front view.</li><li><b>Third angle</b>: end view on the <b>left</b>.</li></ul>
<div class="note heads-up"><p>The title-block slide in Lecture 1 (slide 17) draws its "first angle" symbol with the circles on the left, which is the third-angle arrangement. Follow Lecture 3 (slide 11): first angle has the circles on the right.</p></div>`
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
        { front: 'First-angle symbol: where are the circles?', back: 'On the right of the truncated cone.' }
      ],
      oneLiners: [
        'Projectors parallel, perpendicular to the plane; observer at infinity.',
        '1st quadrant: above HP, in front of VP.',
        'First angle: top view below, left view on the right.',
        'Third angle: top view above, left view on the left.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-six-views',
      title: 'Six principal views and drawing the views of a block',
      short: 'Six views, problems',
      blurb: 'The glass-box idea, where each of the six views goes, how views line up, and the views of a block worked step by step.',
      source: 'Lecture 3, slides 12–23',
      tabs: [
        {
          title: 'The glass box',
          html: `<p class="lead">How the six principal views are made:</p>
<ol><li>The object is placed in a <b>glass box</b>.</li><li>Its image is projected onto each side of the box.</li><li>The box is <b>unfolded</b> flat.</li><li>The six sides are the principal views: <b>front, top, bottom, left side, right side, rear</b>.</li></ol>
<figure data-fig="m3-six-views-layout"></figure>
<p>The <b>rear view</b> is placed beyond the corresponding side view and clearly labelled.</p>`
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
          html: `<div class="worked"><div class="given"><p>A block has a base 50 × 50 × 10 with two ribs 10 thick on opposite edges. Each rib has a 10 mm wide top, starting 20 mm from the left, and slopes down to the right corner of the base. Draw the front view (from A), side view (from B) and top view (from C) in first angle projection, full size (Lecture 3, slide 18).</p></div><div class="solve"><div class="eq">Front view: base 50 × 10; rib outline from (20, 10) up to (20, 40), across to (30, 40), down the slope to (50, 10)</div><div class="eq">Top view: 50 × 50 square below the front view; the ribs show as strips 10 wide at the front and back, with lines at 20 and 30 from the left</div><div class="eq">Left side view: on the right of the front view; base 50 × 10 with the two ribs as uprights 10 wide and 30 high</div></div></div>
<figure data-fig="m3-ortho-block"></figure>
<div class="note heads-up"><p>The slide gives no height for the ribs. The drawing uses 30 mm above the base, which is what the slide's own views show.</p></div>`
        },
        {
          title: 'Method',
          html: `<ol><li>Draw the <b>XY line</b>.</li><li>Draw the <b>front view</b> above XY (first angle), using widths and heights.</li><li>Drop <b>vertical projectors</b> and draw the <b>top view</b> below XY, using widths and depths.</li><li>Carry heights across with <b>horizontal projectors</b>; carry depths from the top view with a <b>45° line</b>; draw the side view.</li><li>Show <b>hidden edges dashed</b> and <b>axes as centre lines</b>; label each view.</li></ol>
<p>The L-shaped solid (slide 17) is worked this way: length L, width W and height H appear twice each across the three views. Practise the blocks on slides 19–23 the same way.</p>
<div class="note heads-up"><p>In first angle, the front of the object faces <b>away from the front view</b> in both the top view and the side view. Mixing this up flips the side view.</p></div>`
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
        { front: 'In first angle, which way does the front of the object face in the top view?', back: 'Away from the front view (away from XY).' }
      ],
      oneLiners: [
        'Glass box: project, unfold, six views.',
        'Front + top share width; front + side share height; top + side share depth.',
        'Front view: most features, fewest hidden lines.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm3-ortho-principle', src: 'm3/pages/l3-03.png', crop: null, caption: 'Parallel projectors, perpendicular to the plane, from an observer at infinity: a′b′ is the true length of AB.', alt: 'A line AB projected by parallel horizontal rays onto a vertical plane as a′b′.' },
    { id: 'm3-quadrants', src: 'm3/pages/l3-05.png', crop: null, caption: 'The HP and VP divide space into four quadrants; the first and third are used.', alt: 'Side view of a vertical VP and horizontal HP crossing, with the four quadrants labelled.' },
    { id: 'm3-proj-symbols', src: 'm3/pages/l3-11.png', crop: null, caption: 'First angle: end view on the right of the cone. Third angle: on the left.', alt: 'Two symbols each made of a trapezium and two concentric circles, circles on the right for first angle and on the left for third angle.' },
    { id: 'm3-six-views-layout', src: 'm3/pages/l3-16.png', crop: null, caption: 'Placement of the six principal views around the front view in first and third angle.', alt: 'Two cross-shaped arrangements of labelled boxes for the six views.' },
    { id: 'm3-ortho-block', src: 'm3/pages/l3-18.png', crop: null, caption: 'Front, top and left side views of the slide-18 block in first angle, with projectors.', alt: 'Front view with a sloping rib, top view square with two strips, side view with two uprights, around an XY line.' }
  ]
});
