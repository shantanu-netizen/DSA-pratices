//Leetcode:219. Contains Duplicate II
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map=new Map()
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])&&i-map.get(nums[i])<=k){
            return true
        }else{
            map.set(nums[i],i)
        }
    }
    return false
};
//Leetcode: 3005. Count Elements With Maximum Frequency
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map=new Map()
    for(let val of nums){
        map.set(val,(map.get(val)||0)+1)
    }
    let max=0
    for(let freq of map.values()){
        max=Math.max(max,freq)
    }
    let sum=0
    for(let freq of map.values()){
        if(freq==max){
            sum+=freq
        }
    }
    return sum
};
//Leetcode: 169. Majority Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map =new Map()
    for(let val of nums){
        map.set(val,(map.get(val)||0)+1)
    }
    for(let key of map.keys()){
        let freq=map.get(key)
        if(freq>nums.length/2){
            return key
        }
    }
    return -1
};