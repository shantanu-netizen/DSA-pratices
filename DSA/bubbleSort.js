function bubbleSort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++){
        for (let j = 0; j < n - i - 1; j++){
            if (arr[j] > arr[j + 1]) {
               let temp = arr[j];
               arr[j] = arr[j + 1];
               arr[j + 1] = temp;
            }
        }
    }
}
let arr = [3, 4, 1, 6, 7]
bubbleSort(arr)
console.log(arr)
function moves(num) {
  let x = 0;
  for (let i = 0; i < num.length; i++) {
      if (num[i] != 0) {
          num[x] = num[i]
          num++
      }
    }
    for (let i = x; i < num.length; i++){
        
    }
}