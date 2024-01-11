# You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

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
# initialize nodes
node1 = Node(2)
node2 = Node(4)
node3 = Node(3)
node4 = Node(5)
node5 = Node(6)
node6 = Node(4)
# link nodes in list1
list1 = LinkedList(node1)
list1.add(node2)
list1.add(node3)
# link nodes in list2
list2 = LinkedList(node4)
list2.add(node5)
list2.add(node6)

def addTwoNumbers(head1: Node, head2: Node) -> Node:
    # create dummy node for the new sum list
    dummy = Node()
    # copy sum list head node reference
    curr = dummy
    # initialize carry
    carry = 0
    # loop through lists
    while head1 or head2 or carry:
        # get the values of the nodes if they exist
        val1 = head1.val if head1 else 0
        val2 = head2.val if head2 else 0
        # compute sum
        sumVals = val1 + val2 + carry
        # update the carry by saving the first digit
        carry = sumVals // 10
        # update the sum by saving the last digit
        sumVals = sumVals % 10
        # create a node with this value and link it 
        curr.next = Node(sumVals)
        # update the sum list pointer
        curr = curr.next
        # update the lists pointers if possible
        head1 = head1.next if head1 else None
        head2 = head2.next if head2 else None
    # return the head of the sum list
    return dummy.next

# testing
print(addTwoNumbers(list1.head, list2.head))