// 11. Container With Most Water
/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines,
which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/

// Time complexity: O(n)
function maxArea(height) {
  let max = 0;
  let i = 0;
  let j = height.length - 1;

  while(i < j) {
    let min = Math.min(height[i], height[j]);
    // calculating area -> min * (j - i)
    max = Math.max(max, min * (j - i));

    if(height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  // return max
  return max;
}

// OR

// Time complexity: O(n^2)

function maxArea1(height) {
  let max = 0;

  for(let i = 0; i < height.length; i++) {
    for(let j = i + 1; j < height.length; j++) {
      let min = Math.min(height[i], height[j]);
      max = Math.max(max, min * (j - i));
    }
  }
  return max;
}
