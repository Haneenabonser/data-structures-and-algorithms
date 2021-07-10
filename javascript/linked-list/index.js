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
            let ptr = this.head;
            if (!this.head) {
                return false;
            } else {
                while (ptr.next) {
                    if (ptr.value == value) {
                        return true;
                    }
                    ptr = ptr.next;
                    if (ptr.next == null && value == ptr.value) {
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
            let ptr = this.head;
            let string = '';
            
            while (ptr.next) {
                if (ptr.value == null || ptr.value == undefined) {
                    string = string + `NULL -> `;
                } else {
                    string = string + `{${ptr.value}} -> `
                }
                ptr = ptr.next;
                if (ptr.next == null) {
                    string = string + `{${ptr.value}}`
                }
            }
            return string;
        } catch {
            console.log('Error');
        }

    };
};

module.exports = LinkedList;

