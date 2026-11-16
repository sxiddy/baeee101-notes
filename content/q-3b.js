QUESTIONS({
  chunk: '3b',
  questions: [
    {
      id: 'm3-3b-01', module: 'm3', topic: 'm3-ortho-basics', type: 'interpret', level: 1,
      q: `<p>You pick up a drawing. The top view is drawn <b>below</b> the front view and the left side view is on the <b>right</b> of the front view. Which projection method was used, and which symbol should be in the title block?</p>`,
      options: ['Third angle; circles on the left of the cone', 'First angle; circles on the right of the cone', 'First angle; circles on the left of the cone', 'Third angle; circles on the right of the cone'],
      correct: 1,
      answer: `<p><b>First angle; the symbol has the circles (end view) on the right of the truncated cone.</b></p>`,
      explain: `<p>In first angle the object is in the first quadrant, between the observer and the plane, and each view is drawn on the side opposite to where it is seen from: top view below, left view on the right. The symbol follows the same rule, with the end view of the frustum on the right.</p>`,
      points: ['First angle: top view below, left view on the right', 'Opposite side rule', 'Symbol: circles on the right']
    },
    {
      id: 'm3-3b-02', module: 'm3', topic: 'm3-ortho-basics', type: 'explain', level: 2,
      q: `<p>A classmate asks why nobody draws objects in the second or fourth quadrant. Explain using what happens when the HP is rotated.</p>`,
      options: null, correct: null,
      answer: `<p><b>In the 2nd and 4th quadrants the front and top views end up on the same side of XY and overlap after the HP is rotated, so the drawing cannot be read.</b></p>`,
      explain: `<p>After projecting, the HP is rotated through 90° to lie in the plane of the VP. For an object in the 1st quadrant, the front view lands above XY and the top view below; in the 3rd it is the other way round. In the 2nd and 4th quadrants both views fall on the same side and overlap, so only the 1st and 3rd quadrants are used.</p>`,
      points: ['HP rotated 90° into the VP', '1st and 3rd: views on opposite sides of XY', '2nd and 4th: views overlap']
    },
    {
      id: 'm3-3b-03', module: 'm3', topic: 'm3-ortho-basics', type: 'predict', level: 2,
      q: `<p>A rod AB 60 mm long is parallel to the VP. What length does its front view a′b′ have, and why does orthographic projection guarantee this?</p>`,
      options: ['Less than 60 mm, because of perspective', 'Exactly 60 mm, because the projectors are parallel and perpendicular to the plane', 'More than 60 mm', 'It depends on how far away the observer is'],
      correct: 1,
      answer: `<p><b>Exactly 60 mm.</b></p>`,
      explain: `<p>In orthographic projection the observer is at infinity, so the projectors are parallel to each other and perpendicular to the plane. A line parallel to the plane is therefore projected at its true length, whatever its distance from the plane.</p>`,
      points: ['Observer at infinity', 'Projectors parallel, perpendicular to the plane', 'Parallel line → true length']
    },
    {
      id: 'm3-3b-04', module: 'm3', topic: 'm3-six-views', type: 'decide', level: 1,
      q: `<p>A part looks like a plain rectangle from one side, but from another side it shows a slot, a hole and a step with no hidden lines. Which side should be the front view?</p>`,
      options: null, correct: null,
      answer: `<p><b>The side with the slot, hole and step.</b></p>`,
      explain: `<p>The front view is chosen to show the most features of the object and usually the fewest hidden lines. It is drawn first, and the other views are projected from it.</p>`,
      points: ['Most features', 'Fewest hidden lines', 'Drawn first; others follow']
    },
    {
      id: 'm3-3b-05', module: 'm3', topic: 'm3-six-views', type: 'troubleshoot', level: 2,
      q: `<p>A student draws the side view of a block in first angle and finds that a step that should be at the front of the object appears next to the front view instead of away from it. What went wrong?</p>`,
      options: null, correct: null,
      answer: `<p><b>The side view was drawn with the front of the object facing the front view, which is the third angle arrangement.</b></p>`,
      explain: `<p>In first angle the front of the object faces away from the front view in both the top view and the side view. Depth should be carried from the top view to the side view with a 45° line, which keeps the front and back the right way round.</p>`,
      points: ['First angle: front of object away from the FV', 'Carry depth with a 45° line', 'Otherwise the view is mirrored']
    },
    {
      id: 'm3-3b-06', module: 'm3', topic: 'm3-six-views', type: 'predict', level: 2,
      q: `<p>The block on page 18 has a 50 × 50 × 10 base with two 10 mm ribs on opposite edges, each 30 mm high above the base. What are the overall sizes of the front, top and left side views?</p>`,
      options: ['FV 50 × 40, TV 50 × 50, LSV 50 × 40', 'FV 50 × 30, TV 50 × 50, LSV 50 × 30', 'FV 50 × 40, TV 50 × 40, LSV 40 × 50', 'FV 40 × 50, TV 50 × 50, LSV 50 × 50'],
      correct: 0,
      answer: `<p><b>FV 50 wide × 40 high, TV 50 × 50, LSV 50 deep × 40 high.</b></p>`,
      explain: `<p>Total height is 10 (base) + 30 (rib) = 40. The front view shows width and height (50 × 40); the top view shows width and depth (50 × 50); the side view shows depth and height (50 × 40). Front and top share the width; front and side share the height.</p>`,
      points: ['Height 10 + 30 = 40', 'FV: width × height', 'TV: width × depth', 'LSV: depth × height']
    },
    {
      id: 'm3-3b-07', module: 'm3', topic: 'm3-solids-intro', type: 'decide', level: 1,
      q: `<p>A cone is cut by a plane parallel to its base, and another cone by a plane tilted to the base. Name the two pieces that keep the base.</p>`,
      options: ['Both are frustums', 'The first is a frustum, the second a truncated cone', 'The first is truncated, the second a frustum', 'Both are truncated cones'],
      correct: 1,
      answer: `<p><b>Frustum (cut parallel to the base) and truncated cone (cut not parallel).</b></p>`,
      explain: `<p>A frustum is left when a pyramid or cone is cut by a plane parallel to its base, so the top and bottom are similar. A truncated solid is cut by a plane that is not parallel to the base, so the cut face is not similar to the base.</p>`,
      points: ['Frustum: cut parallel to the base', 'Truncated: cut inclined', 'The projection symbol is a frustum of a cone']
    },
    {
      id: 'm3-3b-08', module: 'm3', topic: 'm3-solids-hp', type: 'decide', level: 1,
      q: `<p>A hexagonal pyramid stands on its base on the HP. Which view do you draw first, and why?</p>`,
      options: ['Front view, because it is always first', 'Top view, because the base is parallel to the HP and shows its true shape there', 'Side view, because the axis is vertical', 'Any view; the order does not matter'],
      correct: 1,
      answer: `<p><b>The top view.</b> The base lies on the HP, so the top view shows the true hexagon.</p>`,
      explain: `<p>When the axis is perpendicular to the HP, the base is parallel to the HP and appears in its true shape in the top view. That view is drawn first; the front view is projected up from its corners, with the apex at the axis height.</p>`,
      points: ['Axis ⊥ HP → top view first', 'True shape of the base in the top view', 'Project the front view up']
    },
    {
      id: 'm3-3b-09', module: 'm3', topic: 'm3-solids-hp', type: 'numerical', level: 2,
      q: `<p>A triangular prism, base 40 mm side, axis 50 mm, stands on its base on the HP with one rectangular face perpendicular to the VP. What are the width and height of its front view?</p>`,
      options: null, correct: null,
      answer: `<p><b>34.6 mm wide and 50 mm high.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>The face perpendicular to the VP is seen edge-on, so the front view's width is the triangle's height measured from that side to the opposite corner.</p></div><div class="solve"><div class="eq">width = 40 × √3 / 2 = 34.6 mm</div><div class="eq">height = axis = 50 mm</div></div></div>`,
      points: ['Face ⊥ VP seen as a line', 'Width = triangle height = 34.6 mm', 'Height = axis = 50 mm']
    },
    {
      id: 'm3-3b-10', module: 'm3', topic: 'm3-solids-hp', type: 'interpret', level: 2,
      q: `<p>In the front view of a hexagonal pyramid standing on the HP, two slant edges are dashed. Where are these edges on the actual solid?</p>`,
      options: null, correct: null,
      answer: `<p><b>They run to the base corners at the back, nearest the VP, and are hidden behind the front faces.</b></p>`,
      explain: `<p>Viewed from the front, the faces that face the observer hide the edges behind them. Slant edges going to the rear corners lie behind the solid, so they are drawn as dashed (hidden) lines. In the top view nothing is hidden, because every face slopes up towards the apex.</p>`,
      points: ['Rear slant edges hidden in the FV', 'Dashed thin line', 'Top view: no hidden edges']
    },
    {
      id: 'm3-3b-11', module: 'm3', topic: 'm3-solids-vp', type: 'decide', level: 2,
      q: `<p>A pentagonal prism lies with its pentagonal ends parallel to the VP and one rectangular face at 45° to the HP. Which view is drawn first?</p>`,
      options: ['Top view', 'Front view', 'Side view', 'Auxiliary view'],
      correct: 1,
      answer: `<p><b>The front view.</b> The ends are parallel to the VP, so the pentagon shows its true shape there.</p>`,
      explain: `<p>With the axis perpendicular to the VP, the end faces are parallel to the VP. Draw the edge at 45° to XY with its lower corner on XY, construct the regular pentagon on it, then project the top view down with length equal to the axis.</p>`,
      points: ['Axis ⊥ VP → front view first', 'Pentagon true shape in FV', 'Project the top view down']
    },
    {
      id: 'm3-3b-12', module: 'm3', topic: 'm3-solids-vp', type: 'predict', level: 2,
      q: `<p>A square pyramid has its base in the VP and its axis (65 mm) perpendicular to the VP. Where do the base corners and the apex appear in the top view?</p>`,
      options: null, correct: null,
      answer: `<p><b>The base corners lie on XY; the apex is 65 mm below XY.</b></p>`,
      explain: `<p>A point in the VP is zero distance in front of it, so its top view is on XY. The apex is 65 mm in front of the VP, and in first angle distances in front of the VP are measured below XY in the top view.</p>`,
      points: ['In the VP → on XY in the TV', 'Distance in front of the VP → below XY', 'Apex 65 mm below XY']
    },
    {
      id: 'm3-3b-13', module: 'm3', topic: 'm3-solids-vp', type: 'design', level: 3,
      q: `<p>A triangular prism lies on one rectangular face on the HP with its axis parallel to both the HP and the VP. Plan the order of views and say why.</p>`,
      options: null, correct: null,
      answer: `<p><b>Side view first (the true triangle), then the front view by horizontal projection, then the top view from both.</b></p>`,
      explain: `<p>With the axis parallel to both planes, neither the front nor the top view shows the true shape of the triangular ends; only the side (profile) view does. Draw the equilateral triangle with one side on XY, project the front view across (a rectangle as high as the triangle, length = axis) and derive the top view from the front and side views.</p>`,
      points: ['Axis ∥ HP and VP → side view first', 'Front view by horizontal projection', 'Top view from FV and SV', 'Draw first the view where the axis is a point']
    },
    {
      id: 'm3-3b-14', module: 'm3', topic: 'm3-solids-vp', type: 'interpret', level: 1,
      q: `<p>A cylinder rests on the HP with its axis perpendicular to the VP. In what way does it touch the HP, and what is its front view?</p>`,
      options: ['At one point; front view a rectangle', 'Along one generator; front view a circle touching XY', 'Along its whole base; front view a circle above XY', 'Along two generators; front view a rectangle'],
      correct: 1,
      answer: `<p><b>Along one generator; the front view is a circle touching XY.</b></p>`,
      explain: `<p>The axis is perpendicular to the VP, so the circular ends are parallel to the VP and appear as a true circle in the front view, resting on XY. Lying on its curved surface, the cylinder touches the HP along one straight generator.</p>`,
      points: ['Ends parallel to VP → circle in FV', 'Touches HP along a generator', 'Top view is a rectangle']
    }
  ]
});
