/*
let map = new Map()
map.set("KEY","VALUE")
map.set("name", "shantanu")
map.set("phone", 9528920871)
map.set("stream","science")
for (let [key,value] of map)
    console.log(key + "->" + value);
console.log(map.values())
console.log(map.keys());
 */
let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 6]
let map = new Map()
for (let i = 0; i < arr.length; i++){
    if (map.has(arr[i])) {
        map.set(arr[i],map.get(arr[i])+1)
    } else {
        map.set(arr[i],1)
    }
}
console.log(map)