

function findLightestParcel(weights) {
    let minWeight = weights[0];
    for (let i = 1; i < weights.length; i++) {
        if (weights[i] < minWeight) {
            minWeight = weights[i];
        }
    }
    return minWeight;
}

// Example usage:
const parcelWeights = [450, 200, 350, 150, 400];
const lightestParcel = findLightestParcel(parcelWeights);
console.log("The lightest parcel weight is:", lightestParcel);




function parcel(weights){
    let minWeight = weights[0]
    for (let i = 1; i < weights.length; i++){
        if (weights[i] < minWeight) {
            minWeight=weights[i]
        }
    }
    return minWeight
}
let weights = [450, 200, 350, 150, 40]
let m = parcel(weights)
console.log(m)

function maximum(val) {
    let maxVal = val[0]
    for (let i = 1; i < val.length; i++){
        if (val[i] > maxVal) {
            maxVal=val[i]
        }
    }
    return maxVal
}
let val = [450, 200, 350, 150, 40]
let max = maximum(val)
console.log(max)

function reversed(page) {
    let left = 0
    let right = page.length - 1
    while (left < right) {
        let temp = page[left]
        page[left] = page[right]
        page[right] = temp
        left++
        right--
    }
    return page
}
let page = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let reverse = reversed(page)
console.log(reverse)

function isPalindrome(n) {
    let s = n.toString()
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (s[left] != s[right]) {
            return "no"
        }
        left++
        right--
    }
    return "yes"
}
let n = 12321
let Palindrome=isPalindrome(n)
console.log(Palindrome)

function secondLargestandsecondsmallest(nums) {
    let uniqnums = Array.from(new Set(nums))
    uniqnums.sort((a, b) => a - b)
    let seconduniqsmall = uniqnums[1]
    let seconduniqlarge = uniqnums[uniqnums.length - 2]
    return {seconduniqsmall, seconduniqlarge}
}
let num = [50, 20, 70, 90, 20, 100, 50];
let result = secondLargestandsecondsmallest(num)
console.log(result)

function rotate(n, k, nums) {
    for (i = 0; i < k; i++) {
        let ele = nums.shift()
        nums.push(ele)
    }
    return nums
}

function evenandodd(vals) {
    let k = vals.length
    if (k % 2 === 1) {
        return vals[Math.floor(k / 2)]
    } else {
        let mid1 = vals[(k / 2) - 1]
        let mid2 = vals[k / 2]
        return (mid1 + mid2) / 2
    }
}
let vals = [1, 2, 3, 4, 5]
let mid = evenandodd(vals)

console.log(mid)

function uniqIDs(patientIds) {
    if (patientIds.length === 0) return []
    let uniqIDs = [patientIds[0]]
    for (i = 1; i < patientIds.length; i++){
        if (patientIds[i] !== patientIds[i - 1]) {
            uniqIDs.push(patientIds[i])
        }
    }
    return uniqIDs
}
let patientIds = [101, 102, 102, 103, 104, 104, 105];
let ids = uniqIDs(patientIds)
console.log(ids)

function maxProduct(n, nums) {
    let maxP = 0
    let totalp = 0
    for (i = 1; i < n; i++){
        if (totalp == 0) {
            totalp=1
        }
        totalp = totalp * nums[i]
        maxP=Math.max(maxP,totalp)
    }
    return maxP
}
let n1=5;
let nums=[6,-3,-10,0,200]
console.log(maxProduct(n1, nums))

function seen(ids) {
    let seen = new Set()
    let result = []
    for (let id of ids) {
        if (!seen.has(id)) {
            seen.add(id)
            result.push(id)
        }
    }
    return result
}
let ids1 = [101, 202, 303, 101, 404, 202, 505];
let uniqueUserIDs = seen(ids1);
console.log(uniqueUserIDs);