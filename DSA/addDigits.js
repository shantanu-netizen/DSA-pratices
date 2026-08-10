function sum(num){
    let sum=0
    while (num != 0) {
        let ld = num % 10
        sum = sum + ld
         num=Math.floor(num/10)
    }
    return sum
}
function digits(n) {
    while (n > 9) {
         n=sum(n)
    }
    return n
}
let num = 38
console.log(digits(num))