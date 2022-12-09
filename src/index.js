import displayWeatherData from './displayWeatherData';
import './style.css';

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
  const cityInput = document.getElementById('city').value;
  const stateInput = document.getElementById('state').value;
  const countryInput = document.getElementById('countryCode').value;
  displayWeatherData(cityInput, stateInput, countryInput);
});
