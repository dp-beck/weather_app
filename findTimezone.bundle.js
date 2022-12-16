"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["findTimezone"],{

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

/***/ "./src/findTimezone.js":
/*!*****************************!*\
  !*** ./src/findTimezone.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _findCoordinates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findCoordinates */ "./src/findCoordinates.js");
/* harmony import */ var _findWeatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findWeatherData */ "./src/findWeatherData.js");
// This function isolates and returns the timezone
// from the weatherData object that is returned from findWeatherData



async function findTimezone(cityName, stateCode, countryCode) {
  const coordinates = await (0,_findCoordinates__WEBPACK_IMPORTED_MODULE_0__["default"])(cityName, stateCode, countryCode);
  const weatherData = await (0,_findWeatherData__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates[0], coordinates[1]);
  return weatherData.timezone;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findTimezone);


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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/findTimezone.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZFRpbWV6b25lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUZBQW1GLFNBQVMsR0FBRyxVQUFVLEdBQUcsWUFBWSw0Q0FBNEMsY0FBYztBQUNsTDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkL0I7QUFDQTtBQUNnRDtBQUNBOztBQUVoRDtBQUNBLDRCQUE0Qiw0REFBZTtBQUMzQyw0QkFBNEIsNERBQWU7QUFDM0M7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1g1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3RkFBd0YsU0FBUyxPQUFPLFVBQVUsMkRBQTJELGNBQWM7QUFDM0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZmluZENvb3JkaW5hdGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2ZpbmRUaW1lem9uZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9maW5kV2VhdGhlckRhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmdW5jdGlvbiB1c2UgR2VvY29kaW5nIEFQSSB0byByZXR1cm4gbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZVxuLy8gY29vcmRpbmF0ZXMgZm9yIGFuIGlucHV0dGVkIGNpdHkgbmFtZSBvciBzdGF0ZS5cblxuYXN5bmMgZnVuY3Rpb24gZmluZENvb3JkaW5hdGVzKGNpdHlOYW1lLCBzdGF0ZUNvZGUsIGNvdW50cnlDb2RlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHlOYW1lfSwke3N0YXRlQ29kZX0sJHtjb3VudHJ5Q29kZX0mYXBwaWQ9ODY5NmFjNTY4MTM2MGZiOTc1MTViOThjM2Q5NDY4NGNgLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW2RhdGFbMF0ubGF0LCBkYXRhWzBdLmxvbl07XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5kQ29vcmRpbmF0ZXM7XG4iLCIvLyBUaGlzIGZ1bmN0aW9uIGlzb2xhdGVzIGFuZCByZXR1cm5zIHRoZSB0aW1lem9uZVxuLy8gZnJvbSB0aGUgd2VhdGhlckRhdGEgb2JqZWN0IHRoYXQgaXMgcmV0dXJuZWQgZnJvbSBmaW5kV2VhdGhlckRhdGFcbmltcG9ydCBmaW5kQ29vcmRpbmF0ZXMgZnJvbSAnLi9maW5kQ29vcmRpbmF0ZXMnO1xuaW1wb3J0IGZpbmRXZWF0aGVyRGF0YSBmcm9tICcuL2ZpbmRXZWF0aGVyRGF0YSc7XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmRUaW1lem9uZShjaXR5TmFtZSwgc3RhdGVDb2RlLCBjb3VudHJ5Q29kZSkge1xuICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGZpbmRDb29yZGluYXRlcyhjaXR5TmFtZSwgc3RhdGVDb2RlLCBjb3VudHJ5Q29kZSk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZmluZFdlYXRoZXJEYXRhKGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSk7XG4gIHJldHVybiB3ZWF0aGVyRGF0YS50aW1lem9uZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmluZFRpbWV6b25lO1xuIiwiLy8gVGhpcyBmdW5jdGlvbiB1c2UgT3BlbldlYXRoZXIgQVBJIHRvIHJldHVybiBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlXG4vLyBjb29yZGluYXRlcyBmb3IgYW4gaW5wdXR0ZWQgY2l0eSBuYW1lIG9yIHN0YXRlLlxuXG5hc3luYyBmdW5jdGlvbiBmaW5kV2VhdGhlckRhdGEobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JmFwcGlkPTg2OTZhYzU2ODEzNjBmYjk3NTE1Yjk4YzNkOTQ2ODRjJnVuaXRzPWltcGVyaWFsYCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmluZFdlYXRoZXJEYXRhO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9