# Remove Nth Node From End of List

# Given the head of a linked list, remove the nth node from the end of the list and return its head.

# Implementing a List Node
class Node:
    def __init__(self, val, next = None) -> None:
        self.val = val
        self.next = next

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

def removeNthFromEnd(head: Node, n: int) -> Node:
    # initialize dummy node
    dummyNode = Node(0, head)
    # initialize left and right
    left = dummyNode
    right = head
    # move the right if possible
    while n > 0 and right:
        right = right.next
        n -= 1
    #  move left node until right is at the end
    while right:
        # move left and right
        right = right.next
        left = left.next
    # move the reference to the next node after the Nth
    left.next = left.next.next
    # return the head of the list
    return dummyNode.next

# testing
print(removeNthFromEnd(linkedList.head, 3))