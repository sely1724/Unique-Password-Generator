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
  var symbols = ["!","#","$","%","&","'",'"',"(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]; //to start - couldn't include backslash???
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = lowerCase.toUpperCase();
  var numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];

  //2. might have to user JS features to convert to lowercase and uppercase letters.
  // make FANCIER!!! map technique? Read prereads.  Look in book. Ask tutor..
  //3. where to pull symbols from??

//start user input. need to know password length.  Better to use if statement or while loop? 
var uiLength = prompt("How long would you like your password to be? Needs to be between 8-128 characters"); //ui = user input
    if (uiLength < 8 || uiLength> 128){
        alert("You need the number to be between 8 and 128");
    }
    else {
        uiLength = prompt("How long would you like your password to be? Needs to be between 8-128 characters");
    }
  //4. probably need to prompt user.  what do you want added.  prompt 1prompt two? symbols.etc if statement based on confirms and creation. 
  //5. are any character types selected?? if 0 are selected.  ALL=false alert user that no pw can be generated.
  //6. now to start logic.  



} 


