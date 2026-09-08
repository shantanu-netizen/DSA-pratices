//58. Length of Last Word
function last(s) {
  let arr=  s.trim().split(" ")
    return arr[arr.length-1].length
}
let s = "Hello World"
console.log(last(s))