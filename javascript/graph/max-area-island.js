// ou are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

function maxAreaOfIsland(grid) {
  if (!grid) return 0;
  // get num of rows and cols
  const [rows, cols] = [grid.length, grid[0].length];
  // save visited coordination
  const visited = new Set();
  // numbers of islands
  let maxArea = 0;
  // search for neighbor land
  function bfs(r, c) {
    // simulate a queue
    const q = [];
    // area of the curent island
    let currentArea = 1;
    // add visited land
    visited.add(`${r},${c}`);
    // push the land
    q.push([r, c]);

    while (q.length > 0) {
      // get the land;s coordinates
      const [row, col] = q.shift();
      // directions for the land's neighbors
      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];

      for (const [dr, dc] of directions) {
        // compute the neighbor's coordinates
        const newR = row + dr;
        const newC = col + dc;
        // check for index overflow and unvisited land
        if (
          newR >= 0 &&
          newR < rows &&
          newC >= 0 &&
          newC < cols &&
          grid[newR][newC] === 1 &&
          !visited.has(`${newR},${newC}`)
        ) {
          // push and visited the new land
          q.push([newR, newC]);
          visited.add(`${newR},${newC}`);
          // increment the island area
          currentArea += 1;
        }
      }
    }

    return currentArea;
  }
  // loop through grid
  for (let row5 = 0; row5 < rows; row5++) {
    for (let col5 = 0; col5 < cols; col5++) {
      // find an unvisited piece of land
      if (grid[row5][col5] === 1 && !visited.has(`${row5},${col5}`)) {
        // search down, up, right, left neighbor of this land to form an island
        maxArea = Math.max(maxArea, bfs(row5, col5));
      }
    }
  }
  return maxArea;
}

// testing
console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
// expected output: 6