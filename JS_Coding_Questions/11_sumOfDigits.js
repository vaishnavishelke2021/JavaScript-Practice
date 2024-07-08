//? 11: Write a function that takes a number as input and returns the sum of its digits.

// Example usage:
// console.log(sumfDigits(1234)); // Output: 10
// console.log(sumOfDigits(4321)); // Output: 10
// console.log(sumfDigits(123456)); // Output: 21

// Constraints:
// The input number will always be a positive integer.
// The input number can have multiple digits.
// The output should be the sum of all the digits in the input number.
// HomeWork:
// This function calculates the sum of digits without converting the number to a string

function sumfDigits(num) {
  // -------------------------way 1--------------------------------
  //   let sum = 0;
  //   while (num > 0) {
  //     sum += num % 10;
  //     num = Math.floor(num / 10);
  //   }
  //   return sum.toFixed();

  // -------------------------way 2--------------------------------
  let arr = Array.from(String(num), Number); // second parameter: convert string to number
  //   console.log(arr);
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumfDigits(1234));
console.log(sumfDigits(123456));
