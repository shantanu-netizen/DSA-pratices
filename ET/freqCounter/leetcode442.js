//442. Find All Duplicates in an Array
function duplicate(arr) {
  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  let res = [];
  for (let i = 1; i < arr.length; i++) {
    if (freq[i] == 2) {
      res.push(i);
      freq[i]--;
    }
  }
  return res;
}
let arr = [1, 1, 2];
console.log(duplicate(arr))