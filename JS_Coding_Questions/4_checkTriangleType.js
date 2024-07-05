// ---------------------------------------------------------------
//  Programming Question: Check triangle type
// ---------------------------------------------------------------

//? : Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

// console.log(checkTriangleType(3, 3, 3)); // Output: "equilateral"
// console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles"
// console.log(checkTriangleType(5, 8, 6)); // Output: "scalene

// todo The function should adhere to the following rules:
//? If all three sides are of equal length, return "equilateral".
//? If only two sides are of equal length, return "isosceles".
//? If all three sides have different lengths, return "scalene".

// -------------------------------------------------------------------------------------------------------------------------------

function checkTriangleType(s1, s2, s3) {
  if (s1 === s2 && s2 === s3) return "equilateral";
  if (s1 === s2 || s2 === s3 || s1 === s3) return "isosceles";
  return "scalene";
}

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(3, 4, 3));
console.log(checkTriangleType(5, 8, 6));
