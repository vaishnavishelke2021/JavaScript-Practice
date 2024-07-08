//?  Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e', '1', 'o', and 'u' as vowels (both lowercase and uppercase).

// Example usage:
// console.log(countVowels("Helloo world")); // Output: 4
// console.log(countVowels("ThE quick brOwn fOx")); // Output: 5
// console.log(countVowels("Brrrp")); // Output: 0

// Constraints:
// The input string may contain letters in both uppercase and lowercase.
// The output should be a non-negative integer representing the count of vowels in the input string.

function countVowels(str) {
  // --------------------------------way 1----------------------------
  // let count = 0;
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" ||
  //       str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U") {
  //     count += 1;
  //   }
  // }
  // return count;


  // ---------------------------------way 2-----------------------------------
  //   let vowels = ["a", "e", "i", "o", "u"];
  //   let arr = str.split("");
  //   console.log(arr);
  //   let count = 0;
  //   for (char of arr) {
  //     if (vowels.includes(char.toLowerCase())) {
  //       count += 1;
  //     }
  //   }
  //   return count;

  
  //   -------------------------------way 3--------------------------------
  let vowels = ["a", "e", "i", "o", "u"];
  let arr = str.toLowerCase().split("");
  console.log(arr);

  return arr.reduce((acc, curr) => {
    vowels.includes(curr) ? acc++ : acc;
    return acc;
  }, 0);
}

console.log(countVowels("Helloo world")); // Output: 4
console.log(countVowels("ThE quick brOwn fOx")); // Output: 5
console.log(countVowels("Brrrp")); // Output: 0
