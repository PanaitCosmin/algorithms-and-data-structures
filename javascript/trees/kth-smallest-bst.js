// Kth Smallest Element in a BST

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
// initilize nodes
const a = new Node(5) 
const b = new Node(3)
const c = new Node(6)
const d = new Node(2)
const e = new Node(4)
const f = new Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
d.left = f

// we add in stack all nodes from the left which have the lowest value bcs BST
// decrement k after popping the last node (left) in arr and check if k = 0
// push the sibling node (right) and test

function kthSmallest(root, k) {
    if (!root) return 0
    const stack = []
    let curr = root

    while (curr || stack.length) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }

        curr = stack.pop()
        k -= 1
        if (k === 0) return curr.val

        curr = curr.right
    }
}

// testing
console.log(kthSmallest(a, 3))
// expected output: 3