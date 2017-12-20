const { part1, part2 } = require('./solution');

const mockInput = `0: 3
1: 2
4: 4
6: 4`;

describe('Day 13', () => {
  describe('Part 1', () => {
    test('Example 1', () => {
      expect(part1(mockInput)).toBe(24);
    })
  });

  describe('Part 2', () => {
    test('Example 1', () => {
      expect(part2(mockInput)).toBe(10);
    })
  })
})
