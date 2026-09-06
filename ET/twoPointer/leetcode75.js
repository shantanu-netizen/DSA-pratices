//75. Sort Colors
function sort(nums) {
    let n = nums.length
    for (let i = 0; i < n; i++){
        let small = i
        for (let j = i + 1; j < n; j++){
            if (nums[small]>nums[j]) {
                small=j
            }
        }
        let temp = nums[small]
        nums[small] = nums[i]
        nums[i]=temp
    }
}
let nums = [2, 0, 2, 1, 1, 0];
sort(nums);
console.log(nums)