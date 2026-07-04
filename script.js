const searchButton = document.getElementById("search");
const cityInput = document.getElementById("city");

const

    searchButton.addEventListener("click", () => {
        const city = cityInput.value;
        getWeather(city);
    });

async function getWeather(city) {

    const API_KEY = '55a46b08df56decab1f0e621da91384d';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);


    console.log(response);

    const data = await response.json();

    console.log(data);
    console.log(data.name);
    console.log(data.main.humidity);
    console.log(data.main.temp);
    console.log(data.wind.speed);
    console.log(data.weather[0].main);
    console.log(data.weather[0].description);


}