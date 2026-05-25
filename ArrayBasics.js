//Pattern 1: Arrays (Basics)
/*
//Find the maximum element in an array
function max(arr) {
  if (arr.length == 0) {
    return console.log("arr is empty");
  }
  let n = arr.length;
  let max = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
let arr = [1, 2, 3, 8, 5];
max(arr);
console.log(max(arr));

//Find the minimum element in an array
function min(ar) {
  if (ar.length == 0) {
    console.log("ar is empty");
    }
    let n=ar.length
  let min = ar[0];
  for (let i = 1; i < n; i++) {
    if (ar[i] < min) {
      min = ar[i];
    }
  }
  return min;
}
let ar = [1, 2, 3, 8, 5];
min(arr);
console.log(min(ar));

//Sum of all elements in an array
function sum(arr) {
  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return sum;
}
let arr = [1, 2, 3, 4, 5];
sum(arr);
console.log(sum(arr));

//Check if the array is sorted
function sort(arr) {
  let n = arr.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    }
    return arr
}
let arr = [1, 2, 3, 8, 5];
sort(arr);
console.log(sort(arr));
*/

//Count even and odd numbers in the array
function count(arr) {
  let n = arr.length;
  let even = 0;
  let odd = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
    }
    return[[even],[odd]]
}
let arr = [1, 2, 3, 8, 5];
count(arr);
console.log(count(arr));