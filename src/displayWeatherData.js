// This function isolates and displays the desired information
// from the weatherData object that is returned from findWeatherData
import findCoordinates from './findCoordinates';
import findWeatherData from './findWeatherData';

async function displayWeatherData(cityName, stateCode, countryCode) {
  const coordinates = await findCoordinates(cityName, stateCode, countryCode);
  const weatherData = await findWeatherData(coordinates[0], coordinates[1]);
  const temperatureDisplay = document.getElementById('temperatureDisplay');
  const weatherDisplay = document.getElementById('weatherDisplay');
  const weatherIcon = document.getElementById('weatherIcon');
  const currentLocationDisplayed = document.getElementById('currentLocationDisplayed');
  const errorMessage = document.getElementById('errorMessage');
  temperatureDisplay.innerText = weatherData.main.temp + '℉';
  weatherDisplay.innerText = weatherData.weather[0].description;
  weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  if (stateCode === '') {
    currentLocationDisplayed.innerText = `${cityName}, ${countryCode} Weather`;
  } else if (countryCode === '') {
    currentLocationDisplayed.innerText = `${cityName}, ${stateCode} Weather`;
  } else {
    currentLocationDisplayed.innerText = `${cityName}, ${stateCode}, ${countryCode} Weather`;
  }
  errorMessage.innerText = '';
}

export default displayWeatherData;
