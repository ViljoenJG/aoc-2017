const instructions = `0
3
0
1
-3`

let jumps = instructions.split('\n').map(x => Number(x));
let steps = 0;
let idx = 0;

while (jumps[idx] !== undefined) {
  let step = jumps[idx];
  jumps[idx]++;
  idx += step;
  steps++;
}

console.log(steps);
