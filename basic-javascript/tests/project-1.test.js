const chai = require('chai');

const assert = chai.assert;
const expect = chai.expect;

const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    it('should return a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      expect(multiplyByTen(1)).to.be.a('number');
    });
    it('"2"should equal "20"', () => {
      const multiplyByTen = funcs.multiplyByTen;
      expect(multiplyByTen(2)).to.be.equal(20);
    });
    it('should accept random number inputs', () => {
      const multiplyByTen = funcs.multiplyByTen;
      for (let i = 0; i < 5; i++) {
        const x = parseInt(Math.random() * 100, 10);
        expect(multiplyByTen(x)).to.be.equal(x * 10);
      }
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      const subtractFive = funcs.subtractFive;
      expect(subtractFive(1)).to.be.a('number');
    });
    it('"5" should equal "0"', () => {
      const subtractFive = funcs.subtractFive;
      expect(subtractFive(5)).to.be.equal(0);
    });
    it('should accept random number inputs', () => {
      const subtractFive = funcs.subtractFive;
      for (let i = 0; i < 5; i++) {
        const x = parseInt(Math.random() * 100, 10);
      }
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean', () => {
      const areSameLength = funcs.areSameLength;
      expect(areSameLength('hi', 'lo')).to.be.a('boolean');
    });
    it('"Hi" and "Low" should return false', () => {
      const areSameLength = funcs.areSameLength;
      expect(areSameLength('Hi', 'Low')).to.be.equal(false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      const areEqual = funcs.areEqual;
      expect(areEqual('hello', 'lo')).to.be.a('boolean');
    });
    it('should accept random number inputs', () => {
      const areEqual = funcs.areEqual;
      for (let i = 0; i < Math.floor(Math.random() * 10) + 5; i++) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        expect(areEqual(x, y)).to.be.equal(x === y);
      }
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      expect(lessThanNinety(5)).to.be.a('boolean');
    });
    it('"5" should return true', () => {
      const lessThanNinety = funcs.lessThanNinety;
      expect(lessThanNinety(5)).to.equal(true);
    });
    it('should accept random number inputs', () => {
      const lessThanNinety = funcs.lessThanNinety;
      for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * 100);
        expect(lessThanNinety(x)).to.equal(x < 90);
      }
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      expect(greaterThanFifty(5)).to.be.a('boolean');
    });
    it('"100" should return true', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      expect(greaterThanFifty(100)).to.equal(true);
    });
    it('"50" should return false', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      expect(greaterThanFifty(50)).to.equal(false);
    });
    it('should accept random number inputs', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * 100);
        expect(greaterThanFifty(x)).to.equal(x > 50);
      }
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      const add = funcs.add;
      expect(add(5, 5)).to.be.a('number');
    });
    it('should add a negative numbers', () => {
      const add = funcs.add;
      expect(add(5, -5)).to.equal(0);
    });
    it('should add random number inputs', () => {
      const add = funcs.add;
      for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        expect(add(x, y)).to.equal(x + y);
      }
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      const subtract = funcs.subtract;
      expect(subtract(5, 5)).to.be.a('number');
    });
    it('should properly subtract negative numbers', () => {
      const subtract = funcs.subtract;
      expect(subtract(-5, -5)).to.equal(0);
    });
    it('should subract for random numbers', () => {
      const subtract = funcs.subtract;
      for (let i = 0; i < 10; i++) {
        const x = (Math.floor(Math.random() * 2) === 0)
          ? Math.floor(Math.random() * 100)
          : Math.sign(Math.floor(Math.random() * 100));
        const y = Math.floor(Math.random() * 100);

        expect(subtract(x, y)).to.equal(x - y);
      }
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      const divide = funcs.divide;
      expect(divide(5, 5)).to.be.a('number');
    });
    it('5, 5 should equal 1', () => {
      const divide = funcs.divide;
      expect(divide(5, 5)).to.equal(1);
    });
    it('expect division by 0 to return NaN', () => {
      const divide = funcs.divide;
      expect(divide(5, 0)).to.not.be.finite;
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return a number', () => {
      const multiply = funcs.multiply;
      expect(multiply(5, 5)).to.be.a('number');
    });
    it('by 0 should equal 0', () => {
      const multiply = funcs.multiply;
      expect(multiply(5, 0)).to.equal(0);
    });
    it('should accept random number inputs', () => {
      const multiply = funcs.multiply;
      for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        expect(multiply(x, y)).to.equal(x * y);
      }
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      const getRemainder = funcs.getRemainder;
      expect(getRemainder(5, 5)).to.be.a('number');
    });
    it('10, 3 should return 1', () => {
      const getRemainder = funcs.getRemainder;
      expect(getRemainder(10, 3)).to.equal(1);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean', () => {
      const isEven = funcs.isEven;
      expect(isEven(5)).to.be.a('boolean');
    });
    it('should pass random tests', () => {
      const isEven = funcs.isEven;
      for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * 100);
        expect(isEven(x)).to.equal(x % 2 === 0);
      }
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean', () => {
      const isOdd = funcs.isOdd;
      expect(isOdd(5)).to.be.a('boolean');
    });
    it('should pass random tests', () => {
      const isOdd = funcs.isOdd;
      for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * 100);
        expect(isOdd(x)).to.equal(x % 2 !== 0); 
      }
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      const square = funcs.square;
      expect(square(5)).to.be.a('number');
    });
    it('should pass random tests', () => {
      const square = funcs.square;
      for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * 100);
        expect(square(x)).to.equal(x * x);
      }
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      const cube = funcs.cube;
      expect(cube(5)).to.be.a('number');
    });
    it('cube 1 should return 1', () => {
      const cube = funcs.cube;
      expect(cube(1)).to.equal(1);
    });
    it('should pass random tests', () => {
      const cube = funcs.cube;
      for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * 100);
        expect(cube(x)).to.equal(x * x * x);
      }
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      const raiseToPower = funcs.raiseToPower;
      expect(raiseToPower(5, 3)).to.be.a('number');
    });
    it('if exponent is 0 it should return 1', () => {
      const raiseToPower = funcs.raiseToPower;
      expect(raiseToPower(5, 0)).to.equal(1);
    });
    it('should pass random tests', () => {
      const raiseToPower = funcs.raiseToPower;
      for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        expect(raiseToPower(x, y)).to.equal(Math.pow(x, y));
      }
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      const roundNumber = funcs.roundNumber;
      expect(roundNumber(5.5)).to.be.a('number');
    });
    it('expected 5.5 to return 6', () => {
      const roundNumber = funcs.roundNumber;
      expect(roundNumber(5.5)).to.equal(6);
    });
    it('should pass random tests', () => {
      const roundNumber = funcs.roundNumber;
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * 100;
        expect(roundNumber(x)).to.equal(Math.round(x));
      }
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      const roundUp = funcs.roundUp;
      expect(roundUp(5)).to.be.a('number');
    });
    it('expected 5.2 to equal 6', () => {
      const roundUp = funcs.roundUp;
      expect(roundUp(5.2)).to.equal(6);
    });
    it('should pass random tests', () => {
      const roundUp = funcs.roundUp;
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * 100;
        expect(roundUp(x)).to.equal(Math.ceil(x));
      }
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      expect(addExclamationPoint('five')).to.be.a('string');
    });
    it('should add exclamation point to end of input', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      expect(addExclamationPoint('five')).to.equal('five!');
    });
    it('should turn numbers to strings', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      expect(addExclamationPoint(32)).to.equal('32!');
    });
    it('should accept random input', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      for (let i = 0; i < 10; i++) {
        const x = Math.random().toString(36).substring(7);
        expect(addExclamationPoint(x)).to.equal(x + '!');
      }
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return a string', () => {
      const combineNames = funcs.combineNames;
      expect(combineNames('Ryan', 'Hamblin')).to.be.a('string');
    });
    it('should combine names properly', () => {
      const combineNames = funcs.combineNames;
      expect(combineNames('Nyan', 'Cat')).to.equal('Nyan Cat');
    });
    it('should work for random strings', () => {
      const combineNames = funcs.combineNames;
      for (let i = 0; i < 10; i++) {
        const first = Math.random().toString(36).substring(7);
        const last = Math.random().toString(36).substring(7);
        expect(combineNames(first, last)).to.equal(`${first} ${last}`);
      }
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string', () => {
      const getGreeting = funcs.getGreeting;
      expect(getGreeting('Ryan')).to.be.a('string');
    });
    it('should include the initial input', () => {
      const getGreeting = funcs.getGreeting;
      const name = 'Thomas';
      expect(getGreeting(name)).to.include(name);
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      expect(getRectangleArea(5, 5)).to.be.a('number');
    });
    it('should work', () => {
      const getRectangleArea = funcs.getRectangleArea;
      expect(getRectangleArea(5, 5)).to.equal(25);
    })
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      expect(getTriangleArea(5, 5)).to.be.a('number');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      const getCircleArea = funcs.getCircleArea;
      expect(getCircleArea(5)).to.be.a('number');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      expect(getRectangularPrismVolume(5, 5, 5)).to.be.a('number');
    });
  });
});
