/*
function lightweight(weights) {
    let minWeight = weights[0]
    for (i = 1; i < weights.length; i++){
        if (weights[i] < minWeight) {
            minWeight=weights[i]
        }
    }
    return minWeight
}
let weights = [50, 60, 45, 70, 30, 90]
let min = lightweight(weights)
console.log(min)
*/
/*
function heavyweight(weights) {
   let maxWeight = weights[0]
    for (i = 1; i < weights.length; i++){
        if (weights[i] > maxWeight) {
            maxWeight=weights[i]
        }
    }
    return maxWeight
}
let weights = [20, 45, 65, 42, 13]
let max = heavyweight(weights)
console.log(max)
*/
function reversePage(NumberPage) {
    left = 0
    right = NumberPage.length - 1
    while (left < right) {
        let temp = NumberPage[left]
        NumberPage[left] = NumberPage[right]
        NumberPage[right] = temp
        left++
        right--
    }
    return NumberPage
}
let page = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let reverse = reversePage(page)
console.log(reverse)

function secondsmallestandlargest(score) {
    let uniqScore = Array.from(new Set(score))
    uniqScore.sort((a, b) => a - b)
    let secondSmallest = uniqScore[1]
    let secondLargest = uniqScore[uniqScore.length - 2]
    
    return (secondSmallest,secondLargest)
}
let scores = [50, 20, 70, 90, 20, 100, 50]
let smallestlargest = secondsmallestandlargest(scores)
console.log(smallestlargest)
    
function medium(prices) {
    let n = prices.length
    if (n % 2 === 1) {
        return prices[Math.floor(n/2)]
    } else {
        let mid1 = prices[n / 2 - 1]
        let mid2 = prices[n / 2]
        return((mid1+mid2)/2)
    }
}
let price = [10, 20, 30, 40, 50]
let mid = medium(price)
console.log(mid)

