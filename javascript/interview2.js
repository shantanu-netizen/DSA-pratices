/*
let arr = [1, 2, 3, 4, 5];
arr.unshift(3);

console.log(arr);
arr.shift();
console.log(arr);
arr.slice(1, 3);
console.log(arr.slice(0, 4));
console.log("i check original array " + arr);
console.log(arr.splice(1, 2, 3));
console.log("i check original array " + arr);
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr1.splice(2, 4, 1));
console.log(arr1);
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
const result = arr2.find((n) => n > 4);
console.log(result);
const result2 = arr2.filter((n) => {
  return n > 4;
});
console.log(result2);
const result3 = arr2.reduce((acc, curr) => {
  return acc < curr;
});
console.log(result3);
let str = "shantanu";
let arr4=str.split("")
let reversed = [];
for (let i = arr4.length - 1; i >= 0; i--) {
  reversed.push(arr4[i]);
}
console.log(reversed.join(""));
let start = 0
let end = arr2.length - 1
while (start < end) {
   let temp = arr2[start];
   arr2[start] = arr2[end];
   arr2[end] = temp;
   start++;
   end--;
}
console.log(arr2)
console.log("start")
setTimeout(() => {
   console.log("timeout")
}, 2000)
 console.log("end")
 var a = 10
{
  var a=20
}
console.log(a)
let b = 30
{
  let b = 40
console.log(b);
  
}
console.log(b)
const c = 50
{
  const c = 60
  console.log(c);
}
console.log(c)
const obj = {
  user: "shantanu",
  age:21
}
const obj2 = {
  city:"Mathura"
}
const merged = {...obj, ...obj2}
console.log(merged)
console.log(Object.values(obj2));
console.log(Object.keys(obj2))
console.log(Object.entries(obj))
console.log(Object.assign(obj, obj2));
let myPromise = new Promise((resolve, reject) => {
  let success = false
  if (success) {
    console.log("its resolve")
  } else {
    console.log("its reject")
  }
})
myPromise.then((result)=>console.log(result)).catch((err)=>console.log(err))
function add(a, b) {
  return a+b
}
console.log(add(2, 5))
const multi = (c, d) => {
  return c+d
}
console.log(multi(2,6))
const app = { user: "shantanu", age: 21 }
const string = JSON.stringify(app)
console.log(string)

*/
const app = '{ "user": "shantanu", "age":" 21" }'
const app2 = JSON.parse(app)
console.log(app2)
