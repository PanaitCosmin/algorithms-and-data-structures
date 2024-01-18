// Subtree of Another Tree

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself


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
const z = new Node(5)
const x = new Node(10)
// first tree
z.left = a
z.right = x
a.left = b
a.right = c
// second tree
d.left = e
d.right = f


function isSubtree(root, subRoot) {
    // an empty tree is a subtree
    if (!subRoot) return true
    if (!root) return false
    // check subtree by the root node
    if (isSameTree(root, subRoot)) {
        return true
    }
    // check subtree by the left or tight root node
    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
}

function isSameTree(p, q) {
    if (!p && !q) return true
    if (!p || !q) return false
    return (p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
}