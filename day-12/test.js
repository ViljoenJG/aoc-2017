const { part1, part2 } = require('./solution');

const dummyInput1 = `0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5`

describe('Day 12', () => {
  describe('Part 1', () => {
    test('Example 1', () => {
      expect(part1(dummyInput1)).toBe(6)
    });
  });
});
