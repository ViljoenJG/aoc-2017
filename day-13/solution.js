function getScanners(input) {
  return input
    .split('\n')
    .reduce((acc, x) => {
      let [ depth, range ] = x.split(': ');
      acc.layers = Number(depth) > acc.layers
        ? Number(depth)
        : acc.layers;
      acc[depth] = Number(range);
      return acc;
    },
    { layers: 0 });
}

function part1(input) {
  const scanners = getScanners(input);
  const scanKeys = Object.keys(scanners).map(Number);
  let severity = 0;

  for (let tick = 0; tick <= scanners.layers; tick++) {
    if (scanKeys.includes(tick)) {
      // scanners[tick] * 2 - 2 represents the up and down movement of the scanner,
      // minus the edges since the scanner does not scan the edges twice (only spends one tick on each element)
      if (tick % (scanners[tick] * 2 - 2) === 0) {
        severity += tick * scanners[tick];
      }
    }
  }

  return severity;
}

function part2(input) {
  const scanners = getScanners(input);
  const scanKeys = Object.keys(scanners).map(Number);
  let isCaught = true;
  let delay = -1;

  while (isCaught) {
    delay++
    isCaught = false;
    for (let tick = 0; tick <= scanners.layers; tick++) {
      if (scanKeys.includes(tick)) {
        // scanners[tick] * 2 - 2 represents the up and down movement of the scanner,
        // minus the edges since the scanner does not scan the edges twice (only spends one tick on each element)
        if ((tick + delay) % (scanners[tick] * 2 - 2) === 0) {
          isCaught = true;
        }
      }
    }
  }

  return delay;
}

module.exports = {
  part1,
  part2
};
