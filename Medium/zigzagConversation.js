// 6. ZigZag Conversion
/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
*/
var convert = function(s, numRows) {
    let res = Array.from({ length: numRows }, () => ''); // creating array of strings with equal number of numRows

    let rowToInsert = 0;
    let reverse = false;

    for(const c of s) {
        res[rowToInsert] += c;  // appending to the existing
        reverse ? rowToInsert-- : rowToInsert++;  // incrementing row for going down row and decrementing for going up row

        if(rowToInsert === numRows) {  // checking for out of bound
            rowToInsert = numRows > 1 ? (rowToInsert - 2) : 0; // for out of bound, if numRows as 3 then next
                                                              // character needs to print on 1st row, that's why '- 2'
            reverse = true;
        }

        if(rowToInsert === 0) {  // reverse the direction when reaches row as 0 to avoid going out of bound
            reverse = false;
        }
    }

    return res.join('');
};
