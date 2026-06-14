// 901 stock span
var StockSpanner = function () {
  this.s = []; // [price, span]
};
StockSpanner.prototype.next = function (price) {
  let span = 1;

  while (this.s.length > 0 && this.s[this.s.length - 1][0] <= price) {
    span += this.s.pop()[1];
  }

  this.s.push([price, span]);
  return span;
};
//496 Next greater number
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let map = new Map();
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
      stack.pop();
    }
    map.set(nums2[i], stack.length === 0 ? -1 : stack[stack.length - 1]);
    stack.push(nums2[i]);
  }
  let result = [];
  for (let num of nums1) {
    result.push(map.get(num));
  }
  return result;
};