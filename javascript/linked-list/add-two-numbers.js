// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

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
let node1 = new ListNode(2)
let node2 = new ListNode(4)
let node3 = new ListNode(3)
let node4 = new ListNode(5)
let node5 = new ListNode(6)
let node6 = new ListNode(4)
// initilize the linked lists
const list1 = new LinkedList(node1)
list1.add(node2)
list1.add(node3)

const list2 = new LinkedList(node4)
list2.add(node5)
list2.add(node6)

function addTwoNumbers(head1, head2) {
    // create a dummy node for the new linked list
    const dummy = new ListNode() // head of the sum list
    // save the pointer reference
    let curr = dummy
    // initialize carry
    let carry = 0
    // loop through lists
    while (head1 || head2 || carry) {
        // get the values of the nodes if possilbe else 0
        const val1 = head1 ? head1.val : 0
        const val2 = head2 ? head2.val : 0
        // compute the sum
        let sum  = val1 + val2 + carry
        // update carry
        carry =  Math.floor(sum / 10)
        // get the last digit of the sum
        sum = sum % 10
        // create a node with this value and link it 
        curr.next = new ListNode(sum)
        // move sum list pointer
        curr = curr.next
        // move the pointers if it's possible
        head1 = head1 ? head1.next : null
        head2 = head2 ? head2.next : null
    }

    return dummy.next
}

// testing
console.log(addTwoNumbers(list1.head, list2.head))
// expected output: 
// ListNode(7) -> ListNode(0) -> ListNode(8) -> 