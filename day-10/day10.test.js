const { part1, part2 } = require('./solution');

describe('Day10', () => {
  describe('Part 1', () => {
    test('Example 1', () => {
      expect(part1(5, '3,4,1,5')).toBe(12);
    });
  });

  describe('Part 2', () => {
    test('Example 1', () => {
      expect(part2(256, '')).toBe('a2582a3a0e66e6e86e3812dcb672a272');
    });

    test('Example 2', () => {
      expect(part2(256, 'AoC 2017')).toBe('33efeb34ea91902bb2f59c9920caa6cd');
    });

    test('Example 3', () => {
      expect(part2(256, '1,2,3')).toBe('3efbe78a8d82f29979031a4aa0b16a9d');
    });

    test('Example 4', () => {
      expect(part2(256, '1,2,4')).toBe('63960835bcdc130f0b66d7ff4f6a5a8e');
    });
  })
});
