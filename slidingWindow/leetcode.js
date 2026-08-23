//930. Binary Subarrays With Sum
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    return subcount(nums,goal)-subcount(nums,goal-1)
}
function subcount(nums,goal){
    let left=0
    let sum=0
    let ns=0
    for(let right=0;right<nums.length;right++){
        sum+=nums[right]
        while(sum>goal&&left<=right){
            sum-=nums[left]
            left++
        }
        ns+=right-left+1
    }
    return ns
}
//1248. Count Number of Nice Subarrays
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    for(let i=0;i<nums.length;i++){
        nums[i]=nums[i]%2
    }
 return subcount(nums, k) - subcount(nums, k - 1);
};

function subcount(nums, goal) {
    let left = 0;
    let sum = 0;
    let ns = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum > goal && left <= right) {
            sum -= nums[left];
            left++;
        }

        ns += right - left + 1;
    }

    return ns;
}
//2958. Length of Longest Subarray With at Most K Frequency
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let map=new Map()
    let start=0
    let maxSize=0
    for(let end=0;end<nums.length;end++){
        map.set(nums[end],(map.get(nums[end])||0)+1)
            while(map.get(nums[end])>k){
        map.set(nums[start],map.get(nums[start])-1)
        start++
    }
    maxSize=Math.max(maxSize,end-start+1)
    }
    return maxSize
};
//3. Longest Substring Without Repeating Characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
        let map = new Map();
        let start = 0;
        let maxSize = 0;

        for (let end = 0; end < s.length; end++) {

            while ((map.get(s[end]) || 0) === 1) {
                map.set(s[start], 0);
                start++;
            }

            map.set(s[end], 1);

            maxSize = Math.max(maxSize, end - start + 1);
        }

        return maxSize;
    }

