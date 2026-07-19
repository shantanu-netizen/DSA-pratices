//let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//console.log(arr.pop())
//console.log(arr.push(8))
//console.log(arr)
/*
console.log(arr.unshift(4))
console.log(arr);
console.log(arr.shift());
console.log(arr);
let str = arr.join("+")
console.log(str)
arr.slice(2, 4)
console.log(arr)
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.splice(2, 4,1));
console.log(arr);
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let number = arr.find(n => n > 4)
console.log(number)
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let number = arr.filter((n) => {
    return n % 2 === 0;
}) 
console.log(number)
let arr = [1, 2, 3, 4, 5]
let result=arr.reduce((acc,val)=>acc<val)
console.log(result);
console.log("100")
 let invalid=setInterval(() => {
    console.log("200")
},2000)
console.log("300")
setTimeout(() => {
    clearInterval(invalid)
    console.log("stop")
 },5000)
 let str = "shantanu"
let reversed = ""
for (let i = str.length - 1; i >= 0; i--){
    reversed+=str[i]
}
console.log(reversed)
*/

/*
let arr = [1, 2, 3, 4]
let start = 0
let end = arr.length - 1;
while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
}
console.log(arr)
let resverd = []
for (let i = arr.length - 1; i >= 0; i--){
    resverd.push(arr[i])
}
console.log(resverd)
const myPromise = new Promise((resolve, reject) => {
    let success = false
    if (success) {
        resolve("It resolve")
    } else {
        reject("It  reject");
    }
})
myPromise
.then(result=>console.log(result))
.catch(error=>console.log(error))
let arr = [1, 2, 3, 4, 5]
let [a, b,c,d,e] = arr
console.log(a, b,c,d,e)
let arr = [1, 2, 3, 4, 5];
let [a, ...rest] = arr
console.log(a)
console.log(...rest);
let age=18
let result=age > 8 ? "you are above 18" : "you are below 18";
console.log(result)
let obj1 = {
    name: "shan",
    age:21
}
let obj2 = {
  city: "mathura",
  age: 21,
};
let result = { ...obj1, ...obj2 }
console.log(result)
let merged = {
    ...obj1,
    ...obj2
}
console.log(merged)
Object.assign(obj1, obj2)
console.log(obj1)

console.log("start")
setTimeout(() => {
    console.log("Timeout")
}, 2000)
Promise.resolve().then(()=>{
  console.log("promise")
})
console.log("End");
*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.slice(2, 4));
console.log(arr.splice(1, 2, 5))
console.log(arr)


