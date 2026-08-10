function selection(arr) {
  let n= arr.length
  for (let i = 0; i < n-1; i++){
    let idx = i
    for (let j = i + 1; j < n; j++){
      if (arr[idx] > arr[j]) {
        idx=j
      }
    }
    let temp = arr[i]
    arr[i] = arr[idx];
    arr[idx] = temp;
  }
  return arr;
}
let arr = [5, 4, 3, 2, 1]
selection(arr);
console.log(selection(arr))