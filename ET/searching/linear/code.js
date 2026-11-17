function linear(arr, tar) {
    for (let i = 0; i < arr.length-1; i++){
        if (arr[i] == tar) {
            return `${tar} is found in ${i} index`
        }
    }
    return `Element not found`
}
let arr = [9, 4, 2, 5, 3, 6, 2, 1, 0]
let tar = 3
console.log(linear(arr,tar))