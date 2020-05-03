// 4. Median of Two Sorted Arrays
/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
You may assume nums1 and nums2 cannot be both empty.

Example 1:
nums1 = [1, 3]
nums2 = [2]
The median is 2.0

Example 2:
nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5
*/

class MedianOfTwoSortedArraysBST {
  medianOfTwoSortedArrays = (input1, input2) => {
    //if input1 length is greater than input2 then switch them so that input1 becomes smaller than input2.
    if(input1.length > input2.length) {
      return medianOfTwoSortedArrays(input2, input1);
    }

    let x = input1.length;
    let y = input2.length;
    let low = 0;
    let high = x;

    while(low <= high) {
      // partitionX and partitionY are the points from where both input arrays are partitioned
      // partition should happen in a way where both inputs should have same number of elements or 1 input
      // should have only 1 extra element
      let partitionX = low + Math.floor((high - low) / 2);
      let partitionY = (x + y + 1)/2 - partitionX; // 1 is added to easily calcuate odd and even number of total elements

      //if partitionX is 0, it means no element present on the left side and all elemnts are on right side. Use -INF for maxLeftX
      //if partitionX is length of input then there is nothing on right side. Use +INF for minRightX
      let maxLeftX = (partitionX === 0) ? Number.NEGATIVE_INFINITY : input1[partitionX - 1];
      let minRightX = (partitionX === 0) ? Number.POSITIVE_INFINITY : input1[partitionX];

      let maxLeftY = (partitionY === 0) ? Number.NEGATIVE_INFINITY : input2[partitionY - 1];
      let minRightY = (partitionY === 0) ? Number.POSITIVE_INFINITY : input2[partitionY];

      if(maxLeftX <= minRightY && maxLeftY <= minRightX) {
        // We have partitioned array at correct place
        // Now get max of left elements and min of right elements to get the median in case of even length combined array size
        // or get max of left for odd length combined array size.
        if((x + y) % 2 === 0) {
          // even number of elements
          return ((Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY))/ 2);
        } else {
          // odd number of elements
          return Math.max(maxLeftX, maxLeftY);
        }
      } else if(maxLeftX > minRightY) { //we are too far on right side for partitionX. Go on left side.
          high = partitionX - 1;
      } else {//we are too far on left side for partitionX. Go on right side.
          low = partitionX + 1;
      }
    }
  }
}

var median = new MedianOfTwoSortedArraysBST();
alert(median.medianOfTwoSortedArrays([1, 3, 8, 9, 15], [7, 11, 19, 21, 28, 35]));
