// [1,2,4,1,2,5,6,5,6,4,4] ==> 4
// [1,2,4,1,2,5,6,5,6,4] ==> -1

// Time complexity: O(n)

var oddNumberTimes = (arr) => {
  let hashMap = {};

  for (let i = 0; i < arr.length; i++) {
    hashMap[arr[i]] = hashMap[arr[i]] + 1 || 1;
  }

  for (let el in hashMap) {
    if (hashMap[el] % 2 !== 0) {
      return el;
    }
  }

  return -1;
};
