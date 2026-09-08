//520. Detect Capital
function capital(word) {
    let count = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] >= 'A' && word[i] <= 'Z') {
            count++
        }
    }
        if (count == 0 || count == word.length) {
            return true
        }
        if (count == 1 && word[0] >= 'A' && word[0] <= 'Z') {
            return true
        }
    return false
}
let word = "UsA";
console.log(capital(word))