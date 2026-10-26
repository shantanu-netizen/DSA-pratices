function max(arr, k) {
    let sum = 0
    let maxS = -Infinity
    for (let i = 0; i <= arr.length - k; i++){
        for (let j = i; j < k + i; j++){
            sum+=arr[j]
        }
        maxS = Math.max(maxS, sum)
        sum=0
    }
    return maxS
}
let arr = [6, 9, 3, 8, 4, -1, -6, 9, 9, 8]
let k=3
console.log(max(arr,k))