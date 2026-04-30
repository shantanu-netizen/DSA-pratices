/*
function bubble(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++){
        for (let j = 0; j < n - 1 - i; j++){
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1]=temp
            }
        }
    }
}
let arr = [1, 2, 3, 4, 5, 6]
bubble(arr)
console.log(arr)
*/
function selection(arr) {
    let n = arr.length
    for (let i = 0; i < n; i++){
        small = i
        for (let j = i + 1; j < n; j++){
            if (arr[small] > arr[j]) {
                small=j
            }    
        }
        let temp = arr[small]
        arr[small] = arr[i]
        arr[i]=temp
    }
}
let arr = [6, 5, 5, 4, 3, 2, 1]
selection(arr)
console.log(arr)