CHUNK({
  chunk: '2a',
  module: 'm2',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm2-semiconductors',
      title: 'Semiconductors and doping',
      short: 'Semiconductors, doping',
      blurb: 'Why pure silicon is nearly an insulator, how a pinch of impurity turns it into N-type or P-type material, and who carries the current in each.',
      source: 'Pages 1–10',
      tabs: [
        {
          title: 'Conductor, insulator, semiconductor',
          html: `<p class="lead">Materials split by how easily their <b>valence electrons</b> move. Semiconductors sit in between, and we can tune them.</p>
<table class="tbl"><thead><tr><th>Type</th><th>Valence electrons</th><th>Behaviour</th></tr></thead><tbody>
<tr><td>Conductor</td><td>Usually metals; electrons travel easily when an emf (voltage) is applied</td><td>Copper: 29 protons, 29 electrons, and its valence electron hops from atom to atom</td></tr>
<tr><td>Insulator</td><td>Held firmly to the nucleus</td><td>High resistance, no current flows</td></tr>
<tr><td>Semiconductor</td><td>Between the two</td><td>Relatively good conductor and relatively good insulator, depending on the conditions applied</td></tr>
</tbody></table>
<div class="note why"><p>The energy band diagram in the course material shows the same story: in a conductor the bands touch, in an insulator there is a wide gap, in a semiconductor the gap is small.</p></div>`
        },
        {
          title: 'Intrinsic silicon',
          html: `<p class="lead">Silicon has <b>14 protons and 14 electrons</b>, with <b>4 valence electrons</b> in the outer shell. Its atoms link together into a <b>crystal lattice</b> through <b>covalent bonds</b>.</p>
<p>In pure silicon every valence electron is tied up in a bond, so no electrons are free for current. Pure semiconductor material is called <b>intrinsic</b>, and silicon in this form is a <b>great insulator</b>.</p>
<div class="note why"><p>Each atom shares its outer electrons with its neighbours, so the electrons are difficult to dislodge. No free carriers means no current.</p></div>`
        },
        {
          title: 'Doping, N-type and P-type',
          html: `<p class="lead">To make a semiconductor conduct, other atoms called <b>impurities</b> are added. This is <b>doping</b>, and the result is an <b>extrinsic semiconductor</b> with good conductivity.</p>
<div class="vs"><div class="side"><h4>N-type</h4><p>Dope with <b>arsenic</b> (5 valence electrons). Four bond with neighbouring silicon atoms and the <b>one left-over electron</b> per arsenic atom is free to carry current. Silicon doped with extra electrons.</p></div><div class="side"><h4>P-type</h4><p>Dope with <b>boron</b> (3 valence electrons). Its three bonds are fine but one electron is missing from the fourth bond. That empty place is a <b>hole</b>, which acts as a positive charge and attracts electrons. Silicon doped with material missing electrons.</p></div></div>
<p><b>Holes are a second type of current carrier</b>, like electrons.</p>
<div class="note why"><p>More dopant atoms means more free carriers and lower resistance; fewer dopant atoms means higher resistance. By controlling the amount of doping, virtually any resistance can be achieved.</p></div>`
        },
        {
          title: 'Current in N and P material',
          html: `<p class="lead">In both types the supply pushes current from its positive to its negative terminal, but different carriers do the work inside.</p>
<table class="tbl"><thead><tr><th></th><th>N-type</th><th>P-type</th></tr></thead><tbody>
<tr><td>Majority carriers</td><td><b>Electrons</b></td><td><b>Holes</b></td></tr>
<tr><td>Minority carriers</td><td>Holes</td><td>Electrons</td></tr>
<tr><td>What happens</td><td>The positive terminal pulls free electrons away from their atoms. Electrons from the negative terminal enter and are attracted to the positively charged atoms.</td><td>Electrons from the negative terminal fill the holes. The positive terminal pulls electrons out of holes, so those holes attract more electrons. Inside the material the current is the movement of holes from positive to negative.</td></tr>
</tbody></table>
<div class="note exam"><p>Write majority and minority carriers for both types. It is the most asked line from this topic.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Why is pure (intrinsic) silicon a good insulator?', back: 'All its valence electrons are locked in covalent bonds in the crystal lattice, so there are no free carriers.' },
        { front: 'What is doping, and what is the doped material called?', back: 'Adding impurity atoms to a pure semiconductor so it conducts. The result is an extrinsic semiconductor.' },
        { front: 'Majority and minority carriers in N-type and in P-type?', back: 'N-type: electrons are majority, holes minority. P-type: holes are majority, electrons minority.' },
        { front: 'How does arsenic make silicon N-type?', back: 'Arsenic has 5 valence electrons. Four bond with silicon, and the fifth is free to conduct.' },
        { front: 'How does boron make silicon P-type?', back: 'Boron has 3 valence electrons, so one bond is incomplete. The missing electron place is a hole, which carries positive charge.' },
        { front: 'What happens to resistance as you add more dopant?', back: 'More free carriers, so lower resistance. Fewer dopant atoms give higher resistance.' },
        { front: 'What is a hole?', back: 'The empty place where a bonding electron should be. It behaves as a positive charge carrier.' }
      ],
      oneLiners: [
        'Intrinsic = pure semiconductor, a good insulator. Extrinsic = doped, a good conductor.',
        'Arsenic (5 valence electrons) gives N-type; boron (3 valence electrons) gives P-type.',
        'N-type majority carriers are electrons; P-type majority carriers are holes.',
        'Holes are positive carriers; inside P-type material current is hole movement.',
        'The doping level sets the resistance.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-pn-junction',
      title: 'PN junction and biasing',
      short: 'PN junction, bias',
      blurb: 'Join a P half and an N half and a barrier forms. Forward bias removes it, reverse bias widens it, and a big enough reverse voltage breaks the junction down.',
      source: 'Pages 11–16',
      tabs: [
        {
          title: 'Forming the junction',
          html: `<p class="lead">Dope one half of a semiconductor <b>P-type</b> and the other half <b>N-type</b> and you get a <b>PN junction</b>. The plane dividing the two halves is the junction.</p>
<ol class="steps"><li><b>Diffusion</b> N-type has many free electrons and P-type has many holes, so at the junction electrons diffuse to the P-side and holes diffuse to the N-side.</li><li><b>Charge builds</b> The net opposite charge left in each layer stops further diffusion into that layer.</li><li><b>Barrier</b> A barrier forms near the junction and blocks further movement of carriers. This is the <b>potential barrier</b>.</li></ol>
<div class="kv"><div><span>Barrier, germanium</span><b>0.3 V</b></div><div><span>Barrier, silicon</span><b>0.7 V</b></div></div>
<p>A diode can work in three conditions: <b>no bias</b>, <b>forward bias</b> and <b>reverse bias</b>.</p>
<h3>Labels on the junction</h3>
<ul><li>Away from the junction both sides stay <b>neutral</b> (the neutral p and n regions).</li><li>The band around the junction is the <b>space charge region</b>, also called the depletion region. Its <b>E-field</b> points from the n side towards the p side.</li><li>On holes, the <b>diffusion force</b> pushes them towards the n side and the <b>E-field force</b> pushes them back. On electrons, diffusion pushes them towards the p side and the E-field force pushes them back. The two forces balance at the barrier.</li></ul>
<h3>Symbol</h3>
<p>The diode symbol has an <b>anode</b> (P side) and a <b>cathode</b> (N side). On a real component the <b>stripe marks the cathode</b>.</p>`
        },
        {
          title: 'Forward bias',
          html: `<p class="lead">Connect the battery <b>positive to P</b> and <b>negative to N</b>: forward bias.</p>
<figure data-fig="m2-pn-bias"></figure>
<ul><li>The applied positive potential repels holes in the P region towards the junction, and the negative potential repels electrons in the N region towards the junction.</li><li>While the applied voltage V<sub>F</sub> is <b>less than the internal barrier V<sub>0</sub></b>, the forward current I<sub>F</sub> is almost zero.</li><li>Once the applied potential is <b>more than V<sub>0</sub></b> the barrier disappears. Holes cross from P to N and electrons cross the other way, giving a <b>relatively large current</b> in the external circuit.</li></ul>`
        },
        {
          title: 'Reverse bias',
          html: `<p class="lead">Connect the battery <b>negative to P</b> and <b>positive to N</b>: reverse bias.</p>
<ul><li>Holes in the P side move towards the battery’s negative terminal and electrons in the N side move towards the positive terminal.</li><li>The <b>depletion region</b>, which has no mobile carriers, becomes <b>wider</b>.</li><li>The field from the applied voltage points the same way as the junction’s own field, so the barrier increases.</li><li>In theory no current flows. In practice a very small <b>reverse saturation current</b>, in the order of <b>microamperes</b>, flows.</li></ul>
<div class="note why"><p>The reverse saturation current depends mainly on <b>junction temperature</b>, because its source is minority carriers made by thermally broken covalent bonds.</p></div>`
        },
        {
          title: 'Breakdown',
          html: `<p class="lead">If the reverse bias is made large, the junction <b>breaks down</b> and a very large reverse current flows.</p>
<ol class="steps"><li><b>Acceleration</b> Free electrons from the N-type, moving towards the positive terminal, gain enough energy to move at high velocity.</li><li><b>Knock-out</b> They dislodge valence electrons from semiconductor atoms in the crystal.</li><li><b>Avalanche</b> A large number of free electrons forms, called an avalanche of free electrons.</li></ol>
<p>The reverse voltage at which this happens is the <b>breakdown voltage</b>.</p>`
        }
      ],
      flashcards: [
        { front: 'What is the potential barrier of a silicon diode and of a germanium diode?', back: 'Silicon 0.7 V, germanium 0.3 V.' },
        { front: 'How does the potential barrier form?', back: 'Electrons diffuse to the P-side and holes to the N-side. The net opposite charge left in each layer stops further diffusion, setting up the barrier.' },
        { front: 'What is forward bias?', back: 'Battery positive to P-type, negative to N-type. Above V0 the barrier vanishes and large current flows.' },
        { front: 'What happens to the depletion region in reverse bias?', back: 'It becomes wider, and the barrier increases, so practically no current flows.' },
        { front: 'What is reverse saturation current and what does it depend on?', back: 'A very small (microamp) reverse current. It depends mainly on junction temperature, since thermally broken bonds are the source of minority carriers.' },
        { front: 'What is avalanche breakdown?', back: 'At large reverse bias, fast electrons knock out more valence electrons, producing an avalanche of free electrons and a very large reverse current.' },
        { front: 'What is the forward current when V_F < V_0?', back: 'Almost zero, because the barrier has not yet disappeared.' }
      ],
      oneLiners: [
        'Barrier: 0.7 V for silicon, 0.3 V for germanium.',
        'Forward bias: P to positive, N to negative. Reverse bias: the opposite.',
        'Reverse bias widens the depletion region; forward bias above V0 removes the barrier.',
        'Reverse saturation current is in microamperes and rises with temperature.',
        'Breakdown voltage is where large reverse bias produces an avalanche of electrons.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-diode-vi',
      title: 'Diode V–I characteristics and rectifiers',
      short: 'Diode V–I, rectifiers',
      blurb: 'The shape of the diode’s voltage–current curve, and the job it is most used for: turning AC into DC.',
      source: 'Pages 17–19',
      tabs: [
        {
          title: 'V–I characteristics',
          html: `<p class="lead">Plot the current through a diode against the voltage across it. The curve has a forward side and a reverse side.</p>
<figure data-fig="m2-diode-vi"></figure>
<ul><li><b>Forward:</b> almost no current until the “knee”, then the current rises steeply. The knee is at <b>0.3 V for germanium</b> and <b>0.7 V for silicon</b>.</li><li><b>Reverse:</b> only a tiny leakage current: <b>below 20 µA for silicon</b> and <b>below 50 µA for germanium</b>.</li><li>At the <b>reverse breakdown voltage</b> the reverse current shoots up (the Zener / avalanche region).</li></ul>
<p>Symbol: the arrow side is the <b>anode (A)</b>, the bar side is the <b>cathode (K)</b>. Conventional current flows from anode to cathode.</p>`
        },
        {
          title: 'Rectifier',
          html: `<p class="lead">A <b>rectifier</b> converts <b>AC</b>, which periodically reverses direction, into <b>DC</b>, which flows in one direction only. The process is <b>rectification</b>.</p>
<figure data-fig="m2-rectifiers"></figure>
<div class="vs"><div class="side"><h4>Half-wave</h4><p>Either the positive or the negative half of the AC wave is passed and the other half is blocked. Only half of the input reaches the output, so it is <b>very inefficient</b> for power transfer.</p></div><div class="side"><h4>Full-wave</h4><p>The whole input waveform is converted to <b>one constant polarity</b> at the output. Both polarities become DC, so it is <b>more efficient</b>. The figure uses four diodes D<sub>1</sub> to D<sub>4</sub> (a bridge).</p></div></div>
<div class="note exam"><p>Draw the circuit, then the input and output waveforms one above the other. The half-wave output has gaps where the blocked half-cycle was; the full-wave output has none.</p></div>`
        },
        {
          title: 'Rectifier working',
          html: `<p class="lead">Each rectifier is explained by asking <b>which diode conducts</b> in each half cycle of the input.</p>
<ol class="steps"><li><b>Half-wave, positive half cycle:</b> the anode of the single diode is positive, so it is forward biased and conducts; the input appears across the load R<sub>L</sub>.</li>
<li><b>Half-wave, negative half cycle:</b> the diode is reverse biased and blocks; the output is zero. The output is a string of positive half-sine pulses with gaps.</li>
<li><b>Bridge full-wave, positive half cycle:</b> D<sub>1</sub> and D<sub>2</sub> (the opposite pair) are forward biased and current flows through R<sub>L</sub> in one direction; D<sub>3</sub>, D<sub>4</sub> are off.</li>
<li><b>Bridge full-wave, negative half cycle:</b> D<sub>3</sub> and D<sub>4</sub> conduct and D<sub>1</sub>, D<sub>2</sub> are off, but current still flows through R<sub>L</sub> in the <b>same direction</b>. Both halves give positive output pulses with no gaps.</li></ol>
<table class="tbl"><thead><tr><th>Quantity</th><th>Half-wave</th><th>Full-wave (bridge)</th></tr></thead><tbody>
<tr><td>Average (DC) output</td><td>V<sub>m</sub>/π = 0.318 V<sub>m</sub></td><td>2V<sub>m</sub>/π = 0.637 V<sub>m</sub></td></tr>
<tr><td>Output ripple frequency</td><td>Same as input (50 Hz)</td><td>Twice the input (100 Hz)</td></tr>
<tr><td>Maximum efficiency</td><td>40.6 %</td><td>81.2 %</td></tr>
<tr><td>Ripple factor</td><td>1.21</td><td>0.48</td></tr>
<tr><td>Diodes</td><td>One</td><td>Four (or two with a centre-tapped transformer)</td></tr>
</tbody></table>
<div class="worked"><div class="given">Peak input V<sub>m</sub> = 20 V (ideal diodes).</div><div class="solve">Half-wave V<sub>dc</sub> = 20/π; full-wave V<sub>dc</sub> = 2 × 20/π.</div><div class="result">6.37 V (half-wave) and 12.73 V (full-wave)</div></div>
<div class="note exam"><p><b>Explain half-wave and full-wave rectifiers with waveforms:</b> draw each circuit with the transformer, diode(s) and R<sub>L</sub>; draw input and output waves one above the other; state which diodes conduct in each half cycle and give V<sub>dc</sub> and efficiency.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Where is the knee voltage on a silicon and a germanium diode curve?', back: 'Silicon 0.7 V, germanium 0.3 V.' },
        { front: 'How big is the reverse leakage current in silicon and germanium diodes?', back: 'Less than 20 µA in silicon and less than 50 µA in germanium.' },
        { front: 'What is a rectifier?', back: 'A device that converts AC to DC (one direction only). The process is rectification.' },
        { front: 'Why is a half-wave rectifier inefficient?', back: 'It blocks one half of the input, so only half the input waveform reaches the output.' },
        { front: 'What does a full-wave rectifier do differently?', back: 'It converts both polarities of the input to one polarity, so the whole waveform is used and it is more efficient.' },
        { front: 'Which diode terminal is the anode?', back: 'The arrow side (P side). The bar side is the cathode (N side).' }
      ],
      oneLiners: [
        'Forward knee 0.7 V (Si) or 0.3 V (Ge); reverse leakage tiny until breakdown.',
        'Half-wave passes one half-cycle; full-wave uses both.',
        'Full-wave bridge uses four diodes.',
        'Rectifier: AC in, DC out.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-zener',
      title: 'Zener diode',
      short: 'Zener diode',
      blurb: 'A diode built to work in reverse breakdown, where its voltage stays almost constant. That makes it a voltage regulator.',
      source: 'Pages 20–24',
      tabs: [
        {
          title: 'What it is',
          html: `<p class="lead">A <b>Zener diode</b> is a silicon PN junction device operated in its <b>reverse breakdown region</b>.</p>
<p>In an ordinary diode, breakdown means high current and high power at the junction. That is destructive and the diode is damaged. A Zener is <b>heavily doped</b> and designed with enough power-dissipation capability to run safely in breakdown.</p>
<div class="kv"><div><span>Zener potentials</span><b>1.8 V to 200 V</b></div><div><span>Power ratings</span><b>¼ W to 50 W</b></div><div><span>Material</span><b>Silicon</b></div></div>
<p>Silicon is preferred because it handles higher temperature and current.</p>`
        },
        {
          title: 'V–I curve and breakdown',
          html: `<p class="lead">In forward bias a Zener behaves like an ordinary diode. In reverse bias it <b>breaks down</b>, and the breakdown voltage depends on the <b>amount of doping</b>.</p>
<figure data-fig="m2-zener-vi"></figure>
<ul><li>Heavy doping means a <b>thin depletion layer</b>, so breakdown comes at a <b>lower reverse voltage</b> and is <b>sharp</b>. You choose the breakdown voltage through the doping.</li><li>A strong reverse field tears bound electrons out of covalent bonds (direct rupture), creating many electron–hole pairs and a large reverse current at the breakdown voltage.</li><li>In the breakdown region the voltage stays almost <b>constant (V<sub>Z</sub>)</b> while the current moves between <b>I<sub>Z(min)</sub></b> and <b>I<sub>Z(max)</sub></b>.</li></ul>
<div class="note trap"><p>Zener breakdown occurs at lower breakdown voltages and avalanche breakdown at higher ones, but such diodes are normally all called Zener diodes.</p></div>`
        },
        {
          title: 'Voltage regulator',
          html: `<p class="lead">In reverse breakdown the diode voltage stays almost constant even as its current rises, so it serves as a <b>reference voltage</b> and can be used as a <b>voltage regulator</b>.</p>
<figure data-fig="m2-zener-reg"></figure>
<ul><li>Use it when you need a <b>constant voltage across a load R<sub>L</sub></b> while the input voltage varies over a range.</li><li>The Zener is <b>reverse biased</b>, in parallel with the load, with a series resistor R from the input V<sub>i</sub>.</li><li>As long as V<sub>i</sub> does <b>not fall below V<sub>Z</sub></b>, the voltage across the diode is constant, so the load voltage V<sub>o</sub> is constant too.</li></ul>`
        },
        {
          title: 'Zener vs avalanche; regulator',
          html: `<p class="lead">Two different mechanisms cause reverse breakdown, and the regulator works by letting the Zener current change while its voltage stays fixed.</p>
<table class="tbl"><thead><tr><th>Point</th><th>Zener breakdown</th><th>Avalanche breakdown</th></tr></thead><tbody>
<tr><td>Doping</td><td>Heavy; very thin depletion layer</td><td>Light; wide depletion layer</td></tr>
<tr><td>Breakdown voltage</td><td>Low, below about 5–6 V</td><td>High, above about 6 V</td></tr>
<tr><td>Mechanism</td><td>The strong field pulls electrons directly out of their covalent bonds</td><td>Minority carriers gain enough speed to knock out more electrons by collision, multiplying like an avalanche</td></tr>
<tr><td>Curve</td><td>Very sharp knee</td><td>Less sharp</td></tr>
<tr><td>Temperature effect</td><td>Breakdown voltage falls as temperature rises</td><td>Breakdown voltage rises as temperature rises</td></tr>
</tbody></table>
<div class="vs"><div class="side"><h4>Ordinary diode in reverse</h4><p>Only a tiny leakage current flows; if breakdown is reached, the large current and heat <b>destroy</b> it, so it must never be used there.</p></div><div class="side"><h4>Zener diode in reverse</h4><p>Designed to work <b>in breakdown</b>: the voltage stays at V<sub>Z</sub> and the diode is not damaged as long as the current stays below I<sub>Z(max)</sub>.</p></div></div>
<p><b>Regulator under changing load:</b> the series resistor carries I = (V<sub>i</sub> − V<sub>Z</sub>)/R, which divides as I = I<sub>Z</sub> + I<sub>L</sub>. If the load draws more current, I<sub>Z</sub> falls by the same amount, so the total and the voltage drop across R stay the same and V<sub>o</sub> = V<sub>Z</sub>. Regulation is lost if I<sub>Z</sub> falls below the knee current <b>I<sub>ZK</sub></b> (the diode leaves breakdown) or rises above I<sub>Z(max)</sub> (it overheats).</p>
<div class="worked"><div class="given">V<sub>i</sub> = 20 V, R = 200 Ω, V<sub>Z</sub> = 12 V, I<sub>ZK</sub> = 5 mA.</div><div class="solve">I = (20 − 12)/200 = 40 mA. With R<sub>L</sub> = 1 kΩ: I<sub>L</sub> = 12/1000 = 12 mA, so I<sub>Z</sub> = 40 − 12 = 28 mA. With no load, I<sub>Z</sub> = 40 mA. Largest load current keeping I<sub>Z</sub> ≥ 5 mA is 35 mA, so R<sub>L(min)</sub> = 12/0.035.</div><div class="result">I<sub>Z</sub> = 28 mA at 1 kΩ; R<sub>L(min)</sub> = 343 Ω</div></div>`
        },
        {
          title: 'Applications',
          html: `<p class="lead">Diodes in general, and Zeners in particular, appear in these circuits.</p>
<div class="vs"><div class="side"><h4>Diode circuits</h4><ul><li>Rectifiers: AC to DC for DC-operated circuits</li><li>Battery charging circuits</li><li>Protection against overcurrent, polarity reversal, and currents from an inductive kick in a relay circuit</li></ul></div><div class="side"><h4>Zener circuits</h4><ul><li>Overvoltage protection</li><li>Setting reference voltages</li></ul></div></div>`
        }
      ],
      flashcards: [
        { front: 'What is a Zener diode?', back: 'A heavily doped silicon PN junction diode operated in the reverse breakdown region.' },
        { front: 'Why does an ordinary diode get damaged in breakdown but a Zener does not?', back: 'The Zener is designed with adequate power dissipation to operate safely in breakdown.' },
        { front: 'How does doping set the Zener breakdown voltage?', back: 'Heavier doping gives a thinner depletion layer, so breakdown is at a lower reverse voltage and is sharper.' },
        { front: 'Why can a Zener act as a voltage regulator?', back: 'In breakdown the voltage across it stays almost constant while the current changes, giving a reference voltage.' },
        { front: 'Condition for the Zener regulator to hold the load voltage?', back: 'The input voltage must not fall below V_Z; the Zener is reverse biased.' },
        { front: 'Range of Zener voltages and power ratings?', back: '1.8 V to 200 V and ¼ W to 50 W.' },
        { front: 'Name two Zener circuit uses.', back: 'Overvoltage protection and setting reference voltages.' }
      ],
      oneLiners: [
        'Zener = heavily doped silicon diode working in reverse breakdown.',
        'In breakdown, V stays near V_Z while current changes: that is regulation.',
        'Heavier doping gives lower, sharper breakdown voltage.',
        'Regulator works while V_in ≥ V_Z, with the Zener reverse biased across the load.',
        'Ratings: 1.8–200 V, ¼–50 W.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-bjt-basics',
      title: 'BJT structure and biasing',
      short: 'BJT structure, bias',
      blurb: 'The three-terminal transistor: its three regions, the two symbols, and the bias voltages that make it work.',
      source: 'Pages 26–33',
      tabs: [
        {
          title: 'What a BJT is',
          html: `<p class="lead">A <b>Bipolar Junction Transistor (BJT)</b> is a <b>three-terminal</b> semiconductor device whose operation depends on both <b>majority and minority carriers</b>, hence “bipolar”. It uses both electrons and holes. Unipolar transistors, such as FETs, use only one kind of carrier.</p>
<ul><li>It is used as a <b>linear amplifier</b> to boost a signal and as an <b>electronic switch</b>.</li><li>It is a PN junction diode with a <b>second P or N region</b> added.</li><li><b>NPN</b>: two N regions and one P region. <b>PNP</b>: two P regions and one N region. Either way there are two junctions.</li></ul>
<div class="kv"><div><span>Terminals</span><b>Collector (C), Emitter (E), Base (B)</b></div><div><span>Junctions</span><b>Collector–base (CBJ), base–emitter (BEJ)</b></div></div>
<p>The course shows several packages. On the small plastic one the three leads are labelled <b>E, B, C</b> in that order.</p>`
        },
        {
          title: 'Emitter, base, collector',
          html: `<p class="lead">The three regions differ in doping and size on purpose.</p>
<table class="tbl"><thead><tr><th>Region</th><th>Doping and size</th><th>Job</th></tr></thead><tbody>
<tr><td>Emitter</td><td><b>Heavily doped</b>, more than the other regions</td><td>Supply majority charge carriers (electrons or holes) to the base</td></tr>
<tr><td>Base</td><td>Middle section, <b>very thin</b> and <b>very lightly doped</b></td><td>Pass most carriers on to the collector</td></tr>
<tr><td>Collector</td><td>Physically <b>larger</b> than the emitter</td><td>Collect the carriers that come from the emitter through the base</td></tr>
</tbody></table>
<div class="note why"><p>The collector is made larger because it must dissipate much greater power. Because of this difference you cannot swap emitter and collector: the transistor cannot be inverted.</p></div>`
        },
        {
          title: 'Symbols',
          html: `<p class="lead">The <b>arrowhead is always on the emitter</b>, never on the collector, and it shows the direction of conventional current flow.</p>
<figure data-fig="m2-bjt-symbols"></figure>
<ul><li><b>PNP:</b> arrowhead points from emitter to base. The emitter is positive with respect to the base (and the collector).</li><li><b>NPN:</b> arrowhead points from base to emitter. The base (and the collector) is positive with respect to the emitter.</li></ul>`
        },
        {
          title: 'Biasing and currents',
          html: `<p class="lead">For proper working you apply voltages of the correct polarity across both junctions, the collector–base and emitter–base junctions. This is <b>biasing</b>.</p>
<table class="tbl"><thead><tr><th>Emitter–base (EBJ)</th><th>Collector–base (CBJ)</th><th>Region</th><th>Use</th></tr></thead><tbody>
<tr><td>Forward biased</td><td>Reverse biased</td><td><b>Active</b></td><td>Amplifiers</td></tr>
<tr><td>Forward biased</td><td>Forward biased</td><td>Saturation</td><td>Switching circuits</td></tr>
<tr><td>Reverse biased</td><td>Reverse biased</td><td>Cut-off</td><td>Switching circuits</td></tr>
<tr><td>Reverse biased</td><td>Forward biased</td><td>Inverse</td><td>Hardly used</td></tr>
</tbody></table>
<div class="note exam"><p><b>Active region:</b> the emitter–base junction is <b>forward biased</b> and the collector–base junction is <b>reverse biased</b>.</p></div>
<p>In the course figure the active-region supplies are <b>V<sub>BE</sub></b> (forward) and <b>V<sub>CB</sub></b> (reverse) for an NPN, and <b>V<sub>EB</sub></b> (forward) and <b>V<sub>BC</sub></b> (reverse) for a PNP.</p>
<figure data-fig="m2-bjt-currents"></figure>
<p>Three primary currents flow in a properly biased transistor: I<sub>E</sub>, I<sub>B</sub> and I<sub>C</sub>.</p>
<div class="eq" data-label="Both NPN and PNP">I<sub>E</sub> = I<sub>B</sub> + I<sub>C</sub></div>
<p>A small part (about <b>1–2 %</b>) of the emitter current becomes the base current, and the remaining <b>98–99 %</b> becomes the collector current.</p>`
        }
      ],
      flashcards: [
        { front: 'Why is the BJT called bipolar?', back: 'Its operation depends on both majority and minority carriers (electrons and holes).' },
        { front: 'Which BJT region is heavily doped, and why?', back: 'The emitter, because it must supply majority carriers to the base.' },
        { front: 'Describe the base of a BJT.', back: 'The middle section, very thin and very lightly doped.' },
        { front: 'Why is the collector bigger than the emitter?', back: 'It has to dissipate much greater power. So the transistor cannot be used inverted.' },
        { front: 'Where is the arrowhead on a BJT symbol and what does it show?', back: 'Always on the emitter, showing the conventional current direction.' },
        { front: 'What is the inverse region of a BJT?', back: 'Emitter–base reverse biased and collector–base forward biased. It is hardly used.' },
        { front: 'Bias conditions for the active region?', back: 'Emitter–base junction forward biased, collector–base junction reverse biased.' },
        { front: 'How is the emitter current split?', back: 'I_E = I_B + I_C. About 1–2 % goes to the base and 98–99 % to the collector.' },
        { front: 'NPN versus PNP in one line each?', back: 'NPN: two N regions around one P, arrow base to emitter. PNP: two P regions around one N, arrow emitter to base.' }
      ],
      oneLiners: [
        'BJT: three terminals E, B, C; two junctions; NPN or PNP.',
        'Emitter heavily doped, base thin and light, collector larger.',
        'Active region: EBJ forward, CBJ reverse.',
        'I_E = I_B + I_C; base current is only 1–2 % of I_E.',
        'Arrow is on the emitter.'
      ],
      formulas: [
        { name: 'Emitter current', html: `I<sub>E</sub> = I<sub>B</sub> + I<sub>C</sub>`, note: 'Holds for NPN and PNP.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-bjt-operation',
      title: 'Working of NPN and PNP',
      short: 'NPN and PNP working',
      blurb: 'How carriers move through a properly biased transistor and why only a small base current is needed.',
      source: 'Pages 34–37',
      tabs: [
        {
          title: 'NPN transistor',
          html: `<p class="lead">In an NPN transistor the emitter pushes <b>electrons</b> into the base, and the collector sweeps them up.</p>
<ol class="steps"><li><b>Injection</b> The forward bias on the emitter–base junction makes a lot of electrons cross from the emitter into the base.</li><li><b>Few recombine</b> The base is lightly doped P-type, so it has very few holes. Only a few electrons combine with holes there, and that makes the small <b>base current I<sub>B</sub></b>.</li><li><b>Collection</b> The reverse-biased collector junction has a strong electric field that sweeps most of the injected electrons (almost <b>95 %</b>) into the collector, forming the <b>collector current I<sub>C</sub></b>.</li><li><b>Sum</b> The base and collector currents add to give the emitter current: I<sub>E</sub> = I<sub>B</sub> + I<sub>C</sub>.</li></ol>
<p>The course figure labels the <b>electron injection</b> across the base–emitter junction, the supplies <b>V<sub>BB</sub></b> and <b>V<sub>CC</sub></b>, and the resistors <b>R<sub>E</sub></b> and <b>R<sub>C</sub></b> in the emitter and collector leads. A second figure splits the base current into two parts, <b>i<sub>B1</sub></b> and <b>i<sub>B2</sub></b>, both small.</p>
<div class="note heads-up"><p>The course says almost <b>95 %</b> of the carriers reach the collector, but its own current page says <b>98–99 %</b> of I<sub>E</sub> becomes I<sub>C</sub>. Treat 95 % as the course's loose figure. The same line says the “reverse biased C-E junction” makes the field; it means the <b>collector–base</b> junction.</p></div>`
        },
        {
          title: 'PNP transistor',
          html: `<p class="lead">A PNP transistor works the same way with <b>holes</b> as the main carriers.</p>
<ol class="steps"><li><b>Injection</b> The forward bias on the emitter–base junction makes many holes cross from the emitter into the base.</li><li><b>Few recombine</b> The base is lightly doped N-type, so it has very few electrons. Only a few holes combine with electrons there, giving the small <b>base current I<sub>B</sub></b>.</li><li><b>Collection</b> The remaining holes (more than <b>95 %</b>) cross into the collector, forming the <b>collector current I<sub>C</sub></b>.</li><li><b>Sum</b> I<sub>E</sub> = I<sub>B</sub> + I<sub>C</sub>.</li></ol>
<p>The PNP figure labels the <b>injected holes</b>, <b>diffusing holes</b> and <b>collected holes</b> (which make I<sub>C</sub>), the <b>recombined holes</b> (i<sub>B2</sub>) and the <b>injected electrons</b> going back to the emitter. The forward-biased junction is on the emitter side and the reverse-biased one on the collector side, with supplies V<sub>EB</sub> and V<sub>BC</sub>, and V<sub>BB</sub>, V<sub>CC</sub>, R<sub>E</sub>, R<sub>C</sub> in the circuit.</p>
<div class="note heads-up"><p>The course text for the PNP says the holes form “collector current I<sub>E</sub>”. That is a typo for I<sub>C</sub>. The 95 % figure is the same loose one as for the NPN.</p></div>
<div class="note why"><p>The thin, lightly doped base is the whole trick. Carriers have almost nowhere to recombine, so nearly all of them reach the collector.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Why is the base current so small in an NPN transistor?', back: 'The base is thin and lightly doped P-type with few holes, so very few injected electrons recombine there.' },
        { front: 'What sweeps electrons from base to collector in an NPN?', back: 'The strong electric field of the reverse-biased collector junction. Almost 95 % get through.' },
        { front: 'Which carriers carry the main current in a PNP?', back: 'Holes, injected from the emitter. More than 95 % cross into the collector.' },
        { front: 'How does I_E relate to the other currents?', back: 'I_E = I_B + I_C.' },
        { front: 'Which junction is forward biased and which reverse in normal operation?', back: 'Emitter–base is forward biased; collector–base is reverse biased.' },
        { front: 'What forms the base current in a PNP?', back: 'The few holes that combine with electrons in the N-type base.' }
      ],
      oneLiners: [
        'NPN: emitter injects electrons; PNP: emitter injects holes.',
        'Base is thin and lightly doped, so few carriers recombine, giving a small I_B.',
        'More than 95 % of injected carriers reach the collector.',
        'I_E = I_B + I_C in both types.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-bjt-config',
      title: 'Configurations and CE characteristics',
      short: 'CB, CE, CC and curves',
      blurb: 'The three ways to wire a transistor, and the input and output curves of the common-emitter circuit with its three regions.',
      source: 'Pages 38–42',
      tabs: [
        {
          title: 'The three configurations',
          html: `<p class="lead">A transistor has three terminals, so one terminal has to be <b>common</b> to the input and output circuits. That gives three configurations.</p>
<figure data-fig="m2-bjt-config"></figure>
<div class="chips"><span class="chip">Common-base (CB)</span><span class="chip">Common-emitter (CE)</span><span class="chip">Common-collector (CC)</span></div>
<p>“Common” names the electrode shared by the input and output. Since the common electrode is usually grounded, these are also called <b>grounded-base</b>, <b>grounded-emitter</b> and <b>grounded-collector</b> configurations.</p>
<div class="note exam"><p><b>CE</b> gives high voltage gain, current gain and power gain compared with the other configurations.</p></div>`
        },
        {
          title: 'CE input characteristic',
          html: `<p class="lead">The input characteristic shows how <b>I<sub>B</sub> varies with V<sub>BE</sub></b> when <b>V<sub>CE</sub> is held constant</b>.</p>
<figure data-fig="m2-ce-input"></figure>
<ol class="steps"><li><b>Fix V<sub>CE</sub></b> Keep V<sub>CE</sub> at a convenient constant value.</li><li><b>Sweep V<sub>BE</sub></b> Increase V<sub>BE</sub> in steps and note I<sub>B</sub> at each step.</li><li><b>Repeat</b> Do it again for a different constant V<sub>CE</sub>. This gives a family of curves (V<sub>CE</sub> = 0 V, 10 V, 20 V in the figure).</li></ol>
<p>I<sub>B</sub> stays near zero for low V<sub>BE</sub> and then climbs steeply, like a forward-biased diode.</p>`
        },
        {
          title: 'CE output characteristic',
          html: `<p class="lead">The output characteristic shows how <b>I<sub>C</sub> varies with V<sub>CE</sub></b> when <b>I<sub>B</sub> is held constant</b>.</p>
<figure data-fig="m2-ce-output"></figure>
<ol class="steps"><li><b>Fix I<sub>B</sub></b> Set I<sub>B</sub> to a convenient constant value.</li><li><b>Sweep V<sub>CE</sub></b> Increase V<sub>CE</sub> from zero in steps and note I<sub>C</sub> each time.</li><li><b>Repeat</b> Reduce V<sub>CE</sub> to zero, set I<sub>B</sub> to another value and repeat. The result is a family of curves (I<sub>B</sub> = 0 to 60 µA in the figure).</li></ol>`
        },
        {
          title: 'CB characteristics',
          html: `<p class="lead">In the <b>common-base</b> configuration the input is applied between emitter and base and the output taken between collector and base. Its curves are measured with the base common.</p>
<figure data-fig="m2-cb-characteristics"></figure>
<ul><li><b>Input characteristic:</b> I<sub>E</sub> against V<sub>EB</sub> with V<sub>CB</sub> constant. It looks like a forward-biased diode: almost no current until about 0.7 V (silicon), then a steep rise. A higher V<sub>CB</sub> shifts the curve slightly left (early effect), because the wider collector depletion layer narrows the base.</li>
<li><b>Output characteristic:</b> I<sub>C</sub> against V<sub>CB</sub> with I<sub>E</sub> constant. In the <b>active region</b> (V<sub>CB</sub> positive) the lines are flat and I<sub>C</sub> ≈ I<sub>E</sub> (α ≈ 0.98), almost independent of V<sub>CB</sub>. When V<sub>CB</sub> is made slightly negative the collector junction becomes forward biased (<b>saturation</b>) and I<sub>C</sub> drops quickly to zero. With I<sub>E</sub> = 0 (cut-off) only a tiny leakage I<sub>CBO</sub> flows.</li></ul>
<div class="note why"><p>CB has current gain just under 1, very low input resistance and very high output resistance. It gives voltage gain and is used in high-frequency amplifiers.</p></div>`
        },
        {
          title: 'Transistor as a switch',
          html: `<p class="lead">A transistor works as an electronic <b>switch</b> by being driven fully between <b>cut-off (OFF)</b> and <b>saturation (ON)</b>, never staying in the active region.</p>
<figure data-fig="m2-bjt-switch"></figure>
<ol class="steps"><li><b>Input low (0 V):</b> the base–emitter junction is not forward biased, so I<sub>B</sub> = 0 and I<sub>C</sub> = 0. The transistor is in cut-off, acting as an <b>open switch</b>; V<sub>CE</sub> = V<sub>CC</sub> and the load is off.</li>
<li><b>Input high:</b> enough base current flows through R<sub>B</sub> to drive the transistor into saturation. Both junctions are forward biased, V<sub>CE</sub> ≈ 0.2 V, and it acts as a <b>closed switch</b>; the load current is I<sub>C</sub> ≈ V<sub>CC</sub>/R<sub>C</sub>.</li>
<li>For saturation, I<sub>B</sub> must be at least I<sub>C(sat)</sub>/β.</li></ol>
<div class="note example"><p>A microcontroller pin (5 V, a few mA) switching a 12 V relay or an LED string; logic gates; motor drivers.</p></div>`
        },
        {
          title: 'Three regions',
          html: `<p class="lead">The output curves divide into <b>active</b>, <b>cut-off</b> and <b>saturation</b> regions. The course's bias table lists a <b>fourth</b>, the inverse region, which is hardly used.</p>
<table class="tbl"><thead><tr><th>Region</th><th>Junctions</th><th>Conditions</th><th>Use</th></tr></thead><tbody>
<tr><td>Active</td><td>EBJ forward biased, CBJ reverse biased</td><td>I<sub>C</sub> follows I<sub>B</sub></td><td>Voltage, current or power <b>amplification</b></td></tr>
<tr><td>Cut-off</td><td>EBJ and CBJ both reverse biased</td><td>I<sub>B</sub> = 0, I<sub>C</sub> = 0, V<sub>CE</sub> maximum; large depletion layer, no current</td><td>Switch <b>fully OFF</b></td></tr>
<tr><td>Saturation</td><td>EBJ and CBJ both forward biased</td><td>Maximum base current, maximum I<sub>C</sub>, minimum V<sub>CE</sub>; depletion layer as small as possible</td><td>Switch <b>fully ON</b></td></tr>
<tr><td>Inverse</td><td>EBJ reverse biased, CBJ forward biased</td><td>Not marked on the CE output curves</td><td>Hardly used</td></tr>
</tbody></table>
<div class="note why"><p>A transistor used as a switch jumps between cut-off and saturation. Used as an amplifier it stays in the active region.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Name the three BJT configurations.', back: 'Common-base (CB), common-emitter (CE) and common-collector (CC).' },
        { front: 'What does “common” mean in a configuration?', back: 'The electrode shared by the input and output circuits, usually grounded.' },
        { front: 'Which configuration gives the highest voltage, current and power gain?', back: 'Common-emitter (CE).' },
        { front: 'What does the CE input characteristic plot?', back: 'I_B against V_BE with V_CE held constant.' },
        { front: 'What does the CE output characteristic plot?', back: 'I_C against V_CE with I_B held constant.' },
        { front: 'What happens in the cut-off region?', back: 'I_B = 0, I_C = 0, V_CE is maximum, so the transistor is fully OFF.' },
        { front: 'What happens in saturation?', back: 'Maximum I_B and I_C, minimum V_CE, so the transistor is fully ON.' },
        { front: 'Which region is used for amplification?', back: 'The active region (BEJ forward, CBJ reverse).' }
      ],
      oneLiners: [
        'CE is the high-gain configuration.',
        'Input curve: I_B vs V_BE at fixed V_CE. Output curve: I_C vs V_CE at fixed I_B.',
        'Active = amplifier; cut-off = switch OFF; saturation = switch ON.',
        'Saturation has minimum V_CE; cut-off has maximum V_CE.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-bjt-gains',
      title: 'Alpha, beta and current relations',
      short: 'α, β relations',
      blurb: 'The two current gains of a transistor and the formulas that convert between them and the three currents.',
      source: 'Pages 43–45',
      tabs: [
        {
          title: 'Alpha',
          html: `<p class="lead"><b>Alpha (α)</b> is the ratio of collector current to emitter current.</p>
<div class="eq">α = <span class="frac"><span>I<sub>C</sub></span><span>I<sub>E</sub></span></span></div>
<ul><li>α measures the <b>quality</b> of a transistor: the higher it is, the more closely I<sub>C</sub> equals I<sub>E</sub>.</li><li>Its value ranges from <b>0.95 to 0.999</b>.</li><li>α is <b>always less than unity</b>, because I<sub>C</sub> is I<sub>E</sub> minus the small I<sub>B</sub>.</li></ul>
<p>The load resistance R<sub>L</sub> is connected in series with the collector, and the current gain of the common-emitter configuration is quite large.</p>`
        },
        {
          title: 'Beta and the relations',
          html: `<p class="lead"><b>Beta (β)</b> is the ratio of collector current to base current.</p>
<div class="eq">β = <span class="frac"><span>I<sub>C</sub></span><span>I<sub>B</sub></span></span> = <span class="frac"><span>I<sub>C</sub></span><span>I<sub>E</sub> − I<sub>C</sub></span></span> = <span class="frac"><span>α</span><span>1 − α</span></span></div>
<p>It is possible for β to be as high as <b>500</b>. The other direction:</p>
<div class="eq">α = <span class="frac"><span>β</span><span>1 + β</span></span></div>
<div class="note why"><p>Dividing top and bottom of α/(1 − α) by I<sub>E</sub> shows why: I<sub>E</sub> − I<sub>C</sub> is just I<sub>B</sub>, so α/(1 − α) = I<sub>C</sub>/I<sub>B</sub>.</p></div>
<div data-viz="bjt-currents"></div>`
        },
        {
          title: 'Current relations',
          html: `<p class="lead">Given any one current and either gain, you can find the others.</p>
<div class="eq" data-label="IC from IB and IE">I<sub>C</sub> = βI<sub>B</sub> = αI<sub>E</sub> = <span class="frac"><span>β</span><span>1 + β</span></span> I<sub>E</sub></div>
<div class="eq" data-label="IB from IC and IE">I<sub>B</sub> = <span class="frac"><span>I<sub>C</sub></span><span>β</span></span> = <span class="frac"><span>I<sub>E</sub></span><span>1 + β</span></span> = (1 − α) I<sub>E</sub></div>
<div class="eq" data-label="IE from IC and IB">I<sub>E</sub> = <span class="frac"><span>I<sub>C</sub></span><span>α</span></span> = <span class="frac"><span>1 + β</span><span>β</span></span> I<sub>C</sub> = (1 + β) I<sub>B</sub> = <span class="frac"><span>I<sub>B</sub></span><span>1 − α</span></span></div>
<div class="worked"><div class="given"><p>A transistor has I<sub>B</sub> = 50 µA and β = 100. Find I<sub>C</sub>, I<sub>E</sub> and α.</p></div><div class="solve"><div class="eq">I<sub>C</sub> = βI<sub>B</sub> = 100 × 50 µA = 5 mA</div><div class="eq">I<sub>E</sub> = (1 + β)I<sub>B</sub> = 101 × 50 µA = 5.05 mA</div><div class="eq">α = β/(1 + β) = 100/101</div></div><div class="result"><p>I<sub>C</sub> = 5 mA, I<sub>E</sub> = 5.05 mA, α = 0.990</p></div></div>
<div class="worked"><div class="given"><p>A transistor has α = 0.98 and I<sub>E</sub> = 10 mA. Find β, I<sub>C</sub> and I<sub>B</sub>.</p></div><div class="solve"><div class="eq">β = α/(1 − α) = 0.98/0.02 = 49</div><div class="eq">I<sub>C</sub> = αI<sub>E</sub> = 0.98 × 10 mA = 9.8 mA</div><div class="eq">I<sub>B</sub> = (1 − α)I<sub>E</sub> = 0.02 × 10 mA = 0.2 mA</div></div><div class="result"><p>β = 49, I<sub>C</sub> = 9.8 mA, I<sub>B</sub> = 0.2 mA</p></div></div>`
        }
      ],
      flashcards: [
        { front: 'Define alpha of a transistor and its range.', back: 'α = I_C / I_E. It lies between 0.95 and 0.999 and is always less than 1.' },
        { front: 'Define beta of a transistor.', back: 'β = I_C / I_B. It can be as high as 500.' },
        { front: 'Write β in terms of α.', back: 'β = α / (1 − α).' },
        { front: 'Write α in terms of β.', back: 'α = β / (1 + β).' },
        { front: 'Express I_E using I_B and β.', back: 'I_E = (1 + β) I_B.' },
        { front: 'Express I_B using I_E and α.', back: 'I_B = (1 − α) I_E.' },
        { front: 'With I_B = 50 µA and β = 100, what are I_C and I_E?', back: 'I_C = 5 mA and I_E = 5.05 mA.' },
        { front: 'Why is α always below 1?', back: 'I_C = I_E − I_B, and I_B is never zero, so I_C is slightly smaller than I_E.' }
      ],
      oneLiners: [
        'α = I_C/I_E (0.95–0.999, always < 1); β = I_C/I_B (up to 500).',
        'β = α/(1−α) and α = β/(1+β).',
        'I_C = βI_B = αI_E; I_E = (1+β)I_B; I_B = (1−α)I_E.',
        'A higher α means a better transistor.'
      ],
      formulas: [
        { name: 'Current gain α', html: `α = I<sub>C</sub> / I<sub>E</sub>`, note: 'Always below 1.' },
        { name: 'Current gain β', html: `β = I<sub>C</sub> / I<sub>B</sub> = α / (1 − α)`, note: 'Up to about 500.' },
        { name: 'α from β', html: `α = β / (1 + β)`, note: '' },
        { name: 'Emitter current', html: `I<sub>E</sub> = (1 + β) I<sub>B</sub> = I<sub>C</sub> / α`, note: '' },
        { name: 'Base current', html: `I<sub>B</sub> = (1 − α) I<sub>E</sub>`, note: '' }
      ]
    }
  ],
  figures: [
    { id: 'm2-bjt-switch', src: 'own/README.txt', crop: null, caption: 'NPN transistor as a switch: cut-off when the input is low, saturation when it is high.', alt: 'NPN transistor with base resistor from V_in, collector resistor load to +V_CC and emitter to ground.' },
    { id: 'm2-cb-characteristics', src: 'own/README.txt', crop: null, caption: 'Common-base input (I<sub>E</sub> against V<sub>EB</sub>) and output (I<sub>C</sub> against V<sub>CB</sub>) characteristics.', alt: 'Two graphs: diode-like input curves for two V_CB values, and flat output lines for three emitter currents with a saturation strip at negative V_CB.' },
    { id: 'm2-pn-bias', src: 'm2/pages/p14.png', crop: null, caption: 'Forward bias: positive battery terminal to P, negative to N, so the carriers are pushed towards the junction and cross it. Reverse bias is the opposite connection and widens the depletion region.', alt: 'Two PN junctions, one forward biased and one reverse biased, showing the depletion region and battery polarity.' },
    { id: 'm2-diode-vi', src: 'm2/pages/p17.png', crop: null, caption: 'Diode V–I curve: the knee at 0.3 V (germanium) or 0.7 V (silicon), tiny reverse leakage, then breakdown.', alt: 'Graph of diode current against voltage with forward and reverse regions and the breakdown point.' },
    { id: 'm2-rectifiers', src: 'm2/pages/p19.png', crop: null, caption: 'Half-wave rectifier with one diode, and full-wave bridge rectifier with four diodes, with input and output waveforms.', alt: 'Half-wave and full-wave rectifier circuits with their waveforms.' },
    { id: 'm2-zener-vi', src: 'm2/pages/p21.png', crop: null, caption: 'Zener V–I curve: in reverse breakdown the voltage stays near V_Z while the current moves between I_Z(min) and I_Z(max).', alt: 'Zener diode characteristic with the constant voltage breakdown region.' },
    { id: 'm2-zener-reg', src: 'm2/pages/p23.png', crop: null, caption: 'Zener voltage regulator: series resistor R, Zener in parallel with the load R_L, and a steady output despite a varying input.', alt: 'Circuit of a Zener diode regulator with load and input and output voltage graph.' },
    { id: 'm2-bjt-symbols', src: 'm2/pages/p30.png', crop: null, caption: 'NPN and PNP symbols. The arrow is on the emitter.', alt: 'Symbols of NPN and PNP transistors with labelled terminals.' },
    { id: 'm2-bjt-currents', src: 'm2/pages/p33.png', crop: null, caption: 'Currents and voltages of a biased NPN and PNP transistor: I_E = I_B + I_C.', alt: 'NPN and PNP transistors with I_E, I_B, I_C and bias voltages marked.' },
    { id: 'm2-bjt-config', src: 'm2/pages/p38.png', crop: null, caption: 'Common-base, common-emitter and common-collector connections.', alt: 'Three transistor circuits with the common terminal grounded.' },
    { id: 'm2-ce-input', src: 'm2/pages/p40.png', crop: null, caption: 'CE input characteristic: I_B against V_BE for V_CE = 0, 10 and 20 V.', alt: 'Family of input curves of a common-emitter transistor.' },
    { id: 'm2-ce-output', src: 'm2/pages/p41.png', crop: null, caption: 'CE output characteristic: I_C against V_CE for I_B from 0 to 60 µA, with the active, saturation and cut-off regions.', alt: 'Family of output curves of a common-emitter transistor with three regions.' }
  ]
});
