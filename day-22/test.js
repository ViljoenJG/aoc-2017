const {part1, part2} = require('./solution');

const mockInput = `..#
#..
...`

test('Part1', () => {
  expect(part1(mockInput)).toBe(5587)
});

test('Part 2', () => {
  expect(part2(mockInput)).toBe(2511944)
})
