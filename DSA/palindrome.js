// 9. Palindrome Number
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str=String(x)
    let start=0
    let end=str.length-1
    while(start<end){
        if(str.charAt(start)!=str.charAt(end)){
            return false
        }
        start++
        end--
    }
    return true
};