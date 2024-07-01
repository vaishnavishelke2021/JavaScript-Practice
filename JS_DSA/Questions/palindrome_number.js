// check if a number is a palindrome
// 121 => true
// 1234 => false

function isPalindrome(num) {
  let numStr = num.toString();
  let revStr = numStr.split("").reverse().join("");
  //   return numStr === revStr;
  // or
  return num === Number(revStr);
}

console.log(isPalindrome(121));
