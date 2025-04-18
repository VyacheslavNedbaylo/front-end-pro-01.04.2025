const N = parseInt(prompt("Введіть ціле число N:"));

if (isNaN(N)) {
  alert("Будь ласка, введіть правильне ціле число");
} else {
  console.log(`Числа, квадрати яких не перевищують ${N}:`);
  for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
      console.log(i);
    }
  }
}