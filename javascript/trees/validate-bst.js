// Validate Binary Search Tree

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

//     The left
//     subtree
//     of a node contains only nodes with keys less than the node's key.
//     The right subtree of a node contains only nodes with keys greater than the node's key.
//     Both the left and right subtrees must also be binary search trees.


class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
// initilize nodes
const a = new Node(5) 
const b = new Node(1)
const c = new Node(4)
const d = new Node(3)
const e = new Node(6)

a.left = b
a.right = c
c.left  = d
c.right = e


function isValidBST(root, left = -Infinity, right = Infinity) {
    if (!root) return true
    // doesn't respect the BST condtions
    if (!(root.val > left && root.val < right)) return false
    // apply the BST rules for left and right
    return ( isValidBST(root.left, left, root.val) && isValidBST(root.right, root.val, right))
}

// testing
console.log(isValidBST(a))
// expected output: false