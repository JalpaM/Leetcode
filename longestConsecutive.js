// 128. Longest Consecutive Sequence
/*
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
Your algorithm should run in O(n) complexity.

Example:
Input: [100, 4, 200, 1, 3, 2]
Output: 4

Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/

var longestConsecutive = (nums) => {
  let hashMap = {};
  let max = 0;
  let localMax = 0;

  for(let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = 1;
  }

  for(let i = 0; i < nums.length; i++) {
    let current = nums[i];
    localMax = 1;

    if(!hashMap[current - 1]) { // if 1 less than current number doesn't exist then it's not consecutive so no need to consider
      while(hashMap[current + 1]) { // increment current and localMax if next consecutive number is present
        localMax++;
        current++;
      }
    }

    max = Math.max(max, localMax);
  }

  return max;
}
