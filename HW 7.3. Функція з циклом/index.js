function getNumber() {
  let attempts = 0;
  let lastInput = null;
  while (attempts < 10) {
    let userInput = prompt("Введіть число більше 100:");
    lastInput = userInput;
    if (parseInt(userInput) > 100) {
      console.log("Останнє введене число: " + userInput);
      return;
    }
    attempts++;
  }
  console.log("Останнє введене число після 10 спроб: " + lastInput);
}
getNumber();
