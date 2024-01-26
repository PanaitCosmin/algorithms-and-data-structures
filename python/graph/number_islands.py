# Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

# An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

from collections import deque

def numIslands(grid: list) -> int:
    if not grid:
        return 0
    # get num of rows and cols
    rows, cols = len(grid), len(grid[0])
    # visited coordinates
    visited=set()
    # numbers of islands
    islands=0
    # search fro neigbors land
    def bfs(r,c):
        q = deque()
        # add visited land
        visited.add((r,c))
        q.append((r,c))
           
        while q:
            # get the land's coordinates
            row,col = q.popleft()
            # directions for the land's neighbors
            directions= [[1,0],[-1,0],[0,1],[0,-1]]
            
            for dr,dc in directions:
                # compute the neighbor's coordinates
                r,c = row + dr, col + dc
                # check for index overflow and unvisited land
                if (r) in range(rows) and (c) in range(cols) and grid[r][c] == '1' and (r ,c) not in visited:
                    # push and visit the new land
                    q.append((r , c ))
                    visited.add((r, c ))
    # loop through grid
    for r in range(rows):
        for c in range(cols):
            # find an unvisited land
            if grid[r][c] == "1" and (r,c) not in visited:
                # search down, up, right, left neighbor of this land
                bfs(r,c)
                # add island
                islands +=1 

    return islands

# testing
print(numIslands(
[
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
))
# expected output: 3