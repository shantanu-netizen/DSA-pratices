//Check if a string is a palindrome
function ispalindrome(str) {
    let end = str.length-1
    let start = 0
    while (start < end) {
        if (str[start] != str[end]) {
            return false
        } else {
            return true
        }
    }
}
let str = "bob"
ispalindrome(str)
console.log(ispalindrome(str))

//Find the maximum element in an array
function maximum(arr) {
    if (arr.length === 0) {
        return false
    }
    let n = arr.length
    let max = arr[0]
    for (let i = 0; i < n; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}
let arr = []
maximum(arr)
console.log(maximum(arr))

//Sum of all elements in an array
function sum(num) {
    let n = num.length
    let sum = 0
    for (let i = 0; i < n; i++){
        sum+=num[i]
    }
    return sum
}
let num = [1, 2, 3, 4]
sum(num)
console.log(sum(num));

//Count even and odd numbers in the array
function count(nums) {
    let n = nums.length
    let even = 0
    let odd=0
    for (let i = 0; i < n; i++){
        if (nums[i] % 2 === 0) {
            even++
        } else {
            odd++
        }
    }
    return {
      even,
      odd
    };
}
let nums = [1, 2, 3, 4,5,6]
count(nums)
console.log(count(nums));

//Remove all spaces from a string
function space(s) {
    let result = ""
    for (let i = 0; i < s.length; i++) {
      if (s[i] != " ") {
        result += s[i];
      }
    }
    return result
}
let s = "Hello World JavaScript";
console.log(space(s))

//Binary Search
function binary(ar, tar, start, end) {
    if (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (tar > ar[mid]) {
          return binary(ar, tar, mid + 1, end);
        } else if (tar < ar[mid]) {
          return binary(ar, tar, start, mid - 1);
        } else {
          return mid;
        }
    }
    
    return -1
}
let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let tar = 6
console.log(binary(ar,tar,0,ar.length-1))