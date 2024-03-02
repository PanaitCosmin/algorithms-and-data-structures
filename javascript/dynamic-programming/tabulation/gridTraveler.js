// Say that you are a traveler on a 2D grid.
// You begin in the top-left corner and your goal is to travel to the bottom-rught corner.
// You may only move down or right.
// In how many ways can you travel to the goal on a grid with dimensions n * m ?

function gridTraveler(m, n) {
    // create 2D matrix filled with 0
    const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0))
    // initialize the base case 
    table[1][1]
    // loop throught table
    for(let i = 0; i <= m; i++) {
        for(let j = 0; j <= n; j++) {
            // save the current number of way to travel a i X j grid 
            const current = table[i][j]
            // update the right and down neighbors
            if (j + 1 <= n) table[i][j + 1] += current
            if (i + 1 <= m) table[i + 1][j] += current
        }
    }

    return table[m][n]
}

// testing
console.log(gridTraveler(3,2)) // expected output: 3
console.log(gridTraveler(3,3)) // expected output: 6
