const fs = require('fs');
const path = require('path');

const { solution } = require('./solution');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').trim();

const solution1 = solution(input, 5);
console.log(`Day 21, Part 1: ${ solution1 }`);

const solution2 = solution(input, 18);
console.log(`Day 21, Part 2: ${ solution2 }`);
