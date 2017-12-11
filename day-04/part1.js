let input = `aa bb cc dd ee
aa bb cc dd aa
aa bb cc dd aaa`

let result = input
  .split('\n')
  .reduce((acc, line) =>
    isPassphraseValid(line) ? ++acc : acc,
  0);

console.log(result); // 2

function isPassphraseValid(input) {
  const data = input.split(' ');
  let usedWordHash = {};

  for (var a=0; a<data.length; a++) {
    if (usedWordHash[data[a]]) {
      return false;
    }

    usedWordHash[data[a]] = true;
  }

  return true;
}
