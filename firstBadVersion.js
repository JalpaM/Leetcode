// 278. First Bad Version
/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example:
Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version.
*/

// Time complexity: O(log n)
let solution = function(isBadVersion) {
    return function(n) {
        // if parameter is an array then left should be 0 as index starts from 0 otherwise 1
        let left = 1, right = n;
        while(left < right) {
            let mid = left + Math.floor((right - left)/2);

            // check for mid and if mid is not a bad version then all versions before mid should not be bad version
            if(!isBadVersion(mid)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    };
};
