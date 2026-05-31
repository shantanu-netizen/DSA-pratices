//Find pair with given sum in a sorted array
function findPair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return "No Pair";
}
let arr = [1, 2, 3, 4, 6, 8, 9];
let target = 10;

console.log(findPair(arr, target));