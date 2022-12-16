import displayWeatherData from './displayWeatherData';
import convertTemperature from './convertTemperature';
import currentTime from './currentTime';
import findTimezone from './findTimezone';
import './style.css';

const submitButton = document.getElementById('submitButton');
const fahrenheitToCelsiusButton = document.getElementById('fahrenheitToCelsiusButton');
const celsiusToFahrenheitButton = document.getElementById('celsiusToFahrenheitButton');
let cityInput = document.getElementById('city').value;
let stateInput = document.getElementById('state').value;
let countryInput = document.getElementById('countryCode').value;
let clock;

displayWeatherData(cityInput, stateInput, countryInput);
celsiusToFahrenheitButton.disabled = true;
findTimezone(cityInput, stateInput, countryInput)
  .then((value) => {
    clock = setInterval(currentTime, 1000, value);
  });

submitButton.addEventListener('click', () => {
  cityInput = document.getElementById('city').value;
  stateInput = document.getElementById('state').value;
  countryInput = document.getElementById('countryCode').value;
  clearInterval(clock);
  displayWeatherData(cityInput, stateInput, countryInput);
  findTimezone(cityInput, stateInput, countryInput)
    .then((value) => {
      clock = setInterval(currentTime, 1000, value);
    });
});

function displayFahrenheit() {
  const temperature = parseFloat(document.getElementById('temperatureDisplay').innerText);
  const newTemp = convertTemperature.celsiusToFahrenheit(temperature).toFixed(2);
  document.getElementById('temperatureDisplay').innerText = newTemp;
  celsiusToFahrenheitButton.disabled = true;
  fahrenheitToCelsiusButton.disabled = false;
}

function displayCelsius() {
  const temperature = parseFloat(document.getElementById('temperatureDisplay').innerText);
  const newTemp = convertTemperature.fahrenheitToCelsius(temperature).toFixed(2);
  document.getElementById('temperatureDisplay').innerText = newTemp;
  fahrenheitToCelsiusButton.disabled = true;
  celsiusToFahrenheitButton.disabled = false;
}

fahrenheitToCelsiusButton.addEventListener('click', displayCelsius);
celsiusToFahrenheitButton.addEventListener('click', displayFahrenheit);
