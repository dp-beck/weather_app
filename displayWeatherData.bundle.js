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
  console.log(weatherData);
  console.log(`The temperature is ${weatherData.main.temp} Fahrenheit.`);
  console.log(`The weather today is ${weatherData.weather[0].description}.`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheVdlYXRoZXJEYXRhLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2dEO0FBQ0E7O0FBRWhEO0FBQ0EsNEJBQTRCLDREQUFlO0FBQzNDLDRCQUE0Qiw0REFBZTtBQUMzQztBQUNBLG9DQUFvQyx1QkFBdUI7QUFDM0Qsc0NBQXNDLG1DQUFtQztBQUN6RTs7QUFFQSxpRUFBZSxrQkFBa0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDYmxDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1GQUFtRixTQUFTLEdBQUcsVUFBVSxHQUFHLFlBQVksNENBQTRDLGNBQWM7QUFDbEw7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2QvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3RkFBd0YsU0FBUyxPQUFPLFVBQVUsMkRBQTJELGNBQWM7QUFDM0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZGlzcGxheVdlYXRoZXJEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2ZpbmRDb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9maW5kV2VhdGhlckRhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmdW5jdGlvbiBpc29sYXRlcyBhbmQgZGlzcGxheXMgdGhlIGRlc2lyZWQgaW5mb3JtYXRpb25cbi8vIGZyb20gdGhlIHdlYXRoZXJEYXRhIG9iamVjdCB0aGF0IGlzIHJldHVybmVkIGZyb20gZmluZFdlYXRoZXJEYXRhXG5pbXBvcnQgZmluZENvb3JkaW5hdGVzIGZyb20gJy4vZmluZENvb3JkaW5hdGVzJztcbmltcG9ydCBmaW5kV2VhdGhlckRhdGEgZnJvbSAnLi9maW5kV2VhdGhlckRhdGEnO1xuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlckRhdGEoY2l0eU5hbWUsIHN0YXRlQ29kZSwgY291bnRyeUNvZGUpIHtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBhd2FpdCBmaW5kQ29vcmRpbmF0ZXMoY2l0eU5hbWUsIHN0YXRlQ29kZSwgY291bnRyeUNvZGUpO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGZpbmRXZWF0aGVyRGF0YShjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0pO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIGNvbnNvbGUubG9nKGBUaGUgdGVtcGVyYXR1cmUgaXMgJHt3ZWF0aGVyRGF0YS5tYWluLnRlbXB9IEZhaHJlbmhlaXQuYCk7XG4gIGNvbnNvbGUubG9nKGBUaGUgd2VhdGhlciB0b2RheSBpcyAke3dlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb259LmApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5V2VhdGhlckRhdGE7XG4iLCIvLyBUaGlzIGZ1bmN0aW9uIHVzZSBHZW9jb2RpbmcgQVBJIHRvIHJldHVybiBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlXG4vLyBjb29yZGluYXRlcyBmb3IgYW4gaW5wdXR0ZWQgY2l0eSBuYW1lIG9yIHN0YXRlLlxuXG5hc3luYyBmdW5jdGlvbiBmaW5kQ29vcmRpbmF0ZXMoY2l0eU5hbWUsIHN0YXRlQ29kZSwgY291bnRyeUNvZGUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eU5hbWV9LCR7c3RhdGVDb2RlfSwke2NvdW50cnlDb2RlfSZhcHBpZD04Njk2YWM1NjgxMzYwZmI5NzUxNWI5OGMzZDk0Njg0Y2AsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbZGF0YVswXS5sYXQsIGRhdGFbMF0ubG9uXTtcbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRDb29yZGluYXRlcztcbiIsIi8vIFRoaXMgZnVuY3Rpb24gdXNlIE9wZW5XZWF0aGVyIEFQSSB0byByZXR1cm4gbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZVxuLy8gY29vcmRpbmF0ZXMgZm9yIGFuIGlucHV0dGVkIGNpdHkgbmFtZSBvciBzdGF0ZS5cblxuYXN5bmMgZnVuY3Rpb24gZmluZFdlYXRoZXJEYXRhKGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXRpdHVkZX0mbG9uPSR7bG9uZ2l0dWRlfSZhcHBpZD04Njk2YWM1NjgxMzYwZmI5NzUxNWI5OGMzZDk0Njg0YyZ1bml0cz1pbXBlcmlhbGAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRXZWF0aGVyRGF0YTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==