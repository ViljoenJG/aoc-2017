const { part1, part2 } = require('./solution');

const mockInput = `set a 1
add a 2
mul a a
mod a 5
snd a
set a 0
rcv a
jgz a -1
set a 1
jgz a -2`;

describe('Day 18', () => {
  test('Part 1', () => {
    expect(part1(mockInput)).toBe(4)
  })
})
