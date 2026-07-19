function shops() {
    let amount = 100;
    return function invest() {
        let profit = 200;
        console.log(amount+profit)
    }
}
let shopkeeper=shops()
shopkeeper()

function outer() {
    let count = 0
    function inner() {
        count++
        console.log(count)
    }
    return inner
}
let counter = outer()
counter()
counter();
