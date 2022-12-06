import findCoordinates from './findCoordinates';
import findWeatherData from './findWeatherData';

//not sure why i can't isolate the specific bit of weatherData
async function displayTemp() {
  const coordinates = await findCoordinates('Cincinnati', 'OH', 'USA');
  const weatherData = await findWeatherData(coordinates[0], coordinates[1]);
  const temp = await weatherData.main.temp;
  console.log(temp);
}

displayTemp();
