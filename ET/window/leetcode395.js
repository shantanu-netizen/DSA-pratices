//395. Longest Substring with At Least K Repeating Characters
var longestSubstring = function (s, k) {

    if (s.length < k) {
        return 0;
    }

    let freq = {};

    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of s) {

        if (freq[char] < k) {

            let parts = s.split(char);

            let max = 0;

            for (let part of parts) {
                max = Math.max(max, longestSubstring(part, k));
            }

            return max;
        }
    }

    return s.length;
};