function variable(arr, target) {
  let left = 0;
  let sum = 0;
  let maxWin = 0;
  for (right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > target) {
        sum -= arr[left];
        left++
      }
      if (sum == target) {
          let newWin = right - left + 1;
           maxWin=Math.max(maxWin,newWin)
      }
    }
    console.log(maxWin)
}
arr = [2, 3, 4, 5, 1, 1, 1, 1, 5];
target = 5;
variable(arr,target)