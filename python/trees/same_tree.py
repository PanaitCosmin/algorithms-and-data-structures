# Given the roots of two binary trees p and q, write a function to check if they are the same or not.

# Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

class Node:
    def __init__(self, val, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right

# Initialize the nodes
a = Node(1)
b = Node(2)
c = Node(3)
d = Node(1)
e = Node(2)
f = Node(3)

# Connect the nodes to form a binary search tree
a.left = b
a.right = c
d.left = e
d.right = f


def isSameTree(p: Node, q: Node) -> bool:
    # return true if both trees are empty
    if not p and not q:
        return True
    # return false if one tree is empty
    if not p or not q:
        return False
    # check for the same values in nodes
    if p.val != q.val:
        return False
    # check for the left and right 
    return (isSameTree(p.left, q.left) and isSameTree(p.right, q.right))

# testing
print(isSameTree(a, d))
# expected output: True