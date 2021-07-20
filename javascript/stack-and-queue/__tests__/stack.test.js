
const Stack = require('../index').Stack;

describe('stack', () => {
    it('Creates an instance of Stack', () => {
        let stack = new Stack();

        expect(stack instanceof Stack).toBeTruthy();
    });

    describe('peek', () => {
        let stack = new Stack(); 

        it('return last item', () => {
            
            stack.push(1);
            expect(stack.peek()).toEqual(1);
            stack.push(2);
            expect(stack.peek()).toEqual(2);
        });
        it('does not alter the stack', () => {

            stack.push(1);
            expect(stack.peek()).toEqual(1);
        });
        it('point to the correct item after pop()', () => {

            stack.push(1);
            stack.push(2);
            expect(stack.pop()).toEqual(2);
            expect(stack.peek()).toEqual(1);
        });
    });

    describe('push', () => {
        let stack = new Stack(); 

        it('add items to the top', () => {
            stack.push(1);
            stack.push(2);
            expect(stack.peek()).toEqual(2);
        });

    describe('pop', () => {
        let stack = new Stack(); 

        it('add items to the top', () => {
                stack.push(1);
                stack.push(2);
                expect(stack.pop()).toEqual(2);


            });
        });
    });

    describe('it is empty stack', () => {
        let stack = new Stack();

        it('return false', () => {
            stack.push(1);
            stack.push(2);

            expect(stack.isEmpty()).toBeFalsy;

        });
        it('return true', () => {

            expect(stack.isEmpty()).toBeTruthy;
        });
    });
})