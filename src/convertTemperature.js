// functions to convert temperature from fahrenheit to celsius and back.

function fahrenheitToCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

function celsiusToFahrenheit(temp) {
  return temp * (9 / 5) + 32;
}

export default { fahrenheitToCelsius, celsiusToFahrenheit };
