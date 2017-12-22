function getGrid(input) {
  return input.split('\n')
    .map(x => x.split('').map(x => x === '#' ? '#' : null));
}

function part1(input) {
  const [ up, right, down, left ] = [0,1,2,3];
  let grid = getGrid(input);

  let x = (grid.length - 1) / 2;
  let y = x;
  let dir = up;
  let infections = 0;

  for (let a=0; a<10000; a++) {
    grid[y] = grid[y] || [];

    if (grid[y][x] === '#') {
      dir = (dir + 1) % 4;
      grid[y][x] = null;
    } else {
      dir = (dir + 3) % 4;
      grid[y][x] = '#';
      infections++
    }

    if (dir === up) y--;
    if (dir === right) x++;
    if (dir === down) y++;
    if (dir === left) x--;
  }

  return infections;
}

function part2(input) {
  const [ up, right, down, left ] = [0,1,2,3];
  let grid = getGrid(input);

  let x = (grid.length - 1) / 2;
  let y = x;
  let dir = up;
  let infections = 0;

  for (let a=0; a<10000000; a++) {
    grid[y] = grid[y] || [];

    if (grid[y][x] === 'w') {
      grid[y][x] = '#';
      infections ++;
    } else if (grid[y][x] === '#') {
      dir = (dir + 1) % 4;
      grid[y][x] = 'f';
    } else if (grid[y][x] === 'f') {
      dir = (dir + 2) % 4;
      grid[y][x] = null;
    } else {
      dir = (dir + 3) % 4;
      grid[y][x] = 'w';
    }

    if (dir === up) y--;
    if (dir === right) x++;
    if (dir === down) y++;
    if (dir === left) x--;
  }
  
  return infections;
}

module.exports = {
  part1,
  part2
};
