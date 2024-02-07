# Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

# A region is captured by flipping all 'O's into 'X's in that surrounded region.

def surrounded(board: list) -> list:

    def capture(r: int, c: int) -> None:
        # get the number of rows and cols
        rows, cols = len(board), len(board[0]) 
        # check for coordinates out of bounds and if is "O"
        if r < 0 or c < 0 or r == rows or c == cols or board[r][c] != "O":
            return
        # convert the finded region "O" -> "A"
        board[r][c] = "A"
        # convert all the neighbors of the finded "O" if possible
        capture(r + 1, c)
        capture(r - 1, c)
        capture(r, c + 1)
        capture(r, c - 1)

        # loop through each element on the board's edge
        for r in range(rows):
            for c in range(cols):
                # convert region and all surrounded region "O" -> "A"
                if board[r][c] == "O" and (r in [0, rows - 1] or c in [0, cols - 1]):
                    capture(r, c)

        # capture the remaining regions "O" -> "X"
        for r in range(rows):
            for c in range(cols):
                if board[r][c] == "O":
                    board[r][c] == "X"
        # convert all uncaptured regions back "A" -> "O"
        for r in range(rows):
            for c in range(cols):
                if board[r][c] == "A":
                    board[r][c] == "O"
        
        return board
    
# testing
print(surrounded([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]))

