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
/* harmony import */ var _js_render_components_aside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/render/components/aside */ "./src/js/render/components/aside.js");
/* harmony import */ var _js_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/state */ "./src/js/state.js");
/* harmony import */ var _js_render_renderPages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/render/renderPages */ "./src/js/render/renderPages.js");

// import { renderSite } from "./js/render/renderPages";
//TEST DATA
// import { taskData } from "./js/data/taskData";
// localStorage.setItem("tasks", taskData);




//// STATE ////
//DEFAULTS
const DEFAULT_THEME = localStorage.getItem("theme") || "light";
const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
// const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
// const currentlyDone = savedTasks.filter((task) => task.complete === true);
// const DEFAULT_TASKS_DONE = currentlyDone.length;
// const DEFAULT_TASKS_TOTAL = savedBooks.length;

// let currentTasks = savedTasks;
let currentProjects = savedProjects;
let currentTheme = DEFAULT_THEME;

window.onload = () => {
	(0,_js_render_renderPages__WEBPACK_IMPORTED_MODULE_3__.renderDashboardPage)();
	// setCurrentTheme(DEFAULT_THEME);
	// setCurrentTasks(currentTasks);
	// setCurrentProjects(currentProjects);
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
	//// arg 1 = "string" - name of HTML element
	const element = document.createElement(arg1);
	//// arg 2 = ["array of strings"] - class names to add
	if (Array.isArray(arg2) && arg2.length > 0) {
		for (let i = 0; i < arg2.length; i++) {
			const className = arg2[i];
			element.classList.add(className);
		}
	}
	//// arg 3 = {object} - attribute name : value
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
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create */ "./src/js/create.js");


const project1task1 = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createTask)({
	title: "Mow the lawn",
	description:
		"get out there with the dang mower and mow that there lawn there",
	dueDate: "2022-07-29",
	priority: "1",
	notes: "Return mower to neighbor when finished",
});
const project1 = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createProject)({
	title: "Lawnmower",
	description: "landscaping project",
});
project1.addTasktoProject(project1task1);

const project2task1 = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createTask)({
	title: "Walk the dog",
	description: "leash, open door, walk around, come back",
	dueDate: "2022-08-12",
	priority: "2",
	notes: "avoid other dogs!",
});
const project2task2 = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createTask)({
	title: "Cook dinner",
	description: "chicken tikka masala, w/ jasmine rice, and samosas",
	dueDate: "2022-06-12",
	priority: "3",
	notes: "no peanuts!",
});
const project2task3 = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createTask)({
	title: "Read 'October' Book",
	description: "read at least 40 pages today",
	dueDate: "2022-08-12",
	priority: "5",
	notes: "",
});
const project2 = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createProject)({
	title: "Another Project",
	description: "miscellaneous tasks",
});
project2.addTasktoProject(project2task1, project2task2, project2task3);

const project3task1 = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createTask)({
	title: "Read 'October' Book",
	description: "read at least 40 pages today",
	dueDate: "2022-08-12",
	priority: "5",
	notes: "",
});
const project3task2 = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createTask)({
	title: "Buy roses",
	description: "2 dozen roses from Safeway",
	dueDate: "2022-08-12",
	priority: "5",
	notes: "red roses",
});
const project3 = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createProject)({
	title: "A Third Project for the List",
	description:
		"longer description for a more complicated task project breakdown",
});
project3.addTasktoProject(project3task1, project3task2);

let projectData = [];
projectData.push(project1, project2, project3);




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
function renderTaskForm() {
	document
		.querySelector(".add_task_section")
		.setAttribute("style", "display: block;");
}
function renderProjectForm() {
	document
		.querySelector(".add_project_section")
		.setAttribute("style", "display: block;");
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
	document
		.querySelector(".add_task_section")
		.setAttribute("style", "display: none;");
}

function clearProjectForm() {
	document.querySelector("#p-title").value = "";
	document.querySelector("#p-desc").value = "";
}

function closeProjectForm() {
	document
		.querySelector(".add_project_section")
		.setAttribute("style", "display: none;");
}




/***/ }),

/***/ "./src/js/render/components/addProjectForm.js":
/*!****************************************************!*\
  !*** ./src/js/render/components/addProjectForm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectSubmit": () => (/* binding */ addProjectSubmit),
/* harmony export */   "renderAddProjectForm": () => (/* binding */ renderAddProjectForm)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ "./src/js/DOM.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../create */ "./src/js/create.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state */ "./src/js/state.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../form */ "./src/js/form.js");
/* harmony import */ var _renderPages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderPages */ "./src/js/render/renderPages.js");
/* harmony import */ var _pages_projectTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/projectTasks */ "./src/js/render/pages/projectTasks.js");







const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];

function addProjectSubmit() {
	//validation
	if (document.getElementById("p-title").value === "") {
		document.getElementById("project-title-err-msg").style.display = "block";
		return;
	} else if (document.getElementById("p-title").value !== "") {
		document.getElementById("project-title-err-msg").style.display = "none";
	}

	//project factory
	const newProject = (0,_create__WEBPACK_IMPORTED_MODULE_1__.createProject)({
		title: document.querySelector("#p-title").value,
		description: document.querySelector("#p-desc").value,
	});
	savedProjects.push(newProject);
	// setCurrentProjects(savedProjects);
	localStorage.setItem("projects", JSON.stringify(savedProjects));
	(0,_form__WEBPACK_IMPORTED_MODULE_3__.closeProjectForm)();
	let newIndex = savedProjects.length - 1;
	(0,_pages_projectTasks__WEBPACK_IMPORTED_MODULE_5__.renderProjectTasks)(newIndex);
}

function renderAddProjectForm() {
	//form content
	const formTitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("h2", ["form_title"]);
	formTitle.textContent = "Add new project";
	const formSubtitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("h2", ["form_subtitle"]);
	formSubtitle.textContent = "* required";
	const closeBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("span", ["material-icons", "close-form"], {
		id: "close-project-form",
	});
	closeBtn.textContent = " X ";
	closeBtn.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_3__.closeProjectForm);
	//title
	const titleLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", "", { for: "p-title" });
	titleLabel.textContent = "Title *";
	const titleInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", ["form-control"], {
		id: "p-title",
		type: "text",
		name: "p-title",
		placeholder: "Title",
	});
	const titleErrMsg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("small", ["err-msg"], {
		id: "project-title-err-msg",
	});
	titleErrMsg.textContent = " * Title is required";
	titleInput.appendChild(titleErrMsg);
	titleLabel.appendChild(titleInput);
	//description
	const descLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", "", { for: "p-desc" });
	descLabel.textContent = "Description";
	const descInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", ["form-control"], {
		id: "p-desc",
		type: "textarea",
		name: "p-desc",
		placeholder: "Description",
	});
	descLabel.appendChild(descInput);
	//add/clear btns
	const projectFormBtns = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["new-project-buttons"]);
	const addBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", ["btn"], {
		id: "add-project-btn",
	});
	addBtn.textContent = "Add";
	addBtn.addEventListener("click", addProjectSubmit);
	const clearBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", ["btn"], {
		id: "project-clear",
	});
	clearBtn.textContent = "Clear fields";
	clearBtn.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_3__.clearProjectForm);
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
	return addProjectSection;
}




/***/ }),

/***/ "./src/js/render/components/addTaskForm.js":
/*!*************************************************!*\
  !*** ./src/js/render/components/addTaskForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskSubmit": () => (/* binding */ addTaskSubmit),
/* harmony export */   "renderAddTaskForm": () => (/* binding */ renderAddTaskForm)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ "./src/js/DOM.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../create */ "./src/js/create.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form */ "./src/js/form.js");
/* harmony import */ var _pages_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/dashboard */ "./src/js/render/pages/dashboard.js");





const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];

function addTaskSubmit() {
	//validation
	if (document.querySelector("#t-title").value === "") {
		document.getElementById("task-title-err-msg").style.display = "block";
		return;
	} else if (document.querySelector("#t-title").value !== "") {
		document.getElementById("task-title-err-msg").style.display = "none";
	}
	if (document.querySelector("#t-priority").value === "") {
		document.getElementById("task-priority-err-msg").style.display = "block";
		return;
	} else if (document.querySelector("#t-priority").value !== "") {
		document.getElementById("task-priority-err-msg").style.display = "none";
	}
	const projectAssociation = document.querySelector("#project-task-add");
	if (projectAssociation.value === "null") {
		document.querySelector("#task-project-err-msg").style.display = "block";
		return;
	} else if (projectAssociation.value !== "") {
		document.querySelector("#task-project-err-msg").style.display = "none";
	}

	//task factory
	const newTask = (0,_create__WEBPACK_IMPORTED_MODULE_1__.createTask)({
		title: document.querySelector("#t-title").value,
		description: document.querySelector("#t-desc").value,
		dueDate: document.querySelector("#t-date").value,
		priority: document.querySelector("#t-priority").value,
		notes: document.querySelector("#t-notes").value,
	});
	for (const project in savedProjects) {
		const title = savedProjects[project].title;

		//currently matching dropdown project titles to the savedProjects project titles
		//TODO - implement an ID system so duplicate names can be used
		if (document.querySelector("#project-task-add").value === title) {
			savedProjects[project].tasks.push(newTask);
			console.log(savedProjects[project].tasks);
		}
	}
	// setCurrentTasks(currentTasks);
	localStorage.setItem("projects", JSON.stringify(savedProjects));
	(0,_pages_dashboard__WEBPACK_IMPORTED_MODULE_3__.renderDashboard)();
	(0,_form__WEBPACK_IMPORTED_MODULE_2__.closeTaskForm)();
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
	closeBtn.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_2__.closeTaskForm);
	//title
	const titleLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", "", { for: "t-title" });
	titleLabel.textContent = "Title *";
	const titleInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", ["form-control"], {
		id: "t-title",
		type: "text",
		name: "task-title",
		placeholder: "Title",
	});
	const titleErrMsg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("small", ["err-msg"], {
		id: "task-title-err-msg",
	});
	titleErrMsg.textContent = " * Task title is required";
	titleLabel.append(titleInput, titleErrMsg);
	//description
	const descLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", "", { for: "t-desc" });
	descLabel.textContent = "Description";
	const descInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", ["form-control"], {
		id: "t-desc",
		type: "textarea",
		name: "t-desc",
		placeholder: "Description",
	});
	descLabel.appendChild(descInput);
	//date
	const dateLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", "", { for: "t-date" });
	dateLabel.textContent = "Due Date";
	const dateInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", ["form-control"], {
		id: "t-date",
		type: "date",
		name: "t-date",
	});
	dateLabel.appendChild(dateInput);
	//priority
	const priorityLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", "", { for: "t-priority" });
	priorityLabel.textContent = "Priority (5 is highest) *";
	const priorityInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", ["form-control"], {
		id: "t-priority",
		type: "number",
		name: "t-priority",
		placeholder: "3",
		min: "1",
		max: "5",
	});
	const priorityErrMsg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("small", ["err-msg"], {
		id: "task-priority-err-msg",
	});
	priorityErrMsg.textContent = " * Priority between 1-5 is required";
	priorityLabel.append(priorityInput, priorityErrMsg);
	//notes
	const notesLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", "", { for: "t-notes" });
	notesLabel.textContent = "Notes";
	const notesInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", ["form-control"], {
		id: "t-notes",
		type: "textarea",
		name: "t-notes",
		placeholder: "Notes",
	});
	notesLabel.appendChild(notesInput);
	//project list
	const projectListLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", "", {
		for: "project-task-add",
	});
	projectListLabel.textContent = "Add to Existing Project";
	const projectListSelect = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("select", ["form-control"], {
		id: "project-task-add",
		name: "project-task-add",
	});
	const projectListOptionDEFAULT = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("option", "", {
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
		const projectListOption = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("option", "", {
			value: name,
		});
		projectListOption.textContent = name;
		projectListSelect.appendChild(projectListOption);
	}
	const projectListErrMsg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("small", ["err-msg"], {
		id: "task-project-err-msg",
	});
	projectListErrMsg.textContent = " * Project association is required";
	projectListLabel.append(projectListSelect, projectListErrMsg);
	//add/clear btns
	const taskFormBtns = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["new-task-buttons"]);
	const addBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", ["btn"], {
		id: "add-task-btn",
	});
	addBtn.textContent = "Add";
	addBtn.addEventListener("click", addTaskSubmit);
	const clearBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", ["btn"], {
		id: "task-clear",
	});
	clearBtn.textContent = "Clear fields";
	clearBtn.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_2__.clearTaskForm);
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
	return addTaskSection;
}




/***/ }),

/***/ "./src/js/render/components/aside.js":
/*!*******************************************!*\
  !*** ./src/js/render/components/aside.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAside": () => (/* binding */ renderAside),
/* harmony export */   "renderProjectAsideList": () => (/* binding */ renderProjectAsideList)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ "./src/js/DOM.js");
/* harmony import */ var _pages_projectTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/projectTasks */ "./src/js/render/pages/projectTasks.js");
/* harmony import */ var _renderPages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderPages */ "./src/js/render/renderPages.js");




function renderProjectAsideList() {
	const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
	const projectList = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("ul", "", { id: "project-panel-list" });

	if (savedProjects.length === 0) return projectList;
	const totalProjectNames = [];
	for (let i = 0; i < savedProjects.length; i++) {
		const project = savedProjects[i];
		totalProjectNames.push(project.title);
	}
	////dom logic
	for (let i = 0; i < totalProjectNames.length; i++) {
		const name = totalProjectNames[i];
		const liEl = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("li", ["project-list-item"], {
			"data-project-index": i,
		});
		liEl.textContent = name;
		liEl.addEventListener("click", function () {
			const dashboardEl = document.getElementById("dash-aside");
			const projectListEl = document.getElementById("project-list-aside");
			const allProjectsEl = document.getElementById("all-projects-aside");
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
			(0,_pages_projectTasks__WEBPACK_IMPORTED_MODULE_1__.renderProjectTasks)(index);
		});
		projectList.appendChild(liEl);
	}
	return projectList;
}

function renderAside() {
	//DASHBOARD
	const dashboardEl = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["aside-item", "aside-selected"], {
		id: "dash-aside",
	});
	dashboardEl.textContent = "DASHBOARD";

	//ALL PROJECTS
	const allProjectsEl = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["aside-item"], {
		id: "all-projects-aside",
	});
	allProjectsEl.textContent = "ALL PROJECTS";
	//PROJECT LIST
	const projectListBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", "", {
		id: "project-accordion-btn",
	});
	projectListBtn.textContent = "PROJECTS";

	const projectPanel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "project-panel-display" });
	const projectListUL = renderProjectAsideList();
	projectPanel.appendChild(projectListUL);
	const projectListEl = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["aside-item"], {
		id: "project-list-aside",
	});
	function accordionToggle() {
		projectListBtn.classList.toggle("active");
		if (projectPanel.style.display === "block") {
			projectPanel.style.display = "none";
		} else {
			projectPanel.style.display = "block";
		}
	}
	projectListBtn.addEventListener("click", accordionToggle);
	projectListEl.append(projectListBtn, projectPanel);
	//select toggle event listeners
	dashboardEl.addEventListener("click", function () {
		if (!dashboardEl.classList.contains("aside-selected")) {
			dashboardEl.classList.add("aside-selected");
			allProjectsEl.classList.remove("aside-selected");
			projectListEl.classList.remove("aside-selected");
		}
		projectPanel.style.display = "none";
		(0,_renderPages__WEBPACK_IMPORTED_MODULE_2__.renderDashboardPage)();
	});
	allProjectsEl.addEventListener("click", function () {
		if (!allProjectsEl.classList.contains("aside-selected")) {
			allProjectsEl.classList.add("aside-selected");
			dashboardEl.classList.remove("aside-selected");
			projectListEl.classList.remove("aside-selected");
		}
		projectPanel.style.display = "none";
		(0,_renderPages__WEBPACK_IMPORTED_MODULE_2__.renderAllProjectsPage)();
	});
	//FULL ASIDE APPEND
	const asideEl = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("aside", "", { id: "main-aside" });
	asideEl.append(dashboardEl, allProjectsEl, projectListEl);
	//apply other styling / elements / click events
	renderProjectAsideList();
	return asideEl;
}




/***/ }),

/***/ "./src/js/render/components/header.js":
/*!********************************************!*\
  !*** ./src/js/render/components/header.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ "./src/js/DOM.js");
/* harmony import */ var _assets_checkbox_marked_circle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/checkbox-marked-circle.png */ "./src/assets/checkbox-marked-circle.png");
/* harmony import */ var _assets_plus_circle_outline_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/plus-circle-outline.png */ "./src/assets/plus-circle-outline.png");
/* harmony import */ var _assets_checkbox_marked_circle_plus_outline_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/checkbox-marked-circle-plus-outline.png */ "./src/assets/checkbox-marked-circle-plus-outline.png");
/* harmony import */ var _assets_list_group_plus_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/list-group-plus.png */ "./src/assets/list-group-plus.png");
/* harmony import */ var _assets_cog_outline_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/cog-outline.png */ "./src/assets/cog-outline.png");
/* harmony import */ var _data_seed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/seed */ "./src/js/data/seed.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../form */ "./src/js/form.js");
/* harmony import */ var _renderPages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../renderPages */ "./src/js/render/renderPages.js");
/* harmony import */ var _pages_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/search */ "./src/js/render/pages/search.js");











function renderAddMenu() {
	const addIconMenu = document.querySelector("#add-icon-menu");
	addIconMenu.classList.toggle("icon-menu-toggle");
}

function renderHeader() {
	////header LEFT
	function createHeaderLeft() {
		const siteLogo = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("img", ["fake-class"], {
			src: _assets_checkbox_marked_circle_png__WEBPACK_IMPORTED_MODULE_1__,
			alt: "checked circle logo",
		});
		const siteTitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "header-site-title" });
		siteTitle.textContent = "TODO LIST";
		//add icon menu
		const addBtnIcon = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("img", "", {
			id: "add-icon",
			src: _assets_plus_circle_outline_png__WEBPACK_IMPORTED_MODULE_2__,
			alt: "add button plus icon",
		});
		addBtnIcon.addEventListener("click", renderAddMenu);
		const addIconMenu = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "add-icon-menu" });
		const addTaskImg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("img", "", {
			id: "add-task-form",
			src: _assets_checkbox_marked_circle_plus_outline_png__WEBPACK_IMPORTED_MODULE_3__,
			alt: "add task plus icon",
		});

		addTaskImg.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_7__.renderTaskForm);
		const addProjectImg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("img", "", {
			id: "add-project-form",
			src: _assets_list_group_plus_png__WEBPACK_IMPORTED_MODULE_4__,
			alt: "add project plus icon",
		});
		addProjectImg.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_7__.renderProjectForm);
		addIconMenu.append(addTaskImg, addProjectImg);
		const addBtnEl = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "addBtn" });
		addBtnEl.append(addBtnIcon, addIconMenu);
		const headerLeft = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "headerLeft" });
		headerLeft.append(siteLogo, siteTitle, addBtnEl);
		return headerLeft;
	}
	////header CENTER
	function createHeaderCenter() {
		const searchLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", "", { for: "site-search" });
		searchLabel.textContent = "Search: ";
		const searchInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", "", {
			id: "site-search",
			type: "search",
			name: "q",
			placeholder: " type here...",
		});
		searchInput.addEventListener("keyup", (e) => {
			let currentVal = e.target.value; // "mow"
			(0,_pages_search__WEBPACK_IMPORTED_MODULE_9__.renderSearch)(currentVal);
			if (currentVal === "") (0,_renderPages__WEBPACK_IMPORTED_MODULE_8__.renderDashboardPage)();
		});
		// const searchBtn = domCreate("button", "");
		// searchBtn.textContent = "Search";

		const headerCenter = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "headerCenter" });
		headerCenter.append(searchLabel, searchInput);
		return headerCenter;
	}
	////header RIGHT
	function createHeaderRight() {
		//seed data
		const seedDataBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["nav-item"], {
			id: "seed-projects-btn",
		});
		seedDataBtn.textContent = "SEED DATA";
		seedDataBtn.addEventListener("click", _data_seed__WEBPACK_IMPORTED_MODULE_6__.seedProjectData);
		//login
		const loginEl = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["nav-item"], { id: "login" });
		loginEl.textContent = "LOGIN";
		//settings
		const settingsIcon = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("img", "", {
			id: "settings gear icon",
			src: _assets_cog_outline_png__WEBPACK_IMPORTED_MODULE_5__,
			alt: "settings gear outline",
		});
		const settingsLink = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("a", "", {
			href: "https://github.com/alexgeis/todo-list",
			target: "_blank",
		});
		settingsLink.appendChild(settingsIcon);
		const settingsEl = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["nav-item"], { id: "settings" });
		settingsEl.appendChild(settingsLink);

		const navMenuLI1 = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("li", ["nav-item"]);
		navMenuLI1.appendChild(seedDataBtn);
		const navMenuLI2 = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("li", ["nav-item"]);
		navMenuLI2.appendChild(loginEl);
		const navMenuLI3 = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("li", ["nav-item"]);
		navMenuLI3.appendChild(settingsEl);
		const navMenuUL = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("ul", ["nav-menu"]);
		navMenuUL.append(navMenuLI1, navMenuLI2, navMenuLI3);

		// //hamburger menu
		// const bar1 = domCreate("span", ["bar"]);
		// const bar2 = domCreate("span", ["bar"]);
		// const bar3 = domCreate("span", ["bar"]);
		// const hamburgerDiv = domCreate("div", ["hamburger"]);
		// hamburgerDiv.append(bar1, bar2, bar3);
		// hamburgerDiv.addEventListener("click", () => {
		// 	hamburgerDiv.classList.toggle("active");
		// 	navMenuUL.classList.toggle("active");
		// });
		//headerRight append
		const headerRight = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "headerRight" });
		headerRight.appendChild(navMenuUL);
		return headerRight;
	}
	//hamburger menu
	const bar1 = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("span", ["bar"]);
	const bar2 = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("span", ["bar"]);
	const bar3 = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("span", ["bar"]);
	const hamburgerDiv = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["hamburger"]);
	hamburgerDiv.append(bar1, bar2, bar3);
	hamburgerDiv.addEventListener("click", () => {
		hamburgerDiv.classList.toggle("active");
		navMenuUL.classList.toggle("active");
	});
	//FULL HEADER APPEND
	const header = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("header", "", { id: "header" });
	header.append(
		createHeaderLeft(),
		createHeaderCenter(),
		createHeaderRight(),
		hamburgerDiv
	);
	return header;
	// //CONTENT APPEND
	// const pageContainer = document.getElementById("content");
	// pageContainer.appendChild(header);
}




/***/ }),

/***/ "./src/js/render/pages/dashboard.js":
/*!******************************************!*\
  !*** ./src/js/render/pages/dashboard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderDashboard": () => (/* binding */ renderDashboard)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ "./src/js/DOM.js");
/* harmony import */ var _assets_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/trash-can-outline.png */ "./src/assets/trash-can-outline.png");
/* harmony import */ var _pages_projectTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/projectTasks */ "./src/js/render/pages/projectTasks.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../form */ "./src/js/form.js");





function renderDashboard() {
	//get all tasks from all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects")) || [];
	// console.log({ currentProjects });

	const projectTaskData = [];
	for (let i = 0; i < currentProjects.length; i++) {
		const project = currentProjects[i];
		const data = {
			projectTitle: project.title,
			tasks: project.tasks,
			index: i,
		};
		projectTaskData.push(data);
	}
	// console.table(projectTaskData);
	//clear current tasks
	const taskContainer = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "main-content" });
	taskContainer.innerHTML = "";
	//no project results backup
	if (currentProjects.length === 0) {
		taskContainer.textContent = "No projects created yet";
		const emptyDiv = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div");
		const emptyProjectBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", ["empty-btn"], {
			id: "empty-project-btn-dash",
		});
		emptyProjectBtn.textContent = "CREATE PROJECT";
		emptyProjectBtn.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_3__.renderProjectForm);
		taskContainer.append(emptyDiv, emptyProjectBtn);
	}
	//no task results backup
	const currentTasks = [];
	for (let i = 0; i < currentProjects.length; i++) {
		const project = currentProjects[i];
		currentTasks.push(...project.tasks);
	}
	if (currentProjects.length > 0 && currentTasks.length === 0) {
		taskContainer.textContent = "No tasks created yet";
		const emptyDiv = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div");
		const emptyTaskBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", ["empty-btn"], {
			id: "empty-task-btn-dash",
		});
		emptyTaskBtn.textContent = "CREATE TASK";
		emptyTaskBtn.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_3__.renderTaskForm);
		taskContainer.append(emptyDiv, emptyTaskBtn);
	}
	//render projectTaskData tasks
	for (let i = 0; i < projectTaskData.length; i++) {
		const data = projectTaskData[i];
		// console.log({ data });
		//inner task card div items
		//task card renders
		let taskData = data.tasks;
		// console.log({ taskData }); /////////////////////
		for (let i = 0; i < taskData.length; i++) {
			const task = taskData[i];
			// console.log({ task });
			const taskCard = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["task-card"], {
				"data-task-index": i,
			});
			//TITLE
			const taskTitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["task-title-dash"]);
			taskTitle.textContent = task.title;
			//PROJECT TITLE
			const projectTitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", ["project-title-dash"]);
			projectTitle.textContent = data.projectTitle;
			projectTitle.addEventListener("click", function () {
				const dashboardEl = document.getElementById("dash-aside");
				const projectListEl = document.getElementById("project-list-aside");
				const allProjectsEl = document.getElementById("all-projects-aside");
				if (!projectListEl.classList.contains("aside-selected")) {
					projectListEl.classList.add("aside-selected");
					dashboardEl.classList.remove("aside-selected");
					allProjectsEl.classList.remove("aside-selected");
				}
				function accordionToggle() {
					const projectListBtn = document.getElementById(
						"project-accordion-btn"
					);
					const projectPanel = document.getElementById("project-panel-display");
					projectListBtn.classList.toggle("active");
					if (projectPanel.style.display === "block") {
						projectPanel.style.display = "none";
					} else {
						projectPanel.style.display = "block";
					}
				}
				accordionToggle();
				const projectPanelList = document.getElementById("project-panel-list");
				projectPanelList.childNodes[data.index].classList.add(
					"project-list-selected"
				);
				(0,_pages_projectTasks__WEBPACK_IMPORTED_MODULE_2__.renderProjectTasks)(data.index);
			});
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
				let index =
					taskDeleteIcon.parentElement.getAttribute("data-task-index");
				currentTasks.splice(index, 1);
				// setCurrentTasks(currentTasks);
				// localStorage.setItem("tasks", JSON.stringify(currentTasks));
				renderDashboard();
			});
			//APPEND ELEMENTS
			taskCard.append(
				taskTitle,
				projectTitle,
				taskDesc,
				taskDate,
				taskPriority,
				taskNotes,
				taskDeleteIcon
			);
			// taskCard.insertBefore(projectTitle, taskCard.childNodes[1]);
			taskContainer.appendChild(taskCard);
		}
	}
	return taskContainer;
}




/***/ }),

/***/ "./src/js/render/pages/projectTasks.js":
/*!*********************************************!*\
  !*** ./src/js/render/pages/projectTasks.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjectTasks": () => (/* binding */ renderProjectTasks)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ "./src/js/DOM.js");
/* harmony import */ var _assets_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/trash-can-outline.png */ "./src/assets/trash-can-outline.png");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form */ "./src/js/form.js");




function renderProjectTasks(index) {
	//get all tasks from all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects")) || [];
	const renderProject = currentProjects[index];
	const currentTasks = renderProject.tasks || [];
	//update main header
	const mainHeader = document.querySelector("#main-header");
	mainHeader.textContent = renderProject.title.toUpperCase();
	//clear current tasks
	const taskContainer = document.querySelector("#main-content");
	taskContainer.innerHTML = "";
	//backup text if no tasks
	if (currentTasks.length === 0) {
		taskContainer.textContent = "No tasks created yet";
		const emptyDiv = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div");
		const emptyTaskBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", ["empty-btn"], {
			id: "empty-task-btn-dash",
		});
		emptyTaskBtn.textContent = "CREATE TASK";
		emptyTaskBtn.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_2__.renderTaskForm);
		taskContainer.append(emptyDiv, emptyTaskBtn);
		//autopopulate task form
		const existingProjectSelect = document.getElementById("project-task-add");
		const childArray = existingProjectSelect.childNodes;
		existingProjectSelect.childNodes[0].defaultSelected = false;
		for (let i = 1; i < childArray.length; i++) {
			const option = childArray[i];
			if (renderProject.title === option.value) {
				existingProjectSelect.childNodes[i].defaultSelected = true;
			}
		}
	}
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
			// setCurrentTasks(currentTasks);
			localStorage.setItem("tasks", JSON.stringify(currentTasks));
			renderProjectTasks(index);
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

/***/ "./src/js/render/pages/projectsAll.js":
/*!********************************************!*\
  !*** ./src/js/render/pages/projectsAll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjectsAll": () => (/* binding */ renderProjectsAll)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ "./src/js/DOM.js");
/* harmony import */ var _assets_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/trash-can-outline.png */ "./src/assets/trash-can-outline.png");
/* harmony import */ var _projectTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectTasks */ "./src/js/render/pages/projectTasks.js");




function renderProjectsAll() {
	//get all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects")) || [];
	console.log(currentProjects);
	//clear current content
	const projectContainer = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "main-content" });
	// projectContainer.innerHTML = "";
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
		if (taskArray.length === 0)
			projectTasksList.textContent = "0 tasks in this project";
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
		projectCard.addEventListener("click", function () {
			const dashboardEl = document.getElementById("dash-aside");
			const projectListEl = document.getElementById("project-list-aside");
			const allProjectsEl = document.getElementById("all-projects-aside");
			if (!projectListEl.classList.contains("aside-selected")) {
				projectListEl.classList.add("aside-selected");
				dashboardEl.classList.remove("aside-selected");
				allProjectsEl.classList.remove("aside-selected");
			}
			function accordionToggle() {
				const projectListBtn = document.getElementById("project-accordion-btn");
				const projectPanel = document.getElementById("project-panel-display");
				projectListBtn.classList.toggle("active");
				if (projectPanel.style.display === "block") {
					projectPanel.style.display = "none";
				} else {
					projectPanel.style.display = "block";
				}
			}
			accordionToggle();
			const projectPanelList = document.getElementById("project-panel-list");
			projectPanelList.childNodes[i].classList.add("project-list-selected");
			(0,_projectTasks__WEBPACK_IMPORTED_MODULE_2__.renderProjectTasks)(i);
		});
		projectContainer.appendChild(projectCard);
	}
	return projectContainer;
}




/***/ }),

/***/ "./src/js/render/pages/search.js":
/*!***************************************!*\
  !*** ./src/js/render/pages/search.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderSearch": () => (/* binding */ renderSearch)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ "./src/js/DOM.js");
/* harmony import */ var _assets_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/trash-can-outline.png */ "./src/assets/trash-can-outline.png");



function renderSearch(search) {
	if (search === "") return;
	//get all tasks from all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects")) || [];
	const currentTasks = [];
	for (let i = 0; i < currentProjects.length; i++) {
		const project = currentProjects[i];
		currentTasks.push(...project.tasks);
	}
	const filterTasks = [];
	for (let i = 0; i < currentTasks.length; i++) {
		const task = currentTasks[i];
		let lowerTitle = task.title.toLowerCase();
		let lowerSearch = search.toLowerCase();
		if (lowerTitle.includes(lowerSearch)) {
			filterTasks.push(task);
		}
	}
	//update main header
	const mainHeader = document.querySelector("#main-header");
	mainHeader.textContent = "SEARCH RESULTS";
	//clear current tasks
	const taskContainer = document.querySelector("#main-content");
	taskContainer.innerHTML = "";
	//no search results backup
	if (filterTasks.length === 0) {
		taskContainer.textContent = "No search results";
	}
	//render filterTasks tasks
	for (let i = 0; i < filterTasks.length; i++) {
		const task = filterTasks[i];
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
			filterTasks.splice(index, 1);
			// localStorage.setItem("filterTasks", JSON.stringify(filterTasks));
			renderSearch(search);
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
	// return taskContainer;
}




/***/ }),

/***/ "./src/js/render/renderPages.js":
/*!**************************************!*\
  !*** ./src/js/render/renderPages.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAllProjectsPage": () => (/* binding */ renderAllProjectsPage),
/* harmony export */   "renderDashboardPage": () => (/* binding */ renderDashboardPage)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM */ "./src/js/DOM.js");
/* harmony import */ var _pages_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dashboard */ "./src/js/render/pages/dashboard.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ "./src/js/render/components/header.js");
/* harmony import */ var _components_aside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/aside */ "./src/js/render/components/aside.js");
/* harmony import */ var _components_addTaskForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/addTaskForm */ "./src/js/render/components/addTaskForm.js");
/* harmony import */ var _components_addProjectForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/addProjectForm */ "./src/js/render/components/addProjectForm.js");
/* harmony import */ var _pages_projectsAll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/projectsAll */ "./src/js/render/pages/projectsAll.js");








const content = document.getElementById("content");
const header = (0,_components_header__WEBPACK_IMPORTED_MODULE_2__.renderHeader)();
const aside = (0,_components_aside__WEBPACK_IMPORTED_MODULE_3__.renderAside)();
const mainSection = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "main-section" });
const mainHeader = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "main-header" });
mainSection.appendChild(mainHeader);
const mainDiv = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("main", "", { id: "main" });
mainDiv.append(aside, mainSection);
const taskForm = (0,_components_addTaskForm__WEBPACK_IMPORTED_MODULE_4__.renderAddTaskForm)();
const projectForm = (0,_components_addProjectForm__WEBPACK_IMPORTED_MODULE_5__.renderAddProjectForm)();
content.append(header, mainDiv, taskForm, projectForm);

function replaceHelper(newSib) {
	if (mainHeader.nextSibling) {
		const nextSib = mainHeader.nextSibling;
		mainSection.replaceChild(newSib, nextSib);
	} else {
		mainSection.appendChild(newSib);
	}
}

function renderDashboardPage() {
	mainHeader.textContent = "DASHBOARD";
	const dashboard = (0,_pages_dashboard__WEBPACK_IMPORTED_MODULE_1__.renderDashboard)();
	replaceHelper(dashboard);
}
function renderAllProjectsPage() {
	mainHeader.textContent = "PROJECTS";
	const allProjects = (0,_pages_projectsAll__WEBPACK_IMPORTED_MODULE_6__.renderProjectsAll)();
	replaceHelper(allProjects);
}
// function renderSearchPage() {
// 	mainHeader.textContent = "SEARCH RESULTS";
// 	// const allProjects = renderProjectsAll();
// 	// replaceHelper(allProjects);
// }




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
	// localStorage.setItem("tasks", JSON.stringify(currentTasks));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QiwrQ0FBUztBQUNsQyxRQUFRLDBEQUFVO0FBQ2xCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VXO0FBQ2lCO0FBQ0Q7QUFDRjtBQUNZO0FBQ007QUFDWDs7QUFFeEQ7QUFDQSxlQUFlLGdFQUFZO0FBQzNCLGNBQWMsOERBQVc7QUFDekIsb0JBQW9CLCtDQUFTLGNBQWMsb0JBQW9CO0FBQy9ELG1CQUFtQiwrQ0FBUyxjQUFjLG1CQUFtQjtBQUM3RDtBQUNBLGdCQUFnQiwrQ0FBUyxlQUFlLFlBQVk7QUFDcEQ7QUFDQSxpQkFBaUIsMEVBQWlCO0FBQ2xDLG9CQUFvQixnRkFBb0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsaUVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUVBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzRDs7Ozs7Ozs7Ozs7Ozs7OztBQzdDdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRStDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5zY3NzPzYyYWYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZGF0YS9wcm9qZWN0RGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZGF0YS9zZWVkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvY29tcG9uZW50cy9hZGRQcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL2NvbXBvbmVudHMvYWRkVGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9jb21wb25lbnRzL2FzaWRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9wYWdlcy9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9wYWdlcy9wcm9qZWN0VGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9wYWdlcy9wcm9qZWN0c0FsbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL3BhZ2VzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL3JlbmRlclBhZ2VzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgXCIuL2Nzcy9zdHlsZS5zY3NzXCI7XG4vLyBpbXBvcnQgeyByZW5kZXJTaXRlIH0gZnJvbSBcIi4vanMvcmVuZGVyL3JlbmRlclBhZ2VzXCI7XG4vL1RFU1QgREFUQVxuLy8gaW1wb3J0IHsgdGFza0RhdGEgfSBmcm9tIFwiLi9qcy9kYXRhL3Rhc2tEYXRhXCI7XG4vLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIHRhc2tEYXRhKTtcbmltcG9ydCB7IHJlbmRlclByb2plY3RBc2lkZUxpc3QgfSBmcm9tIFwiLi9qcy9yZW5kZXIvY29tcG9uZW50cy9hc2lkZVwiO1xuaW1wb3J0IHsgc2V0Q3VycmVudFRhc2tzLCBzZXRDdXJyZW50UHJvamVjdHMgfSBmcm9tIFwiLi9qcy9zdGF0ZVwiO1xuaW1wb3J0IHtcblx0cmVuZGVyRGFzaGJvYXJkUGFnZSxcblx0cmVuZGVyQWxsUHJvamVjdHNQYWdlLFxufSBmcm9tIFwiLi9qcy9yZW5kZXIvcmVuZGVyUGFnZXNcIjtcblxuLy8vLyBTVEFURSAvLy8vXG4vL0RFRkFVTFRTXG5jb25zdCBERUZBVUxUX1RIRU1FID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSB8fCBcImxpZ2h0XCI7XG5jb25zdCBzYXZlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcbi8vIGNvbnN0IHNhdmVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuLy8gY29uc3QgY3VycmVudGx5RG9uZSA9IHNhdmVkVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmNvbXBsZXRlID09PSB0cnVlKTtcbi8vIGNvbnN0IERFRkFVTFRfVEFTS1NfRE9ORSA9IGN1cnJlbnRseURvbmUubGVuZ3RoO1xuLy8gY29uc3QgREVGQVVMVF9UQVNLU19UT1RBTCA9IHNhdmVkQm9va3MubGVuZ3RoO1xuXG4vLyBsZXQgY3VycmVudFRhc2tzID0gc2F2ZWRUYXNrcztcbmxldCBjdXJyZW50UHJvamVjdHMgPSBzYXZlZFByb2plY3RzO1xubGV0IGN1cnJlbnRUaGVtZSA9IERFRkFVTFRfVEhFTUU7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cdHJlbmRlckRhc2hib2FyZFBhZ2UoKTtcblx0Ly8gc2V0Q3VycmVudFRoZW1lKERFRkFVTFRfVEhFTUUpO1xuXHQvLyBzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0Ly8gc2V0Q3VycmVudFByb2plY3RzKGN1cnJlbnRQcm9qZWN0cyk7XG59O1xuIiwiLy8gRE9NIENSRUFURSBGVU5DVElPTlxuXG4vL2FyZyAxID0gbmFtZSBvZiBIVE1MIGVsZW1lbnRcbi8vIGFyZyAyID0gY2xhc3MgbmFtZXMgdG8gYWRkXG4vLyBhcmcgMyA9IG9iamVjdCAtIGF0dHJpYnV0ZXMgdG8gYWRkIC0+IGF0dHJpYnV0ZSA6IHZhbHVlXG5mdW5jdGlvbiBkb21DcmVhdGUoYXJnMSwgYXJnMiwgYXJnMykge1xuXHQvLy8vIGFyZyAxID0gXCJzdHJpbmdcIiAtIG5hbWUgb2YgSFRNTCBlbGVtZW50XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZzEpO1xuXHQvLy8vIGFyZyAyID0gW1wiYXJyYXkgb2Ygc3RyaW5nc1wiXSAtIGNsYXNzIG5hbWVzIHRvIGFkZFxuXHRpZiAoQXJyYXkuaXNBcnJheShhcmcyKSAmJiBhcmcyLmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFyZzIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IGFyZzJbaV07XG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0XHR9XG5cdH1cblx0Ly8vLyBhcmcgMyA9IHtvYmplY3R9IC0gYXR0cmlidXRlIG5hbWUgOiB2YWx1ZVxuXHRmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhcmczKSB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhcmczW2F0dHJpYnV0ZV0pO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgeyBkb21DcmVhdGUgfTtcbiIsIi8vREVNT1xuXG4vLyBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbi8vIGNvbnN0IHRhc2tEZW1vMSA9IGNyZWF0ZVRhc2soe1xuLy8gXHR0aXRsZTogXCJXYWxrIHRoZSBEb2dcIixcbi8vIFx0ZGVzY3JpcHRpb246IFwidGFrZSB0aGUgZG9nZ28gb24gYSBsaWwgc3Ryb2xsXCIsXG4vLyBcdGR1ZURhdGU6IGRhdGUsXG4vLyBcdHByaW9yaXR5OiAzLFxuLy8gXHRub3RlczogXCJhdm9pZCA5dGggYW5kIEVsbSAtIGFnZ3Jlc3NpdmUgZG9nXCIsXG4vLyB9KTtcbi8vIGNvbnN0IHByb2plY3REZW1vMSA9IGNyZWF0ZVByb2plY3Qoe1xuLy8gXHR0aXRsZTogXCJQZXJzb25hbFwiLFxuLy8gXHRkZXNjcmlwdGlvbjogXCJwbGVhc3VyZSwgbm90IGJ1c2luZXNzXCIsXG4vLyB9KTtcbi8vIHByb2plY3REZW1vMS5hZGRUYXNrdG9Qcm9qZWN0KHRhc2tEZW1vMSk7XG5cbmNvbnN0IGNyZWF0ZVRhc2sgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcyB9KSA9PiAoe1xuXHR0aXRsZSxcblx0ZGVzY3JpcHRpb24sXG5cdGR1ZURhdGUsXG5cdHByaW9yaXR5LFxuXHRub3Rlcyxcblx0cHJpbnRUYXNrKCkge1xuXHRcdHJldHVybiBgJHt0aGlzLnRpdGxlfTogJHt0aGlzLmRlc2NyaXB0aW9ufWA7XG5cdH0sXG59KTtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiAoe1xuXHR0aXRsZSxcblx0ZGVzY3JpcHRpb24sXG5cdHRhc2tzOiBbXSxcblx0cHJpbnRQcm9qZWN0KCkge1xuXHRcdHJldHVybiBgUHJvamVjdCAke3RoaXMudGl0bGV9OiAke3RoaXMuZGVzY3JpcHRpb259YDtcblx0fSxcblx0cHJpbnRUYXNrcygpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnRhc2tzKTtcblx0fSxcblx0YWRkVGFza3RvUHJvamVjdCh0YXNrKSB7XG5cdFx0dGhpcy50YXNrcy5wdXNoKHRhc2spO1xuXHR9LFxufSk7XG5cbmV4cG9ydCB7IGNyZWF0ZVRhc2ssIGNyZWF0ZVByb2plY3QgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVRhc2ssIGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi4vY3JlYXRlXCI7XG5cbmNvbnN0IHByb2plY3QxdGFzazEgPSBjcmVhdGVUYXNrKHtcblx0dGl0bGU6IFwiTW93IHRoZSBsYXduXCIsXG5cdGRlc2NyaXB0aW9uOlxuXHRcdFwiZ2V0IG91dCB0aGVyZSB3aXRoIHRoZSBkYW5nIG1vd2VyIGFuZCBtb3cgdGhhdCB0aGVyZSBsYXduIHRoZXJlXCIsXG5cdGR1ZURhdGU6IFwiMjAyMi0wNy0yOVwiLFxuXHRwcmlvcml0eTogXCIxXCIsXG5cdG5vdGVzOiBcIlJldHVybiBtb3dlciB0byBuZWlnaGJvciB3aGVuIGZpbmlzaGVkXCIsXG59KTtcbmNvbnN0IHByb2plY3QxID0gY3JlYXRlUHJvamVjdCh7XG5cdHRpdGxlOiBcIkxhd25tb3dlclwiLFxuXHRkZXNjcmlwdGlvbjogXCJsYW5kc2NhcGluZyBwcm9qZWN0XCIsXG59KTtcbnByb2plY3QxLmFkZFRhc2t0b1Byb2plY3QocHJvamVjdDF0YXNrMSk7XG5cbmNvbnN0IHByb2plY3QydGFzazEgPSBjcmVhdGVUYXNrKHtcblx0dGl0bGU6IFwiV2FsayB0aGUgZG9nXCIsXG5cdGRlc2NyaXB0aW9uOiBcImxlYXNoLCBvcGVuIGRvb3IsIHdhbGsgYXJvdW5kLCBjb21lIGJhY2tcIixcblx0ZHVlRGF0ZTogXCIyMDIyLTA4LTEyXCIsXG5cdHByaW9yaXR5OiBcIjJcIixcblx0bm90ZXM6IFwiYXZvaWQgb3RoZXIgZG9ncyFcIixcbn0pO1xuY29uc3QgcHJvamVjdDJ0YXNrMiA9IGNyZWF0ZVRhc2soe1xuXHR0aXRsZTogXCJDb29rIGRpbm5lclwiLFxuXHRkZXNjcmlwdGlvbjogXCJjaGlja2VuIHRpa2thIG1hc2FsYSwgdy8gamFzbWluZSByaWNlLCBhbmQgc2Ftb3Nhc1wiLFxuXHRkdWVEYXRlOiBcIjIwMjItMDYtMTJcIixcblx0cHJpb3JpdHk6IFwiM1wiLFxuXHRub3RlczogXCJubyBwZWFudXRzIVwiLFxufSk7XG5jb25zdCBwcm9qZWN0MnRhc2szID0gY3JlYXRlVGFzayh7XG5cdHRpdGxlOiBcIlJlYWQgJ09jdG9iZXInIEJvb2tcIixcblx0ZGVzY3JpcHRpb246IFwicmVhZCBhdCBsZWFzdCA0MCBwYWdlcyB0b2RheVwiLFxuXHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0cHJpb3JpdHk6IFwiNVwiLFxuXHRub3RlczogXCJcIixcbn0pO1xuY29uc3QgcHJvamVjdDIgPSBjcmVhdGVQcm9qZWN0KHtcblx0dGl0bGU6IFwiQW5vdGhlciBQcm9qZWN0XCIsXG5cdGRlc2NyaXB0aW9uOiBcIm1pc2NlbGxhbmVvdXMgdGFza3NcIixcbn0pO1xucHJvamVjdDIuYWRkVGFza3RvUHJvamVjdChwcm9qZWN0MnRhc2sxLCBwcm9qZWN0MnRhc2syLCBwcm9qZWN0MnRhc2szKTtcblxuY29uc3QgcHJvamVjdDN0YXNrMSA9IGNyZWF0ZVRhc2soe1xuXHR0aXRsZTogXCJSZWFkICdPY3RvYmVyJyBCb29rXCIsXG5cdGRlc2NyaXB0aW9uOiBcInJlYWQgYXQgbGVhc3QgNDAgcGFnZXMgdG9kYXlcIixcblx0ZHVlRGF0ZTogXCIyMDIyLTA4LTEyXCIsXG5cdHByaW9yaXR5OiBcIjVcIixcblx0bm90ZXM6IFwiXCIsXG59KTtcbmNvbnN0IHByb2plY3QzdGFzazIgPSBjcmVhdGVUYXNrKHtcblx0dGl0bGU6IFwiQnV5IHJvc2VzXCIsXG5cdGRlc2NyaXB0aW9uOiBcIjIgZG96ZW4gcm9zZXMgZnJvbSBTYWZld2F5XCIsXG5cdGR1ZURhdGU6IFwiMjAyMi0wOC0xMlwiLFxuXHRwcmlvcml0eTogXCI1XCIsXG5cdG5vdGVzOiBcInJlZCByb3Nlc1wiLFxufSk7XG5jb25zdCBwcm9qZWN0MyA9IGNyZWF0ZVByb2plY3Qoe1xuXHR0aXRsZTogXCJBIFRoaXJkIFByb2plY3QgZm9yIHRoZSBMaXN0XCIsXG5cdGRlc2NyaXB0aW9uOlxuXHRcdFwibG9uZ2VyIGRlc2NyaXB0aW9uIGZvciBhIG1vcmUgY29tcGxpY2F0ZWQgdGFzayBwcm9qZWN0IGJyZWFrZG93blwiLFxufSk7XG5wcm9qZWN0My5hZGRUYXNrdG9Qcm9qZWN0KHByb2plY3QzdGFzazEsIHByb2plY3QzdGFzazIpO1xuXG5sZXQgcHJvamVjdERhdGEgPSBbXTtcbnByb2plY3REYXRhLnB1c2gocHJvamVjdDEsIHByb2plY3QyLCBwcm9qZWN0Myk7XG5cbmV4cG9ydCB7IHByb2plY3REYXRhIH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0RGF0YSB9IGZyb20gXCIuL3Byb2plY3REYXRhXCI7XG5cbmZ1bmN0aW9uIHNlZWRQcm9qZWN0RGF0YSgpIHtcblx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpKTtcbn1cbmV4cG9ydCB7IHNlZWRQcm9qZWN0RGF0YSB9O1xuIiwiZnVuY3Rpb24gcmVuZGVyVGFza0Zvcm0oKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Rhc2tfc2VjdGlvblwiKVxuXHRcdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGJsb2NrO1wiKTtcbn1cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RGb3JtKCkge1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmFkZF9wcm9qZWN0X3NlY3Rpb25cIilcblx0XHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBibG9jaztcIik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0Zvcm0oKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC10aXRsZVwiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kZXNjXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LWRhdGVcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtcHJpb3JpdHlcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Qtbm90ZXNcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGFzay1hZGRcIikub3B0aW9ucy5zZWxlY3RlZEluZGV4ID0gMDtcbn1cblxuZnVuY3Rpb24gY2xvc2VUYXNrRm9ybSgpIHtcblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5hZGRfdGFza19zZWN0aW9uXCIpXG5cdFx0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUHJvamVjdEZvcm0oKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcC10aXRsZVwiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcC1kZXNjXCIpLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY2xvc2VQcm9qZWN0Rm9ybSgpIHtcblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5hZGRfcHJvamVjdF9zZWN0aW9uXCIpXG5cdFx0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG59XG5cbmV4cG9ydCB7XG5cdHJlbmRlclRhc2tGb3JtLFxuXHRyZW5kZXJQcm9qZWN0Rm9ybSxcblx0Y2xlYXJUYXNrRm9ybSxcblx0Y2xvc2VUYXNrRm9ybSxcblx0Y2xlYXJQcm9qZWN0Rm9ybSxcblx0Y2xvc2VQcm9qZWN0Rm9ybSxcbn07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vLi4vRE9NXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL2NyZWF0ZVwiO1xuaW1wb3J0IHsgc2V0Q3VycmVudFByb2plY3RzIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5pbXBvcnQgeyBjbGVhclByb2plY3RGb3JtLCBjbG9zZVByb2plY3RGb3JtIH0gZnJvbSBcIi4uLy4uL2Zvcm1cIjtcbmltcG9ydCB7IHJlbmRlckFsbFByb2plY3RzUGFnZSB9IGZyb20gXCIuLi9yZW5kZXJQYWdlc1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFRhc2tzIH0gZnJvbSBcIi4uL3BhZ2VzL3Byb2plY3RUYXNrc1wiO1xuXG5jb25zdCBzYXZlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdFN1Ym1pdCgpIHtcblx0Ly92YWxpZGF0aW9uXG5cdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInAtdGl0bGVcIikudmFsdWUgPT09IFwiXCIpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGl0bGUtZXJyLW1zZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdHJldHVybjtcblx0fSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInAtdGl0bGVcIikudmFsdWUgIT09IFwiXCIpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGl0bGUtZXJyLW1zZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdH1cblxuXHQvL3Byb2plY3QgZmFjdG9yeVxuXHRjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdCh7XG5cdFx0dGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcC10aXRsZVwiKS52YWx1ZSxcblx0XHRkZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwLWRlc2NcIikudmFsdWUsXG5cdH0pO1xuXHRzYXZlZFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG5cdC8vIHNldEN1cnJlbnRQcm9qZWN0cyhzYXZlZFByb2plY3RzKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShzYXZlZFByb2plY3RzKSk7XG5cdGNsb3NlUHJvamVjdEZvcm0oKTtcblx0bGV0IG5ld0luZGV4ID0gc2F2ZWRQcm9qZWN0cy5sZW5ndGggLSAxO1xuXHRyZW5kZXJQcm9qZWN0VGFza3MobmV3SW5kZXgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBZGRQcm9qZWN0Rm9ybSgpIHtcblx0Ly9mb3JtIGNvbnRlbnRcblx0Y29uc3QgZm9ybVRpdGxlID0gZG9tQ3JlYXRlKFwiaDJcIiwgW1wiZm9ybV90aXRsZVwiXSk7XG5cdGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIG5ldyBwcm9qZWN0XCI7XG5cdGNvbnN0IGZvcm1TdWJ0aXRsZSA9IGRvbUNyZWF0ZShcImgyXCIsIFtcImZvcm1fc3VidGl0bGVcIl0pO1xuXHRmb3JtU3VidGl0bGUudGV4dENvbnRlbnQgPSBcIiogcmVxdWlyZWRcIjtcblx0Y29uc3QgY2xvc2VCdG4gPSBkb21DcmVhdGUoXCJzcGFuXCIsIFtcIm1hdGVyaWFsLWljb25zXCIsIFwiY2xvc2UtZm9ybVwiXSwge1xuXHRcdGlkOiBcImNsb3NlLXByb2plY3QtZm9ybVwiLFxuXHR9KTtcblx0Y2xvc2VCdG4udGV4dENvbnRlbnQgPSBcIiBYIFwiO1xuXHRjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQcm9qZWN0Rm9ybSk7XG5cdC8vdGl0bGVcblx0Y29uc3QgdGl0bGVMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHsgZm9yOiBcInAtdGl0bGVcIiB9KTtcblx0dGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGUgKlwiO1xuXHRjb25zdCB0aXRsZUlucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwicC10aXRsZVwiLFxuXHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdG5hbWU6IFwicC10aXRsZVwiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIlRpdGxlXCIsXG5cdH0pO1xuXHRjb25zdCB0aXRsZUVyck1zZyA9IGRvbUNyZWF0ZShcInNtYWxsXCIsIFtcImVyci1tc2dcIl0sIHtcblx0XHRpZDogXCJwcm9qZWN0LXRpdGxlLWVyci1tc2dcIixcblx0fSk7XG5cdHRpdGxlRXJyTXNnLnRleHRDb250ZW50ID0gXCIgKiBUaXRsZSBpcyByZXF1aXJlZFwiO1xuXHR0aXRsZUlucHV0LmFwcGVuZENoaWxkKHRpdGxlRXJyTXNnKTtcblx0dGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblx0Ly9kZXNjcmlwdGlvblxuXHRjb25zdCBkZXNjTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJwLWRlc2NcIiB9KTtcblx0ZGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXHRjb25zdCBkZXNjSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJwLWRlc2NcIixcblx0XHR0eXBlOiBcInRleHRhcmVhXCIsXG5cdFx0bmFtZTogXCJwLWRlc2NcIixcblx0XHRwbGFjZWhvbGRlcjogXCJEZXNjcmlwdGlvblwiLFxuXHR9KTtcblx0ZGVzY0xhYmVsLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG5cdC8vYWRkL2NsZWFyIGJ0bnNcblx0Y29uc3QgcHJvamVjdEZvcm1CdG5zID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcIm5ldy1wcm9qZWN0LWJ1dHRvbnNcIl0pO1xuXHRjb25zdCBhZGRCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW1wiYnRuXCJdLCB7XG5cdFx0aWQ6IFwiYWRkLXByb2plY3QtYnRuXCIsXG5cdH0pO1xuXHRhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXHRhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3RTdWJtaXQpO1xuXHRjb25zdCBjbGVhckJ0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBbXCJidG5cIl0sIHtcblx0XHRpZDogXCJwcm9qZWN0LWNsZWFyXCIsXG5cdH0pO1xuXHRjbGVhckJ0bi50ZXh0Q29udGVudCA9IFwiQ2xlYXIgZmllbGRzXCI7XG5cdGNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclByb2plY3RGb3JtKTtcblx0cHJvamVjdEZvcm1CdG5zLmFwcGVuZChhZGRCdG4sIGNsZWFyQnRuKTtcblx0Ly9mb3JtIGNvbnRhaW5lclxuXHRjb25zdCBmb3JtQ29udGFpbmVyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcImZvcm0tY29udGFpbmVyXCJdLCB7XG5cdFx0aWQ6IFwibmV3LXByb2plY3QtZm9ybVwiLFxuXHR9KTtcblx0Zm9ybUNvbnRhaW5lci5hcHBlbmQoXG5cdFx0Zm9ybVRpdGxlLFxuXHRcdGZvcm1TdWJ0aXRsZSxcblx0XHRjbG9zZUJ0bixcblx0XHR0aXRsZUxhYmVsLFxuXHRcdGRlc2NMYWJlbCxcblx0XHRwcm9qZWN0Rm9ybUJ0bnNcblx0KTtcblx0Ly93cmFwcGVyXG5cdGNvbnN0IGFkZFByb2plY3RTZWN0aW9uID0gZG9tQ3JlYXRlKFwic2VjdGlvblwiLCBbXCJhZGRfcHJvamVjdF9zZWN0aW9uXCJdKTtcblx0YWRkUHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cdHJldHVybiBhZGRQcm9qZWN0U2VjdGlvbjtcbn1cblxuZXhwb3J0IHsgYWRkUHJvamVjdFN1Ym1pdCwgcmVuZGVyQWRkUHJvamVjdEZvcm0gfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi8uLi9ET01cIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi4vLi4vY3JlYXRlXCI7XG5pbXBvcnQgeyBjbG9zZVRhc2tGb3JtLCBjbGVhclRhc2tGb3JtIH0gZnJvbSBcIi4uLy4uL2Zvcm1cIjtcbmltcG9ydCB7IHJlbmRlckRhc2hib2FyZCB9IGZyb20gXCIuLi9wYWdlcy9kYXNoYm9hcmRcIjtcblxuY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5cbmZ1bmN0aW9uIGFkZFRhc2tTdWJtaXQoKSB7XG5cdC8vdmFsaWRhdGlvblxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXRpdGxlXCIpLnZhbHVlID09PSBcIlwiKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlLWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRyZXR1cm47XG5cdH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXRpdGxlXCIpLnZhbHVlICE9PSBcIlwiKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlLWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtcHJpb3JpdHlcIikudmFsdWUgPT09IFwiXCIpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHktZXJyLW1zZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdHJldHVybjtcblx0fSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtcHJpb3JpdHlcIikudmFsdWUgIT09IFwiXCIpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHktZXJyLW1zZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdH1cblx0Y29uc3QgcHJvamVjdEFzc29jaWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRhc2stYWRkXCIpO1xuXHRpZiAocHJvamVjdEFzc29jaWF0aW9uLnZhbHVlID09PSBcIm51bGxcIikge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcm9qZWN0LWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRyZXR1cm47XG5cdH0gZWxzZSBpZiAocHJvamVjdEFzc29jaWF0aW9uLnZhbHVlICE9PSBcIlwiKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByb2plY3QtZXJyLW1zZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdH1cblxuXHQvL3Rhc2sgZmFjdG9yeVxuXHRjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayh7XG5cdFx0dGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC10aXRsZVwiKS52YWx1ZSxcblx0XHRkZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LWRlc2NcIikudmFsdWUsXG5cdFx0ZHVlRGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LWRhdGVcIikudmFsdWUsXG5cdFx0cHJpb3JpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1wcmlvcml0eVwiKS52YWx1ZSxcblx0XHRub3RlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LW5vdGVzXCIpLnZhbHVlLFxuXHR9KTtcblx0Zm9yIChjb25zdCBwcm9qZWN0IGluIHNhdmVkUHJvamVjdHMpIHtcblx0XHRjb25zdCB0aXRsZSA9IHNhdmVkUHJvamVjdHNbcHJvamVjdF0udGl0bGU7XG5cblx0XHQvL2N1cnJlbnRseSBtYXRjaGluZyBkcm9wZG93biBwcm9qZWN0IHRpdGxlcyB0byB0aGUgc2F2ZWRQcm9qZWN0cyBwcm9qZWN0IHRpdGxlc1xuXHRcdC8vVE9ETyAtIGltcGxlbWVudCBhbiBJRCBzeXN0ZW0gc28gZHVwbGljYXRlIG5hbWVzIGNhbiBiZSB1c2VkXG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10YXNrLWFkZFwiKS52YWx1ZSA9PT0gdGl0bGUpIHtcblx0XHRcdHNhdmVkUHJvamVjdHNbcHJvamVjdF0udGFza3MucHVzaChuZXdUYXNrKTtcblx0XHRcdGNvbnNvbGUubG9nKHNhdmVkUHJvamVjdHNbcHJvamVjdF0udGFza3MpO1xuXHRcdH1cblx0fVxuXHQvLyBzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShzYXZlZFByb2plY3RzKSk7XG5cdHJlbmRlckRhc2hib2FyZCgpO1xuXHRjbG9zZVRhc2tGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFkZFRhc2tGb3JtKCkge1xuXHQvL2Zvcm0gY29udGVudFxuXHRjb25zdCBmb3JtVGl0bGUgPSBkb21DcmVhdGUoXCJoMlwiLCBbXCJmb3JtX3RpdGxlXCJdKTtcblx0Zm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgbmV3IHRhc2tcIjtcblx0Y29uc3QgZm9ybVN1YnRpdGxlID0gZG9tQ3JlYXRlKFwiaDJcIiwgW1wiZm9ybV9zdWJ0aXRsZVwiXSk7XG5cdGZvcm1TdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiKiByZXF1aXJlZFwiO1xuXHRjb25zdCBjbG9zZUJ0biA9IGRvbUNyZWF0ZShcInNwYW5cIiwgW1wibWF0ZXJpYWwtaWNvbnNcIiwgXCJjbG9zZS1mb3JtXCJdLCB7XG5cdFx0aWQ6IFwiY2xvc2UtdGFzay1mb3JtXCIsXG5cdH0pO1xuXHRjbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwiIFggXCI7XG5cdGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVRhc2tGb3JtKTtcblx0Ly90aXRsZVxuXHRjb25zdCB0aXRsZUxhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwidC10aXRsZVwiIH0pO1xuXHR0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZSAqXCI7XG5cdGNvbnN0IHRpdGxlSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LXRpdGxlXCIsXG5cdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0bmFtZTogXCJ0YXNrLXRpdGxlXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiVGl0bGVcIixcblx0fSk7XG5cdGNvbnN0IHRpdGxlRXJyTXNnID0gZG9tQ3JlYXRlKFwic21hbGxcIiwgW1wiZXJyLW1zZ1wiXSwge1xuXHRcdGlkOiBcInRhc2stdGl0bGUtZXJyLW1zZ1wiLFxuXHR9KTtcblx0dGl0bGVFcnJNc2cudGV4dENvbnRlbnQgPSBcIiAqIFRhc2sgdGl0bGUgaXMgcmVxdWlyZWRcIjtcblx0dGl0bGVMYWJlbC5hcHBlbmQodGl0bGVJbnB1dCwgdGl0bGVFcnJNc2cpO1xuXHQvL2Rlc2NyaXB0aW9uXG5cdGNvbnN0IGRlc2NMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHsgZm9yOiBcInQtZGVzY1wiIH0pO1xuXHRkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG5cdGNvbnN0IGRlc2NJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtcImZvcm0tY29udHJvbFwiXSwge1xuXHRcdGlkOiBcInQtZGVzY1wiLFxuXHRcdHR5cGU6IFwidGV4dGFyZWFcIixcblx0XHRuYW1lOiBcInQtZGVzY1wiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIkRlc2NyaXB0aW9uXCIsXG5cdH0pO1xuXHRkZXNjTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcblx0Ly9kYXRlXG5cdGNvbnN0IGRhdGVMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHsgZm9yOiBcInQtZGF0ZVwiIH0pO1xuXHRkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG5cdGNvbnN0IGRhdGVJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtcImZvcm0tY29udHJvbFwiXSwge1xuXHRcdGlkOiBcInQtZGF0ZVwiLFxuXHRcdHR5cGU6IFwiZGF0ZVwiLFxuXHRcdG5hbWU6IFwidC1kYXRlXCIsXG5cdH0pO1xuXHRkYXRlTGFiZWwuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblx0Ly9wcmlvcml0eVxuXHRjb25zdCBwcmlvcml0eUxhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwidC1wcmlvcml0eVwiIH0pO1xuXHRwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eSAoNSBpcyBoaWdoZXN0KSAqXCI7XG5cdGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LXByaW9yaXR5XCIsXG5cdFx0dHlwZTogXCJudW1iZXJcIixcblx0XHRuYW1lOiBcInQtcHJpb3JpdHlcIixcblx0XHRwbGFjZWhvbGRlcjogXCIzXCIsXG5cdFx0bWluOiBcIjFcIixcblx0XHRtYXg6IFwiNVwiLFxuXHR9KTtcblx0Y29uc3QgcHJpb3JpdHlFcnJNc2cgPSBkb21DcmVhdGUoXCJzbWFsbFwiLCBbXCJlcnItbXNnXCJdLCB7XG5cdFx0aWQ6IFwidGFzay1wcmlvcml0eS1lcnItbXNnXCIsXG5cdH0pO1xuXHRwcmlvcml0eUVyck1zZy50ZXh0Q29udGVudCA9IFwiICogUHJpb3JpdHkgYmV0d2VlbiAxLTUgaXMgcmVxdWlyZWRcIjtcblx0cHJpb3JpdHlMYWJlbC5hcHBlbmQocHJpb3JpdHlJbnB1dCwgcHJpb3JpdHlFcnJNc2cpO1xuXHQvL25vdGVzXG5cdGNvbnN0IG5vdGVzTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJ0LW5vdGVzXCIgfSk7XG5cdG5vdGVzTGFiZWwudGV4dENvbnRlbnQgPSBcIk5vdGVzXCI7XG5cdGNvbnN0IG5vdGVzSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LW5vdGVzXCIsXG5cdFx0dHlwZTogXCJ0ZXh0YXJlYVwiLFxuXHRcdG5hbWU6IFwidC1ub3Rlc1wiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIk5vdGVzXCIsXG5cdH0pO1xuXHRub3Rlc0xhYmVsLmFwcGVuZENoaWxkKG5vdGVzSW5wdXQpO1xuXHQvL3Byb2plY3QgbGlzdFxuXHRjb25zdCBwcm9qZWN0TGlzdExhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwge1xuXHRcdGZvcjogXCJwcm9qZWN0LXRhc2stYWRkXCIsXG5cdH0pO1xuXHRwcm9qZWN0TGlzdExhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgdG8gRXhpc3RpbmcgUHJvamVjdFwiO1xuXHRjb25zdCBwcm9qZWN0TGlzdFNlbGVjdCA9IGRvbUNyZWF0ZShcInNlbGVjdFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJwcm9qZWN0LXRhc2stYWRkXCIsXG5cdFx0bmFtZTogXCJwcm9qZWN0LXRhc2stYWRkXCIsXG5cdH0pO1xuXHRjb25zdCBwcm9qZWN0TGlzdE9wdGlvbkRFRkFVTFQgPSBkb21DcmVhdGUoXCJvcHRpb25cIiwgXCJcIiwge1xuXHRcdHZhbHVlOiBcIm51bGxcIixcblx0XHRkaXNhYmxlZDogXCJcIixcblx0XHRzZWxlY3RlZDogXCJcIixcblx0fSk7XG5cdHByb2plY3RMaXN0T3B0aW9uREVGQVVMVC50ZXh0Q29udGVudCA9IFwiLS1TZWxlY3QgZXhpc3RpbmcgcHJvamVjdC0tXCI7XG5cdHByb2plY3RMaXN0U2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RMaXN0T3B0aW9uREVGQVVMVCk7XG5cdC8vLy8gIGdldCBuYW1lcyBvZiBhbGwgcHJvamVjdHNcblx0Y29uc3QgdG90YWxQcm9qZWN0TmFtZXMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzYXZlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IHNhdmVkUHJvamVjdHNbaV07XG5cdFx0dG90YWxQcm9qZWN0TmFtZXMucHVzaChwcm9qZWN0LnRpdGxlKTtcblx0fVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsUHJvamVjdE5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRvdGFsUHJvamVjdE5hbWVzW2ldO1xuXHRcdGNvbnN0IHByb2plY3RMaXN0T3B0aW9uID0gZG9tQ3JlYXRlKFwib3B0aW9uXCIsIFwiXCIsIHtcblx0XHRcdHZhbHVlOiBuYW1lLFxuXHRcdH0pO1xuXHRcdHByb2plY3RMaXN0T3B0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcblx0XHRwcm9qZWN0TGlzdFNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdE9wdGlvbik7XG5cdH1cblx0Y29uc3QgcHJvamVjdExpc3RFcnJNc2cgPSBkb21DcmVhdGUoXCJzbWFsbFwiLCBbXCJlcnItbXNnXCJdLCB7XG5cdFx0aWQ6IFwidGFzay1wcm9qZWN0LWVyci1tc2dcIixcblx0fSk7XG5cdHByb2plY3RMaXN0RXJyTXNnLnRleHRDb250ZW50ID0gXCIgKiBQcm9qZWN0IGFzc29jaWF0aW9uIGlzIHJlcXVpcmVkXCI7XG5cdHByb2plY3RMaXN0TGFiZWwuYXBwZW5kKHByb2plY3RMaXN0U2VsZWN0LCBwcm9qZWN0TGlzdEVyck1zZyk7XG5cdC8vYWRkL2NsZWFyIGJ0bnNcblx0Y29uc3QgdGFza0Zvcm1CdG5zID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcIm5ldy10YXNrLWJ1dHRvbnNcIl0pO1xuXHRjb25zdCBhZGRCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW1wiYnRuXCJdLCB7XG5cdFx0aWQ6IFwiYWRkLXRhc2stYnRuXCIsXG5cdH0pO1xuXHRhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXHRhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2tTdWJtaXQpO1xuXHRjb25zdCBjbGVhckJ0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBbXCJidG5cIl0sIHtcblx0XHRpZDogXCJ0YXNrLWNsZWFyXCIsXG5cdH0pO1xuXHRjbGVhckJ0bi50ZXh0Q29udGVudCA9IFwiQ2xlYXIgZmllbGRzXCI7XG5cdGNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclRhc2tGb3JtKTtcblx0dGFza0Zvcm1CdG5zLmFwcGVuZChhZGRCdG4sIGNsZWFyQnRuKTtcblx0Ly9mb3JtIGNvbnRhaW5lclxuXHRjb25zdCBmb3JtQ29udGFpbmVyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcImZvcm0tY29udGFpbmVyXCJdLCB7XG5cdFx0aWQ6IFwibmV3LXByb2plY3QtZm9ybVwiLFxuXHR9KTtcblx0Zm9ybUNvbnRhaW5lci5hcHBlbmQoXG5cdFx0Zm9ybVRpdGxlLFxuXHRcdGZvcm1TdWJ0aXRsZSxcblx0XHRjbG9zZUJ0bixcblx0XHR0aXRsZUxhYmVsLFxuXHRcdGRlc2NMYWJlbCxcblx0XHRkYXRlTGFiZWwsXG5cdFx0cHJpb3JpdHlMYWJlbCxcblx0XHRub3Rlc0xhYmVsLFxuXHRcdHByb2plY3RMaXN0TGFiZWwsXG5cdFx0dGFza0Zvcm1CdG5zXG5cdCk7XG5cdC8vd3JhcHBlclxuXHRjb25zdCBhZGRUYXNrU2VjdGlvbiA9IGRvbUNyZWF0ZShcInNlY3Rpb25cIiwgW1wiYWRkX3Rhc2tfc2VjdGlvblwiXSk7XG5cdGFkZFRhc2tTZWN0aW9uLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXHRyZXR1cm4gYWRkVGFza1NlY3Rpb247XG59XG5cbmV4cG9ydCB7IGFkZFRhc2tTdWJtaXQsIHJlbmRlckFkZFRhc2tGb3JtIH07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vLi4vRE9NXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0VGFza3MgfSBmcm9tIFwiLi4vcGFnZXMvcHJvamVjdFRhc2tzXCI7XG5pbXBvcnQgeyByZW5kZXJEYXNoYm9hcmRQYWdlLCByZW5kZXJBbGxQcm9qZWN0c1BhZ2UgfSBmcm9tIFwiLi4vcmVuZGVyUGFnZXNcIjtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdEFzaWRlTGlzdCgpIHtcblx0Y29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5cdGNvbnN0IHByb2plY3RMaXN0ID0gZG9tQ3JlYXRlKFwidWxcIiwgXCJcIiwgeyBpZDogXCJwcm9qZWN0LXBhbmVsLWxpc3RcIiB9KTtcblxuXHRpZiAoc2F2ZWRQcm9qZWN0cy5sZW5ndGggPT09IDApIHJldHVybiBwcm9qZWN0TGlzdDtcblx0Y29uc3QgdG90YWxQcm9qZWN0TmFtZXMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzYXZlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IHNhdmVkUHJvamVjdHNbaV07XG5cdFx0dG90YWxQcm9qZWN0TmFtZXMucHVzaChwcm9qZWN0LnRpdGxlKTtcblx0fVxuXHQvLy8vZG9tIGxvZ2ljXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxQcm9qZWN0TmFtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBuYW1lID0gdG90YWxQcm9qZWN0TmFtZXNbaV07XG5cdFx0Y29uc3QgbGlFbCA9IGRvbUNyZWF0ZShcImxpXCIsIFtcInByb2plY3QtbGlzdC1pdGVtXCJdLCB7XG5cdFx0XHRcImRhdGEtcHJvamVjdC1pbmRleFwiOiBpLFxuXHRcdH0pO1xuXHRcdGxpRWwudGV4dENvbnRlbnQgPSBuYW1lO1xuXHRcdGxpRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGRhc2hib2FyZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXNoLWFzaWRlXCIpO1xuXHRcdFx0Y29uc3QgcHJvamVjdExpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0LWFzaWRlXCIpO1xuXHRcdFx0Y29uc3QgYWxsUHJvamVjdHNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLXByb2plY3RzLWFzaWRlXCIpO1xuXHRcdFx0Y29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWxpc3QtaXRlbVwiKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGl0ZW0gPSBwcm9qZWN0SXRlbXNbaV07XG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3QtbGlzdC1zZWxlY3RlZFwiKTtcblx0XHRcdH1cblx0XHRcdGxpRWwuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1zZWxlY3RlZFwiKTtcblxuXHRcdFx0aWYgKCFwcm9qZWN0TGlzdEVsLmNsYXNzTGlzdC5jb250YWlucyhcImFzaWRlLXNlbGVjdGVkXCIpKSB7XG5cdFx0XHRcdHByb2plY3RMaXN0RWwuY2xhc3NMaXN0LmFkZChcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0XHRkYXNoYm9hcmRFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRcdGFsbFByb2plY3RzRWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGluZGV4ID0gbGlFbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIik7XG5cdFx0XHRyZW5kZXJQcm9qZWN0VGFza3MoaW5kZXgpO1xuXHRcdH0pO1xuXHRcdHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpRWwpO1xuXHR9XG5cdHJldHVybiBwcm9qZWN0TGlzdDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQXNpZGUoKSB7XG5cdC8vREFTSEJPQVJEXG5cdGNvbnN0IGRhc2hib2FyZEVsID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcImFzaWRlLWl0ZW1cIiwgXCJhc2lkZS1zZWxlY3RlZFwiXSwge1xuXHRcdGlkOiBcImRhc2gtYXNpZGVcIixcblx0fSk7XG5cdGRhc2hib2FyZEVsLnRleHRDb250ZW50ID0gXCJEQVNIQk9BUkRcIjtcblxuXHQvL0FMTCBQUk9KRUNUU1xuXHRjb25zdCBhbGxQcm9qZWN0c0VsID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcImFzaWRlLWl0ZW1cIl0sIHtcblx0XHRpZDogXCJhbGwtcHJvamVjdHMtYXNpZGVcIixcblx0fSk7XG5cdGFsbFByb2plY3RzRWwudGV4dENvbnRlbnQgPSBcIkFMTCBQUk9KRUNUU1wiO1xuXHQvL1BST0pFQ1QgTElTVFxuXHRjb25zdCBwcm9qZWN0TGlzdEJ0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBcIlwiLCB7XG5cdFx0aWQ6IFwicHJvamVjdC1hY2NvcmRpb24tYnRuXCIsXG5cdH0pO1xuXHRwcm9qZWN0TGlzdEJ0bi50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFNcIjtcblxuXHRjb25zdCBwcm9qZWN0UGFuZWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJwcm9qZWN0LXBhbmVsLWRpc3BsYXlcIiB9KTtcblx0Y29uc3QgcHJvamVjdExpc3RVTCA9IHJlbmRlclByb2plY3RBc2lkZUxpc3QoKTtcblx0cHJvamVjdFBhbmVsLmFwcGVuZENoaWxkKHByb2plY3RMaXN0VUwpO1xuXHRjb25zdCBwcm9qZWN0TGlzdEVsID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcImFzaWRlLWl0ZW1cIl0sIHtcblx0XHRpZDogXCJwcm9qZWN0LWxpc3QtYXNpZGVcIixcblx0fSk7XG5cdGZ1bmN0aW9uIGFjY29yZGlvblRvZ2dsZSgpIHtcblx0XHRwcm9qZWN0TGlzdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXHRcdGlmIChwcm9qZWN0UGFuZWwuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG5cdFx0XHRwcm9qZWN0UGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwcm9qZWN0UGFuZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHR9XG5cdH1cblx0cHJvamVjdExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjY29yZGlvblRvZ2dsZSk7XG5cdHByb2plY3RMaXN0RWwuYXBwZW5kKHByb2plY3RMaXN0QnRuLCBwcm9qZWN0UGFuZWwpO1xuXHQvL3NlbGVjdCB0b2dnbGUgZXZlbnQgbGlzdGVuZXJzXG5cdGRhc2hib2FyZEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCFkYXNoYm9hcmRFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhc2lkZS1zZWxlY3RlZFwiKSkge1xuXHRcdFx0ZGFzaGJvYXJkRWwuY2xhc3NMaXN0LmFkZChcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0YWxsUHJvamVjdHNFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRwcm9qZWN0TGlzdEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHR9XG5cdFx0cHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRyZW5kZXJEYXNoYm9hcmRQYWdlKCk7XG5cdH0pO1xuXHRhbGxQcm9qZWN0c0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCFhbGxQcm9qZWN0c0VsLmNsYXNzTGlzdC5jb250YWlucyhcImFzaWRlLXNlbGVjdGVkXCIpKSB7XG5cdFx0XHRhbGxQcm9qZWN0c0VsLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdGRhc2hib2FyZEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdHByb2plY3RMaXN0RWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdH1cblx0XHRwcm9qZWN0UGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdHJlbmRlckFsbFByb2plY3RzUGFnZSgpO1xuXHR9KTtcblx0Ly9GVUxMIEFTSURFIEFQUEVORFxuXHRjb25zdCBhc2lkZUVsID0gZG9tQ3JlYXRlKFwiYXNpZGVcIiwgXCJcIiwgeyBpZDogXCJtYWluLWFzaWRlXCIgfSk7XG5cdGFzaWRlRWwuYXBwZW5kKGRhc2hib2FyZEVsLCBhbGxQcm9qZWN0c0VsLCBwcm9qZWN0TGlzdEVsKTtcblx0Ly9hcHBseSBvdGhlciBzdHlsaW5nIC8gZWxlbWVudHMgLyBjbGljayBldmVudHNcblx0cmVuZGVyUHJvamVjdEFzaWRlTGlzdCgpO1xuXHRyZXR1cm4gYXNpZGVFbDtcbn1cblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdEFzaWRlTGlzdCwgcmVuZGVyQXNpZGUgfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi8uLi9ET01cIjtcbmltcG9ydCBjaGVja0xvZ28gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9jaGVja2JveC1tYXJrZWQtY2lyY2xlLnBuZ1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9wbHVzLWNpcmNsZS1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IGFkZFRhc2tJY29uIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvY2hlY2tib3gtbWFya2VkLWNpcmNsZS1wbHVzLW91dGxpbmUucG5nXCI7XG5pbXBvcnQgYWRkUHJvamVjdEljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9saXN0LWdyb3VwLXBsdXMucG5nXCI7XG5pbXBvcnQgZ2Vhckljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9jb2ctb3V0bGluZS5wbmdcIjtcbmltcG9ydCB7IHNlZWRQcm9qZWN0RGF0YSB9IGZyb20gXCIuLi8uLi9kYXRhL3NlZWRcIjtcbmltcG9ydCB7IHJlbmRlclRhc2tGb3JtLCByZW5kZXJQcm9qZWN0Rm9ybSB9IGZyb20gXCIuLi8uLi9mb3JtXCI7XG5pbXBvcnQgeyByZW5kZXJEYXNoYm9hcmRQYWdlIH0gZnJvbSBcIi4uL3JlbmRlclBhZ2VzXCI7XG5pbXBvcnQgeyByZW5kZXJTZWFyY2ggfSBmcm9tIFwiLi4vcGFnZXMvc2VhcmNoXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckFkZE1lbnUoKSB7XG5cdGNvbnN0IGFkZEljb25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtaWNvbi1tZW51XCIpO1xuXHRhZGRJY29uTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiaWNvbi1tZW51LXRvZ2dsZVwiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuXHQvLy8vaGVhZGVyIExFRlRcblx0ZnVuY3Rpb24gY3JlYXRlSGVhZGVyTGVmdCgpIHtcblx0XHRjb25zdCBzaXRlTG9nbyA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJmYWtlLWNsYXNzXCJdLCB7XG5cdFx0XHRzcmM6IGNoZWNrTG9nbyxcblx0XHRcdGFsdDogXCJjaGVja2VkIGNpcmNsZSBsb2dvXCIsXG5cdFx0fSk7XG5cdFx0Y29uc3Qgc2l0ZVRpdGxlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwiaGVhZGVyLXNpdGUtdGl0bGVcIiB9KTtcblx0XHRzaXRlVGl0bGUudGV4dENvbnRlbnQgPSBcIlRPRE8gTElTVFwiO1xuXHRcdC8vYWRkIGljb24gbWVudVxuXHRcdGNvbnN0IGFkZEJ0bkljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgXCJcIiwge1xuXHRcdFx0aWQ6IFwiYWRkLWljb25cIixcblx0XHRcdHNyYzogYWRkSWNvbixcblx0XHRcdGFsdDogXCJhZGQgYnV0dG9uIHBsdXMgaWNvblwiLFxuXHRcdH0pO1xuXHRcdGFkZEJ0bkljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckFkZE1lbnUpO1xuXHRcdGNvbnN0IGFkZEljb25NZW51ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwiYWRkLWljb24tbWVudVwiIH0pO1xuXHRcdGNvbnN0IGFkZFRhc2tJbWcgPSBkb21DcmVhdGUoXCJpbWdcIiwgXCJcIiwge1xuXHRcdFx0aWQ6IFwiYWRkLXRhc2stZm9ybVwiLFxuXHRcdFx0c3JjOiBhZGRUYXNrSWNvbixcblx0XHRcdGFsdDogXCJhZGQgdGFzayBwbHVzIGljb25cIixcblx0XHR9KTtcblxuXHRcdGFkZFRhc2tJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRhc2tGb3JtKTtcblx0XHRjb25zdCBhZGRQcm9qZWN0SW1nID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFwiXCIsIHtcblx0XHRcdGlkOiBcImFkZC1wcm9qZWN0LWZvcm1cIixcblx0XHRcdHNyYzogYWRkUHJvamVjdEljb24sXG5cdFx0XHRhbHQ6IFwiYWRkIHByb2plY3QgcGx1cyBpY29uXCIsXG5cdFx0fSk7XG5cdFx0YWRkUHJvamVjdEltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyUHJvamVjdEZvcm0pO1xuXHRcdGFkZEljb25NZW51LmFwcGVuZChhZGRUYXNrSW1nLCBhZGRQcm9qZWN0SW1nKTtcblx0XHRjb25zdCBhZGRCdG5FbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcImFkZEJ0blwiIH0pO1xuXHRcdGFkZEJ0bkVsLmFwcGVuZChhZGRCdG5JY29uLCBhZGRJY29uTWVudSk7XG5cdFx0Y29uc3QgaGVhZGVyTGVmdCA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcImhlYWRlckxlZnRcIiB9KTtcblx0XHRoZWFkZXJMZWZ0LmFwcGVuZChzaXRlTG9nbywgc2l0ZVRpdGxlLCBhZGRCdG5FbCk7XG5cdFx0cmV0dXJuIGhlYWRlckxlZnQ7XG5cdH1cblx0Ly8vL2hlYWRlciBDRU5URVJcblx0ZnVuY3Rpb24gY3JlYXRlSGVhZGVyQ2VudGVyKCkge1xuXHRcdGNvbnN0IHNlYXJjaExhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwic2l0ZS1zZWFyY2hcIiB9KTtcblx0XHRzZWFyY2hMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VhcmNoOiBcIjtcblx0XHRjb25zdCBzZWFyY2hJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFwiXCIsIHtcblx0XHRcdGlkOiBcInNpdGUtc2VhcmNoXCIsXG5cdFx0XHR0eXBlOiBcInNlYXJjaFwiLFxuXHRcdFx0bmFtZTogXCJxXCIsXG5cdFx0XHRwbGFjZWhvbGRlcjogXCIgdHlwZSBoZXJlLi4uXCIsXG5cdFx0fSk7XG5cdFx0c2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG5cdFx0XHRsZXQgY3VycmVudFZhbCA9IGUudGFyZ2V0LnZhbHVlOyAvLyBcIm1vd1wiXG5cdFx0XHRyZW5kZXJTZWFyY2goY3VycmVudFZhbCk7XG5cdFx0XHRpZiAoY3VycmVudFZhbCA9PT0gXCJcIikgcmVuZGVyRGFzaGJvYXJkUGFnZSgpO1xuXHRcdH0pO1xuXHRcdC8vIGNvbnN0IHNlYXJjaEJ0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBcIlwiKTtcblx0XHQvLyBzZWFyY2hCdG4udGV4dENvbnRlbnQgPSBcIlNlYXJjaFwiO1xuXG5cdFx0Y29uc3QgaGVhZGVyQ2VudGVyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwiaGVhZGVyQ2VudGVyXCIgfSk7XG5cdFx0aGVhZGVyQ2VudGVyLmFwcGVuZChzZWFyY2hMYWJlbCwgc2VhcmNoSW5wdXQpO1xuXHRcdHJldHVybiBoZWFkZXJDZW50ZXI7XG5cdH1cblx0Ly8vL2hlYWRlciBSSUdIVFxuXHRmdW5jdGlvbiBjcmVhdGVIZWFkZXJSaWdodCgpIHtcblx0XHQvL3NlZWQgZGF0YVxuXHRcdGNvbnN0IHNlZWREYXRhQnRuID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcIm5hdi1pdGVtXCJdLCB7XG5cdFx0XHRpZDogXCJzZWVkLXByb2plY3RzLWJ0blwiLFxuXHRcdH0pO1xuXHRcdHNlZWREYXRhQnRuLnRleHRDb250ZW50ID0gXCJTRUVEIERBVEFcIjtcblx0XHRzZWVkRGF0YUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VlZFByb2plY3REYXRhKTtcblx0XHQvL2xvZ2luXG5cdFx0Y29uc3QgbG9naW5FbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJuYXYtaXRlbVwiXSwgeyBpZDogXCJsb2dpblwiIH0pO1xuXHRcdGxvZ2luRWwudGV4dENvbnRlbnQgPSBcIkxPR0lOXCI7XG5cdFx0Ly9zZXR0aW5nc1xuXHRcdGNvbnN0IHNldHRpbmdzSWNvbiA9IGRvbUNyZWF0ZShcImltZ1wiLCBcIlwiLCB7XG5cdFx0XHRpZDogXCJzZXR0aW5ncyBnZWFyIGljb25cIixcblx0XHRcdHNyYzogZ2Vhckljb24sXG5cdFx0XHRhbHQ6IFwic2V0dGluZ3MgZ2VhciBvdXRsaW5lXCIsXG5cdFx0fSk7XG5cdFx0Y29uc3Qgc2V0dGluZ3NMaW5rID0gZG9tQ3JlYXRlKFwiYVwiLCBcIlwiLCB7XG5cdFx0XHRocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbGV4Z2Vpcy90b2RvLWxpc3RcIixcblx0XHRcdHRhcmdldDogXCJfYmxhbmtcIixcblx0XHR9KTtcblx0XHRzZXR0aW5nc0xpbmsuYXBwZW5kQ2hpbGQoc2V0dGluZ3NJY29uKTtcblx0XHRjb25zdCBzZXR0aW5nc0VsID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcIm5hdi1pdGVtXCJdLCB7IGlkOiBcInNldHRpbmdzXCIgfSk7XG5cdFx0c2V0dGluZ3NFbC5hcHBlbmRDaGlsZChzZXR0aW5nc0xpbmspO1xuXG5cdFx0Y29uc3QgbmF2TWVudUxJMSA9IGRvbUNyZWF0ZShcImxpXCIsIFtcIm5hdi1pdGVtXCJdKTtcblx0XHRuYXZNZW51TEkxLmFwcGVuZENoaWxkKHNlZWREYXRhQnRuKTtcblx0XHRjb25zdCBuYXZNZW51TEkyID0gZG9tQ3JlYXRlKFwibGlcIiwgW1wibmF2LWl0ZW1cIl0pO1xuXHRcdG5hdk1lbnVMSTIuYXBwZW5kQ2hpbGQobG9naW5FbCk7XG5cdFx0Y29uc3QgbmF2TWVudUxJMyA9IGRvbUNyZWF0ZShcImxpXCIsIFtcIm5hdi1pdGVtXCJdKTtcblx0XHRuYXZNZW51TEkzLmFwcGVuZENoaWxkKHNldHRpbmdzRWwpO1xuXHRcdGNvbnN0IG5hdk1lbnVVTCA9IGRvbUNyZWF0ZShcInVsXCIsIFtcIm5hdi1tZW51XCJdKTtcblx0XHRuYXZNZW51VUwuYXBwZW5kKG5hdk1lbnVMSTEsIG5hdk1lbnVMSTIsIG5hdk1lbnVMSTMpO1xuXG5cdFx0Ly8gLy9oYW1idXJnZXIgbWVudVxuXHRcdC8vIGNvbnN0IGJhcjEgPSBkb21DcmVhdGUoXCJzcGFuXCIsIFtcImJhclwiXSk7XG5cdFx0Ly8gY29uc3QgYmFyMiA9IGRvbUNyZWF0ZShcInNwYW5cIiwgW1wiYmFyXCJdKTtcblx0XHQvLyBjb25zdCBiYXIzID0gZG9tQ3JlYXRlKFwic3BhblwiLCBbXCJiYXJcIl0pO1xuXHRcdC8vIGNvbnN0IGhhbWJ1cmdlckRpdiA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJoYW1idXJnZXJcIl0pO1xuXHRcdC8vIGhhbWJ1cmdlckRpdi5hcHBlbmQoYmFyMSwgYmFyMiwgYmFyMyk7XG5cdFx0Ly8gaGFtYnVyZ2VyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Ly8gXHRoYW1idXJnZXJEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0XHQvLyBcdG5hdk1lbnVVTC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXHRcdC8vIH0pO1xuXHRcdC8vaGVhZGVyUmlnaHQgYXBwZW5kXG5cdFx0Y29uc3QgaGVhZGVyUmlnaHQgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJoZWFkZXJSaWdodFwiIH0pO1xuXHRcdGhlYWRlclJpZ2h0LmFwcGVuZENoaWxkKG5hdk1lbnVVTCk7XG5cdFx0cmV0dXJuIGhlYWRlclJpZ2h0O1xuXHR9XG5cdC8vaGFtYnVyZ2VyIG1lbnVcblx0Y29uc3QgYmFyMSA9IGRvbUNyZWF0ZShcInNwYW5cIiwgW1wiYmFyXCJdKTtcblx0Y29uc3QgYmFyMiA9IGRvbUNyZWF0ZShcInNwYW5cIiwgW1wiYmFyXCJdKTtcblx0Y29uc3QgYmFyMyA9IGRvbUNyZWF0ZShcInNwYW5cIiwgW1wiYmFyXCJdKTtcblx0Y29uc3QgaGFtYnVyZ2VyRGl2ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcImhhbWJ1cmdlclwiXSk7XG5cdGhhbWJ1cmdlckRpdi5hcHBlbmQoYmFyMSwgYmFyMiwgYmFyMyk7XG5cdGhhbWJ1cmdlckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGhhbWJ1cmdlckRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXHRcdG5hdk1lbnVVTC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXHR9KTtcblx0Ly9GVUxMIEhFQURFUiBBUFBFTkRcblx0Y29uc3QgaGVhZGVyID0gZG9tQ3JlYXRlKFwiaGVhZGVyXCIsIFwiXCIsIHsgaWQ6IFwiaGVhZGVyXCIgfSk7XG5cdGhlYWRlci5hcHBlbmQoXG5cdFx0Y3JlYXRlSGVhZGVyTGVmdCgpLFxuXHRcdGNyZWF0ZUhlYWRlckNlbnRlcigpLFxuXHRcdGNyZWF0ZUhlYWRlclJpZ2h0KCksXG5cdFx0aGFtYnVyZ2VyRGl2XG5cdCk7XG5cdHJldHVybiBoZWFkZXI7XG5cdC8vIC8vQ09OVEVOVCBBUFBFTkRcblx0Ly8gY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblx0Ly8gcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5leHBvcnQgeyByZW5kZXJIZWFkZXIgfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi8uLi9ET01cIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0VGFza3MgfSBmcm9tIFwiLi4vcGFnZXMvcHJvamVjdFRhc2tzXCI7XG5pbXBvcnQgeyByZW5kZXJUYXNrRm9ybSwgcmVuZGVyUHJvamVjdEZvcm0gfSBmcm9tIFwiLi4vLi4vZm9ybVwiO1xuXG5mdW5jdGlvbiByZW5kZXJEYXNoYm9hcmQoKSB7XG5cdC8vZ2V0IGFsbCB0YXNrcyBmcm9tIGFsbCBwcm9qZWN0c1xuXHRjb25zdCBjdXJyZW50UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXHQvLyBjb25zb2xlLmxvZyh7IGN1cnJlbnRQcm9qZWN0cyB9KTtcblxuXHRjb25zdCBwcm9qZWN0VGFza0RhdGEgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3RzW2ldO1xuXHRcdGNvbnN0IGRhdGEgPSB7XG5cdFx0XHRwcm9qZWN0VGl0bGU6IHByb2plY3QudGl0bGUsXG5cdFx0XHR0YXNrczogcHJvamVjdC50YXNrcyxcblx0XHRcdGluZGV4OiBpLFxuXHRcdH07XG5cdFx0cHJvamVjdFRhc2tEYXRhLnB1c2goZGF0YSk7XG5cdH1cblx0Ly8gY29uc29sZS50YWJsZShwcm9qZWN0VGFza0RhdGEpO1xuXHQvL2NsZWFyIGN1cnJlbnQgdGFza3Ncblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcIm1haW4tY29udGVudFwiIH0pO1xuXHR0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cdC8vbm8gcHJvamVjdCByZXN1bHRzIGJhY2t1cFxuXHRpZiAoY3VycmVudFByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRhc2tDb250YWluZXIudGV4dENvbnRlbnQgPSBcIk5vIHByb2plY3RzIGNyZWF0ZWQgeWV0XCI7XG5cdFx0Y29uc3QgZW1wdHlEaXYgPSBkb21DcmVhdGUoXCJkaXZcIik7XG5cdFx0Y29uc3QgZW1wdHlQcm9qZWN0QnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImVtcHR5LWJ0blwiXSwge1xuXHRcdFx0aWQ6IFwiZW1wdHktcHJvamVjdC1idG4tZGFzaFwiLFxuXHRcdH0pO1xuXHRcdGVtcHR5UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ1JFQVRFIFBST0pFQ1RcIjtcblx0XHRlbXB0eVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclByb2plY3RGb3JtKTtcblx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZChlbXB0eURpdiwgZW1wdHlQcm9qZWN0QnRuKTtcblx0fVxuXHQvL25vIHRhc2sgcmVzdWx0cyBiYWNrdXBcblx0Y29uc3QgY3VycmVudFRhc2tzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c1tpXTtcblx0XHRjdXJyZW50VGFza3MucHVzaCguLi5wcm9qZWN0LnRhc2tzKTtcblx0fVxuXHRpZiAoY3VycmVudFByb2plY3RzLmxlbmd0aCA+IDAgJiYgY3VycmVudFRhc2tzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRhc2tDb250YWluZXIudGV4dENvbnRlbnQgPSBcIk5vIHRhc2tzIGNyZWF0ZWQgeWV0XCI7XG5cdFx0Y29uc3QgZW1wdHlEaXYgPSBkb21DcmVhdGUoXCJkaXZcIik7XG5cdFx0Y29uc3QgZW1wdHlUYXNrQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImVtcHR5LWJ0blwiXSwge1xuXHRcdFx0aWQ6IFwiZW1wdHktdGFzay1idG4tZGFzaFwiLFxuXHRcdH0pO1xuXHRcdGVtcHR5VGFza0J0bi50ZXh0Q29udGVudCA9IFwiQ1JFQVRFIFRBU0tcIjtcblx0XHRlbXB0eVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRhc2tGb3JtKTtcblx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZChlbXB0eURpdiwgZW1wdHlUYXNrQnRuKTtcblx0fVxuXHQvL3JlbmRlciBwcm9qZWN0VGFza0RhdGEgdGFza3Ncblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0VGFza0RhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBkYXRhID0gcHJvamVjdFRhc2tEYXRhW2ldO1xuXHRcdC8vIGNvbnNvbGUubG9nKHsgZGF0YSB9KTtcblx0XHQvL2lubmVyIHRhc2sgY2FyZCBkaXYgaXRlbXNcblx0XHQvL3Rhc2sgY2FyZCByZW5kZXJzXG5cdFx0bGV0IHRhc2tEYXRhID0gZGF0YS50YXNrcztcblx0XHQvLyBjb25zb2xlLmxvZyh7IHRhc2tEYXRhIH0pOyAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tEYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCB0YXNrID0gdGFza0RhdGFbaV07XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh7IHRhc2sgfSk7XG5cdFx0XHRjb25zdCB0YXNrQ2FyZCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWNhcmRcIl0sIHtcblx0XHRcdFx0XCJkYXRhLXRhc2staW5kZXhcIjogaSxcblx0XHRcdH0pO1xuXHRcdFx0Ly9USVRMRVxuXHRcdFx0Y29uc3QgdGFza1RpdGxlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stdGl0bGUtZGFzaFwiXSk7XG5cdFx0XHR0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRcdFx0Ly9QUk9KRUNUIFRJVExFXG5cdFx0XHRjb25zdCBwcm9qZWN0VGl0bGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wicHJvamVjdC10aXRsZS1kYXNoXCJdKTtcblx0XHRcdHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGRhdGEucHJvamVjdFRpdGxlO1xuXHRcdFx0cHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGNvbnN0IGRhc2hib2FyZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXNoLWFzaWRlXCIpO1xuXHRcdFx0XHRjb25zdCBwcm9qZWN0TGlzdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3QtYXNpZGVcIik7XG5cdFx0XHRcdGNvbnN0IGFsbFByb2plY3RzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1wcm9qZWN0cy1hc2lkZVwiKTtcblx0XHRcdFx0aWYgKCFwcm9qZWN0TGlzdEVsLmNsYXNzTGlzdC5jb250YWlucyhcImFzaWRlLXNlbGVjdGVkXCIpKSB7XG5cdFx0XHRcdFx0cHJvamVjdExpc3RFbC5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRcdFx0ZGFzaGJvYXJkRWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0XHRcdGFsbFByb2plY3RzRWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZ1bmN0aW9uIGFjY29yZGlvblRvZ2dsZSgpIHtcblx0XHRcdFx0XHRjb25zdCBwcm9qZWN0TGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHRcdFx0XHRcdFx0XCJwcm9qZWN0LWFjY29yZGlvbi1idG5cIlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0Y29uc3QgcHJvamVjdFBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXBhbmVsLWRpc3BsYXlcIik7XG5cdFx0XHRcdFx0cHJvamVjdExpc3RCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0XHRcdFx0XHRpZiAocHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuXHRcdFx0XHRcdFx0cHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGFjY29yZGlvblRvZ2dsZSgpO1xuXHRcdFx0XHRjb25zdCBwcm9qZWN0UGFuZWxMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXBhbmVsLWxpc3RcIik7XG5cdFx0XHRcdHByb2plY3RQYW5lbExpc3QuY2hpbGROb2Rlc1tkYXRhLmluZGV4XS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XHRcdFwicHJvamVjdC1saXN0LXNlbGVjdGVkXCJcblx0XHRcdFx0KTtcblx0XHRcdFx0cmVuZGVyUHJvamVjdFRhc2tzKGRhdGEuaW5kZXgpO1xuXHRcdFx0fSk7XG5cdFx0XHQvL0RFU0NSSVBUSU9OXG5cdFx0XHRjb25zdCB0YXNrRGVzYyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRlc2NyaXB0aW9uXCJdKTtcblx0XHRcdHRhc2tEZXNjLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcblx0XHRcdC8vRFVFIERBVEVcblx0XHRcdGNvbnN0IHRhc2tEYXRlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGF0ZVwiXSk7XG5cdFx0XHR0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblx0XHRcdC8vUFJJT1JJVFlcblx0XHRcdGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXByaW9yaXR5XCJdKTtcblx0XHRcdHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG5cdFx0XHQvL05PVEVTXG5cdFx0XHRjb25zdCB0YXNrTm90ZXMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1ub3Rlc1wiXSk7XG5cdFx0XHR0YXNrTm90ZXMudGV4dENvbnRlbnQgPSB0YXNrLm5vdGVzO1xuXHRcdFx0Ly9ERUxFVEUgSUNPTlxuXHRcdFx0Y29uc3QgdGFza0RlbGV0ZUljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgW1widGFzay1kZWxldGVcIl0sIHtcblx0XHRcdFx0c3JjOiBkZWxldGVJY29uLFxuXHRcdFx0XHRhbHQ6IFwidHJhc2ggY2FuIGRlbGV0ZSBpY29uXCIsXG5cdFx0XHR9KTtcblx0XHRcdHRhc2tEZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRhc2tEZWxldGVJY29uLnBhcmVudEVsZW1lbnQucmVtb3ZlKHRhc2tDYXJkKTtcblx0XHRcdFx0bGV0IGluZGV4ID1cblx0XHRcdFx0XHR0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pbmRleFwiKTtcblx0XHRcdFx0Y3VycmVudFRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdC8vIHNldEN1cnJlbnRUYXNrcyhjdXJyZW50VGFza3MpO1xuXHRcdFx0XHQvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrcykpO1xuXHRcdFx0XHRyZW5kZXJEYXNoYm9hcmQoKTtcblx0XHRcdH0pO1xuXHRcdFx0Ly9BUFBFTkQgRUxFTUVOVFNcblx0XHRcdHRhc2tDYXJkLmFwcGVuZChcblx0XHRcdFx0dGFza1RpdGxlLFxuXHRcdFx0XHRwcm9qZWN0VGl0bGUsXG5cdFx0XHRcdHRhc2tEZXNjLFxuXHRcdFx0XHR0YXNrRGF0ZSxcblx0XHRcdFx0dGFza1ByaW9yaXR5LFxuXHRcdFx0XHR0YXNrTm90ZXMsXG5cdFx0XHRcdHRhc2tEZWxldGVJY29uXG5cdFx0XHQpO1xuXHRcdFx0Ly8gdGFza0NhcmQuaW5zZXJ0QmVmb3JlKHByb2plY3RUaXRsZSwgdGFza0NhcmQuY2hpbGROb2Rlc1sxXSk7XG5cdFx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRhc2tDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IHJlbmRlckRhc2hib2FyZCB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcbmltcG9ydCB7IHJlbmRlclRhc2tGb3JtIH0gZnJvbSBcIi4uLy4uL2Zvcm1cIjtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRhc2tzKGluZGV4KSB7XG5cdC8vZ2V0IGFsbCB0YXNrcyBmcm9tIGFsbCBwcm9qZWN0c1xuXHRjb25zdCBjdXJyZW50UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXHRjb25zdCByZW5kZXJQcm9qZWN0ID0gY3VycmVudFByb2plY3RzW2luZGV4XTtcblx0Y29uc3QgY3VycmVudFRhc2tzID0gcmVuZGVyUHJvamVjdC50YXNrcyB8fCBbXTtcblx0Ly91cGRhdGUgbWFpbiBoZWFkZXJcblx0Y29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1oZWFkZXJcIik7XG5cdG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSByZW5kZXJQcm9qZWN0LnRpdGxlLnRvVXBwZXJDYXNlKCk7XG5cdC8vY2xlYXIgY3VycmVudCB0YXNrc1xuXHRjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnRcIik7XG5cdHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0Ly9iYWNrdXAgdGV4dCBpZiBubyB0YXNrc1xuXHRpZiAoY3VycmVudFRhc2tzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRhc2tDb250YWluZXIudGV4dENvbnRlbnQgPSBcIk5vIHRhc2tzIGNyZWF0ZWQgeWV0XCI7XG5cdFx0Y29uc3QgZW1wdHlEaXYgPSBkb21DcmVhdGUoXCJkaXZcIik7XG5cdFx0Y29uc3QgZW1wdHlUYXNrQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImVtcHR5LWJ0blwiXSwge1xuXHRcdFx0aWQ6IFwiZW1wdHktdGFzay1idG4tZGFzaFwiLFxuXHRcdH0pO1xuXHRcdGVtcHR5VGFza0J0bi50ZXh0Q29udGVudCA9IFwiQ1JFQVRFIFRBU0tcIjtcblx0XHRlbXB0eVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRhc2tGb3JtKTtcblx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZChlbXB0eURpdiwgZW1wdHlUYXNrQnRuKTtcblx0XHQvL2F1dG9wb3B1bGF0ZSB0YXNrIGZvcm1cblx0XHRjb25zdCBleGlzdGluZ1Byb2plY3RTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGFzay1hZGRcIik7XG5cdFx0Y29uc3QgY2hpbGRBcnJheSA9IGV4aXN0aW5nUHJvamVjdFNlbGVjdC5jaGlsZE5vZGVzO1xuXHRcdGV4aXN0aW5nUHJvamVjdFNlbGVjdC5jaGlsZE5vZGVzWzBdLmRlZmF1bHRTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgY2hpbGRBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgb3B0aW9uID0gY2hpbGRBcnJheVtpXTtcblx0XHRcdGlmIChyZW5kZXJQcm9qZWN0LnRpdGxlID09PSBvcHRpb24udmFsdWUpIHtcblx0XHRcdFx0ZXhpc3RpbmdQcm9qZWN0U2VsZWN0LmNoaWxkTm9kZXNbaV0uZGVmYXVsdFNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly9yZW5kZXIgY3VycmVudFRhc2tzIHRhc2tzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdGFzayA9IGN1cnJlbnRUYXNrc1tpXTtcblx0XHRjb25zdCB0YXNrQ2FyZCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWNhcmRcIl0sIHsgXCJkYXRhLWluZGV4XCI6IGkgfSk7XG5cdFx0Ly9pbm5lciB0YXNrIGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly9USVRMRVxuXHRcdGNvbnN0IHRhc2tUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXRpdGxlXCJdKTtcblx0XHR0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRcdC8vREVTQ1JJUFRJT05cblx0XHRjb25zdCB0YXNrRGVzYyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRlc2NyaXB0aW9uXCJdKTtcblx0XHR0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cdFx0Ly9EVUUgREFURVxuXHRcdGNvbnN0IHRhc2tEYXRlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGF0ZVwiXSk7XG5cdFx0dGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cdFx0Ly9QUklPUklUWVxuXHRcdGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXByaW9yaXR5XCJdKTtcblx0XHR0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXHRcdC8vTk9URVNcblx0XHRjb25zdCB0YXNrTm90ZXMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1ub3Rlc1wiXSk7XG5cdFx0dGFza05vdGVzLnRleHRDb250ZW50ID0gdGFzay5ub3Rlcztcblx0XHQvL0RFTEVURSBJQ09OXG5cdFx0Y29uc3QgdGFza0RlbGV0ZUljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgW1widGFzay1kZWxldGVcIl0sIHtcblx0XHRcdHNyYzogZGVsZXRlSWNvbixcblx0XHRcdGFsdDogXCJ0cmFzaCBjYW4gZGVsZXRlIGljb25cIixcblx0XHR9KTtcblx0XHR0YXNrRGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0dGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUodGFza0NhcmQpO1xuXHRcdFx0bGV0IGluZGV4ID0gdGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXHRcdFx0Y3VycmVudFRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHQvLyBzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG5cdFx0XHRyZW5kZXJQcm9qZWN0VGFza3MoaW5kZXgpO1xuXHRcdH0pO1xuXHRcdC8vQVBQRU5EIEVMRU1FTlRTXG5cdFx0dGFza0NhcmQuYXBwZW5kKFxuXHRcdFx0dGFza1RpdGxlLFxuXHRcdFx0dGFza0Rlc2MsXG5cdFx0XHR0YXNrRGF0ZSxcblx0XHRcdHRhc2tQcmlvcml0eSxcblx0XHRcdHRhc2tOb3Rlcyxcblx0XHRcdHRhc2tEZWxldGVJY29uXG5cdFx0KTtcblx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblx0fVxufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0VGFza3MgfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi8uLi9ET01cIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0VGFza3MgfSBmcm9tIFwiLi9wcm9qZWN0VGFza3NcIjtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHNBbGwoKSB7XG5cdC8vZ2V0IGFsbCBwcm9qZWN0c1xuXHRjb25zdCBjdXJyZW50UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXHRjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdHMpO1xuXHQvL2NsZWFyIGN1cnJlbnQgY29udGVudFxuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwibWFpbi1jb250ZW50XCIgfSk7XG5cdC8vIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0Ly9yZW5kZXIgY3VycmVudFByb2plY3RzIHByb2plY3RzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c1tpXTtcblx0XHRjb25zdCBwcm9qZWN0Q2FyZCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJwcm9qZWN0LWNhcmRcIl0sIHsgXCJkYXRhLWluZGV4XCI6IGkgfSk7XG5cdFx0Ly9pbm5lciBwcm9qZWN0IGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly9USVRMRVxuXHRcdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJwcm9qZWN0LXRpdGxlXCJdKTtcblx0XHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXHRcdC8vREVTQ1JJUFRJT05cblx0XHRjb25zdCBwcm9qZWN0RGVzYyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCJdKTtcblx0XHRwcm9qZWN0RGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XG5cdFx0Ly9UQVNLU1xuXHRcdGNvbnN0IHByb2plY3RUYXNrc0xpc3QgPSBkb21DcmVhdGUoXCJ1bFwiLCBbXCJwcm9qZWN0LXRhc2tzLWxpc3RcIl0pO1xuXHRcdGxldCB0YXNrQXJyYXkgPSBwcm9qZWN0LnRhc2tzO1xuXHRcdGlmICh0YXNrQXJyYXkubGVuZ3RoID09PSAwKVxuXHRcdFx0cHJvamVjdFRhc2tzTGlzdC50ZXh0Q29udGVudCA9IFwiMCB0YXNrcyBpbiB0aGlzIHByb2plY3RcIjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgdGFzayA9IHRhc2tBcnJheVtpXTtcblx0XHRcdGNvbnN0IGxpID0gZG9tQ3JlYXRlKFwibGlcIiwgW1wicHJvamVjdC10YXNrLWxpc3QtaXRlbVwiXSk7XG5cdFx0XHRsaS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdFx0XHRwcm9qZWN0VGFza3NMaXN0LmFwcGVuZENoaWxkKGxpKTtcblx0XHR9XG5cdFx0Y29uc3QgcHJvamVjdFRhc2tzID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInByb2plY3QtdGFza3NcIl0pO1xuXHRcdHByb2plY3RUYXNrcy5hcHBlbmRDaGlsZChwcm9qZWN0VGFza3NMaXN0KTtcblx0XHQvL0RFTEVURSBJQ09OXG5cdFx0Y29uc3QgcHJvamVjdERlbGV0ZUljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgW1wicHJvamVjdC1kZWxldGVcIl0sIHtcblx0XHRcdHNyYzogZGVsZXRlSWNvbixcblx0XHRcdGFsdDogXCJ0cmFzaCBjYW4gZGVsZXRlIGljb25cIixcblx0XHR9KTtcblx0XHRwcm9qZWN0RGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cHJvamVjdERlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUocHJvamVjdENhcmQpO1xuXHRcdFx0bGV0IGluZGV4ID0gcHJvamVjdERlbGV0ZUljb24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXHRcdFx0Y3VycmVudFByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHQvLyBzZXRDdXJyZW50UHJvamVjdHMoY3VycmVudFByb2plY3RzKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3RzKSk7XG5cdFx0XHRyZW5kZXJQcm9qZWN0c0FsbCgpO1xuXHRcdH0pO1xuXHRcdC8vQVBQRU5EIEVMRU1FTlRTXG5cdFx0cHJvamVjdENhcmQuYXBwZW5kKFxuXHRcdFx0cHJvamVjdFRpdGxlLFxuXHRcdFx0cHJvamVjdERlc2MsXG5cdFx0XHRwcm9qZWN0VGFza3MsXG5cdFx0XHRwcm9qZWN0RGVsZXRlSWNvblxuXHRcdCk7XG5cdFx0cHJvamVjdENhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGRhc2hib2FyZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXNoLWFzaWRlXCIpO1xuXHRcdFx0Y29uc3QgcHJvamVjdExpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0LWFzaWRlXCIpO1xuXHRcdFx0Y29uc3QgYWxsUHJvamVjdHNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLXByb2plY3RzLWFzaWRlXCIpO1xuXHRcdFx0aWYgKCFwcm9qZWN0TGlzdEVsLmNsYXNzTGlzdC5jb250YWlucyhcImFzaWRlLXNlbGVjdGVkXCIpKSB7XG5cdFx0XHRcdHByb2plY3RMaXN0RWwuY2xhc3NMaXN0LmFkZChcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0XHRkYXNoYm9hcmRFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRcdGFsbFByb2plY3RzRWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0fVxuXHRcdFx0ZnVuY3Rpb24gYWNjb3JkaW9uVG9nZ2xlKCkge1xuXHRcdFx0XHRjb25zdCBwcm9qZWN0TGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1hY2NvcmRpb24tYnRuXCIpO1xuXHRcdFx0XHRjb25zdCBwcm9qZWN0UGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtcGFuZWwtZGlzcGxheVwiKTtcblx0XHRcdFx0cHJvamVjdExpc3RCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0XHRcdFx0aWYgKHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcblx0XHRcdFx0XHRwcm9qZWN0UGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRhY2NvcmRpb25Ub2dnbGUoKTtcblx0XHRcdGNvbnN0IHByb2plY3RQYW5lbExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtcGFuZWwtbGlzdFwiKTtcblx0XHRcdHByb2plY3RQYW5lbExpc3QuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LXNlbGVjdGVkXCIpO1xuXHRcdFx0cmVuZGVyUHJvamVjdFRhc2tzKGkpO1xuXHRcdH0pO1xuXHRcdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuXHR9XG5cdHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0c0FsbCB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcblxuZnVuY3Rpb24gcmVuZGVyU2VhcmNoKHNlYXJjaCkge1xuXHRpZiAoc2VhcmNoID09PSBcIlwiKSByZXR1cm47XG5cdC8vZ2V0IGFsbCB0YXNrcyBmcm9tIGFsbCBwcm9qZWN0c1xuXHRjb25zdCBjdXJyZW50UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXHRjb25zdCBjdXJyZW50VGFza3MgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3RzW2ldO1xuXHRcdGN1cnJlbnRUYXNrcy5wdXNoKC4uLnByb2plY3QudGFza3MpO1xuXHR9XG5cdGNvbnN0IGZpbHRlclRhc2tzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdGFzayA9IGN1cnJlbnRUYXNrc1tpXTtcblx0XHRsZXQgbG93ZXJUaXRsZSA9IHRhc2sudGl0bGUudG9Mb3dlckNhc2UoKTtcblx0XHRsZXQgbG93ZXJTZWFyY2ggPSBzZWFyY2gudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAobG93ZXJUaXRsZS5pbmNsdWRlcyhsb3dlclNlYXJjaCkpIHtcblx0XHRcdGZpbHRlclRhc2tzLnB1c2godGFzayk7XG5cdFx0fVxuXHR9XG5cdC8vdXBkYXRlIG1haW4gaGVhZGVyXG5cdGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4taGVhZGVyXCIpO1xuXHRtYWluSGVhZGVyLnRleHRDb250ZW50ID0gXCJTRUFSQ0ggUkVTVUxUU1wiO1xuXHQvL2NsZWFyIGN1cnJlbnQgdGFza3Ncblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuXHR0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cdC8vbm8gc2VhcmNoIHJlc3VsdHMgYmFja3VwXG5cdGlmIChmaWx0ZXJUYXNrcy5sZW5ndGggPT09IDApIHtcblx0XHR0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJObyBzZWFyY2ggcmVzdWx0c1wiO1xuXHR9XG5cdC8vcmVuZGVyIGZpbHRlclRhc2tzIHRhc2tzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyVGFza3MubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCB0YXNrID0gZmlsdGVyVGFza3NbaV07XG5cdFx0Y29uc3QgdGFza0NhcmQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1jYXJkXCJdLCB7IFwiZGF0YS10YXNrLWluZGV4XCI6IGkgfSk7XG5cdFx0Ly9pbm5lciB0YXNrIGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly9USVRMRVxuXHRcdGNvbnN0IHRhc2tUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXRpdGxlXCJdKTtcblx0XHR0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRcdC8vREVTQ1JJUFRJT05cblx0XHRjb25zdCB0YXNrRGVzYyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRlc2NyaXB0aW9uXCJdKTtcblx0XHR0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cdFx0Ly9EVUUgREFURVxuXHRcdGNvbnN0IHRhc2tEYXRlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGF0ZVwiXSk7XG5cdFx0dGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cdFx0Ly9QUklPUklUWVxuXHRcdGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXByaW9yaXR5XCJdKTtcblx0XHR0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXHRcdC8vTk9URVNcblx0XHRjb25zdCB0YXNrTm90ZXMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1ub3Rlc1wiXSk7XG5cdFx0dGFza05vdGVzLnRleHRDb250ZW50ID0gdGFzay5ub3Rlcztcblx0XHQvL0RFTEVURSBJQ09OXG5cdFx0Y29uc3QgdGFza0RlbGV0ZUljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgW1widGFzay1kZWxldGVcIl0sIHtcblx0XHRcdHNyYzogZGVsZXRlSWNvbixcblx0XHRcdGFsdDogXCJ0cmFzaCBjYW4gZGVsZXRlIGljb25cIixcblx0XHR9KTtcblx0XHR0YXNrRGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0dGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUodGFza0NhcmQpO1xuXHRcdFx0bGV0IGluZGV4ID0gdGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staW5kZXhcIik7XG5cdFx0XHRmaWx0ZXJUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0Ly8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaWx0ZXJUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShmaWx0ZXJUYXNrcykpO1xuXHRcdFx0cmVuZGVyU2VhcmNoKHNlYXJjaCk7XG5cdFx0fSk7XG5cdFx0Ly9BUFBFTkQgRUxFTUVOVFNcblx0XHR0YXNrQ2FyZC5hcHBlbmQoXG5cdFx0XHR0YXNrVGl0bGUsXG5cdFx0XHR0YXNrRGVzYyxcblx0XHRcdHRhc2tEYXRlLFxuXHRcdFx0dGFza1ByaW9yaXR5LFxuXHRcdFx0dGFza05vdGVzLFxuXHRcdFx0dGFza0RlbGV0ZUljb25cblx0XHQpO1xuXHRcdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXHR9XG5cdC8vIHJldHVybiB0YXNrQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyByZW5kZXJTZWFyY2ggfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi9ET01cIjtcbmltcG9ydCB7IHJlbmRlckRhc2hib2FyZCB9IGZyb20gXCIuL3BhZ2VzL2Rhc2hib2FyZFwiO1xuaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCB7IHJlbmRlckFzaWRlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hc2lkZVwiO1xuaW1wb3J0IHsgcmVuZGVyQWRkVGFza0Zvcm0gfSBmcm9tIFwiLi9jb21wb25lbnRzL2FkZFRhc2tGb3JtXCI7XG5pbXBvcnQgeyByZW5kZXJBZGRQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2NvbXBvbmVudHMvYWRkUHJvamVjdEZvcm1cIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzQWxsIH0gZnJvbSBcIi4vcGFnZXMvcHJvamVjdHNBbGxcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnN0IGhlYWRlciA9IHJlbmRlckhlYWRlcigpO1xuY29uc3QgYXNpZGUgPSByZW5kZXJBc2lkZSgpO1xuY29uc3QgbWFpblNlY3Rpb24gPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJtYWluLXNlY3Rpb25cIiB9KTtcbmNvbnN0IG1haW5IZWFkZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJtYWluLWhlYWRlclwiIH0pO1xubWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG5jb25zdCBtYWluRGl2ID0gZG9tQ3JlYXRlKFwibWFpblwiLCBcIlwiLCB7IGlkOiBcIm1haW5cIiB9KTtcbm1haW5EaXYuYXBwZW5kKGFzaWRlLCBtYWluU2VjdGlvbik7XG5jb25zdCB0YXNrRm9ybSA9IHJlbmRlckFkZFRhc2tGb3JtKCk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IHJlbmRlckFkZFByb2plY3RGb3JtKCk7XG5jb250ZW50LmFwcGVuZChoZWFkZXIsIG1haW5EaXYsIHRhc2tGb3JtLCBwcm9qZWN0Rm9ybSk7XG5cbmZ1bmN0aW9uIHJlcGxhY2VIZWxwZXIobmV3U2liKSB7XG5cdGlmIChtYWluSGVhZGVyLm5leHRTaWJsaW5nKSB7XG5cdFx0Y29uc3QgbmV4dFNpYiA9IG1haW5IZWFkZXIubmV4dFNpYmxpbmc7XG5cdFx0bWFpblNlY3Rpb24ucmVwbGFjZUNoaWxkKG5ld1NpYiwgbmV4dFNpYik7XG5cdH0gZWxzZSB7XG5cdFx0bWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobmV3U2liKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW5kZXJEYXNoYm9hcmRQYWdlKCkge1xuXHRtYWluSGVhZGVyLnRleHRDb250ZW50ID0gXCJEQVNIQk9BUkRcIjtcblx0Y29uc3QgZGFzaGJvYXJkID0gcmVuZGVyRGFzaGJvYXJkKCk7XG5cdHJlcGxhY2VIZWxwZXIoZGFzaGJvYXJkKTtcbn1cbmZ1bmN0aW9uIHJlbmRlckFsbFByb2plY3RzUGFnZSgpIHtcblx0bWFpbkhlYWRlci50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFNcIjtcblx0Y29uc3QgYWxsUHJvamVjdHMgPSByZW5kZXJQcm9qZWN0c0FsbCgpO1xuXHRyZXBsYWNlSGVscGVyKGFsbFByb2plY3RzKTtcbn1cbi8vIGZ1bmN0aW9uIHJlbmRlclNlYXJjaFBhZ2UoKSB7XG4vLyBcdG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBcIlNFQVJDSCBSRVNVTFRTXCI7XG4vLyBcdC8vIGNvbnN0IGFsbFByb2plY3RzID0gcmVuZGVyUHJvamVjdHNBbGwoKTtcbi8vIFx0Ly8gcmVwbGFjZUhlbHBlcihhbGxQcm9qZWN0cyk7XG4vLyB9XG5cbmV4cG9ydCB7IHJlbmRlckRhc2hib2FyZFBhZ2UsIHJlbmRlckFsbFByb2plY3RzUGFnZSB9O1xuIiwiY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5jb25zdCBzYXZlZFRhc2tzID0gW107XG5sZXQgY3VycmVudFRhc2tzID0gc2F2ZWRUYXNrcztcbmxldCBjdXJyZW50UHJvamVjdHMgPSBzYXZlZFByb2plY3RzO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50VGFza3MobmV3VGFza3MpIHtcblx0Y3VycmVudFRhc2tzID0gbmV3VGFza3M7XG5cdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0cyhuZXdQcm9qZWN0cykge1xuXHRjdXJyZW50UHJvamVjdHMgPSBuZXdQcm9qZWN0cztcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdHMpKTtcbn1cblxuZXhwb3J0IHsgc2V0Q3VycmVudFRhc2tzLCBzZXRDdXJyZW50UHJvamVjdHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==