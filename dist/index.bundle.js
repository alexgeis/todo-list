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
/* harmony import */ var _js_render_renderPages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/render/renderPages */ "./src/js/render/renderPages.js");


// import { setCurrentTasks, setCurrentProjects } from "./js/state";

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
	(0,_js_render_renderPages__WEBPACK_IMPORTED_MODULE_1__.renderDashboardPage)();
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
/* harmony import */ var _render_renderPages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/renderPages */ "./src/js/render/renderPages.js");



function seedProjectData() {
	localStorage.clear();
	localStorage.setItem("projects", JSON.stringify(_projectData__WEBPACK_IMPORTED_MODULE_0__.projectData));
	(0,_render_renderPages__WEBPACK_IMPORTED_MODULE_1__.renderDashboardPage)();
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
		//mobile responsive code for settings links
		const smallDevice = window.matchMedia("(max-width: 778px)");
		smallDevice.addEventListener("change", handleSmallDeviceChange);
		function handleSmallDeviceChange(e) {
			if (e.matches) {
				settingsLink.removeChild(settingsIcon);
				settingsLink.textContent = "SETTINGS";
			}
		}
		const largeDevice = window.matchMedia("(min-width: 778px)");
		largeDevice.addEventListener("change", handleLargeDeviceChange);
		function handleLargeDeviceChange(e) {
			if (e.matches) {
				settingsLink.textContent = "";
				settingsLink.appendChild(settingsIcon);
			}
		}
		//
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
		const navMenu = document.querySelector(".nav-menu");
		navMenu.classList.toggle("active");
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








const header = (0,_components_header__WEBPACK_IMPORTED_MODULE_2__.renderHeader)();

const aside = (0,_components_aside__WEBPACK_IMPORTED_MODULE_3__.renderAside)();

const mainSection = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "main-section" });
const mainHeader = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "main-header" });
mainSection.appendChild(mainHeader);

const mainDiv = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("main", "", { id: "main" });
mainDiv.append(aside, mainSection);

const taskForm = (0,_components_addTaskForm__WEBPACK_IMPORTED_MODULE_4__.renderAddTaskForm)();
const projectForm = (0,_components_addProjectForm__WEBPACK_IMPORTED_MODULE_5__.renderAddProjectForm)();

const content = document.getElementById("content");
content.append(header, mainDiv, taskForm, projectForm);

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

function replaceHelper(newSib) {
	if (mainHeader.nextSibling) {
		const nextSib = mainHeader.nextSibling;
		mainSection.replaceChild(newSib, nextSib);
	} else {
		mainSection.appendChild(newSib);
	}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLHlCQUF5QixzQkFBc0I7QUFDM0U7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBUztBQUM3QjtBQUNBO0FBQ0EsbUJBQW1CLCtDQUFTO0FBQzVCO0FBQ0E7QUFDQSxtQkFBbUIsK0NBQVM7QUFDNUI7QUFDQTtBQUNBLHVCQUF1QiwrQ0FBUztBQUNoQztBQUNBO0FBQ0Esb0JBQW9CLCtDQUFTO0FBQzdCO0FBQ0E7QUFDQSx5QkFBeUIsK0NBQVM7QUFDbEMsUUFBUSwwREFBVTtBQUNsQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFVztBQUNpQjtBQUNEO0FBQ0Y7QUFDWTtBQUNNO0FBQ1g7O0FBRXhELGVBQWUsZ0VBQVk7O0FBRTNCLGNBQWMsOERBQVc7O0FBRXpCLG9CQUFvQiwrQ0FBUyxjQUFjLG9CQUFvQjtBQUMvRCxtQkFBbUIsK0NBQVMsY0FBYyxtQkFBbUI7QUFDN0Q7O0FBRUEsZ0JBQWdCLCtDQUFTLGVBQWUsWUFBWTtBQUNwRDs7QUFFQSxpQkFBaUIsMEVBQWlCO0FBQ2xDLG9CQUFvQixnRkFBb0I7O0FBRXhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixpRUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxRUFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRHREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGUuc2Nzcz82MmFmIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2RhdGEvcHJvamVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2RhdGEvc2VlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL2NvbXBvbmVudHMvYWRkUHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9jb21wb25lbnRzL2FkZFRhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvY29tcG9uZW50cy9hc2lkZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvcGFnZXMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvcGFnZXMvcHJvamVjdFRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvcGFnZXMvcHJvamVjdHNBbGwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9wYWdlcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9yZW5kZXJQYWdlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvc3RhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFwiLi9jc3Mvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgcmVuZGVyRGFzaGJvYXJkUGFnZSB9IGZyb20gXCIuL2pzL3JlbmRlci9yZW5kZXJQYWdlc1wiO1xuLy8gaW1wb3J0IHsgc2V0Q3VycmVudFRhc2tzLCBzZXRDdXJyZW50UHJvamVjdHMgfSBmcm9tIFwiLi9qcy9zdGF0ZVwiO1xuXG4vLy8vIFNUQVRFIC8vLy9cbi8vREVGQVVMVFNcbmNvbnN0IERFRkFVTFRfVEhFTUUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IFwibGlnaHRcIjtcbmNvbnN0IHNhdmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuLy8gY29uc3Qgc2F2ZWRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XG4vLyBjb25zdCBjdXJyZW50bHlEb25lID0gc2F2ZWRUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGUgPT09IHRydWUpO1xuLy8gY29uc3QgREVGQVVMVF9UQVNLU19ET05FID0gY3VycmVudGx5RG9uZS5sZW5ndGg7XG4vLyBjb25zdCBERUZBVUxUX1RBU0tTX1RPVEFMID0gc2F2ZWRCb29rcy5sZW5ndGg7XG5cbi8vIGxldCBjdXJyZW50VGFza3MgPSBzYXZlZFRhc2tzO1xubGV0IGN1cnJlbnRQcm9qZWN0cyA9IHNhdmVkUHJvamVjdHM7XG5sZXQgY3VycmVudFRoZW1lID0gREVGQVVMVF9USEVNRTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcblx0cmVuZGVyRGFzaGJvYXJkUGFnZSgpO1xuXHQvLyBzZXRDdXJyZW50VGhlbWUoREVGQVVMVF9USEVNRSk7XG5cdC8vIHNldEN1cnJlbnRUYXNrcyhjdXJyZW50VGFza3MpO1xuXHQvLyBzZXRDdXJyZW50UHJvamVjdHMoY3VycmVudFByb2plY3RzKTtcbn07XG4iLCIvLyBET00gQ1JFQVRFIEZVTkNUSU9OXG5cbi8vYXJnIDEgPSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuLy8gYXJnIDIgPSBjbGFzcyBuYW1lcyB0byBhZGRcbi8vIGFyZyAzID0gb2JqZWN0IC0gYXR0cmlidXRlcyB0byBhZGQgLT4gYXR0cmlidXRlIDogdmFsdWVcbmZ1bmN0aW9uIGRvbUNyZWF0ZShhcmcxLCBhcmcyLCBhcmczKSB7XG5cdC8vLy8gYXJnIDEgPSBcInN0cmluZ1wiIC0gbmFtZSBvZiBIVE1MIGVsZW1lbnRcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXJnMSk7XG5cdC8vLy8gYXJnIDIgPSBbXCJhcnJheSBvZiBzdHJpbmdzXCJdIC0gY2xhc3MgbmFtZXMgdG8gYWRkXG5cdGlmIChBcnJheS5pc0FycmF5KGFyZzIpICYmIGFyZzIubGVuZ3RoID4gMCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJnMi5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgY2xhc3NOYW1lID0gYXJnMltpXTtcblx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXHQvLy8vIGFyZyAzID0ge29iamVjdH0gLSBhdHRyaWJ1dGUgbmFtZSA6IHZhbHVlXG5cdGZvciAoY29uc3QgYXR0cmlidXRlIGluIGFyZzMpIHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGFyZzNbYXR0cmlidXRlXSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCB7IGRvbUNyZWF0ZSB9O1xuIiwiLy9ERU1PXG5cbi8vIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuLy8gY29uc3QgdGFza0RlbW8xID0gY3JlYXRlVGFzayh7XG4vLyBcdHRpdGxlOiBcIldhbGsgdGhlIERvZ1wiLFxuLy8gXHRkZXNjcmlwdGlvbjogXCJ0YWtlIHRoZSBkb2dnbyBvbiBhIGxpbCBzdHJvbGxcIixcbi8vIFx0ZHVlRGF0ZTogZGF0ZSxcbi8vIFx0cHJpb3JpdHk6IDMsXG4vLyBcdG5vdGVzOiBcImF2b2lkIDl0aCBhbmQgRWxtIC0gYWdncmVzc2l2ZSBkb2dcIixcbi8vIH0pO1xuLy8gY29uc3QgcHJvamVjdERlbW8xID0gY3JlYXRlUHJvamVjdCh7XG4vLyBcdHRpdGxlOiBcIlBlcnNvbmFsXCIsXG4vLyBcdGRlc2NyaXB0aW9uOiBcInBsZWFzdXJlLCBub3QgYnVzaW5lc3NcIixcbi8vIH0pO1xuLy8gcHJvamVjdERlbW8xLmFkZFRhc2t0b1Byb2plY3QodGFza0RlbW8xKTtcblxuY29uc3QgY3JlYXRlVGFzayA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzIH0pID0+ICh7XG5cdHRpdGxlLFxuXHRkZXNjcmlwdGlvbixcblx0ZHVlRGF0ZSxcblx0cHJpb3JpdHksXG5cdG5vdGVzLFxuXHRwcmludFRhc2soKSB7XG5cdFx0cmV0dXJuIGAke3RoaXMudGl0bGV9OiAke3RoaXMuZGVzY3JpcHRpb259YDtcblx0fSxcbn0pO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+ICh7XG5cdHRpdGxlLFxuXHRkZXNjcmlwdGlvbixcblx0dGFza3M6IFtdLFxuXHRwcmludFByb2plY3QoKSB7XG5cdFx0cmV0dXJuIGBQcm9qZWN0ICR7dGhpcy50aXRsZX06ICR7dGhpcy5kZXNjcmlwdGlvbn1gO1xuXHR9LFxuXHRwcmludFRhc2tzKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMudGFza3MpO1xuXHR9LFxuXHRhZGRUYXNrdG9Qcm9qZWN0KHRhc2spIHtcblx0XHR0aGlzLnRhc2tzLnB1c2godGFzayk7XG5cdH0sXG59KTtcblxuZXhwb3J0IHsgY3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuLi9jcmVhdGVcIjtcblxuY29uc3QgcHJvamVjdDF0YXNrMSA9IGNyZWF0ZVRhc2soe1xuXHR0aXRsZTogXCJNb3cgdGhlIGxhd25cIixcblx0ZGVzY3JpcHRpb246XG5cdFx0XCJnZXQgb3V0IHRoZXJlIHdpdGggdGhlIGRhbmcgbW93ZXIgYW5kIG1vdyB0aGF0IHRoZXJlIGxhd24gdGhlcmVcIixcblx0ZHVlRGF0ZTogXCIyMDIyLTA3LTI5XCIsXG5cdHByaW9yaXR5OiBcIjFcIixcblx0bm90ZXM6IFwiUmV0dXJuIG1vd2VyIHRvIG5laWdoYm9yIHdoZW4gZmluaXNoZWRcIixcbn0pO1xuY29uc3QgcHJvamVjdDEgPSBjcmVhdGVQcm9qZWN0KHtcblx0dGl0bGU6IFwiTGF3bm1vd2VyXCIsXG5cdGRlc2NyaXB0aW9uOiBcImxhbmRzY2FwaW5nIHByb2plY3RcIixcbn0pO1xucHJvamVjdDEuYWRkVGFza3RvUHJvamVjdChwcm9qZWN0MXRhc2sxKTtcblxuY29uc3QgcHJvamVjdDJ0YXNrMSA9IGNyZWF0ZVRhc2soe1xuXHR0aXRsZTogXCJXYWxrIHRoZSBkb2dcIixcblx0ZGVzY3JpcHRpb246IFwibGVhc2gsIG9wZW4gZG9vciwgd2FsayBhcm91bmQsIGNvbWUgYmFja1wiLFxuXHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0cHJpb3JpdHk6IFwiMlwiLFxuXHRub3RlczogXCJhdm9pZCBvdGhlciBkb2dzIVwiLFxufSk7XG5jb25zdCBwcm9qZWN0MnRhc2syID0gY3JlYXRlVGFzayh7XG5cdHRpdGxlOiBcIkNvb2sgZGlubmVyXCIsXG5cdGRlc2NyaXB0aW9uOiBcImNoaWNrZW4gdGlra2EgbWFzYWxhLCB3LyBqYXNtaW5lIHJpY2UsIGFuZCBzYW1vc2FzXCIsXG5cdGR1ZURhdGU6IFwiMjAyMi0wNi0xMlwiLFxuXHRwcmlvcml0eTogXCIzXCIsXG5cdG5vdGVzOiBcIm5vIHBlYW51dHMhXCIsXG59KTtcbmNvbnN0IHByb2plY3QydGFzazMgPSBjcmVhdGVUYXNrKHtcblx0dGl0bGU6IFwiUmVhZCAnT2N0b2JlcicgQm9va1wiLFxuXHRkZXNjcmlwdGlvbjogXCJyZWFkIGF0IGxlYXN0IDQwIHBhZ2VzIHRvZGF5XCIsXG5cdGR1ZURhdGU6IFwiMjAyMi0wOC0xMlwiLFxuXHRwcmlvcml0eTogXCI1XCIsXG5cdG5vdGVzOiBcIlwiLFxufSk7XG5jb25zdCBwcm9qZWN0MiA9IGNyZWF0ZVByb2plY3Qoe1xuXHR0aXRsZTogXCJBbm90aGVyIFByb2plY3RcIixcblx0ZGVzY3JpcHRpb246IFwibWlzY2VsbGFuZW91cyB0YXNrc1wiLFxufSk7XG5wcm9qZWN0Mi5hZGRUYXNrdG9Qcm9qZWN0KHByb2plY3QydGFzazEsIHByb2plY3QydGFzazIsIHByb2plY3QydGFzazMpO1xuXG5jb25zdCBwcm9qZWN0M3Rhc2sxID0gY3JlYXRlVGFzayh7XG5cdHRpdGxlOiBcIlJlYWQgJ09jdG9iZXInIEJvb2tcIixcblx0ZGVzY3JpcHRpb246IFwicmVhZCBhdCBsZWFzdCA0MCBwYWdlcyB0b2RheVwiLFxuXHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0cHJpb3JpdHk6IFwiNVwiLFxuXHRub3RlczogXCJcIixcbn0pO1xuY29uc3QgcHJvamVjdDN0YXNrMiA9IGNyZWF0ZVRhc2soe1xuXHR0aXRsZTogXCJCdXkgcm9zZXNcIixcblx0ZGVzY3JpcHRpb246IFwiMiBkb3plbiByb3NlcyBmcm9tIFNhZmV3YXlcIixcblx0ZHVlRGF0ZTogXCIyMDIyLTA4LTEyXCIsXG5cdHByaW9yaXR5OiBcIjVcIixcblx0bm90ZXM6IFwicmVkIHJvc2VzXCIsXG59KTtcbmNvbnN0IHByb2plY3QzID0gY3JlYXRlUHJvamVjdCh7XG5cdHRpdGxlOiBcIkEgVGhpcmQgUHJvamVjdCBmb3IgdGhlIExpc3RcIixcblx0ZGVzY3JpcHRpb246XG5cdFx0XCJsb25nZXIgZGVzY3JpcHRpb24gZm9yIGEgbW9yZSBjb21wbGljYXRlZCB0YXNrIHByb2plY3QgYnJlYWtkb3duXCIsXG59KTtcbnByb2plY3QzLmFkZFRhc2t0b1Byb2plY3QocHJvamVjdDN0YXNrMSwgcHJvamVjdDN0YXNrMik7XG5cbmxldCBwcm9qZWN0RGF0YSA9IFtdO1xucHJvamVjdERhdGEucHVzaChwcm9qZWN0MSwgcHJvamVjdDIsIHByb2plY3QzKTtcblxuZXhwb3J0IHsgcHJvamVjdERhdGEgfTtcbiIsImltcG9ydCB7IHByb2plY3REYXRhIH0gZnJvbSBcIi4vcHJvamVjdERhdGFcIjtcbmltcG9ydCB7IHJlbmRlckRhc2hib2FyZFBhZ2UgfSBmcm9tIFwiLi4vcmVuZGVyL3JlbmRlclBhZ2VzXCI7XG5cbmZ1bmN0aW9uIHNlZWRQcm9qZWN0RGF0YSgpIHtcblx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpKTtcblx0cmVuZGVyRGFzaGJvYXJkUGFnZSgpO1xufVxuZXhwb3J0IHsgc2VlZFByb2plY3REYXRhIH07XG4iLCJmdW5jdGlvbiByZW5kZXJUYXNrRm9ybSgpIHtcblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5hZGRfdGFza19zZWN0aW9uXCIpXG5cdFx0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogYmxvY2s7XCIpO1xufVxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdEZvcm0oKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Byb2plY3Rfc2VjdGlvblwiKVxuXHRcdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGJsb2NrO1wiKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrRm9ybSgpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXRpdGxlXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LWRlc2NcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGF0ZVwiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1wcmlvcml0eVwiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1ub3Rlc1wiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10YXNrLWFkZFwiKS5vcHRpb25zLnNlbGVjdGVkSW5kZXggPSAwO1xufVxuXG5mdW5jdGlvbiBjbG9zZVRhc2tGb3JtKCkge1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmFkZF90YXNrX3NlY3Rpb25cIilcblx0XHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0Rm9ybSgpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwLXRpdGxlXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwLWRlc2NcIikudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmFkZF9wcm9qZWN0X3NlY3Rpb25cIilcblx0XHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcbn1cblxuZXhwb3J0IHtcblx0cmVuZGVyVGFza0Zvcm0sXG5cdHJlbmRlclByb2plY3RGb3JtLFxuXHRjbGVhclRhc2tGb3JtLFxuXHRjbG9zZVRhc2tGb3JtLFxuXHRjbGVhclByb2plY3RGb3JtLFxuXHRjbG9zZVByb2plY3RGb3JtLFxufTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi8uLi9ET01cIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi4vLi4vY3JlYXRlXCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50UHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IGNsZWFyUHJvamVjdEZvcm0sIGNsb3NlUHJvamVjdEZvcm0gfSBmcm9tIFwiLi4vLi4vZm9ybVwiO1xuaW1wb3J0IHsgcmVuZGVyQWxsUHJvamVjdHNQYWdlIH0gZnJvbSBcIi4uL3JlbmRlclBhZ2VzXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0VGFza3MgfSBmcm9tIFwiLi4vcGFnZXMvcHJvamVjdFRhc2tzXCI7XG5cbmNvbnN0IHNhdmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0U3VibWl0KCkge1xuXHQvL3ZhbGlkYXRpb25cblx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicC10aXRsZVwiKS52YWx1ZSA9PT0gXCJcIikge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZS1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0cmV0dXJuO1xuXHR9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicC10aXRsZVwiKS52YWx1ZSAhPT0gXCJcIikge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZS1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fVxuXG5cdC8vcHJvamVjdCBmYWN0b3J5XG5cdGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHtcblx0XHR0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwLXRpdGxlXCIpLnZhbHVlLFxuXHRcdGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtZGVzY1wiKS52YWx1ZSxcblx0fSk7XG5cdHNhdmVkUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblx0Ly8gc2V0Q3VycmVudFByb2plY3RzKHNhdmVkUHJvamVjdHMpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHNhdmVkUHJvamVjdHMpKTtcblx0Y2xvc2VQcm9qZWN0Rm9ybSgpO1xuXHRsZXQgbmV3SW5kZXggPSBzYXZlZFByb2plY3RzLmxlbmd0aCAtIDE7XG5cdHJlbmRlclByb2plY3RUYXNrcyhuZXdJbmRleCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFkZFByb2plY3RGb3JtKCkge1xuXHQvL2Zvcm0gY29udGVudFxuXHRjb25zdCBmb3JtVGl0bGUgPSBkb21DcmVhdGUoXCJoMlwiLCBbXCJmb3JtX3RpdGxlXCJdKTtcblx0Zm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgbmV3IHByb2plY3RcIjtcblx0Y29uc3QgZm9ybVN1YnRpdGxlID0gZG9tQ3JlYXRlKFwiaDJcIiwgW1wiZm9ybV9zdWJ0aXRsZVwiXSk7XG5cdGZvcm1TdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiKiByZXF1aXJlZFwiO1xuXHRjb25zdCBjbG9zZUJ0biA9IGRvbUNyZWF0ZShcInNwYW5cIiwgW1wibWF0ZXJpYWwtaWNvbnNcIiwgXCJjbG9zZS1mb3JtXCJdLCB7XG5cdFx0aWQ6IFwiY2xvc2UtcHJvamVjdC1mb3JtXCIsXG5cdH0pO1xuXHRjbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwiIFggXCI7XG5cdGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVByb2plY3RGb3JtKTtcblx0Ly90aXRsZVxuXHRjb25zdCB0aXRsZUxhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwicC10aXRsZVwiIH0pO1xuXHR0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZSAqXCI7XG5cdGNvbnN0IHRpdGxlSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJwLXRpdGxlXCIsXG5cdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0bmFtZTogXCJwLXRpdGxlXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiVGl0bGVcIixcblx0fSk7XG5cdGNvbnN0IHRpdGxlRXJyTXNnID0gZG9tQ3JlYXRlKFwic21hbGxcIiwgW1wiZXJyLW1zZ1wiXSwge1xuXHRcdGlkOiBcInByb2plY3QtdGl0bGUtZXJyLW1zZ1wiLFxuXHR9KTtcblx0dGl0bGVFcnJNc2cudGV4dENvbnRlbnQgPSBcIiAqIFRpdGxlIGlzIHJlcXVpcmVkXCI7XG5cdHRpdGxlSW5wdXQuYXBwZW5kQ2hpbGQodGl0bGVFcnJNc2cpO1xuXHR0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXHQvL2Rlc2NyaXB0aW9uXG5cdGNvbnN0IGRlc2NMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHsgZm9yOiBcInAtZGVzY1wiIH0pO1xuXHRkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG5cdGNvbnN0IGRlc2NJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtcImZvcm0tY29udHJvbFwiXSwge1xuXHRcdGlkOiBcInAtZGVzY1wiLFxuXHRcdHR5cGU6IFwidGV4dGFyZWFcIixcblx0XHRuYW1lOiBcInAtZGVzY1wiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIkRlc2NyaXB0aW9uXCIsXG5cdH0pO1xuXHRkZXNjTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcblx0Ly9hZGQvY2xlYXIgYnRuc1xuXHRjb25zdCBwcm9qZWN0Rm9ybUJ0bnMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wibmV3LXByb2plY3QtYnV0dG9uc1wiXSk7XG5cdGNvbnN0IGFkZEJ0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBbXCJidG5cIl0sIHtcblx0XHRpZDogXCJhZGQtcHJvamVjdC1idG5cIixcblx0fSk7XG5cdGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cdGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdFN1Ym1pdCk7XG5cdGNvbnN0IGNsZWFyQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImJ0blwiXSwge1xuXHRcdGlkOiBcInByb2plY3QtY2xlYXJcIixcblx0fSk7XG5cdGNsZWFyQnRuLnRleHRDb250ZW50ID0gXCJDbGVhciBmaWVsZHNcIjtcblx0Y2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyUHJvamVjdEZvcm0pO1xuXHRwcm9qZWN0Rm9ybUJ0bnMuYXBwZW5kKGFkZEJ0biwgY2xlYXJCdG4pO1xuXHQvL2Zvcm0gY29udGFpbmVyXG5cdGNvbnN0IGZvcm1Db250YWluZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiZm9ybS1jb250YWluZXJcIl0sIHtcblx0XHRpZDogXCJuZXctcHJvamVjdC1mb3JtXCIsXG5cdH0pO1xuXHRmb3JtQ29udGFpbmVyLmFwcGVuZChcblx0XHRmb3JtVGl0bGUsXG5cdFx0Zm9ybVN1YnRpdGxlLFxuXHRcdGNsb3NlQnRuLFxuXHRcdHRpdGxlTGFiZWwsXG5cdFx0ZGVzY0xhYmVsLFxuXHRcdHByb2plY3RGb3JtQnRuc1xuXHQpO1xuXHQvL3dyYXBwZXJcblx0Y29uc3QgYWRkUHJvamVjdFNlY3Rpb24gPSBkb21DcmVhdGUoXCJzZWN0aW9uXCIsIFtcImFkZF9wcm9qZWN0X3NlY3Rpb25cIl0pO1xuXHRhZGRQcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblx0cmV0dXJuIGFkZFByb2plY3RTZWN0aW9uO1xufVxuXG5leHBvcnQgeyBhZGRQcm9qZWN0U3VibWl0LCByZW5kZXJBZGRQcm9qZWN0Rm9ybSB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuLi8uLi9jcmVhdGVcIjtcbmltcG9ydCB7IGNsb3NlVGFza0Zvcm0sIGNsZWFyVGFza0Zvcm0gfSBmcm9tIFwiLi4vLi4vZm9ybVwiO1xuaW1wb3J0IHsgcmVuZGVyRGFzaGJvYXJkIH0gZnJvbSBcIi4uL3BhZ2VzL2Rhc2hib2FyZFwiO1xuXG5jb25zdCBzYXZlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcblxuZnVuY3Rpb24gYWRkVGFza1N1Ym1pdCgpIHtcblx0Ly92YWxpZGF0aW9uXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtdGl0bGVcIikudmFsdWUgPT09IFwiXCIpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGUtZXJyLW1zZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdHJldHVybjtcblx0fSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtdGl0bGVcIikudmFsdWUgIT09IFwiXCIpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGUtZXJyLW1zZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdH1cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1wcmlvcml0eVwiKS52YWx1ZSA9PT0gXCJcIikge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eS1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0cmV0dXJuO1xuXHR9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1wcmlvcml0eVwiKS52YWx1ZSAhPT0gXCJcIikge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eS1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fVxuXHRjb25zdCBwcm9qZWN0QXNzb2NpYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGFzay1hZGRcIik7XG5cdGlmIChwcm9qZWN0QXNzb2NpYXRpb24udmFsdWUgPT09IFwibnVsbFwiKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByb2plY3QtZXJyLW1zZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdHJldHVybjtcblx0fSBlbHNlIGlmIChwcm9qZWN0QXNzb2NpYXRpb24udmFsdWUgIT09IFwiXCIpIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJvamVjdC1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fVxuXG5cdC8vdGFzayBmYWN0b3J5XG5cdGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKHtcblx0XHR0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXRpdGxlXCIpLnZhbHVlLFxuXHRcdGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGVzY1wiKS52YWx1ZSxcblx0XHRkdWVEYXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGF0ZVwiKS52YWx1ZSxcblx0XHRwcmlvcml0eTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpLnZhbHVlLFxuXHRcdG5vdGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Qtbm90ZXNcIikudmFsdWUsXG5cdH0pO1xuXHRmb3IgKGNvbnN0IHByb2plY3QgaW4gc2F2ZWRQcm9qZWN0cykge1xuXHRcdGNvbnN0IHRpdGxlID0gc2F2ZWRQcm9qZWN0c1twcm9qZWN0XS50aXRsZTtcblxuXHRcdC8vY3VycmVudGx5IG1hdGNoaW5nIGRyb3Bkb3duIHByb2plY3QgdGl0bGVzIHRvIHRoZSBzYXZlZFByb2plY3RzIHByb2plY3QgdGl0bGVzXG5cdFx0Ly9UT0RPIC0gaW1wbGVtZW50IGFuIElEIHN5c3RlbSBzbyBkdXBsaWNhdGUgbmFtZXMgY2FuIGJlIHVzZWRcblx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRhc2stYWRkXCIpLnZhbHVlID09PSB0aXRsZSkge1xuXHRcdFx0c2F2ZWRQcm9qZWN0c1twcm9qZWN0XS50YXNrcy5wdXNoKG5ld1Rhc2spO1xuXHRcdFx0Y29uc29sZS5sb2coc2F2ZWRQcm9qZWN0c1twcm9qZWN0XS50YXNrcyk7XG5cdFx0fVxuXHR9XG5cdC8vIHNldEN1cnJlbnRUYXNrcyhjdXJyZW50VGFza3MpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHNhdmVkUHJvamVjdHMpKTtcblx0cmVuZGVyRGFzaGJvYXJkKCk7XG5cdGNsb3NlVGFza0Zvcm0oKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWRkVGFza0Zvcm0oKSB7XG5cdC8vZm9ybSBjb250ZW50XG5cdGNvbnN0IGZvcm1UaXRsZSA9IGRvbUNyZWF0ZShcImgyXCIsIFtcImZvcm1fdGl0bGVcIl0pO1xuXHRmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBuZXcgdGFza1wiO1xuXHRjb25zdCBmb3JtU3VidGl0bGUgPSBkb21DcmVhdGUoXCJoMlwiLCBbXCJmb3JtX3N1YnRpdGxlXCJdKTtcblx0Zm9ybVN1YnRpdGxlLnRleHRDb250ZW50ID0gXCIqIHJlcXVpcmVkXCI7XG5cdGNvbnN0IGNsb3NlQnRuID0gZG9tQ3JlYXRlKFwic3BhblwiLCBbXCJtYXRlcmlhbC1pY29uc1wiLCBcImNsb3NlLWZvcm1cIl0sIHtcblx0XHRpZDogXCJjbG9zZS10YXNrLWZvcm1cIixcblx0fSk7XG5cdGNsb3NlQnRuLnRleHRDb250ZW50ID0gXCIgWCBcIjtcblx0Y2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVGFza0Zvcm0pO1xuXHQvL3RpdGxlXG5cdGNvbnN0IHRpdGxlTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJ0LXRpdGxlXCIgfSk7XG5cdHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlICpcIjtcblx0Y29uc3QgdGl0bGVJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtcImZvcm0tY29udHJvbFwiXSwge1xuXHRcdGlkOiBcInQtdGl0bGVcIixcblx0XHR0eXBlOiBcInRleHRcIixcblx0XHRuYW1lOiBcInRhc2stdGl0bGVcIixcblx0XHRwbGFjZWhvbGRlcjogXCJUaXRsZVwiLFxuXHR9KTtcblx0Y29uc3QgdGl0bGVFcnJNc2cgPSBkb21DcmVhdGUoXCJzbWFsbFwiLCBbXCJlcnItbXNnXCJdLCB7XG5cdFx0aWQ6IFwidGFzay10aXRsZS1lcnItbXNnXCIsXG5cdH0pO1xuXHR0aXRsZUVyck1zZy50ZXh0Q29udGVudCA9IFwiICogVGFzayB0aXRsZSBpcyByZXF1aXJlZFwiO1xuXHR0aXRsZUxhYmVsLmFwcGVuZCh0aXRsZUlucHV0LCB0aXRsZUVyck1zZyk7XG5cdC8vZGVzY3JpcHRpb25cblx0Y29uc3QgZGVzY0xhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwidC1kZXNjXCIgfSk7XG5cdGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblx0Y29uc3QgZGVzY0lucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC1kZXNjXCIsXG5cdFx0dHlwZTogXCJ0ZXh0YXJlYVwiLFxuXHRcdG5hbWU6IFwidC1kZXNjXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiRGVzY3JpcHRpb25cIixcblx0fSk7XG5cdGRlc2NMYWJlbC5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXHQvL2RhdGVcblx0Y29uc3QgZGF0ZUxhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwidC1kYXRlXCIgfSk7XG5cdGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcblx0Y29uc3QgZGF0ZUlucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC1kYXRlXCIsXG5cdFx0dHlwZTogXCJkYXRlXCIsXG5cdFx0bmFtZTogXCJ0LWRhdGVcIixcblx0fSk7XG5cdGRhdGVMYWJlbC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXHQvL3ByaW9yaXR5XG5cdGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJ0LXByaW9yaXR5XCIgfSk7XG5cdHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5ICg1IGlzIGhpZ2hlc3QpICpcIjtcblx0Y29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtcImZvcm0tY29udHJvbFwiXSwge1xuXHRcdGlkOiBcInQtcHJpb3JpdHlcIixcblx0XHR0eXBlOiBcIm51bWJlclwiLFxuXHRcdG5hbWU6IFwidC1wcmlvcml0eVwiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIjNcIixcblx0XHRtaW46IFwiMVwiLFxuXHRcdG1heDogXCI1XCIsXG5cdH0pO1xuXHRjb25zdCBwcmlvcml0eUVyck1zZyA9IGRvbUNyZWF0ZShcInNtYWxsXCIsIFtcImVyci1tc2dcIl0sIHtcblx0XHRpZDogXCJ0YXNrLXByaW9yaXR5LWVyci1tc2dcIixcblx0fSk7XG5cdHByaW9yaXR5RXJyTXNnLnRleHRDb250ZW50ID0gXCIgKiBQcmlvcml0eSBiZXR3ZWVuIDEtNSBpcyByZXF1aXJlZFwiO1xuXHRwcmlvcml0eUxhYmVsLmFwcGVuZChwcmlvcml0eUlucHV0LCBwcmlvcml0eUVyck1zZyk7XG5cdC8vbm90ZXNcblx0Y29uc3Qgbm90ZXNMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHsgZm9yOiBcInQtbm90ZXNcIiB9KTtcblx0bm90ZXNMYWJlbC50ZXh0Q29udGVudCA9IFwiTm90ZXNcIjtcblx0Y29uc3Qgbm90ZXNJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtcImZvcm0tY29udHJvbFwiXSwge1xuXHRcdGlkOiBcInQtbm90ZXNcIixcblx0XHR0eXBlOiBcInRleHRhcmVhXCIsXG5cdFx0bmFtZTogXCJ0LW5vdGVzXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiTm90ZXNcIixcblx0fSk7XG5cdG5vdGVzTGFiZWwuYXBwZW5kQ2hpbGQobm90ZXNJbnB1dCk7XG5cdC8vcHJvamVjdCBsaXN0XG5cdGNvbnN0IHByb2plY3RMaXN0TGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7XG5cdFx0Zm9yOiBcInByb2plY3QtdGFzay1hZGRcIixcblx0fSk7XG5cdHByb2plY3RMaXN0TGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCB0byBFeGlzdGluZyBQcm9qZWN0XCI7XG5cdGNvbnN0IHByb2plY3RMaXN0U2VsZWN0ID0gZG9tQ3JlYXRlKFwic2VsZWN0XCIsIFtcImZvcm0tY29udHJvbFwiXSwge1xuXHRcdGlkOiBcInByb2plY3QtdGFzay1hZGRcIixcblx0XHRuYW1lOiBcInByb2plY3QtdGFzay1hZGRcIixcblx0fSk7XG5cdGNvbnN0IHByb2plY3RMaXN0T3B0aW9uREVGQVVMVCA9IGRvbUNyZWF0ZShcIm9wdGlvblwiLCBcIlwiLCB7XG5cdFx0dmFsdWU6IFwibnVsbFwiLFxuXHRcdGRpc2FibGVkOiBcIlwiLFxuXHRcdHNlbGVjdGVkOiBcIlwiLFxuXHR9KTtcblx0cHJvamVjdExpc3RPcHRpb25ERUZBVUxULnRleHRDb250ZW50ID0gXCItLVNlbGVjdCBleGlzdGluZyBwcm9qZWN0LS1cIjtcblx0cHJvamVjdExpc3RTZWxlY3QuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RPcHRpb25ERUZBVUxUKTtcblx0Ly8vLyAgZ2V0IG5hbWVzIG9mIGFsbCBwcm9qZWN0c1xuXHRjb25zdCB0b3RhbFByb2plY3ROYW1lcyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNhdmVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gc2F2ZWRQcm9qZWN0c1tpXTtcblx0XHR0b3RhbFByb2plY3ROYW1lcy5wdXNoKHByb2plY3QudGl0bGUpO1xuXHR9XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxQcm9qZWN0TmFtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBuYW1lID0gdG90YWxQcm9qZWN0TmFtZXNbaV07XG5cdFx0Y29uc3QgcHJvamVjdExpc3RPcHRpb24gPSBkb21DcmVhdGUoXCJvcHRpb25cIiwgXCJcIiwge1xuXHRcdFx0dmFsdWU6IG5hbWUsXG5cdFx0fSk7XG5cdFx0cHJvamVjdExpc3RPcHRpb24udGV4dENvbnRlbnQgPSBuYW1lO1xuXHRcdHByb2plY3RMaXN0U2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RMaXN0T3B0aW9uKTtcblx0fVxuXHRjb25zdCBwcm9qZWN0TGlzdEVyck1zZyA9IGRvbUNyZWF0ZShcInNtYWxsXCIsIFtcImVyci1tc2dcIl0sIHtcblx0XHRpZDogXCJ0YXNrLXByb2plY3QtZXJyLW1zZ1wiLFxuXHR9KTtcblx0cHJvamVjdExpc3RFcnJNc2cudGV4dENvbnRlbnQgPSBcIiAqIFByb2plY3QgYXNzb2NpYXRpb24gaXMgcmVxdWlyZWRcIjtcblx0cHJvamVjdExpc3RMYWJlbC5hcHBlbmQocHJvamVjdExpc3RTZWxlY3QsIHByb2plY3RMaXN0RXJyTXNnKTtcblx0Ly9hZGQvY2xlYXIgYnRuc1xuXHRjb25zdCB0YXNrRm9ybUJ0bnMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wibmV3LXRhc2stYnV0dG9uc1wiXSk7XG5cdGNvbnN0IGFkZEJ0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBbXCJidG5cIl0sIHtcblx0XHRpZDogXCJhZGQtdGFzay1idG5cIixcblx0fSk7XG5cdGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cdGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza1N1Ym1pdCk7XG5cdGNvbnN0IGNsZWFyQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImJ0blwiXSwge1xuXHRcdGlkOiBcInRhc2stY2xlYXJcIixcblx0fSk7XG5cdGNsZWFyQnRuLnRleHRDb250ZW50ID0gXCJDbGVhciBmaWVsZHNcIjtcblx0Y2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyVGFza0Zvcm0pO1xuXHR0YXNrRm9ybUJ0bnMuYXBwZW5kKGFkZEJ0biwgY2xlYXJCdG4pO1xuXHQvL2Zvcm0gY29udGFpbmVyXG5cdGNvbnN0IGZvcm1Db250YWluZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiZm9ybS1jb250YWluZXJcIl0sIHtcblx0XHRpZDogXCJuZXctcHJvamVjdC1mb3JtXCIsXG5cdH0pO1xuXHRmb3JtQ29udGFpbmVyLmFwcGVuZChcblx0XHRmb3JtVGl0bGUsXG5cdFx0Zm9ybVN1YnRpdGxlLFxuXHRcdGNsb3NlQnRuLFxuXHRcdHRpdGxlTGFiZWwsXG5cdFx0ZGVzY0xhYmVsLFxuXHRcdGRhdGVMYWJlbCxcblx0XHRwcmlvcml0eUxhYmVsLFxuXHRcdG5vdGVzTGFiZWwsXG5cdFx0cHJvamVjdExpc3RMYWJlbCxcblx0XHR0YXNrRm9ybUJ0bnNcblx0KTtcblx0Ly93cmFwcGVyXG5cdGNvbnN0IGFkZFRhc2tTZWN0aW9uID0gZG9tQ3JlYXRlKFwic2VjdGlvblwiLCBbXCJhZGRfdGFza19zZWN0aW9uXCJdKTtcblx0YWRkVGFza1NlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cdHJldHVybiBhZGRUYXNrU2VjdGlvbjtcbn1cblxuZXhwb3J0IHsgYWRkVGFza1N1Ym1pdCwgcmVuZGVyQWRkVGFza0Zvcm0gfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi8uLi9ET01cIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RUYXNrcyB9IGZyb20gXCIuLi9wYWdlcy9wcm9qZWN0VGFza3NcIjtcbmltcG9ydCB7IHJlbmRlckRhc2hib2FyZFBhZ2UsIHJlbmRlckFsbFByb2plY3RzUGFnZSB9IGZyb20gXCIuLi9yZW5kZXJQYWdlc1wiO1xuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0QXNpZGVMaXN0KCkge1xuXHRjb25zdCBzYXZlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcblx0Y29uc3QgcHJvamVjdExpc3QgPSBkb21DcmVhdGUoXCJ1bFwiLCBcIlwiLCB7IGlkOiBcInByb2plY3QtcGFuZWwtbGlzdFwiIH0pO1xuXG5cdGlmIChzYXZlZFByb2plY3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHByb2plY3RMaXN0O1xuXHRjb25zdCB0b3RhbFByb2plY3ROYW1lcyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNhdmVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gc2F2ZWRQcm9qZWN0c1tpXTtcblx0XHR0b3RhbFByb2plY3ROYW1lcy5wdXNoKHByb2plY3QudGl0bGUpO1xuXHR9XG5cdC8vLy9kb20gbG9naWNcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFByb2plY3ROYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IG5hbWUgPSB0b3RhbFByb2plY3ROYW1lc1tpXTtcblx0XHRjb25zdCBsaUVsID0gZG9tQ3JlYXRlKFwibGlcIiwgW1wicHJvamVjdC1saXN0LWl0ZW1cIl0sIHtcblx0XHRcdFwiZGF0YS1wcm9qZWN0LWluZGV4XCI6IGksXG5cdFx0fSk7XG5cdFx0bGlFbC50ZXh0Q29udGVudCA9IG5hbWU7XG5cdFx0bGlFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgZGFzaGJvYXJkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhc2gtYXNpZGVcIik7XG5cdFx0XHRjb25zdCBwcm9qZWN0TGlzdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3QtYXNpZGVcIik7XG5cdFx0XHRjb25zdCBhbGxQcm9qZWN0c0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtcHJvamVjdHMtYXNpZGVcIik7XG5cdFx0XHRjb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbGlzdC1pdGVtXCIpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0SXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgaXRlbSA9IHByb2plY3RJdGVtc1tpXTtcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdC1saXN0LXNlbGVjdGVkXCIpO1xuXHRcdFx0fVxuXHRcdFx0bGlFbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LXNlbGVjdGVkXCIpO1xuXG5cdFx0XHRpZiAoIXByb2plY3RMaXN0RWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXNpZGUtc2VsZWN0ZWRcIikpIHtcblx0XHRcdFx0cHJvamVjdExpc3RFbC5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRcdGRhc2hib2FyZEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdFx0YWxsUHJvamVjdHNFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHR9XG5cdFx0XHRsZXQgaW5kZXggPSBsaUVsLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiKTtcblx0XHRcdHJlbmRlclByb2plY3RUYXNrcyhpbmRleCk7XG5cdFx0fSk7XG5cdFx0cHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGlFbCk7XG5cdH1cblx0cmV0dXJuIHByb2plY3RMaXN0O1xufVxuXG5mdW5jdGlvbiByZW5kZXJBc2lkZSgpIHtcblx0Ly9EQVNIQk9BUkRcblx0Y29uc3QgZGFzaGJvYXJkRWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiYXNpZGUtaXRlbVwiLCBcImFzaWRlLXNlbGVjdGVkXCJdLCB7XG5cdFx0aWQ6IFwiZGFzaC1hc2lkZVwiLFxuXHR9KTtcblx0ZGFzaGJvYXJkRWwudGV4dENvbnRlbnQgPSBcIkRBU0hCT0FSRFwiO1xuXG5cdC8vQUxMIFBST0pFQ1RTXG5cdGNvbnN0IGFsbFByb2plY3RzRWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiYXNpZGUtaXRlbVwiXSwge1xuXHRcdGlkOiBcImFsbC1wcm9qZWN0cy1hc2lkZVwiLFxuXHR9KTtcblx0YWxsUHJvamVjdHNFbC50ZXh0Q29udGVudCA9IFwiQUxMIFBST0pFQ1RTXCI7XG5cdC8vUFJPSkVDVCBMSVNUXG5cdGNvbnN0IHByb2plY3RMaXN0QnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFwiXCIsIHtcblx0XHRpZDogXCJwcm9qZWN0LWFjY29yZGlvbi1idG5cIixcblx0fSk7XG5cdHByb2plY3RMaXN0QnRuLnRleHRDb250ZW50ID0gXCJQUk9KRUNUU1wiO1xuXG5cdGNvbnN0IHByb2plY3RQYW5lbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcInByb2plY3QtcGFuZWwtZGlzcGxheVwiIH0pO1xuXHRjb25zdCBwcm9qZWN0TGlzdFVMID0gcmVuZGVyUHJvamVjdEFzaWRlTGlzdCgpO1xuXHRwcm9qZWN0UGFuZWwuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RVTCk7XG5cdGNvbnN0IHByb2plY3RMaXN0RWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiYXNpZGUtaXRlbVwiXSwge1xuXHRcdGlkOiBcInByb2plY3QtbGlzdC1hc2lkZVwiLFxuXHR9KTtcblx0ZnVuY3Rpb24gYWNjb3JkaW9uVG9nZ2xlKCkge1xuXHRcdHByb2plY3RMaXN0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cdFx0aWYgKHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcblx0XHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdH1cblx0fVxuXHRwcm9qZWN0TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjb3JkaW9uVG9nZ2xlKTtcblx0cHJvamVjdExpc3RFbC5hcHBlbmQocHJvamVjdExpc3RCdG4sIHByb2plY3RQYW5lbCk7XG5cdC8vc2VsZWN0IHRvZ2dsZSBldmVudCBsaXN0ZW5lcnNcblx0ZGFzaGJvYXJkRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIWRhc2hib2FyZEVsLmNsYXNzTGlzdC5jb250YWlucyhcImFzaWRlLXNlbGVjdGVkXCIpKSB7XG5cdFx0XHRkYXNoYm9hcmRFbC5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRhbGxQcm9qZWN0c0VsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdHByb2plY3RMaXN0RWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdH1cblx0XHRwcm9qZWN0UGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdHJlbmRlckRhc2hib2FyZFBhZ2UoKTtcblx0fSk7XG5cdGFsbFByb2plY3RzRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIWFsbFByb2plY3RzRWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXNpZGUtc2VsZWN0ZWRcIikpIHtcblx0XHRcdGFsbFByb2plY3RzRWwuY2xhc3NMaXN0LmFkZChcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0ZGFzaGJvYXJkRWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0cHJvamVjdExpc3RFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0fVxuXHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0cmVuZGVyQWxsUHJvamVjdHNQYWdlKCk7XG5cdH0pO1xuXHQvL0ZVTEwgQVNJREUgQVBQRU5EXG5cdGNvbnN0IGFzaWRlRWwgPSBkb21DcmVhdGUoXCJhc2lkZVwiLCBcIlwiLCB7IGlkOiBcIm1haW4tYXNpZGVcIiB9KTtcblx0YXNpZGVFbC5hcHBlbmQoZGFzaGJvYXJkRWwsIGFsbFByb2plY3RzRWwsIHByb2plY3RMaXN0RWwpO1xuXHQvL2FwcGx5IG90aGVyIHN0eWxpbmcgLyBlbGVtZW50cyAvIGNsaWNrIGV2ZW50c1xuXHRyZW5kZXJQcm9qZWN0QXNpZGVMaXN0KCk7XG5cdHJldHVybiBhc2lkZUVsO1xufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0QXNpZGVMaXN0LCByZW5kZXJBc2lkZSB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IGNoZWNrTG9nbyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2NoZWNrYm94LW1hcmtlZC1jaXJjbGUucG5nXCI7XG5pbXBvcnQgYWRkSWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL3BsdXMtY2lyY2xlLW91dGxpbmUucG5nXCI7XG5pbXBvcnQgYWRkVGFza0ljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9jaGVja2JveC1tYXJrZWQtY2lyY2xlLXBsdXMtb3V0bGluZS5wbmdcIjtcbmltcG9ydCBhZGRQcm9qZWN0SWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2xpc3QtZ3JvdXAtcGx1cy5wbmdcIjtcbmltcG9ydCBnZWFySWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2NvZy1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IHsgc2VlZFByb2plY3REYXRhIH0gZnJvbSBcIi4uLy4uL2RhdGEvc2VlZFwiO1xuaW1wb3J0IHsgcmVuZGVyVGFza0Zvcm0sIHJlbmRlclByb2plY3RGb3JtIH0gZnJvbSBcIi4uLy4uL2Zvcm1cIjtcbmltcG9ydCB7IHJlbmRlckRhc2hib2FyZFBhZ2UgfSBmcm9tIFwiLi4vcmVuZGVyUGFnZXNcIjtcbmltcG9ydCB7IHJlbmRlclNlYXJjaCB9IGZyb20gXCIuLi9wYWdlcy9zZWFyY2hcIjtcblxuZnVuY3Rpb24gcmVuZGVyQWRkTWVudSgpIHtcblx0Y29uc3QgYWRkSWNvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1pY29uLW1lbnVcIik7XG5cdGFkZEljb25NZW51LmNsYXNzTGlzdC50b2dnbGUoXCJpY29uLW1lbnUtdG9nZ2xlXCIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG5cdC8vLy9oZWFkZXIgTEVGVFxuXHRmdW5jdGlvbiBjcmVhdGVIZWFkZXJMZWZ0KCkge1xuXHRcdGNvbnN0IHNpdGVMb2dvID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFtcImZha2UtY2xhc3NcIl0sIHtcblx0XHRcdHNyYzogY2hlY2tMb2dvLFxuXHRcdFx0YWx0OiBcImNoZWNrZWQgY2lyY2xlIGxvZ29cIixcblx0XHR9KTtcblx0XHRjb25zdCBzaXRlVGl0bGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJoZWFkZXItc2l0ZS10aXRsZVwiIH0pO1xuXHRcdHNpdGVUaXRsZS50ZXh0Q29udGVudCA9IFwiVE9ETyBMSVNUXCI7XG5cdFx0Ly9hZGQgaWNvbiBtZW51XG5cdFx0Y29uc3QgYWRkQnRuSWNvbiA9IGRvbUNyZWF0ZShcImltZ1wiLCBcIlwiLCB7XG5cdFx0XHRpZDogXCJhZGQtaWNvblwiLFxuXHRcdFx0c3JjOiBhZGRJY29uLFxuXHRcdFx0YWx0OiBcImFkZCBidXR0b24gcGx1cyBpY29uXCIsXG5cdFx0fSk7XG5cdFx0YWRkQnRuSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyQWRkTWVudSk7XG5cdFx0Y29uc3QgYWRkSWNvbk1lbnUgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJhZGQtaWNvbi1tZW51XCIgfSk7XG5cdFx0Y29uc3QgYWRkVGFza0ltZyA9IGRvbUNyZWF0ZShcImltZ1wiLCBcIlwiLCB7XG5cdFx0XHRpZDogXCJhZGQtdGFzay1mb3JtXCIsXG5cdFx0XHRzcmM6IGFkZFRhc2tJY29uLFxuXHRcdFx0YWx0OiBcImFkZCB0YXNrIHBsdXMgaWNvblwiLFxuXHRcdH0pO1xuXG5cdFx0YWRkVGFza0ltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyVGFza0Zvcm0pO1xuXHRcdGNvbnN0IGFkZFByb2plY3RJbWcgPSBkb21DcmVhdGUoXCJpbWdcIiwgXCJcIiwge1xuXHRcdFx0aWQ6IFwiYWRkLXByb2plY3QtZm9ybVwiLFxuXHRcdFx0c3JjOiBhZGRQcm9qZWN0SWNvbixcblx0XHRcdGFsdDogXCJhZGQgcHJvamVjdCBwbHVzIGljb25cIixcblx0XHR9KTtcblx0XHRhZGRQcm9qZWN0SW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJQcm9qZWN0Rm9ybSk7XG5cdFx0YWRkSWNvbk1lbnUuYXBwZW5kKGFkZFRhc2tJbWcsIGFkZFByb2plY3RJbWcpO1xuXHRcdGNvbnN0IGFkZEJ0bkVsID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwiYWRkQnRuXCIgfSk7XG5cdFx0YWRkQnRuRWwuYXBwZW5kKGFkZEJ0bkljb24sIGFkZEljb25NZW51KTtcblx0XHRjb25zdCBoZWFkZXJMZWZ0ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwiaGVhZGVyTGVmdFwiIH0pO1xuXHRcdGhlYWRlckxlZnQuYXBwZW5kKHNpdGVMb2dvLCBzaXRlVGl0bGUsIGFkZEJ0bkVsKTtcblx0XHRyZXR1cm4gaGVhZGVyTGVmdDtcblx0fVxuXHQvLy8vaGVhZGVyIENFTlRFUlxuXHRmdW5jdGlvbiBjcmVhdGVIZWFkZXJDZW50ZXIoKSB7XG5cdFx0Y29uc3Qgc2VhcmNoTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJzaXRlLXNlYXJjaFwiIH0pO1xuXHRcdHNlYXJjaExhYmVsLnRleHRDb250ZW50ID0gXCJTZWFyY2g6IFwiO1xuXHRcdGNvbnN0IHNlYXJjaElucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgXCJcIiwge1xuXHRcdFx0aWQ6IFwic2l0ZS1zZWFyY2hcIixcblx0XHRcdHR5cGU6IFwic2VhcmNoXCIsXG5cdFx0XHRuYW1lOiBcInFcIixcblx0XHRcdHBsYWNlaG9sZGVyOiBcIiB0eXBlIGhlcmUuLi5cIixcblx0XHR9KTtcblx0XHRzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcblx0XHRcdGxldCBjdXJyZW50VmFsID0gZS50YXJnZXQudmFsdWU7IC8vIFwibW93XCJcblx0XHRcdHJlbmRlclNlYXJjaChjdXJyZW50VmFsKTtcblx0XHRcdGlmIChjdXJyZW50VmFsID09PSBcIlwiKSByZW5kZXJEYXNoYm9hcmRQYWdlKCk7XG5cdFx0fSk7XG5cdFx0Ly8gY29uc3Qgc2VhcmNoQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFwiXCIpO1xuXHRcdC8vIHNlYXJjaEJ0bi50ZXh0Q29udGVudCA9IFwiU2VhcmNoXCI7XG5cblx0XHRjb25zdCBoZWFkZXJDZW50ZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJoZWFkZXJDZW50ZXJcIiB9KTtcblx0XHRoZWFkZXJDZW50ZXIuYXBwZW5kKHNlYXJjaExhYmVsLCBzZWFyY2hJbnB1dCk7XG5cdFx0cmV0dXJuIGhlYWRlckNlbnRlcjtcblx0fVxuXHQvLy8vaGVhZGVyIFJJR0hUXG5cdGZ1bmN0aW9uIGNyZWF0ZUhlYWRlclJpZ2h0KCkge1xuXHRcdC8vc2VlZCBkYXRhXG5cdFx0Y29uc3Qgc2VlZERhdGFCdG4gPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wibmF2LWl0ZW1cIl0sIHtcblx0XHRcdGlkOiBcInNlZWQtcHJvamVjdHMtYnRuXCIsXG5cdFx0fSk7XG5cdFx0c2VlZERhdGFCdG4udGV4dENvbnRlbnQgPSBcIlNFRUQgREFUQVwiO1xuXHRcdHNlZWREYXRhQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWVkUHJvamVjdERhdGEpO1xuXHRcdC8vbG9naW5cblx0XHRjb25zdCBsb2dpbkVsID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcIm5hdi1pdGVtXCJdLCB7IGlkOiBcImxvZ2luXCIgfSk7XG5cdFx0bG9naW5FbC50ZXh0Q29udGVudCA9IFwiTE9HSU5cIjtcblx0XHQvL3NldHRpbmdzXG5cdFx0Y29uc3Qgc2V0dGluZ3NJY29uID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFwiXCIsIHtcblx0XHRcdGlkOiBcInNldHRpbmdzIGdlYXIgaWNvblwiLFxuXHRcdFx0c3JjOiBnZWFySWNvbixcblx0XHRcdGFsdDogXCJzZXR0aW5ncyBnZWFyIG91dGxpbmVcIixcblx0XHR9KTtcblx0XHRjb25zdCBzZXR0aW5nc0xpbmsgPSBkb21DcmVhdGUoXCJhXCIsIFwiXCIsIHtcblx0XHRcdGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FsZXhnZWlzL3RvZG8tbGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHRcdH0pO1xuXHRcdHNldHRpbmdzTGluay5hcHBlbmRDaGlsZChzZXR0aW5nc0ljb24pO1xuXHRcdGNvbnN0IHNldHRpbmdzRWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wibmF2LWl0ZW1cIl0sIHsgaWQ6IFwic2V0dGluZ3NcIiB9KTtcblx0XHRzZXR0aW5nc0VsLmFwcGVuZENoaWxkKHNldHRpbmdzTGluayk7XG5cdFx0Ly9tb2JpbGUgcmVzcG9uc2l2ZSBjb2RlIGZvciBzZXR0aW5ncyBsaW5rc1xuXHRcdGNvbnN0IHNtYWxsRGV2aWNlID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NzhweClcIik7XG5cdFx0c21hbGxEZXZpY2UuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVTbWFsbERldmljZUNoYW5nZSk7XG5cdFx0ZnVuY3Rpb24gaGFuZGxlU21hbGxEZXZpY2VDaGFuZ2UoZSkge1xuXHRcdFx0aWYgKGUubWF0Y2hlcykge1xuXHRcdFx0XHRzZXR0aW5nc0xpbmsucmVtb3ZlQ2hpbGQoc2V0dGluZ3NJY29uKTtcblx0XHRcdFx0c2V0dGluZ3NMaW5rLnRleHRDb250ZW50ID0gXCJTRVRUSU5HU1wiO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBsYXJnZURldmljZSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNzc4cHgpXCIpO1xuXHRcdGxhcmdlRGV2aWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlTGFyZ2VEZXZpY2VDaGFuZ2UpO1xuXHRcdGZ1bmN0aW9uIGhhbmRsZUxhcmdlRGV2aWNlQ2hhbmdlKGUpIHtcblx0XHRcdGlmIChlLm1hdGNoZXMpIHtcblx0XHRcdFx0c2V0dGluZ3NMaW5rLnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdFx0c2V0dGluZ3NMaW5rLmFwcGVuZENoaWxkKHNldHRpbmdzSWNvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vXG5cdFx0Y29uc3QgbmF2TWVudUxJMSA9IGRvbUNyZWF0ZShcImxpXCIsIFtcIm5hdi1pdGVtXCJdKTtcblx0XHRuYXZNZW51TEkxLmFwcGVuZENoaWxkKHNlZWREYXRhQnRuKTtcblx0XHRjb25zdCBuYXZNZW51TEkyID0gZG9tQ3JlYXRlKFwibGlcIiwgW1wibmF2LWl0ZW1cIl0pO1xuXHRcdG5hdk1lbnVMSTIuYXBwZW5kQ2hpbGQobG9naW5FbCk7XG5cdFx0Y29uc3QgbmF2TWVudUxJMyA9IGRvbUNyZWF0ZShcImxpXCIsIFtcIm5hdi1pdGVtXCJdKTtcblx0XHRuYXZNZW51TEkzLmFwcGVuZENoaWxkKHNldHRpbmdzRWwpO1xuXHRcdGNvbnN0IG5hdk1lbnVVTCA9IGRvbUNyZWF0ZShcInVsXCIsIFtcIm5hdi1tZW51XCJdKTtcblx0XHRuYXZNZW51VUwuYXBwZW5kKG5hdk1lbnVMSTEsIG5hdk1lbnVMSTIsIG5hdk1lbnVMSTMpO1xuXG5cdFx0Ly8gLy9oYW1idXJnZXIgbWVudVxuXHRcdC8vIGNvbnN0IGJhcjEgPSBkb21DcmVhdGUoXCJzcGFuXCIsIFtcImJhclwiXSk7XG5cdFx0Ly8gY29uc3QgYmFyMiA9IGRvbUNyZWF0ZShcInNwYW5cIiwgW1wiYmFyXCJdKTtcblx0XHQvLyBjb25zdCBiYXIzID0gZG9tQ3JlYXRlKFwic3BhblwiLCBbXCJiYXJcIl0pO1xuXHRcdC8vIGNvbnN0IGhhbWJ1cmdlckRpdiA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJoYW1idXJnZXJcIl0pO1xuXHRcdC8vIGhhbWJ1cmdlckRpdi5hcHBlbmQoYmFyMSwgYmFyMiwgYmFyMyk7XG5cdFx0Ly8gaGFtYnVyZ2VyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Ly8gXHRoYW1idXJnZXJEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0XHQvLyBcdG5hdk1lbnVVTC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXHRcdC8vIH0pO1xuXHRcdC8vaGVhZGVyUmlnaHQgYXBwZW5kXG5cdFx0Y29uc3QgaGVhZGVyUmlnaHQgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJoZWFkZXJSaWdodFwiIH0pO1xuXHRcdGhlYWRlclJpZ2h0LmFwcGVuZENoaWxkKG5hdk1lbnVVTCk7XG5cdFx0cmV0dXJuIGhlYWRlclJpZ2h0O1xuXHR9XG5cdC8vaGFtYnVyZ2VyIG1lbnVcblx0Y29uc3QgYmFyMSA9IGRvbUNyZWF0ZShcInNwYW5cIiwgW1wiYmFyXCJdKTtcblx0Y29uc3QgYmFyMiA9IGRvbUNyZWF0ZShcInNwYW5cIiwgW1wiYmFyXCJdKTtcblx0Y29uc3QgYmFyMyA9IGRvbUNyZWF0ZShcInNwYW5cIiwgW1wiYmFyXCJdKTtcblx0Y29uc3QgaGFtYnVyZ2VyRGl2ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcImhhbWJ1cmdlclwiXSk7XG5cdGhhbWJ1cmdlckRpdi5hcHBlbmQoYmFyMSwgYmFyMiwgYmFyMyk7XG5cdGhhbWJ1cmdlckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGhhbWJ1cmdlckRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXHRcdGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1tZW51XCIpO1xuXHRcdG5hdk1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0fSk7XG5cdC8vRlVMTCBIRUFERVIgQVBQRU5EXG5cdGNvbnN0IGhlYWRlciA9IGRvbUNyZWF0ZShcImhlYWRlclwiLCBcIlwiLCB7IGlkOiBcImhlYWRlclwiIH0pO1xuXHRoZWFkZXIuYXBwZW5kKFxuXHRcdGNyZWF0ZUhlYWRlckxlZnQoKSxcblx0XHRjcmVhdGVIZWFkZXJDZW50ZXIoKSxcblx0XHRjcmVhdGVIZWFkZXJSaWdodCgpLFxuXHRcdGhhbWJ1cmdlckRpdlxuXHQpO1xuXHRyZXR1cm4gaGVhZGVyO1xuXHQvLyAvL0NPTlRFTlQgQVBQRU5EXG5cdC8vIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cdC8vIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVySGVhZGVyIH07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vLi4vRE9NXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL3RyYXNoLWNhbi1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFRhc2tzIH0gZnJvbSBcIi4uL3BhZ2VzL3Byb2plY3RUYXNrc1wiO1xuaW1wb3J0IHsgcmVuZGVyVGFza0Zvcm0sIHJlbmRlclByb2plY3RGb3JtIH0gZnJvbSBcIi4uLy4uL2Zvcm1cIjtcblxuZnVuY3Rpb24gcmVuZGVyRGFzaGJvYXJkKCkge1xuXHQvL2dldCBhbGwgdGFza3MgZnJvbSBhbGwgcHJvamVjdHNcblx0Y29uc3QgY3VycmVudFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcblx0Y29uc29sZS5sb2coeyBjdXJyZW50UHJvamVjdHMgfSk7XG5cblx0Y29uc3QgcHJvamVjdFRhc2tEYXRhID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c1tpXTtcblx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0cHJvamVjdFRpdGxlOiBwcm9qZWN0LnRpdGxlLFxuXHRcdFx0dGFza3M6IHByb2plY3QudGFza3MsXG5cdFx0XHRpbmRleDogaSxcblx0XHR9O1xuXHRcdHByb2plY3RUYXNrRGF0YS5wdXNoKGRhdGEpO1xuXHR9XG5cdC8vIGNvbnNvbGUudGFibGUocHJvamVjdFRhc2tEYXRhKTtcblx0Ly9jbGVhciBjdXJyZW50IHRhc2tzXG5cdGNvbnN0IHRhc2tDb250YWluZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJtYWluLWNvbnRlbnRcIiB9KTtcblx0dGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXHQvL25vIHByb2plY3QgcmVzdWx0cyBiYWNrdXBcblx0aWYgKGN1cnJlbnRQcm9qZWN0cy5sZW5ndGggPT09IDApIHtcblx0XHR0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJObyBwcm9qZWN0c1wiO1xuXHRcdGNvbnN0IGVtcHR5RGl2ID0gZG9tQ3JlYXRlKFwiZGl2XCIpO1xuXHRcdGNvbnN0IGVtcHR5UHJvamVjdEJ0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBbXCJlbXB0eS1idG5cIl0sIHtcblx0XHRcdGlkOiBcImVtcHR5LXByb2plY3QtYnRuLWRhc2hcIixcblx0XHR9KTtcblx0XHRlbXB0eVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkNSRUFURSBQUk9KRUNUXCI7XG5cdFx0ZW1wdHlQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJQcm9qZWN0Rm9ybSk7XG5cdFx0dGFza0NvbnRhaW5lci5hcHBlbmQoZW1wdHlEaXYsIGVtcHR5UHJvamVjdEJ0bik7XG5cdH1cblx0Ly9ubyB0YXNrIHJlc3VsdHMgYmFja3VwXG5cdGNvbnN0IGN1cnJlbnRUYXNrcyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdHNbaV07XG5cdFx0Y3VycmVudFRhc2tzLnB1c2goLi4ucHJvamVjdC50YXNrcyk7XG5cdH1cblx0aWYgKGN1cnJlbnRQcm9qZWN0cy5sZW5ndGggPiAwICYmIGN1cnJlbnRUYXNrcy5sZW5ndGggPT09IDApIHtcblx0XHR0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJObyB0YXNrc1wiO1xuXHRcdGNvbnN0IGVtcHR5RGl2ID0gZG9tQ3JlYXRlKFwiZGl2XCIpO1xuXHRcdGNvbnN0IGVtcHR5VGFza0J0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBbXCJlbXB0eS1idG5cIl0sIHtcblx0XHRcdGlkOiBcImVtcHR5LXRhc2stYnRuLWRhc2hcIixcblx0XHR9KTtcblx0XHRlbXB0eVRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkNSRUFURSBUQVNLXCI7XG5cdFx0ZW1wdHlUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJUYXNrRm9ybSk7XG5cdFx0dGFza0NvbnRhaW5lci5hcHBlbmQoZW1wdHlEaXYsIGVtcHR5VGFza0J0bik7XG5cdH1cblx0Ly9yZW5kZXIgcHJvamVjdFRhc2tEYXRhIHRhc2tzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdFRhc2tEYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgZGF0YSA9IHByb2plY3RUYXNrRGF0YVtpXTtcblx0XHRjb25zb2xlLmxvZyh7IGRhdGEgfSk7XG5cdFx0Ly9pbm5lciB0YXNrIGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly90YXNrIGNhcmQgcmVuZGVyc1xuXHRcdGxldCB0YXNrRGF0YSA9IGRhdGEudGFza3M7XG5cdFx0Ly8gY29uc29sZS5sb2coeyB0YXNrRGF0YSB9KTsgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrRGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgdGFzayA9IHRhc2tEYXRhW2ldO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coeyB0YXNrIH0pO1xuXHRcdFx0Y29uc3QgdGFza0NhcmQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1jYXJkXCJdLCB7XG5cdFx0XHRcdFwiZGF0YS10YXNrLWluZGV4XCI6IGksXG5cdFx0XHR9KTtcblx0XHRcdC8vVElUTEVcblx0XHRcdGNvbnN0IHRhc2tUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXRpdGxlLWRhc2hcIl0pO1xuXHRcdFx0dGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0XHRcdC8vUFJPSkVDVCBUSVRMRVxuXHRcdFx0Y29uc3QgcHJvamVjdFRpdGxlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInByb2plY3QtdGl0bGUtZGFzaFwiXSk7XG5cdFx0XHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBkYXRhLnByb2plY3RUaXRsZTtcblx0XHRcdHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRjb25zdCBkYXNoYm9hcmRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFzaC1hc2lkZVwiKTtcblx0XHRcdFx0Y29uc3QgcHJvamVjdExpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0LWFzaWRlXCIpO1xuXHRcdFx0XHRjb25zdCBhbGxQcm9qZWN0c0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtcHJvamVjdHMtYXNpZGVcIik7XG5cdFx0XHRcdGlmICghcHJvamVjdExpc3RFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhc2lkZS1zZWxlY3RlZFwiKSkge1xuXHRcdFx0XHRcdHByb2plY3RMaXN0RWwuY2xhc3NMaXN0LmFkZChcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0XHRcdGRhc2hib2FyZEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdFx0XHRhbGxQcm9qZWN0c0VsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmdW5jdGlvbiBhY2NvcmRpb25Ub2dnbGUoKSB7XG5cdFx0XHRcdFx0Y29uc3QgcHJvamVjdExpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0XHRcdFx0XHRcdFwicHJvamVjdC1hY2NvcmRpb24tYnRuXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGNvbnN0IHByb2plY3RQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1wYW5lbC1kaXNwbGF5XCIpO1xuXHRcdFx0XHRcdHByb2plY3RMaXN0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cdFx0XHRcdFx0aWYgKHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcblx0XHRcdFx0XHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRhY2NvcmRpb25Ub2dnbGUoKTtcblx0XHRcdFx0Y29uc3QgcHJvamVjdFBhbmVsTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1wYW5lbC1saXN0XCIpO1xuXHRcdFx0XHRwcm9qZWN0UGFuZWxMaXN0LmNoaWxkTm9kZXNbZGF0YS5pbmRleF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XHRcInByb2plY3QtbGlzdC1zZWxlY3RlZFwiXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJlbmRlclByb2plY3RUYXNrcyhkYXRhLmluZGV4KTtcblx0XHRcdH0pO1xuXHRcdFx0Ly9ERVNDUklQVElPTlxuXHRcdFx0Y29uc3QgdGFza0Rlc2MgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1kZXNjcmlwdGlvblwiXSk7XG5cdFx0XHR0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cdFx0XHQvL0RVRSBEQVRFXG5cdFx0XHRjb25zdCB0YXNrRGF0ZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRhdGVcIl0pO1xuXHRcdFx0dGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cdFx0XHQvL1BSSU9SSVRZXG5cdFx0XHRjb25zdCB0YXNrUHJpb3JpdHkgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1wcmlvcml0eVwiXSk7XG5cdFx0XHR0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXHRcdFx0Ly9OT1RFU1xuXHRcdFx0Y29uc3QgdGFza05vdGVzID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stbm90ZXNcIl0pO1xuXHRcdFx0dGFza05vdGVzLnRleHRDb250ZW50ID0gdGFzay5ub3Rlcztcblx0XHRcdC8vREVMRVRFIElDT05cblx0XHRcdGNvbnN0IHRhc2tEZWxldGVJY29uID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFtcInRhc2stZGVsZXRlXCJdLCB7XG5cdFx0XHRcdHNyYzogZGVsZXRlSWNvbixcblx0XHRcdFx0YWx0OiBcInRyYXNoIGNhbiBkZWxldGUgaWNvblwiLFxuXHRcdFx0fSk7XG5cdFx0XHR0YXNrRGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSh0YXNrQ2FyZCk7XG5cdFx0XHRcdGNvbnN0IHRhc2tUaXRsZSA9XG5cdFx0XHRcdFx0dGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50O1xuXHRcdFx0XHRjb25zdCBwcm9qZWN0VGl0bGUgPVxuXHRcdFx0XHRcdHRhc2tEZWxldGVJY29uLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3RzW2ldO1xuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdC50YXNrcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGFzayA9IHByb2plY3QudGFza3Nbal07XG5cdFx0XHRcdFx0XHRpZiAocHJvamVjdFRpdGxlID09PSBwcm9qZWN0LnRpdGxlICYmIHRhc2tUaXRsZSA9PT0gdGFzay50aXRsZSkge1xuXHRcdFx0XHRcdFx0XHRwcm9qZWN0LnRhc2tzLnNwbGljZShqLCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdHMpKTtcblx0XHRcdFx0Ly8vLyBzdXBlcmZpY2lhbCBkZWxldGVcblx0XHRcdFx0Ly8gbGV0IGluZGV4ID1cblx0XHRcdFx0Ly8gXHR0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pbmRleFwiKTtcblx0XHRcdFx0Ly8gY3VycmVudFRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdC8vIHNldEN1cnJlbnRUYXNrcyhjdXJyZW50VGFza3MpO1xuXHRcdFx0XHQvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrcykpO1xuXHRcdFx0XHRyZW5kZXJEYXNoYm9hcmQoKTtcblx0XHRcdH0pO1xuXHRcdFx0Ly9BUFBFTkQgRUxFTUVOVFNcblx0XHRcdHRhc2tDYXJkLmFwcGVuZChcblx0XHRcdFx0dGFza1RpdGxlLFxuXHRcdFx0XHRwcm9qZWN0VGl0bGUsXG5cdFx0XHRcdHRhc2tEZXNjLFxuXHRcdFx0XHR0YXNrRGF0ZSxcblx0XHRcdFx0dGFza1ByaW9yaXR5LFxuXHRcdFx0XHR0YXNrTm90ZXMsXG5cdFx0XHRcdHRhc2tEZWxldGVJY29uXG5cdFx0XHQpO1xuXHRcdFx0Ly8gdGFza0NhcmQuaW5zZXJ0QmVmb3JlKHByb2plY3RUaXRsZSwgdGFza0NhcmQuY2hpbGROb2Rlc1sxXSk7XG5cdFx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRhc2tDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IHJlbmRlckRhc2hib2FyZCB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcbmltcG9ydCB7IHJlbmRlclRhc2tGb3JtIH0gZnJvbSBcIi4uLy4uL2Zvcm1cIjtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRhc2tzKGluZGV4KSB7XG5cdC8vZ2V0IGFsbCB0YXNrcyBmcm9tIGFsbCBwcm9qZWN0c1xuXHRjb25zdCBjdXJyZW50UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXHRjb25zdCByZW5kZXJQcm9qZWN0ID0gY3VycmVudFByb2plY3RzW2luZGV4XTtcblx0Y29uc3QgY3VycmVudFRhc2tzID0gcmVuZGVyUHJvamVjdC50YXNrcyB8fCBbXTtcblx0Ly91cGRhdGUgbWFpbiBoZWFkZXJcblx0Y29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1oZWFkZXJcIik7XG5cdG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSByZW5kZXJQcm9qZWN0LnRpdGxlLnRvVXBwZXJDYXNlKCk7XG5cdC8vY2xlYXIgY3VycmVudCB0YXNrc1xuXHRjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnRcIik7XG5cdHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0Ly9iYWNrdXAgdGV4dCBpZiBubyB0YXNrc1xuXHRpZiAoY3VycmVudFRhc2tzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRhc2tDb250YWluZXIudGV4dENvbnRlbnQgPSBcIk5vIHRhc2tzIGNyZWF0ZWQgeWV0XCI7XG5cdFx0Y29uc3QgZW1wdHlEaXYgPSBkb21DcmVhdGUoXCJkaXZcIik7XG5cdFx0Y29uc3QgZW1wdHlUYXNrQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImVtcHR5LWJ0blwiXSwge1xuXHRcdFx0aWQ6IFwiZW1wdHktdGFzay1idG4tZGFzaFwiLFxuXHRcdH0pO1xuXHRcdGVtcHR5VGFza0J0bi50ZXh0Q29udGVudCA9IFwiQ1JFQVRFIFRBU0tcIjtcblx0XHRlbXB0eVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRhc2tGb3JtKTtcblx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZChlbXB0eURpdiwgZW1wdHlUYXNrQnRuKTtcblx0XHQvL2F1dG9wb3B1bGF0ZSB0YXNrIGZvcm1cblx0XHRjb25zdCBleGlzdGluZ1Byb2plY3RTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGFzay1hZGRcIik7XG5cdFx0Y29uc3QgY2hpbGRBcnJheSA9IGV4aXN0aW5nUHJvamVjdFNlbGVjdC5jaGlsZE5vZGVzO1xuXHRcdGV4aXN0aW5nUHJvamVjdFNlbGVjdC5jaGlsZE5vZGVzWzBdLmRlZmF1bHRTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgY2hpbGRBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgb3B0aW9uID0gY2hpbGRBcnJheVtpXTtcblx0XHRcdGlmIChyZW5kZXJQcm9qZWN0LnRpdGxlID09PSBvcHRpb24udmFsdWUpIHtcblx0XHRcdFx0ZXhpc3RpbmdQcm9qZWN0U2VsZWN0LmNoaWxkTm9kZXNbaV0uZGVmYXVsdFNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly9yZW5kZXIgY3VycmVudFRhc2tzIHRhc2tzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdGFzayA9IGN1cnJlbnRUYXNrc1tpXTtcblx0XHRjb25zdCB0YXNrQ2FyZCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWNhcmRcIl0sIHsgXCJkYXRhLWluZGV4XCI6IGkgfSk7XG5cdFx0Ly9pbm5lciB0YXNrIGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly9USVRMRVxuXHRcdGNvbnN0IHRhc2tUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXRpdGxlXCJdKTtcblx0XHR0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRcdC8vREVTQ1JJUFRJT05cblx0XHRjb25zdCB0YXNrRGVzYyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRlc2NyaXB0aW9uXCJdKTtcblx0XHR0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cdFx0Ly9EVUUgREFURVxuXHRcdGNvbnN0IHRhc2tEYXRlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGF0ZVwiXSk7XG5cdFx0dGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cdFx0Ly9QUklPUklUWVxuXHRcdGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXByaW9yaXR5XCJdKTtcblx0XHR0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXHRcdC8vTk9URVNcblx0XHRjb25zdCB0YXNrTm90ZXMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1ub3Rlc1wiXSk7XG5cdFx0dGFza05vdGVzLnRleHRDb250ZW50ID0gdGFzay5ub3Rlcztcblx0XHQvL0RFTEVURSBJQ09OXG5cdFx0Y29uc3QgdGFza0RlbGV0ZUljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgW1widGFzay1kZWxldGVcIl0sIHtcblx0XHRcdHNyYzogZGVsZXRlSWNvbixcblx0XHRcdGFsdDogXCJ0cmFzaCBjYW4gZGVsZXRlIGljb25cIixcblx0XHR9KTtcblx0XHR0YXNrRGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0dGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUodGFza0NhcmQpO1xuXHRcdFx0bGV0IGluZGV4ID0gdGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXHRcdFx0Y3VycmVudFRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHQvLyBzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG5cdFx0XHRyZW5kZXJQcm9qZWN0VGFza3MoaW5kZXgpO1xuXHRcdH0pO1xuXHRcdC8vQVBQRU5EIEVMRU1FTlRTXG5cdFx0dGFza0NhcmQuYXBwZW5kKFxuXHRcdFx0dGFza1RpdGxlLFxuXHRcdFx0dGFza0Rlc2MsXG5cdFx0XHR0YXNrRGF0ZSxcblx0XHRcdHRhc2tQcmlvcml0eSxcblx0XHRcdHRhc2tOb3Rlcyxcblx0XHRcdHRhc2tEZWxldGVJY29uXG5cdFx0KTtcblx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblx0fVxufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0VGFza3MgfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi8uLi9ET01cIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0VGFza3MgfSBmcm9tIFwiLi9wcm9qZWN0VGFza3NcIjtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHNBbGwoKSB7XG5cdC8vZ2V0IGFsbCBwcm9qZWN0c1xuXHRjb25zdCBjdXJyZW50UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXHRjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdHMpO1xuXHQvL2NsZWFyIGN1cnJlbnQgY29udGVudFxuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwibWFpbi1jb250ZW50XCIgfSk7XG5cdC8vIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0Ly9yZW5kZXIgY3VycmVudFByb2plY3RzIHByb2plY3RzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c1tpXTtcblx0XHRjb25zdCBwcm9qZWN0Q2FyZCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJwcm9qZWN0LWNhcmRcIl0sIHsgXCJkYXRhLWluZGV4XCI6IGkgfSk7XG5cdFx0Ly9pbm5lciBwcm9qZWN0IGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly9USVRMRVxuXHRcdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJwcm9qZWN0LXRpdGxlXCJdKTtcblx0XHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXHRcdC8vREVTQ1JJUFRJT05cblx0XHRjb25zdCBwcm9qZWN0RGVzYyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCJdKTtcblx0XHRwcm9qZWN0RGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XG5cdFx0Ly9UQVNLU1xuXHRcdGNvbnN0IHByb2plY3RUYXNrc0xpc3QgPSBkb21DcmVhdGUoXCJ1bFwiLCBbXCJwcm9qZWN0LXRhc2tzLWxpc3RcIl0pO1xuXHRcdGxldCB0YXNrQXJyYXkgPSBwcm9qZWN0LnRhc2tzO1xuXHRcdGlmICh0YXNrQXJyYXkubGVuZ3RoID09PSAwKVxuXHRcdFx0cHJvamVjdFRhc2tzTGlzdC50ZXh0Q29udGVudCA9IFwiMCB0YXNrcyBpbiB0aGlzIHByb2plY3RcIjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgdGFzayA9IHRhc2tBcnJheVtpXTtcblx0XHRcdGNvbnN0IGxpID0gZG9tQ3JlYXRlKFwibGlcIiwgW1wicHJvamVjdC10YXNrLWxpc3QtaXRlbVwiXSk7XG5cdFx0XHRsaS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdFx0XHRwcm9qZWN0VGFza3NMaXN0LmFwcGVuZENoaWxkKGxpKTtcblx0XHR9XG5cdFx0Y29uc3QgcHJvamVjdFRhc2tzID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInByb2plY3QtdGFza3NcIl0pO1xuXHRcdHByb2plY3RUYXNrcy5hcHBlbmRDaGlsZChwcm9qZWN0VGFza3NMaXN0KTtcblx0XHQvL0RFTEVURSBJQ09OXG5cdFx0Y29uc3QgcHJvamVjdERlbGV0ZUljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgW1wicHJvamVjdC1kZWxldGVcIl0sIHtcblx0XHRcdHNyYzogZGVsZXRlSWNvbixcblx0XHRcdGFsdDogXCJ0cmFzaCBjYW4gZGVsZXRlIGljb25cIixcblx0XHR9KTtcblx0XHRwcm9qZWN0RGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cHJvamVjdERlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUocHJvamVjdENhcmQpO1xuXHRcdFx0bGV0IGluZGV4ID0gcHJvamVjdERlbGV0ZUljb24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXHRcdFx0Y3VycmVudFByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHQvLyBzZXRDdXJyZW50UHJvamVjdHMoY3VycmVudFByb2plY3RzKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3RzKSk7XG5cdFx0XHRyZW5kZXJQcm9qZWN0c0FsbCgpO1xuXHRcdH0pO1xuXHRcdC8vQVBQRU5EIEVMRU1FTlRTXG5cdFx0cHJvamVjdENhcmQuYXBwZW5kKFxuXHRcdFx0cHJvamVjdFRpdGxlLFxuXHRcdFx0cHJvamVjdERlc2MsXG5cdFx0XHRwcm9qZWN0VGFza3MsXG5cdFx0XHRwcm9qZWN0RGVsZXRlSWNvblxuXHRcdCk7XG5cdFx0cHJvamVjdENhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGRhc2hib2FyZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXNoLWFzaWRlXCIpO1xuXHRcdFx0Y29uc3QgcHJvamVjdExpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0LWFzaWRlXCIpO1xuXHRcdFx0Y29uc3QgYWxsUHJvamVjdHNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLXByb2plY3RzLWFzaWRlXCIpO1xuXHRcdFx0aWYgKCFwcm9qZWN0TGlzdEVsLmNsYXNzTGlzdC5jb250YWlucyhcImFzaWRlLXNlbGVjdGVkXCIpKSB7XG5cdFx0XHRcdHByb2plY3RMaXN0RWwuY2xhc3NMaXN0LmFkZChcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0XHRkYXNoYm9hcmRFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRcdGFsbFByb2plY3RzRWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0fVxuXHRcdFx0ZnVuY3Rpb24gYWNjb3JkaW9uVG9nZ2xlKCkge1xuXHRcdFx0XHRjb25zdCBwcm9qZWN0TGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1hY2NvcmRpb24tYnRuXCIpO1xuXHRcdFx0XHRjb25zdCBwcm9qZWN0UGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtcGFuZWwtZGlzcGxheVwiKTtcblx0XHRcdFx0cHJvamVjdExpc3RCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0XHRcdFx0aWYgKHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcblx0XHRcdFx0XHRwcm9qZWN0UGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRhY2NvcmRpb25Ub2dnbGUoKTtcblx0XHRcdGNvbnN0IHByb2plY3RQYW5lbExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtcGFuZWwtbGlzdFwiKTtcblx0XHRcdHByb2plY3RQYW5lbExpc3QuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LXNlbGVjdGVkXCIpO1xuXHRcdFx0cmVuZGVyUHJvamVjdFRhc2tzKGkpO1xuXHRcdH0pO1xuXHRcdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuXHR9XG5cdHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0c0FsbCB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcblxuZnVuY3Rpb24gcmVuZGVyU2VhcmNoKHNlYXJjaCkge1xuXHRpZiAoc2VhcmNoID09PSBcIlwiKSByZXR1cm47XG5cdC8vZ2V0IGFsbCB0YXNrcyBmcm9tIGFsbCBwcm9qZWN0c1xuXHRjb25zdCBjdXJyZW50UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXHRjb25zdCBjdXJyZW50VGFza3MgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3RzW2ldO1xuXHRcdGN1cnJlbnRUYXNrcy5wdXNoKC4uLnByb2plY3QudGFza3MpO1xuXHR9XG5cdGNvbnN0IGZpbHRlclRhc2tzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdGFzayA9IGN1cnJlbnRUYXNrc1tpXTtcblx0XHRsZXQgbG93ZXJUaXRsZSA9IHRhc2sudGl0bGUudG9Mb3dlckNhc2UoKTtcblx0XHRsZXQgbG93ZXJTZWFyY2ggPSBzZWFyY2gudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAobG93ZXJUaXRsZS5pbmNsdWRlcyhsb3dlclNlYXJjaCkpIHtcblx0XHRcdGZpbHRlclRhc2tzLnB1c2godGFzayk7XG5cdFx0fVxuXHR9XG5cdC8vdXBkYXRlIG1haW4gaGVhZGVyXG5cdGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4taGVhZGVyXCIpO1xuXHRtYWluSGVhZGVyLnRleHRDb250ZW50ID0gXCJTRUFSQ0ggUkVTVUxUU1wiO1xuXHQvL2NsZWFyIGN1cnJlbnQgdGFza3Ncblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuXHR0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cdC8vbm8gc2VhcmNoIHJlc3VsdHMgYmFja3VwXG5cdGlmIChmaWx0ZXJUYXNrcy5sZW5ndGggPT09IDApIHtcblx0XHR0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJObyBzZWFyY2ggcmVzdWx0c1wiO1xuXHR9XG5cdC8vcmVuZGVyIGZpbHRlclRhc2tzIHRhc2tzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyVGFza3MubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCB0YXNrID0gZmlsdGVyVGFza3NbaV07XG5cdFx0Y29uc3QgdGFza0NhcmQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1jYXJkXCJdLCB7IFwiZGF0YS10YXNrLWluZGV4XCI6IGkgfSk7XG5cdFx0Ly9pbm5lciB0YXNrIGNhcmQgZGl2IGl0ZW1zXG5cdFx0Ly9USVRMRVxuXHRcdGNvbnN0IHRhc2tUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXRpdGxlXCJdKTtcblx0XHR0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRcdC8vREVTQ1JJUFRJT05cblx0XHRjb25zdCB0YXNrRGVzYyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRlc2NyaXB0aW9uXCJdKTtcblx0XHR0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cdFx0Ly9EVUUgREFURVxuXHRcdGNvbnN0IHRhc2tEYXRlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGF0ZVwiXSk7XG5cdFx0dGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cdFx0Ly9QUklPUklUWVxuXHRcdGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLXByaW9yaXR5XCJdKTtcblx0XHR0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXHRcdC8vTk9URVNcblx0XHRjb25zdCB0YXNrTm90ZXMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1ub3Rlc1wiXSk7XG5cdFx0dGFza05vdGVzLnRleHRDb250ZW50ID0gdGFzay5ub3Rlcztcblx0XHQvL0RFTEVURSBJQ09OXG5cdFx0Y29uc3QgdGFza0RlbGV0ZUljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgW1widGFzay1kZWxldGVcIl0sIHtcblx0XHRcdHNyYzogZGVsZXRlSWNvbixcblx0XHRcdGFsdDogXCJ0cmFzaCBjYW4gZGVsZXRlIGljb25cIixcblx0XHR9KTtcblx0XHR0YXNrRGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0dGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUodGFza0NhcmQpO1xuXHRcdFx0bGV0IGluZGV4ID0gdGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staW5kZXhcIik7XG5cdFx0XHRmaWx0ZXJUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0Ly8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaWx0ZXJUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShmaWx0ZXJUYXNrcykpO1xuXHRcdFx0cmVuZGVyU2VhcmNoKHNlYXJjaCk7XG5cdFx0fSk7XG5cdFx0Ly9BUFBFTkQgRUxFTUVOVFNcblx0XHR0YXNrQ2FyZC5hcHBlbmQoXG5cdFx0XHR0YXNrVGl0bGUsXG5cdFx0XHR0YXNrRGVzYyxcblx0XHRcdHRhc2tEYXRlLFxuXHRcdFx0dGFza1ByaW9yaXR5LFxuXHRcdFx0dGFza05vdGVzLFxuXHRcdFx0dGFza0RlbGV0ZUljb25cblx0XHQpO1xuXHRcdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXHR9XG5cdC8vIHJldHVybiB0YXNrQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyByZW5kZXJTZWFyY2ggfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi9ET01cIjtcbmltcG9ydCB7IHJlbmRlckRhc2hib2FyZCB9IGZyb20gXCIuL3BhZ2VzL2Rhc2hib2FyZFwiO1xuaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCB7IHJlbmRlckFzaWRlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hc2lkZVwiO1xuaW1wb3J0IHsgcmVuZGVyQWRkVGFza0Zvcm0gfSBmcm9tIFwiLi9jb21wb25lbnRzL2FkZFRhc2tGb3JtXCI7XG5pbXBvcnQgeyByZW5kZXJBZGRQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2NvbXBvbmVudHMvYWRkUHJvamVjdEZvcm1cIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzQWxsIH0gZnJvbSBcIi4vcGFnZXMvcHJvamVjdHNBbGxcIjtcblxuY29uc3QgaGVhZGVyID0gcmVuZGVySGVhZGVyKCk7XG5cbmNvbnN0IGFzaWRlID0gcmVuZGVyQXNpZGUoKTtcblxuY29uc3QgbWFpblNlY3Rpb24gPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJtYWluLXNlY3Rpb25cIiB9KTtcbmNvbnN0IG1haW5IZWFkZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJtYWluLWhlYWRlclwiIH0pO1xubWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG5cbmNvbnN0IG1haW5EaXYgPSBkb21DcmVhdGUoXCJtYWluXCIsIFwiXCIsIHsgaWQ6IFwibWFpblwiIH0pO1xubWFpbkRpdi5hcHBlbmQoYXNpZGUsIG1haW5TZWN0aW9uKTtcblxuY29uc3QgdGFza0Zvcm0gPSByZW5kZXJBZGRUYXNrRm9ybSgpO1xuY29uc3QgcHJvamVjdEZvcm0gPSByZW5kZXJBZGRQcm9qZWN0Rm9ybSgpO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29udGVudC5hcHBlbmQoaGVhZGVyLCBtYWluRGl2LCB0YXNrRm9ybSwgcHJvamVjdEZvcm0pO1xuXG5mdW5jdGlvbiByZW5kZXJEYXNoYm9hcmRQYWdlKCkge1xuXHRtYWluSGVhZGVyLnRleHRDb250ZW50ID0gXCJEQVNIQk9BUkRcIjtcblx0Y29uc3QgZGFzaGJvYXJkID0gcmVuZGVyRGFzaGJvYXJkKCk7XG5cdHJlcGxhY2VIZWxwZXIoZGFzaGJvYXJkKTtcbn1cbmZ1bmN0aW9uIHJlbmRlckFsbFByb2plY3RzUGFnZSgpIHtcblx0bWFpbkhlYWRlci50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFNcIjtcblx0Y29uc3QgYWxsUHJvamVjdHMgPSByZW5kZXJQcm9qZWN0c0FsbCgpO1xuXHRyZXBsYWNlSGVscGVyKGFsbFByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUhlbHBlcihuZXdTaWIpIHtcblx0aWYgKG1haW5IZWFkZXIubmV4dFNpYmxpbmcpIHtcblx0XHRjb25zdCBuZXh0U2liID0gbWFpbkhlYWRlci5uZXh0U2libGluZztcblx0XHRtYWluU2VjdGlvbi5yZXBsYWNlQ2hpbGQobmV3U2liLCBuZXh0U2liKTtcblx0fSBlbHNlIHtcblx0XHRtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChuZXdTaWIpO1xuXHR9XG59XG5cbi8vIGZ1bmN0aW9uIHJlbmRlclNlYXJjaFBhZ2UoKSB7XG4vLyBcdG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBcIlNFQVJDSCBSRVNVTFRTXCI7XG4vLyBcdC8vIGNvbnN0IGFsbFByb2plY3RzID0gcmVuZGVyUHJvamVjdHNBbGwoKTtcbi8vIFx0Ly8gcmVwbGFjZUhlbHBlcihhbGxQcm9qZWN0cyk7XG4vLyB9XG5cbmV4cG9ydCB7IHJlbmRlckRhc2hib2FyZFBhZ2UsIHJlbmRlckFsbFByb2plY3RzUGFnZSB9O1xuIiwiY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5jb25zdCBzYXZlZFRhc2tzID0gW107XG5sZXQgY3VycmVudFRhc2tzID0gc2F2ZWRUYXNrcztcbmxldCBjdXJyZW50UHJvamVjdHMgPSBzYXZlZFByb2plY3RzO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50VGFza3MobmV3VGFza3MpIHtcblx0Y3VycmVudFRhc2tzID0gbmV3VGFza3M7XG5cdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0cyhuZXdQcm9qZWN0cykge1xuXHRjdXJyZW50UHJvamVjdHMgPSBuZXdQcm9qZWN0cztcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdHMpKTtcbn1cblxuZXhwb3J0IHsgc2V0Q3VycmVudFRhc2tzLCBzZXRDdXJyZW50UHJvamVjdHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==