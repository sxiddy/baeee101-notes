CHUNK({
  chunk: 'E',
  module: 'm3',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm3-quantum-dots',
      title: 'Quantum dots',
      short: 'Quantum dots',
      blurb: 'What quantum dots are, how they glow, why confinement chops their energy into fixed levels, and why a bigger dot shines redder.',
      source: 'Slides 30–36',
      tabs: [
        { title: 'What a QD is', html: `
          <p class="lead">A quantum dot (QD) is a <b>semiconductor particle</b> only <b>2–10 nm</b> across. At that size <b>quantum effects</b> control how it gives out light, and that is where the name comes from.</p>
          <div class="kv">
            <div><span>Diameter</span><b>2–10 nm</b></div>
            <div><span>Atoms across the diameter</span><b>10–50</b></div>
            <div><span>Electrons in one dot</span><b>100–1000</b></div>
            <div><span>Type of material</span><b>Semiconductor</b></div>
          </div>
          <figure data-fig="m3-qd-tem"></figure>
          <p>Another definition: QDs are semiconductor particles of a few nanometres (<b>&lt;10 nm</b>) whose <b>optical and electronic properties</b> differ from larger particles of the same material.</p>
          <h3>Examples</h3>
          <div class="chips"><span class="chip">CdSe, cadmium selenide</span><span class="chip">CdS, cadmium sulfide</span><span class="chip">InP, indium phosphide</span></div>
          <figure data-fig="m3-qd-core-shell"></figure>
          <div class="note why"><p>Why a shell around the core: atoms on the surface of a bare core have loose, unbonded sites that trap electrons and waste their energy as heat. Covering the core with a QD shell, then a protective shell, keeps more of that energy coming out as light and keeps the dot stable.</p></div>
          <div class="note trap"><p>"10 to 50 atoms" is the count across the diameter, not the total number of atoms. The whole dot holds far more than 50 atoms.</p></div>
        ` },
        { title: 'How a QD glows', html: `
          <p class="lead">A QD glows in two moves: an electron <b>absorbs energy</b> and gets kicked up, then it <b>falls back</b> and gives that energy out as light.</p>
          <ol class="steps">
            <li><b>Stimulus</b> Some outside energy (light or electricity) reaches the dot.</li>
            <li><b>Excitation</b> Some electrons of the dot material absorb enough energy to escape their atomic orbit.</li>
            <li><b>Conductance region</b> The freed electrons can now move through the material, so the dot is effectively conducting electricity.</li>
            <li><b>Return</b> The electrons drop back into atomic orbit.</li>
            <li><b>Emission</b> The energy they lose leaves as light. Its colour depends on the <b>amount of energy released</b>.</li>
          </ol>
          <figure data-fig="m3-qd-absorb-emit"></figure>
          <div class="note why"><p>Same story in band language: "escaping the orbit" means jumping from the valence band to the conduction band, leaving a hole behind. When the electron and hole recombine, the photon carries roughly the band-gap energy. Bigger gap, more energetic photon, bluer light.</p></div>
          <div class="note exam"><p>For "explain how a QD emits light", write the chain absorb → escape orbit → conduct → drop back → emit, then finish with: colour is set by the energy released, and that is set by the dot's size.</p></div>
        ` },
        { title: 'Confinement & quantised levels', html: `
          <p class="lead">Squeeze electrons into a space a few nanometres wide and they can't take just any energy. They get a few <b>fixed (quantised) levels</b>, and the gap between levels grows as the space shrinks.</p>
          <h3>Quantum confinement recap</h3>
          <ul>
            <li>The <b>small size effect</b> (quantum size effect): the particles are so small that electrons are <b>not free to move</b> as they are in the bulk (the slide uses bulk gold as the comparison).</li>
            <li><b>Quantum confinement</b> is the spatial confinement of electrons inside a nanomaterial, instead of their free existence in the bulk.</li>
            <li>Electron–hole pairs get confined when the particle diameter approaches the <b>de Broglie wavelength</b> of the conduction-band electrons.</li>
            <li>Result: <b>discrete energy levels</b> and a wider gap (the metal → semiconductor → insulator trend), so the particles react differently with light and give <b>tunable fluorescent emission</b>.</li>
          </ul>
          <p><b>Schrödinger</b>: electrons in confined systems occupy <b>quantised energy levels</b>.</p>
          <div class="vs">
            <div class="side"><h4>Bulk semiconductor</h4><p><b>Continuous</b> energy levels within the valence and conduction bands, smaller energy gap.</p></div>
            <div class="side"><h4>Quantum dot</h4><p><b>Discrete</b> energy levels and a <b>large band gap</b>, created by the confinement effect.</p></div>
          </div>
          <figure data-fig="m3-qd-bulk-vs-dot"></figure>
          <ul>
            <li>The <b>release of confinement energy</b> is a key property of a QD. It explains why the <b>QD size decides the frequency</b> of the light it emits (the slide calls it a "positive relationship").</li>
            <li>Because the band gap is quantised, a QD emits at a <b>very constant wavelength</b>.</li>
            <li>That wavelength can be <b>fine-tuned by changing the size</b>, which is the same as changing the energy levels.</li>
          </ul>
          <div class="note heads-up"><p>Slide 34 says "positive relationship" between size and frequency. The link is real, but it runs the other way: a bigger dot has a smaller gap and emits a <b>lower</b> frequency (redder light). Slides 35 and 36 show exactly this, so write "size and emission frequency are inversely related".</p></div>
          <details class="more"><summary>Where the 1/size² comes from</summary>
            <p>The simplest model is a particle in a box of width L. The allowed energies are:</p>
            <div class="eq">E<sub>n</sub> = <span class="frac"><span>n<sup>2</sup>h<sup>2</sup></span><span>8mL<sup>2</sup></span></span></div>
            <p>So the spacing between levels goes as 1/L². Halve the box and the gaps get four times bigger. This is standard textbook physics, not on the slides, but it is the cleanest way to justify the trend.</p>
          </details>
        ` },
        { title: 'Size decides colour', html: `
          <p class="lead">One size, one colour. <b>Small dots (2–3 nm)</b> glow blue and violet; <b>big dots (5–6 nm)</b> glow orange and red.</p>
          <ul>
            <li>Because the dots are so small, the energy released is <b>nearly the same from electron to electron</b>, so a batch emits a <b>single colour</b>.</li>
            <li>The colour is <b>entirely dependent on the size</b> of the dot.</li>
            <li>This size–colour behaviour is sometimes itself called "quantum confinement", meaning constraints at the atomic level dominate.</li>
          </ul>
          <table class="tbl">
            <thead><tr><th>Dot size</th><th>Band gap</th><th>Energy emitted</th><th>Colour</th></tr></thead>
            <tbody>
              <tr><td>2–3 nm (smaller)</td><td>Larger</td><td>Higher</td><td><b>Blue, violet</b></td></tr>
              <tr><td>5–6 nm (larger)</td><td>Smaller</td><td>Lower</td><td><b>Red, orange</b></td></tr>
            </tbody>
          </table>
          <figure data-fig="m3-qd-vials"></figure>
          <h3>Two emission rules</h3>
          <ol>
            <li><b>Band gap decreases</b> as the QD size increases.</li>
            <li>Emission wavelength is <b>red-shifted</b> (moves to longer λ) as the QD size increases.</li>
          </ol>
          <figure data-fig="m3-qd-emission-spectra"></figure>
          <p>Read the graph left to right: the emission peaks sit at 473, 480, 500, 518, 538, 550, 565, 587, 610 and 655 nm, and each step to the right belongs to a bigger dot.</p>
          <p>Drag the size slider from 2 nm up to 10 nm and watch the gap shrink and the glow slide from violet to red.</p>
          <div data-viz="qd-size"></div>
          <div class="note why"><p>Bigger dot, looser confinement, levels closer together, smaller gap. A smaller gap means a lower-energy photon, and since E = hc/λ, lower energy means a longer wavelength. That is the red shift.</p></div>
          <div class="mnemonic">Bigger dot, redder glow. Tiny dot, blue light.</div>
          <div class="note why"><p>For one material, size is the knob: CdSe dots of different sizes cover blue to red without changing the chemistry.</p></div>
        ` },
        { title: 'Key properties', html: `
          <p class="lead">The headline feature of QDs is a <b>band gap you can tune</b> just by changing size. That one knob is why they show up in so many devices.</p>
          <ul>
            <li><b>Changing the band gap</b> of semiconductors is the most attractive thing about QDs, for both fundamental and technological reasons.</li>
            <li>Widely tunable band-gap semiconductors are candidate materials for new-generation devices:</li>
          </ul>
          <div class="chips"><span class="chip">Flat panel displays</span><span class="chip">Photovoltaics</span><span class="chip">Optoelectronic devices</span><span class="chip">Lasers</span><span class="chip">Sensors</span><span class="chip">Photon bandgap devices</span></div>
          <h3>Four properties of QDs</h3>
          <table class="tbl">
            <thead><tr><th>Property</th><th>What it means</th><th>Why it helps</th></tr></thead>
            <tbody>
              <tr><td><b>High extinction coefficient</b></td><td>Absorbs light very strongly</td><td>A thin layer captures a lot of light</td></tr>
              <tr><td><b>High electron mobility</b></td><td>Charge moves through easily</td><td>Good for electronic and optoelectronic devices</td></tr>
              <tr><td><b>Bandwidth and position adjustment</b></td><td>The emission band's position (colour) and width can be set</td><td>Pure, sharp colours on demand</td></tr>
              <tr><td><b>Solution process capabilities</b></td><td>Can be made and handled as liquid dispersions</td><td>Coated or printed onto surfaces cheaply</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>A common long answer: QD definition (2–10 nm semiconductor, CdSe/CdS/InP) + mechanism of emission + size–colour rule + these four properties + two or three applications.</p></div>
        ` },
      ],
      flashcards: [
        { front: 'Size range of a quantum dot?', back: '<b>2–10 nm</b> in diameter, about <b>10–50 atoms</b> across.' },
        { front: 'How many electrons does a quantum dot contain?', back: '<b>100 to 1000</b> electrons.' },
        { front: 'Three example QD materials?', back: '<b>CdSe</b> (cadmium selenide), <b>CdS</b> (cadmium sulfide), <b>InP</b> (indium phosphide).' },
        { front: 'What decides the colour a QD emits?', back: 'The <b>amount of energy released</b> when electrons drop back, which is set by the <b>size of the dot</b>.' },
        { front: '2–3 nm dot vs 5–6 nm dot: which colours?', back: '2–3 nm: <b>blue / violet</b> (higher energy). 5–6 nm: <b>red / orange</b> (lower energy).' },
        { front: 'What happens to the band gap and emission as a QD grows?', back: 'Band gap <b>decreases</b>; emission is <b>red-shifted</b> (longer wavelength).' },
        { front: 'Define quantum confinement.', back: '<b>Spatial confinement of electrons</b> in a nanomaterial, instead of their free existence in the bulk.' },
        { front: 'When does quantum confinement set in?', back: 'When the particle diameter approaches the <b>de Broglie wavelength</b> of the conduction-band electrons.' },
        { front: 'Schrödinger\'s point about confined electrons?', back: 'Electrons in confined systems occupy <b>quantised energy levels</b>.' },
        { front: 'Bulk semiconductor vs QD energy levels?', back: 'Bulk: <b>continuous</b> levels in bands. QD: <b>discrete</b> levels and a <b>large band gap</b>.' },
        { front: 'Four properties of QDs?', back: 'High <b>extinction coefficient</b>, high <b>electron mobility</b>, <b>bandwidth and position adjustment</b>, <b>solution process</b> capabilities.' },
        { front: 'Why does one batch of QDs glow a single colour?', back: 'The quantised gap makes the energy released <b>nearly the same from electron to electron</b>, so emission is at a <b>very constant wavelength</b>.' },
      ],
      oneLiners: [
        'Quantum dots: <b>semiconductor</b> particles, <b>2–10 nm</b>, 10–50 atoms across, 100–1000 electrons.',
        'Examples: <b>CdSe, CdS, InP</b>.',
        'Emission: electrons absorb energy, escape their orbit, drop back and release the energy as <b>light</b>.',
        'Confinement gives <b>discrete levels</b> and a <b>large band gap</b>, unlike the continuous bands of bulk semiconductors.',
        'Smaller dot (2–3 nm) → higher energy → <b>blue/violet</b>; larger dot (5–6 nm) → lower energy → <b>red/orange</b>.',
        'Band gap <b>decreases</b> and emission is <b>red-shifted</b> as QD size increases.',
        'Emission wavelength is <b>very constant</b> and <b>tunable by size</b>.',
        'QD properties: high <b>extinction coefficient</b>, high <b>electron mobility</b>, bandwidth/position adjustment, solution processing.',
      ],
      formulas: [
        { name: 'Photon energy and colour', html: `E = hν = <span class="frac"><span>hc</span><span>λ</span></span>`, note: 'Bigger energy gap → bigger E → shorter λ (bluer). Smaller gap → longer λ (redder).' },
        { name: 'Particle in a box (why size matters)', html: `E<sub>n</sub> = <span class="frac"><span>n<sup>2</sup>h<sup>2</sup></span><span>8mL<sup>2</sup></span></span>`, note: 'Standard model, not on the slides. Level spacing ∝ 1/L², so a smaller dot has bigger gaps.' },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'm3-qd-uses',
      title: 'QD synthesis & applications',
      short: 'QD synthesis & uses',
      blurb: 'Four lab routes for making quantum dots, and where their tunable glow gets used: screens, solar cells, bio-imaging, lighting and sensing.',
      source: 'Slides 37–39',
      tabs: [
        { title: 'Synthesis routes', html: `
          <p class="lead"><b>Four routes</b> for making QDs: high temperature, hydrothermal, microwave and ultrasonication. In each, the <b>reaction conditions</b> (temperature, time, pressure) set the dot size.</p>
          <figure data-fig="m3-qd-hot-injection"></figure>
          <table class="tbl">
            <thead><tr><th>Route</th><th>Set-up</th><th>What drives it</th></tr></thead>
            <tbody>
              <tr><td><b>1. High temperature synthesis</b></td><td>Three-neck flask on a <b>heating mantle above 200 °C</b>, high-boiling-point solvent mixture, precursors injected by syringe, temperature sensor, N<sub>2</sub> flowing in</td><td>Hot solvent breaks the precursors down fast, dots nucleate and then grow</td></tr>
              <tr><td><b>2. Hydrothermal synthesis</b></td><td><b>Teflon liner</b> inside a <b>stainless steel autoclave</b>, Teflon cap, stainless steel plates top and bottom</td><td>Water sealed in and heated above 100 °C builds up its own pressure</td></tr>
              <tr><td><b>3. Microwave synthesis</b></td><td>A lab microwave reactor</td><td>Microwaves heat the whole solution quickly and evenly</td></tr>
              <tr><td><b>4. Ultrasonication synthesis</b></td><td>An <b>ultrasonic probe</b> dipped into the reaction beaker (timer shows 15 min)</td><td>Sound waves make tiny bubbles that collapse violently, creating local hot spots</td></tr>
            </tbody>
          </table>
          <figure data-fig="m3-qd-synthesis-routes"></figure>
          <div class="note why"><p>The coloured spheres (green, yellow, orange, red) show dots growing with time: bigger dots glow redder. The finished dot has a <b>core</b>, a <b>shell</b> and a coat of <b>ligands</b>, long surface molecules that stop dots clumping together. The N<sub>2</sub> flow keeps air out, so precursors and dots don't oxidise.</p></div>
        ` },
        { title: 'Applications', html: `
          <p class="lead">Every QD application comes back to two tricks: <b>colour you can tune by size</b> and <b>strong light absorption</b>.</p>
          <table class="tbl">
            <thead><tr><th>Area</th><th>What the QDs do</th></tr></thead>
            <tbody>
              <tr><td><b>Displays</b></td><td>Brighter, more vibrant colours, particularly in <b>QD-OLED TVs</b></td></tr>
              <tr><td><b>Solar cells</b></td><td>Raise efficiency by absorbing a <b>wider range of wavelengths</b></td></tr>
              <tr><td><b>Biomedical imaging</b></td><td>Tunable emission lights up tissues and cells, aiding diagnostics and <b>drug delivery</b></td></tr>
              <tr><td><b>Solid-state lighting</b></td><td>More energy-efficient and colourful lighting</td></tr>
              <tr><td><b>Other (being explored)</b></td><td>Sensors, lasers, quantum computing and other research areas</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Displays: each dot size gives one narrow colour, so red, green and blue pixels come out purer. Solar cells: a dot absorbs every photon above its band gap, so growing bigger dots (smaller gap) or stacking dots of different sizes pushes absorption further into the red and near-IR and uses more of sunlight. Bio-imaging: dots of different sizes can tag different targets in the same sample, each glowing its own colour.</p></div>
          <h3>QDs at work</h3>
          <figure data-fig="m3-qd-app-photos"></figure>
          <table class="tbl">
            <thead><tr><th>Photo</th><th>What you are seeing</th></tr></thead>
            <tbody>
              <tr><td><b>Cancer cell imaging</b></td><td>Cells tagged with QDs glowing green under a fluorescence microscope</td></tr>
              <tr><td><b>Metal ions sensing</b></td><td>QD spots whose glow changes with the ion present: Ni<sup>2+</sup>, Cd<sup>2+</sup>, Zn<sup>2+</sup>, Hg<sup>2+</sup>, Cu<sup>2+</sup>, Pb<sup>2+</sup>, Ag<sup>+</sup>, Mn<sup>2+</sup>, Co<sup>2+</sup>, Cr(VI)</td></tr>
              <tr><td><b>Light emitting diode</b></td><td>QD LEDs glowing red, green and blue</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Sensing works because a metal ion that sticks to the dot's surface changes how it emits, dimming it or shifting its colour. Different ions change the glow in different ways, which is what the grid of coloured spots shows.</p></div>
          <div class="note exam"><p>For an applications answer, give the area and the property behind it in one breath, e.g. "solar cells, because a tunable gap lets QDs absorb a wider range of wavelengths".</p></div>
        ` },
      ],
      flashcards: [
        { front: 'Four synthesis routes for QDs?', back: '<b>High temperature</b>, <b>hydrothermal</b>, <b>microwave</b> and <b>ultrasonication</b> synthesis.' },
        { front: 'Conditions in high temperature QD synthesis?', back: 'Heating mantle <b>above 200 °C</b>, <b>high-boiling-point solvent</b>, precursors injected by syringe, <b>N<sub>2</sub></b> atmosphere, temperature sensor.' },
        { front: 'Vessel used in hydrothermal synthesis?', back: 'A <b>Teflon-lined stainless steel autoclave</b> with a Teflon cap and stainless steel plates.' },
        { front: 'Layers of a core–shell quantum dot?', back: '<b>Core</b>, <b>shell</b>, then an outer coat: <b>ligands</b> (synthesis figure) or a <b>protective shell</b>.' },
        { front: 'How do QDs help solar cells?', back: 'They absorb a <b>wider range of light wavelengths</b>, raising efficiency.' },
        { front: 'Which TVs use QDs?', back: '<b>QD-OLED TVs</b>: brighter, more vibrant colours.' },
        { front: 'Biomedical use of QDs?', back: 'Imaging <b>tissues and cells</b>, aiding <b>diagnostics</b> and <b>drug delivery</b>.' },
        { front: 'Uses of QDs still being explored?', back: '<b>Sensors, lasers, quantum computing</b> and other research areas.' },
        { front: 'How can QDs detect metal ions such as Hg<sup>2+</sup> or Pb<sup>2+</sup>?', back: 'The ion binds to the dot surface and <b>changes its emission</b> (dims or shifts the colour): <b>metal ions sensing</b>.' },
      ],
      oneLiners: [
        'QD synthesis: <b>high temperature</b> (&gt;200 °C, N<sub>2</sub>), <b>hydrothermal</b> (Teflon-lined autoclave), <b>microwave</b>, <b>ultrasonication</b>.',
        'Displays: <b>QD-OLED TVs</b> get brighter, more vibrant colours.',
        'Solar cells: QDs absorb a <b>wider range of wavelengths</b>.',
        'Biomedical: imaging tissues and cells, <b>diagnostics</b> and <b>drug delivery</b>.',
        'Solid-state lighting: more <b>energy-efficient</b>, colourful light.',
        'Also explored for <b>sensors, lasers, quantum computing</b>.',
      ],
      formulas: [],
    },

    // ------------------------------------------------------------------
    {
      id: 'm3-coolants',
      title: 'Liquid coolants & requirements',
      short: 'Coolant requirements',
      blurb: 'What a coolant does, why chips need one, two real cooling loops, and the seven things a good coolant has to get right.',
      source: 'Slides 40–47',
      tabs: [
        { title: 'What coolants do', html: `
          <p class="lead">A coolant is a fluid that runs across an engine, <b>absorbs the heat</b>, carries it to the <b>radiator</b> to be cooled, and is then <b>recycled</b>. Coolants cool any machinery that makes heat while it runs.</p>
          <ul>
            <li>Electronics, especially <b>miniature electronics</b>, need cooling because chips are highly <b>power-dense</b>.</li>
            <li>They can produce a heat flux of up to <b>1000 W/cm<sup>2</sup></b>.</li>
            <li><b>High power density</b> means more heat, and more heat <b>brings down the performance</b> of the engine or device.</li>
          </ul>
          <h3>Coolants are everywhere</h3>
          <div class="chips"><span class="chip">Automobiles</span><span class="chip">HVAC systems</span><span class="chip">Home air-conditioners</span><span class="chip">Computers</span><span class="chip">Supercomputers</span><span class="chip">Data centres</span><span class="chip">Miniature electronics</span><span class="chip">Military devices</span><span class="chip">Mobile devices</span></div>
          <p>The section covers three things: <b>types of coolants</b>, <b>thermal conductivity</b> (how well the fluid carries heat) and <b>applications</b>.</p>
          <div class="note why"><p>For scale, a kitchen hot plate gives out only a few W/cm². A chip at 1000 W/cm² is hundreds of times more intense, over a tiny area. Hot chips slow themselves down, leak more current and wear out faster, which is why the heat has to be pulled away.</p></div>
        ` },
        { title: 'Cooling loops', html: `
          <p class="lead">Both examples work the same way: <b>pump</b> the liquid past the hot part, let it soak up heat, <b>cool it</b> in a radiator or heat exchanger, and send it back round.</p>
          <figure data-fig="m3-engine-cooling"></figure>
          <h3>Car engine</h3>
          <ol class="steps">
            <li><b>Pump</b> circulates water through the jacket around the cylinders.</li>
            <li><b>Cylinders</b> hand their heat to the water.</li>
            <li><b>Thermostat</b> regulates the flow of hot water on to the radiator.</li>
            <li><b>Radiator + fan</b> The fan draws air through the radiator and cools the water.</li>
            <li><b>Back to the pump</b> The cooled water goes round again.</li>
          </ol>
          <p>Other labelled parts: <b>pressure-release cap</b> on top of the radiator, <b>drain cock</b> and <b>overflow pipe</b> at the bottom, and incoming <b>airflow</b>.</p>
          <figure data-fig="m3-cold-plate-loop"></figure>
          <h3>Electronics cold-plate loop</h3>
          <ol class="steps">
            <li><b>Cold plates</b> sit on the hot chips; liquid flowing through them picks up the heat.</li>
            <li><b>Connective tubing</b> carries the warm liquid away.</li>
            <li><b>Heat exchanger</b> passes the heat to the air.</li>
            <li><b>Liquid pump</b> pushes the cooled liquid back to the cold plates.</li>
          </ol>
          <div class="note exam"><p>If asked to sketch a cooling system, the four boxes are enough: heat source → coolant channel → radiator / heat exchanger → pump, in a closed loop.</p></div>
        ` },
        { title: 'Heat & electrical specs', html: `
          <p class="lead">First two checks on any coolant: does it <b>carry heat well</b>, and will it <b>short the circuit</b> if it leaks.</p>
          <h3>1. Thermophysical properties</h3>
          <table class="tbl">
            <thead><tr><th>Property</th><th>Why it matters</th></tr></thead>
            <tbody>
              <tr><td><b>Thermal conductivity</b></td><td>Higher means heat moves out of the hot surface into the fluid faster</td></tr>
              <tr><td><b>Specific heat</b></td><td>Higher means each kilogram carries more heat per degree it warms up</td></tr>
              <tr><td><b>Latent heat of vaporization</b></td><td>Higher means a lot of heat is soaked up if the liquid boils</td></tr>
              <tr><td><b>Surface tension</b></td><td>Affects how well it wets the surface and how bubbles form when it boils</td></tr>
              <tr><td><b>Viscosity</b></td><td>Lower means it is easier to pump round the loop</td></tr>
            </tbody>
          </table>
          <h3>2. Electrical conductivity</h3>
          <ul>
            <li><b>Water</b> and <b>glycol–water</b> are highly conductive, so a spill may damage the electronics.</li>
            <li><b>Non-aqueous coolants</b> are preferred when electronics are involved.</li>
          </ul>
          <div class="note heads-up"><p>The slide calls water highly conductive. Strictly, perfectly pure water conducts poorly. The conduction comes from dissolved ions, and any water loop picks those up from pipes, additives and air. So in practice treat every water-based coolant as conductive.</p></div>
        ` },
        { title: 'Fire & toxicity', html: `
          <p class="lead">Next two checks: the coolant must <b>not catch fire</b> and must <b>not poison</b> anything when it leaks.</p>
          <h3>3. Flammability</h3>
          <ul>
            <li>Coolants for electronics must be <b>non-flammable</b>.</li>
            <li>Any liquid with a <b>flash point below 93 °C</b> counts as flammable.</li>
            <li><b>Ethanol, methanol and benzene</b> are all flammable.</li>
            <li><b>PFC</b> (perfluorocarbons) and <b>HFE</b> (hydrofluoroethers) are <b>non-flammable</b> and suit cooling applications.</li>
          </ul>
          <div class="note heads-up"><p>The slide says "PFC and HFE are inflammable". In English "inflammable" actually means "catches fire easily", the same as flammable. The slide means <b>non-flammable</b>, which is what PFC and HFE are. Write non-flammable in your answer.</p></div>
          <div class="note why"><p>Flash point is the lowest temperature at which the vapour above a liquid can be lit by a spark or flame. A coolant sitting next to hot electronics must stay well below its flash point, so a high flash point (or none) is what you want.</p></div>
          <h3>4. Toxicity</h3>
          <ul>
            <li>The coolant should be <b>non-toxic</b>, because leaks happen and can harm living organisms.</li>
            <li><b>Fluorocarbon</b> and <b>hydrofluoroether</b> coolants have low toxicity compared with <b>ethylene glycol</b>-based coolants.</li>
          </ul>
          <div class="note trap"><p>Ethylene glycol is the usual car antifreeze, and it is the toxic one in this list. Low toxicity belongs to the fluorinated fluids.</p></div>
        ` },
        { title: 'Materials, environment, cost', html: `
          <p class="lead">Last three checks: it must not <b>corrode</b> the hardware, must be kind to the <b>atmosphere</b>, and has to be <b>affordable</b>.</p>
          <h3>5. Material compatibility</h3>
          <ul>
            <li>The <b>wetted surface</b> and the coolant must be compatible, to <b>minimise corrosion</b>.</li>
            <li><b>Copper and aluminium</b> are the preferred build materials: high thermal conductivity and compatible with most coolants.</li>
          </ul>
          <h3>6. Environmental impact</h3>
          <p>A coolant should have low <b>global warming potential (GWP)</b> and low <b>ozone depletion potential (ODP)</b>.</p>
          <table class="tbl">
            <thead><tr><th>Coolant base</th><th>GWP</th><th>ODP</th></tr></thead>
            <tbody>
              <tr><td>Perfluorocarbon (PFC)</td><td><b>High</b></td><td><b>Zero</b></td></tr>
              <tr><td>Hydrofluoroether (HFE)</td><td><b>Low</b></td><td><b>Zero</b></td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Zero ODP for both: ozone is destroyed by chlorine and bromine, and neither fluid contains them. PFCs have high GWP because their C–F bonds are so stable that they hang around in the air for a very long time, trapping heat. The H and ether O in an HFE give the atmosphere a way to break it down, so its GWP is lower.</p></div>
          <h3>7. Cost</h3>
          <p>Water-based coolants are usually <b>low-cost</b>, but adding <b>antifreeze, glycols and anti-corrosion</b> materials pushes the cost up.</p>
          <div class="mnemonic">The seven checks, in slide order: "Try Every Fluid To Make Engines Cool" = Thermophysical, Electrical, Flammability, Toxicity, Material, Environment, Cost.</div>
        ` },
      ],
      flashcards: [
        { front: 'What is a coolant?', back: 'A fluid that runs across an engine, <b>absorbs heat</b>, carries it to the <b>radiator</b> to be cooled, and is <b>recycled</b>.' },
        { front: 'Where are coolants used?', back: 'Automobiles, HVAC, home ACs, computers, supercomputers, <b>data centres</b>, miniature electronics, military and mobile devices.' },
        { front: 'Heat flux a power-dense chip can produce?', back: 'Up to <b>1000 W/cm<sup>2</sup></b>.' },
        { front: 'Five thermophysical properties that matter in a coolant?', back: '<b>Thermal conductivity</b>, <b>specific heat</b>, <b>latent heat of vaporization</b>, <b>surface tension</b>, <b>viscosity</b>.' },
        { front: 'Why are non-aqueous coolants preferred around electronics?', back: 'Water and glycol–water are <b>highly conductive</b>; a spill may <b>damage the electronics</b>.' },
        { front: 'Flash point rule for flammability?', back: 'Flash point <b>below 93 °C</b> = flammable.' },
        { front: 'Three common flammable liquids that fail the flash-point test?', back: '<b>Ethanol, methanol, benzene</b>.' },
        { front: 'Which coolants have low toxicity compared with ethylene glycol?', back: '<b>Fluorocarbon</b> and <b>hydrofluoroether</b> coolants.' },
        { front: 'Preferred device materials and why?', back: '<b>Copper and aluminium</b>: high thermal conductivity, compatible with most coolants.' },
        { front: 'PFC vs HFE: GWP and ODP?', back: 'PFC: <b>high GWP</b>, zero ODP. HFE: <b>low GWP</b>, zero ODP.' },
        { front: 'What raises the cost of water-based coolants?', back: 'Adding <b>antifreeze, glycols</b> and <b>anti-corrosion</b> materials.' },
      ],
      oneLiners: [
        'Coolant: absorbs heat, carries it to the radiator, gets cooled and <b>recycled</b>.',
        'Chips can generate heat flux of up to <b>1000 W/cm<sup>2</sup></b>.',
        'Seven requirements: <b>thermophysical, electrical conductivity, flammability, toxicity, material compatibility, environment, cost</b>.',
        'Flash point <b>&lt;93 °C</b> = flammable; ethanol, methanol, benzene are flammable; <b>PFC and HFE</b> are not.',
        'Fluorocarbons and HFEs are <b>less toxic</b> than ethylene glycol coolants.',
        '<b>Cu and Al</b> are preferred: high thermal conductivity, compatible with most coolants.',
        'PFC: <b>high GWP, zero ODP</b>. HFE: <b>low GWP, zero ODP</b>.',
      ],
      formulas: [],
    },

    // ------------------------------------------------------------------
    {
      id: 'm3-coolant-types',
      title: 'Types of coolants',
      short: 'Types of coolants',
      blurb: 'Water, deionised water, glycol and formate mixes, salt brines and dielectric fluids: what each is good at, where it fails, and how to pick one.',
      source: 'Slides 48–51',
      tabs: [
        { title: 'Water & brines', html: `
          <p class="lead"><b>Water</b> is the default coolant: it carries heat very well, it is cheap and it is low-risk. Its big weakness is that it <b>freezes</b>.</p>
          <h3>Aqueous coolants (water)</h3>
          <ul>
            <li>Good <b>thermal conductivity</b>, high <b>specific heat</b>, high <b>latent heat of vaporization</b>, low <b>viscosity</b>.</li>
            <li>A <b>low-risk</b> coolant.</li>
            <li><b>Compatible with most materials</b>.</li>
          </ul>
          <h3>Freezing problem & fixes</h3>
          <p>Water's <b>freezing temperature</b> makes it unsuitable in some conditions. Additives such as <b>glycol</b> lower the freezing point.</p>
          <div class="vs">
            <div class="side"><h4>Water + glycol</h4><p>Lower freezing point, and the standard fix.</p></div>
            <div class="side"><h4>Water + NaCl or CaCl<sub>2</sub></h4><p><b>Low freezing point</b>, but salt solutions are <b>highly corrosive</b>.</p></div>
          </div>
          <div class="note why"><p>Anything dissolved in water lowers its freezing point (freezing-point depression), so both glycol and salt work as antifreeze. The difference is corrosion: chloride ions from the salt attack metal pipes hard, while glycol is far milder (it still gets inhibitors in practice).</p></div>
        ` },
        { title: 'Deionised water', html: `
          <p class="lead"><b>Deionised (DI) water</b> is water with its ions stripped out. It is kinder to metal than tap water, but it still needs <b>corrosion inhibitors</b>.</p>
          <ul>
            <li><b>Tap water</b> contains <b>minerals and pathogens</b>.</li>
            <li>DI water is <b>less corrosive</b> than tap water.</li>
            <li>Add corrosion inhibitors even to DI water, because <b>exposure to air</b> can make it corrosive.</li>
          </ul>
          <h3>Common corrosion inhibitors</h3>
          <div class="chips"><span class="chip">Phosphates</span><span class="chip">Tolyltriazole</span><span class="chip">2-Ethylhexanoic acid</span></div>
          <div class="note why"><p>Why air matters: DI water absorbs CO<sub>2</sub> from the air, which forms carbonic acid and lowers the pH, and it picks up dissolved O<sub>2</sub>, which attacks metal. Inhibitors form a thin protective layer on the metal; tolyltriazole is the classic copper protector.</p></div>
          <div class="note heads-up"><p>The slide spells it "tolytriazole". The correct name is <b>tolyltriazole</b> (a tolyl group on a triazole ring).</p></div>
          <div class="note trap"><p>"Deionised" does not mean "safe forever". Once it touches air it starts to turn corrosive, so the inhibitor goes in every time.</p></div>
        ` },
        { title: 'Glycol & formate mixes', html: `
          <p class="lead">Mixing water with <b>glycol</b> or with <b>potassium formate/acetate</b> keeps most of water's heat-carrying power while pushing the freezing point far below 0 °C.</p>
          <h3>Water–glycol solutions</h3>
          <ul>
            <li><b>Water–ethylene glycol</b> and <b>water–propylene glycol</b> have a <b>lower freezing point</b> than water.</li>
            <li>They have high thermal conductivity, high specific heat and a high <b>boiling point</b>.</li>
          </ul>
          <div class="note heads-up"><p>The slide lists "boiling point" twice. Also, compared with pure water, glycol–water has a <b>higher boiling point</b> but somewhat <b>lower</b> thermal conductivity and specific heat. "High" is fair only next to non-water fluids like oils and fluorocarbons, which are much worse at carrying heat.</p></div>
          <h3>Water–potassium formate / acetate solutions</h3>
          <div class="kv">
            <div><span>Freezing point</span><b>−70 °C</b></div>
            <div><span>Corrosion</span><b>Less than water–NaCl / water–CaCl<sub>2</sub></b></div>
            <div><span>Used by</span><b>Food, beverage, chemical, pharma</b></div>
          </div>
          <p>Their low freezing point suits many applications.</p>
          <div class="note why"><p>Formate and acetate are mild organic anions, so they lower the freezing point like a salt brine without the aggressive chloride ions that eat metal.</p></div>
          <div class="note trap"><p>Remember the toxicity point from the requirements: ethylene glycol is the toxic one. Propylene glycol is the milder glycol.</p></div>
        ` },
        { title: 'Dielectric coolants', html: `
          <p class="lead"><b>Dielectric coolants</b> don't conduct electricity, so they can touch live chips. That is the one job water can't do.</p>
          <ul>
            <li>The <b>high electrical conductivity of water</b> rules out direct contact with chips and circuits.</li>
            <li><b>Data centres</b> use dielectric coolants in <b>immersion cooling</b> or <b>direct-to-chip cooling</b>.</li>
          </ul>
          <figure data-fig="m3-dielectric-tree"></figure>
          <table class="tbl">
            <thead><tr><th>Family</th><th>Examples</th></tr></thead>
            <tbody>
              <tr><td><b>Aromatics</b></td><td>Diethyl benzene, toluene, benzene etc.</td></tr>
              <tr><td><b>Aliphatic</b></td><td>Paraffinic, iso-paraffinic, polyalphaolefins (PAO)</td></tr>
              <tr><td><b>Fluorocarbons: HFE</b></td><td>Hydrofluoroethers HFE-7000, HFE-7100, HFE-7200, HFE-7300 etc.</td></tr>
              <tr><td><b>Fluorocarbons: PFC</b></td><td>Perfluorocarbons FC-70, FC-72, FC-87, FC-3283 etc.</td></tr>
              <tr><td><b>Silicones</b></td><td>Syltherm XLT, polydimethylsiloxane (silicone oil)</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Immersion cooling: whole servers sit in a bath of the liquid. Direct-to-chip: the liquid is piped through cold plates right on the chips. In immersion the liquid touches live boards all the time; in direct-to-chip a leak would drip straight onto them. Either way it must not conduct.</p></div>
          <div class="note trap"><p>Dielectric does not mean non-flammable. Benzene and toluene sit in the aromatic branch, yet benzene is on the flammable list. For electronics the fluorocarbons (PFC, HFE) win because they are <b>non-conducting</b>, <b>non-flammable</b> and <b>low in toxicity</b>.</p></div>
        ` },
        { title: 'Choosing a coolant', html: `
          <p class="lead">Picking a coolant is just the <b>seven requirements</b> applied to one job. Find the constraint that can't bend, and it usually decides for you.</p>
          <table class="tbl">
            <thead><tr><th>Coolant</th><th>Strength</th><th>Weakness</th><th>Fits</th></tr></thead>
            <tbody>
              <tr><td><b>Water</b></td><td>Best heat carrier, cheap, low-risk, compatible with most materials</td><td>Freezes; conducts</td><td>General cooling above 0 °C</td></tr>
              <tr><td><b>DI water + inhibitors</b></td><td>Minerals (ions) removed, so less corrosive than tap water</td><td>Air makes it corrosive; still conducts if it picks up ions</td><td>Closed cooling loops</td></tr>
              <tr><td><b>Water–glycol</b></td><td>Lower freezing point, higher boiling point</td><td>Ethylene glycol is toxic; conducts</td><td>Engines in cold weather</td></tr>
              <tr><td><b>Water–NaCl / CaCl<sub>2</sub></b></td><td>Low freezing point</td><td>Highly corrosive</td><td>Only where corrosion can be managed</td></tr>
              <tr><td><b>Water–K formate / acetate</b></td><td>Freezing point −70 °C, less corrosive than chloride brines</td><td>Still water-based, so conducts</td><td>Food, beverage, chemical, pharma</td></tr>
              <tr><td><b>Dielectric (PFC, HFE, etc.)</b></td><td>Non-conducting; PFC/HFE non-flammable, low toxicity, zero ODP</td><td>PFC has high GWP; carries less heat than water</td><td>Data-centre immersion, direct-to-chip</td></tr>
            </tbody>
          </table>
          <p>Pick a scenario, then flip the constraints (live electronics, below 0 °C, fire risk, environmental limits, budget) and watch the recommendation change.</p>
          <div data-viz="coolant-picker"></div>
          <div class="note example"><p>A data centre wants to dunk its servers in liquid. Touches live boards, so it must be dielectric. Must not burn, so fluorocarbon over aromatic. Has an environmental target, so <b>HFE</b> over PFC: both have zero ODP, but HFE has low GWP.</p></div>
          <div class="note exam"><p>For "why not just use water?", give two points: it <b>conducts</b> (a leak shorts the electronics) and it <b>freezes</b> at 0 °C.</p></div>
        ` },
      ],
      flashcards: [
        { front: 'Four thermal strengths of water as a coolant?', back: 'Good <b>thermal conductivity</b>, high <b>specific heat</b>, high <b>latent heat of vaporization</b>, low <b>viscosity</b>.' },
        { front: 'Water\'s main drawback and the usual fix?', back: 'It <b>freezes</b>; additives such as <b>glycol</b> lower the freezing point.' },
        { front: 'Problem with water–NaCl or water–CaCl<sub>2</sub>?', back: 'Low freezing point, but salt solutions are <b>highly corrosive</b>.' },
        { front: 'Why add corrosion inhibitors even to deionised water?', back: '<b>Exposure to air</b> can make it corrosive.' },
        { front: 'Three common corrosion inhibitors?', back: '<b>Phosphates</b>, <b>tolyltriazole</b>, <b>2-ethylhexanoic acid</b>.' },
        { front: 'Two water–glycol coolants?', back: '<b>Water–ethylene glycol</b> and <b>water–propylene glycol</b>: lower freezing point than water.' },
        { front: 'Water–potassium formate/acetate: freezing point and users?', back: '<b>−70 °C</b>; used in <b>food, beverage, chemical and pharmaceutical</b> industries. Less corrosive than NaCl/CaCl<sub>2</sub> brines.' },
        { front: 'Where do data centres use dielectric coolants?', back: '<b>Immersion cooling</b> or <b>direct-to-chip cooling</b>.' },
        { front: 'Four families of dielectric coolants?', back: '<b>Aromatics</b>, <b>aliphatic</b>, <b>fluorocarbons</b> (HFE, PFC), <b>silicones</b>.' },
        { front: 'Examples of HFE and PFC coolants?', back: 'HFE: <b>HFE-7000, 7100, 7200, 7300</b>. PFC: <b>FC-70, FC-72, FC-87, FC-3283</b>.' },
      ],
      oneLiners: [
        'Water: great heat carrier, low-risk, compatible with most materials, but it <b>freezes</b>.',
        'Water–NaCl / water–CaCl<sub>2</sub>: low freezing point, <b>highly corrosive</b>.',
        'DI water is less corrosive than tap water but still needs <b>inhibitors</b> (phosphates, tolyltriazole, 2-ethylhexanoic acid).',
        'Water–ethylene glycol and water–propylene glycol: <b>lower freezing point</b>, higher boiling point.',
        'Water–K formate/acetate: freezing point <b>−70 °C</b>, used in food, beverage, chemical, pharma.',
        'Dielectric coolants: aromatics, aliphatic, <b>fluorocarbons (HFE, PFC)</b>, silicones; used for <b>immersion</b> and <b>direct-to-chip</b> cooling.',
      ],
      formulas: [],
    },
  ],

  figures: [
    { id: 'm3-qd-core-shell', src: 'm3/images/s32_385d8f25.jpg', crop: [0.028, 0.2, 0.95, 0.77], caption: 'A quantum dot is layered: a semiconductor core, a QD shell around it and a protective shell outside. Short-wavelength light goes in on the left and a longer-wavelength glow comes out on the right.', alt: 'Cut-away sphere showing a blue QD core inside a red QD shell, wrapped in a translucent protective shell, with short blue waves entering and longer red waves leaving.' },
    { id: 'm3-qd-absorb-emit', src: 'm3/images/s34_098147bd.jpg', crop: null, caption: 'Left: absorbed energy lifts an electron from a lower to a higher energy level. Right: the electron drops back and the difference leaves as light.', alt: 'Two circles with stacked energy levels. In the first an incoming energy arrow pushes an electron up; in the second the electron falls down and a light wave leaves.' },
    { id: 'm3-qd-bulk-vs-dot', src: 'm3/images/s34_c6a261cf.jpg', crop: null, caption: 'Bulk semiconductor: continuous conduction and valence bands with a small gap. Quantum dot: a few discrete lines and a much bigger energy gap.', alt: 'Left, a large cube above curved conduction and valence bands with a short energy-gap arrow. Right, a tiny cube inside an outline box above discrete lines with a long energy-gap arrow.' },
    { id: 'm3-qd-vials', src: 'm3/images/s39_a6afa104.jpg', crop: null, caption: 'Quantum dot emissions from violet to deep red. Each vial holds dots of a different size: smallest on the left, largest on the right.', alt: 'Eight glass vials glowing violet, blue, cyan, green, yellow, orange, red and deep red against a black background.' },
    { id: 'm3-qd-emission-spectra', src: 'm3/slides/s36.png', crop: [0.14, 0.13, 0.74, 0.62], caption: 'As QD radius grows the energy gap shrinks (left), so the emission peak slides from 473 nm to 655 nm (A) and the dot colour runs blue to deep red (B).', alt: 'Left, energy gaps drawn as vertical bars that get shorter as the QD radius increases, with dots coloured blue, green, yellow, orange, red. Right, ten fluorescence peaks from 473 to 655 nm and a row of spheres growing from small blue to large dark red.' },
    { id: 'm3-qd-hot-injection', src: 'm3/images/s37_5c72e1a5.jpg', crop: null, caption: 'High temperature synthesis: precursors are injected into a high-boiling solvent on a heating mantle above 200 °C under N₂. The dots grow from green to red with time and end up with a core, shell and ligands.', alt: 'Three-neck flask with red liquid on a heating mantle labelled over 200 C, a syringe of precursors, a temperature sensor, a condenser with N2 inlet, a column of green, yellow, orange and red spheres, and a core-shell dot with ligands.' },
    { id: 'm3-qd-synthesis-routes', src: 'm3/slides/s37.png', crop: [0.14, 0.62, 0.74, 0.38], caption: 'The other three routes: a Teflon-lined stainless steel autoclave for hydrothermal synthesis, a lab microwave reactor, and an ultrasonic probe in a beaker.', alt: 'Diagram of an autoclave with Teflon cap, Teflon liner and stainless steel plates; photo of a benchtop microwave reactor; drawing of an ultrasonic probe in a beaker with a 15 min timer.' },
    { id: 'm3-qd-tem', src: 'm3/slides/s39.png', crop: [0.178, 0.23, 0.284, 0.388], caption: 'Electron microscope image of quantum dots: near-uniform round particles, each a few nanometres wide (scale bar 5 nm).', alt: 'Grey TEM image of many round dark particles packed together, with a 5 nm scale bar.' },
    { id: 'm3-qd-app-photos', src: 'm3/slides/s39.png', crop: [0.125, 0.655, 0.755, 0.34], caption: 'QDs at work: tagged cancer cells glowing green, a sensing grid where the spot colour changes with the metal ion added, and red, green and blue QD LEDs.', alt: 'Three photos: green fluorescent cells; a grid of coloured spots labelled Ni2+, Cd2+, Zn2+, Hg2+, Cu2+, Pb2+, Ag+, Mn2+, Co2+, Cr(VI); three small LEDs glowing red, green and blue.' },
    { id: 'm3-engine-cooling', src: 'm3/images/s44_6c6653ba.jpg', crop: null, caption: 'Car engine cooling: the pump pushes water through the jacket around the cylinders, the thermostat controls flow to the radiator, and the fan pulls air through to cool it.', alt: 'Engine block with four cylinders and a water jacket, blue arrows showing flow to a radiator with pressure-release cap, fan, drain cock and overflow pipe, and airflow arrows.' },
    { id: 'm3-cold-plate-loop', src: 'm3/images/s44_9cca2b5c.jpg', crop: null, caption: 'Liquid cooling for electronics: cold plates sit on the chips, tubing carries the liquid to a heat exchanger, and a pump sends it back.', alt: 'Photo of a finned heat exchanger with an attached liquid pump, connected by tubing to two copper cold plates.' },
    { id: 'm3-dielectric-tree', src: 'm3/images/s51_4e2abc8a.jpg', crop: null, caption: 'Dielectric coolants split into four families. The fluorocarbons branch again into hydrofluoroethers (HFE) and perfluorocarbons (PFC).', alt: 'Tree diagram: dielectric coolants branch into aromatics, aliphatic, fluorocarbons and silicones, each with example boxes; fluorocarbons split into HFE and PFC.' },
  ],
});
