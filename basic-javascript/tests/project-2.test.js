/* eslint-disable no-unused-expressions */
const chai = require('chai');

const assert = chai.assert;
const expect = chai.expect;

const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    const getBiggest = funcs.getBiggest;
    it('should be a function', () => {
      assert.typeOf(getBiggest, 'function');
    });
    it('should return the same input type that was put in', () => {
      expect(getBiggest('a', 'b')).to.be.a('string');
    });
    it('should accept random inputs', () => {
      for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        expect(getBiggest(x, y)).to.equal(x > y ? x : y);
      }
    });
  });
  describe('`greeting`', () => {
    const greeting = funcs.greeting;
    it('should be a function', () => {
      assert.typeOf(greeting, 'function');
    });
    it('should return a string', () => {
      expect(greeting('English')).to.be.a('string');
    });
    it('pass random tests', () => {
      const langArr = ['English', 'German', 'Spanish'];
      const answer = ['Hello!', 'Guten Tag!', 'Hola!'];
      for (let i = 0; i < 10; i++) {
        const x = (Math.floor(Math.random() * 100)) % 3;
        expect(greeting(langArr[x])).to.equal(answer[x]);
      }
    });
  });
  describe('`isTenOrFive`', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return a boolean', () => {
      expect(isTenOrFive(7)).to.be.a('boolean');
    });
    it('should accept random inputs', () => {
      for (let i = 0; i <= 10; i++) {
        expect(isTenOrFive(i)).to.equal(i === 10 || i === 5);
      }
    });
  });

  describe('`isInRange`', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      assert.typeOf(isInRange, 'function');
    });
    it('should return a boolean', () => {
      expect(isInRange(5)).to.be.a('boolean');
    });
    it('should accept random inputs', () => {
      for (let i = 0; i < 10; i++) {
        const input = Math.floor(Math.random() * 100);
        expect(isInRange(input)).to.equal(input > 20 && input < 50);
      }
    });
  });

  describe('`isInteger`', () => {
    const isInteger = funcs.isInteger;
    it('should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });
    it('should return a boolean', () => {
      expect(isInteger(5)).to.be.a('boolean');
    });
    it('should accept random inputs', () => {
      for (let i = 0; i < 10; i++) {
        const input = Math.floor(Math.random() * 2) === 0
          ? Math.random().toString(36).substring(7)
          : Math.floor(Math.random() * 100);
        expect(isInteger(input)).to.equal(Number.isInteger(input));
      }
    });
  });

  describe('`fizzBuzz`', () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should be a function', () => {
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return a string', () => {
      expect(fizzBuzz(5)).to.be.a('string');
    });
    it('should accept random inputs', () => {
      for (let i = 1; i < 20; i += 2) {
        /* eslint-disable no-nested-ternary */
        expect(fizzBuzz(i)).to.equal(i % 15 === 0 ? 'fizzbuzz' : i % 5 === 0 ? 'buzz' : i % 3 === 0 ? 'fizz' : i);
        /* eslint-enable no-nested-ternary */
      }
    });
  });

  describe('`isPrime`', () => {
    const isPrime = funcs.isPrime;
    it('should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });
    it('should return a boolean', () => {
      expect(isPrime(13)).to.be.a('boolean');
    });
    it('13 should return true', () => {
      expect(isPrime(13)).to.equal(true);
    });
  });

  describe('`returnFirst`', () => {
    const returnFirst = funcs.returnFirst;
    it('should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });
    it('should return a number', () => {
      expect(returnFirst([1, 2, 3])).to.be.a('number');
    });
    it('should accept random inputs', () => {
      for (let i = 0; i < 10; i++) {
        const input = [];
        for (let j = 0; j < 3; j++) {
          input.push(Math.floor(Math.random() * 100));
        }
        expect(returnFirst(input)).to.equal(input[0]);
      }
    });
  });

  describe('`returnLast`', () => {
    const returnLast = funcs.returnLast;
    it('should be a function', () => {
      assert.typeOf(returnLast, 'function');
    });
    it('should return a string', () => {
      expect(returnLast(['I', 'am', 'king'])).to.be.a('string');
    });
    it('should accept random inputs', () => {
      for (let i = 0; i < 10; i++) {
        const input = [];
        for (let j = 0; j < 3; j++) {
          Math.random().toString(36).substring(7);
        }
        expect(returnLast(input)).to.equal(input[0]);
      }
    });
  });

  describe('`getArrayLength`', () => {
    const getArrayLength = funcs.getArrayLength;
    it('should be a function', () => {
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return a number', () => {
      expect(getArrayLength(['trees', 'bees', 'apples'])).to.be.a('number');
    });
    it('should accept random inputs', () => {
      for (let i = 0; i < 10; i++) {
        const input = [];
        for (let j = 0; j < Math.floor(Math.random() * 10) + 1; j++) {
          input.push(Math.random().toString(36).substring(7));
        }
        expect(getArrayLength(input)).to.equal(input.length);
      }
    });
  });

  describe('`incrementByOne`', () => {
    const incrementByOne = funcs.incrementByOne;
    it('should be a function', () => {
      assert.typeOf(incrementByOne, 'function');
    });
    it('should return an array', () => {
      expect(incrementByOne([1, 1, 1])).to.be.an('array');
    });
    it('should accept random inputs', () => {
      for (let i = 0; i < 10; i++) {
        const input = [];
        for (let j = 0; j < 3; j++) {
          input.push(Math.floor(Math.random() * 100));
        }
        expect(incrementByOne(input)).to.deep.equal(input.map(x => x++));
      }
    });
  });

  describe('`addItemToArray`', () => {
    const addItemToArray = funcs.addItemToArray;
    it('should be a function', () => {
      assert.typeOf(addItemToArray, 'function');
    });
    it('should return an array', () => {
      expect(addItemToArray([], 'foobar')).to.be.an('array');
    });
    it('should return an empty array if no item is given', () => {
      expect(addItemToArray([], undefined)).to.be.an('array').that.is.empty;
    });
    it('should accept random inputs', () => {
      for (let i = 0; i < 10; i++) {
        const input = Math.floor(Math.random() * 100);
        expect(addItemToArray([], input)).to.deep.equal([input]);
      }
    });
  });

  describe('`addItemToFront`', () => {
    const addItemToFront = funcs.addItemToFront;
    it('should be a function', () => {
      assert.typeOf(addItemToFront, 'function');
    });
    it('should return an array', () => {
      expect(addItemToFront([], 'foofie')).to.be.an('array');
    });
    it('should accept random inputs', () => {
      for (let i = 0; i < 10; i++) {
        const input = Math.floor(Math.random() * 100);
        expect(addItemToFront([1], input)).to.deep.equal([input, 1]);
      }
    });
  });

  describe('`wordsToSentence`', () => {
    const wordsToSentence = funcs.wordsToSentence;
    it('should be a function', () => {
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return "I love LambdaSchool"', () => {
      expect(wordsToSentence(['I', 'love', 'LambdaSchool'])).to.be.a('string').that.equals('I love LambdaSchool');
    });
    it('if empty array is given should return empty string', () => {
      expect(wordsToSentence([])).to.equal('');
    });
  });

  describe('`contains`', () => {
    const contains = funcs.contains;
    it('should be a function', () => {
      assert.typeOf(contains, 'function');
    });
    it('should return a boolean', () => {
      expect(contains([1, 2, 3, 4, 5], 10)).to.be.a('boolean');
    });
    it('should accept random inputs', () => {
      for (let i = 0; i < 10; i++) {
        const input = [];
        const x = Math.floor(Math.random() * 10);
        for (let j = 0; j < 5; j++) {
          input.push(Math.floor(Math.random() * 10));
        }
        expect(contains(input, x)).to.equal(input.includes(x));
      }
    });
  });

  describe('`addNumbers`', () => {
    const addNumbers = funcs.addNumbers;
    it('should be a function', () => {
      assert.typeOf(addNumbers, 'function');
    });
    it('should return a number', () => {
      expect(addNumbers(1, 2)).to.be.a('number');
    });
    it('should accept random inputs', () => {
      for (let i = 0; i < 10; i++) {
        const input = [];
        for (let j = 0; j < Math.floor(Math.random() * 10) + 1; j++) {
          input.push(Math.floor(Math.random() * 10));
        }
        expect(addNumbers(input)).to.equal(input.reduce((m, c) => m + c));
      }
    });
  });

  describe('`averageTestScore`', () => {
    const averageTestScore = funcs.averageTestScore;
    it('should be a function', () => {
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return a number', () => {
      expect(averageTestScore([90, 70, 99, 50, 80])).to.be.a('number').that.equals((90 + 70 + 99 + 50 + 80) / 5);
    });
  });

  describe('`largestNumber`', () => {
    const largestNumber = funcs.largestNumber;
    it('should be a function', () => {
      assert.typeOf(largestNumber, 'function');
    });
    it('should return a number', () => {
      expect(largestNumber([1, 2, 3, 4, 5])).to.be.a('number');
    });
    it('should accept random inputs', () => {
      for (let i = 0; i < 10; i++) {
        const input = [];
        for (let j = 0; j < 3; j++) {
          input.push(Math.floor(Math.random() * 100));
        }
        expect(largestNumber(input)).to.equal(input.sort((a, b) => a < b)[0]);
      }
    });
  });
});
