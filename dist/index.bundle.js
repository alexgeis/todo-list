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
//arg 1 = name of HTML element
// arg 2 = class names to add
// arg 3 = object - attributes to add -> attribute : value
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

// taskCardsNodeList = document.getElementsByClassName("task-card");
// for (let i = 0; i < taskCardsNodeList.length; i++) {
// 	taskCardsNodeList[i].style.gridColumn = "1/3";
// }

// document.addEventListener("click", function (event) {
// 	console.log(event);
// });

const date = new Date();
const createTask = ({ title, description, dueDate, priority, notes }) => ({
	title,
	description,
	dueDate,
	priority,
	notes,
	printTask() {
		return `${this.title}: ${this.description}`;
	},
});

const taskDemo1 = createTask({
	title: "Walk the Dog",
	description: "take the doggo on a lil stroll",
	dueDate: date,
	priority: "high",
	notes: "avoid 9th and Elm - aggressive dog",
});
// console.log(taskDemo1);

const createProject = ({ title, description }) => ({
	title,
	description,
	tasks: [],
	printProject() {
		return `Project ${this.title}: ${this.description}`;
	},
	addTasktoProject(task) {
		this.tasks.push(task);
	},
});

const projectDemo1 = createProject({
	title: "Personal",
	description: "pleasure, not business",
});
projectDemo1.addTasktoProject(taskDemo1);
console.log(projectDemo1.tasks);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUMxQixjQUFjOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0M7O0FBRXRFO0FBQ0EsbUJBQW1CLDhCQUE4QjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0Esc0JBQXNCLDhDQUE4QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFdBQVcsSUFBSSxpQkFBaUI7QUFDNUMsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLHlCQUF5QixvQkFBb0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVyxJQUFJLGlCQUFpQjtBQUNwRCxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5zY3NzPzYyYWYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBcIi4vY3NzL3N0eWxlLnNjc3NcIjtcbi8vIGltcG9ydCB7IH0gZnJvbSBcIi4vanMvXCI7XG5cbmNvbnN0IHRhc2sxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLTFcIik7XG5jb25zdCB0YXNrMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay0yXCIpO1xuXG50YXNrMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdGNvbnNvbGUubG9nKGV2ZW50KTtcbn0pO1xudGFzazIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRjb25zb2xlLmxvZyhldmVudCk7XG5cdGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5pZCk7XG5cdGxldCBpZDEgPSBldmVudC50YXJnZXQuaWQ7XG5cdGxldCBpZDIgPSBpZDEuY29uc29sZS5sb2coKTtcblx0Ly8gc3F1YXJlc0dyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ3JpZC1zcXVhcmVzXCIpO1xuXHQvLyBzcXVhcmVzR3JpZFswXS5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCIxMDAwcHhcIjtcbn0pO1xuXG5jb25zdCBtYWluQ29udGVudEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnRcIik7XG5cbi8vYWRkIHRvIERPTSBmdW5jdGlvblxuLy9hcmcgMSA9IG5hbWUgb2YgSFRNTCBlbGVtZW50XG4vLyBhcmcgMiA9IGNsYXNzIG5hbWVzIHRvIGFkZFxuLy8gYXJnIDMgPSBvYmplY3QgLSBhdHRyaWJ1dGVzIHRvIGFkZCAtPiBhdHRyaWJ1dGUgOiB2YWx1ZVxuZnVuY3Rpb24gZG9tQ3JlYXRlKGFyZzEsIGFyZzIsIGFyZzMpIHtcblx0Ly9hcmcgMSA9IG5hbWUgb2YgSFRNTCBlbGVtZW50XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZzEpO1xuXHQvLyBhcmcgMiA9IGNsYXNzIG5hbWVzIHRvIGFkZFxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyZzIubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBjbGFzc05hbWUgPSBhcmcyW2ldO1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRcdGVsZW1lbnQuZGF0YXNldC5pbmRleCA9IGk7XG5cdH1cblx0Ly8gYXJnIDMgPSBvYmplY3QgLSBhdHRyaWJ1dGUgOiB2YWx1ZVxuXHRmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhcmczKSB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhcmczW2F0dHJpYnV0ZV0pO1xuXHR9XG5cdHJldHVybiBtYWluQ29udGVudEVsLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHQvLyByZXR1cm4gZWxlbWVudDtcbn1cbmRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWNhcmRcIl0sIHsgXCJkYXRhLWF0dHJpYnV0ZS10ZXN0XCI6IFwiaGV5YnVkZHkhXCIgfSk7XG5cbi8vIHRhc2tDYXJkc05vZGVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2stY2FyZFwiKTtcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0NhcmRzTm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcbi8vIFx0dGFza0NhcmRzTm9kZUxpc3RbaV0uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMS8zXCI7XG4vLyB9XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vIFx0Y29uc29sZS5sb2coZXZlbnQpO1xuLy8gfSk7XG5cbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgY3JlYXRlVGFzayA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzIH0pID0+ICh7XG5cdHRpdGxlLFxuXHRkZXNjcmlwdGlvbixcblx0ZHVlRGF0ZSxcblx0cHJpb3JpdHksXG5cdG5vdGVzLFxuXHRwcmludFRhc2soKSB7XG5cdFx0cmV0dXJuIGAke3RoaXMudGl0bGV9OiAke3RoaXMuZGVzY3JpcHRpb259YDtcblx0fSxcbn0pO1xuXG5jb25zdCB0YXNrRGVtbzEgPSBjcmVhdGVUYXNrKHtcblx0dGl0bGU6IFwiV2FsayB0aGUgRG9nXCIsXG5cdGRlc2NyaXB0aW9uOiBcInRha2UgdGhlIGRvZ2dvIG9uIGEgbGlsIHN0cm9sbFwiLFxuXHRkdWVEYXRlOiBkYXRlLFxuXHRwcmlvcml0eTogXCJoaWdoXCIsXG5cdG5vdGVzOiBcImF2b2lkIDl0aCBhbmQgRWxtIC0gYWdncmVzc2l2ZSBkb2dcIixcbn0pO1xuLy8gY29uc29sZS5sb2codGFza0RlbW8xKTtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiAoe1xuXHR0aXRsZSxcblx0ZGVzY3JpcHRpb24sXG5cdHRhc2tzOiBbXSxcblx0cHJpbnRQcm9qZWN0KCkge1xuXHRcdHJldHVybiBgUHJvamVjdCAke3RoaXMudGl0bGV9OiAke3RoaXMuZGVzY3JpcHRpb259YDtcblx0fSxcblx0YWRkVGFza3RvUHJvamVjdCh0YXNrKSB7XG5cdFx0dGhpcy50YXNrcy5wdXNoKHRhc2spO1xuXHR9LFxufSk7XG5cbmNvbnN0IHByb2plY3REZW1vMSA9IGNyZWF0ZVByb2plY3Qoe1xuXHR0aXRsZTogXCJQZXJzb25hbFwiLFxuXHRkZXNjcmlwdGlvbjogXCJwbGVhc3VyZSwgbm90IGJ1c2luZXNzXCIsXG59KTtcbnByb2plY3REZW1vMS5hZGRUYXNrdG9Qcm9qZWN0KHRhc2tEZW1vMSk7XG5jb25zb2xlLmxvZyhwcm9qZWN0RGVtbzEudGFza3MpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9