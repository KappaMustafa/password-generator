var generateBtn = document.querySelector("#generate")

const randomFunction = {
  lower: RandomLower,
  upper: RandomUpper,
  number: RandomNumber,
  Symbol: RandomSymbol,
}



// randomizer
function RandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function RandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function RandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function RandomSymbol(){
  const symbols = '!@#$%^&*(){}[]+_=-/.,'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword (lower, upper, number, Symbol) {
  var passLength = prompt('pick passowrd length (must be between 8-128)')
  if (passLength < 8 || passLength> 128){
    alert ('password length invalid')
    var passLength = prompt('pick passowrd length (must be between 8-128)')
  }
  var uppercase = confirm('Do you want uppercase letters?')
  var lowercase = confirm("Do you want lowercase letters?")
  var symbols = confirm ('do you want symbols?')
  var number = confirm ("do you want numbers?")
  var passwordResult = ''
  length = Number(length)
  if (uppercase) {
    passwordResult += RandomUpper()
  }
  if (lowercase){
    passwordResult += RandomLower()
  }
  if (symbols) {
    passwordResult += RandomSymbol()
  }
  if (number) {
    passwordResult += RandomNumber()
  }
  if(uppercase === false && lowercase === false && symbols === false && number === false){
  var errorMsg = alert ("you need to choose character types, please try again!")
  }
  console.log(passwordResult)
  for(var i = 0; i < length; i++) {
    var finalPass = passwordResult.charAt(Math.floor(Math.random() * passwordResult.length))
    finalPass.push()
  }
  return passwordResult

}
// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



generateBtn.addEventListener("click", writePassword);
