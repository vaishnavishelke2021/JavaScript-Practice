//? Write a function to reverse a string without using any built-in methods or libraries. The function should take a string as input and return the reversed string.

//* Example usage:
// console.log(reverseString("hello")); // Output: olleh

function reverseString(inpStr) {
  //! using reverse
  //   return inpStr.split("").reverse().join("");

  //   ! without reverse method
  let reverseStr = "";
  for (let i = inpStr.length - 1; i >= 0; i--) {
    reverseStr += inpStr[i];
  }
  return reverseStr;
}

console.log(reverseString("hello"));
