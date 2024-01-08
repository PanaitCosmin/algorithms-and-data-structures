# Merge Two Sorted Lists

# You are given the heads of two sorted linked lists list1 and list2.

# Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

# Return the head of the merged linked list.

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

linkedList = LinkedList(node1)
linkedList.add(node2)
linkedList.add(node3)
linkedList.add(node4)
linkedList.add(node5)

# create nodes list 2
node6 = Node(1)
node7 = Node(4)
node8 = Node(5)
node9 = Node(9)
node10 = Node(10)

linkedList2 = LinkedList(node6)
linkedList2.add(node7)
linkedList2.add(node8)
linkedList2.add(node9)
linkedList2.add(node10)

def mergeTwoLists(head1: Node, head2: Node) -> Node:
    # create a new node for the merged list
    merge_node = Node()
    # save a refrence for this node
    merge_node_head = merge_node
    # loop through every nodes in lists
    while head1 and head2:
        # check for the lowest val in node from list 1
        if head1.val <= head2.val:
            # add node to the merged list
            merge_node.next = head1
            # move to the next node in list1
            head1 = head1.next
        else:
            # add node to the merged list
            merge_node.next = head2
            # move to the next node in list2
            head2 = head2.next
        # move to the next node in merged list
        merge_node = merge_node.next
    # add all the remaining nodes from list1 or list2
    merge_node.next = head1 or head2
    # return the head of the linked list
    return merge_node_head.next
