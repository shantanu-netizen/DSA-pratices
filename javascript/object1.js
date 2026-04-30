let marks = {
    harry: 20,
    shan: 54,
    golu:89,
}
/*
for (let i = 0; i < Object.keys(marks).length; i++){
    console.log(
      "the marks " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]],
    );
}
    for (let key in marks) {
       console.log("the marks of " + key + " are " + marks[key])
}
*/

const mean = (a,b,c,d) => {
     return (a+b+c+d)/4  
}

console.log(Math.round(mean(2, 3, 4, 5)));
function meaning(a, b, c) {
    return (a+b+c)/3
}
console.log(meaning(1, 2, 3))
