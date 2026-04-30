//Check if a given number is prime or not. 
function isPrime(n) {
    if (n <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % 2 === 0) {
            return false
        }
    }
    return true
}
let n = 4
isPrime(n)
console.log(isPrime(n))

//Find the maximum element in an array
function max(arr) {
    if (arr.length === 0) {
        return "empty array"
    }
    let max = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max=arr[i]
        }
    }
     return max;
}
let arr = [6, 2, 3, 4, 5]
max(arr)
console.log(max(arr))

//Sum of all elements in an array
function sum(a) {
    let n = a.length
    let sum =0
    for (let i = 0; i < n; i++){
        sum+=arr[i]
    }
    return sum
}
let a = [6, 2, 3, 4, 5];
sum(a)
console.log(sum(a))

//Count even and odd numbers in the array
function count(num) {
    let n = num.length
    let even = 0
    let odd=0
    for (let i = 0; i < n; i++){
        if (num[i] % 2 === 0) {
            even++
        } else {
            odd++
        }
    }
    return {
        even,odd
    }
}
let num = [10, 15, 20, 25, 30, 35, 40];
count(num)
console.log(count(num))

//Remove all spaces from a string
function space(str) {
    let result = ""
    for (let i = 0; i < str.length; i++){
        if (str[i] != " ") {
            result+=str[i]
        }
    }
    return result
}
let str = "Hello World JavaScript";
console.log(space(str))

//Convert lowercase to uppercase and vice versa
function handle(s){
    let result = ""
    for (let i = 0; i < s.length; i++){
        let char = str[i]
        if (char >= 'a' && char <= 'z') {
            result+=char.toUpperCase()
        } else if (char >= 'A' && char <= 'Z') {
            result+=char.toLowerCase()
        } else {
             result+=char
        }
    }
    return result
}
let s = "Hello WoRLd";
console.log(handle(s))
  
function remove(nums) {
    let n = nums.length
    let result=[]
    for (let i = 0; i < n; i++){
        let found = false
        for (let j = 1; j < result.length; j++){
            if (nums[i] == result[j]) {
                found = true
                break
            }
        }
        if (!found) {
            result.push(nums[i])
        }
    }
    return result
}
console.log(remove([4, 5, 5, 2, 1, 7,7]));