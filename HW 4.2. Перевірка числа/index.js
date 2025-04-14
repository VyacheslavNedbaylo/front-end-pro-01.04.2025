const number = Number.parseInt(prompt("Hello! Plese tipe in 3 digits"));
let shouldCalc = true;

if (!number || (number > 999 || number <= 100)) {
  alert(
    "You entered wrong number, try to use correct number and less or equal 999. I need to reload the page",
  );
  shouldCalc = false;
}

if (shouldCalc) {
  const firstNumber = Number.parseInt(number / 100);
  const secondNumber = Number.parseInt((number % 100) / 10);
  const thirdNumber = number % 10;

  if (
    firstNumber === secondNumber &&
    secondNumber === thirdNumber &&
    firstNumber === thirdNumber
  ) {
    alert("All digits are the same");
  } else if (
    firstNumber === secondNumber ||
    secondNumber === thirdNumber ||
    firstNumber === thirdNumber
  ) {
    alert("Only two digits are the same");
  } else {
    alert("All digits are different");
  }
}
