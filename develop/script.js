///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordText.value = password;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////

  //1. probably need some variables.  one for symbols, lettercase, uppercase, numbers.
  //2. might have to user JS features to convert to lowercase and uppercase letters.
  //3. where to pull symbols from??
  //4. probably need to prompt user.  what do you want added.  prompt 1How many letters 8-128??? prompt two? symbols.etc if statement based on confirms and creation. 
  //5. are any character types selected?? if 0 are selected.  ALL=false alert user that no pw can be generated.
  //6. now to start logic.  



} 


