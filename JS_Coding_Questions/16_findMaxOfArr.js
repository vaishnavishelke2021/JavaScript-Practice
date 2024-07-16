//? Coding Challenge: Find the Minimum Value in an Array
//? Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

//* Constraints:
//* The input array may contain both positive and negative integers.
//* The input array may be empty.
//* The input array may contain duplicate values.

// console.log(findMin([5, 10, 2, 8])); // Output: 2
// console.log(findMin([5, -3, 0, 12, -71])); // Output: -7
// console.log(findMin([])); // Output: undefined (or any suitable message for empty array)

//* Note:
//? Ensure the function handles edge cases gracefully, such as an empty input array.

function findMin(arr) {
  //! ------------------------way 1----------------------------
  return arr.length === 0 ? "Empty Array" : Math.min(...arr);

  //!-------------------------way 2----------------------------
  //   let min = arr[0];
  //   for (let curr of arr) {
  //     if (curr < min) {
  //       min = curr;
  //     }
  //   }
  //   return min;

  //!-------------------------way 3----------------------------
  //   if (arr.length === 0) return "Empty Array";
  //   return arr.reduce((acc, min) => {
  //     if (acc < min) {
  //       min = acc;
  //     }
  //     return min;
  //   }, arr[0]);
}

console.log(findMin([5, 10, 2, 8])); // Output: 2
console.log(findMin([5, -3, 0, 12, -7])); // Output: -7
console.log(findMin([])); // Output: undefined (or any suitable message for empty array)
