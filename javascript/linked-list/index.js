
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(val) {
        try {

            let node = new Node(val);
            if (!this.head) {
                this.head = node;
            } else {
                node.next = this.head;
                this.head = node;
            }
        } catch {
            console.log('Enter a valid input');
        }
    }

    includes(val) {
        try {

            let currentNode = this.head;
            if (!this.head) {
                return false;
            } else {

                while (currentNode.next) {
                    if (currentNode.val == val) {
                        return true;
                    }
                    currentNode = currentNode.next;

                    if (currentNode.next == null && val == currentNode.val) {
                        return true;
                    }
                }
                return false;
            }
        } catch {
            console.log('Enter a valid input');
        }
    }

    toString() {
        try {

            let string = '';
            let currentNode = this.head;

            while (currentNode.next) {
                if (currentNode.val == null || currentNode.val == undefined) {
                    string = string + `NULL -> `;
                } else {

                    string = string + `{${currentNode.val}} -> `
                }
                currentNode = currentNode.next;
                if (currentNode.next == null) {
                    string = string + `{${currentNode.val}}`
                }
            }

            return string;
        } catch {
            console.log('Error');
        }

    }

    append(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }
}

function zipLists(list1, list2) {
    let currentNode1 = list1.head;
    let currentNode2 = list2.head;
    let ll3 = new LinkedList();

    while (currentNode1 || currentNode2) {
        if (currentNode1 != null) {
            ll3.append(currentNode1.val);
            currentNode1 = currentNode1.next;
        }
        if (currentNode2 != null) {
            ll3.append(currentNode2.val);
            currentNode2 = currentNode2.next;
        }
    }
    return ll3.toString();
}

module.exports = { LinkedList, zipLists };