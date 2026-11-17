function binary(arr, tar) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] == tar) {
            return mid
        } else if (arr[mid] < tar) {
            start=mid+1
        } else {
            end=mid-1
        }
    }
    return -1
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let tar = 8
console.log(binary(arr,tar))