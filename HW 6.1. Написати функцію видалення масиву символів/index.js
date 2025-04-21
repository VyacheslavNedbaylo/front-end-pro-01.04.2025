let phrase = prompt("Введіть вашу фразу");
let charsToRemove = [];
while (true) {
  let char = prompt(
    "Які елементи з вашої фрази ви хочете видалити? (Натисніть 'Скасувати' для завершення)"
  );
  if (char === null) break;

  charsToRemove.push(char);
}

function getPartOfPhrase(str, charsToRemove) {
  return str
    .split("")
    .filter((char) => !charsToRemove.includes(char))
    .join("");
}
let result = getPartOfPhrase(phrase, charsToRemove);

alert("Результат: " + result);
