# Diameter of Binary Tree

# Given the root of a binary tree, return the length of the diameter of the tree.

# The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

# The length of a path between two nodes is represented by the number of edges between them.

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
b.left = d
b.right = e



def diameterBinaryTree(root: Node) -> int:
    res = 0

    def dfs(root):
        nonlocal res
        if not root:
            return 0
        
        left = dfs(root.left)
        right = dfs(root.right)

        res = max(res, left + right )

        return 1 + max(left, right)

    dfs(root)

    return res

# testing
print(diameterBinaryTree(a))
# expected output: 3