/*
// Print each character on new line
let s = "shantanu"
for (let i = 0; i < s.length; i++){
    console.log(s[i])
}
// Print in charater in reverse order
let a = "shantanu"
for (let i = a.length - 1; i >= 0; i--){
    console.log(a[i])
}
/Print in reverse order
let s = "shantanu"
let a=s.split("")
let start = 0
let end = s.length - 1
while (start < end) {
    let temp = a[start]
    a[start] = a[end]
    a[end] = temp
    start++
    end--
}
console.log(a.join(""))

// Is Palindrome
function Palindrome(a) {
    let start = 0
    let end = a.length - 1
    while (start < end) {
        if (a[start] != a[end]) {
               return false
        }
        start++
        end--
    }
    return true
}
let a = "bob"
Palindrome(a)
console.log(Palindrome(a))
*/
// Toggle each character
function toggle(s) {
    let word = ""
    for (let char of s){
        if (char >= 'a' && char <= 'z') {
            word+=char.toUpperCase()
        } else if (char >= 'A' && char <= 'Z') {
            word+=char.toLowerCase()
        } else {
            word+=char
        }
    }
    return word
}
let s = "FfgJKGj"
toggle(s)
console.log(toggle(s))