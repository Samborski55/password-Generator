// Assignment code here
var generatePassword = function(){
  window.alert("Welcome to the password generator!");
  var passLength = window.prompt("Please choose the amount of characters you would like in your password. Enter a numerical value between 8-128.");
    if (passLength < 8 || passLength > 128) {
      window.alert("You need to provide a valid answer. Please try again!");
      return generatePassword();
    }
    console.log(passLength);  
  // array of upperCase
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // array of lowerCase
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // array of specialChars ]
  var specialChars = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/"];
  // array of numbers
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    console.log(upperCase);
    console.log(lowerCase);
    console.log(specialChars);
    console.log(numbers);
}


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
