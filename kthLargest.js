// 215. Kth Largest Element in an Array
/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
Example 1:
Input: [3,2,1,5,6,4] and k = 2
Output: 5

Example 2:
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/
// QuickSelect
// Time complexity: O(n) - best case   O(n^2) - worst case
var findKthLargest = (nums, k) => {
    k = nums.length - k;
    let l = 0;
    let r = nums.length - 1;
    let res;

    while(l <= r) {
        res = partition(nums, l, r);

        if(res === k) {
            return nums[res];
        } else if(res > k) {
            r = res - 1;
        } else {
            l = res + 1;
        }
    }

    return res;
}

var partition = (nums, start, end) => {
    let pivot = start;

    while(start <= end) {
        // putting all elements lesser than pivot on left
        if(nums[start] <= nums[pivot]) {
            start++;
        }

        // putting all elements greater than pivot on right
        if(nums[pivot] <= nums[end]) {
            end--;
        }

        if(start > end) {
            break;
        }

        [nums[start], nums[end]] = [nums[end], nums[start]];
    }
    [nums[end], nums[pivot]] = [nums[pivot], nums[end]];

    // it's breaking point
    return end;
}
