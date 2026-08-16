//442. find-all-duplicates-in-an-array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let n=nums.length
    let freq=new Array(n+1).fill(0)
    let res=[]
    for(let val of nums){
        freq[val]++
    }
    for(let i=0;i<freq.length;i++){
        if(freq[i]==2){
            res.push(i)
        }
    }
    return res
};
//448. Find All Numbers Disappeared in an Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n=nums.length
    let freq=new Array(n+1).fill(0)
    let res=[]
    for(let val of nums){
        freq[val]++
    }
    for(let i=1;i<freq.length;i++){
        if(freq[i]==0){
            res.push(i)
        }
    }
    return res
};
//2965. Find Missing and Repeated Values
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let n=grid.length
    let freq=new Array(n*n+1).fill(0)
    let res=[]
    for(let row of grid){
        for(let num of row){
            freq[num]++
        }
    }
    for(let i=1;i<freq.length;i++){
        if(freq[i]==2){
            res[0]=i
        }if(freq[i]==0){
            res[1]=i
        }
    }
    return res
};
//645. Set Mismatch
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n=nums.length
    let freq=new Array(n+1).fill(0)
    let res=[]
    for(let val of nums){
        freq[val]++
    }
    for(let i=1;i<freq.length;i++){
        if(freq[i]==2){
            res[0]=i
        }
        if(freq[i]==0){
            res[1]=i
        }
    }
    return res
};