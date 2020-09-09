// 212. Word Search II
/*
Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. 
The same letter cell may not be used more than once in a word.

Example:
Input:
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]

Note:
All inputs are consist of lowercase letters a-z.
The values of words are distinct.
*/
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let res = [];

  if (!board || !words || board.length < 1) return [];

  for (const word of words) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (
          board[i][j] === word.charAt(0) &&
          dfs(board, i, j, 0, word) &&
          !res.includes(word)
        ) {
          res.push(word);
        }
      }
    }
  }

  return res;
};

var dfs = (board, i, j, count, word) => {
  if (!board || board.length === 0) return false;

  if (count === word.length) return true;

  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[i].length ||
    board[i][j] !== word.charAt(count)
  ) {
    return false;
  }

  let temp = board[i][j];
  board[i][j] = " ";

  let found =
    dfs(board, i + 1, j, count + 1, word) ||
    dfs(board, i - 1, j, count + 1, word) ||
    dfs(board, i, j + 1, count + 1, word) ||
    dfs(board, i, j - 1, count + 1, word);

  board[i][j] = temp;

  return found;
};
