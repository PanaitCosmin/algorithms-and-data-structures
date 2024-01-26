// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


function numberIslands(grid) {
    if (!grid) return 0

    // get num of rows and cols
    const [ rows, cols ] = [ grid.length, grid[0].length]
    // save visited coordination
    const visited = new Set()
    // numbers of islands
    let numIslands = 0
    // search for neighbor land
    function bfs(r, c) {
        // simulate a queue
        const q = []
        // add visited land
        visited.add(`${r},${c}`)
        // push the land
        q.push([r, c])
    
        while (q.length > 0) {
            // get the land;s coordinates
            const [ row, col ] = q.shift()
            // directions for the land's neighbors
            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];    
        
            for (const [dr, dc] of directions) {
                // compute the neighbor's coordinates
                const newR = row + dr
                const newC = col + dc
                // check for index overflow and unvisited land
                if (
                    newR >= 0 &&
                    newR < rows &&
                    newC >= 0 &&
                    newC < cols &&
                    grid[newR][newC] === '1' &&
                    !visited.has(`${newR},${newC}`)
                ) {
                    // push and visited the new land
                    q.push([newR, newC])
                    visited.add(`${newR},${newC}`)
                }
            }
        }
    }
    // loop through grid
    for (let row5 = 0; row5 < rows; row5++) {
        for (let col5 = 0; col5 < cols; col5++) {
            // find an unvisited piece of land
            if (grid[row5][col5] === '1' && !visited.has(`${row5},${col5}`)) {
                // search down, up, right, left neighbor of this land
                bfs(row5, col5)
                // add island
                numIslands++
            }
        }
    }

    return numIslands
}

// testing
console.log(numberIslands(
    [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
    ]
))
// expected output: 3

