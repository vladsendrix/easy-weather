function getWeather() {
  const apiKey = OPENWEATHER_API_KEY;
  const city = document.getElementById("cityInput").value;
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const feelsLike = data.main.feels_like;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        const weatherInfo = `
                    <p>Weather in ${city}:</p>
                    <p>Description: ${weatherDescription}</p>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Feels like: ${feelsLike}°C</p>
                    <p>Humidity: ${humidity}%</p>
                    <p>Wind Speed: ${windSpeed} m/s</p>
                `;
        document.getElementById("weatherInfo").innerHTML = weatherInfo;
      } else {
        document.getElementById("weatherInfo").innerHTML =
          "City not found or invalid API key.";
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      document.getElementById("weatherInfo").innerHTML =
        "An error occurred while fetching weather data.";
    });
}
