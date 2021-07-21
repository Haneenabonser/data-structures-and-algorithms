'use strict';
let Pseudo = require('../index').PseudoQueue;


describe('PseudoQueue Tests', () => {
    it('enqueue to a Pseudo', () => {
        let queue = new Pseudo();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.back.top.value).toEqual(3);

    });


    it('dequeue', () => {
        let queue = new Pseudo();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        let data = queue.dequeue();

        expect(data).toBe(1);

    });

});

describe('Edge Case', () => {
    it('empty queue', () => {
        let queue = new Pseudo();

        expect(queue.dequeue).toThrowError;
    });
});