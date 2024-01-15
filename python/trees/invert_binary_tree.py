# Given the root of a binary tree, invert the tree, and return its root.

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
f = Node(6)
g = Node(9)

# Connect the nodes to form a binary search tree
a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g

def invertBinaryTree(root):
    # best case
    if not root:
        return root
    # invert the left and right for the current node
    temp = root.left
    root.left = root.right
    root.right = temp
    # invert the children of the current node
    invertBinaryTree(root.left)
    invertBinaryTree(root.right)

    return root

# testing
print(invertBinaryTree(a))