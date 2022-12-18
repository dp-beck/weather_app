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
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=8696ac5681360fb97515b98c3d94684c`, { mode: 'cors' });
    const data = await response.json();
    const coordinates = [data[0].lat, data[0].lon];
    return coordinates;
  } catch (error) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerText = 'Sorry, no location was found. Please try again.';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheVdlYXRoZXJEYXRhLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2dEO0FBQ0E7O0FBRWhEO0FBQ0EsNEJBQTRCLDREQUFlO0FBQzNDLDRCQUE0Qiw0REFBZTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCw0QkFBNEI7QUFDckY7QUFDQSw0Q0FBNEMsU0FBUyxJQUFJLGFBQWE7QUFDdEUsSUFBSTtBQUNKLDRDQUE0QyxTQUFTLElBQUksV0FBVztBQUNwRSxJQUFJO0FBQ0osNENBQTRDLFNBQVMsSUFBSSxVQUFVLElBQUksYUFBYTtBQUNwRjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFCbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0ZBQW9GLFNBQVMsR0FBRyxVQUFVLEdBQUcsWUFBWSw0Q0FBNEMsY0FBYztBQUNuTDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNmL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0ZBQXdGLFNBQVMsT0FBTyxVQUFVLDJEQUEyRCxjQUFjO0FBQzNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2Rpc3BsYXlXZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9maW5kQ29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZmluZFdlYXRoZXJEYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZnVuY3Rpb24gaXNvbGF0ZXMgYW5kIGRpc3BsYXlzIHRoZSBkZXNpcmVkIGluZm9ybWF0aW9uXG4vLyBmcm9tIHRoZSB3ZWF0aGVyRGF0YSBvYmplY3QgdGhhdCBpcyByZXR1cm5lZCBmcm9tIGZpbmRXZWF0aGVyRGF0YVxuaW1wb3J0IGZpbmRDb29yZGluYXRlcyBmcm9tICcuL2ZpbmRDb29yZGluYXRlcyc7XG5pbXBvcnQgZmluZFdlYXRoZXJEYXRhIGZyb20gJy4vZmluZFdlYXRoZXJEYXRhJztcblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheVdlYXRoZXJEYXRhKGNpdHlOYW1lLCBzdGF0ZUNvZGUsIGNvdW50cnlDb2RlKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgZmluZENvb3JkaW5hdGVzKGNpdHlOYW1lLCBzdGF0ZUNvZGUsIGNvdW50cnlDb2RlKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBmaW5kV2VhdGhlckRhdGEoY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdKTtcbiAgY29uc3QgdGVtcGVyYXR1cmVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlRGlzcGxheScpO1xuICBjb25zdCB3ZWF0aGVyRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyRGlzcGxheScpO1xuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVySWNvbicpO1xuICBjb25zdCBjdXJyZW50TG9jYXRpb25EaXNwbGF5ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudExvY2F0aW9uRGlzcGxheWVkJyk7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvck1lc3NhZ2UnKTtcbiAgdGVtcGVyYXR1cmVEaXNwbGF5LmlubmVyVGV4dCA9IHdlYXRoZXJEYXRhLm1haW4udGVtcCArICfihIknO1xuICB3ZWF0aGVyRGlzcGxheS5pbm5lclRleHQgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICBpZiAoc3RhdGVDb2RlID09PSAnJykge1xuICAgIGN1cnJlbnRMb2NhdGlvbkRpc3BsYXllZC5pbm5lclRleHQgPSBgJHtjaXR5TmFtZX0sICR7Y291bnRyeUNvZGV9IFdlYXRoZXJgO1xuICB9IGVsc2UgaWYgKGNvdW50cnlDb2RlID09PSAnJykge1xuICAgIGN1cnJlbnRMb2NhdGlvbkRpc3BsYXllZC5pbm5lclRleHQgPSBgJHtjaXR5TmFtZX0sICR7c3RhdGVDb2RlfSBXZWF0aGVyYDtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50TG9jYXRpb25EaXNwbGF5ZWQuaW5uZXJUZXh0ID0gYCR7Y2l0eU5hbWV9LCAke3N0YXRlQ29kZX0sICR7Y291bnRyeUNvZGV9IFdlYXRoZXJgO1xuICB9XG4gIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSAnJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVdlYXRoZXJEYXRhO1xuIiwiLy8gVGhpcyBmdW5jdGlvbiB1c2UgR2VvY29kaW5nIEFQSSB0byByZXR1cm4gbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZVxuLy8gY29vcmRpbmF0ZXMgZm9yIGFuIGlucHV0dGVkIGNpdHkgbmFtZSBvciBzdGF0ZS5cblxuYXN5bmMgZnVuY3Rpb24gZmluZENvb3JkaW5hdGVzKGNpdHlOYW1lLCBzdGF0ZUNvZGUsIGNvdW50cnlDb2RlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5TmFtZX0sJHtzdGF0ZUNvZGV9LCR7Y291bnRyeUNvZGV9JmFwcGlkPTg2OTZhYzU2ODEzNjBmYjk3NTE1Yjk4YzNkOTQ2ODRjYCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IFtkYXRhWzBdLmxhdCwgZGF0YVswXS5sb25dO1xuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JNZXNzYWdlJyk7XG4gICAgZXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9ICdTb3JyeSwgbm8gbG9jYXRpb24gd2FzIGZvdW5kLiBQbGVhc2UgdHJ5IGFnYWluLic7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmluZENvb3JkaW5hdGVzO1xuIiwiLy8gVGhpcyBmdW5jdGlvbiB1c2UgT3BlbldlYXRoZXIgQVBJIHRvIHJldHVybiBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlXG4vLyBjb29yZGluYXRlcyBmb3IgYW4gaW5wdXR0ZWQgY2l0eSBuYW1lIG9yIHN0YXRlLlxuXG5hc3luYyBmdW5jdGlvbiBmaW5kV2VhdGhlckRhdGEobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JmFwcGlkPTg2OTZhYzU2ODEzNjBmYjk3NTE1Yjk4YzNkOTQ2ODRjJnVuaXRzPWltcGVyaWFsYCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmluZFdlYXRoZXJEYXRhO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9