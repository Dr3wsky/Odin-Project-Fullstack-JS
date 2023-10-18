import Graph from "./graphExercise.js"

// Creat graph
const g = new Graph(6);
const verts = ['A', 'B', 'C', 'D', 'E', 'F'];

for (let i = 0; i < verts.length; i++) {
    g.addVertex(verts[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph();