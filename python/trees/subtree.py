# Subtree of Another Tree

# Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

# A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

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
z = Node(10)
x = Node(11)

# Connect the nodes to form a binary search tree
# The first tree
z.left = a
z.right  =x
a.left = b
a.right = c
# The second tree
d.left = e
d.right = f


def isSubtree(root: Node, subRoot: Node) -> bool:
    # an empty tree is subtree of any tree
    if not subRoot:
        return True
    if not root:
        return False
    # ckech for subtree from the root node
    if isSameTree(root, subRoot):
        return True
    # check for subtree from the left or right root node
    return (isSameTree(root.left, subRoot) or isSameTree(root.right, subRoot))


def isSameTree(p: Node, q: Node) -> bool:
    if not p and not q:
        return True
    if not p or not q:
        return False
    
    return (p.val == q.val and isSameTree(p.left, q.left) and isSameTree(p.right, q.right))

# testing
print(isSubtree(z, d))
# expected output: True