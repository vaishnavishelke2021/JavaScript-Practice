const passwordBox = document.querySelector("#passwordBox");
const btn = document.querySelector("#btn");

const upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCase = "qwertyuioplkjhgfdsazxcvbnm";
const numbers = "1234567890";
const symbols = "'`~!@#$%^&*()_-=+|}]{[:;,<.>/?";

const allChars = upperCase + lowerCase + numbers + symbols;
const length = 12; // default length of the generated password

function generatePassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copy() {
  passwordBox.select();
  document.execCommand("copy");
}
