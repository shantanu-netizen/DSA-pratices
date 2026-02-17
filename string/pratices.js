/*
function lightweight(weights) {
    minWeight = weights[0]
    for (i = 1; i < weights.length; i++){
        if (weights[i] < minWeight) {
            minWeight=weights[i]
        }
    }
    return minWeight
}
let weights = [1, 2, 3, 4, 5, -7, 9]
let minimum = lightweight(weights)
console.log(minimum)


function maxTem(temps) {
    maxTem = temps[0]
    for (i = 1; i < temps.length; i++){
        if (temps[i] > maxTem) {
            maxTem=temps[i]
        }
    }
    return maxTem
}
let temps = [2, 4, 5, 7, 8, 9, -2, -1]
let max = maxTem(temps)
console.log

function isPalindrome(num) {
    let s =num.toString()
    let left = 0
    let right = s.length - 1
     while(left<right){
        if (s[left]!==s[right]) {
            return "NO"
        }
        left++
        right--
    }
    return "YES"
}
let num = 12321
let Palindrome = isPalindrome(num)
console.log(Palindrome)
*/

function secondsmallestandlargest(scores) {
    let uniqueScore = Array.from(new Set(scores))
    uniqueScore.sort((a, b) => a - b)
    let secondsmallest = uniqueScore[1]
    let secondlargest = uniqueScore[uniqueScore.length - 2]
    return {secondsmallest,secondlargest}
}
let scores = [50, 20, 70, 90, 20, 100, 50];
let { secondsmallest, secondlargest } = secondsmallestandlargest(scores)
console.log({ secondsmallest, secondlargest })

function rotate(n, k, nums) {
    for (i = 0; i < k; i++){
        let ele = nums.shift()
        nums.push(ele)
    }
    return nums
}
console.log(rotate(5,2,[10,20,30 ,40 ,50] ))

function evenAndodd(prices) {
    let n = prices.length
    if (n % 2 === 1) {
        return prices[Math.floor(n/2)]
    } else {
        let mid1 = prices[n / 2 - 1]
        let mid2 = prices[n / 2]
        return ((mid1+mid2)/2)
    }
}
let prices = [10, 20, 30, 40, 60 ]
let evenandodd = evenAndodd(prices)
console.log(evenandodd)

function unique(patientIDs) {
    if (patientIDs.length === 0) return []
        let uniquePatientids = [patientIDs[0]]
        for (i = 1; i,i< patientIDs.length; i++){
            if (patientIDs[i] !== patientIDs[i - 1]) {
                uniquePatientids.push(patientIDs[i])
            }
    }
    return uniquePatientids
}
let patientIDs = [101, 102, 102, 103, 104, 104, 105];
let ids = unique(patientIDs)
console.log(ids)

function consecutive(n){
    for (i = 1; i <= n; i++){
        console.log(i)
    }
}
consecutive(5)
function evenORodd(arr) {
    let even = 0
    let odd = 0
    for (i = 1; i < arr.length; i++){
        if (i % 2 === 0) {
            even++
        } else {
            odd++
        }
    }
    return{even,odd}
}
console.log(evenORodd([1, 2, 3, 4, 5]))


function maximum(arr) {
    if (arr.length === 0) return "NULL"
    max = arr[0]
    for (i = 1; i < arr.length; i++){
        if (arr[i] > max) {
            max=arr[i]
        }
    }
    return max
}
console.log(maximum([3, 5, 7, 2, 8])); // 8
console.log(maximum([])); // null
