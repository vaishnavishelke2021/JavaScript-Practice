//? 15: Write a function to calculate the sum of squares of all elements in an array. For example, given the array [1, 2, 3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14.

//* Example usage:
//* console.log(sumofSquares([1, 2, 3]));  // Output : 14

function sumofSquares(arr) {
  // -----------------------------way 1--------------------------------
  //   let sum = 0;
  //   for (let num of arr) {
  //     sum += num * num;
  //   }
  //   return sum;

  // -----------------------------way 2--------------------------------
  let sum = arr.reduce((acc, curr) => {
    return (acc += curr * curr);
  }, 0);
  return sum;
}

console.log(sumofSquares([1, 2, 3])); //14
console.log(sumofSquares([1, 2, 3, 4])); //30
