QUESTIONS({
  chunk: '2d',
  questions: [
    {
      id: 'm2-2d-01', module: 'm2', topic: 'm2-cell-basics', type: 'troubleshoot', level: 2,
      q: `<p>A driver crosses from one cell into the next and the call drops instead of moving smoothly. The cell receiver did notice the weak signal. Which step most likely failed?</p>`,
      options: [ 'The home location register failed to authenticate the phone', 'The mobile switching center failed to route calls between base station controllers', 'The MTSO computer failed to switch the call to the stronger cell', 'The base station sent on a frequency outside 800 MHz' ],
      correct: 2,
      answer: `<p><b>The switching step of the handoff.</b> The MTSO computer did not move the call to the stronger cell.</p>`,
      explain: `<p>In a <b>handoff</b> the cell receiver monitors the mobile’s signal strength. When it falls below the desired level, the system looks for a cell where the signal is stronger and the computer at the <b>MTSO</b> switches the call. If the receiver already detected the weak signal, the missing step is the switch.</p>`,
      points: [ 'Receiver monitors signal strength', 'Weak signal means find a stronger cell', 'MTSO computer switches the call' ]
    },
    {
      id: 'm2-2d-02', module: 'm2', topic: 'm2-cell-basics', type: 'design', level: 3,
      q: `<p>An engineer must improve coverage for a crowded downtown block and for an underground tunnel. Which cell types suit each place, and why is low transmitter power part of the design?</p>`,
      options: null, correct: null,
      answer: `<p><b>Microcells downtown and picocells in the tunnel.</b> Low power keeps them from interfering with cells in other clusters.</p>`,
      explain: `<p>A <b>microcell</b> is about half a mile across and is used in urban zones. A <b>picocell</b> is very small and covers a building or tunnel. Both use low-power equipment, so their signals do not reach other clusters that reuse the same frequencies.</p>`,
      points: [ 'Microcell for the urban block', 'Picocell for the tunnel', 'Low power avoids interference with other clusters' ]
    },
    {
      id: 'm2-2d-03', module: 'm2', topic: 'm2-cell-freq', type: 'numerical', level: 2,
      q: `<p>In the 824 to 849 MHz uplink and 869 to 894 MHz downlink pair, a phone transmits at 836 MHz. The base station replies at the same position within its block. At what frequency?</p>`,
      options: [ '836 MHz', '869 MHz', '881 MHz', '894 MHz' ],
      correct: 2,
      answer: `<p><b>881 MHz.</b> The downlink block sits 45 MHz above the uplink block.</p>`,
      explain: `<div class="worked"><div class="given"><p>Uplink block 824 to 849 MHz, downlink block 869 to 894 MHz.</p></div><div class="solve"><div class="eq">spacing = 869 − 824 = 45 MHz (and 894 − 849 = 45 MHz)</div><div class="eq">downlink = 836 + 45 = 881 MHz</div></div><div class="result"><p>Downlink = <b>881 MHz</b></p></div></div>`,
      points: [ 'Uplink 824 to 849, downlink 869 to 894', 'Spacing is 45 MHz', '836 + 45 = 881 MHz' ]
    },
    {
      id: 'm2-2d-04', module: 'm2', topic: 'm2-cell-freq', type: 'explain', level: 2,
      q: `<p>A carrier moves a region from the original 800 MHz allocation to the PCS bands at 1850 to 1990 MHz. What does it gain and what does it give up?</p>`,
      options: null, correct: null,
      answer: `<p><b>It gains capacity and smaller antennas but loses some range</b>, so it needs more cells.</p>`,
      explain: `<p>At the higher PCS frequencies the range is somewhat less than in the UHF bands, so more cell sites are needed to cover the same area. In return there is greater system capacity (more subscribers) and the antennas are smaller.</p>`,
      points: [ 'Range is somewhat less', 'Greater capacity, more subscribers', 'Smaller antennas' ]
    },
    {
      id: 'm2-2d-05', module: 'm2', topic: 'm2-cell-network', type: 'predict', level: 1,
      q: `<p>A subscriber travels to another region and makes a call. Where does the local mobile switching center temporarily hold their data?</p>`,
      options: [ 'In the home location register (HLR)', 'In the visitor location register (VLR)', 'In the equipment identity register (EIR)', 'In the authentication center (AuC)' ],
      correct: 1,
      answer: `<p><b>The visitor location register (VLR).</b></p>`,
      explain: `<p>The <b>VLR</b> holds temporary data about a subscriber and sits in the MSC of the area the subscriber is visiting. The new MSC asks the <b>HLR</b>, which keeps the permanent data, for the information.</p>`,
      points: [ 'VLR holds temporary data in the visited MSC', 'HLR holds permanent data', 'New MSC asks the HLR' ]
    },
    {
      id: 'm2-2d-06', module: 'm2', topic: 'm2-cell-network', type: 'decide', level: 3,
      q: `<p>Engineers want to find which element is the interface between the base transceiver stations of a group of cells and routes calls between them and onward to the MSC. Which element is it?</p>`,
      options: null, correct: null,
      answer: `<p><b>The base station controller (BSC).</b></p>`,
      explain: `<p>The chain has three levels. The <b>BTS</b> is the main component of a cell and has the antennas. The <b>BSC</b> is the interface between BTSs and routes calls between them and to the MSC. The <b>MSC</b> coordinates the network and links it to other networks such as the PSTN.</p>`,
      points: [ 'BSC is the interface between BTSs', 'It routes calls between BTSs and to the MSC', 'MSC links to the PSTN' ]
    },
    {
      id: 'm2-2d-07', module: 'm2', topic: 'm2-cell-freq', type: 'numerical', level: 2,
      q: `<p>A system uses 7-cell clusters with no frequency reuse inside a cluster, and shares a 25 MHz block of 832 channels among the cells of one cluster. About how many whole channels does each cell get if they are shared evenly?</p>`,
      options: [ '3', '25', '118', '832' ],
      correct: 2,
      answer: `<p>About <b>118</b> channels per cell.</p>`,
      explain: `<div class="worked"><div class="given"><p>832 channels, 7 cells, no reuse inside the cluster.</p></div><div class="solve"><div class="eq">832 / 7 = 118.9</div></div><div class="result"><p><b>118</b> whole channels per cell (7 × 118 = 826, a few left over)</p></div></div>`,
      points: [ 'No reuse inside a cluster, so the channels are shared', '832 / 7 ≈ 118.9', '118 whole channels per cell' ]
    },
    {
      id: 'm2-2d-08', module: 'm2', topic: 'm2-cell-network', type: 'explain', level: 1,
      q: `<p>A used phone with a valid, active SIM connects to the towers, but the network refuses to let it make calls. Which database is the likely cause, and what does it check?</p>`,
      options: null, correct: null,
      answer: `<p><b>The equipment identity register (EIR).</b> It identifies the handset by its IMEI number.</p>`,
      explain: `<p>The <b>EIR</b> sits near the MSC and identifies cell phones by their <b>IMEI</b> number. The SIM and subscriber can be fine while the handset itself is not accepted, so the check on the equipment, not on the subscriber, is what blocks the call. Subscriber checks are done by the HLR and AuC.</p>`,
      points: [ 'EIR identifies phones by IMEI', 'Checks the handset, not the subscriber', 'AuC and HLR deal with the subscriber' ]
    },
    {
      id: 'm2-2d-09', module: 'm2', topic: 'm2-cell-network', type: 'decide', level: 1,
      q: `<p>A hospital project needs lower latency than 4G offers and support for a massive number of connected sensors. Which generation should it choose?</p>`,
      options: [ '2G', '3G', '4G', '5G' ],
      correct: 3,
      answer: `<p><b>5G.</b></p>`,
      explain: `<p>4G is mobile ultra-broadband internet access. <b>5G</b> adds faster upload and download speeds, lower latency and support for a massive number of connected devices. 2G is digital voice and 3G is voice with data.</p>`,
      points: [ '5G: faster, lower latency', '5G: massive number of devices', '4G is ultra-broadband access' ]
    },
    {
      id: 'm2-2d-10', module: 'm2', topic: 'm2-cell-basics', type: 'predict', level: 2,
      q: `<p>To save money, a company builds a short tower in a sparsely populated farming region. What happens to the cell size and to the network?</p>`,
      options: null, correct: null,
      answer: `<p><b>The cell is smaller than it should be</b>, so more cell sites are needed to cover the region.</p>`,
      explain: `<p>Short antenna towers limit the coverage area, and higher towers give broader coverage. Rural areas have few users, so the system uses few, large cells (macrocells of about 6 miles across). A short tower shrinks the cell and forces the company to build more sites.</p>`,
      points: [ 'Short tower means smaller coverage', 'Rural areas suit large macrocells', 'More sites would be needed' ]
    },
    {
      id: 'm2-2d-11', module: 'm2', topic: 'm2-sat-transponder', type: 'predict', level: 2,
      q: `<p>A faulty satellite design has its transponder receive the uplink at 6 GHz and transmit the downlink at the same 6 GHz. What goes wrong?</p>`,
      options: [ 'The signals suffer a large delay in the ionosphere', 'The strong transmitted signal desensitizes the receiver and blocks the tiny uplink', 'The telemetry subsystem loses power', 'The satellite loses its attitude stabilization' ],
      correct: 1,
      answer: `<p><b>The receiver is desensitized.</b> The strong downlink swamps the very small uplink signal.</p>`,
      explain: `<p>A transponder cannot transmit and receive on the same frequency. Its own strong transmit signal would overload (desensitize) the receiver and block the tiny uplink. That is why the downlink is translated to a different frequency, typically 6 GHz up and 4 GHz down.</p>`,
      points: [ 'Cannot transmit and receive on one frequency', 'Transmitter desensitizes the receiver', 'Frequency translation fixes it' ]
    },
    {
      id: 'm2-2d-12', module: 'm2', topic: 'm2-sat-basics', type: 'explain', level: 1,
      q: `<p>On a live news link through a satellite, there is a noticeable pause between a question and the answer. Why?</p>`,
      options: null, correct: null,
      answer: `<p><b>Propagation delay.</b> The signal has to travel up to a satellite far above the Earth and back down.</p>`,
      explain: `<p>A satellite is placed high above the Earth to get past the line-of-sight limit of about 45 to 55 km. The price is a long path for the signal, up and down. <b>Propagation delay</b> is one of the listed disadvantages of satellite links, along with high initial cost and blockable frequencies.</p>`,
      points: [ 'Propagation delay is a satellite disadvantage', 'The path goes up to the satellite and down again' ]
    },
    {
      id: 'm2-2d-13', module: 'm2', topic: 'm2-sat-transponder', type: 'decide', level: 2,
      q: `<p>A startup launching new communication satellites wants to avoid the most overcrowded satellite band. Which band follows the modern trend?</p>`,
      options: [ 'C band (6/4 GHz)', 'Ku band (14/12 GHz)', 'X band', 'L band' ],
      correct: 1,
      answer: `<p><b>The Ku band (14/12 GHz).</b></p>`,
      explain: `<p>The C band is the most widely used and is overcrowded, so interference is a problem. Most new satellites use the <b>Ku band</b>, and use of the Ka band is increasing. X band is for military satellites and radar, and L band is for navigation and marine and aeronautical communication.</p>`,
      points: [ 'C band is overcrowded', 'Most new satellites use Ku band', 'The move is to higher frequencies' ]
    },
    {
      id: 'm2-2d-14', module: 'm2', topic: 'm2-sat-basics', type: 'decide', level: 3,
      q: `<p>The Indian Navy wants a satellite for communication that is particularly military, separate from broadcasting and weather services. Which satellite from the course list fits?</p>`,
      options: null, correct: null,
      answer: `<p><b>GSAT-7A.</b></p>`,
      explain: `<p>GSAT-7A is listed for communication, particularly military. INSAT-3A serves communication, broadcasting and meteorological services. GSAT-11 and GSAT-29 provide high-throughput broadband, and GSAT-31, GSAT-30 and CMS-01 are for general communication.</p>`,
      points: [ 'GSAT-7A: communication, particularly military', 'INSAT-3A has broadcasting and meteorological roles' ]
    },
    {
      id: 'm2-2d-15', module: 'm2', topic: 'm2-sat-transponder', type: 'troubleshoot', level: 1,
      q: `<p>A satellite’s signal at the ground station weakens badly. Telemetry shows the satellite is tumbling, so its antennas no longer point at Earth. Which housekeeping subsystem has failed?</p>`,
      options: [ 'Propulsion', 'Telemetry, tracking and command', 'Attitude stabilization', 'The transponders themselves' ],
      correct: 2,
      answer: `<p><b>Attitude stabilization.</b></p>`,
      explain: `<p>The housekeeping subsystems are power; telemetry, tracking and command; antennas; propulsion; and <b>attitude stabilization</b>. Attitude stabilization keeps the satellite correctly oriented so its antennas keep pointing at Earth. Telemetry only reports the problem.</p>`,
      points: [ 'Attitude stabilization controls orientation', 'Antennas must keep pointing at Earth', 'Telemetry reported the fault but did not cause it' ]
    },
    {
      id: 'm2-2d-16', module: 'm2', topic: 'm2-sat-basics', type: 'decide', level: 2,
      q: `<p>A mining company wants two camps 150 km apart linked by antennas on masts, but an engineer insists on a satellite link. What limit drives that decision?</p>`,
      options: null, correct: null,
      answer: `<p><b>The line-of-sight limit</b> of about 45 to 55 km. A satellite overcomes it.</p>`,
      explain: `<p>Ground-based line-of-sight communication reaches only about 45 to 55 km. The camps are 150 km apart, so the antennas cannot see each other. A satellite puts the antenna high above the Earth and acts as an RF repeater, which overcomes the limit.</p>`,
      points: [ 'Line-of-sight is about 45 to 55 km', '150 km is beyond it', 'The satellite is a high relay (RF repeater)' ]
    },
    {
      id: 'm2-2d-17', module: 'm2', topic: 'm2-sat-transponder', type: 'predict', level: 2,
      q: `<p>A team sends a 15 MHz shortwave signal and a 6 GHz signal straight up toward space. How does the ionosphere treat each?</p>`,
      options: [ 'Both pass through with little attenuation', 'The 15 MHz signal is refracted back, the 6 GHz signal passes through', 'The 6 GHz signal is refracted back, the 15 MHz signal passes through', 'Both are blocked and absorbed' ],
      correct: 1,
      answer: `<p><b>15 MHz comes back down; 6 GHz goes through.</b></p>`,
      explain: `<p>Signals from 3 to 30 MHz are refracted back to Earth by the ionosphere. VHF, UHF and microwave signals pass through with little attenuation and are not refracted back. That is why satellites use microwaves.</p>`,
      points: [ '3 to 30 MHz is refracted back', 'Microwaves pass through', 'So satellites use microwaves' ]
    },
    {
      id: 'm2-2d-18', module: 'm2', topic: 'm2-sat-transponder', type: 'explain', level: 2,
      q: `<p>During a solar storm, ground engineers monitor a satellite’s health data and send commands to switch off non-essential systems. Which housekeeping subsystem makes this possible?</p>`,
      options: null, correct: null,
      answer: `<p><b>Telemetry, tracking and command.</b></p>`,
      explain: `<p>The telemetry, tracking and command subsystem sends health data down to the ground and receives commands up from it. It is one of the housekeeping subsystems that keep the satellite self-sustaining while the transponders do the communication.</p>`,
      points: [ 'Telemetry, tracking and command subsystem', 'Data goes down, commands come up', 'Housekeeping supports the communication subsystem' ]
    },
    {
      id: 'm2-2d-19', module: 'm2', topic: 'm2-sat-basics', type: 'interpret', level: 1,
      q: `<p>A remote island nation considers satellite communication. Which of these is a real advantage of satellites?</p>`,
      options: [ 'Satellites remove all propagation delay', 'Circuits are easy to install, flexible, and cover every corner of the Earth', 'Satellite frequencies can never be blocked', 'Satellites have a very low initial cost' ],
      correct: 1,
      answer: `<p><b>Easy, flexible circuits with coverage of every corner of the Earth.</b></p>`,
      explain: `<p>The advantages are easy installation, excellent flexibility, coverage of every corner of the Earth, and full user control of the network. The disadvantages are high initial cost, frequencies that can be blocked, and propagation delay and interference, so the other three options are the opposite of the truth.</p>`,
      points: [ 'Easy to install, flexible', 'Covers every corner of the Earth', 'Cost, blocking and delay are disadvantages' ]
    },
    {
      id: 'm2-2d-20', module: 'm2', topic: 'm2-sat-transponder', type: 'explain', level: 3,
      q: `<p>A transponder is called an RF repeater. What two basic jobs must it do to an uplink signal before sending the downlink, and why?</p>`,
      options: null, correct: null,
      answer: `<p><b>Amplification and frequency translation.</b></p>`,
      explain: `<p>The uplink signal that arrives is very small, so it must be <b>amplified</b>. It is also moved to another frequency (typically 6 GHz up, 4 GHz down) so the strong outgoing signal does not desensitize the receiver and block the incoming one.</p>`,
      points: [ 'Amplification', 'Frequency translation', 'Prevents the transmitter blocking the receiver' ]
    },
    {
      id: 'm2-2d-21', module: 'm2', topic: 'm2-radar', type: 'numerical', level: 1,
      q: `<p>A coastal radar receives the echo from a cargo ship 200 µs after the pulse is sent. How far away is the ship? (c = 3 × 10<sup>8</sup> m/s)</p>`,
      options: [ '15 km', '30 km', '60 km', '120 km' ],
      correct: 1,
      answer: `<p><b>30 km.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>t = 200 µs = 200 × 10<sup>−6</sup> s, c = 3 × 10<sup>8</sup> m/s. The pulse goes out and back, so the distance is halved.</p></div><div class="solve"><div class="eq">R = ct / 2 = (3 × 10<sup>8</sup> × 200 × 10<sup>−6</sup>) / 2</div><div class="eq">R = 60 000 / 2 = 30 000 m</div></div><div class="result"><p>R = <b>30 km</b></p></div></div>`,
      points: [ 'R = ct / 2', 't = 200 × 10⁻⁶ s', 'R = 30 km' ]
    },
    {
      id: 'm2-2d-22', module: 'm2', topic: 'm2-radar', type: 'explain', level: 2,
      q: `<p>A radar finds a missile’s distance from the echo time and also reports how fast it is approaching. What principle does it use for the speed?</p>`,
      options: null, correct: null,
      answer: `<p><b>The Doppler effect.</b></p>`,
      explain: `<p>For a moving object the frequency of the re-radiated signal shifts in proportion to its radial velocity. Measuring this shift gives the speed. The distance still comes from the round-trip time.</p>`,
      points: [ 'Doppler effect', 'Frequency shift is proportional to radial velocity' ]
    },
    {
      id: 'm2-2d-23', module: 'm2', topic: 'm2-radar', type: 'interpret', level: 1,
      q: `<p>A ship’s radar has found a stationary vessel 12 km away in fog. How does the radar find the direction to aim a searchlight?</p>`,
      options: [ 'From the frequency shift of the echo', 'From the antenna angle at which the echo is strongest', 'From the delay of the transponder signal', 'By splitting the signal across a 7-cell cluster' ],
      correct: 1,
      answer: `<p><b>From the antenna angle at which the echo is strongest.</b></p>`,
      explain: `<p>The range comes from the echo time, and the speed of a moving target from the Doppler shift. The location of a <b>stationary</b> object is found from the angle the antenna points at when the echo is strongest.</p>`,
      points: [ 'Direction: antenna angle at strongest echo', 'Range: echo time', 'Speed: Doppler shift' ]
    },
    {
      id: 'm2-2d-24', module: 'm2', topic: 'm2-radar', type: 'numerical', level: 3,
      q: `<p>An aircraft’s weather radar plots a storm front 45 km ahead. How long did the pulse take to go out and come back? (c = 3 × 10<sup>8</sup> m/s)</p>`,
      options: null, correct: null,
      answer: `<p><b>300 µs.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>R = 45 km = 45 000 m, c = 3 × 10<sup>8</sup> m/s.</p></div><div class="solve"><p>Rearrange R = ct / 2:</p><div class="eq">t = 2R / c = (2 × 45 000) / (3 × 10<sup>8</sup>)</div><div class="eq">t = 90 000 / 300 000 000 = 3 × 10<sup>−4</sup> s</div></div><div class="result"><p>t = <b>300 µs</b></p></div></div>`,
      points: [ 't = 2R / c', 'R = 45 000 m', 't = 300 µs' ]
    },
    {
      id: 'm2-2d-25', module: 'm2', topic: 'm2-radar', type: 'numerical', level: 2,
      q: `<p>A handheld radar measures an echo time of 2 µs from a car. How far away is the car? (c = 3 × 10<sup>8</sup> m/s)</p>`,
      options: [ '150 m', '300 m', '600 m', '1500 m' ],
      correct: 1,
      answer: `<p><b>300 m.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>t = 2 × 10<sup>−6</sup> s.</p></div><div class="solve"><div class="eq">R = ct / 2 = (3 × 10<sup>8</sup> × 2 × 10<sup>−6</sup>) / 2 = 600 / 2 = 300 m</div></div><div class="result"><p>R = <b>300 m</b> (600 m would be the whole out-and-back path)</p></div></div>`,
      points: [ 'R = ct / 2', '3 × 10⁸ × 2 × 10⁻⁶ = 600 m', 'Halve it: 300 m' ]
    },
    {
      id: 'm2-2d-26', module: 'm2', topic: 'm2-radar', type: 'troubleshoot', level: 3,
      q: `<p>A radar transmits a strong signal toward an object, but the receiver sees a blank screen. Using the basic radar principle, what could be the reason?</p>`,
      options: null, correct: null,
      answer: `<p><b>No echo returns.</b> Radar only works if part of the signal is reflected back to the receiver.</p>`,
      explain: `<p>A radar radiates energy and studies the <b>echo</b> from the target. If the object reflects or re-radiates too little signal back toward the antenna, the receiver has nothing from which to extract range, direction or speed.</p>`,
      points: [ 'Radar depends on a reflected echo', 'No echo means no information for the receiver' ]
    },
    {
      id: 'm2-2d-27', module: 'm2', topic: 'm2-radar', type: 'predict', level: 2,
      q: `<p>A radar detects a stationary lighthouse and a jet flying directly away, both at a range of 20 km. How do the returning signals differ?</p>`,
      options: [ 'The jet’s echo takes much longer to return', 'The jet’s echo has a shifted frequency, the lighthouse’s does not', 'The jet’s echo is refracted by the ionosphere', 'The lighthouse reflects microwaves and the jet reflects L band' ],
      correct: 1,
      answer: `<p><b>The jet’s echo shows a Doppler frequency shift;</b> the lighthouse’s does not.</p>`,
      explain: `<p>Both are at the same range, so the round-trip times are equal. The moving jet re-radiates the signal at a shifted frequency that is proportional to its radial velocity (the Doppler effect). A stationary object gives no shift.</p>`,
      points: [ 'Same range gives the same echo time', 'Moving target gives a Doppler shift', 'Stationary target gives none' ]
    },
    {
      id: 'm2-2d-28', module: 'm2', topic: 'm2-radar', type: 'explain', level: 1,
      q: `<p>Describe the sequence by which a ship’s radar goes from making a signal to getting information about a target.</p>`,
      options: null, correct: null,
      answer: `<p><b>Transmitter, antenna, target echo, receiver.</b></p>`,
      explain: `<p>The <b>transmitter</b> makes the signal and the <b>antenna</b> radiates it. When the wave meets an object, part of it is reflected or re-radiated as an <b>echo</b>. The <b>receiver</b> extracts the information, such as range, direction and speed, from that echo.</p>`,
      points: [ 'Transmitter makes the signal', 'Antenna radiates it', 'Part is reflected as an echo', 'Receiver extracts the information' ]
    },
    {
      id: 'm2-2d-29', module: 'm2', topic: 'm2-radar', type: 'decide', level: 2,
      q: `<p>A contractor builds equipment for navigation, marine and aeronautical communication and radar. Which satellite-style band is listed for this?</p>`,
      options: [ 'The L band', 'The C band', 'The Ku band', 'The Ka band' ],
      correct: 0,
      answer: `<p><b>The L band.</b></p>`,
      explain: `<p>The L band is used for navigation, marine and aeronautical communication and radar. C band (6/4 GHz) and Ku band (14/12 GHz) are the main bands for communication satellites, and use of the Ka band is increasing. The X band is for military satellites and radar.</p>`,
      points: [ 'L band: navigation, marine, aeronautical, radar', 'C and Ku are communication bands' ]
    },
    {
      id: 'm2-2d-30', module: 'm2', topic: 'm2-radar', type: 'numerical', level: 3,
      q: `<p>A car radar measures an echo time of 0.5 µs from the vehicle ahead. How far ahead is it? (c = 3 × 10<sup>8</sup> m/s)</p>`,
      options: null, correct: null,
      answer: `<p><b>75 m.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>t = 0.5 × 10<sup>−6</sup> s.</p></div><div class="solve"><div class="eq">R = ct / 2 = (3 × 10<sup>8</sup> × 0.5 × 10<sup>−6</sup>) / 2 = 150 / 2 = 75 m</div></div><div class="result"><p>R = <b>75 m</b></p></div></div>`,
      points: [ 'R = ct / 2', '3 × 10⁸ × 0.5 × 10⁻⁶ = 150 m', 'Halve it: 75 m' ]
    },
    {
      id: 'm2-2d-31', module: 'm2', topic: 'm2-cell-basics', type: 'numerical', level: 3,
      q: `<p>A city is covered by 28 cells arranged in 7-cell clusters, each cluster reusing the same 832 channels. How many clusters are there, how many channels per cell, and how many calls can the city carry at once? Compare with a single big transmitter using the same 832 channels.</p>`,
      options: null, correct: null,
      answer: `<p><b>4 clusters</b>, <b>118</b> channels per cell, <b>3304</b> simultaneous calls, about <b>4 times</b> the 832 of a single transmitter.</p>`,
      explain: `<div class="worked"><div class="given"><p>28 cells, 7 per cluster, 832 channels per cluster.</p></div><div class="solve"><div class="eq">clusters = 28 / 7 = 4</div><div class="eq">channels per cell = 832 / 7 ≈ 118</div><div class="eq">calls = 28 × 118 = 3304</div><div class="eq">3304 / 832 ≈ 4.0</div></div><div class="result"><p>Reusing the same frequencies in every cluster gives about <b>4 times</b> the capacity (equal to the number of clusters)</p></div></div>`,
      points: [ '28 / 7 = 4 clusters', '832 / 7 ≈ 118 channels per cell', '28 × 118 = 3304, about 4 times 832' ]
    },
    {
      id: 'm2-2d-32', module: 'm2', topic: 'm2-cell-freq', type: 'numerical', level: 3,
      q: `<p>In the PCS pair (1850 to 1910 MHz up, 1930 to 1990 MHz down), find the block width, the spacing between the up and down blocks, and the downlink frequency for a phone sending at 1880 MHz.</p>`,
      options: null, correct: null,
      answer: `<p>Block width <b>60 MHz</b>, spacing <b>80 MHz</b>, downlink <b>1960 MHz</b>.</p>`,
      explain: `<div class="worked"><div class="given"><p>Uplink 1850 to 1910 MHz, downlink 1930 to 1990 MHz.</p></div><div class="solve"><div class="eq">width = 1910 − 1850 = 60 MHz = 1990 − 1930</div><div class="eq">spacing = 1930 − 1850 = 80 MHz (and 1990 − 1910 = 80 MHz)</div><div class="eq">downlink = 1880 + 80 = 1960 MHz</div></div><div class="result"><p><b>60 MHz</b>, <b>80 MHz</b>, <b>1960 MHz</b></p></div></div>`,
      points: [ 'Block width 60 MHz', 'Up-down spacing 80 MHz', '1880 + 80 = 1960 MHz' ]
    },
    {
      id: 'm2-2d-33', module: 'm2', topic: 'm2-radar', type: 'numerical', level: 3,
      q: `<p>A radar gets two echoes, one after 60 µs and another after 90 µs. Find each target’s range and the gap between the targets. (c = 3 × 10<sup>8</sup> m/s)</p>`,
      options: null, correct: null,
      answer: `<p><b>9 km</b> and <b>13.5 km</b>, a gap of <b>4.5 km</b>.</p>`,
      explain: `<div class="worked"><div class="given"><p>t<sub>1</sub> = 60 µs, t<sub>2</sub> = 90 µs.</p></div><div class="solve"><div class="eq">R<sub>1</sub> = ct / 2 = 3 × 10<sup>8</sup> × 60 × 10<sup>−6</sup> / 2 = 9000 m</div><div class="eq">R<sub>2</sub> = 3 × 10<sup>8</sup> × 90 × 10<sup>−6</sup> / 2 = 13 500 m</div><div class="eq">gap = 13.5 − 9 = 4.5 km</div></div><div class="result"><p>R<sub>1</sub> = <b>9 km</b>, R<sub>2</sub> = <b>13.5 km</b>, gap <b>4.5 km</b>. A 30 µs difference in echo time is 4.5 km of separation</p></div></div>`,
      points: [ 'R = ct / 2 for each echo', '9 km and 13.5 km', 'Gap 4.5 km' ]
    },
    {
      id: 'm2-2d-34', module: 'm2', topic: 'm2-radar', type: 'numerical', level: 3,
      q: `<p>Extra: a radar must see a target 150 km away. How long does the echo take, and why must the radar wait at least this long before it can safely send the next pulse if it wants to match each echo to its own pulse? (c = 3 × 10<sup>8</sup> m/s)</p>`,
      options: null, correct: null,
      answer: `<p><b>1 ms</b> (1000 µs). A new pulse sent sooner could be confused with a late echo from the old one.</p>`,
      explain: `<div class="worked"><div class="given"><p>R = 150 km = 150 000 m.</p></div><div class="solve"><div class="eq">t = 2R / c = 2 × 150 000 / (3 × 10<sup>8</sup>) = 10<sup>−3</sup> s</div></div><div class="result"><p>t = <b>1 ms</b>. If a second pulse left earlier than that, an echo arriving then could belong to either pulse</p></div></div>`,
      points: [ 't = 2R / c', 't = 1 ms', 'Wait for the echo before sending the next pulse' ]
    },
    {
      id: 'm2-2d-35', module: 'm2', topic: 'm2-sat-transponder', type: 'numerical', level: 3,
      q: `<p>A satellite signal sits at the middle of the C-band uplink (5.925 to 6.425 GHz) and is retransmitted at the middle of the C-band downlink (3.7 to 4.2 GHz). Find both centre frequencies and the shift the transponder applies. Repeat for the Ku band (14 to 14.5 GHz up, 11.7 to 12.2 GHz down).</p>`,
      options: null, correct: null,
      answer: `<p>C band: <b>6.175 GHz</b> to <b>3.95 GHz</b>, shift <b>2.225 GHz</b>. Ku band: <b>14.25 GHz</b> to <b>11.95 GHz</b>, shift <b>2.3 GHz</b>.</p>`,
      explain: `<div class="worked"><div class="given"><p>C: 5.925 to 6.425 up, 3.7 to 4.2 down. Ku: 14 to 14.5 up, 11.7 to 12.2 down.</p></div><div class="solve"><div class="eq">C up: (5.925 + 6.425) / 2 = 6.175 GHz, C down: (3.7 + 4.2) / 2 = 3.95 GHz</div><div class="eq">shift = 6.175 − 3.95 = 2.225 GHz</div><div class="eq">Ku up: 14.25 GHz, Ku down: 11.95 GHz, shift = 2.3 GHz</div></div><div class="result"><p>The downlink is always lower than the uplink, and the large shift keeps the transmitter from desensitizing the receiver</p></div></div>`,
      points: [ 'C band: 6.175 GHz up, 3.95 GHz down, shift 2.225 GHz', 'Ku band: 14.25 up, 11.95 down, shift 2.3 GHz', 'Downlink is lower than the uplink' ]
    },
    {
      id: 'm2-2d-36', module: 'm2', topic: 'm2-cell-network', type: 'explain', level: 3,
      q: `<p>A subscriber from their home area switches on a phone in a new area. Describe, in order, which network elements and databases are involved before a call can be made.</p>`,
      options: null, correct: null,
      answer: `<p>The BTS picks up the phone, the BSC routes to the new <b>MSC</b>, which asks the <b>HLR</b> for the data and keeps it in its <b>VLR</b>. The <b>AuC</b> checks identity and the <b>EIR</b> checks the handset.</p>`,
      explain: `<p>The <b>BTS</b> of the cell connects the phone, and the <b>BSC</b> routes the traffic to the <b>MSC</b>. The MSC of the new area asks the subscriber’s <b>HLR</b> for the permanent data and stores a temporary copy in its <b>VLR</b>. The <b>AuC</b> checks the identity of the user and provides encryption parameters, and the <b>EIR</b> identifies the handset by its IMEI number.</p>`,
      points: [ 'BTS, BSC, MSC chain', 'New MSC asks the HLR and stores data in its VLR', 'AuC authenticates, EIR checks the IMEI' ]
    },
    {
      id: 'm2-2d-37', module: 'm2', topic: 'm2-cell-freq', type: 'design', level: 3,
      q: `<p>A provider has to cover a dense city centre and a long rural highway. For each, choose the cell type and say whether the 800 MHz band or the higher PCS band is the better fit, with reasons.</p>`,
      options: null, correct: null,
      answer: `<p>City: <b>microcells</b> with <b>PCS</b>. Highway: <b>macrocells</b> with <b>800 MHz</b>.</p>`,
      explain: `<p>In a dense city, many users need <b>capacity</b>, so small low-power microcells and the higher PCS frequencies (greater capacity, smaller antennas) suit it, and the shorter range is not a problem. On a rural highway, few users but large distances call for big <b>macrocells</b> (about 6 miles across) and the lower 800 MHz band, which has the longer range.</p>`,
      points: [ 'City: microcells, PCS for capacity', 'Highway: macrocells, 800 MHz for range', 'Higher frequency means more capacity but less range' ]
    },
    {
      id: 'm2-2d-38', module: 'm2', topic: 'm2-sat-basics', type: 'decide', level: 3,
      q: `<p>A broadcaster wants to send one TV programme to millions of homes across a country with few ground links. Why is a satellite a good fit, and which parts of the system are the ground segment and the space segment?</p>`,
      options: null, correct: null,
      answer: `<p>A satellite is a powerful <b>point-to-multipoint</b> system: <b>one uplink</b>, many downlinks. The earth stations are the <b>ground segment</b> and the satellite is the <b>space segment</b>.</p>`,
      explain: `<p>The programme goes up once from the broadcaster’s ground station. The transponder amplifies it and changes its frequency, and the downlink reaches every receiving earth station in the coverage area. Usually there is one uplink and multiple downlinks, and the satellite covers areas that ground links struggle to reach.</p>`,
      points: [ 'Point-to-multipoint: one uplink, many downlinks', 'Earth stations and terrestrial systems: ground segment', 'Satellite: space segment' ]
    }
  ]
});
