// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

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
let node3 = new ListNode(3)
let node4 = new ListNode(4)
let node5 = new ListNode(5)
// initilize the linked lists
const list = new LinkedList(node1)
list.add(node2)
list.add(node3)
list.add(node4)
list.add(node5)

function middle(head) {
    // initialize slow and fast pointer
    let [slow, fast] = [head, head]
    // loop through list
    while (fast && fast.next) {
        // update pointers
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

// testing
console.log(middle(list.head))
// expected output:
// ListNode(3) -> ListNode(4) -> ListNode(5) ->