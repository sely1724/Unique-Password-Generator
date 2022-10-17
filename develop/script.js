///////////////////////// DO NOT CHANGE ////////////////////////////////////
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
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////

//Arrays store the different character types 
var symbols = ["!","#","$","%","&","'",'"',"(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uiLength;//ui = user input
var reminded = false;

//Do while loop asks user for password length.  If user enters in a wrong number, they are reminded to enter in a number between 8-128 one time. 
do{ 
  uiLength = prompt("How long would you like your password to be? Needs to be between 8-128 characters");
    if ((uiLength < 8 || uiLength > 128 || (isNaN(uiLength))) && reminded == false){
        alert("Reminder: Enter in a number between 8-128.")
        reminded = true
      }; 
    }
while(uiLength < 8 || uiLength > 128 || (isNaN(uiLength)));
     
    
//Confirm messages ask user what type of character types they want to include in pw
var uiSymbols = confirm("Would you like your password to contain any symbols (e.g.!>^:)?");
var uiNumbers = confirm("Would you like your password to contain numbers?");
var uiLowerCase = confirm("Would you like your password to contain lowercase letters?");
var uiUpperCase = confirm("Would you like your password to contain uppercase letters?");


//Check for at least one character type.
if (uiSymbols === false && uiNumbers === false && uiLowerCase === false && uiUpperCase === false){
    alert("You must choose at least one character type");
}

//New Array holds all character types user chose.
var combinedArray = [];
if (uiSymbols){
    combinedArray = combinedArray.concat(symbols);
}
if (uiNumbers){
    combinedArray = combinedArray.concat(numbers);
}
if (uiLowerCase){
    combinedArray = combinedArray.concat(lowerCase);
 }
 if (uiUpperCase){
    combinedArray = combinedArray.concat(upperCase);
 }

//Store value that createPW function generates
var passwordArray = createPassword(uiLength,combinedArray);
//Converts pw to string
var passwordString = passwordArray.join('');

//Verify PW function called
verifyPassword(uiLowerCase,uiUpperCase, uiSymbols, uiNumbers, passwordString);
//Once PW is verified (i.e. includes at least one of each character type user selected, value (pw) is returned and shown to user)
return passwordString;
}

//createPW is a function that randomizes pw based on character types/length user selected
function createPassword(uiLength,combinedArray){
    var passwordArray = [];
    for (var i=0; i<uiLength; i++) {
    var choice = combinedArray[Math.floor(Math.random()*combinedArray.length)];
    passwordArray.push(choice);
    }
    return passwordArray;
}


//verifyPW is a function that checks to ensure all selected character types are included in PW.  If not, createPW is called again.
function verifyPassword (lc,uc, s, n, pwString) {
    if (lc) {
      var check = /[a-z]/;
      if (!check.test(pwString)) {
        createPassword();
        }};
    if (uc) {
      var check = /[A-Z]/;
      if (!check.test(pwString)) {
      createPassword();
      }};
    if (s) {
      var check = /[!#$%&'"()*+,-./:;<=>?@[]^_`{|}~]/;
      if (!check.test(pwString)) {
      createPassword();
      }};
    if (n) {
      var check = /[0-9]/;
      if (!check.test(pwString)) {
      createPassword();
      }};
    }