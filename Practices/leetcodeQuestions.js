function search(arr, target) {
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}
let arr=[-1,0,3,5,9,12]
let target=10
console.log(search(arr, target))

