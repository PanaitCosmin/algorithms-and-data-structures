// Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

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
// nodes list 1
let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(4)
let node4 = new ListNode(6)
let node5 = new ListNode(7)

let list1 = new LinkedList(node1)
list1.add(node2)
list1.add(node3)
list1.add(node4)
list1.add(node5)
// nodes list 2
let node6 = new ListNode(1)
let node7 = new ListNode(3)
let node8 = new ListNode(4)
let node9 = new ListNode(5)
let node10 = new ListNode(8)

let list2 = new LinkedList(node6)
list2.add(node7)
list2.add(node8)
list2.add(node9)
list2.add(node10)

function mergeTwoLists(head1, head2) {
    // create a node for the new merged list
    let mergedNode = new ListNode()
    // save a referance of the list head
    const mergedNodeHead = mergedNode
    // loop through nodes lists
    while (head1 && head2) {
        if (head1.val <= head2.val) {
            // link the nodes with the lower node value
            mergedNode.next = head1
            // move to the next node
            head1 = head1.next
        } else {
            // link the nodes with the lower node value
            mergedNode.next = head2
            // move to the next node
            head2 = head2.next
        }
        // move to the next node in merged list
        mergedNode = mergedNode.next
    }
    // move all the remaining nodes from one of the list
    mergedNode.next = head1 || head2
    // return the head of the new list
    return mergedNodeHead.next
}

// testing
console.log(mergeTwoLists(list1.head, list2.head))
// expected output: ListNode{val:1, next: ListNode{val:1, [...]}}