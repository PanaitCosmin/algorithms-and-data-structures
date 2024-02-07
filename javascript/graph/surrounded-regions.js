// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

function surrounded(board) {
    const capture = (r, c) => {
        // check the coordinates out of bounds and if is "O"
        if (r < 0 || c < 0 || r === rows || c === cols || board[r][c] !== "O") return 
        // convert the finded region
        board[r][c] = "A"
        // convert all the regions of the finded "O" if possible
        capture(r + 1, c)
        capture(r - 1, c)
        capture(r, c + 1)
        capture(r, c - 1)
    }
    // get the number of rows and cols
    const [rows, cols] = [board.length, board[0].length]
    // loop through each element on the board's edge
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // convert region and all surrounded region "O" -> "A"
            if ((r === 0 || r === rows - 1 || c === 0 || c === cols - 1) && board[r][c] === "O") {
                capture(r, c, board);
            }
        }
    }
    // capture the remaining regions "O" -> "X"
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === "O") {
                board[r][c] = "X"
            }
        }
    }
    // convert all uncaptured regions back "A" -> "O"
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === "A") {
                board[r][c] = "O"
            }
        }
    }

    return board
}

// testing
console.log(surrounded([
    ["X","X","X","X"],
    ["X","O","O","X"],
    ["X","X","O","X"],
    ["X","O","X","X"]
]))

// expected output:
/* [
  [ 'X', 'X', 'X', 'X' ],
  [ 'X', 'X', 'X', 'X' ],
  [ 'X', 'X', 'X', 'X' ],
  [ 'X', 'O', 'X', 'X' ]
]
*/