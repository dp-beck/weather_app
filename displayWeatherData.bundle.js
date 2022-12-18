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
  const weatherIcon = document.getElementById('weatherIcon');
  temperatureDisplay.innerText = weatherData.main.temp + '℉';
  weatherDisplay.innerText = weatherData.weather[0].description;
  weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheVdlYXRoZXJEYXRhLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2dEO0FBQ0E7O0FBRWhEO0FBQ0EsNEJBQTRCLDREQUFlO0FBQzNDLDRCQUE0Qiw0REFBZTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELDRCQUE0QjtBQUNyRixxRUFBcUUsU0FBUyxJQUFJLFVBQVUsSUFBSSxhQUFhO0FBQzdHOztBQUVBLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqQmxDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1GQUFtRixTQUFTLEdBQUcsVUFBVSxHQUFHLFlBQVksNENBQTRDLGNBQWM7QUFDbEw7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2QvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3RkFBd0YsU0FBUyxPQUFPLFVBQVUsMkRBQTJELGNBQWM7QUFDM0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZGlzcGxheVdlYXRoZXJEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2ZpbmRDb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9maW5kV2VhdGhlckRhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmdW5jdGlvbiBpc29sYXRlcyBhbmQgZGlzcGxheXMgdGhlIGRlc2lyZWQgaW5mb3JtYXRpb25cbi8vIGZyb20gdGhlIHdlYXRoZXJEYXRhIG9iamVjdCB0aGF0IGlzIHJldHVybmVkIGZyb20gZmluZFdlYXRoZXJEYXRhXG5pbXBvcnQgZmluZENvb3JkaW5hdGVzIGZyb20gJy4vZmluZENvb3JkaW5hdGVzJztcbmltcG9ydCBmaW5kV2VhdGhlckRhdGEgZnJvbSAnLi9maW5kV2VhdGhlckRhdGEnO1xuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlckRhdGEoY2l0eU5hbWUsIHN0YXRlQ29kZSwgY291bnRyeUNvZGUpIHtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBhd2FpdCBmaW5kQ29vcmRpbmF0ZXMoY2l0eU5hbWUsIHN0YXRlQ29kZSwgY291bnRyeUNvZGUpO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGZpbmRXZWF0aGVyRGF0YShjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0pO1xuICBjb25zdCB0ZW1wZXJhdHVyZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmVEaXNwbGF5Jyk7XG4gIGNvbnN0IHdlYXRoZXJEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJEaXNwbGF5Jyk7XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJJY29uJyk7XG4gIHRlbXBlcmF0dXJlRGlzcGxheS5pbm5lclRleHQgPSB3ZWF0aGVyRGF0YS5tYWluLnRlbXAgKyAn4oSJJztcbiAgd2VhdGhlckRpc3BsYXkuaW5uZXJUZXh0ID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgd2VhdGhlckljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRMb2NhdGlvbkRpc3BsYXllZCcpLmlubmVyVGV4dCA9IGAke2NpdHlOYW1lfSwgJHtzdGF0ZUNvZGV9LCAke2NvdW50cnlDb2RlfSBXZWF0aGVyYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVdlYXRoZXJEYXRhO1xuIiwiLy8gVGhpcyBmdW5jdGlvbiB1c2UgR2VvY29kaW5nIEFQSSB0byByZXR1cm4gbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZVxuLy8gY29vcmRpbmF0ZXMgZm9yIGFuIGlucHV0dGVkIGNpdHkgbmFtZSBvciBzdGF0ZS5cblxuYXN5bmMgZnVuY3Rpb24gZmluZENvb3JkaW5hdGVzKGNpdHlOYW1lLCBzdGF0ZUNvZGUsIGNvdW50cnlDb2RlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHlOYW1lfSwke3N0YXRlQ29kZX0sJHtjb3VudHJ5Q29kZX0mYXBwaWQ9ODY5NmFjNTY4MTM2MGZiOTc1MTViOThjM2Q5NDY4NGNgLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW2RhdGFbMF0ubGF0LCBkYXRhWzBdLmxvbl07XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5kQ29vcmRpbmF0ZXM7XG4iLCIvLyBUaGlzIGZ1bmN0aW9uIHVzZSBPcGVuV2VhdGhlciBBUEkgdG8gcmV0dXJuIGxhdGl0dWRlIGFuZCBsb25naXR1ZGVcbi8vIGNvb3JkaW5hdGVzIGZvciBhbiBpbnB1dHRlZCBjaXR5IG5hbWUgb3Igc3RhdGUuXG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmRXZWF0aGVyRGF0YShsYXRpdHVkZSwgbG9uZ2l0dWRlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mYXBwaWQ9ODY5NmFjNTY4MTM2MGZiOTc1MTViOThjM2Q5NDY4NGMmdW5pdHM9aW1wZXJpYWxgLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5kV2VhdGhlckRhdGE7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=