var programs = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`.split('\n').map(x => new Program(x));

var parents = programs
  .filter(x => x.programs.length > 0);

var usedParents = {}; // builds lookup used to find root;
parents.forEach(x => x.programs.forEach(n => usedParents[n] = true));

var rootProgram = programs.filter(x => !usedParents[x.name])
console.log(rootProgram);

function Program(inStr) {
  var arr = inStr.split(' ');
  this.name = arr[0];
  this.weight = Number(arr[1].replace(/[()]/g, ''));
  this.programs = arr.slice(3).map(x => x.replace(',', ''))
}
