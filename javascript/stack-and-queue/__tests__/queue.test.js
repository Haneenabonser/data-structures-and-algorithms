
const Queue = require('../index').Queue;


describe('enqueue', () => {
    let queue = new Queue();

    it('Creates an instance of Queue', () => {
        expect(queue instanceof Queue).toBeTruthy();
    });


    it('enqueue multiple values into a queue then dequeue ', () => {

        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toEqual(1);
        expect(queue.dequeue()).toEqual(2);

    });


});

describe('peek', () => {
    let queue = new Queue();

    it('peek', () => {
        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.peek()).toBe(1);

    });


});
describe('it is empty queue', () => {
    let queue = new Queue();

    it('return false', () => {
        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.isEmpty()).toBeFalsy;

    });
    it('return true', () => {

        expect(queue.isEmpty()).toBeTruthy;
    });
});


