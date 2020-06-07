/*
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:
Input:
"tree"
Output:
"eert"
Explanation:
'e' appears twice while 'r' and 't' both appear once.

So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:
Input:
"cccaaa"
Output:
"cccaaa"
Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:
Input:
"Aabb"
Output:
"bbAa"
Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/
var frequencySort = function(s) {
    s = s.split('');
    let hashMap = {};
    let sortedHashMap = [];
    let newArr  = [];

    // counting occurences
    s.forEach(el => {
        hashMap[el] = hashMap[el] + 1 || 1;
    });

    // sort hashMap objects in descending order
    for(let obj in hashMap) {
        // creating array of hashMap obj
        sortedHashMap.push([obj, hashMap[obj]]);
    }
    s = sortedHashMap.sort((a, b) => b[1] - a[1]);

    // arrange characters as per number of occurences
    for(let i = 0; i < s.length; i++) {
        for(let j = 1; j <= s[i][1]; j++) {
            newArr.push(s[i][0]);
        }
    }

    return newArr.join('');
};
