SUMMARY({
  module: 'm2',
  tldr: `<p>Electronics starts with <b>doped silicon</b>: a PN junction passes current one way (the <b>diode</b>), a heavily doped one breaks down on purpose (the <b>Zener</b>), and adding a second junction gives the <b>BJT</b>, a current-controlled amplifier and switch with I<sub>E</sub> = I<sub>B</sub> + I<sub>C</sub>. The <b>MOSFET</b> does the same job with a gate voltage instead of a base current. The <b>op-amp</b> amplifies the difference between two inputs and two resistors set its gain. Communication then carries a message over a channel: <b>modulation</b> puts it on a high-frequency carrier, and <b>cellular</b>, <b>satellite</b> and <b>radar</b> systems are applications of the same radio waves.</p>`,
  storyline: [
    { title: 'Devices', html: `<p><b>Doping</b> → <b>PN junction</b> and bias → <b>diode</b> V-I curve and rectifiers → <b>Zener</b> regulator → <b>BJT</b> (currents, configurations, α and β) → <b>MOSFET</b> (enhancement, depletion) → <b>op-amp</b>.</p>` },
    { title: 'Radio and light', html: `<p>EM waves cross a vacuum. The spectrum runs from <b>ELF</b> up through <b>EHF</b>, then infrared, visible and ultraviolet, with X-rays and gamma rays beyond.</p>` },
    { title: 'Communication system', html: `<p>Source → <b>input transducer</b> → <b>transmitter</b> (modulation) → <b>channel</b> (noise added) → <b>receiver</b> (demodulation) → <b>output transducer</b>.</p>` },
    { title: 'Systems', html: `<p><b>Cellular</b>: small cells, handoff, BTS-BSC-MSC. <b>Satellite</b>: uplink, transponder, downlink. <b>Radar</b>: echo time gives range, Doppler gives speed.</p>` }
  ],
  bigIdeas: [
    { title: 'Semiconductors', topic: 'm2-semiconductors', html: `<p>Pure silicon is <b>intrinsic</b>; doping makes it <b>extrinsic</b>. Arsenic (5 valence electrons) gives <b>N-type</b>, electrons majority. Boron (3) gives <b>P-type</b>, holes majority. More dopant means lower resistance.</p>` },
    { title: 'PN junction', topic: 'm2-pn-junction', html: `<p>Barrier: <b>0.3 V Ge</b>, <b>0.7 V Si</b>. Forward bias is + to P; reverse bias widens the depletion region and leaves only a tiny, <b>temperature-dependent</b> saturation current until avalanche breakdown.</p>` },
    { title: 'Diode and rectifiers', topic: 'm2-diode-vi', html: `<p>Knee 0.3 V (Ge) and 0.7 V (Si). Half-wave passes one half-cycle; full-wave uses both, and a bridge uses <b>four diodes</b> (two conduct at a time).</p>` },
    { title: 'Zener', topic: 'm2-zener', html: `<p>Heavily doped, run in <b>reverse breakdown</b>. Heavier doping gives a thinner depletion layer and a lower, sharper V<sub>Z</sub>. Regulator: Zener in parallel with R<sub>L</sub>, series R from the input; the load holds V<sub>Z</sub> while the input stays above it.</p>` },
    { title: 'BJT basics', topic: 'm2-bjt-basics', html: `<p>Emitter heavily doped, base thin and lightly doped, collector larger. The arrow is on the <b>emitter</b>: NPN points out, PNP points in. Active region: emitter junction forward, collector junction reverse.</p>` },
    { title: 'BJT operation', topic: 'm2-bjt-operation', html: `<p>Few carriers recombine in the base (I<sub>B</sub> is 1 to 2 % of I<sub>E</sub>); the reverse-biased collector sweeps up 95 % or more. <b>I<sub>E</sub> = I<sub>B</sub> + I<sub>C</sub></b>.</p>` },
    { title: 'BJT configurations', topic: 'm2-bjt-config', html: `<p>CB, CE, CC. <b>CE</b> gives high voltage, current and power gain. Regions: <b>cut-off</b> (OFF), <b>active</b> (amplifier), <b>saturation</b> (ON). A switch jumps between cut-off and saturation.</p>` },
    { title: 'Alpha and beta', topic: 'm2-bjt-gains', html: `<p>α = I<sub>C</sub>/I<sub>E</sub> (0.95 to 0.999), β = I<sub>C</sub>/I<sub>B</sub> = α/(1 − α), α = β/(1 + β). Example: I<sub>B</sub> = 50 µA, β = 100 gives I<sub>C</sub> = 5 mA, I<sub>E</sub> = 5.05 mA, α = 0.990.</p>` },
    { title: 'MOSFET', topic: 'm2-mosfet-intro', html: `<p>Voltage controlled, <b>unipolar</b>, four terminals (body usually tied to source). The gate sits on a thin oxide, so the input impedance is extremely high. nMOS: n source and drain on a p body.</p>` },
    { title: 'Enhancement and depletion', topic: 'm2-emosfet', html: `<p>Enhancement: no channel, <b>normally off</b>; V<sub>GS</sub> above V<sub>th</sub> induces it. Regions: cut-off, linear (V<sub>DS</sub> &lt; V<sub>GS</sub> − V<sub>th</sub>), saturation (constant current). Depletion: built-in channel, <b>normally on</b>, current falls as V<sub>GS</sub> goes negative.</p>` },
    { title: 'MOSFET uses', topic: 'm2-mosfet-apps', html: `<p>SMPS, DC-DC converters, CMOS logic, memory, RF amplifiers, EV powertrains. Weak point: the thin oxide is destroyed by <b>static charge</b> and overload voltage.</p>` },
    { title: 'Op-amp basics', topic: 'm2-opamp-intro', html: `<p>Difference amplifier, very high gain and input impedance, low output impedance. Signal on + gives <b>same phase</b>, on − gives <b>opposite phase</b>. Common-mode signals cancel. µA741: pin 2 −, pin 3 +, pin 4 −V<sub>CC</sub>, pin 6 output, pin 7 +V<sub>CC</sub>.</p>` },
    { title: 'Ideal op-amp', topic: 'm2-opamp-ideal', html: `<p>Infinite gain, bandwidth, input impedance, CMRR and slew rate; zero output impedance and offset. So <b>no current enters either input</b>.</p>` },
    { title: 'Op-amp amplifiers', topic: 'm2-opamp-apps', html: `<p>Inverting: <b>A<sub>v</sub> = −R<sub>f</sub>/R<sub>i</sub></b>. Non-inverting: <b>A<sub>v</sub> = 1 + R<sub>1</sub>/R<sub>2</sub></b>. Examples: 10 kΩ and 100 kΩ with 0.5 V gives −10 and −5 V; 90 kΩ and 10 kΩ gives +10.</p>` },
    { title: 'EM spectrum and bands', topic: 'm2-freq-bands', html: `<p>ELF, VF, VLF, LF, MF, HF, VHF, UHF, SHF, EHF. AM radio 535 to 1605 kHz (MF), FM 88 to 108 MHz (VHF), cellular in UHF, satellite and radar in SHF. EHF (30 to 300 GHz) is millimetre waves.</p>` },
    { title: 'Optical spectrum', topic: 'm2-optical', html: `<p>Infrared (about 0.1 mm to 700 nm), visible (400 to 800 nm), ultraviolet (about 4 to 400 nm, medical use, not for communication).</p>` },
    { title: 'Communication system', topic: 'm2-comm-system', html: `<p>Transmitter, channel, receiver; <b>noise</b> enters in the channel and the receiver. The transmitter modulates, the receiver demodulates. A <b>transceiver</b> has both in one housing.</p>` },
    { title: 'Channels', topic: 'm2-comm-channels', html: `<p>Wire pairs, coaxial (cable TV), twisted pair (LAN), <b>fibre</b> (long distance and Internet), free space (radio), water (sonar: passive listens, active echoes) and the earth.</p>` },
    { title: 'Modulation', topic: 'm2-modulation', html: `<p>Message (low frequency, low amplitude) goes on a high-frequency carrier. Needed for short antennas, multiplexing, long distance and less interference. <b>AM</b> varies amplitude (long distance), <b>FM</b> frequency and <b>PM</b> phase (short distance).</p>` },
    { title: 'Cellular', topic: 'm2-cell-basics', html: `<p>Many small hexagonal cells, 7-cell clusters with no reuse inside. <b>Handoff</b> by the MTSO when the signal weakens. Macrocell about 6 miles, microcell about half a mile, picocell for buildings.</p>` },
    { title: 'Cellular frequencies', topic: 'm2-cell-freq', html: `<p>Uplink 824 to 849 MHz, downlink 869 to 894 MHz (25 MHz, 832 channels of 30 kHz). PCS: 1850 to 1910 up, 1930 to 1990 down; less range, more capacity, smaller antennas.</p>` },
    { title: 'Cellular network', topic: 'm2-cell-network', html: `<p>1G analog, 2G digital (GSM), 3G voice and data, 4G broadband, 5G low latency and many devices. BTS → BSC → MSC; databases <b>HLR, VLR, EIR, AuC</b>.</p>` },
    { title: 'Satellite basics', topic: 'm2-sat-basics', html: `<p>An RF repeater above the Earth overcomes the 45 to 55 km line-of-sight limit. One uplink, many downlinks. High initial cost and propagation delay are the drawbacks.</p>` },
    { title: 'Transponder', topic: 'm2-sat-transponder', html: `<p>Amplifies and <b>translates frequency</b>, typically 6 GHz up and 4 GHz down, because it cannot transmit and receive on one frequency. C band is overcrowded, so new satellites use <b>Ku</b>.</p>` },
    { title: 'Radar', topic: 'm2-radar', html: `<p>Echo time gives range: <b>R = ct/2</b> (100 µs gives 15 km). Antenna angle at strongest echo gives direction; <b>Doppler shift</b> gives speed.</p>` }
  ],
  compare: [
    { title: 'P-type vs N-type', html: `<table class="tbl"><thead><tr><th></th><th>N-type</th><th>P-type</th></tr></thead><tbody><tr><td>Dopant</td><td>Arsenic (5 valence electrons)</td><td>Boron (3 valence electrons)</td></tr><tr><td>Majority carriers</td><td>Electrons</td><td>Holes</td></tr><tr><td>Minority carriers</td><td>Holes</td><td>Electrons</td></tr></tbody></table>` },
    { title: 'BJT regions', html: `<table class="tbl"><thead><tr><th></th><th>Cut-off</th><th>Active</th><th>Saturation</th></tr></thead><tbody><tr><td>Junctions</td><td>Both off</td><td>EB forward, CB reverse</td><td>Both on</td></tr><tr><td>I<sub>C</sub></td><td>0</td><td>Follows I<sub>B</sub></td><td>Maximum</td></tr><tr><td>V<sub>CE</sub></td><td>Maximum</td><td>In between</td><td>Minimum</td></tr><tr><td>Use</td><td>Switch OFF</td><td>Amplifier</td><td>Switch ON</td></tr></tbody></table>` },
    { title: 'Enhancement vs depletion MOSFET', html: `<table class="tbl"><thead><tr><th></th><th>Enhancement</th><th>Depletion</th></tr></thead><tbody><tr><td>At V<sub>GS</sub> = 0</td><td>No current (normally off)</td><td>Maximum current (normally on)</td></tr><tr><td>More gate voltage</td><td>More current</td><td>Less current, until zero</td></tr><tr><td>Channel</td><td>Induced by the gate</td><td>Built in</td></tr><tr><td>Symbol line</td><td>Broken</td><td>Solid</td></tr></tbody></table>` },
    { title: 'BJT vs MOSFET', html: `<table class="tbl"><thead><tr><th></th><th>BJT</th><th>MOSFET</th></tr></thead><tbody><tr><td>Controlled by</td><td>Base current</td><td>Gate voltage</td></tr><tr><td>Carriers</td><td>Both (bipolar)</td><td>One kind (unipolar)</td></tr><tr><td>Input impedance</td><td>Lower</td><td>Extremely high</td></tr><tr><td>Weak point</td><td>Heat</td><td>Static damage to the oxide</td></tr></tbody></table>` },
    { title: 'Inverting vs non-inverting amplifier', html: `<table class="tbl"><thead><tr><th></th><th>Inverting</th><th>Non-inverting</th></tr></thead><tbody><tr><td>Input to</td><td>− input through R<sub>i</sub></td><td>+ input</td></tr><tr><td>Gain</td><td>−R<sub>f</sub>/R<sub>i</sub></td><td>1 + R<sub>1</sub>/R<sub>2</sub></td></tr><tr><td>Output phase</td><td>Opposite</td><td>Same</td></tr></tbody></table>` },
    { title: 'AM vs FM vs PM', html: `<table class="tbl"><thead><tr><th></th><th>AM</th><th>FM</th><th>PM</th></tr></thead><tbody><tr><td>What varies</td><td>Amplitude</td><td>Frequency</td><td>Phase</td></tr><tr><td>Preferred for</td><td>Long distance</td><td>Short distance</td><td>Short distance</td></tr></tbody></table>` },
    { title: 'Macro, micro and picocell', html: `<table class="tbl"><thead><tr><th></th><th>Macrocell</th><th>Microcell</th><th>Picocell</th></tr></thead><tbody><tr><td>Size</td><td>About 6 miles</td><td>About half a mile</td><td>Very small</td></tr><tr><td>Where</td><td>Remote areas</td><td>Urban zones</td><td>Building, tunnel</td></tr><tr><td>Power</td><td>High</td><td>Low</td><td>Very low</td></tr></tbody></table>` },
    { title: 'HLR vs VLR', html: `<table class="tbl"><thead><tr><th></th><th>HLR</th><th>VLR</th></tr></thead><tbody><tr><td>Data</td><td>Permanent</td><td>Temporary</td></tr><tr><td>Kept by</td><td>The service provider</td><td>The MSC of the area visited</td></tr></tbody></table>` }
  ],
  formulas: [
    { name: 'BJT currents', html: `<div class="eq">I<sub>E</sub> = I<sub>B</sub> + I<sub>C</sub></div>` },
    { name: 'Alpha and beta', html: `<div class="eq">α = I<sub>C</sub>/I<sub>E</sub>, β = I<sub>C</sub>/I<sub>B</sub> = α/(1 − α), α = β/(1 + β)</div>` },
    { name: 'Currents from β', html: `<div class="eq">I<sub>C</sub> = βI<sub>B</sub>, I<sub>E</sub> = (1 + β)I<sub>B</sub>, I<sub>B</sub> = (1 − α)I<sub>E</sub></div>` },
    { name: 'MOSFET saturation boundary', html: `<div class="eq">V<sub>DS</sub> = V<sub>GS</sub> − V<sub>th</sub></div>` },
    { name: 'Inverting amplifier', html: `<div class="eq">A<sub>v</sub> = −R<sub>f</sub>/R<sub>i</sub></div>` },
    { name: 'Non-inverting amplifier', html: `<div class="eq">A<sub>v</sub> = 1 + R<sub>1</sub>/R<sub>2</sub></div>` },
    { name: 'Radar range (Extra)', html: `<div class="eq">R = ct/2, c = 3 × 10<sup>8</sup> m/s</div>` }
  ],
  numbers: [
    { value: '0.3 V, 0.7 V', what: 'Barrier (knee) voltage of germanium and silicon' },
    { value: '< 20 µA, < 50 µA', what: 'Reverse leakage of silicon and germanium diodes' },
    { value: '1 to 2 %', what: 'Share of Iₑ that becomes the base current' },
    { value: '0.95 to 0.999', what: 'Range of α' }, { value: 'up to 500', what: 'Highest β quoted' },
    { value: '535 to 1605 kHz', what: 'AM radio band' }, { value: '88 to 108 MHz', what: 'FM radio band' },
    { value: '2.45 GHz', what: 'Microwave oven frequency' },
    { value: '832 channels × 30 kHz', what: 'One 25 MHz cellular block' },
    { value: '824 to 849 / 869 to 894 MHz', what: 'Cellular uplink and downlink' },
    { value: '6 GHz up, 4 GHz down', what: 'Typical C-band transponder' },
    { value: '45 to 55 km', what: 'Line-of-sight limit that satellites overcome' }
  ],
  traps: [
    `<p>Forward bias is battery <b>+ to P</b>. The reverse saturation current depends on <b>temperature</b>, not on the reverse voltage.</p>`,
    `<p>A Zener regulates only in <b>reverse breakdown</b>; connected forward it is an ordinary 0.7 V diode.</p>`,
    `<p>α is always <b>below 1</b>; β = α/(1 − α) is very sensitive to α (0.99 gives 99, 0.98 gives 49).</p>`,
    `<p>The <b>emitter and collector cannot be swapped</b>, even though both are the same type.</p>`,
    `<p>A transistor used as a <b>switch</b> sits in cut-off or saturation, never in the active region.</p>`,
    `<p>An enhancement MOSFET is <b>normally off</b>; a depletion MOSFET is <b>normally on</b>.</p>`,
    `<p>The inverting gain has a <b>minus sign</b>; the non-inverting gain has a <b>+1</b>.</p>`,
    `<p>Radar range uses <b>half</b> the round-trip time: R = ct/2, not ct.</p>`,
    `<p>A transponder cannot receive and transmit on the <b>same frequency</b>; the downlink is lower than the uplink.</p>`
  ]
});
