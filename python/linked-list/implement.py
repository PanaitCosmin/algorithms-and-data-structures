# Implementing a List Node
class Node:
    def __init__(self, val) -> None:
        self.val = val
        self.next = None

# Implementing a Linked List
class LinkedList:
    def __init__(self,head) -> None:
        self.head = head
    # count nodes of the list
    def size(self):
        current = self.head
        count = 0
        while current:
            count += 1
            current = current.next
        return count
    # return the last node of the list
    def getLast(self):
        last = self.head
        while last and last.next:
            last = last.next
        return last.val
    # print all the values of the nodes
    def traversal(self):
        current = self.head
        while current:
            print(current.val)
            current = current.next
    


# create nodes
node1 =  Node(1)
node2 =  Node(2)
node3 = Node(3)
# set pointers
node1.next = node2
node2.next = node3
# create linked list
linkedList = LinkedList(node1)
# acces the last node's value in the list 
print(linkedList.head.next.next.val) # expected: 3
# the size of the list
print(linkedList.size()) # expected output: 3
# last node val
print(linkedList.getLast()) # expected output: 3
# print all the values of the nodes
print(linkedList.traversal())