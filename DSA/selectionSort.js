function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let small = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[small]) {
        small = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[small];
    arr[small] = temp;
  }
}
let arr = [5, 4, 3, 2, 1];
selectionSort(arr);
console.log(arr);
