// Say that you are a traveler on a 2D grid.
// You begin in the top-left corner and your goal is to travel to the bottom-rught corner.
// You may only move down or right.
// In how many ways can you travel to the goal on a grid with dimensions n * m ?

function gridTraveler(n,m, memo = {}) {
    // create a key with the grid dimensions
    const key = `${n},${m}`

    if (key in memo) return memo[key]
    // invalid grid
    if (n === 0 || m === 0) return 0
    // grid of dimension 1
    if (m === 1 && n === 1) return 1
    
    memo[key] = gridTraveler(n-1, m, memo) + gridTraveler(n, m - 1, memo)

    return memo[key]
}

// testing
console.log(gridTraveler(3,2)) // expected output: 3
console.log(gridTraveler(3,3)) // expected output: 6
