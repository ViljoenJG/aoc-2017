const { part1, part2 } = require('./solution');

const mockInput = {
  a:65,
  b:8921
};

describe('Day 15', () => {
  describe('Part 1', () => {
    test('Number 1', () => {
      expect(part1(mockInput)).toBe(588)
    })
  });

  describe('Part 2', () => {
    test('Number 1', () => {
      expect(part2(mockInput)).toBe(309)
    })
  });
})
