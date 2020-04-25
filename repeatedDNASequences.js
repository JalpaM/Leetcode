// 187. Repeated DNA Sequences
/*
All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.
Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

Example:
Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC", "CCCCCAAAAA"]
*/
// Time Complexity: O(n)
// Space Complexity: O(n)

var findRepeatedDnaSequences = function(s) {
    let result = [];
    let hashMap = {};

    for(let i = 0; i < s.length; i++) {
        let current = s.substr(i, 10); // returns 10 characters from index
        if(hashMap[current]) {
            result.push(current);
        }
        hashMap[current] = 1;
    }

    return result;
};
