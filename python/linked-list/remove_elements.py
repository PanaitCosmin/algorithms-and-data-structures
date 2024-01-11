# Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

# Implementing a List Node
class Node:
    def __init__(self, val) -> None:
        self.val = val
        self.next = None

# Implementing a Linked List
class LinkedList:
    def __init__(self, head) -> None:
        self.head = head
        self.tail = head
    
    def add(self, node):
        if not self.head:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node

node1 = Node(1)
node2 = Node(2)
node3 = Node(6)
node4 = Node(3)
node5 = Node(4)
node6 = Node(5)
node7 = Node(6)

linkedList = LinkedList(node1)
linkedList.add(node2)
linkedList.add(node3)
linkedList.add(node4)
linkedList.add(node5)
linkedList.add(node6)
linkedList.add(node7)

def removeElements(head: Node, val: int) -> Node:
    dummy = Node()
    dummy.next = head
    prev = dummy
    curr = head

    while curr:
        if curr.val == val:
            prev.next = curr.next
            curr = curr.next
        else:
            prev = curr
            curr = curr.next
    
    return dummy.next

# tested on leetcode.com/problems/remove-linked-list-element