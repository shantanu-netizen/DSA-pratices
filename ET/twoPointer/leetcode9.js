//9. Palindrome Number
function palindrome(s) {
    let start = 0
    let end = s.length - 1
    while (start < end) {
        if (s[start] !== s[end]) {
            return false
        }
        start++
        end--
    }
    return true
}
let s = "120"
palindrome(s)
console.log(palindrome(s))