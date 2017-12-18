const fs = require('fs');
const path = require('path');

const { part1, part2 } = require('./solution');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), {
  encoding: 'utf-8'
}).trim();

console.log(JSON.stringify(input))

const solution1 = part1(256, input)
console.log(`Day10, Part 1: ${ solution1 }`);
