/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
Each character in S is a type of stone you have.
You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters.
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: J = "aA", S = "aAAbbbb"
Output: 3

Example 2:
Input: J = "z", S = "ZZ"
Output: 0
*/

function numJewelsInStones(J, S) {
  let hashMap = {};

  for(let i = 0; i < J.length; i++) {
    hashMap[J[i]] = 1;
  }

  let stoneCount = 0;

  for(let i = 0; i < S.length; i++) {
    if(hashMap[S[i]] === 1) stoneCount++;
  }

  return stoneCount;
}


// OR

function numJewelsInStones(J, S) {
  let fre = new Map();

  for(let i = 0; i < J.length; i++) {
    fre.set(J[i], 1);
  }

  let stoneCount = 0;

  for(let i = 0; i < S.length; i++) {
      if(fre.get(S[i]) === 1) stoneCount++;
  }

  return stoneCount;
}
