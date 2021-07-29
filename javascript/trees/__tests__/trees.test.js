const Node = require('../index').Node;
const BinaryTree = require('../index').BinaryTree;
const BinarySearchTree = require('../index').BinarySearchTree;

describe('Trees', () => {
    it('instantiate an empty tree', () => {
        let tree = new BinaryTree();
        expect(tree instanceof BinaryTree).toBe(true);
    });
    it('instantiate a tree with a single root node', () => {
        let tree = new BinaryTree();
        let node = new Node(5);
        tree.root = node;
        expect(tree.root.value).toEqual(5);
        expect(tree.root.left).toBe(null);
        expect(tree.root.right).toBe(null);
    });
    it("add a left child and right child to a single root node", () => {
        let tree = new BinarySearchTree();

        tree.add(10);
        tree.add(15);
        tree.add(5);
        expect(tree.root.value).toEqual(10);
        expect(tree.root.left.value).toEqual(5);
        expect(tree.root.right.value).toEqual(15);
    });
    it('Preorder traversal', () => {
        let tree = new BinarySearchTree();

        tree.add(10);
        tree.add(15);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        expect(tree.preOrder()).toEqual([10, 5, 7, 15, 20]);
    });
    it('Inorder traversal', () => {
        let tree = new BinarySearchTree();

        tree.add(10);
        tree.add(15);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        expect(tree.inOrder()).toEqual([5, 7, 10, 15, 20]);
    })
    it('Postorder traversal', () => {
        let tree = new BinarySearchTree();

        tree.add(10);
        tree.add(15);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        expect(tree.postOrder()).toEqual([7, 5, 20, 15, 10]);
    })
});

// codeChallenge16
describe('Find Maximum Value in a Tree', () => {
    let tree = new BinaryTree();

    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.left = new Node(6);
    tree.root.right.right = new Node(7);
    tree.root.right.right.left = new Node(8);
    tree.root.right.right.right = new Node(9);

    test('find a maximum value in a tree', () => {
        expect(tree.findMax()).toEqual(9);
    });
    test('Test expected to fail on an alphabets tree', () => {
        let tree2 = new BinaryTree();

        tree2.root = new Node('a');
        tree2.root.left = new Node('b');
        tree2.root.right = new Node('c');
        tree2.root.left.left = new Node('d');

        expect(tree2.findMax()).toBeFalsy();
    });
})
