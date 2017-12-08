let input = `5 9 2 8
9 4 7 3
3 8 6 5`;
const delim = ' '; // The example input uses spaces where the challenge input uses tabular characters.

let rows = input.split('\n');
let chksum = rows
    .map(row => {
      let rowData = row.split(delim).sort((a,b) => b - a);
      return rowData.reduce((acc, n) => {
        if (acc) return acc;
        return rowData.reduce((acc2, n2) => {
          if (acc2) return acc2;
          if (n !== n2) {
            return n % n2 === 0 ? n / n2 : acc2;
          }
          return acc2
        }, 0);
      }, 0);
    })
    .reduce((acc, n) => acc + n);

console.log(chksum);
