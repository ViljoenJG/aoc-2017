let memoryBanks = `10	3	15	10	5	15	5	15	9	2	5	8	5	2	3	6`.split('\t').map(x => Number(x));
let configUsed = false;
let usedConfigs = {};
let cycles = 0;

while(!configUsed) {
  cycles++;
  let max = Math.max(...memoryBanks);
  let idx = memoryBanks.findIndex(x => x === max);
  memoryBanks[idx++] = 0;

  while(max) {
    if (!(idx < memoryBanks.length)) idx = 0;
    memoryBanks[idx++]++;
    max--;
  }

  if (usedConfigs[memoryBanks.join('')]) {
    configUsed = true;
  }
  usedConfigs[memoryBanks.join('')] = true;
}

console.log(cycles);
