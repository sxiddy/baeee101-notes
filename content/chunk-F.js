CHUNK({
  chunk: 'F',
  module: 'm4',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm4-spectroscopy',
      title: 'Spectroscopy & EMR',
      short: 'Spectroscopy & EMR',
      blurb: 'What spectroscopy measures, who named it, how energy travels, why light is both a wave and a particle, and the six things that can happen when light meets matter.',
      source: 'Pages 1–5',
      tabs: [
        { title: 'What spectroscopy is', html: `
          <p class="lead"><b>Spectroscopy</b> is the study of the <b>interaction of electromagnetic radiant energy with matter</b>. You send radiation into a sample, record how it responds, and read off what is there and how much of it.</p>
          <ul>
            <li>It does <b>qualitative</b> analysis (which compound) and <b>quantitative</b> analysis (how much).</li>
            <li>It works on <b>inorganic, organic and biological</b> compounds alike.</li>
            <li>The data is a <b>spectrum</b>: the sample's response plotted <b>as a function of wavelength or frequency</b>.</li>
          </ul>
          <figure data-fig="m4-optics-layout"></figure>
          <p>Almost every instrument in this module is a variation on this layout. Follow the light left to right:</p>
          <ol class="steps">
            <li><b>Light source</b> gives out many wavelengths at once.</li>
            <li><b>Collimator (lens)</b> makes the rays parallel.</li>
            <li><b>Monochromator (prism or grating)</b> fans the light out into its colours.</li>
            <li><b>Wavelength selector (slit)</b> lets one narrow band through. Its intensity going in is I<sub>0</sub>.</li>
            <li><b>Sample solution in a cuvette</b> absorbs part of it. What comes out is I<sub>t</sub>.</li>
            <li><b>Detector (photocell)</b> turns the light into a signal for the <b>digital display or meter</b>.</li>
          </ol>
          <h3>Who got it started</h3>
          <table class="tbl">
            <thead><tr><th>Year</th><th>Who</th><th>What they did</th></tr></thead>
            <tbody>
              <tr><td><b>1672</b></td><td><b>Sir Isaac Newton</b></td><td>Introduced the word <b>spectrum</b> for the rainbow of colours</td></tr>
              <tr><td><b>1814</b></td><td><b>Fraunhofer</b></td><td>Major contributions to optics and spectroscopy</td></tr>
              <tr><td><b>1859</b></td><td><b>Kirchhoff</b></td><td>Showed that spectroscopy is useful for chemical analysis</td></tr>
            </tbody>
          </table>
          <p>Since then spectroscopy has pushed <b>chemistry, physics and astronomy</b> forward.</p>
          <div class="note why"><p>Fraunhofer mapped the dark lines in sunlight. Kirchhoff then showed that every element gives its own set of lines. That is what turns a spectrum into a fingerprint, and it is why spectroscopy can name a substance.</p></div>
          <div class="note exam"><p>Module 4 syllabus: fundamental concepts of spectroscopic and diffraction techniques; <b>principle, instrumentation and applications of UV-Visible and powder XRD</b>; determination of crystallite size; numericals.</p></div>
        ` },
        { title: 'Energy on the move', html: `
          <p class="lead"><b>Energy</b> is the <b>capacity to do work</b>. It gets from one place to another in three ways, and spectroscopy runs on the third one.</p>
          <table class="tbl">
            <thead><tr><th>Mode</th><th>How the energy moves</th><th>In the picture</th></tr></thead>
            <tbody>
              <tr><td><b>Conduction</b></td><td>Heat passes from one substance to another through <b>direct contact</b></td><td>The pan handle warming the hand</td></tr>
              <tr><td><b>Convection</b></td><td>Heat is carried through a <b>fluid</b> by <b>molecular motion</b></td><td>Water circulating inside the pan</td></tr>
              <tr><td><b>Radiation</b></td><td>Energy is transmitted as <b>rays, waves or particles</b></td><td>Heat spreading out from the flame</td></tr>
            </tbody>
          </table>
          <figure data-fig="m4-heat-transfer"></figure>
          <div class="note why"><p>Conduction needs contact and convection needs a moving fluid. Radiation needs neither, so it crosses empty space. That is how sunlight reaches Earth, and how a lamp in a spectrometer can probe a sample without touching it.</p></div>
        ` },
        { title: 'Wave or particle', html: `
          <p class="lead">Radiation has a <b>dual nature</b>, proposed by <b>de Broglie in 1923</b>. EMR behaves as a <b>wave in space</b> and as a <b>particle when it interacts with matter</b>.</p>
          <div class="vs">
            <div class="side"><h4>Wave nature</h4>
              <ul>
                <li>Measured by <b>frequency, wavelength and velocity</b></li>
                <li>Explains <b>reflection, refraction and diffraction</b></li>
                <li>Waves bend into the shadow behind a barrier</li>
              </ul>
            </div>
            <div class="side"><h4>Particle nature</h4>
              <ul>
                <li>Light arrives as individual <b>photons</b>, which are <b>discrete energy packets</b></li>
                <li>Explains <b>absorption and emission</b></li>
                <li>Particles cast straight, sharp shadows</li>
              </ul>
            </div>
          </div>
          <figure data-fig="m4-particle-wave"></figure>
          <div class="note why"><p>A molecule takes a whole photon or nothing; it cannot take half of one. So only photons whose energy matches one of the molecule's energy gaps get absorbed. That is why a spectrum shows peaks at particular wavelengths instead of an even smear.</p></div>
          <div class="note heads-up"><p>The slide credits the dual nature of radiation to de Broglie (1923), so write that in the exam. Strictly, de Broglie's idea ran the other way: that <em>matter</em>, such as electrons, also behaves as waves. The particle picture of light goes back to Planck (1900) and Einstein (1905).</p></div>
        ` },
        { title: 'Describing a wave', html: `
          <p class="lead">Three quantities pin down any electromagnetic wave: <b>wavelength</b>, <b>frequency</b> and <b>speed</b>. The energy of each photon follows from the frequency.</p>
          <figure data-fig="m4-em-wave"></figure>
          <div class="kv">
            <div><span>Wavelength (λ)</span><b>distance between adjacent crests (cm)</b></div>
            <div><span>Frequency (ν)</span><b>oscillations per unit time, in hertz (Hz)</b></div>
            <div><span>Velocity (c), in vacuum</span><b>2.9979 × 10<sup>8</sup> m s<sup>−1</sup></b></div>
            <div><span>Photon energy (E)</span><b>E = hν, directly proportional to ν</b></div>
          </div>
          <div class="eq" data-label="Speed of a wave">c = λν</div>
          <div class="eq" data-label="Energy of a photon">E = hν = <span class="frac"><span>hc</span><span>λ</span></span></div>
          <figure data-fig="m4-wavelength-frequency"></figure>
          <p>One wavelength is crest to crest, or trough to trough. <b>Amplitude</b> is the height of the wave. The higher-frequency wave packs more cycles into the same window.</p>
          <div class="note why"><p>c is fixed, so λ and ν move in opposite directions. Squeeze the wavelength and the frequency has to rise, and E = hν rises with it. Short λ, high ν, high energy: that one chain explains the whole spectrum in the next topic.</p></div>
          <div class="note trap"><p>Brighter light means a bigger amplitude, which means more photons. It does not make each photon more energetic. Photon energy depends only on frequency.</p></div>
          <div class="note heads-up"><p>The slide gives λ in cm. The SI unit is the metre; UV-Vis work uses nm (10<sup>−9</sup> m) and XRD uses Å (10<sup>−10</sup> m). The numericals round c to 3.00 × 10<sup>8</sup> m s<sup>−1</sup>.</p></div>
        ` },
        { title: 'Light meets matter', html: `
          <p class="lead">When radiation reaches a sample, six things can happen to it. Each one is the basis of some <b>detection or spectroscopic measurement technique</b>.</p>
          <table class="tbl">
            <thead><tr><th>Process</th><th>What happens</th></tr></thead>
            <tbody>
              <tr><td><b>Absorption</b></td><td>Molecules and atoms take up energy and reach a <b>higher energy state</b></td></tr>
              <tr><td><b>Emission</b></td><td>The substance <b>gives out</b> electromagnetic radiation</td></tr>
              <tr><td><b>Transmission</b></td><td>Incident radiation passes through <b>without measurable attenuation</b></td></tr>
              <tr><td><b>Reflection</b></td><td>Measures the amount of energy <b>reflected</b> by the matter</td></tr>
              <tr><td><b>Scattering</b></td><td>Energy is <b>re-radiated in different directions</b>, not along the path of the radiation</td></tr>
              <tr><td><b>Refraction</b></td><td>EM waves <b>bend</b> as they pass from one transparent medium to another</td></tr>
            </tbody>
          </table>
          <figure data-fig="m4-emr-matter"></figure>
          <div class="vs">
            <div class="side"><h4>Wave nature explains</h4><p><b>Reflection, refraction, diffraction</b></p></div>
            <div class="side"><h4>Particle nature explains</h4><p><b>Absorption and emission</b>, one photon at a time</p></div>
          </div>
          <div class="note trap"><p>Scattering and refraction both change the light's direction. Refraction is a clean bend at the boundary between two transparent media. Scattering throws the energy out in many directions from inside the sample.</p></div>
          <div class="note exam"><p>UV-Vis, the rest of this module, measures absorption by comparing the light going in with the light transmitted. Fluorescence and phosphorescence measure emission. XRD, later in the module, relies on diffraction of X-rays.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Spectroscopy is the interaction of ___ with ___.', back: '<b>Electromagnetic radiant energy</b> with <b>matter</b>.' },
        { front: 'Who introduced the word "spectrum", and when?', back: '<b>Sir Isaac Newton, 1672</b>, to describe the rainbow of colours.' },
        { front: 'Fraunhofer and Kirchhoff: years and contributions?', back: 'Fraunhofer <b>1814</b>: optics and spectroscopy. Kirchhoff <b>1859</b>: showed spectroscopy is useful for <b>chemical analysis</b>.' },
        { front: 'Three ways energy is transferred?', back: '<b>Conduction</b> (direct contact), <b>convection</b> (through a fluid by molecular motion), <b>radiation</b> (rays, waves or particles).' },
        { front: 'Dual nature of radiation: who, when, and what does it say?', back: '<b>de Broglie, 1923</b>. EMR behaves as a <b>wave in space</b> and as a <b>particle</b> (photons) in matter interaction.' },
        { front: 'Which nature of light explains reflection, refraction and diffraction? Which explains absorption and emission?', back: '<b>Wave</b> nature for the first three; <b>particle</b> (photon) nature for absorption and emission.' },
        { front: 'Speed of light in vacuum on the slides?', back: '<b>c = 2.9979 × 10<sup>8</sup> m s<sup>−1</sup></b> (rounded to 3.00 × 10<sup>8</sup> in the numericals).' },
        { front: 'Energy of a photon in terms of frequency?', back: '<b>E = hν</b>: directly proportional to frequency. Photons are discrete packets of energy.' },
        { front: 'Transmission vs scattering?', back: 'Transmission: radiation passes through <b>without measurable attenuation</b>. Scattering: energy is <b>re-radiated in different directions</b>, off the original path.' },
        { front: 'What does a spectrum plot?', back: 'The sample\'s <b>response as a function of wavelength or frequency</b>.' }
      ],
      oneLiners: [
        'Spectroscopy = interaction of electromagnetic radiant energy with matter; used for qualitative and quantitative analysis of inorganic, organic and biological compounds.',
        'Newton coined "spectrum" in 1672; Fraunhofer 1814; Kirchhoff showed its use in chemical analysis in 1859.',
        'Energy transfer: conduction (contact), convection (fluid motion), radiation (rays, waves, particles).',
        'de Broglie (1923): EMR is a wave in space and a particle (photon) in matter interaction.',
        'c = λν, E = hν; c = 2.9979 × 10⁸ m s⁻¹ in vacuum.',
        'Wave nature explains reflection, refraction, diffraction; particle nature explains absorption and emission.',
        'Six interactions: absorption, emission, transmission, reflection, scattering, refraction.'
      ],
      formulas: [
        { name: 'Wave equation', html: `c = λν`, note: 'c = 2.9979 × 10⁸ m s⁻¹ (3.00 × 10⁸ in numericals).' },
        { name: 'Photon energy', html: `E = hν = hc/λ`, note: 'Energy is directly proportional to frequency and inversely proportional to wavelength.' }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: 'm4-emr-regions',
      title: 'EMR regions & energy',
      short: 'EMR regions',
      blurb: 'The electromagnetic spectrum from radio to gamma rays, what each region does to a molecule and which technique uses it, the hν = ΔE rule, two worked numericals, and spectrometers on Mars and the Moon.',
      source: 'Pages 6–11',
      tabs: [
        { title: 'The spectrum', html: `
          <p class="lead">The electromagnetic spectrum runs from <b>radio waves</b>, metres long, down to <b>gamma rays</b>, far smaller than an atom. Head towards gamma and the wavelength shrinks while <b>frequency and energy climb</b>.</p>
          <figure data-fig="m4-em-spectrum-chart"></figure>
          <table class="tbl">
            <thead><tr><th>Region</th><th>Wavelength marker (m)</th><th>Note</th></tr></thead>
            <tbody>
              <tr><td>Radio</td><td>10<sup>3</sup></td><td>longest waves, lowest energy</td></tr>
              <tr><td>Microwave</td><td>10<sup>−2</sup></td><td>where the CMB (cosmic microwave background) sits</td></tr>
              <tr><td>Infrared</td><td>10<sup>−5</sup></td><td>felt as heat</td></tr>
              <tr><td>Visible</td><td>10<sup>−6</sup></td><td>human sight, a thin slice</td></tr>
              <tr><td>Ultraviolet</td><td>10<sup>−8</sup></td><td>beyond violet</td></tr>
              <tr><td>X-ray</td><td>10<sup>−10</sup></td><td>about the size of an atom</td></tr>
              <tr><td>Gamma ray</td><td>10<sup>−12</sup></td><td>shortest waves, highest energy</td></tr>
            </tbody>
          </table>
          <p>The frequency scale under the chart runs from about <b>10<sup>4</sup> Hz</b> at the radio end to <b>10<sup>20</sup> Hz</b> at the gamma end.</p>
          <div data-viz="em-spectrum"></div>
          <p>Drag the marker from radio to gamma. Watch λ shrink as ν and E rise, and check which molecular effect and which technique go with each region.</p>
          <div class="mnemonic"><p>Long to short: <b>Raging Martians Invaded Venus Using X-ray Guns</b> (Radio, Microwave, Infrared, Visible, UV, X-ray, Gamma).</p></div>
          <div class="note heads-up"><p>The chart's ticks are rough markers. Visible light is really 400–700 nm, that is 4–7 × 10<sup>−7</sup> m, a little short of the 10<sup>−6</sup> tick it sits under.</p></div>
        ` },
        { title: 'Effects & techniques', html: `
          <p class="lead">Each region carries a different amount of energy, so it disturbs a different part of a molecule. That is why every region has its <b>own kind of spectroscopy</b>.</p>
          <table class="tbl">
            <thead><tr><th>Radiation</th><th>E (kJ/mol)</th><th>Technique (what changes)</th><th>Time (s)</th></tr></thead>
            <tbody>
              <tr><td>γ-rays, X-rays</td><td><b>10<sup>5</sup>–10<sup>3</sup></b></td><td><b>X-ray diffraction</b> (nuclear transitions)</td><td>10<sup>−18</sup></td></tr>
              <tr><td>Ultraviolet-visible</td><td><b>10<sup>3</sup>–10<sup>1</sup></b></td><td><b>UV-Vis</b> (electronic transitions)</td><td>10<sup>−15</sup>–10<sup>−14</sup></td></tr>
              <tr><td>Infrared</td><td><b>10<sup>1</sup>–10<sup>−1</sup></b></td><td><b>IR</b> (vibrational transitions)</td><td>10<sup>−13</sup></td></tr>
              <tr><td>Microwaves</td><td><b>10<sup>−3</sup></b></td><td><b>Electron spin resonance</b> (ESR, rotational motion)</td><td>10<sup>−4</sup>–10<sup>−8</sup></td></tr>
              <tr><td>Radiowaves</td><td><b>10<sup>−7</sup></b></td><td><b>NMR</b> (nuclear spin transitions)</td><td>10<sup>−1</sup>–10<sup>−9</sup></td></tr>
            </tbody>
          </table>
          <p>Conversion used throughout the module: <b>1 eV = 96.48 kJ/mol</b>.</p>
          <h3>The radio row in detail</h3>
          <div class="kv">
            <div><span>Region / unit</span><b>Radio, MHz</b></div>
            <div><span>Molecular effect</span><b>Nuclear (spin)</b></div>
            <div><span>Wavelength</span><b>&gt; 10<sup>9</sup> Å</b></div>
            <div><span>Frequency</span><b>&lt; 3 × 10<sup>9</sup> Hz</b></div>
            <div><span>Energy</span><b>&lt; 10<sup>−5</sup> eV</b></div>
            <div><span>Spectroscopy application</span><b>Molecular identity and structure</b></div>
          </div>
          <div class="note why"><p>The more energy a photon carries, the deeper into the molecule it reaches. Radio waves only flip nuclear spins. Microwaves turn whole molecules and flip electron spins. IR makes bonds stretch and bend. UV-Vis moves valence electrons. X-rays reach inner-shell electrons, and gamma rays reach the nucleus. The time column follows the same trend: the high-energy events are over fastest.</p></div>
          <div class="note heads-up"><p>Three slips to know. (1) The page 6 table is cut off in the PDF: only the radio row prints, and its effect column stops at "Nucl…". (2) The slide pairs X-ray diffraction with "nuclear transitions". X-rays actually excite inner-shell electrons; nuclear transitions belong to γ-rays, and XRD is diffraction, not absorption. (3) Rotational motion is what microwaves drive (rotational spectroscopy), and ESR also uses microwaves, to flip electron spins; the slide merges the two into one cell. Reproduce the table as given if it is asked.</p></div>
          <details class="more"><summary>The original table from the slides</summary><figure data-fig="m4-regions-table"></figure></details>
        ` },
        { title: 'Spectroscopy family', html: `
          <p class="lead">Light is only one probe. Spectroscopy covers anything you can send into a sample and read back: <b>electromagnetic radiation</b>, <b>particles</b>, and even <b>mechanical waves</b>.</p>
          <figure data-fig="m4-spectroscopy-tree"></figure>
          <div class="vs">
            <div class="side"><h4>Electromagnetic spectrum</h4>
              <div class="chips"><span class="chip">Radio</span><span class="chip">Microwave</span><span class="chip">Infrared</span><span class="chip">UV-Visible</span><span class="chip">AAS</span><span class="chip">X-ray diffraction</span><span class="chip">Gamma ray</span></div>
            </div>
            <div class="side"><h4>Other probes</h4>
              <ul>
                <li><b>Alpha particles</b>, <b>beta particles</b>, <b>protons</b></li>
                <li><b>Neutrons</b>: neutron radiography and neutron spectroscopy; neutron-induced gamma spectroscopy</li>
                <li><b>Acoustic waves</b> and <b>seismic waves</b></li>
              </ul>
            </div>
          </div>
          <div class="note exam"><p>The slide highlights <b>IR, UV-Visible, AAS</b> (atomic absorption spectroscopy) and <b>XRD</b>. Of these, Module 4 studies UV-Vis and XRD in detail.</p></div>
        ` },
        { title: 'The hν = ΔE rule', html: `
          <p class="lead">One rule sits behind every absorption spectrum: a sample takes energy from light only when the <b>photon energy exactly equals the gap</b> between two of its energy states.</p>
          <div class="eq" data-label="Principle">hν = ΔE = E<sub>1</sub> − E<sub>0</sub></div>
          <figure data-fig="m4-abs-em-levels"></figure>
          <ul>
            <li>Electromagnetic energy is transferred to <b>atoms, ions or molecules</b> in the sample, which make a <b>transition to a higher energy state</b> (ground state E<sub>0</sub> to excited state E<sub>1</sub>, the ABS arrow).</li>
            <li>The photon must supply exactly the <b>energy that transition requires</b>.</li>
            <li>Dropping back from E<sub>1</sub> to E<sub>0</sub> gives the same energy out again as light (the EM arrow, emission).</li>
          </ul>
          <h3>Classification</h3>
          <figure data-fig="m4-spectroscopy-classes"></figure>
          <table class="tbl">
            <thead><tr><th></th><th>Atomic</th><th>Molecular</th></tr></thead>
            <tbody>
              <tr><td>Absorption</td><td><b>Atomic absorption</b></td><td><b>UV-Visible, IR</b></td></tr>
              <tr><td>Emission</td><td><b>Flame emission</b></td><td><b>Fluorescence, phosphorescence</b></td></tr>
              <tr><td>Transitions</td><td>Electronic</td><td>Electronic, vibrational and rotational</td></tr>
              <tr><td>Spectrum</td><td><b>Line spectrum</b></td><td><b>Band spectrum</b></td></tr>
            </tbody>
          </table>
          <div class="note why"><p>An atom only has electronic levels, and each gap has one exact value, so you get sharp lines. A molecule has vibrational and rotational sub-levels stacked on every electronic level. That gives hundreds of slightly different gaps, and the lines crowd together into a broad band.</p></div>
        ` },
        { title: 'Numericals', html: `
          <p class="lead">Both problems use one equation: the speed of a wave equals its wavelength times its frequency, <b>c = λν</b>. Rearrange, substitute, then place the answer on the spectrum.</p>
          <div class="worked">
            <div class="given"><p><b>Problem 1.</b> What is the frequency of radiation with λ = 5.00 × 10<sup>−8</sup> m, and which region is it in? Take c = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>.</p></div>
            <div class="solve">
              <div class="eq">ν = <span class="frac"><span>c</span><span>λ</span></span> = <span class="frac"><span>3.00 × 10<sup>8</sup> m s<sup>−1</sup></span><span>5.00 × 10<sup>−8</sup> m</span></span></div>
              <p>5.00 × 10<sup>−8</sup> m is 50 nm, well short of the visible band.</p>
            </div>
            <div class="result"><p>ν = <b>6.00 × 10<sup>15</sup> s<sup>−1</sup></b>, in the <b>ultraviolet</b> (the slide says middle ultraviolet region).</p></div>
          </div>
          <div class="worked">
            <div class="given"><p><b>Problem 2.</b> Radioactive cobalt emits radiation of frequency 2.80 × 10<sup>20</sup> s<sup>−1</sup>. Find the wavelength and the region.</p></div>
            <div class="solve">
              <div class="eq">λ = <span class="frac"><span>c</span><span>ν</span></span> = <span class="frac"><span>3.00 × 10<sup>8</sup> m s<sup>−1</sup></span><span>2.80 × 10<sup>20</sup> s<sup>−1</sup></span></span></div>
            </div>
            <div class="result"><p>λ = <b>1.07 × 10<sup>−12</sup> m</b>, which is <b>gamma rays</b>.</p></div>
          </div>
          <div data-viz="wave-calc"></div>
          <p>Load both presets, then type in your own λ or ν and watch the frequency, energy and region update together.</p>
          <div class="note heads-up"><p>The slide calls 50 nm "middle ultraviolet". On the UV-Vis chart (page 14) far UV already sits near 100 nm, so 50 nm is really past far UV, in the extreme (vacuum) UV. Writing "ultraviolet" keeps you safe either way.</p></div>
          <details class="more"><summary>One step further: the photon energies</summary>
            <p>With h = 6.626 × 10<sup>−34</sup> J s, problem 1 gives E = hν = 3.98 × 10<sup>−18</sup> J, about 24.8 eV per photon. Problem 2 gives E = 1.86 × 10<sup>−13</sup> J, about 1.16 MeV, which is right where cobalt-60 gamma rays sit.</p>
          </details>
          <div class="note exam"><p>What gets marks: the formula, units converted to metres first, the substitution, the answer with units to 3 significant figures, and the region named.</p></div>
        ` },
        { title: 'Spectrometers in space', html: `
          <p class="lead">Exploration rovers <b>search and analyse rocks and soils</b> where no chemist can go, and they do it with <b>several spectrometers</b> on board.</p>
          <div class="vs">
            <div class="side"><h4>Mars mission</h4>
              <ul>
                <li><b>Mini-TES</b>, miniature thermal emission spectrometer: examines <b>rock, soil and atmosphere</b></li>
                <li><b>MB</b>, Mössbauer spectrometer: examines the <b>mineralogy</b> of rocks and soils</li>
                <li><b>APXS</b>, Alpha Particle X-ray Spectrometer: analyses the <b>elements</b> in rocks and soils</li>
              </ul>
            </div>
            <div class="side"><h4>Chandrayaan-3 mission</h4>
              <ul>
                <li>Seismometer, Langmuir probe</li>
                <li>Thermal probe, retroreflector</li>
                <li><b>X-ray spectrometer</b>, <b>laser-based spectrometer</b></li>
                <li><b>Spectro-polarimeter</b></li>
              </ul>
            </div>
          </div>
          <figure data-fig="m4-mars-rover"></figure>
          <figure data-fig="m4-chandrayaan"></figure>
          <div class="note why"><p>Each instrument uses a different probe from the family tree. Mini-TES reads the infrared that warm rock gives off. Mössbauer uses gamma rays absorbed by iron nuclei, which respond to the mineral the iron sits in. APXS fires alpha particles at the rock and reads the X-rays that come back, and those X-rays are characteristic of each element.</p></div>
          <div class="note trap"><p>Not everything on the Chandrayaan-3 list is a spectrometer. The seismometer, Langmuir probe, thermal probe and retroreflector measure other things. The spectroscopic ones are the X-ray spectrometer, the laser-based spectrometer and the spectro-polarimeter.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'UV-visible radiation: energy range and what it changes?', back: '<b>10<sup>3</sup>–10<sup>1</sup> kJ/mol</b>; causes <b>electronic transitions</b> (UV-Vis spectroscopy).' },
        { front: 'Infrared: energy and effect?', back: '<b>10<sup>1</sup>–10<sup>−1</sup> kJ/mol</b>; <b>vibrational transitions</b> (IR spectroscopy).' },
        { front: 'Microwaves and radiowaves: which techniques, per the slide table?', back: 'Microwaves (10<sup>−3</sup> kJ/mol): <b>ESR, rotational motion</b>. Radiowaves (10<sup>−7</sup> kJ/mol): <b>NMR, nuclear spin transitions</b>.' },
        { front: '1 eV in kJ/mol?', back: '<b>96.48 kJ/mol</b>' },
        { front: 'The radio row of the regions table: λ, ν, E and application?', back: 'λ <b>&gt; 10<sup>9</sup> Å</b>, ν <b>&lt; 3 × 10<sup>9</sup> Hz</b>, E <b>&lt; 10<sup>−5</sup> eV</b>; nuclear effect; used for <b>molecular identity and structure</b>.' },
        { front: 'State the principle of spectroscopy as an equation.', back: '<b>hν = ΔE = E<sub>1</sub> − E<sub>0</sub></b>: the photon energy must equal the gap between the two states.' },
        { front: 'Atomic vs molecular spectra: which gives lines and which gives bands, and why?', back: 'Atomic: <b>line spectrum</b> (electronic transitions only). Molecular: <b>band spectrum</b> (electronic + vibrational + rotational sub-levels).' },
        { front: 'Examples of atomic and molecular absorption and emission spectroscopy?', back: 'Atomic: <b>atomic absorption</b>, <b>flame emission</b>. Molecular: <b>UV-Vis, IR</b> (absorption), <b>fluorescence, phosphorescence</b> (emission).' },
        { front: 'ν of radiation with λ = 5.00 × 10<sup>−8</sup> m? Region?', back: '<b>6.00 × 10<sup>15</sup> s<sup>−1</sup></b>, ultraviolet (slide: middle UV).' },
        { front: 'λ of radiation from radioactive cobalt, ν = 2.80 × 10<sup>20</sup> s<sup>−1</sup>? Region?', back: '<b>1.07 × 10<sup>−12</sup> m</b>, <b>gamma rays</b>.' },
        { front: 'Mini-TES, MB and APXS on the Mars rovers: what does each examine?', back: 'Mini-TES: <b>rock, soil and atmosphere</b>. MB (Mössbauer): <b>mineralogy</b>. APXS (Alpha Particle X-ray Spectrometer): <b>elements</b> in rocks and soils.' },
        { front: 'Non-EM probes in the spectroscopy family tree?', back: '<b>Alpha particles, beta particles, protons, neutrons</b> (radiography, neutron spectroscopy, neutron-induced gamma spectroscopy), <b>acoustic and seismic waves</b>.' }
      ],
      oneLiners: [
        'Radio → microwave → IR → visible → UV → X-ray → gamma: λ falls (10³ → 10⁻¹² m) while ν and E rise.',
        'UV-Vis 10³–10¹ kJ/mol, electronic; IR 10¹–10⁻¹, vibrational; microwave 10⁻³, ESR/rotation; radio 10⁻⁷, NMR nuclear spin.',
        'γ/X-rays 10⁵–10³ kJ/mol, X-ray diffraction, time scale 10⁻¹⁸ s.',
        '1 eV = 96.48 kJ/mol.',
        'Principle: hν = ΔE = E₁ − E₀.',
        'Atomic spectra are line spectra; molecular spectra are band spectra.',
        'λ = 5.00 × 10⁻⁸ m → ν = 6.00 × 10¹⁵ s⁻¹ (UV); ν = 2.80 × 10²⁰ s⁻¹ → λ = 1.07 × 10⁻¹² m (gamma).',
        'Mars rovers: Mini-TES, Mössbauer (MB), APXS. Chandrayaan-3: X-ray spectrometer, laser-based spectrometer, spectro-polarimeter.'
      ],
      formulas: [
        { name: 'Principle of spectroscopy', html: `hν = ΔE = E<sub>1</sub> − E<sub>0</sub>`, note: 'Absorption happens only when the photon energy matches the gap.' },
        { name: 'Frequency or wavelength from c', html: `ν = c/λ  ·  λ = c/ν`, note: 'Use c = 3.00 × 10⁸ m s⁻¹ and λ in metres.' },
        { name: 'Energy unit conversion', html: `1 eV = 96.48 kJ/mol`, note: 'Used in the regions table.' }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: 'm4-uv-vis',
      title: 'UV-Vis: absorption & transitions',
      short: 'UV-Vis absorption',
      blurb: 'The 200–700 nm window, how molecules absorb and emit, the four electronic transitions and how strong their bands are, chromophores and auxochromes, the four shifts, and why coloured things look the colour they do.',
      source: 'Pages 12–19',
      tabs: [
        { title: 'The UV-Vis window', html: `
          <p class="lead">UV-Vis spectroscopy follows the absorption of light from <b>200 nm to 700 nm</b> by molecules or atoms. Light in this range has the right energy to <b>excite valence electrons</b>, so UV-Vis is all about <b>electronic excitation</b>.</p>
          <p>This part of the module (principle, instrumentation and applications of UV-Vis) runs in this order:</p>
          <div class="chips"><span class="chip">Absorption region</span><span class="chip">Absorption and emission</span><span class="chip">Electronic transitions</span><span class="chip">Terms and shifts</span><span class="chip">Colour–absorption</span><span class="chip">Absorption law</span><span class="chip">Instrumentation</span><span class="chip">Applications</span><span class="chip">Numericals</span><span class="chip">Summary</span></div>
          <figure data-fig="m4-uv-vis-window"></figure>
          <p>Reading the chart: far UV near <b>100 nm</b>, medium UV around <b>250 nm</b>, near UV up to <b>400 nm</b>, then visible from violet to red up to <b>700 nm</b>, and infrared beyond. Everything to the left has higher energy, higher frequency and shorter wavelength.</p>
          <div class="eq">E = hν</div>
          <div class="eq">ν = E/h</div>
          <div class="eq" data-label="since c = λν">λ = hc/E</div>
          <table class="tbl">
            <thead><tr><th>Band</th><th>Also called</th><th>Ozone (O<sub>3</sub>) layer</th></tr></thead>
            <tbody>
              <tr><td><b>Near UV / UVA</b></td><td>long-wave UV, <b>black light</b></td><td><b>not absorbed</b></td></tr>
              <tr><td><b>Medium UV / UVB</b></td><td>medium-wave UV</td><td><b>mostly absorbed</b></td></tr>
              <tr><td><b>Far UV / UVC</b></td><td>short-wave UV, ionizing radiation</td><td><b>absorbed</b></td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Shorter UV means more energy per photon, and ozone absorbs those photons more readily. So UVC is stopped, UVB is mostly stopped, and UVA gets through to the ground.</p></div>
          <h3>What the absorption looks like</h3>
          <figure data-fig="m4-atom-vs-molecule"></figure>
          <ul>
            <li><b>An atom</b>: one electron jump (for example 2p → 3s) gives a single <b>sharp line</b>.</li>
            <li><b>A diatomic or other small molecule</b>: the jump starts and ends on many vibrational levels, so the band is a <b>comb of fine peaks</b>.</li>
            <li><b>A large molecule</b>: S<sub>0</sub> and S<sub>1</sub> hold so many sub-levels that the peaks merge into one <b>broad, smooth band</b>.</li>
          </ul>
          <p>The slide gives the energy of these absorptions as <b>E = 35 to 71 kcal/mol</b>, which matches light of roughly 800–400 nm.</p>
          <div class="note heads-up"><p>The slides do not give the UV band limits. The usual ones are UVA 315–400 nm, UVB 280–315 nm and UVC 100–280 nm. Only the shortest UVC photons are energetic enough to ionize most molecules, so "ionizing" is a loose label.</p></div>
        ` },
        { title: 'Absorption & emission', html: `
          <p class="lead">Absorption and emission are the same jump between energy levels, run in opposite directions. The incoming photon must <b>equal the energy difference</b> between the two states.</p>
          <div class="eq" data-label="Condition">hν = ΔS = S<sub>1</sub> − S<sub>0</sub></div>
          <ul>
            <li>Absorbing the energy lets the molecule make the transition to an <b>excited state</b>.</li>
            <li>The energy of molecular orbitals is <b>specific to each group or chemical function</b>.</li>
            <li>So the <b>absorption wavelength correlates with the type of chemical bonds</b>. That is how UV-Vis recognises groups.</li>
          </ul>
          <figure data-fig="m4-jablonski"></figure>
          <ol class="steps">
            <li><b>Absorption</b> lifts the molecule from the fundamental singlet state S<sub>0</sub> to a vibrational level of the excited singlet state S<sub>1</sub>.</li>
            <li><b>Vibrational relaxation</b> drops it to the bottom of S<sub>1</sub>, losing a little energy as heat (green wavy arrows).</li>
            <li><b>Fluorescence</b>: it falls straight back from S<sub>1</sub> to S<sub>0</sub>, giving out light.</li>
            <li>Or <b>intersystem conversion</b> carries it across to the <b>triplet state T<sub>1</sub></b>.</li>
            <li><b>Phosphorescence</b>: it falls from T<sub>1</sub> to S<sub>0</sub> and gives out light, much more slowly.</li>
          </ol>
          <div class="note why"><p>Emitted light always has less energy (longer λ) than the light absorbed, because some energy is lost as heat during vibrational relaxation. Phosphorescence is slow because the trip from T<sub>1</sub> back to S<sub>0</sub> needs an electron to flip its spin.</p></div>
          <figure data-fig="m4-emission-levels"></figure>
          <p>The second diagram shows emission as colour. An electron lifted high falls back to level 2: <b>3 → 2 gives red</b>, 4 → 2 green, 5 → 2 blue and <b>6 → 2 violet</b>. The bigger the drop, the more energetic the photon and the bluer the light.</p>
          <div class="note heads-up"><p>The diagram says "intersystem conversion". The standard term is intersystem crossing (S<sub>1</sub> → T<sub>1</sub>); internal conversion is a different, same-spin process.</p></div>
        ` },
        { title: 'Four transitions', html: `
          <p class="lead">After excitation by EMR, <b>valence electrons</b> jump between σ, π and lone-pair (n) orbitals. <b>Four different transitions</b> are possible.</p>
          <figure data-fig="m4-mo-ladder"></figure>
          <table class="tbl">
            <thead><tr><th>Transition</th><th>Occurs in</th><th>Range</th></tr></thead>
            <tbody>
              <tr><td><b>σ → σ*</b></td><td>Only simple (single) bonds, e.g. <b>C–H or C–C</b>. Needs high energy</td><td><b>100–150 nm</b></td></tr>
              <tr><td><b>n → σ*</b></td><td>Atoms with <b>lone pairs</b> (N, O, S…). Needs a high quantity of energy</td><td><b>150–250 nm</b></td></tr>
              <tr><td><b>π → π*</b></td><td>Only <b>unsaturated functions</b> (aromatics)</td><td><b>200–700 nm</b>, UV and visible</td></tr>
              <tr><td><b>n → π*</b></td><td>Atoms with <b>lone pairs and unsaturated functions</b></td><td><b>250–500 nm</b></td></tr>
            </tbody>
          </table>
          <div class="eq" data-label="Energy needed">σ → σ* &gt; n → σ* &gt; π → π* &gt; n → π*</div>
          <div data-viz="transitions"></div>
          <p>Click each transition. Arrow length is energy, so σ → σ* stretches furthest and n → π* is the shortest hop. The strip underneath sorts bands by ε, which is the next tab.</p>
          <div class="note why"><p>σ bonding electrons are held tightest (lowest on the ladder) and σ* is the highest empty level, so σ → σ* is the biggest gap and the shortest wavelength. Lone pairs are the highest filled level and π* is the lowest empty one, so n → π* is the smallest gap and the longest wavelength. Bigger gap, shorter λ, every time.</p></div>
          <div class="note exam"><p>A compound with only σ bonds absorbs below 200 nm and shows nothing in an ordinary UV-Vis scan. That is the basis of the "conjugated or not" application later on.</p></div>
          <div class="note heads-up"><p>The slide numbers n → π* as transition 3 and π → π* as transition 4, but in energy order π → π* comes first. Two textbook points: n → π* is really a weak, symmetry-forbidden band (low ε) even though the slide calls all four "allowed", and an isolated C=C absorbs below 200 nm, so the 200–700 nm range describes conjugated and aromatic systems. Use the slide ranges in the exam.</p></div>
        ` },
        { title: 'Band intensity', html: `
          <p class="lead">How tall a band is depends on how <b>likely</b> the transition is. That probability is measured by <b>ε</b>, the molar absorption coefficient, and it sorts bands into four classes.</p>
          <table class="tbl">
            <thead><tr><th>Class</th><th>ε (L mol<sup>−1</sup> cm<sup>−1</sup>)</th></tr></thead>
            <tbody>
              <tr><td>Forbidden transition</td><td><b>ε ≤ 10</b></td></tr>
              <tr><td>Partly allowed transition</td><td><b>10 ≤ ε ≤ 1000</b></td></tr>
              <tr><td>Allowed transition</td><td><b>1000 ≤ ε ≤ 100000</b></td></tr>
              <tr><td>Highly allowed transition</td><td><b>ε ≥ 100000</b></td></tr>
            </tbody>
          </table>
          <ul>
            <li>Absorption band intensity is linked to the <b>electronic transition probability</b>.</li>
            <li>The molar absorption coefficient is <b>valid for one wavelength</b> only, so always quote ε with its λ.</li>
          </ul>
          <h3>The ε values in this module, sorted</h3>
          <table class="tbl">
            <thead><tr><th>Band</th><th>λ<sub>max</sub></th><th>ε</th><th>Class</th></tr></thead>
            <tbody>
              <tr><td>Keto form, isolated C=O</td><td>275 nm</td><td>20</td><td>partly allowed</td></tr>
              <tr><td>Anilinium ion (aniline in acid)</td><td>265 nm</td><td>160</td><td>partly allowed</td></tr>
              <tr><td>Aniline</td><td>280 nm</td><td>1430</td><td>allowed</td></tr>
              <tr><td>Enol form, conjugated C=C</td><td>245 nm</td><td>1800</td><td>allowed</td></tr>
              <tr><td>Pyridine</td><td>257 nm</td><td>2750</td><td>allowed</td></tr>
              <tr><td>2-methylpyridine</td><td>260 nm</td><td>3560</td><td>allowed</td></tr>
              <tr><td>Beer–Lambert problem sample</td><td>275 nm</td><td>8400</td><td>allowed</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>ε is the absorbance a 1 mol/L solution would give in a 1 cm cell. A large ε means the molecule catches photons of that wavelength very efficiently. A tiny ε means the jump rarely happens, even though the energy matches.</p></div>
          <div class="note trap"><p>ε belongs to the compound at one wavelength. Changing concentration or path length changes A, never ε.</p></div>
        ` },
        { title: 'Chromophores & auxochromes', html: `
          <p class="lead">A <b>chromophore</b> is the part of a molecule that absorbs. An <b>auxochrome</b> is a helper group that changes how it absorbs. Put the two together and you have a <b>chromogen</b>.</p>
          <table class="tbl">
            <thead><tr><th>Term</th><th>What it is</th><th>Examples</th><th>Greek</th></tr></thead>
            <tbody>
              <tr><td><b>Chromophore</b></td><td>Any <b>isolated, covalently unsaturated group</b> with a characteristic absorption in the UV or visible region</td><td>Organic molecules with <b>&gt;C=C&lt;, &gt;C=O, –N=N–, –NO<sub>2</sub></b></td><td>chroma = colour, phoros = bearer</td></tr>
              <tr><td><b>Auxochrome</b></td><td>A <b>group of atoms attached to a chromophore</b> that modifies its ability to absorb light</td><td><b>–COOH, –OH, –SO<sub>3</sub>H, –NR<sub>2</sub>, –NH<sub>2</sub></b></td><td>auxo = increase, chrome = colour</td></tr>
              <tr><td><b>Chromogen</b></td><td>The <b>chromophore and auxochrome together</b></td><td>The dye below</td><td></td></tr>
            </tbody>
          </table>
          <figure data-fig="m4-dye-chromophore"></figure>
          <div class="note why"><p>The common auxochromes (–OH, –NH<sub>2</sub>, –NR<sub>2</sub>) carry lone pairs. On their own they do not absorb in the 200–700 nm window, but once attached to a chromophore those lone pairs join its π system. The electrons spread over a bigger area, the energy gap shrinks, and the band moves to a longer wavelength and usually grows. Those are exactly the red shift and hyperchromic shift in the next tab.</p></div>
          <div class="mnemonic"><p>Chromo-phore is the colour bearer: it carries the colour. Auxo-chrome only boosts it. Chromo-gen is the whole coloured unit.</p></div>
          <div class="note exam"><p>Page 24 asks you to label the groups in a structure as chromophores or auxochromes. The worked answer is in the practice tab of "UV-Vis instruments &amp; uses".</p></div>
        ` },
        { title: 'The four shifts', html: `
          <p class="lead">Change a molecule or its solvent and its absorption band moves. It can slide sideways to a new <b>wavelength</b>, or grow or shrink to a new <b>intensity</b>, and each direction has its own name.</p>
          <figure data-fig="m4-shift-diagram"></figure>
          <table class="tbl">
            <thead><tr><th>Shift</th><th>What changes</th><th>Caused by</th></tr></thead>
            <tbody>
              <tr><td><b>Bathochromic</b> (red shift)</td><td>Absorption maximum moves to <b>longer wavelength</b></td><td><b>Auxochrome</b> presence or <b>solvent change</b></td></tr>
              <tr><td><b>Hypsochromic</b> (blue shift)</td><td>Absorption maximum moves to <b>shorter wavelength</b></td><td><b>Removal of conjugation</b> and solvent polarity</td></tr>
              <tr><td><b>Hyperchromic</b></td><td>Intensity of the absorption maximum <b>increases</b></td><td>Usually an <b>auxochrome</b></td></tr>
              <tr><td><b>Hypochromic</b></td><td>Intensity of the absorption maximum <b>decreases</b></td><td>A group that <b>distorts the molecule's geometry</b></td></tr>
            </tbody>
          </table>
          <figure data-fig="m4-shift-examples"></figure>
          <ul>
            <li><b>Aniline → anilinium ion</b> (acidic medium): λ<sub>max</sub> 280 → 265 nm and ε 1430 → 160. A blue shift and a hypochromic shift together. H<sup>+</sup> ties up the N lone pair, so it can no longer conjugate with the ring.</li>
            <li><b>Pyridine → 2-methylpyridine</b>: λ<sub>max</sub> 257 → 260 nm and ε 2750 → <b>3560</b>. The slide's hyperchromic example, with a slight red shift too.</li>
            <li>Also listed under hyperchromic on the slide: the <b>B-band shifts from 275 mμ to 262 mμ</b>.</li>
          </ul>
          <div class="note why"><p>Polar solvents hydrogen-bond to lone pairs and lower their energy, so the n → π* gap widens and that band moves blue. A group that twists the molecule out of plane breaks the overlap between neighbouring π orbitals, so the transition becomes less likely and ε drops.</p></div>
          <div class="mnemonic"><p><b>BR and HB</b>: Batho is Red, Hypso is Blue. Hyper means more intensity and hypo means less, as in hyperactive and hypothermia.</p></div>
          <div class="note heads-up"><p>mμ (millimicron) is an old name for nm. The B-band line (275 → 262 nm) describes a move to shorter wavelength, which is a hypsochromic change in position, even though the slide lists it under hyperchromic. Use pyridine → 2-methylpyridine (ε 2750 → 3560) as your hyperchromic example.</p></div>
        ` },
        { title: 'Colour & absorption', html: `
          <p class="lead">A coloured solution <b>absorbs one band of visible light</b> and you see what is left: the <b>complementary colour</b>, the one opposite it on the colour wheel (chromatic circle).</p>
          <figure data-fig="m4-colour-wheel"></figure>
          <table class="tbl">
            <thead><tr><th>Wheel segment</th><th>Approx. range</th><th>Complementary (opposite)</th></tr></thead>
            <tbody>
              <tr><td>Violet</td><td>400–430 nm</td><td>Yellow</td></tr>
              <tr><td>Blue</td><td>430–490 nm</td><td>Orange</td></tr>
              <tr><td>Green</td><td>490–560 nm</td><td>Red</td></tr>
              <tr><td>Yellow</td><td>560–580 nm</td><td>Violet</td></tr>
              <tr><td>Orange</td><td>580–620 nm</td><td>Blue</td></tr>
              <tr><td>Red</td><td>620–800 nm</td><td>Green</td></tr>
            </tbody>
          </table>
          <table class="tbl">
            <thead><tr><th>Substance</th><th>Absorbs</th><th>Looks</th></tr></thead>
            <tbody>
              <tr><td>Methylene blue</td><td><b>600–700 nm</b>, orange-red</td><td><b>Blue</b></td></tr>
              <tr><td>Congo red</td><td>Maximum at <b>500 nm</b>, green</td><td><b>Red</b></td></tr>
              <tr><td>Chlorophyll</td><td><b>Red and blue</b> light</td><td><b>Green</b></td></tr>
            </tbody>
          </table>
          <figure data-fig="m4-dye-absorbance"></figure>
          <figure data-fig="m4-chlorophyll-spectrum"></figure>
          <div data-viz="color-wheel"></div>
          <p>Pick a band to absorb, or load methylene blue, Congo red or chlorophyll, and see which colour your eye ends up with.</p>
          <div class="note why"><p>Your eye receives white light minus the absorbed band. Take orange-red out of white light and what reaches you looks blue. Both dyes also have long conjugated structures (below), and that extended π system is what brings the π → π* gap down into the visible range.</p></div>
          <figure data-fig="m4-dye-structures"></figure>
          <div class="note trap"><p>The colour you see is not the colour absorbed. A blue solution absorbs orange-red, so you measure it at around 600–700 nm, not in the blue.</p></div>
          <div class="note heads-up"><p>The methylene blue structure on the slide has CH<sub>2</sub> at the bottom of the middle ring. Real methylene blue has a sulfur atom there: it is a phenothiazinium dye, with N and S in the central ring.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'UV-Vis spectroscopy covers which wavelength range, and what does the light do?', back: '<b>200–700 nm</b>; it <b>excites valence electrons</b> (electronic excitation).' },
        { front: 'UVA, UVB, UVC: other names and ozone behaviour?', back: 'UVA (near, long-wave, black light): <b>not absorbed</b> by O<sub>3</sub>. UVB (medium-wave): <b>mostly absorbed</b>. UVC (far, short-wave, ionizing): <b>absorbed</b>.' },
        { front: 'Condition for absorption between S<sub>0</sub> and S<sub>1</sub>?', back: '<b>hν = ΔS = S<sub>1</sub> − S<sub>0</sub></b>' },
        { front: 'Fluorescence vs phosphorescence?', back: 'Fluorescence: <b>S<sub>1</sub> → S<sub>0</sub></b>, fast. Phosphorescence: <b>T<sub>1</sub> → S<sub>0</sub></b> after intersystem crossing, slow.' },
        { front: 'σ → σ*: where and what range?', back: 'Only simple bonds (<b>C–H, C–C</b>); high energy, <b>100–150 nm</b>.' },
        { front: 'n → σ*: where and what range?', back: 'Atoms with <b>lone pairs</b> (N, O, S); <b>150–250 nm</b>.' },
        { front: 'π → π* and n → π*: ranges?', back: 'π → π* (unsaturated/aromatics): <b>200–700 nm</b>. n → π* (lone pair + unsaturation): <b>250–500 nm</b>.' },
        { front: 'Energy order of the four transitions?', back: '<b>σ → σ* &gt; n → σ* &gt; π → π* &gt; n → π*</b>' },
        { front: 'The four ε classes?', back: 'Forbidden <b>ε ≤ 10</b>; partly allowed <b>10–1000</b>; allowed <b>1000–100000</b>; highly allowed <b>≥ 100000</b>.' },
        { front: 'Chromophore vs auxochrome, with examples.', back: 'Chromophore: isolated unsaturated group that absorbs (<b>&gt;C=C&lt;, &gt;C=O, –N=N–, –NO<sub>2</sub></b>). Auxochrome: attached group that modifies absorption (<b>–COOH, –OH, –SO<sub>3</sub>H, –NR<sub>2</sub>, –NH<sub>2</sub></b>).' },
        { front: 'Bathochromic, hypsochromic, hyperchromic, hypochromic?', back: '<b>Red shift</b> (longer λ), <b>blue shift</b> (shorter λ), <b>intensity up</b>, <b>intensity down</b>.' },
        { front: 'Why does methylene blue look blue?', back: 'It absorbs <b>600–700 nm (orange-red)</b>; we see the complementary colour, <b>blue</b>.' }
      ],
      oneLiners: [
        'UV-Vis: 200–700 nm, electronic excitation of valence electrons.',
        'hν = ΔS = S₁ − S₀; absorption wavelength correlates with the type of chemical bond.',
        'σ→σ* 100–150 nm; n→σ* 150–250 nm; π→π* 200–700 nm; n→π* 250–500 nm.',
        'Energy order: σ→σ* > n→σ* > π→π* > n→π*.',
        'ε bands: forbidden ≤ 10, partly allowed 10–1000, allowed 1000–100000, highly allowed ≥ 100000; ε is valid for one wavelength.',
        'Chromophore (chroma = colour, phoros = bearer) + auxochrome (auxo = increase) = chromogen.',
        'Bathochromic = red shift (longer λ); hypsochromic = blue shift (shorter λ); hyperchromic = intensity up; hypochromic = intensity down.',
        'A solution shows the complementary colour of what it absorbs: methylene blue (absorbs 600–700 nm) looks blue, Congo red (500 nm) looks red, chlorophyll (red + blue) looks green.'
      ],
      formulas: [
        { name: 'Absorption condition', html: `hν = ΔS = S<sub>1</sub> − S<sub>0</sub>`, note: 'Photon energy equals the gap between ground and excited states.' },
        { name: 'Photon relations', html: `E = hν  ·  ν = E/h  ·  λ = hc/E`, note: 'From c = λν.' }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: 'm4-beer-lambert',
      title: 'Beer–Lambert law',
      short: 'Beer–Lambert law',
      blurb: 'The absorption law behind every UV-Vis concentration measurement: what A = εLC says, what each symbol means and its unit, and the worked concentration problem from the slides.',
      source: 'Pages 20, 24',
      tabs: [
        { title: 'What the law says', html: `
          <p class="lead">At a wavelength maximum, <b>absorption is proportional to the concentration</b> of absorbing molecules and to the <b>path length</b> of the light through the sample. That is the Beer–Lambert law.</p>
          <div class="eq" data-label="Beer–Lambert law">A = εLC</div>
          <ul>
            <li>Also called the <b>Beer–Lambert–Bouguer law</b>.</li>
            <li>It combines discoveries by <b>Bouguer, Lambert and Beer</b> made between <b>1729 and 1852</b>.</li>
            <li>It applies to <b>all forms of electromagnetic radiation</b>, not just visible light.</li>
          </ul>
          <figure data-fig="m4-beer-lambert-setup"></figure>
          <div data-viz="beer-lambert"></div>
          <p>Slide c or L and watch A climb in a straight line while the beam fades through the cuvette. Then try the "Solve for c" preset, which is the page 24 problem.</p>
          <div class="note why"><p>Double the concentration and the beam meets twice as many molecules on its way through. Double the path length and it meets twice as many again. Either way the absorbance doubles, which is why A depends on the product L × C.</p></div>
          <div class="note heads-up"><p>The slide spells the first name "Bouger"; it is Bouguer. The usual dates are Bouguer 1729, Lambert 1760 and Beer 1852, which is where the 1729–1852 range comes from.</p></div>
        ` },
        { title: 'Symbols & units', html: `
          <p class="lead">Five symbols, each with a fixed unit. Get these right and every Beer–Lambert problem becomes one line of algebra.</p>
          <div class="kv">
            <div><span>A</span><b>absorbance of the sample, log<sub>10</sub>(I<sub>0</sub>/I), no unit</b></div>
            <div><span>I<sub>0</sub></span><b>intensity of radiation entering the sample</b></div>
            <div><span>I</span><b>intensity of radiation emerging from the sample</b></div>
            <div><span>L</span><b>length of the light path through the sample, in cm</b></div>
            <div><span>C</span><b>concentration of the sample, in mol/L</b></div>
            <div><span>ε</span><b>molar absorptivity, L mol<sup>−1</sup> cm<sup>−1</sup></b></div>
          </div>
          <div class="eq" data-label="Absorbance">A = log<sub>10</sub> <span class="frac"><span>I<sub>0</sub></span><span>I</span></span></div>
          <div class="note why"><p>Each thin slice of solution absorbs the same fraction of the light that reaches it, so the intensity falls off exponentially through the cell. Taking the log turns that curve into a straight line in L and C. Measuring at λ<sub>max</sub> gives the biggest absorbance for a given concentration, and the top of a peak is flat, so a small error in the wavelength setting barely changes the reading.</p></div>
          <div class="note trap"><p>A has no unit: (L mol<sup>−1</sup> cm<sup>−1</sup>) × (cm) × (mol L<sup>−1</sup>) cancels out. M<sup>−1</sup> cm<sup>−1</sup> is the same unit as L mol<sup>−1</sup> cm<sup>−1</sup>. And ε holds for one wavelength only.</p></div>
          <details class="more"><summary>Transmittance, if it is asked</summary>
            <p>Transmittance is T = I/I<sub>0</sub>, and %T = 100 × T. Since A = log<sub>10</sub>(I<sub>0</sub>/I), A = −log<sub>10</sub> T. So A = 1 means 10% of the light gets through, and A = 2 means 1%.</p>
          </details>
        ` },
        { title: 'Solving for concentration', html: `
          <p class="lead">The page 24 problem is the standard exam pattern: <b>rearrange A = εLc for c</b>, substitute, and give the answer in mol/L.</p>
          <div class="worked">
            <div class="given"><p>A sample has its absorption maximum at <b>275 nm</b> (the slide words it as "a maximum absorbance of 275 nm") and molar absorptivity <b>ε = 8400 M<sup>−1</sup> cm<sup>−1</sup></b>. The spectrophotometer reads <b>A = 0.70</b> in a cuvette <b>1 cm</b> wide. Find the concentration.</p></div>
            <div class="solve">
              <div class="eq">c = <span class="frac"><span>A</span><span>εL</span></span></div>
              <div class="eq">c = <span class="frac"><span>0.70</span><span>(8400 M<sup>−1</sup> cm<sup>−1</sup>)(1 cm)</span></span></div>
            </div>
            <div class="result"><p>c = <b>8.33 × 10<sup>−5</sup> mol/L = 8.33 × 10<sup>−5</sup> M</b></p></div>
          </div>
          <ul>
            <li>The 275 nm is not used in the arithmetic. It tells you <b>where to set the wavelength</b>, because ε is quoted for that wavelength.</li>
            <li>ε = 8400 puts this band in the <b>allowed</b> class (1000–100000).</li>
          </ul>
          <h3>Quick checks you can do in your head</h3>
          <ul>
            <li>Same solution in a 2 cm cell: A doubles to <b>1.40</b>.</li>
            <li>Dilute it to half the concentration: A halves to <b>0.35</b>.</li>
          </ul>
          <div class="note exam"><p>Write the law, rearrange for the unknown, substitute with units, and box the answer in mol/L (M). This is application 1 of UV-Vis, quantitative analysis, in its simplest form.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'State the Beer–Lambert law as an equation.', back: '<b>A = εLC</b>' },
        { front: 'What does the law say, in words?', back: 'At a wavelength maximum, absorption is <b>proportional to concentration</b> of absorbing molecules and to <b>path length</b>.' },
        { front: 'Absorbance in terms of intensities?', back: '<b>A = log<sub>10</sub>(I<sub>0</sub>/I)</b>: I<sub>0</sub> entering, I emerging.' },
        { front: 'Units of L, C and ε?', back: 'L in <b>cm</b>; C in <b>mol/L</b>; ε in <b>L mol<sup>−1</sup> cm<sup>−1</sup></b>.' },
        { front: 'Other name and the people/years behind it?', back: '<b>Beer–Lambert–Bouguer law</b>; Bouguer, Lambert and Beer, <b>1729–1852</b>.' },
        { front: 'Does the law only work for visible light?', back: 'No: it applies to <b>all forms of electromagnetic radiation</b>.' },
        { front: 'A = 0.70, ε = 8400 M<sup>−1</sup> cm<sup>−1</sup>, L = 1 cm. c = ?', back: '<b>8.33 × 10<sup>−5</sup> M</b>' }
      ],
      oneLiners: [
        'A = εLC (Beer–Lambert, also Beer–Lambert–Bouguer; Bouguer, Lambert, Beer, 1729–1852).',
        'A = log₁₀(I₀/I): I₀ in, I out; A has no unit.',
        'L in cm, C in mol/L, ε in L mol⁻¹ cm⁻¹.',
        'Applies to all forms of EMR, visible light being just one of them.',
        'c = A/εL: A = 0.70, ε = 8400, L = 1 cm gives 8.33 × 10⁻⁵ M.'
      ],
      formulas: [
        { name: 'Beer–Lambert law', html: `A = εLC`, note: 'L in cm, C in mol/L, ε in L mol⁻¹ cm⁻¹; A is unitless.' },
        { name: 'Absorbance from intensities', html: `A = log<sub>10</sub>(I<sub>0</sub>/I)`, note: 'I₀ = entering, I = emerging.' },
        { name: 'Concentration', html: `c = A/(εL)`, note: 'Slide numerical: 0.70/(8400 × 1) = 8.33 × 10⁻⁵ M.' },
        { name: 'Transmittance', html: `T = I/I<sub>0</sub>  ·  A = −log<sub>10</sub> T`, note: 'Standard relation; %T = 100T.' }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: 'm4-uv-vis-instrument',
      title: 'UV-Vis instruments & uses',
      short: 'UV-Vis instruments',
      blurb: 'How single-beam and double-beam spectrophotometers are built, the five things UV-Vis is used for, and the two practice problems on groups and transitions.',
      source: 'Pages 21–24',
      tabs: [
        { title: 'Single-beam', html: `
          <p class="lead">A spectrophotometer picks one wavelength, sends it through the sample and measures how much comes out. <b>Arnold O. Beckman</b> created spectrophotometry in <b>1940</b>.</p>
          <p>A <b>single-beam</b> spectrophotometer is made up of:</p>
          <ol class="steps">
            <li><b>A polychromatic source</b> that gives out many wavelengths.</li>
            <li><b>A wavelength selector</b>, and eventually a <b>source selector</b>, to pick one wavelength (and the right lamp).</li>
            <li><b>A sample compartment</b> holding the cuvette.</li>
            <li><b>A detector</b> that measures the light coming through.</li>
            <li><b>A screen and/or a computer</b> to show the result.</li>
          </ol>
          <figure data-fig="m4-single-beam"></figure>
          <figure data-fig="m4-beckman"></figure>
          <p>On a real benchtop instrument you meet these parts as controls:</p>
          <div class="chips"><span class="chip">Sample compartment cover</span><span class="chip">Cuvette holder</span><span class="chip">Analysed cuvette</span><span class="chip">Set to zero command (T = 100%)</span><span class="chip">Wavelength adjustment</span><span class="chip">Output display</span><span class="chip">Display mode</span><span class="chip">Source lighting</span><span class="chip">ON/OFF button</span></div>
          <figure data-fig="m4-benchtop-parts"></figure>
          <figure data-fig="m4-uv-vis-photo"></figure>
          <div class="note why"><p>"Set to zero (T = 100%)" is done with a blank, a cuvette of pure solvent. Calling that 100% transmittance means every later reading shows only what the dissolved sample absorbs. The weak point of a single beam is that the blank and the sample are read at different moments, so any drift in the lamp between the two readings shows up as error.</p></div>
          <div class="note heads-up"><p>Beckman's DU instrument of the early 1940s was the first commercial UV-Vis spectrophotometer; the idea of spectrophotometry itself is older. Write "Beckman, 1940" as the slide does.</p></div>
        ` },
        { title: 'Double-beam', html: `
          <p class="lead">A <b>double-beam</b> spectrophotometer splits the light into two paths, so the <b>sample and a reference</b> are measured at the same time and compared.</p>
          <figure data-fig="m4-double-beam"></figure>
          <ol class="steps">
            <li><b>Two lamps</b>: a <b>D<sub>2</sub> (deuterium) lamp</b> for UV and a <b>tungsten lamp</b> for visible light, brought onto one path by a mirror.</li>
            <li><b>Filter</b> trims the light before it enters the monochromator.</li>
            <li><b>Monochromator</b> selects one wavelength.</li>
            <li><b>Beam splitter</b> sends half the beam through the <b>sample</b>; a <b>mirror</b> turns the other half through the <b>reference</b>.</li>
            <li><b>Photodiodes</b>, one behind each cell, measure the two beams.</li>
            <li><b>Data processing</b> compares them and gives the <b>data readout</b>: absorbance against wavelength.</li>
          </ol>
          <table class="tbl">
            <thead><tr><th></th><th>Single-beam</th><th>Double-beam</th></tr></thead>
            <tbody>
              <tr><td>Light paths</td><td>One</td><td>Two: sample and reference</td></tr>
              <tr><td>Blank / reference</td><td>Read separately, before the sample</td><td>Read at the same time as the sample</td></tr>
              <tr><td>Lamp drift</td><td>Shows up as error</td><td><b>Cancels</b> in the comparison</td></tr>
              <tr><td>Detectors</td><td>One detector</td><td>Two photodiodes</td></tr>
            </tbody>
          </table>
          <div data-viz="spectrophotometer"></div>
          <p>Switch between single-beam and double-beam and follow the light. Notice where the splitter sends half the beam through the reference cell.</p>
          <div class="note why"><p>The reference cell holds the pure solvent. Anything that affects both beams equally, such as solvent absorption, cuvette reflections or the lamp flickering, cancels when the two signals are compared, leaving only the sample's own absorbance. Two lamps are needed because no single lamp is bright across both the UV and the visible.</p></div>
        ` },
        { title: 'Applications', html: `
          <p class="lead">Five uses, all from one idea: <b>where</b> a compound absorbs and <b>how strongly</b> depend on its structure, and <b>absorbance depends on concentration</b>.</p>
          <table class="tbl">
            <thead><tr><th>Use</th><th>What you look at</th></tr></thead>
            <tbody>
              <tr><td><b>1. Quantitative analysis</b> of an analyte</td><td>Concentration of a compound in solution using <b>Beer's law</b>. Example: percent content of <b>vitamin A<sub>1</sub> and A<sub>2</sub></b> in natural fats and oils, from peak intensities at <b>λ<sub>max</sub> = 325 nm and 351 nm</b> respectively</td></tr>
              <tr><td><b>2. Conjugated vs non-conjugated</b> compounds</td><td>If an organic compound shows <b>no λ<sub>max</sub> above 200 nm</b>, it cannot contain a conjugated chromophore, an aldehyde, a keto group or a benzene ring</td></tr>
              <tr><td><b>3. Cis vs trans</b> geometrical isomers</td><td>The <b>trans</b> isomer absorbs at a <b>longer wavelength</b> and with <b>higher intensity</b> than the cis isomer</td></tr>
              <tr><td><b>4. Keto–enol tautomerism</b></td><td>Keto: <b>low-intensity band at 275 nm (ε = 20)</b> from the isolated keto carbonyl. Enol: <b>high-intensity band at 245 nm (ε = 1800)</b> from the conjugated double bond</td></tr>
              <tr><td><b>5. Charge-transfer complexes</b></td><td>Formed when an electron-rich molecule is mixed with an electron acceptor. The slide lists tetracyanoethylene and iodine as the electron-rich partners, and aniline and benzene as the acceptors. The complex gives <b>new absorption peaks</b></td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Vitamin A<sub>2</sub> has one more double bond in conjugation than A<sub>1</sub>, which is why its peak sits further out (351 vs 325 nm). No band above 200 nm means only σ → σ* and n → σ* jumps are available. Trans isomers are flatter and less crowded, so the π system stays fully conjugated; in the cis form, groups bump into each other and twist the molecule.</p></div>
          <div class="note trap"><p>In keto–enol the keto band sits at the longer wavelength (275 nm), which looks backwards. It is the weak n → π* of an isolated C=O, while the enol band is a strong π → π* of the conjugated system. Tell them apart by <b>intensity</b>: ε = 20 against ε = 1800.</p></div>
          <div class="note heads-up"><p>The charge-transfer roles are swapped on the slide. Tetracyanoethylene and iodine are electron <em>acceptors</em>; aniline and benzene are electron-rich <em>donors</em>. When light is absorbed an electron jumps from the donor to the acceptor, and that jump is the new band.</p></div>
        ` },
        { title: 'Practice problems', html: `
          <p class="lead">Page 24 has two more problems. The slides leave them unsolved, so here is how to reason them out from the definitions.</p>
          <h3>Problem 2: chromophore or auxochrome</h3>
          <figure data-fig="m4-q2-structure"></figure>
          <table class="tbl">
            <thead><tr><th>Label</th><th>Group</th><th>Verdict</th></tr></thead>
            <tbody>
              <tr><td>A</td><td>–OH on the ring</td><td><b>Auxochrome</b>: lone pairs on O, no π bond of its own</td></tr>
              <tr><td>B</td><td>–CH=N– linked to a cyclopentadiene ring (C=N and two C=C)</td><td><b>Chromophore</b>: unsaturated groups</td></tr>
              <tr><td>C</td><td>Naphthalene ring system</td><td><b>Chromophore</b>: conjugated aromatic π system</td></tr>
              <tr><td>D</td><td>Propyl chain, –CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub></td><td><b>Neither</b>: only σ bonds and no lone pairs</td></tr>
              <tr><td>E</td><td>Amide, –CONH<sub>2</sub></td><td>The <b>&gt;C=O is a chromophore</b>; the <b>–NH<sub>2</sub> on it is an auxochrome</b></td></tr>
            </tbody>
          </table>
          <h3>Problem 3: which transitions are possible</h3>
          <p>Method: list the electrons present. σ electrons are always there; π electrons only if there is a double bond; n electrons only if there is an N, O or S with lone pairs. Then pair them with the empty orbitals that exist: σ* always, π* only with a double bond.</p>
          <table class="tbl">
            <thead><tr><th>Compound</th><th>Electrons</th><th>Transitions</th></tr></thead>
            <tbody>
              <tr><td>(a) Cyclopentane</td><td>σ only (C–C, C–H)</td><td><b>σ → σ*</b></td></tr>
              <tr><td>(b) Acetaldehyde, CH<sub>3</sub>CHO</td><td>σ, π (C=O), n (O)</td><td><b>σ → σ*, n → σ*, π → π*, n → π*</b></td></tr>
              <tr><td>(c) Dimethyl ether, CH<sub>3</sub>OCH<sub>3</sub></td><td>σ, n (O)</td><td><b>σ → σ*, n → σ*</b></td></tr>
              <tr><td>(d) Triethylamine, (C<sub>2</sub>H<sub>5</sub>)<sub>3</sub>N</td><td>σ, n (N)</td><td><b>σ → σ*, n → σ*</b></td></tr>
              <tr><td>(e) Cyclohexene</td><td>σ, π (C=C)</td><td><b>σ → σ*, π → π*</b></td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>Acetaldehyde is the only one of the five with all four transitions, because it is the only one with both a π bond and lone pairs on the same group. The slide spells (a) as "cyclopetane"; it means cyclopentane.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Who created spectrophotometry, and when (per the slides)?', back: '<b>Arnold O. Beckman, 1940</b>.' },
        { front: 'Parts of a single-beam spectrophotometer?', back: '<b>Polychromatic source</b>, <b>wavelength selector</b> (and eventually a source selector), <b>sample compartment</b>, <b>detector</b>, <b>screen and/or computer</b>.' },
        { front: 'Which two lamps does the double-beam instrument use?', back: '<b>D<sub>2</sub> (deuterium) lamp</b> for UV and <b>tungsten lamp</b> for visible.' },
        { front: 'What does the beam splitter do in a double-beam instrument, and why is that useful?', back: 'Sends light through the <b>sample and the reference at the same time</b>; comparing them cancels lamp drift and solvent absorption.' },
        { front: 'λ<sub>max</sub> used for vitamins A<sub>1</sub> and A<sub>2</sub>?', back: 'A<sub>1</sub>: <b>325 nm</b>; A<sub>2</sub>: <b>351 nm</b>.' },
        { front: 'An organic compound shows no λ<sub>max</sub> above 200 nm. What can you conclude?', back: 'It contains <b>no conjugated chromophore, aldehyde, keto group or benzene ring</b>.' },
        { front: 'Cis vs trans in UV-Vis?', back: '<b>Trans</b> shows the <b>longer wavelength</b> and <b>higher intensity</b>.' },
        { front: 'Keto vs enol bands?', back: 'Keto: <b>275 nm, ε = 20</b> (isolated C=O). Enol: <b>245 nm, ε = 1800</b> (conjugated double bond).' },
        { front: 'What does a charge-transfer complex show in UV-Vis?', back: '<b>New absorption peaks</b>, from an electron donor–acceptor pair.' },
        { front: 'Transitions possible in dimethyl ether?', back: '<b>σ → σ*</b> and <b>n → σ*</b> (σ bonds + O lone pairs, no π bond).' }
      ],
      oneLiners: [
        'Beckman created spectrophotometry in 1940.',
        'Single beam: polychromatic source → wavelength selector (+ source selector) → sample compartment → detector → screen/computer.',
        'Double beam: D₂ + tungsten lamps → filter → monochromator → beam splitter → sample and reference → photodiodes → data processing.',
        'Vitamin A₁ at 325 nm, A₂ at 351 nm (quantitative analysis in fats and oils).',
        'No λmax above 200 nm → no conjugated chromophore, aldehyde, keto group or benzene ring.',
        'Trans isomer: longer λ and higher intensity than cis.',
        'Keto 275 nm (ε = 20) vs enol 245 nm (ε = 1800).',
        'Charge-transfer complexes give new absorption peaks.'
      ],
      formulas: []
    }
  ],

  figures: [
    { id: 'm4-optics-layout', src: 'm4/images/p02_8b27a89f.png', crop: null,
      caption: 'The basic optical path: light is made parallel, split by a prism or grating, one band passes the slit (I₀), and the photocell reads what leaves the cuvette (Iₜ).',
      alt: 'Left to right: light source, collimating lens, prism monochromator, slit, sample solution in a cuvette, photocell detector and a digital display reading 0.20.' },
    { id: 'm4-heat-transfer', src: 'm4/images/p03_b476e2d5.jpeg', crop: null,
      caption: 'Conduction warms the handle, convection currents circulate the water, and radiation spreads heat outward from the flame.',
      alt: 'A pan of water over a fire with arrows labelled conduction at the handle, convection inside the water and radiation from the flames.' },
    { id: 'm4-particle-wave', src: 'm4/images/p03_49a81ece.jpeg', crop: null,
      caption: 'Particles passing a barrier leave a sharp, straight shadow; waves bend into the shadow region.',
      alt: 'Two light sources behind barriers: on the left dots travel in straight lines past the barrier, on the right curved wavefronts bend behind it.' },
    { id: 'm4-em-wave', src: 'm4/images/p04_399eb2e0.png', crop: null,
      caption: 'The electric and magnetic fields oscillate at right angles to each other and to the direction the wave travels.',
      alt: 'A 3D sketch of two perpendicular sine waves, electric field vertical and magnetic field horizontal, along a propagation axis.' },
    { id: 'm4-wavelength-frequency', src: 'm4/pages/p04.png', crop: [0.73, 0.345, 0.235, 0.63],
      caption: 'One wavelength is crest to crest or trough to trough, and amplitude is the height. The higher-frequency wave fits more cycles into the same window.',
      alt: 'A sine wave with wavelength and amplitude marked, above two waves in red boxes labelled higher frequency and lower frequency.' },
    { id: 'm4-emr-matter', src: 'm4/images/p05_153a33f8.png', crop: null,
      caption: 'Light from the monochromator can be reflected, refracted, absorbed, transmitted, scattered or re-emitted by the sample, and detectors pick up each route.',
      alt: 'A light source and monochromator send beams into a sample box labelled reflection, refraction, absorption, transmission, scattering and emission, with detectors beyond.' },
    { id: 'm4-em-spectrum-chart', src: 'm4/images/p07_fa35aa1d.png', crop: null,
      caption: 'Wavelength falls from about 10³ m (radio) to 10⁻¹² m (gamma) as frequency rises from 10⁴ to 10²⁰ Hz. Visible light is a narrow band near the middle.',
      alt: 'Electromagnetic spectrum chart with region labels radio to gamma ray, wavelength ticks in metres, a wave getting shorter to the right and a frequency bar in hertz.' },
    { id: 'm4-regions-table', src: 'm4/images/p07_f626ec8d.png', crop: null,
      caption: 'The slide table: energy range in kJ/mol, technique and time scale for each region of radiation.',
      alt: 'Table with columns radiation type, E in kJ/mol, technique and time in seconds, rows gamma and X-rays, UV-visible, infrared, microwaves, radiowaves.' },
    { id: 'm4-spectroscopy-tree', src: 'm4/pages/p08.png', crop: [0.01, 0.16, 0.98, 0.75],
      caption: 'Spectroscopy branches by probe: the electromagnetic spectrum, alpha and beta particles, protons, neutrons, and acoustic and seismic waves.',
      alt: 'Tree diagram: Spectroscopy splits into electromagnetic spectrum, alpha particles, beta particles, protons, neutrons, acoustic waves and seismic waves; the EM branch lists radio, microwave, infrared, UV-visible, AAS, X-ray diffraction and gamma ray.' },
    { id: 'm4-abs-em-levels', src: 'm4/pages/p09.png', crop: [0.04, 0.305, 0.34, 0.27],
      caption: 'Absorption (ABS) lifts the system from the ground state E₀ to the excited state E₁; emission (EM) is the drop back. Either way hν = E₁ − E₀.',
      alt: 'Two horizontal energy levels, E0 ground state and E1 excited state, with an upward ABS arrow and a downward EM arrow, beside the equation hv = delta E = E1 - E0.' },
    { id: 'm4-spectroscopy-classes', src: 'm4/images/p09_758113b3.png', crop: null,
      caption: 'Atomic spectroscopy gives line spectra from electronic transitions; molecular spectroscopy gives band spectra from electronic, vibrational and rotational transitions.',
      alt: 'Tree: Spectroscopy splits into atomic (absorption: atomic absorption; emission: flame emission; electronic transitions, line spectrum) and molecular (absorption: UV-visible, IR; emission: fluorescence, phosphorescence; band spectrum).' },
    { id: 'm4-mars-rover', src: 'm4/images/p11_f273f167.jpeg', crop: null,
      caption: 'A Mars exploration rover. Its spectrometers analyse rock, soil and atmosphere on the spot.',
      alt: 'A six-wheeled rover with a mast and solar panels on red Martian ground.' },
    { id: 'm4-chandrayaan', src: 'm4/images/p11_f57b7f4c.jpeg', crop: null,
      caption: 'The Chandrayaan-3 lander and rover on the Moon, carrying X-ray and laser-based spectrometers among other probes.',
      alt: 'A gold-foil lander on grey lunar soil with a small rover beside it and Earth in the black sky.' },
    { id: 'm4-uv-vis-window', src: 'm4/images/p14_bbd3e07b.png', crop: null,
      caption: 'UV runs from about 100 nm (far) through 250 nm (medium) to 400 nm (near); visible spans violet to red up to 700 nm. Energy and frequency rise to the left.',
      alt: 'A bar from 100 nm to 700 nm: ultraviolet in white, then a violet to red colour band, infrared beyond; below it E = hv, v = E/h and lambda = hc/E with arrows for higher energy to the left.' },
    { id: 'm4-atom-vs-molecule', src: 'm4/images/p14_e2e1dd0e.png', crop: null,
      caption: 'An atom gives one sharp line; a small molecule gives a comb of vibrational peaks; a large molecule has so many sub-levels that they blur into one broad band.',
      alt: 'Three absorption shapes, a sharp spike for an atom, a comb of peaks for a diatomic molecule and a broad hump for a large molecule, each above its energy-level diagram.' },
    { id: 'm4-jablonski', src: 'm4/images/p15_b5ddc40b.png', crop: null,
      caption: 'Absorption to S₁, vibrational relaxation, then either fluorescence straight back to S₀ or a crossing to the triplet T₁ followed by phosphorescence.',
      alt: 'Jablonski diagram: red absorption arrows from S0 to S1, green wavy vibrational relaxation, red fluorescence arrows down to S0, a blue wavy arrow to the triplet T1 and red phosphorescence arrows down.' },
    { id: 'm4-emission-levels', src: 'm4/pages/p15.png', crop: [0.59, 0.47, 0.31, 0.475],
      caption: 'Each drop to level 2 gives one colour: 3→2 red, 4→2 green, 5→2 blue, 6→2 violet. A bigger drop means a more energetic, bluer photon.',
      alt: 'Energy levels 2 to 6 with a yellow upward absorption arrow and red, green, blue and violet downward emission arrows ending on level 2.' },
    { id: 'm4-mo-ladder', src: 'm4/images/p16_612730e5.png', crop: null,
      caption: 'Orbital ladder from σ (lowest) through π and n to π* and σ*. Arrow length shows the energy each transition needs.',
      alt: 'Energy axis with levels sigma, pi, n, pi star and sigma star, and four red upward arrows for the four transitions.' },
    { id: 'm4-dye-chromophore', src: 'm4/pages/p17.png', crop: [0.225, 0.555, 0.30, 0.43],
      caption: 'In this azo dye the –N=N– group is the chromophore (red), the –SO₃⁻Na⁺ groups are auxochromes (blue), and the black-circled ring systems are labelled the chromogen.',
      alt: 'Structure of a sulfonated azo dye with two naphthalene units joined by N=N; the N=N is circled in red as chromophore, three sulfonate groups circled in blue as auxochromes, rings circled in black as chromogen.' },
    { id: 'm4-shift-diagram', src: 'm4/images/p18_a0da3508.jpeg', crop: null,
      caption: 'Sideways moves change λmax (hypsochromic to shorter, bathochromic to longer); up and down moves change intensity (hyperchromic up, hypochromic down).',
      alt: 'An absorbance band between 200 and 700 nm with four arrows: left hypsochromic, right bathochromic, up hyperchromic, down hypochromic.' },
    { id: 'm4-shift-examples', src: 'm4/pages/p18.png', crop: [0.645, 0.485, 0.34, 0.495],
      caption: 'Aniline in acid becomes the anilinium ion: λmax 280 → 265 nm and ε 1430 → 160. Adding a methyl group to pyridine raises ε from 2750 to 3560.',
      alt: 'Aniline (lambda max 280 nm, epsilon 1430) converting in acidic medium to anilinium chloride (265 nm, 160); below, pyridine (257 nm, 2750) and 2-methyl pyridine (260 nm, 3560).' },
    { id: 'm4-colour-wheel', src: 'm4/pages/p19.png', crop: [0.005, 0.565, 0.23, 0.31],
      caption: 'The colour wheel with approximate wavelength boundaries. A solution looks the colour directly opposite the band it absorbs.',
      alt: 'A colour wheel with segments violet, blue, green, yellow, orange and red, and boundaries marked at about 400, 430, 490, 560, 580, 620 and 800 nm.' },
    { id: 'm4-dye-absorbance', src: 'm4/pages/p19.png', crop: [0.27, 0.445, 0.34, 0.385],
      caption: 'Congo red absorbs green light near 500 nm and looks red; methylene blue absorbs orange-red light in the 600–700 nm range and looks blue.',
      alt: 'Absorbance against wavelength from 400 to 800 nm: a red Congo red curve peaking near 470–500 nm and a blue methylene blue curve with a shoulder near 610 nm and a peak near 650 nm.' },
    { id: 'm4-dye-structures', src: 'm4/pages/p19.png', crop: [0.36, 0.828, 0.455, 0.167],
      caption: 'Methylene blue (left) and Congo red (right). Both have long conjugated systems that absorb in the visible.',
      alt: 'Chemical structures of methylene blue, a three-ring cation with two dimethylamino groups, and Congo red, a bis-azo dye with a biphenyl centre and two sulfonated naphthylamine ends.' },
    { id: 'm4-chlorophyll-spectrum', src: 'm4/images/p02_a7290321.jpeg', crop: null,
      caption: 'Chlorophyll a and b absorb strongly in the blue and the red and hardly at all in the green, which is why leaves look green. Carotenoids absorb in the blue-green.',
      alt: 'Absorption spectrum from 400 to 700 nm with curves for chlorophyll a, chlorophyll b and carotenoids; chlorophylls peak near 430 to 460 nm and 640 to 670 nm.' },
    { id: 'm4-beer-lambert-setup', src: 'm4/images/p20_a12366a1.png', crop: null,
      caption: 'Monochromatic light enters a cuvette of width L and the fraction that gets through reaches the screen. Absorbance depends on ε, L and C.',
      alt: 'Light source, monochromator, incident light arrow, a tall cuvette with width L, transmitted light arrow and a screen, labelled Beer Lambert Law A = eLC.' },
    { id: 'm4-single-beam', src: 'm4/images/p21_3230f9b9.png', crop: null,
      caption: 'Single-beam path: source, prism monochromator, slit, cuvette, detector, amplifier and a numerical output (0.122 here).',
      alt: 'Lamp and reflector, a prism spreading light into a rainbow, a slit, a purple cuvette, a detector circle, a red amplifier triangle and an output box reading 0.122.' },
    { id: 'm4-beckman', src: 'm4/images/p21_04dea7aa.jpeg', crop: null,
      caption: 'Arnold O. Beckman, credited on the slide with creating spectrophotometry in 1940.',
      alt: 'Black and white photograph of Arnold Beckman seated at a desk.' },
    { id: 'm4-benchtop-parts', src: 'm4/images/p21_a4bdfc27.jpeg', crop: null,
      caption: 'The controls on a benchtop instrument: cuvette holder, compartment cover, zero setting (T = 100%), wavelength adjustment, display and source lighting.',
      alt: 'Cartoon of a benchtop spectrometer with labels for sample compartment cover, cuvette holder, analysed cuvette, set to zero command T=100%, wavelength adjustment, output, display mode, source lighting and on/off button.' },
    { id: 'm4-uv-vis-photo', src: 'm4/images/p21_d2d4a105.jpeg', crop: null,
      caption: 'A modern benchtop UV-Vis spectrophotometer with a built-in screen that plots the spectrum.',
      alt: 'Photograph of a white and blue benchtop spectrophotometer with a lid over the sample compartment and a keypad with a screen showing a spectrum.' },
    { id: 'm4-double-beam', src: 'm4/pages/p22.png', crop: [0.12, 0.19, 0.70, 0.67],
      caption: 'D₂ and tungsten lamps feed a filter and monochromator; a beam splitter sends the chosen wavelength through both the reference and the sample, and data processing compares the two photodiode signals.',
      alt: 'Double-beam layout: D2 lamp and tungsten lamp reflect off a mirror, pass a filter wheel into a monochromator, then a beam splitter sends one beam through the sample and, via a mirror, one through the reference, each to a photodiode feeding data processing and an absorbance readout.' },
    { id: 'm4-q2-structure', src: 'm4/pages/p24.png', crop: [0.135, 0.55, 0.245, 0.28],
      caption: 'Page 24, problem 2: five circled groups (A–E) on a naphthalene-based molecule to sort into chromophores and auxochromes.',
      alt: 'A naphthalene core with circled groups: A an OH, B a CH=N linked to a cyclopentadiene ring, C the naphthalene rings, D a propyl chain, E an amide CONH2.' }
  ]
});
