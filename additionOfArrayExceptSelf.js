// Time Complexity: O(n)
var additionOfArrayExceptSelf = arr => {
  let left = [];
  let right = [];
  let res = [];

  left[0] = 0; // set left of 1st array element value as 0
  right[arr.length - 1] = 0; // set right of last element value as 0

  for(let i = 1; i < arr.length; i++) {
    left[i] = arr[i - 1] + left[i - 1];
  }

  for(let i = arr.length - 2; i >= 0; i--) {
    right[i] = arr[i + 1] + right[i + 1];
  }

  for(let i = 0; i < arr.length; i++) {
    res[i] = left[i] + right[i];
  }

  return res;
}

// Time complexity: O(n^2)
function additionOfArrayExceptSelf1(arr) {
  if(arr.length === 0) return [];

  let result = [];
  for(let i = 0; i < arr.length; i++) {
    let r = 0;

    for(let j = 0; j < arr.length; j++) {
      // add if indices i and j are different
      if(i !== j) r += arr[j];
    }
    result.push(r);
  }

  return result;
}


const arr = [23,14,5,6,7,8];
console.log(additionOfArrayExceptSelf(arr)); //[40, 49, 58, 57, 56, 55]
