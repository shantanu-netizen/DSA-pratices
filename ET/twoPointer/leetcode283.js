//283. Move Zeroes
function move(nums) {
    let index = 0
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== 0) {
            nums[index] = nums[i]
            index++
        }
    }
    while (index < nums.length) {
        nums[index] = 0
        index++
    }
    return nums
}
let nums = [0, 1, 0, 3, 12];
console.log(move(nums))