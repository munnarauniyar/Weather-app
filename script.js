const searchButton = document.getElementById("search");
const cityInput = document.getElementById("city");

const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const weatherCondition = document.getElementById("weather-condition");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");

const API_KEY = '55a46b08df56decab1f0e621da91384d';

searchButton.addEventListener("click", () => {
    const city = cityInput.value;
    getWeather(city);
});

async function getWeather(city) {

    try {


        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        searchButton.textContent = "Searching...";
        searchButton.disabled = true;
        const response = await fetch(url);

        const data = await response.json();

        if (data.cod == 404) {
            alert("City not found");
            searchButton.textContent = "Search";
            searchButton.disabled = false;
            return;
        }

        cityName.textContent = data.name;
        temperature.textContent = Math.round(data.main.temp) + "°C";

        weatherCondition.textContent = data.weather[0].main;
        changeBackground(data.weather[0].main);

        humidity.textContent = data.main.humidity + "%";
        windSpeed.textContent = data.wind.speed + "km/h";

        searchButton.textContent = "Search";
        searchButton.disabled = false;



    }

    catch (error) {
        console.log(error);

        searchButton.textContent = "Search";
        searchButton.disabled = false;

        alert("Something went wrong");
    }

}

function changeBackground(weather) {


    if (weather === "Clear") {
        document.body.style.background = "linear-gradient(135deg,#56CCF2,#2F80ED)";
    }

    else if (weather === "Clouds") {
        document.body.style.background = "linear-gradient(135deg,#606c88,#3f4c6b)";
    }

    else if (weather === "Rain") {
        document.body.style.background = "linear-gradient(135deg,#373B44,#4286f4)";
    }

    else if (weather === "Thunderstorm") {
        document.body.style.background = "linear-gradient(135deg,#232526,#414345)";
    }

    else {
        document.body.style.background = "linear-gradient(135deg,#6a11cb,#2575fc)";
    }


}

const locationButton =
    document.getElementById("location");

locationButton.addEventListener("click", () => {

    navigator.geolocation.getCurrentPosition(
        getPosition
    );

});

async function getPosition(position) {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    cityName.textContent = data.name;
    temperature.textContent = Math.round(data.main.temp) + "°C";
    weatherCondition.textContent = data.weather[0].main;
    changeBackground(data.weather[0].main);
    humidity.textContent = data.main.humidity + "%";
    windSpeed.textContent = data.wind.speed + "km/h";
}

