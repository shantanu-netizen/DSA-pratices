/*
const prompt = require("prompt-sync")()
function insert(arr) {
    let n=arr.length
    for (let i = 0; i < n; i++){
        arr[i]=Number(prompt("enter your number "))
    }
    return arr
}
let arr = new Array(5)
let result = insert(arr)
console.log(result)

let a = [1, 2, 3, 4, 5]
let sum = 0
let n = a.length
for (let i = 0; i < n; i++){
    sum=sum+a[i]
}

console.log(sum)

//maxElement
function max(arr) {
    let max = arr[0]
    let n = arr.length
    for (let i = 1; i < n;i++){
        if (max < arr[i]) {
            max=arr[i]
        }
        
    }
    return max;
}
let arr = [1, 2, 3, 4, 5];
console.log(max(arr))

//minElement
function min(arr) {
    let min = arr[0]
    let n = arr.length
    for (let i = 1; i < n;i++){
        if (min > arr[i]) {
            min=arr[i]
        }
        
    }
    return min;
}
let arr = [1, 2, 3, 4, 5];
console.log(min(arr))

//secondMaxElement
function second(arr) {
  let n = arr.length;
  let max = Math.max(arr[0], arr[1]);
  let Smax = Math.min(arr[0], arr[1]);
  for (let i = 2; i < n; i++) {
    if (arr[i] > max) {
      Smax = max;
      max = arr[i];
    } else if (arr[i] > Smax && max!=arr[i]) {
      Smax = arr[i];
    }
  }
  return Smax;
}
let arr = [1, 2, 3, 4, 4];
console.log(second(arr));
*/

let arr = [0, 1, 0, 1, 0, 1, 0, 1]
let i = 0
let j = 0
while (i <= arr.length) {
    if (arr[i] == 0) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j++
    }
    i++
}
console.log(arr)
