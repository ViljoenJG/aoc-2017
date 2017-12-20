const { part1, part2 } = require('./solution');

describe('Day 16', () => {
  describe('Part 1', () => {
    test('Input: s1', () => {
      expect(part1('abcde', 's1')).toBe('eabcd')
    });

    test('Input: x3/4', () => {
      expect(part1('eabcd', 'x3/4')).toBe('eabdc')
    });

    test('Input: pe/b', () => {
      expect(part1('eabdc', 'pe/b')).toBe('baedc')
    });

    test('Input: s1,x3/4,pe/b', () => {
      expect(part1('abcde', 's1,x3/4,pe/b')).toBe('baedc')
    });
  });
})
