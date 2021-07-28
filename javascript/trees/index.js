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


module.exports = { Node, BinaryTree, BinarySearchTree }