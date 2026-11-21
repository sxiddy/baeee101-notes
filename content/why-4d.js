// Why each wrong option is wrong, per question id. Index order matches the options; the correct one is ''.
WHY({
  'm4-4d-01': ['0 DoF would be a structure, but the four-bar linkage can move.', '2 DoF would need two inputs; the crank alone drives a four-bar linkage.', '', '3 DoF comes from forgetting to subtract 2 for each of the four revolute pairs.'],
  'm4-4d-04': ['Completely constrained motion is restricted to one direction by the pair itself, not by a spring.', 'Incompletely constrained motion can happen in more than one direction.', 'Unconstrained motion is not limited at all, but the spring holds the valve.', ''],
  'm4-4d-06': ['', 'A revolute pair allows rotation about one axis only.', 'A cylindrical pair allows rotation and sliding along one axis, 2 DoF.', 'A screw pair couples rotation with translation, giving 1 DoF.'],
});
