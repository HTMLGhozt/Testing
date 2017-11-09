/* eslint-disable no-unused-expressions */
const chai = require('chai');
const sinon = require('sinon');

const assert = chai.assert;
const expect = chai.expect;

const funcs = require('../src/project-3');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-3 Functions', () => {
  describe('`makeCat`', () => {
    const makeCat = funcs.makeCat;
    it('should be a function', () => {
      assert.typeOf(makeCat, 'function');
    });
    it('should return an object', () => {
      expect(makeCat('Shadow', 5)).to.be.an('object');
    });
    it('should have properties of name and age', () => {
      const cat = makeCat('Shadow', 5);
      expect(cat).to.have.own.property('name');
      expect(cat).to.have.own.property('age');
    });
    it('should have a name of "Shadow"', () => {
      const cat = makeCat('Shadow', 5);
      expect(cat.name).to.equal('Shadow');
    });
    it('should have an age of 5', () => {
      const cat = makeCat('Shadow', 5);
      expect(cat.age).to.equal(5);
    });
  });

  describe('`addProperty`', () => {
    const addProperty = funcs.addProperty;
    const cat = funcs.makeCat('Shadow', 5);
    it('should be a function', () => {
      assert.typeOf(addProperty, 'function');
    });
    it('should return an object', () => {
      expect(addProperty(cat, 'purr')).to.be.an('object');
    });
    it('should have property purr', () => {
      expect(cat).to.have.own.property('purr');
    });
    it('added property should have value of null', () => {
      expect(cat.purr).to.equal(null);
    });
  });

  describe('`invokeMethod`', () => {
    const invokeMethod = funcs.invokeMethod;
    const cat = funcs.makeCat('Shadow', 5);
    it('should be a function', () => {
      assert.typeOf(invokeMethod, 'function');
    });
    it('should return an object', () => {
      const cb = sinon.spy(cat, 'meow');
      invokeMethod(cat, cb);
      expect(cb).to.have.been.called;
    });
  });

  describe('`multiplyMysteryNumberByFive`', () => {
    const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
    it('should be a function', () => {
      assert.typeOf(multiplyMysteryNumberByFive, 'function');
    });
    it('should return an number', () => {
      const input = { mysteryNumber: 5 };
      expect(multiplyMysteryNumberByFive(input)).to.be.an('number');
    });
    it('should return correctly with random input', () => {
      for (let i = 0; i < 10; i++) {
        const input = { mysteryNumber: Math.floor(Math.random() * 10) };
        expect(multiplyMysteryNumberByFive(input)).to.equal(input.mysteryNumber * 5);
      }
    });
  });

  describe('`deleteProperty`', () => {
    const deleteProperty = funcs.deleteProperty;
    it('should be a function', () => {
      assert.typeOf(deleteProperty, 'function');
    });
    it('should return an object', () => {
      const input = { 
        mysteryNumber: 5,
        deleteMe: null,
      };
      expect(deleteProperty(input, 'deleteMe')).to.be.an('object');
    });
    it('should delete the property', () => {
      const input = {
        mysteryNumber: 5,
        deleteMe: null,
      };
      expect(deleteProperty(input, 'deleteMe')).to.be.an('object').to.not.have.property('deleteMe');
    });
  });

  describe('`newUser`', () => {
    const newUser = funcs.newUser;
    it('should be a function', () => {
      assert.typeOf(newUser, 'function');
    });
    it('should return an object', () => {
      expect(newUser()).to.be.an('object');
    });
    it('should have properties "name" "email" "password"', () => {
      const ryan = newUser('Ryan', 'Ryan@ls.com', 'password123');
      expect(ryan).to.have.property('name', 'Ryan');
      expect(ryan).to.have.property('email', 'Ryan@ls.com');
      expect(ryan).to.have.property('password', 'password123');
    });
  });

  describe('`hasEmail`', () => {
    const hasEmail = funcs.hasEmail;
    const user = funcs.newUser('Ryan', 'Ryan@ls.com', 'password123');
    it('should be a function', () => {
      assert.typeOf(hasEmail, 'function');
    });
    it('should return a boolean', () => {
      expect(hasEmail(user)).to.be.a('boolean');
    });
    it('should return true if object has an email property', () => {
      expect(hasEmail(user)).to.equal(true);
    });
    it('should return false if object does not have property', () => {
      const input = { notEmail: null };
      expect(hasEmail(input)).to.equal(false);
    });
  });

  describe('`hasProperty`', () => {
    const hasProperty = funcs.hasProperty;
    const user = funcs.newUser('Ryan', 'Ryan@ls.com', 'password123');
    it('should be a function', () => {
      assert.typeOf(hasProperty, 'function');
    });
    it('should return a boolean', () => {
      expect(hasProperty(user, 'name')).to.be.a('boolean');
    });
    it('should return true if object has the property', () => {
      expect(hasProperty(user, 'email')).to.equal(true);
    });
    it('should return false if object does not have property', () => {
      expect(hasProperty(user, 'alphabet')).to.equal(false);
    });
  });

  describe('`verifyPassword`', () => {
    const verifyPassword = funcs.verifyPassword;
    const user = funcs.newUser('Ryan', 'Ryan@ls.com', 'password123');
    it('should be a function', () => {
      assert.typeOf(verifyPassword, 'function');
    });
    it('should return a boolean', () => {
      expect(verifyPassword(user, 'password123')).to.be.an('boolean');
    });
    it('should return true if the passwords match', () => {
      expect(verifyPassword(user, 'password123')).to.equal(true);
    });
    it('should return false if the passwords do not match', () => {
      expect(verifyPassword(user, 'test')).to.equal(false);
    });
  });

  describe('`updatePassword`', () => {
    const updatePassword = funcs.updatePassword;
    const user = funcs.newUser('Ryan', 'Ryan@ls.com', 'password123');
    it('should be a function', () => {
      assert.typeOf(updatePassword, 'function');
    });
    it('should return an object', () => {
      expect(updatePassword(user, 'wordpass321')).to.be.an('object');
    });
    it('should update the password', () => {
      updatePassword(user, 'testpass');
      expect(user).to.have.property('password', 'testpass');
    });
  });
  describe('`addFriend`', () => {
    const addFriend = funcs.addFriend;
    const user = funcs.newUser('Ryan', 'Ryan@ls.com', 'password123');
    it('should be a function', () => {
      assert.typeOf(addFriend, 'function');
    });
    it('should return an object', () => {
      const friendlyUser = {
        name: 'Ryan',
        friends: ['Austin', 'Tai', 'Thompson'],
      };
      expect(addFriend(friendlyUser, 'Luis')).to.be.an('object');
    });
    it('should add friend to the user.friends', () => {
      const friendlyUser = {
        name: 'Ryan',
        friends: ['Austin', 'Tai', 'Thompson'],
      };
      addFriend(friendlyUser, 'Luis');
      expect(friendlyUser.friends).to.include('Luis');
    });
  });

  describe('`setUsersToPremium`', () => {
    const setUsersToPremium = funcs.setUsersToPremium;
    it('should be a function', () => {
      assert.typeOf(setUsersToPremium, 'function');
    });
    it('should return an array', () => {
      expect(setUsersToPremium([{ isPremium: false }, { isPremium: false }])).to.be.an('array');
    });
    it('should set isPremium to true', () => {
      const userArray = [
        { user: 'Ryan', isPremium: false, },
        { user: 'Tai', isPremium: false, },
        { user: 'Luis', isPremium: false, }
      ];
      setUsersToPremium(userArray);
      for (let i = 0; i < userArray.length; i++) {
        expect(userArray[i]).to.have.property('isPremium', true);
      }
    });
  });

  describe('`sumUserPostLikes`', () => {
    const sumUserPostLikes = funcs.sumUserPostLikes;
    const user = funcs.newUser('Ryan', 'Ryan@ls.com', 'password123');
    it('should be a function', () => {
      assert.typeOf(sumUserPostLikes, 'function');
    });
    it('should return a number', () => {
      expect(sumUserPostLikes({posts: [{likes: 10}, {likes: 5}]})).to.be.an('number');
    });
    it('should correctly add likes on posts', () => {
      expect(sumUserPostLikes({posts: [{likes: 10}, {likes: 5}]})).to.equal(15);
    });
  });

  describe('`addCalculateDiscountPriceMethod`', () => {
    const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;

    it('should be a function', () => {
      assert.typeOf(addCalculateDiscountPriceMethod, 'function');
    });
    it('should return an object', () => {
      expect(addCalculateDiscountPriceMethod({})).to.be.an('object');
    });
    it('should add a working method', () => {
      const register = {
        price: 20,
        discountPercentage: 0.2,
      };
      addCalculateDiscountPriceMethod(register);
      expect(register.calculateDiscountPrice()).to.equal(16);
    });
  });
});
