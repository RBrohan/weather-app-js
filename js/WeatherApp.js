const searchButton = document.querySelector(".button");
const searchCity = document.querySelector("#searchCity");
const feelsLike = document.querySelector("#feels-like");
const humidity = document.querySelector("#humidity");
const maxTemperature = document.querySelector("#minTemp");
const minTemperature = document.querySelector("#maxTemp");
const cityName = document.querySelector("#cityName");
const app = document.querySelector(".app-container");

const API_KEY = "3265874a2c77ae4a04bb96236a642d2f";

const getWeatherDetails = async (searchCity) => {
  try {
    cityName.innerText = "Loading...";

    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
    ).then((response) => response.json());
    console.log(data);

    if (data.cod == "404") {
      cityName.innerText = "City not found.";
      app.style.display = "none";
    } else {
      cityName.innerHTML = `${data.main.temp} <sup>℃</sup> `;
      app.style.display = "flex";
      feelsLike.innerText = data.main.feels_like;
      humidity.innerText = data.main.humidity;
      maxTemperature.innerText = data.main.temp_max;
      minTemperature.innerText = data.main.temp_min;
    }
  } catch (error) {
    cityName.innerText = "An error occurred, Try again later";
  }
};
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  getWeatherDetails(searchCity.value);
});
