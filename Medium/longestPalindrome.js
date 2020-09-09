// 5. Longest Palindromic Substring
/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: "cbbd"
Output: "bb"
*/

var longestPalindrome = function (s) {
  const expandFromCenter = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }

    return s.slice(l + 1, r);
  };

  let res = "";
  for (let i = 0; i < s.length; i++) {
    const s1 = expandFromCenter(i, i); // case 1: aba
    if (s1.length > res.length) res = s1;

    const s2 = expandFromCenter(i, i + 1); // case 2: abba
    if (s2.length > res.length) res = s2;
  }

  return res;
};
