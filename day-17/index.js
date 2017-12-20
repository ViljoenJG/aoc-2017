const fs = require('fs');
const path = require('path');

const { part1, part2 } = require('./solution');

const input = 356;

const solution1 = part1(input);
console.log(`Day 17, Part 1: ${ solution1 }`);

const solution2 = part2(input);
console.log(`Day 17, Part 2: ${ solution2 }`);
