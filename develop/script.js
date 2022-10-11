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

  //1. probably need some variables.  one for symbols, lettercase, uppercase, numbers. Look up how to make these codier?? 
  var symbols = ["!","#","$","%","&","'",'"',"(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]; //to start - couldn't include backslash???
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];


// do while
  //2. start user input. need to know password length.  Better to use if statement or while loop? while loop keeps asking user until it's correct
var uiLength;//ui = user input

//check for random characters too!

uiLength = prompt("How long would you like your password to be? Needs to be between 8-128 characters");
     while(uiLength < 8 || uiLength > 128 || (isNaN(uiLength))){
        alert("Reminder: Enter in a number between 8-128."); 
        uiLength = prompt("How long would you like your password to be? Needs to be between 8-128 characters");}
     
    

    //Confirm message to users?? 
  //3. Continue prompts.  Now need to know if they want symbols, number, lowercase, and/or uppercase
var uiSymbols = confirm("Would you like your password to contain any symbols (e.g.!>^:)?");
var uiNumbers = confirm("Would you like your password to contain numbers?");
var uiLowerCase = confirm("Would you like your password to contain lowercase letters?");
var uiUpperCase = confirm("Would you like your password to contain uppercase letters?");


//4. Check for at least one character type.  While loop or if statement?

if (uiSymbols === false && uiNumbers === false && uiLowerCase === false && uiUpperCase === false){
    alert("You must choose at least one character type");
   // return "try again";
}
//thoughts.  concatenate arrays.  shuffle them.  Then choose first string?
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

 //have to be able to choose up to 128 characters!!!! How do we do this?  take array containing everything and randomize it to push 1 number each iteration into new array?

function createPassword() {passwordArray = [];
for (var i=0; i<uiLength; i++) {
var choice = combinedArray[Math.floor(Math.random()*combinedArray.length)];
var password = passwordArray.push(choice);
}
 checkPW(password);
}

//CHECK FOR IF PASSWORD CONTAINS ONE OF ALL REQUESTED THINGS
//Can I run below test on an array  Or do I need to change array to string?? 
function checkPW(password) {
//Changed to string.
//Now I need to say if user selected value type 
//THEN check to see if at least ONE value type is included in PW
//THEN need to change it back to array/
var passwordString = password.join('');;
if (uiLowerCase) {
    var selected = /a-z/;
   if (!selected.test(passwordString)) {
    createPassword();
   };
}
return passwordString;
};
return password;
}

