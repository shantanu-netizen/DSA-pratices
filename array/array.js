//find pair with given sum of sorted array in js
function findPairWithSum(arr, targetSum) {
    let left = 0;
    let right = arr.length - 1;
    const pairs = [];

    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === targetSum) {
            pairs.push([arr[left], arr[right]]);
            left++;
            right--;
        } else if (currentSum < targetSum) {
            left++;
        } else {
            right--;
        }
    }

    return pairs;
}
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let targetSum = 5;
console.log(findPairWithSum(sortedArray, targetSum)); 