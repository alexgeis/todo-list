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
/* harmony import */ var _js_render_components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/render/components/header */ "./src/js/render/components/header.js");
/* harmony import */ var _js_render_pages_dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/render/pages/dashboard */ "./src/js/render/pages/dashboard.js");
/* harmony import */ var _js_render_components_addTaskForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/render/components/addTaskForm */ "./src/js/render/components/addTaskForm.js");
/* harmony import */ var _js_render_components_addProjectForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/render/components/addProjectForm */ "./src/js/render/components/addProjectForm.js");
/* harmony import */ var _js_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/state */ "./src/js/state.js");
/* harmony import */ var _js_data_seed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/data/seed */ "./src/js/data/seed.js");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _js_render_renderPages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/render/renderPages */ "./src/js/render/renderPages.js");










// import { renderSite } from "./js/render/renderPages";
//TEST DATA
// import { taskData } from "./js/data/taskData";
// localStorage.setItem("tasks", taskData);


// const content = document.getElementById("content");
// console.log("before");
// let el = domCreate("div", "", { id: "example" });
// console.log("after");
// console.log({ el });
// el.textContent = "TEST";
// content.appendChild(el);

//SEED DATA BTN
// document
// 	.querySelector("#seed-projects-btn")
// 	.addEventListener("click", seedProjectData);

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

window.onload = () => {
	(0,_js_render_renderPages__WEBPACK_IMPORTED_MODULE_10__.renderDashboardPage)();
	// renderSite();
	// setCurrentTheme(DEFAULT_THEME);
	// setCurrentTasks(currentTasks);
	// setCurrentProjects(currentProjects);
	// renderProjectAsideList();
	// 	renderDashboard();
	// });
	//
	// 	renderProjectsAll();
	// });
	// renderDashboard();
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
/* harmony export */   "renderAside": () => (/* binding */ renderAside)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ "./src/js/DOM.js");
/* harmony import */ var _pages_projectTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/projectTasks */ "./src/js/render/pages/projectTasks.js");
/* harmony import */ var _renderPages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderPages */ "./src/js/render/renderPages.js");




function renderProjectAsideList() {
	const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
	if (savedProjects.length === 0) return;
	const totalProjectNames = [];
	for (let i = 0; i < savedProjects.length; i++) {
		const project = savedProjects[i];
		totalProjectNames.push(project.title);
	}
	////dom logic
	const projectList = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("ul", "", { id: "project-panel-list" });
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
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../form */ "./src/js/form.js");
/* harmony import */ var _renderPages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../renderPages */ "./src/js/render/renderPages.js");
/* harmony import */ var _pages_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/search */ "./src/js/render/pages/search.js");










function renderAddMenu() {
	const addIconMenu = document.querySelector("#add-icon-menu");
	addIconMenu.classList.toggle("icon-menu-toggle");
}

function renderHeader() {
	////header LEFT
	const siteLogo = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("img", ["fake-class"], {
		src: _assets_checkbox_marked_circle_png__WEBPACK_IMPORTED_MODULE_1__,
		alt: "checked circle logo",
	});
	const siteTitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "header-site-title" });
	siteTitle.textContent = "TODO LIST";
	//seed data
	const seedDataBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", "", { id: "seed-projects-btn" });
	seedDataBtn.textContent = "SEED DATA";
	const headerLeft = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "headerLeft" });
	headerLeft.append(siteLogo, siteTitle, seedDataBtn);
	////header CENTER
	const searchLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", "", { for: "site-search" });
	searchLabel.textContent = "Search the site: ";
	const searchInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", "", {
		id: "site-search",
		type: "search",
		name: "q",
	});
	searchInput.addEventListener("keyup", (e) => {
		let currentVal = e.target.value; // "mow"
		(0,_pages_search__WEBPACK_IMPORTED_MODULE_8__.renderSearch)(currentVal);
		if (currentVal === "") (0,_renderPages__WEBPACK_IMPORTED_MODULE_7__.renderDashboardPage)();
	});
	// const searchBtn = domCreate("button", "");
	// searchBtn.textContent = "Search";
	const headerCenter = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "headerCenter" });
	headerCenter.append(searchLabel, searchInput);
	////header RIGHT
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

	addTaskImg.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_6__.renderTaskForm);
	const addProjectImg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("img", "", {
		id: "add-project-form",
		src: _assets_list_group_plus_png__WEBPACK_IMPORTED_MODULE_4__,
		alt: "add project plus icon",
	});
	addProjectImg.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_6__.renderProjectForm);
	addIconMenu.append(addTaskImg, addProjectImg);
	const addBtnEl = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "addBtn" });
	addBtnEl.append(addBtnIcon, addIconMenu);
	//login
	const loginEl = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "login" });
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
	const settingsEl = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "settings" });
	settingsEl.appendChild(settingsLink);
	const headerRight = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "headerRight" });
	headerRight.append(addBtnEl, loginEl, settingsEl);
	//FULL HEADER APPEND
	const header = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("header", "", { id: "header" });
	header.append(headerLeft, headerCenter, headerRight);
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




function renderDashboard() {
	//get all tasks from all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects"));
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
	//render currentTasks tasks
	for (let i = 0; i < projectTaskData.length; i++) {
		const data = projectTaskData[i];
		// console.log({ data });
		//inner task card div items
		//task card renders
		let taskData = data.tasks;
		// console.log({ taskData }); /////////////////////
		for (let i = 0; i < taskData.length; i++) {
			const task = taskData[i];
			console.log({ task });
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



function renderProjectTasks(index) {
	//get all tasks from all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects"));
	const renderProject = currentProjects[index];
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



function renderProjectsAll() {
	//get all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects"));
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
	const currentProjects = JSON.parse(localStorage.getItem("projects"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsbUJBQW1CLCtDQUFTO0FBQzVCO0FBQ0E7QUFDQSxtQkFBbUIsK0NBQVM7QUFDNUI7QUFDQTtBQUNBLHVCQUF1QiwrQ0FBUztBQUNoQztBQUNBO0FBQ0Esb0JBQW9CLCtDQUFTO0FBQzdCO0FBQ0E7QUFDQSx5QkFBeUIsK0NBQVM7QUFDbEMsUUFBUSwwREFBVTtBQUNsQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFVztBQUNpQjtBQUNEO0FBQ0Y7QUFDWTtBQUNNO0FBQ1g7O0FBRXhEO0FBQ0EsZUFBZSxnRUFBWTtBQUMzQixjQUFjLDhEQUFXO0FBQ3pCLG9CQUFvQiwrQ0FBUyxjQUFjLG9CQUFvQjtBQUMvRCxtQkFBbUIsK0NBQVMsY0FBYyxtQkFBbUI7QUFDN0Q7QUFDQSxnQkFBZ0IsK0NBQVMsZUFBZSxZQUFZO0FBQ3BEO0FBQ0EsaUJBQWlCLDBFQUFpQjtBQUNsQyxvQkFBb0IsZ0ZBQW9CO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGlFQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFFQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGUuc2Nzcz82MmFmIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2RhdGEvcHJvamVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2RhdGEvc2VlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL2NvbXBvbmVudHMvYWRkUHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9jb21wb25lbnRzL2FkZFRhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvY29tcG9uZW50cy9hc2lkZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvcGFnZXMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvcGFnZXMvcHJvamVjdFRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvcGFnZXMvcHJvamVjdHNBbGwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9wYWdlcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9yZW5kZXJQYWdlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvc3RhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgY3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2pzL2NyZWF0ZVwiO1xuaW1wb3J0IHtcblx0cmVuZGVyVGFza0Zvcm0sXG5cdHJlbmRlclByb2plY3RGb3JtLFxuXHRjbGVhclRhc2tGb3JtLFxuXHRjbG9zZVRhc2tGb3JtLFxuXHRjbGVhclByb2plY3RGb3JtLFxuXHRjbG9zZVByb2plY3RGb3JtLFxufSBmcm9tIFwiLi9qcy9mb3JtXCI7XG5pbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi9qcy9ET01cIjtcbmltcG9ydCB7IHJlbmRlckFkZE1lbnUsIHJlbmRlckhlYWRlciB9IGZyb20gXCIuL2pzL3JlbmRlci9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IHsgcmVuZGVyRGFzaGJvYXJkIH0gZnJvbSBcIi4vanMvcmVuZGVyL3BhZ2VzL2Rhc2hib2FyZFwiO1xuaW1wb3J0IHtcblx0YWRkVGFza1N1Ym1pdCxcblx0cmVuZGVyQWRkVGFza0Zvcm0sXG59IGZyb20gXCIuL2pzL3JlbmRlci9jb21wb25lbnRzL2FkZFRhc2tGb3JtXCI7XG5pbXBvcnQge1xuXHRhZGRQcm9qZWN0U3VibWl0LFxuXHRyZW5kZXJBZGRQcm9qZWN0Rm9ybSxcbn0gZnJvbSBcIi4vanMvcmVuZGVyL2NvbXBvbmVudHMvYWRkUHJvamVjdEZvcm1cIjtcbmltcG9ydCB7IHNldEN1cnJlbnRUYXNrcywgc2V0Q3VycmVudFByb2plY3RzIH0gZnJvbSBcIi4vanMvc3RhdGVcIjtcbmltcG9ydCB7IHNlZWRQcm9qZWN0RGF0YSB9IGZyb20gXCIuL2pzL2RhdGEvc2VlZFwiO1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuc2Nzc1wiO1xuLy8gaW1wb3J0IHsgcmVuZGVyU2l0ZSB9IGZyb20gXCIuL2pzL3JlbmRlci9yZW5kZXJQYWdlc1wiO1xuLy9URVNUIERBVEFcbi8vIGltcG9ydCB7IHRhc2tEYXRhIH0gZnJvbSBcIi4vanMvZGF0YS90YXNrRGF0YVwiO1xuLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCB0YXNrRGF0YSk7XG5pbXBvcnQgeyByZW5kZXJEYXNoYm9hcmRQYWdlIH0gZnJvbSBcIi4vanMvcmVuZGVyL3JlbmRlclBhZ2VzXCI7XG5cbi8vIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4vLyBjb25zb2xlLmxvZyhcImJlZm9yZVwiKTtcbi8vIGxldCBlbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcImV4YW1wbGVcIiB9KTtcbi8vIGNvbnNvbGUubG9nKFwiYWZ0ZXJcIik7XG4vLyBjb25zb2xlLmxvZyh7IGVsIH0pO1xuLy8gZWwudGV4dENvbnRlbnQgPSBcIlRFU1RcIjtcbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZWwpO1xuXG4vL1NFRUQgREFUQSBCVE5cbi8vIGRvY3VtZW50XG4vLyBcdC5xdWVyeVNlbGVjdG9yKFwiI3NlZWQtcHJvamVjdHMtYnRuXCIpXG4vLyBcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VlZFByb2plY3REYXRhKTtcblxuLy8vLyBTVEFURSAvLy8vXG4vL0RFRkFVTFRTXG5jb25zdCBERUZBVUxUX1RIRU1FID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSB8fCBcImxpZ2h0XCI7XG5jb25zdCBzYXZlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcbmNvbnN0IHNhdmVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuLy8gY29uc3QgY3VycmVudGx5RG9uZSA9IHNhdmVkVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmNvbXBsZXRlID09PSB0cnVlKTtcbi8vIGNvbnN0IERFRkFVTFRfVEFTS1NfRE9ORSA9IGN1cnJlbnRseURvbmUubGVuZ3RoO1xuLy8gY29uc3QgREVGQVVMVF9UQVNLU19UT1RBTCA9IHNhdmVkQm9va3MubGVuZ3RoO1xuXG5sZXQgY3VycmVudFRhc2tzID0gc2F2ZWRUYXNrcztcbmxldCBjdXJyZW50UHJvamVjdHMgPSBzYXZlZFByb2plY3RzO1xubGV0IGN1cnJlbnRUaGVtZSA9IERFRkFVTFRfVEhFTUU7XG4vLyBsZXQgY3VycmVudFRhc2tzRG9uZUNvdW50ID0gREVGQVVMVF9UQVNLU19ET05FO1xuLy8gbGV0IGN1cnJlbnRUYXNrc1RvdGFsQ291bnQgPSBERUZBVUxUX1RBU0tTX1RPVEFMO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXHRyZW5kZXJEYXNoYm9hcmRQYWdlKCk7XG5cdC8vIHJlbmRlclNpdGUoKTtcblx0Ly8gc2V0Q3VycmVudFRoZW1lKERFRkFVTFRfVEhFTUUpO1xuXHQvLyBzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0Ly8gc2V0Q3VycmVudFByb2plY3RzKGN1cnJlbnRQcm9qZWN0cyk7XG5cdC8vIHJlbmRlclByb2plY3RBc2lkZUxpc3QoKTtcblx0Ly8gXHRyZW5kZXJEYXNoYm9hcmQoKTtcblx0Ly8gfSk7XG5cdC8vXG5cdC8vIFx0cmVuZGVyUHJvamVjdHNBbGwoKTtcblx0Ly8gfSk7XG5cdC8vIHJlbmRlckRhc2hib2FyZCgpO1xufTtcbiIsIi8vIERPTSBDUkVBVEUgRlVOQ1RJT05cblxuLy9hcmcgMSA9IG5hbWUgb2YgSFRNTCBlbGVtZW50XG4vLyBhcmcgMiA9IGNsYXNzIG5hbWVzIHRvIGFkZFxuLy8gYXJnIDMgPSBvYmplY3QgLSBhdHRyaWJ1dGVzIHRvIGFkZCAtPiBhdHRyaWJ1dGUgOiB2YWx1ZVxuZnVuY3Rpb24gZG9tQ3JlYXRlKGFyZzEsIGFyZzIsIGFyZzMpIHtcblx0Ly8vLyBhcmcgMSA9IFwic3RyaW5nXCIgLSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmcxKTtcblx0Ly8vLyBhcmcgMiA9IFtcImFycmF5IG9mIHN0cmluZ3NcIl0gLSBjbGFzcyBuYW1lcyB0byBhZGRcblx0aWYgKEFycmF5LmlzQXJyYXkoYXJnMikgJiYgYXJnMi5sZW5ndGggPiAwKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmcyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBjbGFzc05hbWUgPSBhcmcyW2ldO1xuXHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0fVxuXHR9XG5cdC8vLy8gYXJnIDMgPSB7b2JqZWN0fSAtIGF0dHJpYnV0ZSBuYW1lIDogdmFsdWVcblx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgaW4gYXJnMykge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXJnM1thdHRyaWJ1dGVdKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IHsgZG9tQ3JlYXRlIH07XG4iLCIvL0RFTU9cblxuLy8gY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4vLyBjb25zdCB0YXNrRGVtbzEgPSBjcmVhdGVUYXNrKHtcbi8vIFx0dGl0bGU6IFwiV2FsayB0aGUgRG9nXCIsXG4vLyBcdGRlc2NyaXB0aW9uOiBcInRha2UgdGhlIGRvZ2dvIG9uIGEgbGlsIHN0cm9sbFwiLFxuLy8gXHRkdWVEYXRlOiBkYXRlLFxuLy8gXHRwcmlvcml0eTogMyxcbi8vIFx0bm90ZXM6IFwiYXZvaWQgOXRoIGFuZCBFbG0gLSBhZ2dyZXNzaXZlIGRvZ1wiLFxuLy8gfSk7XG4vLyBjb25zdCBwcm9qZWN0RGVtbzEgPSBjcmVhdGVQcm9qZWN0KHtcbi8vIFx0dGl0bGU6IFwiUGVyc29uYWxcIixcbi8vIFx0ZGVzY3JpcHRpb246IFwicGxlYXN1cmUsIG5vdCBidXNpbmVzc1wiLFxuLy8gfSk7XG4vLyBwcm9qZWN0RGVtbzEuYWRkVGFza3RvUHJvamVjdCh0YXNrRGVtbzEpO1xuXG5jb25zdCBjcmVhdGVUYXNrID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMgfSkgPT4gKHtcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHRkdWVEYXRlLFxuXHRwcmlvcml0eSxcblx0bm90ZXMsXG5cdHByaW50VGFzaygpIHtcblx0XHRyZXR1cm4gYCR7dGhpcy50aXRsZX06ICR7dGhpcy5kZXNjcmlwdGlvbn1gO1xuXHR9LFxufSk7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4gKHtcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHR0YXNrczogW10sXG5cdHByaW50UHJvamVjdCgpIHtcblx0XHRyZXR1cm4gYFByb2plY3QgJHt0aGlzLnRpdGxlfTogJHt0aGlzLmRlc2NyaXB0aW9ufWA7XG5cdH0sXG5cdHByaW50VGFza3MoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy50YXNrcyk7XG5cdH0sXG5cdGFkZFRhc2t0b1Byb2plY3QodGFzaykge1xuXHRcdHRoaXMudGFza3MucHVzaCh0YXNrKTtcblx0fSxcbn0pO1xuXG5leHBvcnQgeyBjcmVhdGVUYXNrLCBjcmVhdGVQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVUYXNrLCBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4uL2NyZWF0ZVwiO1xuXG5jb25zdCBwcm9qZWN0MXRhc2sxID0gY3JlYXRlVGFzayh7XG5cdHRpdGxlOiBcIk1vdyB0aGUgbGF3blwiLFxuXHRkZXNjcmlwdGlvbjpcblx0XHRcImdldCBvdXQgdGhlcmUgd2l0aCB0aGUgZGFuZyBtb3dlciBhbmQgbW93IHRoYXQgdGhlcmUgbGF3biB0aGVyZVwiLFxuXHRkdWVEYXRlOiBcIjIwMjItMDctMjlcIixcblx0cHJpb3JpdHk6IFwiMVwiLFxuXHRub3RlczogXCJSZXR1cm4gbW93ZXIgdG8gbmVpZ2hib3Igd2hlbiBmaW5pc2hlZFwiLFxufSk7XG5jb25zdCBwcm9qZWN0MSA9IGNyZWF0ZVByb2plY3Qoe1xuXHR0aXRsZTogXCJMYXdubW93ZXJcIixcblx0ZGVzY3JpcHRpb246IFwibGFuZHNjYXBpbmcgcHJvamVjdFwiLFxufSk7XG5wcm9qZWN0MS5hZGRUYXNrdG9Qcm9qZWN0KHByb2plY3QxdGFzazEpO1xuXG5jb25zdCBwcm9qZWN0MnRhc2sxID0gY3JlYXRlVGFzayh7XG5cdHRpdGxlOiBcIldhbGsgdGhlIGRvZ1wiLFxuXHRkZXNjcmlwdGlvbjogXCJsZWFzaCwgb3BlbiBkb29yLCB3YWxrIGFyb3VuZCwgY29tZSBiYWNrXCIsXG5cdGR1ZURhdGU6IFwiMjAyMi0wOC0xMlwiLFxuXHRwcmlvcml0eTogXCIyXCIsXG5cdG5vdGVzOiBcImF2b2lkIG90aGVyIGRvZ3MhXCIsXG59KTtcbmNvbnN0IHByb2plY3QydGFzazIgPSBjcmVhdGVUYXNrKHtcblx0dGl0bGU6IFwiQ29vayBkaW5uZXJcIixcblx0ZGVzY3JpcHRpb246IFwiY2hpY2tlbiB0aWtrYSBtYXNhbGEsIHcvIGphc21pbmUgcmljZSwgYW5kIHNhbW9zYXNcIixcblx0ZHVlRGF0ZTogXCIyMDIyLTA2LTEyXCIsXG5cdHByaW9yaXR5OiBcIjNcIixcblx0bm90ZXM6IFwibm8gcGVhbnV0cyFcIixcbn0pO1xuY29uc3QgcHJvamVjdDJ0YXNrMyA9IGNyZWF0ZVRhc2soe1xuXHR0aXRsZTogXCJSZWFkICdPY3RvYmVyJyBCb29rXCIsXG5cdGRlc2NyaXB0aW9uOiBcInJlYWQgYXQgbGVhc3QgNDAgcGFnZXMgdG9kYXlcIixcblx0ZHVlRGF0ZTogXCIyMDIyLTA4LTEyXCIsXG5cdHByaW9yaXR5OiBcIjVcIixcblx0bm90ZXM6IFwiXCIsXG59KTtcbmNvbnN0IHByb2plY3QyID0gY3JlYXRlUHJvamVjdCh7XG5cdHRpdGxlOiBcIkFub3RoZXIgUHJvamVjdFwiLFxuXHRkZXNjcmlwdGlvbjogXCJtaXNjZWxsYW5lb3VzIHRhc2tzXCIsXG59KTtcbnByb2plY3QyLmFkZFRhc2t0b1Byb2plY3QocHJvamVjdDJ0YXNrMSwgcHJvamVjdDJ0YXNrMiwgcHJvamVjdDJ0YXNrMyk7XG5cbmNvbnN0IHByb2plY3QzdGFzazEgPSBjcmVhdGVUYXNrKHtcblx0dGl0bGU6IFwiUmVhZCAnT2N0b2JlcicgQm9va1wiLFxuXHRkZXNjcmlwdGlvbjogXCJyZWFkIGF0IGxlYXN0IDQwIHBhZ2VzIHRvZGF5XCIsXG5cdGR1ZURhdGU6IFwiMjAyMi0wOC0xMlwiLFxuXHRwcmlvcml0eTogXCI1XCIsXG5cdG5vdGVzOiBcIlwiLFxufSk7XG5jb25zdCBwcm9qZWN0M3Rhc2syID0gY3JlYXRlVGFzayh7XG5cdHRpdGxlOiBcIkJ1eSByb3Nlc1wiLFxuXHRkZXNjcmlwdGlvbjogXCIyIGRvemVuIHJvc2VzIGZyb20gU2FmZXdheVwiLFxuXHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0cHJpb3JpdHk6IFwiNVwiLFxuXHRub3RlczogXCJyZWQgcm9zZXNcIixcbn0pO1xuY29uc3QgcHJvamVjdDMgPSBjcmVhdGVQcm9qZWN0KHtcblx0dGl0bGU6IFwiQSBUaGlyZCBQcm9qZWN0IGZvciB0aGUgTGlzdFwiLFxuXHRkZXNjcmlwdGlvbjpcblx0XHRcImxvbmdlciBkZXNjcmlwdGlvbiBmb3IgYSBtb3JlIGNvbXBsaWNhdGVkIHRhc2sgcHJvamVjdCBicmVha2Rvd25cIixcbn0pO1xucHJvamVjdDMuYWRkVGFza3RvUHJvamVjdChwcm9qZWN0M3Rhc2sxLCBwcm9qZWN0M3Rhc2syKTtcblxubGV0IHByb2plY3REYXRhID0gW107XG5wcm9qZWN0RGF0YS5wdXNoKHByb2plY3QxLCBwcm9qZWN0MiwgcHJvamVjdDMpO1xuXG5leHBvcnQgeyBwcm9qZWN0RGF0YSB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdERhdGEgfSBmcm9tIFwiLi9wcm9qZWN0RGF0YVwiO1xuXG5mdW5jdGlvbiBzZWVkUHJvamVjdERhdGEoKSB7XG5cdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3REYXRhKSk7XG59XG5leHBvcnQgeyBzZWVkUHJvamVjdERhdGEgfTtcbiIsImZ1bmN0aW9uIHJlbmRlclRhc2tGb3JtKCkge1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmFkZF90YXNrX3NlY3Rpb25cIilcblx0XHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBibG9jaztcIik7XG59XG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Rm9ybSgpIHtcblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5hZGRfcHJvamVjdF9zZWN0aW9uXCIpXG5cdFx0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogYmxvY2s7XCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tGb3JtKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtdGl0bGVcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGVzY1wiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kYXRlXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LW5vdGVzXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRhc2stYWRkXCIpLm9wdGlvbnMuc2VsZWN0ZWRJbmRleCA9IDA7XG59XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Rhc2tfc2VjdGlvblwiKVxuXHRcdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhclByb2plY3RGb3JtKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtdGl0bGVcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtZGVzY1wiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdEZvcm0oKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Byb2plY3Rfc2VjdGlvblwiKVxuXHRcdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xufVxuXG5leHBvcnQge1xuXHRyZW5kZXJUYXNrRm9ybSxcblx0cmVuZGVyUHJvamVjdEZvcm0sXG5cdGNsZWFyVGFza0Zvcm0sXG5cdGNsb3NlVGFza0Zvcm0sXG5cdGNsZWFyUHJvamVjdEZvcm0sXG5cdGNsb3NlUHJvamVjdEZvcm0sXG59O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuLi8uLi9jcmVhdGVcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRQcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9zdGF0ZVwiO1xuaW1wb3J0IHsgY2xlYXJQcm9qZWN0Rm9ybSwgY2xvc2VQcm9qZWN0Rm9ybSB9IGZyb20gXCIuLi8uLi9mb3JtXCI7XG5pbXBvcnQgeyByZW5kZXJBbGxQcm9qZWN0c1BhZ2UgfSBmcm9tIFwiLi4vcmVuZGVyUGFnZXNcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RUYXNrcyB9IGZyb20gXCIuLi9wYWdlcy9wcm9qZWN0VGFza3NcIjtcblxuY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RTdWJtaXQoKSB7XG5cdC8vdmFsaWRhdGlvblxuXHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwLXRpdGxlXCIpLnZhbHVlID09PSBcIlwiKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlLWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRyZXR1cm47XG5cdH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwLXRpdGxlXCIpLnZhbHVlICE9PSBcIlwiKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlLWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9XG5cblx0Ly9wcm9qZWN0IGZhY3Rvcnlcblx0Y29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3Qoe1xuXHRcdHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtdGl0bGVcIikudmFsdWUsXG5cdFx0ZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcC1kZXNjXCIpLnZhbHVlLFxuXHR9KTtcblx0c2F2ZWRQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXHQvLyBzZXRDdXJyZW50UHJvamVjdHMoc2F2ZWRQcm9qZWN0cyk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoc2F2ZWRQcm9qZWN0cykpO1xuXHRjbG9zZVByb2plY3RGb3JtKCk7XG5cdGxldCBuZXdJbmRleCA9IHNhdmVkUHJvamVjdHMubGVuZ3RoIC0gMTtcblx0cmVuZGVyUHJvamVjdFRhc2tzKG5ld0luZGV4KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWRkUHJvamVjdEZvcm0oKSB7XG5cdC8vZm9ybSBjb250ZW50XG5cdGNvbnN0IGZvcm1UaXRsZSA9IGRvbUNyZWF0ZShcImgyXCIsIFtcImZvcm1fdGl0bGVcIl0pO1xuXHRmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBuZXcgcHJvamVjdFwiO1xuXHRjb25zdCBmb3JtU3VidGl0bGUgPSBkb21DcmVhdGUoXCJoMlwiLCBbXCJmb3JtX3N1YnRpdGxlXCJdKTtcblx0Zm9ybVN1YnRpdGxlLnRleHRDb250ZW50ID0gXCIqIHJlcXVpcmVkXCI7XG5cdGNvbnN0IGNsb3NlQnRuID0gZG9tQ3JlYXRlKFwic3BhblwiLCBbXCJtYXRlcmlhbC1pY29uc1wiLCBcImNsb3NlLWZvcm1cIl0sIHtcblx0XHRpZDogXCJjbG9zZS1wcm9qZWN0LWZvcm1cIixcblx0fSk7XG5cdGNsb3NlQnRuLnRleHRDb250ZW50ID0gXCIgWCBcIjtcblx0Y2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUHJvamVjdEZvcm0pO1xuXHQvL3RpdGxlXG5cdGNvbnN0IHRpdGxlTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJwLXRpdGxlXCIgfSk7XG5cdHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlICpcIjtcblx0Y29uc3QgdGl0bGVJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtcImZvcm0tY29udHJvbFwiXSwge1xuXHRcdGlkOiBcInAtdGl0bGVcIixcblx0XHR0eXBlOiBcInRleHRcIixcblx0XHRuYW1lOiBcInAtdGl0bGVcIixcblx0XHRwbGFjZWhvbGRlcjogXCJUaXRsZVwiLFxuXHR9KTtcblx0Y29uc3QgdGl0bGVFcnJNc2cgPSBkb21DcmVhdGUoXCJzbWFsbFwiLCBbXCJlcnItbXNnXCJdLCB7XG5cdFx0aWQ6IFwicHJvamVjdC10aXRsZS1lcnItbXNnXCIsXG5cdH0pO1xuXHR0aXRsZUVyck1zZy50ZXh0Q29udGVudCA9IFwiICogVGl0bGUgaXMgcmVxdWlyZWRcIjtcblx0dGl0bGVJbnB1dC5hcHBlbmRDaGlsZCh0aXRsZUVyck1zZyk7XG5cdHRpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cdC8vZGVzY3JpcHRpb25cblx0Y29uc3QgZGVzY0xhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwicC1kZXNjXCIgfSk7XG5cdGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblx0Y29uc3QgZGVzY0lucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwicC1kZXNjXCIsXG5cdFx0dHlwZTogXCJ0ZXh0YXJlYVwiLFxuXHRcdG5hbWU6IFwicC1kZXNjXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiRGVzY3JpcHRpb25cIixcblx0fSk7XG5cdGRlc2NMYWJlbC5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXHQvL2FkZC9jbGVhciBidG5zXG5cdGNvbnN0IHByb2plY3RGb3JtQnRucyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJuZXctcHJvamVjdC1idXR0b25zXCJdKTtcblx0Y29uc3QgYWRkQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImJ0blwiXSwge1xuXHRcdGlkOiBcImFkZC1wcm9qZWN0LWJ0blwiLFxuXHR9KTtcblx0YWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblx0YWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0U3VibWl0KTtcblx0Y29uc3QgY2xlYXJCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW1wiYnRuXCJdLCB7XG5cdFx0aWQ6IFwicHJvamVjdC1jbGVhclwiLFxuXHR9KTtcblx0Y2xlYXJCdG4udGV4dENvbnRlbnQgPSBcIkNsZWFyIGZpZWxkc1wiO1xuXHRjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJQcm9qZWN0Rm9ybSk7XG5cdHByb2plY3RGb3JtQnRucy5hcHBlbmQoYWRkQnRuLCBjbGVhckJ0bik7XG5cdC8vZm9ybSBjb250YWluZXJcblx0Y29uc3QgZm9ybUNvbnRhaW5lciA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJmb3JtLWNvbnRhaW5lclwiXSwge1xuXHRcdGlkOiBcIm5ldy1wcm9qZWN0LWZvcm1cIixcblx0fSk7XG5cdGZvcm1Db250YWluZXIuYXBwZW5kKFxuXHRcdGZvcm1UaXRsZSxcblx0XHRmb3JtU3VidGl0bGUsXG5cdFx0Y2xvc2VCdG4sXG5cdFx0dGl0bGVMYWJlbCxcblx0XHRkZXNjTGFiZWwsXG5cdFx0cHJvamVjdEZvcm1CdG5zXG5cdCk7XG5cdC8vd3JhcHBlclxuXHRjb25zdCBhZGRQcm9qZWN0U2VjdGlvbiA9IGRvbUNyZWF0ZShcInNlY3Rpb25cIiwgW1wiYWRkX3Byb2plY3Rfc2VjdGlvblwiXSk7XG5cdGFkZFByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXHRyZXR1cm4gYWRkUHJvamVjdFNlY3Rpb247XG59XG5cbmV4cG9ydCB7IGFkZFByb2plY3RTdWJtaXQsIHJlbmRlckFkZFByb2plY3RGb3JtIH07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vLi4vRE9NXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4uLy4uL2NyZWF0ZVwiO1xuaW1wb3J0IHsgY2xvc2VUYXNrRm9ybSwgY2xlYXJUYXNrRm9ybSB9IGZyb20gXCIuLi8uLi9mb3JtXCI7XG5pbXBvcnQgeyByZW5kZXJEYXNoYm9hcmQgfSBmcm9tIFwiLi4vcGFnZXMvZGFzaGJvYXJkXCI7XG5cbmNvbnN0IHNhdmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXG5mdW5jdGlvbiBhZGRUYXNrU3VibWl0KCkge1xuXHQvL3ZhbGlkYXRpb25cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC10aXRsZVwiKS52YWx1ZSA9PT0gXCJcIikge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZS1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0cmV0dXJuO1xuXHR9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC10aXRsZVwiKS52YWx1ZSAhPT0gXCJcIikge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZS1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fVxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpLnZhbHVlID09PSBcIlwiKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRyZXR1cm47XG5cdH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpLnZhbHVlICE9PSBcIlwiKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9XG5cdGNvbnN0IHByb2plY3RBc3NvY2lhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10YXNrLWFkZFwiKTtcblx0aWYgKHByb2plY3RBc3NvY2lhdGlvbi52YWx1ZSA9PT0gXCJudWxsXCIpIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJvamVjdC1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0cmV0dXJuO1xuXHR9IGVsc2UgaWYgKHByb2plY3RBc3NvY2lhdGlvbi52YWx1ZSAhPT0gXCJcIikge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcm9qZWN0LWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9XG5cblx0Ly90YXNrIGZhY3Rvcnlcblx0Y29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2soe1xuXHRcdHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtdGl0bGVcIikudmFsdWUsXG5cdFx0ZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kZXNjXCIpLnZhbHVlLFxuXHRcdGR1ZURhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kYXRlXCIpLnZhbHVlLFxuXHRcdHByaW9yaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtcHJpb3JpdHlcIikudmFsdWUsXG5cdFx0bm90ZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1ub3Rlc1wiKS52YWx1ZSxcblx0fSk7XG5cdGZvciAoY29uc3QgcHJvamVjdCBpbiBzYXZlZFByb2plY3RzKSB7XG5cdFx0Y29uc3QgdGl0bGUgPSBzYXZlZFByb2plY3RzW3Byb2plY3RdLnRpdGxlO1xuXG5cdFx0Ly9jdXJyZW50bHkgbWF0Y2hpbmcgZHJvcGRvd24gcHJvamVjdCB0aXRsZXMgdG8gdGhlIHNhdmVkUHJvamVjdHMgcHJvamVjdCB0aXRsZXNcblx0XHQvL1RPRE8gLSBpbXBsZW1lbnQgYW4gSUQgc3lzdGVtIHNvIGR1cGxpY2F0ZSBuYW1lcyBjYW4gYmUgdXNlZFxuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGFzay1hZGRcIikudmFsdWUgPT09IHRpdGxlKSB7XG5cdFx0XHRzYXZlZFByb2plY3RzW3Byb2plY3RdLnRhc2tzLnB1c2gobmV3VGFzayk7XG5cdFx0XHRjb25zb2xlLmxvZyhzYXZlZFByb2plY3RzW3Byb2plY3RdLnRhc2tzKTtcblx0XHR9XG5cdH1cblx0Ly8gc2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoc2F2ZWRQcm9qZWN0cykpO1xuXHRyZW5kZXJEYXNoYm9hcmQoKTtcblx0Y2xvc2VUYXNrRm9ybSgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBZGRUYXNrRm9ybSgpIHtcblx0Ly9mb3JtIGNvbnRlbnRcblx0Y29uc3QgZm9ybVRpdGxlID0gZG9tQ3JlYXRlKFwiaDJcIiwgW1wiZm9ybV90aXRsZVwiXSk7XG5cdGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIG5ldyB0YXNrXCI7XG5cdGNvbnN0IGZvcm1TdWJ0aXRsZSA9IGRvbUNyZWF0ZShcImgyXCIsIFtcImZvcm1fc3VidGl0bGVcIl0pO1xuXHRmb3JtU3VidGl0bGUudGV4dENvbnRlbnQgPSBcIiogcmVxdWlyZWRcIjtcblx0Y29uc3QgY2xvc2VCdG4gPSBkb21DcmVhdGUoXCJzcGFuXCIsIFtcIm1hdGVyaWFsLWljb25zXCIsIFwiY2xvc2UtZm9ybVwiXSwge1xuXHRcdGlkOiBcImNsb3NlLXRhc2stZm9ybVwiLFxuXHR9KTtcblx0Y2xvc2VCdG4udGV4dENvbnRlbnQgPSBcIiBYIFwiO1xuXHRjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUYXNrRm9ybSk7XG5cdC8vdGl0bGVcblx0Y29uc3QgdGl0bGVMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHsgZm9yOiBcInQtdGl0bGVcIiB9KTtcblx0dGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGUgKlwiO1xuXHRjb25zdCB0aXRsZUlucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC10aXRsZVwiLFxuXHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdG5hbWU6IFwidGFzay10aXRsZVwiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIlRpdGxlXCIsXG5cdH0pO1xuXHRjb25zdCB0aXRsZUVyck1zZyA9IGRvbUNyZWF0ZShcInNtYWxsXCIsIFtcImVyci1tc2dcIl0sIHtcblx0XHRpZDogXCJ0YXNrLXRpdGxlLWVyci1tc2dcIixcblx0fSk7XG5cdHRpdGxlRXJyTXNnLnRleHRDb250ZW50ID0gXCIgKiBUYXNrIHRpdGxlIGlzIHJlcXVpcmVkXCI7XG5cdHRpdGxlTGFiZWwuYXBwZW5kKHRpdGxlSW5wdXQsIHRpdGxlRXJyTXNnKTtcblx0Ly9kZXNjcmlwdGlvblxuXHRjb25zdCBkZXNjTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJ0LWRlc2NcIiB9KTtcblx0ZGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXHRjb25zdCBkZXNjSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LWRlc2NcIixcblx0XHR0eXBlOiBcInRleHRhcmVhXCIsXG5cdFx0bmFtZTogXCJ0LWRlc2NcIixcblx0XHRwbGFjZWhvbGRlcjogXCJEZXNjcmlwdGlvblwiLFxuXHR9KTtcblx0ZGVzY0xhYmVsLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG5cdC8vZGF0ZVxuXHRjb25zdCBkYXRlTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJ0LWRhdGVcIiB9KTtcblx0ZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuXHRjb25zdCBkYXRlSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LWRhdGVcIixcblx0XHR0eXBlOiBcImRhdGVcIixcblx0XHRuYW1lOiBcInQtZGF0ZVwiLFxuXHR9KTtcblx0ZGF0ZUxhYmVsLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cdC8vcHJpb3JpdHlcblx0Y29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHsgZm9yOiBcInQtcHJpb3JpdHlcIiB9KTtcblx0cHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHkgKDUgaXMgaGlnaGVzdCkgKlwiO1xuXHRjb25zdCBwcmlvcml0eUlucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC1wcmlvcml0eVwiLFxuXHRcdHR5cGU6IFwibnVtYmVyXCIsXG5cdFx0bmFtZTogXCJ0LXByaW9yaXR5XCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiM1wiLFxuXHRcdG1pbjogXCIxXCIsXG5cdFx0bWF4OiBcIjVcIixcblx0fSk7XG5cdGNvbnN0IHByaW9yaXR5RXJyTXNnID0gZG9tQ3JlYXRlKFwic21hbGxcIiwgW1wiZXJyLW1zZ1wiXSwge1xuXHRcdGlkOiBcInRhc2stcHJpb3JpdHktZXJyLW1zZ1wiLFxuXHR9KTtcblx0cHJpb3JpdHlFcnJNc2cudGV4dENvbnRlbnQgPSBcIiAqIFByaW9yaXR5IGJldHdlZW4gMS01IGlzIHJlcXVpcmVkXCI7XG5cdHByaW9yaXR5TGFiZWwuYXBwZW5kKHByaW9yaXR5SW5wdXQsIHByaW9yaXR5RXJyTXNnKTtcblx0Ly9ub3Rlc1xuXHRjb25zdCBub3Rlc0xhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwidC1ub3Rlc1wiIH0pO1xuXHRub3Rlc0xhYmVsLnRleHRDb250ZW50ID0gXCJOb3Rlc1wiO1xuXHRjb25zdCBub3Rlc0lucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC1ub3Rlc1wiLFxuXHRcdHR5cGU6IFwidGV4dGFyZWFcIixcblx0XHRuYW1lOiBcInQtbm90ZXNcIixcblx0XHRwbGFjZWhvbGRlcjogXCJOb3Rlc1wiLFxuXHR9KTtcblx0bm90ZXNMYWJlbC5hcHBlbmRDaGlsZChub3Rlc0lucHV0KTtcblx0Ly9wcm9qZWN0IGxpc3Rcblx0Y29uc3QgcHJvamVjdExpc3RMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHtcblx0XHRmb3I6IFwicHJvamVjdC10YXNrLWFkZFwiLFxuXHR9KTtcblx0cHJvamVjdExpc3RMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIHRvIEV4aXN0aW5nIFByb2plY3RcIjtcblx0Y29uc3QgcHJvamVjdExpc3RTZWxlY3QgPSBkb21DcmVhdGUoXCJzZWxlY3RcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwicHJvamVjdC10YXNrLWFkZFwiLFxuXHRcdG5hbWU6IFwicHJvamVjdC10YXNrLWFkZFwiLFxuXHR9KTtcblx0Y29uc3QgcHJvamVjdExpc3RPcHRpb25ERUZBVUxUID0gZG9tQ3JlYXRlKFwib3B0aW9uXCIsIFwiXCIsIHtcblx0XHR2YWx1ZTogXCJudWxsXCIsXG5cdFx0ZGlzYWJsZWQ6IFwiXCIsXG5cdFx0c2VsZWN0ZWQ6IFwiXCIsXG5cdH0pO1xuXHRwcm9qZWN0TGlzdE9wdGlvbkRFRkFVTFQudGV4dENvbnRlbnQgPSBcIi0tU2VsZWN0IGV4aXN0aW5nIHByb2plY3QtLVwiO1xuXHRwcm9qZWN0TGlzdFNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdE9wdGlvbkRFRkFVTFQpO1xuXHQvLy8vICBnZXQgbmFtZXMgb2YgYWxsIHByb2plY3RzXG5cdGNvbnN0IHRvdGFsUHJvamVjdE5hbWVzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHByb2plY3QgPSBzYXZlZFByb2plY3RzW2ldO1xuXHRcdHRvdGFsUHJvamVjdE5hbWVzLnB1c2gocHJvamVjdC50aXRsZSk7XG5cdH1cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFByb2plY3ROYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IG5hbWUgPSB0b3RhbFByb2plY3ROYW1lc1tpXTtcblx0XHRjb25zdCBwcm9qZWN0TGlzdE9wdGlvbiA9IGRvbUNyZWF0ZShcIm9wdGlvblwiLCBcIlwiLCB7XG5cdFx0XHR2YWx1ZTogbmFtZSxcblx0XHR9KTtcblx0XHRwcm9qZWN0TGlzdE9wdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XG5cdFx0cHJvamVjdExpc3RTZWxlY3QuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RPcHRpb24pO1xuXHR9XG5cdGNvbnN0IHByb2plY3RMaXN0RXJyTXNnID0gZG9tQ3JlYXRlKFwic21hbGxcIiwgW1wiZXJyLW1zZ1wiXSwge1xuXHRcdGlkOiBcInRhc2stcHJvamVjdC1lcnItbXNnXCIsXG5cdH0pO1xuXHRwcm9qZWN0TGlzdEVyck1zZy50ZXh0Q29udGVudCA9IFwiICogUHJvamVjdCBhc3NvY2lhdGlvbiBpcyByZXF1aXJlZFwiO1xuXHRwcm9qZWN0TGlzdExhYmVsLmFwcGVuZChwcm9qZWN0TGlzdFNlbGVjdCwgcHJvamVjdExpc3RFcnJNc2cpO1xuXHQvL2FkZC9jbGVhciBidG5zXG5cdGNvbnN0IHRhc2tGb3JtQnRucyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJuZXctdGFzay1idXR0b25zXCJdKTtcblx0Y29uc3QgYWRkQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImJ0blwiXSwge1xuXHRcdGlkOiBcImFkZC10YXNrLWJ0blwiLFxuXHR9KTtcblx0YWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblx0YWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrU3VibWl0KTtcblx0Y29uc3QgY2xlYXJCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW1wiYnRuXCJdLCB7XG5cdFx0aWQ6IFwidGFzay1jbGVhclwiLFxuXHR9KTtcblx0Y2xlYXJCdG4udGV4dENvbnRlbnQgPSBcIkNsZWFyIGZpZWxkc1wiO1xuXHRjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJUYXNrRm9ybSk7XG5cdHRhc2tGb3JtQnRucy5hcHBlbmQoYWRkQnRuLCBjbGVhckJ0bik7XG5cdC8vZm9ybSBjb250YWluZXJcblx0Y29uc3QgZm9ybUNvbnRhaW5lciA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJmb3JtLWNvbnRhaW5lclwiXSwge1xuXHRcdGlkOiBcIm5ldy1wcm9qZWN0LWZvcm1cIixcblx0fSk7XG5cdGZvcm1Db250YWluZXIuYXBwZW5kKFxuXHRcdGZvcm1UaXRsZSxcblx0XHRmb3JtU3VidGl0bGUsXG5cdFx0Y2xvc2VCdG4sXG5cdFx0dGl0bGVMYWJlbCxcblx0XHRkZXNjTGFiZWwsXG5cdFx0ZGF0ZUxhYmVsLFxuXHRcdHByaW9yaXR5TGFiZWwsXG5cdFx0bm90ZXNMYWJlbCxcblx0XHRwcm9qZWN0TGlzdExhYmVsLFxuXHRcdHRhc2tGb3JtQnRuc1xuXHQpO1xuXHQvL3dyYXBwZXJcblx0Y29uc3QgYWRkVGFza1NlY3Rpb24gPSBkb21DcmVhdGUoXCJzZWN0aW9uXCIsIFtcImFkZF90YXNrX3NlY3Rpb25cIl0pO1xuXHRhZGRUYXNrU2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblx0cmV0dXJuIGFkZFRhc2tTZWN0aW9uO1xufVxuXG5leHBvcnQgeyBhZGRUYXNrU3VibWl0LCByZW5kZXJBZGRUYXNrRm9ybSB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFRhc2tzIH0gZnJvbSBcIi4uL3BhZ2VzL3Byb2plY3RUYXNrc1wiO1xuaW1wb3J0IHsgcmVuZGVyRGFzaGJvYXJkUGFnZSwgcmVuZGVyQWxsUHJvamVjdHNQYWdlIH0gZnJvbSBcIi4uL3JlbmRlclBhZ2VzXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RBc2lkZUxpc3QoKSB7XG5cdGNvbnN0IHNhdmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXHRpZiAoc2F2ZWRQcm9qZWN0cy5sZW5ndGggPT09IDApIHJldHVybjtcblx0Y29uc3QgdG90YWxQcm9qZWN0TmFtZXMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzYXZlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IHNhdmVkUHJvamVjdHNbaV07XG5cdFx0dG90YWxQcm9qZWN0TmFtZXMucHVzaChwcm9qZWN0LnRpdGxlKTtcblx0fVxuXHQvLy8vZG9tIGxvZ2ljXG5cdGNvbnN0IHByb2plY3RMaXN0ID0gZG9tQ3JlYXRlKFwidWxcIiwgXCJcIiwgeyBpZDogXCJwcm9qZWN0LXBhbmVsLWxpc3RcIiB9KTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFByb2plY3ROYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IG5hbWUgPSB0b3RhbFByb2plY3ROYW1lc1tpXTtcblx0XHRjb25zdCBsaUVsID0gZG9tQ3JlYXRlKFwibGlcIiwgW1wicHJvamVjdC1saXN0LWl0ZW1cIl0sIHtcblx0XHRcdFwiZGF0YS1wcm9qZWN0LWluZGV4XCI6IGksXG5cdFx0fSk7XG5cdFx0bGlFbC50ZXh0Q29udGVudCA9IG5hbWU7XG5cdFx0bGlFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgZGFzaGJvYXJkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhc2gtYXNpZGVcIik7XG5cdFx0XHRjb25zdCBwcm9qZWN0TGlzdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3QtYXNpZGVcIik7XG5cdFx0XHRjb25zdCBhbGxQcm9qZWN0c0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtcHJvamVjdHMtYXNpZGVcIik7XG5cdFx0XHRjb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbGlzdC1pdGVtXCIpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0SXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgaXRlbSA9IHByb2plY3RJdGVtc1tpXTtcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdC1saXN0LXNlbGVjdGVkXCIpO1xuXHRcdFx0fVxuXHRcdFx0bGlFbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LXNlbGVjdGVkXCIpO1xuXG5cdFx0XHRpZiAoIXByb2plY3RMaXN0RWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXNpZGUtc2VsZWN0ZWRcIikpIHtcblx0XHRcdFx0cHJvamVjdExpc3RFbC5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRcdGRhc2hib2FyZEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdFx0YWxsUHJvamVjdHNFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHR9XG5cdFx0XHRsZXQgaW5kZXggPSBsaUVsLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiKTtcblx0XHRcdHJlbmRlclByb2plY3RUYXNrcyhpbmRleCk7XG5cdFx0fSk7XG5cdFx0cHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGlFbCk7XG5cdH1cblx0cmV0dXJuIHByb2plY3RMaXN0O1xufVxuXG5mdW5jdGlvbiByZW5kZXJBc2lkZSgpIHtcblx0Ly9EQVNIQk9BUkRcblx0Y29uc3QgZGFzaGJvYXJkRWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiYXNpZGUtaXRlbVwiLCBcImFzaWRlLXNlbGVjdGVkXCJdLCB7XG5cdFx0aWQ6IFwiZGFzaC1hc2lkZVwiLFxuXHR9KTtcblx0ZGFzaGJvYXJkRWwudGV4dENvbnRlbnQgPSBcIkRBU0hCT0FSRFwiO1xuXG5cdC8vQUxMIFBST0pFQ1RTXG5cdGNvbnN0IGFsbFByb2plY3RzRWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiYXNpZGUtaXRlbVwiXSwge1xuXHRcdGlkOiBcImFsbC1wcm9qZWN0cy1hc2lkZVwiLFxuXHR9KTtcblx0YWxsUHJvamVjdHNFbC50ZXh0Q29udGVudCA9IFwiQUxMIFBST0pFQ1RTXCI7XG5cdC8vUFJPSkVDVCBMSVNUXG5cdGNvbnN0IHByb2plY3RMaXN0QnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFwiXCIsIHtcblx0XHRpZDogXCJwcm9qZWN0LWFjY29yZGlvbi1idG5cIixcblx0fSk7XG5cdHByb2plY3RMaXN0QnRuLnRleHRDb250ZW50ID0gXCJQUk9KRUNUU1wiO1xuXG5cdGNvbnN0IHByb2plY3RQYW5lbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcInByb2plY3QtcGFuZWwtZGlzcGxheVwiIH0pO1xuXHRjb25zdCBwcm9qZWN0TGlzdFVMID0gcmVuZGVyUHJvamVjdEFzaWRlTGlzdCgpO1xuXHRwcm9qZWN0UGFuZWwuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RVTCk7XG5cdGNvbnN0IHByb2plY3RMaXN0RWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiYXNpZGUtaXRlbVwiXSwge1xuXHRcdGlkOiBcInByb2plY3QtbGlzdC1hc2lkZVwiLFxuXHR9KTtcblx0ZnVuY3Rpb24gYWNjb3JkaW9uVG9nZ2xlKCkge1xuXHRcdHByb2plY3RMaXN0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cdFx0aWYgKHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcblx0XHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdH1cblx0fVxuXHRwcm9qZWN0TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjb3JkaW9uVG9nZ2xlKTtcblx0cHJvamVjdExpc3RFbC5hcHBlbmQocHJvamVjdExpc3RCdG4sIHByb2plY3RQYW5lbCk7XG5cdC8vc2VsZWN0IHRvZ2dsZSBldmVudCBsaXN0ZW5lcnNcblx0ZGFzaGJvYXJkRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIWRhc2hib2FyZEVsLmNsYXNzTGlzdC5jb250YWlucyhcImFzaWRlLXNlbGVjdGVkXCIpKSB7XG5cdFx0XHRkYXNoYm9hcmRFbC5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRhbGxQcm9qZWN0c0VsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdHByb2plY3RMaXN0RWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdH1cblx0XHRwcm9qZWN0UGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdHJlbmRlckRhc2hib2FyZFBhZ2UoKTtcblx0fSk7XG5cdGFsbFByb2plY3RzRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIWFsbFByb2plY3RzRWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXNpZGUtc2VsZWN0ZWRcIikpIHtcblx0XHRcdGFsbFByb2plY3RzRWwuY2xhc3NMaXN0LmFkZChcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0ZGFzaGJvYXJkRWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0cHJvamVjdExpc3RFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0fVxuXHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0cmVuZGVyQWxsUHJvamVjdHNQYWdlKCk7XG5cdH0pO1xuXHQvL0ZVTEwgQVNJREUgQVBQRU5EXG5cdGNvbnN0IGFzaWRlRWwgPSBkb21DcmVhdGUoXCJhc2lkZVwiLCBcIlwiLCB7IGlkOiBcIm1haW4tYXNpZGVcIiB9KTtcblx0YXNpZGVFbC5hcHBlbmQoZGFzaGJvYXJkRWwsIGFsbFByb2plY3RzRWwsIHByb2plY3RMaXN0RWwpO1xuXHQvL2FwcGx5IG90aGVyIHN0eWxpbmcgLyBlbGVtZW50cyAvIGNsaWNrIGV2ZW50c1xuXHRyZW5kZXJQcm9qZWN0QXNpZGVMaXN0KCk7XG5cdHJldHVybiBhc2lkZUVsO1xufVxuXG5leHBvcnQgeyByZW5kZXJBc2lkZSB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IGNoZWNrTG9nbyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2NoZWNrYm94LW1hcmtlZC1jaXJjbGUucG5nXCI7XG5pbXBvcnQgYWRkSWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL3BsdXMtY2lyY2xlLW91dGxpbmUucG5nXCI7XG5pbXBvcnQgYWRkVGFza0ljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9jaGVja2JveC1tYXJrZWQtY2lyY2xlLXBsdXMtb3V0bGluZS5wbmdcIjtcbmltcG9ydCBhZGRQcm9qZWN0SWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2xpc3QtZ3JvdXAtcGx1cy5wbmdcIjtcbmltcG9ydCBnZWFySWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2NvZy1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IHsgcmVuZGVyVGFza0Zvcm0sIHJlbmRlclByb2plY3RGb3JtIH0gZnJvbSBcIi4uLy4uL2Zvcm1cIjtcbmltcG9ydCB7IHJlbmRlckRhc2hib2FyZFBhZ2UgfSBmcm9tIFwiLi4vcmVuZGVyUGFnZXNcIjtcbmltcG9ydCB7IHJlbmRlclNlYXJjaCB9IGZyb20gXCIuLi9wYWdlcy9zZWFyY2hcIjtcblxuZnVuY3Rpb24gcmVuZGVyQWRkTWVudSgpIHtcblx0Y29uc3QgYWRkSWNvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1pY29uLW1lbnVcIik7XG5cdGFkZEljb25NZW51LmNsYXNzTGlzdC50b2dnbGUoXCJpY29uLW1lbnUtdG9nZ2xlXCIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG5cdC8vLy9oZWFkZXIgTEVGVFxuXHRjb25zdCBzaXRlTG9nbyA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJmYWtlLWNsYXNzXCJdLCB7XG5cdFx0c3JjOiBjaGVja0xvZ28sXG5cdFx0YWx0OiBcImNoZWNrZWQgY2lyY2xlIGxvZ29cIixcblx0fSk7XG5cdGNvbnN0IHNpdGVUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcImhlYWRlci1zaXRlLXRpdGxlXCIgfSk7XG5cdHNpdGVUaXRsZS50ZXh0Q29udGVudCA9IFwiVE9ETyBMSVNUXCI7XG5cdC8vc2VlZCBkYXRhXG5cdGNvbnN0IHNlZWREYXRhQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFwiXCIsIHsgaWQ6IFwic2VlZC1wcm9qZWN0cy1idG5cIiB9KTtcblx0c2VlZERhdGFCdG4udGV4dENvbnRlbnQgPSBcIlNFRUQgREFUQVwiO1xuXHRjb25zdCBoZWFkZXJMZWZ0ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwiaGVhZGVyTGVmdFwiIH0pO1xuXHRoZWFkZXJMZWZ0LmFwcGVuZChzaXRlTG9nbywgc2l0ZVRpdGxlLCBzZWVkRGF0YUJ0bik7XG5cdC8vLy9oZWFkZXIgQ0VOVEVSXG5cdGNvbnN0IHNlYXJjaExhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwic2l0ZS1zZWFyY2hcIiB9KTtcblx0c2VhcmNoTGFiZWwudGV4dENvbnRlbnQgPSBcIlNlYXJjaCB0aGUgc2l0ZTogXCI7XG5cdGNvbnN0IHNlYXJjaElucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgXCJcIiwge1xuXHRcdGlkOiBcInNpdGUtc2VhcmNoXCIsXG5cdFx0dHlwZTogXCJzZWFyY2hcIixcblx0XHRuYW1lOiBcInFcIixcblx0fSk7XG5cdHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuXHRcdGxldCBjdXJyZW50VmFsID0gZS50YXJnZXQudmFsdWU7IC8vIFwibW93XCJcblx0XHRyZW5kZXJTZWFyY2goY3VycmVudFZhbCk7XG5cdFx0aWYgKGN1cnJlbnRWYWwgPT09IFwiXCIpIHJlbmRlckRhc2hib2FyZFBhZ2UoKTtcblx0fSk7XG5cdC8vIGNvbnN0IHNlYXJjaEJ0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBcIlwiKTtcblx0Ly8gc2VhcmNoQnRuLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIjtcblx0Y29uc3QgaGVhZGVyQ2VudGVyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwiaGVhZGVyQ2VudGVyXCIgfSk7XG5cdGhlYWRlckNlbnRlci5hcHBlbmQoc2VhcmNoTGFiZWwsIHNlYXJjaElucHV0KTtcblx0Ly8vL2hlYWRlciBSSUdIVFxuXHQvL2FkZCBpY29uIG1lbnVcblx0Y29uc3QgYWRkQnRuSWNvbiA9IGRvbUNyZWF0ZShcImltZ1wiLCBcIlwiLCB7XG5cdFx0aWQ6IFwiYWRkLWljb25cIixcblx0XHRzcmM6IGFkZEljb24sXG5cdFx0YWx0OiBcImFkZCBidXR0b24gcGx1cyBpY29uXCIsXG5cdH0pO1xuXHRhZGRCdG5JY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJBZGRNZW51KTtcblx0Y29uc3QgYWRkSWNvbk1lbnUgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJhZGQtaWNvbi1tZW51XCIgfSk7XG5cdGNvbnN0IGFkZFRhc2tJbWcgPSBkb21DcmVhdGUoXCJpbWdcIiwgXCJcIiwge1xuXHRcdGlkOiBcImFkZC10YXNrLWZvcm1cIixcblx0XHRzcmM6IGFkZFRhc2tJY29uLFxuXHRcdGFsdDogXCJhZGQgdGFzayBwbHVzIGljb25cIixcblx0fSk7XG5cblx0YWRkVGFza0ltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyVGFza0Zvcm0pO1xuXHRjb25zdCBhZGRQcm9qZWN0SW1nID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFwiXCIsIHtcblx0XHRpZDogXCJhZGQtcHJvamVjdC1mb3JtXCIsXG5cdFx0c3JjOiBhZGRQcm9qZWN0SWNvbixcblx0XHRhbHQ6IFwiYWRkIHByb2plY3QgcGx1cyBpY29uXCIsXG5cdH0pO1xuXHRhZGRQcm9qZWN0SW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJQcm9qZWN0Rm9ybSk7XG5cdGFkZEljb25NZW51LmFwcGVuZChhZGRUYXNrSW1nLCBhZGRQcm9qZWN0SW1nKTtcblx0Y29uc3QgYWRkQnRuRWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJhZGRCdG5cIiB9KTtcblx0YWRkQnRuRWwuYXBwZW5kKGFkZEJ0bkljb24sIGFkZEljb25NZW51KTtcblx0Ly9sb2dpblxuXHRjb25zdCBsb2dpbkVsID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwibG9naW5cIiB9KTtcblx0bG9naW5FbC50ZXh0Q29udGVudCA9IFwiTE9HSU5cIjtcblx0Ly9zZXR0aW5nc1xuXHRjb25zdCBzZXR0aW5nc0ljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgXCJcIiwge1xuXHRcdGlkOiBcInNldHRpbmdzIGdlYXIgaWNvblwiLFxuXHRcdHNyYzogZ2Vhckljb24sXG5cdFx0YWx0OiBcInNldHRpbmdzIGdlYXIgb3V0bGluZVwiLFxuXHR9KTtcblx0Y29uc3Qgc2V0dGluZ3NMaW5rID0gZG9tQ3JlYXRlKFwiYVwiLCBcIlwiLCB7XG5cdFx0aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vYWxleGdlaXMvdG9kby1saXN0XCIsXG5cdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHR9KTtcblx0c2V0dGluZ3NMaW5rLmFwcGVuZENoaWxkKHNldHRpbmdzSWNvbik7XG5cdGNvbnN0IHNldHRpbmdzRWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJzZXR0aW5nc1wiIH0pO1xuXHRzZXR0aW5nc0VsLmFwcGVuZENoaWxkKHNldHRpbmdzTGluayk7XG5cdGNvbnN0IGhlYWRlclJpZ2h0ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwiaGVhZGVyUmlnaHRcIiB9KTtcblx0aGVhZGVyUmlnaHQuYXBwZW5kKGFkZEJ0bkVsLCBsb2dpbkVsLCBzZXR0aW5nc0VsKTtcblx0Ly9GVUxMIEhFQURFUiBBUFBFTkRcblx0Y29uc3QgaGVhZGVyID0gZG9tQ3JlYXRlKFwiaGVhZGVyXCIsIFwiXCIsIHsgaWQ6IFwiaGVhZGVyXCIgfSk7XG5cdGhlYWRlci5hcHBlbmQoaGVhZGVyTGVmdCwgaGVhZGVyQ2VudGVyLCBoZWFkZXJSaWdodCk7XG5cdHJldHVybiBoZWFkZXI7XG5cdC8vIC8vQ09OVEVOVCBBUFBFTkRcblx0Ly8gY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblx0Ly8gcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5leHBvcnQgeyByZW5kZXJIZWFkZXIgfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi8uLi9ET01cIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0VGFza3MgfSBmcm9tIFwiLi4vcGFnZXMvcHJvamVjdFRhc2tzXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckRhc2hib2FyZCgpIHtcblx0Ly9nZXQgYWxsIHRhc2tzIGZyb20gYWxsIHByb2plY3RzXG5cdGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG5cdC8vIGNvbnNvbGUubG9nKHsgY3VycmVudFByb2plY3RzIH0pO1xuXG5cdGNvbnN0IHByb2plY3RUYXNrRGF0YSA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdHNbaV07XG5cdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdHByb2plY3RUaXRsZTogcHJvamVjdC50aXRsZSxcblx0XHRcdHRhc2tzOiBwcm9qZWN0LnRhc2tzLFxuXHRcdFx0aW5kZXg6IGksXG5cdFx0fTtcblx0XHRwcm9qZWN0VGFza0RhdGEucHVzaChkYXRhKTtcblx0fVxuXHQvLyBjb25zb2xlLnRhYmxlKHByb2plY3RUYXNrRGF0YSk7XG5cdC8vY2xlYXIgY3VycmVudCB0YXNrc1xuXHRjb25zdCB0YXNrQ29udGFpbmVyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwibWFpbi1jb250ZW50XCIgfSk7XG5cdHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0Ly9yZW5kZXIgY3VycmVudFRhc2tzIHRhc2tzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdFRhc2tEYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgZGF0YSA9IHByb2plY3RUYXNrRGF0YVtpXTtcblx0XHQvLyBjb25zb2xlLmxvZyh7IGRhdGEgfSk7XG5cdFx0Ly9pbm5lciB0YXNrIGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly90YXNrIGNhcmQgcmVuZGVyc1xuXHRcdGxldCB0YXNrRGF0YSA9IGRhdGEudGFza3M7XG5cdFx0Ly8gY29uc29sZS5sb2coeyB0YXNrRGF0YSB9KTsgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrRGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgdGFzayA9IHRhc2tEYXRhW2ldO1xuXHRcdFx0Y29uc29sZS5sb2coeyB0YXNrIH0pO1xuXHRcdFx0Y29uc3QgdGFza0NhcmQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1jYXJkXCJdLCB7XG5cdFx0XHRcdFwiZGF0YS10YXNrLWluZGV4XCI6IGksXG5cdFx0XHR9KTtcblx0XHRcdC8vVElUTEVcblx0XHRcdGNvbnN0IHRhc2tUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXRpdGxlLWRhc2hcIl0pO1xuXHRcdFx0dGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0XHRcdC8vUFJPSkVDVCBUSVRMRVxuXHRcdFx0Y29uc3QgcHJvamVjdFRpdGxlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInByb2plY3QtdGl0bGUtZGFzaFwiXSk7XG5cdFx0XHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBkYXRhLnByb2plY3RUaXRsZTtcblx0XHRcdHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRjb25zdCBkYXNoYm9hcmRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFzaC1hc2lkZVwiKTtcblx0XHRcdFx0Y29uc3QgcHJvamVjdExpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0LWFzaWRlXCIpO1xuXHRcdFx0XHRjb25zdCBhbGxQcm9qZWN0c0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtcHJvamVjdHMtYXNpZGVcIik7XG5cdFx0XHRcdGlmICghcHJvamVjdExpc3RFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhc2lkZS1zZWxlY3RlZFwiKSkge1xuXHRcdFx0XHRcdHByb2plY3RMaXN0RWwuY2xhc3NMaXN0LmFkZChcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0XHRcdGRhc2hib2FyZEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdFx0XHRhbGxQcm9qZWN0c0VsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmdW5jdGlvbiBhY2NvcmRpb25Ub2dnbGUoKSB7XG5cdFx0XHRcdFx0Y29uc3QgcHJvamVjdExpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0XHRcdFx0XHRcdFwicHJvamVjdC1hY2NvcmRpb24tYnRuXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGNvbnN0IHByb2plY3RQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1wYW5lbC1kaXNwbGF5XCIpO1xuXHRcdFx0XHRcdHByb2plY3RMaXN0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cdFx0XHRcdFx0aWYgKHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcblx0XHRcdFx0XHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRhY2NvcmRpb25Ub2dnbGUoKTtcblx0XHRcdFx0Y29uc3QgcHJvamVjdFBhbmVsTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1wYW5lbC1saXN0XCIpO1xuXHRcdFx0XHRwcm9qZWN0UGFuZWxMaXN0LmNoaWxkTm9kZXNbZGF0YS5pbmRleF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XHRcInByb2plY3QtbGlzdC1zZWxlY3RlZFwiXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJlbmRlclByb2plY3RUYXNrcyhkYXRhLmluZGV4KTtcblx0XHRcdH0pO1xuXHRcdFx0Ly9ERVNDUklQVElPTlxuXHRcdFx0Y29uc3QgdGFza0Rlc2MgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1kZXNjcmlwdGlvblwiXSk7XG5cdFx0XHR0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cdFx0XHQvL0RVRSBEQVRFXG5cdFx0XHRjb25zdCB0YXNrRGF0ZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRhdGVcIl0pO1xuXHRcdFx0dGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cdFx0XHQvL1BSSU9SSVRZXG5cdFx0XHRjb25zdCB0YXNrUHJpb3JpdHkgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1wcmlvcml0eVwiXSk7XG5cdFx0XHR0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXHRcdFx0Ly9OT1RFU1xuXHRcdFx0Y29uc3QgdGFza05vdGVzID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stbm90ZXNcIl0pO1xuXHRcdFx0dGFza05vdGVzLnRleHRDb250ZW50ID0gdGFzay5ub3Rlcztcblx0XHRcdC8vREVMRVRFIElDT05cblx0XHRcdGNvbnN0IHRhc2tEZWxldGVJY29uID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFtcInRhc2stZGVsZXRlXCJdLCB7XG5cdFx0XHRcdHNyYzogZGVsZXRlSWNvbixcblx0XHRcdFx0YWx0OiBcInRyYXNoIGNhbiBkZWxldGUgaWNvblwiLFxuXHRcdFx0fSk7XG5cdFx0XHR0YXNrRGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSh0YXNrQ2FyZCk7XG5cdFx0XHRcdGxldCBpbmRleCA9XG5cdFx0XHRcdFx0dGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staW5kZXhcIik7XG5cdFx0XHRcdGN1cnJlbnRUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHQvLyBzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0XHRcdFx0Ly8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza3MpKTtcblx0XHRcdFx0cmVuZGVyRGFzaGJvYXJkKCk7XG5cdFx0XHR9KTtcblx0XHRcdC8vQVBQRU5EIEVMRU1FTlRTXG5cdFx0XHR0YXNrQ2FyZC5hcHBlbmQoXG5cdFx0XHRcdHRhc2tUaXRsZSxcblx0XHRcdFx0cHJvamVjdFRpdGxlLFxuXHRcdFx0XHR0YXNrRGVzYyxcblx0XHRcdFx0dGFza0RhdGUsXG5cdFx0XHRcdHRhc2tQcmlvcml0eSxcblx0XHRcdFx0dGFza05vdGVzLFxuXHRcdFx0XHR0YXNrRGVsZXRlSWNvblxuXHRcdFx0KTtcblx0XHRcdC8vIHRhc2tDYXJkLmluc2VydEJlZm9yZShwcm9qZWN0VGl0bGUsIHRhc2tDYXJkLmNoaWxkTm9kZXNbMV0pO1xuXHRcdFx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0YXNrQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyByZW5kZXJEYXNoYm9hcmQgfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi8uLi9ET01cIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RUYXNrcyhpbmRleCkge1xuXHQvL2dldCBhbGwgdGFza3MgZnJvbSBhbGwgcHJvamVjdHNcblx0Y29uc3QgY3VycmVudFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcblx0Y29uc3QgcmVuZGVyUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c1tpbmRleF07XG5cdGNvbnN0IGN1cnJlbnRUYXNrcyA9IHJlbmRlclByb2plY3QudGFza3MgfHwgW107XG5cdC8vdXBkYXRlIG1haW4gaGVhZGVyXG5cdGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4taGVhZGVyXCIpO1xuXHRtYWluSGVhZGVyLnRleHRDb250ZW50ID0gcmVuZGVyUHJvamVjdC50aXRsZS50b1VwcGVyQ2FzZSgpO1xuXHQvL2NsZWFyIGN1cnJlbnQgdGFza3Ncblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuXHR0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cdC8vcmVuZGVyIGN1cnJlbnRUYXNrcyB0YXNrc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRUYXNrcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHRhc2sgPSBjdXJyZW50VGFza3NbaV07XG5cdFx0Y29uc3QgdGFza0NhcmQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1jYXJkXCJdLCB7IFwiZGF0YS1pbmRleFwiOiBpIH0pO1xuXHRcdC8vaW5uZXIgdGFzayBjYXJkIGRpdiBpdGVtc1xuXHRcdC8vVElUTEVcblx0XHRjb25zdCB0YXNrVGl0bGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay10aXRsZVwiXSk7XG5cdFx0dGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0XHQvL0RFU0NSSVBUSU9OXG5cdFx0Y29uc3QgdGFza0Rlc2MgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1kZXNjcmlwdGlvblwiXSk7XG5cdFx0dGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXHRcdC8vRFVFIERBVEVcblx0XHRjb25zdCB0YXNrRGF0ZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRhdGVcIl0pO1xuXHRcdHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXHRcdC8vUFJJT1JJVFlcblx0XHRjb25zdCB0YXNrUHJpb3JpdHkgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1wcmlvcml0eVwiXSk7XG5cdFx0dGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblx0XHQvL05PVEVTXG5cdFx0Y29uc3QgdGFza05vdGVzID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stbm90ZXNcIl0pO1xuXHRcdHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9IHRhc2subm90ZXM7XG5cdFx0Ly9ERUxFVEUgSUNPTlxuXHRcdGNvbnN0IHRhc2tEZWxldGVJY29uID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFtcInRhc2stZGVsZXRlXCJdLCB7XG5cdFx0XHRzcmM6IGRlbGV0ZUljb24sXG5cdFx0XHRhbHQ6IFwidHJhc2ggY2FuIGRlbGV0ZSBpY29uXCIsXG5cdFx0fSk7XG5cdFx0dGFza0RlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHRhc2tEZWxldGVJY29uLnBhcmVudEVsZW1lbnQucmVtb3ZlKHRhc2tDYXJkKTtcblx0XHRcdGxldCBpbmRleCA9IHRhc2tEZWxldGVJY29uLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKTtcblx0XHRcdGN1cnJlbnRUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0Ly8gc2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrcykpO1xuXHRcdFx0cmVuZGVyUHJvamVjdFRhc2tzKGluZGV4KTtcblx0XHR9KTtcblx0XHQvL0FQUEVORCBFTEVNRU5UU1xuXHRcdHRhc2tDYXJkLmFwcGVuZChcblx0XHRcdHRhc2tUaXRsZSxcblx0XHRcdHRhc2tEZXNjLFxuXHRcdFx0dGFza0RhdGUsXG5cdFx0XHR0YXNrUHJpb3JpdHksXG5cdFx0XHR0YXNrTm90ZXMsXG5cdFx0XHR0YXNrRGVsZXRlSWNvblxuXHRcdCk7XG5cdFx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG5cdH1cbn1cblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdFRhc2tzIH07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vLi4vRE9NXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL3RyYXNoLWNhbi1vdXRsaW5lLnBuZ1wiO1xuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0c0FsbCgpIHtcblx0Ly9nZXQgYWxsIHByb2plY3RzXG5cdGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG5cdC8vY2xlYXIgY3VycmVudCBjb250ZW50XG5cdGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJtYWluLWNvbnRlbnRcIiB9KTtcblx0Ly8gcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXHQvL3JlbmRlciBjdXJyZW50UHJvamVjdHMgcHJvamVjdHNcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3RzW2ldO1xuXHRcdGNvbnN0IHByb2plY3RDYXJkID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInByb2plY3QtY2FyZFwiXSwgeyBcImRhdGEtaW5kZXhcIjogaSB9KTtcblx0XHQvL2lubmVyIHByb2plY3QgY2FyZCBkaXYgaXRlbXNcblx0XHQvL1RJVExFXG5cdFx0Y29uc3QgcHJvamVjdFRpdGxlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInByb2plY3QtdGl0bGVcIl0pO1xuXHRcdHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cdFx0Ly9ERVNDUklQVElPTlxuXHRcdGNvbnN0IHByb2plY3REZXNjID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInByb2plY3QtZGVzY3JpcHRpb25cIl0pO1xuXHRcdHByb2plY3REZXNjLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcblx0XHQvL1RBU0tTXG5cdFx0Y29uc3QgcHJvamVjdFRhc2tzTGlzdCA9IGRvbUNyZWF0ZShcInVsXCIsIFtcInByb2plY3QtdGFza3MtbGlzdFwiXSk7XG5cdFx0bGV0IHRhc2tBcnJheSA9IHByb2plY3QudGFza3M7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHRhc2sgPSB0YXNrQXJyYXlbaV07XG5cdFx0XHRjb25zdCBsaSA9IGRvbUNyZWF0ZShcImxpXCIsIFtcInByb2plY3QtdGFzay1saXN0LWl0ZW1cIl0pO1xuXHRcdFx0bGkudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRcdFx0cHJvamVjdFRhc2tzTGlzdC5hcHBlbmRDaGlsZChsaSk7XG5cdFx0fVxuXHRcdGNvbnN0IHByb2plY3RUYXNrcyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJwcm9qZWN0LXRhc2tzXCJdKTtcblx0XHRwcm9qZWN0VGFza3MuYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tzTGlzdCk7XG5cdFx0Ly9ERUxFVEUgSUNPTlxuXHRcdGNvbnN0IHByb2plY3REZWxldGVJY29uID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFtcInByb2plY3QtZGVsZXRlXCJdLCB7XG5cdFx0XHRzcmM6IGRlbGV0ZUljb24sXG5cdFx0XHRhbHQ6IFwidHJhc2ggY2FuIGRlbGV0ZSBpY29uXCIsXG5cdFx0fSk7XG5cdFx0cHJvamVjdERlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHByb2plY3REZWxldGVJY29uLnBhcmVudEVsZW1lbnQucmVtb3ZlKHByb2plY3RDYXJkKTtcblx0XHRcdGxldCBpbmRleCA9IHByb2plY3REZWxldGVJY29uLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKTtcblx0XHRcdGN1cnJlbnRQcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0Ly8gc2V0Q3VycmVudFByb2plY3RzKGN1cnJlbnRQcm9qZWN0cyk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0cykpO1xuXHRcdFx0cmVuZGVyUHJvamVjdHNBbGwoKTtcblx0XHR9KTtcblx0XHQvL0FQUEVORCBFTEVNRU5UU1xuXHRcdHByb2plY3RDYXJkLmFwcGVuZChcblx0XHRcdHByb2plY3RUaXRsZSxcblx0XHRcdHByb2plY3REZXNjLFxuXHRcdFx0cHJvamVjdFRhc2tzLFxuXHRcdFx0cHJvamVjdERlbGV0ZUljb25cblx0XHQpO1xuXHRcdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuXHR9XG5cdHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0c0FsbCB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcblxuZnVuY3Rpb24gcmVuZGVyU2VhcmNoKHNlYXJjaCkge1xuXHRpZiAoc2VhcmNoID09PSBcIlwiKSByZXR1cm47XG5cdC8vZ2V0IGFsbCB0YXNrcyBmcm9tIGFsbCBwcm9qZWN0c1xuXHRjb25zdCBjdXJyZW50UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuXHRjb25zdCBjdXJyZW50VGFza3MgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3RzW2ldO1xuXHRcdGN1cnJlbnRUYXNrcy5wdXNoKC4uLnByb2plY3QudGFza3MpO1xuXHR9XG5cdGNvbnN0IGZpbHRlclRhc2tzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdGFzayA9IGN1cnJlbnRUYXNrc1tpXTtcblx0XHRsZXQgbG93ZXJUaXRsZSA9IHRhc2sudGl0bGUudG9Mb3dlckNhc2UoKTtcblx0XHRsZXQgbG93ZXJTZWFyY2ggPSBzZWFyY2gudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAobG93ZXJUaXRsZS5pbmNsdWRlcyhsb3dlclNlYXJjaCkpIHtcblx0XHRcdGZpbHRlclRhc2tzLnB1c2godGFzayk7XG5cdFx0fVxuXHR9XG5cdC8vdXBkYXRlIG1haW4gaGVhZGVyXG5cdGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4taGVhZGVyXCIpO1xuXHRtYWluSGVhZGVyLnRleHRDb250ZW50ID0gXCJTRUFSQ0ggUkVTVUxUU1wiO1xuXHQvL2NsZWFyIGN1cnJlbnQgdGFza3Ncblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuXHR0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cdC8vbm8gc2VhcmNoIHJlc3VsdHMgYmFja3VwXG5cdGlmIChmaWx0ZXJUYXNrcy5sZW5ndGggPT09IDApIHtcblx0XHR0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJObyBzZWFyY2ggcmVzdWx0c1wiO1xuXHR9XG5cdC8vcmVuZGVyIGZpbHRlclRhc2tzIHRhc2tzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyVGFza3MubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCB0YXNrID0gZmlsdGVyVGFza3NbaV07XG5cdFx0Y29uc3QgdGFza0NhcmQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1jYXJkXCJdLCB7IFwiZGF0YS10YXNrLWluZGV4XCI6IGkgfSk7XG5cdFx0Ly9pbm5lciB0YXNrIGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly9USVRMRVxuXHRcdGNvbnN0IHRhc2tUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXRpdGxlXCJdKTtcblx0XHR0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRcdC8vREVTQ1JJUFRJT05cblx0XHRjb25zdCB0YXNrRGVzYyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRlc2NyaXB0aW9uXCJdKTtcblx0XHR0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cdFx0Ly9EVUUgREFURVxuXHRcdGNvbnN0IHRhc2tEYXRlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGF0ZVwiXSk7XG5cdFx0dGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cdFx0Ly9QUklPUklUWVxuXHRcdGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXByaW9yaXR5XCJdKTtcblx0XHR0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXHRcdC8vTk9URVNcblx0XHRjb25zdCB0YXNrTm90ZXMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1ub3Rlc1wiXSk7XG5cdFx0dGFza05vdGVzLnRleHRDb250ZW50ID0gdGFzay5ub3Rlcztcblx0XHQvL0RFTEVURSBJQ09OXG5cdFx0Y29uc3QgdGFza0RlbGV0ZUljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgW1widGFzay1kZWxldGVcIl0sIHtcblx0XHRcdHNyYzogZGVsZXRlSWNvbixcblx0XHRcdGFsdDogXCJ0cmFzaCBjYW4gZGVsZXRlIGljb25cIixcblx0XHR9KTtcblx0XHR0YXNrRGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0dGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUodGFza0NhcmQpO1xuXHRcdFx0bGV0IGluZGV4ID0gdGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staW5kZXhcIik7XG5cdFx0XHRmaWx0ZXJUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0Ly8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaWx0ZXJUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShmaWx0ZXJUYXNrcykpO1xuXHRcdFx0cmVuZGVyU2VhcmNoKHNlYXJjaCk7XG5cdFx0fSk7XG5cdFx0Ly9BUFBFTkQgRUxFTUVOVFNcblx0XHR0YXNrQ2FyZC5hcHBlbmQoXG5cdFx0XHR0YXNrVGl0bGUsXG5cdFx0XHR0YXNrRGVzYyxcblx0XHRcdHRhc2tEYXRlLFxuXHRcdFx0dGFza1ByaW9yaXR5LFxuXHRcdFx0dGFza05vdGVzLFxuXHRcdFx0dGFza0RlbGV0ZUljb25cblx0XHQpO1xuXHRcdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXHR9XG5cdC8vIHJldHVybiB0YXNrQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyByZW5kZXJTZWFyY2ggfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi9ET01cIjtcbmltcG9ydCB7IHJlbmRlckRhc2hib2FyZCB9IGZyb20gXCIuL3BhZ2VzL2Rhc2hib2FyZFwiO1xuaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCB7IHJlbmRlckFzaWRlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hc2lkZVwiO1xuaW1wb3J0IHsgcmVuZGVyQWRkVGFza0Zvcm0gfSBmcm9tIFwiLi9jb21wb25lbnRzL2FkZFRhc2tGb3JtXCI7XG5pbXBvcnQgeyByZW5kZXJBZGRQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2NvbXBvbmVudHMvYWRkUHJvamVjdEZvcm1cIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzQWxsIH0gZnJvbSBcIi4vcGFnZXMvcHJvamVjdHNBbGxcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnN0IGhlYWRlciA9IHJlbmRlckhlYWRlcigpO1xuY29uc3QgYXNpZGUgPSByZW5kZXJBc2lkZSgpO1xuY29uc3QgbWFpblNlY3Rpb24gPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJtYWluLXNlY3Rpb25cIiB9KTtcbmNvbnN0IG1haW5IZWFkZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJtYWluLWhlYWRlclwiIH0pO1xubWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG5jb25zdCBtYWluRGl2ID0gZG9tQ3JlYXRlKFwibWFpblwiLCBcIlwiLCB7IGlkOiBcIm1haW5cIiB9KTtcbm1haW5EaXYuYXBwZW5kKGFzaWRlLCBtYWluU2VjdGlvbik7XG5jb25zdCB0YXNrRm9ybSA9IHJlbmRlckFkZFRhc2tGb3JtKCk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IHJlbmRlckFkZFByb2plY3RGb3JtKCk7XG5jb250ZW50LmFwcGVuZChoZWFkZXIsIG1haW5EaXYsIHRhc2tGb3JtLCBwcm9qZWN0Rm9ybSk7XG5cbmZ1bmN0aW9uIHJlcGxhY2VIZWxwZXIobmV3U2liKSB7XG5cdGlmIChtYWluSGVhZGVyLm5leHRTaWJsaW5nKSB7XG5cdFx0Y29uc3QgbmV4dFNpYiA9IG1haW5IZWFkZXIubmV4dFNpYmxpbmc7XG5cdFx0bWFpblNlY3Rpb24ucmVwbGFjZUNoaWxkKG5ld1NpYiwgbmV4dFNpYik7XG5cdH0gZWxzZSB7XG5cdFx0bWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobmV3U2liKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW5kZXJEYXNoYm9hcmRQYWdlKCkge1xuXHRtYWluSGVhZGVyLnRleHRDb250ZW50ID0gXCJEQVNIQk9BUkRcIjtcblx0Y29uc3QgZGFzaGJvYXJkID0gcmVuZGVyRGFzaGJvYXJkKCk7XG5cdHJlcGxhY2VIZWxwZXIoZGFzaGJvYXJkKTtcbn1cbmZ1bmN0aW9uIHJlbmRlckFsbFByb2plY3RzUGFnZSgpIHtcblx0bWFpbkhlYWRlci50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFNcIjtcblx0Y29uc3QgYWxsUHJvamVjdHMgPSByZW5kZXJQcm9qZWN0c0FsbCgpO1xuXHRyZXBsYWNlSGVscGVyKGFsbFByb2plY3RzKTtcbn1cbi8vIGZ1bmN0aW9uIHJlbmRlclNlYXJjaFBhZ2UoKSB7XG4vLyBcdG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBcIlNFQVJDSCBSRVNVTFRTXCI7XG4vLyBcdC8vIGNvbnN0IGFsbFByb2plY3RzID0gcmVuZGVyUHJvamVjdHNBbGwoKTtcbi8vIFx0Ly8gcmVwbGFjZUhlbHBlcihhbGxQcm9qZWN0cyk7XG4vLyB9XG5cbmV4cG9ydCB7IHJlbmRlckRhc2hib2FyZFBhZ2UsIHJlbmRlckFsbFByb2plY3RzUGFnZSB9O1xuIiwiY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5jb25zdCBzYXZlZFRhc2tzID0gW107XG5sZXQgY3VycmVudFRhc2tzID0gc2F2ZWRUYXNrcztcbmxldCBjdXJyZW50UHJvamVjdHMgPSBzYXZlZFByb2plY3RzO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50VGFza3MobmV3VGFza3MpIHtcblx0Y3VycmVudFRhc2tzID0gbmV3VGFza3M7XG5cdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0cyhuZXdQcm9qZWN0cykge1xuXHRjdXJyZW50UHJvamVjdHMgPSBuZXdQcm9qZWN0cztcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdHMpKTtcbn1cblxuZXhwb3J0IHsgc2V0Q3VycmVudFRhc2tzLCBzZXRDdXJyZW50UHJvamVjdHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==