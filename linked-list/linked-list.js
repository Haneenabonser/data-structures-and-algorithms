'use strict';

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
            console.log('Enter a valid input');
        }
    };

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
            console.log('Enter a valid input');
        };
    };

    toString() {
        try {
            let currentNode = this.head;
            let string = '';

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
            console.log('Error');
        }

    };
};

module.exports = LinkedList;

