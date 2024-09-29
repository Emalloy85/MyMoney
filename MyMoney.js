const textInput = document.getElementById("textInput");
const enterButton = document.getElementById("enterButton");
const message = document.getElementById("message");
let age;

document.getElementById("enterButton").onclick = function() {
  age = textInput.value;
  age = Number(age);

  if (age >= 18) {
    message.textContent = "You can invest with MyMoney"
  }
  else {
    message.textContent = "You can not invest with MyMoney"
  }
} 
