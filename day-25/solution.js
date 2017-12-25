
function turing(rounds) {
  let state = 'A'
  let tape = []
  let i = 25000000; // attempt at an infinitely large tape

  while (rounds--) {
    if (tape[i] === undefined) tape[i] = 0;

    switch (state) {
      case 'A':
        if (tape[i] === 0) {
          tape[i] = 1;
          i++;
          state = 'B';
        } else {
          tape[i] = 0;
          i--;
          state = 'B';
        }
        break;

      case 'B':
        if (tape[i] === 0) {
          tape[i] = 0;
          i++;
          state = 'C';
        } else {
          tape[i] = 1;
          i--;
          state = 'B';
        }
        break;

      case 'C':
        if (tape[i] === 0) {
          tape[i] = 1;
          i++;
          state = 'D'
        } else {
          tape[i] = 0;
          i--;
          state = 'A'
        }
        break;

      case 'D':
        if (tape[i] === 0) {
          tape[i] = 1;
          i--;
          state = 'E'
        } else {
          tape[i] = 1;
          i--;
          state = 'F'
        }
        break;

      case 'E':
        if (tape[i] === 0) {
          tape[i] = 1;
          i--;
          state = 'A'
        } else {
          tape[i] = 0;
          i--;
          state = 'D'
        }
        break;

      case 'F':
        if (tape[i] === 0) {
          tape[i] = 1;
          i++;
          state = 'A'
        } else {
          tape[i] = 1;
          i--;
          state = 'E'
        }
        break;
    }
  }

  return tape.filter(x => !!x).length;
}

const solution1 = turing(12629077);
console.log(`Day 25 part 1: ${ solution1 }`)
