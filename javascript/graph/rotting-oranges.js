// You are given an m x n grid where each cell can have one of three values:

//     0 representing an empty cell,
//     1 representing a fresh orange, or
//     2 representing a rotten orange.

// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

function orangesRotting(grid) {
    let [rows, cols] = [grid.length, grid[0].length]
    let minutes = 0
    const rotting = (r, c) => {
        if (r < 0 || c < 0 || r === rows || c === cols || grid[r][c] === 0) return

        if (grid[r][c] === 2) {
            
        }
        
        rotting(r + 1, c)
        rotting(r - 1, c)
        rotting(r, c + 1)
        rotting(r, c - 1)
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 0) continue
            rotting(r, c)
            minutes++
        }
    }
}