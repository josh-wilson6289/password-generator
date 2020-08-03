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







// Set arrays for lowercase, uppercase, numbers, and special characters
var lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbersArr = [1,2,3,4,5,6,7,8,9];
var specialCharactersArr = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+'];

// Set passwordArr to be the final array to iterate over given user parameters.  Also declare final password variable.
var passwordArr = [];

// Prompt user for number of characters and whether to include uppercase, numbers, and special characters
var passwordLength = prompt("Choose amount of characters between 8 and 128.");
var uppercase = prompt("Include uppercase letters? (y/n)");
var numbers = prompt("Include numbers? (y/n)");
var specialCharacters = prompt("Include special characters? (y/n)");

// Concatinates arrays for uppercase, numbers, and special characters if user chooses to do so
if (uppercase === 'y') {
  passwordArr = lowercaseArr.concat(uppercaseArr);
}
else {
  passwordArr = lowercaseArr;

}

if (numbers === 'y') {
  passwordArr = passwordArr.concat(numbersArr);

}
else {
  passwordArr = passwordArr;
}

if (specialCharacters === 'y') {
  passwordArr = passwordArr.concat(specialCharactersArr);
}

else {
  passwordArr = passwordArr;
}

// Outputs random characters in the array matching the user's inputted password length
for (i=0; i < passwordLength; i++) {
  password = passwordArr[Math.floor(Math.random() * passwordArr.length)];
  console.log(password);
}

