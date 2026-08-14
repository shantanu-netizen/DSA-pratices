//167. Two Sum II - Input Array Is Sorted
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
     let start=0
     let end=numbers.length-1
     while(start<end){
        let sum=numbers[start]+numbers[end]
        if(sum>target){
            end--
        }else if(sum<target){
            start++
        }else if (target==sum){
            return [start+1,end+1]
        }
     }
     return [-1,-1]
};