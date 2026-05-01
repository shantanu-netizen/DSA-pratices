function findsmallest(weights) {
    let minWeight = weights[0]
    for (i = 0; i < weights.length; i++){
        if (weights[i] < minWeight) {
            minWeight = weights[i]
            
        }
    }
    return minWeight
}
let weight = [450, 200, 350, 150, 400]
let smallest = findsmallest(weight)
console.log(smallest)

function findlargest(nums) {
    let largest = nums[0]
    for (i = 1; i < nums.length; i++){
        if (nums[i] > largest) {
            largest=nums[i]
        }
    }
    return largest
}
let num = [450, 200, 350, 150, 400]
let large = findlargest(num)
console.log(large)

function reverse(nums) {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        left++
        right--
    }
    return nums
}
let num1 = [450, 200, 350, 150, 400]
let reverse1 = reverse(num1)
console.log(reverse1)

function isPalindrome(n) {
    let s = n.toString()
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (s[left] != s[right]) {
            return "NO Palindrome"
        }
        left++
        right--
    }
     return "YES Palindrome"
}
let number = 12321
let p = isPalindrome(number)
console.log(p)

function uniqScore(score) {
    let uniqScore = Array.from(new Set(score))
       uniqScore.sort((a,b)=>a-b)
        let uniqsmall = uniqScore[1]
        let uniqlarge=uniqScore[score.length-2]
    
    return(uniqsmall,uniqlarge)
}
let num2 = [450, 200, 350, 150, 400]
let uniqsmall,uniqlarge = uniqScore(num2)
console.log(uniqsmall, uniqlarge)

function removeduplicate(ids) {
    const seen = new Set()
    const result = []
    for (const id of ids) {
        if (!seen.has(id)) {
            seen.add(id)
            result.push(id)
        }
   }
            return result
 }
const ids = [101, 202, 303, 101, 404, 202, 505];
const rotate = removeduplicate(ids)
console.log(rotate)

function removeDuplicates(userIDs) {
    let seen = new Set();
    let result = [];
    for (let id of userIDs) {
        if (!seen.has(id)) {
            seen.add(id);
            result.push(id);
        }
    }
    return result;
}
    

// Example usage:
let userIDs = [101, 202, 303, 101, 404, 202, 505];
let uniqueUserIDs = removeDuplicates(userIDs);
console.log(uniqueUserIDs);
/* 
Question 16: 
A stock market analyst is evaluating a stock’s performance over multiple days. They want to find a continuous period with the maximum product of stock prices.
Input:
First line contains an integer N (1 ≤ N ≤ 1000).
Second line contains N space-separated integers representing stock prices.
Output:
Print the maximum product that can be obtained from a contiguous subarray.

*/
function maxProduct(n, nums){
    let maxP=nums[0];
    let totalP=nums[0];
    for(let i=1;i<n;i++){
        if(totalP==0){
            totalP=1;
        }
        totalP=totalP*nums[i];
        maxP=Math.max(maxP,totalP);
    }
    return maxP;
}
let n=5;
let nums=[6,-3,-10,0,200]
console.log(maxProduct(n,nums))