const birthYear = prompt("Введіть ваш рік народження:");
const city = prompt("В якому місті ви живете?");
const sport = prompt("Ваш улюблений вид спорту?");

let message = "";

if (birthYear === null) {
  message += "Шкода, що Ви не захотіли ввести свій рік народження.\n";
} else if (birthYear.trim() === "") {
  message += "Шкода, що Ви нічого не ввели у полі 'рік народження'.\n";
}

if (city === null) {
  message += "Шкода, що Ви не захотіли ввести своє місто.\n";
} else if (city.trim() === "") {
  message += "Шкода, що Ви нічого не ввели у полі 'місто'.\n";
}

if (sport === null) {
  message += "Шкода, що Ви не захотіли ввести свій улюблений вид спорту.\n";
} else if (sport.trim() === "") {
  message += "Шкода, що Ви нічого не ввели у полі 'вид спорту'.\n";
}
if (
  birthYear !== null && birthYear.trim() !== "" &&
  city !== null && city.trim() !== "" &&
  sport !== null && sport.trim() !== ""
) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - Number(birthYear);

  const capitals = {
    "Київ": "України",
    "Вашингтон": "США",
    "Лондон": "Великої Британії"
  };

   if (capitals[city]) {
    message += `Ти живеш у столиці ${capitals[city]}.\n`;
  } else {
    message += `Ти живеш у місті ${city}.\n`;
  }

  const champions = {
    "футбол": "Ліонель Мессі",
    "бокс": "Олександр Усик",
    "теніс": "Новак Джокович"
  };

  if (champions[sport.toLowerCase()]) {
    message += `Круто! Хочеш стати як ${champions[sport.toLowerCase()]}?\n`;
  } else {
    message += `Твій улюблений вид спорту — ${sport}.\n`;
  }

  message = `Тобі ${age} років.\n` + message;
}

alert(message);
