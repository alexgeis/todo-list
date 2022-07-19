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










// import { renderSite } from "./js/render/renderPages";
//TEST DATA
// import { taskData } from "./js/data/taskData";
// localStorage.setItem("tasks", taskData);

// renderHeader();

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

/***/ "./src/js/render/components/addProjectForm.js":
/*!****************************************************!*\
  !*** ./src/js/render/components/addProjectForm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAddProjectForm": () => (/* binding */ renderAddProjectForm)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ "./src/js/DOM.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state */ "./src/js/state.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form */ "./src/js/form.js");
/* harmony import */ var _pages_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/dashboard */ "./src/js/render/pages/dashboard.js");





const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];

function addProjectSubmit() {
	const newProject = createProject({
		title: document.querySelector("#p-title").value,
		description: document.querySelector("#p-desc").value,
	});
	savedProjects.push(newProject);
	(0,_state__WEBPACK_IMPORTED_MODULE_1__.setCurrentProjects)(savedProjects);
	(0,_pages_dashboard__WEBPACK_IMPORTED_MODULE_3__.renderDashboard)();
	(0,_form__WEBPACK_IMPORTED_MODULE_2__.closeProjectForm)();
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
	closeBtn.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_2__.closeProjectForm);
	//title
	const titleLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", [""], { for: "t-title" });
	titleLabel.textContent = "Title *";
	const titleInput = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("input", ["form-control"], {
		id: "t-title",
		type: "text",
		name: "p-title",
		placeholder: "Title",
	});
	const titleErrMsg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("small", ["err-msg"]);
	titleErrMsg.textContent = " * Title is required";
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
	clearBtn.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_2__.clearProjectForm);
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
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../form */ "./src/js/form.js");
/* harmony import */ var _pages_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/dashboard */ "./src/js/render/pages/dashboard.js");




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
	(0,_pages_dashboard__WEBPACK_IMPORTED_MODULE_2__.renderDashboard)();
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
	closeBtn.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_1__.closeTaskForm);
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
	addBtn.addEventListener("click", addTaskSubmit);
	const clearBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", ["btn"], {
		id: "task-clear",
	});
	clearBtn.textContent = "Clear fields";
	clearBtn.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_1__.clearTaskForm);
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

/***/ "./src/js/render/components/header.js":
/*!********************************************!*\
  !*** ./src/js/render/components/header.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAddMenu": () => (/* binding */ renderAddMenu),
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ "./src/js/DOM.js");
/* harmony import */ var _assets_checkbox_marked_circle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/checkbox-marked-circle.png */ "./src/assets/checkbox-marked-circle.png");
/* harmony import */ var _assets_plus_circle_outline_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/plus-circle-outline.png */ "./src/assets/plus-circle-outline.png");
/* harmony import */ var _assets_checkbox_marked_circle_plus_outline_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/checkbox-marked-circle-plus-outline.png */ "./src/assets/checkbox-marked-circle-plus-outline.png");
/* harmony import */ var _assets_list_group_plus_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/list-group-plus.png */ "./src/assets/list-group-plus.png");
/* harmony import */ var _assets_cog_outline_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/cog-outline.png */ "./src/assets/cog-outline.png");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../form */ "./src/js/form.js");








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
	addBtnIcon.addEventListener("click", renderAddMenu);
	const addIconMenu = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", [""], { id: "add-icon-menu" });
	const addTaskImg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("img", [""], {
		id: "add-task-form",
		src: _assets_checkbox_marked_circle_plus_outline_png__WEBPACK_IMPORTED_MODULE_3__,
		alt: "add task plus icon",
	});
	addTaskImg.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_6__.renderTaskForm);
	const addProjectImg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("img", [""], {
		id: "add-project-form",
		src: _assets_list_group_plus_png__WEBPACK_IMPORTED_MODULE_4__,
		alt: "add project plus icon",
	});
	addProjectImg.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_6__.renderProjectForm);
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
	// const mainSection = document.getElementById("main-section");
	// mainSection.append(mainHeader,taskContainer)
	// const content = document.getElementById("content");
	// content.appendChild(mainSection)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMvQjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0Esb0JBQW9CLCtDQUFTLGdCQUFnQixnQkFBZ0I7QUFDN0Q7QUFDQSxxQkFBcUIsK0NBQVMsZ0JBQWdCLG1CQUFtQjtBQUNqRTtBQUNBO0FBQ0EsZ0JBQWdCLCtDQUFTLG1CQUFtQixjQUFjO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGRDtBQUN5Qjs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBLG1CQUFtQiwrQ0FBUyx5QkFBeUIsc0JBQXNCO0FBQzNFO0FBQ0E7QUFDQSxvQkFBb0IsK0NBQVM7QUFDN0I7QUFDQTtBQUNBLG1CQUFtQiwrQ0FBUztBQUM1QjtBQUNBO0FBQ0EsbUJBQW1CLCtDQUFTO0FBQzVCO0FBQ0E7QUFDQSx1QkFBdUIsK0NBQVM7QUFDaEM7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBUztBQUM3QjtBQUNBO0FBQ0EseUJBQXlCLCtDQUFTO0FBQ2xDLFFBQVEsMERBQVU7QUFDbEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJCOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkUzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLnNjc3M/NjJhZiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvY3JlYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9kYXRhL3Byb2plY3REYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9kYXRhL3NlZWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9jb21wb25lbnRzL2FkZFByb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvY29tcG9uZW50cy9hZGRUYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvcGFnZXMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBjcmVhdGVUYXNrLCBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vanMvY3JlYXRlXCI7XG5pbXBvcnQge1xuXHRyZW5kZXJUYXNrRm9ybSxcblx0cmVuZGVyUHJvamVjdEZvcm0sXG5cdGNsZWFyVGFza0Zvcm0sXG5cdGNsb3NlVGFza0Zvcm0sXG5cdGNsZWFyUHJvamVjdEZvcm0sXG5cdGNsb3NlUHJvamVjdEZvcm0sXG59IGZyb20gXCIuL2pzL2Zvcm1cIjtcbmltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuL2pzL0RPTVwiO1xuaW1wb3J0IHsgcmVuZGVyQWRkTWVudSwgcmVuZGVySGVhZGVyIH0gZnJvbSBcIi4vanMvcmVuZGVyL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgeyByZW5kZXJEYXNoYm9hcmQgfSBmcm9tIFwiLi9qcy9yZW5kZXIvcGFnZXMvZGFzaGJvYXJkXCI7XG5pbXBvcnQge1xuXHRhZGRUYXNrU3VibWl0LFxuXHRyZW5kZXJBZGRUYXNrRm9ybSxcbn0gZnJvbSBcIi4vanMvcmVuZGVyL2NvbXBvbmVudHMvYWRkVGFza0Zvcm1cIjtcbmltcG9ydCB7XG5cdGFkZFByb2plY3RTdWJtaXQsXG5cdHJlbmRlckFkZFByb2plY3RGb3JtLFxufSBmcm9tIFwiLi9qcy9yZW5kZXIvY29tcG9uZW50cy9hZGRQcm9qZWN0Rm9ybVwiO1xuaW1wb3J0IHsgc2V0Q3VycmVudFRhc2tzLCBzZXRDdXJyZW50UHJvamVjdHMgfSBmcm9tIFwiLi9qcy9zdGF0ZVwiO1xuaW1wb3J0IHsgc2VlZFByb2plY3REYXRhIH0gZnJvbSBcIi4vanMvZGF0YS9zZWVkXCI7XG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5zY3NzXCI7XG4vLyBpbXBvcnQgeyByZW5kZXJTaXRlIH0gZnJvbSBcIi4vanMvcmVuZGVyL3JlbmRlclBhZ2VzXCI7XG4vL1RFU1QgREFUQVxuLy8gaW1wb3J0IHsgdGFza0RhdGEgfSBmcm9tIFwiLi9qcy9kYXRhL3Rhc2tEYXRhXCI7XG4vLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIHRhc2tEYXRhKTtcblxuLy8gcmVuZGVySGVhZGVyKCk7XG5cbi8vU0VFRCBEQVRBIEJUTlxuLy8gZG9jdW1lbnRcbi8vIFx0LnF1ZXJ5U2VsZWN0b3IoXCIjc2VlZC1wcm9qZWN0cy1idG5cIilcbi8vIFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWVkUHJvamVjdERhdGEpO1xuXG4vLy8vIFNUQVRFIC8vLy9cbi8vREVGQVVMVFNcbmNvbnN0IERFRkFVTFRfVEhFTUUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IFwibGlnaHRcIjtcbmNvbnN0IHNhdmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuY29uc3Qgc2F2ZWRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XG4vLyBjb25zdCBjdXJyZW50bHlEb25lID0gc2F2ZWRUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGUgPT09IHRydWUpO1xuLy8gY29uc3QgREVGQVVMVF9UQVNLU19ET05FID0gY3VycmVudGx5RG9uZS5sZW5ndGg7XG4vLyBjb25zdCBERUZBVUxUX1RBU0tTX1RPVEFMID0gc2F2ZWRCb29rcy5sZW5ndGg7XG5cbmxldCBjdXJyZW50VGFza3MgPSBzYXZlZFRhc2tzO1xubGV0IGN1cnJlbnRQcm9qZWN0cyA9IHNhdmVkUHJvamVjdHM7XG5sZXQgY3VycmVudFRoZW1lID0gREVGQVVMVF9USEVNRTtcbi8vIGxldCBjdXJyZW50VGFza3NEb25lQ291bnQgPSBERUZBVUxUX1RBU0tTX0RPTkU7XG4vLyBsZXQgY3VycmVudFRhc2tzVG90YWxDb3VudCA9IERFRkFVTFRfVEFTS1NfVE9UQUw7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cdC8vIHJlbmRlclNpdGUoKTtcblx0Ly8gc2V0Q3VycmVudFRoZW1lKERFRkFVTFRfVEhFTUUpO1xuXHQvLyBzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0Ly8gc2V0Q3VycmVudFByb2plY3RzKGN1cnJlbnRQcm9qZWN0cyk7XG5cdC8vIHJlbmRlclByb2plY3RBc2lkZUxpc3QoKTtcblx0Ly8gXHRyZW5kZXJEYXNoYm9hcmQoKTtcblx0Ly8gfSk7XG5cdC8vXG5cdC8vIFx0cmVuZGVyUHJvamVjdHNBbGwoKTtcblx0Ly8gfSk7XG5cdC8vIHJlbmRlckRhc2hib2FyZCgpO1xufTtcbiIsIi8vIERPTSBDUkVBVEUgRlVOQ1RJT05cblxuLy9hcmcgMSA9IG5hbWUgb2YgSFRNTCBlbGVtZW50XG4vLyBhcmcgMiA9IGNsYXNzIG5hbWVzIHRvIGFkZFxuLy8gYXJnIDMgPSBvYmplY3QgLSBhdHRyaWJ1dGVzIHRvIGFkZCAtPiBhdHRyaWJ1dGUgOiB2YWx1ZVxuZnVuY3Rpb24gZG9tQ3JlYXRlKGFyZzEsIGFyZzIsIGFyZzMpIHtcblx0Ly9hcmcgMSA9IFwic3RyaW5nXCIgLSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmcxKTtcblx0Ly8gYXJnIDIgPSBbXCJhcnJheSBvZiBzdHJpbmdzXCJdIC0gY2xhc3MgbmFtZXMgdG8gYWRkXG5cdGlmIChhcmcyLmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFyZzIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IGFyZzJbaV07XG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0XHR9XG5cdH1cblx0Ly8gYXJnIDMgPSB7b2JqZWN0fSAtIGF0dHJpYnV0ZSBuYW1lIDogdmFsdWVcblx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgaW4gYXJnMykge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXJnM1thdHRyaWJ1dGVdKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IHsgZG9tQ3JlYXRlIH07XG4iLCIvL0RFTU9cblxuLy8gY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4vLyBjb25zdCB0YXNrRGVtbzEgPSBjcmVhdGVUYXNrKHtcbi8vIFx0dGl0bGU6IFwiV2FsayB0aGUgRG9nXCIsXG4vLyBcdGRlc2NyaXB0aW9uOiBcInRha2UgdGhlIGRvZ2dvIG9uIGEgbGlsIHN0cm9sbFwiLFxuLy8gXHRkdWVEYXRlOiBkYXRlLFxuLy8gXHRwcmlvcml0eTogMyxcbi8vIFx0bm90ZXM6IFwiYXZvaWQgOXRoIGFuZCBFbG0gLSBhZ2dyZXNzaXZlIGRvZ1wiLFxuLy8gfSk7XG4vLyBjb25zdCBwcm9qZWN0RGVtbzEgPSBjcmVhdGVQcm9qZWN0KHtcbi8vIFx0dGl0bGU6IFwiUGVyc29uYWxcIixcbi8vIFx0ZGVzY3JpcHRpb246IFwicGxlYXN1cmUsIG5vdCBidXNpbmVzc1wiLFxuLy8gfSk7XG4vLyBwcm9qZWN0RGVtbzEuYWRkVGFza3RvUHJvamVjdCh0YXNrRGVtbzEpO1xuXG5jb25zdCBjcmVhdGVUYXNrID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMgfSkgPT4gKHtcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHRkdWVEYXRlLFxuXHRwcmlvcml0eSxcblx0bm90ZXMsXG5cdHByaW50VGFzaygpIHtcblx0XHRyZXR1cm4gYCR7dGhpcy50aXRsZX06ICR7dGhpcy5kZXNjcmlwdGlvbn1gO1xuXHR9LFxufSk7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4gKHtcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHR0YXNrczogW10sXG5cdHByaW50UHJvamVjdCgpIHtcblx0XHRyZXR1cm4gYFByb2plY3QgJHt0aGlzLnRpdGxlfTogJHt0aGlzLmRlc2NyaXB0aW9ufWA7XG5cdH0sXG5cdHByaW50VGFza3MoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy50YXNrcyk7XG5cdH0sXG5cdGFkZFRhc2t0b1Byb2plY3QodGFzaykge1xuXHRcdHRoaXMudGFza3MucHVzaCh0YXNrKTtcblx0fSxcbn0pO1xuXG5leHBvcnQgeyBjcmVhdGVUYXNrLCBjcmVhdGVQcm9qZWN0IH07XG4iLCJjb25zdCBwcm9qZWN0RGF0YSA9IFtcblx0e1xuXHRcdHRpdGxlOiBcIkxhd25tb3dlclwiLFxuXHRcdGRlc2NyaXB0aW9uOiBcImxhbmRzY2FwaW5nIHByb2plY3RcIixcblx0XHR0YXNrczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJNb3cgdGhlIGxhd25cIixcblx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0XCJnZXQgb3V0IHRoZXJlIHdpdGggdGhlIGRhbmcgbW93ZXIgYW5kIG1vdyB0aGF0IHRoZXJlIGxhd24gdGhlcmVcIixcblx0XHRcdFx0ZHVlRGF0ZTogXCIyMDIyLTA3LTI5XCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcIjFcIixcblx0XHRcdFx0bm90ZXM6IFwiUmV0dXJuIG1vd2VyIHRvIG5laWdoYm9yIHdoZW4gZmluaXNoZWRcIixcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIkFub3RoZXIgUHJvamVjdFwiLFxuXHRcdGRlc2NyaXB0aW9uOiBcIm1pc2NlbGxhbmVvdXMgdGFza3NcIixcblx0XHR0YXNrczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJXYWxrIHRoZSBkb2dcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwibGVhc2gsIG9wZW4gZG9vciwgd2FsayBhcm91bmQsIGNvbWUgYmFja1wiLFxuXHRcdFx0XHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwiMlwiLFxuXHRcdFx0XHRub3RlczogXCJhdm9pZCBvdGhlciBkb2dzIVwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiQ29vayBkaW5uZXJcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiY2hpY2tlbiB0aWtrYSBtYXNhbGEsIHcvIGphc21pbmUgcmljZSwgYW5kIHNhbW9zYXNcIixcblx0XHRcdFx0ZHVlRGF0ZTogXCIyMDIyLTA2LTEyXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcIjNcIixcblx0XHRcdFx0bm90ZXM6IFwibm8gcGVhbnV0cyFcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIlJlYWQgJ09jdG9iZXInIEJvb2tcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwicmVhZCBhdCBsZWFzdCA0MCBwYWdlcyB0b2RheVwiLFxuXHRcdFx0XHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwiNVwiLFxuXHRcdFx0XHRub3RlczogXCJcIixcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIkEgVGhpcmQgUHJvamVjdCBmb3IgdGhlIExpc3RcIixcblx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFwibG9uZ2VyIGRlc2NyaXB0aW9uIGZvciBhIG1vcmUgY29tcGxpY2F0ZWQgdGFzayBwcm9qZWN0IGJyZWFrZG93blwiLFxuXHRcdHRhc2tzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIlJlYWQgJ09jdG9iZXInIEJvb2tcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwicmVhZCBhdCBsZWFzdCA0MCBwYWdlcyB0b2RheVwiLFxuXHRcdFx0XHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwiNVwiLFxuXHRcdFx0XHRub3RlczogXCJcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIkJ1eSByb3Nlc1wiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCIyIGRvemVuIHJvc2VzIGZyb20gU2FmZXdheVwiLFxuXHRcdFx0XHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwiNVwiLFxuXHRcdFx0XHRub3RlczogXCJyZWQgcm9zZXNcIixcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcbl07XG5cbmV4cG9ydCB7IHByb2plY3REYXRhIH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0RGF0YSB9IGZyb20gXCIuL3Byb2plY3REYXRhXCI7XG5cbmZ1bmN0aW9uIHNlZWRQcm9qZWN0RGF0YSgpIHtcblx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpKTtcbn1cbmV4cG9ydCB7IHNlZWRQcm9qZWN0RGF0YSB9O1xuIiwiY29uc3QgYWRkVGFza0Zvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Rhc2tfc2VjdGlvblwiKTtcbmZ1bmN0aW9uIHJlbmRlclRhc2tGb3JtKCkge1xuXHRhZGRUYXNrRm9ybUVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogYmxvY2s7XCIpO1xufVxuY29uc3QgYWRkUHJvamVjdEZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Byb2plY3Rfc2VjdGlvblwiKTtcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RGb3JtKCkge1xuXHRhZGRQcm9qZWN0Rm9ybUVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogYmxvY2s7XCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tGb3JtKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtdGl0bGVcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGVzY1wiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kYXRlXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LW5vdGVzXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRhc2stYWRkXCIpLm9wdGlvbnMuc2VsZWN0ZWRJbmRleCA9IDA7XG59XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XG5cdGFkZFRhc2tGb3JtRWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0Rm9ybSgpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwLXRpdGxlXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwLWRlc2NcIikudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuXHRhZGRQcm9qZWN0Rm9ybUVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG59XG5cbmV4cG9ydCB7XG5cdHJlbmRlclRhc2tGb3JtLFxuXHRyZW5kZXJQcm9qZWN0Rm9ybSxcblx0Y2xlYXJUYXNrRm9ybSxcblx0Y2xvc2VUYXNrRm9ybSxcblx0Y2xlYXJQcm9qZWN0Rm9ybSxcblx0Y2xvc2VQcm9qZWN0Rm9ybSxcbn07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vLi4vRE9NXCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50UHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IGNsZWFyUHJvamVjdEZvcm0sIGNsb3NlUHJvamVjdEZvcm0gfSBmcm9tIFwiLi4vLi4vZm9ybVwiO1xuaW1wb3J0IHsgcmVuZGVyRGFzaGJvYXJkIH0gZnJvbSBcIi4uL3BhZ2VzL2Rhc2hib2FyZFwiO1xuXG5jb25zdCBzYXZlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdFN1Ym1pdCgpIHtcblx0Y29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3Qoe1xuXHRcdHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtdGl0bGVcIikudmFsdWUsXG5cdFx0ZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcC1kZXNjXCIpLnZhbHVlLFxuXHR9KTtcblx0c2F2ZWRQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXHRzZXRDdXJyZW50UHJvamVjdHMoc2F2ZWRQcm9qZWN0cyk7XG5cdHJlbmRlckRhc2hib2FyZCgpO1xuXHRjbG9zZVByb2plY3RGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFkZFByb2plY3RGb3JtKCkge1xuXHQvL2Zvcm0gY29udGVudFxuXHRjb25zdCBmb3JtVGl0bGUgPSBkb21DcmVhdGUoXCJoMlwiLCBbXCJmb3JtX3RpdGxlXCJdKTtcblx0Zm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgbmV3IHByb2plY3RcIjtcblx0Y29uc3QgZm9ybVN1YnRpdGxlID0gZG9tQ3JlYXRlKFwiaDJcIiwgW1wiZm9ybV9zdWJ0aXRsZVwiXSk7XG5cdGZvcm1TdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiKiByZXF1aXJlZFwiO1xuXHRjb25zdCBjbG9zZUJ0biA9IGRvbUNyZWF0ZShcInNwYW5cIiwgW1wibWF0ZXJpYWwtaWNvbnNcIiwgXCJjbG9zZS1mb3JtXCJdLCB7XG5cdFx0aWQ6IFwiY2xvc2UtcHJvamVjdC1mb3JtXCIsXG5cdH0pO1xuXHRjbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwiIFggXCI7XG5cdGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVByb2plY3RGb3JtKTtcblx0Ly90aXRsZVxuXHRjb25zdCB0aXRsZUxhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgW1wiXCJdLCB7IGZvcjogXCJ0LXRpdGxlXCIgfSk7XG5cdHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlICpcIjtcblx0Y29uc3QgdGl0bGVJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtcImZvcm0tY29udHJvbFwiXSwge1xuXHRcdGlkOiBcInQtdGl0bGVcIixcblx0XHR0eXBlOiBcInRleHRcIixcblx0XHRuYW1lOiBcInAtdGl0bGVcIixcblx0XHRwbGFjZWhvbGRlcjogXCJUaXRsZVwiLFxuXHR9KTtcblx0Y29uc3QgdGl0bGVFcnJNc2cgPSBkb21DcmVhdGUoXCJzbWFsbFwiLCBbXCJlcnItbXNnXCJdKTtcblx0dGl0bGVFcnJNc2cudGV4dENvbnRlbnQgPSBcIiAqIFRpdGxlIGlzIHJlcXVpcmVkXCI7XG5cdHRpdGxlSW5wdXQuYXBwZW5kQ2hpbGQodGl0bGVFcnJNc2cpO1xuXHR0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXHQvL2Rlc2NyaXB0aW9uXG5cdGNvbnN0IGRlc2NMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFtcIlwiXSwgeyBmb3I6IFwidC1kZXNjXCIgfSk7XG5cdGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblx0Y29uc3QgZGVzY0lucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC1kZXNjXCIsXG5cdFx0dHlwZTogXCJ0ZXh0YXJlYVwiLFxuXHRcdG5hbWU6IFwidC1kZXNjXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiRGVzY3JpcHRpb25cIixcblx0fSk7XG5cdGRlc2NMYWJlbC5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXHQvL2FkZC9jbGVhciBidG5zXG5cdGNvbnN0IHByb2plY3RGb3JtQnRucyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJuZXctcHJvamVjdC1idXR0b25zXCJdKTtcblx0Y29uc3QgYWRkQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImJ0blwiXSwge1xuXHRcdGlkOiBcImFkZC1wcm9qZWN0LWJ0blwiLFxuXHR9KTtcblx0YWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblx0YWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0U3VibWl0KTtcblx0Y29uc3QgY2xlYXJCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW1wiYnRuXCJdLCB7XG5cdFx0aWQ6IFwicHJvamVjdC1jbGVhclwiLFxuXHR9KTtcblx0Y2xlYXJCdG4udGV4dENvbnRlbnQgPSBcIkNsZWFyIGZpZWxkc1wiO1xuXHRjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJQcm9qZWN0Rm9ybSk7XG5cdHByb2plY3RGb3JtQnRucy5hcHBlbmQoYWRkQnRuLCBjbGVhckJ0bik7XG5cdC8vZm9ybSBjb250YWluZXJcblx0Y29uc3QgZm9ybUNvbnRhaW5lciA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJmb3JtLWNvbnRhaW5lclwiXSwge1xuXHRcdGlkOiBcIm5ldy1wcm9qZWN0LWZvcm1cIixcblx0fSk7XG5cdGZvcm1Db250YWluZXIuYXBwZW5kKFxuXHRcdGZvcm1UaXRsZSxcblx0XHRmb3JtU3VidGl0bGUsXG5cdFx0Y2xvc2VCdG4sXG5cdFx0dGl0bGVMYWJlbCxcblx0XHRkZXNjTGFiZWwsXG5cdFx0cHJvamVjdEZvcm1CdG5zXG5cdCk7XG5cdC8vd3JhcHBlclxuXHRjb25zdCBhZGRQcm9qZWN0U2VjdGlvbiA9IGRvbUNyZWF0ZShcInNlY3Rpb25cIiwgW1wiYWRkX3Byb2plY3Rfc2VjdGlvblwiXSk7XG5cdGFkZFByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xufVxuXG5leHBvcnQgeyByZW5kZXJBZGRQcm9qZWN0Rm9ybSB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IHsgY2xvc2VUYXNrRm9ybSwgY2xlYXJUYXNrRm9ybSB9IGZyb20gXCIuLi8uLi9mb3JtXCI7XG5pbXBvcnQgeyByZW5kZXJEYXNoYm9hcmQgfSBmcm9tIFwiLi4vcGFnZXMvZGFzaGJvYXJkXCI7XG5cbmNvbnN0IHNhdmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXG5mdW5jdGlvbiBhZGRUYXNrU3VibWl0KCkge1xuXHQvL3ZhbGlkYXRpb25cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC10aXRsZVwiKS52YWx1ZSA9PT0gXCJcIikge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZS1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtcHJpb3JpdHlcIikudmFsdWUgPT09IFwiXCIpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHktZXJyLW1zZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBwcm9qZWN0QXNzb2NpYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGFzay1hZGRcIik7XG5cdGlmIChwcm9qZWN0QXNzb2NpYXRpb24udmFsdWUgPT09IFwibnVsbFwiKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByb2plY3QtZXJyLW1zZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vdGFzayBmYWN0b3J5XG5cdGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKHtcblx0XHR0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXRpdGxlXCIpLnZhbHVlLFxuXHRcdGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGVzY1wiKS52YWx1ZSxcblx0XHRkdWVEYXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGF0ZVwiKS52YWx1ZSxcblx0XHRwcmlvcml0eTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpLnZhbHVlLFxuXHRcdG5vdGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Qtbm90ZXNcIikudmFsdWUsXG5cdH0pO1xuXHRmb3IgKGNvbnN0IHByb2plY3QgaW4gc2F2ZWRQcm9qZWN0cykge1xuXHRcdGNvbnN0IHRpdGxlID0gc2F2ZWRQcm9qZWN0c1twcm9qZWN0XS50aXRsZTtcblxuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGFzay1hZGRcIikudmFsdWUgPT09IHRpdGxlKSB7XG5cdFx0XHRzYXZlZFByb2plY3RzW3Byb2plY3RdLmFkZFRhc2t0b1Byb2plY3QobmV3VGFzayk7XG5cdFx0XHRjb25zb2xlLmxvZyhzYXZlZFByb2plY3RzW3Byb2plY3RdLnRhc2tzKTtcblx0XHR9XG5cdH1cblx0Ly8gc2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoc2F2ZWRQcm9qZWN0cykpO1xuXHRyZW5kZXJEYXNoYm9hcmQoKTtcblx0Y2xvc2VUYXNrRm9ybSgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBZGRUYXNrRm9ybSgpIHtcblx0Ly9mb3JtIGNvbnRlbnRcblx0Y29uc3QgZm9ybVRpdGxlID0gZG9tQ3JlYXRlKFwiaDJcIiwgW1wiZm9ybV90aXRsZVwiXSk7XG5cdGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIG5ldyB0YXNrXCI7XG5cdGNvbnN0IGZvcm1TdWJ0aXRsZSA9IGRvbUNyZWF0ZShcImgyXCIsIFtcImZvcm1fc3VidGl0bGVcIl0pO1xuXHRmb3JtU3VidGl0bGUudGV4dENvbnRlbnQgPSBcIiogcmVxdWlyZWRcIjtcblx0Y29uc3QgY2xvc2VCdG4gPSBkb21DcmVhdGUoXCJzcGFuXCIsIFtcIm1hdGVyaWFsLWljb25zXCIsIFwiY2xvc2UtZm9ybVwiXSwge1xuXHRcdGlkOiBcImNsb3NlLXRhc2stZm9ybVwiLFxuXHR9KTtcblx0Y2xvc2VCdG4udGV4dENvbnRlbnQgPSBcIiBYIFwiO1xuXHRjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUYXNrRm9ybSk7XG5cdC8vdGl0bGVcblx0Y29uc3QgdGl0bGVMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFtcIlwiXSwgeyBmb3I6IFwidC10aXRsZVwiIH0pO1xuXHR0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZSAqXCI7XG5cdGNvbnN0IHRpdGxlSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LXRpdGxlXCIsXG5cdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0bmFtZTogXCJ0YXNrLXRpdGxlXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiVGl0bGVcIixcblx0fSk7XG5cdGNvbnN0IHRpdGxlRXJyTXNnID0gZG9tQ3JlYXRlKFwic21hbGxcIiwgW1wiZXJyLW1zZ1wiXSk7XG5cdHRpdGxlRXJyTXNnLnRleHRDb250ZW50ID0gXCIgKiBUYXNrIHRpdGxlIGlzIHJlcXVpcmVkXCI7XG5cdHRpdGxlSW5wdXQuYXBwZW5kQ2hpbGQodGl0bGVFcnJNc2cpO1xuXHR0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXHQvL2Rlc2NyaXB0aW9uXG5cdGNvbnN0IGRlc2NMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFtcIlwiXSwgeyBmb3I6IFwidC1kZXNjXCIgfSk7XG5cdGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblx0Y29uc3QgZGVzY0lucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC1kZXNjXCIsXG5cdFx0dHlwZTogXCJ0ZXh0YXJlYVwiLFxuXHRcdG5hbWU6IFwidC1kZXNjXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiRGVzY3JpcHRpb25cIixcblx0fSk7XG5cdGRlc2NMYWJlbC5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXHQvL2RhdGVcblx0Y29uc3QgZGF0ZUxhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgW1wiXCJdLCB7IGZvcjogXCJ0LWRhdGVcIiB9KTtcblx0ZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuXHRjb25zdCBkYXRlSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LWRhdGVcIixcblx0XHR0eXBlOiBcImRhdGVcIixcblx0XHRuYW1lOiBcInQtZGF0ZVwiLFxuXHR9KTtcblx0ZGF0ZUxhYmVsLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cdC8vcHJpb3JpdHlcblx0Y29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFtcIlwiXSwgeyBmb3I6IFwidC1wcmlvcml0eVwiIH0pO1xuXHRwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eSAoNSBpcyBoaWdoZXN0KSAqXCI7XG5cdGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LXByaW9yaXR5XCIsXG5cdFx0dHlwZTogXCJudW1iZXJcIixcblx0XHRuYW1lOiBcInQtcHJpb3JpdHlcIixcblx0XHRwbGFjZWhvbGRlcjogXCIzXCIsXG5cdFx0bWluOiBcIjFcIixcblx0XHRtYXg6IFwiNVwiLFxuXHR9KTtcblx0Y29uc3QgcHJpb3JpdHlFcnJNc2cgPSBkb21DcmVhdGUoXCJzbWFsbFwiLCBbXCJlcnItbXNnXCJdKTtcblx0cHJpb3JpdHlFcnJNc2cudGV4dENvbnRlbnQgPSBcIiAqIFByaW9yaXR5IGlzIHJlcXVpcmVkXCI7XG5cdHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlFcnJNc2cpO1xuXHRwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXHQvL25vdGVzXG5cdGNvbnN0IG5vdGVzTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBbXCJcIl0sIHsgZm9yOiBcInQtbm90ZXNcIiB9KTtcblx0bm90ZXNMYWJlbC50ZXh0Q29udGVudCA9IFwiTm90ZXNcIjtcblx0Y29uc3Qgbm90ZXNJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtcImZvcm0tY29udHJvbFwiXSwge1xuXHRcdGlkOiBcInQtbm90ZXNcIixcblx0XHR0eXBlOiBcInRleHRhcmVhXCIsXG5cdFx0bmFtZTogXCJ0LW5vdGVzXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiTm90ZXNcIixcblx0fSk7XG5cdG5vdGVzTGFiZWwuYXBwZW5kQ2hpbGQobm90ZXNJbnB1dCk7XG5cdC8vcHJvamVjdCBsaXN0XG5cdGNvbnN0IHByb2plY3RMaXN0TGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBbXCJcIl0sIHtcblx0XHRmb3I6IFwicHJvamVjdC10YXNrLWFkZFwiLFxuXHR9KTtcblx0cHJvamVjdExpc3RMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIHRvIEV4aXN0aW5nIFByb2plY3RcIjtcblx0Y29uc3QgcHJvamVjdExpc3RTZWxlY3QgPSBkb21DcmVhdGUoXCJzZWxlY3RcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwicHJvamVjdC10YXNrLWFkZFwiLFxuXHRcdG5hbWU6IFwicHJvamVjdC10YXNrLWFkZFwiLFxuXHR9KTtcblx0Y29uc3QgcHJvamVjdExpc3RPcHRpb25ERUZBVUxUID0gZG9tQ3JlYXRlKFwib3B0aW9uXCIsIFtcIlwiXSwge1xuXHRcdHZhbHVlOiBcIm51bGxcIixcblx0XHRkaXNhYmxlZDogXCJcIixcblx0XHRzZWxlY3RlZDogXCJcIixcblx0fSk7XG5cdHByb2plY3RMaXN0T3B0aW9uREVGQVVMVC50ZXh0Q29udGVudCA9IFwiLS1TZWxlY3QgZXhpc3RpbmcgcHJvamVjdC0tXCI7XG5cdHByb2plY3RMaXN0U2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RMaXN0T3B0aW9uREVGQVVMVCk7XG5cdC8vLy8gIGdldCBuYW1lcyBvZiBhbGwgcHJvamVjdHNcblx0Y29uc3QgdG90YWxQcm9qZWN0TmFtZXMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzYXZlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IHNhdmVkUHJvamVjdHNbaV07XG5cdFx0dG90YWxQcm9qZWN0TmFtZXMucHVzaChwcm9qZWN0LnRpdGxlKTtcblx0fVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsUHJvamVjdE5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRvdGFsUHJvamVjdE5hbWVzW2ldO1xuXHRcdGNvbnN0IHByb2plY3RMaXN0T3B0aW9uID0gZG9tQ3JlYXRlKFwib3B0aW9uXCIsIFtcIlwiXSwge1xuXHRcdFx0dmFsdWU6IG5hbWUsXG5cdFx0fSk7XG5cdFx0cHJvamVjdExpc3RPcHRpb24udGV4dENvbnRlbnQgPSBuYW1lO1xuXHRcdHByb2plY3RMaXN0U2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RMaXN0T3B0aW9uKTtcblx0fVxuXHRjb25zdCBwcm9qZWN0TGlzdEVyck1zZyA9IGRvbUNyZWF0ZShcInNtYWxsXCIsIFtcImVyci1tc2dcIl0pO1xuXHRwcm9qZWN0TGlzdEVyck1zZy50ZXh0Q29udGVudCA9IFwiICogUHJvamVjdCBhc3NvY2lhdGlvbiBpcyByZXF1aXJlZFwiO1xuXHRwcm9qZWN0TGlzdExhYmVsLmFwcGVuZChwcm9qZWN0TGlzdFNlbGVjdCwgcHJvamVjdExpc3RFcnJNc2cpO1xuXHQvL2FkZC9jbGVhciBidG5zXG5cdGNvbnN0IHRhc2tGb3JtQnRucyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJuZXctdGFzay1idXR0b25zXCJdKTtcblx0Y29uc3QgYWRkQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImJ0blwiXSwge1xuXHRcdGlkOiBcImFkZC10YXNrLWJ0blwiLFxuXHR9KTtcblx0YWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblx0YWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrU3VibWl0KTtcblx0Y29uc3QgY2xlYXJCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW1wiYnRuXCJdLCB7XG5cdFx0aWQ6IFwidGFzay1jbGVhclwiLFxuXHR9KTtcblx0Y2xlYXJCdG4udGV4dENvbnRlbnQgPSBcIkNsZWFyIGZpZWxkc1wiO1xuXHRjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJUYXNrRm9ybSk7XG5cdHRhc2tGb3JtQnRucy5hcHBlbmQoYWRkQnRuLCBjbGVhckJ0bik7XG5cdC8vZm9ybSBjb250YWluZXJcblx0Y29uc3QgZm9ybUNvbnRhaW5lciA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJmb3JtLWNvbnRhaW5lclwiXSwge1xuXHRcdGlkOiBcIm5ldy1wcm9qZWN0LWZvcm1cIixcblx0fSk7XG5cdGZvcm1Db250YWluZXIuYXBwZW5kKFxuXHRcdGZvcm1UaXRsZSxcblx0XHRmb3JtU3VidGl0bGUsXG5cdFx0Y2xvc2VCdG4sXG5cdFx0dGl0bGVMYWJlbCxcblx0XHRkZXNjTGFiZWwsXG5cdFx0ZGF0ZUxhYmVsLFxuXHRcdHByaW9yaXR5TGFiZWwsXG5cdFx0bm90ZXNMYWJlbCxcblx0XHRwcm9qZWN0TGlzdExhYmVsLFxuXHRcdHRhc2tGb3JtQnRuc1xuXHQpO1xuXHQvL3dyYXBwZXJcblx0Y29uc3QgYWRkVGFza1NlY3Rpb24gPSBkb21DcmVhdGUoXCJzZWN0aW9uXCIsIFtcImFkZF90YXNrX3NlY3Rpb25cIl0pO1xuXHRhZGRUYXNrU2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHsgYWRkVGFza1N1Ym1pdCwgcmVuZGVyQWRkVGFza0Zvcm0gfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi8uLi9ET01cIjtcbmltcG9ydCBjaGVja0xvZ28gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9jaGVja2JveC1tYXJrZWQtY2lyY2xlLnBuZ1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9wbHVzLWNpcmNsZS1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IGFkZFRhc2tJY29uIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvY2hlY2tib3gtbWFya2VkLWNpcmNsZS1wbHVzLW91dGxpbmUucG5nXCI7XG5pbXBvcnQgYWRkUHJvamVjdEljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9saXN0LWdyb3VwLXBsdXMucG5nXCI7XG5pbXBvcnQgZ2Vhckljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9jb2ctb3V0bGluZS5wbmdcIjtcbmltcG9ydCB7IHJlbmRlclRhc2tGb3JtLCByZW5kZXJQcm9qZWN0Rm9ybSB9IGZyb20gXCIuLi8uLi9mb3JtXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckFkZE1lbnUoKSB7XG5cdGNvbnN0IGFkZEljb25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtaWNvbi1tZW51XCIpO1xuXHRhZGRJY29uTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiaWNvbi1tZW51LXRvZ2dsZVwiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuXHQvLy8vaGVhZGVyIExFRlRcblx0Y29uc3Qgc2l0ZUxvZ28gPSBkb21DcmVhdGUoXCJpbWdcIiwgW1wiZmFrZS1jbGFzc1wiXSwge1xuXHRcdHNyYzogY2hlY2tMb2dvLFxuXHRcdGFsdDogXCJjaGVja2VkIGNpcmNsZSBsb2dvXCIsXG5cdH0pO1xuXHRjb25zdCBzaXRlVGl0bGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiXCJdLCB7IGlkOiBcImhlYWRlci1zaXRlLXRpdGxlXCIgfSk7XG5cdC8vc2VlZCBkYXRhXG5cdGNvbnN0IHNlZWREYXRhQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcIlwiXSwgeyBpZDogXCJzZWVkLXByb2plY3RzLWJ0blwiIH0pO1xuXHRjb25zdCBoZWFkZXJMZWZ0ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcIlwiXSwgeyBpZDogXCJoZWFkZXJMZWZ0XCIgfSk7XG5cdGhlYWRlckxlZnQuYXBwZW5kKHNpdGVMb2dvLCBzaXRlVGl0bGUsIHNlZWREYXRhQnRuKTtcblx0Ly8vL2hlYWRlciBDRU5URVJcblx0Y29uc3Qgc2VhcmNoTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBbXCJcIl0sIHsgZm9yOiBcInNpdGUtc2VhcmNoXCIgfSk7XG5cdHNlYXJjaExhYmVsLnRleHRDb250ZW50ID0gXCJTZWFyY2ggdGhlIHNpdGU6IFwiO1xuXHRjb25zdCBzZWFyY2hJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtcIlwiXSwge1xuXHRcdGlkOiBcInNpdGUtc2VhcmNoXCIsXG5cdFx0dHlwZTogXCJzZWFyY2hcIixcblx0XHRuYW1lOiBcInFcIixcblx0fSk7XG5cdGNvbnN0IHNlYXJjaEJ0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBbXCJcIl0pO1xuXHRzZWFyY2hCdG4udGV4dENvbnRlbnQgPSBcIlNlYXJjaFwiO1xuXHRjb25zdCBoZWFkZXJDZW50ZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiXCJdLCB7IGlkOiBcImhlYWRlckNlbnRlclwiIH0pO1xuXHRoZWFkZXJDZW50ZXIuYXBwZW5kKHNlYXJjaExhYmVsLCBzZWFyY2hJbnB1dCwgc2VhcmNoQnRuKTtcblx0Ly8vL2hlYWRlciBSSUdIVFxuXHQvL2FkZCBpY29uIG1lbnVcblx0Y29uc3QgYWRkQnRuSWNvbiA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJcIl0sIHtcblx0XHRpZDogXCJhZGQtaWNvblwiLFxuXHRcdHNyYzogYWRkSWNvbixcblx0XHRhbHQ6IFwiYWRkIGJ1dHRvbiBwbHVzIGljb25cIixcblx0fSk7XG5cdGFkZEJ0bkljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckFkZE1lbnUpO1xuXHRjb25zdCBhZGRJY29uTWVudSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJcIl0sIHsgaWQ6IFwiYWRkLWljb24tbWVudVwiIH0pO1xuXHRjb25zdCBhZGRUYXNrSW1nID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFtcIlwiXSwge1xuXHRcdGlkOiBcImFkZC10YXNrLWZvcm1cIixcblx0XHRzcmM6IGFkZFRhc2tJY29uLFxuXHRcdGFsdDogXCJhZGQgdGFzayBwbHVzIGljb25cIixcblx0fSk7XG5cdGFkZFRhc2tJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRhc2tGb3JtKTtcblx0Y29uc3QgYWRkUHJvamVjdEltZyA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJcIl0sIHtcblx0XHRpZDogXCJhZGQtcHJvamVjdC1mb3JtXCIsXG5cdFx0c3JjOiBhZGRQcm9qZWN0SWNvbixcblx0XHRhbHQ6IFwiYWRkIHByb2plY3QgcGx1cyBpY29uXCIsXG5cdH0pO1xuXHRhZGRQcm9qZWN0SW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJQcm9qZWN0Rm9ybSk7XG5cdGFkZEljb25NZW51LmFwcGVuZChhZGRUYXNrSW1nLCBhZGRQcm9qZWN0SW1nKTtcblx0Y29uc3QgYWRkQnRuRWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiXCJdLCB7IGlkOiBcImFkZEJ0blwiIH0pO1xuXHRhZGRCdG5FbC5hcHBlbmQoYWRkQnRuSWNvbiwgYWRkSWNvbk1lbnUpO1xuXHQvL2xvZ2luXG5cdGNvbnN0IGxvZ2luRWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiXCJdLCB7IGlkOiBcImxvZ2luXCIgfSk7XG5cdGxvZ2luRWwudGV4dENvbnRlbnQgPSBcIkxPR0lOXCI7XG5cdC8vc2V0dGluZ3Ncblx0Y29uc3Qgc2V0dGluZ3NJY29uID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFtcIlwiXSwge1xuXHRcdGlkOiBcInNldHRpbmdzIGdlYXIgaWNvblwiLFxuXHRcdHNyYzogZ2Vhckljb24sXG5cdFx0YWx0OiBcInNldHRpbmdzIGdlYXIgb3V0bGluZVwiLFxuXHR9KTtcblx0Y29uc3Qgc2V0dGluZ3NMaW5rID0gZG9tQ3JlYXRlKFwiYVwiLCBbXCJcIl0sIHtcblx0XHRocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbGV4Z2Vpcy90b2RvLWxpc3RcIixcblx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXG5cdH0pO1xuXHRzZXR0aW5nc0xpbmsuYXBwZW5kQ2hpbGQoc2V0dGluZ3NJY29uKTtcblx0Y29uc3Qgc2V0dGluZ3NFbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJcIl0sIHsgaWQ6IFwic2V0dGluZ3NcIiB9KTtcblx0c2V0dGluZ3NFbC5hcHBlbmRDaGlsZChzZXR0aW5nc0xpbmspO1xuXHRjb25zdCBoZWFkZXJSaWdodCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJcIl0sIHsgaWQ6IFwiaGVhZGVyUmlnaHRcIiB9KTtcblx0aGVhZGVyUmlnaHQuYXBwZW5kKGFkZEJ0bkVsLCBsb2dpbkVsLCBzZXR0aW5nc0VsKTtcblx0Ly9GVUxMIEhFQURFUiBBUFBFTkRcblx0Y29uc3QgaGVhZGVyID0gZG9tQ3JlYXRlKFwiaGVhZGVyXCIsIFtcIlwiXSwgeyBpZDogXCJoZWFkZXJcIiB9KTtcblx0aGVhZGVyLmFwcGVuZChoZWFkZXJMZWZ0LCBoZWFkZXJDZW50ZXIsIGhlYWRlclJpZ2h0KTtcblx0Ly9DT05URU5UIEFQUEVORFxuXHRjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHRwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmV4cG9ydCB7IHJlbmRlckFkZE1lbnUsIHJlbmRlckhlYWRlciB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcblxuZnVuY3Rpb24gcmVuZGVyRGFzaGJvYXJkKCkge1xuXHQvL2dldCBhbGwgdGFza3MgZnJvbSBhbGwgcHJvamVjdHNcblx0Y29uc3QgY3VycmVudFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcblx0Y29uc3QgY3VycmVudFRhc2tzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c1tpXTtcblx0XHRjdXJyZW50VGFza3MucHVzaCguLi5wcm9qZWN0LnRhc2tzKTtcblx0fVxuXHQvL3VwZGF0ZSBtYWluIGhlYWRlclxuXHRjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWhlYWRlclwiKTtcblx0bWFpbkhlYWRlci50ZXh0Q29udGVudCA9IFwiREFTSEJPQVJEXCI7XG5cdC8vY2xlYXIgY3VycmVudCB0YXNrc1xuXHRjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnRcIik7XG5cdHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0Ly9yZW5kZXIgY3VycmVudFRhc2tzIHRhc2tzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdGFzayA9IGN1cnJlbnRUYXNrc1tpXTtcblx0XHRjb25zdCB0YXNrQ2FyZCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWNhcmRcIl0sIHsgXCJkYXRhLXRhc2staW5kZXhcIjogaSB9KTtcblx0XHQvL2lubmVyIHRhc2sgY2FyZCBkaXYgaXRlbXNcblx0XHQvL1RJVExFXG5cdFx0Y29uc3QgdGFza1RpdGxlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stdGl0bGVcIl0pO1xuXHRcdHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdFx0Ly9ERVNDUklQVElPTlxuXHRcdGNvbnN0IHRhc2tEZXNjID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGVzY3JpcHRpb25cIl0pO1xuXHRcdHRhc2tEZXNjLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcblx0XHQvL0RVRSBEQVRFXG5cdFx0Y29uc3QgdGFza0RhdGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1kYXRlXCJdKTtcblx0XHR0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblx0XHQvL1BSSU9SSVRZXG5cdFx0Y29uc3QgdGFza1ByaW9yaXR5ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stcHJpb3JpdHlcIl0pO1xuXHRcdHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG5cdFx0Ly9OT1RFU1xuXHRcdGNvbnN0IHRhc2tOb3RlcyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLW5vdGVzXCJdKTtcblx0XHR0YXNrTm90ZXMudGV4dENvbnRlbnQgPSB0YXNrLm5vdGVzO1xuXHRcdC8vREVMRVRFIElDT05cblx0XHRjb25zdCB0YXNrRGVsZXRlSWNvbiA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJ0YXNrLWRlbGV0ZVwiXSwge1xuXHRcdFx0c3JjOiBkZWxldGVJY29uLFxuXHRcdFx0YWx0OiBcInRyYXNoIGNhbiBkZWxldGUgaWNvblwiLFxuXHRcdH0pO1xuXHRcdHRhc2tEZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSh0YXNrQ2FyZCk7XG5cdFx0XHRsZXQgaW5kZXggPSB0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pbmRleFwiKTtcblx0XHRcdGN1cnJlbnRUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0Ly8gc2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdFx0XHQvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrcykpO1xuXHRcdFx0cmVuZGVyVGFza3MoKTtcblx0XHR9KTtcblx0XHQvL0FQUEVORCBFTEVNRU5UU1xuXHRcdHRhc2tDYXJkLmFwcGVuZChcblx0XHRcdHRhc2tUaXRsZSxcblx0XHRcdHRhc2tEZXNjLFxuXHRcdFx0dGFza0RhdGUsXG5cdFx0XHR0YXNrUHJpb3JpdHksXG5cdFx0XHR0YXNrTm90ZXMsXG5cdFx0XHR0YXNrRGVsZXRlSWNvblxuXHRcdCk7XG5cdFx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG5cdH1cblx0Ly8gY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tc2VjdGlvblwiKTtcblx0Ly8gbWFpblNlY3Rpb24uYXBwZW5kKG1haW5IZWFkZXIsdGFza0NvbnRhaW5lcilcblx0Ly8gY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblx0Ly8gY29udGVudC5hcHBlbmRDaGlsZChtYWluU2VjdGlvbilcbn1cblxuZXhwb3J0IHsgcmVuZGVyRGFzaGJvYXJkIH07XG4iLCJjb25zdCBzYXZlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcbmNvbnN0IHNhdmVkVGFza3MgPSBbXTtcbmxldCBjdXJyZW50VGFza3MgPSBzYXZlZFRhc2tzO1xubGV0IGN1cnJlbnRQcm9qZWN0cyA9IHNhdmVkUHJvamVjdHM7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRUYXNrcyhuZXdUYXNrcykge1xuXHRjdXJyZW50VGFza3MgPSBuZXdUYXNrcztcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza3MpKTtcbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3RzKG5ld1Byb2plY3RzKSB7XG5cdGN1cnJlbnRQcm9qZWN0cyA9IG5ld1Byb2plY3RzO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0cykpO1xufVxuXG5leHBvcnQgeyBzZXRDdXJyZW50VGFza3MsIHNldEN1cnJlbnRQcm9qZWN0cyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9