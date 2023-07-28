// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = [0,1,2,3,4,5,6,7,8,9];
let specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', "[", '\\', "]", '^', "_", '`', '{', '|', '}', '~'];

let selectedCharacterSets= []


function generatePassword() {

  let passwordLength = prompt("How many characters do you want the password to be?")
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }
  let useLowerCase = prompt("Include lowercase letters? Type 'yes' or 'no'");
  let useUpperCase = prompt("Include uppercase letters? Type 'yes' or 'no'");
  let useNumbers = prompt("Include numbers? Type 'yes' or 'no'");
  let useSpecialCharacters = prompt("Include special characters? Type 'yes' or 'no'");
  let includeLowerCase = useLowerCase.toLowerCase() === 'yes';
  let includeUpperCase = useUpperCase.toLowerCase() === 'yes';
  let includeNumbers = useNumbers.toLowerCase() === 'yes';
  let includeSpecialCharacters = useSpecialCharacters.toLowerCase() === 'yes';
  
  if (includeLowerCase) {
    selectedCharacterSets = [...selectedCharacterSets, ...lowerCaseAlphabet];
  }

  else if (includeUpperCase) {
    selectedCharacterSets = [...selectedCharacterSets, ...upperCaseAlphabet];

  }

  else if (includeNumbers) {
    selectedCharacterSets = [...selectedCharacterSets, ...numbers];
  }
  
  else if (includeSpecialCharacters) {
    selectedCharacterSets = [...selectedCharacterSets, ...specialCharacters];
  }
  else {
    alert("You must include at least one character set for the password.");
    return;
  }

let password = ""

for (let i = 0; i < passwordLength; i++) {
  let randomIndex = Math.floor(Math.random()* selectedCharacterSets.length);
  let randomCharacter = selectedCharacterSets[randomIndex];



  password += randomCharacter;
}
    return password
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

