/**************************************************************
 * pairs(names):
 *
 * - It accepts an array of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
 *
 * - It returns a randomized pairing of names:
 *       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
 *
 * - It can handle an odd number of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 *
 * - It returns an empty array if it gets passed an empty array:
 *       pairs([]) returns []
 *
 * - It returns an empty array if it gets passed nothing:
 *       pairs() returns []
 ****************************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};

function pairs(names) {
  if (names === []) return [];
  else {
    const result = [];
    let i = 1;
    let limit = names.length / 2;
    while (i <= limit) {
      let element = [];
      element.push(names.getRandom());
      element.push(names.getRandom());
      result.push(element);
      i++;
    }
    if (names.length !== 0) result.push(names);

    return result;
  }
}

module.exports = pairs;

/**********************************************
 * READ ME!!!!
 *
 * We've included this handy method for you.
 * It will remove a random element from an array
 * and return it to you.
 *
 * Example Usage:
 */
// Array.prototype.getRandom = function () {
//   return this.splice(Math.floor(Math.random() * this.length), 1)[0];
// };
// let numbers = [1, 2, 3, 4];
// let random = numbers.getRandom(); // randomly returns something from the array. e.g. 3
// console.log(random); // 3 (the random element)
// console.log(numbers); // [1, 2, 4] (missing the random element)

console.log(pairs([]));
console.log(
  pairs(["Asis", "Hamsa", "Fawas", "Mishmish", "Hussein", "Lailz", "Mr Potato"])
);
