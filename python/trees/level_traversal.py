# Binary Tree Level Order Traversal

# Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

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

from collections import deque

def levelOrder(root: Node) -> list:
    if not root:
        return []
    # save all nodes from a level in dequeue
    q = deque()
    res = []
    q.append(root)

    while q:
        # save all nodes in this level
        level = []
        # iterate through nodes at this level
        for i in range(len(q)):
            # dequeue node and save his value
            curr = q.popleft()
            level.append(curr.val)
            # enqueue the next nodes from another levels
            if curr.left:
                q.append(curr.left)
            if curr.right:
                q.append(curr.right)
        # save nodes from this level in res
        res.append(level)

    return res

# testing
print(levelOrder(a))
# expected output:
# [[5], [1, 4], [3, 6]]