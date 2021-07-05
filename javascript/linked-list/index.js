'use strict';

'use strict';

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
    };

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
        };
    };

    toString() {
        try {
            let currentNode = this.head;
            let string = '';

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
    };
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
    insertBefore(newVal, val) {
        const node = new Node(newVal);
        let currentNode = this.head;

        if (val == this.head.val) {
            node.next = this.head;
            this.head = node;
        } else {

            while (currentNode) {
                if (currentNode.next.val == val) {
                    node.next = currentNode.next;
                    currentNode.next = node;
                    break;
                }
                currentNode = currentNode.next;
            }
        }
    }
    insertAfter(newVal, val) {
        let node = new Node(newVal);
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.val == val) {
                node.next = currentNode.next;
                currentNode.next = node;
                break;
            }
            currentNode = currentNode.next;
        }
    }
}


module.exports = LinkedList;
