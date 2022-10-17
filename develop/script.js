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
  //Arrays store each unique character type
  var symbols = ["!","#","$","%", "&", "'", '"',"(", ")", "*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k", "l","m", "n", "o","p","q","r","s","t","u","v","w","x","y", "z"];
  var upperCase = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //ui stands for user input
  var uiLength;
  var reminded = false; 

  //Prompts user to enter in number between 8-128 characters long.  
    uiLength = prompt(
      "How long would you like your password to be? Needs to be between 8-128 characters"
    );
    //If user doesn't enter in number correctly (i.e. out of range or NaN), they are reminded what's accepted and prompted once again.
  do {
    if (reminded == false) {
      alert("Reminder: Enter in a number between 8-128.");
      reminded = true;
    }
  } while (uiLength < 8 || uiLength > 128 || isNaN(uiLength));

  //Asks users if they want to include specific character types.
  var uiSymbols = confirm ("Would you like your password to contain any symbols (e.g.!>^:)?");
  var uiNumbers = confirm ("Would you like your password to contain numbers?");
  var uiLowerCase = confirm ("Would you like your password to contain lowercase letters?");
  var uiUpperCase = confirm ("Would you like your password to contain uppercase letters?");

  
  //Checks to see if user chose one character type.  Alerts user if they haven't.
  if (uiSymbols === false && uiNumbers === false && uiLowerCase === false && uiUpperCase === false) {
    alert("You must choose at least one character type");
  }
 
  //If user chose a specific character type, all of the array is added into a new array that combines all character types
  var combinedArray = [];
  if (uiSymbols) {
    combinedArray = combinedArray.concat(symbols);
  }
  if (uiNumbers) {
    combinedArray = combinedArray.concat(numbers);
  }
  if (uiLowerCase) {
    combinedArray = combinedArray.concat(lowerCase);
  }
  if (uiUpperCase) {
    combinedArray = combinedArray.concat(upperCase);
  }

  //Calls generate pw function and assigns to variable.
  var passwordArray = createPassword(uiLength, combinedArray);
  var passwordString = passwordArray.join("");

  //Calls verify pw function and passes through character types to check.
  verifyPassword(
    uiLowerCase,
    uiUpperCase,
    uiSymbols,
    uiNumbers,
    passwordString
  );
  return passwordString;
}

//Function below generates random password. 
function createPassword(uiLength, combinedArray) {
  var passwordArray = [];
  for (var i = 0; i < uiLength; i++) {
    var choice =
      combinedArray[Math.floor(Math.random() * combinedArray.length)];
    passwordArray.push(choice);
  }
  return passwordArray;
}

//Verifies whether generated password contains all symbols selected by user.
function verifyPassword(lc, uc, s, n, pwString) {
  if (lc) {
    var check = /[a-z]/;
    if (!check.test(pwString)) {
      createPassword();
    }
  }

  if (uc) {
    var check = /[A-Z]/;
    if (!check.test(pwString)) {
      createPassword();
    }
  }

  if (s) {
    var check = /[!#$%&'"()*+,-./:;<=>?@[]^_`{|}~]/;
    if (!check.test(pwString)) {
      createPassword();
    }
  }

  if (n) {
    var check = /[0-9]/;
    if (!check.test(pwString)) {
      createPassword();
    }
  }
}
