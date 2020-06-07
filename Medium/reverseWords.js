// 151. Reverse Words in a String
/*
Given an input string, reverse the string word by word.

Example 1:
Input: "the sky is blue"
Output: "blue is sky the"

Example 2:
Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:
Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
*/
// Time complexity: O(n)
var reverseWords = function(s) {
    s = s.trim().split(' ');
    s = s.filter(el => el.length > 0);
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        [s[left], s[right]] = [s[right], s[left]];

        left++;
        right--;
    }

    return s.join(' ');
};
