/*// Linear Search (search an element in an array)
function linear(arr, tar) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === tar) {
      return i;
    }
  }
  return -1;
}
let arr = [1, 2, 3, 4, 5];
let tar = 5;
console.log(linear(arr, tar));
//Binary Search (on a sorted array)
function Binary(arr, tar, left, right) {
  if (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (tar === arr[mid]) {
      return mid;
    }
    if (tar < arr[mid]) {
      return Binary(arr, tar, left, mid - 1);
    }
    if (tar > arr[mid]) {
      return Binary(arr, tar, mid + 1, right);
    } else {
      return mid;
    }
  }
  return -1;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let tar = 6;
console.log(Binary(arr, tar, 0, arr.length - 1));

//Check if a number is prime
function prime(nums) {
  if (nums <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(nums); i++) {
    if (nums % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(prime(7)); 
console.log(prime(10));

//Find factorial of a number
function factorial(num) {
    if (num == 1 || num == 0) {
        return true
    }
    return num*factorial(num-1)
}
console.log(factorial(5));

*/

//Find pair with given sum in a sorted array
function pairSum(arr, tar) {
    let left = 0
    let right = arr.length
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === tar) {
            return [arr[left],arr[right]]
        }
        if (sum < tar) {
            left++
        } else {
            right--
        }
    }
    return "No Pair Found"
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let tar = 10
console.log(pairSum(arr, tar));