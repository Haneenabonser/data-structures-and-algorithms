
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        try {

            let node = new Node(value);
            if (!this.head) {
                this.head = node;
            } else {
                node.next = this.head;
                this.head = node;
            }
        } catch {
            console.log('Please enter an input');
        }
    }

    includes(value) {
        try {

            let currentNode = this.head;
            if (!this.head) {
                return false;
            } else {

                while (currentNode.next) {
                    if (currentNode.value == value) {
                        return true;
                    }
                    currentNode = currentNode.next;

                    if (currentNode.next == null && value == currentNode.value) {
                        return true;
                    }
                }
                return false;
            }
        } catch {
            console.log('Please enter a valid input');
        }
    }

    toString() {
        try {

            let string = '';
            let currentNode = this.head;

            while (currentNode.next) {
                if (currentNode.value == null || currentNode.value == undefined) {
                    string = string + `NULL -> `;
                } else {

                    string = string + `{${currentNode.value}} -> `
                }
                currentNode = currentNode.next;
                if (currentNode.next == null) {
                    string = string + `{${currentNode.value}}`
                }
            }

            return string;
        } catch {
            console.log('An error occured');
        }

    }

    append(value) {
        const node = new Node(value);
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
            ll3.append(currentNode1.value);
            currentNode1 = currentNode1.next;
        }
        if (currentNode2 != null) {
            ll3.append(currentNode2.value);
            currentNode2 = currentNode2.next;
        }
    }
    return ll3.toString();
}

module.exports = { LinkedList, zipLists };