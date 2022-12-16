// This function isolates and returns the timezone
// from the weatherData object that is returned from findWeatherData
import findCoordinates from './findCoordinates';
import findWeatherData from './findWeatherData';

async function findTimezone(cityName, stateCode, countryCode) {
  const coordinates = await findCoordinates(cityName, stateCode, countryCode);
  const weatherData = await findWeatherData(coordinates[0], coordinates[1]);
  return weatherData.timezone;
}

export default findTimezone;
