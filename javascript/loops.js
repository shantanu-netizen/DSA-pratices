/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let sum = 0;
for (let i = 0; i < arr.length; i++){
    sum+=i
}
console.log(sum)
let obj={
    "harry":1,
    "golu": 4,
    "shan": 2,
    "for":5
}
for (let a in obj) {
    console.log("marks of " +a+ " are " +obj[a] )
}
    const prompt = require("prompt-sync")();
let n = prompt("Enter your n: ");
n = Number.parseInt(n);
let i = 10;
do {
  console.log(i);
  i++;
} while (i < n);
    */


let obj = {
  harry: 1,
  golu: 4,
  shan: 2,
  for: 5,
};
for (let a in obj) {
  console.log("marks of " + a + " are " + obj[a]);
}