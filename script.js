//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Declaring variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var characterSymbols = "!@#$%^&*()_+";
var characterNumbers = "0123456789";

//Function for generate password button
function generatePassword() {
  console.log("Button works");

  var chars = "";
  var password = "";

  var passwordLength = Number(prompt("Please enter a character amount between 8 and 128"));
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("It passed the correct length")
  var character = confirm("Do you want uppercase letters?");
  var lowcharacter = confirm("Do you want lower case letters?");
  var symbol = confirm("Do you want symbols?");
  var numbers = confirm("Do you want numbers?");
 
//If else statement to execute what the user wants from the password
  if(character){
    chars += upperCase
  }
  if (lowcharacter){
    chars += lowerCase
  }
  if (symbol){
    chars += characterSymbols
  }  
  if (numbers){
    chars += characterNumbers
  }

  }
  else {
  //Alert message that password doesn't meet password requirements
    alert("It does not reach password requirements")
    console.log("It does not reach password requirements")
  }

  
///Used math random and floor to generate password
  for (var i = 0; i < passwordLength; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  return password;
}


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
