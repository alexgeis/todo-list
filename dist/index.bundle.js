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
});
task2.addEventListener("click", function (event) {
	console.log(event);
	console.log(event.target.id);
	let id1 = event.target.id;
	let id2 = id1.console.log();
	// squaresGrid = document.getElementsByClassName("grid-squares");
	// squaresGrid[0].style.gridTemplateColumns = "1000px";
});

const mainContentEl = document.querySelector("#main-content");

//add to DOM function
function domCreate(arg1, arg2, arg3) {
	//arg 1 = name of HTML element
	const element = document.createElement(arg1);
	// arg 2 = class names to add
	for (let i = 0; i < arg2.length; i++) {
		const className = arg2[i];
		element.classList.add(className);
		element.dataset.index = i;
	}
	// arg 3 = object - attribute : value
	for (const attribute in arg3) {
		element.setAttribute(attribute, arg3[attribute]);
	}
	return mainContentEl.appendChild(element);
	// return element;
}
domCreate("div", ["task-card"], { "data-attribute-test": "heybuddy!" });
// console.log(
// 	domCreate("div", ["task-card"], { "data-attribute-test": "heybuddy!" })
// );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUMxQixjQUFjOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0M7QUFDdEU7QUFDQSxzQ0FBc0Msb0NBQW9DO0FBQzFFO0FBQ0E7QUFDQSxtQkFBbUIsOEJBQThCO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLnNjc3M/NjJhZiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFwiLi9jc3Mvc3R5bGUuc2Nzc1wiO1xuLy8gaW1wb3J0IHsgfSBmcm9tIFwiLi9qcy9cIjtcblxuY29uc3QgdGFzazEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stMVwiKTtcbmNvbnN0IHRhc2syID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLTJcIik7XG5cbnRhc2sxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0Y29uc29sZS5sb2coZXZlbnQpO1xufSk7XG50YXNrMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdGNvbnNvbGUubG9nKGV2ZW50KTtcblx0Y29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlkKTtcblx0bGV0IGlkMSA9IGV2ZW50LnRhcmdldC5pZDtcblx0bGV0IGlkMiA9IGlkMS5jb25zb2xlLmxvZygpO1xuXHQvLyBzcXVhcmVzR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJncmlkLXNxdWFyZXNcIik7XG5cdC8vIHNxdWFyZXNHcmlkWzBdLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIjEwMDBweFwiO1xufSk7XG5cbmNvbnN0IG1haW5Db250ZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGVudFwiKTtcblxuLy9hZGQgdG8gRE9NIGZ1bmN0aW9uXG5mdW5jdGlvbiBkb21DcmVhdGUoYXJnMSwgYXJnMiwgYXJnMykge1xuXHQvL2FyZyAxID0gbmFtZSBvZiBIVE1MIGVsZW1lbnRcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXJnMSk7XG5cdC8vIGFyZyAyID0gY2xhc3MgbmFtZXMgdG8gYWRkXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJnMi5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IGFyZzJbaV07XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0ZWxlbWVudC5kYXRhc2V0LmluZGV4ID0gaTtcblx0fVxuXHQvLyBhcmcgMyA9IG9iamVjdCAtIGF0dHJpYnV0ZSA6IHZhbHVlXG5cdGZvciAoY29uc3QgYXR0cmlidXRlIGluIGFyZzMpIHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGFyZzNbYXR0cmlidXRlXSk7XG5cdH1cblx0cmV0dXJuIG1haW5Db250ZW50RWwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdC8vIHJldHVybiBlbGVtZW50O1xufVxuZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stY2FyZFwiXSwgeyBcImRhdGEtYXR0cmlidXRlLXRlc3RcIjogXCJoZXlidWRkeSFcIiB9KTtcbi8vIGNvbnNvbGUubG9nKFxuLy8gXHRkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1jYXJkXCJdLCB7IFwiZGF0YS1hdHRyaWJ1dGUtdGVzdFwiOiBcImhleWJ1ZGR5IVwiIH0pXG4vLyApO1xuLy8gdGFza0NhcmRzTm9kZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1jYXJkXCIpO1xuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQ2FyZHNOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xuLy8gXHR0YXNrQ2FyZHNOb2RlTGlzdFtpXS5zdHlsZS5ncmlkQ29sdW1uID0gXCIxLzNcIjtcbi8vIH1cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuLy8gXHRjb25zb2xlLmxvZyhldmVudCk7XG4vLyB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==