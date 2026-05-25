/*
function duplicate(arr) {
    let seen = new Set()
    for (let i = 0; i < arr.length; i++){
        if (seen.has(arr[i])) {
            return true
        }
        seen.add(arr[i])
    }
    return false
}
console.log(duplicate([1, 2, 3, 4]));      
// false

console.log(duplicate([1, 2, 3, 2]));      
// true
*/
function count(str1,str2) {
    let str1 = str1.tolowercase()
    let str2 = str2.tolowercase()
    if (str1.length != str2.length) {
        return false
    }
    let count = {}
    for (let char of str1) {
        count[char] = (count[char] || 0) + 1
    }
    for (let char of str2) {
        if (!count[char]) {
         return false
        }
        count[char]--
    }
    return true
}