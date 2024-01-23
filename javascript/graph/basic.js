// create a graph
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}
// DFS 
const depthFirstSearch = (graph, source) => {
    const stack = [ source ]

    while (stack.length > 0) {
        const curr = stack.pop()
        console.log(curr)
        for (let neighbor of graph[curr]) {
            stack.push(neighbor)
        }
    } 
}

console.log("==== DFS ====")
depthFirstSearch(graph, 'a')
console.log("==== END DFS ====")

// recursive DFS
const depthFirstSearchRecursive = (graph, source) => {
    console.log(source)
    for (let neighbor of graph[source]) {
        depthFirstSearchRecursive(graph, neighbor)
    }
}
console.log("==== DFS Recursive ====")
depthFirstSearchRecursive(graph, 'a')
console.log("==== END DFS Recursive ====")
// END DFS

// BFS
const breadthFirstSearch = (graph, source) => {
    const queue = [ source ]
    while (queue.length > 0) {
        const curr = queue.shift()
        console.log(curr)
        for (let neighbor of graph[curr]) {
            queue.push(neighbor)
        }
    }
}
console.log("==== BFS ====")
breadthFirstSearch(graph, 'a')
console.log("==== END BFS ====")
// END BFS

// has path problem: is there a path from node X to node Y ?

function hasPath (graph, src, dst) {
    if (src === dst) return true
    
    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst)) return true
    }

    return false
}

console.log(hasPath(graph, 'a', 'f'))
// expected output: true


// undirected path

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']   
]
// create a graph from the edges
const buildGraph = (edges) => {
    const graph = {}

    for (let edge of edges) {
        const [a, b] = edge
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}

const graph2 = buildGraph(edges)

function hasPathUndirected(graph, src, dst, visited) {
    if (src === dst) return true
    if (visited.has(src)) return false

    visited.add(src)

    for (let neighbor of graph[src]) {
        if (hasPathUndirected(graph, neighbor, dst, visited)) return true
    }

    return false
}

console.log(hasPathUndirected(graph2, 'i', 'l', new Set()))
// expected output: true