# Maximum Depth of Binary Tree

# Given the root of a binary tree, return its maximum depth.

# A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

class Node:
    def __init__(self, val, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right

# Initialize the nodes
a = Node(4)
b = Node(2)
c = Node(7)
d = Node(1)
e = Node(3)


# Connect the nodes to form a binary search tree
a.left = b
a.right = c
c.left = d
c.right = e

def maxDepth(root: Node) -> int:
    if not root:
        return 0
    res = 0
    stack = [[root, 1]] # node and his level
    # loop through list in a dfs style
    while (stack):
        # get node and his level
        curr, depth = stack.pop()

        if curr:
            # check for heigher depth
            res = max(res, depth)
            # add right and left with their levels
            stack.append([curr.right, depth + 1])
            stack.append([curr.left, depth + 1])
    
    return res

# testing
print(maxDepth(a))
# expected output: 3
