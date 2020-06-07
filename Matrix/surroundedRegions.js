// 130. Surrounded Regions
/*
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X

Explanation:
Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'.
Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'.
Two cells are connected if they are adjacent cells connected horizontally or vertically.
*/
var solve = function(board) {
    var rowCount = board.length;
    var colCount = rowCount ? board[0].length : 0;
    if (rowCount < 3 || colCount < 3) return;
    // dfs means make O's which shold not flipped to #
    var dfs = function(i, j) {
        if (i <= 0 || i >= rowCount - 1 || j <= 0 || j >= colCount - 1) return;
        if (board[i][j] === 'X') return;
        if (board[i][j] === '#') return;
        board[i][j] = '#'; // set as visited
        dfs(i, j + 1);
        dfs(i, j - 1);
        dfs(i + 1, j);
        dfs(i - 1, j);
    }

    // make O's which shold not flipped to #
    for (var i = 0; i < rowCount; i++) {
        // if 1st column has value 0 then next column with value 0 should not change
        board[i][0] === 'O' && dfs(i, 1);

        // if last column has value 0 then previous to last column with value 0 should not change
        board[i][colCount - 1] === 'O' && dfs(i, colCount - 2);
    }
    for (var i = 0; i < colCount; i++) {
        // if 1st row has value 0 then next row with value 0 should not change
        board[0][i] === 'O' && dfs(1, i);

        // if last row has value 0 then previous to last row with value 0 should not change
        board[rowCount - 1][i] === 'O' && dfs(rowCount - 2, i);
    }

    // # back to O, others are X
    for (var i = 1; i < rowCount - 1; i++) {
        for (var j = 1; j < colCount - 1; j++) {
            // if element with value already visited then set back to 0
            if (board[i][j] === '#') board[i][j] = 'O';
            else board[i][j] = 'X';
        }
    }
};
