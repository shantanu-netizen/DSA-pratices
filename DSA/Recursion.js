/*
function factorial(n) {
    if (n === 0) {
        return 1
    }
    //recurisive
    return n*factorial(n-1)
}
console.log(factorial(4))
*/
function even(n) {
    if(n==0){
        return true
    }
    return even(n-2)
}
console.log(even(4));