function selection(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    small = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[small]) {
        small = j;
      }
    }
    let temp = arr[small];
    arr[small] = arr[i];
    arr[i] = temp;
  }
}
let arr = [5, 4, 3, 2, 1];
selection(arr);
console.log(arr);