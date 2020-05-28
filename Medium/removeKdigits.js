// 402. Remove K Digits
/*
Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.
Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.

Example 1:
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

Example 2:
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

Example 3:
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
*/
var peek = stack => {
    return stack[stack.length - 1];
}

var removeKdigits = function(num, k) {
    let myStack = [];
    num = num.split('');
    myStack[0] = num[0];

    for(let i = 1; i < num.length; i++) {
        // 143 => 1 and 4 are already in stack, 3 is smaller than 4 so 4 will be poped of and removed
        while(myStack.length && k > 0 && peek(myStack) > num[i]) {
            myStack.pop();
            k--;
        }
        // store value other than 0
        if(myStack.length || num[i] !== '0') {
            myStack.push(num[i]);
        }
    }

    // 123 where all numbers are in ascending order so above while loop doesn't pop any element
    // so the maximum number will be at the end and should be removed
    while(myStack.length && k--) {
        myStack.pop();
    }

    // nums = 1001 and k = 2 so myStack doesn't have any element as it doesn't store value with 0
    if(myStack.length === 0) return '0';

    return myStack.join("");
};
