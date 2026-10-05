// CAT-2 question papers, free for everyone signed in: the actual papers (typed out from the printed paper) with
// model answers written from the notes, and "asked" (topic id -> where it came up) for the badge on each topic.
PAPERS({
  index: [
    { id: 'cat2-b1tb1', kind: 'actual', title: 'CAT-2 · Slot B1+TB1 · 28-09-2026', sub: 'Actual paper · Fall 2026–27' },
    { id: 'cat2-b2tb2', kind: 'actual', title: 'CAT-2 · Slot B2+TB2 · 28-09-2026', sub: 'Actual paper · Fall 2026–27' },
  ],

  papers: [
    {
      id: 'cat2-b1tb1', kind: 'actual', title: 'CAT-2 · Slot B1+TB1 · 28-09-2026', short: 'B1+TB1 paper', sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'B1+TB1'], ['Date', '28-09-2026'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Programme', 'B.Tech. Computer Science and Engineering']],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcomes:</b> CO2: Use chemical concepts for the advancement of materials in electrical, magnetic, and energy domains. CO3: Demonstrate UV Visible spectroscopic and X-ray diffraction techniques.`,
      questions: [
        {
          n: '1', marks: '5+5', co: '2', bl: '3',
          prompt: `<p><b>(a)</b> A hydrogen–oxygen electrochemical power source is proposed for use in space vehicles. Identify the type of fuel cell and explain why it is particularly suitable for space-vehicle applications. With a neat diagram, explain the construction and working mechanism, indicating the movement of the ions and electrons through the cell. Write the anodic, cathodic and overall electrochemical reactions involved.</p>
<p><b>(b)</b> A nickel electrode is immersed in a 0.5 M Ni<sup>2+</sup> solution and a silver electrode in a 0.01 M Ag<sup>+</sup> solution. The standard reduction potentials of Ni<sup>2+</sup>/Ni and Ag<sup>+</sup>/Ag are −0.25 V and +0.80 V, respectively.</p>
<ol><li>Write the cell representation.</li><li>Write the oxidation and reduction half-cell reactions.</li><li>Calculate the cell potential (E<sub>cell</sub>) at 25 °C using the Nernst equation.</li></ol>`,
          answer: `<p><b>(a) The alkaline H<sub>2</sub>–O<sub>2</sub> fuel cell (AFC)</b>, the hydrogen–oxygen fuel cell with aqueous KOH as the electrolyte.</p>
<p><b>Why it suits space vehicles</b></p>
<ul><li>Its only product is <b>water</b>, which the crew can drink. Nothing toxic is released into a closed cabin.</li>
<li>Very high energy conversion (75–82%) with no combustion, so less fuel has to be carried for the same energy.</li>
<li>No moving parts: very quiet, low maintenance and highly reliable.</li>
<li>Extra: the H<sub>2</sub> and O<sub>2</sub> are already on board as rocket propellants.</li></ul>
<p><b>Diagram to draw:</b> a container of KOH solution with two porous graphite electrodes (Pt or Ag catalyst). H<sub>2</sub> enters at the anode (−) on the left, O<sub>2</sub> at the cathode (+) on the right, both at about 50 atm. Water and excess H<sub>2</sub> leave on the anode side. An external wire with a load joins the electrodes. Arrows: e<sup>−</sup> from anode to cathode through the wire; OH<sup>−</sup> from cathode to anode through the electrolyte.</p>
<p><b>Construction:</b> both electrodes are porous graphite with a Pt, Ag or metal-oxide catalyst. The pores let gas, electrolyte and catalyst meet at many three-way contact points. The electrolyte is aqueous KOH (or NaOH).</p>
<p><b>Working:</b> H<sub>2</sub> diffuses into the anode and is oxidised by OH<sup>−</sup> to water, releasing electrons. The electrons cannot pass through the electrolyte, so they travel through the external circuit to the cathode; that flow is the current. At the cathode O<sub>2</sub> takes up the electrons and water to form OH<sup>−</sup>, which migrates back through the KOH to the anode.</p>
<div class="eq">Anode: 2H<sub>2</sub> + 4OH<sup>−</sup> → 4H<sub>2</sub>O + 4e<sup>−</sup></div>
<div class="eq">Cathode: O<sub>2</sub> + 2H<sub>2</sub>O + 4e<sup>−</sup> → 4OH<sup>−</sup></div>
<div class="eq">Overall: 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</div>
<p><b>(b)</b> Ag<sup>+</sup>/Ag has the higher reduction potential, so silver is the cathode and nickel the anode.</p>
<ol><li><b>Cell:</b> Ni(s) | Ni<sup>2+</sup> (0.5 M) || Ag<sup>+</sup> (0.01 M) | Ag(s)</li>
<li><b>Oxidation (anode):</b> Ni → Ni<sup>2+</sup> + 2e<sup>−</sup>. <b>Reduction (cathode):</b> 2Ag<sup>+</sup> + 2e<sup>−</sup> → 2Ag. Overall: Ni + 2Ag<sup>+</sup> → Ni<sup>2+</sup> + 2Ag, with n = 2.</li>
<li><b>E<sub>cell</sub>:</b></li></ol>
<div class="eq">E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub> = 0.80 − (−0.25) = 1.05 V</div>
<div class="eq">E<sub>cell</sub> = E°<sub>cell</sub> − (0.0591 / n) log ([Ni<sup>2+</sup>] / [Ag<sup>+</sup>]<sup>2</sup>)</div>
<div class="eq">= 1.05 − (0.0591 / 2) log (0.5 / (0.01)<sup>2</sup>) = 1.05 − 0.02955 × log 5000</div>
<div class="eq">= 1.05 − 0.02955 × 3.699 = 1.05 − 0.109 = <b>0.94 V</b></div>
<div class="note trap"><p>Forgetting to square [Ag<sup>+</sup>]: the balanced reaction has 2Ag<sup>+</sup>, so the quotient is [Ni<sup>2+</sup>]/[Ag<sup>+</sup>]<sup>2</sup>. Leaving it unsquared gives 1.05 − 0.02955 × log 50 = 1.00 V, which is wrong. Also, n = 2, not 1.</p></div>
<div class="note exam"><p>Five marks each part. In (a) the diagram with both arrows (e<sup>−</sup> through the wire, OH<sup>−</sup> through the KOH) and the three reactions carry most of the marks. In (b) show E°, the Nernst expression with the right quotient, and the final 0.94 V with its unit.</p></div>`,
          topics: ['m2-fuel-cells', 'm2-electrochemical-cells'],
        },
        {
          n: '2', marks: 10, co: '2', bl: '3',
          prompt: `<p>A rechargeable electrochemical cell employed in electric vehicles and renewable-energy storage systems operates through the reversible movement of a light metal species between two layered host structures. Using a suitable diagram, analyse the ion and electron transport mechanism, formulate the electrode and overall charge–discharge reactions, and justify how the layered host structures facilitate reversible cycling and high energy density.</p>`,
          answer: `<p>This is the <b>lithium-ion battery</b>: Li<sup>+</sup> shuttles between a layered LiCoO<sub>2</sub> cathode and a layered graphite anode (a "rocking-chair" cell). It holds no metallic lithium.</p>
<figure data-fig="m2-liion-charge-discharge"></figure>
<p><b>Transport mechanism</b></p>
<ul><li><b>Charging:</b> Co<sup>3+</sup> in LiCoO<sub>2</sub> is oxidised towards Co<sup>4+</sup> and releases electrons. Li<sup>+</sup> leaves the oxide layers, crosses the electrolyte and separator, and slides in between the graphite sheets. The electrons are pushed round the outer circuit by the charger and meet the Li<sup>+</sup> in the graphite.</li>
<li><b>Discharging:</b> Li<sup>+</sup> leaves the graphite, migrates back through the electrolyte and re-enters the spaces between the oxide layers. Electrons flow from graphite to LiCoO<sub>2</sub> through the device and do the work.</li>
<li>Only Li<sup>+</sup> crosses the electrolyte; the separator lets ions through but stops the electrodes touching.</li></ul>
<p><b>Charging reactions</b></p>
<div class="eq">Positive: LiCoO<sub>2</sub> → Li<sub>1−n</sub>CoO<sub>2</sub> + nLi<sup>+</sup> + ne<sup>−</sup></div>
<div class="eq">Negative: C<sub>6</sub> + nLi<sup>+</sup> + ne<sup>−</sup> → Li<sub>n</sub>C<sub>6</sub></div>
<div class="eq">Overall: LiCoO<sub>2</sub> + C<sub>6</sub> → Li<sub>1−n</sub>CoO<sub>2</sub> + Li<sub>n</sub>C<sub>6</sub></div>
<p><b>Discharging reactions</b></p>
<div class="eq">Negative: Li<sub>n</sub>C<sub>6</sub> → C<sub>6</sub> + nLi<sup>+</sup> + ne<sup>−</sup></div>
<div class="eq">Positive: Li<sub>1−n</sub>CoO<sub>2</sub> + nLi<sup>+</sup> + ne<sup>−</sup> → LiCoO<sub>2</sub></div>
<div class="eq">Overall: Li<sub>1−n</sub>CoO<sub>2</sub> + Li<sub>n</sub>C<sub>6</sub> → LiCoO<sub>2</sub> + C<sub>6</sub></div>
<p>LiCoO<sub>2</sub> is always the positive plate and graphite the negative one. The names anode and cathode swap between charging and discharging, because the anode is wherever oxidation happens.</p>
<p><b>Why layered hosts work</b></p>
<ul><li><b>Intercalation, not plating:</b> Li<sup>+</sup> slips in and out between layers that stay intact, so there is no dissolving or rebuilding of electrodes and no lithium-metal dendrites. That makes thousands of cycles possible.</li>
<li><b>Small structural change:</b> the layers only expand and contract slightly as Li<sup>+</sup> enters and leaves, so the electrodes do not crack.</li>
<li><b>Fast diffusion:</b> the open 2D gaps let the small Li<sup>+</sup> ion move quickly, which supports high power.</li>
<li><b>High energy density:</b> lithium is very light (high energy per kg), and Li<sup>+</sup> has a very negative reduction potential, so each cell gives about 3.6–3.7 V, nearly three times a Ni–Cd cell (high energy per litre). Low self-discharge and no memory effect suit EVs and grid storage.</li></ul>`,
          topics: ['m2-li-ion', 'm2-batteries'],
        },
        {
          n: '3', marks: 10, co: '2', bl: '2',
          prompt: `<p>A semiconductor-based photoelectrochemical device incorporates a photosensitizer to extend the semiconductor's light-absorption range. Design a suitable photoelectrochemical system with a neat diagram and explain the function of each component; illustrate the sequence of events from light absorption by the photosensitizer to charge separation, charge transport and current generation, and critically explain how these processes enable efficient production of electricity.</p>`,
          answer: `<p>This is the <b>dye-sensitized solar cell (DSSC, Grätzel cell)</b>, a regenerative PEC cell. TiO<sub>2</sub> alone absorbs only UV; a dye (the photosensitizer) absorbs the visible light and hands its electron to the TiO<sub>2</sub>.</p>
<figure data-fig="m2-dssc-schematic"></figure>
<p><b>Components and their functions</b></p>
<ul><li><b>Transparent conductive glass (FTO, SnO<sub>2</sub>:F or ITO, In<sub>2</sub>O<sub>3</sub>:Sn):</b> lets light in (&gt; 80% transparent) and collects current.</li>
<li><b>Nanoporous TiO<sub>2</sub> film:</b> wide-gap semiconductor. Its huge surface area holds a lot of dye, and its conduction band accepts and carries the injected electrons.</li>
<li><b>Photosensitizer (dye, e.g. Ru(bpy)<sub>3</sub><sup>2+</sup> or a natural dye):</b> absorbs visible light. It is anchored by –COOH or phosphoric acid groups and needs a hydrophobic periphery for stability.</li>
<li><b>Electrolyte (I<sup>−</sup>/I<sub>3</sub><sup>−</sup> redox couple):</b> gives an electron back to the oxidised dye and carries charge to the counter electrode.</li>
<li><b>Counter electrode (Pt or graphite):</b> catalyses the reduction of I<sub>3</sub><sup>−</sup> back to I<sup>−</sup>.</li></ul>
<p><b>Sequence of events</b></p>
<ol><li><b>Light absorption:</b> S + hν → S* (dye ground state to excited state).</li>
<li><b>Electron injection (charge separation):</b> S* → S<sup>+</sup> + e<sup>−</sup> (into the TiO<sub>2</sub> conduction band). The excited state lies above the CB, so injection happens within its nanosecond lifetime.</li>
<li><b>Carrier transport:</b> the electrons diffuse through the TiO<sub>2</sub> network to the FTO and collect at the −ve plate.</li>
<li><b>Current generation:</b> they flow through the external load to the counter electrode, doing work.</li>
<li><b>Reduction at the counter electrode:</b> I<sub>3</sub><sup>−</sup> + 2e<sup>−</sup> → 3I<sup>−</sup>.</li>
<li><b>Dye regeneration:</b> 2S<sup>+</sup> + 3I<sup>−</sup> → 2S + I<sub>3</sub><sup>−</sup>. The dye is ready to absorb again.</li></ol>
<p><b>Why this gives efficient electricity</b></p>
<ul><li>Absorption (dye) and transport (TiO<sub>2</sub>) are done by different materials, so each can be chosen for its job and the electron and the hole end up in different phases, which cuts recombination.</li>
<li>The nanoporous film gives an enormous dye-covered area, so most incoming light is caught even by a thin film.</li>
<li>The cell is regenerative: the electrolyte is oxidised at one electrode and reduced at the other, so nothing is used up.</li>
<li>It works in low light and at wide angles, and is cheap to make.</li>
<li><b>Limits:</b> the liquid electrolyte has temperature stability problems and volatile solvents, and Ru dyes and Pt are costly.</li></ul>
<div class="note trap"><p>Writing a plain silicon PV cell or an LJSC here misses the point: the question names a <b>photosensitizer</b>, so the answer is the DSSC. The dyed TiO<sub>2</sub> plate is the anode (−) and the counter electrode the cathode (+).</p></div>
<div class="note exam"><p>Ten marks: roughly the diagram, the five components with their jobs, the numbered sequence with the equations, and a short critical part (why it is efficient plus its limits).</p></div>`,
          topics: ['m2-dssc', 'm2-pec-cells'],
        },
        {
          n: '4', marks: 10, co: '2', bl: '2',
          prompt: `<p>Analyse why nanostructuring can result in electrical and optical properties that differ significantly from those of the corresponding bulk material, and discuss the factors responsible for these changes. Using a bottom-up approach, design a suitable synthetic route for nanoscale silica, illustrating the reaction equations and key processing steps involved in controlling its size and morphology, and critically evaluate the advantages and limitations of the chosen method.</p>`,
          answer: `<p><b>Why nano properties differ from bulk</b></p>
<ul><li><b>Large surface area to volume ratio:</b> cutting a solid into smaller pieces keeps the volume the same but raises the total surface area (6a<sup>2</sup>n for n cuts per edge). At the nanoscale a large fraction of atoms sit at the surface, with unsatisfied bonds and high surface energy, so reactivity, melting point and conductivity change.</li>
<li><b>Quantum confinement:</b> when the particle size approaches the de Broglie wavelength of the electrons, they are no longer free to move as in the bulk. Continuous bands break into discrete levels and the band gap widens as size falls. This drives a metal → semiconductor → insulator change in electrical behaviour.</li>
<li><b>Optical effects:</b> a bigger gap means absorption and emission shift to shorter wavelength, so colour depends on size. Bulk gold is yellow and shiny, nano gold is red to purple; quantum dots give tunable fluorescence.</li></ul>
<figure data-fig="m3-confinement-bands"></figure>
<ul>
<li><b>Factors:</b> particle size, shape and dimensionality (0D, 1D, 2D), surface atoms and defects, and the surrounding medium.</li></ul>
<p><b>Bottom-up route: sol–gel synthesis of silica nanoparticles</b></p>
<p>Precursor: a silicon alkoxide Si(OR)<sub>4</sub> in alcohol and water. Extra: the usual one is TEOS, Si(OC<sub>2</sub>H<sub>5</sub>)<sub>4</sub>.</p>
<ol><li><b>Hydrolysis:</b> –OR groups are replaced by –OH, giving a sol.
<div class="eq">Si(OR)<sub>4</sub> + 4H<sub>2</sub>O → Si(OH)<sub>4</sub> + 4ROH</div></li>
<li><b>Condensation (polycondensation):</b> Si–O–Si (siloxane) bridges form and grow into a network, the gel.
<div class="eq">(OR)<sub>3</sub>Si–OH + HO–Si(OR)<sub>3</sub> → (OR)<sub>3</sub>Si–O–Si(OR)<sub>3</sub> + H<sub>2</sub>O</div>
<div class="eq">(OR)<sub>3</sub>Si–OR + HO–Si(OR)<sub>3</sub> → (OR)<sub>3</sub>Si–O–Si(OR)<sub>3</sub> + ROH</div></li>
<li><b>Aging:</b> condensation continues; porosity decreases and the structure strengthens.</li>
<li><b>Drying:</b> water and alcohol are removed, giving a xerogel.</li>
<li><b>Calcination:</b> heating removes organic residue and gives SiO<sub>2</sub> nanoparticles.</li></ol>
<figure data-fig="m3-siloxane-network"></figure>
<p><b>Controlling size and morphology</b> (Extra: not in the course material): the water : alkoxide ratio, the acid or base catalyst (base, e.g. ammonia, favours separate spherical particles; acid favours chain-like networks), temperature, precursor concentration and aging time. Spin- or dip-coating the sol gives thin films instead of powder.</p>
<p><b>Advantages</b></p>
<ul><li>Works at very low temperature compared with melting glass or firing ceramics.</li>
<li>Monosized (uniform) nanoparticles of high purity and homogeneity are possible.</li>
<li>One sol can give powders, films or dense ceramics.</li></ul>
<p><b>Limitations</b></p>
<ul><li>Hard to control growth and to stop the particles agglomerating, since they carry a huge surface energy.</li>
<li>Hard to ensure complete reaction, so unreacted precursor or organic residue can remain; growth aids must be fully removed.</li>
<li>Very slow production rate of nanopowders. Extra: alkoxide precursors are costly.</li></ul>
<div class="note trap"><p>Ball milling is top-down, not bottom-up. And write the condensation equations as they are: the –OH + HO– condensation gives off H<sub>2</sub>O, the –OR + HO– one gives off ROH.</p></div>
<div class="note exam"><p>Ten marks, two halves: the reasons nano differs from bulk (surface area, quantum confinement, with an example), then the sol–gel route (equations, five steps, size control, pros and cons).</p></div>`,
          topics: ['m3-why-nano', 'm3-synthesis', 'm3-sol-gel'],
        },
        {
          n: '5', marks: '5+5', co: '3', bl: '3',
          prompt: `<p><b>(a)</b> A series of organic compounds exhibits different absorption characteristics when interacting with electromagnetic radiation. Explain the fundamental principle of the appropriate spectroscopy. Using Congo red and methylene blue as representative coloured compounds, compare their absorption patterns and account for their intense colours in terms of chromophores, auxochromes, extent of conjugation and the electronic transitions involved. Relate the molecular structures of these compounds to their characteristic absorption in the visible region.</p>
<p><b>(b)</b> A crystalline material gives a diffraction peak at 2θ = 44.60° with an FWHM of 0.95° when analysed using X-rays of energy 6.93 keV. Taking the shape factor k = 0.9, determine the X-ray wavelength and the average crystallite size using the Scherrer equation, and critically comment on the significance of the calculated crystallite size in relation to the material's nanoscale properties. Given: h = 6.626 × 10<sup>−34</sup> J s, 1 eV = 1.602 × 10<sup>−19</sup> J.</p>`,
          answer: `<p><b>(a) UV-Visible spectroscopy</b></p>
<p><b>Principle:</b> molecules absorb light of 200–700 nm, whose energy matches the gap between electronic levels. A photon is absorbed only when hν = ΔE, lifting a valence electron from a bonding or lone-pair orbital to an antibonding one (π → π*, n → π*). The wavelength absorbed depends on the groups present, and the amount absorbed follows the Beer–Lambert law, A = εcl. A coloured compound absorbs one band of visible light and shows the complementary colour.</p>
<p><b>Terms:</b> a <b>chromophore</b> is an unsaturated group that absorbs (C=C, C=O, –N=N–, –NO<sub>2</sub>). An <b>auxochrome</b> (–OH, –NH<sub>2</sub>, –NR<sub>2</sub>, –SO<sub>3</sub>H, –COOH) is attached to it and shifts absorption to longer wavelength (bathochromic) and often raises intensity (hyperchromic). The more double bonds in conjugation, the smaller the π–π* gap and the longer the wavelength absorbed.</p>
<p><b>Congo red</b></p>
<ul><li>A bis-azo dye: two –N=N– chromophores join a central biphenyl to two naphthalene rings.</li>
<li>Auxochromes: –NH<sub>2</sub> and –SO<sub>3</sub><sup>−</sup>Na<sup>+</sup> on the naphthalene rings.</li>
<li>The azo groups and aromatic rings form one long conjugated system, so the π → π* band moves into the visible, with a weaker n → π* from the azo nitrogen lone pairs.</li>
<li>λ<sub>max</sub> ≈ 500 nm: it absorbs <b>green</b> light and looks <b>red</b>.</li></ul>
<p><b>Methylene blue</b></p>
<ul><li>A phenothiazinium dye: three fused rings with N and S in the central ring, carrying a delocalised positive charge.</li>
<li>Auxochromes: two –N(CH<sub>3</sub>)<sub>2</sub> groups whose lone pairs join the conjugation (a strong bathochromic push).</li>
<li>The flat, fully conjugated cationic ring system has a very small π–π* gap.</li>
<li>Absorbs at 600–700 nm (Extra: λ<sub>max</sub> ≈ 665 nm), <b>orange-red</b> light, so it looks <b>blue</b>.</li></ul>
<figure data-fig="m4-dye-structures"></figure>
<figure data-fig="m4-colour-wheel"></figure>
<p><b>Comparison:</b> methylene blue absorbs at a longer wavelength than Congo red because its rigid, planar ring and the two electron-donating –NMe<sub>2</sub> groups delocalise the π electrons over the whole cation, lowering the gap further. Both colours are intense because their π → π* transitions are allowed, with ε of the order of 10<sup>4</sup>–10<sup>5</sup> L mol<sup>−1</sup> cm<sup>−1</sup>.</p>
<p><b>(b) Wavelength</b> (c = 3.0 × 10<sup>8</sup> m s<sup>−1</sup>)</p>
<div class="eq">E = 6.93 × 10<sup>3</sup> × 1.602 × 10<sup>−19</sup> = 1.110 × 10<sup>−15</sup> J</div>
<div class="eq">λ = hc / E = (6.626 × 10<sup>−34</sup> × 3.0 × 10<sup>8</sup>) / 1.110 × 10<sup>−15</sup> = 1.79 × 10<sup>−10</sup> m = <b>0.179 nm (1.79 Å)</b></div>
<p>Extra: this matches Co Kα radiation. c is not given in the paper; use 3.0 × 10<sup>8</sup> m s<sup>−1</sup> and say so.</p>
<figure data-fig="m4-fwhm-peak"></figure>
<p><b>Crystallite size</b></p>
<div class="eq">θ = 44.60° / 2 = 22.30°, cos θ = 0.9252</div>
<div class="eq">β = 0.95° × π/180 = 0.01658 rad</div>
<div class="eq">D = kλ / (β cos θ) = (0.9 × 0.1791) / (0.01658 × 0.9252) = 0.1612 / 0.01534</div>
<div class="eq">D ≈ <b>10.5 nm</b></div>
<p><b>Significance:</b></p>
<ul><li>At about 10 nm the material is nanocrystalline (1–100 nm), so the broad peak is real size broadening.</li>
<li>A large fraction of atoms sit at the surface. Expect high surface area and reactivity, and possibly size-dependent optical or electronic behaviour (quantum effects become strong below roughly 10 nm).</li>
<li>Scherrer gives the size of the coherently diffracting crystallite, not of the particle. Particles (TEM) and grains (SEM) can be larger, since particle ≥ grain ≥ crystallite.</li>
<li>Instrument broadening and strain were not subtracted, so β is an overestimate and the true crystallite size is at least 10.5 nm.</li></ul>
<div class="note trap"><p>The two classic slips: using 2θ (44.60°) in cos θ instead of θ (22.30°), and leaving β in degrees. Also keep λ in nm so D comes out in nm, and use k = 0.9 as given, not 0.94.</p></div>
<div class="note exam"><p>Five marks each part. In (a) name both chromophores (–N=N– in Congo red, the conjugated phenothiazinium ring in methylene blue), the auxochromes, the π → π* transition, the absorbed band and the colour seen. In (b) show λ = hc/E, the Scherrer working and the comment.</p></div>`,
          topics: ['m4-uv-vis', 'm4-scherrer', 'm4-xrays'],
        },
      ],
    },
    {
      id: 'cat2-b2tb2', kind: 'actual', title: 'CAT-2 · Slot B2+TB2 · 28-09-2026', short: 'B2+TB2 paper', sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'B2+TB2'], ['Date', '28-09-2026'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Programme', 'B.Tech. Computer Science and Engineering']],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcomes:</b> CO2: Use chemical concepts for the advancement of materials in electrical, magnetic, and energy domains. CO3: Demonstrate UV Visible spectroscopic and X-ray diffraction techniques.`,
      questions: [
        {
          n: '1', marks: '5+5', co: '2', bl: '3',
          prompt: `<p><b>(a)</b> Identify and explain an electrochemical power generation system that operates without any liquid or polymeric components, relying entirely on ceramic layers, with a diagram.</p>
<p><b>(b)</b> Write the half-cell reactions, the net reaction and calculate the cell EMF of the following cell at 298 K: Zn | Zn<sup>2+</sup> (0.001 M) || Ag<sup>+</sup> (0.1 M) | Ag. The standard reduction potentials are −0.76 V and 0.80 V respectively.</p>`,
          answer: `<p><b>(a) The solid oxide fuel cell (SOFC)</b>, also called a ceramic fuel cell: every layer is a solid ceramic, with no liquid electrolyte and no polymer membrane.</p>
<figure data-fig="m2-sofc-diagram"></figure>
<ul><li><b>Electrolyte:</b> yttria-stabilized zirconia (YSZ, ZrO<sub>2</sub> with Y<sub>2</sub>O<sub>3</sub>), which conducts O<sup>2−</sup> ions at 800–1000 °C.</li>
<li><b>Anode (fuel electrode):</b> porous Ni–YSZ cermet, so fuel reaches the electrolyte.</li>
<li><b>Cathode (air electrode):</b> porous ceramic such as LSM.</li>
<li><b>Fuels:</b> H<sub>2</sub> and CO; efficiency over 60%; relatively tolerant of sulphur.</li></ul>
<div class="eq">Cathode: O<sub>2</sub> + 4e<sup>−</sup> → 2O<sup>2−</sup></div>
<div class="eq">Anode: H<sub>2</sub> + CO + 2O<sup>2−</sup> → H<sub>2</sub>O + CO<sub>2</sub> + 4e<sup>−</sup></div>
<div class="eq">Overall: H<sub>2</sub> + CO + O<sub>2</sub> → H<sub>2</sub>O + CO<sub>2</sub></div>
<p><b>Pros:</b> all-solid, so no electrolyte loss or electrode corrosion; high efficiency and hot exhaust for cogeneration; low emissions. <b>Cons:</b> very high operating temperature, slow start-up, expensive materials.</p>
<p><b>(b)</b> Zn (−0.76 V) has the lower reduction potential, so Zn is the anode and Ag the cathode.</p>
<div class="eq">Anode: Zn → Zn<sup>2+</sup> + 2e<sup>−</sup></div>
<div class="eq">Cathode: 2Ag<sup>+</sup> + 2e<sup>−</sup> → 2Ag</div>
<div class="eq">Net: Zn + 2Ag<sup>+</sup> → Zn<sup>2+</sup> + 2Ag, n = 2</div>
<div class="eq">E°<sub>cell</sub> = 0.80 − (−0.76) = 1.56 V</div>
<div class="eq">E<sub>cell</sub> = E°<sub>cell</sub> − (0.0591 / 2) log ([Zn<sup>2+</sup>] / [Ag<sup>+</sup>]<sup>2</sup>) = 1.56 − 0.02955 log (0.001 / (0.1)<sup>2</sup>)</div>
<div class="eq">= 1.56 − 0.02955 × log 0.1 = 1.56 + 0.0296 = <b>1.59 V</b></div>
<div class="note trap"><p>Square [Ag<sup>+</sup>]: the balanced reaction has 2Ag<sup>+</sup>. Without the square, log(0.001/0.1) = −2 and you get 1.62 V, which is wrong. And n = 2, not 1.</p></div>
<div class="note exam"><p>Five marks each part. In (a): name the SOFC, the labelled three-layer diagram with the O<sup>2−</sup> arrow, and the three reactions. In (b): half reactions, net reaction, E°, the Nernst step and 1.59 V with its unit.</p></div>`,
          topics: ['m2-sofc', 'm2-electrochemical-cells'],
        },
        {
          n: '2', marks: 10, co: '2', bl: '3',
          prompt: `<p>A team of researchers is developing a low-cost, translucent solar panel for smart windows. Instead of using highly purified silicon, they use an intense light-harvesting coloured monolayer on a semiconductor with a counter electrode and a liquid chemical redox shuttle. Recognise the device and explain with suitable diagram, mechanism, principle and applications.</p>`,
          answer: `<p>This is the <b>dye-sensitized solar cell (DSSC, Grätzel cell)</b>: the coloured monolayer is the dye, the semiconductor is nanoporous TiO<sub>2</sub>, and the redox shuttle is I<sup>−</sup>/I<sub>3</sub><sup>−</sup>.</p>
<p><b>Principle:</b> a dye absorbs visible light and injects an excited electron into the conduction band of a wide-gap semiconductor. The electron does work in the outer circuit and the redox electrolyte returns it to the dye, so nothing is used up (a regenerative photoelectrochemical cell).</p>
<figure data-fig="m2-dssc-schematic"></figure>
<p><b>Mechanism</b></p>
<ol><li>Light absorption: S + hν → S*</li>
<li>Electron injection: S* → S<sup>+</sup> + e<sup>−</sup> (into the TiO<sub>2</sub> conduction band)</li>
<li>Transport through TiO<sub>2</sub> to the FTO, then through the load to the counter electrode</li>
<li>At the counter electrode: I<sub>3</sub><sup>−</sup> + 2e<sup>−</sup> → 3I<sup>−</sup></li>
<li>Dye regeneration: 2S<sup>+</sup> + 3I<sup>−</sup> → 2S + I<sub>3</sub><sup>−</sup></li></ol>
<p><b>Why it suits smart windows:</b> the cell is transparent, cheap and works in low light and at wide angles; it needs no highly purified silicon.</p>
<p><b>Applications:</b> building-integrated windows and facades, indoor and low-light electronics (sensors, calculators), portable chargers, decorative panels.</p>
<div class="note trap"><p>The dyed TiO<sub>2</sub> side is the anode (−), not the cathode. And the dye is regenerated by I<sup>−</sup>, not by the counter electrode directly.</p></div>
<div class="note exam"><p>Ten marks: naming the DSSC, the labelled diagram, the five-step mechanism with equations, the principle and a few applications.</p></div>`,
          topics: ['m2-dssc', 'm2-pec-cells'],
        },
        {
          n: '3', marks: 10, co: '2', bl: '2',
          prompt: `<p>What type of electrochemical cell relies on the reversible intercalation of alkali metal ions into a graphite lattice to store energy? Explain with suitable diagram, mechanism, any one advantage and disadvantage with applications.</p>`,
          answer: `<p>The <b>lithium-ion battery</b>, a secondary cell in which Li<sup>+</sup> moves between a LiCoO<sub>2</sub> cathode and a graphite anode. No lithium metal is present.</p>
<figure data-fig="m2-liion-charge-discharge"></figure>
<p><b>Mechanism</b></p>
<ul><li><b>Charging:</b> Co<sup>3+</sup> is oxidised, Li<sup>+</sup> leaves LiCoO<sub>2</sub>, crosses the electrolyte and intercalates between graphite sheets; electrons are pushed by the charger to the graphite.</li>
<li><b>Discharging:</b> Li<sup>+</sup> leaves graphite and returns between the oxide layers; electrons flow through the device from graphite to LiCoO<sub>2</sub>.</li></ul>
<div class="eq">Charge: LiCoO<sub>2</sub> + C<sub>6</sub> → Li<sub>1−n</sub>CoO<sub>2</sub> + Li<sub>n</sub>C<sub>6</sub></div>
<div class="eq">Discharge: Li<sub>1−n</sub>CoO<sub>2</sub> + Li<sub>n</sub>C<sub>6</sub> → LiCoO<sub>2</sub> + C<sub>6</sub></div>
<p>Half reactions on discharge: Li<sub>n</sub>C<sub>6</sub> → C<sub>6</sub> + nLi<sup>+</sup> + ne<sup>−</sup> (negative) and Li<sub>1−n</sub>CoO<sub>2</sub> + nLi<sup>+</sup> + ne<sup>−</sup> → LiCoO<sub>2</sub> (positive).</p>
<p><b>One advantage:</b> high energy density, because lithium is light and each cell gives about 3.6–3.7 V. <b>One disadvantage:</b> it needs a protection circuit, since the flammable organic electrolyte can catch fire if overcharged or damaged.</p>
<p><b>Applications:</b> phones, laptops and cameras (LCO), power tools and medical devices (LMO, LFP, NMC), electric vehicles and grid storage (NCA).</p>
<div class="note trap"><p>"Anode" and "cathode" swap between charging and discharging; "positive" (LiCoO<sub>2</sub>) and "negative" (graphite) never do. Label the plates by polarity to stay safe.</p></div>
<div class="note exam"><p>Ten marks: the name, the diagram, charge and discharge mechanism with reactions, one advantage, one disadvantage and applications.</p></div>`,
          topics: ['m2-li-ion'],
        },
        {
          n: '4', marks: 10, co: '2', bl: '2',
          prompt: `<p>What chemical synthesis route involves transforming a stable colloidal suspension of nanoparticles within a liquid into a continuous, interconnected three-dimensional solid network spanning the entire volume of the medium? Explain with suitable chemical reactions, advantages and disadvantages.</p>`,
          answer: `<p>The <b>sol–gel method</b>, a bottom-up route: a sol (tiny solid particles suspended in a liquid) turns into a gel (a 3D network through the whole volume). The precursor is a metal alkoxide M(OR)<sub>n</sub>, for example Si(OR)<sub>4</sub>.</p>
<p><b>Steps:</b> hydrolysis → condensation → aging → drying → calcination.</p>
<div class="eq">Hydrolysis: –M–OR + H<sub>2</sub>O → –M–OH + ROH</div>
<div class="eq">Si(OR)<sub>4</sub> + 4H<sub>2</sub>O → Si(OH)<sub>4</sub> + 4ROH</div>
<div class="eq">Condensation: –M–OH + HO–M– → –M–O–M– + H<sub>2</sub>O</div>
<div class="eq">–M–OH + RO–M– → –M–O–M– + ROH</div>
<ul><li><b>Hydrolysis</b> in water or with alcohol forms the sol.</li>
<li><b>Condensation</b> builds M–O–M (oxo) or M–OH–M (hydroxo) bridges; viscosity rises and the gel network forms (Si–O–Si siloxanes for silica).</li>
<li><b>Aging:</b> condensation continues; porosity decreases.</li>
<li><b>Drying:</b> water and solvent are removed, giving a xerogel.</li>
<li><b>Calcination:</b> heating gives the final metal-oxide nanoparticles.</li></ul>
<figure data-fig="m3-siloxane-network"></figure>
<figure data-fig="m3-sol-gel-routes"></figure>
<p><b>Advantages:</b> very low temperature compared with melting glass or firing ceramics; monosized particles are possible; one sol gives powders, films (spin or dip coating) or dense ceramics.</p>
<p><b>Disadvantages:</b> hard to control growth and stop agglomeration; hard to ensure complete reaction, so residues may stay; growth aids must be fully removed; very slow production of nanopowders.</p>
<div class="note trap"><p>Don't mix the two condensations: –OH + HO– gives off H<sub>2</sub>O, –OR + HO– gives off ROH.</p></div>
<div class="note exam"><p>Ten marks: naming sol–gel, the hydrolysis and condensation equations, the five steps, and the pros and cons.</p></div>`,
          topics: ['m3-sol-gel', 'm3-synthesis'],
        },
        {
          n: '5', marks: '5+5', co: '3', bl: '3',
          prompt: `<p><b>(a)</b> Identify and explain the principle and applications of the non-destructive technique which is used to differentiate single crystal, polycrystalline and amorphous silicon.</p>
<p><b>(b)</b> Calculate the average crystallite size (D) of a gold nanoparticle sample from the following X-ray diffraction (XRD) data: wavelength of X-ray 0.15406 nm; diffraction angle (38.2°); full width at half maximum (0.45°); and shape factor 0.9.</p>`,
          answer: `<p><b>(a) X-ray diffraction (XRD)</b>, which is nondestructive.</p>
<p><b>Principle:</b> the regularly spaced planes of a crystal act as a diffraction grating for X-rays, whose wavelength is close to the spacing between atoms. Waves reflected from successive planes add up only when the path difference is a whole number of wavelengths:</p>
<div class="eq">nλ = 2d sin θ (Bragg's law)</div>
<figure data-fig="m4-bragg-geometry"></figure>
<p>The diffractometer scans 2θ and records intensity; each peak position gives a d-spacing, and peak width falls as crystal size grows.</p>
<p><b>Telling the three forms of silicon apart</b></p>
<ul><li><b>Single crystal:</b> one lattice orientation, so only a few very sharp, intense reflections (spots rather than rings).</li>
<li><b>Polycrystalline:</b> many randomly oriented grains, so a full set of sharp peaks (rings) at the Si positions.</li>
<li><b>Amorphous:</b> no long-range order, so no sharp peaks, only a broad hump.</li></ul>
<figure data-fig="m4-sio2-patterns"></figure>
<p><b>Applications:</b> crystalline vs amorphous materials; identifying phases by matching JCPDS/ICSD patterns; unit-cell dimensions and symmetry; texture of polygrained materials; strain and crystallite size.</p>
<figure data-fig="m4-fwhm-peak"></figure>
<p><b>(b)</b> 38.2° is the 2θ value, so θ = 19.1°.</p>
<div class="eq">cos 19.1° = 0.9449</div>
<div class="eq">β = 0.45° × π/180 = 0.007854 rad</div>
<div class="eq">D = kλ / (β cos θ) = (0.9 × 0.15406) / (0.007854 × 0.9449) = 0.13865 / 0.007422</div>
<div class="eq">D ≈ <b>18.7 nm</b></div>
<p>About 18.7 nm, so the gold is nanocrystalline (1–100 nm).</p>
<div class="note trap"><p>Using 38.2° in cos θ instead of 19.1° gives 22.5 nm, which is wrong. Convert the FWHM to radians before dividing.</p></div>
<div class="note exam"><p>Five marks each part. In (a): name XRD, Bragg's law and what each form of silicon looks like. In (b): θ, β in radians, the Scherrer step and D with its unit.</p></div>`,
          topics: ['m4-xrd-patterns', 'm4-bragg', 'm4-scherrer'],
        },
      ],
    },
  ],
  asked: {
    'm2-fuel-cells': [{ where: 'Q1(a), 5 marks', what: 'the H₂–O₂ (alkaline) fuel cell for space vehicles: construction, ion and electron flow, reactions', paper: 'cat2-b1tb1' }],
    'm2-electrochemical-cells': [{ where: 'Q1(b), 5 marks', what: 'Ni | Ni²⁺ || Ag⁺ | Ag: cell notation, half reactions and E(cell) by the Nernst equation', paper: 'cat2-b1tb1' }, { where: 'Q1(b), 5 marks', what: 'Zn | Zn²⁺ (0.001 M) || Ag⁺ (0.1 M) | Ag: half reactions, net reaction and EMF', paper: 'cat2-b2tb2' }],
    'm2-li-ion': [{ where: 'Q2, 10 marks', what: 'Li-ion transport, charge–discharge reactions and why layered hosts allow reversible cycling', paper: 'cat2-b1tb1' }, { where: 'Q3, 10 marks', what: 'Li-ion by graphite intercalation: diagram, mechanism, one advantage and disadvantage, uses', paper: 'cat2-b2tb2' }],
    'm2-dssc': [{ where: 'Q3, 10 marks', what: 'a dye-sensitized cell: components, sequence from light absorption to current, why it is efficient', paper: 'cat2-b1tb1' }, { where: 'Q2, 10 marks', what: 'recognise the DSSC for smart windows: diagram, mechanism, principle, applications', paper: 'cat2-b2tb2' }],
    'm2-pec-cells': [{ where: 'Q3, 10 marks', what: 'a photosensitized photoelectrochemical cell', paper: 'cat2-b1tb1' }, { where: 'Q2, 10 marks', what: 'a dye-on-semiconductor cell with a redox shuttle', paper: 'cat2-b2tb2' }],
    'm3-why-nano': [{ where: 'Q4, 10 marks', what: 'why nano electrical and optical properties differ from bulk', paper: 'cat2-b1tb1' }],
    'm3-synthesis': [{ where: 'Q4, 10 marks', what: 'a bottom-up route for nanoscale silica', paper: 'cat2-b1tb1' }, { where: 'Q4, 10 marks', what: 'the sol–gel bottom-up route', paper: 'cat2-b2tb2' }],
    'm3-sol-gel': [{ where: 'Q4, 10 marks', what: 'sol–gel silica: equations, steps, size control, pros and cons', paper: 'cat2-b1tb1' }, { where: 'Q4, 10 marks', what: 'identify sol–gel from sol to gel network: reactions, advantages, disadvantages', paper: 'cat2-b2tb2' }],
    'm4-uv-vis': [{ where: 'Q5(a), 5 marks', what: 'UV-Vis principle; Congo red vs methylene blue: chromophores, auxochromes, conjugation, transitions', paper: 'cat2-b1tb1' }],
    'm4-xrays': [{ where: 'Q5(b), 5 marks', what: 'X-ray wavelength from a 6.93 keV photon energy', paper: 'cat2-b1tb1' }],
    'm4-scherrer': [{ where: 'Q5(b), 5 marks', what: 'crystallite size by Scherrer (2θ = 44.60°, FWHM 0.95°, k = 0.9)', paper: 'cat2-b1tb1' }, { where: 'Q5(b), 5 marks', what: 'gold nanoparticle crystallite size (2θ = 38.2°, FWHM 0.45°, λ = 0.15406 nm)', paper: 'cat2-b2tb2' }],
    'm2-sofc': [{ where: 'Q1(a), 5 marks', what: 'identify the all-ceramic fuel cell (SOFC) and explain it with a diagram', paper: 'cat2-b2tb2' }],
    'm4-xrd-patterns': [{ where: 'Q5(a), 5 marks', what: 'XRD to tell single-crystal, polycrystalline and amorphous silicon apart', paper: 'cat2-b2tb2' }],
    'm4-bragg': [{ where: 'Q5(a), 5 marks', what: 'the principle of XRD (Bragg law)', paper: 'cat2-b2tb2' }],
  },
});
