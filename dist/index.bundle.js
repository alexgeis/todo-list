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
/* harmony import */ var _js_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/create */ "./src/js/create.js");
/* harmony import */ var _js_taskForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/taskForm */ "./src/js/taskForm.js");
/* harmony import */ var _js_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/DOM */ "./src/js/DOM.js");
/* harmony import */ var _js_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/render */ "./src/js/render.js");
/* harmony import */ var _js_projectAcc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/projectAcc */ "./src/js/projectAcc.js");
/* harmony import */ var _js_data_taskData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/data/taskData */ "./src/js/data/taskData.js");
/* harmony import */ var _js_data_projectData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/data/projectData */ "./src/js/data/projectData.js");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");









//DEFAULTS
const DEFAULT_THEME = localStorage.getItem("theme") || "light";
// const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
// const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
// const currentlyDone = savedTasks.filter((task) => task.complete === true);
// const DEFAULT_TASKS_DONE = currentlyDone.length;
// const DEFAULT_TASKS_TOTAL = savedBooks.length;

//TEST DATA

//state variables
//ALL TASKS
const totalTasks = [];
for (let i = 0; i < _js_data_projectData__WEBPACK_IMPORTED_MODULE_6__.savedProjects.length; i++) {
	const project = _js_data_projectData__WEBPACK_IMPORTED_MODULE_6__.savedProjects[i];
	totalTasks.push(project.tasks);
}
//ALL PROJECTS (FOR PROJECT ACCORDION ASIDE)
////names
const totalProjectNames = [];
for (let i = 0; i < _js_data_projectData__WEBPACK_IMPORTED_MODULE_6__.savedProjects.length; i++) {
	const project = _js_data_projectData__WEBPACK_IMPORTED_MODULE_6__.savedProjects[i];
	totalProjectNames.push(project.title);
}
////dom logic
const projectList = document.querySelector("#project-panel-list");
for (let i = 0; i < totalProjectNames.length; i++) {
	const name = totalProjectNames[i];
	const liEl = (0,_js_DOM__WEBPACK_IMPORTED_MODULE_2__.domCreate)("li", ["project-list-item"]);
	liEl.textContent = name;
	projectList.appendChild(liEl);
}
//TASKS FOR EACH PROJECT
// projectDemo1.tasks;

let currentTasks = _js_data_taskData__WEBPACK_IMPORTED_MODULE_5__.savedTasks;
let currentProjects = _js_data_projectData__WEBPACK_IMPORTED_MODULE_6__.savedProjects;
let currentTheme = DEFAULT_THEME;
// let currentTasksDoneCount = DEFAULT_TASKS_DONE;
// let currentTasksTotalCount = DEFAULT_TASKS_TOTAL;
//state variable updates
function setCurrentTasks(newTasks) {
	currentTasks = newTasks;
	localStorage.setItem("tasks", JSON.stringify(currentTasks));
}
function setCurrentProjects(newProjects) {
	currentProjects = newProjects;
	localStorage.setItem("projects", JSON.stringify(currentProjects));
}
// function setTaskCounts() {
// 	currentTasksDoneCount = DEFAULT_TASKS_DONE;
// 	currentTasksTotalCount = DEFAULT_TASKS_TOTAL;
// }

//PROJECT ASIDE ACCORDIAN
document
	.querySelector("#project-accordion")
	.addEventListener("click", _js_projectAcc__WEBPACK_IMPORTED_MODULE_4__.accordionToggle);

const date = new Date();
const taskDemo1 = (0,_js_create__WEBPACK_IMPORTED_MODULE_0__.createTask)({
	title: "Walk the Dog",
	description: "take the doggo on a lil stroll",
	dueDate: date,
	priority: 3,
	notes: "avoid 9th and Elm - aggressive dog",
});
// console.log(taskDemo1);

const projectDemo1 = (0,_js_create__WEBPACK_IMPORTED_MODULE_0__.createProject)({
	title: "Personal",
	description: "pleasure, not business",
});
projectDemo1.addTasktoProject(taskDemo1);

//TASK/PROJECT FORMS
document.querySelector("#add-icon").addEventListener("click", renderAddMenu);
function renderAddMenu() {
	const addIconMenu = document.querySelector("#add-icon-menu");
	addIconMenu.classList.toggle("icon-menu-toggle");
}
//render forms
document
	.querySelector("#add-task-form")
	.addEventListener("click", _js_taskForm__WEBPACK_IMPORTED_MODULE_1__.renderTaskForm);
document
	.querySelector("#add-project-form")
	.addEventListener("click", _js_taskForm__WEBPACK_IMPORTED_MODULE_1__.renderProjectForm);
//task form
document
	.querySelector("#close-task-form")
	.addEventListener("click", _js_taskForm__WEBPACK_IMPORTED_MODULE_1__.closeTaskForm);
document.querySelector("#task-clear").addEventListener("click", _js_taskForm__WEBPACK_IMPORTED_MODULE_1__.clearTaskForm);
//// task submit
document
	.querySelector("#add-task-btn")
	.addEventListener("click", addTaskSubmit);
function addTaskSubmit() {
	const newTask = (0,_js_create__WEBPACK_IMPORTED_MODULE_0__.createTask)({
		title: document.querySelector("#t-title").value,
		description: document.querySelector("#t-desc").value,
		dueDate: document.querySelector("#t-date").value,
		priority: document.querySelector("#t-priority").value,
		notes: document.querySelector("#t-notes").value,
	});
	currentTasks.push(newTask);
	setCurrentTasks(currentTasks);
	localStorage.setItem("tasks", JSON.stringify(currentTasks));
	(0,_js_render__WEBPACK_IMPORTED_MODULE_3__.renderTasks)();
	(0,_js_taskForm__WEBPACK_IMPORTED_MODULE_1__.closeTaskForm)();
}
//project form
document
	.querySelector("#close-project-form")
	.addEventListener("click", _js_taskForm__WEBPACK_IMPORTED_MODULE_1__.closeProjectForm);
document
	.querySelector("#project-clear")
	.addEventListener("click", _js_taskForm__WEBPACK_IMPORTED_MODULE_1__.clearProjectForm);
////project submit
document
	.querySelector("#add-project-btn")
	.addEventListener("click", addProjectSubmit);
function addProjectSubmit() {
	const newProject = (0,_js_create__WEBPACK_IMPORTED_MODULE_0__.createProject)({
		title: document.querySelector("#p-title").value,
		description: document.querySelector("#p-desc").value,
	});
	//FIGURE OUT STATE FOR PROJECTS /////
	//REFRESH TOTAL TASK ARRAY PULL
	//getTotalTasks();
	//ADD TO PROJECT SPECIFIC ARRAY
	totalProjectNames.push(newProject.title);

	currentProjects.push(newProject);
	setCurrentProjects(currentProjects);
	localStorage.setItem("projects", JSON.stringify(currentProjects));
	// renderTasks();
	(0,_js_taskForm__WEBPACK_IMPORTED_MODULE_1__.closeProjectForm)();
}

window.onload = () => {
	// setCurrentTheme(DEFAULT_THEME);
	setCurrentTasks(currentTasks);
	setCurrentProjects(currentProjects);
	(0,_js_render__WEBPACK_IMPORTED_MODULE_3__.renderTasks)();
};


/***/ }),

/***/ "./src/js/DOM.js":
/*!***********************!*\
  !*** ./src/js/DOM.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domCreate": () => (/* binding */ domCreate)
/* harmony export */ });
// DOM FUNCTION

//arg 1 = name of HTML element
// arg 2 = class names to add
// arg 3 = object - attributes to add -> attribute : value
function domCreate(arg1, arg2, arg3) {
	//arg 1 = "string" - name of HTML element
	const element = document.createElement(arg1);
	// arg 2 = ["array of strings"] - class names to add
	for (let i = 0; i < arg2.length; i++) {
		const className = arg2[i];
		element.classList.add(className);
	}
	// arg 3 = {object} - attribute name : value
	for (const attribute in arg3) {
		element.setAttribute(attribute, arg3[attribute]);
	}
	return element;
}




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
	printTasks() {
		console.log(this.tasks);
	},
	addTasktoProject(task) {
		this.tasks.push(task);
	},
});




/***/ }),

/***/ "./src/js/data/projectData.js":
/*!************************************!*\
  !*** ./src/js/data/projectData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "savedProjects": () => (/* binding */ savedProjects)
/* harmony export */ });
const savedProjects = [
	{
		title: "Lawnmower",
		description: "landscaping project",
		tasks: [
			{
				title: "Mow the lawn",
				description:
					"get out there with the dang mower and mow that there lawn there",
				dueDate: "2022-07-29",
				priority: "1",
				notes: "Return mower to neighbor when finished",
			},
		],
	},
	{
		title: "Another Project",
		description: "miscellaneous tasks",
		tasks: [
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
		],
	},
	{
		title: "A Third Project for the List",
		description:
			"longer description for a more complicated task project breakdown",
		tasks: [
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
		],
	},
];




/***/ }),

/***/ "./src/js/data/taskData.js":
/*!*********************************!*\
  !*** ./src/js/data/taskData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "savedTasks": () => (/* binding */ savedTasks)
/* harmony export */ });
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




/***/ }),

/***/ "./src/js/projectAcc.js":
/*!******************************!*\
  !*** ./src/js/projectAcc.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accordionToggle": () => (/* binding */ accordionToggle)
/* harmony export */ });
const acc = document.querySelector("#project-accordion");
const accPanel = document.querySelector("#project-panel-display");
function accordionToggle() {
	acc.classList.toggle("active");
	if (accPanel.style.display === "block") {
		accPanel.style.display = "none";
	} else {
		accPanel.style.display = "block";
	}
}




/***/ }),

/***/ "./src/js/render.js":
/*!**************************!*\
  !*** ./src/js/render.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/js/DOM.js");
/* harmony import */ var _assets_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/trash-can-outline.png */ "./src/assets/trash-can-outline.png");



function renderTasks() {
	const currentTasks = JSON.parse(localStorage.getItem("tasks"));
	// const currentProjects = JSON.parse(localStorage.getItem("projects"));
	const taskContainer = document.querySelector("#main-content");
	//clear current tasks
	taskContainer.innerHTML = "";
	//render currentTasks tasks
	for (let i = 0; i < currentTasks.length; i++) {
		const task = currentTasks[i];
		const taskCard = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["task-card"], { "data-index": i });
		//inner task card div items
		//TITLE
		const taskTitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["task-title"]);
		taskTitle.textContent = task.title;
		//DESCRIPTION
		const taskDesc = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["task-description"]);
		taskDesc.textContent = task.description;
		//DUE DATE
		const taskDate = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["task-date"]);
		taskDate.textContent = task.dueDate;
		//PRIORITY
		const taskPriority = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["task-priority"]);
		taskPriority.textContent = task.priority;
		//NOTES
		const taskNotes = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["task-notes"]);
		taskNotes.textContent = task.notes;
		//DELETE ICON
		const taskDeleteIcon = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("img", ["task-delete"], {
			src: _assets_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_1__,
			alt: "trash can delete icon",
		});
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




/***/ }),

/***/ "./src/js/taskForm.js":
/*!****************************!*\
  !*** ./src/js/taskForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearProjectForm": () => (/* binding */ clearProjectForm),
/* harmony export */   "clearTaskForm": () => (/* binding */ clearTaskForm),
/* harmony export */   "closeProjectForm": () => (/* binding */ closeProjectForm),
/* harmony export */   "closeTaskForm": () => (/* binding */ closeTaskForm),
/* harmony export */   "renderProjectForm": () => (/* binding */ renderProjectForm),
/* harmony export */   "renderTaskForm": () => (/* binding */ renderTaskForm)
/* harmony export */ });
const addTaskFormEl = document.querySelector(".add_task_section");
function renderTaskForm() {
	addTaskFormEl.setAttribute("style", "display: block;");
}
const addProjectFormEl = document.querySelector(".add_project_section");
function renderProjectForm() {
	addProjectFormEl.setAttribute("style", "display: block;");
}

function addTaskSubmit() {
	const newTask = createTask({
		title: document.querySelector("#t-title").value.value,
		description: document.querySelector("#t-desc").value.value,
		dueDate: document.querySelector("#t-date").value.value,
		priority: document.querySelector("#t-priority").value.value,
		notes: document.querySelector("#t-notes").value.value,
	});
	currentTasks.push(newTask);
	setCurrentTasks(currentTasks);
	console.log(currentTasks);
	localStorage.setItem("tasks", JSON.stringify(currentTasks));
	renderTasks();
	closeForm();
}

function clearTaskForm() {
	document.querySelector("#t-title").value = "";
	document.querySelector("#t-desc").value = "";
	document.querySelector("#t-date").value = "";
	document.querySelector("#t-priority").value = "";
	document.querySelector("#t-notes").value = "";
	document.querySelector("#project-task-add").options.selectedIndex = 0;
}

function closeTaskForm() {
	addTaskFormEl.setAttribute("style", "display: none;");
}

function clearProjectForm() {
	document.querySelector("#p-title").value = "";
	document.querySelector("#p-desc").value = "";
}

function closeProjectForm() {
	addProjectFormEl.setAttribute("style", "display: none;");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkR2QjtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9EO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQVNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5zY3NzPzYyYWYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZGF0YS9wcm9qZWN0RGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZGF0YS90YXNrRGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcHJvamVjdEFjYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy90YXNrRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBjcmVhdGVUYXNrLCBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vanMvY3JlYXRlXCI7XG5pbXBvcnQge1xuXHRyZW5kZXJUYXNrRm9ybSxcblx0cmVuZGVyUHJvamVjdEZvcm0sXG5cdGNsZWFyVGFza0Zvcm0sXG5cdGNsb3NlVGFza0Zvcm0sXG5cdGNsZWFyUHJvamVjdEZvcm0sXG5cdGNsb3NlUHJvamVjdEZvcm0sXG59IGZyb20gXCIuL2pzL3Rhc2tGb3JtXCI7XG5pbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi9qcy9ET01cIjtcbmltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSBcIi4vanMvcmVuZGVyXCI7XG5pbXBvcnQgeyBhY2NvcmRpb25Ub2dnbGUgfSBmcm9tIFwiLi9qcy9wcm9qZWN0QWNjXCI7XG5pbXBvcnQgeyBzYXZlZFRhc2tzIH0gZnJvbSBcIi4vanMvZGF0YS90YXNrRGF0YVwiO1xuaW1wb3J0IHsgc2F2ZWRQcm9qZWN0cyB9IGZyb20gXCIuL2pzL2RhdGEvcHJvamVjdERhdGFcIjtcbmltcG9ydCBcIi4vY3NzL3N0eWxlLnNjc3NcIjtcblxuLy9ERUZBVUxUU1xuY29uc3QgREVGQVVMVF9USEVNRSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgXCJsaWdodFwiO1xuLy8gY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG4vLyBjb25zdCBzYXZlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcbi8vIGNvbnN0IGN1cnJlbnRseURvbmUgPSBzYXZlZFRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5jb21wbGV0ZSA9PT0gdHJ1ZSk7XG4vLyBjb25zdCBERUZBVUxUX1RBU0tTX0RPTkUgPSBjdXJyZW50bHlEb25lLmxlbmd0aDtcbi8vIGNvbnN0IERFRkFVTFRfVEFTS1NfVE9UQUwgPSBzYXZlZEJvb2tzLmxlbmd0aDtcblxuLy9URVNUIERBVEFcblxuLy9zdGF0ZSB2YXJpYWJsZXNcbi8vQUxMIFRBU0tTXG5jb25zdCB0b3RhbFRhc2tzID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IHNhdmVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0Y29uc3QgcHJvamVjdCA9IHNhdmVkUHJvamVjdHNbaV07XG5cdHRvdGFsVGFza3MucHVzaChwcm9qZWN0LnRhc2tzKTtcbn1cbi8vQUxMIFBST0pFQ1RTIChGT1IgUFJPSkVDVCBBQ0NPUkRJT04gQVNJREUpXG4vLy8vbmFtZXNcbmNvbnN0IHRvdGFsUHJvamVjdE5hbWVzID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IHNhdmVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0Y29uc3QgcHJvamVjdCA9IHNhdmVkUHJvamVjdHNbaV07XG5cdHRvdGFsUHJvamVjdE5hbWVzLnB1c2gocHJvamVjdC50aXRsZSk7XG59XG4vLy8vZG9tIGxvZ2ljXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1wYW5lbC1saXN0XCIpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFByb2plY3ROYW1lcy5sZW5ndGg7IGkrKykge1xuXHRjb25zdCBuYW1lID0gdG90YWxQcm9qZWN0TmFtZXNbaV07XG5cdGNvbnN0IGxpRWwgPSBkb21DcmVhdGUoXCJsaVwiLCBbXCJwcm9qZWN0LWxpc3QtaXRlbVwiXSk7XG5cdGxpRWwudGV4dENvbnRlbnQgPSBuYW1lO1xuXHRwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaUVsKTtcbn1cbi8vVEFTS1MgRk9SIEVBQ0ggUFJPSkVDVFxuLy8gcHJvamVjdERlbW8xLnRhc2tzO1xuXG5sZXQgY3VycmVudFRhc2tzID0gc2F2ZWRUYXNrcztcbmxldCBjdXJyZW50UHJvamVjdHMgPSBzYXZlZFByb2plY3RzO1xubGV0IGN1cnJlbnRUaGVtZSA9IERFRkFVTFRfVEhFTUU7XG4vLyBsZXQgY3VycmVudFRhc2tzRG9uZUNvdW50ID0gREVGQVVMVF9UQVNLU19ET05FO1xuLy8gbGV0IGN1cnJlbnRUYXNrc1RvdGFsQ291bnQgPSBERUZBVUxUX1RBU0tTX1RPVEFMO1xuLy9zdGF0ZSB2YXJpYWJsZSB1cGRhdGVzXG5mdW5jdGlvbiBzZXRDdXJyZW50VGFza3MobmV3VGFza3MpIHtcblx0Y3VycmVudFRhc2tzID0gbmV3VGFza3M7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG59XG5mdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdHMobmV3UHJvamVjdHMpIHtcblx0Y3VycmVudFByb2plY3RzID0gbmV3UHJvamVjdHM7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3RzKSk7XG59XG4vLyBmdW5jdGlvbiBzZXRUYXNrQ291bnRzKCkge1xuLy8gXHRjdXJyZW50VGFza3NEb25lQ291bnQgPSBERUZBVUxUX1RBU0tTX0RPTkU7XG4vLyBcdGN1cnJlbnRUYXNrc1RvdGFsQ291bnQgPSBERUZBVUxUX1RBU0tTX1RPVEFMO1xuLy8gfVxuXG4vL1BST0pFQ1QgQVNJREUgQUNDT1JESUFOXG5kb2N1bWVudFxuXHQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWFjY29yZGlvblwiKVxuXHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjY29yZGlvblRvZ2dsZSk7XG5cbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgdGFza0RlbW8xID0gY3JlYXRlVGFzayh7XG5cdHRpdGxlOiBcIldhbGsgdGhlIERvZ1wiLFxuXHRkZXNjcmlwdGlvbjogXCJ0YWtlIHRoZSBkb2dnbyBvbiBhIGxpbCBzdHJvbGxcIixcblx0ZHVlRGF0ZTogZGF0ZSxcblx0cHJpb3JpdHk6IDMsXG5cdG5vdGVzOiBcImF2b2lkIDl0aCBhbmQgRWxtIC0gYWdncmVzc2l2ZSBkb2dcIixcbn0pO1xuLy8gY29uc29sZS5sb2codGFza0RlbW8xKTtcblxuY29uc3QgcHJvamVjdERlbW8xID0gY3JlYXRlUHJvamVjdCh7XG5cdHRpdGxlOiBcIlBlcnNvbmFsXCIsXG5cdGRlc2NyaXB0aW9uOiBcInBsZWFzdXJlLCBub3QgYnVzaW5lc3NcIixcbn0pO1xucHJvamVjdERlbW8xLmFkZFRhc2t0b1Byb2plY3QodGFza0RlbW8xKTtcblxuLy9UQVNLL1BST0pFQ1QgRk9STVNcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWljb25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckFkZE1lbnUpO1xuZnVuY3Rpb24gcmVuZGVyQWRkTWVudSgpIHtcblx0Y29uc3QgYWRkSWNvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1pY29uLW1lbnVcIik7XG5cdGFkZEljb25NZW51LmNsYXNzTGlzdC50b2dnbGUoXCJpY29uLW1lbnUtdG9nZ2xlXCIpO1xufVxuLy9yZW5kZXIgZm9ybXNcbmRvY3VtZW50XG5cdC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWZvcm1cIilcblx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJUYXNrRm9ybSk7XG5kb2N1bWVudFxuXHQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1mb3JtXCIpXG5cdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyUHJvamVjdEZvcm0pO1xuLy90YXNrIGZvcm1cbmRvY3VtZW50XG5cdC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLXRhc2stZm9ybVwiKVxuXHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVGFza0Zvcm0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWNsZWFyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclRhc2tGb3JtKTtcbi8vLy8gdGFzayBzdWJtaXRcbmRvY3VtZW50XG5cdC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWJ0blwiKVxuXHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2tTdWJtaXQpO1xuZnVuY3Rpb24gYWRkVGFza1N1Ym1pdCgpIHtcblx0Y29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2soe1xuXHRcdHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtdGl0bGVcIikudmFsdWUsXG5cdFx0ZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kZXNjXCIpLnZhbHVlLFxuXHRcdGR1ZURhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kYXRlXCIpLnZhbHVlLFxuXHRcdHByaW9yaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtcHJpb3JpdHlcIikudmFsdWUsXG5cdFx0bm90ZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1ub3Rlc1wiKS52YWx1ZSxcblx0fSk7XG5cdGN1cnJlbnRUYXNrcy5wdXNoKG5ld1Rhc2spO1xuXHRzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza3MpKTtcblx0cmVuZGVyVGFza3MoKTtcblx0Y2xvc2VUYXNrRm9ybSgpO1xufVxuLy9wcm9qZWN0IGZvcm1cbmRvY3VtZW50XG5cdC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLXByb2plY3QtZm9ybVwiKVxuXHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUHJvamVjdEZvcm0pO1xuZG9jdW1lbnRcblx0LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jbGVhclwiKVxuXHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyUHJvamVjdEZvcm0pO1xuLy8vL3Byb2plY3Qgc3VibWl0XG5kb2N1bWVudFxuXHQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1idG5cIilcblx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0U3VibWl0KTtcbmZ1bmN0aW9uIGFkZFByb2plY3RTdWJtaXQoKSB7XG5cdGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHtcblx0XHR0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwLXRpdGxlXCIpLnZhbHVlLFxuXHRcdGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtZGVzY1wiKS52YWx1ZSxcblx0fSk7XG5cdC8vRklHVVJFIE9VVCBTVEFURSBGT1IgUFJPSkVDVFMgLy8vLy9cblx0Ly9SRUZSRVNIIFRPVEFMIFRBU0sgQVJSQVkgUFVMTFxuXHQvL2dldFRvdGFsVGFza3MoKTtcblx0Ly9BREQgVE8gUFJPSkVDVCBTUEVDSUZJQyBBUlJBWVxuXHR0b3RhbFByb2plY3ROYW1lcy5wdXNoKG5ld1Byb2plY3QudGl0bGUpO1xuXG5cdGN1cnJlbnRQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXHRzZXRDdXJyZW50UHJvamVjdHMoY3VycmVudFByb2plY3RzKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdHMpKTtcblx0Ly8gcmVuZGVyVGFza3MoKTtcblx0Y2xvc2VQcm9qZWN0Rm9ybSgpO1xufVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXHQvLyBzZXRDdXJyZW50VGhlbWUoREVGQVVMVF9USEVNRSk7XG5cdHNldEN1cnJlbnRUYXNrcyhjdXJyZW50VGFza3MpO1xuXHRzZXRDdXJyZW50UHJvamVjdHMoY3VycmVudFByb2plY3RzKTtcblx0cmVuZGVyVGFza3MoKTtcbn07XG4iLCIvLyBET00gRlVOQ1RJT05cblxuLy9hcmcgMSA9IG5hbWUgb2YgSFRNTCBlbGVtZW50XG4vLyBhcmcgMiA9IGNsYXNzIG5hbWVzIHRvIGFkZFxuLy8gYXJnIDMgPSBvYmplY3QgLSBhdHRyaWJ1dGVzIHRvIGFkZCAtPiBhdHRyaWJ1dGUgOiB2YWx1ZVxuZnVuY3Rpb24gZG9tQ3JlYXRlKGFyZzEsIGFyZzIsIGFyZzMpIHtcblx0Ly9hcmcgMSA9IFwic3RyaW5nXCIgLSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmcxKTtcblx0Ly8gYXJnIDIgPSBbXCJhcnJheSBvZiBzdHJpbmdzXCJdIC0gY2xhc3MgbmFtZXMgdG8gYWRkXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJnMi5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IGFyZzJbaV07XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdH1cblx0Ly8gYXJnIDMgPSB7b2JqZWN0fSAtIGF0dHJpYnV0ZSBuYW1lIDogdmFsdWVcblx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgaW4gYXJnMykge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXJnM1thdHRyaWJ1dGVdKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IHsgZG9tQ3JlYXRlIH07XG4iLCJjb25zdCBjcmVhdGVUYXNrID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMgfSkgPT4gKHtcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHRkdWVEYXRlLFxuXHRwcmlvcml0eSxcblx0bm90ZXMsXG5cdHByaW50VGFzaygpIHtcblx0XHRyZXR1cm4gYCR7dGhpcy50aXRsZX06ICR7dGhpcy5kZXNjcmlwdGlvbn1gO1xuXHR9LFxufSk7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4gKHtcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHR0YXNrczogW10sXG5cdHByaW50UHJvamVjdCgpIHtcblx0XHRyZXR1cm4gYFByb2plY3QgJHt0aGlzLnRpdGxlfTogJHt0aGlzLmRlc2NyaXB0aW9ufWA7XG5cdH0sXG5cdHByaW50VGFza3MoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy50YXNrcyk7XG5cdH0sXG5cdGFkZFRhc2t0b1Byb2plY3QodGFzaykge1xuXHRcdHRoaXMudGFza3MucHVzaCh0YXNrKTtcblx0fSxcbn0pO1xuXG5leHBvcnQgeyBjcmVhdGVUYXNrLCBjcmVhdGVQcm9qZWN0IH07XG4iLCJjb25zdCBzYXZlZFByb2plY3RzID0gW1xuXHR7XG5cdFx0dGl0bGU6IFwiTGF3bm1vd2VyXCIsXG5cdFx0ZGVzY3JpcHRpb246IFwibGFuZHNjYXBpbmcgcHJvamVjdFwiLFxuXHRcdHRhc2tzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIk1vdyB0aGUgbGF3blwiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFx0XHRcImdldCBvdXQgdGhlcmUgd2l0aCB0aGUgZGFuZyBtb3dlciBhbmQgbW93IHRoYXQgdGhlcmUgbGF3biB0aGVyZVwiLFxuXHRcdFx0XHRkdWVEYXRlOiBcIjIwMjItMDctMjlcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwiMVwiLFxuXHRcdFx0XHRub3RlczogXCJSZXR1cm4gbW93ZXIgdG8gbmVpZ2hib3Igd2hlbiBmaW5pc2hlZFwiLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiQW5vdGhlciBQcm9qZWN0XCIsXG5cdFx0ZGVzY3JpcHRpb246IFwibWlzY2VsbGFuZW91cyB0YXNrc1wiLFxuXHRcdHRhc2tzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIldhbGsgdGhlIGRvZ1wiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJsZWFzaCwgb3BlbiBkb29yLCB3YWxrIGFyb3VuZCwgY29tZSBiYWNrXCIsXG5cdFx0XHRcdGR1ZURhdGU6IFwiMjAyMi0wOC0xMlwiLFxuXHRcdFx0XHRwcmlvcml0eTogXCIyXCIsXG5cdFx0XHRcdG5vdGVzOiBcImF2b2lkIG90aGVyIGRvZ3MhXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJDb29rIGRpbm5lclwiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJjaGlja2VuIHRpa2thIG1hc2FsYSwgdy8gamFzbWluZSByaWNlLCBhbmQgc2Ftb3Nhc1wiLFxuXHRcdFx0XHRkdWVEYXRlOiBcIjIwMjItMDYtMTJcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwiM1wiLFxuXHRcdFx0XHRub3RlczogXCJubyBwZWFudXRzIVwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiUmVhZCAnT2N0b2JlcicgQm9va1wiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJyZWFkIGF0IGxlYXN0IDQwIHBhZ2VzIHRvZGF5XCIsXG5cdFx0XHRcdGR1ZURhdGU6IFwiMjAyMi0wOC0xMlwiLFxuXHRcdFx0XHRwcmlvcml0eTogXCI1XCIsXG5cdFx0XHRcdG5vdGVzOiBcIlwiLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiQSBUaGlyZCBQcm9qZWN0IGZvciB0aGUgTGlzdFwiLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XCJsb25nZXIgZGVzY3JpcHRpb24gZm9yIGEgbW9yZSBjb21wbGljYXRlZCB0YXNrIHByb2plY3QgYnJlYWtkb3duXCIsXG5cdFx0dGFza3M6IFtcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiUmVhZCAnT2N0b2JlcicgQm9va1wiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJyZWFkIGF0IGxlYXN0IDQwIHBhZ2VzIHRvZGF5XCIsXG5cdFx0XHRcdGR1ZURhdGU6IFwiMjAyMi0wOC0xMlwiLFxuXHRcdFx0XHRwcmlvcml0eTogXCI1XCIsXG5cdFx0XHRcdG5vdGVzOiBcIlwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiQnV5IHJvc2VzXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIjIgZG96ZW4gcm9zZXMgZnJvbSBTYWZld2F5XCIsXG5cdFx0XHRcdGR1ZURhdGU6IFwiMjAyMi0wOC0xMlwiLFxuXHRcdFx0XHRwcmlvcml0eTogXCI1XCIsXG5cdFx0XHRcdG5vdGVzOiBcInJlZCByb3Nlc1wiLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXTtcblxuZXhwb3J0IHsgc2F2ZWRQcm9qZWN0cyB9O1xuIiwiY29uc3Qgc2F2ZWRUYXNrcyA9IFtcblx0e1xuXHRcdHRpdGxlOiBcIk1vdyB0aGUgbGF3blwiLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XCJnZXQgb3V0IHRoZXJlIHdpdGggdGhlIGRhbmcgbW93ZXIgYW5kIG1vdyB0aGF0IHRoZXJlIGxhd24gdGhlcmVcIixcblx0XHRkdWVEYXRlOiBcIjIwMjItMDctMjlcIixcblx0XHRwcmlvcml0eTogXCIxXCIsXG5cdFx0bm90ZXM6IFwiUmV0dXJuIG1vd2VyIHRvIG5laWdoYm9yIHdoZW4gZmluaXNoZWRcIixcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIldhbGsgdGhlIGRvZ1wiLFxuXHRcdGRlc2NyaXB0aW9uOiBcImxlYXNoLCBvcGVuIGRvb3IsIHdhbGsgYXJvdW5kLCBjb21lIGJhY2tcIixcblx0XHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0XHRwcmlvcml0eTogXCIyXCIsXG5cdFx0bm90ZXM6IFwiYXZvaWQgb3RoZXIgZG9ncyFcIixcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIkNvb2sgZGlubmVyXCIsXG5cdFx0ZGVzY3JpcHRpb246IFwiY2hpY2tlbiB0aWtrYSBtYXNhbGEsIHcvIGphc21pbmUgcmljZSwgYW5kIHNhbW9zYXNcIixcblx0XHRkdWVEYXRlOiBcIjIwMjItMDYtMTJcIixcblx0XHRwcmlvcml0eTogXCIzXCIsXG5cdFx0bm90ZXM6IFwibm8gcGVhbnV0cyFcIixcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIlJlYWQgJ09jdG9iZXInIEJvb2tcIixcblx0XHRkZXNjcmlwdGlvbjogXCJyZWFkIGF0IGxlYXN0IDQwIHBhZ2VzIHRvZGF5XCIsXG5cdFx0ZHVlRGF0ZTogXCIyMDIyLTA4LTEyXCIsXG5cdFx0cHJpb3JpdHk6IFwiNVwiLFxuXHRcdG5vdGVzOiBcIlwiLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiQnV5IHJvc2VzXCIsXG5cdFx0ZGVzY3JpcHRpb246IFwiMiBkb3plbiByb3NlcyBmcm9tIFNhZmV3YXlcIixcblx0XHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0XHRwcmlvcml0eTogXCI1XCIsXG5cdFx0bm90ZXM6IFwicmVkIHJvc2VzXCIsXG5cdH0sXG5dO1xuXG5leHBvcnQgeyBzYXZlZFRhc2tzIH07XG4iLCJjb25zdCBhY2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtYWNjb3JkaW9uXCIpO1xuY29uc3QgYWNjUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtcGFuZWwtZGlzcGxheVwiKTtcbmZ1bmN0aW9uIGFjY29yZGlvblRvZ2dsZSgpIHtcblx0YWNjLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cdGlmIChhY2NQYW5lbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcblx0XHRhY2NQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdH0gZWxzZSB7XG5cdFx0YWNjUGFuZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0fVxufVxuXG5leHBvcnQgeyBhY2NvcmRpb25Ub2dnbGUgfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuL0RPTVwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcblxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG5cdGNvbnN0IGN1cnJlbnRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG5cdC8vIGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG5cdGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGVudFwiKTtcblx0Ly9jbGVhciBjdXJyZW50IHRhc2tzXG5cdHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0Ly9yZW5kZXIgY3VycmVudFRhc2tzIHRhc2tzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdGFzayA9IGN1cnJlbnRUYXNrc1tpXTtcblx0XHRjb25zdCB0YXNrQ2FyZCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWNhcmRcIl0sIHsgXCJkYXRhLWluZGV4XCI6IGkgfSk7XG5cdFx0Ly9pbm5lciB0YXNrIGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly9USVRMRVxuXHRcdGNvbnN0IHRhc2tUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXRpdGxlXCJdKTtcblx0XHR0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRcdC8vREVTQ1JJUFRJT05cblx0XHRjb25zdCB0YXNrRGVzYyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRlc2NyaXB0aW9uXCJdKTtcblx0XHR0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cdFx0Ly9EVUUgREFURVxuXHRcdGNvbnN0IHRhc2tEYXRlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGF0ZVwiXSk7XG5cdFx0dGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cdFx0Ly9QUklPUklUWVxuXHRcdGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXByaW9yaXR5XCJdKTtcblx0XHR0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXHRcdC8vTk9URVNcblx0XHRjb25zdCB0YXNrTm90ZXMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1ub3Rlc1wiXSk7XG5cdFx0dGFza05vdGVzLnRleHRDb250ZW50ID0gdGFzay5ub3Rlcztcblx0XHQvL0RFTEVURSBJQ09OXG5cdFx0Y29uc3QgdGFza0RlbGV0ZUljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgW1widGFzay1kZWxldGVcIl0sIHtcblx0XHRcdHNyYzogZGVsZXRlSWNvbixcblx0XHRcdGFsdDogXCJ0cmFzaCBjYW4gZGVsZXRlIGljb25cIixcblx0XHR9KTtcblx0XHR0YXNrRGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0dGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUodGFza0NhcmQpO1xuXHRcdFx0bGV0IGluZGV4ID0gdGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXHRcdFx0Y3VycmVudFRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG5cdFx0XHRyZW5kZXJUYXNrcygpO1xuXHRcdH0pO1xuXHRcdC8vQVBQRU5EIEVMRU1FTlRTXG5cdFx0dGFza0NhcmQuYXBwZW5kKFxuXHRcdFx0dGFza1RpdGxlLFxuXHRcdFx0dGFza0Rlc2MsXG5cdFx0XHR0YXNrRGF0ZSxcblx0XHRcdHRhc2tQcmlvcml0eSxcblx0XHRcdHRhc2tOb3Rlcyxcblx0XHRcdHRhc2tEZWxldGVJY29uXG5cdFx0KTtcblx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblx0fVxufVxuXG5leHBvcnQgeyByZW5kZXJUYXNrcyB9O1xuIiwiY29uc3QgYWRkVGFza0Zvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Rhc2tfc2VjdGlvblwiKTtcbmZ1bmN0aW9uIHJlbmRlclRhc2tGb3JtKCkge1xuXHRhZGRUYXNrRm9ybUVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogYmxvY2s7XCIpO1xufVxuY29uc3QgYWRkUHJvamVjdEZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Byb2plY3Rfc2VjdGlvblwiKTtcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RGb3JtKCkge1xuXHRhZGRQcm9qZWN0Rm9ybUVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogYmxvY2s7XCIpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrU3VibWl0KCkge1xuXHRjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayh7XG5cdFx0dGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC10aXRsZVwiKS52YWx1ZS52YWx1ZSxcblx0XHRkZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LWRlc2NcIikudmFsdWUudmFsdWUsXG5cdFx0ZHVlRGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LWRhdGVcIikudmFsdWUudmFsdWUsXG5cdFx0cHJpb3JpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1wcmlvcml0eVwiKS52YWx1ZS52YWx1ZSxcblx0XHRub3RlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LW5vdGVzXCIpLnZhbHVlLnZhbHVlLFxuXHR9KTtcblx0Y3VycmVudFRhc2tzLnB1c2gobmV3VGFzayk7XG5cdHNldEN1cnJlbnRUYXNrcyhjdXJyZW50VGFza3MpO1xuXHRjb25zb2xlLmxvZyhjdXJyZW50VGFza3MpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrcykpO1xuXHRyZW5kZXJUYXNrcygpO1xuXHRjbG9zZUZvcm0oKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrRm9ybSgpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXRpdGxlXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LWRlc2NcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGF0ZVwiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1wcmlvcml0eVwiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1ub3Rlc1wiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10YXNrLWFkZFwiKS5vcHRpb25zLnNlbGVjdGVkSW5kZXggPSAwO1xufVxuXG5mdW5jdGlvbiBjbG9zZVRhc2tGb3JtKCkge1xuXHRhZGRUYXNrRm9ybUVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUHJvamVjdEZvcm0oKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcC10aXRsZVwiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcC1kZXNjXCIpLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY2xvc2VQcm9qZWN0Rm9ybSgpIHtcblx0YWRkUHJvamVjdEZvcm1FbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xufVxuXG5leHBvcnQge1xuXHRyZW5kZXJUYXNrRm9ybSxcblx0cmVuZGVyUHJvamVjdEZvcm0sXG5cdGNsZWFyVGFza0Zvcm0sXG5cdGNsb3NlVGFza0Zvcm0sXG5cdGNsZWFyUHJvamVjdEZvcm0sXG5cdGNsb3NlUHJvamVjdEZvcm0sXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9