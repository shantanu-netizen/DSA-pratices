function variable(num, k) {
    let left = 0
    let sum = 0
    let maxLen = 0
    for (let right = 0; right < num.length; right++){
        sum += num[right]
        while (sum > k) {
            sum -= num[left]
            left++
        }
        maxLen=Math.max(maxLen,right-left+1)
    }
    return maxLen
}