// 79. Word Search
/*
Given a 2D board and a word, find if the word exists in the grid.
The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

Constraints:
board and word consists only of lowercase and uppercase English letters.
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3
*/
// similar to number of islands
// Time complexity: O(n^2)
var exist = (board, word) => {
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(board[i][j] === word.charAt(0) && dfs(board, i, j, 0, word)) {
        return true;
      }
    }
  }

  return false;
}

var dfs = (board, i, j, count, word) => {
  if(count === word.length) return true;

  // set to false for out of bound or next character doesn't match
  if(i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] !== word.charAt(count)) {
    return false;
  }

  let temp = board[i][j]; // need to remember current element as need to add back after recursion call
  board[i][j] = ' '; // current element so set as visited
  let found = dfs(board, i + 1, j, count + 1, word) // next row and same column element
              || dfs(board, i - 1, j, count + 1, word) // previous row and same column element
              || dfs(board, i, j + 1, count + 1, word) // next column and same row element
              || dfs(board, i, j - 1, count + 1, word); // previous column and same row element

  board[i][j] = temp; // setting back the current value
  return found;
}
