// array of upperCase letters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// array of lowerCase letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// array of specialChars "~`!@#$%^&*()_-+={[}]|:;'<,>.?/"
var specialChars = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/"];
// array of numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min +1) + min);

  return value;
};

var generatePassword = function(){
  window.alert("Welcome to the password generator!");
  var passLength = window.prompt("Please choose the amount of characters you would like in your password. Enter a numerical value between 8-128.");
    if (passLength < 8 || passLength > 128) {
      window.alert("You need to provide a valid answer. Please try again!");
      return generatePassword();
    }

    var initialArray = [];

    var clc = window.confirm("Would you like to include lowercase letters in this password? Reply with 'OK' for yes and 'CANCEL' for no."); 
    console.log(clc);
    if (clc) {
      initialArray.splice(0, 0, lowerCase)
    }
    var cuc = window.confirm("Would you like to include uppercase letters in this password? Reply with 'OK' for yes and 'CANCEL' for no.");
    console.log(cuc);
    if (cuc) {
      initialArray.splice(0, 0, upperCase)
    }
    var csc = window.confirm("Would you like to include the following special charactars in this password: '~`!@?#$%^&*()_-+={[}]|:;'<,>./' ? Reply with 'OK' for yes and 'CANCEL' for no.")
    console.log(csc);
    if (csc) {
      initialArray.splice(0, 0, specialChars)
    }
    var cn = window.confirm("Would you like to include numbers in this password? Reply with 'OK' for yes and 'CANCEL' for no.");
    console.log(cn);
    if (cn) {
      initialArray.splice(0, 0, numbers)
    }

    console.log(passLength);  
    console.log(initialArray);
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
