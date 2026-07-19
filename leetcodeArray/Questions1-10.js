//Leetcode 53 Maximum Subarray
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};
//Leetcode 33 Search in Rotated Sorted Array
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Right half is sorted
    else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
//Leetcode 414 Third Maximum Number
var thirdMax = function(nums) {
    
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for (let num of nums) {

        // Ignore duplicates
        if (num === first || num === second || num === third) {
            continue;
        }

        if (num > first) {

            third = second;
            second = first;
            first = num;

        } else if (num > second) {

            third = second;
            second = num;

        } else if (num > third) {

            third = num;
        }
    }

    return third === -Infinity ? first : third;
};