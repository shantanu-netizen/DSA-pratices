/*// function deleclartion 
console.log(add(3, 7))
function add(a, b) {
    return a+b
}
 //function expression
//console.log(multi(6, 5));error
const multi = function (c, d) {
    return c*d
}
console.log(multi(6, 5));
//template literals
let name = "shantanu"
let age = "21"
console.log(`my name is ${name} and i am ${age} year old`)
*/
let obj={
    name:"golu",
    age:"21"
}
let obj2=obj
obj2.name="shan"
console.log(obj2.name)
function add(a, b) {
    return a*b
}
console.log(add(3, 5))
const result = function(c, d) {
    return c*d
}
console.log(result(5,5))
