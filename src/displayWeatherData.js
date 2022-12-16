// This function isolates and displays the desired information
// from the weatherData object that is returned from findWeatherData
import findCoordinates from './findCoordinates';
import findWeatherData from './findWeatherData';

async function displayWeatherData(cityName, stateCode, countryCode) {
  const coordinates = await findCoordinates(cityName, stateCode, countryCode);
  const weatherData = await findWeatherData(coordinates[0], coordinates[1]);
  const temperatureDisplay = document.getElementById('temperatureDisplay');
  const weatherDisplay = document.getElementById('weatherDisplay');
  temperatureDisplay.innerText = weatherData.main.temp;
  weatherDisplay.innerText = weatherData.weather[0].description;
  document.getElementById('currentLocationDisplayed').innerText = `${cityName}, ${stateCode}, ${countryCode} Weather`;
}

export default displayWeatherData;
