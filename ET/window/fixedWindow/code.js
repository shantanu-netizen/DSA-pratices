function max(arr, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  let maxS = sum;
  for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];
    maxS = Math.max(sum, maxS);
  }
  return maxS;
}
let arr = [6, 9, 3, 8, 4, -1, -6, 9, 9, 8];
let k = 3;
console.log(max(arr, k));