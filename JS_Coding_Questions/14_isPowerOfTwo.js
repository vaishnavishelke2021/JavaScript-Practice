//?  Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two, and false otherwise.

// Example usage:
// console. log (isPower0fTwo (8)); // Output: true
// console. log(isPower0fTwo(7)); // Output: false
// Notes:
// The input num will be a positive integer.
// Zero (0) and negative integers are not considered powers of two.
// The function should return true if the given number is a power of 2, and false otherwise.
// Homework
// we can solve it using bitwise operator too but its your chance to do it and let me know in the comment section

const isPower0fTwo = (num) => {
  // --------------------------way 1-------------------------
  //   if (num <= 0) return false;
  //   // logic : 2**i === num
  //   for (let i = 1; i < num; i++) {
  //     if (2 ** i === num) {
  //       return true;
  //     }
  //   }
  //   return false;

  //   --------------------------way 2------------------------
  //* Each set bit (1) to the left of the rightmost set bit gets flipped to 0, while the rightmost set bit remains 1.
  //! Example 1: num = 8 (true case):
  // Binary representation of 8: 1000
  // Binary representation of 7 (num - 1): 0111 (notice the flipped bits)
  // 1000 & 0111 = 0000

  //! Example 2: num = 6 (false case):
  // Binary representation of 6: 0110
  // Binary representation of 5 (num - 1): 0101 (no specific pattern for non-powers of 2)
  // 0110 & 0101 = 0100

  //! Example 3: num = 4 (true case):
  // Binary representation of 4: 100
  // Binary representation of 3 (num - 1): 011
  // 100 & 011 = 000

  return num > 0 && (num & (num - 1)) === 0;
};

console.log(isPower0fTwo(8)); // Output: true
console.log(isPower0fTwo(6)); // Output: false
console.log(isPower0fTwo(4)); // Output: true
