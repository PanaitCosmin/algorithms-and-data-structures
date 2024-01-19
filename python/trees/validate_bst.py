# Validate Binary Search Tree

# Given the root of a binary tree, determine if it is a valid binary search tree (BST).

# A valid BST is defined as follows:

#     The left
#     subtree
#     of a node contains only nodes with keys less than the node's key.
#     The right subtree of a node contains only nodes with keys greater than the node's key.
#     Both the left and right subtrees must also be binary search trees.


class Node:
    def __init__(self, val, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right

# Initialize the nodes
a = Node(5)
b = Node(1)
c = Node(4)
d = Node(3)
e = Node(6)


# Connect the nodes to form a binary search tree
a.left = b
a.right = c
c.left = d
c.right = e

def isValidateBST(root: Node, left = float("-inf"), right = float("inf")):
    if not root:
        return True
    # doesn't respect the BST condtions
    if not (left < root.val < right):
        return False
    # apply the BST rules for left and right
    return isValidateBST(root.left, left, root.val) and isValidateBST(root.right, root.val, right)


# testing
print(isValidateBST(a))
# expected output: False