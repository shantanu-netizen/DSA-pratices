let set = new Set()
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
console.log(set)
set.delete(2)
console.log(set);
console.log(set.size)
set.clear()
console.log(set);
let arr = [1, 2, 3, 4, 5, 2, 1, 2, 3, 4, 5]
let uniqSet = new Set(arr)
let result = [...uniqSet]
console.log(result)