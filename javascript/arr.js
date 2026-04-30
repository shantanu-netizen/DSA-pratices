let arr = [2, 4, 6, 8]
for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}
 console.log("for each elements");
arr.forEach((e) => {
       console.log(e*e)
})
let name = "shantanu"
let a = Array.from(name)
console.log(a)
console.log("break")
let arr2 = [2, 3, 4, 5, 6]
arr2.map((value,index,arr2) => {
  console.log(value,index,arr2);
});
console.log("filter")
let arr3 = [1, 2, 3, 4, 5,34,56,54]
let arr4=arr3.filter((v) => {
    return(v<10)
})
console.log(arr4)