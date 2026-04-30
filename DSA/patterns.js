/*
function pattern() {
  let n = 4;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        row += j;//use this j+ " " for space between numbers && use "*" print 4 times stars
        
    }
    console.log(row);
  }
}

pattern();

function pattern() {
  let n = 4;
  for (let i = 0; i < n; i++) {
    let row = "";
    let charCode = 65; // ASCII for 'A'

    for (let j = 0; j < n; j++) {
      row += String.fromCharCode(charCode) + " ";
      charCode++;
    }

    console.log(row);
  }
}

pattern();
*/
function pattern() {
  let n = 4;
  for (let i = 0; i < n; i++) {
    let row = "";
    let nums = 1;

    for (let j = 0; j < n; j++) {
      row += nums;
      nums++;
    }

    console.log(nums);
  }
}

pattern();
function isPalindrome(s) {
  let start = 0
  let end = s.length - 1
  while (start<end) {
    if (s[start] != s[end]) {
      return false
    }
    start++
    end--
  }
  return true

}
let s = "bob"
console.log(isPalindrome(s))
function isalpha(c) {
  if (c >= 'a' && c <= 'z' || c >= 1 && c <= 9) {
    return true
  }
  return false
}
let c = 'w$^2'
isalpha(c)
console.log(isalpha(c));