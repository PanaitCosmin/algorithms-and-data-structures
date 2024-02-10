# Write a function, shortestPath that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
# The function should return the length of the shortest path between A and B.
# Consider the length as the number of edges in the path, not the number of nodes.
# If there us no path between A and B, then return -1.

from collections import defaultdict, deque

def build_graph(edges):
    graph = defaultdict(list)

    for edge in edges:
        node_a, node_b = edge
        graph[node_a].append(node_b)
        graph[node_b].append(node_a)

    return graph

def shortest_path(node_a, node_b, edges):
    # transform array into adjacency list
    graph = build_graph(edges)
    
    # keep track of the visited nodes
    visited = {node_a}
    
    # add the starting node in a "queue"
    queue = deque([(node_a, 0)])

    while queue:
        # get the node and the distance to the current node
        node, distance = queue.popleft()
        # return the distance if we find the node
        if node == node_b:
            return distance
        # loop through every neighbor of the node
        for neighbor in graph[node]:
            # add unvisited node and update the distance
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, distance + 1))

    # can't find the ending node
    return -1

edges_list = [
    ('w', 'x'),
    ('x', 'y'),
    ('z', 'y'),
    ('z', 'v'),
    ('w', 'v')
]

# testing
print(shortest_path('w', 'z', edges_list))
# expected output: 2
