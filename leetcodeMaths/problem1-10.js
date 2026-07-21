// Leetcode 7 Reverse Integer
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num=x
    let neg=false
    let rev=0
    if(num<0){
        neg=true
        num=Math.abs(num)
    }
    while(num>0){
        let ld=num%10
        rev=rev*10+ld
        if(rev > 2147483647){
            return 0
        }
        num=Math.floor(num/10)
    }
return neg?rev*-1:rev
};
//Leetcode 258 Add Digits
/**
 * @param {number} num
 * @return {number}
 */
function Sum(val){
    let sum=0
    while(val>0){
        let lastDigit=val%10
        sum=sum+lastDigit
        val=Math.floor(val/10)
    }
    return sum
}
var addDigits = function(num) {
   while(num>9){
     num=Sum(num)
   }
   return num
};