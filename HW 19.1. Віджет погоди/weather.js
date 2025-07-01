const API_KEY = "63b8655e2f3fb2aeabfd5dbc61e1f535";
const CITY = "Kyiv";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=ua`;

const weatherDiv = document.getElementById("weather");
const refreshBtn = document.getElementById("refreshBtn");

function formatTime(unixTime, timezoneOffset) {
  const date = new Date((unixTime + timezoneOffset) * 1000);
  return date.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function fetchWeather() {
  weatherDiv.innerHTML = "<p>Оновлення...</p>";

  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Помилка отримання даних");
      }
      return response.json();
    })
    .then((data) => {
      const {
        name,
        sys: { country, sunrise, sunset },
        main: { temp, feels_like, humidity, pressure },
        weather,
        wind,
        clouds,
        visibility,
        timezone,
      } = data;

      const description = weather[0].description;
      const icon = weather[0].icon;

      const sunriseTime = formatTime(sunrise, timezone);
      const sunsetTime = formatTime(sunset, timezone);
      const windSpeed = wind.speed;
      const windDeg = wind.deg;

      weatherDiv.innerHTML = `
        <h2>Погода в ${name}, ${country}</h2>
        <p><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}"> ${description}</p>
        <ul>
          <li><strong>Температура:</strong> ${temp}°C (відчувається як ${feels_like}°C)</li>
          <li><strong>Вологість:</strong> ${humidity}%</li>
          <li><strong>Тиск:</strong> ${pressure} гПа</li>
          <li><strong>Хмарність:</strong> ${clouds.all}%</li>
          <li><strong>Видимість:</strong> ${visibility / 1000} км</li>
          <li><strong>Вітер:</strong> ${windSpeed} м/с, напрямок ${windDeg}°</li>
          <li><strong>Схід сонця:</strong> ${sunriseTime}</li>
          <li><strong>Захід сонця:</strong> ${sunsetTime}</li>
        </ul>
      `;
    })
    .catch((error) => {
      weatherDiv.innerHTML = `<p>Помилка: ${error.message}</p>`;
    });
}

fetchWeather();

refreshBtn.addEventListener("click", fetchWeather);
