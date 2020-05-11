// 140. Word Break II
/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

Note:
The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

Example 1:
Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
Example 2:
Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.
Example 3:
Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]
*/

var wordBreak = function(s, wordDict) {
    let res = [];

    let findCombination = (current, str) => {
        if(str.length === 0) {
            res.push(current.join(' '));
            return;
        }

        for(let i = 0; i < wordDict.length; i++) {
            if(str.indexOf(wordDict[i]) === 0) {
                current.push(wordDict[i]);
                findCombination(current, str.slice(wordDict[i].length));
                current.pop();
            }
        }
    }

    findCombination([], s);
    return res;
};
