arr = [6, 9, 3, 8, 4, -1, -6, 9, 9, 8];
k = 3;
function maxSum(arr, k) {
    sum = 0;
    highestSum = -Infinity;
    for (i = 0; i <= arr.length - k; i++){
        for (j = i; j < k + i; j++){
            sum += arr[j];
        }
        console.log(sum);
        maxS = Math.max(highestSum, sum);
        sum = 0;
    }
    console.log("max" +maxS)
}
maxSum(arr, k);