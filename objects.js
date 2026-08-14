//Object literal
let user={
    name: "golu",
    age:21
}
console.log(user.name)

//new Object()
let user2 = new Object()
user2.name = "shantanu",
user2.age = 21
console.log(user2)

//Constructor
function user4(name, age) {
    return {
        name: name,
        age:age
    }
}
let object = user4("shantanu", 21)
console.log(`Name: ${object.name}, Age: ${object.age}`);