// Diameter of Binary Tree
// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
// initilize nodes
const a = new Node(3) //root node
const b = new Node(9)
const c = new Node(20)
const d = new Node(15)
const e = new Node(7)


a.left = b
a.right = c
c.left = d
c.right = e


function diameterBinaryTree(root) {
    let res = 0
    const dfs = (root) => {
        if (!root) return -1

        const left = dfs(root.left)
        const right = dfs(root.right)

        res = Math.max(res, left + right + 2)

        return 1 + Math.max(left, right)
    }

    dfs(root)

    return res
}

// testing
console.log(diameterBinaryTree(a))
// expected output: 3