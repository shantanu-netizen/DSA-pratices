
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
   let freq = {}
    for (let row of grid) {
        for (let num of row) {
            freq[num]=(freq[num]||0)+1
        }
    }
    let res = []
    let n = grid.length;
    for (let i = 1; i <= n*n; i++){
        if (freq[i] == 2) {
            res[0]=i
        } if (!freq[i]) {
            res[1]=i
        }
    }
    return res
};
let grid = [
  [1, 3],
  [2, 2],
];
console.log(findMissingAndRepeatedValues(grid));