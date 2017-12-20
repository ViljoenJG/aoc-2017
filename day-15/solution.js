function part1(input) {
  let genA = new Generator(16807, input.a);
  let genB = new Generator(48271, input.b);

  let matches = 0;

  for (let a=0; a<40000000; a++) {
    if (genA.getNextBinary().slice(-16) === genB.getNextBinary().slice(-16)) {
      matches++;
    }
  }

  return matches
}

function part2(input) {
  let genA = new Generator(16807, input.a);
  let genB = new Generator(48271, input.b);
  let matches = 0;

  for (let a=0; a<5000000; a++) {
    if (genA.nextQualifyingBinary16(4) === genB.nextQualifyingBinary16(8)) {
      matches++
    }
  }

  return matches;
}

function Generator(factor, startVal) {
  this.devisor = 2147483647;
  this.factor  = factor;
  this.previous = startVal;
};

Generator.prototype.getNext = function() {
  this.previous = (this.previous * this.factor) % this.devisor;
  return this.previous;
};

Generator.prototype.getNextBinary = function() {
  return this.getNext().toString(2).padStart(32, '0');
};

Generator.prototype.nextQualifyingBinary16 = function(qualifier) {
  while(this.getNext() % qualifier);
  return this.previous.toString(2).padStart(32, '0').slice(-16);
}

module.exports = {
  part1,
  part2
}
