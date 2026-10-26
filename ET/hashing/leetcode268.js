//268. Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let freq={}
    for(let n of nums){
        freq[n]=(freq[n]||0)+1
    }
    for(let i=0;i<=nums.length;i++){
        if(!freq[i]){
            return i
        }
    }
};