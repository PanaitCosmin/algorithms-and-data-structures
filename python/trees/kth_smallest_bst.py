# Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

class Node:
    def __init__(self, val, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right

# Initialize the nodes
a = Node(5)
b = Node(3)
c = Node(6)
d = Node(2)
e = Node(4)
f = Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
d.left = f

# we add in stack all nodes from the left which have the lowest value bcs BST
# decrement k after popping the last node (left) in stack and check if k = 0
# push the sibling node (right) and test


def kthSmallest(root: Node, k: int) -> int:
    if not root:
        return 0
    
    stack = []
    curr = root

    while (curr or stack):

        while curr:
            stack.append(curr)
            curr = curr.left

        curr = stack.pop()
        k -= 1
        if k == 0:
            return curr.val
        
        curr = curr.right

# testing
print(kthSmallest(a, 3))
# expected output: 3