console.log(a);
var a = "golu";
//Scope
var b = "Golu"
console.log(b);
{
    var b = "shan" //Re-declare
    console.log(b)
}
console.log(b);