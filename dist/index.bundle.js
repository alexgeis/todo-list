"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");

// import { } from "./js/";

const task1 = document.querySelector("#task-1");
const task2 = document.querySelector("#task-2");

task1.addEventListener("click", function (event) {
	console.log(event);
	squaresGrid = document.getElementsByClassName("grid-squares");
	squaresGrid[0].style.gridTemplateColumns = "1000px";
});
task2.addEventListener("click", function (event) {
	console.log(event);
	console.log(event.target.id);
	let id1 = event.target.id;
	let id2 = id1.console.log();
	squaresGrid = document.getElementsByClassName("grid-squares");
	squaresGrid[0].style.gridTemplateColumns = "1000px";
});

// taskCardsNodeList = document.getElementsByClassName("task-card");
// for (let i = 0; i < taskCardsNodeList.length; i++) {
// 	taskCardsNodeList[i].style.gridColumn = "1/3";
// }

// document.addEventListener("click", function (event) {
// 	console.log(event);
// });


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUMxQixjQUFjOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsbUJBQW1CLDhCQUE4QjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5zY3NzPzYyYWYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBcIi4vY3NzL3N0eWxlLnNjc3NcIjtcbi8vIGltcG9ydCB7IH0gZnJvbSBcIi4vanMvXCI7XG5cbmNvbnN0IHRhc2sxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLTFcIik7XG5jb25zdCB0YXNrMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay0yXCIpO1xuXG50YXNrMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdGNvbnNvbGUubG9nKGV2ZW50KTtcblx0c3F1YXJlc0dyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ3JpZC1zcXVhcmVzXCIpO1xuXHRzcXVhcmVzR3JpZFswXS5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCIxMDAwcHhcIjtcbn0pO1xudGFzazIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRjb25zb2xlLmxvZyhldmVudCk7XG5cdGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5pZCk7XG5cdGxldCBpZDEgPSBldmVudC50YXJnZXQuaWQ7XG5cdGxldCBpZDIgPSBpZDEuY29uc29sZS5sb2coKTtcblx0c3F1YXJlc0dyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ3JpZC1zcXVhcmVzXCIpO1xuXHRzcXVhcmVzR3JpZFswXS5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCIxMDAwcHhcIjtcbn0pO1xuXG4vLyB0YXNrQ2FyZHNOb2RlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrLWNhcmRcIik7XG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tDYXJkc05vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4vLyBcdHRhc2tDYXJkc05vZGVMaXN0W2ldLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjEvM1wiO1xuLy8gfVxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyBcdGNvbnNvbGUubG9nKGV2ZW50KTtcbi8vIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9