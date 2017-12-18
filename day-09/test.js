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
  });

  describe('Part 2', () => {
    test('example 1', () => {
      expect(part2('<>')).toBe(0);
    });

    test('example 2', () => {
      expect(part2('<random characters>')).toBe(17);
    });

    test('example 3', () => {
      expect(part2('<<<<>')).toBe(3);
    });

    test('example 4', () => {
      expect(part2('<{!>}>')).toBe(2);
    });

    test('example 5', () => {
      expect(part2('<{o"i!a,<{i<a>')).toBe(10);
    });
  })
})
