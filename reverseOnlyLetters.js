// 917. Reverse Only Letters

/*
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

Example 1:
Input: "ab-cd"
Output: "dc-ba"

Example 2:
Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
*/
var reverseOnlyLetters = function (S) {
  let left = 0;
  let right = S.length - 1;
  S = S.split("");

  while (left < right) {
    while (!/[a-zA-Z]/.test(S[left])) left++;
    while (!/[a-zA-Z]/.test(S[right])) right--;
    if (left < right) [S[left], S[right]] = [S[right], S[left]];
    left++;
    right--;
  }
  return S.join("");
};
