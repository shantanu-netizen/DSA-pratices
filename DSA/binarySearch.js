/*
function binary(arr, target) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
       let mid = Math.floor((start + end) / 2)
        if (target > arr[mid]) {
            start=mid+1   //2 half
        }
        else if (target < arr[mid]) {
             end=mid-1   //1 half
        }
        else {
            return mid
        }
    }
    return -1
}
let arr = [-1, 0, 3, 4, 9, 12]
let target = 0
console.log(binary(arr, target))
// TC: O(log(n)) because my opertions is half after calculated my mid
function recursive(arr, tar, start, end) {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (tar > arr[mid]) { // 2 half
      return recursive(arr, tar, mid + 1, end);
    } else if (tar < arr[mid]) { // 1 half
      return recursive(arr, tar, start, mid - 1);
    } else { // mid
        return mid
    }
  }
  return -1;
}
*/
// Recursive Method
function recursive(arr, tar, start, end) {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2)
     if (tar > arr[mid]) {
       return recursive(arr, tar, mid + 1, end);
     }
     if (tar < arr[mid]) {
       return recursive(arr, tar, start, mid-1);
     } else {
       return mid;
     }
  }
 return -1
}
let arr = [-1, 0, 3, 4, 9, 12];
let tar = 9;
console.log(recursive(arr, tar, 0, arr.length - 1));