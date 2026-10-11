// 258 Add Digits
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
