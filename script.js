const searchButton = document.getElementById("search");
const cityInput = document.getElementById("city");

searchButton.addEventListener("click", () => {
    const city = cityInput.value;
    getWeather(city);
});

async function getWeather(city) {

    const API_KEY = '55a46b08df56decab1f0e621da91384d';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    console.log(url);

}