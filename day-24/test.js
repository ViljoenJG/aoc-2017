const {part1, part2} = require('./solution')

const mockInput = `0/2
2/2
2/3
3/4
3/5
0/1
10/1
9/10`

test('Part 1', () => {
  expect(part1(mockInput)).toBe(31)
})
