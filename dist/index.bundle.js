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
/* harmony import */ var _js_render_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/render/dashboard */ "./src/js/render/dashboard.js");
/* harmony import */ var _js_render_projectsAside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/render/projectsAside */ "./src/js/render/projectsAside");
/* harmony import */ var _js_render_projectsAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/render/projectsAll */ "./src/js/render/projectsAll.js");
/* harmony import */ var _js_data_seed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/data/seed */ "./src/js/data/seed.js");
/* harmony import */ var _js_projectAcc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/projectAcc */ "./src/js/projectAcc.js");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");









//TEST DATA
// import { taskData } from "./js/data/taskData";
// localStorage.setItem("tasks", taskData);
//SEED DATA BTN
document
	.querySelector("#seed-projects-btn")
	.addEventListener("click", _js_data_seed__WEBPACK_IMPORTED_MODULE_6__.seedProjectData);

//DEFAULTS
const DEFAULT_THEME = localStorage.getItem("theme") || "light";
const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
// const currentlyDone = savedTasks.filter((task) => task.complete === true);
// const DEFAULT_TASKS_DONE = currentlyDone.length;
// const DEFAULT_TASKS_TOTAL = savedBooks.length;
console.log(savedProjects);

let currentTasks = savedTasks;
let currentProjects = savedProjects;
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
const asideItems = document.querySelectorAll(".aside-item");
console.log(asideItems);

//PROJECT ASIDE ACCORDIAN
document
	.querySelector("#project-accordion-btn")
	.addEventListener("click", _js_projectAcc__WEBPACK_IMPORTED_MODULE_7__.accordionToggle);

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
	(0,_js_render_dashboard__WEBPACK_IMPORTED_MODULE_3__.renderDashboard)();
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
	// renderDashboard();
	(0,_js_taskForm__WEBPACK_IMPORTED_MODULE_1__.closeProjectForm)();
}

const dashboardEl = document.getElementById("dash-aside");
const allProjectsEl = document.getElementById("all-projects-aside");
const projectListEl = document.getElementById("project-list-aside");

window.onload = () => {
	// setCurrentTheme(DEFAULT_THEME);
	setCurrentTasks(currentTasks);
	setCurrentProjects(currentProjects);
	(0,_js_render_projectsAside__WEBPACK_IMPORTED_MODULE_4__.renderProjectAsideList)();
	dashboardEl.addEventListener("click", function () {
		if (!dashboardEl.classList.contains("aside-selected")) {
			dashboardEl.classList.add("aside-selected");
			allProjectsEl.classList.remove("aside-selected");
			projectListEl.classList.remove("aside-selected");
		}
		(0,_js_render_dashboard__WEBPACK_IMPORTED_MODULE_3__.renderDashboard)();
	});
	allProjectsEl.addEventListener("click", function () {
		if (!allProjectsEl.classList.contains("aside-selected")) {
			allProjectsEl.classList.add("aside-selected");
			dashboardEl.classList.remove("aside-selected");
			projectListEl.classList.remove("aside-selected");
		}
		(0,_js_render_projectsAll__WEBPACK_IMPORTED_MODULE_5__.renderProjectsAll)();
	});
	(0,_js_render_dashboard__WEBPACK_IMPORTED_MODULE_3__.renderDashboard)();
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
// DOM CREATE FUNCTION

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
/* harmony export */   "projectData": () => (/* binding */ projectData)
/* harmony export */ });
const projectData = [
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

/***/ "./src/js/data/seed.js":
/*!*****************************!*\
  !*** ./src/js/data/seed.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "seedProjectData": () => (/* binding */ seedProjectData)
/* harmony export */ });
/* harmony import */ var _projectData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectData */ "./src/js/data/projectData.js");


function seedProjectData() {
	localStorage.setItem("projects", JSON.stringify(_projectData__WEBPACK_IMPORTED_MODULE_0__.projectData));
}



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
const acc = document.querySelector("#project-accordion-btn");
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

/***/ "./src/js/render/dashboard.js":
/*!************************************!*\
  !*** ./src/js/render/dashboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderDashboard": () => (/* binding */ renderDashboard)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM */ "./src/js/DOM.js");
/* harmony import */ var _assets_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/trash-can-outline.png */ "./src/assets/trash-can-outline.png");



function renderDashboard() {
	//get all tasks from all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects"));
	const currentTasks = [];
	for (let i = 0; i < currentProjects.length; i++) {
		const project = currentProjects[i];
		currentTasks.push(...project.tasks);
	}
	//update main header
	const mainHeader = document.querySelector("#main-header");
	mainHeader.textContent = "DASHBOARD";
	//clear current tasks
	const taskContainer = document.querySelector("#main-content");
	taskContainer.innerHTML = "";
	//render currentTasks tasks
	for (let i = 0; i < currentTasks.length; i++) {
		const task = currentTasks[i];
		const taskCard = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["task-card"], { "data-task-index": i });
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
			let index = taskDeleteIcon.parentElement.getAttribute("data-task-index");
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

/***/ "./src/js/render/projectTasks.js":
/*!***************************************!*\
  !*** ./src/js/render/projectTasks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjectTasks": () => (/* binding */ renderProjectTasks)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM */ "./src/js/DOM.js");
/* harmony import */ var _assets_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/trash-can-outline.png */ "./src/assets/trash-can-outline.png");



function renderProjectTasks(index) {
	//get all tasks from all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects"));
	const renderProject = currentProjects[index];
	console.log(renderProject.tasks);
	const currentTasks = renderProject.tasks || [];
	//update main header
	const mainHeader = document.querySelector("#main-header");
	mainHeader.textContent = renderProject.title.toUpperCase();
	//clear current tasks
	const taskContainer = document.querySelector("#main-content");
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

/***/ "./src/js/render/projectsAll.js":
/*!**************************************!*\
  !*** ./src/js/render/projectsAll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjectsAll": () => (/* binding */ renderProjectsAll)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM */ "./src/js/DOM.js");
/* harmony import */ var _assets_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/trash-can-outline.png */ "./src/assets/trash-can-outline.png");



function renderProjectsAll() {
	//get all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects"));
	console.log(currentProjects);
	//update main header
	const mainHeader = document.querySelector("#main-header");
	mainHeader.textContent = "PROJECTS";
	//clear current content
	const projectContainer = document.querySelector("#main-content");
	projectContainer.innerHTML = "";
	//render currentProjects projects
	for (let i = 0; i < currentProjects.length; i++) {
		const project = currentProjects[i];
		const projectCard = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["project-card"], { "data-index": i });
		//inner project card div items
		//TITLE
		const projectTitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["project-title"]);
		projectTitle.textContent = project.title;
		//DESCRIPTION
		const projectDesc = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["project-description"]);
		projectDesc.textContent = project.description;
		//TASKS
		const projectTasksList = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("ul", ["project-tasks-list"]);
		let taskArray = project.tasks;
		for (let i = 0; i < taskArray.length; i++) {
			const task = taskArray[i];
			const li = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("li", ["project-task-list-item"]);
			li.textContent = task.title;
			projectTasksList.appendChild(li);
		}
		const projectTasks = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["project-tasks"]);
		projectTasks.appendChild(projectTasksList);
		//DELETE ICON
		const projectDeleteIcon = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("img", ["project-delete"], {
			src: _assets_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_1__,
			alt: "trash can delete icon",
		});
		projectDeleteIcon.addEventListener("click", function () {
			projectDeleteIcon.parentElement.remove(projectCard);
			let index = projectDeleteIcon.parentElement.getAttribute("data-index");
			currentProjects.splice(index, 1);
			// setCurrentProjects(currentProjects);
			localStorage.setItem("projects", JSON.stringify(currentProjects));
			renderProjectsAll();
		});
		//APPEND ELEMENTS
		projectCard.append(
			projectTitle,
			projectDesc,
			projectTasks,
			projectDeleteIcon
		);
		projectContainer.appendChild(projectCard);
	}
}




/***/ }),

/***/ "./src/js/render/projectsAside":
/*!*************************************!*\
  !*** ./src/js/render/projectsAside ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjectAsideList": () => (/* binding */ renderProjectAsideList)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM */ "./src/js/DOM.js");
/* harmony import */ var _projectTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectTasks */ "./src/js/render/projectTasks.js");


//ALL PROJECTS (FOR PROJECT ACCORDION ASIDE)
function renderProjectAsideList() {
	const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
	const totalProjectNames = [];
	for (let i = 0; i < savedProjects.length; i++) {
		const project = savedProjects[i];
		totalProjectNames.push(project.title);
	}
	////dom logic
	const dashboardEl = document.getElementById("dash-aside");
	const projectListEl = document.getElementById("project-list-aside");
	const allProjectsEl = document.getElementById("all-projects-aside");
	const projectList = document.querySelector("#project-panel-list");
	for (let i = 0; i < totalProjectNames.length; i++) {
		const name = totalProjectNames[i];
		const liEl = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("li", ["project-list-item"], {
			"data-project-index": i,
		});
		liEl.textContent = name;
		liEl.addEventListener("click", function () {
			const projectItems = document.querySelectorAll(".project-list-item");
			for (let i = 0; i < projectItems.length; i++) {
				const item = projectItems[i];
				item.classList.remove("project-list-selected");
			}

			if (!liEl.classList.contains("project-list-selected")) {
				liEl.classList.add("project-list-selected");
			}
			if (!projectListEl.classList.contains("aside-selected")) {
				projectListEl.classList.add("aside-selected");
				dashboardEl.classList.remove("aside-selected");
				allProjectsEl.classList.remove("aside-selected");
			}
			let index = liEl.getAttribute("data-project-index");
			(0,_projectTasks__WEBPACK_IMPORTED_MODULE_1__.renderProjectTasks)(index);
		});
		projectList.appendChild(liEl);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4QkFBOEI7QUFDL0M7QUFDQSxlQUFlLCtDQUFTO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsaUVBQWtCO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDbEM7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRDtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFTRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGUuc2Nzcz82MmFmIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2RhdGEvcHJvamVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2RhdGEvc2VlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcHJvamVjdEFjYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL2Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL3Byb2plY3RUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL3Byb2plY3RzQWxsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvcHJvamVjdHNBc2lkZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdGFza0Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgY3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2pzL2NyZWF0ZVwiO1xuaW1wb3J0IHtcblx0cmVuZGVyVGFza0Zvcm0sXG5cdHJlbmRlclByb2plY3RGb3JtLFxuXHRjbGVhclRhc2tGb3JtLFxuXHRjbG9zZVRhc2tGb3JtLFxuXHRjbGVhclByb2plY3RGb3JtLFxuXHRjbG9zZVByb2plY3RGb3JtLFxufSBmcm9tIFwiLi9qcy90YXNrRm9ybVwiO1xuaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4vanMvRE9NXCI7XG5pbXBvcnQgeyByZW5kZXJEYXNoYm9hcmQgfSBmcm9tIFwiLi9qcy9yZW5kZXIvZGFzaGJvYXJkXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0QXNpZGVMaXN0IH0gZnJvbSBcIi4vanMvcmVuZGVyL3Byb2plY3RzQXNpZGVcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzQWxsIH0gZnJvbSBcIi4vanMvcmVuZGVyL3Byb2plY3RzQWxsXCI7XG5pbXBvcnQgeyBzZWVkUHJvamVjdERhdGEgfSBmcm9tIFwiLi9qcy9kYXRhL3NlZWRcIjtcbmltcG9ydCB7IGFjY29yZGlvblRvZ2dsZSB9IGZyb20gXCIuL2pzL3Byb2plY3RBY2NcIjtcbmltcG9ydCBcIi4vY3NzL3N0eWxlLnNjc3NcIjtcbi8vVEVTVCBEQVRBXG4vLyBpbXBvcnQgeyB0YXNrRGF0YSB9IGZyb20gXCIuL2pzL2RhdGEvdGFza0RhdGFcIjtcbi8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgdGFza0RhdGEpO1xuLy9TRUVEIERBVEEgQlROXG5kb2N1bWVudFxuXHQucXVlcnlTZWxlY3RvcihcIiNzZWVkLXByb2plY3RzLWJ0blwiKVxuXHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlZWRQcm9qZWN0RGF0YSk7XG5cbi8vREVGQVVMVFNcbmNvbnN0IERFRkFVTFRfVEhFTUUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IFwibGlnaHRcIjtcbmNvbnN0IHNhdmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuY29uc3Qgc2F2ZWRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XG4vLyBjb25zdCBjdXJyZW50bHlEb25lID0gc2F2ZWRUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGUgPT09IHRydWUpO1xuLy8gY29uc3QgREVGQVVMVF9UQVNLU19ET05FID0gY3VycmVudGx5RG9uZS5sZW5ndGg7XG4vLyBjb25zdCBERUZBVUxUX1RBU0tTX1RPVEFMID0gc2F2ZWRCb29rcy5sZW5ndGg7XG5jb25zb2xlLmxvZyhzYXZlZFByb2plY3RzKTtcblxubGV0IGN1cnJlbnRUYXNrcyA9IHNhdmVkVGFza3M7XG5sZXQgY3VycmVudFByb2plY3RzID0gc2F2ZWRQcm9qZWN0cztcbmxldCBjdXJyZW50VGhlbWUgPSBERUZBVUxUX1RIRU1FO1xuLy8gbGV0IGN1cnJlbnRUYXNrc0RvbmVDb3VudCA9IERFRkFVTFRfVEFTS1NfRE9ORTtcbi8vIGxldCBjdXJyZW50VGFza3NUb3RhbENvdW50ID0gREVGQVVMVF9UQVNLU19UT1RBTDtcbi8vc3RhdGUgdmFyaWFibGUgdXBkYXRlc1xuZnVuY3Rpb24gc2V0Q3VycmVudFRhc2tzKG5ld1Rhc2tzKSB7XG5cdGN1cnJlbnRUYXNrcyA9IG5ld1Rhc2tzO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrcykpO1xufVxuZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3RzKG5ld1Byb2plY3RzKSB7XG5cdGN1cnJlbnRQcm9qZWN0cyA9IG5ld1Byb2plY3RzO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0cykpO1xufVxuLy8gZnVuY3Rpb24gc2V0VGFza0NvdW50cygpIHtcbi8vIFx0Y3VycmVudFRhc2tzRG9uZUNvdW50ID0gREVGQVVMVF9UQVNLU19ET05FO1xuLy8gXHRjdXJyZW50VGFza3NUb3RhbENvdW50ID0gREVGQVVMVF9UQVNLU19UT1RBTDtcbi8vIH1cbmNvbnN0IGFzaWRlSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFzaWRlLWl0ZW1cIik7XG5jb25zb2xlLmxvZyhhc2lkZUl0ZW1zKTtcblxuLy9QUk9KRUNUIEFTSURFIEFDQ09SRElBTlxuZG9jdW1lbnRcblx0LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1hY2NvcmRpb24tYnRuXCIpXG5cdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjb3JkaW9uVG9nZ2xlKTtcblxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCB0YXNrRGVtbzEgPSBjcmVhdGVUYXNrKHtcblx0dGl0bGU6IFwiV2FsayB0aGUgRG9nXCIsXG5cdGRlc2NyaXB0aW9uOiBcInRha2UgdGhlIGRvZ2dvIG9uIGEgbGlsIHN0cm9sbFwiLFxuXHRkdWVEYXRlOiBkYXRlLFxuXHRwcmlvcml0eTogMyxcblx0bm90ZXM6IFwiYXZvaWQgOXRoIGFuZCBFbG0gLSBhZ2dyZXNzaXZlIGRvZ1wiLFxufSk7XG4vLyBjb25zb2xlLmxvZyh0YXNrRGVtbzEpO1xuXG5jb25zdCBwcm9qZWN0RGVtbzEgPSBjcmVhdGVQcm9qZWN0KHtcblx0dGl0bGU6IFwiUGVyc29uYWxcIixcblx0ZGVzY3JpcHRpb246IFwicGxlYXN1cmUsIG5vdCBidXNpbmVzc1wiLFxufSk7XG5wcm9qZWN0RGVtbzEuYWRkVGFza3RvUHJvamVjdCh0YXNrRGVtbzEpO1xuXG4vL1RBU0svUFJPSkVDVCBGT1JNU1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtaWNvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyQWRkTWVudSk7XG5mdW5jdGlvbiByZW5kZXJBZGRNZW51KCkge1xuXHRjb25zdCBhZGRJY29uTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWljb24tbWVudVwiKTtcblx0YWRkSWNvbk1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImljb24tbWVudS10b2dnbGVcIik7XG59XG4vL3JlbmRlciBmb3Jtc1xuZG9jdW1lbnRcblx0LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stZm9ybVwiKVxuXHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRhc2tGb3JtKTtcbmRvY3VtZW50XG5cdC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWZvcm1cIilcblx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJQcm9qZWN0Rm9ybSk7XG4vL3Rhc2sgZm9ybVxuZG9jdW1lbnRcblx0LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtdGFzay1mb3JtXCIpXG5cdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUYXNrRm9ybSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stY2xlYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyVGFza0Zvcm0pO1xuLy8vLyB0YXNrIHN1Ym1pdFxuZG9jdW1lbnRcblx0LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stYnRuXCIpXG5cdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza1N1Ym1pdCk7XG5mdW5jdGlvbiBhZGRUYXNrU3VibWl0KCkge1xuXHRjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayh7XG5cdFx0dGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC10aXRsZVwiKS52YWx1ZSxcblx0XHRkZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LWRlc2NcIikudmFsdWUsXG5cdFx0ZHVlRGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LWRhdGVcIikudmFsdWUsXG5cdFx0cHJpb3JpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1wcmlvcml0eVwiKS52YWx1ZSxcblx0XHRub3RlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LW5vdGVzXCIpLnZhbHVlLFxuXHR9KTtcblx0Y3VycmVudFRhc2tzLnB1c2gobmV3VGFzayk7XG5cdHNldEN1cnJlbnRUYXNrcyhjdXJyZW50VGFza3MpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrcykpO1xuXHRyZW5kZXJEYXNoYm9hcmQoKTtcblx0Y2xvc2VUYXNrRm9ybSgpO1xufVxuLy9wcm9qZWN0IGZvcm1cbmRvY3VtZW50XG5cdC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLXByb2plY3QtZm9ybVwiKVxuXHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUHJvamVjdEZvcm0pO1xuZG9jdW1lbnRcblx0LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jbGVhclwiKVxuXHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyUHJvamVjdEZvcm0pO1xuLy8vL3Byb2plY3Qgc3VibWl0XG5kb2N1bWVudFxuXHQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1idG5cIilcblx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0U3VibWl0KTtcbmZ1bmN0aW9uIGFkZFByb2plY3RTdWJtaXQoKSB7XG5cdGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHtcblx0XHR0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwLXRpdGxlXCIpLnZhbHVlLFxuXHRcdGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtZGVzY1wiKS52YWx1ZSxcblx0fSk7XG5cdC8vRklHVVJFIE9VVCBTVEFURSBGT1IgUFJPSkVDVFMgLy8vLy9cblx0Ly9SRUZSRVNIIFRPVEFMIFRBU0sgQVJSQVkgUFVMTFxuXHQvL2dldFRvdGFsVGFza3MoKTtcblx0Ly9BREQgVE8gUFJPSkVDVCBTUEVDSUZJQyBBUlJBWVxuXHR0b3RhbFByb2plY3ROYW1lcy5wdXNoKG5ld1Byb2plY3QudGl0bGUpO1xuXG5cdGN1cnJlbnRQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXHRzZXRDdXJyZW50UHJvamVjdHMoY3VycmVudFByb2plY3RzKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdHMpKTtcblx0Ly8gcmVuZGVyRGFzaGJvYXJkKCk7XG5cdGNsb3NlUHJvamVjdEZvcm0oKTtcbn1cblxuY29uc3QgZGFzaGJvYXJkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhc2gtYXNpZGVcIik7XG5jb25zdCBhbGxQcm9qZWN0c0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtcHJvamVjdHMtYXNpZGVcIik7XG5jb25zdCBwcm9qZWN0TGlzdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3QtYXNpZGVcIik7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cdC8vIHNldEN1cnJlbnRUaGVtZShERUZBVUxUX1RIRU1FKTtcblx0c2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdHNldEN1cnJlbnRQcm9qZWN0cyhjdXJyZW50UHJvamVjdHMpO1xuXHRyZW5kZXJQcm9qZWN0QXNpZGVMaXN0KCk7XG5cdGRhc2hib2FyZEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCFkYXNoYm9hcmRFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhc2lkZS1zZWxlY3RlZFwiKSkge1xuXHRcdFx0ZGFzaGJvYXJkRWwuY2xhc3NMaXN0LmFkZChcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0YWxsUHJvamVjdHNFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRwcm9qZWN0TGlzdEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHR9XG5cdFx0cmVuZGVyRGFzaGJvYXJkKCk7XG5cdH0pO1xuXHRhbGxQcm9qZWN0c0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCFhbGxQcm9qZWN0c0VsLmNsYXNzTGlzdC5jb250YWlucyhcImFzaWRlLXNlbGVjdGVkXCIpKSB7XG5cdFx0XHRhbGxQcm9qZWN0c0VsLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdGRhc2hib2FyZEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdHByb2plY3RMaXN0RWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdH1cblx0XHRyZW5kZXJQcm9qZWN0c0FsbCgpO1xuXHR9KTtcblx0cmVuZGVyRGFzaGJvYXJkKCk7XG59O1xuIiwiLy8gRE9NIENSRUFURSBGVU5DVElPTlxuXG4vL2FyZyAxID0gbmFtZSBvZiBIVE1MIGVsZW1lbnRcbi8vIGFyZyAyID0gY2xhc3MgbmFtZXMgdG8gYWRkXG4vLyBhcmcgMyA9IG9iamVjdCAtIGF0dHJpYnV0ZXMgdG8gYWRkIC0+IGF0dHJpYnV0ZSA6IHZhbHVlXG5mdW5jdGlvbiBkb21DcmVhdGUoYXJnMSwgYXJnMiwgYXJnMykge1xuXHQvL2FyZyAxID0gXCJzdHJpbmdcIiAtIG5hbWUgb2YgSFRNTCBlbGVtZW50XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZzEpO1xuXHQvLyBhcmcgMiA9IFtcImFycmF5IG9mIHN0cmluZ3NcIl0gLSBjbGFzcyBuYW1lcyB0byBhZGRcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmcyLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gYXJnMltpXTtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0fVxuXHQvLyBhcmcgMyA9IHtvYmplY3R9IC0gYXR0cmlidXRlIG5hbWUgOiB2YWx1ZVxuXHRmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhcmczKSB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhcmczW2F0dHJpYnV0ZV0pO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgeyBkb21DcmVhdGUgfTtcbiIsImNvbnN0IGNyZWF0ZVRhc2sgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcyB9KSA9PiAoe1xuXHR0aXRsZSxcblx0ZGVzY3JpcHRpb24sXG5cdGR1ZURhdGUsXG5cdHByaW9yaXR5LFxuXHRub3Rlcyxcblx0cHJpbnRUYXNrKCkge1xuXHRcdHJldHVybiBgJHt0aGlzLnRpdGxlfTogJHt0aGlzLmRlc2NyaXB0aW9ufWA7XG5cdH0sXG59KTtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiAoe1xuXHR0aXRsZSxcblx0ZGVzY3JpcHRpb24sXG5cdHRhc2tzOiBbXSxcblx0cHJpbnRQcm9qZWN0KCkge1xuXHRcdHJldHVybiBgUHJvamVjdCAke3RoaXMudGl0bGV9OiAke3RoaXMuZGVzY3JpcHRpb259YDtcblx0fSxcblx0cHJpbnRUYXNrcygpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnRhc2tzKTtcblx0fSxcblx0YWRkVGFza3RvUHJvamVjdCh0YXNrKSB7XG5cdFx0dGhpcy50YXNrcy5wdXNoKHRhc2spO1xuXHR9LFxufSk7XG5cbmV4cG9ydCB7IGNyZWF0ZVRhc2ssIGNyZWF0ZVByb2plY3QgfTtcbiIsImNvbnN0IHByb2plY3REYXRhID0gW1xuXHR7XG5cdFx0dGl0bGU6IFwiTGF3bm1vd2VyXCIsXG5cdFx0ZGVzY3JpcHRpb246IFwibGFuZHNjYXBpbmcgcHJvamVjdFwiLFxuXHRcdHRhc2tzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIk1vdyB0aGUgbGF3blwiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFx0XHRcImdldCBvdXQgdGhlcmUgd2l0aCB0aGUgZGFuZyBtb3dlciBhbmQgbW93IHRoYXQgdGhlcmUgbGF3biB0aGVyZVwiLFxuXHRcdFx0XHRkdWVEYXRlOiBcIjIwMjItMDctMjlcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwiMVwiLFxuXHRcdFx0XHRub3RlczogXCJSZXR1cm4gbW93ZXIgdG8gbmVpZ2hib3Igd2hlbiBmaW5pc2hlZFwiLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiQW5vdGhlciBQcm9qZWN0XCIsXG5cdFx0ZGVzY3JpcHRpb246IFwibWlzY2VsbGFuZW91cyB0YXNrc1wiLFxuXHRcdHRhc2tzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIldhbGsgdGhlIGRvZ1wiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJsZWFzaCwgb3BlbiBkb29yLCB3YWxrIGFyb3VuZCwgY29tZSBiYWNrXCIsXG5cdFx0XHRcdGR1ZURhdGU6IFwiMjAyMi0wOC0xMlwiLFxuXHRcdFx0XHRwcmlvcml0eTogXCIyXCIsXG5cdFx0XHRcdG5vdGVzOiBcImF2b2lkIG90aGVyIGRvZ3MhXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJDb29rIGRpbm5lclwiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJjaGlja2VuIHRpa2thIG1hc2FsYSwgdy8gamFzbWluZSByaWNlLCBhbmQgc2Ftb3Nhc1wiLFxuXHRcdFx0XHRkdWVEYXRlOiBcIjIwMjItMDYtMTJcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwiM1wiLFxuXHRcdFx0XHRub3RlczogXCJubyBwZWFudXRzIVwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiUmVhZCAnT2N0b2JlcicgQm9va1wiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJyZWFkIGF0IGxlYXN0IDQwIHBhZ2VzIHRvZGF5XCIsXG5cdFx0XHRcdGR1ZURhdGU6IFwiMjAyMi0wOC0xMlwiLFxuXHRcdFx0XHRwcmlvcml0eTogXCI1XCIsXG5cdFx0XHRcdG5vdGVzOiBcIlwiLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiQSBUaGlyZCBQcm9qZWN0IGZvciB0aGUgTGlzdFwiLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XCJsb25nZXIgZGVzY3JpcHRpb24gZm9yIGEgbW9yZSBjb21wbGljYXRlZCB0YXNrIHByb2plY3QgYnJlYWtkb3duXCIsXG5cdFx0dGFza3M6IFtcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiUmVhZCAnT2N0b2JlcicgQm9va1wiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJyZWFkIGF0IGxlYXN0IDQwIHBhZ2VzIHRvZGF5XCIsXG5cdFx0XHRcdGR1ZURhdGU6IFwiMjAyMi0wOC0xMlwiLFxuXHRcdFx0XHRwcmlvcml0eTogXCI1XCIsXG5cdFx0XHRcdG5vdGVzOiBcIlwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiQnV5IHJvc2VzXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIjIgZG96ZW4gcm9zZXMgZnJvbSBTYWZld2F5XCIsXG5cdFx0XHRcdGR1ZURhdGU6IFwiMjAyMi0wOC0xMlwiLFxuXHRcdFx0XHRwcmlvcml0eTogXCI1XCIsXG5cdFx0XHRcdG5vdGVzOiBcInJlZCByb3Nlc1wiLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXTtcblxuZXhwb3J0IHsgcHJvamVjdERhdGEgfTtcbiIsImltcG9ydCB7IHByb2plY3REYXRhIH0gZnJvbSBcIi4vcHJvamVjdERhdGFcIjtcblxuZnVuY3Rpb24gc2VlZFByb2plY3REYXRhKCkge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3REYXRhKSk7XG59XG5leHBvcnQgeyBzZWVkUHJvamVjdERhdGEgfTtcbiIsImNvbnN0IGFjYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1hY2NvcmRpb24tYnRuXCIpO1xuY29uc3QgYWNjUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtcGFuZWwtZGlzcGxheVwiKTtcbmZ1bmN0aW9uIGFjY29yZGlvblRvZ2dsZSgpIHtcblx0YWNjLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cdGlmIChhY2NQYW5lbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcblx0XHRhY2NQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdH0gZWxzZSB7XG5cdFx0YWNjUGFuZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0fVxufVxuXG5leHBvcnQgeyBhY2NvcmRpb25Ub2dnbGUgfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi9ET01cIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckRhc2hib2FyZCgpIHtcblx0Ly9nZXQgYWxsIHRhc2tzIGZyb20gYWxsIHByb2plY3RzXG5cdGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG5cdGNvbnN0IGN1cnJlbnRUYXNrcyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdHNbaV07XG5cdFx0Y3VycmVudFRhc2tzLnB1c2goLi4ucHJvamVjdC50YXNrcyk7XG5cdH1cblx0Ly91cGRhdGUgbWFpbiBoZWFkZXJcblx0Y29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1oZWFkZXJcIik7XG5cdG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBcIkRBU0hCT0FSRFwiO1xuXHQvL2NsZWFyIGN1cnJlbnQgdGFza3Ncblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuXHR0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cdC8vcmVuZGVyIGN1cnJlbnRUYXNrcyB0YXNrc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRUYXNrcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHRhc2sgPSBjdXJyZW50VGFza3NbaV07XG5cdFx0Y29uc3QgdGFza0NhcmQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1jYXJkXCJdLCB7IFwiZGF0YS10YXNrLWluZGV4XCI6IGkgfSk7XG5cdFx0Ly9pbm5lciB0YXNrIGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly9USVRMRVxuXHRcdGNvbnN0IHRhc2tUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXRpdGxlXCJdKTtcblx0XHR0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRcdC8vREVTQ1JJUFRJT05cblx0XHRjb25zdCB0YXNrRGVzYyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRlc2NyaXB0aW9uXCJdKTtcblx0XHR0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cdFx0Ly9EVUUgREFURVxuXHRcdGNvbnN0IHRhc2tEYXRlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGF0ZVwiXSk7XG5cdFx0dGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cdFx0Ly9QUklPUklUWVxuXHRcdGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXByaW9yaXR5XCJdKTtcblx0XHR0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXHRcdC8vTk9URVNcblx0XHRjb25zdCB0YXNrTm90ZXMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1ub3Rlc1wiXSk7XG5cdFx0dGFza05vdGVzLnRleHRDb250ZW50ID0gdGFzay5ub3Rlcztcblx0XHQvL0RFTEVURSBJQ09OXG5cdFx0Y29uc3QgdGFza0RlbGV0ZUljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgW1widGFzay1kZWxldGVcIl0sIHtcblx0XHRcdHNyYzogZGVsZXRlSWNvbixcblx0XHRcdGFsdDogXCJ0cmFzaCBjYW4gZGVsZXRlIGljb25cIixcblx0XHR9KTtcblx0XHR0YXNrRGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0dGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUodGFza0NhcmQpO1xuXHRcdFx0bGV0IGluZGV4ID0gdGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staW5kZXhcIik7XG5cdFx0XHRjdXJyZW50VGFza3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHNldEN1cnJlbnRUYXNrcyhjdXJyZW50VGFza3MpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza3MpKTtcblx0XHRcdHJlbmRlclRhc2tzKCk7XG5cdFx0fSk7XG5cdFx0Ly9BUFBFTkQgRUxFTUVOVFNcblx0XHR0YXNrQ2FyZC5hcHBlbmQoXG5cdFx0XHR0YXNrVGl0bGUsXG5cdFx0XHR0YXNrRGVzYyxcblx0XHRcdHRhc2tEYXRlLFxuXHRcdFx0dGFza1ByaW9yaXR5LFxuXHRcdFx0dGFza05vdGVzLFxuXHRcdFx0dGFza0RlbGV0ZUljb25cblx0XHQpO1xuXHRcdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXHR9XG59XG5cbmV4cG9ydCB7IHJlbmRlckRhc2hib2FyZCB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uL0RPTVwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRhc2tzKGluZGV4KSB7XG5cdC8vZ2V0IGFsbCB0YXNrcyBmcm9tIGFsbCBwcm9qZWN0c1xuXHRjb25zdCBjdXJyZW50UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuXHRjb25zdCByZW5kZXJQcm9qZWN0ID0gY3VycmVudFByb2plY3RzW2luZGV4XTtcblx0Y29uc29sZS5sb2cocmVuZGVyUHJvamVjdC50YXNrcyk7XG5cdGNvbnN0IGN1cnJlbnRUYXNrcyA9IHJlbmRlclByb2plY3QudGFza3MgfHwgW107XG5cdC8vdXBkYXRlIG1haW4gaGVhZGVyXG5cdGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4taGVhZGVyXCIpO1xuXHRtYWluSGVhZGVyLnRleHRDb250ZW50ID0gcmVuZGVyUHJvamVjdC50aXRsZS50b1VwcGVyQ2FzZSgpO1xuXHQvL2NsZWFyIGN1cnJlbnQgdGFza3Ncblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuXHR0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cdC8vcmVuZGVyIGN1cnJlbnRUYXNrcyB0YXNrc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRUYXNrcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHRhc2sgPSBjdXJyZW50VGFza3NbaV07XG5cdFx0Y29uc3QgdGFza0NhcmQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1jYXJkXCJdLCB7IFwiZGF0YS1pbmRleFwiOiBpIH0pO1xuXHRcdC8vaW5uZXIgdGFzayBjYXJkIGRpdiBpdGVtc1xuXHRcdC8vVElUTEVcblx0XHRjb25zdCB0YXNrVGl0bGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay10aXRsZVwiXSk7XG5cdFx0dGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0XHQvL0RFU0NSSVBUSU9OXG5cdFx0Y29uc3QgdGFza0Rlc2MgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1kZXNjcmlwdGlvblwiXSk7XG5cdFx0dGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXHRcdC8vRFVFIERBVEVcblx0XHRjb25zdCB0YXNrRGF0ZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRhdGVcIl0pO1xuXHRcdHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXHRcdC8vUFJJT1JJVFlcblx0XHRjb25zdCB0YXNrUHJpb3JpdHkgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1wcmlvcml0eVwiXSk7XG5cdFx0dGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblx0XHQvL05PVEVTXG5cdFx0Y29uc3QgdGFza05vdGVzID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stbm90ZXNcIl0pO1xuXHRcdHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9IHRhc2subm90ZXM7XG5cdFx0Ly9ERUxFVEUgSUNPTlxuXHRcdGNvbnN0IHRhc2tEZWxldGVJY29uID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFtcInRhc2stZGVsZXRlXCJdLCB7XG5cdFx0XHRzcmM6IGRlbGV0ZUljb24sXG5cdFx0XHRhbHQ6IFwidHJhc2ggY2FuIGRlbGV0ZSBpY29uXCIsXG5cdFx0fSk7XG5cdFx0dGFza0RlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHRhc2tEZWxldGVJY29uLnBhcmVudEVsZW1lbnQucmVtb3ZlKHRhc2tDYXJkKTtcblx0XHRcdGxldCBpbmRleCA9IHRhc2tEZWxldGVJY29uLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKTtcblx0XHRcdGN1cnJlbnRUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0c2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrcykpO1xuXHRcdFx0cmVuZGVyVGFza3MoKTtcblx0XHR9KTtcblx0XHQvL0FQUEVORCBFTEVNRU5UU1xuXHRcdHRhc2tDYXJkLmFwcGVuZChcblx0XHRcdHRhc2tUaXRsZSxcblx0XHRcdHRhc2tEZXNjLFxuXHRcdFx0dGFza0RhdGUsXG5cdFx0XHR0YXNrUHJpb3JpdHksXG5cdFx0XHR0YXNrTm90ZXMsXG5cdFx0XHR0YXNrRGVsZXRlSWNvblxuXHRcdCk7XG5cdFx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG5cdH1cbn1cblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdFRhc2tzIH07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vRE9NXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL3RyYXNoLWNhbi1vdXRsaW5lLnBuZ1wiO1xuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0c0FsbCgpIHtcblx0Ly9nZXQgYWxsIHByb2plY3RzXG5cdGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG5cdGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0cyk7XG5cdC8vdXBkYXRlIG1haW4gaGVhZGVyXG5cdGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4taGVhZGVyXCIpO1xuXHRtYWluSGVhZGVyLnRleHRDb250ZW50ID0gXCJQUk9KRUNUU1wiO1xuXHQvL2NsZWFyIGN1cnJlbnQgY29udGVudFxuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnRcIik7XG5cdHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0Ly9yZW5kZXIgY3VycmVudFByb2plY3RzIHByb2plY3RzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c1tpXTtcblx0XHRjb25zdCBwcm9qZWN0Q2FyZCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJwcm9qZWN0LWNhcmRcIl0sIHsgXCJkYXRhLWluZGV4XCI6IGkgfSk7XG5cdFx0Ly9pbm5lciBwcm9qZWN0IGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly9USVRMRVxuXHRcdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJwcm9qZWN0LXRpdGxlXCJdKTtcblx0XHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXHRcdC8vREVTQ1JJUFRJT05cblx0XHRjb25zdCBwcm9qZWN0RGVzYyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCJdKTtcblx0XHRwcm9qZWN0RGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XG5cdFx0Ly9UQVNLU1xuXHRcdGNvbnN0IHByb2plY3RUYXNrc0xpc3QgPSBkb21DcmVhdGUoXCJ1bFwiLCBbXCJwcm9qZWN0LXRhc2tzLWxpc3RcIl0pO1xuXHRcdGxldCB0YXNrQXJyYXkgPSBwcm9qZWN0LnRhc2tzO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCB0YXNrID0gdGFza0FycmF5W2ldO1xuXHRcdFx0Y29uc3QgbGkgPSBkb21DcmVhdGUoXCJsaVwiLCBbXCJwcm9qZWN0LXRhc2stbGlzdC1pdGVtXCJdKTtcblx0XHRcdGxpLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0XHRcdHByb2plY3RUYXNrc0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xuXHRcdH1cblx0XHRjb25zdCBwcm9qZWN0VGFza3MgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wicHJvamVjdC10YXNrc1wiXSk7XG5cdFx0cHJvamVjdFRhc2tzLmFwcGVuZENoaWxkKHByb2plY3RUYXNrc0xpc3QpO1xuXHRcdC8vREVMRVRFIElDT05cblx0XHRjb25zdCBwcm9qZWN0RGVsZXRlSWNvbiA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJwcm9qZWN0LWRlbGV0ZVwiXSwge1xuXHRcdFx0c3JjOiBkZWxldGVJY29uLFxuXHRcdFx0YWx0OiBcInRyYXNoIGNhbiBkZWxldGUgaWNvblwiLFxuXHRcdH0pO1xuXHRcdHByb2plY3REZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRwcm9qZWN0RGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LnJlbW92ZShwcm9qZWN0Q2FyZCk7XG5cdFx0XHRsZXQgaW5kZXggPSBwcm9qZWN0RGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG5cdFx0XHRjdXJyZW50UHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdC8vIHNldEN1cnJlbnRQcm9qZWN0cyhjdXJyZW50UHJvamVjdHMpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdHMpKTtcblx0XHRcdHJlbmRlclByb2plY3RzQWxsKCk7XG5cdFx0fSk7XG5cdFx0Ly9BUFBFTkQgRUxFTUVOVFNcblx0XHRwcm9qZWN0Q2FyZC5hcHBlbmQoXG5cdFx0XHRwcm9qZWN0VGl0bGUsXG5cdFx0XHRwcm9qZWN0RGVzYyxcblx0XHRcdHByb2plY3RUYXNrcyxcblx0XHRcdHByb2plY3REZWxldGVJY29uXG5cdFx0KTtcblx0XHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcblx0fVxufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0c0FsbCB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uL0RPTVwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFRhc2tzIH0gZnJvbSBcIi4vcHJvamVjdFRhc2tzXCI7XG4vL0FMTCBQUk9KRUNUUyAoRk9SIFBST0pFQ1QgQUNDT1JESU9OIEFTSURFKVxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdEFzaWRlTGlzdCgpIHtcblx0Y29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5cdGNvbnN0IHRvdGFsUHJvamVjdE5hbWVzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHByb2plY3QgPSBzYXZlZFByb2plY3RzW2ldO1xuXHRcdHRvdGFsUHJvamVjdE5hbWVzLnB1c2gocHJvamVjdC50aXRsZSk7XG5cdH1cblx0Ly8vL2RvbSBsb2dpY1xuXHRjb25zdCBkYXNoYm9hcmRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFzaC1hc2lkZVwiKTtcblx0Y29uc3QgcHJvamVjdExpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0LWFzaWRlXCIpO1xuXHRjb25zdCBhbGxQcm9qZWN0c0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtcHJvamVjdHMtYXNpZGVcIik7XG5cdGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXBhbmVsLWxpc3RcIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxQcm9qZWN0TmFtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBuYW1lID0gdG90YWxQcm9qZWN0TmFtZXNbaV07XG5cdFx0Y29uc3QgbGlFbCA9IGRvbUNyZWF0ZShcImxpXCIsIFtcInByb2plY3QtbGlzdC1pdGVtXCJdLCB7XG5cdFx0XHRcImRhdGEtcHJvamVjdC1pbmRleFwiOiBpLFxuXHRcdH0pO1xuXHRcdGxpRWwudGV4dENvbnRlbnQgPSBuYW1lO1xuXHRcdGxpRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1saXN0LWl0ZW1cIik7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RJdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBpdGVtID0gcHJvamVjdEl0ZW1zW2ldO1xuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0LWxpc3Qtc2VsZWN0ZWRcIik7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghbGlFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LWxpc3Qtc2VsZWN0ZWRcIikpIHtcblx0XHRcdFx0bGlFbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LXNlbGVjdGVkXCIpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFwcm9qZWN0TGlzdEVsLmNsYXNzTGlzdC5jb250YWlucyhcImFzaWRlLXNlbGVjdGVkXCIpKSB7XG5cdFx0XHRcdHByb2plY3RMaXN0RWwuY2xhc3NMaXN0LmFkZChcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0XHRkYXNoYm9hcmRFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRcdGFsbFByb2plY3RzRWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGluZGV4ID0gbGlFbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIik7XG5cdFx0XHRyZW5kZXJQcm9qZWN0VGFza3MoaW5kZXgpO1xuXHRcdH0pO1xuXHRcdHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpRWwpO1xuXHR9XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RBc2lkZUxpc3QgfTtcbiIsImNvbnN0IGFkZFRhc2tGb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZF90YXNrX3NlY3Rpb25cIik7XG5mdW5jdGlvbiByZW5kZXJUYXNrRm9ybSgpIHtcblx0YWRkVGFza0Zvcm1FbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGJsb2NrO1wiKTtcbn1cbmNvbnN0IGFkZFByb2plY3RGb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZF9wcm9qZWN0X3NlY3Rpb25cIik7XG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Rm9ybSgpIHtcblx0YWRkUHJvamVjdEZvcm1FbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGJsb2NrO1wiKTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza1N1Ym1pdCgpIHtcblx0Y29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2soe1xuXHRcdHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtdGl0bGVcIikudmFsdWUudmFsdWUsXG5cdFx0ZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kZXNjXCIpLnZhbHVlLnZhbHVlLFxuXHRcdGR1ZURhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kYXRlXCIpLnZhbHVlLnZhbHVlLFxuXHRcdHByaW9yaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtcHJpb3JpdHlcIikudmFsdWUudmFsdWUsXG5cdFx0bm90ZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1ub3Rlc1wiKS52YWx1ZS52YWx1ZSxcblx0fSk7XG5cdGN1cnJlbnRUYXNrcy5wdXNoKG5ld1Rhc2spO1xuXHRzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0Y29uc29sZS5sb2coY3VycmVudFRhc2tzKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza3MpKTtcblx0cmVuZGVyVGFza3MoKTtcblx0Y2xvc2VGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0Zvcm0oKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC10aXRsZVwiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kZXNjXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LWRhdGVcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtcHJpb3JpdHlcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Qtbm90ZXNcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGFzay1hZGRcIikub3B0aW9ucy5zZWxlY3RlZEluZGV4ID0gMDtcbn1cblxuZnVuY3Rpb24gY2xvc2VUYXNrRm9ybSgpIHtcblx0YWRkVGFza0Zvcm1FbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhclByb2plY3RGb3JtKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtdGl0bGVcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtZGVzY1wiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdEZvcm0oKSB7XG5cdGFkZFByb2plY3RGb3JtRWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcbn1cblxuZXhwb3J0IHtcblx0cmVuZGVyVGFza0Zvcm0sXG5cdHJlbmRlclByb2plY3RGb3JtLFxuXHRjbGVhclRhc2tGb3JtLFxuXHRjbG9zZVRhc2tGb3JtLFxuXHRjbGVhclByb2plY3RGb3JtLFxuXHRjbG9zZVByb2plY3RGb3JtLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==