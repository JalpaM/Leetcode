/*

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true

*/
const containsDuplicate = function(nums) {
    let fre = new Map();

    // loop through each element
    for(let i = 0; i < nums.length; i++) {
        // check for existing element in fre
        // set to value as 1 if not exist else return true
        if(!fre.get(nums[i])) {
            fre.set(nums[i], 1);
        } else {
            return true;
        }
    }

    // return false
    return false;
};
