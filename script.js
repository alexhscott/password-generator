// Variables for characters
var lowerChars = ["a", "b", "c", "d", "e"];
var upperChars = ["A", "B", "C", "D", "E"];
var specialChars = ["!", "@", "#", "$", "%"];
var numericChars = ["1", "2", "3", "4", "5"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write a function to get user preferences
function getCriteria() {
    var length = prompt("How many characters: 8-128?");
    length = parseInt(length)
    if (length > 128 || length < 8) {
        window.alert("Invalid length. Please enter length between 8 and 128 characters");
        return
    }
    var lowerCase = confirm ("Would you like lower case characters? 'Ok' for YES, 'Cancel' for NO");
    var upperCase = confirm ("Would you like upper case characters? 'Ok' for YES, 'Cancel' for NO");
    var specialCharacters = confirm ("Would you like special characters? 'Ok' for YES, 'Cancel' for NO");
    var numerics = confirm ("Would you like numbers? 'Ok' for YES, 'Cancel' for NO");
    console.log(lowerCase);
    var preferences = {
        length: length,
        lowerCase: lowerCase,
        upperCase: upperCase,
        specialCharacters: specialCharacters,
        numerics: numerics,
    }
    return preferences;
}
// write a funciton to generate password
function generatePassword() {
    var criteria = getCriteria();
    var possibleChar = []
    if (criteria.lowerCase === true) {
        possibleChar = possibleChar.concat(lowerChars)
        console.log(possibleChar)
    }
    if (criteria.upperCase === true) {
        possibleChar = possibleChar.concat(upperChars)
        console.log(possibleChar)
    }
    if (criteria.specialCharacters === true) {
        possibleChar = possibleChar.concat(specialChars)
        console.log(possibleChar)
    }
    if (criteria.numerics === true) {
        possibleChar = possibleChar.concat(numericChars)
        console.log(possibleChar)
    }
    console.log(criteria);
    var pw = []
    // Loop over possible characters array length number of times and grab random index, then push into pw array
    for(var i = 0; i < criteria.length; i ++) {
        // create variable to get random index from array
        var random = Math.floor(Math.random() * possibleChar.length);
        console.log(possibleChar[random]);
        pw.push(possibleChar[random]);
        console.log(pw);
    }
    return pw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);