arr = [6, 9, 3, 8, 4, -1, -6, 9, 9, 8];
k = 3;
function maxSum(arr, k) {
    let sum=0
    for (i = 0; i < k; i++) { 
        sum += arr[i];
    }
    let maxSum = sum;
    for (i = k; i < arr.length; i++) {
        sum = sum - arr[i - k] + arr[i];
         maxS = Math.max(maxSum, sum);
    }
    console.log("max" + maxS);
}
maxSum(arr, k);
