// 1143. Longest Common Subsequence
/*
Given two strings text1 and text2, return the length of their longest common subsequence.
<<<<<<< Updated upstream
A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.
=======
A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters.
(eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.
>>>>>>> Stashed changes
If there is no common subsequence, return 0.

Example 1:
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

Constraints:

1 <= text1.length <= 1000
1 <= text2.length <= 1000
The input strings consist of lowercase English characters only.
*/

var longestCommonSubsequence = (str1, str2) => {
    // This will generate array of arrays with value as 0
    var arr = [...Array(str1.length + 1)].map(() => Array(str2.length + 1).fill(0));

    for(var i = 1; i <= str1.length; i++) {
        for(var j = 1; j <= str2.length; j++) {
            if(str1[i - 1] === str2[j - 1]) {
                // Take value from diagonal element and add 1
                arr[i][j] = arr[i - 1][j - 1] + 1;
            } else {
                // Take value from previous row or previous column
                arr[i][j] = Math.max(arr[i][j-1], arr[i-1][j]);
            }
        }
    }

    return arr[str1.length][str2.length];
}
