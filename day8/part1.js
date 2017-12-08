const input = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`;

// create multi-dimensional array
let rows = input.split('\n').map(row => row.split(' '));

// initialise every possible variable in the register to 0
let register = rows
  .reduce((acc, n) => {
    acc[n[0]] = 0;
    return acc;
  }, {});

// perform logic
rows.forEach((row) => {
  let condition = false;

  switch (row[5]) {
    case '>':
      if (register[row[4]] > Number(row[6])) condition = true;
      break;

    case '>=':
      if (register[row[4]] >= Number(row[6])) condition = true;
      break;

    case '<':
      if (register[row[4]] < Number(row[6])) condition = true;
      break;

    case '<=':
      if (register[row[4]] <= Number(row[6])) condition = true;
      break;

    case '==':
      if (register[row[4]] == Number(row[6])) condition = true;
      break;

    case '!=':
      if (register[row[4]] != Number(row[6])) condition = true;
      break;

    default:
      break;
  }

  if (condition) {
    register[row[0]] = row[1] === 'inc'
      ? register[row[0]] + (Number(row[2]))
      : register[row[0]] - (Number(row[2]));
  }
})

let result = Math.max(...Object.values(register));
console.log(result);
