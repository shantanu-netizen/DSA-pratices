function variable(nums, target) {
  let start = 0;
  let sum = 0;
  let maxWin = 0;
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    while (sum > target) {
      sum -= nums[start];
      start++;
    }
    maxWin = Math.max(maxWin, end - start + 1);
  }
  return maxWin;
}
let nums = [0, 1, 3, 9, 6, 4, 5, 1, 1, 1, 2, 3];
let target = 5;
console.log(variable(nums, target));