from collections import deque
graph = {
    'a': ['b', 'c'], 
    'b': ['d'],
    'c': ['e'],
    'd': ['f'],
    'e': [],
    'f': [],
}
# DFS
def depthFirstSearch(graph, source):
    stack = [ source ]
    
    while stack:
        curr = stack.pop()
        print(curr)
        for neighbor in graph[curr]:
            stack.append(neighbor)
print("==== DFS ====")
depthFirstSearch(graph, 'a')
print("==== END DFS ====")

# recursive DFS
def depthFirstSearchRecursive (graph, source):
    print(source)
    for neighbor in graph[source]:
        depthFirstSearchRecursive(graph, neighbor)

print("==== DFS Recursive ====")
depthFirstSearchRecursive(graph, 'a')
print("==== END DFS Recursive ====")
# END DFS

# BFS
def breadthFirstSearch (graph, source):
    queue = deque(source)

    while queue:
        curr = queue.popleft()
        print(curr)
        for neighbor in graph[curr]:
            queue.append(neighbor)

print("==== BFS ====")
breadthFirstSearch(graph, 'a')
print("==== END BFS ====")
# END BFS

# has path problem: is there a path from node X to node Y ?

def hasPath(graph, src, dst):
    if src == dst:
        return True
    
    for neighbor in graph[src]:
        if hasPath(graph, neighbor, dst):
            return True
    
    return False

print(hasPath(graph, 'a', 'f'))
# expected output: True

# undirected path

edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']   
]

# create a graph from the edges

def buildGraph(edges):
    graph = {}

    for edge in edges:
        a, b = edge
        if a not in graph:
            graph[a] = []
        if b not in graph:
            graph[b] = []
        graph[a].append(b)
        graph[b].append(a)

    return graph

graph2 = buildGraph(edges)

def hasPathUndirected(graph, src, dst, visited):
    if src == dst:
        return True
    if src in visited:
        return False
    
    visited.add(src)

    for neighbor in graph[src]:
        if hasPathUndirected(graph, neighbor, dst, visited):
            return True
        
    return False

print(hasPathUndirected(graph2, 'i', 'l', set()))
# expected output: True

# number of graph

connecetedGraph = {
    0: [8, 1 , 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}

def connectedComponentsCount(graph):
    visited = set()
    count = 0

    for node in graph:
        if explore(graph, node, visited):
            count += 1
    
    return count

def explore(graph, curr, visited):
    if curr in visited:
        return False    
    
    visited.add(curr)

    for neighbor in graph[curr]:
        explore(graph, neighbor, visited)

    return True

# testing
print(connectedComponentsCount(connecetedGraph))
# expected output: 2


# largest component
def largestComponent(graph):
    visited =  set()
    largest = 0

    for node in graph:
        largest = max(largest, exploreGraph(graph, node, visited))
    
    return largest

def exploreGraph(graph, curr, visited):
    if curr in visited:
        return 0
    
    visited.add(curr)

    size = 1

    for neighbor in graph[curr]:
        size += exploreGraph(graph, neighbor, visited)

    return size

# testing
print(largestComponent(connecetedGraph))
# expected output: 4