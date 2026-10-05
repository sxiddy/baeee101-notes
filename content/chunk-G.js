CHUNK({
  chunk: 'G',
  module: 'm4',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm4-xrays',
      title: 'X-rays: nature & production',
      short: 'X-rays & production',
      blurb: 'Where X-rays sit in the spectrum, who found them, how a tube makes them, and why the spectrum is a smooth hump with sharp Kα and Kβ spikes on top.',
      source: 'Pages 25–29',
      tabs: [
        { title: 'What X-rays are', html: `
          <p class="lead">X-rays are <b>energetic, high-frequency electromagnetic radiation</b>. On the spectrum they sit between UV and gamma rays.</p>
          <div class="kv">
            <div><span>Wavelength</span><b>0.01–10 nm</b></div>
            <div><span>Energy</span><b>1–100 keV</b></div>
            <div><span>Frequency</span><b>3×10<sup>16</sup>–3×10<sup>19</sup> Hz</b></div>
          </div>
          <ul>
            <li>Wavelength: <b>shorter than UV</b>, longer than gamma.</li>
            <li>Energy: <b>higher than UV</b>, lower than gamma.</li>
          </ul>
          <div class="note why"><p>These are one band written three ways. Short λ means high ν (c = λν) and high energy (E = hν). Quick check: c ÷ 10 nm = 3×10<sup>16</sup> Hz and c ÷ 0.01 nm = 3×10<sup>19</sup> Hz, exactly the frequency limits above.</p></div>
          <figure data-fig="m4-xray-em-uses"></figure>
          <div class="note why"><p>Why X-rays suit crystals: their wavelength is around 1 Å, about the same as the gap between planes of atoms. Visible light (400–700 nm) is thousands of times too long to pick those planes out.</p></div>
        ` },
        { title: 'Discovery & types', html: `
          <p class="lead"><b>W.C. Röntgen</b> discovered X-rays in <b>1895</b> and was awarded the Nobel Prize in <b>1901</b>, the first Nobel Prize in Physics.</p>
          <div class="kv">
            <div><span>Other names</span><b>X-radiation, Röntgen radiation</b></div>
            <div><span>Known as</span><b>First example of ionizing radiation</b></div>
            <div><span>First radiograph</span><b>Hand of Anna Bertha Ludwig, Röntgen's wife</b></div>
          </div>
          <figure data-fig="m4-first-radiograph"></figure>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Wavelength</th><th>What it means</th></tr></thead>
            <tbody>
              <tr><td>Hard X-rays</td><td><b>0.01–1 nm</b></td><td>Shorter λ, higher energy, more penetrating</td></tr>
              <tr><td>Soft X-rays</td><td><b>0.1–10 nm</b></td><td>Longer λ, lower energy, absorbed easily</td></tr>
              <tr><td>Analytical purpose</td><td><b>0.7–2 nm</b></td><td>The slice used for analysis such as XRD</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Ionizing means an X-ray photon carries enough energy to knock an electron clean out of an atom, leaving an ion behind. That is why X-rays damage tissue and why labs shield them.</p></div>
          <div class="note heads-up"><p>The hard and soft ranges overlap on the page (0.1–1 nm counts as both). Most textbooks put the dividing line near 0.1–0.2 nm, about 5–10 keV: shorter is hard, longer is soft. Quote the page's ranges in the exam.</p></div>
          <div class="note heads-up"><p>"0.7 to 2 nm" for analytical work is almost certainly <b>0.7–2 Å</b> (0.07–0.2 nm). The anode lines used in XRD run from Mo 0.71 Å to Cr 2.29 Å, and Cu Kα is 1.54 Å, which is 0.154 nm.</p></div>
        ` },
        { title: 'The X-ray tube', html: `
          <p class="lead">An X-ray tube makes X-rays by <b>firing fast electrons at a metal target</b> and stopping them abruptly.</p>
          <div class="kv">
            <div><span>Body</span><b>Evacuated glass/metal bulb</b></div>
            <div><span>Cathode (−)</span><b>Tungsten (W), filament type</b></div>
            <div><span>Anode (+)</span><b>Cu / Cr / Mo / W, disk type</b></div>
            <div><span>Accelerating potential</span><b>25–150 kV</b></div>
          </div>
          <p>The cathode and anode are sealed in at opposite ends of the tube. The anode metal is chosen to suit the application.</p>
          <ol class="steps">
            <li><b>Heat</b> The W filament is heated and gives off electrons by the thermionic process.</li>
            <li><b>Accelerate</b> The 25–150 kV between cathode and anode drives them hard toward the anode.</li>
            <li><b>Stop</b> The fast-moving stream hits the target and is rapidly decelerated.</li>
            <li><b>Emit</b> The kinetic energy it loses comes out as X-rays, which leave through a window.</li>
          </ol>
          <figure data-fig="m4-xray-tube-schematic"></figure>
          <div class="note why"><p>The bulb is evacuated so the electrons reach the anode without hitting gas molecules on the way. Only about 1% of their energy ends up as X-rays; the rest becomes heat, which is why the anode is water-cooled.</p></div>
          <h3>Why tungsten</h3>
          <div class="chips"><span class="chip">High atomic number, 74</span><span class="chip">Efficient electron release</span><span class="chip">Good thermionic emitter</span><span class="chip">Made as thin wires</span><span class="chip">M.P. 3422 °C</span></div>
          <p>A filament has to glow white-hot for hours and keep giving off electrons. Tungsten melts at <b>3422 °C</b>, the highest of any metal, so it survives the job.</p>
          <figure data-fig="m4-xray-tube-photos"></figure>
        ` },
        { title: 'Continuous X-rays', html: `
          <p class="lead">Continuous X-rays, called <b>Bremsstrahlung</b> (braking radiation), are given off when a fast electron is <b>slowed down in the field of a nucleus</b>.</p>
          <ol class="steps">
            <li><b>Approach</b> A fast electron passes close to a nucleus in the target.</li>
            <li><b>Swerve</b> The positive nucleus pulls on it, bends its path and slows it, so it loses KE.</li>
            <li><b>Emit</b> The loss of KE is made up by emitting an X-ray photon.</li>
          </ol>
          <div class="kv">
            <div><span>Interaction</span><b>Nucleus field</b></div>
            <div><span>Cause</span><b>Electron deceleration</b></div>
            <div><span>Output</span><b>Polychromatic, continuous, white</b></div>
            <div><span>Discovered by</span><b>Nikola Tesla</b></div>
          </div>
          <figure data-fig="m4-bremsstrahlung"></figure>
          <div class="note why"><p>Why continuous: every electron takes a different path. A near miss loses a little energy and gives a low-energy photon; a close pass loses a lot and gives a high-energy one. Millions of electrons fill in every wavelength, so you get a smooth hump, "white" like white light. The only hard limit is at the top: a photon can't carry more than the electron's full KE, so the tube voltage sets the shortest wavelength.</p></div>
          <div class="note heads-up"><p>The page writes "breaking radiation". The German <em>bremsen</em> means to brake, so the usual English is <b>braking radiation</b>.</p></div>
        ` },
        { title: 'Characteristic X-rays', html: `
          <p class="lead">Characteristic X-rays come from an <b>inner-shell interaction</b>: a hole in an inner shell is filled by a higher-energy electron, and the energy gap leaves as one sharp X-ray line.</p>
          <ol class="steps">
            <li><b>Knock out</b> The incoming electron ejects a K-shell electron from a target atom.</li>
            <li><b>Fill</b> A higher-energy electron drops into the vacancy, from the L shell or the M shell.</li>
            <li><b>Emit</b> The energy difference between the two shells comes out as an X-ray photon.</li>
          </ol>
          <figure data-fig="m4-characteristic-emission"></figure>
          <div class="vs">
            <div class="side"><h4>Kα</h4><p><b>L → K</b> electron drop. Smaller gap, longer λ, stronger line.</p></div>
            <div class="side"><h4>Kβ</h4><p><b>M → K</b> electron drop. Bigger gap, shorter λ, weaker line.</p></div>
          </div>
          <p>Characteristic X-rays were discovered by <b>Charles Glover Barkla</b> in <b>1909</b>.</p>
          <div class="note why"><p>Why "characteristic": shell energies are set by the charge on the nucleus, so every element has its own K, L and M gaps. The lines identify the anode metal, and they are sharp because each gap has one fixed value.</p></div>
          <h3>Cu Kα, the lab standard</h3>
          <div class="kv">
            <div><span>Energy</span><b>8.04 keV</b></div>
            <div><span>Wavelength</span><b>1.5406 Å</b></div>
            <div><span>Used for</span><b>Crystal structure study by XRD</b></div>
          </div>
          <p><b>K-lines</b> are the most useful in X-ray diffraction, and Cu Kα is the one most lab-scale instruments run on.</p>
          <div class="note why"><p>K-lines are the most intense lines in the spectrum, and diffraction wants one strong, single wavelength. The two Cu numbers agree: E = hc/λ = 12.4 keV·Å ÷ 1.5406 Å ≈ 8.05 keV, in line with the 8.04 keV quoted.</p></div>
        ` },
        { title: 'Spectrum & anodes', html: `
          <p class="lead">A real tube gives both kinds at once: a <b>smooth continuous hump</b> with <b>sharp characteristic lines</b> standing on it.</p>
          <figure data-fig="m4-line-spectrum"></figure>
          <table class="tbl">
            <thead><tr><th></th><th>Continuous</th><th>Characteristic</th></tr></thead>
            <tbody>
              <tr><td>Also called</td><td>Bremsstrahlung, white radiation</td><td>Line spectrum (Kα, Kβ)</td></tr>
              <tr><td>Interaction</td><td>Electron with the nucleus field</td><td>Electron with inner-shell electrons</td></tr>
              <tr><td>Spectrum</td><td><b>Polychromatic</b>, every λ</td><td><b>Sharp lines</b> at fixed λ</td></tr>
              <tr><td>Set by</td><td>Tube voltage</td><td>Anode element</td></tr>
              <tr><td>Discovered by</td><td>Nikola Tesla</td><td>C.G. Barkla, 1909</td></tr>
            </tbody>
          </table>
          <h3>Kα of common anodes</h3>
          <table class="tbl">
            <thead><tr><th>Anode</th><th>Cr</th><th>Fe</th><th>Co</th><th>Cu</th><th>Mo</th><th>W</th></tr></thead>
            <tbody><tr><td>Kα (Å)</td><td>2.29</td><td>1.94</td><td>1.79</td><td><b>1.54</b></td><td>0.71</td><td>2.13</td></tr></tbody>
          </table>
          <div class="note why"><p>Heavier element, bigger nuclear charge, inner electrons held tighter. The L → K drop grows and Kα gets shorter, which is the trend you see from Cr (Z = 24) through Fe, Co and Cu to Mo (Z = 42).</p></div>
          <div class="note heads-up"><p>W is listed as 2.13 Å. Tungsten (Z = 74) is much heavier than Mo, so its Kα has to sit well below 0.71 Å; the standard value is about <b>0.21 Å</b> (≈ 59 keV). 2.13 looks like a slipped decimal. Reproduce the page's list if it is asked for as written.</p></div>
          <p>Try it: flip between Bremsstrahlung and Characteristic to see which part of the spectrum each one draws, then change the anode and watch the Kα line move.</p>
          <div data-viz="xray-tube"></div>
        ` }
      ],
      flashcards: [
        { front: 'Wavelength range of X-rays, and where that sits?', back: '<b>0.01–10 nm</b>: shorter than UV, longer than gamma.' },
        { front: 'Energy and frequency range of X-rays?', back: '<b>1–100 keV</b> and <b>3×10<sup>16</sup>–3×10<sup>19</sup> Hz</b>.' },
        { front: 'Who discovered X-rays, when, and when was the Nobel?', back: '<b>W.C. Röntgen, 1895</b>; Nobel Prize <b>1901</b>.' },
        { front: 'Hard vs soft X-ray ranges (as given)?', back: 'Hard <b>0.01–1 nm</b>, soft <b>0.1–10 nm</b>. Analytical work: 0.7–2 nm on the page, meant as 0.7–2 Å.' },
        { front: 'Whose hand is in the first radiograph of a human body?', back: '<b>Anna Bertha Ludwig</b>, Röntgen\'s wife.' },
        { front: 'Cathode, anode and voltage in an X-ray tube?', back: 'Cathode (−) <b>W filament</b>; anode (+) <b>Cu/Cr/Mo/W disk</b>; <b>25–150 kV</b>; evacuated bulb.' },
        { front: 'Five features that make tungsten the filament?', back: 'Z = <b>74</b>, efficient electron release, good thermionic emitter, made as thin wires, M.P. <b>3422 °C</b>.' },
        { front: 'How are continuous X-rays made, and who found the effect?', back: 'An electron is <b>decelerated in the field of a nucleus</b>; lost KE comes out as polychromatic "white" X-rays. <b>Nikola Tesla</b>.' },
        { front: 'Kα vs Kβ?', back: 'Kα: <b>L → K</b> drop. Kβ: <b>M → K</b> drop (bigger gap, shorter λ).' },
        { front: 'Cu Kα energy and wavelength?', back: '<b>8.04 keV</b>, <b>1.5406 Å</b>.' },
        { front: 'Who discovered characteristic X-rays and when?', back: '<b>Charles Glover Barkla, 1909</b>.' },
        { front: 'Kα (Å) of Cr, Fe, Co, Cu, Mo as listed?', back: 'Cr <b>2.29</b>, Fe <b>1.94</b>, Co <b>1.79</b>, Cu <b>1.54</b>, Mo <b>0.71</b> (W listed 2.13; real ≈ 0.21).' }
      ],
      oneLiners: [
        'X-rays: 0.01–10 nm, 1–100 keV, 3×10<sup>16</sup>–3×10<sup>19</sup> Hz, between UV and gamma.',
        'Röntgen discovered X-rays in 1895; Nobel Prize 1901; first example of ionizing radiation.',
        'Tube: evacuated bulb, W filament cathode (−), Cu/Cr/Mo/W disk anode (+), 25–150 kV.',
        'X-rays form when a fast electron stream is rapidly decelerated at the anode.',
        'Continuous = Bremsstrahlung, nucleus-field deceleration, white radiation (Tesla).',
        'Characteristic = inner-shell vacancy filled: L → K gives Kα, M → K gives Kβ (Barkla, 1909).',
        'Cu Kα = 8.04 keV = 1.5406 Å, the standard lab XRD line; K-lines are the most useful.'
      ],
      formulas: [
        { name: 'X-ray photon energy', html: `E = hν = <span class="frac"><span>hc</span><span>λ</span></span>`, note: 'hc ≈ 12.4 keV·Å, so Cu Kα at 1.5406 Å is about 8.04 keV.' }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: 'm4-bragg',
      title: "Diffraction & Bragg's law",
      short: 'Diffraction & Bragg',
      blurb: 'How waves bend and add up, why a crystal acts as a grating for X-rays, how ordered and disordered solids differ, and how two triangles give 2d sin θ = nλ.',
      source: 'Pages 30–32, 37',
      tabs: [
        { title: 'Diffraction', html: `
          <p class="lead">Diffraction is the <b>bending of a wave</b> around a corner or through a gap. It happens when the slit or corner is <b>smaller than or equal to the wavelength</b>.</p>
          <figure data-fig="m4-diffraction-door"></figure>
          <p>You see it every day with light bending around the <b>corners of doors and windows</b>.</p>
          <div class="note why"><p>A gap much wider than λ lets the wave go almost straight through. Shrink the gap toward λ and the wave fans out, because every point in the gap acts like a fresh little source.</p></div>
          <div class="note why"><p>For X-rays (λ around 1 Å) the gap has to be atom-sized. A crystal supplies exactly that: planes of atoms a few ångströms apart act as a natural grating. That is the whole basis of XRD.</p></div>
        ` },
        { title: 'Interference', html: `
          <p class="lead">Interference is the <b>interaction of two waves</b> that meet. They add, point by point.</p>
          <div class="vs">
            <div class="side"><h4>Constructive</h4><p><b>Reinforcing</b> interaction: the waves are in phase (crest on crest) and give a wave of greater amplitude.</p></div>
            <div class="side"><h4>Destructive</h4><p><b>Canceling</b> interaction: the waves are out of phase (crest on trough), cancel each other, and no net motion remains.</p></div>
          </div>
          <figure data-fig="m4-interference-waves"></figure>
          <p>Try it: drag the phase difference from 0 to 2π. At 0 the sum is twice as tall; at π it goes flat.</p>
          <div data-viz="interference"></div>
          <figure data-fig="m4-young-double-slit"></figure>
          <div class="note why"><p>What sets the phase is the <b>path difference</b>. If one wave travels a whole number of wavelengths (nλ) further, it arrives in step: constructive. Half a wavelength further and it arrives upside down: destructive. Bragg's law is this same rule for X-rays bouncing off crystal planes.</p></div>
        ` },
        { title: 'Crystalline vs amorphous', html: `
          <p class="lead">What XRD sees depends on how the atoms are packed. The microstructure of a solid comes in three kinds.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Arrangement</th></tr></thead>
            <tbody>
              <tr><td><b>Crystalline</b></td><td>The entire solid is made up of atoms in an orderly array</td></tr>
              <tr><td><b>Polycrystalline</b></td><td>Completely ordered, but only in segments</td></tr>
              <tr><td><b>Amorphous</b></td><td>No recognizable long-range order</td></tr>
            </tbody>
          </table>
          <figure data-fig="m4-microstructure-types"></figure>
          <h3>Same formula, different structures: SiO<sub>2</sub></h3>
          <p>Quartz, cristobalite and glass all share the chemical formula <b>SiO<sub>2</sub></b>, but their crystal structures vary, and XRD shows it at once.</p>
          <figure data-fig="m4-sio2-patterns"></figure>
          <div class="note why"><p>A sharp peak needs the same plane spacing repeated again and again through the solid. Quartz and cristobalite have that, each with its own spacings, so each gives sharp peaks at its own 2θ. Glass has only short-range order, so the scattered waves never line up cleanly and you get one broad hump.</p></div>
          <div class="note exam"><p>A chemical analysis says "SiO<sub>2</sub>" for all three. A structural method like XRD is what tells quartz from cristobalite from glass.</p></div>
        ` },
        { title: 'Principle of XRD', html: `
          <p class="lead">XRD rests on one rule: <em>"Every crystalline substance gives a pattern; the same substance always gives the same pattern; and in a mixture of substances each produces its pattern independently of the others."</em></p>
          <ul>
            <li>The XRD pattern of a pure substance works like a <b>fingerprint</b> of that substance.</li>
            <li>It is based on the <b>scattering of X-rays by crystals</b>.</li>
            <li>The atomic planes make the incident X-ray beam interfere with itself as it leaves the crystal. That is described by <b>Bragg's law</b>.</li>
          </ul>
          <figure data-fig="m4-xrd-mixture"></figure>
          <div class="note example"><p>In the SiO<sub>2</sub> mixture above, the sharp cristobalite and quartz peaks stand on the broad glass hump. Each phase shows up on its own, exactly as the rule says, so XRD can pick out the parts of a mixture.</p></div>
          <div class="note why"><p>Why a fingerprint: peak positions come from the spacings between planes (set by the unit cell) and peak heights from which atoms sit where. Two different crystal structures practically never share both, so the pattern pins the substance down.</p></div>
        ` },
        { title: "Bragg's law", html: `
          <p class="lead">X-rays reflected from neighbouring planes reinforce only when the lower ray's extra path is a whole number of wavelengths: <b>2d sin θ = nλ</b>.</p>
          <p>The atomic planes of a crystal make an incident X-ray beam interfere with itself as it leaves the crystal. That is <b>X-ray diffraction</b>. Two parallel rays meet the planes at angle θ: one reflects at A on the top plane, the other at B on the plane below, a distance d further down.</p>
          <figure data-fig="m4-bragg-geometry"></figure>
          <ol class="steps">
            <li><b>Path difference</b> The lower ray travels an extra δ = CB + BD.</li>
            <li><b>Triangle ACB</b> sin θ = CB/AB = CB/d, so CB = d sin θ.</li>
            <li><b>Triangle ADB</b> sin θ = BD/AB = BD/d, so BD = d sin θ.</li>
            <li><b>Add</b> δ = d sin θ + d sin θ = 2d sin θ.</li>
            <li><b>Condition</b> Diffraction occurs when that path difference equals nλ.</li>
          </ol>
          <div class="eq" data-label="Bragg's law">δ = 2d sin θ = nλ</div>
          <div class="kv">
            <div><span>δ</span><b>Path difference between reflected waves</b></div>
            <div><span>λ</span><b>Incident X-ray wavelength</b></div>
            <div><span>n</span><b>An integer: 1, 2, 3…</b></div>
            <div><span>d</span><b>Distance between lattice planes</b></div>
            <div><span>θ</span><b>Angle between incident X-ray and the planes</b></div>
          </div>
          <div class="note trap"><p>θ is measured from the plane, not from the normal. The angle between the incoming and the diffracted beam is <b>2θ</b>, which is why diffractograms are plotted against 2θ. Halve the peak position before you use Bragg's law.</p></div>
          <p>Try it: set d and λ, then sweep θ. The detector lights only when 2d sin θ / λ lands on a whole number; the n = 1, 2, 3 buttons jump straight there.</p>
          <div data-viz="bragg"></div>
          <h3>Nobel Prizes in Physics</h3>
          <table class="tbl">
            <thead><tr><th>Year</th><th>Who</th><th>For</th></tr></thead>
            <tbody>
              <tr><td><b>1914</b></td><td>Max von Laue</td><td>Discovery of X-ray diffraction</td></tr>
              <tr><td><b>1915</b></td><td>W.H. Bragg and W.L. Bragg (father and son)</td><td>X-ray crystal structure analysis</td></tr>
            </tbody>
          </table>
          <figure data-fig="m4-nobel-xrd"></figure>
        ` },
        { title: 'Worked problem', html: `
          <p class="lead">Bragg problems are one line of algebra: rearrange to <b>d = nλ / 2 sin θ</b> and keep the units straight.</p>
          <p>X-rays of wavelength 0.9 Å are diffracted at an angle of 7° in the first order. What is the spacing between the adjacent planes of the crystal, in Å?</p>
          <div class="worked">
            <div class="given"><p>λ = 0.9 Å = 0.9×10<sup>−10</sup> m, θ = 7°, first order so n = 1, d = ?</p></div>
            <div class="solve">
              <div class="eq">2d sin θ = nλ</div>
              <div class="eq">2 × d × sin 7° = 1 × 0.9×10<sup>−10</sup></div>
              <div class="eq">2 × d × 0.1218 = 1 × 0.9×10<sup>−10</sup></div>
              <div class="eq">d = 0.9×10<sup>−10</sup> / 0.2436 = 3.6946×10<sup>−10</sup> m</div>
            </div>
            <div class="result"><p>d = <b>3.69 Å</b> (3.6946 Å)</p></div>
          </div>
          <div class="note heads-up"><p>The page writes d = 3.6946×10<sup>−10</sup> <b>cm</b>. It should be <b>m</b>: 10<sup>−10</sup> m is 1 Å, which is how the next line gets 3.6946 Å. In cm it would be 0.037 Å.</p></div>
          <div class="note exam"><p>Shortcut: leave λ in Å and d comes out in Å directly, since sin θ has no unit. Using the full sin 7° = 0.12187 gives 3.692 Å; both round to 3.69 Å.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'When does diffraction occur?', back: 'When a wave passes a slit or corner <b>smaller than or equal to its wavelength</b>.' },
        { front: 'Everyday example of diffraction on the page?', back: 'Light bending around the <b>corners of doors and windows</b>.' },
        { front: 'Constructive vs destructive interference?', back: 'Constructive: waves <b>in phase</b>, greater amplitude. Destructive: <b>out of phase</b>, cancel, no net motion.' },
        { front: 'Crystalline, polycrystalline, amorphous?', back: 'Orderly array throughout; <b>ordered in segments</b>; <b>no long-range order</b>.' },
        { front: 'Why do quartz, cristobalite and glass give different XRD patterns?', back: 'Same formula <b>SiO<sub>2</sub></b>, different structures: quartz and cristobalite give sharp peaks, glass a <b>broad hump</b>.' },
        { front: 'The three-part rule behind XRD?', back: 'Every crystalline substance gives a pattern; the same substance always gives the same pattern; in a mixture each gives its pattern <b>independently</b>.' },
        { front: 'Path difference in the Bragg derivation?', back: 'δ = CB + BD = d sin θ + d sin θ = <b>2d sin θ</b>.' },
        { front: "Bragg's law and its symbols?", back: '<b>2d sin θ = nλ</b>: d plane spacing, θ angle to the planes, λ wavelength, n integer (1, 2, 3…).' },
        { front: 'Nobel Prizes linked to XRD?', back: '<b>Max von Laue 1914</b> (X-ray diffraction); <b>W.H. and W.L. Bragg 1915</b> (crystal structure analysis).' },
        { front: 'd for λ = 0.9 Å, θ = 7°, n = 1?', back: 'd = 0.9 / (2 × 0.1218) = <b>3.69 Å</b> (page wrongly writes 10<sup>−10</sup> cm).' }
      ],
      oneLiners: [
        'Diffraction needs a slit or corner ≤ λ; crystal planes a few Å apart suit X-rays.',
        'In phase → constructive (bigger wave); out of phase → destructive (flat).',
        'Crystalline = orderly array; polycrystalline = ordered in segments; amorphous = no long-range order.',
        'SiO<sub>2</sub>: quartz and cristobalite give sharp peaks, glass a broad hump.',
        'XRD pattern of a pure substance = its fingerprint; in a mixture each phase shows independently.',
        "Bragg's law: δ = CB + BD = 2d sin θ = nλ.",
        'Laue: Nobel 1914; W.H. and W.L. Bragg: Nobel 1915.'
      ],
      formulas: [
        { name: "Bragg's law", html: `2d sin θ = nλ`, note: 'd = spacing between lattice planes, θ = angle to the planes, n = 1, 2, 3…' },
        { name: 'Plane spacing from Bragg', html: `d = <span class="frac"><span>nλ</span><span>2 sin θ</span></span>`, note: 'λ = 0.9 Å, θ = 7°, n = 1 gives d = 3.69 Å.' },
        { name: 'Path difference (Bragg geometry)', html: `δ = CB + BD = 2d sin θ`, note: 'Each of CB and BD equals d sin θ from triangles ACB and ADB.' }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: 'm4-xrd-patterns',
      title: 'Diffractometer & patterns',
      short: 'Diffractometer & peaks',
      blurb: 'What sits inside an X-ray diffractometer, how to read peak position, height and width off a diffractogram, how databases confirm a phase, and where XRD earns its keep.',
      source: 'Pages 33–34, 38',
      tabs: [
        { title: 'The diffractometer', html: `
          <p class="lead">An X-ray diffractometer is the instrument that <b>produces monochromatic X-rays</b>, focuses them on a sample, scans through a range of 2θ and records how strongly X-rays come back at each angle.</p>
          <ul>
            <li>Optics <b>focus the X-ray beam</b> on the sample.</li>
            <li>It <b>scans through a 2θ range</b>.</li>
            <li>The sample reflects X-rays into the detector, which records them and their <b>intensity</b>.</li>
            <li>It is attached to a <b>goniometer</b> for simultaneous scanning.</li>
            <li>It records <b>peak position and intensity</b> wherever constructive interference happens.</li>
            <li>The result is displayed on a <b>diffractogram</b>.</li>
          </ul>
          <figure data-fig="m4-diffractometer-layout"></figure>
          <h3>Following the beam, then the signal</h3>
          <ol class="steps">
            <li><b>High-voltage supply</b> Powers the X-ray tube.</li>
            <li><b>X-ray tube</b> Produces the X-rays.</li>
            <li><b>Primary filter</b> Removes unwanted wavelengths so the beam is monochromatic.</li>
            <li><b>Collimator</b> Narrows the beam into a thin, parallel pencil aimed at the sample.</li>
            <li><b>Sample</b> Diffracts X-rays at its Bragg angles.</li>
            <li><b>Detector and pre-amp</b> Turn each X-ray into an electrical pulse and boost it.</li>
            <li><b>Main amplifier and amplitude analyzer</b> Amplify the pulses and sort them by size.</li>
            <li><b>Control unit, communication module, PC</b> Run the scan and plot the diffractogram.</li>
          </ol>
          <div class="note why"><p>Why monochromatic: Bragg's law has a single λ in it. Send in many wavelengths and each diffracts at its own angle, smearing every peak. The filter strips most of the Kβ and the continuous background, leaving mainly Kα.</p></div>
        ` },
        { title: 'Goniometer & detector', html: `
          <p class="lead">The goniometer is the precision turntable that keeps the angles right: as the sample turns through <b>θ</b>, the detector swings through <b>2θ</b>.</p>
          <figure data-fig="m4-goniometer"></figure>
          <ul>
            <li>The <b>Göbel mirror</b> on the tube side is the optics that shapes the beam and focuses it on the sample.</li>
            <li>The <b>Soller slit</b>, a stack of thin parallel plates, passes only well-aligned rays to the detector.</li>
            <li>The detector reads the reflected X-rays at each 2θ.</li>
          </ul>
          <figure data-fig="m4-theta-2theta-geometry"></figure>
          <p>Here the X-ray source is fixed while the specimen holder and detector rotate about one axis. Rays reflected from atomic planes 1 and 2, spaced d<sub>hkl</sub> apart, differ in path by 2d<sub>hkl</sub> sin θ, the Bragg condition again.</p>
          <h3>Detector types</h3>
          <div class="chips"><span class="chip">Gas-filled</span><span class="chip">Scintillation</span><span class="chip">Semiconductor</span></div>
          <div class="note why"><p>Why the detector turns twice as far: the diffracted beam leaves the planes at θ on the other side, so it ends up 2θ away from the incoming beam. Keep the detector at 2θ and it always sits where a Bragg reflection would land.</p></div>
        ` },
        { title: 'Reading a diffractogram', html: `
          <p class="lead">An XRD plot is <b>signal intensity vs 2θ</b>. Every peak gives three readings: its position, its height and its width.</p>
          <figure data-fig="m4-xrd-peak-parameters"></figure>
          <table class="tbl">
            <thead><tr><th>Reading</th><th>What it tells you</th></tr></thead>
            <tbody>
              <tr><td>Peak position (2θ)</td><td>Where atoms sit within the lattice: each 2θ gives a <b>d-spacing</b> through Bragg's law</td></tr>
              <tr><td>Peak intensity</td><td>Tracks the <b>number of atoms in phase</b>; a taller peak means more crystals or molecules with that spacing</td></tr>
              <tr><td>Peak width</td><td><b>Inversely proportional</b> to crystal size</td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>Thin peak</h4><p><b>Larger crystal</b></p></div>
            <div class="side"><h4>Broad peak</h4><p><b>Smaller crystal</b>, defects, or amorphous nature</p></div>
          </div>
          <p>Try it: pull the crystallite size from 100 nm down to 2 nm and watch the peaks spread, then switch on amorphous for the glass-like hump. Hover a peak to read its 2θ, FWHM and D.</p>
          <div data-viz="xrd-pattern"></div>
          <div class="note trap"><p>The pattern above is labelled 2θ [Mo]: it was recorded with Mo Kα (0.71 Å). With Cu Kα (1.54 Å) the same planes diffract at larger 2θ, because sin θ = nλ/2d grows with λ. Check the anode before you compare two patterns.</p></div>
        ` },
        { title: 'Database matching', html: `
          <p class="lead">To identify an unknown, you <b>match its pattern</b> against reference patterns from the literature and from experiments.</p>
          <ul>
            <li>The unknown compound's pattern is compared with literature and experimental values.</li>
            <li>Identity is confirmed by matching the <b>location, width and relative heights</b> of the peaks.</li>
          </ul>
          <div class="kv">
            <div><span>JCPDS</span><b>Joint Committee on Powder Diffraction Standards</b></div>
            <div><span>ICSD</span><b>International Crystal Structure Database</b></div>
          </div>
          <figure data-fig="m4-nacl-pattern"></figure>
          <h3>A reference card: NaCl</h3>
          <div class="kv">
            <div><span>Structure</span><b>FCC</b></div>
            <div><span>Reference</span><b>ICSD Ref. #96-900-6377</b></div>
            <div><span>Cell edges</span><b>a = b = c = 5.64 Å</b></div>
            <div><span>Cell angles</span><b>α = β = γ = 90°</b></div>
            <div><span>Density</span><b>ρ = 2.14 g/cm<sup>3</sup></b></div>
            <div><span>Strongest peaks</span><b>(200), then (220)</b></div>
          </div>
          <p>Each peak is labelled with the Miller indices (hkl) of the planes that make it: (111), (200), (220), (311), (222), (400), (331), (420), (422) and (511).</p>
          <div class="note trap"><p>The page says the match "verifies element identity". Strictly, XRD identifies the <b>compound or phase</b>: NaCl as a crystal, quartz vs cristobalite, rather than a bare list of elements.</p></div>
          <div class="note heads-up"><p>ICSD officially stands for <b>Inorganic</b> Crystal Structure Database; the page expands it as "International". JCPDS is now run as the ICDD (International Centre for Diffraction Data), and its reference patterns are still called JCPDS cards.</p></div>
        ` },
        { title: 'Uses, pros & cons', html: `
          <p class="lead">XRD is the everyday tool for crystal structure: cheap, simple and nondestructive, with one weak spot, <b>light elements</b>.</p>
          <h3>Applications</h3>
          <ul>
            <li>Distinguishing <b>crystalline from amorphous</b> materials.</li>
            <li>Details of <b>unit cell dimensions</b>, atom positions and crystal symmetry.</li>
            <li>Determining the <b>texture</b> (preferred grain orientation) of polygrained materials.</li>
            <li>Measuring <b>strain</b> and small grain size.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Advantages</h4><ul><li><b>Lowest cost</b>, convenient, widely used for crystal structure determination</li><li><b>No significant air absorption</b>, so no evacuated chamber</li><li><b>Nondestructive</b> technique</li></ul></div>
            <div class="side"><h4>Disadvantage</h4><ul><li>X-rays <b>do not interact very strongly with lighter elements</b></li></ul></div>
          </div>
          <div class="note why"><p>X-rays scatter off electrons. Light atoms such as H, Li or B have very few, so they scatter weakly and are hard to locate next to heavy atoms.</p></div>
          <div class="note why"><p>Electron-beam methods (SEM, TEM) need a vacuum because air scatters electrons. X-rays near 1 Å cross air with little loss, so the sample can sit in the open.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'What does an X-ray diffractometer do?', back: 'Produces <b>monochromatic X-rays</b>, focuses them on the sample, scans a 2θ range, detects reflected X-rays and their intensity, shows a <b>diffractogram</b>.' },
        { front: 'Order of parts from tube to PC?', back: 'HV supply → X-ray tube → <b>primary filter</b> → <b>collimator</b> → sample → detector & pre-amp → main amplifier → amplitude analyzer → control unit → communication module → PC.' },
        { front: 'Three detector types?', back: '<b>Gas-filled</b>, <b>scintillation</b>, <b>semiconductor</b>.' },
        { front: 'Why is the diffractometer attached to a goniometer?', back: 'For <b>simultaneous scanning</b>: sample turns θ while the detector turns <b>2θ</b>.' },
        { front: 'What does peak position tell you?', back: 'Where atoms sit in the lattice, via the <b>d-spacing</b> (Bragg).' },
        { front: 'What does peak intensity tell you?', back: 'The <b>number of atoms in phase</b>; higher = more crystals/molecules with that spacing.' },
        { front: 'A broad peak suggests…', back: '<b>Smaller crystal</b>, defects, or amorphous nature (width ∝ 1/size).' },
        { front: 'JCPDS and ICSD stand for?', back: '<b>Joint Committee on Powder Diffraction Standards</b>; <b>International (officially Inorganic) Crystal Structure Database</b>.' },
        { front: 'NaCl reference data on the page?', back: '<b>FCC</b>, a = b = c = <b>5.64 Å</b>, α = β = γ = 90°, ρ = 2.14 g/cm<sup>3</sup>; strongest peak (200).' },
        { front: 'Four applications of XRD?', back: 'Crystalline vs amorphous; <b>unit cell</b>, atom positions, symmetry; <b>texture</b> of polygrained materials; <b>strain</b> and small grain size.' },
        { front: 'Advantages and the main disadvantage of XRD?', back: 'Lowest cost and convenient; <b>no evacuated chamber</b>; <b>nondestructive</b>. Weak with <b>lighter elements</b>.' }
      ],
      oneLiners: [
        'Diffractometer: monochromatic X-rays, scans 2θ, detector records peak position and intensity.',
        'Goniometer: sample at θ, detector at 2θ, for simultaneous scanning.',
        'Detectors: gas-filled, scintillation or semiconductor.',
        'XRD plot = intensity vs 2θ; position → lattice, intensity → atoms in phase, width → size.',
        'Peak width is inversely proportional to crystal size; broad = small crystal, defects or amorphous.',
        'Phase ID: match location, width and relative heights against JCPDS / ICSD.',
        'XRD: cheap, no vacuum, nondestructive; weak for light elements.'
      ],
      formulas: []
    },

    // ------------------------------------------------------------------
    {
      id: 'm4-scherrer',
      title: 'Crystallite size & Scherrer',
      short: 'Crystallite size',
      blurb: 'Crystallite vs grain vs particle and which instrument sees each, how peak broadening turns into a size through the Scherrer equation, and the p-XRD numerical worked through.',
      source: 'Pages 35–37',
      tabs: [
        { title: 'Crystallite, grain, particle', html: `
          <p class="lead">Crystallite, grain and particle are three sizes of "crystal", one inside the next. The right order is <b>particle ≥ grain ≥ crystallite > unit cell</b>.</p>
          <table class="tbl">
            <thead><tr><th></th><th>What it is</th><th>Measured by</th></tr></thead>
            <tbody>
              <tr><td>Crystallite</td><td>A small crystal of many atoms/molecules; the portion of the crystal that diffracts light <b>coherently</b></td><td><b>XRD</b>, Scherrer's formula</td></tr>
              <tr><td>Grain</td><td>Forms during crystal growth from <b>multiple nucleation centres</b>; contains multiple crystallites</td><td><b>SEM</b></td></tr>
              <tr><td>Particle</td><td>A single crystal or an <b>agglomeration of several grains</b>; grains combine to form particles</td><td><b>TEM</b></td></tr>
            </tbody>
          </table>
          <p>Particle size is <b>always larger</b> than crystallite size.</p>
          <figure data-fig="m4-particle-grain-crystallite"></figure>
          <figure data-fig="m4-sem-grains"></figure>
          <div class="note heads-up"><p>The page prints "Particle ≤ grain ≤ crystallite < unit cell", with every sign backwards. A particle holds grains and a grain holds crystallites, so it has to be <b>particle ≥ grain ≥ crystallite > unit cell</b>.</p></div>
          <div class="note why"><p>Why XRD only sees crystallites: X-rays diffract coherently only while the lattice runs on unbroken. A grain boundary or a defect resets the phase, so the size from Scherrer's formula is the size of those coherent blocks, not of the grain or the particle.</p></div>
          <p>Try it: click particle, then grain, then crystallite to zoom in one level at a time, and note which instrument measures each.</p>
          <div data-viz="size-hierarchy"></div>
          <div class="note trap"><p>A small Scherrer size does not mean small particles. TEM can show particles far bigger than D, each built from many crystallites.</p></div>
        ` },
        { title: 'Scherrer equation', html: `
          <p class="lead">Small crystallites give broad peaks. The <b>Scherrer equation</b> turns that broadening into a crystallite size, D.</p>
          <div class="eq" data-label="Scherrer equation">D = <span class="frac"><span>kλ</span><span>β cos θ</span></span></div>
          <div class="kv">
            <div><span>D</span><b>Crystallite size</b></div>
            <div><span>β</span><b>FWHM in radians</b></div>
            <div><span>θ</span><b>Bragg angle (half of 2θ)</b></div>
            <div><span>λ</span><b>X-ray wavelength</b></div>
            <div><span>k</span><b>Scherrer constant, depends on shape</b></div>
            <div><span>k for FWHM, spherical, cubic</span><b>0.94</b></div>
          </div>
          <figure data-fig="m4-fwhm-peak"></figure>
          <p><b>FWHM</b> (full width at half maximum) is the width of the peak measured at half its height, I<sub>max</sub>/2, above the background.</p>
          <figure data-fig="m4-peak-broadening"></figure>
          <div class="note why"><p>Why small means broad: in a big crystal thousands of planes scatter. Move slightly off the Bragg angle and the tiny mismatch from plane to plane adds up until the waves cancel, so the peak is sharp. With only a few planes the mismatch never builds up to full cancellation, and intensity survives over a wider range of angles.</p></div>
          <ol class="steps">
            <li><b>Halve 2θ</b> to get the Bragg angle θ.</li>
            <li><b>Convert FWHM</b> to radians: degrees × π/180.</li>
            <li><b>Match units</b>: λ in nm gives D in nm.</li>
            <li><b>Plug in</b> D = kλ / β cos θ.</li>
          </ol>
          <div class="note trap"><p>The two classic slips: leaving FWHM in degrees (D comes out about 57 times too small) and using cos 2θ instead of cos θ.</p></div>
          <figure data-fig="m4-scherrer-portrait"></figure>
        ` },
        { title: 'Worked problem', html: `
          <p class="lead">Estimate the crystallite size of a nanomaterial from its p-XRD peak. The whole job is <b>unit conversion, then one division</b>.</p>
          <p>Peak position 2θ = 21.61°, FWHM of sample = 2.51°, k = 0.9 and λ = 1.5406 Å (degree to radian = degree × π/180).</p>
          <div class="worked">
            <div class="given"><p>2θ = 21.61°, so θ = 10.805°; β = FWHM = 2.51° = 0.043825 rad; k = 0.9; λ = 1.5406 Å = 0.15406 nm</p></div>
            <div class="solve">
              <div class="eq">D = <span class="frac"><span>kλ</span><span>β cos θ</span></span></div>
              <div class="eq">cos 10.805° = 0.982257</div>
              <div class="eq">D = <span class="frac"><span>0.9 × 0.15406</span><span>0.043825 × 0.982257</span></span></div>
              <div class="eq">D = <span class="frac"><span>0.13865</span><span>0.043047</span></span></div>
            </div>
            <div class="result"><p>D ≈ <b>3.22 nm</b></p></div>
          </div>
          <div class="note heads-up"><p>The page's working lists k = 0.94 and writes 0.94 × 0.15406 on top, yet reports 3.22 nm. That answer only comes from <b>k = 0.9</b>, the value in the question. With 0.94 the same numbers give <b>3.36 nm</b>. Use the k the question gives and keep it the same all the way through. (0.043825 rad also comes from π ≈ 22/7; with π = 3.1416 it is 0.043808 rad, same answer to three figures.)</p></div>
          <p>Try it: load the Scherrer preset, then switch K between 0.9 and 0.94 to see where 3.22 nm and 3.36 nm come from. The Bragg side reruns the 0.9 Å, 7° problem from Bragg's law.</p>
          <div data-viz="xrd-calc"></div>
          <div class="note exam"><p>3.22 nm is well inside the nano range, which fits such a broad 2.51° peak. Write the formula, the converted θ and β, the substitution, then D with its unit.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'What is a crystallite, and how is its size found?', back: 'A small crystal of many atoms/molecules that <b>diffracts coherently</b>; size from the XRD peak via <b>Scherrer\'s formula</b>.' },
        { front: 'How do grains form, and what sees them?', back: 'From <b>multiple nucleation centres</b> during crystal growth; each holds many crystallites; measured by <b>SEM</b>.' },
        { front: 'What is a particle, and what sees it?', back: 'A single crystal or an <b>agglomeration of grains</b>; always larger than a crystallite; measured by <b>TEM</b>.' },
        { front: 'Correct size order (the page prints it reversed)?', back: '<b>Particle ≥ grain ≥ crystallite > unit cell</b>.' },
        { front: 'Scherrer equation and its terms?', back: '<b>D = kλ / β cos θ</b>: β = FWHM in radians, θ = Bragg angle, λ = X-ray wavelength, k = shape constant.' },
        { front: 'Value of k for FWHM of spherical cubic crystals?', back: '<b>0.94</b> (k depends on shape).' },
        { front: 'What is FWHM?', back: 'Full width at half maximum: peak width at <b>I<sub>max</sub>/2</b> above background.' },
        { front: 'Crystallite size for 2θ = 21.61°, FWHM = 2.51°, k = 0.9, λ = 1.5406 Å?', back: 'θ = 10.805°, β = 0.043825 rad, D = <b>3.22 nm</b> (with k = 0.94 it would be 3.36 nm).' },
        { front: 'Who gave the crystallite-size equation?', back: '<b>P.H. Scherrer</b> (1890–1969).' }
      ],
      oneLiners: [
        'Crystallite (XRD, Scherrer) ≤ grain (SEM) ≤ particle (TEM); all > unit cell.',
        'Grains grow from multiple nucleation centres; particles are single crystals or grain agglomerates.',
        'Scherrer: D = kλ / β cos θ, β = FWHM in radians, θ = Bragg angle.',
        'k depends on shape; 0.94 for FWHM of spherical crystals with cubic symmetry.',
        'Narrow peak → big crystallite; broad peak → small crystallite.',
        'p-XRD example: 2θ = 21.61°, FWHM = 2.51°, λ = 1.5406 Å → D ≈ 3.22 nm.'
      ],
      formulas: [
        { name: 'Scherrer equation', html: `D = <span class="frac"><span>kλ</span><span>β cos θ</span></span>`, note: 'β = FWHM in radians, θ = half the 2θ peak position, k ≈ 0.94 (spherical, cubic) or as given.' },
        { name: 'Degrees to radians', html: `β (rad) = β (°) × <span class="frac"><span>π</span><span>180</span></span>`, note: '2.51° → 0.0438 rad.' }
      ]
    }
  ],

  figures: [
    { id: 'm4-xray-em-uses', src: 'm4/pages/p27.png', crop: [0.028, 0.475, 0.49, 0.475],
      caption: 'Soft X-rays border the UV and hard X-rays run into the gamma region. Crystallography, mammography, medical CT and airport security each work in a different slice of photon energy.',
      alt: 'Wavelength and photon-energy scale from visible light to gamma rays with soft and hard X-ray bands marked, and arrows to four example images: an X-ray crystallography spot pattern, a mammogram, a CT scan of a neck and an airport baggage scan.' },
    { id: 'm4-first-radiograph', src: 'm4/images/p27_12a73154.jpeg', crop: null,
      caption: 'The first radiograph of a human body: the hand of Anna Bertha Ludwig, Röntgen\'s wife. Bone and her ring show up because they absorb X-rays more strongly than flesh.',
      alt: 'Old X-ray image of a hand with a ring on one finger, with small portraits of Anna Bertha Ludwig and Wilhelm Röntgen beside it.' },
    { id: 'm4-xray-tube-schematic', src: 'm4/images/p29_64a8e7c7.png', crop: null,
      caption: 'Heated cathode on the left, water-cooled anode target on the right, vacuum in between. The high voltage pulls electrons across, and X-rays leave where they hit the metal target.',
      alt: 'Schematic of an X-ray tube: a heated filament cathode, electrons travelling right to an angled water-cooled anode, a high-voltage supply across the two, the vacuum inside, and a fan of X-rays leaving downward.' },
    { id: 'm4-xray-tube-photos', src: 'm4/pages/p29.png', crop: [0.345, 0.54, 0.375, 0.44],
      caption: 'A recent sealed tube with its cathode, anode and X-ray exit marked, next to an old Crookes tube, the glass bulb type Röntgen-era X-rays came from.',
      alt: 'Two photographs: a modern metal-and-glass X-ray tube with arrows labelling X-rays, anode and cathode, and an old egg-shaped glass Crookes tube with electrodes.' },
    { id: 'm4-bremsstrahlung', src: 'm4/images/p28_0897309d.jpeg', crop: null,
      caption: 'Electrons that pass close to the nucleus are bent hard and give off high-energy photons; distant ones lose little and give low-energy photons. Together they make the continuous spectrum.',
      alt: 'Incident electrons passing a nucleus at different distances, bending by different amounts and emitting wavy X-ray photons labelled highest, medium and lowest energy, bracketed as continuous X-rays.' },
    { id: 'm4-characteristic-emission', src: 'm4/images/p28_d5a10600.jpeg', crop: null,
      caption: 'The incoming electron ejects a K-shell electron and scatters away; an outer electron falls into the hole and releases a characteristic X-ray photon.',
      alt: 'Atom with nucleus and K, L, M shells; an incident electron knocks out an inner electron (ejected electron), the incident electron scatters, and an electron dropping inward emits a characteristic X-ray photon.' },
    { id: 'm4-line-spectrum', src: 'm4/images/p28_22b6423b.jpeg', crop: null,
      caption: 'X-ray intensity against wavelength: a smooth continuous hump with sharp K and L lines on top. The energy-level ladder on the right shows the electron drops into the L and K shells that make those lines.',
      alt: 'Graph of X-ray intensity vs wavelength showing a continuous curve with sharp K and L peaks, a strip showing the X-ray spectrum with lines, and an atomic energy-level diagram with N, M, L and K levels and downward arrows.' },
    { id: 'm4-diffraction-door', src: 'm4/images/p30_6ad818ca.jpeg', crop: null,
      caption: 'Light spreading through a door opening into a dark room: the everyday face of diffraction around corners.',
      alt: 'Dark room with a partly open door; bright light spills through the gap and spreads across the floor.' },
    { id: 'm4-interference-waves', src: 'm4/images/p30_a71dd75a.png', crop: null,
      caption: 'Two in-phase waves add into one taller wave; two out-of-phase waves cancel to a flat line.',
      alt: 'Two sine waves added to give a larger sine wave, labelled constructive interference, and two opposite sine waves added to give a flat line, labelled destructive interference.' },
    { id: 'm4-young-double-slit', src: 'm4/images/p30_46a9816d.jpeg', crop: null,
      caption: 'Young\'s double slit: coherent laser light passes two slits, the spreading waves overlap, and the screen shows bright bands where they reinforce and dark bands where they cancel.',
      alt: 'Coherent laser light hits a barrier with two slits; circular waves spread from each slit and overlap, with lines marking constructive and destructive interference, and a strip of red and dark fringes on the screen.' },
    { id: 'm4-microstructure-types', src: 'm4/images/p31_51b28890.jpeg', crop: null,
      caption: 'Crystalline: one regular array. Polycrystalline: ordered patches at different angles. Amorphous: no long-range order at all.',
      alt: 'Three groups of red spheres: a perfectly regular stack labelled crystalline, patches of regular stacks meeting at angles labelled polycrystalline, and a random packing labelled amorphous.' },
    { id: 'm4-sio2-patterns', src: 'm4/pages/p31.png', crop: [0.645, 0.345, 0.325, 0.4255],
      caption: 'Three forms of SiO₂. Quartz and cristobalite each give sharp peaks at their own 2θ values; glass gives only a broad hump.',
      alt: 'Photos of quartz crystals, cristobalite and glass pieces beside their XRD patterns from 15 to 40 degrees two-theta: quartz with a tall sharp peak, cristobalite with a sharp peak at a lower angle, and glass with one broad hump.' },
    { id: 'm4-xrd-mixture', src: 'm4/images/p31_db13d725.jpeg', crop: null,
      caption: 'XRD pattern of an SiO₂ mixture: sharp crystalline peaks riding on the broad glass hump.',
      alt: 'Green XRD pattern labelled mixture: a broad hump with two tall sharp peaks and a few small ones on top.' },
    { id: 'm4-bragg-geometry', src: 'm4/images/p32_a397e79b.png', crop: null,
      caption: 'Rays reflect at A on the top plane and at B on the next plane down. The lower ray\'s extra path is CB + BD, each equal to d sin θ. Top: a path difference of nλ gives a bigger wave; anything else cancels.',
      alt: 'Two parallel (hkl) planes a distance d apart; incident wave front E and E-prime reflecting at A and B at angle theta toward reflected wave front F and F-prime; red lines from A to C and D on the lower ray, 2 theta marked at B, and small wave sketches for path difference equal to and not equal to n lambda.' },
    { id: 'm4-nobel-xrd', src: 'm4/images/p32_98fdfede.jpeg', crop: null,
      caption: 'Max von Laue (Nobel 1914), and W.H. Bragg and W.L. Bragg, father and son (Nobel 1915).',
      alt: 'Three black-and-white portrait photographs of men in suits.' },
    { id: 'm4-diffractometer-layout', src: 'm4/images/p33_6d444e9b.jpeg', crop: null,
      caption: 'The beam path runs from the X-ray tube through the primary filter and collimator to the sample; the signal path runs from the detector through the amplifiers and control unit to the PC.',
      alt: 'Block layout: high voltage supply feeding an X-ray tube, beam through a primary filter and collimator onto a ring-shaped sample, reflected into a detector and pre-amp, then main amplifier, amplitude analyzer, control unit, communication module and a PC.' },
    { id: 'm4-goniometer', src: 'm4/images/p33_1e957b11.jpeg', crop: null,
      caption: 'A lab diffractometer: X-ray tube and Göbel mirror on one arm, the sample at the centre of the goniometer circle, Soller slit and detector on the other arm at 2θ.',
      alt: 'Cutaway drawing of a diffractometer with the X-ray tube and Gobel mirror on the left arm, a circular goniometer with the sample at its centre, and the Soller slit and detector on the right arm, with the angle 2 theta marked.' },
    { id: 'm4-theta-2theta-geometry', src: 'm4/images/p33_e3faee3b.jpeg', crop: null,
      caption: 'Fixed source, rotating specimen holder, rotating detector. Incident X-rays meet atomic planes 1 and 2 at θ, the diffracted beam leaves at 2θ, and the planes are d_hkl apart.',
      alt: 'Semicircular goniometer with a fixed X-ray source on the left and a rotating detector on the right; incident and diffracted rays meet two atomic planes, with theta, 2 theta, d_hkl and d_hkl sin theta labelled above a rotating specimen holder.' },
    { id: 'm4-xrd-peak-parameters', src: 'm4/images/p34_4b80fb80.jpeg', crop: null,
      caption: 'A diffractogram recorded with Mo radiation. Read each peak for its position on the 2θ axis, its intensity (height) and its width.',
      alt: 'XRD pattern of intensity against 2 theta from 10 to 30 degrees with Mo radiation, with arrows labelling peak intensity at the tallest peak, peak position on the axis and peak width on a peak near 25 degrees.' },
    { id: 'm4-nacl-pattern', src: 'm4/images/p34_50f24d26.png', crop: null,
      caption: 'Reference pattern of NaCl (FCC, a = 5.64 Å). Each peak carries the Miller indices of its planes; (200) is the strongest, then (220).',
      alt: 'NaCl XRD pattern from 10 to 90 degrees two-theta with peaks labelled (111), (200), (220), (311), (222), (400), (331), (420), (422), (511), a ball model of the FCC cell, and cell data a = b = c = 5.64 angstrom, angles 90 degrees, density 2.14.' },
    { id: 'm4-particle-grain-crystallite', src: 'm4/images/p35_90191423.png', crop: null,
      caption: 'One particle (black outline) is split into grains (blue boundaries); inside a grain, the red block is a crystallite with column length D, built from planes a lattice spacing d apart.',
      alt: 'Oval particle divided by blue lines into grains; one grain holds a red grid crystallite with a lattice spacing d, column length D and length L marked, and brackets on the right for grain size and particle size.' },
    { id: 'm4-sem-grains', src: 'm4/images/p35_85ad1257.jpeg', crop: null,
      caption: 'SEM image of a polished polycrystalline surface (10 µm scale bar). Each cell is a grain, and the lines between them are grain boundaries.',
      alt: 'Grey SEM micrograph of polygonal grains separated by thin boundary lines, one boundary labelled, with a 10 micrometre scale bar.' },
    { id: 'm4-fwhm-peak', src: 'm4/images/p36_b5742353.jpeg', crop: null,
      caption: 'FWHM is the peak width at half the maximum height (I_max/2), measured above the background. The integral breadth is the other width measure, based on peak area.',
      alt: 'Single bell-shaped peak of intensity against angle 2 theta, with the peak position 2 theta, I max, I max over 2, the FWHM arrow, integral breadth box, peak area and hatched background labelled.' },
    { id: 'm4-peak-broadening', src: 'm4/pages/p36.png', crop: [0.69, 0.075, 0.28, 0.905],
      caption: 'A perfect, continuous lattice gives thin line peaks. Break it into smaller, slightly tilted blocks and the peaks at the same Bragg angles get wider.',
      alt: 'Three stacked panels: a single regular grid above sharp line peaks, a grid with a slight break above narrow peaks, and a grid broken into several blocks above broad peaks, each plotted as intensity against Bragg angle.' },
    { id: 'm4-scherrer-portrait', src: 'm4/pages/p36.png', crop: [0.055, 0.445, 0.15, 0.4],
      caption: 'P.H. Scherrer (1890–1969), who linked peak width to crystallite size.',
      alt: 'Black-and-white portrait photograph of P.H. Scherrer with his name and dates below.' }
  ]
});
