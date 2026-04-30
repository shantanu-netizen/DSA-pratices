console.log("hello 1")
setTimeout(() => {
    console.log("hello 3")
}, 2000);
console.log("hello 2");
/*
setInterval(() => {
  console.log("hello");
}, 2000);

let promise = new Promise((resolve, reject) => {
    console.log("hello my name is golu 1")
    setTimeout(() => {
        console.log("hello i am shantanu")
    }, 1000)
    console.log("hello my name is golu 2");
})
 */
let promise = new Promise((resolve, reject) => {
    let success = true
    if (success) {
        resolve("its resolve")
    } else {
        reject("its reject")
    }
})
function getData() {
    return new Promise((reject) => {
        reject("DATA RETERUVE");
    })
       
}
async function showData() {
    let result = await getData()
    console.log(result)
}
showData()