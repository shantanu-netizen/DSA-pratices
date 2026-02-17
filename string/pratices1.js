function isPrime(nums) {
    if (nums <= 1)  return false
       
    
    for (let i = 2; i <= Math.sqrt(nums); i++){
        if (nums % i === 0)  return false
           
        
    }
    return true
}
console.log(isPrime(11)); // true
console.log(isPrime(4));  // false

function PrintConsecutive(n) {
    for (let i = 1; i <= n; i++){
        console.log(i)
    }
}
PrintConsecutive(8)

function sum(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++){
        sum+=arr[i]
    }
    return sum
}
console.log(sum([1, 2, 3, 4, 5]))

function evenAndodd(n) {
    let even = 0
    let odd = 0
    for (i = 0; i < n.length; i++){
        if (n[i] % 2 === 0) {
            even++
        } else {
            odd++
        }
    }
    return{even,odd}
}
console.log(evenAndodd([1, 2, 3, 4, 5]))

function reversed(num) {
    let reversed=''
    for (let i = num.length - 1; i >= 0; i--) {
        reversed+=num[i]
    }
    return reversed
}
console.log(reversed("hello")); // "olleh"
console.log(reversed("racecar")); // "racecar"

function uniqueIDs(patientIDs) {
    if (patientIDs.length === 0) return []
    let uniqueIDs = [patientIDs[0]]
    for (i = 1; i < patientIDs.length; i++) {
        if (patientIDs[i] !== patientIDs[i - 1]) {
            uniqueIDs.push(patientIDs[i])
        }
    }
    return uniqueIDs
}
const patientIDs = [101, 102, 102, 103, 104, 104, 105];
const uniquePatientIDs = uniqueIDs(patientIDs)
console.log("Unique patient IDs:", uniquePatientIDs);

function equillibrim(n, nums) {
    let totalsum = 0
    for (let val of nums) {
        totalsum+=val
    }
    leftsum = 0
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
console.log(equillibrim(n,nums))
