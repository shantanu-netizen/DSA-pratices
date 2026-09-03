function Maximum(nums) {
    let currentSum = nums[0]
    let maxSum = nums[0]
    for (let i = 1; i < nums.length; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum=Math.max(maxSum,currentSum)
    }
    return maxSum
}
let nums = [5, 4, -1, 7, 8];
console.log(Maximum(nums))