//424. Longest Repeating Character Replacement
function repeating(s, k) {
  let freq = {};
  let maxLen = 0;
  let maxFreq = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    freq[s[right]] = (freq[s[right]] || 0) + 1;

    maxFreq = Math.max(maxFreq, freq[s[right]]);

    while (right - left + 1 - maxFreq > k) {
      freq[s[left]]--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
let s = "AABABBA";
let k = 1;
console.log(repeating(s,k))