const validateBrackets = require('../index').validateBrackets;
const Stack = require('../index').Stack;

describe('Brackets Tests', () => {  
  describe('Test Brackets Validation', () => {
    let stack = new Stack();

    it('return True', () => {
      expect(validateBrackets('(){}[]')).toEqual(true);
    });
    it('return True', () => {
        expect(validateBrackets('{}{Code}[Fellows](())')).toEqual(true);
      });
    it('return True', () => {
      expect(validateBrackets('{[(Haneen)]}()')).toEqual(true);
    });
    it('return false', () => {
        expect(validateBrackets('{(}messi)')).toEqual(false);
      });
    it('return false', () => {
      expect(validateBrackets('[({}]')).toEqual(false);
    });
  });
});