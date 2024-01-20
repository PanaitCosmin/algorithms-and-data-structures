// Binary Tree Level Order Traversal

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

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


// Implementing Queue
class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
  }


function levelOrder(root) {
    if (!root) return []
    // save all nodes from a level in queue
    const queue = new Queue()
    const res = []
    queue.enqueue(root)
    // iterate through queue
    while (queue.length) {
        // save all nodes in this level
        const level = []
        // get the number of the nodes at this level
        const size = queue.length
        // iterate through nodes at this level
        for (let i = 0; i < size; i++) {
            // dequeue node and save his value
            const curr = queue.dequeue()
            level.push(curr.val)
            // enqueue the next nodes from another levels
            if (curr.left) queue.enqueue(curr.left)
            if (curr.right) queue.enqueue(curr.right)
        }
        // save nodes from this level in res
        res.push(level)     
    }

    return res
}

// testing
console.log(levelOrder(a))
// expected output:
// [ [ 5 ], [ 1, 4 ], [ 3, 6 ] ]