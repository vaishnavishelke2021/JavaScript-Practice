// Challenge: Calculate the Average
//? Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

// Your function should:
// Accept an array of numbers as input.
// Calculate the sum of all the numbers in the array.
// Divide the sum by the total number of elements in the array to find the average.
// Return the calculated average.

// ------------------------------------------------------------------------------------------------------

let calculateAverage = (arr) => {
  // ----------------------------------way 1----------------------------
  //   let total = 0;
  //   let l = arr.length;
  //   for (let i = 0; i < arr.length; i++) {
  //     total += arr[i];
  //   }
  //   return total / l;

  // ----------------------------------way 2----------------------------
  total = arr.reduce((acc, curr) => acc + curr, 0);
  return total / arr.length;
};

console.log(calculateAverage([2, 2, 3, 7]));
console.log(calculateAverage([5, 10, 2, 8]));
