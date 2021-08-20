# Graphs
A data structure consisting of data that is stored among many groups of edges(paths) and vertices (nodes), which are interconnected. Graph data structure (N, E) is structured with a collection of Nodes and Edges. Both nodes and vertices need to be finite.

## Challenge
- Implement your own Graph. The graph should be represented as an adjacency list and methods.          

## API
- add node
    - Arguments: value
    - Returns: The added node
    - Add a node to the graph
- add edge
    - Arguments: 2 nodes to be connected by the edge, weight (optional)
    - Returns: nothing
    - Adds a new edge between two nodes in the graph
    - If specified, assign a weight to the edge
    - Both nodes should already be in the Graph
- get nodes
    - Arguments: none
    - Returns all of the nodes in the graph as a collection (set, list, or similar)
- get neighbors
    - Arguments: node
    - Returns a collection of edges connected to the given node
    - Include the weight of the connection in the returned collection
- size
    - Arguments: none
    - Returns the total number of nodes in the graph