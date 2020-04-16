// 3. Longest Substring Without Repeating Characters
/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let localMax = 0;
    let sArray = s.split('');
    let newArray = [];

    sArray.forEach(el => {
        if(!newArray.includes(el)) {
            localMax++;
            newArray.push(el);
        } else {
            localMax = 0;
            newArray = [];
        }
        max = Math.max(max, localMax);
    });

    return max;
};
