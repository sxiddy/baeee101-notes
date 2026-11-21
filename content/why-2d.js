// Why each wrong option is wrong, per question id. Index order matches the options; the correct one is ''.
WHY({
  'm2-2d-01': ['The HLR stores subscriber data; authentication is not the handoff step.', 'The call drop happened at the cell change, which the MTSO handoff handles.', '', 'The base stations use their allotted band; a weak signal was correctly noticed.'],
  'm2-2d-03': ['836 MHz is the uplink; the downlink is 45 MHz higher.', '', '869 MHz is the bottom of the downlink block, not the matching position.', '894 MHz is the top of the downlink block, not the matching position.'],
  'm2-2d-05': ['The HLR keeps permanent data in the home area, not temporary visitor data.', 'The AuC handles authentication, not temporary location data.', 'The EIR checks equipment identity, not subscriber location.', ''],
  'm2-2d-07': ['3 is a wrong ratio, far too small for 832 channels in 7 cells.', '25 is the bandwidth in MHz, not a channel count.', '', '832 is the whole cluster\'s channels, not each cell\'s share.'],
  'm2-2d-09': ['2G is far older and slower, with no massive device support.', '3G does not offer lower latency than 4G.', '4G is the generation being improved upon here.', ''],
  'm2-2d-11': ['Ionospheric delay is not the problem; microwaves pass through it.', '', 'Transmitting and receiving on one frequency does not drain power.', 'Attitude stabilization is a separate subsystem unrelated to frequency choice.'],
  'm2-2d-13': ['', 'C band is the most widely used and overcrowded band.', 'X band is not the band new communication satellites are moving to.', 'L band is for navigation, marine and aeronautical use and radar.'],
  'm2-2d-15': ['Propulsion moves the satellite; keeping antennas pointed is attitude stabilization.', 'Telemetry is reporting the tumbling, so it is still working.', '', 'Transponders handle signals; they do not hold the antennas pointed at Earth.'],
  'm2-2d-17': ['3 to 30 MHz signals are refracted back by the ionosphere, so both do not pass.', '', 'It is the reverse: microwaves pass through and shortwave is refracted back.', 'Microwaves pass through with little attenuation, so both are not blocked.'],
  'm2-2d-19': ['', 'Propagation delay is a disadvantage of satellites, not removed by them.', 'Satellite signals can be interfered with or blocked.', 'High initial cost is a known disadvantage of satellites.'],
  'm2-2d-21': ['15 km halves the distance twice.', '120 km doubles ct instead of halving it for the round trip.', '60 km uses ct without halving for the round trip.', ''],
  'm2-2d-23': ['A frequency shift (Doppler) gives speed of a moving target, not direction.', '', 'Radar uses echoes, not transponder delay, to find a ship.', 'A 7-cell cluster belongs to cellular systems, not radar.'],
  'm2-2d-25': ['', '150 m halves the distance twice.', '600 m uses ct without halving for the round trip.', '1500 m is off by a factor of 5 from R = ct/2.'],
  'm2-2d-27': ['Both are at 20 km, so the round-trip times are equal.', 'Radar echoes at this range are not refracted by the ionosphere.', '', 'Both reflect the same radar signal; the difference is only the Doppler shift.'],
  'm2-2d-29': ['The Ka band is the growing communication band, not the navigation one.', 'C band (6/4 GHz) is mainly for communication satellites.', 'Ku band (14/12 GHz) is mainly for communication satellites.', ''],
});
