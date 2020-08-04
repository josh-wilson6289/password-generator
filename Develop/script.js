// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
// Set arrays for lowercase, uppercase, numbers, and special characters
  var lowercaseString = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbersString = '123456789';
  var specialCharactersString = '!@#$%^&*()_+-='

// Set passwordString to be the final string to iterate over given user parameters.  
  var passwordString;

// Prompt user for number of characters and whether to include uppercase, numbers, and special characters
  var passwordLength = prompt("Choose amount of characters between 8 and 128.");
  var uppercase = prompt("Include uppercase letters? (y/n)");
  var numbers = prompt("Include numbers? (y/n)");
  var specialCharacters = prompt("Include special characters? (y/n)");

// Concatenates arrays for uppercase, numbers, and special characters if user chooses to do so
  if (uppercase === 'y') {
    passwordString = lowercaseString.concat(uppercaseString);
  }
  else {
    passwordString = lowercaseString;

  }

  if (numbers === 'y') {
    passwordString = passwordString.concat(numbersString);
  }
  else {
    passwordString = passwordString;
  }

  if (specialCharacters === 'y') {
    passwordString = passwordString.concat(specialCharactersString);
  }
  else {
    passwordString = passwordString;
  }

// Defines password variable that will be returned
  var password = '';

// Outputs random characters in the array matching the user's inputted password length
  for (i=0; i < passwordLength; i++) {
    var iteration = passwordString[Math.floor(Math.random() * passwordString.length)];
    console.log(iteration);
    password = password + iteration;
  }
  console.log(password);
  return(password);
}  
