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