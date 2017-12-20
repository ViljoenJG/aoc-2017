
function dance(list, instruction) {
  let move = instruction[0];
  let rest = instruction.slice(1);

  if (move === 's') {
    let i = Number(rest);
    list = list.slice(-i).concat(list.slice(0, -i));

  } else if (move === 'x') {
    let [ i1, i2 ] = rest.split('/').map(Number);
    [ list[i1], list[i2] ] = [ list[i2], list[i1] ];

  } else if (move === 'p') {
    let [name1, name2] = rest.split('/');
    let [idx1, idx2] = [list.indexOf(name1), list.indexOf(name2)];
    [ list[idx1], list[idx2] ] = [ list[idx2], list[idx1] ];
  }

  return list
}

function part1(programs, input) {
  let list = programs.split('');
  return input
    .split(',')
    .reduce((acc, x) => dance(acc, x), list)
    .join('')
}

function part2(programs, input, rounds) {
  let orig = programs.slice(0);
  let seen = [orig];
  for (let a=0; a<rounds; a++) {
    programs = part1(programs, input);
    if (programs === orig) {
      return seen[rounds % (a+1)];
    } else {
      seen.push(programs);
    }
  }

  return programs;
}

module.exports = {
  part1,
  part2
}
