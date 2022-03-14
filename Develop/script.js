// array of upperCase letters
var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// array of lowerCase letters
var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// array of specialChars "~`!@#$%^&*()_-+={[}]|:;'<,>.?/"
var specialChars = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/"];
// array of numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// set passLength to 0
var passLength = 0;
// main function
var generatePassword = function() {
  // welcome alert
  window.alert("Welcome to the password generator!");
  //function to determine password length
  var getPassLength = function() {
    passLength = window.prompt("Please choose the amount of characters you would like in your password. Enter a numerical value between 8-128.");
    while (passLength === "" || passLength === null || passLength < 8 || passLength > 128) {
      passLength = alert("You need to provide a valid answer. Please try again!")
      return getPassLength();
    }
    return passLength;
  };
  
// call function/log in console.log
getPassLength();
console.log(passLength);

//set masterArray and randomArray to empty
var masterArray = [];
var randomArray = [];

// function to confirm and splice what characters types user would like for password into masterArray.
var confirmations = function() {
  var cuc = window.confirm("Would you like to include uppercase letters 'A-Z' in this password? Reply with 'OK' for yes and 'CANCEL' for no.");
  console.log(cuc);
    if (cuc) {
      masterArray.splice(0, 0, upperCases)
    }
  var clc = window.confirm("Would you like to include lowercase letters 'a-z' in this password? Reply with 'OK' for yes and 'CANCEL' for no."); 
  console.log(clc);
    if (clc) {
       masterArray.splice(0, 0, lowerCases)
    }
  var csc = window.confirm("Would you like to include the following special charactars '~`!@?#$%^&*()_-+={[}]|:;'<,>./' in this password? Reply with 'OK' for yes and 'CANCEL' for no.")
  console.log(csc);
    if (csc) {
      masterArray.splice(0, 0, specialChars)
    }
  var cn = window.confirm("Would you like to include numbers '0-9' in this password? Reply with 'OK' for yes and 'CANCEL' for no.");
  console.log(cn);
    if (cn) {
      masterArray.splice(0, 0, numbers)
    }   
  console.log(masterArray);
  //validate that at least one option was selected
  if ((!cn) && (!clc) && (!csc) && (!cuc)) {
    window.alert("You must select at least one option");
    return confirmations();
  } else {
    return masterArray;
  }
};

//call confirmations()
confirmations();

// generate random char from arrays, build password in string.
var i = 0;
var finalPassword = "";
while (i < passLength) {
  var randomArray = masterArray[Math.floor(Math.random()*masterArray.length)];
  var randomChar = randomArray[Math.floor(Math.random()*randomArray.length)];
  console.log(randomChar);
  i = i + 1;
  finalPassword = finalPassword + randomChar;
};
return finalPassword;
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
