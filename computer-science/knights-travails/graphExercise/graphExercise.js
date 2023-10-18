// Create graph class and define verticies adn adjacent list in constructor
class Graph { 
    constructor(noVerticies)
    {
        this.noVerticies = noVerticies;
        this.AdjList = new Map();
    }

    addVertex(v) {
        // initialize the adjacent list with null array
        this.AdjList.set(v,[]);
    }

    addEdge(v,w) {
        // Get list for vertex V and put vertex W to define edge between
        this.AdjList.get(v).push(w);
    }

    printGraph()
    {
        const get_keys = this.AdjList.keys();
        // iterate over the vertices
        for (let i of get_keys) {
            let get_values = this.AdjList.get(i);
            let conc = "";
            // concatenate the values into a string
            for (let j of get_values)
                conc += j + " ";
            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }    
}

/** TEST GRAPH */

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



