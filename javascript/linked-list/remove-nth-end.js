// Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// impelemnting node 
class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

// Implementing a Linked List
class LinkedList {
    constructor(head = null) {
        this.head = head
        this.tail = head
    }

    add(node) {
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
let node5 = new ListNode(5)

let list = new LinkedList(node1)
list.add(node2)
list.add(node3)
list.add(node4)
list.add(node5)

function removeNthFromEnd(head, n) {
    // initialize dummy node 
    const dummyNode = new ListNode(0, head)
    // initialize left and right 
    let left = dummyNode
    let right = left.next
    // move the right if possible
    while (n > 0 && right) {
        right = right.next
        n--
    }
    // move left node until right is at the end
    while (right) {
        // move the left and right 
        right = right.next
        left = left.next
    }
    // move the reference to the next node after the Nth
    left.next = left.next.next
    // return the head of the list
    return dummyNode.next
}

// testing
console.log(removeNthFromEnd(list.head, 3))
// expected output: ListNode {val:1, next: ListNode { val: 2, next: ListNode { val: 4, next: [ListNode] } } }