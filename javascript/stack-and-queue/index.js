'use strict';

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.length = this.length + 1;
    }


    pop() {
        if (!this.top) {
            return 'Empty Stack';
        }
        let ptr = this.top;

        this.top = ptr.next;
        ptr.next = null;
        this.length = this.length - 1;
        return ptr.value;

    }

    peek() {
        if (!this.top) {
            return 'Empty Stack';
        }
        return this.top.value;
    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}

class Queue {
    constructor() {
        this.back = null;
        this.front = null;
        this.length = 0;
    }


    enqueue(value) {
        let node = new Node(value);
        if (this.length === 0) {
            this.back = node;
            this.front = node;
            this.length = this.length + 1;

        }
        else {
            this.back.next = node;
            this.back = node;
            this.length = this.length + 1;

        }

    }

    dequeue() {
        if (this.front) {
            let ptr = this.front
            ptr = this.front.value;
            this.front = this.front.next
            return ptr;
        }
        else {
            throw new Error('Empty Queue');
        }

    }

    peek() {
        if (this.front) {
            return this.front.value;
        }
        else {
            throw new Error('Empty Queue');
        }
    }


    isEmpty() {
        if (this.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

// codeChallenge 11

    class PseudoQueue {
        constructor() {
          this.front = new Stack();
          this.back = new Stack();
        }
      
        enqueue(value) {
          this.back.push(value);
        }
      
        dequeue() {
          if (this.front.isEmpty()) {
            while (!this.back.isEmpty()) {
              this.front.push(this.back.pop());
            }
          }
          return this.front.pop();
        }
      };


module.exports = { Stack, Queue, PseudoQueue};