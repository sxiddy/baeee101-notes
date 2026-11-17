QUESTIONS({
  chunk: '4c',
  questions: [
    {
      id: 'm4-4c-01', module: 'm4', topic: 'm4-ic-parts', type: 'explain', level: 1,
      q: `<p>A single-cylinder engine gives only one power stroke every two revolutions, yet the shaft turns fairly smoothly. Which part makes this possible and how?</p>`,
      options: null, correct: null,
      answer: `<p><b>The flywheel.</b></p>`,
      explain: `<p>The flywheel stores kinetic energy when the energy supply exceeds the need (during the power stroke) and releases it to the crankshaft in the strokes where no energy is developed, so the shaft turns at a uniform speed.</p>`,
      points: ['Absorbs excess power stroke energy', 'Releases it in the other strokes', 'Uniform crankshaft speed']
    },
    {
      id: 'm4-4c-02', module: 'm4', topic: 'm4-four-stroke', type: 'numerical', level: 2,
      q: `<p>An engine runs at 3000 rev/min. How many power strokes per minute does one cylinder give as a four stroke engine, and as a two stroke engine?</p>`,
      options: null, correct: null,
      answer: `<p><b>1500 per minute (four stroke) and 3000 per minute (two stroke).</b></p>`,
      explain: `<div class="worked"><div class="given"><p>N = 3000 rev/min</p></div><div class="solve"><p>Four stroke: one power stroke per two revolutions:</p><div class="eq">3000 ÷ 2 = 1500</div><p>Two stroke: one power stroke per revolution:</p><div class="eq">3000 × 1 = 3000</div></div><div class="result"><p>1500 and 3000 power strokes per minute</p></div></div>`,
      points: ['Four stroke: every 2 revolutions', 'Two stroke: every revolution']
    },
    {
      id: 'm4-4c-03', module: 'm4', topic: 'm4-four-stroke', type: 'predict', level: 1,
      q: `<p>During which stroke do the pressure and temperature of the air-fuel mixture rise before ignition, and which stroke pushes burnt gas out?</p>`,
      options: ['Suction raises them; power pushes out', 'Power raises them; suction pushes out', 'Compression raises them; exhaust pushes out', 'Exhaust raises them; compression pushes out'],
      correct: 2,
      answer: `<p><b>Compression; exhaust.</b></p>`,
      explain: `<p>In the compression stroke the piston squeezes the mixture and its pressure and temperature rise. In the exhaust stroke the piston moves up and pushes the burnt gases out. Suction takes in the mixture and the power stroke is where combustion forces the piston down.</p>`,
      points: ['Compression raises pressure and temperature', 'Exhaust expels burnt gas']
    },
    {
      id: 'm4-4c-04', module: 'm4', topic: 'm4-two-stroke', type: 'decide', level: 2,
      q: `<p>A motorcycle maker wants a light engine with a power stroke every revolution and no valves, accepting some noise. Which engine type fits, and what are its costs?</p>`,
      options: null, correct: null,
      answer: `<p><b>A two stroke engine.</b></p>`,
      explain: `<p>It completes four operations in one crankshaft revolution and uses inlet, exhaust and transfer ports instead of valves. The costs: fresh charge can escape with the exhaust, which lowers efficiency, and the exhaust is noisy because little time is available for it. Fins are used for cooling.</p>`,
      points: ['Power every revolution', 'Ports, no valves', 'Less efficient: charge escapes', 'Noisy exhaust']
    },
    {
      id: 'm4-4c-05', module: 'm4', topic: 'm4-two-stroke', type: 'decide', level: 1,
      q: `<p>A truck engine needs ignition by compression of hot air, a compression ratio around 16 to 17 and better fuel lubrication. Which engine is this?</p>`,
      options: ['SI engine with Otto cycle', 'CI engine with Otto cycle', 'SI engine with Diesel cycle', 'CI engine with Diesel cycle'],
      correct: 3,
      answer: `<p><b>A CI (diesel) engine on the Diesel cycle.</b></p>`,
      explain: `<p>CI engines take in air alone, inject fuel, ignite it by compressed hot air, use compression ratios of 16 to 17 and diesel lubricates better than petrol. SI engines use a spark plug, ratios of 7 to 8, and the Otto cycle. CI also needs more space for the same power and gives more vibration and noise.</p>`,
      points: ['CI: air alone, injector, compressed hot air', 'CR 16–17', 'Diesel cycle (constant pressure)']
    },
    {
      id: 'm4-4c-06', module: 'm4', topic: 'm4-ic-parts', type: 'troubleshoot', level: 2,
      q: `<p>An old engine loses compression and runs hot, and the cylinder bore shows wear. Which piston part has failed, and what two jobs does it do?</p>`,
      options: null, correct: null,
      answer: `<p><b>The piston rings.</b></p>`,
      explain: `<p>Piston rings keep a tight seal between the moving piston and the cylinder bore, and carry heat from the piston to the cylinder liner. When they wear the seal is lost (low compression) and heat is not passed out properly (running hot).</p>`,
      points: ['Seal between piston and bore', 'Transfer heat to cylinder liner']
    },
    {
      id: 'm4-4c-07', module: 'm4', topic: 'm4-energy-basics', type: 'explain', level: 1,
      q: `<p>A student claims a hydro plant "creates" electricity from nothing. Correct this using the law of conservation of energy and state the energy chain.</p>`,
      options: null, correct: null,
      answer: `<p><b>Energy is only converted.</b> Potential energy of water → kinetic energy of the turbine → electrical energy.</p>`,
      explain: `<p>Energy cannot be created or destroyed, only converted from one form to another, so the total in a closed system stays constant. In a hydel plant the potential energy of water becomes the kinetic energy of the turbine, and the generator turns that into electrical energy.</p>`,
      points: ['Conservation of energy', 'Potential → kinetic → electrical']
    },
    {
      id: 'm4-4c-08', module: 'm4', topic: 'm4-nuclear', type: 'numerical', level: 2,
      q: `<p>A reactor fully fissions 2 kg of uranium. Using the course figure, how much coal and how much oil would give the same energy?</p>`,
      options: null, correct: null,
      answer: `<p><b>9000 tonnes of coal or 4000 tonnes of oil.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>1 kg U = 4500 t coal = 2000 t oil</p></div><div class="solve"><div class="eq">Coal: 2 × 4500 = 9000 t</div><div class="eq">Oil: 2 × 2000 = 4000 t</div></div><div class="result"><p>9000 t coal or 4000 t oil</p></div></div>`,
      points: ['Complete fission of 1 kg U ≈ 4500 t coal', 'Or 2000 t oil']
    },
    {
      id: 'm4-4c-09', module: 'm4', topic: 'm4-nuclear', type: 'troubleshoot', level: 2,
      q: `<p>Operators see the reactor chain reaction running faster than wanted. Which component do they act on, what is it made of, and how does it work?</p>`,
      options: ['Control rods of boron or cadmium absorb neutrons', 'The moderator of boron slows neutrons', 'The coolant of sodium absorbs neutrons', 'The thermal shield removes heat'],
      correct: 0,
      answer: `<p><b>Control rods.</b></p>`,
      explain: `<p>Control rods regulate the rate of the chain reaction and are made of boron or cadmium, which absorb neutrons. The moderator (graphite, water or heavy water) only slows fast neutrons; the coolant removes heat; the thermal shield protects from radiation.</p>`,
      points: ['Control rods regulate the chain reaction', 'Boron, cadmium absorb neutrons']
    },
    {
      id: 'm4-4c-10', module: 'm4', topic: 'm4-hydro-wind', type: 'decide', level: 2,
      q: `<p>A site has a tall dam with very high head, and another is a slow river with low head. Which turbine for each, and why do hydro turbines need no special materials?</p>`,
      options: null, correct: null,
      answer: `<p><b>Pelton wheel for high head; Kaplan turbine for low head</b> (Francis is for medium head).</p>`,
      explain: `<p>Hydro turbines run at low speed, about 300–400 rpm, so special materials and fabrication methods are not needed, unlike the high-rpm turbine of a thermal plant.</p>`,
      points: ['High head: Pelton', 'Medium: Francis', 'Low: Kaplan', '300–400 rpm, no special materials']
    },
    {
      id: 'm4-4c-11', module: 'm4', topic: 'm4-solar-biomass', type: 'decide', level: 1,
      q: `<p>A house has rooftop solar panels feeding an AC appliance. Why is an inverter needed?</p>`,
      options: ['Panels give AC; the inverter makes it DC', 'Panels give DC; the inverter turns it into AC', 'The inverter stores energy', 'The inverter concentrates sunlight'],
      correct: 1,
      answer: `<p><b>PV cells produce DC; the inverter makes AC.</b></p>`,
      explain: `<p>Photons free electrons in silicon cells, the cell's electric field pushes them to the N-type layer, and current flows as DC. The inverter converts it to AC for the home or load.</p>`,
      points: ['PV output is DC', 'Inverter gives AC']
    },
    {
      id: 'm4-4c-12', module: 'm4', topic: 'm4-solar-biomass', type: 'interpret', level: 2,
      q: `<p>A planner ranks coal, nuclear, hydro and wind for long-term sustainability. How do they rank and what is each main drawback?</p>`,
      options: null, correct: null,
      answer: `<p><b>Hydro and wind are most sustainable, then nuclear (low-carbon but controversial), with coal last.</b></p>`,
      explain: `<p>Coal is non-renewable with high CO<sub>2</sub>, SO<sub>2</sub>, NO<sub>x</sub> and particulates. Nuclear is non-renewable but very low CO<sub>2</sub> in operation, with radioactive waste and safety concerns. Hydro has no direct CO<sub>2</sub> but large dams can disrupt ecosystems and displace communities. Wind has no CO<sub>2</sub> but affects birds, creates noise and spoils the view.</p>`,
      points: ['Coal: unsustainable', 'Nuclear: low-carbon, waste and safety', 'Hydro: dam impact', 'Wind: birds, noise, landscape']
    },
    {
      id: 'm4-4c-13', module: 'm4', topic: 'm4-steam-plant', type: 'decide', level: 1,
      q: `<p>A state needs a power plant quickly and cheaply to build near its city, and fuel can be trucked in. Why might a steam plant be chosen, and why is it a poor peak-load plant?</p>`,
      options: null, correct: null,
      answer: `<p><b>Lower initial cost and shorter construction time than hydro; fuel transport is cheap near the load centre.</b></p>`,
      explain: `<p>Disadvantages: it cannot be used as a peak load plant, generation cost is considerably higher than hydroelectric, it is non-renewable and it contaminates the atmosphere.</p>`,
      points: ['Less investment and time than hydro', 'Not for peak load', 'Non-renewable, pollutes']
    }
  ]
});
