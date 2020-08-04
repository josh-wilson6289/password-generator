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

// Prompt user for number of characters and validates response
  var passwordLength = prompt("Choose amount of characters between 8 and 128.");
    if (Number.isInteger(passwordLength) === false || passwordLength < 8 || passwordLength > 128) {
      prompt("Please choose a valid password length");
    }
  
// Prompt user to include uppercase letters and validates response
  var uppercase = prompt("Include uppercase letters? (y/n)");
    if (uppercase.toLowerCase() !== 'y' || uppercase.toLowerCase !== 'n') {
      prompt("Please choose y or n");
    }

  // Prompt user to include numbers and validates response  
  var numbers = prompt("Include numbers? (y/n)");
    if (numbers.toLowerCase !== 'y' || numbers.toLowerCase !== 'n') {
    prompt("Please choose y or n");
    }

// Prompt user to include special characters and validates response
  var specialCharacters = prompt("Include special characters? (y/n)");
  specialCharacters.toLowerCase();
    if (specialCharacters !== 'y' || specialCharacters !== 'n') {
      prompt("Please choose y or n");
    }

// Concatenates strings for uppercase, numbers, and special characters if user chooses to do so
  if (uppercase === 'y') {
    passwordString = lowercaseString.concat(uppercaseString);
  }
  else {
    passwordString = lowercaseString;
  }

  if (numbers === 'y') {
    passwordString = passwordString.concat(numbersString);
  }

  if (specialCharacters === 'y') {
    passwordString = passwordString.concat(specialCharactersString);
  }

// Defines password variable that will be returned
  var password = '';

// Outputs random characters in the array matching the user's inputted password length
  for (i=0; i < passwordLength; i++) {
    var iteration = passwordString[Math.floor(Math.random() * passwordString.length)];
    password = password + iteration;
  }
  return(password);
}  
