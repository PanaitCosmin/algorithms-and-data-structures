# Linked List Cycle

# Given head, the head of a linked list, determine if the linked list has a cycle in it.

# There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

# Return true if there is a cycle in the linked list. Otherwise, return false.

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
# create nodes list 1
node1 = Node(2)
node2 = Node(3)
node3 = Node(5)
node4 = Node(6)
node5 = Node(6)
# initialize linked list
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2

def hasCycle(head: Node) -> bool:
    # use Floyd’s slow and fast pointers algo.
    # initialize slow and fast pointers
    slow, fast = head, head
    # loop if we have a next node in list
    while fast and fast.next:
        # move slow and fast pointers
        slow = slow.next
        fast = fast.next.next
        # if these 2 meet then there is a cycle
        if slow == fast:
            return True
    
    return False

# testing
print(hasCycle(node1))
# expected output: True
