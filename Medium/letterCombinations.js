// 17. Letter Combinations of a Phone Number
/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

var letterCombinations = digits => {
  if(digits.length === 0 || digits === null) return [];
  const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };
  let res = [];

  const go = (i, s) => {
    if(i === digits.length) {
      return res.push(s);
    }

    for(const c of map[digits[i]]) {
      go(i + 1, s + c);
    }
  }

  go(0, '');

  return res;
}
