// ---------------------------------------------------------------
//  Programming Question: Sort an array
// ---------------------------------------------------------------

//? Write a function to sort an array of numbers in an ascending order.
// Example usage:
// console. log(sortAscending([5, 3, 1, 8])); // Output: [1, 3, 5, 8]

//todo Requirements:
//? The function should take an array of numbers as input.
//? It should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use the built-in sort() method.

// ---------------------------------------------------------------------------------------------------------

function sortAscending(arr) {
  console.log(`Ascending order: ${arr.sort((a, b) => a - b)}`);
  console.log(`Descending order: ${arr.sort((a, b) => b - a)}`);
}

console.log(sortAscending([5, 3, 10, 8, 23]));
