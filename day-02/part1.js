let input = `5 1 9 5
7 5 3
2 4 6 8`;
const delim = ' '; // The example input uses spaces where the challenge input uses tabular characters.

let rows = input.split('\n');
let chksum = rows
    .map(row => Math.max(...row.split(delim)) - Math.min(...row.split(delim)))
    .reduce((acc, n) => acc + n);

console.log(chksum);
