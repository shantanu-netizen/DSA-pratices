/*
//Count vowels and consonants in a string
function counts(str) {
    let vowels = 'aeiouAEIOU'
    let vowelsCount = 0
    let consonantsCount = 0
    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(char)) {
                vowelsCount++
            } else {
                consonantsCount++
            }
        }
    }
    console.log("vowels", vowelsCount)
    console.log("consonants",consonantsCount)
}
counts("Hello World");

/Convert lowercase to uppercase and vice versa
function convert(str) {
    let result = ""
    for (let i = 0; i < str.length; i++){
        let char = str[i]
        if (char >= "a" && char <= "z") {
            result+=char.toUpperCase()
        } else if(char>="A"&&char<="Z") {
            result += char.toLowerCase();
        } else {
            result+=char
        }
    }
    return result
}
let str = "aeiouAEIOU"
console.log(convert(str))

*/

//Remove all spaces from a string
function remove(s) {
    let result = ""
    for (let i = 0; i<s.length; i++){
        if (s[i] != " ") {
            result+=s[i]
        }
    }
    return result
}
let s = "Hello World"
console.log(remove(s))

