/*
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
  Input: "aba"
  Output: True
Example 2:
  Input: "abca"
  Output: True
Explanation: You could delete the character 'c'.
*/

// Time complexity: O(n)
// Space complexity: Constant - O(n)

function validPalindrome(s) {
  let i = 0;
  let j = s.length - 1;

  while(i < j) {
    // if characters are not equal then compare it by removing at most 1 character
    if(s[i] !== s[j]) {
      // isPalindrome(s, i + 1, j) removes 1 character by incrementing value of i
      // isPalindrome(s, i, j - 1) removes 1 character by decrementing value of j
      return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
    }

    i++;
    j--;
  }
  return true;
}

function isPalindrome(s, i, j) {
  while(i < j) {
    if(s[i++] !== s[j--]) {
      return false;
    }
  }
  return true;
}
