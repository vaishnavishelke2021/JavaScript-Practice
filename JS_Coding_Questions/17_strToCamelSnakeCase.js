//? 18: Write a function to convert a string to camelCase & snake_case.

//* Example usage:
// console.log(toCamelCase("hello world")); // Output: helloWorld

//todo ----------------------------------------------------------------------------------------------------------------

function toCamelCase(inp) {
  let inpStr = inp.split(" ");
  let result = inpStr.map((curr, index) => {
    if (index === 0) {
      return curr.toLowerCase();
    } else {
      return curr.at(0).toUpperCase() + curr.slice(1).toLowerCase();
    }
  });
  return `camelCase: ${result.join("")}`;

  //! method chaining
  // return inp
  //   .split(" ")
  //   .map((curr, index) => {
  //     if (index === 0) {
  //       return curr.toLowerCase();
  //     } else {
  //       return curr.at(0).toUpperCase() + curr.slice(1).toLowerCase();
  //     }
  //   })
  //   .join("");
}

console.log(toCamelCase("hello world")); // Output: helloWorld
