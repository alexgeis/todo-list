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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RVc7QUFDaUI7QUFDRDtBQUNGO0FBQ1k7QUFDTTtBQUNYOztBQUV4RDtBQUNBLGVBQWUsZ0VBQVk7QUFDM0IsY0FBYyw4REFBVztBQUN6QixvQkFBb0IsK0NBQVMsY0FBYyxvQkFBb0I7QUFDL0QsbUJBQW1CLCtDQUFTLGNBQWMsbUJBQW1CO0FBQzdEO0FBQ0EsZ0JBQWdCLCtDQUFTLGVBQWUsWUFBWTtBQUNwRDtBQUNBLGlCQUFpQiwwRUFBaUI7QUFDbEMsb0JBQW9CLGdGQUFvQjtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixpRUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxRUFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNEOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0N0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLnNjc3M/NjJhZiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvY3JlYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvY29tcG9uZW50cy9hZGRQcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL2NvbXBvbmVudHMvYWRkVGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9jb21wb25lbnRzL2FzaWRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9wYWdlcy9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9wYWdlcy9wcm9qZWN0VGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9wYWdlcy9wcm9qZWN0c0FsbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL3BhZ2VzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL3JlbmRlclBhZ2VzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgXCIuL2Nzcy9zdHlsZS5zY3NzXCI7XG4vLyBpbXBvcnQgeyByZW5kZXJTaXRlIH0gZnJvbSBcIi4vanMvcmVuZGVyL3JlbmRlclBhZ2VzXCI7XG4vL1RFU1QgREFUQVxuLy8gaW1wb3J0IHsgdGFza0RhdGEgfSBmcm9tIFwiLi9qcy9kYXRhL3Rhc2tEYXRhXCI7XG4vLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIHRhc2tEYXRhKTtcbmltcG9ydCB7IHJlbmRlclByb2plY3RBc2lkZUxpc3QgfSBmcm9tIFwiLi9qcy9yZW5kZXIvY29tcG9uZW50cy9hc2lkZVwiO1xuaW1wb3J0IHsgc2V0Q3VycmVudFRhc2tzLCBzZXRDdXJyZW50UHJvamVjdHMgfSBmcm9tIFwiLi9qcy9zdGF0ZVwiO1xuaW1wb3J0IHtcblx0cmVuZGVyRGFzaGJvYXJkUGFnZSxcblx0cmVuZGVyQWxsUHJvamVjdHNQYWdlLFxufSBmcm9tIFwiLi9qcy9yZW5kZXIvcmVuZGVyUGFnZXNcIjtcblxuLy8vLyBTVEFURSAvLy8vXG4vL0RFRkFVTFRTXG5jb25zdCBERUZBVUxUX1RIRU1FID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSB8fCBcImxpZ2h0XCI7XG5jb25zdCBzYXZlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcbi8vIGNvbnN0IHNhdmVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuLy8gY29uc3QgY3VycmVudGx5RG9uZSA9IHNhdmVkVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmNvbXBsZXRlID09PSB0cnVlKTtcbi8vIGNvbnN0IERFRkFVTFRfVEFTS1NfRE9ORSA9IGN1cnJlbnRseURvbmUubGVuZ3RoO1xuLy8gY29uc3QgREVGQVVMVF9UQVNLU19UT1RBTCA9IHNhdmVkQm9va3MubGVuZ3RoO1xuXG4vLyBsZXQgY3VycmVudFRhc2tzID0gc2F2ZWRUYXNrcztcbmxldCBjdXJyZW50UHJvamVjdHMgPSBzYXZlZFByb2plY3RzO1xubGV0IGN1cnJlbnRUaGVtZSA9IERFRkFVTFRfVEhFTUU7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cdHJlbmRlckRhc2hib2FyZFBhZ2UoKTtcblx0Ly8gc2V0Q3VycmVudFRoZW1lKERFRkFVTFRfVEhFTUUpO1xuXHQvLyBzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0Ly8gc2V0Q3VycmVudFByb2plY3RzKGN1cnJlbnRQcm9qZWN0cyk7XG59O1xuIiwiLy8gRE9NIENSRUFURSBGVU5DVElPTlxuXG4vL2FyZyAxID0gbmFtZSBvZiBIVE1MIGVsZW1lbnRcbi8vIGFyZyAyID0gY2xhc3MgbmFtZXMgdG8gYWRkXG4vLyBhcmcgMyA9IG9iamVjdCAtIGF0dHJpYnV0ZXMgdG8gYWRkIC0+IGF0dHJpYnV0ZSA6IHZhbHVlXG5mdW5jdGlvbiBkb21DcmVhdGUoYXJnMSwgYXJnMiwgYXJnMykge1xuXHQvLy8vIGFyZyAxID0gXCJzdHJpbmdcIiAtIG5hbWUgb2YgSFRNTCBlbGVtZW50XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZzEpO1xuXHQvLy8vIGFyZyAyID0gW1wiYXJyYXkgb2Ygc3RyaW5nc1wiXSAtIGNsYXNzIG5hbWVzIHRvIGFkZFxuXHRpZiAoQXJyYXkuaXNBcnJheShhcmcyKSAmJiBhcmcyLmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFyZzIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IGFyZzJbaV07XG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0XHR9XG5cdH1cblx0Ly8vLyBhcmcgMyA9IHtvYmplY3R9IC0gYXR0cmlidXRlIG5hbWUgOiB2YWx1ZVxuXHRmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhcmczKSB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhcmczW2F0dHJpYnV0ZV0pO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgeyBkb21DcmVhdGUgfTtcbiIsIi8vREVNT1xuXG4vLyBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbi8vIGNvbnN0IHRhc2tEZW1vMSA9IGNyZWF0ZVRhc2soe1xuLy8gXHR0aXRsZTogXCJXYWxrIHRoZSBEb2dcIixcbi8vIFx0ZGVzY3JpcHRpb246IFwidGFrZSB0aGUgZG9nZ28gb24gYSBsaWwgc3Ryb2xsXCIsXG4vLyBcdGR1ZURhdGU6IGRhdGUsXG4vLyBcdHByaW9yaXR5OiAzLFxuLy8gXHRub3RlczogXCJhdm9pZCA5dGggYW5kIEVsbSAtIGFnZ3Jlc3NpdmUgZG9nXCIsXG4vLyB9KTtcbi8vIGNvbnN0IHByb2plY3REZW1vMSA9IGNyZWF0ZVByb2plY3Qoe1xuLy8gXHR0aXRsZTogXCJQZXJzb25hbFwiLFxuLy8gXHRkZXNjcmlwdGlvbjogXCJwbGVhc3VyZSwgbm90IGJ1c2luZXNzXCIsXG4vLyB9KTtcbi8vIHByb2plY3REZW1vMS5hZGRUYXNrdG9Qcm9qZWN0KHRhc2tEZW1vMSk7XG5cbmNvbnN0IGNyZWF0ZVRhc2sgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcyB9KSA9PiAoe1xuXHR0aXRsZSxcblx0ZGVzY3JpcHRpb24sXG5cdGR1ZURhdGUsXG5cdHByaW9yaXR5LFxuXHRub3Rlcyxcblx0cHJpbnRUYXNrKCkge1xuXHRcdHJldHVybiBgJHt0aGlzLnRpdGxlfTogJHt0aGlzLmRlc2NyaXB0aW9ufWA7XG5cdH0sXG59KTtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiAoe1xuXHR0aXRsZSxcblx0ZGVzY3JpcHRpb24sXG5cdHRhc2tzOiBbXSxcblx0cHJpbnRQcm9qZWN0KCkge1xuXHRcdHJldHVybiBgUHJvamVjdCAke3RoaXMudGl0bGV9OiAke3RoaXMuZGVzY3JpcHRpb259YDtcblx0fSxcblx0cHJpbnRUYXNrcygpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnRhc2tzKTtcblx0fSxcblx0YWRkVGFza3RvUHJvamVjdCh0YXNrKSB7XG5cdFx0dGhpcy50YXNrcy5wdXNoKHRhc2spO1xuXHR9LFxufSk7XG5cbmV4cG9ydCB7IGNyZWF0ZVRhc2ssIGNyZWF0ZVByb2plY3QgfTtcbiIsImZ1bmN0aW9uIHJlbmRlclRhc2tGb3JtKCkge1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmFkZF90YXNrX3NlY3Rpb25cIilcblx0XHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBibG9jaztcIik7XG59XG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Rm9ybSgpIHtcblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5hZGRfcHJvamVjdF9zZWN0aW9uXCIpXG5cdFx0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogYmxvY2s7XCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tGb3JtKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtdGl0bGVcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGVzY1wiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kYXRlXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LW5vdGVzXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRhc2stYWRkXCIpLm9wdGlvbnMuc2VsZWN0ZWRJbmRleCA9IDA7XG59XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Rhc2tfc2VjdGlvblwiKVxuXHRcdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhclByb2plY3RGb3JtKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtdGl0bGVcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtZGVzY1wiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdEZvcm0oKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Byb2plY3Rfc2VjdGlvblwiKVxuXHRcdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xufVxuXG5leHBvcnQge1xuXHRyZW5kZXJUYXNrRm9ybSxcblx0cmVuZGVyUHJvamVjdEZvcm0sXG5cdGNsZWFyVGFza0Zvcm0sXG5cdGNsb3NlVGFza0Zvcm0sXG5cdGNsZWFyUHJvamVjdEZvcm0sXG5cdGNsb3NlUHJvamVjdEZvcm0sXG59O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuLi8uLi9jcmVhdGVcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRQcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9zdGF0ZVwiO1xuaW1wb3J0IHsgY2xlYXJQcm9qZWN0Rm9ybSwgY2xvc2VQcm9qZWN0Rm9ybSB9IGZyb20gXCIuLi8uLi9mb3JtXCI7XG5pbXBvcnQgeyByZW5kZXJBbGxQcm9qZWN0c1BhZ2UgfSBmcm9tIFwiLi4vcmVuZGVyUGFnZXNcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RUYXNrcyB9IGZyb20gXCIuLi9wYWdlcy9wcm9qZWN0VGFza3NcIjtcblxuY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RTdWJtaXQoKSB7XG5cdC8vdmFsaWRhdGlvblxuXHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwLXRpdGxlXCIpLnZhbHVlID09PSBcIlwiKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlLWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRyZXR1cm47XG5cdH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwLXRpdGxlXCIpLnZhbHVlICE9PSBcIlwiKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlLWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9XG5cblx0Ly9wcm9qZWN0IGZhY3Rvcnlcblx0Y29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3Qoe1xuXHRcdHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtdGl0bGVcIikudmFsdWUsXG5cdFx0ZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcC1kZXNjXCIpLnZhbHVlLFxuXHR9KTtcblx0c2F2ZWRQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXHQvLyBzZXRDdXJyZW50UHJvamVjdHMoc2F2ZWRQcm9qZWN0cyk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoc2F2ZWRQcm9qZWN0cykpO1xuXHRjbG9zZVByb2plY3RGb3JtKCk7XG5cdGxldCBuZXdJbmRleCA9IHNhdmVkUHJvamVjdHMubGVuZ3RoIC0gMTtcblx0cmVuZGVyUHJvamVjdFRhc2tzKG5ld0luZGV4KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWRkUHJvamVjdEZvcm0oKSB7XG5cdC8vZm9ybSBjb250ZW50XG5cdGNvbnN0IGZvcm1UaXRsZSA9IGRvbUNyZWF0ZShcImgyXCIsIFtcImZvcm1fdGl0bGVcIl0pO1xuXHRmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBuZXcgcHJvamVjdFwiO1xuXHRjb25zdCBmb3JtU3VidGl0bGUgPSBkb21DcmVhdGUoXCJoMlwiLCBbXCJmb3JtX3N1YnRpdGxlXCJdKTtcblx0Zm9ybVN1YnRpdGxlLnRleHRDb250ZW50ID0gXCIqIHJlcXVpcmVkXCI7XG5cdGNvbnN0IGNsb3NlQnRuID0gZG9tQ3JlYXRlKFwic3BhblwiLCBbXCJtYXRlcmlhbC1pY29uc1wiLCBcImNsb3NlLWZvcm1cIl0sIHtcblx0XHRpZDogXCJjbG9zZS1wcm9qZWN0LWZvcm1cIixcblx0fSk7XG5cdGNsb3NlQnRuLnRleHRDb250ZW50ID0gXCIgWCBcIjtcblx0Y2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUHJvamVjdEZvcm0pO1xuXHQvL3RpdGxlXG5cdGNvbnN0IHRpdGxlTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJwLXRpdGxlXCIgfSk7XG5cdHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlICpcIjtcblx0Y29uc3QgdGl0bGVJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtcImZvcm0tY29udHJvbFwiXSwge1xuXHRcdGlkOiBcInAtdGl0bGVcIixcblx0XHR0eXBlOiBcInRleHRcIixcblx0XHRuYW1lOiBcInAtdGl0bGVcIixcblx0XHRwbGFjZWhvbGRlcjogXCJUaXRsZVwiLFxuXHR9KTtcblx0Y29uc3QgdGl0bGVFcnJNc2cgPSBkb21DcmVhdGUoXCJzbWFsbFwiLCBbXCJlcnItbXNnXCJdLCB7XG5cdFx0aWQ6IFwicHJvamVjdC10aXRsZS1lcnItbXNnXCIsXG5cdH0pO1xuXHR0aXRsZUVyck1zZy50ZXh0Q29udGVudCA9IFwiICogVGl0bGUgaXMgcmVxdWlyZWRcIjtcblx0dGl0bGVJbnB1dC5hcHBlbmRDaGlsZCh0aXRsZUVyck1zZyk7XG5cdHRpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cdC8vZGVzY3JpcHRpb25cblx0Y29uc3QgZGVzY0xhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwicC1kZXNjXCIgfSk7XG5cdGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblx0Y29uc3QgZGVzY0lucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwicC1kZXNjXCIsXG5cdFx0dHlwZTogXCJ0ZXh0YXJlYVwiLFxuXHRcdG5hbWU6IFwicC1kZXNjXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiRGVzY3JpcHRpb25cIixcblx0fSk7XG5cdGRlc2NMYWJlbC5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXHQvL2FkZC9jbGVhciBidG5zXG5cdGNvbnN0IHByb2plY3RGb3JtQnRucyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJuZXctcHJvamVjdC1idXR0b25zXCJdKTtcblx0Y29uc3QgYWRkQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImJ0blwiXSwge1xuXHRcdGlkOiBcImFkZC1wcm9qZWN0LWJ0blwiLFxuXHR9KTtcblx0YWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblx0YWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0U3VibWl0KTtcblx0Y29uc3QgY2xlYXJCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW1wiYnRuXCJdLCB7XG5cdFx0aWQ6IFwicHJvamVjdC1jbGVhclwiLFxuXHR9KTtcblx0Y2xlYXJCdG4udGV4dENvbnRlbnQgPSBcIkNsZWFyIGZpZWxkc1wiO1xuXHRjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJQcm9qZWN0Rm9ybSk7XG5cdHByb2plY3RGb3JtQnRucy5hcHBlbmQoYWRkQnRuLCBjbGVhckJ0bik7XG5cdC8vZm9ybSBjb250YWluZXJcblx0Y29uc3QgZm9ybUNvbnRhaW5lciA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJmb3JtLWNvbnRhaW5lclwiXSwge1xuXHRcdGlkOiBcIm5ldy1wcm9qZWN0LWZvcm1cIixcblx0fSk7XG5cdGZvcm1Db250YWluZXIuYXBwZW5kKFxuXHRcdGZvcm1UaXRsZSxcblx0XHRmb3JtU3VidGl0bGUsXG5cdFx0Y2xvc2VCdG4sXG5cdFx0dGl0bGVMYWJlbCxcblx0XHRkZXNjTGFiZWwsXG5cdFx0cHJvamVjdEZvcm1CdG5zXG5cdCk7XG5cdC8vd3JhcHBlclxuXHRjb25zdCBhZGRQcm9qZWN0U2VjdGlvbiA9IGRvbUNyZWF0ZShcInNlY3Rpb25cIiwgW1wiYWRkX3Byb2plY3Rfc2VjdGlvblwiXSk7XG5cdGFkZFByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXHRyZXR1cm4gYWRkUHJvamVjdFNlY3Rpb247XG59XG5cbmV4cG9ydCB7IGFkZFByb2plY3RTdWJtaXQsIHJlbmRlckFkZFByb2plY3RGb3JtIH07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vLi4vRE9NXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4uLy4uL2NyZWF0ZVwiO1xuaW1wb3J0IHsgY2xvc2VUYXNrRm9ybSwgY2xlYXJUYXNrRm9ybSB9IGZyb20gXCIuLi8uLi9mb3JtXCI7XG5pbXBvcnQgeyByZW5kZXJEYXNoYm9hcmQgfSBmcm9tIFwiLi4vcGFnZXMvZGFzaGJvYXJkXCI7XG5cbmNvbnN0IHNhdmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXG5mdW5jdGlvbiBhZGRUYXNrU3VibWl0KCkge1xuXHQvL3ZhbGlkYXRpb25cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC10aXRsZVwiKS52YWx1ZSA9PT0gXCJcIikge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZS1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0cmV0dXJuO1xuXHR9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC10aXRsZVwiKS52YWx1ZSAhPT0gXCJcIikge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZS1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fVxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpLnZhbHVlID09PSBcIlwiKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRyZXR1cm47XG5cdH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpLnZhbHVlICE9PSBcIlwiKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9XG5cdGNvbnN0IHByb2plY3RBc3NvY2lhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10YXNrLWFkZFwiKTtcblx0aWYgKHByb2plY3RBc3NvY2lhdGlvbi52YWx1ZSA9PT0gXCJudWxsXCIpIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJvamVjdC1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0cmV0dXJuO1xuXHR9IGVsc2UgaWYgKHByb2plY3RBc3NvY2lhdGlvbi52YWx1ZSAhPT0gXCJcIikge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcm9qZWN0LWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9XG5cblx0Ly90YXNrIGZhY3Rvcnlcblx0Y29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2soe1xuXHRcdHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtdGl0bGVcIikudmFsdWUsXG5cdFx0ZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kZXNjXCIpLnZhbHVlLFxuXHRcdGR1ZURhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kYXRlXCIpLnZhbHVlLFxuXHRcdHByaW9yaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtcHJpb3JpdHlcIikudmFsdWUsXG5cdFx0bm90ZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1ub3Rlc1wiKS52YWx1ZSxcblx0fSk7XG5cdGZvciAoY29uc3QgcHJvamVjdCBpbiBzYXZlZFByb2plY3RzKSB7XG5cdFx0Y29uc3QgdGl0bGUgPSBzYXZlZFByb2plY3RzW3Byb2plY3RdLnRpdGxlO1xuXG5cdFx0Ly9jdXJyZW50bHkgbWF0Y2hpbmcgZHJvcGRvd24gcHJvamVjdCB0aXRsZXMgdG8gdGhlIHNhdmVkUHJvamVjdHMgcHJvamVjdCB0aXRsZXNcblx0XHQvL1RPRE8gLSBpbXBsZW1lbnQgYW4gSUQgc3lzdGVtIHNvIGR1cGxpY2F0ZSBuYW1lcyBjYW4gYmUgdXNlZFxuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGFzay1hZGRcIikudmFsdWUgPT09IHRpdGxlKSB7XG5cdFx0XHRzYXZlZFByb2plY3RzW3Byb2plY3RdLnRhc2tzLnB1c2gobmV3VGFzayk7XG5cdFx0XHRjb25zb2xlLmxvZyhzYXZlZFByb2plY3RzW3Byb2plY3RdLnRhc2tzKTtcblx0XHR9XG5cdH1cblx0Ly8gc2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoc2F2ZWRQcm9qZWN0cykpO1xuXHRyZW5kZXJEYXNoYm9hcmQoKTtcblx0Y2xvc2VUYXNrRm9ybSgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBZGRUYXNrRm9ybSgpIHtcblx0Ly9mb3JtIGNvbnRlbnRcblx0Y29uc3QgZm9ybVRpdGxlID0gZG9tQ3JlYXRlKFwiaDJcIiwgW1wiZm9ybV90aXRsZVwiXSk7XG5cdGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIG5ldyB0YXNrXCI7XG5cdGNvbnN0IGZvcm1TdWJ0aXRsZSA9IGRvbUNyZWF0ZShcImgyXCIsIFtcImZvcm1fc3VidGl0bGVcIl0pO1xuXHRmb3JtU3VidGl0bGUudGV4dENvbnRlbnQgPSBcIiogcmVxdWlyZWRcIjtcblx0Y29uc3QgY2xvc2VCdG4gPSBkb21DcmVhdGUoXCJzcGFuXCIsIFtcIm1hdGVyaWFsLWljb25zXCIsIFwiY2xvc2UtZm9ybVwiXSwge1xuXHRcdGlkOiBcImNsb3NlLXRhc2stZm9ybVwiLFxuXHR9KTtcblx0Y2xvc2VCdG4udGV4dENvbnRlbnQgPSBcIiBYIFwiO1xuXHRjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUYXNrRm9ybSk7XG5cdC8vdGl0bGVcblx0Y29uc3QgdGl0bGVMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHsgZm9yOiBcInQtdGl0bGVcIiB9KTtcblx0dGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGUgKlwiO1xuXHRjb25zdCB0aXRsZUlucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC10aXRsZVwiLFxuXHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdG5hbWU6IFwidGFzay10aXRsZVwiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIlRpdGxlXCIsXG5cdH0pO1xuXHRjb25zdCB0aXRsZUVyck1zZyA9IGRvbUNyZWF0ZShcInNtYWxsXCIsIFtcImVyci1tc2dcIl0sIHtcblx0XHRpZDogXCJ0YXNrLXRpdGxlLWVyci1tc2dcIixcblx0fSk7XG5cdHRpdGxlRXJyTXNnLnRleHRDb250ZW50ID0gXCIgKiBUYXNrIHRpdGxlIGlzIHJlcXVpcmVkXCI7XG5cdHRpdGxlTGFiZWwuYXBwZW5kKHRpdGxlSW5wdXQsIHRpdGxlRXJyTXNnKTtcblx0Ly9kZXNjcmlwdGlvblxuXHRjb25zdCBkZXNjTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJ0LWRlc2NcIiB9KTtcblx0ZGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXHRjb25zdCBkZXNjSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LWRlc2NcIixcblx0XHR0eXBlOiBcInRleHRhcmVhXCIsXG5cdFx0bmFtZTogXCJ0LWRlc2NcIixcblx0XHRwbGFjZWhvbGRlcjogXCJEZXNjcmlwdGlvblwiLFxuXHR9KTtcblx0ZGVzY0xhYmVsLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG5cdC8vZGF0ZVxuXHRjb25zdCBkYXRlTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJ0LWRhdGVcIiB9KTtcblx0ZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuXHRjb25zdCBkYXRlSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LWRhdGVcIixcblx0XHR0eXBlOiBcImRhdGVcIixcblx0XHRuYW1lOiBcInQtZGF0ZVwiLFxuXHR9KTtcblx0ZGF0ZUxhYmVsLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cdC8vcHJpb3JpdHlcblx0Y29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHsgZm9yOiBcInQtcHJpb3JpdHlcIiB9KTtcblx0cHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHkgKDUgaXMgaGlnaGVzdCkgKlwiO1xuXHRjb25zdCBwcmlvcml0eUlucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC1wcmlvcml0eVwiLFxuXHRcdHR5cGU6IFwibnVtYmVyXCIsXG5cdFx0bmFtZTogXCJ0LXByaW9yaXR5XCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiM1wiLFxuXHRcdG1pbjogXCIxXCIsXG5cdFx0bWF4OiBcIjVcIixcblx0fSk7XG5cdGNvbnN0IHByaW9yaXR5RXJyTXNnID0gZG9tQ3JlYXRlKFwic21hbGxcIiwgW1wiZXJyLW1zZ1wiXSwge1xuXHRcdGlkOiBcInRhc2stcHJpb3JpdHktZXJyLW1zZ1wiLFxuXHR9KTtcblx0cHJpb3JpdHlFcnJNc2cudGV4dENvbnRlbnQgPSBcIiAqIFByaW9yaXR5IGJldHdlZW4gMS01IGlzIHJlcXVpcmVkXCI7XG5cdHByaW9yaXR5TGFiZWwuYXBwZW5kKHByaW9yaXR5SW5wdXQsIHByaW9yaXR5RXJyTXNnKTtcblx0Ly9ub3Rlc1xuXHRjb25zdCBub3Rlc0xhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwidC1ub3Rlc1wiIH0pO1xuXHRub3Rlc0xhYmVsLnRleHRDb250ZW50ID0gXCJOb3Rlc1wiO1xuXHRjb25zdCBub3Rlc0lucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwidC1ub3Rlc1wiLFxuXHRcdHR5cGU6IFwidGV4dGFyZWFcIixcblx0XHRuYW1lOiBcInQtbm90ZXNcIixcblx0XHRwbGFjZWhvbGRlcjogXCJOb3Rlc1wiLFxuXHR9KTtcblx0bm90ZXNMYWJlbC5hcHBlbmRDaGlsZChub3Rlc0lucHV0KTtcblx0Ly9wcm9qZWN0IGxpc3Rcblx0Y29uc3QgcHJvamVjdExpc3RMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHtcblx0XHRmb3I6IFwicHJvamVjdC10YXNrLWFkZFwiLFxuXHR9KTtcblx0cHJvamVjdExpc3RMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIHRvIEV4aXN0aW5nIFByb2plY3RcIjtcblx0Y29uc3QgcHJvamVjdExpc3RTZWxlY3QgPSBkb21DcmVhdGUoXCJzZWxlY3RcIiwgW1wiZm9ybS1jb250cm9sXCJdLCB7XG5cdFx0aWQ6IFwicHJvamVjdC10YXNrLWFkZFwiLFxuXHRcdG5hbWU6IFwicHJvamVjdC10YXNrLWFkZFwiLFxuXHR9KTtcblx0Y29uc3QgcHJvamVjdExpc3RPcHRpb25ERUZBVUxUID0gZG9tQ3JlYXRlKFwib3B0aW9uXCIsIFwiXCIsIHtcblx0XHR2YWx1ZTogXCJudWxsXCIsXG5cdFx0ZGlzYWJsZWQ6IFwiXCIsXG5cdFx0c2VsZWN0ZWQ6IFwiXCIsXG5cdH0pO1xuXHRwcm9qZWN0TGlzdE9wdGlvbkRFRkFVTFQudGV4dENvbnRlbnQgPSBcIi0tU2VsZWN0IGV4aXN0aW5nIHByb2plY3QtLVwiO1xuXHRwcm9qZWN0TGlzdFNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdE9wdGlvbkRFRkFVTFQpO1xuXHQvLy8vICBnZXQgbmFtZXMgb2YgYWxsIHByb2plY3RzXG5cdGNvbnN0IHRvdGFsUHJvamVjdE5hbWVzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHByb2plY3QgPSBzYXZlZFByb2plY3RzW2ldO1xuXHRcdHRvdGFsUHJvamVjdE5hbWVzLnB1c2gocHJvamVjdC50aXRsZSk7XG5cdH1cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFByb2plY3ROYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IG5hbWUgPSB0b3RhbFByb2plY3ROYW1lc1tpXTtcblx0XHRjb25zdCBwcm9qZWN0TGlzdE9wdGlvbiA9IGRvbUNyZWF0ZShcIm9wdGlvblwiLCBcIlwiLCB7XG5cdFx0XHR2YWx1ZTogbmFtZSxcblx0XHR9KTtcblx0XHRwcm9qZWN0TGlzdE9wdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XG5cdFx0cHJvamVjdExpc3RTZWxlY3QuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RPcHRpb24pO1xuXHR9XG5cdGNvbnN0IHByb2plY3RMaXN0RXJyTXNnID0gZG9tQ3JlYXRlKFwic21hbGxcIiwgW1wiZXJyLW1zZ1wiXSwge1xuXHRcdGlkOiBcInRhc2stcHJvamVjdC1lcnItbXNnXCIsXG5cdH0pO1xuXHRwcm9qZWN0TGlzdEVyck1zZy50ZXh0Q29udGVudCA9IFwiICogUHJvamVjdCBhc3NvY2lhdGlvbiBpcyByZXF1aXJlZFwiO1xuXHRwcm9qZWN0TGlzdExhYmVsLmFwcGVuZChwcm9qZWN0TGlzdFNlbGVjdCwgcHJvamVjdExpc3RFcnJNc2cpO1xuXHQvL2FkZC9jbGVhciBidG5zXG5cdGNvbnN0IHRhc2tGb3JtQnRucyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJuZXctdGFzay1idXR0b25zXCJdKTtcblx0Y29uc3QgYWRkQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImJ0blwiXSwge1xuXHRcdGlkOiBcImFkZC10YXNrLWJ0blwiLFxuXHR9KTtcblx0YWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblx0YWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrU3VibWl0KTtcblx0Y29uc3QgY2xlYXJCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW1wiYnRuXCJdLCB7XG5cdFx0aWQ6IFwidGFzay1jbGVhclwiLFxuXHR9KTtcblx0Y2xlYXJCdG4udGV4dENvbnRlbnQgPSBcIkNsZWFyIGZpZWxkc1wiO1xuXHRjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJUYXNrRm9ybSk7XG5cdHRhc2tGb3JtQnRucy5hcHBlbmQoYWRkQnRuLCBjbGVhckJ0bik7XG5cdC8vZm9ybSBjb250YWluZXJcblx0Y29uc3QgZm9ybUNvbnRhaW5lciA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJmb3JtLWNvbnRhaW5lclwiXSwge1xuXHRcdGlkOiBcIm5ldy1wcm9qZWN0LWZvcm1cIixcblx0fSk7XG5cdGZvcm1Db250YWluZXIuYXBwZW5kKFxuXHRcdGZvcm1UaXRsZSxcblx0XHRmb3JtU3VidGl0bGUsXG5cdFx0Y2xvc2VCdG4sXG5cdFx0dGl0bGVMYWJlbCxcblx0XHRkZXNjTGFiZWwsXG5cdFx0ZGF0ZUxhYmVsLFxuXHRcdHByaW9yaXR5TGFiZWwsXG5cdFx0bm90ZXNMYWJlbCxcblx0XHRwcm9qZWN0TGlzdExhYmVsLFxuXHRcdHRhc2tGb3JtQnRuc1xuXHQpO1xuXHQvL3dyYXBwZXJcblx0Y29uc3QgYWRkVGFza1NlY3Rpb24gPSBkb21DcmVhdGUoXCJzZWN0aW9uXCIsIFtcImFkZF90YXNrX3NlY3Rpb25cIl0pO1xuXHRhZGRUYXNrU2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblx0cmV0dXJuIGFkZFRhc2tTZWN0aW9uO1xufVxuXG5leHBvcnQgeyBhZGRUYXNrU3VibWl0LCByZW5kZXJBZGRUYXNrRm9ybSB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFRhc2tzIH0gZnJvbSBcIi4uL3BhZ2VzL3Byb2plY3RUYXNrc1wiO1xuaW1wb3J0IHsgcmVuZGVyRGFzaGJvYXJkUGFnZSwgcmVuZGVyQWxsUHJvamVjdHNQYWdlIH0gZnJvbSBcIi4uL3JlbmRlclBhZ2VzXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RBc2lkZUxpc3QoKSB7XG5cdGNvbnN0IHNhdmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXHRjb25zdCBwcm9qZWN0TGlzdCA9IGRvbUNyZWF0ZShcInVsXCIsIFwiXCIsIHsgaWQ6IFwicHJvamVjdC1wYW5lbC1saXN0XCIgfSk7XG5cblx0aWYgKHNhdmVkUHJvamVjdHMubGVuZ3RoID09PSAwKSByZXR1cm4gcHJvamVjdExpc3Q7XG5cdGNvbnN0IHRvdGFsUHJvamVjdE5hbWVzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHByb2plY3QgPSBzYXZlZFByb2plY3RzW2ldO1xuXHRcdHRvdGFsUHJvamVjdE5hbWVzLnB1c2gocHJvamVjdC50aXRsZSk7XG5cdH1cblx0Ly8vL2RvbSBsb2dpY1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsUHJvamVjdE5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRvdGFsUHJvamVjdE5hbWVzW2ldO1xuXHRcdGNvbnN0IGxpRWwgPSBkb21DcmVhdGUoXCJsaVwiLCBbXCJwcm9qZWN0LWxpc3QtaXRlbVwiXSwge1xuXHRcdFx0XCJkYXRhLXByb2plY3QtaW5kZXhcIjogaSxcblx0XHR9KTtcblx0XHRsaUVsLnRleHRDb250ZW50ID0gbmFtZTtcblx0XHRsaUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBkYXNoYm9hcmRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFzaC1hc2lkZVwiKTtcblx0XHRcdGNvbnN0IHByb2plY3RMaXN0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdC1hc2lkZVwiKTtcblx0XHRcdGNvbnN0IGFsbFByb2plY3RzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1wcm9qZWN0cy1hc2lkZVwiKTtcblx0XHRcdGNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1saXN0LWl0ZW1cIik7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RJdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBpdGVtID0gcHJvamVjdEl0ZW1zW2ldO1xuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0LWxpc3Qtc2VsZWN0ZWRcIik7XG5cdFx0XHR9XG5cdFx0XHRsaUVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3Qtc2VsZWN0ZWRcIik7XG5cblx0XHRcdGlmICghcHJvamVjdExpc3RFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhc2lkZS1zZWxlY3RlZFwiKSkge1xuXHRcdFx0XHRwcm9qZWN0TGlzdEVsLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdFx0ZGFzaGJvYXJkRWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0XHRhbGxQcm9qZWN0c0VsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdH1cblx0XHRcdGxldCBpbmRleCA9IGxpRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIpO1xuXHRcdFx0cmVuZGVyUHJvamVjdFRhc2tzKGluZGV4KTtcblx0XHR9KTtcblx0XHRwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaUVsKTtcblx0fVxuXHRyZXR1cm4gcHJvamVjdExpc3Q7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFzaWRlKCkge1xuXHQvL0RBU0hCT0FSRFxuXHRjb25zdCBkYXNoYm9hcmRFbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJhc2lkZS1pdGVtXCIsIFwiYXNpZGUtc2VsZWN0ZWRcIl0sIHtcblx0XHRpZDogXCJkYXNoLWFzaWRlXCIsXG5cdH0pO1xuXHRkYXNoYm9hcmRFbC50ZXh0Q29udGVudCA9IFwiREFTSEJPQVJEXCI7XG5cblx0Ly9BTEwgUFJPSkVDVFNcblx0Y29uc3QgYWxsUHJvamVjdHNFbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJhc2lkZS1pdGVtXCJdLCB7XG5cdFx0aWQ6IFwiYWxsLXByb2plY3RzLWFzaWRlXCIsXG5cdH0pO1xuXHRhbGxQcm9qZWN0c0VsLnRleHRDb250ZW50ID0gXCJBTEwgUFJPSkVDVFNcIjtcblx0Ly9QUk9KRUNUIExJU1Rcblx0Y29uc3QgcHJvamVjdExpc3RCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgXCJcIiwge1xuXHRcdGlkOiBcInByb2plY3QtYWNjb3JkaW9uLWJ0blwiLFxuXHR9KTtcblx0cHJvamVjdExpc3RCdG4udGV4dENvbnRlbnQgPSBcIlBST0pFQ1RTXCI7XG5cblx0Y29uc3QgcHJvamVjdFBhbmVsID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwicHJvamVjdC1wYW5lbC1kaXNwbGF5XCIgfSk7XG5cdGNvbnN0IHByb2plY3RMaXN0VUwgPSByZW5kZXJQcm9qZWN0QXNpZGVMaXN0KCk7XG5cdHByb2plY3RQYW5lbC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdFVMKTtcblx0Y29uc3QgcHJvamVjdExpc3RFbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJhc2lkZS1pdGVtXCJdLCB7XG5cdFx0aWQ6IFwicHJvamVjdC1saXN0LWFzaWRlXCIsXG5cdH0pO1xuXHRmdW5jdGlvbiBhY2NvcmRpb25Ub2dnbGUoKSB7XG5cdFx0cHJvamVjdExpc3RCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0XHRpZiAocHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuXHRcdFx0cHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0fVxuXHR9XG5cdHByb2plY3RMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2NvcmRpb25Ub2dnbGUpO1xuXHRwcm9qZWN0TGlzdEVsLmFwcGVuZChwcm9qZWN0TGlzdEJ0biwgcHJvamVjdFBhbmVsKTtcblx0Ly9zZWxlY3QgdG9nZ2xlIGV2ZW50IGxpc3RlbmVyc1xuXHRkYXNoYm9hcmRFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGlmICghZGFzaGJvYXJkRWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXNpZGUtc2VsZWN0ZWRcIikpIHtcblx0XHRcdGRhc2hib2FyZEVsLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdGFsbFByb2plY3RzRWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0cHJvamVjdExpc3RFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0fVxuXHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0cmVuZGVyRGFzaGJvYXJkUGFnZSgpO1xuXHR9KTtcblx0YWxsUHJvamVjdHNFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGlmICghYWxsUHJvamVjdHNFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhc2lkZS1zZWxlY3RlZFwiKSkge1xuXHRcdFx0YWxsUHJvamVjdHNFbC5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRkYXNoYm9hcmRFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRwcm9qZWN0TGlzdEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHR9XG5cdFx0cHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRyZW5kZXJBbGxQcm9qZWN0c1BhZ2UoKTtcblx0fSk7XG5cdC8vRlVMTCBBU0lERSBBUFBFTkRcblx0Y29uc3QgYXNpZGVFbCA9IGRvbUNyZWF0ZShcImFzaWRlXCIsIFwiXCIsIHsgaWQ6IFwibWFpbi1hc2lkZVwiIH0pO1xuXHRhc2lkZUVsLmFwcGVuZChkYXNoYm9hcmRFbCwgYWxsUHJvamVjdHNFbCwgcHJvamVjdExpc3RFbCk7XG5cdC8vYXBwbHkgb3RoZXIgc3R5bGluZyAvIGVsZW1lbnRzIC8gY2xpY2sgZXZlbnRzXG5cdHJlbmRlclByb2plY3RBc2lkZUxpc3QoKTtcblx0cmV0dXJuIGFzaWRlRWw7XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RBc2lkZUxpc3QsIHJlbmRlckFzaWRlIH07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vLi4vRE9NXCI7XG5pbXBvcnQgY2hlY2tMb2dvIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvY2hlY2tib3gtbWFya2VkLWNpcmNsZS5wbmdcIjtcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvcGx1cy1jaXJjbGUtb3V0bGluZS5wbmdcIjtcbmltcG9ydCBhZGRUYXNrSWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2NoZWNrYm94LW1hcmtlZC1jaXJjbGUtcGx1cy1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IGFkZFByb2plY3RJY29uIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvbGlzdC1ncm91cC1wbHVzLnBuZ1wiO1xuaW1wb3J0IGdlYXJJY29uIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvY29nLW91dGxpbmUucG5nXCI7XG5pbXBvcnQgeyByZW5kZXJUYXNrRm9ybSwgcmVuZGVyUHJvamVjdEZvcm0gfSBmcm9tIFwiLi4vLi4vZm9ybVwiO1xuaW1wb3J0IHsgcmVuZGVyRGFzaGJvYXJkUGFnZSB9IGZyb20gXCIuLi9yZW5kZXJQYWdlc1wiO1xuaW1wb3J0IHsgcmVuZGVyU2VhcmNoIH0gZnJvbSBcIi4uL3BhZ2VzL3NlYXJjaFwiO1xuXG5mdW5jdGlvbiByZW5kZXJBZGRNZW51KCkge1xuXHRjb25zdCBhZGRJY29uTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWljb24tbWVudVwiKTtcblx0YWRkSWNvbk1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImljb24tbWVudS10b2dnbGVcIik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcblx0Ly8vL2hlYWRlciBMRUZUXG5cdGNvbnN0IHNpdGVMb2dvID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFtcImZha2UtY2xhc3NcIl0sIHtcblx0XHRzcmM6IGNoZWNrTG9nbyxcblx0XHRhbHQ6IFwiY2hlY2tlZCBjaXJjbGUgbG9nb1wiLFxuXHR9KTtcblx0Y29uc3Qgc2l0ZVRpdGxlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwiaGVhZGVyLXNpdGUtdGl0bGVcIiB9KTtcblx0c2l0ZVRpdGxlLnRleHRDb250ZW50ID0gXCJUT0RPIExJU1RcIjtcblx0Ly9zZWVkIGRhdGFcblx0Y29uc3Qgc2VlZERhdGFCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgXCJcIiwgeyBpZDogXCJzZWVkLXByb2plY3RzLWJ0blwiIH0pO1xuXHRzZWVkRGF0YUJ0bi50ZXh0Q29udGVudCA9IFwiU0VFRCBEQVRBXCI7XG5cdGNvbnN0IGhlYWRlckxlZnQgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJoZWFkZXJMZWZ0XCIgfSk7XG5cdGhlYWRlckxlZnQuYXBwZW5kKHNpdGVMb2dvLCBzaXRlVGl0bGUsIHNlZWREYXRhQnRuKTtcblx0Ly8vL2hlYWRlciBDRU5URVJcblx0Y29uc3Qgc2VhcmNoTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJzaXRlLXNlYXJjaFwiIH0pO1xuXHRzZWFyY2hMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VhcmNoIHRoZSBzaXRlOiBcIjtcblx0Y29uc3Qgc2VhcmNoSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBcIlwiLCB7XG5cdFx0aWQ6IFwic2l0ZS1zZWFyY2hcIixcblx0XHR0eXBlOiBcInNlYXJjaFwiLFxuXHRcdG5hbWU6IFwicVwiLFxuXHR9KTtcblx0c2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG5cdFx0bGV0IGN1cnJlbnRWYWwgPSBlLnRhcmdldC52YWx1ZTsgLy8gXCJtb3dcIlxuXHRcdHJlbmRlclNlYXJjaChjdXJyZW50VmFsKTtcblx0XHRpZiAoY3VycmVudFZhbCA9PT0gXCJcIikgcmVuZGVyRGFzaGJvYXJkUGFnZSgpO1xuXHR9KTtcblx0Ly8gY29uc3Qgc2VhcmNoQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFwiXCIpO1xuXHQvLyBzZWFyY2hCdG4udGV4dENvbnRlbnQgPSBcIlNlYXJjaFwiO1xuXHRjb25zdCBoZWFkZXJDZW50ZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJoZWFkZXJDZW50ZXJcIiB9KTtcblx0aGVhZGVyQ2VudGVyLmFwcGVuZChzZWFyY2hMYWJlbCwgc2VhcmNoSW5wdXQpO1xuXHQvLy8vaGVhZGVyIFJJR0hUXG5cdC8vYWRkIGljb24gbWVudVxuXHRjb25zdCBhZGRCdG5JY29uID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFwiXCIsIHtcblx0XHRpZDogXCJhZGQtaWNvblwiLFxuXHRcdHNyYzogYWRkSWNvbixcblx0XHRhbHQ6IFwiYWRkIGJ1dHRvbiBwbHVzIGljb25cIixcblx0fSk7XG5cdGFkZEJ0bkljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckFkZE1lbnUpO1xuXHRjb25zdCBhZGRJY29uTWVudSA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcImFkZC1pY29uLW1lbnVcIiB9KTtcblx0Y29uc3QgYWRkVGFza0ltZyA9IGRvbUNyZWF0ZShcImltZ1wiLCBcIlwiLCB7XG5cdFx0aWQ6IFwiYWRkLXRhc2stZm9ybVwiLFxuXHRcdHNyYzogYWRkVGFza0ljb24sXG5cdFx0YWx0OiBcImFkZCB0YXNrIHBsdXMgaWNvblwiLFxuXHR9KTtcblxuXHRhZGRUYXNrSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJUYXNrRm9ybSk7XG5cdGNvbnN0IGFkZFByb2plY3RJbWcgPSBkb21DcmVhdGUoXCJpbWdcIiwgXCJcIiwge1xuXHRcdGlkOiBcImFkZC1wcm9qZWN0LWZvcm1cIixcblx0XHRzcmM6IGFkZFByb2plY3RJY29uLFxuXHRcdGFsdDogXCJhZGQgcHJvamVjdCBwbHVzIGljb25cIixcblx0fSk7XG5cdGFkZFByb2plY3RJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclByb2plY3RGb3JtKTtcblx0YWRkSWNvbk1lbnUuYXBwZW5kKGFkZFRhc2tJbWcsIGFkZFByb2plY3RJbWcpO1xuXHRjb25zdCBhZGRCdG5FbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcImFkZEJ0blwiIH0pO1xuXHRhZGRCdG5FbC5hcHBlbmQoYWRkQnRuSWNvbiwgYWRkSWNvbk1lbnUpO1xuXHQvL2xvZ2luXG5cdGNvbnN0IGxvZ2luRWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJsb2dpblwiIH0pO1xuXHRsb2dpbkVsLnRleHRDb250ZW50ID0gXCJMT0dJTlwiO1xuXHQvL3NldHRpbmdzXG5cdGNvbnN0IHNldHRpbmdzSWNvbiA9IGRvbUNyZWF0ZShcImltZ1wiLCBcIlwiLCB7XG5cdFx0aWQ6IFwic2V0dGluZ3MgZ2VhciBpY29uXCIsXG5cdFx0c3JjOiBnZWFySWNvbixcblx0XHRhbHQ6IFwic2V0dGluZ3MgZ2VhciBvdXRsaW5lXCIsXG5cdH0pO1xuXHRjb25zdCBzZXR0aW5nc0xpbmsgPSBkb21DcmVhdGUoXCJhXCIsIFwiXCIsIHtcblx0XHRocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbGV4Z2Vpcy90b2RvLWxpc3RcIixcblx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXG5cdH0pO1xuXHRzZXR0aW5nc0xpbmsuYXBwZW5kQ2hpbGQoc2V0dGluZ3NJY29uKTtcblx0Y29uc3Qgc2V0dGluZ3NFbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcInNldHRpbmdzXCIgfSk7XG5cdHNldHRpbmdzRWwuYXBwZW5kQ2hpbGQoc2V0dGluZ3NMaW5rKTtcblx0Y29uc3QgaGVhZGVyUmlnaHQgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJoZWFkZXJSaWdodFwiIH0pO1xuXHRoZWFkZXJSaWdodC5hcHBlbmQoYWRkQnRuRWwsIGxvZ2luRWwsIHNldHRpbmdzRWwpO1xuXHQvL0ZVTEwgSEVBREVSIEFQUEVORFxuXHRjb25zdCBoZWFkZXIgPSBkb21DcmVhdGUoXCJoZWFkZXJcIiwgXCJcIiwgeyBpZDogXCJoZWFkZXJcIiB9KTtcblx0aGVhZGVyLmFwcGVuZChoZWFkZXJMZWZ0LCBoZWFkZXJDZW50ZXIsIGhlYWRlclJpZ2h0KTtcblx0cmV0dXJuIGhlYWRlcjtcblx0Ly8gLy9DT05URU5UIEFQUEVORFxuXHQvLyBjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHQvLyBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmV4cG9ydCB7IHJlbmRlckhlYWRlciB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RUYXNrcyB9IGZyb20gXCIuLi9wYWdlcy9wcm9qZWN0VGFza3NcIjtcbmltcG9ydCB7IHJlbmRlclRhc2tGb3JtLCByZW5kZXJQcm9qZWN0Rm9ybSB9IGZyb20gXCIuLi8uLi9mb3JtXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckRhc2hib2FyZCgpIHtcblx0Ly9nZXQgYWxsIHRhc2tzIGZyb20gYWxsIHByb2plY3RzXG5cdGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5cdC8vIGNvbnNvbGUubG9nKHsgY3VycmVudFByb2plY3RzIH0pO1xuXG5cdGNvbnN0IHByb2plY3RUYXNrRGF0YSA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdHNbaV07XG5cdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdHByb2plY3RUaXRsZTogcHJvamVjdC50aXRsZSxcblx0XHRcdHRhc2tzOiBwcm9qZWN0LnRhc2tzLFxuXHRcdFx0aW5kZXg6IGksXG5cdFx0fTtcblx0XHRwcm9qZWN0VGFza0RhdGEucHVzaChkYXRhKTtcblx0fVxuXHQvLyBjb25zb2xlLnRhYmxlKHByb2plY3RUYXNrRGF0YSk7XG5cdC8vY2xlYXIgY3VycmVudCB0YXNrc1xuXHRjb25zdCB0YXNrQ29udGFpbmVyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwibWFpbi1jb250ZW50XCIgfSk7XG5cdHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0Ly9ubyBwcm9qZWN0IHJlc3VsdHMgYmFja3VwXG5cdGlmIChjdXJyZW50UHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG5cdFx0dGFza0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiTm8gcHJvamVjdHMgY3JlYXRlZCB5ZXRcIjtcblx0XHRjb25zdCBlbXB0eURpdiA9IGRvbUNyZWF0ZShcImRpdlwiKTtcblx0XHRjb25zdCBlbXB0eVByb2plY3RCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW1wiZW1wdHktYnRuXCJdLCB7XG5cdFx0XHRpZDogXCJlbXB0eS1wcm9qZWN0LWJ0bi1kYXNoXCIsXG5cdFx0fSk7XG5cdFx0ZW1wdHlQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJDUkVBVEUgUFJPSkVDVFwiO1xuXHRcdGVtcHR5UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyUHJvamVjdEZvcm0pO1xuXHRcdHRhc2tDb250YWluZXIuYXBwZW5kKGVtcHR5RGl2LCBlbXB0eVByb2plY3RCdG4pO1xuXHR9XG5cdC8vbm8gdGFzayByZXN1bHRzIGJhY2t1cFxuXHRjb25zdCBjdXJyZW50VGFza3MgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3RzW2ldO1xuXHRcdGN1cnJlbnRUYXNrcy5wdXNoKC4uLnByb2plY3QudGFza3MpO1xuXHR9XG5cdGlmIChjdXJyZW50UHJvamVjdHMubGVuZ3RoID4gMCAmJiBjdXJyZW50VGFza3MubGVuZ3RoID09PSAwKSB7XG5cdFx0dGFza0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiTm8gdGFza3MgY3JlYXRlZCB5ZXRcIjtcblx0XHRjb25zdCBlbXB0eURpdiA9IGRvbUNyZWF0ZShcImRpdlwiKTtcblx0XHRjb25zdCBlbXB0eVRhc2tCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW1wiZW1wdHktYnRuXCJdLCB7XG5cdFx0XHRpZDogXCJlbXB0eS10YXNrLWJ0bi1kYXNoXCIsXG5cdFx0fSk7XG5cdFx0ZW1wdHlUYXNrQnRuLnRleHRDb250ZW50ID0gXCJDUkVBVEUgVEFTS1wiO1xuXHRcdGVtcHR5VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyVGFza0Zvcm0pO1xuXHRcdHRhc2tDb250YWluZXIuYXBwZW5kKGVtcHR5RGl2LCBlbXB0eVRhc2tCdG4pO1xuXHR9XG5cdC8vcmVuZGVyIHByb2plY3RUYXNrRGF0YSB0YXNrc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RUYXNrRGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGRhdGEgPSBwcm9qZWN0VGFza0RhdGFbaV07XG5cdFx0Ly8gY29uc29sZS5sb2coeyBkYXRhIH0pO1xuXHRcdC8vaW5uZXIgdGFzayBjYXJkIGRpdiBpdGVtc1xuXHRcdC8vdGFzayBjYXJkIHJlbmRlcnNcblx0XHRsZXQgdGFza0RhdGEgPSBkYXRhLnRhc2tzO1xuXHRcdC8vIGNvbnNvbGUubG9nKHsgdGFza0RhdGEgfSk7IC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0RhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHRhc2sgPSB0YXNrRGF0YVtpXTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHsgdGFzayB9KTtcblx0XHRcdGNvbnN0IHRhc2tDYXJkID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stY2FyZFwiXSwge1xuXHRcdFx0XHRcImRhdGEtdGFzay1pbmRleFwiOiBpLFxuXHRcdFx0fSk7XG5cdFx0XHQvL1RJVExFXG5cdFx0XHRjb25zdCB0YXNrVGl0bGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay10aXRsZS1kYXNoXCJdKTtcblx0XHRcdHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdFx0XHQvL1BST0pFQ1QgVElUTEVcblx0XHRcdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJwcm9qZWN0LXRpdGxlLWRhc2hcIl0pO1xuXHRcdFx0cHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gZGF0YS5wcm9qZWN0VGl0bGU7XG5cdFx0XHRwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Y29uc3QgZGFzaGJvYXJkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhc2gtYXNpZGVcIik7XG5cdFx0XHRcdGNvbnN0IHByb2plY3RMaXN0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdC1hc2lkZVwiKTtcblx0XHRcdFx0Y29uc3QgYWxsUHJvamVjdHNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLXByb2plY3RzLWFzaWRlXCIpO1xuXHRcdFx0XHRpZiAoIXByb2plY3RMaXN0RWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXNpZGUtc2VsZWN0ZWRcIikpIHtcblx0XHRcdFx0XHRwcm9qZWN0TGlzdEVsLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdFx0XHRkYXNoYm9hcmRFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRcdFx0YWxsUHJvamVjdHNFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZnVuY3Rpb24gYWNjb3JkaW9uVG9nZ2xlKCkge1xuXHRcdFx0XHRcdGNvbnN0IHByb2plY3RMaXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG5cdFx0XHRcdFx0XHRcInByb2plY3QtYWNjb3JkaW9uLWJ0blwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjb25zdCBwcm9qZWN0UGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtcGFuZWwtZGlzcGxheVwiKTtcblx0XHRcdFx0XHRwcm9qZWN0TGlzdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXHRcdFx0XHRcdGlmIChwcm9qZWN0UGFuZWwuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG5cdFx0XHRcdFx0XHRwcm9qZWN0UGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwcm9qZWN0UGFuZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YWNjb3JkaW9uVG9nZ2xlKCk7XG5cdFx0XHRcdGNvbnN0IHByb2plY3RQYW5lbExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtcGFuZWwtbGlzdFwiKTtcblx0XHRcdFx0cHJvamVjdFBhbmVsTGlzdC5jaGlsZE5vZGVzW2RhdGEuaW5kZXhdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFx0XCJwcm9qZWN0LWxpc3Qtc2VsZWN0ZWRcIlxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZW5kZXJQcm9qZWN0VGFza3MoZGF0YS5pbmRleCk7XG5cdFx0XHR9KTtcblx0XHRcdC8vREVTQ1JJUFRJT05cblx0XHRcdGNvbnN0IHRhc2tEZXNjID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGVzY3JpcHRpb25cIl0pO1xuXHRcdFx0dGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXHRcdFx0Ly9EVUUgREFURVxuXHRcdFx0Y29uc3QgdGFza0RhdGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1kYXRlXCJdKTtcblx0XHRcdHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXHRcdFx0Ly9QUklPUklUWVxuXHRcdFx0Y29uc3QgdGFza1ByaW9yaXR5ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stcHJpb3JpdHlcIl0pO1xuXHRcdFx0dGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblx0XHRcdC8vTk9URVNcblx0XHRcdGNvbnN0IHRhc2tOb3RlcyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLW5vdGVzXCJdKTtcblx0XHRcdHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9IHRhc2subm90ZXM7XG5cdFx0XHQvL0RFTEVURSBJQ09OXG5cdFx0XHRjb25zdCB0YXNrRGVsZXRlSWNvbiA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJ0YXNrLWRlbGV0ZVwiXSwge1xuXHRcdFx0XHRzcmM6IGRlbGV0ZUljb24sXG5cdFx0XHRcdGFsdDogXCJ0cmFzaCBjYW4gZGVsZXRlIGljb25cIixcblx0XHRcdH0pO1xuXHRcdFx0dGFza0RlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGFza0RlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUodGFza0NhcmQpO1xuXHRcdFx0XHRsZXQgaW5kZXggPVxuXHRcdFx0XHRcdHRhc2tEZWxldGVJY29uLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWluZGV4XCIpO1xuXHRcdFx0XHRjdXJyZW50VGFza3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0Ly8gc2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdFx0XHRcdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG5cdFx0XHRcdHJlbmRlckRhc2hib2FyZCgpO1xuXHRcdFx0fSk7XG5cdFx0XHQvL0FQUEVORCBFTEVNRU5UU1xuXHRcdFx0dGFza0NhcmQuYXBwZW5kKFxuXHRcdFx0XHR0YXNrVGl0bGUsXG5cdFx0XHRcdHByb2plY3RUaXRsZSxcblx0XHRcdFx0dGFza0Rlc2MsXG5cdFx0XHRcdHRhc2tEYXRlLFxuXHRcdFx0XHR0YXNrUHJpb3JpdHksXG5cdFx0XHRcdHRhc2tOb3Rlcyxcblx0XHRcdFx0dGFza0RlbGV0ZUljb25cblx0XHRcdCk7XG5cdFx0XHQvLyB0YXNrQ2FyZC5pbnNlcnRCZWZvcmUocHJvamVjdFRpdGxlLCB0YXNrQ2FyZC5jaGlsZE5vZGVzWzFdKTtcblx0XHRcdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGFza0NvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgcmVuZGVyRGFzaGJvYXJkIH07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vLi4vRE9NXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL3RyYXNoLWNhbi1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IHsgcmVuZGVyVGFza0Zvcm0gfSBmcm9tIFwiLi4vLi4vZm9ybVwiO1xuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0VGFza3MoaW5kZXgpIHtcblx0Ly9nZXQgYWxsIHRhc2tzIGZyb20gYWxsIHByb2plY3RzXG5cdGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5cdGNvbnN0IHJlbmRlclByb2plY3QgPSBjdXJyZW50UHJvamVjdHNbaW5kZXhdO1xuXHRjb25zdCBjdXJyZW50VGFza3MgPSByZW5kZXJQcm9qZWN0LnRhc2tzIHx8IFtdO1xuXHQvL3VwZGF0ZSBtYWluIGhlYWRlclxuXHRjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWhlYWRlclwiKTtcblx0bWFpbkhlYWRlci50ZXh0Q29udGVudCA9IHJlbmRlclByb2plY3QudGl0bGUudG9VcHBlckNhc2UoKTtcblx0Ly9jbGVhciBjdXJyZW50IHRhc2tzXG5cdGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGVudFwiKTtcblx0dGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXHQvL2JhY2t1cCB0ZXh0IGlmIG5vIHRhc2tzXG5cdGlmIChjdXJyZW50VGFza3MubGVuZ3RoID09PSAwKSB7XG5cdFx0dGFza0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiTm8gdGFza3MgY3JlYXRlZCB5ZXRcIjtcblx0XHRjb25zdCBlbXB0eURpdiA9IGRvbUNyZWF0ZShcImRpdlwiKTtcblx0XHRjb25zdCBlbXB0eVRhc2tCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW1wiZW1wdHktYnRuXCJdLCB7XG5cdFx0XHRpZDogXCJlbXB0eS10YXNrLWJ0bi1kYXNoXCIsXG5cdFx0fSk7XG5cdFx0ZW1wdHlUYXNrQnRuLnRleHRDb250ZW50ID0gXCJDUkVBVEUgVEFTS1wiO1xuXHRcdGVtcHR5VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyVGFza0Zvcm0pO1xuXHRcdHRhc2tDb250YWluZXIuYXBwZW5kKGVtcHR5RGl2LCBlbXB0eVRhc2tCdG4pO1xuXHRcdC8vYXV0b3BvcHVsYXRlIHRhc2sgZm9ybVxuXHRcdGNvbnN0IGV4aXN0aW5nUHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10YXNrLWFkZFwiKTtcblx0XHRjb25zdCBjaGlsZEFycmF5ID0gZXhpc3RpbmdQcm9qZWN0U2VsZWN0LmNoaWxkTm9kZXM7XG5cdFx0ZXhpc3RpbmdQcm9qZWN0U2VsZWN0LmNoaWxkTm9kZXNbMF0uZGVmYXVsdFNlbGVjdGVkID0gZmFsc2U7XG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBjaGlsZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBvcHRpb24gPSBjaGlsZEFycmF5W2ldO1xuXHRcdFx0aWYgKHJlbmRlclByb2plY3QudGl0bGUgPT09IG9wdGlvbi52YWx1ZSkge1xuXHRcdFx0XHRleGlzdGluZ1Byb2plY3RTZWxlY3QuY2hpbGROb2Rlc1tpXS5kZWZhdWx0U2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvL3JlbmRlciBjdXJyZW50VGFza3MgdGFza3Ncblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50VGFza3MubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCB0YXNrID0gY3VycmVudFRhc2tzW2ldO1xuXHRcdGNvbnN0IHRhc2tDYXJkID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stY2FyZFwiXSwgeyBcImRhdGEtaW5kZXhcIjogaSB9KTtcblx0XHQvL2lubmVyIHRhc2sgY2FyZCBkaXYgaXRlbXNcblx0XHQvL1RJVExFXG5cdFx0Y29uc3QgdGFza1RpdGxlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stdGl0bGVcIl0pO1xuXHRcdHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdFx0Ly9ERVNDUklQVElPTlxuXHRcdGNvbnN0IHRhc2tEZXNjID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGVzY3JpcHRpb25cIl0pO1xuXHRcdHRhc2tEZXNjLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcblx0XHQvL0RVRSBEQVRFXG5cdFx0Y29uc3QgdGFza0RhdGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1kYXRlXCJdKTtcblx0XHR0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblx0XHQvL1BSSU9SSVRZXG5cdFx0Y29uc3QgdGFza1ByaW9yaXR5ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stcHJpb3JpdHlcIl0pO1xuXHRcdHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG5cdFx0Ly9OT1RFU1xuXHRcdGNvbnN0IHRhc2tOb3RlcyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLW5vdGVzXCJdKTtcblx0XHR0YXNrTm90ZXMudGV4dENvbnRlbnQgPSB0YXNrLm5vdGVzO1xuXHRcdC8vREVMRVRFIElDT05cblx0XHRjb25zdCB0YXNrRGVsZXRlSWNvbiA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJ0YXNrLWRlbGV0ZVwiXSwge1xuXHRcdFx0c3JjOiBkZWxldGVJY29uLFxuXHRcdFx0YWx0OiBcInRyYXNoIGNhbiBkZWxldGUgaWNvblwiLFxuXHRcdH0pO1xuXHRcdHRhc2tEZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSh0YXNrQ2FyZCk7XG5cdFx0XHRsZXQgaW5kZXggPSB0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG5cdFx0XHRjdXJyZW50VGFza3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdC8vIHNldEN1cnJlbnRUYXNrcyhjdXJyZW50VGFza3MpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza3MpKTtcblx0XHRcdHJlbmRlclByb2plY3RUYXNrcyhpbmRleCk7XG5cdFx0fSk7XG5cdFx0Ly9BUFBFTkQgRUxFTUVOVFNcblx0XHR0YXNrQ2FyZC5hcHBlbmQoXG5cdFx0XHR0YXNrVGl0bGUsXG5cdFx0XHR0YXNrRGVzYyxcblx0XHRcdHRhc2tEYXRlLFxuXHRcdFx0dGFza1ByaW9yaXR5LFxuXHRcdFx0dGFza05vdGVzLFxuXHRcdFx0dGFza0RlbGV0ZUljb25cblx0XHQpO1xuXHRcdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXHR9XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RUYXNrcyB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RUYXNrcyB9IGZyb20gXCIuL3Byb2plY3RUYXNrc1wiO1xuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0c0FsbCgpIHtcblx0Ly9nZXQgYWxsIHByb2plY3RzXG5cdGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5cdGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0cyk7XG5cdC8vY2xlYXIgY3VycmVudCBjb250ZW50XG5cdGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJtYWluLWNvbnRlbnRcIiB9KTtcblx0Ly8gcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXHQvL3JlbmRlciBjdXJyZW50UHJvamVjdHMgcHJvamVjdHNcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3RzW2ldO1xuXHRcdGNvbnN0IHByb2plY3RDYXJkID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInByb2plY3QtY2FyZFwiXSwgeyBcImRhdGEtaW5kZXhcIjogaSB9KTtcblx0XHQvL2lubmVyIHByb2plY3QgY2FyZCBkaXYgaXRlbXNcblx0XHQvL1RJVExFXG5cdFx0Y29uc3QgcHJvamVjdFRpdGxlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInByb2plY3QtdGl0bGVcIl0pO1xuXHRcdHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cdFx0Ly9ERVNDUklQVElPTlxuXHRcdGNvbnN0IHByb2plY3REZXNjID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInByb2plY3QtZGVzY3JpcHRpb25cIl0pO1xuXHRcdHByb2plY3REZXNjLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcblx0XHQvL1RBU0tTXG5cdFx0Y29uc3QgcHJvamVjdFRhc2tzTGlzdCA9IGRvbUNyZWF0ZShcInVsXCIsIFtcInByb2plY3QtdGFza3MtbGlzdFwiXSk7XG5cdFx0bGV0IHRhc2tBcnJheSA9IHByb2plY3QudGFza3M7XG5cdFx0aWYgKHRhc2tBcnJheS5sZW5ndGggPT09IDApXG5cdFx0XHRwcm9qZWN0VGFza3NMaXN0LnRleHRDb250ZW50ID0gXCIwIHRhc2tzIGluIHRoaXMgcHJvamVjdFwiO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCB0YXNrID0gdGFza0FycmF5W2ldO1xuXHRcdFx0Y29uc3QgbGkgPSBkb21DcmVhdGUoXCJsaVwiLCBbXCJwcm9qZWN0LXRhc2stbGlzdC1pdGVtXCJdKTtcblx0XHRcdGxpLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0XHRcdHByb2plY3RUYXNrc0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xuXHRcdH1cblx0XHRjb25zdCBwcm9qZWN0VGFza3MgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wicHJvamVjdC10YXNrc1wiXSk7XG5cdFx0cHJvamVjdFRhc2tzLmFwcGVuZENoaWxkKHByb2plY3RUYXNrc0xpc3QpO1xuXHRcdC8vREVMRVRFIElDT05cblx0XHRjb25zdCBwcm9qZWN0RGVsZXRlSWNvbiA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJwcm9qZWN0LWRlbGV0ZVwiXSwge1xuXHRcdFx0c3JjOiBkZWxldGVJY29uLFxuXHRcdFx0YWx0OiBcInRyYXNoIGNhbiBkZWxldGUgaWNvblwiLFxuXHRcdH0pO1xuXHRcdHByb2plY3REZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRwcm9qZWN0RGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LnJlbW92ZShwcm9qZWN0Q2FyZCk7XG5cdFx0XHRsZXQgaW5kZXggPSBwcm9qZWN0RGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG5cdFx0XHRjdXJyZW50UHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdC8vIHNldEN1cnJlbnRQcm9qZWN0cyhjdXJyZW50UHJvamVjdHMpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdHMpKTtcblx0XHRcdHJlbmRlclByb2plY3RzQWxsKCk7XG5cdFx0fSk7XG5cdFx0Ly9BUFBFTkQgRUxFTUVOVFNcblx0XHRwcm9qZWN0Q2FyZC5hcHBlbmQoXG5cdFx0XHRwcm9qZWN0VGl0bGUsXG5cdFx0XHRwcm9qZWN0RGVzYyxcblx0XHRcdHByb2plY3RUYXNrcyxcblx0XHRcdHByb2plY3REZWxldGVJY29uXG5cdFx0KTtcblx0XHRwcm9qZWN0Q2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgZGFzaGJvYXJkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhc2gtYXNpZGVcIik7XG5cdFx0XHRjb25zdCBwcm9qZWN0TGlzdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3QtYXNpZGVcIik7XG5cdFx0XHRjb25zdCBhbGxQcm9qZWN0c0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtcHJvamVjdHMtYXNpZGVcIik7XG5cdFx0XHRpZiAoIXByb2plY3RMaXN0RWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXNpZGUtc2VsZWN0ZWRcIikpIHtcblx0XHRcdFx0cHJvamVjdExpc3RFbC5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRcdGRhc2hib2FyZEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdFx0YWxsUHJvamVjdHNFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHR9XG5cdFx0XHRmdW5jdGlvbiBhY2NvcmRpb25Ub2dnbGUoKSB7XG5cdFx0XHRcdGNvbnN0IHByb2plY3RMaXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWFjY29yZGlvbi1idG5cIik7XG5cdFx0XHRcdGNvbnN0IHByb2plY3RQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1wYW5lbC1kaXNwbGF5XCIpO1xuXHRcdFx0XHRwcm9qZWN0TGlzdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXHRcdFx0XHRpZiAocHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuXHRcdFx0XHRcdHByb2plY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGFjY29yZGlvblRvZ2dsZSgpO1xuXHRcdFx0Y29uc3QgcHJvamVjdFBhbmVsTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1wYW5lbC1saXN0XCIpO1xuXHRcdFx0cHJvamVjdFBhbmVsTGlzdC5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3Qtc2VsZWN0ZWRcIik7XG5cdFx0XHRyZW5kZXJQcm9qZWN0VGFza3MoaSk7XG5cdFx0fSk7XG5cdFx0cHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG5cdH1cblx0cmV0dXJuIHByb2plY3RDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RzQWxsIH07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vLi4vRE9NXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL3RyYXNoLWNhbi1vdXRsaW5lLnBuZ1wiO1xuXG5mdW5jdGlvbiByZW5kZXJTZWFyY2goc2VhcmNoKSB7XG5cdGlmIChzZWFyY2ggPT09IFwiXCIpIHJldHVybjtcblx0Ly9nZXQgYWxsIHRhc2tzIGZyb20gYWxsIHByb2plY3RzXG5cdGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5cdGNvbnN0IGN1cnJlbnRUYXNrcyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdHNbaV07XG5cdFx0Y3VycmVudFRhc2tzLnB1c2goLi4ucHJvamVjdC50YXNrcyk7XG5cdH1cblx0Y29uc3QgZmlsdGVyVGFza3MgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50VGFza3MubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCB0YXNrID0gY3VycmVudFRhc2tzW2ldO1xuXHRcdGxldCBsb3dlclRpdGxlID0gdGFzay50aXRsZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGxldCBsb3dlclNlYXJjaCA9IHNlYXJjaC50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmIChsb3dlclRpdGxlLmluY2x1ZGVzKGxvd2VyU2VhcmNoKSkge1xuXHRcdFx0ZmlsdGVyVGFza3MucHVzaCh0YXNrKTtcblx0XHR9XG5cdH1cblx0Ly91cGRhdGUgbWFpbiBoZWFkZXJcblx0Y29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1oZWFkZXJcIik7XG5cdG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBcIlNFQVJDSCBSRVNVTFRTXCI7XG5cdC8vY2xlYXIgY3VycmVudCB0YXNrc1xuXHRjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnRcIik7XG5cdHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0Ly9ubyBzZWFyY2ggcmVzdWx0cyBiYWNrdXBcblx0aWYgKGZpbHRlclRhc2tzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRhc2tDb250YWluZXIudGV4dENvbnRlbnQgPSBcIk5vIHNlYXJjaCByZXN1bHRzXCI7XG5cdH1cblx0Ly9yZW5kZXIgZmlsdGVyVGFza3MgdGFza3Ncblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJUYXNrcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHRhc2sgPSBmaWx0ZXJUYXNrc1tpXTtcblx0XHRjb25zdCB0YXNrQ2FyZCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWNhcmRcIl0sIHsgXCJkYXRhLXRhc2staW5kZXhcIjogaSB9KTtcblx0XHQvL2lubmVyIHRhc2sgY2FyZCBkaXYgaXRlbXNcblx0XHQvL1RJVExFXG5cdFx0Y29uc3QgdGFza1RpdGxlID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stdGl0bGVcIl0pO1xuXHRcdHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdFx0Ly9ERVNDUklQVElPTlxuXHRcdGNvbnN0IHRhc2tEZXNjID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stZGVzY3JpcHRpb25cIl0pO1xuXHRcdHRhc2tEZXNjLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcblx0XHQvL0RVRSBEQVRFXG5cdFx0Y29uc3QgdGFza0RhdGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1kYXRlXCJdKTtcblx0XHR0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblx0XHQvL1BSSU9SSVRZXG5cdFx0Y29uc3QgdGFza1ByaW9yaXR5ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stcHJpb3JpdHlcIl0pO1xuXHRcdHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG5cdFx0Ly9OT1RFU1xuXHRcdGNvbnN0IHRhc2tOb3RlcyA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLW5vdGVzXCJdKTtcblx0XHR0YXNrTm90ZXMudGV4dENvbnRlbnQgPSB0YXNrLm5vdGVzO1xuXHRcdC8vREVMRVRFIElDT05cblx0XHRjb25zdCB0YXNrRGVsZXRlSWNvbiA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJ0YXNrLWRlbGV0ZVwiXSwge1xuXHRcdFx0c3JjOiBkZWxldGVJY29uLFxuXHRcdFx0YWx0OiBcInRyYXNoIGNhbiBkZWxldGUgaWNvblwiLFxuXHRcdH0pO1xuXHRcdHRhc2tEZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSh0YXNrQ2FyZCk7XG5cdFx0XHRsZXQgaW5kZXggPSB0YXNrRGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pbmRleFwiKTtcblx0XHRcdGZpbHRlclRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHQvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZpbHRlclRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGZpbHRlclRhc2tzKSk7XG5cdFx0XHRyZW5kZXJTZWFyY2goc2VhcmNoKTtcblx0XHR9KTtcblx0XHQvL0FQUEVORCBFTEVNRU5UU1xuXHRcdHRhc2tDYXJkLmFwcGVuZChcblx0XHRcdHRhc2tUaXRsZSxcblx0XHRcdHRhc2tEZXNjLFxuXHRcdFx0dGFza0RhdGUsXG5cdFx0XHR0YXNrUHJpb3JpdHksXG5cdFx0XHR0YXNrTm90ZXMsXG5cdFx0XHR0YXNrRGVsZXRlSWNvblxuXHRcdCk7XG5cdFx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG5cdH1cblx0Ly8gcmV0dXJuIHRhc2tDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IHJlbmRlclNlYXJjaCB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uL0RPTVwiO1xuaW1wb3J0IHsgcmVuZGVyRGFzaGJvYXJkIH0gZnJvbSBcIi4vcGFnZXMvZGFzaGJvYXJkXCI7XG5pbXBvcnQgeyByZW5kZXJIZWFkZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IHsgcmVuZGVyQXNpZGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FzaWRlXCI7XG5pbXBvcnQgeyByZW5kZXJBZGRUYXNrRm9ybSB9IGZyb20gXCIuL2NvbXBvbmVudHMvYWRkVGFza0Zvcm1cIjtcbmltcG9ydCB7IHJlbmRlckFkZFByb2plY3RGb3JtIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hZGRQcm9qZWN0Rm9ybVwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHNBbGwgfSBmcm9tIFwiLi9wYWdlcy9wcm9qZWN0c0FsbFwiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgaGVhZGVyID0gcmVuZGVySGVhZGVyKCk7XG5jb25zdCBhc2lkZSA9IHJlbmRlckFzaWRlKCk7XG5jb25zdCBtYWluU2VjdGlvbiA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcIm1haW4tc2VjdGlvblwiIH0pO1xuY29uc3QgbWFpbkhlYWRlciA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcIm1haW4taGVhZGVyXCIgfSk7XG5tYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcbmNvbnN0IG1haW5EaXYgPSBkb21DcmVhdGUoXCJtYWluXCIsIFwiXCIsIHsgaWQ6IFwibWFpblwiIH0pO1xubWFpbkRpdi5hcHBlbmQoYXNpZGUsIG1haW5TZWN0aW9uKTtcbmNvbnN0IHRhc2tGb3JtID0gcmVuZGVyQWRkVGFza0Zvcm0oKTtcbmNvbnN0IHByb2plY3RGb3JtID0gcmVuZGVyQWRkUHJvamVjdEZvcm0oKTtcbmNvbnRlbnQuYXBwZW5kKGhlYWRlciwgbWFpbkRpdiwgdGFza0Zvcm0sIHByb2plY3RGb3JtKTtcblxuZnVuY3Rpb24gcmVwbGFjZUhlbHBlcihuZXdTaWIpIHtcblx0aWYgKG1haW5IZWFkZXIubmV4dFNpYmxpbmcpIHtcblx0XHRjb25zdCBuZXh0U2liID0gbWFpbkhlYWRlci5uZXh0U2libGluZztcblx0XHRtYWluU2VjdGlvbi5yZXBsYWNlQ2hpbGQobmV3U2liLCBuZXh0U2liKTtcblx0fSBlbHNlIHtcblx0XHRtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChuZXdTaWIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRhc2hib2FyZFBhZ2UoKSB7XG5cdG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBcIkRBU0hCT0FSRFwiO1xuXHRjb25zdCBkYXNoYm9hcmQgPSByZW5kZXJEYXNoYm9hcmQoKTtcblx0cmVwbGFjZUhlbHBlcihkYXNoYm9hcmQpO1xufVxuZnVuY3Rpb24gcmVuZGVyQWxsUHJvamVjdHNQYWdlKCkge1xuXHRtYWluSGVhZGVyLnRleHRDb250ZW50ID0gXCJQUk9KRUNUU1wiO1xuXHRjb25zdCBhbGxQcm9qZWN0cyA9IHJlbmRlclByb2plY3RzQWxsKCk7XG5cdHJlcGxhY2VIZWxwZXIoYWxsUHJvamVjdHMpO1xufVxuLy8gZnVuY3Rpb24gcmVuZGVyU2VhcmNoUGFnZSgpIHtcbi8vIFx0bWFpbkhlYWRlci50ZXh0Q29udGVudCA9IFwiU0VBUkNIIFJFU1VMVFNcIjtcbi8vIFx0Ly8gY29uc3QgYWxsUHJvamVjdHMgPSByZW5kZXJQcm9qZWN0c0FsbCgpO1xuLy8gXHQvLyByZXBsYWNlSGVscGVyKGFsbFByb2plY3RzKTtcbi8vIH1cblxuZXhwb3J0IHsgcmVuZGVyRGFzaGJvYXJkUGFnZSwgcmVuZGVyQWxsUHJvamVjdHNQYWdlIH07XG4iLCJjb25zdCBzYXZlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcbmNvbnN0IHNhdmVkVGFza3MgPSBbXTtcbmxldCBjdXJyZW50VGFza3MgPSBzYXZlZFRhc2tzO1xubGV0IGN1cnJlbnRQcm9qZWN0cyA9IHNhdmVkUHJvamVjdHM7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRUYXNrcyhuZXdUYXNrcykge1xuXHRjdXJyZW50VGFza3MgPSBuZXdUYXNrcztcblx0Ly8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza3MpKTtcbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3RzKG5ld1Byb2plY3RzKSB7XG5cdGN1cnJlbnRQcm9qZWN0cyA9IG5ld1Byb2plY3RzO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0cykpO1xufVxuXG5leHBvcnQgeyBzZXRDdXJyZW50VGFza3MsIHNldEN1cnJlbnRQcm9qZWN0cyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9