SUMMARY({
  module: 'm4',
  tldr: `<p>Spectroscopy is <b>light meeting matter</b>: a photon is absorbed only when <b>hν = ΔE</b>. UV-Vis (200–700 nm) excites valence electrons, and Beer–Lambert (<b>A = εLC</b>) turns absorbance into concentration. XRD uses X-rays with wavelengths close to atomic spacings: planes reflect in step when <b>2d sin θ = nλ</b>, giving a fingerprint pattern, and peak width gives crystallite size through the Scherrer equation.</p>`,
  storyline: [
    { title: 'EMR', html: `<p>c = λν, E = hν; each region probes a different molecular effect.</p>` },
    { title: 'UV-Vis', html: `<p>Electronic transitions, chromophores and shifts; colour is the complement of what is absorbed.</p>` },
    { title: 'Quantify', html: `<p>Beer–Lambert with a single- or double-beam spectrophotometer.</p>` },
    { title: 'X-rays', html: `<p>Made in a tube: continuous radiation plus characteristic Kα/Kβ lines.</p>` },
    { title: 'XRD', html: `<p>Bragg for peak positions, Scherrer for sizes, JCPDS/ICSD for identity.</p>` }
  ],
  bigIdeas: [
    { title: 'Spectroscopy and EMR', topic: 'm4-spectroscopy', html: `<p>EMR is a wave in space and a <b>photon</b> in matter. <b>c = λν</b>, <b>E = hν</b>. Six interactions: absorption, emission, transmission, reflection, scattering, refraction.</p>` },
    { title: 'Regions', topic: 'm4-emr-regions', html: `<p>Radio (NMR) → microwave → IR (vibration) → UV-Vis (electronic) → X-ray (diffraction) → gamma. <b>1 eV = 96.48 kJ/mol</b>.</p>` },
    { title: 'UV-Vis transitions', topic: 'm4-uv-vis', html: `<p>Energy order <b>σ→σ* &gt; n→σ* &gt; π→π* &gt; n→π*</b>. Red shift = bathochromic, blue = hypsochromic; intensity up = hyperchromic.</p>` },
    { title: 'Beer–Lambert', topic: 'm4-beer-lambert', html: `<p><b>A = εLC = log(I<sub>0</sub>/I)</b>. ε in L mol<sup>−1</sup> cm<sup>−1</sup>, L in cm, C in mol/L.</p>` },
    { title: 'Instruments and uses', topic: 'm4-uv-vis-instrument', html: `<p>Source → monochromator → sample (and reference in double beam) → detector. Uses: concentration, conjugation, cis/trans, keto/enol, charge transfer.</p>` },
    { title: 'X-rays', topic: 'm4-xrays', html: `<p>0.01–10 nm. W filament, 25–150 kV. <b>Bremsstrahlung</b> is continuous, <b>Kα/Kβ</b> characteristic. Cu Kα = 1.5406 Å.</p>` },
    { title: 'Bragg law', topic: 'm4-bragg', html: `<p><b>2d sin θ = nλ</b>: the path difference equals a whole number of wavelengths. Crystalline gives sharp peaks, amorphous a hump.</p>` },
    { title: 'Patterns', topic: 'm4-xrd-patterns', html: `<p>Position → spacing, intensity → atoms in phase, <b>width → size</b>. Match with JCPDS/ICSD. Cheap and nondestructive, weak for light elements.</p>` },
    { title: 'Scherrer', topic: 'm4-scherrer', html: `<p><b>D = kλ/β cos θ</b>, β in radians, k = 0.94. Particle ≥ grain ≥ crystallite &gt; unit cell.</p>` }
  ],
  compare: [
    { title: 'UV-Vis vs XRD', html: `<table class="tbl"><thead><tr><th></th><th>UV-Vis</th><th>XRD</th></tr></thead><tbody><tr><td>Radiation</td><td>200–700 nm</td><td>X-rays, 1.5406 Å (Cu Kα)</td></tr><tr><td>What happens</td><td>Electronic absorption</td><td>Diffraction by lattice planes</td></tr><tr><td>Key law</td><td>A = εLC</td><td>2d sin θ = nλ</td></tr><tr><td>Tells you</td><td>Concentration, conjugation</td><td>Phase, lattice, crystallite size</td></tr></tbody></table>` },
    { title: 'The four shifts', html: `<table class="tbl"><thead><tr><th>Shift</th><th>Change</th></tr></thead><tbody><tr><td>Bathochromic</td><td>λmax longer (red)</td></tr><tr><td>Hypsochromic</td><td>λmax shorter (blue)</td></tr><tr><td>Hyperchromic</td><td>Intensity up</td></tr><tr><td>Hypochromic</td><td>Intensity down</td></tr></tbody></table>` }
  ],
  numbers: [
    { value: '2.9979 × 10⁸ m/s', what: 'Speed of light' }, { value: '96.48 kJ/mol', what: 'Equal to 1 eV' },
    { value: '200–700 nm', what: 'UV-Vis range' }, { value: '100–150 nm', what: 'σ→σ* transitions' },
    { value: '8.33 × 10⁻⁵ M', what: 'Beer–Lambert example (A 0.70, ε 8400)' }, { value: '325 / 351 nm', what: 'Vitamin A₁ / A₂' },
    { value: '0.01–10 nm', what: 'X-ray wavelength' }, { value: '25–150 kV', what: 'X-ray tube voltage' },
    { value: '1.5406 Å, 8.04 keV', what: 'Cu Kα' }, { value: '0.94', what: 'Scherrer k (spherical, cubic)' },
    { value: '3.22 nm', what: 'Scherrer example with k = 0.9 (3.36 nm with 0.94)' }, { value: '3.69 Å', what: 'Bragg example (λ 0.9 Å, θ 7°)' }
  ],
  traps: [
    `<p>Use <b>θ = 2θ/2</b> in Bragg and Scherrer.</p>`,
    `<p>FWHM must be in <b>radians</b>.</p>`,
    `<p>A solution shows the <b>complementary</b> colour of what it absorbs.</p>`,
    `<p>Broader XRD peak = <b>smaller</b> crystallite.</p>`,
    `<p>The slide's "particle ≤ grain ≤ crystallite" is printed backwards.</p>`
  ]
});
