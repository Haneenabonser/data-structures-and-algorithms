class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class BinaryTree {
    constructor(root) {
        this.root = null;
    }

    preOrder() {
        const result = [];
        const _traverse = (node) => {
            result.push(node.value);
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
        };
        _traverse(this.root);
        return result;
    }

    inOrder() {
        const result = [];
        const _traverse = (node) => {
            if (node.left) _traverse(node.left);
            result.push(node.value);
            if (node.right) _traverse(node.right);
        };
        _traverse(this.root);
        return result;
    }

    postOrder() {
        const result = [];
        const _traverse = (node) => {
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
            result.push(node.value);
        };
        _traverse(this.root);
        return result;
    }

    // codeChallenge16
    findMax() {
        let maximum = 0;
        const viewVar = (node) => {
            if (node.value > maximum) {
                maximum = node.value
            }
            if (node.left) {
                viewVar(node.left);
            }
            if (node.right) {
                viewVar(node.right);
            }
        }
        viewVar(this.root);
        return maximum;
    }

    // codeChallenge17
    breadthFirst() {
        let queue = [];
        let curNode = null;
        let treeNodesArray = [];

        queue.unshift(this.root);

        while (queue.length) {
            curNode = queue.pop();
            treeNodesArray.push(curNode.value);

            if (curNode.left) {
                queue.unshift(curNode.left);
            }
            if (curNode.right) {
                queue.unshift(curNode.right);
            }
        }
        return treeNodesArray;
    }

    // codeChallenge18
    fizzBuzz(tree) {
        let newTree = tree
        let curNode = newTree.root;

        let queue = [];
        queue.push(curNode);

        while (queue.length) {
            curNode = queue.pop();
            if (curNode.value % 3 === 0 && curNode.value % 5 === 0 && curNode !== null) {
                curNode.value = 'FizzBuzz';
            }
            else if (curNode.value % 3 === 0 && curNode !== null) {
                curNode.value = 'Fizz';
            }
            else if (curNode.value % 5 === 0 && curNode !== null) {
                curNode.value = 'Buzz';
            }
            else if (curNode.value % 3 !== 0 && curNode.value % 5 !== 0 && curNode !== null) {
                curNode.value = `${curNode.value}`;
            }
            if (curNode.left) queue.push(curNode.left);
            if (curNode.right) queue.push(curNode.right);
        }
        return newTree;
    }
}

// class BinarySearchTree {
//     constructor(root) {
//         this.root = null;
//     }

class BinarySearchTree extends BinaryTree {
    constructor(root) {
        super(root);
    }
    add(value) {
        let node = new Node(value);
        let pointer = this.root;

        const _add = (node) => {
            if (!this.root) {
                this.root = node;
            } else if (node.value > pointer.value) {
                if (pointer.right) {
                    pointer = pointer.right;
                    _add(node)
                } else {
                    pointer.right = node;
                }
            } else if (node.value < pointer.value) {
                if (pointer.left) {
                    pointer = pointer.left;

                    _add(node)
                } else {
                    pointer.left = node;
                }
            }
        }
        _add(node);
    }

    contains(value) {
        let contains = true;
        let root = this.root;

        if (!this.root) {
            return false;
        }

        while (root && contains) {
            if (value > root.right) {
                root = root.right;
            } else if (value < root.left) {
                root = root.left;
            } else {
                return true;
            }
        }
        return false;
    }
}

// code Challenge 32 (trees intersection)
function treeIntersection(treeA, treeB) {
    let results = [];
    let arrayA = treeA.preOrder();
    let arrayB = treeB.preOrder();

    for (let i = 0; i < arrayA.length; i++) {
        if (arrayB.includes(arrayA[i])) {
            results.push(arrayB[i]);
        }
    }
    return results;
}

module.exports = { Node, BinaryTree, BinarySearchTree, treeIntersection}