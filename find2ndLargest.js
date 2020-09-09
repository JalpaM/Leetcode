// [5,4,2,1,3] => 4

var find2ndLargest = (nums) => {
  let max = Number.NEGATIVE_INFINITY;
  let largest_2nd;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      largest_2nd = max;
      max = nums[i];
    } else if (nums[i] > largest_2nd && nums[i] < max) {
      largest_2nd = nums[i];
    }
  }

  return largest_2nd;
};
