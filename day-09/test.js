const { part1, part2 } = require('./solution');

describe('Day 9', () => {
  describe('Part 1', () => {
    test('challenge example 1', () => {
      expect(part1('{}')).toBe(1);
    });

    test('challenge example 2', () => {
      expect(part1('{{{}}}')).toBe(6);
    })

    test('challenge example 3', () => {
      expect(part1('{{},{}}')).toBe(5);
    })

    test('challenge example 4', () => {
      expect(part1('{{{},{},{{}}}}')).toBe(16);
    })
  })
})
