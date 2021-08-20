const Graph = require('./index').Graph;
const Edge = require('./index').Edge;
const Vertex = require('./index').Vertex;


describe('Graphs graph', () => {
    it('Node can be successfully added to the graph', () => {
        let graph = new Graph();
        const node = new Vertex('haneen');
        graph.addNode(node);

        expect(graph.adjacencyList).toBeTruthy();
    });

    it('An edge can be successfully added to the graph', () => {
        let graph = new Graph();

        const node1 = new Vertex('Haneen');
        graph.addNode(node1);
        const node2 = new Vertex('Aya');
        graph.addNode(node2);

        graph.addEdge(node1, node2);
        const output = graph.adjacencyList.get(node1);

        expect(output).toEqual([{ 'vertex': { 'value': 'Aya' }, 'weight': 0 }]);
    });

    it('A collection of all nodes can be properly retrieved from the graph', () => {
        let graph = new Graph();

        const node1 = new Vertex('Real');
        graph.addNode(node1);
        const node2 = new Vertex('Madrid');
        graph.addNode(node2);

        graph.addEdge(node1, node2);
        graph.addEdge(node2, node1);
        const node1Value = graph.adjacencyList.get(node1);
        const node2Value = graph.adjacencyList.get(node2);


        expect(node1Value).toEqual([{ 'vertex': { 'value': 'Madrid' }, 'weight': 0 }]);
        expect(node2Value).toEqual([{ 'vertex': { 'value': 'Real' }, 'weight': 0 }]);
    });

    it('All appropriate neighbors can be retrieved from the graph', () => {
        let graph = new Graph();
        
        const node1 = new Vertex('Hala');
        graph.addNode(node1);
        const node2 = new Vertex('Real');
        graph.addNode(node2);
        const node3 = new Vertex('Madrid');
        graph.addNode(node3);

        graph.addEdge(node1, node2);
        graph.addEdge(node1, node3);

        // const node1Value = graph.adjacencyList.get(node1);
        // const node2Value = graph.adjacencyList.get(node2);
        // const node3Value = graph.adjacencyList.get(node3);

        expect(graph.getNeighbors(node1)).toEqual([{ 'vertex': { 'value': 'Real' }, 'weight': 0 }, { 'vertex': { 'value': 'Madrid' }, 'weight': 0 }]);
    });
    it('Neighbors are returned with the weight between nodes included', () => {
        let graph = new Graph();
        
        const node1 = new Vertex('Hala');
        graph.addNode(node1);
        const node2 = new Vertex('Real');
        graph.addNode(node2);
        const node3 = new Vertex('Madrid');
        graph.addNode(node2);

        graph.addEdge(node1, node2);
        graph.addEdge(node1, node3);

        const value = graph.getNeighbors(node1);

        expect(value[0]['weight']).toEqual(0);
        expect(value[1]['weight']).toEqual(0);
    });
    it('The proper size is returned, representing the number of nodes in the graph', () => {
        let graph = new Graph();

        const node1 = new Vertex('Haneen');
        graph.addNode(node1);
        const node2 = new Vertex('Aya');
        graph.addNode(node2);

        graph.addEdge(node1, node2);

        expect(graph.size(node1)).toEqual(2);
    });
    it('A graph with only one node and edge can be properly returned', () => {
        let graph = new Graph();
        const node = new Vertex('haneen');
        graph.addNode(node);
        graph.addEdge(node);
        const value = graph.adjacencyList.get(node);

        expect(value).toEqual([{ 'vertex': undefined, 'weight': 0 }]);
    });
    it('An empty graph properly returns null', () => {
        let graph = new Graph();
        const value = graph.adjacencyList.values();

        expect(value).not.toBeUndefined();
    });
});