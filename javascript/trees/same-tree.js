// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
// initilize nodes
const a = new Node(1) 
const b = new Node(2)
const c = new Node(3)
const d = new Node(1)
const e = new Node(2)
const f = new Node(3)


a.left = b
a.right = c
d.left = e
d.right = f


function sameTree(p, q) {
    // return true if both trees are empty
    if (!p && !q) return true
    // return false if one tree is empty
    if (!p || !q) return false
    // check for the same values in nodes
    if (p.val !== q.val) return false
    // check for the left and right 
    return (sameTree(p.left, q.left) && sameTree(p.right, q.right))
}

// testing
console.log(sameTree(a, d))
// expected output: true