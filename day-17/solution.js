
function part1(input) {
  let arr = [0];
  let next = 0;

  for (let a=1; a<2018; a++) {
    next = (next + input) % arr.length;
    arr.splice(++next, 0, a);
  }

  const index = arr.indexOf(2017);
  return arr[(index + 1) % arr.length];
}

function part2(input) {
  let value;
  let next = 0;

  for (let a=1; a<50000001; a++) {
    next = (next + input) % a;
    if (next++ === 0) {
      value = a;
    }
  }

  return value;
}

module.exports = {
  part1,
  part2
}
