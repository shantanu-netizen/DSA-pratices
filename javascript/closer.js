function shops() {
    let amount = 100;
    return function invest() {
        let profit = 200;
        console.log(amount+profit)
    }
}
let shopkeeper=shops()
shopkeeper()