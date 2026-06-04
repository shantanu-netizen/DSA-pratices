/*
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

//Move all zeros to the end
function moveZero(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  return nums;
}
let nums = [0, 1, 0, 3, 12];
console.log(moveZero(nums));
*/
function duplicate(arr) {
  let seen = new Set();
  for (let num of arr) {
    if (seen.has[num]) {
      return true;
    }
    seen.add(num)
  }
  return false
}
console.log(duplicate([1, 2, 3, 4, 2]));
