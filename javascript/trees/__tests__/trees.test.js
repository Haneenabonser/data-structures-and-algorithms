const Node = require('../index').Node;
const BinaryTree = require('../index').BinaryTree;
const BinarySearchTree = require('../index').BinarySearchTree;
const treeIntersection = require('../index').treeIntersection;


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
});

    // codeChallenge17
    
    describe('Breadth First Test', () => {
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
            expect(tree.breadthFirst()).toEqual([1,2,3,4,5,6,7,8,9]);
        });
    });

    // codeChallenge18 
    describe('FIZZ BUZZ Test', () => {
        it('fizzBuzz', () => {
            let tree = new BinaryTree();

            tree.root = new Node(1);
            tree.root.left = new Node(7);
            tree.root.left.left = new Node(1);
            tree.root.left.right = new Node(6);
            tree.root.left.right.left = new Node(5);
            tree.root.left.right.right = new Node(11);
            tree.root.right = new Node(5);
            tree.root.right.right = new Node(9);
            tree.root.right.right.left = new Node(15);

            let fizzBuzz = tree.fizzBuzz(tree);
            let fizBuzBrFirst= fizzBuzz.breadthFirst() 

            expect(fizBuzBrFirst).toEqual(['1','7','Buzz','1','Fizz','Fizz','Buzz','11','FizzBuzz']);
          });
    });

// code challenge 32
describe('Trees Intersection', () => {
    it('No Intersection', () => {
        let treeA = new BinaryTree();
        treeA.root = new Node(1);
        treeA.root.left = new Node(2);
        treeA.root.right = new Node(3);
        treeA.root.left.left = new Node(4);
        treeA.root.left.right = new Node(5);
        treeA.root.right.left = new Node(6);
        treeA.root.right.right = new Node(7);
        treeA.root.right.right.left = new Node(8);
        treeA.root.right.right.right = new Node(9);
    
        let treeB = new BinaryTree();
        treeB.root = new Node(10);
        treeB.root.left = new Node(20);
        treeB.root.right = new Node(30);
        treeB.root.left.left = new Node(40);
        treeB.root.left.right = new Node(50);
        treeB.root.right.left = new Node(60);
        treeB.root.right.right = new Node(70);
        treeB.root.right.right.left = new Node(80);
        treeB.root.right.right.right = new Node(90);
        
        expect(treeIntersection(treeA, treeB)).toEqual([]);
    });
    it('same trees', () => {
        let treeA = new BinaryTree();
        treeA.root = new Node(1);
        treeA.root.left = new Node(2);
        treeA.root.right = new Node(3);
        treeA.root.left.left = new Node(4);
        treeA.root.left.right = new Node(5);
        treeA.root.right.left = new Node(6);
        treeA.root.right.right = new Node(7);
        treeA.root.right.right.left = new Node(8);
        treeA.root.right.right.right = new Node(9);
    
        let treeB = new BinaryTree();
        treeB.root = new Node(1);
        treeB.root.left = new Node(2);
        treeB.root.right = new Node(3);
        treeB.root.left.left = new Node(4);
        treeB.root.left.right = new Node(5);
        treeB.root.right.left = new Node(6);
        treeB.root.right.right = new Node(7);
        treeB.root.right.right.left = new Node(8);
        treeB.root.right.right.right = new Node(9);

        expect(treeIntersection(treeA, treeB)).toEqual([1,2,4,5,3,6,7,8,9]);
    });
    it('different trees', () => {
        let treeA = new BinaryTree();
        treeA.root = new Node(1);
        treeA.root.left = new Node(2);
        treeA.root.right = new Node(3);
        treeA.root.left.left = new Node(4);
        treeA.root.left.right = new Node(5);
        treeA.root.right.left = new Node(6);
        treeA.root.right.right = new Node(7);
        treeA.root.right.right.left = new Node(8);
        treeA.root.right.right.right = new Node(9);
    
        let treeB = new BinaryTree();
        treeB.root = new Node(1);
        treeB.root.left = new Node(2);
        treeB.root.right = new Node(3);
        treeB.root.left.left = new Node(4);
        treeB.root.left.right = new Node(50);
        treeB.root.right.left = new Node(6);
        treeB.root.right.right = new Node(7);
        treeB.root.right.right.left = new Node(81);
        treeB.root.right.right.right = new Node(9);

        expect(treeIntersection(treeA, treeB)).toEqual([1,2,4,3,6,7,9]);
    });
   
  });
    
