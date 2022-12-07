// This function isolates and displays the desired information
// from the weatherData object that is returned from findWeatherData
import findCoordinates from './findCoordinates';
import findWeatherData from './findWeatherData';

async function displayWeatherData(cityName, stateCode, countryCode) {
  const coordinates = await findCoordinates(cityName, stateCode, countryCode);
  const weatherData = await findWeatherData(coordinates[0], coordinates[1]);
  console.log(weatherData);
  console.log(`The temperature is ${weatherData.main.temp} Fahrenheit.`);
  console.log(`The weather today is ${weatherData.weather[0].description}.`);
}

export default displayWeatherData;
