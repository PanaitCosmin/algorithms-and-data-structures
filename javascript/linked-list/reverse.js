// Given the head of a singly linked list, 
// reverse the list, and return the reversed list.

// impelemnting node 
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
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

function reverseList(head) {
    let prev = null
    let current = head

    while (current) {
        let next = current.next
        current.next = prev
        prev = current
        // move to the next list node
        current = next
    }

    return prev
}

// testing
console.log(reverseList(list.head)) 
// expected output: ListNode {val: 5, next: ListNode{}}