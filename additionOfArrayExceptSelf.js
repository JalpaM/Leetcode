// Time complexity: O(n^2)
function additionOfArrayExceptSelf(arr) {
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
