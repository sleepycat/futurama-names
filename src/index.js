import uniqueRandomArray from 'unique-random-array';
import futuramaNames from './futurama-names.json';

var getRandomItem = uniqueRandomArray(futuramaNames);

module.exports = {
  all: futuramaNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
