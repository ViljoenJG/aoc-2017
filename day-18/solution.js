function getInstructions(input) {
  return input.split('\n').map(x => x.split(' '));
}

function part1(input) {
  let registers = {};
  let instructions = getInstructions(input);
  let recovered = 0;

  for (let a=0; a<instructions.length; ) {
    if (0 > a > instructions.length + 1) break;
    let ins = instructions[a][0],
        reg = instructions[a][1],
        val = Number.isNaN(Number(instructions[a][2])) ?
          registers[instructions[a][2]] : Number(instructions[a][2]);

    if (ins === 'set') registers[reg] = val;
    if (ins === 'add') registers[reg] += val;
    if (ins === 'mul') registers[reg] *= val;
    if (ins === 'mod') registers[reg] %= val;
    if (ins === 'jgz') a += registers[reg] > 0 ? val : 1;
    if (ins === 'rcv') {
      if (registers[reg] > 0) return recovered;
      registers[reg] = recovered;
    }
    if (ins === 'snd') recovered = registers[reg];
    if (ins !== 'jgz') a++;
  }

  return recovered;
}

function part2(input) {
  let instructions = getInstructions(input);
  let prog0 = new Program(0, instructions);
  let prog1 = new Program(1, instructions, prog0);

  while(true) {
    prog0.run();
    prog1.run();

    if (prog0.isLocked() && prog1.isLocked()) {
      break;
    }
  }

  return prog1.getSentCount();
}

function Program(id, instructions, link) {
  this._id = id;
  this._registers = { p: id };
  this._instructions = instructions;
  this._queue = [];
  this._idx = 0;
  this._sent = 0;
  this._locked = false;
  this._linked = null;

  if (link) {
    this.link(link);
  }
}

Program.prototype.isLocked = function() {
  return this._locked;
};

Program.prototype.link = function(program) {
  this._linked = program;
  program._linked = this;
};

Program.prototype.send = function(val) {
  this._linked._queue.push(val);
  this._sent++;
};

Program.prototype.getSentCount = function() {
  return this._sent;
};

Program.prototype.getValue = function (key) {
  let val = Number(key);
  return isNaN(val) ? this._registers[key] : val;
};

Program.prototype.run = function () {
  this._locked = true;

  while(0 <= this._idx < this._instructions.length) {
    const [ins, a, b] = this._instructions[this._idx];

    if (ins === 'set')
      this._registers[a] = this.getValue(b);
    if (ins === 'add')
      this._registers[a] += this.getValue(b);
    if (ins === 'mul')
      this._registers[a] *= this.getValue(b);
    if (ins === 'mod')
      this._registers[a] %= this.getValue(b);
    if (ins === 'jgz')
      this._idx += this.getValue(a) > 0 ? this.getValue(b) : 1;
    if (ins === 'snd')
      this.send(this.getValue(a));
    if (ins === 'rcv') {
      if (this._queue.length > 0) {
        this._registers[a] = this._queue.shift();
      } else {
        return;
      }
    }

    if (ins !== 'jgz') this._idx++;

    this._locked = false;
  }
};


module.exports = {
  part1,
  part2
};
