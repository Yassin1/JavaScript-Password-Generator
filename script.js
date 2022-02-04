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

function generatePassword() {

  var count = 0;

  if (uppercase == true) {
    count++;
  }
  if (lowercase == true) {
    count++;
  }

  if (number == true) {
    count++;
  }

  if (symbol == true) {
    count++;
  }

  var password = "";
  var section = parseFloat(passwordLength) / count;
  section = Math.ceil(section);


  if (uppercase == true) {

    for (let i = 0; i < section; i++) {
      var index = (Math.floor(Math.random() * characters.uppercase.length));
      password = password + characters.uppercase[index];

    }

  }
  if (lowercase == true) {

    for (let i = 0; i < section; i++) {
      var index = (Math.floor(Math.random() * characters.lowercase.length));
      password = password + characters.lowercase[index];
    }
  }

  if (number == true) {
    for (let i = 0; i < section; i++) {
      var index = (Math.floor(Math.random() * characters.number.length));
      password = password + characters.number[index];
    }
  }

  if (symbol == true) {
    for (let i = 0; i < section; i++) {
      var index = (Math.floor(Math.random() * characters.symbol.length));
      password = password + characters.symbol[index];
    }
  }
  if (password.length > parseFloat(passwordLength)) {

    password = password.substring(0, parseFloat(passwordLength));


  }
  document.getElementById("password").value = password;
}


