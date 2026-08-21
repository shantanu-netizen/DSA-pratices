function fixed(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let minSum = sum;
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    minSum = Math.min(sum, minSum);
  }
  return minSum;
}
let nums = [6, 9, 18, 2, 17, 19];
let k = 3;
fixed(nums, k);
console.log(fixed(nums, k));
