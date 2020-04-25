// 49. Group Anagrams
/*
Given an array of strings, group anagrams together.

Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/

const groupAnagrams = strs => {
  let res = [];

  strs.forEach(str => {
    let sortedStr = str.split('').sort().join('');

    if(res[sortedStr]) {
      return res[sortedStr].push(str);
    }
    res[sortedStr] = [str];
  })

  return res;
}
