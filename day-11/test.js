const {part1, part2} = require('./solution');

describe('Day 11', () => {
  describe('Part 1', () => {
    test('example 1', () => {
      expect(part1('ne,ne,ne')).toBe(3);
    });
    test('example 2', () => {
      expect(part1('ne,ne,sw,sw')).toBe(0);
    });
    test('example 3', () => {
      expect(part1('ne,ne,s,s')).toBe(2);
    });
    test('example 4', () => {
      expect(part1('se,sw,se,sw,sw')).toBe(3);
    });
  })
})
