// Challenge: Factorial Finder

//? Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.

// Here are some examples of factorial calculations:
// factorial (0) => 1
// factorial (1) →> 1
// factorial (2) => 2
// factorial (3) => 6
// factorial(4) => 24
// factorial (5) → 120
// your function should work for any non-negative integer

let factorial = (num) => {
  if (num === 0) return 1;
  if (num < 0) return "Enter positive integer";

  //   -------------------------way 1-----------------------------------
  //   res = 1;
  //   for (let i = 1; i <= num; i++) {
  //     res *= i;
  //   }
  //   return res;

  //   -------------------------way 2 : recursion-----------------------------------
  return num * factorial(num - 1);
};

console.log(factorial(5));
console.log(factorial(4));
