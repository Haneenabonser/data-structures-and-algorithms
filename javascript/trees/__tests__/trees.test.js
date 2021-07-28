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
    it('Preorder traversal',()=>{
        let tree = new BinarySearchTree();

        tree.add(10);
        tree.add(15);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        expect(tree.preOrder()).toEqual([10,5,7,15,20]);
    });
    it('Inorder traversal',()=>{
        let tree = new BinarySearchTree();

        tree.add(10);
        tree.add(15);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        expect(tree.inOrder()).toEqual([5,7,10,15,20]);
    })
    it('Postorder traversal',()=>{
        let tree = new BinarySearchTree();

        tree.add(10);
        tree.add(15);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        expect(tree.postOrder()).toEqual([7,5,20,15,10]);
    })
});
