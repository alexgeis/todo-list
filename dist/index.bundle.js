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
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");


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

const addTaskFormEl = document.querySelector(".add_task_section");
const addTaskHeaderBtn = document.querySelector("#addTask");
addTaskHeaderBtn.addEventListener("click", renderTaskForm);

function renderTaskForm() {
	console.log("hello");
	addTaskFormEl.setAttribute("style", "display: block;");
}

const closeFormBtn = document.querySelector("#close-form");
closeFormBtn.addEventListener("click", closeForm);
function closeForm() {
	addTaskFormEl.setAttribute("style", "display: none;");
}

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

let currentTasks = [];
const addTaskFormBtn = document.querySelector(".add-task");
addTaskFormBtn.addEventListener("click", addTaskSubmit);
function addTaskSubmit() {
	const newTask = createTask({
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
	closeForm();
	// renderTasks();
}

const taskContainer = document.querySelector("#main-content");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNBd0Q7QUFDOUI7QUFDMUIsY0FBYzs7QUFFZDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DOztBQUV0RTtBQUNBLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLHNCQUFzQiw4Q0FBOEM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXLElBQUksaUJBQWlCO0FBQzVDLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSx5QkFBeUIsb0JBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVcsSUFBSSxpQkFBaUI7QUFDcEQsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxFQUFFO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLnNjc3M/NjJhZiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vYXNzZXRzL3RyYXNoLWNhbi1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuc2Nzc1wiO1xuLy8gaW1wb3J0IHsgfSBmcm9tIFwiLi9qcy9cIjtcblxuY29uc3QgdGFzazEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stMVwiKTtcbmNvbnN0IHRhc2syID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLTJcIik7XG5cbnRhc2sxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0Y29uc29sZS5sb2coZXZlbnQpO1xufSk7XG50YXNrMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdGNvbnNvbGUubG9nKGV2ZW50KTtcblx0Y29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlkKTtcblx0bGV0IGlkMSA9IGV2ZW50LnRhcmdldC5pZDtcblx0bGV0IGlkMiA9IGlkMS5jb25zb2xlLmxvZygpO1xuXHQvLyBzcXVhcmVzR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJncmlkLXNxdWFyZXNcIik7XG5cdC8vIHNxdWFyZXNHcmlkWzBdLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIjEwMDBweFwiO1xufSk7XG5cbmNvbnN0IG1haW5Db250ZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGVudFwiKTtcblxuLy9hZGQgdG8gRE9NIGZ1bmN0aW9uXG4vL2FyZyAxID0gbmFtZSBvZiBIVE1MIGVsZW1lbnRcbi8vIGFyZyAyID0gY2xhc3MgbmFtZXMgdG8gYWRkXG4vLyBhcmcgMyA9IG9iamVjdCAtIGF0dHJpYnV0ZXMgdG8gYWRkIC0+IGF0dHJpYnV0ZSA6IHZhbHVlXG5mdW5jdGlvbiBkb21DcmVhdGUoYXJnMSwgYXJnMiwgYXJnMykge1xuXHQvL2FyZyAxID0gbmFtZSBvZiBIVE1MIGVsZW1lbnRcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXJnMSk7XG5cdC8vIGFyZyAyID0gY2xhc3MgbmFtZXMgdG8gYWRkXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJnMi5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IGFyZzJbaV07XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0ZWxlbWVudC5kYXRhc2V0LmluZGV4ID0gaTtcblx0fVxuXHQvLyBhcmcgMyA9IG9iamVjdCAtIGF0dHJpYnV0ZSA6IHZhbHVlXG5cdGZvciAoY29uc3QgYXR0cmlidXRlIGluIGFyZzMpIHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGFyZzNbYXR0cmlidXRlXSk7XG5cdH1cblx0cmV0dXJuIG1haW5Db250ZW50RWwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdC8vIHJldHVybiBlbGVtZW50O1xufVxuZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stY2FyZFwiXSwgeyBcImRhdGEtYXR0cmlidXRlLXRlc3RcIjogXCJoZXlidWRkeSFcIiB9KTtcblxuLy8gdGFza0NhcmRzTm9kZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1jYXJkXCIpO1xuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQ2FyZHNOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xuLy8gXHR0YXNrQ2FyZHNOb2RlTGlzdFtpXS5zdHlsZS5ncmlkQ29sdW1uID0gXCIxLzNcIjtcbi8vIH1cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuLy8gXHRjb25zb2xlLmxvZyhldmVudCk7XG4vLyB9KTtcblxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBjcmVhdGVUYXNrID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMgfSkgPT4gKHtcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHRkdWVEYXRlLFxuXHRwcmlvcml0eSxcblx0bm90ZXMsXG5cdHByaW50VGFzaygpIHtcblx0XHRyZXR1cm4gYCR7dGhpcy50aXRsZX06ICR7dGhpcy5kZXNjcmlwdGlvbn1gO1xuXHR9LFxufSk7XG5cbmNvbnN0IHRhc2tEZW1vMSA9IGNyZWF0ZVRhc2soe1xuXHR0aXRsZTogXCJXYWxrIHRoZSBEb2dcIixcblx0ZGVzY3JpcHRpb246IFwidGFrZSB0aGUgZG9nZ28gb24gYSBsaWwgc3Ryb2xsXCIsXG5cdGR1ZURhdGU6IGRhdGUsXG5cdHByaW9yaXR5OiBcImhpZ2hcIixcblx0bm90ZXM6IFwiYXZvaWQgOXRoIGFuZCBFbG0gLSBhZ2dyZXNzaXZlIGRvZ1wiLFxufSk7XG4vLyBjb25zb2xlLmxvZyh0YXNrRGVtbzEpO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+ICh7XG5cdHRpdGxlLFxuXHRkZXNjcmlwdGlvbixcblx0dGFza3M6IFtdLFxuXHRwcmludFByb2plY3QoKSB7XG5cdFx0cmV0dXJuIGBQcm9qZWN0ICR7dGhpcy50aXRsZX06ICR7dGhpcy5kZXNjcmlwdGlvbn1gO1xuXHR9LFxuXHRhZGRUYXNrdG9Qcm9qZWN0KHRhc2spIHtcblx0XHR0aGlzLnRhc2tzLnB1c2godGFzayk7XG5cdH0sXG59KTtcblxuY29uc3QgcHJvamVjdERlbW8xID0gY3JlYXRlUHJvamVjdCh7XG5cdHRpdGxlOiBcIlBlcnNvbmFsXCIsXG5cdGRlc2NyaXB0aW9uOiBcInBsZWFzdXJlLCBub3QgYnVzaW5lc3NcIixcbn0pO1xucHJvamVjdERlbW8xLmFkZFRhc2t0b1Byb2plY3QodGFza0RlbW8xKTtcbmNvbnNvbGUubG9nKHByb2plY3REZW1vMS50YXNrcyk7XG5cbmNvbnN0IGFkZFRhc2tGb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZF90YXNrX3NlY3Rpb25cIik7XG5jb25zdCBhZGRUYXNrSGVhZGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUYXNrXCIpO1xuYWRkVGFza0hlYWRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyVGFza0Zvcm0pO1xuXG5mdW5jdGlvbiByZW5kZXJUYXNrRm9ybSgpIHtcblx0Y29uc29sZS5sb2coXCJoZWxsb1wiKTtcblx0YWRkVGFza0Zvcm1FbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGJsb2NrO1wiKTtcbn1cblxuY29uc3QgY2xvc2VGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1mb3JtXCIpO1xuY2xvc2VGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm0pO1xuZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xuXHRhZGRUYXNrRm9ybUVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG59XG5cbmNvbnN0IHRhc2tUaXRsZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXRpdGxlXCIpO1xuY29uc3QgdGFza0Rlc2NFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kZXNjXCIpO1xuY29uc3QgdGFza0RhdGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kYXRlXCIpO1xuY29uc3QgdGFza1ByaW9yaXR5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtcHJpb3JpdHlcIik7XG5jb25zdCB0YXNrTm90ZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1ub3Rlc1wiKTtcbmNvbnN0IHByb2plY3RUYXNrQWRkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGFzay1hZGRcIik7XG5cbmNvbnN0IGNsZWFyRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xlYXJcIik7XG5jbGVhckZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyRm9ybSk7XG5mdW5jdGlvbiBjbGVhckZvcm0oKSB7XG5cdHRhc2tUaXRsZUVsLnZhbHVlID0gXCJcIjtcblx0dGFza0Rlc2NFbC52YWx1ZSA9IFwiXCI7XG5cdHRhc2tEYXRlRWwudmFsdWUgPSBcIlwiO1xuXHR0YXNrUHJpb3JpdHlFbC52YWx1ZSA9IFwiXCI7XG5cdHRhc2tOb3Rlc0VsLnZhbHVlID0gXCJcIjtcblx0cHJvamVjdFRhc2tBZGRFbC5vcHRpb25zLnNlbGVjdGVkSW5kZXggPSAwO1xufVxuXG5sZXQgY3VycmVudFRhc2tzID0gW107XG5jb25zdCBhZGRUYXNrRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XG5hZGRUYXNrRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza1N1Ym1pdCk7XG5mdW5jdGlvbiBhZGRUYXNrU3VibWl0KCkge1xuXHRjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayh7XG5cdFx0dGl0bGU6IHRhc2tUaXRsZUVsLnZhbHVlLFxuXHRcdGRlc2NyaXB0aW9uOiB0YXNrRGVzY0VsLnZhbHVlLFxuXHRcdGR1ZURhdGU6IHRhc2tEYXRlRWwudmFsdWUsXG5cdFx0cHJpb3JpdHk6IHRhc2tQcmlvcml0eUVsLnZhbHVlLFxuXHRcdG5vdGVzOiB0YXNrTm90ZXNFbC52YWx1ZSxcblx0fSk7XG5cblx0Y3VycmVudFRhc2tzLnB1c2gobmV3VGFzayk7XG5cdC8vIHNldEN1cnJlbnRUYXNrcyhjdXJyZW50VGFza3MpO1xuXHRjb25zb2xlLmxvZyhjdXJyZW50VGFza3MpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrcykpO1xuXHRjbG9zZUZvcm0oKTtcblx0Ly8gcmVuZGVyVGFza3MoKTtcbn1cblxuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuXG5mdW5jdGlvbiByZW5kZXJUYXNrcygpIHtcblx0Ly9jbGVhciBjdXJyZW50IHRhc2tzXG5cdHRhc2tDb250YWluZXIuaW5uZXJodG1sID0gXCJcIjtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50VGFza3MubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCB0YXNrID0gY3VycmVudFRhc2tzW2ldO1xuXG5cdFx0Ly90YXNrIGNhcmQgY29udGFpbmluZyBkaXZcblx0XHRjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0dGFza0NhcmQuY2xhc3NMaXN0LmFkZChcInRhc2stY2FyZFwiKTtcblx0XHR0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdGFzay0ke2l9YCk7XG5cdFx0Ly9tYXliZSB1c2UgZGF0YSBhdHRyaWJ1dGVzP1xuXG5cdFx0Ly9pbm5lciB0YXNrIGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly9USVRMRVxuXHRcdGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0dGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xuXHRcdHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcblx0XHQvL0RFU0NSSVBUSU9OXG5cdFx0Y29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpO1xuXHRcdHRhc2tEZXNjLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXHRcdC8vRFVFIERBVEVcblx0XHRjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0dGFza0RhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZGF0ZVwiKTtcblx0XHR0YXNrRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcblx0XHQvL1BSSU9SSVRZXG5cdFx0Y29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRhc2stcHJpb3JpdHlcIik7XG5cdFx0dGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuXHRcdC8vTk9URVNcblx0XHRjb25zdCB0YXNrTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHRhc2tOb3Rlcy5jbGFzc0xpc3QuYWRkKFwidGFzay1ub3Rlc1wiKTtcblx0XHR0YXNrTm90ZXMudGV4dENvbnRlbnQgPSBcIk5vdGVzXCI7XG5cdFx0Ly9ERUxFVEUgSUNPTlxuXHRcdGNvbnN0IHRhc2tEZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0XHR0YXNrRGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGVcIik7XG5cdFx0dGFza0RlbGV0ZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9hc3NldHMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCIpO1xuXHRcdHRhc2tEZWxldGVJY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInRyYXNoIGNhbiBkZWxldGUgaWNvblwiKTtcblx0fVxufVxuXG4vLyB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuLy8gXHQvLyBzZXRDdXJyZW50VGhlbWUoREVGQVVMVF9USEVNRSk7XG4vLyBcdHNldEN1cnJlbnRUYXNrcyhjdXJyZW50VGFza3MpO1xuLy8gXHQvLyByZW5kZXJUYXNrcygpO1xuLy8gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==