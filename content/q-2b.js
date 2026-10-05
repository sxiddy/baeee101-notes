QUESTIONS({
  chunk: '2b',
  questions: [
    {
      id: 'm2-2b-01', module: 'm2', topic: 'm2-mosfet-intro', type: 'explain', level: 1,
      q: `<p>An engineer swaps a BJT for a MOSFET so that the driving circuit no longer has to supply a steady control current. How does the MOSFET’s structure make this possible?</p>`,
      options: null, correct: null,
      answer: `<p><b>The gate is insulated.</b> The MOSFET is voltage controlled, so the gate draws almost no current.</p>`,
      explain: `<p>A BJT is <b>current controlled</b>: it needs base current. A MOSFET is <b>voltage controlled</b>: an electric field from the gate sets the channel. The gate is separated from the channel by an extremely thin metal oxide layer, which gives an extremely high input impedance, so the driver supplies almost no steady current.</p>`,
      points: [ 'MOSFET is voltage controlled, BJT is current controlled', 'Gate is insulated by a thin oxide layer', 'This gives a very high input impedance' ]
    },
    {
      id: 'm2-2b-02', module: 'm2', topic: 'm2-mosfet-intro', type: 'decide', level: 2,
      q: `<p>A technician building an n-channel MOSFET must choose the doping of the regions. Which choice is correct for an nMOS?</p>`,
      options: [ 'Source and drain heavily doped p, body n-type', 'Source and drain heavily doped n, body p-type', 'Source, drain and body all heavily doped n', 'Source, drain and body all heavily doped p' ],
      correct: 1,
      answer: `<p><b>Heavily doped n source and drain on a p-type body.</b></p>`,
      explain: `<p>In an <b>nMOS</b> the carriers are electrons, so the source and drain are heavily doped n regions sitting in a p-type body. In a <b>pMOS</b> everything is reversed: heavily doped p source and drain in an n body.</p>`,
      points: [ 'nMOS: n source and drain, p body', 'pMOS is the reverse', 'The carriers in an nMOS are electrons' ]
    },
    {
      id: 'm2-2b-03', module: 'm2', topic: 'm2-emosfet', type: 'interpret', level: 1,
      q: `<p>A schematic shows a MOSFET whose symbol has a broken line between source and drain. What should you expect when no gate voltage is applied?</p>`,
      options: [ 'Maximum current, because it is normally on', 'A constant current, because of the broken line', 'Maximum current, because it has a built-in channel', 'No drain-source current, because it is normally off' ],
      correct: 3,
      answer: `<p><b>No current.</b> The broken line marks an enhancement MOSFET, which is normally off.</p>`,
      explain: `<p>The broken line means there is <b>no continuous channel</b>: this is an enhancement MOSFET. With no gate voltage no channel exists, so no drain-source current flows. A gate voltage has to induce the channel first.</p>`,
      points: [ 'Broken line means enhancement type', 'No built-in channel', 'Normally off at V_GS = 0' ]
    },
    {
      id: 'm2-2b-04', module: 'm2', topic: 'm2-emosfet', type: 'predict', level: 2,
      q: `<p>An enhancement MOSFET has V<sub>GS</sub> above its threshold voltage V<sub>th</sub>. You raise V<sub>DS</sub> slowly from zero. How does the device behave at first?</p>`,
      options: null, correct: null,
      answer: `<p><b>Like a resistor.</b> It is in the linear (ohmic) region, so I<sub>D</sub> rises in proportion to V<sub>DS</sub>.</p>`,
      explain: `<p>With V<sub>GS</sub> above V<sub>th</sub> a conductive channel has formed. While V<sub>DS</sub> is small the MOSFET is in the <b>linear (ohmic) region</b>: it acts as a resistor and I<sub>D</sub> is proportional to V<sub>DS</sub>. Only when V<sub>DS</sub> passes V<sub>GS</sub> − V<sub>th</sub> does it enter saturation.</p>`,
      points: [ 'V_GS above V_th: channel exists', 'Linear region: acts like a resistor', 'I_D proportional to V_DS' ]
    },
    {
      id: 'm2-2b-05', module: 'm2', topic: 'm2-emosfet', type: 'decide', level: 2,
      q: `<p>An amplifier needs an enhancement MOSFET to act as a constant current source. Which bias condition do you set?</p>`,
      options: [ 'V<sub>GS</sub> below the threshold V<sub>th</sub>', 'V<sub>DS</sub> below V<sub>GS</sub> − V<sub>th</sub>', 'V<sub>DS</sub> above V<sub>GS</sub> − V<sub>th</sub>', 'V<sub>DS</sub> equal to zero' ],
      correct: 2,
      answer: `<p><b>V<sub>DS</sub> &gt; V<sub>GS</sub> − V<sub>th</sub></b>, which is the saturation (active) region.</p>`,
      explain: `<p>A constant current source needs the <b>saturation (active)</b> region, which starts where V<sub>DS</sub> = V<sub>GS</sub> − V<sub>th</sub>. Below that boundary the device is in the linear region and acts as a resistor. Below V<sub>th</sub> for V<sub>GS</sub> it is simply cut off.</p>`,
      points: [ 'Constant current source means saturation', 'Condition: V_DS > V_GS − V_th', 'Linear region is the opposite condition' ]
    },
    {
      id: 'm2-2b-06', module: 'm2', topic: 'm2-emosfet', type: 'numerical', level: 3,
      q: `<p>An enhancement MOSFET has V<sub>th</sub> = 2 V and is held at V<sub>GS</sub> = 5 V. At what V<sub>DS</sub> does it move from the linear region into saturation?</p>`,
      options: [ '2 V', '3 V', '5 V', '7 V' ],
      correct: 1,
      answer: `<p><b>3 V.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>V<sub>th</sub> = 2 V, V<sub>GS</sub> = 5 V.</p></div><div class="solve"><p>The boundary is V<sub>DS</sub> = V<sub>GS</sub> − V<sub>th</sub>:</p><div class="eq">V<sub>DS</sub> = 5 − 2 = 3 V</div></div><div class="result"><p>Linear below <b>3 V</b>, saturation above it</p></div></div>`,
      points: [ 'Boundary is V_DS = V_GS − V_th', '5 − 2 = 3 V' ]
    },
    {
      id: 'm2-2b-07', module: 'm2', topic: 'm2-dmosfet', type: 'predict', level: 2,
      q: `<p>A designer ties the gate of a depletion MOSFET to its source, so V<sub>GS</sub> = 0. What does the channel do?</p>`,
      options: null, correct: null,
      answer: `<p><b>It conducts the maximum current.</b> A depletion MOSFET is normally ON.</p>`,
      explain: `<p>A depletion MOSFET has a <b>channel built in</b> during manufacture, so current flows with no gate voltage, and the current is at its maximum when V<sub>GS</sub> = 0. An enhancement MOSFET in the same wiring would carry no current.</p>`,
      points: [ 'Depletion type has a built-in channel', 'Normally ON', 'Maximum I_D at V_GS = 0' ]
    },
    {
      id: 'm2-2b-08', module: 'm2', topic: 'm2-dmosfet', type: 'explain', level: 3,
      q: `<p>You make the gate of an n-channel depletion MOSFET more and more negative. Explain what happens to the channel and to the drain current.</p>`,
      options: null, correct: null,
      answer: `<p><b>The channel becomes more resistive</b>, so I<sub>D</sub> falls, and it can reach zero.</p>`,
      explain: `<p>The built-in channel conducts at V<sub>GS</sub> = 0. A negative gate voltage pushes carriers out of the channel (it is <b>depleted</b>), so the channel becomes more resistive and the current falls until it stops. This is why it is called a depletion device. A positive V<sub>GS</sub> would do the opposite and raise I<sub>D</sub>.</p>`,
      points: [ 'Channel becomes more resistive', 'I_D falls, finally to zero', 'Positive V_GS would raise I_D' ]
    },
    {
      id: 'm2-2b-09', module: 'm2', topic: 'm2-mosfet-apps', type: 'troubleshoot', level: 2,
      q: `<p>A technician touches the gate pin of a loose MOSFET without an anti-static strap, and the part never works again. Which feature most likely failed?</p>`,
      options: [ 'The heavily doped drain region melted', 'The thin metal oxide under the gate was damaged', 'The substrate turned into a unipolar region', 'The built-in channel was forced into saturation' ],
      correct: 1,
      answer: `<p><b>The thin oxide layer.</b> Static charge can permanently damage it.</p>`,
      explain: `<p>The extremely thin oxide that insulates the gate is what gives the MOSFET its high input impedance, and it is also its weak point. Electrostatic charge or overload voltage can puncture it for good. That is why MOSFETs are handled with anti-static precautions.</p>`,
      points: [ 'Gate oxide is very thin', 'Static charge damages it permanently', 'Use anti-static handling' ]
    },
    {
      id: 'm2-2b-10', module: 'm2', topic: 'm2-emosfet', type: 'interpret', level: 2,
      q: `<p>While debugging a DC-DC converter you measure V<sub>DS</sub> well below V<sub>GS</sub> − V<sub>th</sub> on a conducting MOSFET. In which state is it?</p>`,
      options: null, correct: null,
      answer: `<p><b>The linear (ohmic) region.</b> It is acting like a resistor, not a current source.</p>`,
      explain: `<p>V<sub>DS</sub> below V<sub>GS</sub> − V<sub>th</sub> (with V<sub>GS</sub> above V<sub>th</sub>) is the <b>linear region</b>: I<sub>D</sub> is proportional to V<sub>DS</sub>. Saturation needs V<sub>DS</sub> above that boundary. A small voltage drop across a switching MOSFET is exactly what a converter wants.</p>`,
      points: [ 'V_DS below V_GS − V_th means linear region', 'Acts like a resistor', 'I_D proportional to V_DS' ]
    },
    {
      id: 'm2-2b-11', module: 'm2', topic: 'm2-mosfet-apps', type: 'decide', level: 1,
      q: `<p>A team upgrades an electric-vehicle battery management system from BJTs to MOSFETs. Which advantage supports the choice?</p>`,
      options: [ 'They need a steady base current to stay on', 'They have a lower input impedance', 'They are immune to overload voltages', 'They switch faster and use less power' ],
      correct: 3,
      answer: `<p><b>Faster switching and lower power consumption.</b></p>`,
      explain: `<p>MOSFET advantages are higher switching speed, lower power consumption, higher input impedance, better thermal stability and greater efficiency at lower voltages. The other options are wrong: a MOSFET has no base current, its input impedance is high, and overload voltages can damage it.</p>`,
      points: [ 'Higher switching speed', 'Lower power consumption', 'High input impedance, not low' ]
    },
    {
      id: 'm2-2b-12', module: 'm2', topic: 'm2-emosfet', type: 'predict', level: 2,
      q: `<p>An enhancement MOSFET in a motor driver sees V<sub>GS</sub> drop below its threshold voltage. What state does it enter?</p>`,
      options: [ 'Saturation, as a constant current source', 'Cut-off, turning completely off', 'Normally on, with maximum current', 'The ohmic region, as a resistor' ],
      correct: 1,
      answer: `<p><b>Cut-off.</b> The channel disappears and no drain-source current flows.</p>`,
      explain: `<p>An enhancement MOSFET needs V<sub>GS</sub> above V<sub>th</sub> to induce a channel. Below V<sub>th</sub> there is no channel, so it is in <b>cut-off</b> and the current stops.</p>`,
      points: [ 'V_GS below V_th gives cut-off', 'No channel is induced', 'No drain-source current' ]
    },
    {
      id: 'm2-2b-13', module: 'm2', topic: 'm2-dmosfet', type: 'decide', level: 3,
      q: `<p>An oscillator design needs a MOSFET whose drain current can be lowered by a negative gate voltage and raised by a positive one. Which device fits?</p>`,
      options: [ 'An n-channel enhancement MOSFET', 'A p-channel enhancement MOSFET', 'A BJT driven by base current', 'A depletion MOSFET' ],
      correct: 3,
      answer: `<p><b>A depletion MOSFET</b> (the dual-mode MOSFET).</p>`,
      explain: `<p>Because its channel is built in, a depletion MOSFET conducts at V<sub>GS</sub> = 0. A negative V<sub>GS</sub> reduces I<sub>D</sub> and a positive V<sub>GS</sub> raises it, so it accepts a bipolar gate signal. An enhancement MOSFET does nothing until V<sub>GS</sub> is above its threshold.</p>`,
      points: [ 'Depletion MOSFET has a built-in channel', 'Negative V_GS lowers I_D, positive raises it', 'Also called a dual-mode MOSFET' ]
    },
    {
      id: 'm2-2b-14', module: 'm2', topic: 'm2-mosfet-intro', type: 'explain', level: 2,
      q: `<p>A MOSFET has four terminals, yet circuit diagrams usually show it with three. Why?</p>`,
      options: null, correct: null,
      answer: `<p><b>The body (substrate) is usually tied to the source</b>, so it needs no separate connection.</p>`,
      explain: `<p>The four terminals are drain, source, gate and substrate (body). The substrate is frequently connected to the source, which leaves three external terminals and makes the MOSFET look like a BJT.</p>`,
      points: [ 'Four terminals: D, S, G, body', 'Body is tied to the source', 'So it acts as a three-terminal device' ]
    },
    {
      id: 'm2-2b-15', module: 'm2', topic: 'm2-mosfet-apps', type: 'troubleshoot', level: 3,
      q: `<p>Unsuppressed voltage spikes keep hitting the gate of a MOSFET in a power supply. What is likely to happen if this continues?</p>`,
      options: null, correct: null,
      answer: `<p><b>The MOSFET will be damaged for good.</b> The thin gate oxide cannot take repeated overload voltage.</p>`,
      explain: `<p>The gate oxide is extremely thin. Overload voltages make the device unstable, and repeated spikes eventually cause permanent damage to the oxide, so the MOSFET fails. The remedy is to limit the spikes before they reach the gate.</p>`,
      points: [ 'Overload voltage makes it unstable', 'Thin oxide is permanently damaged', 'Protect the gate from spikes' ]
    },
    {
      id: 'm2-2b-16', module: 'm2', topic: 'm2-opamp-ideal', type: 'predict', level: 1,
      q: `<p>The same signal is applied to both inputs of an ideal op-amp. What is the output?</p>`,
      options: [ 'It is amplified by the infinite open-loop gain', 'It stays at 0 V', 'It saturates at maximum positive voltage', 'It equals the input, because the offset is zero' ],
      correct: 1,
      answer: `<p><b>0 V.</b> An ideal op-amp has zero common-mode gain.</p>`,
      explain: `<p>An op-amp amplifies the <b>difference</b> between its inputs. The same signal on both inputs is a common-mode signal: the two paths give opposite polarity and cancel, so the ideal output is 0 V. A real op-amp leaves a small output.</p>`,
      points: [ 'Op-amp amplifies the difference', 'Common-mode signal cancels', 'Ideal output is 0 V' ]
    },
    {
      id: 'm2-2b-17', module: 'm2', topic: 'm2-opamp-ideal', type: 'troubleshoot', level: 2,
      q: `<p>In the lab, the same signal on both inputs of a real µA741 gives a small output, unlike the ideal model. Why?</p>`,
      options: null, correct: null,
      answer: `<p><b>A real op-amp is not ideal.</b> Its gain and common-mode rejection are large but finite.</p>`,
      explain: `<p>An ideal op-amp has zero common-mode gain and infinite CMRR. A real 741 has a large but finite gain, finite bandwidth and a small output in common mode, so the cancellation is not perfect.</p>`,
      points: [ 'Ideal: infinite CMRR, zero common-mode gain', 'Real 741: finite values', 'A small common-mode output remains' ]
    },
    {
      id: 'm2-2b-18', module: 'm2', topic: 'm2-opamp-apps', type: 'numerical', level: 2,
      q: `<p>An inverting amplifier has R<sub>i</sub> = 5 kΩ and R<sub>f</sub> = 20 kΩ. A steady 2 V is applied. Find the output voltage.</p>`,
      options: null, correct: null,
      answer: `<p>Gain <b>−4</b>, output <b>−8 V</b>.</p>`,
      explain: `<div class="worked"><div class="given"><p>R<sub>i</sub> = 5 kΩ, R<sub>f</sub> = 20 kΩ, V<sub>in</sub> = 2 V.</p></div><div class="solve"><div class="eq">A<sub>v</sub> = −R<sub>f</sub> / R<sub>i</sub> = −20 / 5 = −4</div><div class="eq">V<sub>out</sub> = −4 × 2 = −8 V</div></div><div class="result"><p>Gain <b>−4</b>, V<sub>out</sub> = <b>−8 V</b> (inverted)</p></div></div>`,
      points: [ 'A_v = −R_f / R_i = −4', 'V_out = −4 × 2 = −8 V' ]
    },
    {
      id: 'm2-2b-19', module: 'm2', topic: 'm2-opamp-apps', type: 'numerical', level: 2,
      q: `<p>A non-inverting amplifier has R<sub>1</sub> = 30 kΩ and R<sub>2</sub> = 10 kΩ. A 1.5 V signal goes to the plus input. What is the output?</p>`,
      options: [ '−4.5 V', '−6.0 V', '4.5 V', '6.0 V' ],
      correct: 3,
      answer: `<p>Gain <b>4</b>, output <b>6.0 V</b>.</p>`,
      explain: `<div class="worked"><div class="given"><p>R<sub>1</sub> = 30 kΩ, R<sub>2</sub> = 10 kΩ, V<sub>in</sub> = 1.5 V.</p></div><div class="solve"><div class="eq">A<sub>v</sub> = 1 + R<sub>1</sub> / R<sub>2</sub> = 1 + 3 = 4</div><div class="eq">V<sub>out</sub> = 4 × 1.5 = 6.0 V</div></div><div class="result"><p>V<sub>out</sub> = <b>6.0 V</b> (same phase as the input)</p></div></div>`,
      points: [ 'A_v = 1 + R_1 / R_2 = 4', 'V_out = 4 × 1.5 = 6.0 V', 'Non-inverting, so positive' ]
    },
    {
      id: 'm2-2b-20', module: 'm2', topic: 'm2-opamp-apps', type: 'numerical', level: 2,
      q: `<p>A 1 V sensor signal must become −10 V using one inverting stage with R<sub>i</sub> = 2 kΩ. What R<sub>f</sub> do you need?</p>`,
      options: null, correct: null,
      answer: `<p><b>R<sub>f</sub> = 20 kΩ.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>V<sub>in</sub> = 1 V, V<sub>out</sub> = −10 V, R<sub>i</sub> = 2 kΩ.</p></div><div class="solve"><div class="eq">A<sub>v</sub> = −10 / 1 = −10</div><div class="eq">−R<sub>f</sub> / R<sub>i</sub> = −10, so R<sub>f</sub> = 10 × 2 kΩ = 20 kΩ</div></div><div class="result"><p>R<sub>f</sub> = <b>20 kΩ</b></p></div></div>`,
      points: [ 'Required gain is −10', 'A_v = −R_f / R_i', 'R_f = 20 kΩ' ]
    },
    {
      id: 'm2-2b-21', module: 'm2', topic: 'm2-opamp-apps', type: 'numerical', level: 3,
      q: `<p>A non-inverting amplifier must have a gain of 5. The resistor from the minus input to ground, R<sub>2</sub>, is 5 kΩ. What must R<sub>1</sub> be?</p>`,
      options: [ '5 kΩ', '20 kΩ', '25 kΩ', '30 kΩ' ],
      correct: 1,
      answer: `<p><b>R<sub>1</sub> = 20 kΩ.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>A<sub>v</sub> = 5, R<sub>2</sub> = 5 kΩ.</p></div><div class="solve"><div class="eq">5 = 1 + R<sub>1</sub> / 5 kΩ</div><div class="eq">R<sub>1</sub> / 5 kΩ = 4, so R<sub>1</sub> = 20 kΩ</div></div><div class="result"><p>R<sub>1</sub> = <b>20 kΩ</b></p></div></div>`,
      points: [ '5 = 1 + R_1 / R_2', 'R_1 / R_2 = 4', 'R_1 = 20 kΩ' ]
    },
    {
      id: 'm2-2b-22', module: 'm2', topic: 'm2-opamp-intro', type: 'decide', level: 1,
      q: `<p>You wire a µA741 on a breadboard with dual supplies. Which pins take the positive and negative rails?</p>`,
      options: null, correct: null,
      answer: `<p><b>Pin 7 is +V<sub>CC</sub> and pin 4 is −V<sub>CC</sub>.</b></p>`,
      explain: `<p>The 741 is an 8-pin chip. Pin 7 is the positive supply (+V<sub>CC</sub>) and pin 4 the negative supply (−V<sub>CC</sub>). Pin 6 is the output, pins 2 and 3 are the inverting and non-inverting inputs.</p>`,
      points: [ 'Pin 7: +V_CC', 'Pin 4: −V_CC', 'Pin 6 is the output' ]
    },
    {
      id: 'm2-2b-23', module: 'm2', topic: 'm2-opamp-apps', type: 'numerical', level: 2,
      q: `<p>An inverting amplifier has R<sub>f</sub> = 50 kΩ and R<sub>i</sub> = 25 kΩ, and the input is −3 V. What is the output?</p>`,
      options: [ '−6 V', '6 V', '−1.5 V', '1.5 V' ],
      correct: 1,
      answer: `<p>Gain <b>−2</b>, so the output is <b>+6 V</b>.</p>`,
      explain: `<div class="worked"><div class="given"><p>R<sub>f</sub> = 50 kΩ, R<sub>i</sub> = 25 kΩ, V<sub>in</sub> = −3 V.</p></div><div class="solve"><div class="eq">A<sub>v</sub> = −50 / 25 = −2</div><div class="eq">V<sub>out</sub> = −2 × (−3) = +6 V</div></div><div class="result"><p>V<sub>out</sub> = <b>+6 V</b> (negative input, inverted)</p></div></div>`,
      points: [ 'A_v = −2', '(−2) × (−3) = +6 V' ]
    },
    {
      id: 'm2-2b-24', module: 'm2', topic: 'm2-opamp-ideal', type: 'explain', level: 2,
      q: `<p>A student assumes a small current flows into the inverting input of an ideal op-amp from the signal source. Why is that wrong?</p>`,
      options: null, correct: null,
      answer: `<p><b>The input impedance is infinite</b>, so no current flows into either input.</p>`,
      explain: `<p>An ideal op-amp has infinite input resistance. With infinite resistance at the inputs, i<sub>1</sub> = i<sub>2</sub> = 0. This is also why almost any source can drive it without being loaded.</p>`,
      points: [ 'Ideal input impedance is infinite', 'No current enters either input', 'The source is not loaded' ]
    },
    {
      id: 'm2-2b-25', module: 'm2', topic: 'm2-opamp-apps', type: 'numerical', level: 3,
      q: `<p>A non-inverting amplifier turns a 2 V input into 8 V. R<sub>1</sub> is 60 kΩ. What is R<sub>2</sub>?</p>`,
      options: [ '10 kΩ', '15 kΩ', '20 kΩ', '30 kΩ' ],
      correct: 2,
      answer: `<p><b>R<sub>2</sub> = 20 kΩ.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>V<sub>in</sub> = 2 V, V<sub>out</sub> = 8 V, R<sub>1</sub> = 60 kΩ.</p></div><div class="solve"><div class="eq">A<sub>v</sub> = 8 / 2 = 4</div><div class="eq">4 = 1 + 60 / R<sub>2</sub>, so 60 / R<sub>2</sub> = 3, R<sub>2</sub> = 20 kΩ</div></div><div class="result"><p>R<sub>2</sub> = <b>20 kΩ</b></p></div></div>`,
      points: [ 'Gain is 4', '1 + 60k / R_2 = 4', 'R_2 = 20 kΩ' ]
    },
    {
      id: 'm2-2b-26', module: 'm2', topic: 'm2-opamp-ideal', type: 'predict', level: 2,
      q: `<p>A heavy load is connected to the output of an ideal op-amp. What output impedance does the load see?</p>`,
      options: [ 'A few megaohms', 'Exactly 100 Ω', 'Infinite', 'Exactly zero' ],
      correct: 3,
      answer: `<p><b>Zero.</b> An ideal op-amp has zero output impedance.</p>`,
      explain: `<p>A real 741 has an output impedance below 100 Ω, which is low. The <b>ideal</b> op-amp has zero output impedance, so it can drive any load, even an infinite number of other devices, without losing voltage.</p>`,
      points: [ 'Ideal output impedance is zero', 'Real op-amp: below 100 Ω', 'Can drive any load' ]
    },
    {
      id: 'm2-2b-27', module: 'm2', topic: 'm2-opamp-intro', type: 'troubleshoot', level: 2,
      q: `<p>A technician feeds an audio sine wave into pin 2 of a µA741 and grounds the other input. How does the output compare in phase?</p>`,
      options: null, correct: null,
      answer: `<p><b>Opposite in phase.</b> Pin 2 is the inverting input.</p>`,
      explain: `<p>Pin 2 is the minus (inverting) input. With the plus input at ground (single-ended operation) the output is amplified and <b>opposite in phase</b> to the input. A signal on pin 3 would give an output in phase.</p>`,
      points: [ 'Pin 2 is the inverting input', 'Single-ended: other input grounded', 'Output is opposite in phase' ]
    },
    {
      id: 'm2-2b-28', module: 'm2', topic: 'm2-opamp-apps', type: 'explain', level: 1,
      q: `<p>Explain how an op-amp helps a fire sprinkler system respond to a small signal from a temperature sensor.</p>`,
      options: null, correct: null,
      answer: `<p><b>It amplifies the small sensor current</b> into one large enough to activate the sprinkler.</p>`,
      explain: `<p>The chain is <b>sense, amplify, act</b>. The temperature sensor gives only a small current when it detects fire. The op-amp, with its feedback resistor, amplifies this to a larger current that can operate the sprinkler.</p>`,
      points: [ 'Sensor gives a small current', 'Op-amp amplifies it', 'The larger current activates the sprinkler' ]
    },
    {
      id: 'm2-2b-29', module: 'm2', topic: 'm2-opamp-intro', type: 'decide', level: 1,
      q: `<p>While routing a PCB for a µA741, you reach pin 8. What trace goes there?</p>`,
      options: [ 'The inverting signal input', 'The negative power supply', 'None, because it is not connected', 'The output' ],
      correct: 2,
      answer: `<p><b>None.</b> Pin 8 is NC (not connected).</p>`,
      explain: `<p>On the 741, pins 2 and 3 are the inputs, pin 4 is −V<sub>CC</sub>, pin 6 is the output, pin 7 is +V<sub>CC</sub> and pins 1 and 5 are the offset pins. Pin 8 is NC, so nothing is routed to it.</p>`,
      points: [ 'Pin 8 is NC', 'No trace is needed' ]
    },
    {
      id: 'm2-2b-30', module: 'm2', topic: 'm2-opamp-intro', type: 'decide', level: 3,
      q: `<p>A designer must combine the voltages from several sensors into one output voltage using op-amps. Which type of operation does this call for?</p>`,
      options: null, correct: null,
      answer: `<p><b>Summation.</b> Adding signals is one of the linear operations an op-amp performs.</p>`,
      explain: `<p>The name “operational amplifier” comes from circuit operations such as <b>summation</b>, scaling, differentiation and integration. Combining several voltages into one is a summation, which is why op-amps were used in analog computers.</p>`,
      points: [ 'Operation needed is summation', 'Other op-amp operations: scaling, differentiation, integration', 'Origin of the name “operational”' ]
    },
    {
      id: 'm2-2b-31', module: 'm2', topic: 'm2-emosfet', type: 'numerical', level: 3,
      q: `<p>An enhancement MOSFET has V<sub>th</sub> = 1.5 V and V<sub>GS</sub> = 4 V. State its region when V<sub>DS</sub> = 1 V, and again when V<sub>DS</sub> = 3 V. Then say what happens if V<sub>GS</sub> is cut to 1 V.</p>`,
      options: null, correct: null,
      answer: `<p>V<sub>DS</sub> = 1 V: <b>linear</b>. V<sub>DS</sub> = 3 V: <b>saturation</b>. V<sub>GS</sub> = 1 V: <b>cut-off</b>.</p>`,
      explain: `<div class="worked"><div class="given"><p>V<sub>th</sub> = 1.5 V, V<sub>GS</sub> = 4 V.</p></div><div class="solve"><div class="eq">V<sub>GS</sub> − V<sub>th</sub> = 4 − 1.5 = 2.5 V</div><p>V<sub>DS</sub> = 1 V is below 2.5 V: <b>linear</b> (resistor-like). V<sub>DS</sub> = 3 V is above 2.5 V: <b>saturation</b> (constant current). With V<sub>GS</sub> = 1 V, which is below V<sub>th</sub> = 1.5 V, no channel is induced.</p></div><div class="result"><p>Linear, saturation, then <b>cut-off</b></p></div></div>`,
      points: [ 'Boundary V_DS = V_GS − V_th = 2.5 V', '1 V is below it (linear), 3 V is above it (saturation)', 'V_GS below V_th means cut-off' ]
    },
    {
      id: 'm2-2b-32', module: 'm2', topic: 'm2-opamp-apps', type: 'numerical', level: 3,
      q: `<p>An inverting amplifier uses R<sub>i</sub> = 4 kΩ and R<sub>f</sub> = 24 kΩ with V<sub>in</sub> = 0.8 V. Find the gain and V<sub>out</sub>. Then find the new V<sub>out</sub> if R<sub>f</sub> is doubled.</p>`,
      options: null, correct: null,
      answer: `<p>Gain <b>−6</b>, V<sub>out</sub> = <b>−4.8 V</b>. With R<sub>f</sub> = 48 kΩ: gain −12, V<sub>out</sub> = <b>−9.6 V</b>.</p>`,
      explain: `<div class="worked"><div class="given"><p>R<sub>i</sub> = 4 kΩ, R<sub>f</sub> = 24 kΩ, V<sub>in</sub> = 0.8 V.</p></div><div class="solve"><div class="eq">A<sub>v</sub> = −24 / 4 = −6, V<sub>out</sub> = −6 × 0.8 = −4.8 V</div><div class="eq">R<sub>f</sub> = 48 kΩ: A<sub>v</sub> = −12, V<sub>out</sub> = −12 × 0.8 = −9.6 V</div></div><div class="result"><p><b>−4.8 V</b>, then <b>−9.6 V</b>: doubling R<sub>f</sub> doubles the output</p></div></div>`,
      points: [ 'A_v = −R_f / R_i = −6', 'V_out = −4.8 V', 'Doubling R_f doubles the gain: −9.6 V' ]
    },
    {
      id: 'm2-2b-33', module: 'm2', topic: 'm2-opamp-apps', type: 'design', level: 3,
      q: `<p>Design a non-inverting amplifier that turns 0.3 V into 3.3 V using a 2 kΩ resistor from the minus input to ground. Give R<sub>1</sub> and check the output.</p>`,
      options: null, correct: null,
      answer: `<p>Gain 11, so <b>R<sub>1</sub> = 20 kΩ</b>. Check: 11 × 0.3 = 3.3 V.</p>`,
      explain: `<div class="worked"><div class="given"><p>V<sub>in</sub> = 0.3 V, V<sub>out</sub> = 3.3 V, R<sub>2</sub> = 2 kΩ.</p></div><div class="solve"><div class="eq">A<sub>v</sub> = 3.3 / 0.3 = 11</div><div class="eq">11 = 1 + R<sub>1</sub> / 2 kΩ, so R<sub>1</sub> = 10 × 2 kΩ = 20 kΩ</div></div><div class="result"><p>R<sub>1</sub> = <b>20 kΩ</b>; check 1 + 20/2 = 11, 11 × 0.3 = 3.3 V</p></div></div>`,
      points: [ 'Required gain 11', '1 + R_1 / R_2 = 11, R_1 / R_2 = 10', 'R_1 = 20 kΩ' ]
    },
    {
      id: 'm2-2b-34', module: 'm2', topic: 'm2-opamp-apps', type: 'interpret', level: 3,
      q: `<p>Two amplifiers use the same resistors. One is inverting with R<sub>i</sub> = 10 kΩ and R<sub>f</sub> = 50 kΩ. The other is non-inverting with R<sub>2</sub> = 10 kΩ and R<sub>1</sub> = 50 kΩ. Both get 1 V. Compare their outputs. Why are the gains not equal in size?</p>`,
      options: null, correct: null,
      answer: `<p>Inverting: <b>−5 V</b>. Non-inverting: <b>+6 V</b>. The non-inverting gain has an extra <b>+1</b>.</p>`,
      explain: `<div class="worked"><div class="given"><p>Resistors 10 kΩ and 50 kΩ in both circuits, V<sub>in</sub> = 1 V.</p></div><div class="solve"><div class="eq">Inverting: A<sub>v</sub> = −50 / 10 = −5, V<sub>out</sub> = −5 V</div><div class="eq">Non-inverting: A<sub>v</sub> = 1 + 50 / 10 = 6, V<sub>out</sub> = +6 V</div></div><div class="result"><p>The “1 +” in A<sub>v</sub> = 1 + R<sub>1</sub>/R<sub>2</sub> comes from the input going straight to the plus input. The inverting output also has the <b>opposite polarity</b></p></div></div>`,
      points: [ '−5 V and +6 V', 'Inverting output is opposite in polarity', 'Non-inverting gain is 1 + R_1/R_2, never below 1' ]
    },
    {
      id: 'm2-2b-35', module: 'm2', topic: 'm2-opamp-ideal', type: 'interpret', level: 3,
      q: `<p>The two inputs of an ideal op-amp are at 3.0 V and 3.1 V. A student says the “input” is about 3 V so the output should be about 3 V times the gain. Find the flaw and say what the amplifier really amplifies.</p>`,
      options: null, correct: null,
      answer: `<p>An op-amp amplifies the <b>difference</b>, here only <b>0.1 V</b>. The 3 V common part is rejected.</p>`,
      explain: `<p>Operation is differential: the output is the gain times V<sub>i1</sub> − V<sub>i2</sub> = 0.1 V in magnitude. The 3.0 V that both inputs share is a common-mode signal. An ideal op-amp (zero common-mode gain, infinite CMRR) gives 0 V from it; a real 741 lets a small output remain.</p>`,
      points: [ 'Output ∝ V_i1 − V_i2 = 0.1 V', 'The shared 3 V is common-mode and rejected', 'Real op-amps leave a small common-mode output' ]
    },
    {
      id: 'm2-2b-36', module: 'm2', topic: 'm2-dmosfet', type: 'interpret', level: 3,
      q: `<p>A MOSFET carries 5 mA at V<sub>GS</sub> = 0, 2 mA at V<sub>GS</sub> = −1 V and no current at V<sub>GS</sub> = −3 V. Which type is it? What would you expect at V<sub>GS</sub> = +1 V, and how does this compare with an enhancement MOSFET?</p>`,
      options: null, correct: null,
      answer: `<p>A <b>depletion</b> MOSFET. At +1 V the current should be <b>more than 5 mA</b>. An enhancement device would carry nothing at V<sub>GS</sub> = 0.</p>`,
      explain: `<p>It conducts at V<sub>GS</sub> = 0 (normally ON) and the current falls to zero as V<sub>GS</sub> goes more negative, so it has a built-in channel: a <b>depletion</b> MOSFET. A positive V<sub>GS</sub> works in the enhancement mode and raises I<sub>D</sub>. An enhancement MOSFET is normally off, with no current at V<sub>GS</sub> = 0.</p>`,
      points: [ 'Current at V_GS = 0 means a built-in channel: depletion', 'Negative V_GS lowers I_D to zero', 'Positive V_GS raises I_D above 5 mA' ]
    },
    {
      id: 'm2-2b-37', module: 'm2', topic: 'm2-opamp-apps', type: 'numerical', level: 3,
      q: `<p>Extra: two inverting stages are cascaded. Stage 1 has R<sub>i</sub> = 10 kΩ, R<sub>f</sub> = 100 kΩ. Stage 2 has R<sub>i</sub> = 10 kΩ, R<sub>f</sub> = 30 kΩ. The input is 0.1 V. Find the output of each stage and the overall gain.</p>`,
      options: null, correct: null,
      answer: `<p>Stage 1: <b>−1 V</b>. Stage 2: <b>+3 V</b>. Overall gain <b>+30</b>.</p>`,
      explain: `<div class="worked"><div class="given"><p>A<sub>1</sub> = −100/10 = −10, A<sub>2</sub> = −30/10 = −3, V<sub>in</sub> = 0.1 V.</p></div><div class="solve"><div class="eq">V<sub>1</sub> = −10 × 0.1 = −1 V</div><div class="eq">V<sub>out</sub> = −3 × (−1) = +3 V</div><div class="eq">A<sub>total</sub> = (−10)(−3) = +30</div></div><div class="result"><p>V<sub>out</sub> = <b>+3 V</b>, overall gain <b>+30</b> (two inversions give the original polarity)</p></div></div>`,
      points: [ 'Stage 1: −10, output −1 V', 'Stage 2: −3, output +3 V', 'Gains multiply: +30' ]
    }
  ]
});
