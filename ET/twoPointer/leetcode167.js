//167. Two Sum II - Input Array Is Sorted
function two(n, tar) {
  let start = 0;
  let end = n.length - 1;
  while (start < end) {
    let sum = n[start] + n[end];
    if (sum > tar) {
      end--;
    } else if (sum < tar) {
      start++;
    } else if (sum == tar) {
      return [start + 1, end + 1];
    }
  }
  return [-1, -1];
}
let n = [2, 7, 11, 15];
let tar = 9;
console.log(two(n, tar));
