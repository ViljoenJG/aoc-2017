const fs = require('fs');
const path = require('path');

const { part1, part2 } = require('./solution');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), {
  encoding: 'utf-8'
}).trim();

const solution1 = part1(input);
console.log(`Day 9 - part 1: ${ solution1 }`);
