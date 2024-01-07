# Given the head of a singly linked list, reverse the list, 
# and return the reversed list.

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
node3 = Node(3)
node4 = Node(4)
node5 = Node(5)

linkedList = LinkedList(node1)
linkedList.add(node2)
linkedList.add(node3)
linkedList.add(node4)
linkedList.add(node5)

def reverseList(head: Node) -> Node:
    prev = None
    current = head
    
    while current:
        nextNode = current.next
        current.next = prev
        prev = current
        current = nextNode
    
    return prev.val

# testing
print(reverseList(linkedList.head))
# expected output: 5 (val of the head node)
