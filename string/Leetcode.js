
//58. Length of Last Word
var lengthOfLastWord = function (s) {
  let arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};
/*
//another solution
function length(s) {
let s = s.trim()
let count = 0
for(let i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) != ' ') {
        count++
        } else {
            break
        }
    }
    return count
}
*/
//1790. Check if One String Swap Can Make Strings Equal
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
     let mismatch = new Array(2);
    let count = 0;

    // Find mismatches
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            count++;

            if (count > 2) {
                return false;
            }

            mismatch[count - 1] = i;
        }
    }

    // If no mismatch, strings are already equal
    if (count === 0) {
        return true;
    }

    // Check cross matching
    return s1[mismatch[0]] === s2[mismatch[1]] &&
           s1[mismatch[1]] === s2[mismatch[0]];
};

//13. Roman to Integer
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map=new Map()
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
    let res=0
    for(let i=0;i<s.length;i++){
        if(i<s.length-1&&map.get(s[i])<map.get(s[i+1])){
            res=res-map.get(s[i])
        }else{
            res=res+map.get(s[i])
        }
    }
    return res
};
//541. Reverse String II
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr=s.split("")
    for(let i=0;i<s.length;i+=2+k){
        let left=i
        let right=Math.min(i+k,s.length)-1
        while(left<right){
            let temp=arr[left]
            arr[left]=arr[right]
            arr[right]=temp
            left++
            right--
        }
    }
    return arr.join("")
};

//14. Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let pre = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (pre !== "" && !strs[i].startsWith(pre)) {
            pre = pre.substring(0, pre.length - 1);
        }
    }

    return pre;
};
//1662. Check If Two String Arrays are Equivalent
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
   if(word1.join("")===word2.join("")){
    return true
   }else{
    return false
   }
};
//520. Detect Capital
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
     let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] >= 'A' && word[i] <= 'Z') {
            count++;
        }
    }

    if (count === 0 || count === word.length) {
        return true;
    }

    if (count === 1 && word[0] >= 'A' && word[0] <= 'Z') {
        return true;
    }

    return false;
};