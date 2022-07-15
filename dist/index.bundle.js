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
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _js_data_taskData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/data/taskData */ "./src/js/data/taskData.js");
/* harmony import */ var _js_data_projectData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/data/projectData */ "./src/js/data/projectData.js");






//Demo data



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
for (let i = 0; i < _js_data_projectData__WEBPACK_IMPORTED_MODULE_7__.savedProjects.length; i++) {
	const project = _js_data_projectData__WEBPACK_IMPORTED_MODULE_7__.savedProjects[i];
	totalTasks.push(project.tasks);
}
//ALL PROJECTS (FOR PROJECT ACCORDION ASIDE)
////names
const totalProjectNames = [];
for (let i = 0; i < _js_data_projectData__WEBPACK_IMPORTED_MODULE_7__.savedProjects.length; i++) {
	const project = _js_data_projectData__WEBPACK_IMPORTED_MODULE_7__.savedProjects[i];
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

let currentTasks = _js_data_taskData__WEBPACK_IMPORTED_MODULE_6__.savedTasks;
let currentProjects = _js_data_projectData__WEBPACK_IMPORTED_MODULE_7__.savedProjects;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEdkI7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRDtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFTRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGUuc2Nzcz82MmFmIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2RhdGEvcHJvamVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2RhdGEvdGFza0RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3Byb2plY3RBY2MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdGFza0Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgY3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2pzL2NyZWF0ZVwiO1xuaW1wb3J0IHtcblx0cmVuZGVyVGFza0Zvcm0sXG5cdHJlbmRlclByb2plY3RGb3JtLFxuXHRjbGVhclRhc2tGb3JtLFxuXHRjbG9zZVRhc2tGb3JtLFxuXHRjbGVhclByb2plY3RGb3JtLFxuXHRjbG9zZVByb2plY3RGb3JtLFxufSBmcm9tIFwiLi9qcy90YXNrRm9ybVwiO1xuaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4vanMvRE9NXCI7XG5pbXBvcnQgeyByZW5kZXJUYXNrcyB9IGZyb20gXCIuL2pzL3JlbmRlclwiO1xuaW1wb3J0IHsgYWNjb3JkaW9uVG9nZ2xlIH0gZnJvbSBcIi4vanMvcHJvamVjdEFjY1wiO1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuc2Nzc1wiO1xuLy9EZW1vIGRhdGFcbmltcG9ydCB7IHNhdmVkVGFza3MgfSBmcm9tIFwiLi9qcy9kYXRhL3Rhc2tEYXRhXCI7XG5pbXBvcnQgeyBzYXZlZFByb2plY3RzIH0gZnJvbSBcIi4vanMvZGF0YS9wcm9qZWN0RGF0YVwiO1xuXG4vL0RFRkFVTFRTXG5jb25zdCBERUZBVUxUX1RIRU1FID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSB8fCBcImxpZ2h0XCI7XG4vLyBjb25zdCBzYXZlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcbi8vIGNvbnN0IHNhdmVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuLy8gY29uc3QgY3VycmVudGx5RG9uZSA9IHNhdmVkVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmNvbXBsZXRlID09PSB0cnVlKTtcbi8vIGNvbnN0IERFRkFVTFRfVEFTS1NfRE9ORSA9IGN1cnJlbnRseURvbmUubGVuZ3RoO1xuLy8gY29uc3QgREVGQVVMVF9UQVNLU19UT1RBTCA9IHNhdmVkQm9va3MubGVuZ3RoO1xuXG4vL1RFU1QgREFUQVxuXG4vL3N0YXRlIHZhcmlhYmxlc1xuLy9BTEwgVEFTS1NcbmNvbnN0IHRvdGFsVGFza3MgPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRjb25zdCBwcm9qZWN0ID0gc2F2ZWRQcm9qZWN0c1tpXTtcblx0dG90YWxUYXNrcy5wdXNoKHByb2plY3QudGFza3MpO1xufVxuLy9BTEwgUFJPSkVDVFMgKEZPUiBQUk9KRUNUIEFDQ09SRElPTiBBU0lERSlcbi8vLy9uYW1lc1xuY29uc3QgdG90YWxQcm9qZWN0TmFtZXMgPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRjb25zdCBwcm9qZWN0ID0gc2F2ZWRQcm9qZWN0c1tpXTtcblx0dG90YWxQcm9qZWN0TmFtZXMucHVzaChwcm9qZWN0LnRpdGxlKTtcbn1cbi8vLy9kb20gbG9naWNcbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXBhbmVsLWxpc3RcIik7XG5mb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsUHJvamVjdE5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdGNvbnN0IG5hbWUgPSB0b3RhbFByb2plY3ROYW1lc1tpXTtcblx0Y29uc3QgbGlFbCA9IGRvbUNyZWF0ZShcImxpXCIsIFtcInByb2plY3QtbGlzdC1pdGVtXCJdKTtcblx0bGlFbC50ZXh0Q29udGVudCA9IG5hbWU7XG5cdHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpRWwpO1xufVxuLy9UQVNLUyBGT1IgRUFDSCBQUk9KRUNUXG4vLyBwcm9qZWN0RGVtbzEudGFza3M7XG5cbmxldCBjdXJyZW50VGFza3MgPSBzYXZlZFRhc2tzO1xubGV0IGN1cnJlbnRQcm9qZWN0cyA9IHNhdmVkUHJvamVjdHM7XG5sZXQgY3VycmVudFRoZW1lID0gREVGQVVMVF9USEVNRTtcbi8vIGxldCBjdXJyZW50VGFza3NEb25lQ291bnQgPSBERUZBVUxUX1RBU0tTX0RPTkU7XG4vLyBsZXQgY3VycmVudFRhc2tzVG90YWxDb3VudCA9IERFRkFVTFRfVEFTS1NfVE9UQUw7XG4vL3N0YXRlIHZhcmlhYmxlIHVwZGF0ZXNcbmZ1bmN0aW9uIHNldEN1cnJlbnRUYXNrcyhuZXdUYXNrcykge1xuXHRjdXJyZW50VGFza3MgPSBuZXdUYXNrcztcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza3MpKTtcbn1cbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0cyhuZXdQcm9qZWN0cykge1xuXHRjdXJyZW50UHJvamVjdHMgPSBuZXdQcm9qZWN0cztcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdHMpKTtcbn1cbi8vIGZ1bmN0aW9uIHNldFRhc2tDb3VudHMoKSB7XG4vLyBcdGN1cnJlbnRUYXNrc0RvbmVDb3VudCA9IERFRkFVTFRfVEFTS1NfRE9ORTtcbi8vIFx0Y3VycmVudFRhc2tzVG90YWxDb3VudCA9IERFRkFVTFRfVEFTS1NfVE9UQUw7XG4vLyB9XG5cbi8vUFJPSkVDVCBBU0lERSBBQ0NPUkRJQU5cbmRvY3VtZW50XG5cdC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtYWNjb3JkaW9uXCIpXG5cdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjb3JkaW9uVG9nZ2xlKTtcblxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCB0YXNrRGVtbzEgPSBjcmVhdGVUYXNrKHtcblx0dGl0bGU6IFwiV2FsayB0aGUgRG9nXCIsXG5cdGRlc2NyaXB0aW9uOiBcInRha2UgdGhlIGRvZ2dvIG9uIGEgbGlsIHN0cm9sbFwiLFxuXHRkdWVEYXRlOiBkYXRlLFxuXHRwcmlvcml0eTogMyxcblx0bm90ZXM6IFwiYXZvaWQgOXRoIGFuZCBFbG0gLSBhZ2dyZXNzaXZlIGRvZ1wiLFxufSk7XG4vLyBjb25zb2xlLmxvZyh0YXNrRGVtbzEpO1xuXG5jb25zdCBwcm9qZWN0RGVtbzEgPSBjcmVhdGVQcm9qZWN0KHtcblx0dGl0bGU6IFwiUGVyc29uYWxcIixcblx0ZGVzY3JpcHRpb246IFwicGxlYXN1cmUsIG5vdCBidXNpbmVzc1wiLFxufSk7XG5wcm9qZWN0RGVtbzEuYWRkVGFza3RvUHJvamVjdCh0YXNrRGVtbzEpO1xuXG4vL1RBU0svUFJPSkVDVCBGT1JNU1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtaWNvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyQWRkTWVudSk7XG5mdW5jdGlvbiByZW5kZXJBZGRNZW51KCkge1xuXHRjb25zdCBhZGRJY29uTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWljb24tbWVudVwiKTtcblx0YWRkSWNvbk1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImljb24tbWVudS10b2dnbGVcIik7XG59XG4vL3JlbmRlciBmb3Jtc1xuZG9jdW1lbnRcblx0LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stZm9ybVwiKVxuXHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRhc2tGb3JtKTtcbmRvY3VtZW50XG5cdC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWZvcm1cIilcblx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJQcm9qZWN0Rm9ybSk7XG4vL3Rhc2sgZm9ybVxuZG9jdW1lbnRcblx0LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtdGFzay1mb3JtXCIpXG5cdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUYXNrRm9ybSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stY2xlYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyVGFza0Zvcm0pO1xuLy8vLyB0YXNrIHN1Ym1pdFxuZG9jdW1lbnRcblx0LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stYnRuXCIpXG5cdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza1N1Ym1pdCk7XG5mdW5jdGlvbiBhZGRUYXNrU3VibWl0KCkge1xuXHRjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayh7XG5cdFx0dGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC10aXRsZVwiKS52YWx1ZSxcblx0XHRkZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LWRlc2NcIikudmFsdWUsXG5cdFx0ZHVlRGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LWRhdGVcIikudmFsdWUsXG5cdFx0cHJpb3JpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1wcmlvcml0eVwiKS52YWx1ZSxcblx0XHRub3RlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LW5vdGVzXCIpLnZhbHVlLFxuXHR9KTtcblx0Y3VycmVudFRhc2tzLnB1c2gobmV3VGFzayk7XG5cdHNldEN1cnJlbnRUYXNrcyhjdXJyZW50VGFza3MpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrcykpO1xuXHRyZW5kZXJUYXNrcygpO1xuXHRjbG9zZVRhc2tGb3JtKCk7XG59XG4vL3Byb2plY3QgZm9ybVxuZG9jdW1lbnRcblx0LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtcHJvamVjdC1mb3JtXCIpXG5cdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQcm9qZWN0Rm9ybSk7XG5kb2N1bWVudFxuXHQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWNsZWFyXCIpXG5cdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJQcm9qZWN0Rm9ybSk7XG4vLy8vcHJvamVjdCBzdWJtaXRcbmRvY3VtZW50XG5cdC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWJ0blwiKVxuXHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3RTdWJtaXQpO1xuZnVuY3Rpb24gYWRkUHJvamVjdFN1Ym1pdCgpIHtcblx0Y29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3Qoe1xuXHRcdHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtdGl0bGVcIikudmFsdWUsXG5cdFx0ZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcC1kZXNjXCIpLnZhbHVlLFxuXHR9KTtcblx0Ly9GSUdVUkUgT1VUIFNUQVRFIEZPUiBQUk9KRUNUUyAvLy8vL1xuXHQvL1JFRlJFU0ggVE9UQUwgVEFTSyBBUlJBWSBQVUxMXG5cdC8vZ2V0VG90YWxUYXNrcygpO1xuXHQvL0FERCBUTyBQUk9KRUNUIFNQRUNJRklDIEFSUkFZXG5cdHRvdGFsUHJvamVjdE5hbWVzLnB1c2gobmV3UHJvamVjdC50aXRsZSk7XG5cblx0Y3VycmVudFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG5cdHNldEN1cnJlbnRQcm9qZWN0cyhjdXJyZW50UHJvamVjdHMpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0cykpO1xuXHQvLyByZW5kZXJUYXNrcygpO1xuXHRjbG9zZVByb2plY3RGb3JtKCk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cdC8vIHNldEN1cnJlbnRUaGVtZShERUZBVUxUX1RIRU1FKTtcblx0c2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdHNldEN1cnJlbnRQcm9qZWN0cyhjdXJyZW50UHJvamVjdHMpO1xuXHRyZW5kZXJUYXNrcygpO1xufTtcbiIsIi8vIERPTSBGVU5DVElPTlxuXG4vL2FyZyAxID0gbmFtZSBvZiBIVE1MIGVsZW1lbnRcbi8vIGFyZyAyID0gY2xhc3MgbmFtZXMgdG8gYWRkXG4vLyBhcmcgMyA9IG9iamVjdCAtIGF0dHJpYnV0ZXMgdG8gYWRkIC0+IGF0dHJpYnV0ZSA6IHZhbHVlXG5mdW5jdGlvbiBkb21DcmVhdGUoYXJnMSwgYXJnMiwgYXJnMykge1xuXHQvL2FyZyAxID0gXCJzdHJpbmdcIiAtIG5hbWUgb2YgSFRNTCBlbGVtZW50XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZzEpO1xuXHQvLyBhcmcgMiA9IFtcImFycmF5IG9mIHN0cmluZ3NcIl0gLSBjbGFzcyBuYW1lcyB0byBhZGRcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmcyLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gYXJnMltpXTtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0fVxuXHQvLyBhcmcgMyA9IHtvYmplY3R9IC0gYXR0cmlidXRlIG5hbWUgOiB2YWx1ZVxuXHRmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhcmczKSB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhcmczW2F0dHJpYnV0ZV0pO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgeyBkb21DcmVhdGUgfTtcbiIsImNvbnN0IGNyZWF0ZVRhc2sgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcyB9KSA9PiAoe1xuXHR0aXRsZSxcblx0ZGVzY3JpcHRpb24sXG5cdGR1ZURhdGUsXG5cdHByaW9yaXR5LFxuXHRub3Rlcyxcblx0cHJpbnRUYXNrKCkge1xuXHRcdHJldHVybiBgJHt0aGlzLnRpdGxlfTogJHt0aGlzLmRlc2NyaXB0aW9ufWA7XG5cdH0sXG59KTtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiAoe1xuXHR0aXRsZSxcblx0ZGVzY3JpcHRpb24sXG5cdHRhc2tzOiBbXSxcblx0cHJpbnRQcm9qZWN0KCkge1xuXHRcdHJldHVybiBgUHJvamVjdCAke3RoaXMudGl0bGV9OiAke3RoaXMuZGVzY3JpcHRpb259YDtcblx0fSxcblx0cHJpbnRUYXNrcygpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnRhc2tzKTtcblx0fSxcblx0YWRkVGFza3RvUHJvamVjdCh0YXNrKSB7XG5cdFx0dGhpcy50YXNrcy5wdXNoKHRhc2spO1xuXHR9LFxufSk7XG5cbmV4cG9ydCB7IGNyZWF0ZVRhc2ssIGNyZWF0ZVByb2plY3QgfTtcbiIsImNvbnN0IHNhdmVkUHJvamVjdHMgPSBbXG5cdHtcblx0XHR0aXRsZTogXCJMYXdubW93ZXJcIixcblx0XHRkZXNjcmlwdGlvbjogXCJsYW5kc2NhcGluZyBwcm9qZWN0XCIsXG5cdFx0dGFza3M6IFtcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiTW93IHRoZSBsYXduXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHRcdFwiZ2V0IG91dCB0aGVyZSB3aXRoIHRoZSBkYW5nIG1vd2VyIGFuZCBtb3cgdGhhdCB0aGVyZSBsYXduIHRoZXJlXCIsXG5cdFx0XHRcdGR1ZURhdGU6IFwiMjAyMi0wNy0yOVwiLFxuXHRcdFx0XHRwcmlvcml0eTogXCIxXCIsXG5cdFx0XHRcdG5vdGVzOiBcIlJldHVybiBtb3dlciB0byBuZWlnaGJvciB3aGVuIGZpbmlzaGVkXCIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJBbm90aGVyIFByb2plY3RcIixcblx0XHRkZXNjcmlwdGlvbjogXCJtaXNjZWxsYW5lb3VzIHRhc2tzXCIsXG5cdFx0dGFza3M6IFtcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiV2FsayB0aGUgZG9nXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcImxlYXNoLCBvcGVuIGRvb3IsIHdhbGsgYXJvdW5kLCBjb21lIGJhY2tcIixcblx0XHRcdFx0ZHVlRGF0ZTogXCIyMDIyLTA4LTEyXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcIjJcIixcblx0XHRcdFx0bm90ZXM6IFwiYXZvaWQgb3RoZXIgZG9ncyFcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIkNvb2sgZGlubmVyXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcImNoaWNrZW4gdGlra2EgbWFzYWxhLCB3LyBqYXNtaW5lIHJpY2UsIGFuZCBzYW1vc2FzXCIsXG5cdFx0XHRcdGR1ZURhdGU6IFwiMjAyMi0wNi0xMlwiLFxuXHRcdFx0XHRwcmlvcml0eTogXCIzXCIsXG5cdFx0XHRcdG5vdGVzOiBcIm5vIHBlYW51dHMhXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJSZWFkICdPY3RvYmVyJyBCb29rXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcInJlYWQgYXQgbGVhc3QgNDAgcGFnZXMgdG9kYXlcIixcblx0XHRcdFx0ZHVlRGF0ZTogXCIyMDIyLTA4LTEyXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcIjVcIixcblx0XHRcdFx0bm90ZXM6IFwiXCIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJBIFRoaXJkIFByb2plY3QgZm9yIHRoZSBMaXN0XCIsXG5cdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcImxvbmdlciBkZXNjcmlwdGlvbiBmb3IgYSBtb3JlIGNvbXBsaWNhdGVkIHRhc2sgcHJvamVjdCBicmVha2Rvd25cIixcblx0XHR0YXNrczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJSZWFkICdPY3RvYmVyJyBCb29rXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcInJlYWQgYXQgbGVhc3QgNDAgcGFnZXMgdG9kYXlcIixcblx0XHRcdFx0ZHVlRGF0ZTogXCIyMDIyLTA4LTEyXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcIjVcIixcblx0XHRcdFx0bm90ZXM6IFwiXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJCdXkgcm9zZXNcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiMiBkb3plbiByb3NlcyBmcm9tIFNhZmV3YXlcIixcblx0XHRcdFx0ZHVlRGF0ZTogXCIyMDIyLTA4LTEyXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcIjVcIixcblx0XHRcdFx0bm90ZXM6IFwicmVkIHJvc2VzXCIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5dO1xuXG5leHBvcnQgeyBzYXZlZFByb2plY3RzIH07XG4iLCJjb25zdCBzYXZlZFRhc2tzID0gW1xuXHR7XG5cdFx0dGl0bGU6IFwiTW93IHRoZSBsYXduXCIsXG5cdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcImdldCBvdXQgdGhlcmUgd2l0aCB0aGUgZGFuZyBtb3dlciBhbmQgbW93IHRoYXQgdGhlcmUgbGF3biB0aGVyZVwiLFxuXHRcdGR1ZURhdGU6IFwiMjAyMi0wNy0yOVwiLFxuXHRcdHByaW9yaXR5OiBcIjFcIixcblx0XHRub3RlczogXCJSZXR1cm4gbW93ZXIgdG8gbmVpZ2hib3Igd2hlbiBmaW5pc2hlZFwiLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiV2FsayB0aGUgZG9nXCIsXG5cdFx0ZGVzY3JpcHRpb246IFwibGVhc2gsIG9wZW4gZG9vciwgd2FsayBhcm91bmQsIGNvbWUgYmFja1wiLFxuXHRcdGR1ZURhdGU6IFwiMjAyMi0wOC0xMlwiLFxuXHRcdHByaW9yaXR5OiBcIjJcIixcblx0XHRub3RlczogXCJhdm9pZCBvdGhlciBkb2dzIVwiLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiQ29vayBkaW5uZXJcIixcblx0XHRkZXNjcmlwdGlvbjogXCJjaGlja2VuIHRpa2thIG1hc2FsYSwgdy8gamFzbWluZSByaWNlLCBhbmQgc2Ftb3Nhc1wiLFxuXHRcdGR1ZURhdGU6IFwiMjAyMi0wNi0xMlwiLFxuXHRcdHByaW9yaXR5OiBcIjNcIixcblx0XHRub3RlczogXCJubyBwZWFudXRzIVwiLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiUmVhZCAnT2N0b2JlcicgQm9va1wiLFxuXHRcdGRlc2NyaXB0aW9uOiBcInJlYWQgYXQgbGVhc3QgNDAgcGFnZXMgdG9kYXlcIixcblx0XHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0XHRwcmlvcml0eTogXCI1XCIsXG5cdFx0bm90ZXM6IFwiXCIsXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJCdXkgcm9zZXNcIixcblx0XHRkZXNjcmlwdGlvbjogXCIyIGRvemVuIHJvc2VzIGZyb20gU2FmZXdheVwiLFxuXHRcdGR1ZURhdGU6IFwiMjAyMi0wOC0xMlwiLFxuXHRcdHByaW9yaXR5OiBcIjVcIixcblx0XHRub3RlczogXCJyZWQgcm9zZXNcIixcblx0fSxcbl07XG5cbmV4cG9ydCB7IHNhdmVkVGFza3MgfTtcbiIsImNvbnN0IGFjYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1hY2NvcmRpb25cIik7XG5jb25zdCBhY2NQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1wYW5lbC1kaXNwbGF5XCIpO1xuZnVuY3Rpb24gYWNjb3JkaW9uVG9nZ2xlKCkge1xuXHRhY2MuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0aWYgKGFjY1BhbmVsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuXHRcdGFjY1BhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fSBlbHNlIHtcblx0XHRhY2NQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHR9XG59XG5cbmV4cG9ydCB7IGFjY29yZGlvblRvZ2dsZSB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4vRE9NXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi4vYXNzZXRzL3RyYXNoLWNhbi1vdXRsaW5lLnBuZ1wiO1xuXG5mdW5jdGlvbiByZW5kZXJUYXNrcygpIHtcblx0Y29uc3QgY3VycmVudFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcblx0Ly8gY29uc3QgY3VycmVudFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuXHQvL2NsZWFyIGN1cnJlbnQgdGFza3Ncblx0dGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXHQvL3JlbmRlciBjdXJyZW50VGFza3MgdGFza3Ncblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50VGFza3MubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCB0YXNrID0gY3VycmVudFRhc2tzW2ldO1xuXHRcdGNvbnN0IHRhc2tDYXJkID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stY2FyZFwiXSwgeyBcImRhdGEtaW5kZXhcIjogaSB9KTtcblx0XHQvL2lubmVyIHRhc2sgY2FyZCBkaXYgaXRlbXNcblx0XHQvL1RJVExFXG5cdFx0Y29uc3QgdGFza1RpdGxlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stdGl0bGVcIl0pO1xuXHRcdHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdFx0Ly9ERVNDUklQVElPTlxuXHRcdGNvbnN0IHRhc2tEZXNjID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGVzY3JpcHRpb25cIl0pO1xuXHRcdHRhc2tEZXNjLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcblx0XHQvL0RVRSBEQVRFXG5cdFx0Y29uc3QgdGFza0RhdGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1kYXRlXCJdKTtcblx0XHR0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblx0XHQvL1BSSU9SSVRZXG5cdFx0Y29uc3QgdGFza1ByaW9yaXR5ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stcHJpb3JpdHlcIl0pO1xuXHRcdHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG5cdFx0Ly9OT1RFU1xuXHRcdGNvbnN0IHRhc2tOb3RlcyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLW5vdGVzXCJdKTtcblx0XHR0YXNrTm90ZXMudGV4dENvbnRlbnQgPSB0YXNrLm5vdGVzO1xuXHRcdC8vREVMRVRFIElDT05cblx0XHRjb25zdCB0YXNrRGVsZXRlSWNvbiA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJ0YXNrLWRlbGV0ZVwiXSwge1xuXHRcdFx0c3JjOiBkZWxldGVJY29uLFxuXHRcdFx0YWx0OiBcInRyYXNoIGNhbiBkZWxldGUgaWNvblwiLFxuXHRcdH0pO1xuXHRcdHRhc2tEZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSh0YXNrQ2FyZCk7XG5cdFx0XHRsZXQgaW5kZXggPSB0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG5cdFx0XHRjdXJyZW50VGFza3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHNldEN1cnJlbnRUYXNrcyhjdXJyZW50VGFza3MpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza3MpKTtcblx0XHRcdHJlbmRlclRhc2tzKCk7XG5cdFx0fSk7XG5cdFx0Ly9BUFBFTkQgRUxFTUVOVFNcblx0XHR0YXNrQ2FyZC5hcHBlbmQoXG5cdFx0XHR0YXNrVGl0bGUsXG5cdFx0XHR0YXNrRGVzYyxcblx0XHRcdHRhc2tEYXRlLFxuXHRcdFx0dGFza1ByaW9yaXR5LFxuXHRcdFx0dGFza05vdGVzLFxuXHRcdFx0dGFza0RlbGV0ZUljb25cblx0XHQpO1xuXHRcdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXHR9XG59XG5cbmV4cG9ydCB7IHJlbmRlclRhc2tzIH07XG4iLCJjb25zdCBhZGRUYXNrRm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRfdGFza19zZWN0aW9uXCIpO1xuZnVuY3Rpb24gcmVuZGVyVGFza0Zvcm0oKSB7XG5cdGFkZFRhc2tGb3JtRWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBibG9jaztcIik7XG59XG5jb25zdCBhZGRQcm9qZWN0Rm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRfcHJvamVjdF9zZWN0aW9uXCIpO1xuZnVuY3Rpb24gcmVuZGVyUHJvamVjdEZvcm0oKSB7XG5cdGFkZFByb2plY3RGb3JtRWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBibG9jaztcIik7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tTdWJtaXQoKSB7XG5cdGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKHtcblx0XHR0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXRpdGxlXCIpLnZhbHVlLnZhbHVlLFxuXHRcdGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGVzY1wiKS52YWx1ZS52YWx1ZSxcblx0XHRkdWVEYXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGF0ZVwiKS52YWx1ZS52YWx1ZSxcblx0XHRwcmlvcml0eTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpLnZhbHVlLnZhbHVlLFxuXHRcdG5vdGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Qtbm90ZXNcIikudmFsdWUudmFsdWUsXG5cdH0pO1xuXHRjdXJyZW50VGFza3MucHVzaChuZXdUYXNrKTtcblx0c2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrcyk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG5cdHJlbmRlclRhc2tzKCk7XG5cdGNsb3NlRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tGb3JtKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtdGl0bGVcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGVzY1wiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kYXRlXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LW5vdGVzXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRhc2stYWRkXCIpLm9wdGlvbnMuc2VsZWN0ZWRJbmRleCA9IDA7XG59XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XG5cdGFkZFRhc2tGb3JtRWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0Rm9ybSgpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwLXRpdGxlXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwLWRlc2NcIikudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuXHRhZGRQcm9qZWN0Rm9ybUVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG59XG5cbmV4cG9ydCB7XG5cdHJlbmRlclRhc2tGb3JtLFxuXHRyZW5kZXJQcm9qZWN0Rm9ybSxcblx0Y2xlYXJUYXNrRm9ybSxcblx0Y2xvc2VUYXNrRm9ybSxcblx0Y2xlYXJQcm9qZWN0Rm9ybSxcblx0Y2xvc2VQcm9qZWN0Rm9ybSxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=