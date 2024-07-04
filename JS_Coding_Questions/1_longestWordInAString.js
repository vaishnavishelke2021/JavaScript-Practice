// ---------------------------------------------------------------
//  Programming Question: Longest Word in a String
// ---------------------------------------------------------------

//Q: Write a function findlongestword that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function findlongestword(inputString) {
  if (inputString.trim().length === 0) return false;

  let words = inputString.split(" ");
  //   console.log(words);

  //   ------------------------ way 1 -------------------------
  //   words.sort((a, b) => a.length - b.length); // sorts in ascending order of length , for descending : b.length-a.length
  //   console.log(words);
  //   return words.at(-1); // The 'at' method accesses an element at the specified index.

  //   ------------------------ way 2 -------------------------
  let longWord = words.reduce(
    (acc, currWord) => (currWord.length > acc.length ? currWord : acc),
    ""
  );
  return longWord;
}

console.log(findlongestword("helloya my name is VaishnaviShelke"));
