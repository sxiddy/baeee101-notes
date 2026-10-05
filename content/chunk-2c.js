CHUNK({
  chunk: '2c',
  module: 'm2',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm2-em-spectrum',
      title: 'Electromagnetic spectrum',
      short: 'EM spectrum',
      blurb: 'What electromagnetic waves are, what they all have in common and how the spectrum is laid out from radio waves to gamma rays.',
      source: 'Pages 72–74',
      tabs: [
        {
          title: 'EM waves',
          html: `<p class="lead">Electromagnetic waves are signals that <b>oscillate sinusoidally</b>.</p>
<div class="kv"><div><span>Speed</span><b>Speed of light; in a vacuum all EM waves travel at the same speed</b></div><div><span>Medium</span><b>None needed; they can move through empty space</b></div><div><span>Energy</span><b>A form of energy that travels through space in waves</b></div></div>
<div class="note why"><p>Sound waves need air or another medium to shake. EM waves are changing electric and magnetic fields, so they cross a vacuum, which is how sunlight and radio reach us.</p></div>
<p>The spectrum is the foundation of many technologies, including <b>radios, televisions, mobile phones and microwave ovens</b>.</p>`
        },
        {
          title: 'The spectrum',
          html: `<p class="lead">All electrical and electronic signals that radiate into free space fall into the <b>electromagnetic (EM) spectrum</b>, the full range of electromagnetic radiation organised by <b>frequency and wavelength</b>.</p>
<p>It includes <b>radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays</b>, from low frequency (long wavelength) to high frequency (short wavelength).</p>
<figure data-fig="m2-em-spectrum"></figure>
<p>The radio part is split into bands named ELF, VF, VLF, LF, MF, HF, VHF, UHF, SHF and EHF. EHF signals above 30 GHz are called <b>millimetre waves</b>. Above them is the <b>optical spectrum</b> (infrared, visible light, ultraviolet), then X-rays, gamma rays and cosmic rays.</p>
<div class="note exam"><p>The figure pairs each band with its starting frequency and wavelength. Every step to the next band is a factor of 10 in frequency, and wavelength falls by the same factor (λ = c / f).</p></div>`
        }
      ],
      flashcards: [
        { front: 'What is the EM spectrum?', back: 'The full range of electromagnetic radiation, organised by frequency and wavelength: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays.' },
        { front: 'Do EM waves need a medium?', back: 'No. Unlike sound waves, they can travel through empty space.' },
        { front: 'How fast do EM waves travel in a vacuum?', back: 'At the speed of light; all EM waves travel at the same speed.' },
        { front: 'Name four technologies built on the EM spectrum.', back: 'Radios, televisions, mobile phones and microwave ovens.' },
        { front: 'What are millimetre waves?', back: 'EM signals above 30 GHz (the EHF band, 30–300 GHz).' },
        { front: 'What lies above the millimetre-wave region?', back: 'The optical spectrum: infrared, visible and ultraviolet light.' }
      ],
      oneLiners: [
        'EM waves: sinusoidal, speed of light, no medium needed, carry energy.',
        'Spectrum order: radio, microwave, infrared, visible, ultraviolet, X-rays, gamma rays.',
        'Above 30 GHz = millimetre waves; above that = optical spectrum.'
      ],
      formulas: [
        { name: 'Wavelength and frequency', html: `λ = c / f`, note: 'c = 3 × 10<sup>8</sup> m/s. Used to read the wavelength row of the spectrum figure.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-freq-bands',
      title: 'Frequency bands and their uses',
      short: 'Frequency bands',
      blurb: 'Each radio band from ELF to EHF, its range and what it is used for.',
      source: 'Pages 75–82',
      tabs: [
        {
          title: 'ELF, VF, VLF, LF',
          html: `<table class="tbl"><thead><tr><th>Band</th><th>Range</th><th>What it is used for</th></tr></thead><tbody>
<tr><td>Extremely Low Frequencies (ELF)</td><td><b>30 to 300 Hz</b></td><td>AC power line frequencies (50 and 60 Hz are common) and the low end of the human audio range</td></tr>
<tr><td>Voice Frequencies (VF)</td><td><b>300 to 3000 Hz</b></td><td>The normal range of human speech. Human hearing extends from about 20 to 20,000 Hz</td></tr>
<tr><td>Very Low Frequencies (VLF)</td><td><b>3 kHz to 30 kHz</b></td><td>The higher end of human hearing, up to about 15 or 20 kHz; many musical instruments sound in this range and in ELF and VF; some government and military communication, such as the navy talking to submarines</td></tr>
<tr><td>Low Frequencies (LF)</td><td><b>30 to 300 kHz</b></td><td>Aeronautical and marine navigation; also subcarriers, signals modulated by the baseband information. Two or more subcarriers are added and the combination modulates the final high-frequency carrier</td></tr>
</tbody></table>`
        },
        {
          title: 'MF, HF, VHF, UHF',
          html: `<table class="tbl"><thead><tr><th>Band</th><th>Range</th><th>What it is used for</th></tr></thead><tbody>
<tr><td>Medium Frequencies (MF)</td><td><b>300 to 3000 kHz</b> (0.3 to 3.0 MHz)</td><td>AM radio broadcasting (<b>535 to 1605 kHz</b>); marine and amateur radio</td></tr>
<tr><td>High Frequencies (HF)</td><td><b>3 to 30 MHz</b></td><td>The “short waves”: all kinds of simplex broadcasting and half-duplex two-way radio; government and military two-way communication</td></tr>
<tr><td>Very High Frequencies (VHF)</td><td><b>30 to 300 MHz</b></td><td>Mobile radio, marine and aeronautical communication, FM radio broadcasting (<b>88 to 108 MHz</b>), TV channels 2 to 13, amateur bands</td></tr>
<tr><td>Ultrahigh Frequencies (UHF)</td><td><b>300 to 3000 MHz</b></td><td>UHF TV channels 14 to 51, land mobile communication, cellular telephones, military communication, some radar and navigation, amateur bands</td></tr>
</tbody></table>`
        },
        {
          title: 'SHF, EHF and beyond',
          html: `<table class="tbl"><thead><tr><th>Band</th><th>Range</th><th>What it is used for</th></tr></thead><tbody>
<tr><td>Microwaves and Superhigh Frequencies (SHF)</td><td>Microwaves from <b>1 GHz</b>; SHF is <b>3 to 30 GHz</b></td><td>Satellite communication and radar; wireless LANs; many cellular systems. Microwave ovens usually operate at <b>2.45 GHz</b></td></tr>
<tr><td>Extremely High Frequencies (EHF)</td><td><b>30 to 300 GHz</b></td><td>Millimetre waves. Equipment is extremely complex and expensive, but use is growing for satellite communication, computer data, short-haul cellular networks and some specialised radar</td></tr>
<tr><td>300 GHz up to the optical spectrum</td><td>Between RF and optical</td><td>Virtually uninhabited; lack of hardware and components limits its use</td></tr>
</tbody></table>
<div class="note exam"><p>Learn the order ELF, VF, VLF, LF, MF, HF, VHF, UHF, SHF, EHF with the start frequencies 30 Hz, 300 Hz, 3 kHz, 30 kHz, 300 kHz, 3 MHz, 30 MHz, 300 MHz, 3 GHz, 30 GHz. Each band is ten times the one before.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Range of ELF and a common use?', back: '30 to 300 Hz. AC power line frequencies (50 and 60 Hz).' },
        { front: 'Range of the voice frequency band?', back: '300 to 3000 Hz, the normal range of human speech.' },
        { front: 'What is the VLF band used for in the navy?', back: 'Communicating with submarines. VLF is 3 to 30 kHz.' },
        { front: 'Which band is used for AM radio and what are its limits?', back: 'MF (300 to 3000 kHz). AM broadcasting is 535 to 1605 kHz.' },
        { front: 'Which band is called short waves?', back: 'HF, 3 to 30 MHz.' },
        { front: 'Which band carries FM broadcasting?', back: 'VHF (30 to 300 MHz); FM is 88 to 108 MHz.' },
        { front: 'Which band carries cellular telephones and UHF TV?', back: 'UHF, 300 to 3000 MHz.' },
        { front: 'What frequency does a microwave oven usually use?', back: '2.45 GHz.' },
        { front: 'What are SHF and EHF ranges?', back: 'SHF 3 to 30 GHz (satellite, radar, wireless LAN); EHF 30 to 300 GHz (millimetre waves).' },
        { front: 'What are subcarriers?', back: 'Signals modulated by the baseband information, used in the LF range. Two or more are added and the combination modulates the final high-frequency carrier.' }
      ],
      oneLiners: [
        'Bands in order: ELF, VF, VLF, LF, MF, HF, VHF, UHF, SHF, EHF; each 10× the last.',
        'AM = MF (535–1605 kHz); FM = VHF (88–108 MHz); short wave = HF.',
        'Cell phones and UHF TV = UHF; satellites and radar = SHF; microwave oven = 2.45 GHz.',
        'Navy-to-submarine communication = VLF.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-optical',
      title: 'The optical spectrum',
      short: 'Optical spectrum',
      blurb: 'Infrared, visible light and ultraviolet, with their wavelengths and uses.',
      source: 'Pages 83–84',
      tabs: [
        {
          title: 'Infrared, visible, ultraviolet',
          html: `<p class="lead">Right above the millimetre-wave region is the <b>optical spectrum</b>, the region occupied by light waves. There are three types: infrared, visible and ultraviolet.</p>
<table class="tbl"><thead><tr><th></th><th>Infrared</th><th>Visible light</th><th>Ultraviolet</th></tr></thead><tbody>
<tr><td>Wavelength</td><td>About <b>0.1 mm to 700 nm</b> (100 to 0.7 µm)</td><td><b>0.4 to 0.8 µm</b> (400 to 800 nm)</td><td>About <b>4 to 400 nm</b></td></tr>
<tr><td>Position</td><td>Between the highest radio frequencies (millimetre waves) and visible light</td><td>Just above infrared</td><td>Beyond the visible region</td></tr>
<tr><td>Use</td><td>Wavelengths often quoted in micrometres or nanometres</td><td>Used for various kinds of communication</td><td>Not used for communication; primary use is medical. Sunburn comes from solar UV. Also from mercury vapour lights, fluorescent lamps and sun lamps</td></tr>
</tbody></table>
<p>1 µm is one-millionth of a metre. Light wavelengths are often given in <b>angstroms</b>: 1 Å = 10<sup>−10</sup> m. The visible range is roughly <b>8000 Å (red)</b> to <b>4000 Å (violet)</b>.</p>
<div class="note why"><p>Red is low-frequency, long-wavelength light. Violet is high-frequency, short-wavelength light.</p></div>`
        },
        {
          title: 'Beyond the visible',
          html: `<p class="lead">Ultraviolet is not used for communication. Its primary use is medical.</p>
<p>Beyond the visible region are X-rays, gamma rays and cosmic rays. They are all electromagnetic radiation but do not figure in communication systems.</p>
<div class="note heads-up"><p>The course material gives infrared up to 700 nm and visible light as 400–800 nm, so the two overlap between 700 and 800 nm. Quote the numbers as given.</p></div>`
        }
      ],
      flashcards: [
        { front: 'What are the three types of light wave?', back: 'Infrared, visible and ultraviolet.' },
        { front: 'Wavelength range of visible light?', back: '0.4 to 0.8 µm (400 to 800 nm), about 4000 Å (violet) to 8000 Å (red).' },
        { front: 'What is an angstrom?', back: '1 Å = 10^-10 m, used for light wavelengths.' },
        { front: 'Which has the shorter wavelength, red or violet light?', back: 'Violet (high frequency); red is low frequency and long wavelength.' },
        { front: 'Is ultraviolet used for communication?', back: 'No. Its main use is medical. Solar UV causes sunburn.' },
        { front: 'Infrared range?', back: 'About 0.1 mm to 700 nm (100 to 0.7 µm).' }
      ],
      oneLiners: [
        'Optical spectrum = infrared + visible + ultraviolet.',
        'Visible: 0.4–0.8 µm; red long wavelength, violet short.',
        '1 Å = 10^-10 m; UV is 4–400 nm and not used for communication.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-comm-system',
      title: 'Elements of a communication system',
      short: 'Communication system',
      blurb: 'The blocks every electronic communication system has, from information source to output transducer, and where noise gets in.',
      source: 'Pages 85–96',
      tabs: [
        {
          title: 'The block diagram',
          html: `<p class="lead">All electronic communication systems have a <b>transmitter</b>, a <b>communication channel (medium)</b> and a <b>receiver</b>.</p>
<figure data-fig="m2-comm-block"></figure>
<ul><li>It begins when a human (or a computer or electronic current) generates a message, data or other intelligence that must reach others.</li><li>In electronic systems the message is called <b>information</b> or an <b>intelligence signal</b>.</li><li>The message, as an electronic signal, goes to the transmitter, over the channel, and the receiver picks it up and relays it to another human.</li><li>Along the way <b>noise</b> is added in the channel and in the receiver. Noise is any phenomenon that degrades or interferes with the transmitted information.</li></ul>`
        },
        {
          title: 'Source and transducer',
          html: `<p class="lead">The <b>information source</b> produces the message: words, groups of words, code, symbols, sound signals and so on.</p>
<p>The <b>input transducer</b> converts physical quantities (temperature, pressure, light intensity and so on) into electrical signals. The message may or may not be electrical, so a transducer turns it into a <b>time-varying electrical signal</b>.</p>
<div class="note example"><p>In radio broadcasting, a microphone converts the message in the form of sound waves into the corresponding electrical signal.</p></div>`
        },
        {
          title: 'Transmitter',
          html: `<p class="lead">The transmitter is a collection of electronic components and circuits that converts the electrical signal into a signal <b>suitable for transmission over a given medium</b>.</p>
<div class="chips"><span class="chip">Oscillators</span><span class="chip">Amplifiers</span><span class="chip">Tuned circuits and filters</span><span class="chip">Modulators</span><span class="chip">Frequency mixers</span><span class="chip">Frequency synthesizers</span></div>
<p>Its main function is <b>modulation</b>: the message signal is superimposed on a high-frequency carrier signal.</p>`
        },
        {
          title: 'Receiver and transceiver',
          html: `<p class="lead">The main function of the <b>receiver</b> is to reproduce the message signal in electrical form from the distorted received signal.</p>
<div class="chips"><span class="chip">Amplifiers</span><span class="chip">Oscillators</span><span class="chip">Mixers</span><span class="chip">Tuned circuits and filters</span><span class="chip">Demodulator (detector)</span></div>
<p>The <b>demodulator or detector</b> recovers the original intelligence signal from the modulated carrier. The <b>output transducer</b> (receiving transducer) delivers the original signal, read out or displayed: a voice signal to a speaker, a video signal to an LCD screen.</p>
<h3>Transceivers</h3>
<p>Most electronic communication is two-way, so both parties need a transmitter and a receiver. Equipment that has both in one housing, sharing common circuits such as the power supply, is a <b>transceiver</b>. Examples: telephones, handheld radios, cellular telephones and computer modems.</p>`
        }
      ],
      flashcards: [
        { front: 'What three elements does every electronic communication system have?', back: 'A transmitter, a communication channel (medium) and a receiver.' },
        { front: 'What is noise?', back: 'Any phenomenon that degrades or interferes with the transmitted information. It is added in the channel and in the receiver.' },
        { front: 'What does an input transducer do?', back: 'Converts a physical quantity such as sound, temperature or pressure into a time-varying electrical signal (a microphone in radio).' },
        { front: 'What is the main function of a transmitter?', back: 'Modulation: superimposing the message signal on a high-frequency carrier, for a signal suitable for the medium.' },
        { front: 'What circuits are inside a transmitter?', back: 'Oscillators, amplifiers, tuned circuits and filters, modulators, frequency mixers and frequency synthesizers.' },
        { front: 'What does the receiver do?', back: 'Reproduces the message signal in electrical form from the distorted received signal. A demodulator recovers the intelligence from the carrier.' },
        { front: 'What is a transceiver? Give examples.', back: 'Transmitter and receiver in a single housing sharing circuits such as the power supply: telephones, handheld radios, cellular phones, modems.' },
        { front: 'What does an output transducer do?', back: 'Delivers the original signal in readable form, e.g. a speaker for voice or an LCD for video.' }
      ],
      oneLiners: [
        'Chain: information source, input transducer, transmitter, channel, receiver, output transducer. Noise enters at the channel and receiver.',
        'Transmitter modulates; receiver demodulates.',
        'Transceiver = transmitter + receiver sharing a housing and power supply.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-comm-channels',
      title: 'Communication channels',
      short: 'Channels (media)',
      blurb: 'The media a signal can travel through: wires, optical fibre, free space and some unusual ones such as water and power lines.',
      source: 'Pages 88–94',
      tabs: [
        {
          title: 'Wires and fibre',
          html: `<p class="lead">The <b>communication channel</b> is the medium by which the electronic signal is sent from one place to another. Common media: wire conductors, fibre-optic cable and free space.</p>
<div class="vs"><div class="side"><h4>Electrical conductors</h4><ul><li>A simple pair of wires carrying a voice signal from a microphone to a headset</li><li>A <b>coaxial cable</b>, as used for cable TV</li><li>A <b>twisted-pair cable</b>, as used in a local-area network (LAN)</li></ul></div><div class="side"><h4>Optical media</h4><ul><li>A <b>fibre-optic cable</b> or “light pipe” carries the message on a light wave</li><li>Widely used for long-distance calls and all Internet communications</li><li>Digital information turns a <b>laser diode</b> on and off at high speed; or analog audio/video signals vary the amplitude of the light</li></ul></div></div>`
        },
        {
          title: 'Free space and others',
          html: `<p class="lead">When <b>free space</b> is the medium, the system is called <b>radio</b> (also wireless): any form of wireless communication from one point to another.</p>
<ul><li>Radio uses the electromagnetic spectrum. Signals become electric and magnetic fields that propagate nearly instantaneously over long distances.</li><li>Communication by visible or infrared light also occurs in free space.</li></ul>
<h3>Other media</h3>
<ul><li><b>Water</b> in sonar. <b>Passive sonar</b> listens for underwater sounds with sensitive hydrophones. <b>Active sonar</b> uses echo reflection, as in radar, to find the distance and direction of underwater objects.</li><li>The <b>earth</b> itself, because it conducts electricity and carries low-frequency sound waves.</li><li><b>AC power lines</b>: signals are added to the line voltage. This is <b>carrier current transmission</b> or <b>power line communications (PLC)</b>, used for some remote control of electrical equipment and in some LANs.</li></ul>`
        }
      ],
      flashcards: [
        { front: 'What is a communication channel?', back: 'The medium by which the electronic signal is sent from one place to another.' },
        { front: 'Name three common media.', back: 'Wire conductors, fibre-optic cable and free space.' },
        { front: 'What makes a system “radio”?', back: 'Free space is the medium (wireless). It uses the EM spectrum.' },
        { front: 'How does optical fibre carry digital data?', back: 'Information is converted to digital form that turns a laser diode on and off at high speed.' },
        { front: 'Difference between passive and active sonar?', back: 'Passive sonar listens with hydrophones. Active sonar sends out and uses the echo, like radar, to find range and direction.' },
        { front: 'What is power line communications?', back: 'Signals added to the AC line voltage (carrier current transmission), used for remote control and some LANs.' },
        { front: 'Give examples of electrical conductor channels.', back: 'A pair of wires, coaxial cable (cable TV) and twisted-pair cable (LAN).' }
      ],
      oneLiners: [
        'Channels: wires (coax, twisted pair), optical fibre, free space (radio), also water, earth and power lines.',
        'Fibre carries long-distance calls and the Internet.',
        'Sonar uses water: passive listens, active uses echoes.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-modulation',
      title: 'Modulation and demodulation',
      short: 'Modulation',
      blurb: 'Why a message is placed on a carrier, the four reasons for doing it, and the three ways to do it: AM, FM and PM.',
      source: 'Pages 97–100',
      tabs: [
        {
          title: 'Concept of modulation',
          html: `<p class="lead">The original message signal cannot be sent a long way because of its <b>low frequency and amplitude</b>. So it is superimposed on a <b>high-frequency, high-amplitude carrier wave</b>.</p>
<ul><li>This superimposing is <b>modulation</b>; the result is the <b>modulated wave</b>, which is what gets transmitted.</li><li>Modulation: putting a low-frequency, information-bearing signal on a high-frequency carrier for efficient transmission over long distances.</li><li>It is done at the <b>transmitter</b> end.</li></ul>
<h3>Need for modulation</h3>
<ol><li><b>Reduces antenna height</b></li><li><b>Allows multiplexing</b></li><li><b>Enables long-distance communication</b></li><li><b>Reduces noise and prevents signal interference</b></li></ol>`
        },
        {
          title: 'Demodulation',
          html: `<p class="lead"><b>Demodulation</b> is the reverse process: extracting the original information from the modulated carrier wave.</p>
<ul><li>It is done at the <b>receiving</b> end.</li><li>A <b>demodulator</b> is an electronic circuit that recovers the information content from the modulated carrier. The receiver contains different types of demodulator circuit.</li></ul>
<div class="vs"><div class="side"><h4>Modulation</h4><p>Transmitter end. Message onto carrier.</p></div><div class="side"><h4>Demodulation</h4><p>Receiver end. Message recovered from carrier.</p></div></div>`
        },
        {
          title: 'AM, FM and PM',
          html: `<p class="lead">Modulation varies <b>one parameter of the carrier</b> (amplitude, frequency or phase) <b>linearly</b> in accordance with the message signal amplitude.</p>
<figure data-fig="m2-modulation-waves"></figure>
<table class="tbl"><thead><tr><th>Type</th><th>What varies</th><th>Preferred for</th></tr></thead><tbody>
<tr><td>Amplitude Modulation (AM)</td><td>Amplitude of the carrier</td><td>Long-distance communication</td></tr>
<tr><td>Frequency Modulation (FM)</td><td>Frequency of the carrier</td><td>Short-distance communication</td></tr>
<tr><td>Phase Modulation (PM)</td><td>Phase angle of the carrier</td><td>Short-distance communication</td></tr>
</tbody></table>
<div class="note exam"><p>In the figure, the AM wave rises and falls in height with the message (the outline is the envelope) while the carrier frequency stays fixed. In the FM wave the height is constant but the waves bunch up and spread out with the message.</p></div>`
        }
      ],
      flashcards: [
        { front: 'What is modulation?', back: 'Superimposing a low-frequency information signal on a high-frequency carrier for efficient long-distance transmission. Done at the transmitter.' },
        { front: 'Why can the message not be sent directly over long distances?', back: 'Its frequency and amplitude are too low.' },
        { front: 'Four needs for modulation?', back: 'Reduce antenna height, allow multiplexing, enable long-distance communication, reduce noise and signal interference.' },
        { front: 'What is demodulation?', back: 'Extracting the original information from the modulated carrier at the receiving end, using a demodulator.' },
        { front: 'What varies in AM, FM and PM?', back: 'AM: amplitude of the carrier. FM: frequency. PM: phase angle.' },
        { front: 'Which modulation is preferred for long distance?', back: 'AM. FM and PM are preferred for short distance.' },
        { front: 'What is the modulated wave?', back: 'The result of superimposing the message on the carrier; the wave that is transmitted.' }
      ],
      oneLiners: [
        'Modulation at transmitter; demodulation at receiver.',
        'AM varies amplitude, FM frequency, PM phase.',
        'AM long distance; FM and PM short distance.',
        'Needs: smaller antenna, multiplexing, long range, less noise.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm2-em-spectrum', src: 'm2/pages/p74.png', crop: null, caption: 'The electromagnetic spectrum from ELF to the optical spectrum, with the frequency and wavelength where each band starts.', alt: 'Chart of radio bands ELF to EHF, then the optical region, with frequencies and wavelengths.' },
    { id: 'm2-comm-block', src: 'm2/pages/p87.png', crop: null, caption: 'Block diagram of a communication system. Noise enters in the channel (and the receiver).', alt: 'Information source, input transducer, transmitter, channel, receiver and output transducer in a row with a noise input at the channel.' },
    { id: 'm2-modulation-waves', src: 'm2/pages/p100.png', crop: null, caption: 'Message, carrier, AM wave (with envelope) and FM wave.', alt: 'Message signal, carrier, amplitude-modulated wave and frequency-modulated wave.' }
  ]
});
