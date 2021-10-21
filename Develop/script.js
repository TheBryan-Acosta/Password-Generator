//Create a random number between two values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

//Get the password size
function getSize(){
  var finalpasswordsize = window.prompt("What is the length? Choose from 8 to 128");

  while(finalpasswordsize < 8 || finalpasswordsize > 128){
      finalpasswordsize = window.prompt("Please enter a number from 8 to 128");
  }

  return(finalpasswordsize);

}
//Generate character
function genChar(lower,upper,numeric,special){

  var stringbank = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X",
  "Y", "Z", "a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z",
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "#","$", "%",
  "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=",
  ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

    if(special == false){
      stringbank.splice(62 ,(stringbank.length-62));
    }
    if(numeric == false){
      stringbank.splice(52, 10);
    }
    if(lower == false){
      stringbank.splice(26, 26);
    }
    if(upper == false){
      stringbank.splice(0, 26);
    }

    return(stringbank);
}

//Generate the final Password
function generatePassword() {
  //Assign variables
    var a = 0;
    var finalpassword = '';
    var pSize = getSize();

  //User input for character type + quad false check
    while(a == 0){
    var lowerCase = window.confirm("Would you like lowercase characters?");
    var upperCase = window.confirm("Would you like uppercase characters?");
    var numeric = window.confirm("Would you like numbers?");
    var special = window.confirm("Would you like special characters?");

      if(lowerCase === false && upperCase === false && numeric === false && special === false){
        window.alert("Please select at least one character type");
      }
      else{
        a++;
      }
    }

    var stringbank = genChar(lowerCase,upperCase,numeric,special);

  //Loop funtion to create characters in string
    for(i = 0; i < pSize ; i++){
      var finalpassword = finalpassword + stringbank[getRandomInt(0, stringbank.length)];
    }

  
  return(finalpassword);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
