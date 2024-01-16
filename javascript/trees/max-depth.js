// Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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

function maxDepth(root) {
    let res = 0
    if (!root) return 0
    const stack = [ [root,1]] // node and his level
    // loop through nodes in a dfs style
    while (stack.length > 0) {
        // get the node and his level
        const [curr, depth] = stack.pop()
        if (curr) {
            // check for a higher depth
            res = Math.max(res, depth)
            // add the next nodes
            stack.push([curr.right, depth+1])
            stack.push([curr.left, depth+1])
        }
    }
    return res
}

// testing
console.log(maxDepth(a))
// expected output: 3