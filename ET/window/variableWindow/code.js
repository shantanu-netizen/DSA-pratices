function variable(num, k) {
    let left = 0
    let sum = 0
    let maxWin = 0
    for (let right = 0; right < num.length; right++){
        sum += num[right]
        while (sum > k) {
            sum -= num[left]
            left++
        }
        if (sum == k) {
            let newWin=right-left+1
            maxWin = Math.max(maxWin, newWin);
        }
    }
    return maxWin
}
let num = [2, 3, 4, 5, 1, 1, 1, 1, 2, 7]
let k = 5
console.log(variable(num,k))