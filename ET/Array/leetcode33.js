//33. Search in Rotated Sorted Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let first=0
    let last=nums.length-1
    while(first<=last){
        let m=Math.floor((first+last)/2)
        if(target==nums[m]) return m
        if(nums[first]<=nums[m]){
           if(target>=nums[first]&&target<=nums[m]) last=m
        else first=m+1
        }
        else{
           if(target>=nums[m]&&target<=nums[last]) first=m+1
        else last=m
        }
    }
      return -1
};