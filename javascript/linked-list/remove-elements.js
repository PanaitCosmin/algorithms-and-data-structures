// Remove Linked List Elements

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

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
// initialize the nodes
let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(6)
let node4 = new ListNode(3)
let node5 = new ListNode(4)
let node6 = new ListNode(5)
let node7 = new ListNode(6)
// initilize the linked lists
const list = new LinkedList(node1)
list.add(node2)
list.add(node3)
list.add(node4)
list.add(node5)
list.add(node6)
list.add(node7)

function removeElements(head, val) {
    let dummy = new ListNode()
    dummy.next = head
    let prev = dummy
    let curr = head

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next
            curr = curr.next
        } else {
            prev = curr
            curr = curr.next
        }
    }

    return dummy.next
}

// testing
console.log(removeElements(list.head, 6))
// expected output:
// ListNode(1) -> ListNode(2) -> ListNode(3) -> ... 