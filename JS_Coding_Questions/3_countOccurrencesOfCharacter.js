// ---------------------------------------------------------------
//  Programming Question: Count Occurrences of Character
// ---------------------------------------------------------------

//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.
// console.log(countChar("MissIssippi", "I")); // Output: 4

//todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).

function countChar(str, char) {
  str = str.toLowerCase();
  char = char.toLowerCase();

  strArr = str.split("");
  count = strArr.reduce((acc, curr) => {
    if (curr === char) {
      acc++;
    }
    return acc;
  }, 0);
  return count;
}

console.log(countChar("MissIssippi", "I"));
console.log(countChar("HeLlo", "L"));
