/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input:
11110
11010
11000
00000
Output: 1

Example 2:
Input:
11000
11000
00100
00011
Output: 3
*/

function numIslands(grid) {
  if(grid === null || grid.length === 0) return 0;

  let numsIslands = 0;

  for(let i =0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      // consider only grid[i][j] which has value 1
      if(grid[i][j] === '1') {
        numsIslands += dfs(grid, i, j);
      }
    }
  }

  return numsIslands;
}

function dfs(grid, i, j) {
  // if row or column outside of grid or grid[i][j] as 0 then set to 0
  if(i < 0 || i > grid.length || j < 0 || j > grid[i].length || grid[i][j] === '0') {
    return 0;
  }

  // set grid[i][j] as visited by setting value as 0
  grid[i][j] = '0';

  dfs(grid, i + 1, j);  // row above grid[i][j] element
  dfs(grid, i - 1, j);  // row below grid[i][j] element
  dfs(grid, i, j + 1);  // column next to grid[i][j] element
  dfs(grid, i, j - 1);  // column previous to grid[i][j] element

  return 1;
}
