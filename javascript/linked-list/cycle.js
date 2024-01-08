// Linked List Cycle

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

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
// nodes list 
let node1 = new ListNode(3)
let node2 = new ListNode(2)
let node3 = new ListNode(0)
let node4 = new ListNode(-4)
// initialize linked list
const list = new LinkedList(node1)
list.add(node2)
list.add(node3)
list.add(node4)
list.add(node2)

function hasCycle(head) {
    // Floyd’s slow and fast pointers algorithm
    // initialize pointers
    let slow = head
    let fast = head
    // loop if we have a next node in list
    while (fast && fast.next) {
        // move slow and fast pointers
        slow = slow.next
        fast = fast.next.next
        // check for the existance of the loop
        if (slow === fast) return true
    }
    return false
}

// testing
console.log(hasCycle(list.head))
// expected output: true