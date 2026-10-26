//Print the unique element
let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];
let set=new Set()
for (let i = 0; i < arr.length; i++){
    if (set.has(arr[i])) {
        set.delete(arr[i])
    } else {
        set.add(arr[i])
    }
}
console.log(set)