//? Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

// Example usage:
// console.log(findMax([1, 5, 3, 9, 21])); // Output: 21
// console.log(findMax([- 10, -5, -3, -9, -2])); // Output: -2
// console.log(findMax([5])); // Output: 5

// ---------------------------------------------------------------------------------------------------------

function findMax(arr) {
  // ----------------------way 1-----------------------------
  //   let max = arr[0];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > max) {
  //       max = arr[i];
  //     }
  //   }
  //   return max;

  // ----------------------way 2 : spread operator-----------------------------
  return Math.max(...arr);
}

console.log(findMax([1, 5, 3, 9, 21])); // Output: 21
console.log(findMax([-10, -5, -3, -9, -2])); // Output: -2
console.log(findMax([5])); // Output: 5
