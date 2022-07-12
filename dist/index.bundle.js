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
// const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
// const currentlyRead = savedBooks.filter((book) => book.readStatus === true);
// const DEFAULT_BOOKS_READ = currentlyRead.length;
// const DEFAULT_BOOKS_TOTAL = savedBooks.length;

//TEST DATA
const savedTasks = [
	{
		title: "Mow the lawn",
		description:
			"get out there with the dang mower and mow that there lawn there",
		dueDate: "2022-07-29",
		priority: "1",
		notes: "Return mower to neighbor when finished",
	},
	{
		title: "Walk the dog",
		description: "leash, open door, walk around, come back",
		dueDate: "2022-08-12",
		priority: "2",
		notes: "avoid other dogs!",
	},
	{
		title: "Cook dinner",
		description: "chicken tikka masala, w/ jasmine rice, and samosas",
		dueDate: "2022-06-12",
		priority: "3",
		notes: "no peanuts!",
	},
	{
		title: "Read 'October' Book",
		description: "read at least 40 pages today",
		dueDate: "2022-08-12",
		priority: "5",
		notes: "",
	},
	{
		title: "Buy roses",
		description: "2 dozen roses from Safeway",
		dueDate: "2022-08-12",
		priority: "5",
		notes: "red roses",
	},
];

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

const date = new Date();
const taskDemo1 = (0,_js_create__WEBPACK_IMPORTED_MODULE_1__.createTask)({
	title: "Walk the Dog",
	description: "take the doggo on a lil stroll",
	dueDate: date,
	priority: 3,
	notes: "avoid 9th and Elm - aggressive dog",
});
// console.log(taskDemo1);

const projectDemo1 = (0,_js_create__WEBPACK_IMPORTED_MODULE_1__.createProject)({
	title: "Personal",
	description: "pleasure, not business",
});
projectDemo1.addTasktoProject(taskDemo1);

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
	setCurrentTasks(currentTasks);
	console.log(currentTasks);
	localStorage.setItem("tasks", JSON.stringify(currentTasks));
	renderTasks();
	(0,_js_taskForm__WEBPACK_IMPORTED_MODULE_2__.closeForm)();
}

function renderTasks() {
	console.log("enter render task f(n)");
	//clear current tasks
	taskContainer.innerHTML = "";
	for (let i = 0; i < currentTasks.length; i++) {
		const task = currentTasks[i];

		//task card containing div
		const taskCard = document.createElement("div");
		taskCard.classList.add("task-card");
		taskCard.setAttribute("data-index", i);
		// taskCard.setAttribute("id", `task-${i}`);

		//inner task card div items
		//TITLE
		const taskTitle = document.createElement("div");
		taskTitle.classList.add("task-title");
		taskTitle.textContent = task.title;
		//DESCRIPTION
		const taskDesc = document.createElement("div");
		taskDesc.classList.add("task-description");
		taskDesc.textContent = task.description;
		//DUE DATE
		const taskDate = document.createElement("div");
		taskDate.classList.add("task-date");
		taskDate.textContent = task.dueDate;
		//PRIORITY
		const taskPriority = document.createElement("div");
		taskPriority.classList.add("task-priority");
		taskPriority.textContent = task.priority;
		console.log(task.priority);
		//NOTES
		const taskNotes = document.createElement("div");
		taskNotes.classList.add("task-notes");
		taskNotes.textContent = task.notes;
		//DELETE ICON
		const taskDeleteIcon = document.createElement("img");
		console.log({ taskDeleteIcon });
		taskDeleteIcon.classList.add("task-delete");
		taskDeleteIcon.setAttribute("src", _assets_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_0__);
		taskDeleteIcon.setAttribute("alt", "trash can delete icon");
		taskDeleteIcon.addEventListener("click", function () {
			taskDeleteIcon.parentElement.remove(taskCard);
			let index = taskDeleteIcon.parentElement.getAttribute("data-index");
			currentTasks.splice(index, 1);
			setCurrentTasks(currentTasks);
			localStorage.setItem("tasks", JSON.stringify(currentTasks));
			renderTasks();
		});

		//APPEND ELEMENTS
		taskCard.append(
			taskTitle,
			taskDesc,
			taskDate,
			taskPriority,
			taskNotes,
			taskDeleteIcon
		);
		taskContainer.appendChild(taskCard);
	}
}

window.onload = () => {
	// setCurrentTheme(DEFAULT_THEME);
	setCurrentTasks(currentTasks);
	renderTasks();
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLnNjc3M/NjJhZiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdGFza0Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vYXNzZXRzL3RyYXNoLWNhbi1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2pzL2NyZWF0ZVwiO1xuaW1wb3J0IHsgcmVuZGVyVGFza0Zvcm0sIGNsb3NlRm9ybSB9IGZyb20gXCIuL2pzL3Rhc2tGb3JtXCI7XG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5zY3NzXCI7XG4vLyBpbXBvcnQgeyB9IGZyb20gXCIuL2pzL1wiO1xuXG4vL0RFRkFVTFRTXG5jb25zdCBERUZBVUxUX1RIRU1FID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSB8fCBcImxpZ2h0XCI7XG4vLyBjb25zdCBzYXZlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcbi8vIGNvbnN0IGN1cnJlbnRseVJlYWQgPSBzYXZlZEJvb2tzLmZpbHRlcigoYm9vaykgPT4gYm9vay5yZWFkU3RhdHVzID09PSB0cnVlKTtcbi8vIGNvbnN0IERFRkFVTFRfQk9PS1NfUkVBRCA9IGN1cnJlbnRseVJlYWQubGVuZ3RoO1xuLy8gY29uc3QgREVGQVVMVF9CT09LU19UT1RBTCA9IHNhdmVkQm9va3MubGVuZ3RoO1xuXG4vL1RFU1QgREFUQVxuY29uc3Qgc2F2ZWRUYXNrcyA9IFtcblx0e1xuXHRcdHRpdGxlOiBcIk1vdyB0aGUgbGF3blwiLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XCJnZXQgb3V0IHRoZXJlIHdpdGggdGhlIGRhbmcgbW93ZXIgYW5kIG1vdyB0aGF0IHRoZXJlIGxhd24gdGhlcmVcIixcblx0XHRkdWVEYXRlOiBcIjIwMjItMDctMjlcIixcblx0XHRwcmlvcml0eTogXCIxXCIsXG5cdFx0bm90ZXM6IFwiUmV0dXJuIG1vd2VyIHRvIG5laWdoYm9yIHdoZW4gZmluaXNoZWRcIixcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIldhbGsgdGhlIGRvZ1wiLFxuXHRcdGRlc2NyaXB0aW9uOiBcImxlYXNoLCBvcGVuIGRvb3IsIHdhbGsgYXJvdW5kLCBjb21lIGJhY2tcIixcblx0XHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0XHRwcmlvcml0eTogXCIyXCIsXG5cdFx0bm90ZXM6IFwiYXZvaWQgb3RoZXIgZG9ncyFcIixcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIkNvb2sgZGlubmVyXCIsXG5cdFx0ZGVzY3JpcHRpb246IFwiY2hpY2tlbiB0aWtrYSBtYXNhbGEsIHcvIGphc21pbmUgcmljZSwgYW5kIHNhbW9zYXNcIixcblx0XHRkdWVEYXRlOiBcIjIwMjItMDYtMTJcIixcblx0XHRwcmlvcml0eTogXCIzXCIsXG5cdFx0bm90ZXM6IFwibm8gcGVhbnV0cyFcIixcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIlJlYWQgJ09jdG9iZXInIEJvb2tcIixcblx0XHRkZXNjcmlwdGlvbjogXCJyZWFkIGF0IGxlYXN0IDQwIHBhZ2VzIHRvZGF5XCIsXG5cdFx0ZHVlRGF0ZTogXCIyMDIyLTA4LTEyXCIsXG5cdFx0cHJpb3JpdHk6IFwiNVwiLFxuXHRcdG5vdGVzOiBcIlwiLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiQnV5IHJvc2VzXCIsXG5cdFx0ZGVzY3JpcHRpb246IFwiMiBkb3plbiByb3NlcyBmcm9tIFNhZmV3YXlcIixcblx0XHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0XHRwcmlvcml0eTogXCI1XCIsXG5cdFx0bm90ZXM6IFwicmVkIHJvc2VzXCIsXG5cdH0sXG5dO1xuXG4vL3N0YXRlIHZhcmlhYmxlc1xubGV0IGN1cnJlbnRUYXNrcyA9IHNhdmVkVGFza3M7XG5sZXQgY3VycmVudFRoZW1lID0gREVGQVVMVF9USEVNRTtcbi8vIGxldCBjdXJyZW50Qm9va3NSZWFkQ291bnQgPSBERUZBVUxUX0JPT0tTX1JFQUQ7XG4vLyBsZXQgY3VycmVudEJvb2tzVG90YWxDb3VudCA9IERFRkFVTFRfQk9PS1NfVE9UQUw7XG4vL3N0YXRlIHZhcmlhYmxlIHVwZGF0ZXNcbmZ1bmN0aW9uIHNldEN1cnJlbnRUYXNrcyhuZXdUYXNrcykge1xuXHRjdXJyZW50VGFza3MgPSBuZXdUYXNrcztcbn1cbi8vIGZ1bmN0aW9uIHNldEJvb2tSZWFkVG90YWxzKCkge1xuLy8gXHRjdXJyZW50Qm9va3NSZWFkQ291bnQgPSBERUZBVUxUX0JPT0tTX1JFQUQ7XG4vLyBcdGN1cnJlbnRCb29rc1RvdGFsQ291bnQgPSBERUZBVUxUX0JPT0tTX1RPVEFMO1xuLy8gfVxuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuXG4vLyBET00gRlVOQ1RJT05cblxuLy9hcmcgMSA9IG5hbWUgb2YgSFRNTCBlbGVtZW50XG4vLyBhcmcgMiA9IGNsYXNzIG5hbWVzIHRvIGFkZFxuLy8gYXJnIDMgPSBvYmplY3QgLSBhdHRyaWJ1dGVzIHRvIGFkZCAtPiBhdHRyaWJ1dGUgOiB2YWx1ZVxuZnVuY3Rpb24gZG9tQ3JlYXRlKGFyZzEsIGFyZzIsIGFyZzMpIHtcblx0Ly9hcmcgMSA9IG5hbWUgb2YgSFRNTCBlbGVtZW50XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZzEpO1xuXHQvLyBhcmcgMiA9IGNsYXNzIG5hbWVzIHRvIGFkZFxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyZzIubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBjbGFzc05hbWUgPSBhcmcyW2ldO1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRcdC8vIC8vc2V0IGRhdGEgYXR0cmlidXRlIFwiZGF0YS1pbmRleFwiIHRvIHRoZSBjdXJyZW50IGluZGV4XG5cdFx0Ly8gZWxlbWVudC5kYXRhc2V0LmluZGV4ID0gaTtcblx0fVxuXHQvLyBhcmcgMyA9IG9iamVjdCAtIGF0dHJpYnV0ZSA6IHZhbHVlXG5cdGZvciAoY29uc3QgYXR0cmlidXRlIGluIGFyZzMpIHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGFyZzNbYXR0cmlidXRlXSk7XG5cdH1cblx0Ly8gcmV0dXJuIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdC8vIHJldHVybiBlbGVtZW50O1xufVxuZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stY2FyZFwiXSwgeyBcImRhdGEtYXR0cmlidXRlLXRlc3RcIjogXCJoZXlidWRkeSFcIiB9KTtcblxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCB0YXNrRGVtbzEgPSBjcmVhdGVUYXNrKHtcblx0dGl0bGU6IFwiV2FsayB0aGUgRG9nXCIsXG5cdGRlc2NyaXB0aW9uOiBcInRha2UgdGhlIGRvZ2dvIG9uIGEgbGlsIHN0cm9sbFwiLFxuXHRkdWVEYXRlOiBkYXRlLFxuXHRwcmlvcml0eTogMyxcblx0bm90ZXM6IFwiYXZvaWQgOXRoIGFuZCBFbG0gLSBhZ2dyZXNzaXZlIGRvZ1wiLFxufSk7XG4vLyBjb25zb2xlLmxvZyh0YXNrRGVtbzEpO1xuXG5jb25zdCBwcm9qZWN0RGVtbzEgPSBjcmVhdGVQcm9qZWN0KHtcblx0dGl0bGU6IFwiUGVyc29uYWxcIixcblx0ZGVzY3JpcHRpb246IFwicGxlYXN1cmUsIG5vdCBidXNpbmVzc1wiLFxufSk7XG5wcm9qZWN0RGVtbzEuYWRkVGFza3RvUHJvamVjdCh0YXNrRGVtbzEpO1xuXG4vL1RBU0sgRk9STVxuXG5jb25zdCBhZGRUYXNrSGVhZGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUYXNrXCIpO1xuYWRkVGFza0hlYWRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyVGFza0Zvcm0pO1xuXG5jb25zdCBjbG9zZUZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWZvcm1cIik7XG5jbG9zZUZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybSk7XG5cbmNvbnN0IHRhc2tUaXRsZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXRpdGxlXCIpO1xuY29uc3QgdGFza0Rlc2NFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kZXNjXCIpO1xuY29uc3QgdGFza0RhdGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kYXRlXCIpO1xuY29uc3QgdGFza1ByaW9yaXR5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtcHJpb3JpdHlcIik7XG5jb25zdCB0YXNrTm90ZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1ub3Rlc1wiKTtcbmNvbnN0IHByb2plY3RUYXNrQWRkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGFzay1hZGRcIik7XG5cbmNvbnN0IGNsZWFyRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xlYXJcIik7XG5jbGVhckZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyRm9ybSk7XG5mdW5jdGlvbiBjbGVhckZvcm0oKSB7XG5cdHRhc2tUaXRsZUVsLnZhbHVlID0gXCJcIjtcblx0dGFza0Rlc2NFbC52YWx1ZSA9IFwiXCI7XG5cdHRhc2tEYXRlRWwudmFsdWUgPSBcIlwiO1xuXHR0YXNrUHJpb3JpdHlFbC52YWx1ZSA9IFwiXCI7XG5cdHRhc2tOb3Rlc0VsLnZhbHVlID0gXCJcIjtcblx0cHJvamVjdFRhc2tBZGRFbC5vcHRpb25zLnNlbGVjdGVkSW5kZXggPSAwO1xufVxuXG4vLyBsZXQgY3VycmVudFRhc2tzID0gW1xuLy8gXHR7XG4vLyBcdFx0dGl0bGU6IFwiV2FsayB0aGUgRG9nXCIsXG4vLyBcdFx0ZGVzY3JpcHRpb246IFwidGFrZSB0aGUgZG9nZ28gb24gYSBsaWwgc3Ryb2xsXCIsXG4vLyBcdFx0ZHVlRGF0ZTogXCIyMDIyLTA3LTEyVDEzOjI3OjE5LjU2OFpcIixcbi8vIFx0XHRwcmlvcml0eTogXCJoaWdoXCIsXG4vLyBcdFx0bm90ZXM6IFwiYXZvaWQgOXRoIGFuZCBFbG0gLSBhZ2dyZXNzaXZlIGRvZ1wiLFxuLy8gXHR9LFxuLy8gXTtcbmNvbnN0IGFkZFRhc2tGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbmFkZFRhc2tGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrU3VibWl0KTtcbmZ1bmN0aW9uIGFkZFRhc2tTdWJtaXQoKSB7XG5cdGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKHtcblx0XHR0aXRsZTogdGFza1RpdGxlRWwudmFsdWUsXG5cdFx0ZGVzY3JpcHRpb246IHRhc2tEZXNjRWwudmFsdWUsXG5cdFx0ZHVlRGF0ZTogdGFza0RhdGVFbC52YWx1ZSxcblx0XHRwcmlvcml0eTogdGFza1ByaW9yaXR5RWwudmFsdWUsXG5cdFx0bm90ZXM6IHRhc2tOb3Rlc0VsLnZhbHVlLFxuXHR9KTtcblxuXHRjdXJyZW50VGFza3MucHVzaChuZXdUYXNrKTtcblx0c2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrcyk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG5cdHJlbmRlclRhc2tzKCk7XG5cdGNsb3NlRm9ybSgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrcygpIHtcblx0Y29uc29sZS5sb2coXCJlbnRlciByZW5kZXIgdGFzayBmKG4pXCIpO1xuXHQvL2NsZWFyIGN1cnJlbnQgdGFza3Ncblx0dGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRUYXNrcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHRhc2sgPSBjdXJyZW50VGFza3NbaV07XG5cblx0XHQvL3Rhc2sgY2FyZCBjb250YWluaW5nIGRpdlxuXHRcdGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKFwidGFzay1jYXJkXCIpO1xuXHRcdHRhc2tDYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaSk7XG5cdFx0Ly8gdGFza0NhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRhc2stJHtpfWApO1xuXG5cdFx0Ly9pbm5lciB0YXNrIGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly9USVRMRVxuXHRcdGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0dGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xuXHRcdHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdFx0Ly9ERVNDUklQVElPTlxuXHRcdGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0YXNrRGVzYy5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvblwiKTtcblx0XHR0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cdFx0Ly9EVUUgREFURVxuXHRcdGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFzay1kYXRlXCIpO1xuXHRcdHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXHRcdC8vUFJJT1JJVFlcblx0XHRjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFzay1wcmlvcml0eVwiKTtcblx0XHR0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXHRcdGNvbnNvbGUubG9nKHRhc2sucHJpb3JpdHkpO1xuXHRcdC8vTk9URVNcblx0XHRjb25zdCB0YXNrTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHRhc2tOb3Rlcy5jbGFzc0xpc3QuYWRkKFwidGFzay1ub3Rlc1wiKTtcblx0XHR0YXNrTm90ZXMudGV4dENvbnRlbnQgPSB0YXNrLm5vdGVzO1xuXHRcdC8vREVMRVRFIElDT05cblx0XHRjb25zdCB0YXNrRGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdFx0Y29uc29sZS5sb2coeyB0YXNrRGVsZXRlSWNvbiB9KTtcblx0XHR0YXNrRGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGVcIik7XG5cdFx0dGFza0RlbGV0ZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGRlbGV0ZUljb24pO1xuXHRcdHRhc2tEZWxldGVJY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInRyYXNoIGNhbiBkZWxldGUgaWNvblwiKTtcblx0XHR0YXNrRGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0dGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUodGFza0NhcmQpO1xuXHRcdFx0bGV0IGluZGV4ID0gdGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXHRcdFx0Y3VycmVudFRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG5cdFx0XHRyZW5kZXJUYXNrcygpO1xuXHRcdH0pO1xuXG5cdFx0Ly9BUFBFTkQgRUxFTUVOVFNcblx0XHR0YXNrQ2FyZC5hcHBlbmQoXG5cdFx0XHR0YXNrVGl0bGUsXG5cdFx0XHR0YXNrRGVzYyxcblx0XHRcdHRhc2tEYXRlLFxuXHRcdFx0dGFza1ByaW9yaXR5LFxuXHRcdFx0dGFza05vdGVzLFxuXHRcdFx0dGFza0RlbGV0ZUljb25cblx0XHQpO1xuXHRcdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXHR9XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cdC8vIHNldEN1cnJlbnRUaGVtZShERUZBVUxUX1RIRU1FKTtcblx0c2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdHJlbmRlclRhc2tzKCk7XG59O1xuXG4vL1RBU0sgR1JJRCBSRVNQT05TSVZFTkVTU1xuLy8gY29uc3QgdGFzazEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stMVwiKTtcbi8vIGNvbnN0IHRhc2syID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLTJcIik7XG5cbi8vIHRhc2sxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vIFx0Y29uc29sZS5sb2coZXZlbnQpO1xuLy8gfSk7XG4vLyB0YXNrMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyBcdGNvbnNvbGUubG9nKGV2ZW50KTtcbi8vIFx0Y29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlkKTtcbi8vIFx0bGV0IGlkMSA9IGV2ZW50LnRhcmdldC5pZDtcbi8vIFx0bGV0IGlkMiA9IGlkMS5jb25zb2xlLmxvZygpO1xuLy8gXHQvLyBzcXVhcmVzR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJncmlkLXNxdWFyZXNcIik7XG4vLyBcdC8vIHNxdWFyZXNHcmlkWzBdLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIjEwMDBweFwiO1xuLy8gfSk7XG5cbi8vIHRhc2tDYXJkc05vZGVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2stY2FyZFwiKTtcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0NhcmRzTm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcbi8vIFx0dGFza0NhcmRzTm9kZUxpc3RbaV0uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMS8zXCI7XG4vLyB9XG4iLCJjb25zdCBjcmVhdGVUYXNrID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMgfSkgPT4gKHtcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHRkdWVEYXRlLFxuXHRwcmlvcml0eSxcblx0bm90ZXMsXG5cdHByaW50VGFzaygpIHtcblx0XHRyZXR1cm4gYCR7dGhpcy50aXRsZX06ICR7dGhpcy5kZXNjcmlwdGlvbn1gO1xuXHR9LFxufSk7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4gKHtcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHR0YXNrczogW10sXG5cdHByaW50UHJvamVjdCgpIHtcblx0XHRyZXR1cm4gYFByb2plY3QgJHt0aGlzLnRpdGxlfTogJHt0aGlzLmRlc2NyaXB0aW9ufWA7XG5cdH0sXG5cdGFkZFRhc2t0b1Byb2plY3QodGFzaykge1xuXHRcdHRoaXMudGFza3MucHVzaCh0YXNrKTtcblx0fSxcbn0pO1xuXG5leHBvcnQgeyBjcmVhdGVUYXNrLCBjcmVhdGVQcm9qZWN0IH07XG4iLCJjb25zdCBhZGRUYXNrRm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRfdGFza19zZWN0aW9uXCIpO1xuZnVuY3Rpb24gcmVuZGVyVGFza0Zvcm0oKSB7XG5cdGFkZFRhc2tGb3JtRWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBibG9jaztcIik7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcblx0YWRkVGFza0Zvcm1FbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xufVxuXG5leHBvcnQgeyByZW5kZXJUYXNrRm9ybSwgY2xvc2VGb3JtIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=