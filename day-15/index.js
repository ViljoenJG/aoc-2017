const fs = require('fs');
const path = require('path');

const { part1, part2 } = require('./solution');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
  .trim()
  .split('\n')
  .map(x =>
    x.replace('Generator ', '')
      .replace('starts with ', '')
      .split(' '))
  .reduce((acc, x) => {
    acc[x[0].toLowerCase()] = Number(x[1])
    return acc;
  },{});

const solution1 = part1(input);
console.log(`Day 15, Part 1: ${ solution1 }`);

const solution2 = part2(input);
console.log(`Day 15, Part 2: ${ solution2 }`);
