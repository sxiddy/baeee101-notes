CHUNK({
  chunk: '2b',
  module: 'm2',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm2-mosfet-intro',
      title: 'MOSFET basics and types',
      short: 'MOSFET basics',
      blurb: 'The voltage-controlled transistor: its four terminals, how the channel carries current and the family tree of MOSFET types.',
      source: 'Pages 47–50',
      tabs: [
        {
          title: 'What a MOSFET is',
          html: `<p class="lead">The main difference between the two common transistors: the <b>BJT is current controlled</b> and the <b>MOSFET is voltage controlled</b>.</p>
<ul><li>In a <b>Field Effect Transistor (FET)</b> the current through the conducting region is controlled by an <b>electric field</b>, hence the name.</li><li>The MOSFET is a <b>unipolar</b> device: it depends only on electron conduction (n-channel) or only on hole conduction (p-channel).</li><li>FETs come in two constructions: the <b>Junction FET (JFET)</b> and the <b>Metal Oxide Semiconductor FET (MOSFET)</b>, also called <b>Insulated Gate FET (IGFET)</b> or Metal Oxide Silicon Transistor (MOST).</li><li>There are two forms of MOSFET: <b>enhancement</b> and <b>depletion</b>.</li></ul>
<table class="tbl"><thead><tr><th></th><th>Enhancement MOSFET</th><th>Depletion MOSFET</th></tr></thead><tbody>
<tr><td>Effect of the controlling field</td><td>Increases the number of majority carriers in the conducting region</td><td>Reduces the number of majority carriers available for conduction</td></tr>
</tbody></table>
<figure data-fig="m2-mosfet-types"></figure>`
        },
        {
          title: 'Terminals',
          html: `<p class="lead">A MOSFET is a <b>4-terminal</b> device: Drain, Source, Gate and Substrate (Body).</p>
<div class="kv"><div><span>Gate (G)</span><b>Controls the channel conductivity</b></div><div><span>Drain (D)</span><b>Terminal through which current exits</b></div><div><span>Source (S)</span><b>Terminal through which current enters</b></div><div><span>Body (B)</span><b>The substrate the MOSFET is built on, usually connected to the source</b></div></div>
<ul><li>The drain and source are connected to <b>heavily doped</b> regions.</li><li>The gate is connected to the <b>oxide layer</b>.</li><li>The substrate is frequently tied to the source, which makes the device <b>three-terminal like a BJT</b>.</li></ul>`
        },
        {
          title: 'N-channel and P-channel',
          html: `<p class="lead">A MOSFET works by electronically <b>varying the width of a channel</b> along which charge carriers (electrons or holes) flow.</p>
<ul><li>Carriers <b>enter the channel at the source</b> and <b>leave at the drain</b>.</li><li>The channel width is controlled by the voltage on the <b>gate</b>, an electrode between source and drain.</li><li>The gate is insulated from the channel by an extremely thin layer of <b>metal oxide</b>.</li></ul>
<div class="vs"><div class="side"><h4>n-channel (nMOS)</h4><p>Source and drain are heavily doped <b>n</b> regions. The body is <b>p</b>.</p></div><div class="side"><h4>p-channel (pMOS)</h4><p>Source and drain are heavily doped <b>p</b> regions. The body is <b>n</b>.</p></div></div>`
        }
      ],
      flashcards: [
        { front: 'BJT versus MOSFET: what controls each?', back: 'The BJT is current controlled; the MOSFET is voltage controlled (by an electric field).' },
        { front: 'Why is the MOSFET called unipolar?', back: 'Only one kind of carrier conducts: electrons in n-channel, holes in p-channel.' },
        { front: 'Name the four MOSFET terminals.', back: 'Drain, Source, Gate and Substrate (Body).' },
        { front: 'What does the gate do?', back: 'Controls the channel conductivity. It sits on an extremely thin oxide layer.' },
        { front: 'Why can a MOSFET be treated as a three-terminal device?', back: 'The substrate is frequently connected to the source.' },
        { front: 'What is the difference between enhancement and depletion MOSFETs in terms of the field?', back: 'Enhancement: the field increases majority carriers. Depletion: the field reduces them.' },
        { front: 'What are the source and drain made of in an nMOS?', back: 'Heavily doped n regions in a p-type body.' }
      ],
      oneLiners: [
        'MOSFET = voltage-controlled, unipolar, 4-terminal (D, S, G, B).',
        'Other names: IGFET, MOST.',
        'Enhancement MOSFET adds carriers; depletion MOSFET removes them.',
        'Carriers enter at the source and exit at the drain; the gate sets the channel width.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-emosfet',
      title: 'Enhancement MOSFET',
      short: 'Enhancement MOSFET',
      blurb: 'The normally-off MOSFET: how it is built, why the gate gives it a very high input impedance and its three operating regions.',
      source: 'Pages 51–54',
      tabs: [
        {
          title: 'Construction',
          html: `<p class="lead">An enhancement MOSFET has <b>no continuous channel</b> between source and drain. The symbol shows this with a <b>broken line</b>.</p>
<figure data-fig="m2-emosfet-structure"></figure>
<ol class="steps"><li><b>Substrate</b> Two highly doped <b>N<sup>+</sup></b> regions are diffused into a lightly doped <b>P-type silicon substrate</b>.</li><li><b>Oxide</b> A thin insulating layer of <b>SiO<sub>2</sub></b> is grown over the surface, with holes cut in it for contact to the source and drain.</li><li><b>Gate</b> A thin layer of <b>aluminium</b> is formed over the SiO<sub>2</sub>. It covers the whole channel region and forms the gate G.</li></ol>
<p>The metal gate, the SiO<sub>2</sub> insulator and the semiconductor channel together form a <b>parallel-plate capacitor</b>. That is why it is the <b>insulated gate</b> FET, and the oxide layer gives the MOSFET an <b>extremely high input impedance</b>.</p>`
        },
        {
          title: 'Working',
          html: `<p class="lead">Enhancement MOSFETs are <b>normally off</b>.</p>
<figure data-fig="m2-emosfet-working"></figure>
<ul><li>With <b>no gate voltage</b>, no current flows from drain to source.</li><li>Apply a voltage to the gate and the drain–source channel becomes <b>less resistive</b>. The positive gate voltage repels holes and attracts electrons, which forms the <b>induced N-channel</b>.</li><li>As the gate–source voltage rises, the drain current rises, until the maximum current flows.</li><li>It is called an <b>enhancement</b> device because more gate voltage means more current.</li></ul>
<div class="note why"><p>An enhancement MOSFET behaves very similarly to a BJT in action: a small control input, here a gate voltage, switches and scales a larger current.</p></div>`
        },
        {
          title: 'Operating regions',
          html: `<p class="lead">Operation divides into three regions, set by V<sub>GS</sub> and V<sub>DS</sub>.</p>
<figure data-fig="m2-mosfet-curves"></figure>
<table class="tbl"><thead><tr><th>Region</th><th>Condition</th><th>What happens</th></tr></thead><tbody>
<tr><td>Cut-off (OFF)</td><td>V<sub>GS</sub> below the threshold V<sub>th</sub></td><td>MOSFET off, no drain-to-source current</td></tr>
<tr><td>Linear (ohmic)</td><td>V<sub>GS</sub> &gt; V<sub>th</sub></td><td>A conductive channel forms and the MOSFET acts like a <b>resistor</b>. I<sub>D</sub> is proportional to V<sub>DS</sub></td></tr>
<tr><td>Saturation (active)</td><td>V<sub>DS</sub> &gt; (V<sub>GS</sub> − V<sub>th</sub>)</td><td>Acts as a <b>constant current source</b>. Widely used in amplifier circuits</td></tr>
</tbody></table>
<div class="note exam"><p>In the output curves the boundary between ohmic and active is the line V<sub>DS</sub> = V<sub>GS</sub> − V<sub>th</sub>. Each curve for a higher V<sub>GS</sub> carries more current.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Why does an enhancement MOSFET have a broken line in its symbol?', back: 'There is no continuous channel between source and drain when the gate voltage is zero.' },
        { front: 'What is the gate made of and what insulates it?', back: 'A thin aluminium layer over a thin SiO2 insulating layer.' },
        { front: 'Why is the MOSFET input impedance extremely high?', back: 'The SiO2 layer insulates the gate from the channel.' },
        { front: 'Is an enhancement MOSFET normally ON or OFF?', back: 'Normally OFF: no drain current at zero gate voltage.' },
        { front: 'Why is it called an enhancement device?', back: 'Increasing the gate voltage increases the drain current, up to the maximum.' },
        { front: 'What are the three operating regions?', back: 'Cut-off (V_GS < V_th), linear/ohmic (V_GS > V_th, acts like a resistor) and saturation/active (V_DS > V_GS − V_th, constant current source).' },
        { front: 'Which region is used for amplifier circuits?', back: 'Saturation (active) region.' },
        { front: 'What forms the gate capacitor?', back: 'The metal gate, the SiO2 insulator and the semiconductor channel: a parallel-plate capacitor.' }
      ],
      oneLiners: [
        'Enhancement MOSFET: normally off, more V_GS gives more I_D.',
        'Cut-off V_GS < V_th; ohmic acts as a resistor; saturation V_DS > V_GS − V_th is a constant current source.',
        'Gate: Al over SiO2 over channel, a parallel-plate capacitor with very high input impedance.',
        'Construction: two N+ regions in a lightly doped P-type substrate.'
      ],
      formulas: [
        { name: 'Saturation condition', html: `V<sub>DS</sub> &gt; V<sub>GS</sub> − V<sub>th</sub>`, note: 'Below this the MOSFET is in the ohmic region.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-dmosfet',
      title: 'Depletion MOSFET',
      short: 'Depletion MOSFET',
      blurb: 'The normally-on MOSFET, built with a channel already in place, and how a gate voltage chokes it off.',
      source: 'Pages 55–57',
      tabs: [
        {
          title: 'Construction',
          html: `<p class="lead">A depletion MOSFET is built like an enhancement MOSFET, <b>except for a channel added between the drain and source</b>.</p>
<figure data-fig="m2-dmosfet-structure"></figure>
<p>In the cross-section the channel (N-type here) runs under the oxide between the two N<sup>+</sup> regions, so the symbol has a solid line instead of a broken one.</p>`
        },
        {
          title: 'Working',
          html: `<p class="lead">Depletion MOSFETs are <b>normally ON</b>. Current flows from drain to source <b>without any gate voltage</b>.</p>
<ul><li>Maximum current flows when <b>V<sub>GS</sub> = 0</b>.</li><li>Apply a gate voltage and the drain–source channel becomes <b>more resistive</b>. As it increases, the current falls, until it <b>ceases to flow</b>.</li><li>It is called a <b>depletion</b> device because more gate voltage depletes the current.</li></ul>
<figure data-fig="m2-dmosfet-curves"></figure>
<p>The curves show the depletion mode (negative V<sub>GS</sub> such as −1 V, −2 V, −3 V, which reduces I<sub>D</sub>) and, above V<sub>GS</sub> = 0, the enhancement mode (+1 V to +3 V, which raises I<sub>D</sub>).</p>`
        },
        {
          title: 'Dual-mode',
          html: `<p class="lead">A depletion MOSFET can be driven with <b>bipolar input signals</b> (both positive and negative gate voltage), whatever the doping of the channel. That is why it is also called a <b>dual-mode MOSFET</b>.</p>
<table class="tbl"><thead><tr><th></th><th>Enhancement</th><th>Depletion</th></tr></thead><tbody>
<tr><td>At V<sub>GS</sub> = 0</td><td>No current (normally off)</td><td>Maximum current (normally on)</td></tr>
<tr><td>More gate voltage</td><td>More current</td><td>Less current, until zero</td></tr>
<tr><td>Channel</td><td>None until induced</td><td>Built in during manufacture</td></tr>
</tbody></table>`
        }
      ],
      flashcards: [
        { front: 'How does a depletion MOSFET differ in construction from an enhancement MOSFET?', back: 'A channel is added between the drain and source.' },
        { front: 'Is a depletion MOSFET normally ON or OFF?', back: 'Normally ON: it conducts with no gate voltage.' },
        { front: 'When is the drain current maximum in a depletion MOSFET?', back: 'When V_GS = 0.' },
        { front: 'Why is it called a depletion device?', back: 'Increasing the gate voltage depletes the current until it stops.' },
        { front: 'Why is a depletion MOSFET called dual-mode?', back: 'It works with bipolar (positive and negative) gate input signals, giving both depletion and enhancement operation.' },
        { front: 'Enhancement versus depletion at V_GS = 0?', back: 'Enhancement: no current. Depletion: maximum current.' }
      ],
      oneLiners: [
        'Depletion MOSFET = normally on; built-in channel.',
        'More gate voltage reduces current until it ceases.',
        'Dual-mode: works with bipolar input signals.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-mosfet-apps',
      title: 'MOSFET uses, pros and cons',
      short: 'MOSFET uses, pros, cons',
      blurb: 'Where MOSFETs are used and what they are good and bad at.',
      source: 'Pages 58–59',
      tabs: [
        {
          title: 'Applications',
          html: `<p class="lead">MOSFETs turn up wherever efficient switching or low-power amplification is needed.</p>
<table class="tbl"><thead><tr><th>Area</th><th>Use</th></tr></thead><tbody>
<tr><td>Power electronics</td><td>Switch-Mode Power Supplies (SMPS) for efficient power conversion; DC–DC converters and inverters; motor control circuits</td></tr>
<tr><td>Digital circuits and microprocessors</td><td>CMOS technology for logic gates in microcontrollers and CPUs; memory devices such as DRAM and SRAM</td></tr>
<tr><td>RF and analog circuits</td><td>Low-noise amplifiers (LNA); radio-frequency (RF) oscillators</td></tr>
<tr><td>Automotive electronics</td><td>Electric Vehicle (EV) powertrains; battery management systems (BMS)</td></tr>
<tr><td>Audio amplifiers</td><td>High linearity and low distortion in high-fidelity amplifiers</td></tr>
</tbody></table>`
        },
        {
          title: 'Advantages and disadvantages',
          html: `<p class="lead">The same thin oxide that gives the MOSFET its high input impedance is also its weak point.</p>
<div class="vs"><div class="side"><h4>Advantages</h4><ul><li>Higher switching speed</li><li>Lower power consumption</li><li>Higher input impedance</li><li>Better thermal stability</li><li>Greater efficiency at lower voltages</li></ul></div><div class="side"><h4>Disadvantages</h4><ul><li>The thin oxide layer makes MOSFETs vulnerable to permanent damage from <b>electrostatic charges</b></li><li><b>Overload voltages</b> make it unstable</li></ul></div></div>`
        }
      ],
      flashcards: [
        { front: 'Name two power-electronics uses of MOSFETs.', back: 'SMPS (switch-mode power supplies), DC–DC converters, inverters, motor control.' },
        { front: 'Which technology uses MOSFETs for logic gates in CPUs?', back: 'CMOS.' },
        { front: 'Which memories use MOSFETs?', back: 'DRAM and SRAM.' },
        { front: 'Why are MOSFETs good for hi-fi audio amplifiers?', back: 'High linearity and low distortion.' },
        { front: 'Name three advantages of a MOSFET.', back: 'Higher switching speed, lower power consumption, higher input impedance (also better thermal stability and efficiency at low voltages).' },
        { front: 'Main disadvantage of a MOSFET?', back: 'The thin oxide layer can be permanently damaged by electrostatic charge; overload voltages make it unstable.' }
      ],
      oneLiners: [
        'Uses: SMPS, inverters, motor control, CMOS logic, DRAM/SRAM, LNA, EV powertrains, BMS, audio.',
        'Pros: fast, low power, high input impedance, thermally stable.',
        'Cons: static damage to the thin oxide; unstable under overload.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-opamp-intro',
      title: 'Operational amplifier',
      short: 'Operational amplifier',
      blurb: 'What an op-amp is, why it has that name, and how its inputs behave in single-ended, differential and common-mode operation.',
      source: 'Pages 61–66',
      tabs: [
        {
          title: 'What it is',
          html: `<p class="lead">An <b>operational amplifier</b> is a <b>very high gain</b> amplifier with <b>very high input impedance</b> (typically a few megaohms) and <b>low output impedance</b> (less than 100 Ω).</p>
<ul><li>The basic circuit is a <b>difference amplifier</b> with two inputs (plus and minus) and at least one output.</li><li>It performs many <b>linear operations</b> and some non-linear functions, so it is often called the <b>analog</b> or <b>linear integrated circuit</b>.</li><li>The name comes from its use for circuit operations such as <b>summation, scaling, differentiation and integration</b>, and in analog computers.</li></ul>
<figure data-fig="m2-opamp-symbol"></figure>
<p>Each input gives an output of the <b>same polarity (phase)</b> or the <b>opposite</b> one, depending on whether the signal goes to the <b>plus (+)</b> or the <b>minus (−)</b> input.</p>`
        },
        {
          title: 'Single-ended input',
          html: `<p class="lead">In <b>single-ended</b> operation the signal goes to <b>one input</b> and the other input is connected to <b>ground</b>.</p>
<figure data-fig="m2-opamp-single"></figure>
<div class="vs"><div class="side"><h4>Signal on + input</h4><p>The minus input is at ground. The output has the <b>same polarity</b> as the input.</p></div><div class="side"><h4>Signal on − input</h4><p>The plus input is at ground. The output is <b>opposite in phase</b> to the input.</p></div></div>`
        },
        {
          title: 'Double-ended and common mode',
          html: `<p class="lead">In <b>double-ended (differential)</b> operation signals are applied at <b>both inputs</b>.</p>
<figure data-fig="m2-opamp-diff"></figure>
<ul><li>Input <b>V<sub>d</sub></b> applied between the two input terminals (neither at ground): the amplified output is <b>in phase</b> with the signal between the plus and minus inputs.</li><li>When two separate signals are applied, the op-amp amplifies the <b>difference signal V<sub>i1</sub> − V<sub>i2</sub></b>.</li></ul>
<h3>Common-mode operation</h3>
<figure data-fig="m2-opamp-common"></figure>
<p>When the <b>same signal</b> goes to both inputs, the two inputs are ideally equally amplified, and because they give opposite polarity at the output, they <b>cancel</b>: <b>0 V output</b>. In practice a <b>small output signal</b> remains.</p>`
        },
        {
          title: 'The 741 package',
          html: `<p class="lead">A practical op-amp, the <b>µA741</b>, is an 8-pin chip.</p>
<figure data-fig="m2-opamp-741"></figure>
<div class="kv"><div><span>Pin 1</span><b>Input offset</b></div><div><span>Pin 2</span><b>Inverting input</b></div><div><span>Pin 3</span><b>Non-inverting input</b></div><div><span>Pin 4</span><b>−V<sub>CC</sub> supply</b></div><div><span>Pin 5</span><b>Input offset</b></div><div><span>Pin 6</span><b>Output</b></div><div><span>Pin 7</span><b>+V<sub>CC</sub> supply</b></div><div><span>Pin 8</span><b>NC (not connected)</b></div></div>`
        }
      ],
      flashcards: [
        { front: 'What is an operational amplifier?', back: 'A very high gain amplifier with very high input impedance (a few megaohms) and low output impedance (below 100 Ω), built on a difference amplifier with plus and minus inputs.' },
        { front: 'Why is it called an operational amplifier?', back: 'Because it performs operations such as summation, scaling, differentiation and integration.' },
        { front: 'What happens if the signal goes to the + input (− grounded)?', back: 'The output has the same polarity as the input.' },
        { front: 'What happens if the signal goes to the − input (+ grounded)?', back: 'The output is opposite in phase.' },
        { front: 'What does an op-amp amplify in differential mode?', back: 'The difference signal V_i1 − V_i2.' },
        { front: 'What is the output in ideal common-mode operation?', back: '0 V: the equal signals cancel. In practice a small output remains.' },
        { front: 'Which pins are the inputs and output on the 741?', back: 'Pin 2 inverting input, pin 3 non-inverting input, pin 6 output. Supplies: pin 7 +Vcc, pin 4 −Vcc.' },
        { front: 'Why is an op-amp also called a linear integrated circuit?', back: 'It performs many linear operations (and some non-linear functions) as an analog IC.' }
      ],
      oneLiners: [
        'Op-amp: very high gain, very high Zin (megaohms), low Zout (< 100 Ω).',
        '+ input is non-inverting (same phase); − input is inverting (opposite phase).',
        'Differential mode amplifies V_i1 − V_i2; common mode ideally gives 0 V.',
        '741: pin 2 (−), 3 (+), 6 output, 7 +Vcc, 4 −Vcc, 1 and 5 offset, 8 NC.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-opamp-ideal',
      title: 'Ideal op-amp characteristics',
      short: 'Ideal op-amp',
      blurb: 'The ideal values we assume when we analyse an op-amp, and what each one means in practice.',
      source: 'Pages 66–68',
      tabs: [
        {
          title: 'The ideal list',
          html: `<p class="lead">An ideal op-amp has these characteristics.</p>
<div class="chips"><span class="chip">Infinite open-loop gain</span><span class="chip">Infinite bandwidth</span><span class="chip">Zero common-mode gain</span><span class="chip">Infinite input impedance</span><span class="chip">Zero output impedance</span></div>
<p>With infinite input impedance, no current flows into either input (i<sub>1</sub> = i<sub>2</sub> = 0 in the diagram).</p>`
        },
        {
          title: 'What each one means',
          html: `<table class="tbl"><thead><tr><th>Characteristic</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Infinite input resistance R<sub>i</sub></td><td>Almost any signal source can drive it, and the input source is not loaded</td></tr>
<tr><td>Zero output resistance R<sub>o</sub></td><td>The output can drive an infinite number of other devices</td></tr>
<tr><td>Zero output voltage when input voltage is zero</td><td>No offset at the output</td></tr>
<tr><td>Infinite bandwidth</td><td>Any frequency from 0 to infinite Hz is amplified without attenuation</td></tr>
<tr><td>Infinite common-mode rejection ratio</td><td>Common-mode noise voltage at the output is zero</td></tr>
<tr><td>Infinite slew rate</td><td>Output voltage changes occur simultaneously with input voltage changes</td></tr>
</tbody></table>
<div class="note trap"><p>These are ideal values. A real op-amp such as the 741 has a large but finite gain, a finite bandwidth and a small output in common mode.</p></div>`
        }
      ],
      flashcards: [
        { front: 'List the ideal op-amp characteristics.', back: 'Infinite open-loop gain, infinite bandwidth, zero common-mode gain, infinite input impedance, zero output impedance.' },
        { front: 'What does infinite input resistance mean for the source?', back: 'Almost any signal source can drive it and the source is not loaded.' },
        { front: 'What does zero output resistance allow?', back: 'The output can drive an infinite number of other devices.' },
        { front: 'What does infinite bandwidth mean?', back: 'Any frequency from 0 to infinity is amplified without attenuation.' },
        { front: 'What does infinite CMRR mean?', back: 'The common-mode noise voltage at the output is zero.' },
        { front: 'What does infinite slew rate mean?', back: 'Output changes occur at the same instant as input changes.' }
      ],
      oneLiners: [
        'Ideal: A = ∞, Zin = ∞, Zout = 0, bandwidth = ∞, CMRR = ∞, slew rate = ∞.',
        'Zero output when the input is zero.',
        'Infinite Zin means the op-amp draws no input current.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-opamp-apps',
      title: 'Op-amp applications',
      short: 'Op-amp applications',
      blurb: 'An op-amp as a signal booster in a fire alarm, and the two basic amplifier circuits with their gain formulas.',
      source: 'Pages 69–71',
      tabs: [
        {
          title: 'A fire sprinkler',
          html: `<p class="lead">An op-amp turns a <b>small current</b> into an <b>amplified current</b>. The course example is a fire sprinkler.</p>
<ol class="steps"><li><b>Sense</b> A temperature sensor detects the fire.</li><li><b>Amplify</b> The op-amp amplifies the small current from the sensor.</li><li><b>Act</b> The sprinkler is activated and the water puts out the fire.</li></ol>
<p>The general picture is input (small current) → process (op-amp with feedback resistor) → output (amplified current).</p>`
        },
        {
          title: 'Inverting and non-inverting',
          html: `<p class="lead">Two resistors set the gain of an op-amp amplifier.</p>
<figure data-fig="m2-opamp-amps"></figure>
<div class="vs"><div class="side"><h4>Inverting amplifier</h4><p>V<sub>in</sub> goes through R<sub>i</sub> to the minus input, R<sub>f</sub> feeds back from the output, and the plus input is grounded.</p><div class="eq">A<sub>v</sub> = − <span class="frac"><span>R<sub>f</sub></span><span>R<sub>i</sub></span></span></div></div><div class="side"><h4>Non-inverting amplifier</h4><p>V<sub>in</sub> goes to the plus input. R<sub>1</sub> feeds back from the output to the minus input and R<sub>2</sub> goes from the minus input to ground.</p><div class="eq">A<sub>v</sub> = 1 + <span class="frac"><span>R<sub>1</sub></span><span>R<sub>2</sub></span></span></div></div></div>
<div class="worked"><div class="given"><p>An inverting amplifier has R<sub>i</sub> = 10 kΩ and R<sub>f</sub> = 100 kΩ. Find the gain and the output for V<sub>in</sub> = 0.5 V.</p></div><div class="solve"><div class="eq">A<sub>v</sub> = −R<sub>f</sub>/R<sub>i</sub> = −100/10 = −10</div><div class="eq">V<sub>out</sub> = A<sub>v</sub> V<sub>in</sub> = −10 × 0.5 V = −5 V</div></div><div class="result"><p>Gain −10, output −5 V (inverted)</p></div></div>
<div class="worked"><div class="given"><p>A non-inverting amplifier has R<sub>1</sub> = 90 kΩ and R<sub>2</sub> = 10 kΩ. Find the gain.</p></div><div class="solve"><div class="eq">A<sub>v</sub> = 1 + R<sub>1</sub>/R<sub>2</sub> = 1 + 90/10 = 10</div></div><div class="result"><p>Gain +10 (same phase)</p></div></div>
<div class="note why"><p>The minus sign in the inverting gain is the 180° phase reversal you saw in single-ended operation. The non-inverting gain can never be below 1.</p></div>
<div data-viz="opamp-gain"></div>`
        }
      ],
      flashcards: [
        { front: 'Gain of an inverting amplifier?', back: 'A_v = −R_f / R_i.' },
        { front: 'Gain of a non-inverting amplifier?', back: 'A_v = 1 + R1 / R2 (R1 is the feedback resistor, R2 goes to ground).' },
        { front: 'What does the minus sign in the inverting gain mean?', back: 'The output is 180° out of phase with (inverted from) the input.' },
        { front: 'Describe the op-amp fire-sprinkler example.', back: 'A temperature sensor detects fire, the op-amp amplifies its small current, the sprinkler is activated and the water puts out the fire.' },
        { front: 'With R_i = 10 kΩ and R_f = 100 kΩ what is the gain?', back: '−10.' },
        { front: 'With R1 = 90 kΩ and R2 = 10 kΩ in a non-inverting amplifier, what is the gain?', back: '10.' }
      ],
      oneLiners: [
        'Inverting: A_v = −R_f/R_i, input on − through R_i, + grounded.',
        'Non-inverting: A_v = 1 + R1/R2, input on +.',
        'The op-amp converts a small current into an amplified current.'
      ],
      formulas: [
        { name: 'Inverting amplifier gain', html: `A<sub>v</sub> = − R<sub>f</sub> / R<sub>i</sub>`, note: 'Output is inverted.' },
        { name: 'Non-inverting amplifier gain', html: `A<sub>v</sub> = 1 + R<sub>1</sub> / R<sub>2</sub>`, note: 'Output is in phase.' }
      ]
    }
  ],
  figures: [
    { id: 'm2-mosfet-types', src: 'm2/pages/p49.png', crop: null, caption: 'MOSFET family: enhancement and depletion modes, each with P-channel and N-channel versions.', alt: 'Tree diagram of MOSFET types.' },
    { id: 'm2-emosfet-structure', src: 'm2/pages/p51.png', crop: null, caption: 'Enhancement MOSFET: N+ source and drain in a P-type substrate, SiO2 oxide and metal gate. No channel exists until the gate is biased.', alt: 'Cross-section of an enhancement MOSFET with symbols.' },
    { id: 'm2-emosfet-working', src: 'm2/pages/p53.png', crop: null, caption: 'A positive gate voltage repels holes and attracts electrons, forming an induced N-channel between source and drain.', alt: 'Enhancement MOSFET with induced channel and bias supplies.' },
    { id: 'm2-mosfet-curves', src: 'm2/pages/p54.png', crop: null, caption: 'Output characteristics: ohmic region, active (saturation) region and cut-off for increasing V_GS.', alt: 'Drain current against drain-source voltage curves for several gate voltages.' },
    { id: 'm2-dmosfet-structure', src: 'm2/pages/p55.png', crop: null, caption: 'Depletion MOSFET: same as the enhancement type but with a channel already present between drain and source.', alt: 'Cross-section of a depletion MOSFET with channel.' },
    { id: 'm2-dmosfet-curves', src: 'm2/pages/p57.png', crop: null, caption: 'Depletion MOSFET curves: current flows at V_GS = 0, falls for negative V_GS and rises for positive V_GS.', alt: 'Drain characteristics of a depletion MOSFET.' },
    { id: 'm2-opamp-symbol', src: 'm2/pages/p62.png', crop: null, caption: 'Op-amp symbol: two inputs (non-inverting +, inverting −) and one output.', alt: 'Op-amp triangle with two inputs and one output.' },
    { id: 'm2-opamp-single', src: 'm2/pages/p63.png', crop: null, caption: 'Single-ended input: signal on the + input gives the same polarity; on the − input it gives opposite phase.', alt: 'Two op-amp circuits with one input grounded and sine waves.' },
    { id: 'm2-opamp-diff', src: 'm2/pages/p64.png', crop: null, caption: 'Double-ended (differential) input: the output follows the difference of the two input signals.', alt: 'Op-amp with a source between the inputs, and with two separate sources.' },
    { id: 'm2-opamp-common', src: 'm2/pages/p65.png', crop: null, caption: 'Common-mode operation: the same signal on both inputs gives ideally zero output.', alt: 'Op-amp with both inputs tied to one source.' },
    { id: 'm2-opamp-741', src: 'm2/pages/p66.png', crop: null, caption: 'Pin layout of the µA741 op-amp.', alt: 'Eight-pin package diagram of the 741 op-amp.' },
    { id: 'm2-opamp-amps', src: 'm2/pages/p71.png', crop: null, caption: 'Inverting amplifier (A_v = −R_f/R_i) and non-inverting amplifier (A_v = 1 + R1/R2).', alt: 'Two op-amp amplifier circuits with resistors and gain formulas.' }
  ]
});
