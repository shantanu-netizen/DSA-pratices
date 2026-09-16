//2958. Length of Longest Subarray With at Most K Frequency
let freq = {};
let left = 0;
let maxLength = 0;

for (let right = 0; right < nums.length; right++) {
  freq[nums[right]] = (freq[nums[right]] || 0) + 1;

  while (freq[nums[right]] > k) {
    freq[nums[left]]--;
    left++;
  }

  maxLength = Math.max(maxLength, right - left + 1);
}

return maxLength;
