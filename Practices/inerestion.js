function insertion(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
      let key = arr[i]
      let j = i - 1
      while (j >= 0 && key < arr[j]) {
          arr[j + 1] = arr[j]
          j--
      }
      arr[j+1]=key
  }
}
let arr = [5, 4, 3, 2, 1];
insertion(arr);
console.log(arr);


