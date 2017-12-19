Array.prototype.uniquePush = function(item) {
  for (let a=0; a<this.length; a++) {
    if (item === this[a]) {
      return;
    }
  }

  this.push(item);
};

Array.prototype.inArray = function(item) {
  for (let a=0; a<this.length; a++) {
    if (item === this[a]) return true;
  }
  return false;
}

function getInputMap(input) {
  return input
    .split('\n')
    .map(x =>
      x.replace('<-> ', '')
        .split(' ')
    ).reduce((acc, x) => {
      acc[x[0]] =x.slice(1)
        .map(y => y.replace(',', ''));
      return acc;
    }, {});
}

function getGroupList(list, map, n, processed) {
  if (map[n] && !processed.inArray(n)) {
    processed.uniquePush(n);
    map[n].forEach(x => {
      list.uniquePush(x);
      list = getGroupList(list, map, x, processed);
    });
  }
  return list;
}

function part1(input) {
  let inputMap = getInputMap(input);
  let groupFor = '0'
  let groupList = getGroupList([groupFor], inputMap, groupFor, []);

  return groupList.length;
}

function part2(input) {
  return input;
}

module.exports = {
  part1,
  part2
};
