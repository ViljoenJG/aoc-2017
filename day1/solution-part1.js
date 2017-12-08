var inputs = ['1122', '1111', '1234', '91212129']
var result = inputs.map(inverseCaptcha); // [ 3, 4, 0, 9 ]

function inverseCaptcha(input) {
  var inArr = `${input}${input.toString()[0]}`.split('');
  var digits = inArr.reduce((acc, n, i) => {
    if (i < inArr.length && n === inArr[i+1]) {
      acc.push(n);
    }
    return acc;
  }, []);

  return digits
    .map(x => Number(x))
    .reduce((a,x) => a + x, 0);
}
