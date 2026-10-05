CHUNK({
  chunk: 'D',
  module: 'm3',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm3-nanomaterials',
      title: 'What nanomaterials are',
      short: 'What nanomaterials are',
      blurb: 'The 100 nm rule, how small a nanometre really is, and where engineered nanomaterials already turn up, from sunscreen to tennis balls.',
      source: 'Slides 2–7',
      tabs: [
        { title: 'Definition', html: `
          <p class="lead">A <b>nanomaterial</b> is any substance with <b>at least one dimension below about 100 nm</b>. At that size it picks up <b>new optical, magnetic, electrical and other properties</b> that the same material doesn't show in bulk.</p>
          <div class="kv">
            <div><span>Size rule</span><b>at least one dimension &lt; ~100 nm</b></div>
            <div><span>1 nanometre</span><b>10<sup>−9</sup> m</b></div>
            <div><span>Same thing</span><b>one millionth of a mm</b></div>
            <div><span>Next to a human hair</span><b>~100,000× smaller</b></div>
          </div>
          <h3>Why the field is growing</h3>
          <ul>
            <li>Nanomaterials are the <b>cornerstones</b> of nanoscience and nanotechnology.</li>
            <li>Nanostructure science and technology is a <b>broad, interdisciplinary</b> research area that has grown explosively worldwide in the past few years.</li>
            <li>It could <b>revolutionise how materials and products are made</b>, and widen the range and nature of functions we can get from them.</li>
            <li>It already has a <b>significant commercial impact</b>, and that will keep increasing.</li>
            <li>The new properties could make big impacts in <b>electronics and medicine</b>, among other fields.</li>
          </ul>
          <p>This part of Module 3 (Functional Materials) runs: introduction, top-down and bottom-up synthesis, bulk vs nano gold, then quantum dots.</p>
          <div class="note why"><p>Size changes properties because, below about 100 nm, a big share of the atoms sit on the surface and the electrons start to feel the edges of the particle. Both ideas get their own topic later ("Why nano is different").</p></div>
          <div class="note exam"><p>In a definition, the key phrase is <b>"at least one dimension"</b>. A nanowire several microns long still counts, because its width is in the nanoscale.</p></div>
        ` },
        { title: 'How small is nano', html: `
          <p class="lead"><b>Nano</b> means a billionth: <b>1 nm = 10<sup>−9</sup> m</b>, which is a millionth of a millimetre. An atom is about <b>0.1 nm</b>, so <b>10 atoms side by side</b> make one nanometre.</p>
          <table class="tbl">
            <thead><tr><th>Object (slide 5)</th><th>Rough size</th></tr></thead>
            <tbody>
              <tr><td>Atom</td><td>~0.1 nm</td></tr>
              <tr><td>Water molecule</td><td>10<sup>−1</sup> nm</td></tr>
              <tr><td>Glucose</td><td>1 nm</td></tr>
              <tr><td>Antibody</td><td>10 nm</td></tr>
              <tr><td>Virus</td><td>10<sup>2</sup> nm</td></tr>
              <tr><td>Bacterium</td><td>10<sup>3</sup> nm</td></tr>
              <tr><td>Cancer cell</td><td>10<sup>4</sup> nm</td></tr>
              <tr><td>Human hair (diameter)</td><td><b>50,000–100,000 nm</b></td></tr>
              <tr><td>A full stop (period)</td><td>10<sup>6</sup> nm</td></tr>
              <tr><td>Tennis ball</td><td>10<sup>8</sup> nm</td></tr>
            </tbody>
          </table>
          <figure data-fig="m3-nanoscale-chart"></figure>
          <p>The nanoscale window on that chart holds the <b>nanodevices</b>: nanopores, dendrimers, nanotubes, quantum dots and nanoshells.</p>
          <figure data-fig="m3-gold-np-hair"></figure>
          <div data-viz="nano-scale"></div>
          <p><em>Try it:</em> zoom from 1 mm down to 0.1 nm and watch where the 1–100 nm band begins. A virus and a quantum dot land inside it; a bacterium does not.</p>
          <div class="mnemonic"><p>Nano sounds like nine: 1 nm = 10<sup>−9</sup> m. Milli is 10<sup>−3</sup>, so a nanometre is a millionth of a millimetre (100 nm = 0.0001 mm).</p></div>
        ` },
        { title: 'Where they are used', html: `
          <p class="lead">Some nanomaterials occur naturally. The ones that matter commercially are <b>engineered nanomaterials (EN)</b>: designed on purpose, and already inside many products and processes.</p>
          <table class="tbl">
            <thead><tr><th>Where</th><th>What's used</th></tr></thead>
            <tbody>
              <tr><td>Everyday items</td><td><b>Sunscreens</b>, cosmetics, sporting goods, stain-resistant clothing, tyres, electronics</td></tr>
              <tr><td>Medicine</td><td><b>Diagnosis, imaging and drug delivery</b></td></tr>
              <tr><td>Nanocoatings and nanocomposites</td><td>Windows, sports equipment, bicycles, automobiles</td></tr>
              <tr><td>Glass bottles</td><td><b>UV-blocking coatings</b> that protect drinks from sunlight damage</td></tr>
              <tr><td>Tennis balls</td><td>Last longer with a <b>butyl-rubber / nano-clay composite</b></td></tr>
              <tr><td>Nanoscale TiO<sub>2</sub></td><td>Cosmetics, sun-block creams, <b>self-cleaning windows</b></td></tr>
              <tr><td>Nanoscale silica</td><td><b>Filler</b> in cosmetics and dental fillings</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Nano TiO<sub>2</sub> works in sun-block because it still absorbs UV, but its particles are too small to scatter much visible light, so the cream goes on clear instead of chalky white. On windows, TiO<sub>2</sub> uses sunlight to break down dirt (photocatalysis).</p></div>
          <h3>Fields of use (slide 7)</h3>
          <div class="chips"><span class="chip">Information technology</span><span class="chip">Mechanical engineering / robotics</span><span class="chip">Biotechnology</span><span class="chip">Transportation</span><span class="chip">National security &amp; defence</span><span class="chip">Food &amp; agriculture</span><span class="chip">Medicine / health</span><span class="chip">Aerospace</span><span class="chip">Energy &amp; environment</span><span class="chip">Advanced materials &amp; textiles</span></div>
          <figure data-fig="m3-nano-uses-map"></figure>
        ` }
      ],
      flashcards: [
        { front: 'What size rule makes something a nanomaterial?', back: '<b>At least one dimension below about 100 nm.</b>' },
        { front: '1 nm in metres and in millimetres?', back: '<b>10<sup>−9</sup> m</b>, which is <b>one millionth of a millimetre</b>.' },
        { front: 'About how many atoms side by side make 1 nm?', back: '<b>10</b>. One atom is about <b>0.1 nm</b>.' },
        { front: 'Diameter of a human hair in nanometres?', back: '<b>50,000–100,000 nm</b>. A nanometre is about 100,000 times smaller.' },
        { front: 'What is an engineered nanomaterial (EN)?', back: 'A nanomaterial <b>designed on purpose</b> for commercial products and processes, as opposed to one that occurs naturally.' },
        { front: 'Uses of nanoscale TiO<sub>2</sub>?', back: '<b>Cosmetics, sun-block creams and self-cleaning windows.</b>' },
        { front: 'What is nanoscale silica used for?', back: 'As a <b>filler</b> in cosmetics and <b>dental fillings</b>.' },
        { front: 'What makes some tennis balls last longer?', back: 'A <b>butyl-rubber / nano-clay composite</b>.' },
        { front: 'Three medical uses of nanomaterials?', back: '<b>Diagnosis, imaging and drug delivery.</b>' },
        { front: 'Name the five nanodevices on the slide-5 scale chart.', back: '<b>Nanopores, dendrimers, nanotubes, quantum dots, nanoshells.</b>' }
      ],
      oneLiners: [
        'Nanomaterial: at least one dimension below ~100 nm.',
        '1 nm = 10<sup>−9</sup> m = one millionth of a mm; about 10 atoms side by side.',
        'Human hair: 50,000–100,000 nm across, so a nanometre is ~100,000× smaller.',
        'Engineered nanomaterials (EN) are designed on purpose; some nanomaterials occur naturally.',
        'Nano TiO<sub>2</sub>: cosmetics, sun-block, self-cleaning windows. Nano silica: filler in cosmetics and dental fillings.',
        'UV-blocking nanocoatings protect bottled drinks; butyl-rubber/nano-clay makes tennis balls last longer.',
        'Nanomaterials in medicine: diagnosis, imaging, drug delivery.'
      ],
      formulas: [
        { name: 'Nanometre', html: `1 nm = 10<sup>−9</sup> m = 10<sup>−6</sup> mm`, note: 'An atom is about 0.1 nm, so 10 atoms side by side ≈ 1 nm.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-nano-classes',
      title: 'Classifying nanomaterials',
      short: 'Classifying nano',
      blurb: 'Two ways to sort nanomaterials: by how many dimensions escape the nanoscale (0D to 3D), and by what they are made of.',
      source: 'Slides 8–9',
      tabs: [
        { title: '0D, 1D, 2D, 3D', html: `
          <p class="lead">This scheme counts <b>free dimensions</b>: how many of the three dimensions are allowed to be <b>outside the nanoscale</b>. Zero free dimensions means 0D.</p>
          <table class="tbl">
            <thead><tr><th>Class</th><th>In nanoscale</th><th>Outside</th><th>Shape</th><th>Examples</th></tr></thead>
            <tbody>
              <tr><td><b>0D</b></td><td>all three</td><td>none</td><td>dot, particle</td><td>Nanoparticles, colloids, <b>quantum dots</b></td></tr>
              <tr><td><b>1D</b></td><td>two</td><td>one</td><td>wire, rod, tube</td><td>Nanowires, nanorods, <b>nanotubes</b>, biopolymers</td></tr>
              <tr><td><b>2D</b></td><td>one</td><td>two (any two)</td><td>plate-like</td><td>Nanolayers, surface coatings, <b>thin films</b></td></tr>
              <tr><td><b>3D</b></td><td>none</td><td>all three</td><td>bulk built from nano units</td><td>Nanoparticle dispersions, nanowire / nanotube <b>bundles</b>, multiple nanolayers</td></tr>
            </tbody>
          </table>
          <figure data-fig="m3-nano-dims-images"></figure>
          <div class="note trap"><p>The number counts the dimensions that are <b>not</b> nano. A quantum dot is a solid object, yet it is <b>0D</b>, because none of its dimensions leave the nanoscale. A 3D nanomaterial is big in every direction, and it still counts because it is <b>made of nanomaterials</b>.</p></div>
          <div data-viz="nano-dims"></div>
          <p><em>Try it:</em> step through 0D, 1D, 2D and 3D and count the arrows that are longer than 100 nm. That count is the class.</p>
          <div class="mnemonic"><p>Count the long sides: dot 0, wire 1, sheet 2, block 3.</p></div>
        ` },
        { title: 'By material', html: `
          <p class="lead">The second way to sort nanomaterials is by <b>what they are made of</b>: <b>carbon-based</b>, <b>inorganic</b> or <b>polymeric</b>.</p>
          <table class="tbl">
            <thead><tr><th>Category</th><th>Type</th><th>Examples</th></tr></thead>
            <tbody>
              <tr><td>Carbon-based (organic)</td><td>–</td><td><b>Fullerenes, carbon nanotubes</b></td></tr>
              <tr><td rowspan="3">Inorganic</td><td>Metal oxides</td><td><b>Zinc oxide</b>, iron oxide, cerium oxide</td></tr>
              <tr><td>Metals</td><td><b>Gold</b>, silver, iron</td></tr>
              <tr><td>Quantum dots</td><td><b>Cadmium sulfide</b>, cadmium selenide</td></tr>
              <tr><td>Polymeric</td><td>–</td><td>no examples given on the slide</td></tr>
            </tbody>
          </table>
          <figure data-fig="m3-nano-categories"></figure>
          <div class="note exam"><p>The two schemes stack. A carbon nanotube is <b>carbon-based</b> and <b>1D</b>. A CdSe quantum dot is <b>inorganic</b> and <b>0D</b>. A "classify this material" question usually wants both labels.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'What does the "D" number in 0D–3D count?', back: 'The number of <b>free dimensions</b>: dimensions allowed <b>outside the nanoscale</b>.' },
        { front: '0D nanomaterial: definition and examples?', back: '<b>All three dimensions in the nanoscale.</b> Nanoparticles, colloids, quantum dots.' },
        { front: '1D nanomaterial: definition and examples?', back: '<b>One dimension beyond the nanoscale, two inside.</b> Nanowires, nanorods, nanotubes, biopolymers.' },
        { front: '2D nanomaterial: definition and examples?', back: '<b>One dimension in the nanoscale</b>, any two outside. Plate-like: nanolayers, surface coatings, thin films.' },
        { front: '3D nanomaterial: definition and examples?', back: '<b>All three dimensions outside the nanoscale</b>, but made of nanomaterials. Nanoparticle dispersions, nanowire/nanotube bundles, multiple nanolayers.' },
        { front: 'Three material categories of nanomaterials?', back: '<b>Carbon-based (organic), inorganic, polymeric.</b>' },
        { front: 'Three inorganic sub-types, with examples?', back: '<b>Metal oxides</b> (ZnO, iron oxide, cerium oxide), <b>metals</b> (Au, Ag, Fe), <b>quantum dots</b> (CdS, CdSe).' },
        { front: 'Fullerenes and carbon nanotubes belong to which category?', back: '<b>Carbon-based (organic)</b> nanomaterials.' }
      ],
      oneLiners: [
        'Classification by free dimensions = how many dimensions lie outside the nanoscale.',
        '0D: all three nano (nanoparticles, colloids, quantum dots).',
        '1D: two nano, one long (nanowires, nanorods, nanotubes, biopolymers).',
        '2D: one nano (nanolayers, surface coatings, thin films).',
        '3D: none nano, but built from nanomaterials (dispersions, bundles, multiple nanolayers).',
        'By material: carbon-based (fullerenes, CNTs), inorganic (metal oxides, metals, quantum dots such as CdS/CdSe), polymeric.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-nano-gold',
      title: 'Bulk gold vs nano gold',
      short: 'Bulk vs nano gold',
      blurb: 'Why nanomaterials drew so much interest, how gold and silver particles change colour with size and shape, surface plasmon resonance, and the full bulk vs nano gold table.',
      source: 'Slides 10–14',
      tabs: [
        { title: 'Why the interest', html: `
          <p class="lead">Nanomaterials drew attention because of their unusual <b>mechanical, electrical, optical and magnetic</b> properties. The slides give three quick examples, then use gold as the full case study.</p>
          <table class="tbl">
            <thead><tr><th>Material</th><th>What's special</th></tr></thead>
            <tbody>
              <tr><td>Nanophase ceramics</td><td><b>More ductile at high temperatures</b> than coarse-grained ceramics</td></tr>
              <tr><td>Nanostructured metal oxide (MnO<sub>2</sub>)</td><td>Used in <b>rechargeable batteries</b> for cars and consumer goods</td></tr>
              <tr><td>Very small particles</td><td>Special atomic structures with <b>discrete electronic states</b>, giving special properties plus <b>superparamagnetism</b></td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Ordinary ceramics are brittle. With nanometre-sized grains, the grains can slide past each other at high temperature, so the ceramic deforms instead of cracking.</p></div>
          <div class="note why"><p><b>Superparamagnetism</b>: each tiny particle is a single magnetic domain. Heat keeps flipping its magnetic direction at random, so it holds no magnetism on its own, yet it responds strongly as soon as a magnetic field is applied.</p></div>
          <figure data-fig="m3-gold-macro-nano"></figure>
          <p>Gold makes the contrast obvious: the <b>same element</b> is a shiny yellow bar in bulk and a <b>deep red liquid</b> as nanoparticles.</p>
        ` },
        { title: 'Colour, size & shape', html: `
          <p class="lead">Nano gold is <b>never gold-coloured</b>. Its colour is set by the particle's <b>size and shape</b>, and silver behaves the same way.</p>
          <table class="tbl">
            <thead><tr><th>Particles in glass</th><th>Size</th><th>Shape</th><th>Colour reflected</th></tr></thead>
            <tbody>
              <tr><td>Gold</td><td>25 nm</td><td>sphere</td><td><b>red</b></td></tr>
              <tr><td>Gold</td><td>50 nm</td><td>sphere</td><td><b>green</b></td></tr>
              <tr><td>Gold</td><td>100 nm</td><td>sphere</td><td><b>orange</b></td></tr>
              <tr><td>Silver</td><td>40 nm</td><td>sphere</td><td>blue</td></tr>
              <tr><td>Silver</td><td>100 nm</td><td>sphere</td><td>yellow</td></tr>
              <tr><td>Silver</td><td>100 nm</td><td>prism</td><td>red</td></tr>
            </tbody>
          </table>
          <figure data-fig="m3-au-ag-colours"></figure>
          <ul>
            <li>Nanomaterials <b>scatter visible light rather than absorb</b> it (the note on slide 13).</li>
            <li>The <b>distance between particles</b> also affects the colour.</li>
          </ul>
          <div class="note trap"><p>Size alone doesn't decide it. Silver at the same <b>100 nm</b> reflects yellow as spheres but red as <b>prisms</b>.</p></div>
          <div class="note why"><p>Spacing matters because particles sitting close together couple their electron oscillations, which shifts the resonance. That is why a red gold sol turns bluish-purple when the particles clump together.</p></div>
        ` },
        { title: 'Surface plasmon resonance', html: `
          <p class="lead">The colours come mainly from <b>surface plasmon resonance (SPR)</b>: light's electromagnetic field sets the electrons on the particle's surface oscillating <b>together</b>.</p>
          <ol class="steps">
            <li><b>Light hits the particle</b> its oscillating electric field pushes on the free electrons at the surface.</li>
            <li><b>Electrons oscillate together</b> the whole surface electron cloud sloshes back and forth against the metal core.</li>
            <li><b>Resonance</b> at certain wavelengths the push matches that natural oscillation, and those wavelengths are absorbed.</li>
            <li><b>Colour</b> the other wavelengths are scattered or reflected, and that is the colour you see.</li>
          </ol>
          <p>The resonance is sensitive to the particle's <b>size, shape and material</b>, so the colour, and the optical properties in general, can be <b>tuned</b>.</p>
          <div data-viz="gold-color"></div>
          <p><em>Try it:</em> slide the gold size through 25, 50 and 100 nm and watch the reflected colour go red, green, orange. Then toggle to bulk and compare the melting points.</p>
          <div class="note why"><p>Slide 13 says nanomaterials scatter rather than absorb, while the SPR line says some wavelengths are absorbed and others scattered. Both happen at resonance. Bigger particles scatter a larger share, and the "colour reflected" in the figure is that scattered light.</p></div>
          <div class="note exam"><p>To explain why nano gold is red, write: <b>SPR</b>, a collective oscillation of <b>surface electrons</b> driven by light; certain wavelengths absorbed, the rest scattered; colour set by <b>size, shape and material</b>, and by particle spacing.</p></div>
        ` },
        { title: 'Bulk vs nano table', html: `
          <p class="lead">Slide 14 lines up <b>11 properties of bulk gold</b> against what changes in nano gold. Learn the rows in pairs.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Bulk gold</th><th>Nano gold</th></tr></thead>
            <tbody>
              <tr><td>1</td><td><b>Lustrous</b>: shiny surface when polished</td><td><b>Never gold in colour</b>; found in a range of colours</td></tr>
              <tr><td>2</td><td><b>Malleable</b>: can be hammered, bent or rolled into any shape</td><td>Size and shape of the particles <b>decide the colour</b></td></tr>
              <tr><td>3</td><td><b>Ductile</b>: can be drawn out into wires</td><td>e.g. gold particles in glass: <b>25 nm red</b>, 50 nm green, 100 nm orange (reflected)</td></tr>
              <tr><td>4</td><td><b>Metallic</b>, yellow when in a mass</td><td>Not "metals" but <b>semiconductors</b> (band gap = <b>3.4 eV</b>)</td></tr>
              <tr><td>5</td><td><b>Good conductor</b> of heat and electricity</td><td><b>Very good catalysts</b></td></tr>
              <tr><td>6</td><td>Generally <b>high density</b></td><td>–</td></tr>
              <tr><td>7</td><td><b>High melting point</b> (~1080 °C)</td><td>Melts at a relatively <b>low temperature (~940 °C)</b></td></tr>
              <tr><td>8</td><td>Often <b>hard and tough</b>, high tensile strength</td><td>–</td></tr>
              <tr><td>9</td><td>High resistance to the <b>stresses of being stretched</b> or drawn out</td><td>–</td></tr>
              <tr><td>10</td><td><b>Not easily breakable</b></td><td>–</td></tr>
              <tr><td>11</td><td><b>Inert</b>: unaffected by air and most reagents</td><td>–</td></tr>
            </tbody>
          </table>
          <div class="note why"><p><b>Lower melting point</b>: surface atoms have fewer neighbours holding them in place, so less heat frees them, and a nanoparticle is mostly surface. The smaller the particle, the lower it melts. <b>Catalysis</b> follows the same logic: more exposed, loosely held atoms means more active sites, which is how inert bulk gold (row 11) turns into a very good catalyst (row 5).</p></div>
          <div class="note heads-up"><p>The slide calls nano gold a <b>semiconductor with a 3.4 eV band gap</b>; write that in the exam. The standard picture is different: gold particles big enough to show SPR colours still have free electrons and behave as metals. Only very small clusters, around 2 nm and below, open up a real gap between levels, and 3.4 eV is not a textbook value for gold.</p></div>
          <div class="note heads-up"><p>Bulk gold's melting point is printed as <b>~1080 °C</b>. The standard value is <b>1064 °C</b>.</p></div>
          <div class="note exam"><p>For a bulk vs nano gold answer, draw this two-column table. Pair up colour (rows 1–3), metal vs semiconductor (row 4), conductor vs catalyst (row 5) and melting point (row 7).</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Why are nanophase ceramics interesting?', back: 'They are <b>more ductile at high temperatures</b> than coarse-grained ceramics.' },
        { front: 'What is nanostructured MnO<sub>2</sub> used for?', back: '<b>Rechargeable batteries</b> for cars and consumer goods.' },
        { front: 'What gives very small particles their special properties, per slide 10?', back: 'Special atomic structures with <b>discrete electronic states</b>, plus <b>superparamagnetism</b>.' },
        { front: 'Colour reflected by gold spheres in glass at 25, 50 and 100 nm?', back: '<b>Red, green, orange.</b>' },
        { front: 'Colour of silver particles in glass: 40 nm sphere, 100 nm sphere, 100 nm prism?', back: '<b>Blue, yellow, red.</b>' },
        { front: 'What is surface plasmon resonance?', back: 'Light\'s electromagnetic field drives a <b>collective oscillation of surface electrons</b>; certain wavelengths are absorbed and the rest scattered or reflected, giving the colour.' },
        { front: 'What does the colour of metal nanoparticles depend on?', back: '<b>Size, shape and material</b>, and the <b>distance between particles</b>.' },
        { front: 'Melting point of bulk vs nano gold (slide values)?', back: 'Bulk <b>~1080 °C</b>, nano <b>~940 °C</b>.' },
        { front: 'How does the slide describe nano gold electrically?', back: 'Not a metal but a <b>semiconductor</b>, band gap <b>3.4 eV</b> (slide value).' },
        { front: 'Bulk gold is inert. What is nano gold instead?', back: 'A <b>very good catalyst</b>.' }
      ],
      oneLiners: [
        'Nanophase ceramics: more ductile at high temperature than coarse-grained ceramics.',
        'Nanostructured MnO<sub>2</sub>: rechargeable batteries for cars and consumer goods.',
        'Nano gold is never gold-coloured; size and shape decide the colour.',
        'Gold in glass: 25 nm red, 50 nm green, 100 nm orange (reflected).',
        'Colour comes from surface plasmon resonance: collective oscillation of surface electrons.',
        'Bulk Au melts ~1080 °C (slide), nano Au ~940 °C.',
        'Bulk gold: inert, good conductor. Nano gold: very good catalyst, "semiconductor" with 3.4 eV gap (slide value).'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-why-nano',
      title: 'Why nano is different',
      short: 'Why nano is different',
      blurb: 'The two root causes, more surface per volume and quantum effects, and what they do to catalysis, light, conductivity, strength, magnetism and biology.',
      source: 'Slides 15–17',
      tabs: [
        { title: 'Surface area to volume', html: `
          <p class="lead">Two things make nanomaterials behave differently: <b>increased relative surface area</b> and <b>new quantum effects</b>. Start with surface area.</p>
          <p>Cut a bulk piece into many small pieces and the <b>total volume stays the same</b>, but the <b>collective surface area</b> rises sharply.</p>
          <table class="tbl">
            <thead><tr><th>Cut</th><th>Edge of one piece</th><th>Pieces</th><th>Total area</th></tr></thead>
            <tbody>
              <tr><td>none</td><td>1 cm</td><td>1</td><td>6 × 1 cm<sup>2</sup> = <b>6 cm<sup>2</sup></b></td></tr>
              <tr><td>2 per edge</td><td>1/2 cm</td><td>8</td><td>6 × (1/2 cm)<sup>2</sup> × 8 = <b>12 cm<sup>2</sup></b></td></tr>
              <tr><td>3 per edge</td><td>1/3 cm</td><td>27</td><td>6 × (1/3 cm)<sup>2</sup> × 27 = <b>18 cm<sup>2</sup></b></td></tr>
            </tbody>
          </table>
          <figure data-fig="m3-cube-surface-area"></figure>
          <div class="eq" data-label="General rule">Total area = 6 × (a/n)<sup>2</sup> × n<sup>3</sup> = 6a<sup>2</sup>n</div>
          <p>Here a is the original edge and n the number of cuts per edge. Area grows in step with n, while the volume a<sup>3</sup> never changes.</p>
          <div class="worked">
            <div class="given"><p>A 1 cm cube (1 cm<sup>3</sup>) is cut into cubes 10 nm on a side.</p></div>
            <div class="solve"><p>n = 1 cm ÷ 10 nm = 10<sup>7</sup> nm ÷ 10 nm = 10<sup>6</sup></p><div class="eq">Area = 6 × (1 cm)<sup>2</sup> × 10<sup>6</sup> = 6 × 10<sup>6</sup> cm<sup>2</sup></div></div>
            <div class="result"><p>6 × 10<sup>6</sup> cm<sup>2</sup> = <b>600 m<sup>2</sup></b>, from the same 1 cm<sup>3</sup> of material.</p></div>
          </div>
          <div class="note why"><p>Reactions happen at surfaces. More surface per gram means more exposed atoms and more sites for molecules to react on, which gives <b>better catalytic efficiency</b>.</p></div>
          <div data-viz="sa-volume"></div>
          <p><em>Try it:</em> push n from 1 to 3 and check the slide's 6, 12 and 18 cm<sup>2</sup>, then jump to nanocubes and see 600 m<sup>2</sup>.</p>
        ` },
        { title: 'Quantum size effect', html: `
          <p class="lead">In a nanoparticle the electrons are <b>not free to move</b> about as they are in bulk gold. With their movement restricted, the particles <b>react differently with light</b>, which gives <b>tunable fluorescent emission</b>.</p>
          <ul>
            <li>Electronic states are quite different from bulk: <b>discrete energy levels</b> instead of continuous bands.</li>
            <li>The <b>quantum confinement effect</b> increases the <b>energy gap</b> between levels.</li>
            <li>As size drops, that drives a <b>metal → semiconductor → insulator</b> transition.</li>
          </ul>
          <figure data-fig="m3-confinement-bands"></figure>
          <h3>Quantum confinement</h3>
          <ul>
            <li>It is the <b>spatial confinement of electrons</b> in a nanomaterial, instead of their free existence within the bulk.</li>
            <li>Electron–hole pairs become confined when the <b>particle diameter approaches the de Broglie wavelength</b> of electrons in the conduction band.</li>
            <li>So confinement appears once the particle is small enough to be <b>comparable to the electron's de Broglie wavelength</b>.</li>
          </ul>
          <div class="note why"><p>Picture an electron in a box. A big box allows so many closely packed levels that they blur into a band. A tiny box allows only a few, widely spaced levels, so the gap grows as the particle shrinks. A bigger gap means the light given out when an electron drops across it carries more energy, so smaller particles glow bluer. Choose the size and you choose the colour: that is what "tunable" means.</p></div>
          <div class="note heads-up"><p>Slide 16 says confinement occurs when the particle is "too small to be comparable to" the de Broglie wavelength. Read it as <b>small enough to be comparable to</b> it: the effect starts when size ≈ wavelength and gets stronger as the particle shrinks further.</p></div>
          <div data-viz="confinement"></div>
          <p><em>Try it:</em> shrink the size slider and watch the continuous bands break into separate levels while the gap widens. Note where the size reaches the de Broglie wavelength.</p>
        ` },
        { title: 'Defects, magnetism, biology', html: `
          <p class="lead">Small size and fewer defects also shift <b>electrical, mechanical, magnetic and biological</b> behaviour. Here is every property change from slides 15–17 in one place.</p>
          <table class="tbl">
            <thead><tr><th>Property</th><th>Change in nano</th><th>Cause</th></tr></thead>
            <tbody>
              <tr><td>Electrical</td><td>Conductivity <b>differs from bulk</b></td><td><b>Decreased imperfections and defects</b></td></tr>
              <tr><td>Mechanical</td><td><b>Strength rises</b> (hardness, toughness etc.)</td><td>More <b>structural perfection</b></td></tr>
              <tr><td>Magnetic</td><td>Increased <b>paramagnetism and superparamagnetism</b></td><td>Very small particles with discrete electronic states</td></tr>
              <tr><td>Biological</td><td><b>Permeability through biological membranes</b> increases</td><td>Smaller size</td></tr>
              <tr><td>Catalytic</td><td>Better catalytic efficiency</td><td>Higher surface area / volume</td></tr>
              <tr><td>Optical</td><td>Different response to light, tunable fluorescence</td><td>Quantum size effect</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>A crystal only a few nanometres across has very little room for dislocations and vacancies. A near-perfect lattice is harder to deform, so strength goes up. Fewer defects also change how electrons scatter as they move, which is why the conductivity differs from the bulk value.</p></div>
          <div class="note heads-up"><p>Slide 17 prints "<b>supermagnetism</b>". It means <b>superparamagnetism</b>, the term used on slide 10.</p></div>
          <div class="note exam"><p>When asked why nanomaterials behave differently, open with the two root causes (<b>surface area/volume</b> and <b>quantum effects</b>), then run down this table: conductivity, strength, magnetism, membrane permeability, catalysis, optics.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Two main reasons nanomaterials have different properties?', back: '<b>Increased relative surface area</b> and <b>new quantum effects</b>.' },
        { front: 'Total area of a 1 cm cube, then cut into 8, then 27 equal cubes?', back: '<b>6 cm², 12 cm², 18 cm².</b> Volume stays 1 cm³.' },
        { front: 'What stays constant when a bulk solid is subdivided into nanoparticles?', back: 'The <b>total volume</b>. Only the collective surface area grows.' },
        { front: 'Main practical gain from a higher surface area / volume ratio?', back: '<b>Better catalytic efficiency.</b>' },
        { front: 'What happens to light behaviour when electron movement is restricted?', back: 'Particles <b>react differently with light</b>, giving <b>tunable fluorescent emission</b>.' },
        { front: 'Define quantum confinement.', back: 'The <b>spatial confinement of electrons</b> in a nanomaterial rather than their free existence within the bulk.' },
        { front: 'When do electron–hole pairs become confined?', back: 'When the particle diameter <b>approaches the de Broglie wavelength</b> of conduction-band electrons.' },
        { front: 'What does quantum confinement do to the energy gap, and what transition follows?', back: '<b>Increases the gap</b>, giving a <b>metal → semiconductor → insulator</b> transition.' },
        { front: 'Why are nanomaterials mechanically stronger?', back: '<b>Fewer imperfections and defects</b>, so more structural perfection (higher hardness, toughness).' },
        { front: 'Biological property change at the nanoscale?', back: '<b>Permeability through biological membranes increases</b> because of the smaller size.' }
      ],
      oneLiners: [
        'Two root causes: increased relative surface area and new quantum effects.',
        '1 cm cube → 8 cubes → 27 cubes: area 6 → 12 → 18 cm², volume unchanged.',
        'Higher surface area/volume → better catalytic efficiency.',
        'Quantum confinement: discrete levels, wider gap, metal → semiconductor → insulator as size shrinks.',
        'Confinement starts when particle size approaches the de Broglie wavelength of conduction-band electrons.',
        'Fewer defects → changed conductivity and higher strength (hardness, toughness).',
        'Magnetic: more paramagnetism and superparamagnetism. Biological: higher membrane permeability.'
      ],
      formulas: [
        { name: 'Surface area of a subdivided cube', html: `A = 6 × (a/n)<sup>2</sup> × n<sup>3</sup> = 6a<sup>2</sup>n`, note: 'a = original edge, n = cuts per edge. For a 1 cm cube, n = 1, 2, 3 gives 6, 12, 18 cm²; volume stays a³.' },
        { name: 'Surface area to volume of a cube', html: `SA/V = 6a<sup>2</sup> / a<sup>3</sup> = 6/a`, note: 'Halve the edge and the ratio doubles.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-synthesis',
      title: 'Top-down vs bottom-up',
      short: 'Top-down vs bottom-up',
      blurb: 'The two ways to make nanomaterials: carve bulk down or build up from atoms. What each is good at, and which methods belong on which side.',
      source: 'Slides 18–19',
      tabs: [
        { title: 'Two directions', html: `
          <p class="lead"><b>Top-down</b> breaks larger pieces of material down into nanostructures. <b>Bottom-up</b> assembles single atoms and molecules into larger nanostructures.</p>
          <div class="vs">
            <div class="side"><h4>Top-down</h4><ul>
              <li>Starts from <b>bulk material</b></li>
              <li>Good for structures with <b>long-range order</b></li>
              <li>Good for making <b>macroscopic connections</b></li>
              <li>Nanosilver: a bulk piece is <b>mechanically ground</b></li>
            </ul></div>
            <div class="side"><h4>Bottom-up</h4><ul>
              <li>Starts from <b>atoms and molecules</b></li>
              <li>Best suited for <b>assembly</b></li>
              <li>Best for <b>short-range order</b> at nanoscale dimensions</li>
              <li>Uses <b>chemical and biological methods</b> to make nanostructures and nanoparticles</li>
            </ul></div>
          </div>
          <div class="note why"><p>Top-down starts from a bulk crystal that is already ordered over long distances, so that order carries into the pieces, and large pieces are easy to connect to the outside world. Bottom-up places atoms and molecules step by step, which gives fine control over the local, short-range arrangement.</p></div>
          <div data-viz="topdown-bottomup"></div>
          <p><em>Try it:</em> play the scene and watch both sides finish at the same nanoparticles, one by breaking a block down, the other by letting atoms cluster up.</p>
          <div class="mnemonic"><p>Top-down is a sculptor chipping at a block. Bottom-up is a bricklayer stacking atoms.</p></div>
        ` },
        { title: 'Method map', html: `
          <p class="lead">Both routes end at <b>nanoparticles</b>. Top-down goes <b>bulk → powder → nanoparticles</b>. Bottom-up goes <b>atoms/molecules → nuclei and their growth (clusters) → nanoparticles</b>.</p>
          <figure data-fig="m3-topdown-bottomup-map"></figure>
          <div class="vs">
            <div class="side"><h4>Top-down methods</h4><ul>
              <li><b>Mechanical milling</b></li>
              <li>Etching</li>
              <li>Laser ablation</li>
              <li>Sputtering</li>
              <li>Electro-explosion</li>
            </ul></div>
            <div class="side"><h4>Bottom-up methods</h4><ul>
              <li>Supercritical fluid synthesis</li>
              <li>Spinning</li>
              <li><b>Sol–gel process</b></li>
              <li>Laser pyrolysis</li>
              <li>Chemical vapour deposition (CVD)</li>
              <li>Molecular condensation</li>
              <li>Chemical reduction</li>
              <li>Green synthesis</li>
            </ul></div>
          </div>
          <div class="note trap"><p><b>Laser ablation</b> is top-down: a laser blasts material off a bulk target. <b>Laser pyrolysis</b> is bottom-up: a laser heats gaseous precursors that react and nucleate into particles. Same tool, opposite directions.</p></div>
          <div class="note exam"><p>The two methods this module covers in detail sit on opposite sides: <b>mechanical milling is top-down</b>, <b>sol–gel is bottom-up</b>.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Top-down approach: what is it and what is it good for?', back: '<b>Breaking larger pieces down</b> into nanostructures. Good for <b>long-range order</b> and <b>macroscopic connections</b>.' },
        { front: 'Bottom-up approach: what is it and what is it good for?', back: '<b>Assembling single atoms and molecules</b> into nanostructures. Best for <b>assembly</b> and <b>short-range order</b>.' },
        { front: 'How is nanosilver made top-down?', back: 'A bulk piece is <b>mechanically ground</b>.' },
        { front: 'What kinds of methods does bottom-up use?', back: '<b>Chemical and biological methods.</b>' },
        { front: 'Five top-down methods?', back: '<b>Mechanical milling, etching, laser ablation, sputtering, electro-explosion.</b>' },
        { front: 'Eight bottom-up methods?', back: '<b>Supercritical fluid synthesis, spinning, sol–gel, laser pyrolysis, CVD, molecular condensation, chemical reduction, green synthesis.</b>' },
        { front: 'Intermediate stage in top-down vs bottom-up?', back: 'Top-down: <b>powder</b>. Bottom-up: <b>nuclei and their growth (clusters)</b>.' }
      ],
      oneLiners: [
        'Top-down = break bulk down; bottom-up = build from atoms and molecules.',
        'Top-down suits long-range order and macroscopic connections; bottom-up suits assembly and short-range order.',
        'Top-down: bulk → powder → nanoparticles. Bottom-up: atoms → nuclei/clusters → nanoparticles.',
        'Top-down methods: milling, etching, laser ablation, sputtering, electro-explosion.',
        'Bottom-up methods: supercritical fluid, spinning, sol–gel, laser pyrolysis, CVD, molecular condensation, chemical reduction, green synthesis.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-milling',
      title: 'Mechanical milling',
      short: 'Mechanical milling',
      blurb: 'The top-down workhorse: hard balls smash a 50 µm powder inside a sealed, shaken vial. What it makes, how it runs, the mill types, and the heat and contamination problems.',
      source: 'Slides 20–24',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead">Mechanical milling, also called <b>mechanical alloying</b> or <b>mechanochemical synthesis</b>, is a <b>top-down</b> method. It shrinks bulk material to the nanoscale by <b>grinding and impacting</b>.</p>
          <p>High-energy mills hit and deform the powder over and over. That gives two results: <b>size reduction</b> and the <b>creation of new phases</b>. It is a <b>cost-effective</b> way to get nanoscale material straight from bulk.</p>
          <h3>What it makes</h3>
          <ul>
            <li><b>Nonequilibrium structures</b>: nanocrystalline, amorphous and quasicrystalline materials</li>
            <li><b>Blends of different phases</b>, which helps in making <b>nanocomposites</b></li>
            <li><b>Oxide- and carbide-strengthened aluminium alloys</b></li>
            <li>Aluminium-, nickel-, magnesium- and copper-based <b>nanoalloys</b>, and many other nanocomposites</li>
            <li><b>Ball-milled carbon nanomaterials</b>: a novel class for environmental remediation, energy storage and energy conversion</li>
          </ul>
          <div class="note why"><p>Each impact pumps energy into the powder faster than the atoms can settle into their lowest-energy arrangement. That is how milling traps <b>nonequilibrium</b> structures, such as amorphous or nanocrystalline phases, that slow heating and cooling would not give.</p></div>
          <div class="note why"><p>Particles get flattened, welded together and broken apart again and again. That cycle mixes two different powders on a very fine scale, hence the name "mechanical alloying".</p></div>
        ` },
        { title: 'How it runs', html: `
          <p class="lead">Load powder of about <b>50 µm</b> into a <b>sealed container</b> with a number of hardened steel or WC-coated balls, then shake or violently agitate it. The balls collide and crush the powder trapped between them.</p>
          <div class="kv">
            <div><span>Starting powder</span><b>~50 µm diameter</b></div>
            <div><span>Balls</span><b>hardened steel or tungsten carbide (WC) coated</b></div>
            <div><span>Container</span><b>sealed, shaken or violently agitated</b></div>
            <div><span>Ball : powder mass</span><b>5 : 10 (as printed)</b></div>
            <div><span>Atmosphere</span><b>preferably inert</b></div>
            <div><span>Shaker mill batch</span><b>~10 cm<sup>3</sup> (SPEX 8000)</b></div>
          </div>
          <h3>Types of mill</h3>
          <div class="chips"><span class="chip">Tumbler mills</span><span class="chip">Attrition mills</span><span class="chip">Shaker mills</span><span class="chip">Vibratory mills</span><span class="chip">Planetary mills</span></div>
          <p>Shaker mills such as the <b>SPEX model 8000</b> work on small batches: about <b>10 cm<sup>3</sup></b> of powder is sufficient.</p>
          <figure data-fig="m3-milling-principle"></figure>
          <p>The schematic labels the balls as <b>refractory or steel balls</b> and asks for a <b>preferably inert atmosphere</b> around the 50 µm powder.</p>
          <div class="note heads-up"><p>The slide gives the most effective ball-to-powder mass ratio as <b>5 : 10</b>, which would mean less ball than powder. Most texts quote about <b>5 : 1 to 10 : 1</b>, and 10 : 1 is the usual choice for a SPEX mill. Write 5 : 10 if asked, and know it is probably a garbled "5–10 : 1".</p></div>
          <div data-viz="ball-mill"></div>
          <p><em>Try it:</em> drag the milling-time slider. Particle size falls while iron contamination climbs, and past 30 h the warning for more than 10% tool contamination appears.</p>
        ` },
        { title: 'Inside the mill', html: `
          <p class="lead">In a <b>planetary mill</b> the milling bowl rotates while the supporting disc it sits on also moves. <b>Centrifugal force</b> throws the balls across the bowl, so they slam into each other and the wall with powder caught in between.</p>
          <figure data-fig="m3-planetary-mill"></figure>
          <p>What happens to a powder particle trapped between two balls as the impacts get harder:</p>
          <ol class="steps">
            <li><b>Elastic deformation</b> the particle squashes and springs back.</li>
            <li><b>Plastic and shear deformation</b> it flattens and shears permanently.</li>
            <li><b>Fracture, amorphization, chemical reactions</b> it breaks into smaller pieces, its crystal order can collapse, and the fresh surfaces react.</li>
          </ol>
          <div class="note why"><p>Fracture is where the size drops. Amorphization and chemical reactions are where the new phases come from. Together they are the "size reduction and creation of new phases" in the definition.</p></div>
        ` },
        { title: 'Pros & cons', html: `
          <p class="lead">One clear advantage, <b>high production rates</b>, set against a list of problems that are mostly about <b>heat</b> and <b>contamination</b>.</p>
          <div class="vs">
            <div class="side"><h4>Advantage</h4><ul>
              <li><b>High production rates</b></li>
              <li>Also cost-effective (slide 20)</li>
            </ul></div>
            <div class="side"><h4>Disadvantages</h4><ul>
              <li><b>Severe plastic deformation</b> from mechanical attrition, due to high temperature at the interphase: <b>100–200 °C</b></li>
              <li><b>Hard to break down</b> to the required particle size</li>
              <li><b>Contamination</b> from the milling tools (<b>Fe</b>) and the atmosphere (trace O<sub>2</sub>, N<sub>2</sub> in rare gases)</li>
              <li>Needs inert conditions such as a <b>glove box</b>; limits: Fe <b>&lt; 1–2%</b>, trace elements <b>&lt; 300 ppm</b></li>
              <li>A <b>protective coating</b> to cut milling-tool contamination (MTC) raises the process cost</li>
              <li>Working duration <b>&gt; 30 h</b> pushes MTC to <b>&gt; 10%</b></li>
            </ul></div>
          </div>
          <div class="note why"><p>The heat comes from kinetic energy turning into heat at every collision point. The iron comes from the steel balls and vial walls wearing a little with each hit, so longer milling means more wear. Freshly broken surfaces are very reactive and grab O<sub>2</sub> or N<sub>2</sub>, which is why the vial is filled under inert gas in a glove box.</p></div>
          <div class="note exam"><p>In a pros and cons answer, give the numbers: <b>100–200 °C</b>, Fe <b>&lt; 1–2%</b>, trace <b>&lt; 300 ppm</b>, <b>&gt; 30 h → MTC &gt; 10%</b>. They are what separates a full-mark answer from a vague one.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Two other names for mechanical milling?', back: '<b>Mechanical alloying</b> and <b>mechanochemical synthesis</b>.' },
        { front: 'Top-down or bottom-up? How does it reduce size?', back: '<b>Top-down</b>, by <b>grinding and impacting</b> bulk material.' },
        { front: 'Nonequilibrium structures milling can produce?', back: '<b>Nanocrystalline, amorphous and quasicrystalline</b> materials.' },
        { front: 'Starting powder size and ball materials?', back: 'About <b>50 µm</b>; <b>hardened steel or tungsten carbide (WC) coated</b> balls.' },
        { front: 'Most effective ball-to-powder mass ratio, as printed on the slide?', back: '<b>5 : 10</b> (standard texts: about 5–10 : 1).' },
        { front: 'Five types of mill?', back: '<b>Tumbler, attrition, shaker, vibratory, planetary.</b>' },
        { front: 'Batch size in a SPEX 8000 shaker mill?', back: 'About <b>10 cm<sup>3</sup></b> of powder.' },
        { front: 'Temperature generated at the interphase during milling?', back: '<b>100–200 °C</b>, causing severe plastic deformation.' },
        { front: 'Contamination limits quoted for milling?', back: '<b>Fe &lt; 1–2%</b>, trace elements <b>&lt; 300 ppm</b>; inert conditions (glove box) needed.' },
        { front: 'What happens to milling-tool contamination after more than 30 h?', back: 'It rises above <b>10%</b>.' },
        { front: 'Main advantage of mechanical milling?', back: '<b>High production rates</b> (and it is cost-effective).' },
        { front: 'Three product families made by milling?', back: '<b>Oxide/carbide-strengthened Al alloys</b>, <b>Al/Ni/Mg/Cu nanoalloys</b> and nanocomposites, <b>ball-milled carbon</b> for remediation, energy storage and conversion.' }
      ],
      oneLiners: [
        'Mechanical milling = mechanical alloying = mechanochemical synthesis; top-down, by grinding and impacting.',
        'Recipe: ~50 µm powder + hardened steel or WC-coated balls in a sealed, violently shaken vial; ball:powder 5 : 10 (slide).',
        'Mills: tumbler, attrition, shaker, vibratory, planetary; SPEX 8000 shaker takes ~10 cm<sup>3</sup>.',
        'Makes nanocrystalline, amorphous and quasicrystalline phases, nanoalloys and nanocomposites.',
        'Advantage: high production rates.',
        'Problems: 100–200 °C at the interphase, hard to hit target size, Fe and O<sub>2</sub>/N<sub>2</sub> contamination (Fe &lt; 1–2%, trace &lt; 300 ppm).',
        'Milling &gt; 30 h → tool contamination &gt; 10%; protective coatings add cost.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-sol-gel',
      title: 'Sol–gel method',
      short: 'Sol–gel method',
      blurb: 'The bottom-up route to metal-oxide nanoparticles: a metal alkoxide is hydrolysed into a sol, condensed into a gel, then aged, dried and calcined. Chemistry, film and ceramic routes, pros and cons.',
      source: 'Slides 25–29',
      tabs: [
        { title: 'The idea', html: `
          <p class="lead">Sol–gel is a <b>bottom-up</b> method for <b>high-quality metal-oxide nanomaterials</b>. The name comes from its two stages: a liquid precursor becomes a <b>sol</b>, and the sol becomes a network called a <b>gel</b>.</p>
          <div class="kv">
            <div><span>Approach</span><b>bottom-up</b></div>
            <div><span>Precursor</span><b>metal alkoxide, M(OR)<sub>n</sub></b></div>
            <div><span>Sol</span><b>solid particles in solution</b></div>
            <div><span>Gel</span><b>network structure</b></div>
            <div><span>Product</span><b>metal-oxide nanoparticles</b></div>
          </div>
          <p>The conventional precursors are <b>metal alkoxides</b>: a metal atom bonded to –OR groups, where R is an alkyl group. The slides' example is a silicon alkoxide, Si(OR)<sub>4</sub>. The synthesis runs in <b>several steps</b>, starting with <b>hydrolysis</b> of the alkoxide in water, or with the help of alcohol, to form the sol.</p>
          <div class="note why"><p>A sol is a liquid with tiny solid particles floating in it. A gel is what you get once those particles link up into a 3-D network that traps the liquid, a bit like jelly setting.</p></div>
        ` },
        { title: 'Step by step', html: `
          <p class="lead">Five steps, in order: <b>hydrolysis → condensation → aging → drying → calcination</b>.</p>
          <ol class="steps">
            <li><b>Hydrolysis</b> the metal alkoxide reacts in water, or with the help of alcohol, to form a <b>sol</b>.</li>
            <li><b>Condensation</b> (polycondensation) hydroxo (M–OH–M) or oxo (M–O–M) bridges form, building metal–hydroxo or metal–oxo polymers in solution. The solvent's <b>viscosity rises</b> and porous structures form, which are left to age.</li>
            <li><b>Aging</b> polycondensation carries on, changing the structure, properties and porosity: <b>porosity decreases</b> and the <b>distance between colloidal particles increases</b>.</li>
            <li><b>Drying</b> water and organic solvents are <b>removed from the gel</b>.</li>
            <li><b>Calcination</b> heating the dried gel gives the final <b>nanoparticles</b>.</li>
          </ol>
          <div data-viz="sol-gel"></div>
          <p><em>Try it:</em> step from precursor to nanoparticles and watch the loose sol particles join through M–O–M bridges into a network before drying and calcination.</p>
          <div class="note why"><p><b>Viscosity rises</b> because every new M–O–M bridge joins two units, so chains and networks keep growing until the liquid sets.</p></div>
          <div class="note why"><p>During <b>aging</b>, small particles tend to dissolve and redeposit on bigger ones, leaving fewer, larger particles spaced farther apart, while the network stiffens and its pores shrink.</p></div>
          <div class="note why"><p><b>Calcination</b> is strong heating that burns off leftover organic groups and –OH and crystallises the oxide.</p></div>
          <div class="mnemonic"><p>Happy Cats Always Demand Cream: Hydrolysis, Condensation, Aging, Drying, Calcination.</p></div>
        ` },
        { title: 'The chemistry', html: `
          <p class="lead">Two generic reactions, written for a metal alkoxide M–OR. <b>Hydrolysis</b> swaps –OR for –OH; <b>condensation</b> joins two metal centres through an <b>M–O–M bridge</b>.</p>
          <div class="eq" data-label="Hydrolysis">–M–OR + H<sub>2</sub>O → –M–OH + ROH</div>
          <div class="eq" data-label="Example">Si(OR)<sub>4</sub> + 4H<sub>2</sub>O → Si(OH)<sub>4</sub> + 4ROH</div>
          <div class="eq" data-label="Condensation, alcohol out">–M–OH + RO–M– → –M–O–M– + ROH</div>
          <div class="eq" data-label="Condensation, water out">–M–OH + HO–M– → –M–O–M– + H<sub>2</sub>O</div>
          <p>The silicon versions of the two condensations:</p>
          <div class="eq" data-label="Alcohol route">(OR)<sub>3</sub>Si–OR + HO–Si(OR)<sub>3</sub> → (OR)<sub>3</sub>Si–O–Si(OR)<sub>3</sub> + ROH</div>
          <div class="eq" data-label="Water route">(OR)<sub>3</sub>Si–OH + HO–Si(OR)<sub>3</sub> → (OR)<sub>3</sub>Si–O–Si(OR)<sub>3</sub> + H<sub>2</sub>O</div>
          <figure data-fig="m3-siloxane-network"></figure>
          <p>Repeat these reactions many times and the Si–O–Si links grow into a <b>network of siloxanes</b>. That network is the gel.</p>
          <div class="note heads-up"><p>On slide 27 the two silicon examples sit under the wrong generic equations: the one under the ROH-releasing condensation actually gives off H<sub>2</sub>O, and the one under the H<sub>2</sub>O-releasing condensation gives off R–OH. The pairing above is the chemically consistent one.</p></div>
          <div class="note exam"><p>Tell the two condensations apart by the <b>by-product</b>: M–OH + RO–M gives <b>alcohol</b>, M–OH + HO–M gives <b>water</b>. Either way the new bond is <b>M–O–M</b>.</p></div>
        ` },
        { title: 'Films or ceramic', html: `
          <p class="lead">From one <b>sol</b> you can go two ways: coat it onto a substrate to make a <b>dense film</b>, or let it gel in bulk and heat it into a <b>dense ceramic</b>.</p>
          <figure data-fig="m3-sol-gel-routes"></figure>
          <p>Shared start: <b>solution of precursors → sol</b> by hydrolysis and polymerisation.</p>
          <table class="tbl">
            <thead><tr><th>Route</th><th>Shaping</th><th>After solvent leaves</th><th>After heat treatment</th></tr></thead>
            <tbody>
              <tr><td>(a) Films</td><td><b>Spin-coating</b> (sol on a spinning substrate) or <b>dip-coating</b> (substrate dipped in the sol and pulled out)</td><td>Gelation and evaporation of solvent → <b>xerogel film</b></td><td><b>Dense film</b></td></tr>
              <tr><td>(b) Bulk</td><td>Condensation of the sol particles, gelation → <b>gel</b></td><td>Evaporation of solvent → <b>xerogel</b></td><td><b>Dense ceramic</b></td></tr>
            </tbody>
          </table>
          <div class="note why"><p>"Xero" means dry: a <b>xerogel</b> is a gel dried by letting the solvent evaporate, so it shrinks. Heat treatment then closes up the pores to give the dense film or ceramic.</p></div>
        ` },
        { title: 'Pros & cons', html: `
          <p class="lead">Sol–gel's strengths are <b>low temperature</b> and <b>uniform particles</b>. Its weaknesses are <b>control, purity and speed</b>.</p>
          <div class="vs">
            <div class="side"><h4>Advantages</h4><ul>
              <li>Makes nonmetallic inorganic materials (glasses, glass ceramics, ceramics) at <b>very low temperatures</b> compared to melting glass or firing ceramics</li>
              <li><b>Monosized nanoparticles</b> are possible with this bottom-up approach</li>
            </ul></div>
            <div class="side"><h4>Disadvantages</h4><ul>
              <li>Hard to <b>control particle growth</b> and then stop new particles from <b>agglomerating</b></li>
              <li>Hard to ensure <b>complete reaction</b>, so no unwanted reactant is left on the product</li>
              <li>Any growth aids must be <b>completely removed</b></li>
              <li><b>Very slow production rates</b> of nanopowders</li>
            </ul></div>
          </div>
          <div class="note why"><p>Nanoparticles carry a huge surface energy, so they stick together to cut down their exposed surface. That is why agglomeration is a constant fight.</p></div>
          <h3>Milling vs sol–gel</h3>
          <table class="tbl">
            <thead><tr><th></th><th>Mechanical milling</th><th>Sol–gel</th></tr></thead>
            <tbody>
              <tr><td>Approach</td><td>Top-down</td><td>Bottom-up</td></tr>
              <tr><td>Starting point</td><td>~50 µm powder</td><td>Metal alkoxide solution</td></tr>
              <tr><td>Production rate</td><td><b>High</b></td><td><b>Very slow</b></td></tr>
              <tr><td>Particle size</td><td>Hard to reach the required size</td><td>Monosized particles possible</td></tr>
              <tr><td>Purity problem</td><td>Fe from tools; O<sub>2</sub>, N<sub>2</sub> from the atmosphere</td><td>Unreacted reactant, leftover growth aids</td></tr>
              <tr><td>Temperature</td><td>100–200 °C at the impact interphase</td><td>Very low processing temperature, then calcination</td></tr>
              <tr><td>Typical products</td><td>Nanoalloys, nanocomposites, amorphous and quasicrystalline phases</td><td>Metal-oxide nanoparticles, glasses, ceramics, films</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>For a scenario asking which method to pick: lots of alloy powder, quickly, points to <b>milling</b>. Uniform, clean oxide particles or a coating at low temperature points to <b>sol–gel</b>.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Is sol–gel top-down or bottom-up, and what does it mainly make?', back: '<b>Bottom-up</b>; <b>high-quality metal-oxide</b> nanomaterials.' },
        { front: 'Conventional precursors for sol–gel?', back: '<b>Metal alkoxides</b>, M(OR)<sub>n</sub>.' },
        { front: 'What are a sol and a gel?', back: 'Sol: <b>solid particles in solution</b>. Gel: the <b>network structure</b> the sol turns into.' },
        { front: 'The five sol–gel steps in order?', back: '<b>Hydrolysis → condensation → aging → drying → calcination.</b>' },
        { front: 'Generic hydrolysis reaction?', back: '<b>–M–OR + H<sub>2</sub>O → –M–OH + ROH</b>' },
        { front: 'Two condensation routes and their by-products?', back: '–M–OH + RO–M– → –M–O–M– + <b>ROH</b>; –M–OH + HO–M– → –M–O–M– + <b>H<sub>2</sub>O</b>.' },
        { front: 'Which bridges form during condensation?', back: '<b>Hydroxo (M–OH–M)</b> or <b>oxo (M–O–M)</b> bridges, giving metal–hydroxo or metal–oxo polymers.' },
        { front: 'What changes during aging?', back: 'Polycondensation continues; <b>porosity decreases</b> and the <b>distance between colloidal particles increases</b>.' },
        { front: 'What does drying remove, and what does calcination give?', back: 'Drying removes <b>water and organic solvents</b>; calcination gives the <b>nanoparticles</b>.' },
        { front: 'Film route vs bulk route after the sol?', back: 'Films: <b>spin- or dip-coating → xerogel film → dense film</b>. Bulk: <b>gel → xerogel → dense ceramic</b>.' },
        { front: 'Two advantages of sol–gel?', back: 'Glasses and ceramics at <b>very low temperatures</b>; <b>monosized nanoparticles</b>.' },
        { front: 'Four disadvantages of sol–gel?', back: 'Controlling growth and <b>agglomeration</b>; <b>incomplete reaction</b> leaves reactant; removing <b>growth aids</b>; <b>very slow production</b>.' }
      ],
      oneLiners: [
        'Sol–gel: bottom-up route to high-quality metal-oxide nanomaterials from metal alkoxides.',
        'Liquid precursor → sol (solid particles in solution) → gel (network).',
        'Steps: hydrolysis → condensation → aging → drying → calcination.',
        'Hydrolysis: –M–OR + H<sub>2</sub>O → –M–OH + ROH; condensation forms M–O–M (oxo) or M–OH–M (hydroxo) bridges.',
        'Aging: porosity decreases, distance between colloidal particles increases.',
        'Films via spin- or dip-coating → xerogel film → dense film; bulk gel → xerogel → dense ceramic.',
        'Pros: low temperature, monosized particles. Cons: agglomeration, leftover reactant and growth aids, very slow production.'
      ],
      formulas: [
        { name: 'Sol–gel hydrolysis', html: `–M–OR + H<sub>2</sub>O → –M–OH + ROH`, note: 'Example: Si(OR)₄ + 4H₂O → Si(OH)₄ + 4ROH.' },
        { name: 'Condensation (alcohol released)', html: `–M–OH + RO–M– → –M–O–M– + ROH`, note: 'Forms the M–O–M (oxo) bridge.' },
        { name: 'Condensation (water released)', html: `–M–OH + HO–M– → –M–O–M– + H<sub>2</sub>O`, note: 'Repeated condensation builds the siloxane (Si–O–Si) network of the gel.' }
      ]
    }
  ],
  figures: [
    { id: 'm3-nanoscale-chart', src: 'm3/images/s05_d2438eab.jpg', crop: null,
      caption: 'One log scale from a water molecule (10⁻¹ nm) to a tennis ball (10⁸ nm). Antibodies and viruses share the 10–100 nm window with nanodevices: nanopores, dendrimers, nanotubes, quantum dots and nanoshells.',
      alt: 'Log scale in nanometres from 10⁻¹ to 10⁸ with water, glucose, antibody, virus, bacterium, cancer cell, a full stop and a tennis ball above it; a funnel below the 10–100 nm region shows a dendrimer, nanoshell, fullerene and nanotube.' },
    { id: 'm3-gold-np-hair', src: 'm3/slides/s05.png', crop: [0.03, 0.26, 0.28, 0.70],
      caption: 'A gold nanoparticle, its atoms visible as a grid (scale bar 1 nm), above a human hair that is 50,000–100,000 nm across.',
      alt: 'Electron micrograph of a gold nanoparticle showing a square grid of atoms with a 1 nm scale bar, and below it an electron micrograph of a scaly human hair.' },
    { id: 'm3-nano-uses-map', src: 'm3/slides/s07.png', crop: [0.155, 0.19, 0.69, 0.715],
      caption: 'Ten fields that use nanomaterials, from information technology and aerospace to food, medicine and defence.',
      alt: 'Mind map with a central box reading nanomaterials or nanotechnology and ten speech bubbles: information technology, mechanical engineering/robotics, biotechnology, transportation, national security and defense, food and agriculture, medicine/health, aerospace, energy and environment, advance materials and textiles.' },
    { id: 'm3-nano-dims-images', src: 'm3/slides/s08.png', crop: [0.03, 0.63, 0.895, 0.305],
      caption: 'Left to right: 0D nanoparticles, 1D nanowires, a 2D plate and a 3D stack of nanolayers. Count how many directions are long: 0, 1, 2, 3.',
      alt: 'Four images: coloured spherical nanoparticles, a mesh of thin nanowires, a single flat lattice sheet, and a stack of several lattice sheets.' },
    { id: 'm3-nano-categories', src: 'm3/images/s09_381b3b10.jpg', crop: null,
      caption: 'Sorting by material: carbon-based (fullerenes, carbon nanotubes), inorganic (metal oxides, metals, quantum dots) and polymeric.',
      alt: 'Tree chart: nanomaterials split into carbon-based materials (fullerenes, carbon nanotubes), inorganic materials (metal oxides such as zinc, iron and cerium oxide; metals such as gold, silver, iron; quantum dots such as cadmium sulfide and cadmium selenide) and polymeric materials.' },
    { id: 'm3-gold-macro-nano', src: 'm3/images/s11_9d2040f6.jpg', crop: null,
      caption: 'Same element, two looks: shiny yellow gold bars (macro) and a deep red liquid of gold nanoparticles (nano).',
      alt: 'Photo of stacked gold bars labelled macro, an arrow, and a flask of dark red liquid labelled nano.' },
    { id: 'm3-au-ag-colours', src: 'm3/slides/s12.png', crop: [0.125, 0.075, 0.725, 0.869],
      caption: 'Gold (left) and silver (right) particles in glass, with the colour each reflects. Gold goes red, green, orange as the spheres grow from 25 to 100 nm; 100 nm silver reflects yellow as spheres but red as prisms.',
      alt: 'Six grey electron micrographs in two columns with coloured dots: gold 25 nm spheres red, 50 nm spheres green, 100 nm spheres orange; silver 100 nm spheres yellow, 40 nm spheres blue, 100 nm prisms red.' },
    { id: 'm3-cube-surface-area', src: 'm3/slides/s15.png', crop: [0.23, 0.29, 0.63, 0.50],
      caption: 'Cutting a 1 cm cube into 8 and then 27 smaller cubes keeps the volume at 1 cm³ but raises the total area from 6 to 12 to 18 cm². More surface gives better catalytic efficiency.',
      alt: 'A solid cube labelled area 6 cm², a cube split into 8 labelled 12 cm², and a cube split into 27 labelled 18 cm², with an arrow to the words better catalytic efficiency.' },
    { id: 'm3-confinement-bands', src: 'm3/images/s16_589a5a0e.jpg', crop: null,
      caption: 'A bulk semiconductor has continuous valence and conduction bands. As the particle shrinks into a quantum dot, the bands split into discrete levels and the band gap widens.',
      alt: 'Top row: a cube then three shrinking spheres along an arrow labelled size decrease, band gap increase. Bottom row: solid red and blue bands for the bulk semiconductor, then three quantum dots whose bands become fewer separate lines with a growing gap between them.' },
    { id: 'm3-topdown-bottomup-map', src: 'm3/slides/s19.png', crop: [0.03, 0.055, 0.94, 0.855],
      caption: 'Top-down runs bulk → powder → nanoparticles; bottom-up runs atoms/molecules → nuclei (clusters) → nanoparticles. The side boxes list the methods on each route.',
      alt: 'Vertical diagram: a bulk sphere breaks into powder and then nanoparticles, with a box listing top-down methods; below, scattered molecules grow into nuclei and then nanoparticles, with a box listing bottom-up methods.' },
    { id: 'm3-planetary-mill', src: 'm3/slides/s23.png', crop: [0.05, 0.03, 0.85, 0.87],
      caption: 'A planetary ball mill, the balls and powder inside the bowl, and the horizontal section with bowl rotation, disc movement and centrifugal force. Bottom left: a trapped particle going from elastic deformation to fracture, amorphization and chemical reactions.',
      alt: 'Photo of a planetary ball mill; a circular cross-section packed with black balls and red powder; a horizontal section with arrows for movement of the supporting disc, centrifugal force and rotation of the milling bowl; and pairs of colliding balls labelled elastic deformation, plastic and shear deformations, fracture, amorphization and chemical reactions.' },
    { id: 'm3-milling-principle', src: 'm3/slides/s24.png', crop: [0.12, 0.10, 0.76, 0.90],
      caption: 'Powder of about 50 µm caught between two colliding refractory or steel balls, preferably under inert atmosphere. Right: WC-coated balls in the vial. Bottom left: a shaker mill.',
      alt: 'Two large balls with arrows pushing together, powder particles squeezed between them, a thought bubble reading preferably inert atmosphere, a dashed vial with black WC-coated balls and powder, a rotating vial sketch, and a photo of a small shaker mill.' },
    { id: 'm3-siloxane-network', src: 'm3/slides/s27.png', crop: [0.1, 0.621, 0.73, 0.329],
      caption: 'A silicon alkoxide surrounded by water hydrolyses and condenses into a branching Si–O–Si (siloxane) network with leftover –OH groups: the start of a gel.',
      alt: 'Left: a silicon atom with four alkoxy chains and water molecules around it. Arrow labelled condensation towards network of siloxanes. Right: a branched network of Si–O–Si links with OH groups.' },
    { id: 'm3-sol-gel-routes', src: 'm3/slides/s28.png', crop: [0.045, 0.055, 0.895, 0.86],
      caption: 'Precursor solution → sol → gel. Route (a) coats the sol by spin- or dip-coating into a xerogel film, then heat-treats it into a dense film. Route (b) dries the gel into a xerogel and heats it into a dense ceramic.',
      alt: 'Flow chart of beakers: solution of precursors, hydrolysis and polymerisation to sol, condensation and gelation to gel. From the sol, spin-coating and dip-coating give xerogel films then dense films after heat treatment. From the gel, evaporation of solvent gives a xerogel and heat treatment a dense ceramic.' }
  ]
});
