'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex,
      this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node) {
    this.adjacencyList.set(node, []);
  }

  addEdge(startVertex, endVertex) {
    let weight = 0;
    if (!this.adjacencyList.has(startVertex)) {
      throw new Error('the graph has no vertex');
    }
    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getAllNodes() {
    let result = [];
        for (const [node, edge] of this._adjacencyList.entries()) {
         result.push(node);
        }
        return result;
  }

  getNeighbors(node) {
    if (!this.adjacencyList.has(node)) {
      throw new Error('This node has no neighbors');
    }
    return [...this.adjacencyList.get(node)];
  }

  size(node) {
    const queue = [];
    const nodes = new Set();

    queue.unshift(node);
    nodes.add(node);
    
    while (queue.length) {
      const currentNode = queue.pop();
      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNodes = neighbor.vertex;

        if (nodes.has(neighborNodes)) {
          continue;
        } else {
          nodes.add(neighborNodes);
          queue.unshift(neighborNodes);
        }
      }
    }
    return nodes.size;
  }
}

module.exports = {
  Vertex,
  Edge,
  Graph
};