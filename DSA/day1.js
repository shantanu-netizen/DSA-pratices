/*// Two Pointer
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let start = 0;
let end = arr.length - 1;
while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}
console.log(arr) tc=o(n),sc=o(1)
*/
/*
//ex 1
let str = "hello"
let arr = str.split("");//[...str]
let start = 0
let end = arr.length - 1
while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}
console.log(arr.join("")) // (arr)for array tc,sc=o(n)
*/
//isPalindrome
let str = "madam";
let start = 0;
let end = str.length - 1;
let Palindrome = true;
while (start < end) {
  if (str[start] !== str[end]) {
    Palindrome = false;
    break;
    }
    start++;
    end--;
}
if (Palindrome) {
    console.log(true)
} else {
    console.log(false)
}