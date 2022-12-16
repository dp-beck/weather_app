"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["displayWeatherData"],{

/***/ "./src/displayWeatherData.js":
/*!***********************************!*\
  !*** ./src/displayWeatherData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _findCoordinates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findCoordinates */ "./src/findCoordinates.js");
/* harmony import */ var _findWeatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findWeatherData */ "./src/findWeatherData.js");
// This function isolates and displays the desired information
// from the weatherData object that is returned from findWeatherData



async function displayWeatherData(cityName, stateCode, countryCode) {
  const coordinates = await (0,_findCoordinates__WEBPACK_IMPORTED_MODULE_0__["default"])(cityName, stateCode, countryCode);
  const weatherData = await (0,_findWeatherData__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates[0], coordinates[1]);
  const temperatureDisplay = document.getElementById('temperatureDisplay');
  const weatherDisplay = document.getElementById('weatherDisplay');
  temperatureDisplay.innerText = weatherData.main.temp;
  weatherDisplay.innerText = weatherData.weather[0].description;
  document.getElementById('currentLocationDisplayed').innerText = `${cityName}, ${stateCode}, ${countryCode} Weather`;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWeatherData);


/***/ }),

/***/ "./src/findCoordinates.js":
/*!********************************!*\
  !*** ./src/findCoordinates.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// This function use Geocoding API to return latitude and longitude
// coordinates for an inputted city name or state.

async function findCoordinates(cityName, stateCode, countryCode) {
  try {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=8696ac5681360fb97515b98c3d94684c`, { mode: 'cors' });
    const data = await response.json();
    const coordinates = [data[0].lat, data[0].lon];
    return coordinates;
  } catch (error) {
    console.log(error);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findCoordinates);


/***/ }),

/***/ "./src/findWeatherData.js":
/*!********************************!*\
  !*** ./src/findWeatherData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// This function use OpenWeather API to return latitude and longitude
// coordinates for an inputted city name or state.

async function findWeatherData(latitude, longitude) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8696ac5681360fb97515b98c3d94684c&units=imperial`, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findWeatherData);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/displayWeatherData.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheVdlYXRoZXJEYXRhLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2dEO0FBQ0E7O0FBRWhEO0FBQ0EsNEJBQTRCLDREQUFlO0FBQzNDLDRCQUE0Qiw0REFBZTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxTQUFTLElBQUksVUFBVSxJQUFJLGFBQWE7QUFDN0c7O0FBRUEsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2ZsQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxtRkFBbUYsU0FBUyxHQUFHLFVBQVUsR0FBRyxZQUFZLDRDQUE0QyxjQUFjO0FBQ2xMO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNkL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0ZBQXdGLFNBQVMsT0FBTyxVQUFVLDJEQUEyRCxjQUFjO0FBQzNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2Rpc3BsYXlXZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9maW5kQ29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZmluZFdlYXRoZXJEYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZnVuY3Rpb24gaXNvbGF0ZXMgYW5kIGRpc3BsYXlzIHRoZSBkZXNpcmVkIGluZm9ybWF0aW9uXG4vLyBmcm9tIHRoZSB3ZWF0aGVyRGF0YSBvYmplY3QgdGhhdCBpcyByZXR1cm5lZCBmcm9tIGZpbmRXZWF0aGVyRGF0YVxuaW1wb3J0IGZpbmRDb29yZGluYXRlcyBmcm9tICcuL2ZpbmRDb29yZGluYXRlcyc7XG5pbXBvcnQgZmluZFdlYXRoZXJEYXRhIGZyb20gJy4vZmluZFdlYXRoZXJEYXRhJztcblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheVdlYXRoZXJEYXRhKGNpdHlOYW1lLCBzdGF0ZUNvZGUsIGNvdW50cnlDb2RlKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgZmluZENvb3JkaW5hdGVzKGNpdHlOYW1lLCBzdGF0ZUNvZGUsIGNvdW50cnlDb2RlKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBmaW5kV2VhdGhlckRhdGEoY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdKTtcbiAgY29uc3QgdGVtcGVyYXR1cmVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlRGlzcGxheScpO1xuICBjb25zdCB3ZWF0aGVyRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyRGlzcGxheScpO1xuICB0ZW1wZXJhdHVyZURpc3BsYXkuaW5uZXJUZXh0ID0gd2VhdGhlckRhdGEubWFpbi50ZW1wO1xuICB3ZWF0aGVyRGlzcGxheS5pbm5lclRleHQgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudExvY2F0aW9uRGlzcGxheWVkJykuaW5uZXJUZXh0ID0gYCR7Y2l0eU5hbWV9LCAke3N0YXRlQ29kZX0sICR7Y291bnRyeUNvZGV9IFdlYXRoZXJgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5V2VhdGhlckRhdGE7XG4iLCIvLyBUaGlzIGZ1bmN0aW9uIHVzZSBHZW9jb2RpbmcgQVBJIHRvIHJldHVybiBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlXG4vLyBjb29yZGluYXRlcyBmb3IgYW4gaW5wdXR0ZWQgY2l0eSBuYW1lIG9yIHN0YXRlLlxuXG5hc3luYyBmdW5jdGlvbiBmaW5kQ29vcmRpbmF0ZXMoY2l0eU5hbWUsIHN0YXRlQ29kZSwgY291bnRyeUNvZGUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eU5hbWV9LCR7c3RhdGVDb2RlfSwke2NvdW50cnlDb2RlfSZhcHBpZD04Njk2YWM1NjgxMzYwZmI5NzUxNWI5OGMzZDk0Njg0Y2AsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbZGF0YVswXS5sYXQsIGRhdGFbMF0ubG9uXTtcbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRDb29yZGluYXRlcztcbiIsIi8vIFRoaXMgZnVuY3Rpb24gdXNlIE9wZW5XZWF0aGVyIEFQSSB0byByZXR1cm4gbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZVxuLy8gY29vcmRpbmF0ZXMgZm9yIGFuIGlucHV0dGVkIGNpdHkgbmFtZSBvciBzdGF0ZS5cblxuYXN5bmMgZnVuY3Rpb24gZmluZFdlYXRoZXJEYXRhKGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXRpdHVkZX0mbG9uPSR7bG9uZ2l0dWRlfSZhcHBpZD04Njk2YWM1NjgxMzYwZmI5NzUxNWI5OGMzZDk0Njg0YyZ1bml0cz1pbXBlcmlhbGAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRXZWF0aGVyRGF0YTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==