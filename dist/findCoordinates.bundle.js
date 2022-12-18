"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["findCoordinates"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/findCoordinates.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZENvb3JkaW5hdGVzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0ZBQW9GLFNBQVMsR0FBRyxVQUFVLEdBQUcsWUFBWSw0Q0FBNEMsY0FBYztBQUNuTDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZmluZENvb3JkaW5hdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZnVuY3Rpb24gdXNlIEdlb2NvZGluZyBBUEkgdG8gcmV0dXJuIGxhdGl0dWRlIGFuZCBsb25naXR1ZGVcbi8vIGNvb3JkaW5hdGVzIGZvciBhbiBpbnB1dHRlZCBjaXR5IG5hbWUgb3Igc3RhdGUuXG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmRDb29yZGluYXRlcyhjaXR5TmFtZSwgc3RhdGVDb2RlLCBjb3VudHJ5Q29kZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eU5hbWV9LCR7c3RhdGVDb2RlfSwke2NvdW50cnlDb2RlfSZhcHBpZD04Njk2YWM1NjgxMzYwZmI5NzUxNWI5OGMzZDk0Njg0Y2AsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbZGF0YVswXS5sYXQsIGRhdGFbMF0ubG9uXTtcbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yTWVzc2FnZScpO1xuICAgIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSAnU29ycnksIG5vIGxvY2F0aW9uIHdhcyBmb3VuZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRDb29yZGluYXRlcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==