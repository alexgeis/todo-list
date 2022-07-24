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
	console.log({ currentProjects });

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
		taskContainer.textContent = "No projects";
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
		taskContainer.textContent = "No tasks";
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
		console.log({ data });
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
				const taskTitle =
					taskDeleteIcon.parentElement.childNodes[0].textContent;
				const projectTitle =
					taskDeleteIcon.parentElement.childNodes[1].textContent;
				for (let i = 0; i < currentProjects.length; i++) {
					const project = currentProjects[i];
					for (let j = 0; j < project.tasks.length; j++) {
						const task = project.tasks[j];
						if (projectTitle === project.title && taskTitle === task.title) {
							project.tasks.splice(j, 1);
						}
					}
				}
				localStorage.setItem("projects", JSON.stringify(currentProjects));
				//// superficial delete
				// let index =
				// 	taskDeleteIcon.parentElement.getAttribute("data-task-index");
				// currentTasks.splice(index, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxtQkFBbUIsK0NBQVM7QUFDNUI7QUFDQTtBQUNBLHVCQUF1QiwrQ0FBUztBQUNoQztBQUNBO0FBQ0Esb0JBQW9CLCtDQUFTO0FBQzdCO0FBQ0E7QUFDQSx5QkFBeUIsK0NBQVM7QUFDbEMsUUFBUSwwREFBVTtBQUNsQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFVztBQUNpQjtBQUNEO0FBQ0Y7QUFDWTtBQUNNO0FBQ1g7O0FBRXhEO0FBQ0EsZUFBZSxnRUFBWTtBQUMzQixjQUFjLDhEQUFXO0FBQ3pCLG9CQUFvQiwrQ0FBUyxjQUFjLG9CQUFvQjtBQUMvRCxtQkFBbUIsK0NBQVMsY0FBYyxtQkFBbUI7QUFDN0Q7QUFDQSxnQkFBZ0IsK0NBQVMsZUFBZSxZQUFZO0FBQ3BEO0FBQ0EsaUJBQWlCLDBFQUFpQjtBQUNsQyxvQkFBb0IsZ0ZBQW9CO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGlFQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFFQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGUuc2Nzcz82MmFmIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2RhdGEvcHJvamVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2RhdGEvc2VlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL2NvbXBvbmVudHMvYWRkUHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9jb21wb25lbnRzL2FkZFRhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvY29tcG9uZW50cy9hc2lkZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvcGFnZXMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvcGFnZXMvcHJvamVjdFRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvcGFnZXMvcHJvamVjdHNBbGwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9wYWdlcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9yZW5kZXJQYWdlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvc3RhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFwiLi9jc3Mvc3R5bGUuc2Nzc1wiO1xuLy8gaW1wb3J0IHsgcmVuZGVyU2l0ZSB9IGZyb20gXCIuL2pzL3JlbmRlci9yZW5kZXJQYWdlc1wiO1xuLy9URVNUIERBVEFcbi8vIGltcG9ydCB7IHRhc2tEYXRhIH0gZnJvbSBcIi4vanMvZGF0YS90YXNrRGF0YVwiO1xuLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCB0YXNrRGF0YSk7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0QXNpZGVMaXN0IH0gZnJvbSBcIi4vanMvcmVuZGVyL2NvbXBvbmVudHMvYXNpZGVcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRUYXNrcywgc2V0Q3VycmVudFByb2plY3RzIH0gZnJvbSBcIi4vanMvc3RhdGVcIjtcbmltcG9ydCB7XG5cdHJlbmRlckRhc2hib2FyZFBhZ2UsXG5cdHJlbmRlckFsbFByb2plY3RzUGFnZSxcbn0gZnJvbSBcIi4vanMvcmVuZGVyL3JlbmRlclBhZ2VzXCI7XG5cbi8vLy8gU1RBVEUgLy8vL1xuLy9ERUZBVUxUU1xuY29uc3QgREVGQVVMVF9USEVNRSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgXCJsaWdodFwiO1xuY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG4vLyBjb25zdCBzYXZlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcbi8vIGNvbnN0IGN1cnJlbnRseURvbmUgPSBzYXZlZFRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5jb21wbGV0ZSA9PT0gdHJ1ZSk7XG4vLyBjb25zdCBERUZBVUxUX1RBU0tTX0RPTkUgPSBjdXJyZW50bHlEb25lLmxlbmd0aDtcbi8vIGNvbnN0IERFRkFVTFRfVEFTS1NfVE9UQUwgPSBzYXZlZEJvb2tzLmxlbmd0aDtcblxuLy8gbGV0IGN1cnJlbnRUYXNrcyA9IHNhdmVkVGFza3M7XG5sZXQgY3VycmVudFByb2plY3RzID0gc2F2ZWRQcm9qZWN0cztcbmxldCBjdXJyZW50VGhlbWUgPSBERUZBVUxUX1RIRU1FO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXHRyZW5kZXJEYXNoYm9hcmRQYWdlKCk7XG5cdC8vIHNldEN1cnJlbnRUaGVtZShERUZBVUxUX1RIRU1FKTtcblx0Ly8gc2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdC8vIHNldEN1cnJlbnRQcm9qZWN0cyhjdXJyZW50UHJvamVjdHMpO1xufTtcbiIsIi8vIERPTSBDUkVBVEUgRlVOQ1RJT05cblxuLy9hcmcgMSA9IG5hbWUgb2YgSFRNTCBlbGVtZW50XG4vLyBhcmcgMiA9IGNsYXNzIG5hbWVzIHRvIGFkZFxuLy8gYXJnIDMgPSBvYmplY3QgLSBhdHRyaWJ1dGVzIHRvIGFkZCAtPiBhdHRyaWJ1dGUgOiB2YWx1ZVxuZnVuY3Rpb24gZG9tQ3JlYXRlKGFyZzEsIGFyZzIsIGFyZzMpIHtcblx0Ly8vLyBhcmcgMSA9IFwic3RyaW5nXCIgLSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmcxKTtcblx0Ly8vLyBhcmcgMiA9IFtcImFycmF5IG9mIHN0cmluZ3NcIl0gLSBjbGFzcyBuYW1lcyB0byBhZGRcblx0aWYgKEFycmF5LmlzQXJyYXkoYXJnMikgJiYgYXJnMi5sZW5ndGggPiAwKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmcyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBjbGFzc05hbWUgPSBhcmcyW2ldO1xuXHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0fVxuXHR9XG5cdC8vLy8gYXJnIDMgPSB7b2JqZWN0fSAtIGF0dHJpYnV0ZSBuYW1lIDogdmFsdWVcblx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgaW4gYXJnMykge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXJnM1thdHRyaWJ1dGVdKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IHsgZG9tQ3JlYXRlIH07XG4iLCIvL0RFTU9cblxuLy8gY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4vLyBjb25zdCB0YXNrRGVtbzEgPSBjcmVhdGVUYXNrKHtcbi8vIFx0dGl0bGU6IFwiV2FsayB0aGUgRG9nXCIsXG4vLyBcdGRlc2NyaXB0aW9uOiBcInRha2UgdGhlIGRvZ2dvIG9uIGEgbGlsIHN0cm9sbFwiLFxuLy8gXHRkdWVEYXRlOiBkYXRlLFxuLy8gXHRwcmlvcml0eTogMyxcbi8vIFx0bm90ZXM6IFwiYXZvaWQgOXRoIGFuZCBFbG0gLSBhZ2dyZXNzaXZlIGRvZ1wiLFxuLy8gfSk7XG4vLyBjb25zdCBwcm9qZWN0RGVtbzEgPSBjcmVhdGVQcm9qZWN0KHtcbi8vIFx0dGl0bGU6IFwiUGVyc29uYWxcIixcbi8vIFx0ZGVzY3JpcHRpb246IFwicGxlYXN1cmUsIG5vdCBidXNpbmVzc1wiLFxuLy8gfSk7XG4vLyBwcm9qZWN0RGVtbzEuYWRkVGFza3RvUHJvamVjdCh0YXNrRGVtbzEpO1xuXG5jb25zdCBjcmVhdGVUYXNrID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMgfSkgPT4gKHtcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHRkdWVEYXRlLFxuXHRwcmlvcml0eSxcblx0bm90ZXMsXG5cdHByaW50VGFzaygpIHtcblx0XHRyZXR1cm4gYCR7dGhpcy50aXRsZX06ICR7dGhpcy5kZXNjcmlwdGlvbn1gO1xuXHR9LFxufSk7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4gKHtcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHR0YXNrczogW10sXG5cdHByaW50UHJvamVjdCgpIHtcblx0XHRyZXR1cm4gYFByb2plY3QgJHt0aGlzLnRpdGxlfTogJHt0aGlzLmRlc2NyaXB0aW9ufWA7XG5cdH0sXG5cdHByaW50VGFza3MoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy50YXNrcyk7XG5cdH0sXG5cdGFkZFRhc2t0b1Byb2plY3QodGFzaykge1xuXHRcdHRoaXMudGFza3MucHVzaCh0YXNrKTtcblx0fSxcbn0pO1xuXG5leHBvcnQgeyBjcmVhdGVUYXNrLCBjcmVhdGVQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVUYXNrLCBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4uL2NyZWF0ZVwiO1xuXG5jb25zdCBwcm9qZWN0MXRhc2sxID0gY3JlYXRlVGFzayh7XG5cdHRpdGxlOiBcIk1vdyB0aGUgbGF3blwiLFxuXHRkZXNjcmlwdGlvbjpcblx0XHRcImdldCBvdXQgdGhlcmUgd2l0aCB0aGUgZGFuZyBtb3dlciBhbmQgbW93IHRoYXQgdGhlcmUgbGF3biB0aGVyZVwiLFxuXHRkdWVEYXRlOiBcIjIwMjItMDctMjlcIixcblx0cHJpb3JpdHk6IFwiMVwiLFxuXHRub3RlczogXCJSZXR1cm4gbW93ZXIgdG8gbmVpZ2hib3Igd2hlbiBmaW5pc2hlZFwiLFxufSk7XG5jb25zdCBwcm9qZWN0MSA9IGNyZWF0ZVByb2plY3Qoe1xuXHR0aXRsZTogXCJMYXdubW93ZXJcIixcblx0ZGVzY3JpcHRpb246IFwibGFuZHNjYXBpbmcgcHJvamVjdFwiLFxufSk7XG5wcm9qZWN0MS5hZGRUYXNrdG9Qcm9qZWN0KHByb2plY3QxdGFzazEpO1xuXG5jb25zdCBwcm9qZWN0MnRhc2sxID0gY3JlYXRlVGFzayh7XG5cdHRpdGxlOiBcIldhbGsgdGhlIGRvZ1wiLFxuXHRkZXNjcmlwdGlvbjogXCJsZWFzaCwgb3BlbiBkb29yLCB3YWxrIGFyb3VuZCwgY29tZSBiYWNrXCIsXG5cdGR1ZURhdGU6IFwiMjAyMi0wOC0xMlwiLFxuXHRwcmlvcml0eTogXCIyXCIsXG5cdG5vdGVzOiBcImF2b2lkIG90aGVyIGRvZ3MhXCIsXG59KTtcbmNvbnN0IHByb2plY3QydGFzazIgPSBjcmVhdGVUYXNrKHtcblx0dGl0bGU6IFwiQ29vayBkaW5uZXJcIixcblx0ZGVzY3JpcHRpb246IFwiY2hpY2tlbiB0aWtrYSBtYXNhbGEsIHcvIGphc21pbmUgcmljZSwgYW5kIHNhbW9zYXNcIixcblx0ZHVlRGF0ZTogXCIyMDIyLTA2LTEyXCIsXG5cdHByaW9yaXR5OiBcIjNcIixcblx0bm90ZXM6IFwibm8gcGVhbnV0cyFcIixcbn0pO1xuY29uc3QgcHJvamVjdDJ0YXNrMyA9IGNyZWF0ZVRhc2soe1xuXHR0aXRsZTogXCJSZWFkICdPY3RvYmVyJyBCb29rXCIsXG5cdGRlc2NyaXB0aW9uOiBcInJlYWQgYXQgbGVhc3QgNDAgcGFnZXMgdG9kYXlcIixcblx0ZHVlRGF0ZTogXCIyMDIyLTA4LTEyXCIsXG5cdHByaW9yaXR5OiBcIjVcIixcblx0bm90ZXM6IFwiXCIsXG59KTtcbmNvbnN0IHByb2plY3QyID0gY3JlYXRlUHJvamVjdCh7XG5cdHRpdGxlOiBcIkFub3RoZXIgUHJvamVjdFwiLFxuXHRkZXNjcmlwdGlvbjogXCJtaXNjZWxsYW5lb3VzIHRhc2tzXCIsXG59KTtcbnByb2plY3QyLmFkZFRhc2t0b1Byb2plY3QocHJvamVjdDJ0YXNrMSwgcHJvamVjdDJ0YXNrMiwgcHJvamVjdDJ0YXNrMyk7XG5cbmNvbnN0IHByb2plY3QzdGFzazEgPSBjcmVhdGVUYXNrKHtcblx0dGl0bGU6IFwiUmVhZCAnT2N0b2JlcicgQm9va1wiLFxuXHRkZXNjcmlwdGlvbjogXCJyZWFkIGF0IGxlYXN0IDQwIHBhZ2VzIHRvZGF5XCIsXG5cdGR1ZURhdGU6IFwiMjAyMi0wOC0xMlwiLFxuXHRwcmlvcml0eTogXCI1XCIsXG5cdG5vdGVzOiBcIlwiLFxufSk7XG5jb25zdCBwcm9qZWN0M3Rhc2syID0gY3JlYXRlVGFzayh7XG5cdHRpdGxlOiBcIkJ1eSByb3Nlc1wiLFxuXHRkZXNjcmlwdGlvbjogXCIyIGRvemVuIHJvc2VzIGZyb20gU2FmZXdheVwiLFxuXHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0cHJpb3JpdHk6IFwiNVwiLFxuXHRub3RlczogXCJyZWQgcm9zZXNcIixcbn0pO1xuY29uc3QgcHJvamVjdDMgPSBjcmVhdGVQcm9qZWN0KHtcblx0dGl0bGU6IFwiQSBUaGlyZCBQcm9qZWN0IGZvciB0aGUgTGlzdFwiLFxuXHRkZXNjcmlwdGlvbjpcblx0XHRcImxvbmdlciBkZXNjcmlwdGlvbiBmb3IgYSBtb3JlIGNvbXBsaWNhdGVkIHRhc2sgcHJvamVjdCBicmVha2Rvd25cIixcbn0pO1xucHJvamVjdDMuYWRkVGFza3RvUHJvamVjdChwcm9qZWN0M3Rhc2sxLCBwcm9qZWN0M3Rhc2syKTtcblxubGV0IHByb2plY3REYXRhID0gW107XG5wcm9qZWN0RGF0YS5wdXNoKHByb2plY3QxLCBwcm9qZWN0MiwgcHJvamVjdDMpO1xuXG5leHBvcnQgeyBwcm9qZWN0RGF0YSB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdERhdGEgfSBmcm9tIFwiLi9wcm9qZWN0RGF0YVwiO1xuXG5mdW5jdGlvbiBzZWVkUHJvamVjdERhdGEoKSB7XG5cdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3REYXRhKSk7XG59XG5leHBvcnQgeyBzZWVkUHJvamVjdERhdGEgfTtcbiIsImZ1bmN0aW9uIHJlbmRlclRhc2tGb3JtKCkge1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmFkZF90YXNrX3NlY3Rpb25cIilcblx0XHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBibG9jaztcIik7XG59XG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Rm9ybSgpIHtcblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5hZGRfcHJvamVjdF9zZWN0aW9uXCIpXG5cdFx0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogYmxvY2s7XCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tGb3JtKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtdGl0bGVcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGVzY1wiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kYXRlXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LW5vdGVzXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRhc2stYWRkXCIpLm9wdGlvbnMuc2VsZWN0ZWRJbmRleCA9IDA7XG59XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Rhc2tfc2VjdGlvblwiKVxuXHRcdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhclByb2plY3RGb3JtKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtdGl0bGVcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtZGVzY1wiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdEZvcm0oKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Byb2plY3Rfc2VjdGlvblwiKVxuXHRcdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xufVxuXG5leHBvcnQge1xuXHRyZW5kZXJUYXNrRm9ybSxcblx0cmVuZGVyUHJvamVjdEZvcm0sXG5cdGNsZWFyVGFza0Zvcm0sXG5cdGNsb3NlVGFza0Zvcm0sXG5cdGNsZWFyUHJvamVjdEZvcm0sXG5cdGNsb3NlUHJvamVjdEZvcm0sXG59O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuLi8uLi9jcmVhdGVcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRQcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9zdGF0ZVwiO1xuaW1wb3J0IHsgY2xlYXJQcm9qZWN0Rm9ybSwgY2xvc2VQcm9qZWN0Rm9ybSB9IGZyb20gXCIuLi8uLi9mb3JtXCI7XG5pbXBvcnQgeyByZW5kZXJBbGxQcm9qZWN0c1BhZ2UgfSBmcm9tIFwiLi4vcmVuZGVyUGFnZXNcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RUYXNrcyB9IGZyb20gXCIuLi9wYWdlcy9wcm9qZWN0VGFza3NcIjtcblxuY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RTdWJtaXQoKSB7XG5cdC8vdmFsaWRhdGlvblxuXHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwLXRpdGxlXCIpLnZhbHVlID09PSBcIlwiKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlLWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRyZXR1cm47XG5cdH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwLXRpdGxlXCIpLnZhbHVlICE9PSBcIlwiKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlLWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9XG5cblx0Ly9wcm9qZWN0IGZhY3Rvcnlcblx0Y29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3Qoe1xuXHRcdHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtdGl0bGVcIikudmFsdWUsXG5cdFx0ZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcC1kZXNjXCIpLnZhbHVlLFxuXHR9KTtcblx0c2F2ZWRQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXHQvLyBzZXRDdXJyZW50UHJvamVjdHMoc2F2ZWRQcm9qZWN0cyk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoc2F2ZWRQcm9qZWN0cykpO1xuXHRjbG9zZVByb2plY3RGb3JtKCk7XG5cdGxldCBuZXdJbmRleCA9IHNhdmVkUHJvamVjdHMubGVuZ3RoIC0gMTtcblx0cmVuZGVyUHJvamVjdFRhc2tzKG5ld0luZGV4KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWRkUHJvamVjdEZvcm0oKSB7XG5cdC8vZm9ybSBjb250ZW50XG5cdGNvbnN0IGZvcm1UaXRsZSA9IGRvbUNyZWF0ZShcImgyXCIsIFtcImZvcm1fdGl0bGVcIl0pO1xuXHRmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBuZXcgcHJvamVjdFwiO1xuXHRjb25zdCBmb3JtU3VidGl0bGUgPSBkb21DcmVhdGUoXCJoMlwiLCBbXCJmb3JtX3N1YnRpdGxlXCJdKTtcblx0Zm9ybVN1YnRpdGxlLnRleHRDb250ZW50ID0gXCIqIHJlcXVpcmVkXCI7XG5cdGNvbnN0IGNsb3NlQnRuID0gZG9tQ3JlYXRlKFwic3BhblwiLCBbXCJtYXRlcmlhbC1pY29uc1wiLCBcImNsb3NlLWZvcm1cIl0sIHtcblx0XHRpZDogXCJjbG9zZS1wcm9qZWN0LWZvcm1cIixcblx0fSk7XG5cdGNsb3NlQnRuLnRleHRDb250ZW50ID0gXCIgWCBcIjtcblx0Y2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUHJvamVjdEZvcm0pO1xuXHQvL3RpdGxlXG5cdGNvbnN0IHRpdGxlTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJwLXRpdGxlXCIgfSk7XG5cdHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlICpcIjtcblx0Y29uc3QgdGl0bGVJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtcImZvcm0tY29udHJvbFwiXSwge1xuXHRcdGlkOiBcInAtdGl0bGVcIixcblx0XHR0eXBlOiBcInRleHRcIixcblx0XHRuYW1lOiBcInAtdGl0bGVcIixcblx0XHRwbGFjZWhvbGRlcjogXCJUaXRsZVwiLFxuXHR9KTtcblx0Y29uc3QgdGl0bGVFcnJNc2cgPSBkb21DcmVhdGUoXCJzbWFsbFwiLCBbXCJlcnItbXNnXCJdLCB7XG5cdFx0aWQ6IFwicHJvamVjdC10aXRsZS1lcnItbXNnXCIsXG5cdH0pO1xuXHR0aXRsZUVyck1zZy50ZXh0Q29udGVudCA9IFwiICogVGl0bGUgaXMgcmVxdWlyZWRcIjtcblx0dGl0bGVJbnB1dC5hcHBlbmRDaGlsZCh0aXRsZUVyck1zZyk7XG5cdHRpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cdC8vZGVzY3JpcHRpb25cblx0Y29uc3QgZGVzY0xhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwicC1kZXNjXCIgfSk7XG5cdGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblx0Y29uc3QgZGVzY0lucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwicC1kZXNjXCIsXG5cdFx0dHlwZTogXCJ0ZXh0YXJlYVwiLFxuXHRcdG5hbWU6IFwicC1kZXNjXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiRGVzY3JpcHRpb25cIixcblx0fSk7XG5cdGRlc2NMYWJlbC5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXHQvL2FkZC9jbGVhciBidG5zXG5cdGNvbnN0IHByb2plY3RGb3JtQnRucyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJuZXctcHJvamVjdC1idXR0b25zXCJdKTtcblx0Y29uc3QgYWRkQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImJ0blwiXSwge1xuXHRcdGlkOiBcImFkZC1wcm9qZWN0LWJ0blwiLFxuXHR9KTtcblx0YWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblx0YWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0U3VibWl0KTtcblx0Y29uc3QgY2xlYXJCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW1wiYnRuXCJdLCB7XG5cdFx0aWQ6IFwicHJvamVjdC1jbGVhclwiLFxuXHR9KTtcblx0Y2xlYXJCdG4udGV4dENvbnRlbnQgPSBcIkNsZWFyIGZpZWxkc1wiO1xuXHRjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJQcm9qZWN0Rm9ybSk7XG5cdHByb2plY3RGb3JtQnRucy5hcHBlbmQoYWRkQnRuLCBjbGVhckJ0bik7XG5cdC8vZm9ybSBjb250YWluZXJcblx0Y29uc3QgZm9ybUNvbnRhaW5lciA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJmb3JtLWNvbnRhaW5lclwiXSwge1xuXHRcdGlkOiBcIm5ldy1wcm9qZWN0LWZvcm1cIixcblx0fSk7XG5cdGZvcm1Db250YWluZXIuYXBwZW5kKFxuXHRcdGZvcm1UaXRsZSxcblx0XHRmb3JtU3VidGl0bGUsXG5cdFx0Y2xvc2VCdG4sXG5cdFx0dGl0bGVMYWJlbCxcblx0XHRkZXNjTGFiZWwsXG5cdFx0cHJvamVjdEZvcm1CdG5zXG5cdCk7XG5cdC8vd3JhcHBlclxuXHRjb25zdCBhZGRQcm9qZWN0U2VjdGlvbiA9IGRvbUNyZWF0ZShcInNlY3Rpb25cIiwgW1wiYWRkX3Byb2plY3Rfc2VjdGlvblwiXSk7XG5cdGFkZFByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXHRyZXR1cm4gYWRkUHJvamVjdFNlY3Rpb247XG59XG5cbmV4cG9ydCB7IGFkZFByb2plY3RTdWJtaXQsIHJlbmRlckFkZFByb2plY3RGb3JtIH07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vLi4vRE9NXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4uLy4uL2NyZWF0ZVwiO1xuaW1wb3J0IHsgY2xvc2VUYXNrRm9ybSwgY2xlYXJUYXNrRm9ybSB9IGZyb20gXCIuLi8uLi9mb3JtXCI7XG5pbXBvcnQgeyByZW5kZXJEYXNoYm9hcmQgfSBmcm9tIFwiLi4vcGFnZXMvZGFzaGJvYXJkXCI7XG5cbmNvbnN0IHNhdmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXG5mdW5jdGlvbiBhZGRUYXNrU3VibWl0KCkge1xuXHQvL3ZhbGlkYXRpb25cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC10aXRsZVwiKS52YWx1ZSA9PT0gXCJcIikge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZS1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0cmV0dXJuO1xuXHR9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC10aXRsZVwiKS52YWx1ZSAhPT0gXCJcIikge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZS1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fVxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpLnZhbHVlID09PSBcIlwiKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRyZXR1cm47XG5cdH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpLnZhbHVlICE9PSBcIlwiKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9XG5cdGNvbnN0IHByb2plY3RBc3NvY2lhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10YXNrLWFkZFwiKTtcblx0aWYgKHByb2plY3RBc3NvY2lhdGlvbi52YWx1ZSA9PT0gXCJudWxsXCIpIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJvamVjdC1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0cmV0dXJuO1xuXHR9IGVsc2UgaWYgKHByb2plY3RBc3NvY2lhdGlvbi52YWx1ZSAhPT0gXCJcIikge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcm9qZWN0LWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9XG5cblx0Ly90YXNrIGZhY3Rvcnlcblx0Y29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2soe1xuXHRcdHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtdGl0bGVcIikudmFsdWUsXG5cdFx0ZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kZXNjXCIpLnZhbHVlLFxuXHRcdGR1ZURhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kYXRlXCIpLnZhbHVlLFxuXHRcdHByaW9yaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtcHJpb3JpdHlcIikudmFsdWUsXG5cdFx0bm90ZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1ub3Rlc1wiKS52YWx1ZSxcblx0fSk7XG5cdGZvciAoY29uc3QgcHJvamVjdCBpbiBzYXZlZFByb2plY3RzKSB7XG5cdFx0Y29uc3QgdGl0bGUgPSBzYXZlZFByb2plY3RzW3Byb2plY3RdLnRpdGxlO1xuXG5cdFx0Ly9jdXJyZW50bHkgbWF0Y2hpbmcgZHJvcGRvd24gcHJvamVjdCB0aXRsZXMgdG8gdGhlIHNhdmVkUHJvamVjdHMgcHJvamVjdCB0aXRsZXNcblx0XHQvL1RPRE8gLSBpbXBsZW1lbnQgYW4gSUQgc3lzdGVtIHNvIGR1cGxpY2F0ZSBuYW1lcyBjYW4gYmUgdXNlZFxuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGFzay1hZGRcIikudmFsdWUgPT09IHRpdGxlKSB7XG5cdFx0XHRzYXZlZFByb2plY3RzW3Byb2plY3RdLnRhc2tzLnB1c2gobmV3VGFzayk7XG5cdFx0XHRjb25zb2xlLmxvZyhzYXZlZFByb2plY3RzW3Byb2plY3RdLnRhc2tzKTtcblx0XHR9XG5cdH1cblx0Ly8gc2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoc2F2ZWRQcm9qZWN0cykpO1xuXHRyZW5kZXJEYXNoYm9hcmQoKTtcblx0Y2xvc2VUYXNrRm9ybSgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBZGRUYXNrRm9ybSgpIHtcblx0Ly9mb3JtIGNvbnRlbnRcblx0Y29uc3QgZm9ybVRpdGxlID0gZG9tQ3JlYXRlKFwiaDJcIiwgW1wiZm9ybV90aXRsZVwiXSk7XG5cdGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIG5ldyB0YXNrXCI7XG5cdGNvbnN0IGZvcm1TdWJ0aXRsZSA9IGRvbUNyZWF0ZShcImgyXCIsIFtcImZvcm1fc3VidGl0bGVcIl0pO1xuXHRmb3JtU3VidGl0bGUudGV4dENvbnRlbnQgPSBcIiogcmVxdWlyZWRcIjtcblx0Y29uc3QgY2xvc2VCdG4gPSBkb21DcmVhdGUoXCJzcGFuXCIsIFtcIm1hdGVyaWFsLWljb25zXCIsIFwiY2xvc2UtZm9ybVwiXSwge1xuXHRcdGlkOiBcImNsb3NlLXRhc2stZm9ybVwiLFxuXHR9KTtcblx0Y2xvc2VCdG4udGV4dENvbnRlbnQgPSBcIiBYIFwiO1xuXHRjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUYXNrRm9ybSk7XG5cdC8vdGl0bGVcblx0Y29uc3QgdGl0bGVMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHsgZm9yOiBcInQtdGl0bGVcIiB9KTtcblx0dGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGUgKlwiO1xuXHRjb25zdCB0aXRsZUlucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC10aXRsZVwiLFxuXHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdG5hbWU6IFwidGFzay10aXRsZVwiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIlRpdGxlXCIsXG5cdH0pO1xuXHRjb25zdCB0aXRsZUVyck1zZyA9IGRvbUNyZWF0ZShcInNtYWxsXCIsIFtcImVyci1tc2dcIl0sIHtcblx0XHRpZDogXCJ0YXNrLXRpdGxlLWVyci1tc2dcIixcblx0fSk7XG5cdHRpdGxlRXJyTXNnLnRleHRDb250ZW50ID0gXCIgKiBUYXNrIHRpdGxlIGlzIHJlcXVpcmVkXCI7XG5cdHRpdGxlTGFiZWwuYXBwZW5kKHRpdGxlSW5wdXQsIHRpdGxlRXJyTXNnKTtcblx0Ly9kZXNjcmlwdGlvblxuXHRjb25zdCBkZXNjTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJ0LWRlc2NcIiB9KTtcblx0ZGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXHRjb25zdCBkZXNjSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LWRlc2NcIixcblx0XHR0eXBlOiBcInRleHRhcmVhXCIsXG5cdFx0bmFtZTogXCJ0LWRlc2NcIixcblx0XHRwbGFjZWhvbGRlcjogXCJEZXNjcmlwdGlvblwiLFxuXHR9KTtcblx0ZGVzY0xhYmVsLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG5cdC8vZGF0ZVxuXHRjb25zdCBkYXRlTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJ0LWRhdGVcIiB9KTtcblx0ZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuXHRjb25zdCBkYXRlSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LWRhdGVcIixcblx0XHR0eXBlOiBcImRhdGVcIixcblx0XHRuYW1lOiBcInQtZGF0ZVwiLFxuXHR9KTtcblx0ZGF0ZUxhYmVsLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cdC8vcHJpb3JpdHlcblx0Y29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHsgZm9yOiBcInQtcHJpb3JpdHlcIiB9KTtcblx0cHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHkgKDUgaXMgaGlnaGVzdCkgKlwiO1xuXHRjb25zdCBwcmlvcml0eUlucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC1wcmlvcml0eVwiLFxuXHRcdHR5cGU6IFwibnVtYmVyXCIsXG5cdFx0bmFtZTogXCJ0LXByaW9yaXR5XCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiM1wiLFxuXHRcdG1pbjogXCIxXCIsXG5cdFx0bWF4OiBcIjVcIixcblx0fSk7XG5cdGNvbnN0IHByaW9yaXR5RXJyTXNnID0gZG9tQ3JlYXRlKFwic21hbGxcIiwgW1wiZXJyLW1zZ1wiXSwge1xuXHRcdGlkOiBcInRhc2stcHJpb3JpdHktZXJyLW1zZ1wiLFxuXHR9KTtcblx0cHJpb3JpdHlFcnJNc2cudGV4dENvbnRlbnQgPSBcIiAqIFByaW9yaXR5IGJldHdlZW4gMS01IGlzIHJlcXVpcmVkXCI7XG5cdHByaW9yaXR5TGFiZWwuYXBwZW5kKHByaW9yaXR5SW5wdXQsIHByaW9yaXR5RXJyTXNnKTtcblx0Ly9ub3Rlc1xuXHRjb25zdCBub3Rlc0xhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwidC1ub3Rlc1wiIH0pO1xuXHRub3Rlc0xhYmVsLnRleHRDb250ZW50ID0gXCJOb3Rlc1wiO1xuXHRjb25zdCBub3Rlc0lucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC1ub3Rlc1wiLFxuXHRcdHR5cGU6IFwidGV4dGFyZWFcIixcblx0XHRuYW1lOiBcInQtbm90ZXNcIixcblx0XHRwbGFjZWhvbGRlcjogXCJOb3Rlc1wiLFxuXHR9KTtcblx0bm90ZXNMYWJlbC5hcHBlbmRDaGlsZChub3Rlc0lucHV0KTtcblx0Ly9wcm9qZWN0IGxpc3Rcblx0Y29uc3QgcHJvamVjdExpc3RMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHtcblx0XHRmb3I6IFwicHJvamVjdC10YXNrLWFkZFwiLFxuXHR9KTtcblx0cHJvamVjdExpc3RMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIHRvIEV4aXN0aW5nIFByb2plY3RcIjtcblx0Y29uc3QgcHJvamVjdExpc3RTZWxlY3QgPSBkb21DcmVhdGUoXCJzZWxlY3RcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwicHJvamVjdC10YXNrLWFkZFwiLFxuXHRcdG5hbWU6IFwicHJvamVjdC10YXNrLWFkZFwiLFxuXHR9KTtcblx0Y29uc3QgcHJvamVjdExpc3RPcHRpb25ERUZBVUxUID0gZG9tQ3JlYXRlKFwib3B0aW9uXCIsIFwiXCIsIHtcblx0XHR2YWx1ZTogXCJudWxsXCIsXG5cdFx0ZGlzYWJsZWQ6IFwiXCIsXG5cdFx0c2VsZWN0ZWQ6IFwiXCIsXG5cdH0pO1xuXHRwcm9qZWN0TGlzdE9wdGlvbkRFRkFVTFQudGV4dENvbnRlbnQgPSBcIi0tU2VsZWN0IGV4aXN0aW5nIHByb2plY3QtLVwiO1xuXHRwcm9qZWN0TGlzdFNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdE9wdGlvbkRFRkFVTFQpO1xuXHQvLy8vICBnZXQgbmFtZXMgb2YgYWxsIHByb2plY3RzXG5cdGNvbnN0IHRvdGFsUHJvamVjdE5hbWVzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHByb2plY3QgPSBzYXZlZFByb2plY3RzW2ldO1xuXHRcdHRvdGFsUHJvamVjdE5hbWVzLnB1c2gocHJvamVjdC50aXRsZSk7XG5cdH1cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFByb2plY3ROYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IG5hbWUgPSB0b3RhbFByb2plY3ROYW1lc1tpXTtcblx0XHRjb25zdCBwcm9qZWN0TGlzdE9wdGlvbiA9IGRvbUNyZWF0ZShcIm9wdGlvblwiLCBcIlwiLCB7XG5cdFx0XHR2YWx1ZTogbmFtZSxcblx0XHR9KTtcblx0XHRwcm9qZWN0TGlzdE9wdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XG5cdFx0cHJvamVjdExpc3RTZWxlY3QuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RPcHRpb24pO1xuXHR9XG5cdGNvbnN0IHByb2plY3RMaXN0RXJyTXNnID0gZG9tQ3JlYXRlKFwic21hbGxcIiwgW1wiZXJyLW1zZ1wiXSwge1xuXHRcdGlkOiBcInRhc2stcHJvamVjdC1lcnItbXNnXCIsXG5cdH0pO1xuXHRwcm9qZWN0TGlzdEVyck1zZy50ZXh0Q29udGVudCA9IFwiICogUHJvamVjdCBhc3NvY2lhdGlvbiBpcyByZXF1aXJlZFwiO1xuXHRwcm9qZWN0TGlzdExhYmVsLmFwcGVuZChwcm9qZWN0TGlzdFNlbGVjdCwgcHJvamVjdExpc3RFcnJNc2cpO1xuXHQvL2FkZC9jbGVhciBidG5zXG5cdGNvbnN0IHRhc2tGb3JtQnRucyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJuZXctdGFzay1idXR0b25zXCJdKTtcblx0Y29uc3QgYWRkQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImJ0blwiXSwge1xuXHRcdGlkOiBcImFkZC10YXNrLWJ0blwiLFxuXHR9KTtcblx0YWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblx0YWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrU3VibWl0KTtcblx0Y29uc3QgY2xlYXJCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW1wiYnRuXCJdLCB7XG5cdFx0aWQ6IFwidGFzay1jbGVhclwiLFxuXHR9KTtcblx0Y2xlYXJCdG4udGV4dENvbnRlbnQgPSBcIkNsZWFyIGZpZWxkc1wiO1xuXHRjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJUYXNrRm9ybSk7XG5cdHRhc2tGb3JtQnRucy5hcHBlbmQoYWRkQnRuLCBjbGVhckJ0bik7XG5cdC8vZm9ybSBjb250YWluZXJcblx0Y29uc3QgZm9ybUNvbnRhaW5lciA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJmb3JtLWNvbnRhaW5lclwiXSwge1xuXHRcdGlkOiBcIm5ldy1wcm9qZWN0LWZvcm1cIixcblx0fSk7XG5cdGZvcm1Db250YWluZXIuYXBwZW5kKFxuXHRcdGZvcm1UaXRsZSxcblx0XHRmb3JtU3VidGl0bGUsXG5cdFx0Y2xvc2VCdG4sXG5cdFx0dGl0bGVMYWJlbCxcblx0XHRkZXNjTGFiZWwsXG5cdFx0ZGF0ZUxhYmVsLFxuXHRcdHByaW9yaXR5TGFiZWwsXG5cdFx0bm90ZXNMYWJlbCxcblx0XHRwcm9qZWN0TGlzdExhYmVsLFxuXHRcdHRhc2tGb3JtQnRuc1xuXHQpO1xuXHQvL3dyYXBwZXJcblx0Y29uc3QgYWRkVGFza1NlY3Rpb24gPSBkb21DcmVhdGUoXCJzZWN0aW9uXCIsIFtcImFkZF90YXNrX3NlY3Rpb25cIl0pO1xuXHRhZGRUYXNrU2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblx0cmV0dXJuIGFkZFRhc2tTZWN0aW9uO1xufVxuXG5leHBvcnQgeyBhZGRUYXNrU3VibWl0LCByZW5kZXJBZGRUYXNrRm9ybSB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFRhc2tzIH0gZnJvbSBcIi4uL3BhZ2VzL3Byb2plY3RUYXNrc1wiO1xuaW1wb3J0IHsgcmVuZGVyRGFzaGJvYXJkUGFnZSwgcmVuZGVyQWxsUHJvamVjdHNQYWdlIH0gZnJvbSBcIi4uL3JlbmRlclBhZ2VzXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RBc2lkZUxpc3QoKSB7XG5cdGNvbnN0IHNhdmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXHRjb25zdCBwcm9qZWN0TGlzdCA9IGRvbUNyZWF0ZShcInVsXCIsIFwiXCIsIHsgaWQ6IFwicHJvamVjdC1wYW5lbC1saXN0XCIgfSk7XG5cblx0aWYgKHNhdmVkUHJvamVjdHMubGVuZ3RoID09PSAwKSByZXR1cm4gcHJvamVjdExpc3Q7XG5cdGNvbnN0IHRvdGFsUHJvamVjdE5hbWVzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHByb2plY3QgPSBzYXZlZFByb2plY3RzW2ldO1xuXHRcdHRvdGFsUHJvamVjdE5hbWVzLnB1c2gocHJvamVjdC50aXRsZSk7XG5cdH1cblx0Ly8vL2RvbSBsb2dpY1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsUHJvamVjdE5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRvdGFsUHJvamVjdE5hbWVzW2ldO1xuXHRcdGNvbnN0IGxpRWwgPSBkb21DcmVhdGUoXCJsaVwiLCBbXCJwcm9qZWN0LWxpc3QtaXRlbVwiXSwge1xuXHRcdFx0XCJkYXRhLXByb2plY3QtaW5kZXhcIjogaSxcblx0XHR9KTtcblx0XHRsaUVsLnRleHRDb250ZW50ID0gbmFtZTtcblx0XHRsaUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBkYXNoYm9hcmRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFzaC1hc2lkZVwiKTtcblx0XHRcdGNvbnN0IHByb2plY3RMaXN0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdC1hc2lkZVwiKTtcblx0XHRcdGNvbnN0IGFsbFByb2plY3RzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1wcm9qZWN0cy1hc2lkZVwiKTtcblx0XHRcdGNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1saXN0LWl0ZW1cIik7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RJdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBpdGVtID0gcHJvamVjdEl0ZW1zW2ldO1xuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0LWxpc3Qtc2VsZWN0ZWRcIik7XG5cdFx0XHR9XG5cdFx0XHRsaUVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3Qtc2VsZWN0ZWRcIik7XG5cblx0XHRcdGlmICghcHJvamVjdExpc3RFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhc2lkZS1zZWxlY3RlZFwiKSkge1xuXHRcdFx0XHRwcm9qZWN0TGlzdEVsLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdFx0ZGFzaGJvYXJkRWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0XHRhbGxQcm9qZWN0c0VsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdH1cblx0XHRcdGxldCBpbmRleCA9IGxpRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIpO1xuXHRcdFx0cmVuZGVyUHJvamVjdFRhc2tzKGluZGV4KTtcblx0XHR9KTtcblx0XHRwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaUVsKTtcblx0fVxuXHRyZXR1cm4gcHJvamVjdExpc3Q7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFzaWRlKCkge1xuXHQvL0RBU0hCT0FSRFxuXHRjb25zdCBkYXNoYm9hcmRFbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJhc2lkZS1pdGVtXCIsIFwiYXNpZGUtc2VsZWN0ZWRcIl0sIHtcblx0XHRpZDogXCJkYXNoLWFzaWRlXCIsXG5cdH0pO1xuXHRkYXNoYm9hcmRFbC50ZXh0Q29udGVudCA9IFwiREFTSEJPQVJEXCI7XG5cblx0Ly9BTEwgUFJPSkVDVFNcblx0Y29uc3QgYWxsUHJvamVjdHNFbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJhc2lkZS1pdGVtXCJdLCB7XG5cdFx0aWQ6IFwiYWxsLXByb2plY3RzLWFzaWRlXCIsXG5cdH0pO1xuXHRhbGxQcm9qZWN0c0VsLnRleHRDb250ZW50ID0gXCJBTEwgUFJPSkVDVFNcIjtcblx0Ly9QUk9KRUNUIExJU1Rcblx0Y29uc3QgcHJvamVjdExpc3RCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgXCJcIiwge1xuXHRcdGlkOiBcInByb2plY3QtYWNjb3JkaW9uLWJ0blwiLFxuXHR9KTtcblx0cHJvamVjdExpc3RCdG4udGV4dENvbnRlbnQgPSBcIlBST0pFQ1RTXCI7XG5cblx0Y29uc3QgcHJvamVjdFBhbmVsID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwicHJvamVjdC1wYW5lbC1kaXNwbGF5XCIgfSk7XG5cdGNvbnN0IHByb2plY3RMaXN0VUwgPSByZW5kZXJQcm9qZWN0QXNpZGVMaXN0KCk7XG5cdHByb2plY3RQYW5lbC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdFVMKTtcblx0Y29uc3QgcHJvamVjdExpc3RFbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJhc2lkZS1pdGVtXCJdLCB7XG5cdFx0aWQ6IFwicHJvamVjdC1saXN0LWFzaWRlXCIsXG5cdH0pO1xuXHRmdW5jdGlvbiBhY2NvcmRpb25Ub2dnbGUoKSB7XG5cdFx0cHJvamVjdExpc3RCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0XHRpZiAocHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuXHRcdFx0cHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0fVxuXHR9XG5cdHByb2plY3RMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2NvcmRpb25Ub2dnbGUpO1xuXHRwcm9qZWN0TGlzdEVsLmFwcGVuZChwcm9qZWN0TGlzdEJ0biwgcHJvamVjdFBhbmVsKTtcblx0Ly9zZWxlY3QgdG9nZ2xlIGV2ZW50IGxpc3RlbmVyc1xuXHRkYXNoYm9hcmRFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGlmICghZGFzaGJvYXJkRWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXNpZGUtc2VsZWN0ZWRcIikpIHtcblx0XHRcdGRhc2hib2FyZEVsLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdGFsbFByb2plY3RzRWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0cHJvamVjdExpc3RFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0fVxuXHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0cmVuZGVyRGFzaGJvYXJkUGFnZSgpO1xuXHR9KTtcblx0YWxsUHJvamVjdHNFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGlmICghYWxsUHJvamVjdHNFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhc2lkZS1zZWxlY3RlZFwiKSkge1xuXHRcdFx0YWxsUHJvamVjdHNFbC5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRkYXNoYm9hcmRFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRwcm9qZWN0TGlzdEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHR9XG5cdFx0cHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRyZW5kZXJBbGxQcm9qZWN0c1BhZ2UoKTtcblx0fSk7XG5cdC8vRlVMTCBBU0lERSBBUFBFTkRcblx0Y29uc3QgYXNpZGVFbCA9IGRvbUNyZWF0ZShcImFzaWRlXCIsIFwiXCIsIHsgaWQ6IFwibWFpbi1hc2lkZVwiIH0pO1xuXHRhc2lkZUVsLmFwcGVuZChkYXNoYm9hcmRFbCwgYWxsUHJvamVjdHNFbCwgcHJvamVjdExpc3RFbCk7XG5cdC8vYXBwbHkgb3RoZXIgc3R5bGluZyAvIGVsZW1lbnRzIC8gY2xpY2sgZXZlbnRzXG5cdHJlbmRlclByb2plY3RBc2lkZUxpc3QoKTtcblx0cmV0dXJuIGFzaWRlRWw7XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RBc2lkZUxpc3QsIHJlbmRlckFzaWRlIH07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vLi4vRE9NXCI7XG5pbXBvcnQgY2hlY2tMb2dvIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvY2hlY2tib3gtbWFya2VkLWNpcmNsZS5wbmdcIjtcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvcGx1cy1jaXJjbGUtb3V0bGluZS5wbmdcIjtcbmltcG9ydCBhZGRUYXNrSWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2NoZWNrYm94LW1hcmtlZC1jaXJjbGUtcGx1cy1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IGFkZFByb2plY3RJY29uIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvbGlzdC1ncm91cC1wbHVzLnBuZ1wiO1xuaW1wb3J0IGdlYXJJY29uIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvY29nLW91dGxpbmUucG5nXCI7XG5pbXBvcnQgeyBzZWVkUHJvamVjdERhdGEgfSBmcm9tIFwiLi4vLi4vZGF0YS9zZWVkXCI7XG5pbXBvcnQgeyByZW5kZXJUYXNrRm9ybSwgcmVuZGVyUHJvamVjdEZvcm0gfSBmcm9tIFwiLi4vLi4vZm9ybVwiO1xuaW1wb3J0IHsgcmVuZGVyRGFzaGJvYXJkUGFnZSB9IGZyb20gXCIuLi9yZW5kZXJQYWdlc1wiO1xuaW1wb3J0IHsgcmVuZGVyU2VhcmNoIH0gZnJvbSBcIi4uL3BhZ2VzL3NlYXJjaFwiO1xuXG5mdW5jdGlvbiByZW5kZXJBZGRNZW51KCkge1xuXHRjb25zdCBhZGRJY29uTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWljb24tbWVudVwiKTtcblx0YWRkSWNvbk1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImljb24tbWVudS10b2dnbGVcIik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcblx0Ly8vL2hlYWRlciBMRUZUXG5cdGZ1bmN0aW9uIGNyZWF0ZUhlYWRlckxlZnQoKSB7XG5cdFx0Y29uc3Qgc2l0ZUxvZ28gPSBkb21DcmVhdGUoXCJpbWdcIiwgW1wiZmFrZS1jbGFzc1wiXSwge1xuXHRcdFx0c3JjOiBjaGVja0xvZ28sXG5cdFx0XHRhbHQ6IFwiY2hlY2tlZCBjaXJjbGUgbG9nb1wiLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHNpdGVUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcImhlYWRlci1zaXRlLXRpdGxlXCIgfSk7XG5cdFx0c2l0ZVRpdGxlLnRleHRDb250ZW50ID0gXCJUT0RPIExJU1RcIjtcblx0XHQvL2FkZCBpY29uIG1lbnVcblx0XHRjb25zdCBhZGRCdG5JY29uID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFwiXCIsIHtcblx0XHRcdGlkOiBcImFkZC1pY29uXCIsXG5cdFx0XHRzcmM6IGFkZEljb24sXG5cdFx0XHRhbHQ6IFwiYWRkIGJ1dHRvbiBwbHVzIGljb25cIixcblx0XHR9KTtcblx0XHRhZGRCdG5JY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJBZGRNZW51KTtcblx0XHRjb25zdCBhZGRJY29uTWVudSA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcImFkZC1pY29uLW1lbnVcIiB9KTtcblx0XHRjb25zdCBhZGRUYXNrSW1nID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFwiXCIsIHtcblx0XHRcdGlkOiBcImFkZC10YXNrLWZvcm1cIixcblx0XHRcdHNyYzogYWRkVGFza0ljb24sXG5cdFx0XHRhbHQ6IFwiYWRkIHRhc2sgcGx1cyBpY29uXCIsXG5cdFx0fSk7XG5cblx0XHRhZGRUYXNrSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJUYXNrRm9ybSk7XG5cdFx0Y29uc3QgYWRkUHJvamVjdEltZyA9IGRvbUNyZWF0ZShcImltZ1wiLCBcIlwiLCB7XG5cdFx0XHRpZDogXCJhZGQtcHJvamVjdC1mb3JtXCIsXG5cdFx0XHRzcmM6IGFkZFByb2plY3RJY29uLFxuXHRcdFx0YWx0OiBcImFkZCBwcm9qZWN0IHBsdXMgaWNvblwiLFxuXHRcdH0pO1xuXHRcdGFkZFByb2plY3RJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclByb2plY3RGb3JtKTtcblx0XHRhZGRJY29uTWVudS5hcHBlbmQoYWRkVGFza0ltZywgYWRkUHJvamVjdEltZyk7XG5cdFx0Y29uc3QgYWRkQnRuRWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJhZGRCdG5cIiB9KTtcblx0XHRhZGRCdG5FbC5hcHBlbmQoYWRkQnRuSWNvbiwgYWRkSWNvbk1lbnUpO1xuXHRcdGNvbnN0IGhlYWRlckxlZnQgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJoZWFkZXJMZWZ0XCIgfSk7XG5cdFx0aGVhZGVyTGVmdC5hcHBlbmQoc2l0ZUxvZ28sIHNpdGVUaXRsZSwgYWRkQnRuRWwpO1xuXHRcdHJldHVybiBoZWFkZXJMZWZ0O1xuXHR9XG5cdC8vLy9oZWFkZXIgQ0VOVEVSXG5cdGZ1bmN0aW9uIGNyZWF0ZUhlYWRlckNlbnRlcigpIHtcblx0XHRjb25zdCBzZWFyY2hMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHsgZm9yOiBcInNpdGUtc2VhcmNoXCIgfSk7XG5cdFx0c2VhcmNoTGFiZWwudGV4dENvbnRlbnQgPSBcIlNlYXJjaDogXCI7XG5cdFx0Y29uc3Qgc2VhcmNoSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBcIlwiLCB7XG5cdFx0XHRpZDogXCJzaXRlLXNlYXJjaFwiLFxuXHRcdFx0dHlwZTogXCJzZWFyY2hcIixcblx0XHRcdG5hbWU6IFwicVwiLFxuXHRcdFx0cGxhY2Vob2xkZXI6IFwiIHR5cGUgaGVyZS4uLlwiLFxuXHRcdH0pO1xuXHRcdHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuXHRcdFx0bGV0IGN1cnJlbnRWYWwgPSBlLnRhcmdldC52YWx1ZTsgLy8gXCJtb3dcIlxuXHRcdFx0cmVuZGVyU2VhcmNoKGN1cnJlbnRWYWwpO1xuXHRcdFx0aWYgKGN1cnJlbnRWYWwgPT09IFwiXCIpIHJlbmRlckRhc2hib2FyZFBhZ2UoKTtcblx0XHR9KTtcblx0XHQvLyBjb25zdCBzZWFyY2hCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgXCJcIik7XG5cdFx0Ly8gc2VhcmNoQnRuLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIjtcblxuXHRcdGNvbnN0IGhlYWRlckNlbnRlciA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcImhlYWRlckNlbnRlclwiIH0pO1xuXHRcdGhlYWRlckNlbnRlci5hcHBlbmQoc2VhcmNoTGFiZWwsIHNlYXJjaElucHV0KTtcblx0XHRyZXR1cm4gaGVhZGVyQ2VudGVyO1xuXHR9XG5cdC8vLy9oZWFkZXIgUklHSFRcblx0ZnVuY3Rpb24gY3JlYXRlSGVhZGVyUmlnaHQoKSB7XG5cdFx0Ly9zZWVkIGRhdGFcblx0XHRjb25zdCBzZWVkRGF0YUJ0biA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJuYXYtaXRlbVwiXSwge1xuXHRcdFx0aWQ6IFwic2VlZC1wcm9qZWN0cy1idG5cIixcblx0XHR9KTtcblx0XHRzZWVkRGF0YUJ0bi50ZXh0Q29udGVudCA9IFwiU0VFRCBEQVRBXCI7XG5cdFx0c2VlZERhdGFCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlZWRQcm9qZWN0RGF0YSk7XG5cdFx0Ly9sb2dpblxuXHRcdGNvbnN0IGxvZ2luRWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wibmF2LWl0ZW1cIl0sIHsgaWQ6IFwibG9naW5cIiB9KTtcblx0XHRsb2dpbkVsLnRleHRDb250ZW50ID0gXCJMT0dJTlwiO1xuXHRcdC8vc2V0dGluZ3Ncblx0XHRjb25zdCBzZXR0aW5nc0ljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgXCJcIiwge1xuXHRcdFx0aWQ6IFwic2V0dGluZ3MgZ2VhciBpY29uXCIsXG5cdFx0XHRzcmM6IGdlYXJJY29uLFxuXHRcdFx0YWx0OiBcInNldHRpbmdzIGdlYXIgb3V0bGluZVwiLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHNldHRpbmdzTGluayA9IGRvbUNyZWF0ZShcImFcIiwgXCJcIiwge1xuXHRcdFx0aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vYWxleGdlaXMvdG9kby1saXN0XCIsXG5cdFx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXG5cdFx0fSk7XG5cdFx0c2V0dGluZ3NMaW5rLmFwcGVuZENoaWxkKHNldHRpbmdzSWNvbik7XG5cdFx0Y29uc3Qgc2V0dGluZ3NFbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJuYXYtaXRlbVwiXSwgeyBpZDogXCJzZXR0aW5nc1wiIH0pO1xuXHRcdHNldHRpbmdzRWwuYXBwZW5kQ2hpbGQoc2V0dGluZ3NMaW5rKTtcblxuXHRcdGNvbnN0IG5hdk1lbnVMSTEgPSBkb21DcmVhdGUoXCJsaVwiLCBbXCJuYXYtaXRlbVwiXSk7XG5cdFx0bmF2TWVudUxJMS5hcHBlbmRDaGlsZChzZWVkRGF0YUJ0bik7XG5cdFx0Y29uc3QgbmF2TWVudUxJMiA9IGRvbUNyZWF0ZShcImxpXCIsIFtcIm5hdi1pdGVtXCJdKTtcblx0XHRuYXZNZW51TEkyLmFwcGVuZENoaWxkKGxvZ2luRWwpO1xuXHRcdGNvbnN0IG5hdk1lbnVMSTMgPSBkb21DcmVhdGUoXCJsaVwiLCBbXCJuYXYtaXRlbVwiXSk7XG5cdFx0bmF2TWVudUxJMy5hcHBlbmRDaGlsZChzZXR0aW5nc0VsKTtcblx0XHRjb25zdCBuYXZNZW51VUwgPSBkb21DcmVhdGUoXCJ1bFwiLCBbXCJuYXYtbWVudVwiXSk7XG5cdFx0bmF2TWVudVVMLmFwcGVuZChuYXZNZW51TEkxLCBuYXZNZW51TEkyLCBuYXZNZW51TEkzKTtcblxuXHRcdC8vIC8vaGFtYnVyZ2VyIG1lbnVcblx0XHQvLyBjb25zdCBiYXIxID0gZG9tQ3JlYXRlKFwic3BhblwiLCBbXCJiYXJcIl0pO1xuXHRcdC8vIGNvbnN0IGJhcjIgPSBkb21DcmVhdGUoXCJzcGFuXCIsIFtcImJhclwiXSk7XG5cdFx0Ly8gY29uc3QgYmFyMyA9IGRvbUNyZWF0ZShcInNwYW5cIiwgW1wiYmFyXCJdKTtcblx0XHQvLyBjb25zdCBoYW1idXJnZXJEaXYgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiaGFtYnVyZ2VyXCJdKTtcblx0XHQvLyBoYW1idXJnZXJEaXYuYXBwZW5kKGJhcjEsIGJhcjIsIGJhcjMpO1xuXHRcdC8vIGhhbWJ1cmdlckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdC8vIFx0aGFtYnVyZ2VyRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cdFx0Ly8gXHRuYXZNZW51VUwuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0XHQvLyB9KTtcblx0XHQvL2hlYWRlclJpZ2h0IGFwcGVuZFxuXHRcdGNvbnN0IGhlYWRlclJpZ2h0ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwiaGVhZGVyUmlnaHRcIiB9KTtcblx0XHRoZWFkZXJSaWdodC5hcHBlbmRDaGlsZChuYXZNZW51VUwpO1xuXHRcdHJldHVybiBoZWFkZXJSaWdodDtcblx0fVxuXHQvL2hhbWJ1cmdlciBtZW51XG5cdGNvbnN0IGJhcjEgPSBkb21DcmVhdGUoXCJzcGFuXCIsIFtcImJhclwiXSk7XG5cdGNvbnN0IGJhcjIgPSBkb21DcmVhdGUoXCJzcGFuXCIsIFtcImJhclwiXSk7XG5cdGNvbnN0IGJhcjMgPSBkb21DcmVhdGUoXCJzcGFuXCIsIFtcImJhclwiXSk7XG5cdGNvbnN0IGhhbWJ1cmdlckRpdiA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJoYW1idXJnZXJcIl0pO1xuXHRoYW1idXJnZXJEaXYuYXBwZW5kKGJhcjEsIGJhcjIsIGJhcjMpO1xuXHRoYW1idXJnZXJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRoYW1idXJnZXJEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0XHRuYXZNZW51VUwuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0fSk7XG5cdC8vRlVMTCBIRUFERVIgQVBQRU5EXG5cdGNvbnN0IGhlYWRlciA9IGRvbUNyZWF0ZShcImhlYWRlclwiLCBcIlwiLCB7IGlkOiBcImhlYWRlclwiIH0pO1xuXHRoZWFkZXIuYXBwZW5kKFxuXHRcdGNyZWF0ZUhlYWRlckxlZnQoKSxcblx0XHRjcmVhdGVIZWFkZXJDZW50ZXIoKSxcblx0XHRjcmVhdGVIZWFkZXJSaWdodCgpLFxuXHRcdGhhbWJ1cmdlckRpdlxuXHQpO1xuXHRyZXR1cm4gaGVhZGVyO1xuXHQvLyAvL0NPTlRFTlQgQVBQRU5EXG5cdC8vIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cdC8vIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVySGVhZGVyIH07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vLi4vRE9NXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL3RyYXNoLWNhbi1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFRhc2tzIH0gZnJvbSBcIi4uL3BhZ2VzL3Byb2plY3RUYXNrc1wiO1xuaW1wb3J0IHsgcmVuZGVyVGFza0Zvcm0sIHJlbmRlclByb2plY3RGb3JtIH0gZnJvbSBcIi4uLy4uL2Zvcm1cIjtcblxuZnVuY3Rpb24gcmVuZGVyRGFzaGJvYXJkKCkge1xuXHQvL2dldCBhbGwgdGFza3MgZnJvbSBhbGwgcHJvamVjdHNcblx0Y29uc3QgY3VycmVudFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcblx0Y29uc29sZS5sb2coeyBjdXJyZW50UHJvamVjdHMgfSk7XG5cblx0Y29uc3QgcHJvamVjdFRhc2tEYXRhID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c1tpXTtcblx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0cHJvamVjdFRpdGxlOiBwcm9qZWN0LnRpdGxlLFxuXHRcdFx0dGFza3M6IHByb2plY3QudGFza3MsXG5cdFx0XHRpbmRleDogaSxcblx0XHR9O1xuXHRcdHByb2plY3RUYXNrRGF0YS5wdXNoKGRhdGEpO1xuXHR9XG5cdC8vIGNvbnNvbGUudGFibGUocHJvamVjdFRhc2tEYXRhKTtcblx0Ly9jbGVhciBjdXJyZW50IHRhc2tzXG5cdGNvbnN0IHRhc2tDb250YWluZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJtYWluLWNvbnRlbnRcIiB9KTtcblx0dGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXHQvL25vIHByb2plY3QgcmVzdWx0cyBiYWNrdXBcblx0aWYgKGN1cnJlbnRQcm9qZWN0cy5sZW5ndGggPT09IDApIHtcblx0XHR0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJObyBwcm9qZWN0c1wiO1xuXHRcdGNvbnN0IGVtcHR5RGl2ID0gZG9tQ3JlYXRlKFwiZGl2XCIpO1xuXHRcdGNvbnN0IGVtcHR5UHJvamVjdEJ0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBbXCJlbXB0eS1idG5cIl0sIHtcblx0XHRcdGlkOiBcImVtcHR5LXByb2plY3QtYnRuLWRhc2hcIixcblx0XHR9KTtcblx0XHRlbXB0eVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkNSRUFURSBQUk9KRUNUXCI7XG5cdFx0ZW1wdHlQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJQcm9qZWN0Rm9ybSk7XG5cdFx0dGFza0NvbnRhaW5lci5hcHBlbmQoZW1wdHlEaXYsIGVtcHR5UHJvamVjdEJ0bik7XG5cdH1cblx0Ly9ubyB0YXNrIHJlc3VsdHMgYmFja3VwXG5cdGNvbnN0IGN1cnJlbnRUYXNrcyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdHNbaV07XG5cdFx0Y3VycmVudFRhc2tzLnB1c2goLi4ucHJvamVjdC50YXNrcyk7XG5cdH1cblx0aWYgKGN1cnJlbnRQcm9qZWN0cy5sZW5ndGggPiAwICYmIGN1cnJlbnRUYXNrcy5sZW5ndGggPT09IDApIHtcblx0XHR0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJObyB0YXNrc1wiO1xuXHRcdGNvbnN0IGVtcHR5RGl2ID0gZG9tQ3JlYXRlKFwiZGl2XCIpO1xuXHRcdGNvbnN0IGVtcHR5VGFza0J0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBbXCJlbXB0eS1idG5cIl0sIHtcblx0XHRcdGlkOiBcImVtcHR5LXRhc2stYnRuLWRhc2hcIixcblx0XHR9KTtcblx0XHRlbXB0eVRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkNSRUFURSBUQVNLXCI7XG5cdFx0ZW1wdHlUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJUYXNrRm9ybSk7XG5cdFx0dGFza0NvbnRhaW5lci5hcHBlbmQoZW1wdHlEaXYsIGVtcHR5VGFza0J0bik7XG5cdH1cblx0Ly9yZW5kZXIgcHJvamVjdFRhc2tEYXRhIHRhc2tzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdFRhc2tEYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgZGF0YSA9IHByb2plY3RUYXNrRGF0YVtpXTtcblx0XHRjb25zb2xlLmxvZyh7IGRhdGEgfSk7XG5cdFx0Ly9pbm5lciB0YXNrIGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly90YXNrIGNhcmQgcmVuZGVyc1xuXHRcdGxldCB0YXNrRGF0YSA9IGRhdGEudGFza3M7XG5cdFx0Ly8gY29uc29sZS5sb2coeyB0YXNrRGF0YSB9KTsgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrRGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgdGFzayA9IHRhc2tEYXRhW2ldO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coeyB0YXNrIH0pO1xuXHRcdFx0Y29uc3QgdGFza0NhcmQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1jYXJkXCJdLCB7XG5cdFx0XHRcdFwiZGF0YS10YXNrLWluZGV4XCI6IGksXG5cdFx0XHR9KTtcblx0XHRcdC8vVElUTEVcblx0XHRcdGNvbnN0IHRhc2tUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXRpdGxlLWRhc2hcIl0pO1xuXHRcdFx0dGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0XHRcdC8vUFJPSkVDVCBUSVRMRVxuXHRcdFx0Y29uc3QgcHJvamVjdFRpdGxlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInByb2plY3QtdGl0bGUtZGFzaFwiXSk7XG5cdFx0XHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBkYXRhLnByb2plY3RUaXRsZTtcblx0XHRcdHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRjb25zdCBkYXNoYm9hcmRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFzaC1hc2lkZVwiKTtcblx0XHRcdFx0Y29uc3QgcHJvamVjdExpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0LWFzaWRlXCIpO1xuXHRcdFx0XHRjb25zdCBhbGxQcm9qZWN0c0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtcHJvamVjdHMtYXNpZGVcIik7XG5cdFx0XHRcdGlmICghcHJvamVjdExpc3RFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhc2lkZS1zZWxlY3RlZFwiKSkge1xuXHRcdFx0XHRcdHByb2plY3RMaXN0RWwuY2xhc3NMaXN0LmFkZChcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0XHRcdGRhc2hib2FyZEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdFx0XHRhbGxQcm9qZWN0c0VsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmdW5jdGlvbiBhY2NvcmRpb25Ub2dnbGUoKSB7XG5cdFx0XHRcdFx0Y29uc3QgcHJvamVjdExpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0XHRcdFx0XHRcdFwicHJvamVjdC1hY2NvcmRpb24tYnRuXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGNvbnN0IHByb2plY3RQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1wYW5lbC1kaXNwbGF5XCIpO1xuXHRcdFx0XHRcdHByb2plY3RMaXN0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cdFx0XHRcdFx0aWYgKHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcblx0XHRcdFx0XHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRhY2NvcmRpb25Ub2dnbGUoKTtcblx0XHRcdFx0Y29uc3QgcHJvamVjdFBhbmVsTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1wYW5lbC1saXN0XCIpO1xuXHRcdFx0XHRwcm9qZWN0UGFuZWxMaXN0LmNoaWxkTm9kZXNbZGF0YS5pbmRleF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XHRcInByb2plY3QtbGlzdC1zZWxlY3RlZFwiXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJlbmRlclByb2plY3RUYXNrcyhkYXRhLmluZGV4KTtcblx0XHRcdH0pO1xuXHRcdFx0Ly9ERVNDUklQVElPTlxuXHRcdFx0Y29uc3QgdGFza0Rlc2MgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1kZXNjcmlwdGlvblwiXSk7XG5cdFx0XHR0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cdFx0XHQvL0RVRSBEQVRFXG5cdFx0XHRjb25zdCB0YXNrRGF0ZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRhdGVcIl0pO1xuXHRcdFx0dGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cdFx0XHQvL1BSSU9SSVRZXG5cdFx0XHRjb25zdCB0YXNrUHJpb3JpdHkgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1wcmlvcml0eVwiXSk7XG5cdFx0XHR0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXHRcdFx0Ly9OT1RFU1xuXHRcdFx0Y29uc3QgdGFza05vdGVzID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stbm90ZXNcIl0pO1xuXHRcdFx0dGFza05vdGVzLnRleHRDb250ZW50ID0gdGFzay5ub3Rlcztcblx0XHRcdC8vREVMRVRFIElDT05cblx0XHRcdGNvbnN0IHRhc2tEZWxldGVJY29uID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFtcInRhc2stZGVsZXRlXCJdLCB7XG5cdFx0XHRcdHNyYzogZGVsZXRlSWNvbixcblx0XHRcdFx0YWx0OiBcInRyYXNoIGNhbiBkZWxldGUgaWNvblwiLFxuXHRcdFx0fSk7XG5cdFx0XHR0YXNrRGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSh0YXNrQ2FyZCk7XG5cdFx0XHRcdGNvbnN0IHRhc2tUaXRsZSA9XG5cdFx0XHRcdFx0dGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50O1xuXHRcdFx0XHRjb25zdCBwcm9qZWN0VGl0bGUgPVxuXHRcdFx0XHRcdHRhc2tEZWxldGVJY29uLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3RzW2ldO1xuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdC50YXNrcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGFzayA9IHByb2plY3QudGFza3Nbal07XG5cdFx0XHRcdFx0XHRpZiAocHJvamVjdFRpdGxlID09PSBwcm9qZWN0LnRpdGxlICYmIHRhc2tUaXRsZSA9PT0gdGFzay50aXRsZSkge1xuXHRcdFx0XHRcdFx0XHRwcm9qZWN0LnRhc2tzLnNwbGljZShqLCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdHMpKTtcblx0XHRcdFx0Ly8vLyBzdXBlcmZpY2lhbCBkZWxldGVcblx0XHRcdFx0Ly8gbGV0IGluZGV4ID1cblx0XHRcdFx0Ly8gXHR0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pbmRleFwiKTtcblx0XHRcdFx0Ly8gY3VycmVudFRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdC8vIHNldEN1cnJlbnRUYXNrcyhjdXJyZW50VGFza3MpO1xuXHRcdFx0XHQvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrcykpO1xuXHRcdFx0XHRyZW5kZXJEYXNoYm9hcmQoKTtcblx0XHRcdH0pO1xuXHRcdFx0Ly9BUFBFTkQgRUxFTUVOVFNcblx0XHRcdHRhc2tDYXJkLmFwcGVuZChcblx0XHRcdFx0dGFza1RpdGxlLFxuXHRcdFx0XHRwcm9qZWN0VGl0bGUsXG5cdFx0XHRcdHRhc2tEZXNjLFxuXHRcdFx0XHR0YXNrRGF0ZSxcblx0XHRcdFx0dGFza1ByaW9yaXR5LFxuXHRcdFx0XHR0YXNrTm90ZXMsXG5cdFx0XHRcdHRhc2tEZWxldGVJY29uXG5cdFx0XHQpO1xuXHRcdFx0Ly8gdGFza0NhcmQuaW5zZXJ0QmVmb3JlKHByb2plY3RUaXRsZSwgdGFza0NhcmQuY2hpbGROb2Rlc1sxXSk7XG5cdFx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRhc2tDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IHJlbmRlckRhc2hib2FyZCB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcbmltcG9ydCB7IHJlbmRlclRhc2tGb3JtIH0gZnJvbSBcIi4uLy4uL2Zvcm1cIjtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRhc2tzKGluZGV4KSB7XG5cdC8vZ2V0IGFsbCB0YXNrcyBmcm9tIGFsbCBwcm9qZWN0c1xuXHRjb25zdCBjdXJyZW50UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXHRjb25zdCByZW5kZXJQcm9qZWN0ID0gY3VycmVudFByb2plY3RzW2luZGV4XTtcblx0Y29uc3QgY3VycmVudFRhc2tzID0gcmVuZGVyUHJvamVjdC50YXNrcyB8fCBbXTtcblx0Ly91cGRhdGUgbWFpbiBoZWFkZXJcblx0Y29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1oZWFkZXJcIik7XG5cdG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSByZW5kZXJQcm9qZWN0LnRpdGxlLnRvVXBwZXJDYXNlKCk7XG5cdC8vY2xlYXIgY3VycmVudCB0YXNrc1xuXHRjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnRcIik7XG5cdHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0Ly9iYWNrdXAgdGV4dCBpZiBubyB0YXNrc1xuXHRpZiAoY3VycmVudFRhc2tzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRhc2tDb250YWluZXIudGV4dENvbnRlbnQgPSBcIk5vIHRhc2tzIGNyZWF0ZWQgeWV0XCI7XG5cdFx0Y29uc3QgZW1wdHlEaXYgPSBkb21DcmVhdGUoXCJkaXZcIik7XG5cdFx0Y29uc3QgZW1wdHlUYXNrQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImVtcHR5LWJ0blwiXSwge1xuXHRcdFx0aWQ6IFwiZW1wdHktdGFzay1idG4tZGFzaFwiLFxuXHRcdH0pO1xuXHRcdGVtcHR5VGFza0J0bi50ZXh0Q29udGVudCA9IFwiQ1JFQVRFIFRBU0tcIjtcblx0XHRlbXB0eVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRhc2tGb3JtKTtcblx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZChlbXB0eURpdiwgZW1wdHlUYXNrQnRuKTtcblx0XHQvL2F1dG9wb3B1bGF0ZSB0YXNrIGZvcm1cblx0XHRjb25zdCBleGlzdGluZ1Byb2plY3RTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGFzay1hZGRcIik7XG5cdFx0Y29uc3QgY2hpbGRBcnJheSA9IGV4aXN0aW5nUHJvamVjdFNlbGVjdC5jaGlsZE5vZGVzO1xuXHRcdGV4aXN0aW5nUHJvamVjdFNlbGVjdC5jaGlsZE5vZGVzWzBdLmRlZmF1bHRTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgY2hpbGRBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgb3B0aW9uID0gY2hpbGRBcnJheVtpXTtcblx0XHRcdGlmIChyZW5kZXJQcm9qZWN0LnRpdGxlID09PSBvcHRpb24udmFsdWUpIHtcblx0XHRcdFx0ZXhpc3RpbmdQcm9qZWN0U2VsZWN0LmNoaWxkTm9kZXNbaV0uZGVmYXVsdFNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly9yZW5kZXIgY3VycmVudFRhc2tzIHRhc2tzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdGFzayA9IGN1cnJlbnRUYXNrc1tpXTtcblx0XHRjb25zdCB0YXNrQ2FyZCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWNhcmRcIl0sIHsgXCJkYXRhLWluZGV4XCI6IGkgfSk7XG5cdFx0Ly9pbm5lciB0YXNrIGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly9USVRMRVxuXHRcdGNvbnN0IHRhc2tUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXRpdGxlXCJdKTtcblx0XHR0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRcdC8vREVTQ1JJUFRJT05cblx0XHRjb25zdCB0YXNrRGVzYyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRlc2NyaXB0aW9uXCJdKTtcblx0XHR0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cdFx0Ly9EVUUgREFURVxuXHRcdGNvbnN0IHRhc2tEYXRlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGF0ZVwiXSk7XG5cdFx0dGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cdFx0Ly9QUklPUklUWVxuXHRcdGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXByaW9yaXR5XCJdKTtcblx0XHR0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXHRcdC8vTk9URVNcblx0XHRjb25zdCB0YXNrTm90ZXMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1ub3Rlc1wiXSk7XG5cdFx0dGFza05vdGVzLnRleHRDb250ZW50ID0gdGFzay5ub3Rlcztcblx0XHQvL0RFTEVURSBJQ09OXG5cdFx0Y29uc3QgdGFza0RlbGV0ZUljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgW1widGFzay1kZWxldGVcIl0sIHtcblx0XHRcdHNyYzogZGVsZXRlSWNvbixcblx0XHRcdGFsdDogXCJ0cmFzaCBjYW4gZGVsZXRlIGljb25cIixcblx0XHR9KTtcblx0XHR0YXNrRGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0dGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUodGFza0NhcmQpO1xuXHRcdFx0bGV0IGluZGV4ID0gdGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXHRcdFx0Y3VycmVudFRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHQvLyBzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG5cdFx0XHRyZW5kZXJQcm9qZWN0VGFza3MoaW5kZXgpO1xuXHRcdH0pO1xuXHRcdC8vQVBQRU5EIEVMRU1FTlRTXG5cdFx0dGFza0NhcmQuYXBwZW5kKFxuXHRcdFx0dGFza1RpdGxlLFxuXHRcdFx0dGFza0Rlc2MsXG5cdFx0XHR0YXNrRGF0ZSxcblx0XHRcdHRhc2tQcmlvcml0eSxcblx0XHRcdHRhc2tOb3Rlcyxcblx0XHRcdHRhc2tEZWxldGVJY29uXG5cdFx0KTtcblx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblx0fVxufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0VGFza3MgfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi8uLi9ET01cIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0VGFza3MgfSBmcm9tIFwiLi9wcm9qZWN0VGFza3NcIjtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHNBbGwoKSB7XG5cdC8vZ2V0IGFsbCBwcm9qZWN0c1xuXHRjb25zdCBjdXJyZW50UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXHRjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdHMpO1xuXHQvL2NsZWFyIGN1cnJlbnQgY29udGVudFxuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwibWFpbi1jb250ZW50XCIgfSk7XG5cdC8vIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0Ly9yZW5kZXIgY3VycmVudFByb2plY3RzIHByb2plY3RzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c1tpXTtcblx0XHRjb25zdCBwcm9qZWN0Q2FyZCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJwcm9qZWN0LWNhcmRcIl0sIHsgXCJkYXRhLWluZGV4XCI6IGkgfSk7XG5cdFx0Ly9pbm5lciBwcm9qZWN0IGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly9USVRMRVxuXHRcdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJwcm9qZWN0LXRpdGxlXCJdKTtcblx0XHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXHRcdC8vREVTQ1JJUFRJT05cblx0XHRjb25zdCBwcm9qZWN0RGVzYyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCJdKTtcblx0XHRwcm9qZWN0RGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XG5cdFx0Ly9UQVNLU1xuXHRcdGNvbnN0IHByb2plY3RUYXNrc0xpc3QgPSBkb21DcmVhdGUoXCJ1bFwiLCBbXCJwcm9qZWN0LXRhc2tzLWxpc3RcIl0pO1xuXHRcdGxldCB0YXNrQXJyYXkgPSBwcm9qZWN0LnRhc2tzO1xuXHRcdGlmICh0YXNrQXJyYXkubGVuZ3RoID09PSAwKVxuXHRcdFx0cHJvamVjdFRhc2tzTGlzdC50ZXh0Q29udGVudCA9IFwiMCB0YXNrcyBpbiB0aGlzIHByb2plY3RcIjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgdGFzayA9IHRhc2tBcnJheVtpXTtcblx0XHRcdGNvbnN0IGxpID0gZG9tQ3JlYXRlKFwibGlcIiwgW1wicHJvamVjdC10YXNrLWxpc3QtaXRlbVwiXSk7XG5cdFx0XHRsaS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdFx0XHRwcm9qZWN0VGFza3NMaXN0LmFwcGVuZENoaWxkKGxpKTtcblx0XHR9XG5cdFx0Y29uc3QgcHJvamVjdFRhc2tzID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInByb2plY3QtdGFza3NcIl0pO1xuXHRcdHByb2plY3RUYXNrcy5hcHBlbmRDaGlsZChwcm9qZWN0VGFza3NMaXN0KTtcblx0XHQvL0RFTEVURSBJQ09OXG5cdFx0Y29uc3QgcHJvamVjdERlbGV0ZUljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgW1wicHJvamVjdC1kZWxldGVcIl0sIHtcblx0XHRcdHNyYzogZGVsZXRlSWNvbixcblx0XHRcdGFsdDogXCJ0cmFzaCBjYW4gZGVsZXRlIGljb25cIixcblx0XHR9KTtcblx0XHRwcm9qZWN0RGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cHJvamVjdERlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUocHJvamVjdENhcmQpO1xuXHRcdFx0bGV0IGluZGV4ID0gcHJvamVjdERlbGV0ZUljb24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXHRcdFx0Y3VycmVudFByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHQvLyBzZXRDdXJyZW50UHJvamVjdHMoY3VycmVudFByb2plY3RzKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3RzKSk7XG5cdFx0XHRyZW5kZXJQcm9qZWN0c0FsbCgpO1xuXHRcdH0pO1xuXHRcdC8vQVBQRU5EIEVMRU1FTlRTXG5cdFx0cHJvamVjdENhcmQuYXBwZW5kKFxuXHRcdFx0cHJvamVjdFRpdGxlLFxuXHRcdFx0cHJvamVjdERlc2MsXG5cdFx0XHRwcm9qZWN0VGFza3MsXG5cdFx0XHRwcm9qZWN0RGVsZXRlSWNvblxuXHRcdCk7XG5cdFx0cHJvamVjdENhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGRhc2hib2FyZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXNoLWFzaWRlXCIpO1xuXHRcdFx0Y29uc3QgcHJvamVjdExpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0LWFzaWRlXCIpO1xuXHRcdFx0Y29uc3QgYWxsUHJvamVjdHNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLXByb2plY3RzLWFzaWRlXCIpO1xuXHRcdFx0aWYgKCFwcm9qZWN0TGlzdEVsLmNsYXNzTGlzdC5jb250YWlucyhcImFzaWRlLXNlbGVjdGVkXCIpKSB7XG5cdFx0XHRcdHByb2plY3RMaXN0RWwuY2xhc3NMaXN0LmFkZChcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0XHRkYXNoYm9hcmRFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRcdGFsbFByb2plY3RzRWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0fVxuXHRcdFx0ZnVuY3Rpb24gYWNjb3JkaW9uVG9nZ2xlKCkge1xuXHRcdFx0XHRjb25zdCBwcm9qZWN0TGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1hY2NvcmRpb24tYnRuXCIpO1xuXHRcdFx0XHRjb25zdCBwcm9qZWN0UGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtcGFuZWwtZGlzcGxheVwiKTtcblx0XHRcdFx0cHJvamVjdExpc3RCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0XHRcdFx0aWYgKHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcblx0XHRcdFx0XHRwcm9qZWN0UGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRhY2NvcmRpb25Ub2dnbGUoKTtcblx0XHRcdGNvbnN0IHByb2plY3RQYW5lbExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtcGFuZWwtbGlzdFwiKTtcblx0XHRcdHByb2plY3RQYW5lbExpc3QuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LXNlbGVjdGVkXCIpO1xuXHRcdFx0cmVuZGVyUHJvamVjdFRhc2tzKGkpO1xuXHRcdH0pO1xuXHRcdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuXHR9XG5cdHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0c0FsbCB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcblxuZnVuY3Rpb24gcmVuZGVyU2VhcmNoKHNlYXJjaCkge1xuXHRpZiAoc2VhcmNoID09PSBcIlwiKSByZXR1cm47XG5cdC8vZ2V0IGFsbCB0YXNrcyBmcm9tIGFsbCBwcm9qZWN0c1xuXHRjb25zdCBjdXJyZW50UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXHRjb25zdCBjdXJyZW50VGFza3MgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3RzW2ldO1xuXHRcdGN1cnJlbnRUYXNrcy5wdXNoKC4uLnByb2plY3QudGFza3MpO1xuXHR9XG5cdGNvbnN0IGZpbHRlclRhc2tzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdGFzayA9IGN1cnJlbnRUYXNrc1tpXTtcblx0XHRsZXQgbG93ZXJUaXRsZSA9IHRhc2sudGl0bGUudG9Mb3dlckNhc2UoKTtcblx0XHRsZXQgbG93ZXJTZWFyY2ggPSBzZWFyY2gudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAobG93ZXJUaXRsZS5pbmNsdWRlcyhsb3dlclNlYXJjaCkpIHtcblx0XHRcdGZpbHRlclRhc2tzLnB1c2godGFzayk7XG5cdFx0fVxuXHR9XG5cdC8vdXBkYXRlIG1haW4gaGVhZGVyXG5cdGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4taGVhZGVyXCIpO1xuXHRtYWluSGVhZGVyLnRleHRDb250ZW50ID0gXCJTRUFSQ0ggUkVTVUxUU1wiO1xuXHQvL2NsZWFyIGN1cnJlbnQgdGFza3Ncblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuXHR0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cdC8vbm8gc2VhcmNoIHJlc3VsdHMgYmFja3VwXG5cdGlmIChmaWx0ZXJUYXNrcy5sZW5ndGggPT09IDApIHtcblx0XHR0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJObyBzZWFyY2ggcmVzdWx0c1wiO1xuXHR9XG5cdC8vcmVuZGVyIGZpbHRlclRhc2tzIHRhc2tzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyVGFza3MubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCB0YXNrID0gZmlsdGVyVGFza3NbaV07XG5cdFx0Y29uc3QgdGFza0NhcmQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1jYXJkXCJdLCB7IFwiZGF0YS10YXNrLWluZGV4XCI6IGkgfSk7XG5cdFx0Ly9pbm5lciB0YXNrIGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly9USVRMRVxuXHRcdGNvbnN0IHRhc2tUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXRpdGxlXCJdKTtcblx0XHR0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRcdC8vREVTQ1JJUFRJT05cblx0XHRjb25zdCB0YXNrRGVzYyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRlc2NyaXB0aW9uXCJdKTtcblx0XHR0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cdFx0Ly9EVUUgREFURVxuXHRcdGNvbnN0IHRhc2tEYXRlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGF0ZVwiXSk7XG5cdFx0dGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cdFx0Ly9QUklPUklUWVxuXHRcdGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXByaW9yaXR5XCJdKTtcblx0XHR0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXHRcdC8vTk9URVNcblx0XHRjb25zdCB0YXNrTm90ZXMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1ub3Rlc1wiXSk7XG5cdFx0dGFza05vdGVzLnRleHRDb250ZW50ID0gdGFzay5ub3Rlcztcblx0XHQvL0RFTEVURSBJQ09OXG5cdFx0Y29uc3QgdGFza0RlbGV0ZUljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgW1widGFzay1kZWxldGVcIl0sIHtcblx0XHRcdHNyYzogZGVsZXRlSWNvbixcblx0XHRcdGFsdDogXCJ0cmFzaCBjYW4gZGVsZXRlIGljb25cIixcblx0XHR9KTtcblx0XHR0YXNrRGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0dGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUodGFza0NhcmQpO1xuXHRcdFx0bGV0IGluZGV4ID0gdGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staW5kZXhcIik7XG5cdFx0XHRmaWx0ZXJUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0Ly8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaWx0ZXJUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShmaWx0ZXJUYXNrcykpO1xuXHRcdFx0cmVuZGVyU2VhcmNoKHNlYXJjaCk7XG5cdFx0fSk7XG5cdFx0Ly9BUFBFTkQgRUxFTUVOVFNcblx0XHR0YXNrQ2FyZC5hcHBlbmQoXG5cdFx0XHR0YXNrVGl0bGUsXG5cdFx0XHR0YXNrRGVzYyxcblx0XHRcdHRhc2tEYXRlLFxuXHRcdFx0dGFza1ByaW9yaXR5LFxuXHRcdFx0dGFza05vdGVzLFxuXHRcdFx0dGFza0RlbGV0ZUljb25cblx0XHQpO1xuXHRcdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXHR9XG5cdC8vIHJldHVybiB0YXNrQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyByZW5kZXJTZWFyY2ggfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi9ET01cIjtcbmltcG9ydCB7IHJlbmRlckRhc2hib2FyZCB9IGZyb20gXCIuL3BhZ2VzL2Rhc2hib2FyZFwiO1xuaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCB7IHJlbmRlckFzaWRlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hc2lkZVwiO1xuaW1wb3J0IHsgcmVuZGVyQWRkVGFza0Zvcm0gfSBmcm9tIFwiLi9jb21wb25lbnRzL2FkZFRhc2tGb3JtXCI7XG5pbXBvcnQgeyByZW5kZXJBZGRQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2NvbXBvbmVudHMvYWRkUHJvamVjdEZvcm1cIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzQWxsIH0gZnJvbSBcIi4vcGFnZXMvcHJvamVjdHNBbGxcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnN0IGhlYWRlciA9IHJlbmRlckhlYWRlcigpO1xuY29uc3QgYXNpZGUgPSByZW5kZXJBc2lkZSgpO1xuY29uc3QgbWFpblNlY3Rpb24gPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJtYWluLXNlY3Rpb25cIiB9KTtcbmNvbnN0IG1haW5IZWFkZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJtYWluLWhlYWRlclwiIH0pO1xubWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG5jb25zdCBtYWluRGl2ID0gZG9tQ3JlYXRlKFwibWFpblwiLCBcIlwiLCB7IGlkOiBcIm1haW5cIiB9KTtcbm1haW5EaXYuYXBwZW5kKGFzaWRlLCBtYWluU2VjdGlvbik7XG5jb25zdCB0YXNrRm9ybSA9IHJlbmRlckFkZFRhc2tGb3JtKCk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IHJlbmRlckFkZFByb2plY3RGb3JtKCk7XG5jb250ZW50LmFwcGVuZChoZWFkZXIsIG1haW5EaXYsIHRhc2tGb3JtLCBwcm9qZWN0Rm9ybSk7XG5cbmZ1bmN0aW9uIHJlcGxhY2VIZWxwZXIobmV3U2liKSB7XG5cdGlmIChtYWluSGVhZGVyLm5leHRTaWJsaW5nKSB7XG5cdFx0Y29uc3QgbmV4dFNpYiA9IG1haW5IZWFkZXIubmV4dFNpYmxpbmc7XG5cdFx0bWFpblNlY3Rpb24ucmVwbGFjZUNoaWxkKG5ld1NpYiwgbmV4dFNpYik7XG5cdH0gZWxzZSB7XG5cdFx0bWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobmV3U2liKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW5kZXJEYXNoYm9hcmRQYWdlKCkge1xuXHRtYWluSGVhZGVyLnRleHRDb250ZW50ID0gXCJEQVNIQk9BUkRcIjtcblx0Y29uc3QgZGFzaGJvYXJkID0gcmVuZGVyRGFzaGJvYXJkKCk7XG5cdHJlcGxhY2VIZWxwZXIoZGFzaGJvYXJkKTtcbn1cbmZ1bmN0aW9uIHJlbmRlckFsbFByb2plY3RzUGFnZSgpIHtcblx0bWFpbkhlYWRlci50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFNcIjtcblx0Y29uc3QgYWxsUHJvamVjdHMgPSByZW5kZXJQcm9qZWN0c0FsbCgpO1xuXHRyZXBsYWNlSGVscGVyKGFsbFByb2plY3RzKTtcbn1cbi8vIGZ1bmN0aW9uIHJlbmRlclNlYXJjaFBhZ2UoKSB7XG4vLyBcdG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBcIlNFQVJDSCBSRVNVTFRTXCI7XG4vLyBcdC8vIGNvbnN0IGFsbFByb2plY3RzID0gcmVuZGVyUHJvamVjdHNBbGwoKTtcbi8vIFx0Ly8gcmVwbGFjZUhlbHBlcihhbGxQcm9qZWN0cyk7XG4vLyB9XG5cbmV4cG9ydCB7IHJlbmRlckRhc2hib2FyZFBhZ2UsIHJlbmRlckFsbFByb2plY3RzUGFnZSB9O1xuIiwiY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5jb25zdCBzYXZlZFRhc2tzID0gW107XG5sZXQgY3VycmVudFRhc2tzID0gc2F2ZWRUYXNrcztcbmxldCBjdXJyZW50UHJvamVjdHMgPSBzYXZlZFByb2plY3RzO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50VGFza3MobmV3VGFza3MpIHtcblx0Y3VycmVudFRhc2tzID0gbmV3VGFza3M7XG5cdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0cyhuZXdQcm9qZWN0cykge1xuXHRjdXJyZW50UHJvamVjdHMgPSBuZXdQcm9qZWN0cztcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdHMpKTtcbn1cblxuZXhwb3J0IHsgc2V0Q3VycmVudFRhc2tzLCBzZXRDdXJyZW50UHJvamVjdHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==