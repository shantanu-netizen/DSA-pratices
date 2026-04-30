let arr = [1, 2, 3, 4, 5, 6]
arr.map((val,idx,arr) => {
    console.log(val, idx, arr)
})
let arr2=arr.filter((n) => {
    return n%2==0
})
console.log(arr2)
let arr3 = arr.find((acc, val) => {
    
})