// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = [0,1,2,3,4,5,6,7,8,9];
let specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', "[", '\\', "]", '^', "_", '`', '{', '|', '}', '~'];

let builtArray= []




function generatePassword() {
  if (confirm("Do you want your password to contain lowercase letters?"))
{
  builtArray = [...builtArray, ...lowerCaseAlphabet];
} else if (confirm("Do you want your password to contain Uppercase letters?"))
 {
  builtArray = [...builtArray, ...upperCaseAlphabet];
} else if (confirm("Do you want your password to contain numbers?"))
{
  builtArray = [...builtArray, ...numbers];
} else (confirm("Do you want your password to contain special character?"))
{
  builtArray = [...builtArray, ...specialCharacters];
}
}


let password = ""
let passwordLength = prompt("How long do you want the password to be?")


for (let i = 0; i < passwordLength; i++) {
  
  password += "x";





    // Build a string based off of randomly selected values from an array

    return "Random Password";



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}