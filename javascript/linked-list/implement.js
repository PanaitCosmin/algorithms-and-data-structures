// Implementing a List Node 
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
    }
    // count nodes of the list
    size() {
        let count = 0
        let current = this.head
        while (current) {
            count++
            current = current.next
        }
        return count
    }
    // return the last node of the list
    getLast() {
        let last = this.head
        while (last && last.next) {
            last = last.next
        }
        return last
    }
    // print all the values of the nodes
    traversal() {
        let current = this.head
        while (current) {
            console.log(`${current.val}`)
            current = current.next
        }
        return;
    }
}
// create nodes
let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
// set pointers
node1.next = node2
node2.next = node3
// create linked list
let list = new LinkedList(node1)
// acces the last node's value in the list 
console.log(list.head.next.next.val) // expected: 3
// return the size
console.log(list.size()) // expected: 3
// return the last node
console.log(list.getLast())

list.traversal()