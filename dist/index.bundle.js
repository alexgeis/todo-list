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
/* harmony import */ var _js_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/form */ "./src/js/form.js");
/* harmony import */ var _js_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/DOM */ "./src/js/DOM.js");
/* harmony import */ var _js_render_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/render/header */ "./src/js/render/header.js");
/* harmony import */ var _js_render_dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/render/dashboard */ "./src/js/render/dashboard.js");
/* harmony import */ var _js_render_projectsAside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/render/projectsAside */ "./src/js/render/projectsAside.js");
/* harmony import */ var _js_render_projectsAll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/render/projectsAll */ "./src/js/render/projectsAll.js");
/* harmony import */ var _js_render_addTaskForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/render/addTaskForm */ "./src/js/render/addTaskForm.js");
/* harmony import */ var _js_render_addProjectForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/render/addProjectForm */ "./src/js/render/addProjectForm.js");
/* harmony import */ var _js_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/state */ "./src/js/state.js");
/* harmony import */ var _js_data_seed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/data/seed */ "./src/js/data/seed.js");
/* harmony import */ var _js_projectAcc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/projectAcc */ "./src/js/projectAcc.js");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");













//TEST DATA
// import { taskData } from "./js/data/taskData";
// localStorage.setItem("tasks", taskData);

(0,_js_render_header__WEBPACK_IMPORTED_MODULE_3__.renderHeader)();

//SEED DATA BTN
document
	.querySelector("#seed-projects-btn")
	.addEventListener("click", _js_data_seed__WEBPACK_IMPORTED_MODULE_10__.seedProjectData);

//// STATE ////
//DEFAULTS
const DEFAULT_THEME = localStorage.getItem("theme") || "light";
const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
// const currentlyDone = savedTasks.filter((task) => task.complete === true);
// const DEFAULT_TASKS_DONE = currentlyDone.length;
// const DEFAULT_TASKS_TOTAL = savedBooks.length;

let currentTasks = savedTasks;
let currentProjects = savedProjects;
let currentTheme = DEFAULT_THEME;
// let currentTasksDoneCount = DEFAULT_TASKS_DONE;
// let currentTasksTotalCount = DEFAULT_TASKS_TOTAL;

//PAGE RENDERING

//PROJECT ASIDE ACCORDIAN
document
	.querySelector("#project-accordion-btn")
	.addEventListener("click", _js_projectAcc__WEBPACK_IMPORTED_MODULE_11__.accordionToggle);

//TASK/PROJECT FORMS
document.querySelector("#add-icon").addEventListener("click", _js_render_header__WEBPACK_IMPORTED_MODULE_3__.renderAddMenu);
//render forms
document
	.querySelector("#add-task-form")
	.addEventListener("click", _js_form__WEBPACK_IMPORTED_MODULE_1__.renderTaskForm);
document
	.querySelector("#add-project-form")
	.addEventListener("click", _js_form__WEBPACK_IMPORTED_MODULE_1__.renderProjectForm);
//task form
document
	.querySelector("#close-task-form")
	.addEventListener("click", _js_form__WEBPACK_IMPORTED_MODULE_1__.closeTaskForm);
document.querySelector("#task-clear").addEventListener("click", _js_form__WEBPACK_IMPORTED_MODULE_1__.clearTaskForm);
//// task submit
document
	.querySelector("#add-task-btn")
	.addEventListener("click", _js_render_addTaskForm__WEBPACK_IMPORTED_MODULE_7__.addTaskSubmit);
//project form
document
	.querySelector("#close-project-form")
	.addEventListener("click", _js_form__WEBPACK_IMPORTED_MODULE_1__.closeProjectForm);
document
	.querySelector("#project-clear")
	.addEventListener("click", _js_form__WEBPACK_IMPORTED_MODULE_1__.clearProjectForm);
////project submit
document
	.querySelector("#add-project-btn")
	.addEventListener("click", _js_render_addProjectForm__WEBPACK_IMPORTED_MODULE_8__.addProjectSubmit);

const dashboardEl = document.getElementById("dash-aside");
const allProjectsEl = document.getElementById("all-projects-aside");
const projectListEl = document.getElementById("project-list-aside");

window.onload = () => {
	// setCurrentTheme(DEFAULT_THEME);
	(0,_js_state__WEBPACK_IMPORTED_MODULE_9__.setCurrentTasks)(currentTasks);
	(0,_js_state__WEBPACK_IMPORTED_MODULE_9__.setCurrentProjects)(currentProjects);
	(0,_js_render_projectsAside__WEBPACK_IMPORTED_MODULE_5__.renderProjectAsideList)();
	dashboardEl.addEventListener("click", function () {
		if (!dashboardEl.classList.contains("aside-selected")) {
			dashboardEl.classList.add("aside-selected");
			allProjectsEl.classList.remove("aside-selected");
			projectListEl.classList.remove("aside-selected");
		}
		(0,_js_render_dashboard__WEBPACK_IMPORTED_MODULE_4__.renderDashboard)();
	});
	allProjectsEl.addEventListener("click", function () {
		if (!allProjectsEl.classList.contains("aside-selected")) {
			allProjectsEl.classList.add("aside-selected");
			dashboardEl.classList.remove("aside-selected");
			projectListEl.classList.remove("aside-selected");
		}
		(0,_js_render_projectsAll__WEBPACK_IMPORTED_MODULE_6__.renderProjectsAll)();
	});
	(0,_js_render_dashboard__WEBPACK_IMPORTED_MODULE_4__.renderDashboard)();
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
	if (arg2.length > 0) {
		for (let i = 0; i < arg2.length; i++) {
			const className = arg2[i];
			element.classList.add(className);
		}
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
//DEMO

// const date = new Date();
// const taskDemo1 = createTask({
// 	title: "Walk the Dog",
// 	description: "take the doggo on a lil stroll",
// 	dueDate: date,
// 	priority: 3,
// 	notes: "avoid 9th and Elm - aggressive dog",
// });
// const projectDemo1 = createProject({
// 	title: "Personal",
// 	description: "pleasure, not business",
// });
// projectDemo1.addTasktoProject(taskDemo1);

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
	localStorage.clear();
	localStorage.setItem("projects", JSON.stringify(_projectData__WEBPACK_IMPORTED_MODULE_0__.projectData));
}



/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
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

/***/ "./src/js/render/addProjectForm.js":
/*!*****************************************!*\
  !*** ./src/js/render/addProjectForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectSubmit": () => (/* binding */ addProjectSubmit),
/* harmony export */   "renderAddProjectForm": () => (/* binding */ renderAddProjectForm)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM */ "./src/js/DOM.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/js/state.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form */ "./src/js/form.js");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard */ "./src/js/render/dashboard.js");





const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];

function addProjectSubmit() {
	const newProject = createProject({
		title: document.querySelector("#p-title").value,
		description: document.querySelector("#p-desc").value,
	});
	savedProjects.push(newProject);
	(0,_state__WEBPACK_IMPORTED_MODULE_1__.setCurrentProjects)(savedProjects);
	(0,_dashboard__WEBPACK_IMPORTED_MODULE_3__.renderDashboard)();
	(0,_form__WEBPACK_IMPORTED_MODULE_2__.closeProjectForm)();
}

function renderAddProjectForm() {
	//form content
	const formTitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("h2", ["form_title"]);
	formTitle.textContent = "Add new task";
	const formSubtitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("h2", ["form_subtitle"]);
	formSubtitle.textContent = "* required";
	const closeBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("span", ["material-icons", "close-form"], {
		id: "close-task-form",
	});
	closeBtn.textContent = " X ";
	//title
	const titleLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", [""], { for: "t-title" });
	titleLabel.textContent = "Title *";
	const titleInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", ["form-control"], {
		id: "t-title",
		type: "text",
		name: "task-title",
		placeholder: "Title",
	});
	const titleErrMsg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("small", ["err-msg"]);
	titleErrMsg.textContent = " * Task title is required";
	titleInput.appendChild(titleErrMsg);
	titleLabel.appendChild(titleInput);
	//description
	const descLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", [""], { for: "t-desc" });
	descLabel.textContent = "Description";
	const descInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", ["form-control"], {
		id: "t-desc",
		type: "textarea",
		name: "t-desc",
		placeholder: "Description",
	});
	descLabel.appendChild(descInput);
	//add/clear btns
	const projectFormBtns = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["new-task-buttons"]);
	const addBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", ["btn"], {
		id: "add-task-btn",
	});
	addBtn.textContent = "Add";
	const clearBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", ["btn"], {
		id: "task-clear",
	});
	clearBtn.textContent = "Clear fields";
	projectFormBtns.append(addBtn, clearBtn);
	//form container
	const formContainer = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["form-container"], {
		id: "new-project-form",
	});
	formContainer.append(
		formTitle,
		formSubtitle,
		closeBtn,
		titleLabel,
		descLabel,
		projectFormBtns
	);
	//wrapper
	const addProjectSection = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("section", ["add_project_section"]);
	addProjectSection.appendChild(formContainer);
}




/***/ }),

/***/ "./src/js/render/addTaskForm.js":
/*!**************************************!*\
  !*** ./src/js/render/addTaskForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskSubmit": () => (/* binding */ addTaskSubmit),
/* harmony export */   "renderAddTaskForm": () => (/* binding */ renderAddTaskForm)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM */ "./src/js/DOM.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form */ "./src/js/form.js");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard */ "./src/js/render/dashboard.js");




const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];

function addTaskSubmit() {
	//validation
	if (document.querySelector("#t-title").value === "") {
		document.getElementById("task-title-err-msg").style.display = "block";
		return;
	}
	if (document.querySelector("#t-priority").value === "") {
		document.getElementById("task-priority-err-msg").style.display = "block";
		return;
	}
	const projectAssociation = document.querySelector("#project-task-add");
	if (projectAssociation.value === "null") {
		document.querySelector("#task-project-err-msg").style.display = "block";
		return;
	}

	//task factory
	const newTask = createTask({
		title: document.querySelector("#t-title").value,
		description: document.querySelector("#t-desc").value,
		dueDate: document.querySelector("#t-date").value,
		priority: document.querySelector("#t-priority").value,
		notes: document.querySelector("#t-notes").value,
	});
	for (const project in savedProjects) {
		const title = savedProjects[project].title;

		if (document.querySelector("#project-task-add").value === title) {
			savedProjects[project].addTasktoProject(newTask);
			console.log(savedProjects[project].tasks);
		}
	}
	// setCurrentTasks(currentTasks);
	localStorage.setItem("projects", JSON.stringify(savedProjects));
	(0,_dashboard__WEBPACK_IMPORTED_MODULE_2__.renderDashboard)();
	(0,_form__WEBPACK_IMPORTED_MODULE_1__.closeTaskForm)();
}

function renderAddTaskForm() {
	//form content
	const formTitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("h2", ["form_title"]);
	formTitle.textContent = "Add new task";
	const formSubtitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("h2", ["form_subtitle"]);
	formSubtitle.textContent = "* required";
	const closeBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("span", ["material-icons", "close-form"], {
		id: "close-task-form",
	});
	closeBtn.textContent = " X ";
	//title
	const titleLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", [""], { for: "t-title" });
	titleLabel.textContent = "Title *";
	const titleInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", ["form-control"], {
		id: "t-title",
		type: "text",
		name: "task-title",
		placeholder: "Title",
	});
	const titleErrMsg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("small", ["err-msg"]);
	titleErrMsg.textContent = " * Task title is required";
	titleInput.appendChild(titleErrMsg);
	titleLabel.appendChild(titleInput);
	//description
	const descLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", [""], { for: "t-desc" });
	descLabel.textContent = "Description";
	const descInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", ["form-control"], {
		id: "t-desc",
		type: "textarea",
		name: "t-desc",
		placeholder: "Description",
	});
	descLabel.appendChild(descInput);
	//date
	const dateLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", [""], { for: "t-date" });
	dateLabel.textContent = "Due Date";
	const dateInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", ["form-control"], {
		id: "t-date",
		type: "date",
		name: "t-date",
	});
	dateLabel.appendChild(dateInput);
	//priority
	const priorityLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", [""], { for: "t-priority" });
	priorityLabel.textContent = "Priority (5 is highest) *";
	const priorityInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", ["form-control"], {
		id: "t-priority",
		type: "number",
		name: "t-priority",
		placeholder: "3",
		min: "1",
		max: "5",
	});
	const priorityErrMsg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("small", ["err-msg"]);
	priorityErrMsg.textContent = " * Priority is required";
	priorityInput.appendChild(priorityErrMsg);
	priorityLabel.appendChild(priorityInput);
	//notes
	const notesLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", [""], { for: "t-notes" });
	notesLabel.textContent = "Notes";
	const notesInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", ["form-control"], {
		id: "t-notes",
		type: "textarea",
		name: "t-notes",
		placeholder: "Notes",
	});
	notesLabel.appendChild(notesInput);
	//project list
	const projectListLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", [""], {
		for: "project-task-add",
	});
	projectListLabel.textContent = "Add to Existing Project";
	const projectListSelect = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("select", ["form-control"], {
		id: "project-task-add",
		name: "project-task-add",
	});
	const projectListOptionDEFAULT = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("option", [""], {
		value: "null",
		disabled: "",
		selected: "",
	});
	projectListOptionDEFAULT.textContent = "--Select existing project--";
	projectListSelect.appendChild(projectListOptionDEFAULT);
	////  get names of all projects
	const totalProjectNames = [];
	for (let i = 0; i < savedProjects.length; i++) {
		const project = savedProjects[i];
		totalProjectNames.push(project.title);
	}
	for (let i = 0; i < totalProjectNames.length; i++) {
		const name = totalProjectNames[i];
		const projectListOption = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("option", [""], {
			value: name,
		});
		projectListOption.textContent = name;
		projectListSelect.appendChild(projectListOption);
	}
	const projectListErrMsg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("small", ["err-msg"]);
	projectListErrMsg.textContent = " * Project association is required";
	projectListLabel.append(projectListSelect, projectListErrMsg);
	//add/clear btns
	const taskFormBtns = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["new-task-buttons"]);
	const addBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", ["btn"], {
		id: "add-task-btn",
	});
	addBtn.textContent = "Add";
	const clearBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", ["btn"], {
		id: "task-clear",
	});
	clearBtn.textContent = "Clear fields";
	taskFormBtns.append(addBtn, clearBtn);
	//form container
	const formContainer = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["form-container"], {
		id: "new-project-form",
	});
	formContainer.append(
		formTitle,
		formSubtitle,
		closeBtn,
		titleLabel,
		descLabel,
		dateLabel,
		priorityLabel,
		notesLabel,
		projectListLabel,
		taskFormBtns
	);
	//wrapper
	const addTaskSection = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("section", ["add_task_section"]);
	addTaskSection.appendChild(formContainer);
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
			// setCurrentTasks(currentTasks);
			// localStorage.setItem("tasks", JSON.stringify(currentTasks));
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

/***/ "./src/js/render/header.js":
/*!*********************************!*\
  !*** ./src/js/render/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAddMenu": () => (/* binding */ renderAddMenu),
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM */ "./src/js/DOM.js");
/* harmony import */ var _assets_checkbox_marked_circle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/checkbox-marked-circle.png */ "./src/assets/checkbox-marked-circle.png");
/* harmony import */ var _assets_plus_circle_outline_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/plus-circle-outline.png */ "./src/assets/plus-circle-outline.png");
/* harmony import */ var _assets_checkbox_marked_circle_plus_outline_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/checkbox-marked-circle-plus-outline.png */ "./src/assets/checkbox-marked-circle-plus-outline.png");
/* harmony import */ var _assets_list_group_plus_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/list-group-plus.png */ "./src/assets/list-group-plus.png");
/* harmony import */ var _assets_cog_outline_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/cog-outline.png */ "./src/assets/cog-outline.png");







function renderAddMenu() {
	const addIconMenu = document.querySelector("#add-icon-menu");
	addIconMenu.classList.toggle("icon-menu-toggle");
}

function renderHeader() {
	console.log("function entered");
	////header LEFT
	const siteLogo = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("img", ["fake-class"], {
		src: _assets_checkbox_marked_circle_png__WEBPACK_IMPORTED_MODULE_1__,
		alt: "checked circle logo",
	});
	console.log("LINE REACHED");
	const siteTitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", [""], { id: "header-site-title" });
	//seed data
	const seedDataBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", [""], { id: "seed-projects-btn" });
	const headerLeft = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", [""], { id: "headerLeft" });
	headerLeft.append(siteLogo, siteTitle, seedDataBtn);
	////header CENTER
	const searchLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", [""], { for: "site-search" });
	searchLabel.textContent = "Search the site: ";
	const searchInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", [""], {
		id: "site-search",
		type: "search",
		name: "q",
	});
	const searchBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", [""]);
	searchBtn.textContent = "Search";
	const headerCenter = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", [""], { id: "headerCenter" });
	headerCenter.append(searchLabel, searchInput, searchBtn);
	////header RIGHT
	//add icon menu
	const addBtnIcon = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("img", [""], {
		id: "add-icon",
		src: _assets_plus_circle_outline_png__WEBPACK_IMPORTED_MODULE_2__,
		alt: "add button plus icon",
	});
	const addIconMenu = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", [""], { id: "add-icon-menu" });
	const addTaskImg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("img", [""], {
		id: "add-task-form",
		src: _assets_checkbox_marked_circle_plus_outline_png__WEBPACK_IMPORTED_MODULE_3__,
		alt: "add task plus icon",
	});
	const addProjectImg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("img", [""], {
		id: "add-project-form",
		src: _assets_list_group_plus_png__WEBPACK_IMPORTED_MODULE_4__,
		alt: "add project plus icon",
	});
	addIconMenu.append(addTaskImg, addProjectImg);
	const addBtnEl = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", [""], { id: "addBtn" });
	addBtnEl.append(addBtnIcon, addIconMenu);
	//login
	const loginEl = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", [""], { id: "login" });
	loginEl.textContent = "LOGIN";
	//settings
	const settingsIcon = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("img", [""], {
		id: "settings gear icon",
		src: _assets_cog_outline_png__WEBPACK_IMPORTED_MODULE_5__,
		alt: "settings gear outline",
	});
	const settingsLink = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("a", [""], {
		href: "https://github.com/alexgeis/todo-list",
		target: "_blank",
	});
	settingsLink.appendChild(settingsIcon);
	const settingsEl = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", [""], { id: "settings" });
	settingsEl.appendChild(settingsLink);
	const headerRight = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", [""], { id: "headerRight" });
	headerRight.append(addBtnEl, loginEl, settingsEl);
	//FULL HEADER APPEND
	const header = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("header", [""], { id: "header" });
	header.append(headerLeft, headerCenter, headerRight);
	//CONTENT APPEND
	const pageContainer = document.getElementById("content");
	pageContainer.appendChild(header);
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

/***/ "./src/js/render/projectsAside.js":
/*!****************************************!*\
  !*** ./src/js/render/projectsAside.js ***!
  \****************************************/
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
			liEl.classList.add("project-list-selected");

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

/***/ "./src/js/state.js":
/*!*************************!*\
  !*** ./src/js/state.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCurrentProjects": () => (/* binding */ setCurrentProjects),
/* harmony export */   "setCurrentTasks": () => (/* binding */ setCurrentTasks)
/* harmony export */ });
const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
const savedTasks = [];
let currentTasks = savedTasks;
let currentProjects = savedProjects;

function setCurrentTasks(newTasks) {
	currentTasks = newTasks;
	localStorage.setItem("tasks", JSON.stringify(currentTasks));
}

function setCurrentProjects(newProjects) {
	currentProjects = newProjects;
	localStorage.setItem("projects", JSON.stringify(currentProjects));
}




/***/ }),

/***/ "./src/assets/checkbox-marked-circle-plus-outline.png":
/*!************************************************************!*\
  !*** ./src/assets/checkbox-marked-circle-plus-outline.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7dbbe33721f7f5394b7.png";

/***/ }),

/***/ "./src/assets/checkbox-marked-circle.png":
/*!***********************************************!*\
  !*** ./src/assets/checkbox-marked-circle.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "322192cd8c34f95ce4f9.png";

/***/ }),

/***/ "./src/assets/cog-outline.png":
/*!************************************!*\
  !*** ./src/assets/cog-outline.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88a1f32dfcb581fd3df6.png";

/***/ }),

/***/ "./src/assets/list-group-plus.png":
/*!****************************************!*\
  !*** ./src/assets/list-group-plus.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5f1ce7a307116d1a7a3.png";

/***/ }),

/***/ "./src/assets/plus-circle-outline.png":
/*!********************************************!*\
  !*** ./src/assets/plus-circle-outline.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9eeb95b294190d5f132.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBLGNBQWMsK0NBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLCtDQUFTO0FBQ2hDO0FBQ0E7QUFDQSw0QkFBNEIsK0NBQVM7QUFDckMsUUFBUSwwREFBVTtBQUNsQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RNO0FBQ2lCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhCQUE4QjtBQUMvQztBQUNBLGVBQWUsK0NBQVM7QUFDeEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGlFQUFrQjtBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVrQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRStDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5zY3NzPzYyYWYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZGF0YS9wcm9qZWN0RGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZGF0YS9zZWVkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9wcm9qZWN0QWNjLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvYWRkUHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9hZGRUYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL2Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL3Byb2plY3RUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL3Byb2plY3RzQWxsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvcHJvamVjdHNBc2lkZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvc3RhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgY3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2pzL2NyZWF0ZVwiO1xuaW1wb3J0IHtcblx0cmVuZGVyVGFza0Zvcm0sXG5cdHJlbmRlclByb2plY3RGb3JtLFxuXHRjbGVhclRhc2tGb3JtLFxuXHRjbG9zZVRhc2tGb3JtLFxuXHRjbGVhclByb2plY3RGb3JtLFxuXHRjbG9zZVByb2plY3RGb3JtLFxufSBmcm9tIFwiLi9qcy9mb3JtXCI7XG5pbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi9qcy9ET01cIjtcbmltcG9ydCB7IHJlbmRlckFkZE1lbnUsIHJlbmRlckhlYWRlciB9IGZyb20gXCIuL2pzL3JlbmRlci9oZWFkZXJcIjtcbmltcG9ydCB7IHJlbmRlckRhc2hib2FyZCB9IGZyb20gXCIuL2pzL3JlbmRlci9kYXNoYm9hcmRcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RBc2lkZUxpc3QgfSBmcm9tIFwiLi9qcy9yZW5kZXIvcHJvamVjdHNBc2lkZVwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHNBbGwgfSBmcm9tIFwiLi9qcy9yZW5kZXIvcHJvamVjdHNBbGxcIjtcbmltcG9ydCB7IGFkZFRhc2tTdWJtaXQsIHJlbmRlckFkZFRhc2tGb3JtIH0gZnJvbSBcIi4vanMvcmVuZGVyL2FkZFRhc2tGb3JtXCI7XG5pbXBvcnQge1xuXHRhZGRQcm9qZWN0U3VibWl0LFxuXHRyZW5kZXJBZGRQcm9qZWN0Rm9ybSxcbn0gZnJvbSBcIi4vanMvcmVuZGVyL2FkZFByb2plY3RGb3JtXCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50VGFza3MsIHNldEN1cnJlbnRQcm9qZWN0cyB9IGZyb20gXCIuL2pzL3N0YXRlXCI7XG5pbXBvcnQgeyBzZWVkUHJvamVjdERhdGEgfSBmcm9tIFwiLi9qcy9kYXRhL3NlZWRcIjtcbmltcG9ydCB7IGFjY29yZGlvblRvZ2dsZSB9IGZyb20gXCIuL2pzL3Byb2plY3RBY2NcIjtcbmltcG9ydCBcIi4vY3NzL3N0eWxlLnNjc3NcIjtcbi8vVEVTVCBEQVRBXG4vLyBpbXBvcnQgeyB0YXNrRGF0YSB9IGZyb20gXCIuL2pzL2RhdGEvdGFza0RhdGFcIjtcbi8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgdGFza0RhdGEpO1xuXG5yZW5kZXJIZWFkZXIoKTtcblxuLy9TRUVEIERBVEEgQlROXG5kb2N1bWVudFxuXHQucXVlcnlTZWxlY3RvcihcIiNzZWVkLXByb2plY3RzLWJ0blwiKVxuXHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlZWRQcm9qZWN0RGF0YSk7XG5cbi8vLy8gU1RBVEUgLy8vL1xuLy9ERUZBVUxUU1xuY29uc3QgREVGQVVMVF9USEVNRSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgXCJsaWdodFwiO1xuY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5jb25zdCBzYXZlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcbi8vIGNvbnN0IGN1cnJlbnRseURvbmUgPSBzYXZlZFRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5jb21wbGV0ZSA9PT0gdHJ1ZSk7XG4vLyBjb25zdCBERUZBVUxUX1RBU0tTX0RPTkUgPSBjdXJyZW50bHlEb25lLmxlbmd0aDtcbi8vIGNvbnN0IERFRkFVTFRfVEFTS1NfVE9UQUwgPSBzYXZlZEJvb2tzLmxlbmd0aDtcblxubGV0IGN1cnJlbnRUYXNrcyA9IHNhdmVkVGFza3M7XG5sZXQgY3VycmVudFByb2plY3RzID0gc2F2ZWRQcm9qZWN0cztcbmxldCBjdXJyZW50VGhlbWUgPSBERUZBVUxUX1RIRU1FO1xuLy8gbGV0IGN1cnJlbnRUYXNrc0RvbmVDb3VudCA9IERFRkFVTFRfVEFTS1NfRE9ORTtcbi8vIGxldCBjdXJyZW50VGFza3NUb3RhbENvdW50ID0gREVGQVVMVF9UQVNLU19UT1RBTDtcblxuLy9QQUdFIFJFTkRFUklOR1xuXG4vL1BST0pFQ1QgQVNJREUgQUNDT1JESUFOXG5kb2N1bWVudFxuXHQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWFjY29yZGlvbi1idG5cIilcblx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2NvcmRpb25Ub2dnbGUpO1xuXG4vL1RBU0svUFJPSkVDVCBGT1JNU1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtaWNvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyQWRkTWVudSk7XG4vL3JlbmRlciBmb3Jtc1xuZG9jdW1lbnRcblx0LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stZm9ybVwiKVxuXHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRhc2tGb3JtKTtcbmRvY3VtZW50XG5cdC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWZvcm1cIilcblx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJQcm9qZWN0Rm9ybSk7XG4vL3Rhc2sgZm9ybVxuZG9jdW1lbnRcblx0LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtdGFzay1mb3JtXCIpXG5cdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUYXNrRm9ybSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stY2xlYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyVGFza0Zvcm0pO1xuLy8vLyB0YXNrIHN1Ym1pdFxuZG9jdW1lbnRcblx0LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stYnRuXCIpXG5cdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza1N1Ym1pdCk7XG4vL3Byb2plY3QgZm9ybVxuZG9jdW1lbnRcblx0LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtcHJvamVjdC1mb3JtXCIpXG5cdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQcm9qZWN0Rm9ybSk7XG5kb2N1bWVudFxuXHQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWNsZWFyXCIpXG5cdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJQcm9qZWN0Rm9ybSk7XG4vLy8vcHJvamVjdCBzdWJtaXRcbmRvY3VtZW50XG5cdC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWJ0blwiKVxuXHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3RTdWJtaXQpO1xuXG5jb25zdCBkYXNoYm9hcmRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFzaC1hc2lkZVwiKTtcbmNvbnN0IGFsbFByb2plY3RzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1wcm9qZWN0cy1hc2lkZVwiKTtcbmNvbnN0IHByb2plY3RMaXN0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdC1hc2lkZVwiKTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcblx0Ly8gc2V0Q3VycmVudFRoZW1lKERFRkFVTFRfVEhFTUUpO1xuXHRzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0c2V0Q3VycmVudFByb2plY3RzKGN1cnJlbnRQcm9qZWN0cyk7XG5cdHJlbmRlclByb2plY3RBc2lkZUxpc3QoKTtcblx0ZGFzaGJvYXJkRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIWRhc2hib2FyZEVsLmNsYXNzTGlzdC5jb250YWlucyhcImFzaWRlLXNlbGVjdGVkXCIpKSB7XG5cdFx0XHRkYXNoYm9hcmRFbC5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRhbGxQcm9qZWN0c0VsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdHByb2plY3RMaXN0RWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdH1cblx0XHRyZW5kZXJEYXNoYm9hcmQoKTtcblx0fSk7XG5cdGFsbFByb2plY3RzRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIWFsbFByb2plY3RzRWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXNpZGUtc2VsZWN0ZWRcIikpIHtcblx0XHRcdGFsbFByb2plY3RzRWwuY2xhc3NMaXN0LmFkZChcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0ZGFzaGJvYXJkRWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0cHJvamVjdExpc3RFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0fVxuXHRcdHJlbmRlclByb2plY3RzQWxsKCk7XG5cdH0pO1xuXHRyZW5kZXJEYXNoYm9hcmQoKTtcbn07XG4iLCIvLyBET00gQ1JFQVRFIEZVTkNUSU9OXG5cbi8vYXJnIDEgPSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuLy8gYXJnIDIgPSBjbGFzcyBuYW1lcyB0byBhZGRcbi8vIGFyZyAzID0gb2JqZWN0IC0gYXR0cmlidXRlcyB0byBhZGQgLT4gYXR0cmlidXRlIDogdmFsdWVcbmZ1bmN0aW9uIGRvbUNyZWF0ZShhcmcxLCBhcmcyLCBhcmczKSB7XG5cdC8vYXJnIDEgPSBcInN0cmluZ1wiIC0gbmFtZSBvZiBIVE1MIGVsZW1lbnRcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXJnMSk7XG5cdC8vIGFyZyAyID0gW1wiYXJyYXkgb2Ygc3RyaW5nc1wiXSAtIGNsYXNzIG5hbWVzIHRvIGFkZFxuXHRpZiAoYXJnMi5sZW5ndGggPiAwKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmcyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBjbGFzc05hbWUgPSBhcmcyW2ldO1xuXHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0fVxuXHR9XG5cdC8vIGFyZyAzID0ge29iamVjdH0gLSBhdHRyaWJ1dGUgbmFtZSA6IHZhbHVlXG5cdGZvciAoY29uc3QgYXR0cmlidXRlIGluIGFyZzMpIHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGFyZzNbYXR0cmlidXRlXSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCB7IGRvbUNyZWF0ZSB9O1xuIiwiLy9ERU1PXG5cbi8vIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuLy8gY29uc3QgdGFza0RlbW8xID0gY3JlYXRlVGFzayh7XG4vLyBcdHRpdGxlOiBcIldhbGsgdGhlIERvZ1wiLFxuLy8gXHRkZXNjcmlwdGlvbjogXCJ0YWtlIHRoZSBkb2dnbyBvbiBhIGxpbCBzdHJvbGxcIixcbi8vIFx0ZHVlRGF0ZTogZGF0ZSxcbi8vIFx0cHJpb3JpdHk6IDMsXG4vLyBcdG5vdGVzOiBcImF2b2lkIDl0aCBhbmQgRWxtIC0gYWdncmVzc2l2ZSBkb2dcIixcbi8vIH0pO1xuLy8gY29uc3QgcHJvamVjdERlbW8xID0gY3JlYXRlUHJvamVjdCh7XG4vLyBcdHRpdGxlOiBcIlBlcnNvbmFsXCIsXG4vLyBcdGRlc2NyaXB0aW9uOiBcInBsZWFzdXJlLCBub3QgYnVzaW5lc3NcIixcbi8vIH0pO1xuLy8gcHJvamVjdERlbW8xLmFkZFRhc2t0b1Byb2plY3QodGFza0RlbW8xKTtcblxuY29uc3QgY3JlYXRlVGFzayA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzIH0pID0+ICh7XG5cdHRpdGxlLFxuXHRkZXNjcmlwdGlvbixcblx0ZHVlRGF0ZSxcblx0cHJpb3JpdHksXG5cdG5vdGVzLFxuXHRwcmludFRhc2soKSB7XG5cdFx0cmV0dXJuIGAke3RoaXMudGl0bGV9OiAke3RoaXMuZGVzY3JpcHRpb259YDtcblx0fSxcbn0pO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+ICh7XG5cdHRpdGxlLFxuXHRkZXNjcmlwdGlvbixcblx0dGFza3M6IFtdLFxuXHRwcmludFByb2plY3QoKSB7XG5cdFx0cmV0dXJuIGBQcm9qZWN0ICR7dGhpcy50aXRsZX06ICR7dGhpcy5kZXNjcmlwdGlvbn1gO1xuXHR9LFxuXHRwcmludFRhc2tzKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMudGFza3MpO1xuXHR9LFxuXHRhZGRUYXNrdG9Qcm9qZWN0KHRhc2spIHtcblx0XHR0aGlzLnRhc2tzLnB1c2godGFzayk7XG5cdH0sXG59KTtcblxuZXhwb3J0IHsgY3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCB9O1xuIiwiY29uc3QgcHJvamVjdERhdGEgPSBbXG5cdHtcblx0XHR0aXRsZTogXCJMYXdubW93ZXJcIixcblx0XHRkZXNjcmlwdGlvbjogXCJsYW5kc2NhcGluZyBwcm9qZWN0XCIsXG5cdFx0dGFza3M6IFtcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiTW93IHRoZSBsYXduXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHRcdFwiZ2V0IG91dCB0aGVyZSB3aXRoIHRoZSBkYW5nIG1vd2VyIGFuZCBtb3cgdGhhdCB0aGVyZSBsYXduIHRoZXJlXCIsXG5cdFx0XHRcdGR1ZURhdGU6IFwiMjAyMi0wNy0yOVwiLFxuXHRcdFx0XHRwcmlvcml0eTogXCIxXCIsXG5cdFx0XHRcdG5vdGVzOiBcIlJldHVybiBtb3dlciB0byBuZWlnaGJvciB3aGVuIGZpbmlzaGVkXCIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJBbm90aGVyIFByb2plY3RcIixcblx0XHRkZXNjcmlwdGlvbjogXCJtaXNjZWxsYW5lb3VzIHRhc2tzXCIsXG5cdFx0dGFza3M6IFtcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiV2FsayB0aGUgZG9nXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcImxlYXNoLCBvcGVuIGRvb3IsIHdhbGsgYXJvdW5kLCBjb21lIGJhY2tcIixcblx0XHRcdFx0ZHVlRGF0ZTogXCIyMDIyLTA4LTEyXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcIjJcIixcblx0XHRcdFx0bm90ZXM6IFwiYXZvaWQgb3RoZXIgZG9ncyFcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIkNvb2sgZGlubmVyXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcImNoaWNrZW4gdGlra2EgbWFzYWxhLCB3LyBqYXNtaW5lIHJpY2UsIGFuZCBzYW1vc2FzXCIsXG5cdFx0XHRcdGR1ZURhdGU6IFwiMjAyMi0wNi0xMlwiLFxuXHRcdFx0XHRwcmlvcml0eTogXCIzXCIsXG5cdFx0XHRcdG5vdGVzOiBcIm5vIHBlYW51dHMhXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJSZWFkICdPY3RvYmVyJyBCb29rXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcInJlYWQgYXQgbGVhc3QgNDAgcGFnZXMgdG9kYXlcIixcblx0XHRcdFx0ZHVlRGF0ZTogXCIyMDIyLTA4LTEyXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcIjVcIixcblx0XHRcdFx0bm90ZXM6IFwiXCIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJBIFRoaXJkIFByb2plY3QgZm9yIHRoZSBMaXN0XCIsXG5cdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcImxvbmdlciBkZXNjcmlwdGlvbiBmb3IgYSBtb3JlIGNvbXBsaWNhdGVkIHRhc2sgcHJvamVjdCBicmVha2Rvd25cIixcblx0XHR0YXNrczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJSZWFkICdPY3RvYmVyJyBCb29rXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcInJlYWQgYXQgbGVhc3QgNDAgcGFnZXMgdG9kYXlcIixcblx0XHRcdFx0ZHVlRGF0ZTogXCIyMDIyLTA4LTEyXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcIjVcIixcblx0XHRcdFx0bm90ZXM6IFwiXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJCdXkgcm9zZXNcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiMiBkb3plbiByb3NlcyBmcm9tIFNhZmV3YXlcIixcblx0XHRcdFx0ZHVlRGF0ZTogXCIyMDIyLTA4LTEyXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcIjVcIixcblx0XHRcdFx0bm90ZXM6IFwicmVkIHJvc2VzXCIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5dO1xuXG5leHBvcnQgeyBwcm9qZWN0RGF0YSB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdERhdGEgfSBmcm9tIFwiLi9wcm9qZWN0RGF0YVwiO1xuXG5mdW5jdGlvbiBzZWVkUHJvamVjdERhdGEoKSB7XG5cdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3REYXRhKSk7XG59XG5leHBvcnQgeyBzZWVkUHJvamVjdERhdGEgfTtcbiIsImNvbnN0IGFkZFRhc2tGb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZF90YXNrX3NlY3Rpb25cIik7XG5mdW5jdGlvbiByZW5kZXJUYXNrRm9ybSgpIHtcblx0YWRkVGFza0Zvcm1FbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGJsb2NrO1wiKTtcbn1cbmNvbnN0IGFkZFByb2plY3RGb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZF9wcm9qZWN0X3NlY3Rpb25cIik7XG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Rm9ybSgpIHtcblx0YWRkUHJvamVjdEZvcm1FbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGJsb2NrO1wiKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrRm9ybSgpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXRpdGxlXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LWRlc2NcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGF0ZVwiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1wcmlvcml0eVwiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1ub3Rlc1wiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10YXNrLWFkZFwiKS5vcHRpb25zLnNlbGVjdGVkSW5kZXggPSAwO1xufVxuXG5mdW5jdGlvbiBjbG9zZVRhc2tGb3JtKCkge1xuXHRhZGRUYXNrRm9ybUVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUHJvamVjdEZvcm0oKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcC10aXRsZVwiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcC1kZXNjXCIpLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY2xvc2VQcm9qZWN0Rm9ybSgpIHtcblx0YWRkUHJvamVjdEZvcm1FbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xufVxuXG5leHBvcnQge1xuXHRyZW5kZXJUYXNrRm9ybSxcblx0cmVuZGVyUHJvamVjdEZvcm0sXG5cdGNsZWFyVGFza0Zvcm0sXG5cdGNsb3NlVGFza0Zvcm0sXG5cdGNsZWFyUHJvamVjdEZvcm0sXG5cdGNsb3NlUHJvamVjdEZvcm0sXG59O1xuIiwiY29uc3QgYWNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWFjY29yZGlvbi1idG5cIik7XG5jb25zdCBhY2NQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1wYW5lbC1kaXNwbGF5XCIpO1xuZnVuY3Rpb24gYWNjb3JkaW9uVG9nZ2xlKCkge1xuXHRhY2MuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0aWYgKGFjY1BhbmVsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuXHRcdGFjY1BhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fSBlbHNlIHtcblx0XHRhY2NQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHR9XG59XG5cbmV4cG9ydCB7IGFjY29yZGlvblRvZ2dsZSB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uL0RPTVwiO1xuaW1wb3J0IHsgc2V0Q3VycmVudFByb2plY3RzIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5pbXBvcnQgeyBjbG9zZVByb2plY3RGb3JtIH0gZnJvbSBcIi4uL2Zvcm1cIjtcbmltcG9ydCB7IHJlbmRlckRhc2hib2FyZCB9IGZyb20gXCIuL2Rhc2hib2FyZFwiO1xuXG5jb25zdCBzYXZlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdFN1Ym1pdCgpIHtcblx0Y29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3Qoe1xuXHRcdHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtdGl0bGVcIikudmFsdWUsXG5cdFx0ZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcC1kZXNjXCIpLnZhbHVlLFxuXHR9KTtcblx0c2F2ZWRQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXHRzZXRDdXJyZW50UHJvamVjdHMoc2F2ZWRQcm9qZWN0cyk7XG5cdHJlbmRlckRhc2hib2FyZCgpO1xuXHRjbG9zZVByb2plY3RGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFkZFByb2plY3RGb3JtKCkge1xuXHQvL2Zvcm0gY29udGVudFxuXHRjb25zdCBmb3JtVGl0bGUgPSBkb21DcmVhdGUoXCJoMlwiLCBbXCJmb3JtX3RpdGxlXCJdKTtcblx0Zm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgbmV3IHRhc2tcIjtcblx0Y29uc3QgZm9ybVN1YnRpdGxlID0gZG9tQ3JlYXRlKFwiaDJcIiwgW1wiZm9ybV9zdWJ0aXRsZVwiXSk7XG5cdGZvcm1TdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiKiByZXF1aXJlZFwiO1xuXHRjb25zdCBjbG9zZUJ0biA9IGRvbUNyZWF0ZShcInNwYW5cIiwgW1wibWF0ZXJpYWwtaWNvbnNcIiwgXCJjbG9zZS1mb3JtXCJdLCB7XG5cdFx0aWQ6IFwiY2xvc2UtdGFzay1mb3JtXCIsXG5cdH0pO1xuXHRjbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwiIFggXCI7XG5cdC8vdGl0bGVcblx0Y29uc3QgdGl0bGVMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFtcIlwiXSwgeyBmb3I6IFwidC10aXRsZVwiIH0pO1xuXHR0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZSAqXCI7XG5cdGNvbnN0IHRpdGxlSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LXRpdGxlXCIsXG5cdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0bmFtZTogXCJ0YXNrLXRpdGxlXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiVGl0bGVcIixcblx0fSk7XG5cdGNvbnN0IHRpdGxlRXJyTXNnID0gZG9tQ3JlYXRlKFwic21hbGxcIiwgW1wiZXJyLW1zZ1wiXSk7XG5cdHRpdGxlRXJyTXNnLnRleHRDb250ZW50ID0gXCIgKiBUYXNrIHRpdGxlIGlzIHJlcXVpcmVkXCI7XG5cdHRpdGxlSW5wdXQuYXBwZW5kQ2hpbGQodGl0bGVFcnJNc2cpO1xuXHR0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXHQvL2Rlc2NyaXB0aW9uXG5cdGNvbnN0IGRlc2NMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFtcIlwiXSwgeyBmb3I6IFwidC1kZXNjXCIgfSk7XG5cdGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblx0Y29uc3QgZGVzY0lucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC1kZXNjXCIsXG5cdFx0dHlwZTogXCJ0ZXh0YXJlYVwiLFxuXHRcdG5hbWU6IFwidC1kZXNjXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiRGVzY3JpcHRpb25cIixcblx0fSk7XG5cdGRlc2NMYWJlbC5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXHQvL2FkZC9jbGVhciBidG5zXG5cdGNvbnN0IHByb2plY3RGb3JtQnRucyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJuZXctdGFzay1idXR0b25zXCJdKTtcblx0Y29uc3QgYWRkQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImJ0blwiXSwge1xuXHRcdGlkOiBcImFkZC10YXNrLWJ0blwiLFxuXHR9KTtcblx0YWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblx0Y29uc3QgY2xlYXJCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW1wiYnRuXCJdLCB7XG5cdFx0aWQ6IFwidGFzay1jbGVhclwiLFxuXHR9KTtcblx0Y2xlYXJCdG4udGV4dENvbnRlbnQgPSBcIkNsZWFyIGZpZWxkc1wiO1xuXHRwcm9qZWN0Rm9ybUJ0bnMuYXBwZW5kKGFkZEJ0biwgY2xlYXJCdG4pO1xuXHQvL2Zvcm0gY29udGFpbmVyXG5cdGNvbnN0IGZvcm1Db250YWluZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiZm9ybS1jb250YWluZXJcIl0sIHtcblx0XHRpZDogXCJuZXctcHJvamVjdC1mb3JtXCIsXG5cdH0pO1xuXHRmb3JtQ29udGFpbmVyLmFwcGVuZChcblx0XHRmb3JtVGl0bGUsXG5cdFx0Zm9ybVN1YnRpdGxlLFxuXHRcdGNsb3NlQnRuLFxuXHRcdHRpdGxlTGFiZWwsXG5cdFx0ZGVzY0xhYmVsLFxuXHRcdHByb2plY3RGb3JtQnRuc1xuXHQpO1xuXHQvL3dyYXBwZXJcblx0Y29uc3QgYWRkUHJvamVjdFNlY3Rpb24gPSBkb21DcmVhdGUoXCJzZWN0aW9uXCIsIFtcImFkZF9wcm9qZWN0X3NlY3Rpb25cIl0pO1xuXHRhZGRQcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHsgYWRkUHJvamVjdFN1Ym1pdCwgcmVuZGVyQWRkUHJvamVjdEZvcm0gfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi9ET01cIjtcbmltcG9ydCB7IGNsb3NlVGFza0Zvcm0gfSBmcm9tIFwiLi4vZm9ybVwiO1xuaW1wb3J0IHsgcmVuZGVyRGFzaGJvYXJkIH0gZnJvbSBcIi4vZGFzaGJvYXJkXCI7XG5cbmNvbnN0IHNhdmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXG5mdW5jdGlvbiBhZGRUYXNrU3VibWl0KCkge1xuXHQvL3ZhbGlkYXRpb25cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC10aXRsZVwiKS52YWx1ZSA9PT0gXCJcIikge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZS1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtcHJpb3JpdHlcIikudmFsdWUgPT09IFwiXCIpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHktZXJyLW1zZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBwcm9qZWN0QXNzb2NpYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGFzay1hZGRcIik7XG5cdGlmIChwcm9qZWN0QXNzb2NpYXRpb24udmFsdWUgPT09IFwibnVsbFwiKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByb2plY3QtZXJyLW1zZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vdGFzayBmYWN0b3J5XG5cdGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKHtcblx0XHR0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXRpdGxlXCIpLnZhbHVlLFxuXHRcdGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGVzY1wiKS52YWx1ZSxcblx0XHRkdWVEYXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGF0ZVwiKS52YWx1ZSxcblx0XHRwcmlvcml0eTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpLnZhbHVlLFxuXHRcdG5vdGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Qtbm90ZXNcIikudmFsdWUsXG5cdH0pO1xuXHRmb3IgKGNvbnN0IHByb2plY3QgaW4gc2F2ZWRQcm9qZWN0cykge1xuXHRcdGNvbnN0IHRpdGxlID0gc2F2ZWRQcm9qZWN0c1twcm9qZWN0XS50aXRsZTtcblxuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGFzay1hZGRcIikudmFsdWUgPT09IHRpdGxlKSB7XG5cdFx0XHRzYXZlZFByb2plY3RzW3Byb2plY3RdLmFkZFRhc2t0b1Byb2plY3QobmV3VGFzayk7XG5cdFx0XHRjb25zb2xlLmxvZyhzYXZlZFByb2plY3RzW3Byb2plY3RdLnRhc2tzKTtcblx0XHR9XG5cdH1cblx0Ly8gc2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoc2F2ZWRQcm9qZWN0cykpO1xuXHRyZW5kZXJEYXNoYm9hcmQoKTtcblx0Y2xvc2VUYXNrRm9ybSgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBZGRUYXNrRm9ybSgpIHtcblx0Ly9mb3JtIGNvbnRlbnRcblx0Y29uc3QgZm9ybVRpdGxlID0gZG9tQ3JlYXRlKFwiaDJcIiwgW1wiZm9ybV90aXRsZVwiXSk7XG5cdGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIG5ldyB0YXNrXCI7XG5cdGNvbnN0IGZvcm1TdWJ0aXRsZSA9IGRvbUNyZWF0ZShcImgyXCIsIFtcImZvcm1fc3VidGl0bGVcIl0pO1xuXHRmb3JtU3VidGl0bGUudGV4dENvbnRlbnQgPSBcIiogcmVxdWlyZWRcIjtcblx0Y29uc3QgY2xvc2VCdG4gPSBkb21DcmVhdGUoXCJzcGFuXCIsIFtcIm1hdGVyaWFsLWljb25zXCIsIFwiY2xvc2UtZm9ybVwiXSwge1xuXHRcdGlkOiBcImNsb3NlLXRhc2stZm9ybVwiLFxuXHR9KTtcblx0Y2xvc2VCdG4udGV4dENvbnRlbnQgPSBcIiBYIFwiO1xuXHQvL3RpdGxlXG5cdGNvbnN0IHRpdGxlTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBbXCJcIl0sIHsgZm9yOiBcInQtdGl0bGVcIiB9KTtcblx0dGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGUgKlwiO1xuXHRjb25zdCB0aXRsZUlucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC10aXRsZVwiLFxuXHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdG5hbWU6IFwidGFzay10aXRsZVwiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIlRpdGxlXCIsXG5cdH0pO1xuXHRjb25zdCB0aXRsZUVyck1zZyA9IGRvbUNyZWF0ZShcInNtYWxsXCIsIFtcImVyci1tc2dcIl0pO1xuXHR0aXRsZUVyck1zZy50ZXh0Q29udGVudCA9IFwiICogVGFzayB0aXRsZSBpcyByZXF1aXJlZFwiO1xuXHR0aXRsZUlucHV0LmFwcGVuZENoaWxkKHRpdGxlRXJyTXNnKTtcblx0dGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblx0Ly9kZXNjcmlwdGlvblxuXHRjb25zdCBkZXNjTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBbXCJcIl0sIHsgZm9yOiBcInQtZGVzY1wiIH0pO1xuXHRkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG5cdGNvbnN0IGRlc2NJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtcImZvcm0tY29udHJvbFwiXSwge1xuXHRcdGlkOiBcInQtZGVzY1wiLFxuXHRcdHR5cGU6IFwidGV4dGFyZWFcIixcblx0XHRuYW1lOiBcInQtZGVzY1wiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIkRlc2NyaXB0aW9uXCIsXG5cdH0pO1xuXHRkZXNjTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcblx0Ly9kYXRlXG5cdGNvbnN0IGRhdGVMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFtcIlwiXSwgeyBmb3I6IFwidC1kYXRlXCIgfSk7XG5cdGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcblx0Y29uc3QgZGF0ZUlucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC1kYXRlXCIsXG5cdFx0dHlwZTogXCJkYXRlXCIsXG5cdFx0bmFtZTogXCJ0LWRhdGVcIixcblx0fSk7XG5cdGRhdGVMYWJlbC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXHQvL3ByaW9yaXR5XG5cdGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBbXCJcIl0sIHsgZm9yOiBcInQtcHJpb3JpdHlcIiB9KTtcblx0cHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHkgKDUgaXMgaGlnaGVzdCkgKlwiO1xuXHRjb25zdCBwcmlvcml0eUlucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC1wcmlvcml0eVwiLFxuXHRcdHR5cGU6IFwibnVtYmVyXCIsXG5cdFx0bmFtZTogXCJ0LXByaW9yaXR5XCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiM1wiLFxuXHRcdG1pbjogXCIxXCIsXG5cdFx0bWF4OiBcIjVcIixcblx0fSk7XG5cdGNvbnN0IHByaW9yaXR5RXJyTXNnID0gZG9tQ3JlYXRlKFwic21hbGxcIiwgW1wiZXJyLW1zZ1wiXSk7XG5cdHByaW9yaXR5RXJyTXNnLnRleHRDb250ZW50ID0gXCIgKiBQcmlvcml0eSBpcyByZXF1aXJlZFwiO1xuXHRwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5RXJyTXNnKTtcblx0cHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblx0Ly9ub3Rlc1xuXHRjb25zdCBub3Rlc0xhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgW1wiXCJdLCB7IGZvcjogXCJ0LW5vdGVzXCIgfSk7XG5cdG5vdGVzTGFiZWwudGV4dENvbnRlbnQgPSBcIk5vdGVzXCI7XG5cdGNvbnN0IG5vdGVzSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LW5vdGVzXCIsXG5cdFx0dHlwZTogXCJ0ZXh0YXJlYVwiLFxuXHRcdG5hbWU6IFwidC1ub3Rlc1wiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIk5vdGVzXCIsXG5cdH0pO1xuXHRub3Rlc0xhYmVsLmFwcGVuZENoaWxkKG5vdGVzSW5wdXQpO1xuXHQvL3Byb2plY3QgbGlzdFxuXHRjb25zdCBwcm9qZWN0TGlzdExhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgW1wiXCJdLCB7XG5cdFx0Zm9yOiBcInByb2plY3QtdGFzay1hZGRcIixcblx0fSk7XG5cdHByb2plY3RMaXN0TGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCB0byBFeGlzdGluZyBQcm9qZWN0XCI7XG5cdGNvbnN0IHByb2plY3RMaXN0U2VsZWN0ID0gZG9tQ3JlYXRlKFwic2VsZWN0XCIsIFtcImZvcm0tY29udHJvbFwiXSwge1xuXHRcdGlkOiBcInByb2plY3QtdGFzay1hZGRcIixcblx0XHRuYW1lOiBcInByb2plY3QtdGFzay1hZGRcIixcblx0fSk7XG5cdGNvbnN0IHByb2plY3RMaXN0T3B0aW9uREVGQVVMVCA9IGRvbUNyZWF0ZShcIm9wdGlvblwiLCBbXCJcIl0sIHtcblx0XHR2YWx1ZTogXCJudWxsXCIsXG5cdFx0ZGlzYWJsZWQ6IFwiXCIsXG5cdFx0c2VsZWN0ZWQ6IFwiXCIsXG5cdH0pO1xuXHRwcm9qZWN0TGlzdE9wdGlvbkRFRkFVTFQudGV4dENvbnRlbnQgPSBcIi0tU2VsZWN0IGV4aXN0aW5nIHByb2plY3QtLVwiO1xuXHRwcm9qZWN0TGlzdFNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdE9wdGlvbkRFRkFVTFQpO1xuXHQvLy8vICBnZXQgbmFtZXMgb2YgYWxsIHByb2plY3RzXG5cdGNvbnN0IHRvdGFsUHJvamVjdE5hbWVzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHByb2plY3QgPSBzYXZlZFByb2plY3RzW2ldO1xuXHRcdHRvdGFsUHJvamVjdE5hbWVzLnB1c2gocHJvamVjdC50aXRsZSk7XG5cdH1cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFByb2plY3ROYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IG5hbWUgPSB0b3RhbFByb2plY3ROYW1lc1tpXTtcblx0XHRjb25zdCBwcm9qZWN0TGlzdE9wdGlvbiA9IGRvbUNyZWF0ZShcIm9wdGlvblwiLCBbXCJcIl0sIHtcblx0XHRcdHZhbHVlOiBuYW1lLFxuXHRcdH0pO1xuXHRcdHByb2plY3RMaXN0T3B0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcblx0XHRwcm9qZWN0TGlzdFNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdE9wdGlvbik7XG5cdH1cblx0Y29uc3QgcHJvamVjdExpc3RFcnJNc2cgPSBkb21DcmVhdGUoXCJzbWFsbFwiLCBbXCJlcnItbXNnXCJdKTtcblx0cHJvamVjdExpc3RFcnJNc2cudGV4dENvbnRlbnQgPSBcIiAqIFByb2plY3QgYXNzb2NpYXRpb24gaXMgcmVxdWlyZWRcIjtcblx0cHJvamVjdExpc3RMYWJlbC5hcHBlbmQocHJvamVjdExpc3RTZWxlY3QsIHByb2plY3RMaXN0RXJyTXNnKTtcblx0Ly9hZGQvY2xlYXIgYnRuc1xuXHRjb25zdCB0YXNrRm9ybUJ0bnMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wibmV3LXRhc2stYnV0dG9uc1wiXSk7XG5cdGNvbnN0IGFkZEJ0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBbXCJidG5cIl0sIHtcblx0XHRpZDogXCJhZGQtdGFzay1idG5cIixcblx0fSk7XG5cdGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cdGNvbnN0IGNsZWFyQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImJ0blwiXSwge1xuXHRcdGlkOiBcInRhc2stY2xlYXJcIixcblx0fSk7XG5cdGNsZWFyQnRuLnRleHRDb250ZW50ID0gXCJDbGVhciBmaWVsZHNcIjtcblx0dGFza0Zvcm1CdG5zLmFwcGVuZChhZGRCdG4sIGNsZWFyQnRuKTtcblx0Ly9mb3JtIGNvbnRhaW5lclxuXHRjb25zdCBmb3JtQ29udGFpbmVyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcImZvcm0tY29udGFpbmVyXCJdLCB7XG5cdFx0aWQ6IFwibmV3LXByb2plY3QtZm9ybVwiLFxuXHR9KTtcblx0Zm9ybUNvbnRhaW5lci5hcHBlbmQoXG5cdFx0Zm9ybVRpdGxlLFxuXHRcdGZvcm1TdWJ0aXRsZSxcblx0XHRjbG9zZUJ0bixcblx0XHR0aXRsZUxhYmVsLFxuXHRcdGRlc2NMYWJlbCxcblx0XHRkYXRlTGFiZWwsXG5cdFx0cHJpb3JpdHlMYWJlbCxcblx0XHRub3Rlc0xhYmVsLFxuXHRcdHByb2plY3RMaXN0TGFiZWwsXG5cdFx0dGFza0Zvcm1CdG5zXG5cdCk7XG5cdC8vd3JhcHBlclxuXHRjb25zdCBhZGRUYXNrU2VjdGlvbiA9IGRvbUNyZWF0ZShcInNlY3Rpb25cIiwgW1wiYWRkX3Rhc2tfc2VjdGlvblwiXSk7XG5cdGFkZFRhc2tTZWN0aW9uLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xufVxuXG5leHBvcnQgeyBhZGRUYXNrU3VibWl0LCByZW5kZXJBZGRUYXNrRm9ybSB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uL0RPTVwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcblxuZnVuY3Rpb24gcmVuZGVyRGFzaGJvYXJkKCkge1xuXHQvL2dldCBhbGwgdGFza3MgZnJvbSBhbGwgcHJvamVjdHNcblx0Y29uc3QgY3VycmVudFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcblx0Y29uc3QgY3VycmVudFRhc2tzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c1tpXTtcblx0XHRjdXJyZW50VGFza3MucHVzaCguLi5wcm9qZWN0LnRhc2tzKTtcblx0fVxuXHQvL3VwZGF0ZSBtYWluIGhlYWRlclxuXHRjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWhlYWRlclwiKTtcblx0bWFpbkhlYWRlci50ZXh0Q29udGVudCA9IFwiREFTSEJPQVJEXCI7XG5cdC8vY2xlYXIgY3VycmVudCB0YXNrc1xuXHRjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnRcIik7XG5cdHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0Ly9yZW5kZXIgY3VycmVudFRhc2tzIHRhc2tzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdGFzayA9IGN1cnJlbnRUYXNrc1tpXTtcblx0XHRjb25zdCB0YXNrQ2FyZCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWNhcmRcIl0sIHsgXCJkYXRhLXRhc2staW5kZXhcIjogaSB9KTtcblx0XHQvL2lubmVyIHRhc2sgY2FyZCBkaXYgaXRlbXNcblx0XHQvL1RJVExFXG5cdFx0Y29uc3QgdGFza1RpdGxlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stdGl0bGVcIl0pO1xuXHRcdHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdFx0Ly9ERVNDUklQVElPTlxuXHRcdGNvbnN0IHRhc2tEZXNjID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGVzY3JpcHRpb25cIl0pO1xuXHRcdHRhc2tEZXNjLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcblx0XHQvL0RVRSBEQVRFXG5cdFx0Y29uc3QgdGFza0RhdGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1kYXRlXCJdKTtcblx0XHR0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblx0XHQvL1BSSU9SSVRZXG5cdFx0Y29uc3QgdGFza1ByaW9yaXR5ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stcHJpb3JpdHlcIl0pO1xuXHRcdHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG5cdFx0Ly9OT1RFU1xuXHRcdGNvbnN0IHRhc2tOb3RlcyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLW5vdGVzXCJdKTtcblx0XHR0YXNrTm90ZXMudGV4dENvbnRlbnQgPSB0YXNrLm5vdGVzO1xuXHRcdC8vREVMRVRFIElDT05cblx0XHRjb25zdCB0YXNrRGVsZXRlSWNvbiA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJ0YXNrLWRlbGV0ZVwiXSwge1xuXHRcdFx0c3JjOiBkZWxldGVJY29uLFxuXHRcdFx0YWx0OiBcInRyYXNoIGNhbiBkZWxldGUgaWNvblwiLFxuXHRcdH0pO1xuXHRcdHRhc2tEZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSh0YXNrQ2FyZCk7XG5cdFx0XHRsZXQgaW5kZXggPSB0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pbmRleFwiKTtcblx0XHRcdGN1cnJlbnRUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0Ly8gc2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdFx0XHQvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrcykpO1xuXHRcdFx0cmVuZGVyVGFza3MoKTtcblx0XHR9KTtcblx0XHQvL0FQUEVORCBFTEVNRU5UU1xuXHRcdHRhc2tDYXJkLmFwcGVuZChcblx0XHRcdHRhc2tUaXRsZSxcblx0XHRcdHRhc2tEZXNjLFxuXHRcdFx0dGFza0RhdGUsXG5cdFx0XHR0YXNrUHJpb3JpdHksXG5cdFx0XHR0YXNrTm90ZXMsXG5cdFx0XHR0YXNrRGVsZXRlSWNvblxuXHRcdCk7XG5cdFx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG5cdH1cbn1cblxuZXhwb3J0IHsgcmVuZGVyRGFzaGJvYXJkIH07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vRE9NXCI7XG5pbXBvcnQgY2hlY2tMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvY2hlY2tib3gtbWFya2VkLWNpcmNsZS5wbmdcIjtcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvcGx1cy1jaXJjbGUtb3V0bGluZS5wbmdcIjtcbmltcG9ydCBhZGRUYXNrSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2NoZWNrYm94LW1hcmtlZC1jaXJjbGUtcGx1cy1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IGFkZFByb2plY3RJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvbGlzdC1ncm91cC1wbHVzLnBuZ1wiO1xuaW1wb3J0IGdlYXJJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvY29nLW91dGxpbmUucG5nXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckFkZE1lbnUoKSB7XG5cdGNvbnN0IGFkZEljb25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtaWNvbi1tZW51XCIpO1xuXHRhZGRJY29uTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiaWNvbi1tZW51LXRvZ2dsZVwiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuXHRjb25zb2xlLmxvZyhcImZ1bmN0aW9uIGVudGVyZWRcIik7XG5cdC8vLy9oZWFkZXIgTEVGVFxuXHRjb25zdCBzaXRlTG9nbyA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJmYWtlLWNsYXNzXCJdLCB7XG5cdFx0c3JjOiBjaGVja0xvZ28sXG5cdFx0YWx0OiBcImNoZWNrZWQgY2lyY2xlIGxvZ29cIixcblx0fSk7XG5cdGNvbnNvbGUubG9nKFwiTElORSBSRUFDSEVEXCIpO1xuXHRjb25zdCBzaXRlVGl0bGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiXCJdLCB7IGlkOiBcImhlYWRlci1zaXRlLXRpdGxlXCIgfSk7XG5cdC8vc2VlZCBkYXRhXG5cdGNvbnN0IHNlZWREYXRhQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcIlwiXSwgeyBpZDogXCJzZWVkLXByb2plY3RzLWJ0blwiIH0pO1xuXHRjb25zdCBoZWFkZXJMZWZ0ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcIlwiXSwgeyBpZDogXCJoZWFkZXJMZWZ0XCIgfSk7XG5cdGhlYWRlckxlZnQuYXBwZW5kKHNpdGVMb2dvLCBzaXRlVGl0bGUsIHNlZWREYXRhQnRuKTtcblx0Ly8vL2hlYWRlciBDRU5URVJcblx0Y29uc3Qgc2VhcmNoTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBbXCJcIl0sIHsgZm9yOiBcInNpdGUtc2VhcmNoXCIgfSk7XG5cdHNlYXJjaExhYmVsLnRleHRDb250ZW50ID0gXCJTZWFyY2ggdGhlIHNpdGU6IFwiO1xuXHRjb25zdCBzZWFyY2hJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtcIlwiXSwge1xuXHRcdGlkOiBcInNpdGUtc2VhcmNoXCIsXG5cdFx0dHlwZTogXCJzZWFyY2hcIixcblx0XHRuYW1lOiBcInFcIixcblx0fSk7XG5cdGNvbnN0IHNlYXJjaEJ0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBbXCJcIl0pO1xuXHRzZWFyY2hCdG4udGV4dENvbnRlbnQgPSBcIlNlYXJjaFwiO1xuXHRjb25zdCBoZWFkZXJDZW50ZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiXCJdLCB7IGlkOiBcImhlYWRlckNlbnRlclwiIH0pO1xuXHRoZWFkZXJDZW50ZXIuYXBwZW5kKHNlYXJjaExhYmVsLCBzZWFyY2hJbnB1dCwgc2VhcmNoQnRuKTtcblx0Ly8vL2hlYWRlciBSSUdIVFxuXHQvL2FkZCBpY29uIG1lbnVcblx0Y29uc3QgYWRkQnRuSWNvbiA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJcIl0sIHtcblx0XHRpZDogXCJhZGQtaWNvblwiLFxuXHRcdHNyYzogYWRkSWNvbixcblx0XHRhbHQ6IFwiYWRkIGJ1dHRvbiBwbHVzIGljb25cIixcblx0fSk7XG5cdGNvbnN0IGFkZEljb25NZW51ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcIlwiXSwgeyBpZDogXCJhZGQtaWNvbi1tZW51XCIgfSk7XG5cdGNvbnN0IGFkZFRhc2tJbWcgPSBkb21DcmVhdGUoXCJpbWdcIiwgW1wiXCJdLCB7XG5cdFx0aWQ6IFwiYWRkLXRhc2stZm9ybVwiLFxuXHRcdHNyYzogYWRkVGFza0ljb24sXG5cdFx0YWx0OiBcImFkZCB0YXNrIHBsdXMgaWNvblwiLFxuXHR9KTtcblx0Y29uc3QgYWRkUHJvamVjdEltZyA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJcIl0sIHtcblx0XHRpZDogXCJhZGQtcHJvamVjdC1mb3JtXCIsXG5cdFx0c3JjOiBhZGRQcm9qZWN0SWNvbixcblx0XHRhbHQ6IFwiYWRkIHByb2plY3QgcGx1cyBpY29uXCIsXG5cdH0pO1xuXHRhZGRJY29uTWVudS5hcHBlbmQoYWRkVGFza0ltZywgYWRkUHJvamVjdEltZyk7XG5cdGNvbnN0IGFkZEJ0bkVsID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcIlwiXSwgeyBpZDogXCJhZGRCdG5cIiB9KTtcblx0YWRkQnRuRWwuYXBwZW5kKGFkZEJ0bkljb24sIGFkZEljb25NZW51KTtcblx0Ly9sb2dpblxuXHRjb25zdCBsb2dpbkVsID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcIlwiXSwgeyBpZDogXCJsb2dpblwiIH0pO1xuXHRsb2dpbkVsLnRleHRDb250ZW50ID0gXCJMT0dJTlwiO1xuXHQvL3NldHRpbmdzXG5cdGNvbnN0IHNldHRpbmdzSWNvbiA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJcIl0sIHtcblx0XHRpZDogXCJzZXR0aW5ncyBnZWFyIGljb25cIixcblx0XHRzcmM6IGdlYXJJY29uLFxuXHRcdGFsdDogXCJzZXR0aW5ncyBnZWFyIG91dGxpbmVcIixcblx0fSk7XG5cdGNvbnN0IHNldHRpbmdzTGluayA9IGRvbUNyZWF0ZShcImFcIiwgW1wiXCJdLCB7XG5cdFx0aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vYWxleGdlaXMvdG9kby1saXN0XCIsXG5cdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHR9KTtcblx0c2V0dGluZ3NMaW5rLmFwcGVuZENoaWxkKHNldHRpbmdzSWNvbik7XG5cdGNvbnN0IHNldHRpbmdzRWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiXCJdLCB7IGlkOiBcInNldHRpbmdzXCIgfSk7XG5cdHNldHRpbmdzRWwuYXBwZW5kQ2hpbGQoc2V0dGluZ3NMaW5rKTtcblx0Y29uc3QgaGVhZGVyUmlnaHQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiXCJdLCB7IGlkOiBcImhlYWRlclJpZ2h0XCIgfSk7XG5cdGhlYWRlclJpZ2h0LmFwcGVuZChhZGRCdG5FbCwgbG9naW5FbCwgc2V0dGluZ3NFbCk7XG5cdC8vRlVMTCBIRUFERVIgQVBQRU5EXG5cdGNvbnN0IGhlYWRlciA9IGRvbUNyZWF0ZShcImhlYWRlclwiLCBbXCJcIl0sIHsgaWQ6IFwiaGVhZGVyXCIgfSk7XG5cdGhlYWRlci5hcHBlbmQoaGVhZGVyTGVmdCwgaGVhZGVyQ2VudGVyLCBoZWFkZXJSaWdodCk7XG5cdC8vQ09OVEVOVCBBUFBFTkRcblx0Y29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblx0cGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5leHBvcnQgeyByZW5kZXJBZGRNZW51LCByZW5kZXJIZWFkZXIgfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi9ET01cIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RUYXNrcyhpbmRleCkge1xuXHQvL2dldCBhbGwgdGFza3MgZnJvbSBhbGwgcHJvamVjdHNcblx0Y29uc3QgY3VycmVudFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcblx0Y29uc3QgcmVuZGVyUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c1tpbmRleF07XG5cdGNvbnNvbGUubG9nKHJlbmRlclByb2plY3QudGFza3MpO1xuXHRjb25zdCBjdXJyZW50VGFza3MgPSByZW5kZXJQcm9qZWN0LnRhc2tzIHx8IFtdO1xuXHQvL3VwZGF0ZSBtYWluIGhlYWRlclxuXHRjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWhlYWRlclwiKTtcblx0bWFpbkhlYWRlci50ZXh0Q29udGVudCA9IHJlbmRlclByb2plY3QudGl0bGUudG9VcHBlckNhc2UoKTtcblx0Ly9jbGVhciBjdXJyZW50IHRhc2tzXG5cdGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGVudFwiKTtcblx0dGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXHQvL3JlbmRlciBjdXJyZW50VGFza3MgdGFza3Ncblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50VGFza3MubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCB0YXNrID0gY3VycmVudFRhc2tzW2ldO1xuXHRcdGNvbnN0IHRhc2tDYXJkID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stY2FyZFwiXSwgeyBcImRhdGEtaW5kZXhcIjogaSB9KTtcblx0XHQvL2lubmVyIHRhc2sgY2FyZCBkaXYgaXRlbXNcblx0XHQvL1RJVExFXG5cdFx0Y29uc3QgdGFza1RpdGxlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stdGl0bGVcIl0pO1xuXHRcdHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdFx0Ly9ERVNDUklQVElPTlxuXHRcdGNvbnN0IHRhc2tEZXNjID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGVzY3JpcHRpb25cIl0pO1xuXHRcdHRhc2tEZXNjLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcblx0XHQvL0RVRSBEQVRFXG5cdFx0Y29uc3QgdGFza0RhdGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1kYXRlXCJdKTtcblx0XHR0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblx0XHQvL1BSSU9SSVRZXG5cdFx0Y29uc3QgdGFza1ByaW9yaXR5ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stcHJpb3JpdHlcIl0pO1xuXHRcdHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG5cdFx0Ly9OT1RFU1xuXHRcdGNvbnN0IHRhc2tOb3RlcyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLW5vdGVzXCJdKTtcblx0XHR0YXNrTm90ZXMudGV4dENvbnRlbnQgPSB0YXNrLm5vdGVzO1xuXHRcdC8vREVMRVRFIElDT05cblx0XHRjb25zdCB0YXNrRGVsZXRlSWNvbiA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJ0YXNrLWRlbGV0ZVwiXSwge1xuXHRcdFx0c3JjOiBkZWxldGVJY29uLFxuXHRcdFx0YWx0OiBcInRyYXNoIGNhbiBkZWxldGUgaWNvblwiLFxuXHRcdH0pO1xuXHRcdHRhc2tEZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSh0YXNrQ2FyZCk7XG5cdFx0XHRsZXQgaW5kZXggPSB0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG5cdFx0XHRjdXJyZW50VGFza3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHNldEN1cnJlbnRUYXNrcyhjdXJyZW50VGFza3MpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza3MpKTtcblx0XHRcdHJlbmRlclRhc2tzKCk7XG5cdFx0fSk7XG5cdFx0Ly9BUFBFTkQgRUxFTUVOVFNcblx0XHR0YXNrQ2FyZC5hcHBlbmQoXG5cdFx0XHR0YXNrVGl0bGUsXG5cdFx0XHR0YXNrRGVzYyxcblx0XHRcdHRhc2tEYXRlLFxuXHRcdFx0dGFza1ByaW9yaXR5LFxuXHRcdFx0dGFza05vdGVzLFxuXHRcdFx0dGFza0RlbGV0ZUljb25cblx0XHQpO1xuXHRcdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXHR9XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RUYXNrcyB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uL0RPTVwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHNBbGwoKSB7XG5cdC8vZ2V0IGFsbCBwcm9qZWN0c1xuXHRjb25zdCBjdXJyZW50UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuXHRjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdHMpO1xuXHQvL3VwZGF0ZSBtYWluIGhlYWRlclxuXHRjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWhlYWRlclwiKTtcblx0bWFpbkhlYWRlci50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFNcIjtcblx0Ly9jbGVhciBjdXJyZW50IGNvbnRlbnRcblx0Y29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuXHRwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cdC8vcmVuZGVyIGN1cnJlbnRQcm9qZWN0cyBwcm9qZWN0c1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdHNbaV07XG5cdFx0Y29uc3QgcHJvamVjdENhcmQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wicHJvamVjdC1jYXJkXCJdLCB7IFwiZGF0YS1pbmRleFwiOiBpIH0pO1xuXHRcdC8vaW5uZXIgcHJvamVjdCBjYXJkIGRpdiBpdGVtc1xuXHRcdC8vVElUTEVcblx0XHRjb25zdCBwcm9qZWN0VGl0bGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wicHJvamVjdC10aXRsZVwiXSk7XG5cdFx0cHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblx0XHQvL0RFU0NSSVBUSU9OXG5cdFx0Y29uc3QgcHJvamVjdERlc2MgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wicHJvamVjdC1kZXNjcmlwdGlvblwiXSk7XG5cdFx0cHJvamVjdERlc2MudGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuXHRcdC8vVEFTS1Ncblx0XHRjb25zdCBwcm9qZWN0VGFza3NMaXN0ID0gZG9tQ3JlYXRlKFwidWxcIiwgW1wicHJvamVjdC10YXNrcy1saXN0XCJdKTtcblx0XHRsZXQgdGFza0FycmF5ID0gcHJvamVjdC50YXNrcztcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgdGFzayA9IHRhc2tBcnJheVtpXTtcblx0XHRcdGNvbnN0IGxpID0gZG9tQ3JlYXRlKFwibGlcIiwgW1wicHJvamVjdC10YXNrLWxpc3QtaXRlbVwiXSk7XG5cdFx0XHRsaS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdFx0XHRwcm9qZWN0VGFza3NMaXN0LmFwcGVuZENoaWxkKGxpKTtcblx0XHR9XG5cdFx0Y29uc3QgcHJvamVjdFRhc2tzID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInByb2plY3QtdGFza3NcIl0pO1xuXHRcdHByb2plY3RUYXNrcy5hcHBlbmRDaGlsZChwcm9qZWN0VGFza3NMaXN0KTtcblx0XHQvL0RFTEVURSBJQ09OXG5cdFx0Y29uc3QgcHJvamVjdERlbGV0ZUljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgW1wicHJvamVjdC1kZWxldGVcIl0sIHtcblx0XHRcdHNyYzogZGVsZXRlSWNvbixcblx0XHRcdGFsdDogXCJ0cmFzaCBjYW4gZGVsZXRlIGljb25cIixcblx0XHR9KTtcblx0XHRwcm9qZWN0RGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cHJvamVjdERlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUocHJvamVjdENhcmQpO1xuXHRcdFx0bGV0IGluZGV4ID0gcHJvamVjdERlbGV0ZUljb24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXHRcdFx0Y3VycmVudFByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHQvLyBzZXRDdXJyZW50UHJvamVjdHMoY3VycmVudFByb2plY3RzKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3RzKSk7XG5cdFx0XHRyZW5kZXJQcm9qZWN0c0FsbCgpO1xuXHRcdH0pO1xuXHRcdC8vQVBQRU5EIEVMRU1FTlRTXG5cdFx0cHJvamVjdENhcmQuYXBwZW5kKFxuXHRcdFx0cHJvamVjdFRpdGxlLFxuXHRcdFx0cHJvamVjdERlc2MsXG5cdFx0XHRwcm9qZWN0VGFza3MsXG5cdFx0XHRwcm9qZWN0RGVsZXRlSWNvblxuXHRcdCk7XG5cdFx0cHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG5cdH1cbn1cblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdHNBbGwgfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi9ET01cIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RUYXNrcyB9IGZyb20gXCIuL3Byb2plY3RUYXNrc1wiO1xuLy9BTEwgUFJPSkVDVFMgKEZPUiBQUk9KRUNUIEFDQ09SRElPTiBBU0lERSlcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RBc2lkZUxpc3QoKSB7XG5cdGNvbnN0IHNhdmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXHRjb25zdCB0b3RhbFByb2plY3ROYW1lcyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNhdmVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gc2F2ZWRQcm9qZWN0c1tpXTtcblx0XHR0b3RhbFByb2plY3ROYW1lcy5wdXNoKHByb2plY3QudGl0bGUpO1xuXHR9XG5cdC8vLy9kb20gbG9naWNcblx0Y29uc3QgZGFzaGJvYXJkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhc2gtYXNpZGVcIik7XG5cdGNvbnN0IHByb2plY3RMaXN0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdC1hc2lkZVwiKTtcblx0Y29uc3QgYWxsUHJvamVjdHNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLXByb2plY3RzLWFzaWRlXCIpO1xuXHRjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1wYW5lbC1saXN0XCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsUHJvamVjdE5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRvdGFsUHJvamVjdE5hbWVzW2ldO1xuXHRcdGNvbnN0IGxpRWwgPSBkb21DcmVhdGUoXCJsaVwiLCBbXCJwcm9qZWN0LWxpc3QtaXRlbVwiXSwge1xuXHRcdFx0XCJkYXRhLXByb2plY3QtaW5kZXhcIjogaSxcblx0XHR9KTtcblx0XHRsaUVsLnRleHRDb250ZW50ID0gbmFtZTtcblx0XHRsaUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbGlzdC1pdGVtXCIpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0SXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgaXRlbSA9IHByb2plY3RJdGVtc1tpXTtcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdC1saXN0LXNlbGVjdGVkXCIpO1xuXHRcdFx0fVxuXHRcdFx0bGlFbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LXNlbGVjdGVkXCIpO1xuXG5cdFx0XHRpZiAoIXByb2plY3RMaXN0RWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXNpZGUtc2VsZWN0ZWRcIikpIHtcblx0XHRcdFx0cHJvamVjdExpc3RFbC5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRcdGRhc2hib2FyZEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdFx0YWxsUHJvamVjdHNFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHR9XG5cdFx0XHRsZXQgaW5kZXggPSBsaUVsLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiKTtcblx0XHRcdHJlbmRlclByb2plY3RUYXNrcyhpbmRleCk7XG5cdFx0fSk7XG5cdFx0cHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGlFbCk7XG5cdH1cbn1cblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdEFzaWRlTGlzdCB9O1xuIiwiY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5jb25zdCBzYXZlZFRhc2tzID0gW107XG5sZXQgY3VycmVudFRhc2tzID0gc2F2ZWRUYXNrcztcbmxldCBjdXJyZW50UHJvamVjdHMgPSBzYXZlZFByb2plY3RzO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50VGFza3MobmV3VGFza3MpIHtcblx0Y3VycmVudFRhc2tzID0gbmV3VGFza3M7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0cyhuZXdQcm9qZWN0cykge1xuXHRjdXJyZW50UHJvamVjdHMgPSBuZXdQcm9qZWN0cztcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdHMpKTtcbn1cblxuZXhwb3J0IHsgc2V0Q3VycmVudFRhc2tzLCBzZXRDdXJyZW50UHJvamVjdHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==