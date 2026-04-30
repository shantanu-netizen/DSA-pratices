/*
let arr = [1, 2, 3, 4, 5, 6]
let start = 0
let end = arr.length - 1
while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
}
console.log(arr)
*/
/*
let str = "shantanu"
let arr = str.split("")
let start = 0
let end=arr.length-1
while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
}
console.log(arr.join(""))
*/
let str = "wve"
let arr = str.split("")
let start = 0
let end = arr.length - 1
let palidrome = true
while (start < end) {
    if (arr[start] != arr[end]) {
        palidrome = false
        break
    }
    start++
    end--
}
if (palidrome) {
    console.log(true)
}
else {
    console.log(false)
}
console.log(arr)