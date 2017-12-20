function getInstructions(input) {
  return input
    .split('\n')
    .map(x =>
      x.split(' '));
}

function part1(input) {
  let registers = {};
  let instructions = getInstructions(input);
  let recovered = -1;

  for (let a=0; a<instructions.length; ) {
    if (0 > a > instructions.length + 1) break;
    let ins = instructions[a][0],
        reg = instructions[a][1],
        val = Number.isNaN(Number(instructions[a][2])) ?
          registers[instructions[a][2]] : Number(instructions[a][2]);

    if (ins === 'set')
      registers[reg] = val;
    else if (ins === 'add')
      registers[reg] += val;
    else if (ins === 'mul')
      registers[reg] *= val;
    else if (ins === 'mod')
      registers[reg] %= val;
    else if (ins === 'rcv') {
      if (registers[reg] > 0) return recovered;
      registers[reg] = recovered;
    }
    else if (ins === 'jgz')
      a += registers[reg] > 0 ? val : 1;
    else if (ins === 'snd')
      recovered = registers[reg];

    if (ins !== 'jgz') a++;
  }

  return recovered;
}

function part2(input) {

}

module.exports = {
  part1,
  part2
};
