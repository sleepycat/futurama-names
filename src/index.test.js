import {expect} from 'chai';
import futurama from './index';

describe('futurama-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(futurama.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Fry`', function() {
      expect(futurama.all).to.include('Fry');
    });
  });

  describe('random', function() {
    it('should return a random item from the futurama.all', function() {
      var randomItem = futurama.random();
      expect(futurama.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = futurama.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(futurama.all).to.include(item);
      });
    });
  });
});
