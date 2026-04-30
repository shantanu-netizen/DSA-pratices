const student = {
    name: "shantanu",
    class: "12th",
    age: "18",
    subjects:["physics","maths","chemistry","computer"]
}
let school = student
console.log(Object.keys(school));
console.log(Object.values(student));
school.name = "golu"
console.log(school)
console.log(Object.values(school));
