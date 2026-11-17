QUESTIONS({
  chunk: '2c',
  questions: [
    {
      id: 'm2-2c-01', module: 'm2', topic: 'm2-em-spectrum', type: 'decide', level: 1,
      q: `<p>An engineer must test whether a signal can pass from a probe inside a sealed vacuum chamber to a receiver outside. Which kind of wave should be used?</p>`,
      options: [ 'A sound wave, because a vacuum gives no noise', 'An electromagnetic wave, because it needs no medium', 'A mechanical wave, because it follows changing magnetic fields', 'A cosmic wave, because it is made for communication' ],
      correct: 1,
      answer: `<p><b>An electromagnetic wave.</b> It crosses empty space; sound cannot.</p>`,
      explain: `<p>EM waves are changing electric and magnetic fields. They travel at the speed of light in a vacuum and <b>need no medium</b>. Sound waves must shake air or another medium, so they stop in a vacuum. This is also how sunlight and radio reach us.</p>`,
      points: [ 'EM waves need no medium', 'Sound needs a medium and fails in a vacuum' ]
    },
    {
      id: 'm2-2c-02', module: 'm2', topic: 'm2-freq-bands', type: 'numerical', level: 2,
      q: `<p>A receiver is tuned to exactly 100 MHz. Which service and band is this?</p>`,
      options: [ 'FM radio in the VHF band', 'TV channel 14 in the UHF band', 'AM radio in the MF band', 'Short-wave radio in the HF band' ],
      correct: 0,
      answer: `<p><b>FM radio, in the VHF band.</b></p>`,
      explain: `<p>FM broadcasting uses 88 to 108 MHz, and 100 MHz lies inside it. This sits in the VHF band, which covers 30 to 300 MHz. AM (MF) is in kHz, HF is 3 to 30 MHz and UHF starts at 300 MHz.</p>`,
      points: [ 'FM radio: 88 to 108 MHz', 'VHF band: 30 to 300 MHz' ]
    },
    {
      id: 'm2-2c-03', module: 'm2', topic: 'm2-optical', type: 'interpret', level: 2,
      q: `<p>A medical equipment designer wants a lamp in the part of the optical spectrum whose main use is medical and which is not used for communication. Which range is it?</p>`,
      options: [ '0.1 mm to 700 nm, the infrared', '4 to 400 nm, the ultraviolet', '400 to 800 nm, the visible', '3 to 30 GHz, the SHF microwaves' ],
      correct: 1,
      answer: `<p><b>Ultraviolet, about 4 to 400 nm.</b></p>`,
      explain: `<p>Ultraviolet lies beyond the visible region at about 4 to 400 nm. It is <b>not used for communication</b>; its primary use is medical. Infrared and visible light are used for communication, and SHF microwaves are not part of the optical spectrum at all.</p>`,
      points: [ 'UV: about 4 to 400 nm', 'Not used for communication', 'Primary use is medical' ]
    },
    {
      id: 'm2-2c-04', module: 'm2', topic: 'm2-comm-system', type: 'troubleshoot', level: 2,
      q: `<p>A receiver gets a strong high-frequency carrier, and its amplifiers, oscillators and tuned circuits all work, yet the speaker is silent. Which block is most likely at fault?</p>`,
      options: [ 'The input transducer', 'The frequency synthesizer', 'The demodulator', 'The channel' ],
      correct: 2,
      answer: `<p><b>The demodulator (detector).</b> It recovers the message from the carrier.</p>`,
      explain: `<p>The carrier arrives and is amplified and tuned correctly, so the problem lies after those stages. The <b>demodulator</b> removes the carrier and recovers the original signal. If it fails, the speaker (output transducer) gets nothing to play.</p>`,
      points: [ 'Demodulator is in the receiver', 'It recovers the original signal from the carrier' ]
    },
    {
      id: 'm2-2c-05', module: 'm2', topic: 'm2-comm-channels', type: 'decide', level: 1,
      q: `<p>A submarine crew wants to detect nearby underwater objects without sending any signal that might reveal their position. Which technique should they use?</p>`,
      options: [ 'Passive sonar listening with hydrophones', 'Active sonar using echo reflection', 'Free-space radio in the VHF band', 'Fibre-optic cable put into the water' ],
      correct: 0,
      answer: `<p><b>Passive sonar.</b> It only listens.</p>`,
      explain: `<p>Water is a communication channel for sonar. <b>Passive</b> sonar listens for underwater sounds with sensitive hydrophones and transmits nothing. <b>Active</b> sonar sends a signal and uses the echo, like radar, so it reveals the sender.</p>`,
      points: [ 'Water channel: sonar', 'Passive sonar listens with hydrophones, no transmission' ]
    },
    {
      id: 'm2-2c-06', module: 'm2', topic: 'm2-modulation', type: 'predict', level: 2,
      q: `<p>On an oscilloscope, a modulated wave keeps a constant height, but its cycles bunch up and spread out in time with the message. Which modulation is this?</p>`,
      options: [ 'Amplitude modulation', 'Phase modulation', 'Envelope modulation', 'Frequency modulation' ],
      correct: 3,
      answer: `<p><b>Frequency modulation (FM).</b></p>`,
      explain: `<p>In FM the message changes the <b>frequency</b> of the carrier, so the waves bunch up and spread out, while the height stays constant. In AM it is the height (the envelope) that follows the message.</p>`,
      points: [ 'FM: constant height', 'Waves bunch up and spread out with the message' ]
    },
    {
      id: 'm2-2c-07', module: 'm2', topic: 'm2-em-spectrum', type: 'explain', level: 2,
      q: `<p>A student sets up sensors for a passing radio wave. The magnetic sensor shows strong oscillations but the electric sensor reads zero. What does this tell you about the setup?</p>`,
      options: [ 'Radio waves have only a magnetic field, so the electric sensor is unneeded', 'EM waves are changing electric and magnetic fields, so both sensors should respond', 'The electric field exists only in the optical spectrum', 'EM waves have no fields and depend on a medium' ],
      correct: 1,
      answer: `<p><b>The setup is faulty.</b> An EM wave is made of changing electric <b>and</b> magnetic fields, so both sensors must show oscillations.</p>`,
      explain: `<p>An electromagnetic wave consists of changing electric and magnetic fields together, which is why it can cross a vacuum. A reading with an electric field of zero means the electric sensor is not working or not set up properly.</p>`,
      points: [ 'EM wave = changing electric and magnetic fields', 'Both sensors should show oscillation' ]
    },
    {
      id: 'm2-2c-08', module: 'm2', topic: 'm2-freq-bands', type: 'interpret', level: 2,
      q: `<p>An industrial heater works at 2.45 GHz, the same frequency as a microwave oven. A colleague says it is not a “microwave” device because microwaves begin at 3 GHz. Who is right?</p>`,
      options: [ 'The heater is a microwave device: microwaves start from 1 GHz', 'The colleague: microwaves start at 3 GHz, so 2.45 GHz is not a microwave', 'It is an infrared device, because ovens produce heat', 'It is in the EHF band, because ovens need millimetre waves' ],
      correct: 0,
      answer: `<p><b>The heater is a microwave device.</b> The microwave region begins at 1 GHz, so 2.45 GHz qualifies.</p>`,
      explain: `<p>Microwaves cover frequencies from 1 GHz upwards. The SHF band proper runs from 3 to 30 GHz, but that is only part of the microwave region. Microwave ovens usually work at 2.45 GHz, and EHF (millimetre waves) starts at 30 GHz, far above it.</p>`,
      points: [ 'Microwaves start from 1 GHz', 'SHF is 3 to 30 GHz, a part of the microwave region', 'Ovens use 2.45 GHz' ]
    },
    {
      id: 'm2-2c-09', module: 'm2', topic: 'm2-optical', type: 'numerical', level: 1,
      q: `<p>A light source in a lab emits at 600 nm. In which part of the optical spectrum does it lie?</p>`,
      options: [ 'Ultraviolet', 'Infrared', 'Visible', 'Millimetre waves' ],
      correct: 2,
      answer: `<p><b>Visible light.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>Visible light: 0.4 to 0.8 µm = 400 to 800 nm.</p></div><div class="solve"><div class="eq">400 nm &lt; 600 nm &lt; 800 nm</div></div><div class="result"><p>600 nm is <b>visible light</b></p></div></div>`,
      points: [ 'Visible: 400 to 800 nm', '600 nm lies inside that range' ]
    },
    {
      id: 'm2-2c-10', module: 'm2', topic: 'm2-comm-system', type: 'design', level: 2,
      q: `<p>A mountain rescue team needs one light, portable unit that both sends and receives. Which equipment suits them?</p>`,
      options: [ 'Two modulators in one transmitter', 'A transmitter and a separate receiver in two boxes', 'A receiver only, with a larger antenna', 'A transceiver sharing common circuits in one housing' ],
      correct: 3,
      answer: `<p><b>A transceiver.</b> It combines transmitter and receiver in one housing.</p>`,
      explain: `<p>Most electronic communication is two-way, so both parties need a transmitter and a receiver. A <b>transceiver</b> puts both in one housing and shares common circuits such as the power supply, which saves size and weight.</p>`,
      points: [ 'Transceiver = transmitter + receiver', 'Shares common circuits in one housing' ]
    },
    {
      id: 'm2-2c-11', module: 'm2', topic: 'm2-comm-channels', type: 'decide', level: 3,
      q: `<p>An internet provider plans a long-distance digital route in which a laser diode is switched on and off at high speed. Which channel does this need?</p>`,
      options: [ 'A coaxial cable', 'A wire pair', 'A fibre-optic cable', 'A free-space radio link' ],
      correct: 2,
      answer: `<p><b>A fibre-optic cable.</b></p>`,
      explain: `<p>A fibre-optic cable, or “light pipe”, carries the message on a light wave. Digital information switches a laser diode on and off at high speed. Fibre is widely used for long-distance calls and all Internet communications.</p>`,
      points: [ 'Fibre-optic cable carries light', 'Laser diode switched on and off for digital data' ]
    },
    {
      id: 'm2-2c-12', module: 'm2', topic: 'm2-modulation', type: 'interpret', level: 3,
      q: `<p>A station aims to reach distant rural listeners. It uses a scheme in which the carrier frequency stays fixed and the outline of the wave forms an envelope. What is this scheme, and is it suitable?</p>`,
      options: [ 'Amplitude modulation, preferred over long distances', 'Frequency modulation, preferred over long distances', 'Phase modulation, which is poor over long distances', 'Amplitude modulation, suited only to short distances' ],
      correct: 0,
      answer: `<p><b>Amplitude modulation (AM).</b> It is preferred for long-distance communication.</p>`,
      explain: `<p>In AM the carrier amplitude follows the message, giving an outline called the <b>envelope</b>, while the carrier frequency stays fixed. AM is preferred for long distance; FM and PM are preferred for short distance.</p>`,
      points: [ 'Fixed frequency with an envelope means AM', 'AM is preferred for long distance' ]
    },
    {
      id: 'm2-2c-13', module: 'm2', topic: 'm2-freq-bands', type: 'decide', level: 2,
      q: `<p>An officer must reach submerged submarines using 20 kHz. Which band is this, and is it the usual choice?</p>`,
      options: [ 'VF, the usual band for submarines', 'VLF, the usual band for navy to submarines', 'LF, the usual band for marine navigation', 'MF, the usual band for amateur radio' ],
      correct: 1,
      answer: `<p><b>VLF (3 to 30 kHz)</b>, which is used for navy communication with submarines.</p>`,
      explain: `<p>20 kHz lies between 3 kHz and 30 kHz, so it is in the <b>VLF</b> band. That band is used for some government and military communication, such as the navy talking to submarines.</p>`,
      points: [ '20 kHz is in VLF (3 to 30 kHz)', 'VLF is used for navy to submarines' ]
    },
    {
      id: 'm2-2c-14', module: 'm2', topic: 'm2-comm-system', type: 'troubleshoot', level: 2,
      q: `<p>A TV broadcast arrives heavily distorted. The information source and the whole transmitter are working perfectly. Where was the degrading interference most likely added?</p>`,
      options: [ 'In the input transducer and the frequency synthesizer', 'In the oscillators and the tuned circuits of the transmitter', 'In the output transducer and the modulator', 'In the channel and in the receiver' ],
      correct: 3,
      answer: `<p><b>In the channel and the receiver.</b></p>`,
      explain: `<p><b>Noise</b> is any phenomenon that degrades or interferes with the transmitted information. In the block diagram it enters along the way, in the channel and in the receiver, not in the transmitter.</p>`,
      points: [ 'Noise degrades the information', 'It is added in the channel and in the receiver' ]
    },
    {
      id: 'm2-2c-15', module: 'm2', topic: 'm2-modulation', type: 'explain', level: 2,
      q: `<p>A hobbyist connects a microphone straight to a big antenna to send a voice signal 10 miles. It fails. Why?</p>`,
      options: [ 'The message has low frequency and amplitude, so it cannot travel far without a carrier', 'The message is FM and needs a twisted pair to go 10 miles', 'The frequency is too high and reflects back from the antenna', 'The microphone acts as a demodulator and cancels the signal' ],
      correct: 0,
      answer: `<p><b>The raw message is too low in frequency and amplitude.</b> It must be put on a high-frequency carrier.</p>`,
      explain: `<p>The original message cannot be sent a long way because of its low frequency and amplitude. <b>Modulation</b> superimposes it on a high-frequency, high-amplitude carrier, and that modulated wave is what gets transmitted.</p>`,
      points: [ 'Message has low frequency and amplitude', 'Needs modulation onto a carrier' ]
    },
    {
      id: 'm2-2c-16', module: 'm2', topic: 'm2-em-spectrum', type: 'explain', level: 1,
      q: `<p>Two astronauts on a spacewalk cannot hear each other when they shout, but their VHF radios work. Explain why.</p>`,
      options: null, correct: null,
      answer: `<p><b>Radio waves need no medium; sound does.</b></p>`,
      explain: `<p>Sound waves have to shake air or another medium, and space has none. Radio signals are electromagnetic waves, changing electric and magnetic fields, which travel through a vacuum.</p>`,
      points: [ 'Sound needs a medium', 'EM waves cross a vacuum' ]
    },
    {
      id: 'm2-2c-17', module: 'm2', topic: 'm2-freq-bands', type: 'predict', level: 2,
      q: `<p>A company plans a short-haul cellular link at 60 GHz. Which band is it, what is that band also called, and what should be expected of the equipment?</p>`,
      options: null, correct: null,
      answer: `<p><b>EHF (30 to 300 GHz)</b>, also called millimetre waves. The equipment is very complex and expensive.</p>`,
      explain: `<p>60 GHz lies between 30 and 300 GHz, the <b>EHF</b> band, whose waves are called <b>millimetre waves</b>. Equipment there is extremely complex and expensive, but its use is growing for satellite communication, computer data and short-haul cellular networks.</p>`,
      points: [ '60 GHz is in EHF', 'EHF = millimetre waves', 'Equipment is complex and expensive' ]
    },
    {
      id: 'm2-2c-18', module: 'm2', topic: 'm2-optical', type: 'interpret', level: 2,
      q: `<p>In a lecture, a source is described as lying just beyond ultraviolet in the spectrum and as not figuring in communication systems. Which waves could it emit?</p>`,
      options: null, correct: null,
      answer: `<p><b>X-rays and gamma rays</b> (and, beyond them, cosmic rays).</p>`,
      explain: `<p>Beyond the visible and ultraviolet region come X-rays, gamma rays and cosmic rays. They are all electromagnetic radiation but do not figure in communication systems.</p>`,
      points: [ 'After UV: X-rays, gamma rays, cosmic rays', 'Not used in communication' ]
    },
    {
      id: 'm2-2c-19', module: 'm2', topic: 'm2-comm-system', type: 'troubleshoot', level: 1,
      q: `<p>In a public address system the voice is captured, modulated, sent along a wire, and demodulated correctly at the receiver, yet the audience hears nothing. Which final block is at fault?</p>`,
      options: null, correct: null,
      answer: `<p><b>The output transducer</b> (the loudspeaker).</p>`,
      explain: `<p>The output transducer is the last block. It delivers the recovered electrical signal in its original form, for example a voice signal to a speaker or a video signal to an LCD screen. If everything before it works, it is the speaker that fails.</p>`,
      points: [ 'Output transducer delivers the original signal', 'A speaker is an output transducer' ]
    },
    {
      id: 'm2-2c-20', module: 'm2', topic: 'm2-comm-channels', type: 'design', level: 2,
      q: `<p>An office needs a wired local-area network (LAN). Which standard cable type from the course is used for a LAN?</p>`,
      options: null, correct: null,
      answer: `<p><b>Twisted-pair cable.</b></p>`,
      explain: `<p>The course lists a twisted-pair cable as the electrical conductor used in a local-area network. Coaxial cable is the one used for cable TV, and fibre-optic cable is widely used for long-distance calls and the Internet.</p>`,
      points: [ 'Twisted pair is used for a LAN', 'Coaxial is for cable TV', 'Fibre is for long distance' ]
    },
    {
      id: 'm2-2c-21', module: 'm2', topic: 'm2-modulation', type: 'explain', level: 2,
      q: `<p>Two radio stations in one city suggest dropping modulation and just sending their raw audio. Explain why this would be chaotic.</p>`,
      options: null, correct: null,
      answer: `<p><b>All the stations would use the same low frequencies and interfere.</b> Modulation puts each on its own carrier.</p>`,
      explain: `<p>Speech lies in the voice-frequency range (300 to 3000 Hz), so unmodulated stations would all sit on top of one another. Modulation onto different high-frequency carriers allows <b>multiplexing</b> and prevents interference. It also reduces antenna height and enables long-distance communication.</p>`,
      points: [ 'Raw audio of all stations would overlap', 'Modulation allows multiplexing', 'It prevents interference' ]
    },
    {
      id: 'm2-2c-22', module: 'm2', topic: 'm2-em-spectrum', type: 'interpret', level: 3,
      q: `<p>A paper claims a new radio wave that travels at the speed of light in a vacuum but has only a changing magnetic field and no electric field. Is the claim consistent with the EM spectrum?</p>`,
      options: null, correct: null,
      answer: `<p><b>No.</b> An EM wave is made of changing electric and magnetic fields together.</p>`,
      explain: `<p>Electromagnetic waves are changing electric <b>and</b> magnetic fields. A wave with a magnetic field only does not fit the definition, so it cannot be a radio wave or anything else in the EM spectrum.</p>`,
      points: [ 'EM waves need both fields', 'Magnetic field alone contradicts the definition' ]
    },
    {
      id: 'm2-2c-23', module: 'm2', topic: 'm2-freq-bands', type: 'numerical', level: 3,
      q: `<p>An old TV is tuned to terrestrial channel 14. In which band does it work, and what is that band’s range?</p>`,
      options: null, correct: null,
      answer: `<p><b>UHF, 300 to 3000 MHz.</b></p>`,
      explain: `<p>TV channels 2 to 13 are in VHF (30 to 300 MHz), and channels 14 to 51 are in <b>UHF</b>. So channel 14 is UHF, which covers 300 to 3000 MHz.</p>`,
      points: [ 'Channel 14 is a UHF channel', 'UHF: 300 to 3000 MHz' ]
    },
    {
      id: 'm2-2c-24', module: 'm2', topic: 'm2-freq-bands', type: 'troubleshoot', level: 2,
      q: `<p>A team tries to build a communication transceiver at 500 GHz, between millimetre waves and the infrared, and cannot make it work well. What is the main reason?</p>`,
      options: null, correct: null,
      answer: `<p><b>There is not enough suitable hardware.</b> This region is virtually unused.</p>`,
      explain: `<p>The range from 300 GHz up to the optical spectrum lies between RF and optical. It is virtually uninhabited, because the lack of hardware and components limits its use.</p>`,
      points: [ '300 GHz up to optical is nearly unused', 'Reason: lack of hardware and components' ]
    },
    {
      id: 'm2-2c-25', module: 'm2', topic: 'm2-comm-system', type: 'explain', level: 2,
      q: `<p>A transmitter has an amplifier and filters but no oscillator and no modulator, so the signal goes straight to the antenna. Which main transmitter function is missing, and what does it do?</p>`,
      options: null, correct: null,
      answer: `<p><b>Modulation.</b> It superimposes the message on a high-frequency carrier.</p>`,
      explain: `<p>The main function of the transmitter is <b>modulation</b>. An oscillator makes the high-frequency carrier and a modulator puts the message on it. Without these, the low-frequency message is sent as it is and cannot travel far.</p>`,
      points: [ 'Main transmitter function: modulation', 'Message goes on a high-frequency carrier' ]
    },
    {
      id: 'm2-2c-26', module: 'm2', topic: 'm2-comm-channels', type: 'decide', level: 2,
      q: `<p>A research ship wants to map the shape of an ocean trench by bouncing signals off it, much as radar does. Which water-channel technique should it use?</p>`,
      options: null, correct: null,
      answer: `<p><b>Active sonar.</b></p>`,
      explain: `<p>Active sonar sends a signal and uses the <b>echo reflection</b> to find the distance and direction of underwater objects, as radar does. Passive sonar only listens with hydrophones.</p>`,
      points: [ 'Active sonar uses echo reflection', 'Passive sonar only listens' ]
    },
    {
      id: 'm2-2c-27', module: 'm2', topic: 'm2-modulation', type: 'predict', level: 3,
      q: `<p>For a short-distance link, a designer wants neither the height of the wave nor the carrier frequency to carry the message. Which carrier parameter is left to vary?</p>`,
      options: null, correct: null,
      answer: `<p><b>The phase</b>, which is phase modulation (PM).</p>`,
      explain: `<p>Modulation varies one parameter of the carrier: amplitude (AM), frequency (FM) or phase (PM). With amplitude and frequency kept fixed, only the <b>phase angle</b> remains. PM, like FM, is preferred for short-distance communication.</p>`,
      points: [ 'Three parameters: amplitude, frequency, phase', 'Phase left: PM', 'PM is for short distance' ]
    },
    {
      id: 'm2-2c-28', module: 'm2', topic: 'm2-freq-bands', type: 'predict', level: 2,
      q: `<p>A military base camp uses half-duplex two-way radios. Which band is typical for this use, and what are its limits?</p>`,
      options: null, correct: null,
      answer: `<p><b>HF, 3 to 30 MHz</b> (the “short waves”).</p>`,
      explain: `<p>The HF band, 3 to 30 MHz, covers all kinds of simplex broadcasting and half-duplex two-way radio, including government and military communication.</p>`,
      points: [ 'Half-duplex two-way radio and military use: HF', 'HF: 3 to 30 MHz' ]
    },
    {
      id: 'm2-2c-29', module: 'm2', topic: 'm2-comm-system', type: 'design', level: 3,
      q: `<p>A student draws a receiver with antenna, amplifier, oscillator and tuned circuit wired straight to a speaker. The instructor says it will output only a high-frequency signal. Which block is missing, and what does it do?</p>`,
      options: null, correct: null,
      answer: `<p><b>The demodulator (detector).</b> It recovers the original signal from the carrier.</p>`,
      explain: `<p>The receiver must reproduce the message from the received modulated carrier. The <b>demodulator</b> does this. Without it the speaker receives the high-frequency modulated wave instead of the low-frequency message.</p>`,
      points: [ 'Missing block: demodulator (detector)', 'It recovers the original intelligence signal' ]
    },
    {
      id: 'm2-2c-30', module: 'm2', topic: 'm2-em-spectrum', type: 'numerical', level: 3,
      q: `<p>A survey near an airport picks up 50 Hz from mains power lines and 250 kHz from an aeronautical navigation beacon. Which band does each belong to?</p>`,
      options: null, correct: null,
      answer: `<p>50 Hz is <b>ELF</b>; 250 kHz is <b>LF</b>.</p>`,
      explain: `<p>ELF covers 30 to 300 Hz and includes AC power line frequencies (50 and 60 Hz). LF covers 30 to 300 kHz and is used for aeronautical and marine navigation, and 250 kHz is inside it.</p>`,
      points: [ '50 Hz in ELF (30 to 300 Hz)', '250 kHz in LF (30 to 300 kHz)' ]
    },
    {
      id: 'm2-2c-31', module: 'm2', topic: 'm2-freq-bands', type: 'numerical', level: 3,
      q: `<p>A receiver is used at 950 kHz, then at 98 MHz, then at 4.5 MHz. Name the band and the service typical of each.</p>`,
      options: null, correct: null,
      answer: `<p>950 kHz: <b>MF</b>, AM radio. 98 MHz: <b>VHF</b>, FM radio. 4.5 MHz: <b>HF</b>, short waves.</p>`,
      explain: `<p>950 kHz is inside 300 to 3000 kHz (MF) and inside the AM broadcast range of 535 to 1605 kHz. 98 MHz is inside 30 to 300 MHz (VHF) and inside the FM range of 88 to 108 MHz. 4.5 MHz is inside 3 to 30 MHz (HF), the short waves.</p>`,
      points: [ '950 kHz: MF, AM (535 to 1605 kHz)', '98 MHz: VHF, FM (88 to 108 MHz)', '4.5 MHz: HF, short waves' ]
    },
    {
      id: 'm2-2c-32', module: 'm2', topic: 'm2-em-spectrum', type: 'numerical', level: 3,
      q: `<p>Extra: the wavelength is λ = c / f with c = 3 × 10<sup>8</sup> m/s. Find λ for 30 MHz, 300 MHz and 100 MHz, and check them against the spectrum chart.</p>`,
      options: null, correct: null,
      answer: `<p><b>10 m</b>, <b>1 m</b> and <b>3 m</b>. The first two match the chart’s start of VHF (10 m) and UHF (1 m).</p>`,
      explain: `<div class="worked"><div class="given"><p>λ = c / f, c = 3 × 10<sup>8</sup> m/s.</p></div><div class="solve"><div class="eq">30 MHz: 3 × 10<sup>8</sup> / 3 × 10<sup>7</sup> = 10 m</div><div class="eq">300 MHz: 3 × 10<sup>8</sup> / 3 × 10<sup>8</sup> = 1 m</div><div class="eq">100 MHz: 3 × 10<sup>8</sup> / 10<sup>8</sup> = 3 m</div></div><div class="result"><p>100 MHz gives 3 m, between 10 m and 1 m, as it must for a signal inside VHF</p></div></div>`,
      points: [ 'λ = c / f', '30 MHz is 10 m, 300 MHz is 1 m', '100 MHz is 3 m, inside VHF' ]
    },
    {
      id: 'm2-2c-33', module: 'm2', topic: 'm2-modulation', type: 'numerical', level: 3,
      q: `<p>Extra: an efficient antenna is about a quarter of a wavelength long. Compare the antenna needed for a 3 kHz voice signal sent directly with that for a 100 MHz FM carrier (c = 3 × 10<sup>8</sup> m/s). How does this show the need for modulation?</p>`,
      options: null, correct: null,
      answer: `<p>Voice: <b>25 km</b>. FM carrier: <b>0.75 m</b>. Modulation onto a high-frequency carrier <b>reduces the antenna height</b>.</p>`,
      explain: `<div class="worked"><div class="given"><p>λ = c / f; antenna ≈ λ / 4.</p></div><div class="solve"><div class="eq">3 kHz: λ = 3 × 10<sup>8</sup> / 3 × 10<sup>3</sup> = 100 km, λ/4 = 25 km</div><div class="eq">100 MHz: λ = 3 m, λ/4 = 0.75 m</div></div><div class="result"><p>A 25 km antenna is impossible; 0.75 m is easy. This is one of the needs for modulation</p></div></div>`,
      points: [ 'λ/4 for 3 kHz is 25 km', 'λ/4 for 100 MHz is 0.75 m', 'Modulation reduces antenna height' ]
    },
    {
      id: 'm2-2c-34', module: 'm2', topic: 'm2-modulation', type: 'decide', level: 3,
      q: `<p>A company needs two links: one broadcast reaching listeners hundreds of kilometres away, and one office intercom across a building. Choose AM, FM or PM for each, and explain.</p>`,
      options: null, correct: null,
      answer: `<p>The long-distance broadcast: <b>AM</b>. The short-distance intercom: <b>FM or PM</b>.</p>`,
      explain: `<p>AM varies the amplitude of the carrier and is preferred for long-distance communication. FM varies the carrier frequency and PM varies its phase, and both are preferred for short distances. Whichever is chosen, the message is superimposed on a high-frequency carrier at the transmitter and recovered by a demodulator at the receiver.</p>`,
      points: [ 'AM for long distance', 'FM or PM for short distance', 'Modulator at the transmitter, demodulator at the receiver' ]
    },
    {
      id: 'm2-2c-35', module: 'm2', topic: 'm2-optical', type: 'numerical', level: 3,
      q: `<p>Three sources emit at 10 µm, 750 nm and 350 nm. Convert to the same unit and place each in the optical spectrum.</p>`,
      options: null, correct: null,
      answer: `<p>10 µm = 10 000 nm: <b>infrared</b>. 750 nm: <b>visible</b>. 350 nm: <b>ultraviolet</b>.</p>`,
      explain: `<div class="worked"><div class="given"><p>Infrared: about 0.1 mm (100 µm) down to 700 nm. Visible: 400 to 800 nm. Ultraviolet: about 4 to 400 nm.</p></div><div class="solve"><div class="eq">10 µm = 10 × 1000 nm = 10 000 nm, between 700 nm and 100 000 nm</div><div class="eq">750 nm: above the infrared limit of 700 nm and inside 400 to 800 nm</div><div class="eq">350 nm: inside 4 to 400 nm</div></div><div class="result"><p><b>Infrared</b>, <b>visible</b>, <b>ultraviolet</b> (the course quotes infrared to 700 nm and visible 400 to 800 nm, so they overlap between 700 and 800 nm)</p></div></div>`,
      points: [ '10 µm = 10 000 nm: infrared', '750 nm: visible', '350 nm: ultraviolet' ]
    },
    {
      id: 'm2-2c-36', module: 'm2', topic: 'm2-freq-bands', type: 'numerical', level: 3,
      q: `<p>Put these in order of increasing frequency and name each band: 98 MHz FM station, 50 Hz mains, 5 GHz wireless LAN, 20 kHz navy link, 1000 kHz AM station.</p>`,
      options: null, correct: null,
      answer: `<p>50 Hz (<b>ELF</b>), 20 kHz (<b>VLF</b>), 1000 kHz (<b>MF</b>), 98 MHz (<b>VHF</b>), 5 GHz (<b>SHF</b>).</p>`,
      explain: `<p>Convert to one unit and compare: 50 Hz &lt; 20 000 Hz &lt; 1 000 000 Hz &lt; 98 000 000 Hz &lt; 5 000 000 000 Hz. The bands in order are ELF (30 to 300 Hz), VLF (3 to 30 kHz), MF (300 to 3000 kHz), VHF (30 to 300 MHz) and SHF (3 to 30 GHz, which includes wireless LANs).</p>`,
      points: [ 'Convert all to Hz first', 'ELF, VLF, MF, VHF, SHF in that order', 'Wireless LANs are in SHF' ]
    },
    {
      id: 'm2-2c-37', module: 'm2', topic: 'm2-comm-system', type: 'explain', level: 3,
      q: `<p>A voice call goes from a microphone to a distant loudspeaker by radio. List the blocks in order from the speaker’s mouth to the listener’s ear, and say what form the signal takes at each of three points: after the first block, on the channel, and after the demodulator.</p>`,
      options: null, correct: null,
      answer: `<p>Source, input transducer, transmitter, channel, receiver, output transducer. After the transducer: <b>electrical voice signal</b>. On the channel: <b>modulated high-frequency carrier</b>. After the demodulator: <b>the original electrical voice signal</b>.</p>`,
      explain: `<p>The information source (the speaker) produces sound. The <b>input transducer</b> (microphone) converts it to an electrical signal. The <b>transmitter</b> modulates it onto a carrier, the <b>channel</b> (free space) carries the modulated wave and adds noise, and the <b>receiver</b> amplifies, tunes and demodulates it to recover the original signal. The <b>output transducer</b> (speaker) turns it back into sound.</p>`,
      points: [ 'Correct block order', 'Channel carries the modulated carrier, with noise added', 'Demodulator recovers the original electrical signal' ]
    }
  ]
});
