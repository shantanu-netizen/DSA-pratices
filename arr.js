let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((acc, val) => acc < val);
console.log(result);
let reduce = arr.reduce((acc, val) => 
    Math.max(acc,val)
)
console.log(reduce);


