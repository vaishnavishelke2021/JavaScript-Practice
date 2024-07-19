//? Write a JavaScript function to count the occurrences of each element in an array and store the counts in an object. The keys of the object should represent the elements of the array, and the values should represent the number of times each element appears in the array.

// Here's what the function should do: I
// Accept an array of numbers as input.
// Create an empty object called counts to store the counts of each element.
// Iterate through each number in the array.
// For each number, increment the count in the counts obiect.
// If the count for a number does not exist yet, initialize it to 1.
// Return the counts object containing the counts of each element.

//* Input :
// const numbers = [1, 2, 2, 3, 1, 4, 2];
//* Output :
// {'1': 2, '2': 3, '3': 1, '4': 1 }

function findCountOfOcc(arr) {
  //! way 1
  //   let counts = {};
  //   for (let i = 0; i < arr.length; i++) {
  //     if (counts[arr[i]] === undefined) {
  //       counts[arr[i]] = 1;
  //     } else {
  //       counts[arr[i]] += 1;
  //     }
  //   }
  //   return counts;

  //! way 2
  let counts = {};
  for (let elm of arr) {
    counts[elm] = (counts[elm] || 0) + 1;
  }
  return counts;
}

console.log(findCountOfOcc([1, 2, 2, 3, 1, 4, 2]));
