function evenAndodd(prices) {
    let n = prices.length
    if (n % 2 === 1) {
        return prices[Math.floor(n/2)]
    } else {
        let mid1 = prices[n / 2 - 1]
        let mid2 = prices[n / 2]
         return (mid1 + mid2) / 2
}
    }
   
const prices = [10, 20, 30, 40, 50,60];
const medianPrice = evenAndodd(prices);
console.log("The median stock price is:", medianPrice);

function reverse(n) {
    let left = 0
    let right = n.length - 1
    while (left < right) {
        let temp = n[left]
        n[left] = n[right]
        n[right] = temp
        left++
        right--
    }
    return n
}
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let reversed = reverse(n);
console.log("Reversed page numbers:", reversed); // Output: Reversed page numbers: [9, 8, 7, 6, 5, 4, 3, 2, 1]

function isPalindrome(n) {
    let s = n.toString()
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (s[left] != s[right]) {
            return "NO"
        }
         left++
        right--
    }

    return"YES"
}
let n1 = 12321;
let result = isPalindrome(n1);
console.log(`Is the number ${n1} a palindrome?`, result); // Output: Is the number 12321 a palindrome? YES

function upperandlower(str) {
    let words = ''
    for (let char of str) {
        if (char >= 'a' && char <= 'z') {
            words+=char.toUpperCase()
        }else if (char >= 'A' && char <= 'Z') {
            words+=char.toLowerCase()
        } else {
            words+=char
        }
        
    }
    return words
}
console.log(upperandlower("Hello World")); // "hELLO wORLD"
console.log(upperandlower("JavaScript123")); // "jAVAsCRIPT123"
console.log(upperandlower("12345!@#")); // "12345!@#"
