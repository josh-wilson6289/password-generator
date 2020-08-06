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

// Function that returns random password given user parameters
function generatePassword() {
  // Set arrays for lowercase, uppercase, numbers, and special characters
  var lowercaseString = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbersString = '123456789';
  var specialCharactersString = '!@#$%^&*()_+-=';

  // Set passwordString to be the final string to iterate over given user parameters.  
  var passwordString;

  // Prompt user for number of characters and validates response
  var passwordLength = prompt("How many characters would you like this password to be?  Please choose between 8 and 128.");

  while (Number.isInteger(Number(passwordLength)) === false || passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt("Please choose a valid password length between 8 and 128.");
  }

  // Prompt user to include uppercase letters and validates response
  var uppercase = prompt("Include uppercase letters? (y/n)").toLowerCase();

  while (uppercase !== 'y' && uppercase !== 'n') {
    var uppercase = prompt("Please choose y or n").toLowerCase();
  }

  // Prompt user to include numbers and validates response  
  var numbers = prompt("Include numbers? (y/n)").toLowerCase();

  while (numbers !== 'y' && numbers !== 'n') {
    var numbers = prompt("Please choose y or n").toLowerCase();
  }

  // Prompt user to include special characters and validates response
  var specialCharacters = prompt("Include special characters? (y/n)").toLowerCase();

  while (specialCharacters !== 'y' && specialCharacters !== 'n') {
    var specialCharacters = prompt("Please choose y or n").toLowerCase();
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
  for (i = 0; i < passwordLength; i++) {
    var iteration = passwordString.charAt(Math.floor(Math.random() * passwordString.length));
    password = password += iteration;
  }

  return (password);
}
