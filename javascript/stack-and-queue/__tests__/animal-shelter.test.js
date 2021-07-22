'use strict';

const AnimalShelter = require('../index').AnimalShelter;

describe('Animal-Shelter Tests', () => {
    let animal = new AnimalShelter();

    it('Creates an instance of the class', () => {
        expect(animal instanceof AnimalShelter).toBeTruthy();
    });
    it('Can successfully enqueue cat to cat queue', () => {
        animal.enqueue('cat');
        animal.enqueue('dog');

        expect(animal.front.value).toEqual('cat');
    });
    it('throw an error if not cat or dog', () => {
        animal.enqueue('monkey');


        expect(animal.enqueue('monkey')).toEqual("Please type cat or dog");
    });
    describe('Animal-Shelter Tests', () => {
        it('dequeue', () => {
            animal.enqueue('cat');
            animal.enqueue('dog');
            expect(animal.dequeue('cat')).toEqual('cat');
            expect(animal.dequeue('dog')).toEqual('dog');
            expect(animal.dequeue('monkey')).toEqual(null);
        });
    });


})