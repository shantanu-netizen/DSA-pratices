// Leetcode 7 Reverse Integer
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let num = x;
  let neg = false;
  let rev = 0;
  if (num < 0) {
    neg = true;
    num = Math.abs(num);
  }
  while (num > 0) {
    let ld = num % 10;
    rev = rev * 10 + ld;
    if (rev > 2147483647) {
      return 0;
    }
    num = Math.floor(num / 10);
  }
  return neg ? rev * -1 : rev;
};
//Leetcode 258 Add Digits
/**
 * @param {number} num
 * @return {number}
 */
function Sum(val) {
  let sum = 0;
  while (val > 0) {
    let lastDigit = val % 10;
    sum = sum + lastDigit;
    val = Math.floor(val / 10);
  }
  return sum;
}
var addDigits = function (num) {
  while (num > 9) {
    num = Sum(num);
  }
  return num;
};
//Leetcode 374 Guess Number Higher or Lower
var guessNumber = function (n) {
  let start = 0;
  let end = n;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let g = guess(mid);
    if (g == 0) {
      return mid;
    } else if (g == -1) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};
//Leetcode 204 Count Primes
var countPrimes = function (n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
};
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}