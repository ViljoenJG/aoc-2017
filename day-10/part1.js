var input = `3,4,1,5`;

function hash(len, input) {
  let list = [...Array(len).keys()];
  let i = 0; // position
  let skip = 0;

  input.map(Number)
    .forEach(x => {
      let tmpArr = [];
      for (let a=0; a < x; a++) {
        tmpArr.push(list[(a + i) % len])
      }

      tmpArr
        .reverse()
        .forEach((val, idx) => (list[(idx + i) % len] = val));
      i += x + skip++;
    });

  return list;
}

function part1(len, inStr) {
  const hashResult = hash(len, inStr.split(','));
  return hashResult[0] * hashResult[1];
}

console.log(part1(5, input))
