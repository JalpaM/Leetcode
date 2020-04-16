/*

Given a string, find the first non-repeating character in it and return it's index.
If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

*/
var firstUniqChar = function(s) {
    var hashMap = {};

    for(var i = 0; i < s.length; i++) {
        hashMap[s[i]] = hashMap[s[i]] + 1 || 1;
    }

    for(var i = 0; i < s.length; i++) {
        if(hashMap[s[i]] === 1) {
            return i;
            break;
        }
    };

    return -1;
};
