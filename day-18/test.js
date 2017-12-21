const { part1, part2 } = require('./solution');

const mockInput1 = `set a 1
add a 2
mul a a
mod a 5
snd a
set a 0
rcv a
jgz a -1
set a 1
jgz a -2`;

const mockInput2 = `snd 1
snd 2
snd p
rcv a
rcv b
rcv c
rcv d`

describe('Day 18', () => {
  test('Part 1', () => {
    expect(part1(mockInput1)).toBe(4)
  });

  test('Part 2', () => {
    expect(part2(mockInput2)).toBe(3)
  });
})
