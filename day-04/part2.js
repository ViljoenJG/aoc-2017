let input = `abcde fghij
abcde xyz ecdab
a ab abc abd abf abj
iiii oiii ooii oooi oooo
oiii ioii iioi iiio`

let result = input
  .split('\n')
  .reduce((acc, line) =>
    isPassphraseValid(line) ? ++acc : acc,
  0);

console.log(result);

function isPassphraseValid(input) {
  const data = input.split(' ');
  let usedWordHash = {};

  for (var a=0; a<data.length; a++) {
    if (usedWordHash[data[a]]) return false;
    usedWordHash[data[a]] = true;

    for (var b=0; b<data.length; b++) {
      if (a === b) continue;
      if (isAnagram(data[a], data[b])) return false;
    }
  }

  return true;
}

function isAnagram(w1, w2) {
  let sorted1 = w1.split('').sort();
  let sorted2 = w2.split('').sort();

  return sorted1.join('') === sorted2.join('');
}
