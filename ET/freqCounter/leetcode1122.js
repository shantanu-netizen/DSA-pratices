//1122. Relative Sort Array
var relativeSortArray = function (arr1, arr2) {
  let freq = {};

  // Count frequency of arr1
  for (let num of arr1) {
    freq[num] = (freq[num] || 0) + 1;
  }

  let result = [];

  // Put elements according to arr2 order
  for (let num of arr2) {
    while (freq[num] > 0) {
      result.push(num);
      freq[num]--;
    }
  }

  // Remaining elements
  let remaining = [];

  for (let num in freq) {
    while (freq[num] > 0) {
      remaining.push(Number(num));
      freq[num]--;
    }
  }

  // Sort remaining elements
  remaining.sort((a, b) => a - b);

  return result.concat(remaining);
};