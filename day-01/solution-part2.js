var inputs = ['1212', '1221', '123425', '123123', '12131415'];
var result = inputs.map(inverseCaptcha); // [ 6, 0, 4, 12, 4 ]

function inverseCaptcha(input) {
  var offset = input.length / 2;
  var inArr = `${input}${input}`.split('');
  var digits = [];

  for (let a=0; a<input.length; a++) {
    if (inArr[a] === inArr[a + offset]) {
      digits.push(inArr[a]);
    }
  }

  return digits
    .map(x => Number(x))
    .reduce((a,x) => a + x, 0);
}
