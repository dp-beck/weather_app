"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["currentTime"],{

/***/ "./src/currentTime.js":
/*!****************************!*\
  !*** ./src/currentTime.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// This function displays the current time.
// timezoneOffset from API is in seconds.

function currentTime(timezoneOffset) {
  const date = new Date();
  const timezoneOffsetHours = timezoneOffset / 3600;
  let hh = date.getUTCHours() + timezoneOffsetHours;
  let mm = date.getUTCMinutes();
  let ss = date.getUTCSeconds();
  let session = 'AM';

  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh -= 12;
    session = 'PM';
  }
  hh = (hh < 10) ? `0${hh}` : hh;
  mm = (mm < 10) ? `0${mm}` : mm;
  ss = (ss < 10) ? `0${ss}` : ss;

  const time = hh + ':' + mm + ":" + ss + " " + session;
  document.getElementById('clock').innerText = time;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentTime);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/currentTime.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudFRpbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEdBQUc7QUFDMUIsdUJBQXVCLEdBQUc7QUFDMUIsdUJBQXVCLEdBQUc7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvY3VycmVudFRpbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmdW5jdGlvbiBkaXNwbGF5cyB0aGUgY3VycmVudCB0aW1lLlxuLy8gdGltZXpvbmVPZmZzZXQgZnJvbSBBUEkgaXMgaW4gc2Vjb25kcy5cblxuZnVuY3Rpb24gY3VycmVudFRpbWUodGltZXpvbmVPZmZzZXQpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRpbWV6b25lT2Zmc2V0SG91cnMgPSB0aW1lem9uZU9mZnNldCAvIDM2MDA7XG4gIGxldCBoaCA9IGRhdGUuZ2V0VVRDSG91cnMoKSArIHRpbWV6b25lT2Zmc2V0SG91cnM7XG4gIGxldCBtbSA9IGRhdGUuZ2V0VVRDTWludXRlcygpO1xuICBsZXQgc3MgPSBkYXRlLmdldFVUQ1NlY29uZHMoKTtcbiAgbGV0IHNlc3Npb24gPSAnQU0nO1xuXG4gIGlmIChoaCA9PT0gMCkge1xuICAgIGhoID0gMTI7XG4gIH1cbiAgaWYgKGhoID4gMTIpIHtcbiAgICBoaCAtPSAxMjtcbiAgICBzZXNzaW9uID0gJ1BNJztcbiAgfVxuICBoaCA9IChoaCA8IDEwKSA/IGAwJHtoaH1gIDogaGg7XG4gIG1tID0gKG1tIDwgMTApID8gYDAke21tfWAgOiBtbTtcbiAgc3MgPSAoc3MgPCAxMCkgPyBgMCR7c3N9YCA6IHNzO1xuXG4gIGNvbnN0IHRpbWUgPSBoaCArICc6JyArIG1tICsgXCI6XCIgKyBzcyArIFwiIFwiICsgc2Vzc2lvbjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb2NrJykuaW5uZXJUZXh0ID0gdGltZTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjdXJyZW50VGltZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==