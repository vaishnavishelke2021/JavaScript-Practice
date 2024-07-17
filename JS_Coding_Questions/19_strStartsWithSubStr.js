//?19: Write a function to check if a given string starts with a specific substring.

// Input :
//? str: A string (e-g-, "Hello world").
//? subStr: A substring to check if it starts the given string (e.g., "Hello").
//? Output: true if the given string starts with the specified substring, otherwise false.

// Example usage:
// console. log(startsWithFun( "Hello world", "hello")); // Output: true
// console.log(startsWithFun( "Hello world", "World")); // Output: false

function startsWithFun(inpStr, inpSubstr) {
  //! way 1
  //   if (inpStr.toLowerCase().startsWith(inpSubstr.toLowerCase())) {
  //     return true;
  //   }
  //   return false;

  //! way 2
  return (
    inpStr.slice(0, inpSubstr.length).toLowerCase() === inpSubstr.toLowerCase()
  );
}

console.log(startsWithFun("Hello world", "hello"));
console.log(startsWithFun("Hello world", "world"));
