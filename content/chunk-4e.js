CHUNK({
  chunk: '4e',
  module: 'm4',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm4-ic-types',
      title: 'External and internal combustion engines',
      short: 'EC and IC engines',
      blurb: 'Where the fuel burns in each kind of engine, and the family tree of IC engines.',
      source: 'Lecture 15, pages 1–5',
      tabs: [
        {
          title: 'External combustion',
          html: `<p class="lead">In an <b>external combustion engine</b> the fuel is burned <b>outside the engine cylinder</b>. The heat goes to a <b>working fluid</b> (steam, air or gas), and the fluid does the mechanical work.</p>
<div class="note example"><p>A steam engine: coal burns in a furnace, the heat makes steam, and the steam pushes the piston.</p></div>`
        },
        {
          title: 'Internal combustion',
          html: `<p class="lead">In an <b>internal combustion (IC) engine</b> the heat energy comes from burning the <b>air-fuel mixture</b> inside the cylinder, and it becomes <b>mechanical work</b>.</p>
<p>IC engines are classified two ways, each with 4-stroke and 2-stroke versions:</p>
<div class="vs"><div class="side"><h4>Spark ignition (SI)</h4><p>Petrol engine.</p><div class="chips"><span class="chip">4-stroke cycle</span><span class="chip">2-stroke cycle</span></div></div><div class="side"><h4>Compression ignition (CI)</h4><p>Diesel engine.</p><div class="chips"><span class="chip">4-stroke cycle</span><span class="chip">2-stroke cycle</span></div></div></div>`
        }
      ],
      flashcards: [
        { front: 'What is an external combustion engine?', back: 'Fuel burns outside the cylinder; heat goes to a working fluid (steam, air, gas) that does the mechanical work.' },
        { front: 'What is an IC engine?', back: 'An engine that turns the heat of burning an air-fuel mixture inside the cylinder into mechanical work.' },
        { front: 'SI engine = ? CI engine = ?', back: 'Spark ignition is the petrol engine; compression ignition is the diesel engine.' },
        { front: 'How many strokes can each IC engine type have?', back: 'Both SI and CI engines can be 4-stroke or 2-stroke.' }
      ],
      oneLiners: [
        'EC: fuel burns outside the cylinder. IC: inside.',
        'SI = petrol, CI = diesel; each 4-stroke or 2-stroke.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-ic-parts',
      title: 'Basic parts of an IC engine',
      short: 'IC engine parts',
      blurb: 'What the crankshaft, piston, rings, flywheel, connecting rod, spark plug and fuel injector do.',
      source: 'Lecture 15, pages 6–12, 25–27',
      tabs: [
        {
          title: 'Crankshaft and flywheel',
          html: `<div class="kv"><div><span>Crankshaft</span><b>Rotating shaft that turns the piston's reciprocating motion into useful rotary motion. Delivers torque to the flywheel, clutch and transmission</b></div><div><span>Flywheel</span><b>Reservoir of kinetic energy: stores it when energy supplied exceeds the need and releases it when the need exceeds supply</b></div></div>
<p>The crankshaft stores rotational kinetic energy from the power stroke and releases it in the other strokes. The flywheel absorbs the excess energy of the power stroke and gives it back to the crankshaft during the strokes that develop none, so the crankshaft turns at a <b>uniform speed</b>. A common type is the rim-type flywheel.</p>`
        },
        {
          title: 'Piston and rings',
          html: `<div class="kv"><div><span>Piston</span><b>Receives the impulsive pressure of the expanding gas and passes the energy to the crankshaft through the connecting rod</b></div><div><span>Piston head</span><b>Withstands the explosion pressure and dissipates heat to the cylinder walls</b></div><div><span>Piston skirt</span><b>Acts as a bearing for the side thrust from the cylinder wall</b></div><div><span>Piston rings</span><b>Keep a tight seal between the moving piston and the cylinder bore, and carry heat from the piston to the cylinder liner</b></div></div>`
        },
        {
          title: 'Connecting rod',
          html: `<p class="lead">The <b>connecting rod</b> joins the piston to the crankshaft and turns the piston's reciprocating motion into the crankshaft's rotary motion.</p>
<div class="kv"><div><span>Small end</span><b>Piston pin</b></div><div><span>Big end</span><b>Crank pin</b></div><div><span>Shank</span><b>The body between the two ends</b></div></div>
<p>The connecting rod also carries a castle bolt and nut.</p>`
        },
        {
          title: 'Spark plug and injector',
          html: `<p class="lead">The <b>spark plug</b> ignites an SI engine; the <b>fuel injector</b> feeds a CI engine.</p>
<div class="chips"><span class="chip">Porcelain insulator</span><span class="chip">Electrode</span><span class="chip">Ground strap</span><span class="chip">Plug's base ring</span></div>
<p>The colour of a used spark plug shows the air-fuel mixture it ran on: normal (perfect), lean, or slightly rich.</p>`
        }
      ],
      flashcards: [
        { front: 'What does the crankshaft do?', back: 'Turns the piston\'s reciprocating motion into rotary motion and delivers torque to the flywheel, clutch and transmission.' },
        { front: 'What does the flywheel do?', back: 'Stores kinetic energy when supply exceeds need and releases it otherwise, keeping the crankshaft at uniform speed.' },
        { front: 'What does the piston do?', back: 'Receives the pressure of the expanding gas and transmits it to the crankshaft through the connecting rod.' },
        { front: 'Piston rings: two jobs?', back: 'Maintain a tight seal with the cylinder bore; transfer heat from piston to cylinder liner.' },
        { front: 'What is the piston skirt for?', back: 'It acts as a bearing for the side thrust from the cylinder wall.' },
        { front: 'Small end and big end of a connecting rod?', back: 'Small end holds the piston pin; big end holds the crank pin.' },
        { front: 'Which part ignites an SI engine and which feeds a CI engine?', back: 'Spark plug ignites an SI engine; fuel injector feeds a CI engine.' }
      ],
      oneLiners: [
        'Crankshaft: reciprocating to rotary. Flywheel: smooths speed.',
        'Piston head takes pressure; skirt takes side thrust; rings seal and cool.',
        'Small end = piston pin, big end = crank pin.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-four-stroke',
      title: 'Four stroke engine, Otto and Diesel cycles',
      short: 'Four stroke, Otto',
      blurb: 'The four strokes, and the idealised Otto (constant volume) and Diesel (constant pressure) cycles.',
      source: 'Lecture 15, pages 13–15',
      tabs: [
        {
          title: 'Four strokes',
          html: `<figure data-fig="m4-four-stroke"></figure>
<ol class="steps"><li><b>Suction</b> The cylinder takes in the air-fuel mixture.</li><li><b>Compression</b> The piston squeezes the mixture. Pressure and temperature of the mixture rise.</li><li><b>Power (expansion)</b> The mixture burns and the explosion forces the piston downward.</li><li><b>Exhaust</b> The piston moves up and pushes the burnt gases out of the cylinder.</li></ol>
<p>The engine makes <b>one power stroke for every two revolutions</b> of the crankshaft.</p>`
        },
        {
          title: 'Otto cycle',
          html: `<p class="lead">The <b>Otto cycle</b> (constant volume cycle) is the idealised thermodynamic cycle of a typical <b>SI engine</b>.</p>
<figure data-fig="m4-otto-pv"></figure>
<div class="kv"><div><span>0–1</span><b>Isobaric expansion</b></div><div><span>1–2</span><b>Adiabatic compression</b></div><div><span>2–3</span><b>Isochoric process (heat added at constant volume)</b></div><div><span>3–4</span><b>Adiabatic expansion</b></div><div><span>4–1</span><b>Constant-volume process (heat rejected)</b></div><div><span>1–0</span><b>Constant pressure process</b></div></div>`
        },
        {
          title: 'Diesel cycle',
          html: `<p class="lead">The <b>Diesel cycle</b> (constant pressure cycle) is the thermodynamic cycle of a <b>compression ignition</b> engine.</p>
<div class="kv"><div><span>1–2</span><b>Isentropic compression of the fluid</b></div><div><span>2–3</span><b>Constant pressure heating</b></div><div><span>3–4</span><b>Isentropic expansion</b></div><div><span>4–1</span><b>Constant volume cooling</b></div></div>
<div class="note trap"><p>Otto adds heat at constant <b>volume</b>; Diesel adds heat at constant <b>pressure</b>. Everything else in the four-step cycle looks the same.</p></div>`
        }
      ],
      flashcards: [
        { front: 'List the four strokes in order.', back: 'Suction, compression, power (expansion), exhaust.' },
        { front: 'What happens in the compression stroke?', back: 'The piston squeezes the mixture, raising its pressure and temperature.' },
        { front: 'How often does a four-stroke engine give a power stroke?', back: 'Once every two revolutions of the crankshaft.' },
        { front: 'Which engine does the Otto cycle describe?', back: 'The spark ignition (petrol) engine; it is the constant volume cycle.' },
        { front: 'Steps of the Diesel cycle?', back: '1–2 isentropic compression, 2–3 constant pressure heating, 3–4 isentropic expansion, 4–1 constant volume cooling.' },
        { front: 'Heat addition in Otto vs Diesel?', back: 'Otto at constant volume; Diesel at constant pressure.' }
      ],
      oneLiners: [
        'Four strokes: suction, compression, power, exhaust.',
        'Otto = SI, constant volume. Diesel = CI, constant pressure.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-two-stroke',
      title: 'Two stroke engine and comparisons',
      short: 'Two stroke, comparisons',
      blurb: 'How a two stroke engine works and how it compares to the four stroke, and SI against CI.',
      source: 'Lecture 15, pages 16–18',
      tabs: [
        {
          title: 'Two stroke engine',
          html: `<p class="lead">A two stroke engine completes <b>four operations in one revolution</b> of the crankshaft, which is two strokes of the piston.</p>
<ul><li>There are <b>no valves</b>. Three ports instead: <b>inlet, exhaust and transfer</b>.</li><li><b>First stroke</b> (piston goes up): compression and ignition.</li><li><b>Second stroke</b> (piston goes down): expansion, exhaust and transfer.</li><li><b>Fins</b> increase the surface area and help cool the engine.</li></ul>`
        },
        {
          title: '4-stroke vs 2-stroke',
          html: `<table class="tbl"><thead><tr><th>Point</th><th>Four stroke</th><th>Two stroke</th></tr></thead><tbody>
<tr><td>Power</td><td>One power stroke every 2 revolutions (4 strokes)</td><td>One power stroke every revolution</td></tr>
<tr><td>Openings</td><td>Inlet and exhaust valves</td><td>Ports in the cylinder walls: inlet, exhaust, transfer</td></tr>
<tr><td>Efficiency</td><td>Higher: the mixture is fully used, more fuel-efficient</td><td>Lower: fresh charge can escape with the exhaust gases</td></tr>
<tr><td>Noise</td><td>Exhaust is less noisy</td><td>Exhaust is noisy because of the short time available for exhaust</td></tr>
</tbody></table>`
        },
        {
          title: 'SI vs CI',
          html: `<table class="tbl"><thead><tr><th>Point</th><th>SI (petrol)</th><th>CI (diesel)</th></tr></thead><tbody>
<tr><td>Intake</td><td>Air-fuel mixture</td><td>Air alone</td></tr>
<tr><td>Fuel admission</td><td>Carburettor</td><td>Fuel injector</td></tr>
<tr><td>Ignition</td><td>Spark plug</td><td>Compressed hot air</td></tr>
<tr><td>Lubricating property of fuel</td><td>Petrol has none</td><td>Diesel is better</td></tr>
<tr><td>Cycle</td><td>Otto (constant volume)</td><td>Diesel (constant pressure)</td></tr>
<tr><td>Space for same power</td><td>Less</td><td>More</td></tr>
<tr><td>Compression ratio</td><td>Low, 7 to 8</td><td>High, 16 to 17</td></tr>
<tr><td>Vibration and noise</td><td>Very little</td><td>More, due to the high operating pressure</td></tr>
</tbody></table>`
        },
        {
          title: 'Two-stroke working',
          html: `<figure data-fig="m4-two-stroke-engine"></figure>
<ol class="steps"><li><b>Upward stroke (compression and induction):</b> the piston moves up and covers the transfer and exhaust ports, compressing the charge above it. At the same time the space below it in the <b>closed crankcase</b> expands, the inlet port opens and fresh air–fuel mixture is drawn into the crankcase. Near the top, the <b>spark plug</b> ignites the compressed charge.</li>
<li><b>Downward stroke (power, exhaust and transfer):</b> the burning gases push the piston down, giving the power stroke, and compress the mixture in the crankcase. The piston first uncovers the <b>exhaust port</b>, so the burnt gases rush out; then it uncovers the <b>transfer port</b>, and the pre-compressed fresh charge flows from the crankcase into the cylinder, helping to sweep out the remaining exhaust (<b>scavenging</b>). The deflector on the piston crown directs the fresh charge upward so it does not go straight out of the exhaust.</li></ol>
<div class="note why"><p>One power stroke every revolution makes a two-stroke engine light and powerful for its size, which is why it is used in scooters, mopeds, chainsaws and outboard motors; but some fresh charge escapes with the exhaust, so it uses more fuel and pollutes more.</p></div>`
        }
      ],
      flashcards: [
        { front: 'How many revolutions per power stroke in a two stroke engine?', back: 'One power stroke every revolution of the crankshaft.' },
        { front: 'What replaces valves in a two stroke engine?', back: 'Three ports: inlet, exhaust and transfer.' },
        { front: 'Why is a two stroke engine less efficient?', back: 'Fresh charge can escape with the exhaust gases.' },
        { front: 'Why are fins provided?', back: 'To increase surface area and help cool the engine.' },
        { front: 'Compression ratio of SI and CI?', back: 'SI 7 to 8; CI 16 to 17.' },
        { front: 'How does ignition differ in SI and CI?', back: 'SI: spark plug. CI: compressed hot air ignites the injected fuel.' },
        { front: 'Which engine needs more space for the same power?', back: 'The diesel (CI) engine.' }
      ],
      oneLiners: [
        '2-stroke: power every revolution, ports not valves, noisier, less efficient.',
        'SI: carburettor, spark, Otto, CR 7–8. CI: injector, compression, Diesel, CR 16–17.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm4-two-stroke-engine', src: 'own/README.txt', crop: null, caption: 'Two-stroke petrol engine: inlet, transfer and exhaust ports opened by the piston; closed crankcase.', alt: 'Cylinder with spark plug, piston with deflector, exhaust port right, transfer and inlet ports left and a crankcase with crank below.' },
    { id: 'm4-four-stroke', src: 'm4/pages/b11.png', crop: null, caption: 'The four strokes of the piston: suction, compression, power and exhaust.', alt: 'Four cylinders showing suction, compression, power and exhaust strokes.' },
    { id: 'm4-otto-pv', src: 'm4/pages/b12.png', crop: null, caption: 'Otto cycle on a pressure-volume diagram: adiabatic compression 1–2, heat added at constant volume 2–3, adiabatic expansion 3–4, heat rejected at constant volume 4–1.', alt: 'P-V diagram of the Otto cycle.' }
  ]
});
