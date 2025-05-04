const numbers = [1, 2, 3, 4, 5, 10, 20, 30, 50, 133];
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers);
