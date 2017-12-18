function part1(input) {
  // Clean input of ! escapes, and garbage
  input = input
   .replace(/!./g, '') // Remove ! escapes
   .replace(/<.*?>/g, '') // Remove garbage
   .replace(/{/g, '[') // Turn { into [
   .replace(/}/g, ']') // Turn } into ]

  // Return recursive score
  const score = (a, p) =>
    a.length ? a.reduce((ac, c) => ac + score(c, p + 1), p + 1) : p + 1;
  return score(eval(input), 0);
}

function part2(input) {
  return input
    .replace(/!./g, '')
    .match(/<.*?>/g)
    .reduce((c, v) => c + v.length - 2, 0)
}

module.exports = {
  part1,
  part2
};
