let num = Number(prompt("Введіть ціле число:"));

if (isNaN(num) || num <= 1) {
  alert("Будь ласка, введіть число більше 1.");
} else {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    alert(num + " — просте число!");
  } else {
    alert(num + " — не є простим числом.");
  }
}
