/*
let a = "20";
{
  let a = "10";
  console.log(a);
}
console.log(a);


var b = "10"

{
    var b = "30"
    console.log(b)
}
console.log(b);

const c = "100"
{
    const c = "90"
    console.log(c)
}
console.log(c);
*/
/*
const promise = new Promise((resolve, reject) => {
    let success = false
    if (success) {
        console.log("its resolve")
    } else {
        console.log("its rejected")
    }
})
    function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data recived")
        })
    })
}
async function showData() {
    const result = await getData()
    console.log(result)
}
showData()
*/
let data = {
    name: "shantanu",
    age: 21,
    city: "Mathura",
    isplaced:true
}
console.log(Object.keys(data))
console.log(Object.values(data));

let data2 = {
    dob: "05/11/2003",
    stream:"Science"    
}
const result1 = {...data, ...data2}
console.log(result1)
const merged = {
    ...data,
    ...data2
}
console.log(merged)
console.log(Object.entries(data))
