/* *
 * Output Max
 * Write a function that takes in an array of numbers and outputs the maximum number.
 */
/*Ex:
Input: [ 1, 2, 3 ]
Output: 3
Input: [ 3, 6, 4, 5, 2, 1 ]
Output: 6
Input: [ 3, 3, 3 ]
Output: 3 */

const inputArray = [ 1, 3, 4, 50];
const maxNumber = Math.max(...inputArray);
console.log(maxNumber);