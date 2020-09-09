/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/

const isAnagram = function (s, t) {
  // return false if lengths are different
  if (s.length !== t.length) return false;

  let strCountS = {};

  // store each character in stringCount
  for (let char of s) {
    // add 1 in count if already exist or set value to 1
    strCountS[char] = strCountS[char] + 1 || 1;
  }

  for (let char of t) {
    // check for each char in string count
    if (!strCountS[char]) {
      return false;
    } else {
      strCountS[char]--;
    }
  }

  // return
  return true;
};
