
function equillibrim(n, nums) {
    totalsum = 0
    for (let val of nums) {
        totalsum+=val
    }
    let leftsum = 0
    for (let i = 0; i < n; i++){
        totalsum = totalsum - nums[i]
        if (totalsum == leftsum) {
            return i
        }
        leftsum+=nums[i]
    }
    return -1
}
let n=7;
let nums=[-7,1,5,2,-4,3,0]
console.log(equillibrim(n, nums))


