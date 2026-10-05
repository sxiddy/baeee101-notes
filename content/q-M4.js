QUESTIONS({
  chunk: 'M4',
  questions: [
    {
      id: 'm4-q-01', module: 'm4', topic: 'm4-emr-regions', type: 'numerical', level: 2,
      q: `<p>A water-disinfection lamp emits at <b>250 nm</b>. The plant manager asks for the photon's frequency, energy (in J, eV and kJ/mol) and which region it belongs to. Work it out.</p>`,
      options: null, correct: null,
      answer: `<p>ν ≈ <b>1.20 × 10<sup>15</sup> Hz</b>, E ≈ <b>7.95 × 10<sup>−19</sup> J ≈ 4.96 eV ≈ 479 kJ/mol</b>, in the <b>ultraviolet</b>.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>λ = 250 nm = 2.50 × 10<sup>−7</sup> m</li><li>c = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>, h = 6.626 × 10<sup>−34</sup> J s, 1 eV = 96.48 kJ/mol</li></ul></div><div class="solve"><div class="eq">ν = c/λ = 3.00 × 10<sup>8</sup> / 2.50 × 10<sup>−7</sup> = 1.20 × 10<sup>15</sup> s<sup>−1</sup></div><div class="eq">E = hν = 6.626 × 10<sup>−34</sup> × 1.20 × 10<sup>15</sup> = 7.95 × 10<sup>−19</sup> J</div><div class="eq">E = 7.95 × 10<sup>−19</sup> / 1.602 × 10<sup>−19</sup> = 4.96 eV → 4.96 × 96.48 ≈ 479 kJ/mol</div></div><div class="result"><b>UV photon, ≈ 4.96 eV</b></div></div>`,
      points: ['ν = c/λ with λ in metres', 'E = hν', 'Unit conversion eV ↔ kJ/mol (96.48)', '250 nm lies in the UV (UV-Vis range 200–700 nm)']
    },
    {
      id: 'm4-q-02', module: 'm4', topic: 'm4-beer-lambert', type: 'numerical', level: 3,
      q: `<p>A lab tests a dye effluent (ε = <b>12,000 L mol<sup>−1</sup> cm<sup>−1</sup></b> at λ<sub>max</sub>, 1 cm cuvette). The raw sample reads A = 2.4, which the technician says is too dark to trust, so she <b>dilutes it 10 times</b> and reads A = 0.24. What is the dye concentration in the original effluent?</p>`,
      options: ['2.0 × 10⁻⁵ M', '2.0 × 10⁻⁴ M', '2.0 × 10⁻³ M', '2.9 × 10⁻⁴ M'],
      correct: 1,
      answer: `<p><b>2.0 × 10<sup>−4</sup> M.</b> The diluted sample is 2.0 × 10<sup>−5</sup> M; multiply back by the dilution factor.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>A = 0.24 (diluted), ε = 12,000, L = 1 cm, dilution × 10</li></ul></div><div class="solve"><div class="eq">c = A/εL = 0.24 / (12,000 × 1) = 2.0 × 10<sup>−5</sup> mol L<sup>−1</sup></div><div class="eq">c<sub>original</sub> = 10 × 2.0 × 10<sup>−5</sup> = 2.0 × 10<sup>−4</sup> mol L<sup>−1</sup></div></div><div class="result"><b>2.0 × 10<sup>−4</sup> M</b></div></div><p>A = 2.4 means only about 0.4% of the light gets through (T = 10<sup>−2.4</sup>), so the detector reading is noisy. Diluting into a lower absorbance range and scaling back is standard practice.</p>`,
      points: ['A = εLC, c = A/εL', 'Measure at λmax', 'Correct for the dilution factor', 'High A means very little transmitted light']
    },
    {
      id: 'm4-q-03', module: 'm4', topic: 'm4-uv-vis', type: 'interpret', level: 2,
      q: `<p>Adding an –OH group to an aromatic compound moves its absorption maximum from 255 nm to 270 nm and makes the band taller. Name both shifts and the role the –OH group plays.</p>`,
      options: ['Hypsochromic and hypochromic; –OH is a chromophore', 'Bathochromic and hyperchromic; –OH is an auxochrome', 'Bathochromic and hypochromic; –OH is a chromogen', 'Hypsochromic and hyperchromic; –OH is an auxochrome'],
      correct: 1,
      answer: `<p><b>Bathochromic (red) shift and hyperchromic shift</b>, caused by –OH acting as an <b>auxochrome</b>.</p>`,
      explain: `<p>Moving λ<sub>max</sub> to a longer wavelength is a bathochromic or red shift, often caused by an auxochrome or a change of solvent. An increase in intensity is a hyperchromic shift, and an auxochrome usually boosts absorption intensity. An auxochrome (–OH, –NH<sub>2</sub>, –COOH, –NR<sub>2</sub>, –SO<sub>3</sub>H) does not absorb much by itself but modifies how the attached chromophore absorbs. Chromophore + auxochrome together make a chromogen.</p>`,
      points: ['Longer λ = bathochromic (red)', 'Higher intensity = hyperchromic', 'Auxochrome modifies a chromophore', 'Chromophore + auxochrome = chromogen']
    },
    {
      id: 'm4-q-04', module: 'm4', topic: 'm4-uv-vis-instrument', type: 'interpret', level: 2,
      q: `<p>An unknown organic liquid shows <b>no absorption maximum above 200 nm</b>. A colleague insists it is benzaldehyde. What can you conclude?</p>`,
      options: null, correct: null,
      answer: `<p>It is <b>not benzaldehyde</b>: the sample contains no conjugated chromophore, no aldehyde or keto group and no benzene ring.</p>`,
      explain: `<p>One application in the notes: a compound that shows no λ<sub>max</sub> above 200 nm cannot contain a conjugated chromophore, aldehyde, keto group or benzene ring. Benzaldehyde has both a benzene ring and a C=O conjugated with it, so it would absorb well above 200 nm (π→π* and n→π* bands). The unknown is more likely a saturated compound whose only transitions are σ→σ* or n→σ*, which mostly lie below 200 nm.</p>`,
      points: ['No λmax > 200 nm → no conjugation, no C=O, no aromatic ring', 'Benzaldehyde has both', 'Saturated compounds: σ→σ* (100–150 nm), n→σ* (150–250 nm)']
    },
    {
      id: 'm4-q-05', module: 'm4', topic: 'm4-uv-vis-instrument', type: 'decide', level: 2,
      q: `<p>A tautomer mixture shows a weak band at <b>275 nm (ε ≈ 20)</b> and a strong band at <b>245 nm (ε ≈ 1800)</b>. After changing the solvent the 245 nm band grows and the 275 nm band shrinks. Which form has become more abundant?</p>`,
      options: ['The keto form', 'The enol form', 'Neither, the solvent only shifts bands', 'Both forms equally'],
      correct: 1,
      answer: `<p><b>The enol form.</b></p>`,
      explain: `<p>The keto form has an isolated C=O and gives a low-intensity band at 275 nm (ε = 20, a weak n→π*). The enol has a conjugated double bond and gives a high-intensity band at 245 nm (ε = 1800). A growing 245 nm band means more enol. Intensity (ε) tells you how allowed the transition is: ≤ 10 forbidden, 10–1000 partly allowed, 1000–100,000 allowed.</p>`,
      points: ['Keto: 275 nm, ε = 20', 'Enol: 245 nm, ε = 1800 (conjugated)', 'ε reflects transition probability', 'Keto–enol distinction is a listed UV-Vis application']
    },
    {
      id: 'm4-q-06', module: 'm4', topic: 'm4-uv-vis', type: 'explain', level: 1,
      q: `<p>A student says "methylene blue looks blue because it absorbs blue light". Correct the student using the colour–absorption relationship.</p>`,
      options: null, correct: null,
      answer: `<p>It is the other way round: methylene blue <b>absorbs 600–700 nm (orange–red)</b> and we see the <b>complementary colour, blue</b>.</p>`,
      explain: `<p>A coloured solution absorbs one band of visible light and transmits the rest. What reaches the eye is the complementary colour, opposite on the colour wheel. Congo red absorbs near 500 nm (green) and looks red. Chlorophyll absorbs red and blue and looks green.</p>`,
      points: ['Seen colour = complementary to absorbed colour', 'Methylene blue absorbs 600–700 nm', 'Congo red absorbs ~500 nm, looks red', 'Chlorophyll absorbs red + blue, looks green']
    },
    {
      id: 'm4-q-07', module: 'm4', topic: 'm4-bragg', type: 'numerical', level: 2,
      q: `<p>A powder diffractometer with a <b>Cu Kα source (λ = 1.5406 Å)</b> shows a first-order peak at <b>2θ = 38.2°</b>. What is the spacing of the planes that produced it?</p>`,
      options: ['1.18 Å', '2.35 Å', '4.71 Å', '1.25 Å'],
      correct: 1,
      answer: `<p><b>d ≈ 2.35 Å.</b> Remember to halve 2θ first.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>λ = 1.5406 Å, n = 1, 2θ = 38.2° so θ = 19.1°</li></ul></div><div class="solve"><div class="eq">d = <span class="frac"><span>nλ</span><span>2 sin θ</span></span> = <span class="frac"><span>1.5406</span><span>2 × sin 19.1°</span></span> = <span class="frac"><span>1.5406</span><span>2 × 0.3272</span></span></div></div><div class="result"><b>d ≈ 2.35 Å</b></div></div><p>Using 38.2° directly in sin θ would give 1.25 Å, a common slip.</p>`,
      points: ['Bragg: 2d sin θ = nλ', 'Diffractometer reports 2θ; use θ = 2θ/2', 'Cu Kα = 1.5406 Å (8.04 keV)', 'Keep units in Å']
    },
    {
      id: 'm4-q-08', module: 'm4', topic: 'm4-scherrer', type: 'numerical', level: 3,
      q: `<p>An oxide powder's XRD peak at <b>2θ = 38.2°</b> has FWHM <b>0.40°</b>. After ten hours of ball milling the same peak has FWHM <b>1.20°</b> (same position). Using Scherrer (k = 0.94, λ = 0.15406 nm), estimate the crystallite size before and after. Did milling work?</p>`,
      options: null, correct: null,
      answer: `<p>About <b>22 nm before</b> and <b>7.3 nm after</b>. Yes: the peak broadened threefold, so crystallites are about three times smaller.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>θ = 19.1°, cos θ = 0.9449</li><li>β<sub>1</sub> = 0.40° × π/180 = 6.98 × 10<sup>−3</sup> rad; β<sub>2</sub> = 1.20° = 2.094 × 10<sup>−2</sup> rad</li></ul></div><div class="solve"><div class="eq">D = <span class="frac"><span>kλ</span><span>β cos θ</span></span> = <span class="frac"><span>0.94 × 0.15406</span><span>6.98 × 10<sup>−3</sup> × 0.9449</span></span> ≈ 22 nm</div><div class="eq">D<sub>after</sub> = <span class="frac"><span>0.1448</span><span>2.094 × 10<sup>−2</sup> × 0.9449</span></span> ≈ 7.3 nm</div></div><div class="result"><b>22 nm → 7.3 nm</b></div></div><p>Peak width is inversely proportional to crystallite size. FWHM must be in radians; θ is half of 2θ.</p>`,
      points: ['D = kλ/β cos θ', 'β in radians, θ = Bragg angle (half of 2θ)', 'Broader peak → smaller crystallite', 'Links XRD (M4) to top-down milling (M3)']
    },
    {
      id: 'm4-q-09', module: 'm4', topic: 'm4-scherrer', type: 'interpret', level: 3,
      q: `<p>TEM images of a powder show particles about <b>200 nm</b> across, but Scherrer analysis of its XRD pattern gives <b>20 nm</b>. A reviewer calls this a contradiction. Is it?</p>`,
      options: ['Yes, one of the measurements must be wrong', 'No: a particle can be an agglomerate of grains, each made of smaller coherently diffracting crystallites', 'No, because XRD always overestimates size', 'Yes, crystallite size must equal particle size'],
      correct: 1,
      answer: `<p><b>No contradiction.</b> XRD measures crystallites, TEM measures whole particles, and particle ≥ grain ≥ crystallite.</p>`,
      explain: `<p>A crystallite is the portion of a crystal that diffracts coherently, and Scherrer's equation measures that. Grains form from multiple nucleation centres and contain several crystallites (seen by SEM). Particles are single crystals or agglomerations of several grains (seen by TEM), so particle size is always larger than or equal to crystallite size. The slide prints the chain the wrong way round; the correct order is particle ≥ grain ≥ crystallite > unit cell.</p>`,
      points: ['XRD / Scherrer → crystallite size', 'SEM → grain size, TEM → particle size', 'Particle ≥ grain ≥ crystallite > unit cell', 'Particles can be agglomerates']
    },
    {
      id: 'm4-q-10', module: 'm4', topic: 'm4-bragg', type: 'interpret', level: 2,
      q: `<p>Two SiO<sub>2</sub> samples look identical as white powders. One XRD pattern has <b>sharp peaks</b>, the other only a <b>broad hump</b>. What does each tell you?</p>`,
      options: null, correct: null,
      answer: `<p>Sharp peaks: <b>crystalline</b> SiO<sub>2</sub> (for example quartz or cristobalite). Broad hump: <b>amorphous</b> SiO<sub>2</sub> (glass).</p>`,
      explain: `<p>Sharp peaks need long-range order: regular planes that satisfy Bragg's law 2d sin θ = nλ at definite angles. An amorphous solid has no long-range order, so there are no distinct plane spacings and only a broad hump appears. Distinguishing crystalline from amorphous materials is the first XRD application listed, and since each crystalline substance gives its own fingerprint pattern, the peak positions could then be matched against JCPDS/ICSD to name the phase.</p>`,
      points: ['Same formula, different structure', 'Crystalline → sharp Bragg peaks', 'Amorphous → broad hump, no long-range order', 'Phase ID by matching JCPDS / ICSD']
    },
    {
      id: 'm4-q-11', module: 'm4', topic: 'm4-xrays', type: 'explain', level: 2,
      q: `<p>An X-ray tube's output spectrum shows a smooth, broad background with <b>two sharp spikes</b> on top. Explain the origin of each and which one crystallographers use.</p>`,
      options: null, correct: null,
      answer: `<p>The smooth background is <b>Bremsstrahlung (continuous)</b>; the spikes are <b>characteristic Kα and Kβ lines</b>. XRD uses the characteristic line, usually Cu Kα.</p>`,
      explain: `<p>Continuous or "white" radiation comes from electrons slowing down in the electric field of the target nuclei, losing kinetic energy as X-rays of all wavelengths. Characteristic lines appear when an incoming electron knocks out a K-shell electron and an outer electron drops in: L → K gives Kα, M → K gives Kβ. These lines are sharp and fixed for each anode metal, so they give the monochromatic beam XRD needs; Cu Kα is 8.04 keV, 1.5406 Å.</p>`,
      points: ['Bremsstrahlung: deceleration near nucleus, continuous', 'Characteristic: inner-shell vacancy filled', 'L→K = Kα, M→K = Kβ', 'Cu Kα 1.5406 Å used for XRD']
    },
    {
      id: 'm4-q-12', module: 'm4', topic: 'm4-xrd-patterns', type: 'decide', level: 2,
      q: `<p>A lab has to identify an unknown crystalline mineral quickly, cheaply and without destroying the only sample. Is XRD a good choice, and is there any kind of sample for which it would struggle?</p>`,
      options: null, correct: null,
      answer: `<p><b>Yes.</b> XRD is low cost, needs no vacuum and is nondestructive. It struggles with <b>light elements</b>, which interact weakly with X-rays.</p>`,
      explain: `<p>The unknown's peak positions, widths and relative heights are matched against standard patterns in JCPDS or ICSD, which identifies the phase like a fingerprint. The notes list the advantages (lowest cost, convenient, widely used, no significant air absorption so no evacuated chamber, nondestructive) and the main disadvantage: X-rays do not interact very strongly with lighter elements.</p>`,
      points: ['Fingerprint matching with JCPDS / ICSD', 'Cheap, no vacuum, nondestructive', 'Weak for light elements']
    }
  ]
});
