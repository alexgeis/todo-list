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
/* harmony import */ var _assets_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/trash-can-outline.png */ "./src/assets/trash-can-outline.png");
/* harmony import */ var _js_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/create */ "./src/js/create.js");
/* harmony import */ var _js_taskForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/taskForm */ "./src/js/taskForm.js");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");




// import { } from "./js/";

//DEFAULTS
const DEFAULT_THEME = localStorage.getItem("theme") || "light";
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
// const currentlyRead = savedBooks.filter((book) => book.readStatus === true);
// const DEFAULT_BOOKS_READ = currentlyRead.length;
// const DEFAULT_BOOKS_TOTAL = savedBooks.length;

//state variables
let currentTasks = savedTasks;
let currentTheme = DEFAULT_THEME;
// let currentBooksReadCount = DEFAULT_BOOKS_READ;
// let currentBooksTotalCount = DEFAULT_BOOKS_TOTAL;
//state variable updates
function setCurrentTasks(newTasks) {
	currentTasks = newTasks;
}
// function setBookReadTotals() {
// 	currentBooksReadCount = DEFAULT_BOOKS_READ;
// 	currentBooksTotalCount = DEFAULT_BOOKS_TOTAL;
// }
const taskContainer = document.querySelector("#main-content");

// DOM FUNCTION

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
		// //set data attribute "data-index" to the current index
		// element.dataset.index = i;
	}
	// arg 3 = object - attribute : value
	for (const attribute in arg3) {
		element.setAttribute(attribute, arg3[attribute]);
	}
	// return taskContainer.appendChild(element);
	// return element;
}
domCreate("div", ["task-card"], { "data-attribute-test": "heybuddy!" });

const taskDemo1 = (0,_js_create__WEBPACK_IMPORTED_MODULE_1__.createTask)({
	title: "Walk the Dog",
	description: "take the doggo on a lil stroll",
	dueDate: date,
	priority: "high",
	notes: "avoid 9th and Elm - aggressive dog",
});
// console.log(taskDemo1);

const projectDemo1 = (0,_js_create__WEBPACK_IMPORTED_MODULE_1__.createProject)({
	title: "Personal",
	description: "pleasure, not business",
});
projectDemo1.addTasktoProject(taskDemo1);
console.log(projectDemo1.tasks);

//TASK FORM

const addTaskHeaderBtn = document.querySelector("#addTask");
addTaskHeaderBtn.addEventListener("click", _js_taskForm__WEBPACK_IMPORTED_MODULE_2__.renderTaskForm);

const closeFormBtn = document.querySelector("#close-form");
closeFormBtn.addEventListener("click", _js_taskForm__WEBPACK_IMPORTED_MODULE_2__.closeForm);

const taskTitleEl = document.querySelector("#t-title");
const taskDescEl = document.querySelector("#t-desc");
const taskDateEl = document.querySelector("#t-date");
const taskPriorityEl = document.querySelector("#t-priority");
const taskNotesEl = document.querySelector("#t-notes");
const projectTaskAddEl = document.querySelector("#project-task-add");

const clearFormBtn = document.querySelector(".clear");
clearFormBtn.addEventListener("click", clearForm);
function clearForm() {
	taskTitleEl.value = "";
	taskDescEl.value = "";
	taskDateEl.value = "";
	taskPriorityEl.value = "";
	taskNotesEl.value = "";
	projectTaskAddEl.options.selectedIndex = 0;
}

// let currentTasks = [
// 	{
// 		title: "Walk the Dog",
// 		description: "take the doggo on a lil stroll",
// 		dueDate: "2022-07-12T13:27:19.568Z",
// 		priority: "high",
// 		notes: "avoid 9th and Elm - aggressive dog",
// 	},
// ];
const addTaskFormBtn = document.querySelector(".add-task");
addTaskFormBtn.addEventListener("click", addTaskSubmit);
function addTaskSubmit() {
	const newTask = (0,_js_create__WEBPACK_IMPORTED_MODULE_1__.createTask)({
		title: taskTitleEl.value,
		description: taskDescEl.value,
		dueDate: taskDateEl.value,
		priority: taskPriorityEl.value,
		notes: taskNotesEl.value,
	});

	currentTasks.push(newTask);
	// setCurrentTasks(currentTasks);
	console.log(currentTasks);
	localStorage.setItem("tasks", JSON.stringify(currentTasks));
	(0,_js_taskForm__WEBPACK_IMPORTED_MODULE_2__.closeForm)();
	// renderTasks();
}

function renderTasks() {
	//clear current tasks
	taskContainer.innerhtml = "";
	for (let i = 0; i < currentTasks.length; i++) {
		const task = currentTasks[i];

		//task card containing div
		const taskCard = document.createElement("div");
		taskCard.classList.add("task-card");
		taskCard.setAttribute("id", `task-${i}`);
		//maybe use data attributes?

		//inner task card div items
		//TITLE
		const taskTitle = document.createElement("div");
		taskTitle.classList.add("task-title");
		taskTitle.textContent = "Title";
		//DESCRIPTION
		const taskDesc = document.createElement("div");
		taskDesc.classList.add("task-description");
		taskDesc.textContent = "Description";
		//DUE DATE
		const taskDate = document.createElement("div");
		taskDate.classList.add("task-date");
		taskDate.textContent = "Due Date";
		//PRIORITY
		const taskPriority = document.createElement("div");
		taskPriority.classList.add("task-priority");
		taskPriority.textContent = "Priority";
		//NOTES
		const taskNotes = document.createElement("div");
		taskNotes.classList.add("task-notes");
		taskNotes.textContent = "Notes";
		//DELETE ICON
		const taskDeleteIcon = document.createElement("img");
		taskDeleteIcon.classList.add("task-delete");
		taskDeleteIcon.setAttribute("src", "./assets/trash-can-outline.png");
		taskDeleteIcon.setAttribute("alt", "trash can delete icon");
	}
}

// window.onload = () => {
// 	// setCurrentTheme(DEFAULT_THEME);
// 	setCurrentTasks(currentTasks);
// 	// renderTasks();
// };

//TASK GRID RESPONSIVENESS
// const task1 = document.querySelector("#task-1");
// const task2 = document.querySelector("#task-2");

// task1.addEventListener("click", function (event) {
// 	console.log(event);
// });
// task2.addEventListener("click", function (event) {
// 	console.log(event);
// 	console.log(event.target.id);
// 	let id1 = event.target.id;
// 	let id2 = id1.console.log();
// 	// squaresGrid = document.getElementsByClassName("grid-squares");
// 	// squaresGrid[0].style.gridTemplateColumns = "1000px";
// });

// taskCardsNodeList = document.getElementsByClassName("task-card");
// for (let i = 0; i < taskCardsNodeList.length; i++) {
// 	taskCardsNodeList[i].style.gridColumn = "1/3";
// }


/***/ }),

/***/ "./src/js/create.js":
/*!**************************!*\
  !*** ./src/js/create.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
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




/***/ }),

/***/ "./src/js/taskForm.js":
/*!****************************!*\
  !*** ./src/js/taskForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "renderTaskForm": () => (/* binding */ renderTaskForm)
/* harmony export */ });
const addTaskFormEl = document.querySelector(".add_task_section");
function renderTaskForm() {
	addTaskFormEl.setAttribute("style", "display: block;");
}

function closeForm() {
	addTaskFormEl.setAttribute("style", "display: none;");
}




/***/ }),

/***/ "./src/assets/trash-can-outline.png":
/*!******************************************!*\
  !*** ./src/assets/trash-can-outline.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "034d2425716614c3f130.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3RDtBQUNBO0FBQ0U7QUFDaEM7QUFDMUIsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQzs7QUFFdEUsa0JBQWtCLHNEQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEscUJBQXFCLHlEQUFhO0FBQ2xDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJDQUEyQyx3REFBYzs7QUFFekQ7QUFDQSx1Q0FBdUMsbURBQVM7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzREFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsdURBQVM7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEVBQUU7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxtQkFBbUIsOEJBQThCO0FBQ2pEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TEE7QUFDQSxzQkFBc0IsOENBQThDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksV0FBVyxJQUFJLGlCQUFpQjtBQUM1QyxFQUFFO0FBQ0YsQ0FBQzs7QUFFRCx5QkFBeUIsb0JBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVcsSUFBSSxpQkFBaUI7QUFDcEQsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFb0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QnJDO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5zY3NzPzYyYWYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3Rhc2tGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2ssIGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9qcy9jcmVhdGVcIjtcbmltcG9ydCB7IHJlbmRlclRhc2tGb3JtLCBjbG9zZUZvcm0gfSBmcm9tIFwiLi9qcy90YXNrRm9ybVwiO1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuc2Nzc1wiO1xuLy8gaW1wb3J0IHsgfSBmcm9tIFwiLi9qcy9cIjtcblxuLy9ERUZBVUxUU1xuY29uc3QgREVGQVVMVF9USEVNRSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgXCJsaWdodFwiO1xuY29uc3Qgc2F2ZWRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XG4vLyBjb25zdCBjdXJyZW50bHlSZWFkID0gc2F2ZWRCb29rcy5maWx0ZXIoKGJvb2spID0+IGJvb2sucmVhZFN0YXR1cyA9PT0gdHJ1ZSk7XG4vLyBjb25zdCBERUZBVUxUX0JPT0tTX1JFQUQgPSBjdXJyZW50bHlSZWFkLmxlbmd0aDtcbi8vIGNvbnN0IERFRkFVTFRfQk9PS1NfVE9UQUwgPSBzYXZlZEJvb2tzLmxlbmd0aDtcblxuLy9zdGF0ZSB2YXJpYWJsZXNcbmxldCBjdXJyZW50VGFza3MgPSBzYXZlZFRhc2tzO1xubGV0IGN1cnJlbnRUaGVtZSA9IERFRkFVTFRfVEhFTUU7XG4vLyBsZXQgY3VycmVudEJvb2tzUmVhZENvdW50ID0gREVGQVVMVF9CT09LU19SRUFEO1xuLy8gbGV0IGN1cnJlbnRCb29rc1RvdGFsQ291bnQgPSBERUZBVUxUX0JPT0tTX1RPVEFMO1xuLy9zdGF0ZSB2YXJpYWJsZSB1cGRhdGVzXG5mdW5jdGlvbiBzZXRDdXJyZW50VGFza3MobmV3VGFza3MpIHtcblx0Y3VycmVudFRhc2tzID0gbmV3VGFza3M7XG59XG4vLyBmdW5jdGlvbiBzZXRCb29rUmVhZFRvdGFscygpIHtcbi8vIFx0Y3VycmVudEJvb2tzUmVhZENvdW50ID0gREVGQVVMVF9CT09LU19SRUFEO1xuLy8gXHRjdXJyZW50Qm9va3NUb3RhbENvdW50ID0gREVGQVVMVF9CT09LU19UT1RBTDtcbi8vIH1cbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGVudFwiKTtcblxuLy8gRE9NIEZVTkNUSU9OXG5cbi8vYXJnIDEgPSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuLy8gYXJnIDIgPSBjbGFzcyBuYW1lcyB0byBhZGRcbi8vIGFyZyAzID0gb2JqZWN0IC0gYXR0cmlidXRlcyB0byBhZGQgLT4gYXR0cmlidXRlIDogdmFsdWVcbmZ1bmN0aW9uIGRvbUNyZWF0ZShhcmcxLCBhcmcyLCBhcmczKSB7XG5cdC8vYXJnIDEgPSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmcxKTtcblx0Ly8gYXJnIDIgPSBjbGFzcyBuYW1lcyB0byBhZGRcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmcyLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gYXJnMltpXTtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0XHQvLyAvL3NldCBkYXRhIGF0dHJpYnV0ZSBcImRhdGEtaW5kZXhcIiB0byB0aGUgY3VycmVudCBpbmRleFxuXHRcdC8vIGVsZW1lbnQuZGF0YXNldC5pbmRleCA9IGk7XG5cdH1cblx0Ly8gYXJnIDMgPSBvYmplY3QgLSBhdHRyaWJ1dGUgOiB2YWx1ZVxuXHRmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhcmczKSB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhcmczW2F0dHJpYnV0ZV0pO1xuXHR9XG5cdC8vIHJldHVybiB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHQvLyByZXR1cm4gZWxlbWVudDtcbn1cbmRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWNhcmRcIl0sIHsgXCJkYXRhLWF0dHJpYnV0ZS10ZXN0XCI6IFwiaGV5YnVkZHkhXCIgfSk7XG5cbmNvbnN0IHRhc2tEZW1vMSA9IGNyZWF0ZVRhc2soe1xuXHR0aXRsZTogXCJXYWxrIHRoZSBEb2dcIixcblx0ZGVzY3JpcHRpb246IFwidGFrZSB0aGUgZG9nZ28gb24gYSBsaWwgc3Ryb2xsXCIsXG5cdGR1ZURhdGU6IGRhdGUsXG5cdHByaW9yaXR5OiBcImhpZ2hcIixcblx0bm90ZXM6IFwiYXZvaWQgOXRoIGFuZCBFbG0gLSBhZ2dyZXNzaXZlIGRvZ1wiLFxufSk7XG4vLyBjb25zb2xlLmxvZyh0YXNrRGVtbzEpO1xuXG5jb25zdCBwcm9qZWN0RGVtbzEgPSBjcmVhdGVQcm9qZWN0KHtcblx0dGl0bGU6IFwiUGVyc29uYWxcIixcblx0ZGVzY3JpcHRpb246IFwicGxlYXN1cmUsIG5vdCBidXNpbmVzc1wiLFxufSk7XG5wcm9qZWN0RGVtbzEuYWRkVGFza3RvUHJvamVjdCh0YXNrRGVtbzEpO1xuY29uc29sZS5sb2cocHJvamVjdERlbW8xLnRhc2tzKTtcblxuLy9UQVNLIEZPUk1cblxuY29uc3QgYWRkVGFza0hlYWRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkVGFza1wiKTtcbmFkZFRhc2tIZWFkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRhc2tGb3JtKTtcblxuY29uc3QgY2xvc2VGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1mb3JtXCIpO1xuY2xvc2VGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm0pO1xuXG5jb25zdCB0YXNrVGl0bGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC10aXRsZVwiKTtcbmNvbnN0IHRhc2tEZXNjRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGVzY1wiKTtcbmNvbnN0IHRhc2tEYXRlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGF0ZVwiKTtcbmNvbnN0IHRhc2tQcmlvcml0eUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpO1xuY29uc3QgdGFza05vdGVzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Qtbm90ZXNcIik7XG5jb25zdCBwcm9qZWN0VGFza0FkZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRhc2stYWRkXCIpO1xuXG5jb25zdCBjbGVhckZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsZWFyXCIpO1xuY2xlYXJGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckZvcm0pO1xuZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuXHR0YXNrVGl0bGVFbC52YWx1ZSA9IFwiXCI7XG5cdHRhc2tEZXNjRWwudmFsdWUgPSBcIlwiO1xuXHR0YXNrRGF0ZUVsLnZhbHVlID0gXCJcIjtcblx0dGFza1ByaW9yaXR5RWwudmFsdWUgPSBcIlwiO1xuXHR0YXNrTm90ZXNFbC52YWx1ZSA9IFwiXCI7XG5cdHByb2plY3RUYXNrQWRkRWwub3B0aW9ucy5zZWxlY3RlZEluZGV4ID0gMDtcbn1cblxuLy8gbGV0IGN1cnJlbnRUYXNrcyA9IFtcbi8vIFx0e1xuLy8gXHRcdHRpdGxlOiBcIldhbGsgdGhlIERvZ1wiLFxuLy8gXHRcdGRlc2NyaXB0aW9uOiBcInRha2UgdGhlIGRvZ2dvIG9uIGEgbGlsIHN0cm9sbFwiLFxuLy8gXHRcdGR1ZURhdGU6IFwiMjAyMi0wNy0xMlQxMzoyNzoxOS41NjhaXCIsXG4vLyBcdFx0cHJpb3JpdHk6IFwiaGlnaFwiLFxuLy8gXHRcdG5vdGVzOiBcImF2b2lkIDl0aCBhbmQgRWxtIC0gYWdncmVzc2l2ZSBkb2dcIixcbi8vIFx0fSxcbi8vIF07XG5jb25zdCBhZGRUYXNrRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XG5hZGRUYXNrRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza1N1Ym1pdCk7XG5mdW5jdGlvbiBhZGRUYXNrU3VibWl0KCkge1xuXHRjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayh7XG5cdFx0dGl0bGU6IHRhc2tUaXRsZUVsLnZhbHVlLFxuXHRcdGRlc2NyaXB0aW9uOiB0YXNrRGVzY0VsLnZhbHVlLFxuXHRcdGR1ZURhdGU6IHRhc2tEYXRlRWwudmFsdWUsXG5cdFx0cHJpb3JpdHk6IHRhc2tQcmlvcml0eUVsLnZhbHVlLFxuXHRcdG5vdGVzOiB0YXNrTm90ZXNFbC52YWx1ZSxcblx0fSk7XG5cblx0Y3VycmVudFRhc2tzLnB1c2gobmV3VGFzayk7XG5cdC8vIHNldEN1cnJlbnRUYXNrcyhjdXJyZW50VGFza3MpO1xuXHRjb25zb2xlLmxvZyhjdXJyZW50VGFza3MpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrcykpO1xuXHRjbG9zZUZvcm0oKTtcblx0Ly8gcmVuZGVyVGFza3MoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG5cdC8vY2xlYXIgY3VycmVudCB0YXNrc1xuXHR0YXNrQ29udGFpbmVyLmlubmVyaHRtbCA9IFwiXCI7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdGFzayA9IGN1cnJlbnRUYXNrc1tpXTtcblxuXHRcdC8vdGFzayBjYXJkIGNvbnRhaW5pbmcgZGl2XG5cdFx0Y29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNhcmRcIik7XG5cdFx0dGFza0NhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRhc2stJHtpfWApO1xuXHRcdC8vbWF5YmUgdXNlIGRhdGEgYXR0cmlidXRlcz9cblxuXHRcdC8vaW5uZXIgdGFzayBjYXJkIGRpdiBpdGVtc1xuXHRcdC8vVElUTEVcblx0XHRjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcblx0XHR0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG5cdFx0Ly9ERVNDUklQVElPTlxuXHRcdGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0YXNrRGVzYy5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvblwiKTtcblx0XHR0YXNrRGVzYy50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblx0XHQvL0RVRSBEQVRFXG5cdFx0Y29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRhdGVcIik7XG5cdFx0dGFza0RhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG5cdFx0Ly9QUklPUklUWVxuXHRcdGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0dGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXByaW9yaXR5XCIpO1xuXHRcdHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcblx0XHQvL05PVEVTXG5cdFx0Y29uc3QgdGFza05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0YXNrTm90ZXMuY2xhc3NMaXN0LmFkZChcInRhc2stbm90ZXNcIik7XG5cdFx0dGFza05vdGVzLnRleHRDb250ZW50ID0gXCJOb3Rlc1wiO1xuXHRcdC8vREVMRVRFIElDT05cblx0XHRjb25zdCB0YXNrRGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdFx0dGFza0RlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlXCIpO1xuXHRcdHRhc2tEZWxldGVJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vYXNzZXRzL3RyYXNoLWNhbi1vdXRsaW5lLnBuZ1wiKTtcblx0XHR0YXNrRGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJ0cmFzaCBjYW4gZGVsZXRlIGljb25cIik7XG5cdH1cbn1cblxuLy8gd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbi8vIFx0Ly8gc2V0Q3VycmVudFRoZW1lKERFRkFVTFRfVEhFTUUpO1xuLy8gXHRzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcbi8vIFx0Ly8gcmVuZGVyVGFza3MoKTtcbi8vIH07XG5cbi8vVEFTSyBHUklEIFJFU1BPTlNJVkVORVNTXG4vLyBjb25zdCB0YXNrMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay0xXCIpO1xuLy8gY29uc3QgdGFzazIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stMlwiKTtcblxuLy8gdGFzazEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuLy8gXHRjb25zb2xlLmxvZyhldmVudCk7XG4vLyB9KTtcbi8vIHRhc2syLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vIFx0Y29uc29sZS5sb2coZXZlbnQpO1xuLy8gXHRjb25zb2xlLmxvZyhldmVudC50YXJnZXQuaWQpO1xuLy8gXHRsZXQgaWQxID0gZXZlbnQudGFyZ2V0LmlkO1xuLy8gXHRsZXQgaWQyID0gaWQxLmNvbnNvbGUubG9nKCk7XG4vLyBcdC8vIHNxdWFyZXNHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdyaWQtc3F1YXJlc1wiKTtcbi8vIFx0Ly8gc3F1YXJlc0dyaWRbMF0uc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwiMTAwMHB4XCI7XG4vLyB9KTtcblxuLy8gdGFza0NhcmRzTm9kZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1jYXJkXCIpO1xuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQ2FyZHNOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xuLy8gXHR0YXNrQ2FyZHNOb2RlTGlzdFtpXS5zdHlsZS5ncmlkQ29sdW1uID0gXCIxLzNcIjtcbi8vIH1cbiIsImNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgY3JlYXRlVGFzayA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzIH0pID0+ICh7XG5cdHRpdGxlLFxuXHRkZXNjcmlwdGlvbixcblx0ZHVlRGF0ZSxcblx0cHJpb3JpdHksXG5cdG5vdGVzLFxuXHRwcmludFRhc2soKSB7XG5cdFx0cmV0dXJuIGAke3RoaXMudGl0bGV9OiAke3RoaXMuZGVzY3JpcHRpb259YDtcblx0fSxcbn0pO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+ICh7XG5cdHRpdGxlLFxuXHRkZXNjcmlwdGlvbixcblx0dGFza3M6IFtdLFxuXHRwcmludFByb2plY3QoKSB7XG5cdFx0cmV0dXJuIGBQcm9qZWN0ICR7dGhpcy50aXRsZX06ICR7dGhpcy5kZXNjcmlwdGlvbn1gO1xuXHR9LFxuXHRhZGRUYXNrdG9Qcm9qZWN0KHRhc2spIHtcblx0XHR0aGlzLnRhc2tzLnB1c2godGFzayk7XG5cdH0sXG59KTtcblxuZXhwb3J0IHsgY3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCB9O1xuIiwiY29uc3QgYWRkVGFza0Zvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Rhc2tfc2VjdGlvblwiKTtcbmZ1bmN0aW9uIHJlbmRlclRhc2tGb3JtKCkge1xuXHRhZGRUYXNrRm9ybUVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogYmxvY2s7XCIpO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG5cdGFkZFRhc2tGb3JtRWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyVGFza0Zvcm0sIGNsb3NlRm9ybSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9