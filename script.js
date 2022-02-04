var uppercase;
var lowercase;
var number;
var symbol;
var passwordLength;


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click',

  function () {
    passwordLength = prompt("How many characters would you like your password to be?");

    while (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
    }

    uppercase = confirm("Would you like to use uppercase letters?");
    lowercase = confirm("Would you like to use lowercase letters?");
    number = confirm("would you like to use numbers?");
    symbol = confirm("would you like to use special characters?");

    while (!(uppercase || lowercase || numbers || symbols)) {
      alert("You must select at least one character type!");
    }


    generatePassword();
  });


var characters = {

  number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  symbol: ["!", "@", "#", "$", "%", "(", ")"],
  passwordlength: 128,
}

