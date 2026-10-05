CHUNK({
  chunk: '2d',
  module: 'm2',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm2-cell-basics',
      title: 'Cellular communication: cells and handoff',
      short: 'Cells and handoff',
      blurb: 'How a phone network splits an area into cells, how the switching office joins them to the phone system, and how a call follows you as you move.',
      source: 'Pages 101–105, 130–132',
      tabs: [
        {
          title: 'The cellular idea',
          html: `<p class="lead">A <b>cellular radio system</b> provides standard telephone service by <b>two-way radio</b> at remote locations. It lets users link to the standard telephone system, so calls reach any part of the world.</p>
<ul><li>Cellular phones were first installed in cars and trucks; today most are handheld.</li><li>The Bell Telephone division of AT&amp;T developed the system in the <b>1970s</b> and fully implemented it in the early <b>1980s</b>.</li><li>The original U.S. system was the <b>Advanced Mobile Phone System (AMPS)</b>, based on <b>analog FM</b>. It has been phased out and replaced by <b>2G, 3G and 4G</b> digital systems.</li></ul>
<h3>History</h3>
<div class="kv"><div><span>1893</span><b>Radio communication invented by Marconi</b></div><div><span>1940</span><b>First walkie-talkie, used by the US military</b></div><div><span>1947</span><b>Transistor invented by John Bardeen and Walter Brattain of AT&amp;T Bell Labs</b></div><div><span>1979</span><b>First commercial cellular service, Nordic Mobile Telephone (Finland, Sweden, Norway, Denmark)</b></div></div>`
        },
        {
          title: 'Cells and the MTSO',
          html: `<p class="lead">Rather than serving an area with one big transmitter and receiver, the system divides it into many smaller areas called <b>cells</b>.</p>
<figure data-fig="m2-cell-layout"></figure>
<ul><li>A typical cell covers only several square miles and has its <b>own receiver and low-power transmitter</b>.</li><li>Coverage depends on the <b>density of users</b>: many small cells in a heavily populated city, fewer in rural areas.</li><li><b>Short</b> antenna towers limit the coverage area; <b>higher</b> towers give broader coverage. A cell site reliably serves only the people and vehicles in its own small area.</li><li>Each cell is linked by telephone lines or a microwave relay to a master control centre, the <b>mobile telephone switching office (MTSO)</b>.</li><li>The MTSO controls all the cells and is the interface between each cell and the main telephone office. Calls are routed through the MTSO to the standard telephone system.</li></ul>`
        },
        {
          title: 'Handoff',
          html: `<p class="lead">As you move, the system automatically switches your call from one cell to the next. This is a <b>handoff</b>.</p>
<ol class="steps"><li><b>Monitor</b> The receiver in each cell station continuously monitors the signal strength of the mobile unit.</li><li><b>Detect</b> When the signal drops below a desired level, the system seeks a cell where your signal is stronger.</li><li><b>Switch</b> The computer at the MTSO moves the call from the weaker cell to the stronger one.</li></ol>
<p>All this happens in a very short time and is completely unnoticeable to the user. The result is optimum transmission and reception.</p>`
        },
        {
          title: 'Clusters and cell types',
          html: `<p class="lead">A <b>cell</b> is the geographical area around an antenna with a specific frequency range. It is drawn as a hexagon, though in reality its shape is irregular.</p>
<p>A <b>cluster</b> is a group of adjacent cells, usually <b>7 cells</b>, with <b>no frequency reuse</b> inside it. The frequency spectrum is divided into subbands and each subband is used within one cell of the cluster.</p>
<table class="tbl"><thead><tr><th>Type</th><th>Coverage</th><th>Used in</th></tr></thead><tbody>
<tr><td>Macrocell</td><td>Large, about 6 miles in diameter</td><td>Remote areas; high-power transmitters and receivers</td></tr>
<tr><td>Microcell</td><td>Small, about half a mile in diameter</td><td>Urban zones; low-power equipment to avoid interference with cells in other clusters</td></tr>
<tr><td>Picocell</td><td>Very small</td><td>Areas such as a building or a tunnel</td></tr>
</tbody></table>`
        }
      ],
      flashcards: [
        { front: 'What is the basic idea of a cellular system?', back: 'Divide the service area into many small cells, each with its own low-power transmitter and receiver, instead of one big transmitter.' },
        { front: 'What does the MTSO do?', back: 'Mobile telephone switching office: controls all cells and links them to the main telephone system.' },
        { front: 'What is a handoff?', back: 'The automatic switching of a call from a weaker cell to a stronger one as the user moves, decided by the MTSO computer.' },
        { front: 'What was AMPS?', back: 'Advanced Mobile Phone System, the original US analog FM cell system, replaced by 2G, 3G and 4G digital systems.' },
        { front: 'What decides the number of cells in an area?', back: 'The density of users: many small cells in cities, fewer in rural areas.' },
        { front: 'What is a cluster?', back: 'A group of adjacent cells, usually 7, with no frequency reuse inside it.' },
        { front: 'Macro, micro, pico cells?', back: 'Macrocell ~6 miles wide (remote, high power); microcell ~half a mile (urban, low power); picocell covers a building or tunnel.' },
        { front: 'When was the first commercial cellular service launched?', back: '1979, by the Nordic Mobile Telephone in Finland, Sweden, Norway and Denmark.' }
      ],
      oneLiners: [
        'Cell = small area with its own low-power transmitter; the MTSO joins cells to the phone system.',
        'Handoff: MTSO moves the call to the cell with the stronger signal.',
        'Cluster = about 7 cells, no frequency reuse inside it.',
        'Macro > micro > pico in coverage.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-cell-freq',
      title: 'Cellular frequency allocation',
      short: 'Cellular frequencies',
      blurb: 'The frequency bands cellular systems use, and why newer systems moved to higher bands.',
      source: 'Pages 106–110',
      tabs: [
        {
          title: 'The original band',
          html: `<p class="lead">Cellular radio operates in the <b>UHF and microwave</b> bands assigned by the Federal Communications Commission (FCC). The first assignments were in the <b>800 to 900 MHz</b> range, previously used by the mostly unused UHF TV channels 68 to 83.</p>
<figure data-fig="m2-cell-bands"></figure>
<div class="kv"><div><span>Uplink (reverse channels)</span><b>824 to 849 MHz, cell phone to base station</b></div><div><span>Downlink (forward channels)</span><b>869 to 894 MHz, base station to cell phone</b></div><div><span>Each block</span><b>25 MHz, originally 832 channels, each 30 kHz wide</b></div></div>
<p>Different cell technologies use different bandwidths (30 kHz, 200 kHz, 1.25 MHz), so the spectrum is used in different ways by different companies and locations. Another commonly used 25 MHz pair is <b>890 to 915 MHz</b> uplink and <b>935 to 960 MHz</b> downlink.</p>`
        },
        {
          title: 'PCS and newer bands',
          html: `<p class="lead">A more recent pair of <b>60 MHz</b> blocks, <b>1850 to 1910 MHz</b> (uplink) and <b>1930 to 1990 MHz</b> (downlink), are the <b>personal communications systems (PCS)</b> channels.</p>
<ul><li>At these higher microwave frequencies the range is somewhat less than in the UHF bands, but there is <b>greater system capacity</b> (more subscribers).</li><li><b>Antennas are smaller</b> at these frequencies.</li><li>Spectrum is scarce and very expensive, and more subscribers mean more income, so obtaining spectrum is a major issue for companies.</li></ul>
<div class="chips"><span class="chip">700 to 800 MHz</span><span class="chip">1700 to 1750 MHz</span><span class="chip">1900 to 2300 MHz</span><span class="chip">2500 to 2700 MHz (4G)</span><span class="chip">near 3650 MHz</span></div>
<p>Different countries use different blocks. In <b>Europe</b> the most common bands are <b>900 and 1800 MHz</b>.</p>`
        }
      ],
      flashcards: [
        { front: 'What are the original cellular uplink and downlink bands?', back: 'Uplink 824 to 849 MHz (reverse channels); downlink 869 to 894 MHz (forward channels).' },
        { front: 'How wide is each cellular block and how many channels did it have originally?', back: '25 MHz, divided into 832 channels of 30 kHz.' },
        { front: 'What are the PCS channels?', back: 'Two 60 MHz blocks: 1850–1910 MHz (uplink) and 1930–1990 MHz (downlink).' },
        { front: 'Why use higher microwave frequencies for cell phones?', back: 'More system capacity (more subscribers) and smaller antennas, though the range is somewhat less.' },
        { front: 'Which bands are most used in Europe?', back: '900 MHz and 1800 MHz.' },
        { front: 'What is the direction of uplink and downlink?', back: 'Uplink: phone to base station. Downlink: base station to phone.' }
      ],
      oneLiners: [
        'Uplink 824–849 MHz; downlink 869–894 MHz; 25 MHz each; 832 channels of 30 kHz.',
        'PCS: 60 MHz blocks at 1850–1910 and 1930–1990 MHz.',
        'Higher frequency: more capacity and smaller antennas, less range.',
        'Europe uses 900 and 1800 MHz.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-cell-network',
      title: 'Cellular generations, network and services',
      short: 'Generations, network',
      blurb: 'From 1G to 6G, and the equipment inside a cellular network: BTS, BSC, MSC and the HLR, VLR, EIR and AuC databases.',
      source: 'Pages 130–137',
      tabs: [
        {
          title: 'Generations',
          html: `<table class="tbl"><thead><tr><th>Generation</th><th>What it is</th><th>Examples</th></tr></thead><tbody>
<tr><td>1G</td><td>Voice-oriented systems on <b>analog</b> technology</td><td>AMPS</td></tr>
<tr><td>2G</td><td>Voice-oriented, on <b>digital</b> technology; more efficient and uses less spectrum than 1G</td><td>GSM, US-TDMA</td></tr>
<tr><td>3G</td><td>High-speed voice-oriented systems <b>integrated with data services</b></td><td>GPRS, CDMA</td></tr>
<tr><td>4G</td><td><b>Mobile ultra-broadband Internet</b> access, e.g. for laptops with USB wireless modems, smart phones and other mobile devices</td><td></td></tr>
<tr><td>5G</td><td>Faster download and upload speeds, lower latency, supports a massive number of connected devices</td><td></td></tr>
<tr><td>6G</td><td>Expected to reach speeds up to 1 Tbps, potentially 50 times faster than 5G; ultra-low latency, AI integration, hyper-connectivity</td><td></td></tr>
</tbody></table>
<p>GSM = Global System for Mobile; TDMA = Time Division Multiple Access; GPRS = General Packet Radio Service; CDMA = Code Division Multiple Access.</p>`
        },
        {
          title: 'Network components',
          html: `<p class="lead">A cellular network chains the mobile device to the wider telephone network through three levels of equipment, supported by four databases.</p>
<figure data-fig="m2-cell-network"></figure>
<table class="tbl"><thead><tr><th>Part</th><th>What it does</th></tr></thead><tbody>
<tr><td><b>BTS</b> Base Transceiver Station</td><td>Main component of a cell. Connects subscribers to the cellular network; sends and receives information through several antennas spread across the cell</td></tr>
<tr><td><b>BSC</b> Base Station Controller</td><td>Interface between BTSs, linked by cable or microwave links. Routes calls between BTSs and to the MSC</td></tr>
<tr><td><b>MSC</b> Mobile Switching Center</td><td>The coordinator of the cellular network. Connected to several BSCs; routes calls between BSCs; links the network with other networks such as the PSTN through fibre optics, microwave or copper cable</td></tr>
</tbody></table>`
        },
        {
          title: 'Registers and services',
          html: `<p class="lead">Four databases keep track of subscribers and phones.</p>
<table class="tbl"><thead><tr><th>Database</th><th>What it stores</th></tr></thead><tbody>
<tr><td><b>HLR</b> Home Location Register</td><td>Maintained by the service provider. Permanent data about each subscriber: location, activity status, account status, call forwarding and caller identification preference</td></tr>
<tr><td><b>VLR</b> Visitor Location Register</td><td>Temporary data about a subscriber, kept in the MSC of the area the subscriber is in. When the subscriber moves to a new MSC area, the new MSC asks for the data from the HLR of the old MSC</td></tr>
<tr><td><b>EIR</b> Equipment Identity Register</td><td>Located near the MSC; identifies cell phones by their IMEI number</td></tr>
<tr><td><b>AuC</b> Authentication Center</td><td>Stores the list of authorised subscribers of a GSM network. Linked to the MSC; checks the identity of each user trying to connect and provides encryption parameters to secure the call</td></tr>
</tbody></table>
<h3>Cellular services</h3>
<div class="chips"><span class="chip">Voice communication</span><span class="chip">Short Messaging Service (SMS)</span><span class="chip">Multimedia Messaging Service (MMS)</span><span class="chip">Global Positioning System (GPS)</span><span class="chip">Wireless Application Protocol (WAP) to access the Internet</span><span class="chip">Security (PIN)</span></div>`
        }
      ],
      flashcards: [
        { front: 'What distinguishes 1G, 2G and 3G?', back: '1G analog voice (AMPS); 2G digital voice, more efficient (GSM, US-TDMA); 3G high-speed voice integrated with data (GPRS, CDMA).' },
        { front: 'What does 4G offer?', back: 'Mobile ultra-broadband Internet access.' },
        { front: 'Key points about 5G and 6G?', back: '5G: faster speeds, lower latency, massive device connectivity. 6G: up to 1 Tbps (about 50× 5G), ultra-low latency, AI integration.' },
        { front: 'What is a BTS?', back: 'Base Transceiver Station, the main component of a cell, connecting subscribers to the network through antennas.' },
        { front: 'What does a BSC do?', back: 'Interface between BTSs; routes calls between BTSs and to the MSC.' },
        { front: 'What is the MSC?', back: 'Mobile Switching Center: coordinator of the network, routes calls between BSCs and links to other networks (PSTN).' },
        { front: 'HLR vs VLR?', back: 'HLR: permanent subscriber data kept by the provider. VLR: temporary data kept in the MSC where the subscriber currently is.' },
        { front: 'What is stored in the EIR and AuC?', back: 'EIR: identifies phones by IMEI. AuC: authorised subscriber list, checks identity and gives encryption parameters.' }
      ],
      oneLiners: [
        'Chain: mobile device, BTS, BSC, MSC, then the phone network.',
        'HLR permanent, VLR temporary, EIR equipment (IMEI), AuC authentication.',
        '1G analog, 2G digital voice, 3G voice+data, 4G broadband, 5G low latency, 6G up to 1 Tbps.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-sat-basics',
      title: 'Satellite communication basics',
      short: 'Satellite basics',
      blurb: 'What a communication satellite does, how uplink, transponder and downlink work, and where satellites help and hurt.',
      source: 'Pages 111–121, 138–140',
      tabs: [
        {
          title: 'What a satellite does',
          html: `<p class="lead"><b>Satellite communication</b> is transporting information from one place to another using a communication satellite in orbit around the Earth. The satellite sends the signal through a <b>transponder</b>, creating a channel between the transmitter and receiver at different Earth locations.</p>
<ul><li>Used for telephone, radio, television, internet and military applications.</li><li>Communication satellites are <b>not originators</b> of information. They are <b>relay stations</b> for earth sources, an <b>R.F. repeater</b>.</li><li>A satellite is a powerful long-distance, <b>point-to-multipoint</b> system.</li><li>It overcomes the limit of <b>line-of-sight</b> communication (about 45 to 55 km) by putting the transmitting antenna on a satellite high above the Earth.</li><li>The satellite is a payload carried into orbit by a launch vehicle. It has microwave electronics, and <b>solar cells</b> power them.</li></ul>
<div class="note why"><p>A <b>geostationary</b> satellite sits about <b>35,900 km</b> above the ground. Its rotation is synchronised with the Earth’s, so it appears fixed in the sky from the earth station, and the dish never has to move.</p></div>`
        },
        {
          title: 'Uplink and downlink',
          html: `<p class="lead">Think of a communication satellite as a space mirror that bounces radio, internet data and TV signals from one side of the Earth to the other.</p>
<figure data-fig="m2-sat-link"></figure>
<ol class="steps"><li><b>Uplink</b> The ground station beams the signal up to the satellite. (Example: a TV broadcast.)</li><li><b>Transponder</b> Radio receivers, amplifiers and transmitters boost the incoming signal and change its frequency so that the outgoing signal is not altered.</li><li><b>Downlink</b> The signal is sent to the receiving earth station. Usually there is <b>one uplink and multiple downlinks</b>.</li></ol>
<p>Two major components: the <b>ground segment</b> (earth stations and terrestrial systems) and the <b>space segment</b> (the satellite). Services are either <b>one-way</b> or <b>two-way</b>.</p>`
        },
        {
          title: 'Pros, cons and uses',
          html: `<div class="vs"><div class="side"><h4>Advantages</h4><ul><li>Circuits are easy to install</li><li>Excellent elasticity of the circuits</li><li>Every corner of the Earth can be covered</li><li>The user fully controls the network</li></ul></div><div class="side"><h4>Disadvantages</h4><ul><li>Initial expenditure is high</li><li>Frequencies can be blocked</li><li>Propagation delay and interference</li></ul></div></div>
<h3>Applications</h3>
<div class="chips"><span class="chip">Telephone</span><span class="chip">Television</span><span class="chip">Digital cinema</span><span class="chip">Radio broadcasting</span><span class="chip">Amateur radio</span><span class="chip">Internet access</span><span class="chip">Military</span><span class="chip">Disaster management</span></div>
<h3>Indian communication satellites</h3>
<table class="tbl"><thead><tr><th>Satellite</th><th>Use</th></tr></thead><tbody>
<tr><td>GSAT-31, GSAT-30, CMS-01</td><td>General communication</td></tr>
<tr><td>GSAT-7A</td><td>Communication, particularly military</td></tr>
<tr><td>GSAT-11, GSAT-29</td><td>High-throughput broadband services</td></tr>
<tr><td>GSAT-15, GSAT-10</td><td>Communication and navigation</td></tr>
<tr><td>INSAT-3A</td><td>Communication, broadcasting and meteorological services</td></tr>
<tr><td>INSAT-3C</td><td>Continuity of services and more capacity for communication and broadcasting</td></tr>
</tbody></table>`
        }
      ],
      flashcards: [
        { front: 'What does a communication satellite do?', back: 'Acts as a relay station (RF repeater) for earth sources, retransmitting signals through a transponder.' },
        { front: 'Why put the antenna on a satellite?', back: 'To overcome the line-of-sight limit (about 45–55 km) of ground communication.' },
        { front: 'How high is a geostationary satellite and why does it look fixed?', back: 'About 35,900 km up; its rotation is synchronised with the Earth.' },
        { front: 'What are the three stages of satellite communication?', back: 'Uplink, transponder, downlink.' },
        { front: 'What is the ground and space segment?', back: 'Ground segment: earth stations and terrestrial systems. Space segment: the satellite.' },
        { front: 'Name two advantages and two disadvantages.', back: 'Advantages: every corner of the Earth covered, the user controls the network. Disadvantages: high initial cost, blockage of frequencies, interference.' },
        { front: 'What powers the satellite electronics?', back: 'Solar cells.' },
        { front: 'Name a few uses of satellite communication.', back: 'Telephone, television, digital cinema, radio, amateur radio, internet, military, disaster management.' }
      ],
      oneLiners: [
        'Satellite = relay station / RF repeater; geostationary at about 35,900 km.',
        'Uplink, transponder, downlink; one uplink, many downlinks.',
        'Segments: ground and space.',
        'Cons: high cost, blocked frequencies, interference.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-sat-transponder',
      title: 'Transponders and satellite bands',
      short: 'Transponders, bands',
      blurb: 'Why a satellite must change frequency, how many channels it carries, and the C, Ku, X and L bands.',
      source: 'Pages 140–151',
      tabs: [
        {
          title: 'Repeaters and transponders',
          html: `<p class="lead">The satellite receives the earth station’s signal, <b>amplifies</b> it and <b>translates</b> it to another frequency, then retransmits it. The transmitter–receiver combination in the satellite is the <b>transponder</b>.</p>
<figure data-fig="m2-sat-block"></figure>
<ul><li>The signal sent up is the <b>uplink</b>; the retransmitted signal is the <b>downlink</b>. Usually <b>downlink frequency is lower</b> than uplink: typically <b>6 GHz up and 4 GHz down</b>.</li><li>Basic functions: <b>amplification</b> and <b>frequency translation</b>.</li></ul>
<div class="note why"><p>A transponder cannot transmit and receive on the same frequency. The transmitter’s strong signal would overload (“desensitize”) the receiver and block the very small uplink signal. Widely spaced transmit and receive frequencies prevent this.</p></div>
<ul><li>Transponders are <b>wide-bandwidth</b> units, but a typical one handles only one uplink or downlink signal to minimise interference and improve reliability.</li><li>To be economical a satellite handles several channels, so it has <b>multiple transponders</b> on different frequencies. Example: <b>24 channels</b>, 12 vertically and 12 horizontally polarised. Each transponder is one channel, and multiple-access schemes let a channel carry several transmissions.</li></ul>`
        },
        {
          title: 'Frequency bands',
          html: `<p class="lead">Most communication satellites use the <b>microwave</b> spectrum. VHF, UHF and microwave signals pass through the ionosphere with little attenuation and are not refracted back to Earth (unlike 3 to 30 MHz signals). Exceptions: many military satellites use 200–400 MHz VHF/UHF, and amateur OSCAR satellites use VHF/UHF.</p>
<table class="tbl"><thead><tr><th>Band</th><th>Uplink</th><th>Downlink</th><th>Notes</th></tr></thead><tbody>
<tr><td>C band (6/4 GHz)</td><td>5.925 to 6.425 GHz</td><td>3.7 to 4.2 GHz</td><td>Most widely used, overcrowded, interference</td></tr>
<tr><td>Ku band (14/12 GHz)</td><td>14 to 14.5 GHz</td><td>11.7 to 12.2 GHz</td><td>Receiving the most attention; most new satellites</td></tr>
<tr><td>Ka band</td><td></td><td></td><td>Use is increasing</td></tr>
<tr><td>X band</td><td></td><td></td><td>Military satellites and radar</td></tr>
<tr><td>L band</td><td></td><td></td><td>Navigation, marine and aeronautical communication, radar</td></tr>
</tbody></table>
<ul><li>The move upward is because the <b>C band is overcrowded</b>. The only way to reduce interference is to shift to higher frequencies, even though equipment for them is more complex and expensive.</li><li>For a given antenna size, <b>gain is higher in Ku than in C band</b>, which improves reliability while decreasing antenna size and cost.</li></ul>`
        },
        {
          title: 'Satellite subsystems',
          html: `<p class="lead">The heart of a communication satellite is the <b>communication subsystem</b>: a set of transponders that receive uplink signals and retransmit them to Earth. A transponder is a repeater that implements a <b>wideband channel</b> carrying many simultaneous transmissions.</p>
<p>It is supported by “housekeeping” subsystems that keep the satellite self-sustaining:</p>
<div class="chips"><span class="chip">Power subsystem</span><span class="chip">Telemetry, tracking and command</span><span class="chip">Antennas</span><span class="chip">Propulsion</span><span class="chip">Attitude stabilization</span></div>`
        }
      ],
      flashcards: [
        { front: 'What are the basic functions of a transponder?', back: 'Amplification and frequency translation.' },
        { front: 'Why must a transponder translate frequency?', back: 'It cannot transmit and receive on the same frequency: its strong transmit signal would desensitize the receiver and block the weak uplink signal.' },
        { front: 'Typical uplink and downlink frequencies in the C band?', back: 'About 6 GHz up (5.925–6.425) and 4 GHz down (3.7–4.2).' },
        { front: 'Ku band uplink and downlink?', back: '14–14.5 GHz up and 11.7–12.2 GHz down (14/12 GHz).' },
        { front: 'Why are newer satellites moving to Ku band?', back: 'The C band is overcrowded and has interference; Ku gives higher antenna gain for the same size.' },
        { front: 'What are X and L bands used for?', back: 'X: military satellites and radar. L: navigation, marine and aeronautical communication, radar.' },
        { front: 'What is the satellite’s communication subsystem?', back: 'A set of transponders supported by housekeeping subsystems: power, telemetry/tracking/command, antennas, propulsion, attitude stabilization.' },
        { front: 'Example of channel count on a satellite?', back: '24 channels: 12 vertically and 12 horizontally polarised.' }
      ],
      oneLiners: [
        'Transponder = amplify + translate frequency; downlink lower than uplink (6 GHz up, 4 GHz down).',
        'C band 6/4 GHz crowded; Ku 14/12 GHz is the newer choice.',
        'X band: military; L band: navigation.',
        'Housekeeping: power, TT&C, antennas, propulsion, attitude.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-radar',
      title: 'Radar',
      short: 'Radar',
      blurb: 'How radar finds the range, position and speed of a target from its echo, what is inside a radar and where it is used.',
      source: 'Pages 122–129, 152–153',
      tabs: [
        {
          title: 'Principle',
          html: `<p class="lead"><b>RADAR</b> stands for <b>RAdio Detection And Ranging</b>. A system that detects and locates objects such as ships, vehicles and aircraft by radiating an electromagnetic signal into space is a radar system.</p>
<figure data-fig="m2-radar-principle"></figure>
<ul><li>Radar uses reflected microwave signals to detect ships, planes and missiles and find their <b>range, direction and speed</b>. It collects information about a target by radiating electromagnetic energy and examining the <b>echo</b> from the distant object.</li><li>Most radar is military, but civilian aircraft and marine services use it, and police use it for speed detection.</li><li>The transmitter makes the signal and the antenna radiates it. When the wave meets an object, whether stationary or moving, part of it is reflected or re-radiated as an echo. The receiver extracts information from the echo.</li></ul>`
        },
        {
          title: 'Range, position and speed',
          html: `<div class="kv"><div><span>Range</span><b>The distance between the target and the radar</b></div><div><span>How it is found</span><b>Measure the time the signal takes to reach the object and come back</b></div><div><span>Location of a stationary object</span><b>The angle the antenna points at when the echo is strongest</b></div><div><span>Moving object</span><b>Doppler effect: the frequency of the re-radiated signal shifts, in proportion to the object’s radial velocity</b></div></div>
<details class="more"><summary>Extra: the range formula</summary><p>The signal travels out and back, so the range is R = c t / 2, where c is the speed of light and t the round-trip time. An echo that returns after 100 µs means R = (3 × 10<sup>8</sup> × 100 × 10<sup>−6</sup>) / 2 = 15 km.</p></details>`
        },
        {
          title: 'Inside a radar: transmitter',
          html: `<figure data-fig="m2-radar-block"></figure>
<ol class="steps"><li><b>Waveform generator</b> Usually a magnetron; makes the low-power radar signal.</li><li><b>Transmitter</b> A magnetron, travelling wave tube or transistor amplifier. Magnetrons are widely used in pulse radar; amplifiers are used when high average power is needed.</li><li><b>Pulse modulator</b> Synchronises the generator and transmitter by switching the power amplifier on and off according to the input pulses.</li><li><b>Duplexer</b> Isolates the transmitter and receiver so one antenna can do both jobs. The two sections work at very different power levels, so the duplexer short-circuits the receiver input while transmitting and passes the echo to the receiver otherwise.</li></ol>`
        },
        {
          title: 'Inside a radar: receiver',
          html: `<ol class="steps"><li><b>Low noise RF amplifier</b> Input stage of the superheterodyne receiver; produces an RF pulse proportional to the echo.</li><li><b>Mixer and local oscillator</b> Convert the RF pulse to an IF pulse. Sometimes the mixer is the input stage (no RF amplifier), but that makes the receiver less sensitive because of its high noise figure.</li><li><b>IF amplifier</b> Amplifies the IF pulse. Acts as a matched filter, increases the SNR and improves echo detection by reducing unwanted signals. The receiver bandwidth is set by the IF stage.</li><li><b>2nd detector (demodulator)</b> A crystal diode that separates the transmitted signal from the carrier.</li><li><b>Video amplifier</b> Amplifies the signal enough to show on the screen.</li><li><b>Threshold decision</b> Compares the signal with a set threshold. Above it means a target is present; otherwise only noise is assumed.</li><li><b>Display</b> Usually a PPI (plan position indicator) on a CRT, which shows range and location in polar coordinates.</li></ol>`
        },
        {
          title: 'Applications',
          html: `<table class="tbl"><thead><tr><th>Area</th><th>Use</th></tr></thead><tbody>
<tr><td>Military</td><td>The major application; a key part of air defence, used for navigation and surveillance</td></tr>
<tr><td>Air traffic control</td><td>Controls traffic on air routes and at airports; high-resolution radars analyse aircraft and ground vehicles at airports</td></tr>
<tr><td>Ship safety</td><td>Alerts to other ships on the route in bad visibility</td></tr>
<tr><td>Remote sensing</td><td>Senses geophysical objects: weather forecasting, agricultural conditions and environmental pollution</td></tr>
</tbody></table>`
        }
      ],
      flashcards: [
        { front: 'What does RADAR stand for?', back: 'RAdio Detection And Ranging.' },
        { front: 'How is the range of a target measured?', back: 'From the time the signal takes to reach the object and return as an echo.' },
        { front: 'How does radar find the speed of a moving target?', back: 'By the Doppler shift in the frequency of the echo, proportional to the radial velocity.' },
        { front: 'How is the location of a stationary object found?', back: 'From the angle the antenna points at when the echo has maximum amplitude.' },
        { front: 'What does the duplexer do?', back: 'Isolates the transmitter and receiver so a single antenna serves both.' },
        { front: 'What does the pulse modulator do?', back: 'Switches the power amplifier on and off according to the pulses from the waveform generator.' },
        { front: 'What is the role of the IF amplifier?', back: 'Amplifies the IF pulse, acts as a matched filter, increases SNR and sets the receiver bandwidth.' },
        { front: 'What does the threshold decision stage do?', back: 'Decides if a target exists by comparing the signal level with a set threshold.' },
        { front: 'What is a PPI?', back: 'Plan Position Indicator, a CRT display that maps range and location in polar coordinates.' },
        { front: 'Name four radar applications.', back: 'Military, air traffic control, ship safety, remote sensing (weather, agriculture, pollution).' }
      ],
      oneLiners: [
        'Range from echo delay; position from antenna angle at maximum echo; speed from Doppler shift.',
        'Transmitter chain: waveform generator, pulse modulator and transmitter, duplexer, antenna.',
        'Receiver chain: RF amp, mixer + LO, IF amp, detector, video amp, threshold, display (PPI).',
        'Uses: military, air traffic, ship safety, remote sensing.'
      ],
      formulas: [
        { name: 'Radar range (Extra)', html: `R = c t / 2`, note: 't is the round-trip time of the echo.' }
      ]
    }
  ],
  figures: [
    { id: 'm2-cell-layout', src: 'm2/pages/p103.png', crop: null, caption: 'A service area divided into hexagonal cells, with the MTSO linking them to the telephone system.', alt: 'Hexagonal cell grid with the mobile telephone switching office at the centre.' },
    { id: 'm2-cell-bands', src: 'm2/pages/p106.png', crop: null, caption: 'Original cellular bands: 25 MHz uplink (824–849) and 25 MHz downlink (869–894), plus the 60 MHz PCS pair.', alt: 'Frequency bars for uplink and downlink channels.' },
    { id: 'm2-cell-network', src: 'm2/pages/p134.png', crop: null, caption: 'Cellular network: mobile device, BTS, BSC, MSC, with the HLR, VLR, EIR and AuC databases attached to the MSC.', alt: 'Chain of mobile device, BTS, BSC and MSC with four database icons.' },
    { id: 'm2-sat-link', src: 'm2/pages/p115.png', crop: null, caption: 'Satellite link: uplink from the transmitting station, transponder in the satellite, downlink to the receiving station.', alt: 'Satellite between a transmitting and a receiving earth station with uplink and downlink.' },
    { id: 'm2-sat-block', src: 'm2/pages/p114.png', crop: null, caption: 'Transponder block diagram: 5.9–6.4 GHz uplink is filtered, amplified, mixed with a 2.2 GHz oscillator, amplified at 4 GHz and sent down at 3.7–4.2 GHz.', alt: 'Block diagram of a satellite transponder with mixer and oscillator.' },
    { id: 'm2-radar-principle', src: 'm2/pages/p123.png', crop: null, caption: 'Radar principle: the transmitter sends a signal, the target echoes it back to the receiver, and the delay gives the range.', alt: 'Transmitter and receiver sharing an antenna with a helicopter target and echo.' },
    { id: 'm2-radar-block', src: 'm2/pages/p125.png', crop: null, caption: 'Radar block diagram: transmitter chain and receiver chain joined by the duplexer and antenna.', alt: 'Block diagram of a radar transmitter section and receiver section.' }
  ]
});
