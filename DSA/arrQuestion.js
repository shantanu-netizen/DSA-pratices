/*
function sum(arr, tar) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = arr[i] + arr[j];
      if (sum === tar) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}
let arr = [5, 2, 11, 7, 15];
let tar = 9;
console.log(sum(arr, tar));
*/
function threeSum(arr, tar) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = i + 2; k < n; k++) {
          let sum = arr[i] + arr[j]+arr[k];
        if (sum === tar) {
          return [i, j, k];
        }
      }
    }
  }
  return null;
}
let arr = [-1, 0, 1, 2, -1,1];
let tar = 0;
console.log(threeSum(arr, tar));