//3. Longest Substring Without Repeating Characters
function Substring(s) {
  let left = 0;
  let freq = {};
  let maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    freq[s[right]] = (freq[s[right]] || 0) + 1;
    while (freq[s[right]] > 1) {
      freq[s[left]]--;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
    }
   return maxLength
}
let s = "abcabcbb";
console.log(Substring(s))