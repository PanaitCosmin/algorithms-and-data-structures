// Write a function, shortestPath that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
// The function should return the length of the shortest path between A and B.
// Consider the length as the number of edges in the path, not the number of nodes.
// If there us no path between A and B, then return -1.


// transform in adjacency list
function buildGraph(edges) {
    const graph = {}

    for (let edge of edges) {
        const [ nodeA, nodeB ] = edge

        if (!(nodeA in graph)) graph[nodeA] = []
        if (!(nodeB in graph)) graph[nodeB] = []

        graph[nodeA].push(nodeB)
        graph[nodeB].push(nodeA)
    }

    return graph
}

function shortestPath(nodeA, nodeB, edges) {
    // transform array into adjacency list
    const graph = buildGraph(edges)
    console.log(graph)
    // keep track of the visited nodes
    const visited = new Set([nodeA])
    // add the starting node in a "queue"
    const queue = [[nodeA, 0]]

    while (queue.length > 0) {
        // get the node and the distance to the current node
        const [node, distance] = queue.shift();
        // return the distance if we find the node
        if (node === nodeB) return distance;
        // loop through every neighbor of the node
        for (let neighbor of graph[node]) {
            // add unvisited node and update the distance
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]); 
            }
        }
    }
    // can't find the ending node
    return -1
}

const edgesList = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]
// testing
console.log(shortestPath('w', 'z', edgesList))
// expected output: 2