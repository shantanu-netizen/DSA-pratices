let text = /^hello$/
console.log(text.test("hello"))
console.log(text.test("hello world"));
let pattern = /\d/; // matches any number (0–9)
console.log(pattern.test("abc1")); // true