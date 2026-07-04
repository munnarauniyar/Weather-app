const searchButton = document.getElementById("search");
const cityInput = document.getElementById("city");

const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const weatherCondition = document.getElementById("weather-condition");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");

searchButton.addEventListener("click", () => {
    const city = cityInput.value;
    getWeather(city);
});

async function getWeather(city) {

    const API_KEY = '55a46b08df56decab1f0e621da91384d';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    cityName.textContent = data.name;
    temperature.textContent = Math.round(data.main.temp) + "°C";
    weatherCondition.textContent = data.weather[0].main;
    humidity.textContent = data.main.humidity + "%";
    windSpeed.textContent = data.wind.speed + "km/h";


}