function selection(arr) {
  let n= arr.length
  for (let i = 0; i < n-1; i++){
    let small = i
    for (let j = i + 1; j < n; j++){
      if (arr[small] > arr[j]) {
        small=j
      }
    }
    let temp = arr[i]
    arr[i] = arr[small];
    arr[small] = temp;
  }
  return arr;
}
let arr = [5, 4, 3, 2, 1]
selection(arr);
console.log(selection(arr))