// Given the root of a binary tree, invert the tree, and return its root.

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
// initilize nodes
const a = new Node(4) //root node
const b = new Node(2)
const c = new Node(7)
const d = new Node(1)
const e = new Node(3)
const f = new Node(6)
const g = new Node(9)

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g

function invertTree(root) {
    // best case
    if (root === null) return root
    // invert the left and right for the current node
    const tempNode = root.left
    root.left = root.right
    root.right = tempNode
    // invert the children of the current node
    invertTree(root.left)
    invertTree(root.right)

    return root
}


// testing
console.log(invertTree(a))