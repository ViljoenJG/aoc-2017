function getInstructions(input) {
  return input.split('\n').map(x => x.split(' '));
}

function getValue(reg, key) {
  let val = Number(key);
  return isNaN(val) ? reg[key] : val;
}

function part1(input) {
  let init = 'abcdefgh'
  let registers = init.split('').reduce((acc, x) => {
    acc[x] = 0;
    return acc
  },{});

  let instructions = getInstructions(input);
  let mulCalled = 0;

  for (let i=0; i<instructions.length; ) {
    let [ins, a, b] = instructions[i];

    if (ins === 'set') registers[a] = getValue(registers, b);
    if (ins === 'sub') registers[a] -= getValue(registers, b);
    if (ins === 'mul') registers[a] *= getValue(registers, b), mulCalled++;
    if (ins === 'jnz') i += getValue(registers, a) !== 0 ? getValue(registers, b) : 1;
    if (ins !== 'jnz') i++;
  }

  return mulCalled;
}

function part2(input) {
  let registers = {
    b: 67,
    c: 67,
    d: 0,
    f: 0,
    g: 0,
    h: 0
  }
  registers['b'] = registers['b'] * 100 + 100000
  registers['c'] = registers['b'] + 17000
  do {
    registers['f'] = 1
    registers['d'] = 2
    for (let d = registers['d']; d * d < registers['b']; ++d) {
      if (registers['b'] % d === 0) {
        registers['f'] = 0
        break
      }
    }
    if (registers['f'] === 0) registers['h']++
    registers['g'] = registers['b'] - registers['c']
    registers['b'] += 17
  } while (registers['g'] !== 0)

  return registers['h']
}


module.exports = {
  part1,
  part2
};
