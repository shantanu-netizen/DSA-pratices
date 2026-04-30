//palindrome
let str = "";
let str1 = str.split("");
let start = 0;
let end = str1.length - 1;
let palindrome = true;
while (start < end) {
  if (str1[start] != str[end]) {
    palindrome = false;
    break;
  }
  start++;
  end--;
}
if (palindrome) {
  console.log("True");
} else {
  console.log("False");
}

