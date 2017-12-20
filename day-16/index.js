const fs = require('fs');
const path = require('path');

const { part1, part2 } = require('./solution');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').trim();
const programs = String.fromCharCode(
  ...Array.from(Array(16).keys()
).map(x => x + 97));

// const programs = 'abcdefghijklmnop';

const solution1 = part1(programs, input);
console.log(`Day 16, Part 1: ${ solution1 }`);

const solution2 = part2(programs, input, 1000000000);
console.log(`Day 16, Part 2: ${ solution2 }`);
