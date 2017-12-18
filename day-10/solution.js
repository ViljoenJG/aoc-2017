var input = `3,4,1,5`;

function hash(list, input, position, skip) {
  const len = list.length;
  position = position || 0;
  skip = skip || 0;

  input.map(Number)
    .forEach(x => {
      let tmpArr = [];
      for (let a=0; a < x; a++) {
        tmpArr.push(list[(a + position) % len])
      }

      tmpArr
        .reverse()
        .forEach((val, idx) => (list[(idx + position) % len] = val));
      position += x + skip++;
    });

  return [ list, position, skip ];
}

function part1(len, inStr) {
  const [ list ] = hash([...Array(len).keys()], inStr.split(','));
  return list[0] * list[1];
}

function part2(l, n) {
  n = n.split('').map(v => v.charCodeAt(0)) // Get ASCII values from input
  n.push(17, 31, 73, 47, 23) // Add the pre-defined salt values
  let list = [...Array(l).keys()]
  let skip = 0,
      i = 0;
  // 64 Rounds of hashing
  for (let k = 0; k < 64; ++k) {
    [ list, i, skip ] = hash(list, n, i, skip);
  }
  let dense = []
  // XOR the list in chunks of 16 values
  for (let i = 0; i < list.length; i += 16)
    dense.push(list.slice(i, i + 16).reduce((xor, cur) => xor ^ cur));
  return dense.map(n => ('00' + n.toString(16)).substr(-2)).join(''); // Return joined hash
}

module.exports = {
  part1,
  part2
};
