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
	const titleLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", "", { for: "t-title" });
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
	const descLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", "", { for: "t-desc" });
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
	const titleLabel = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("label", "", { for: "t-title" });
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
	const priorityErrMsg = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("small", ["err-msg"]);
	priorityErrMsg.textContent = " * Priority is required";
	priorityInput.appendChild(priorityErrMsg);
	priorityLabel.appendChild(priorityInput);
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

/***/ "./src/js/render/components/aside/aside.js":
/*!*************************************************!*\
  !*** ./src/js/render/components/aside/aside.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAside": () => (/* binding */ renderAside)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../DOM */ "./src/js/DOM.js");
/* harmony import */ var _pages_projectTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/projectTasks */ "./src/js/render/pages/projectTasks.js");



function renderProjectAsideList() {
	const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
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
	});
	allProjectsEl.addEventListener("click", function () {
		if (!allProjectsEl.classList.contains("aside-selected")) {
			allProjectsEl.classList.add("aside-selected");
			dashboardEl.classList.remove("aside-selected");
			projectListEl.classList.remove("aside-selected");
		}
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
	const searchBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("button", "");
	searchBtn.textContent = "Search";
	const headerCenter = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "headerCenter" });
	headerCenter.append(searchLabel, searchInput, searchBtn);
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
/* harmony import */ var _components_aside_aside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/aside/aside */ "./src/js/render/components/aside/aside.js");
/* harmony import */ var _assets_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/trash-can-outline.png */ "./src/assets/trash-can-outline.png");




function renderDashboardContent() {
	//get all tasks from all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects"));
	const currentTasks = [];
	for (let i = 0; i < currentProjects.length; i++) {
		const project = currentProjects[i];
		currentTasks.push(...project.tasks);
	}
	//update main header
	const mainHeader = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "main-header" });
	mainHeader.textContent = "DASHBOARD";
	//clear current tasks
	const taskContainer = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "main-content" });
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
			src: _assets_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_2__,
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
	const mainSection = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("div", "", { id: "main-section" });
	mainSection.append(mainHeader, taskContainer);
	return mainSection;
}

function renderDashboard() {
	const aside = (0,_components_aside_aside__WEBPACK_IMPORTED_MODULE_1__.renderAside)();
	const mainSection = renderDashboardContent();
	const mainDiv = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.domCreate)("main", "", { id: "main" });
	mainDiv.append(aside, mainSection);
	return mainDiv;
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
			// setCurrentTasks(currentTasks);
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

/***/ "./src/js/render/renderPages.js":
/*!**************************************!*\
  !*** ./src/js/render/renderPages.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderDashboardPage": () => (/* binding */ renderDashboardPage)
/* harmony export */ });
/* harmony import */ var _pages_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard */ "./src/js/render/pages/dashboard.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/js/render/components/header.js");


// import { renderProjectsAll } from "./projectsAll";
// import { renderProjectTasks } from "./projectTasks";

const content = document.getElementById("content");
const header = (0,_components_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();

function renderDashboardPage() {
	const dashboard = (0,_pages_dashboard__WEBPACK_IMPORTED_MODULE_0__.renderDashboard)();
	content.append(header, dashboard);
}
// function renderAllProjectsPage() {
// 	const allProjects = renderProjectsAll();
// 	content.append(header, allProjects);
// }
// function renderProjectPage() {
// 	const projectTasks = renderProjectTasks();
// 	content.append(header, projectTasks);
// }
// function renderSearchPage() {
// 	const search = renderSearch();
// 	content.append(header, search);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHlCQUF5QixpQkFBaUI7QUFDdEU7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBUztBQUM3QjtBQUNBO0FBQ0EsbUJBQW1CLCtDQUFTO0FBQzVCO0FBQ0E7QUFDQSxtQkFBbUIsK0NBQVM7QUFDNUI7QUFDQTtBQUNBLHVCQUF1QiwrQ0FBUztBQUNoQztBQUNBO0FBQ0Esb0JBQW9CLCtDQUFTO0FBQzdCO0FBQ0E7QUFDQSx5QkFBeUIsK0NBQVM7QUFDbEMsUUFBUSwwREFBVTtBQUNsQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRThCOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEc0I7QUFDRDtBQUNuRCxZQUFZLG9CQUFvQjtBQUNoQyxZQUFZLHFCQUFxQjs7QUFFakM7QUFDQSxlQUFlLGdFQUFZOztBQUUzQjtBQUNBLG1CQUFtQixpRUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRStDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5zY3NzPzYyYWYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZGF0YS9wcm9qZWN0RGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZGF0YS9zZWVkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvY29tcG9uZW50cy9hZGRQcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcmVuZGVyL2NvbXBvbmVudHMvYWRkVGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9jb21wb25lbnRzL2FzaWRlL2FzaWRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZW5kZXIvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9wYWdlcy9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9wYWdlcy9wcm9qZWN0VGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3JlbmRlci9yZW5kZXJQYWdlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvc3RhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgY3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2pzL2NyZWF0ZVwiO1xuaW1wb3J0IHtcblx0cmVuZGVyVGFza0Zvcm0sXG5cdHJlbmRlclByb2plY3RGb3JtLFxuXHRjbGVhclRhc2tGb3JtLFxuXHRjbG9zZVRhc2tGb3JtLFxuXHRjbGVhclByb2plY3RGb3JtLFxuXHRjbG9zZVByb2plY3RGb3JtLFxufSBmcm9tIFwiLi9qcy9mb3JtXCI7XG5pbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi9qcy9ET01cIjtcbmltcG9ydCB7IHJlbmRlckFkZE1lbnUsIHJlbmRlckhlYWRlciB9IGZyb20gXCIuL2pzL3JlbmRlci9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IHsgcmVuZGVyRGFzaGJvYXJkIH0gZnJvbSBcIi4vanMvcmVuZGVyL3BhZ2VzL2Rhc2hib2FyZFwiO1xuaW1wb3J0IHtcblx0YWRkVGFza1N1Ym1pdCxcblx0cmVuZGVyQWRkVGFza0Zvcm0sXG59IGZyb20gXCIuL2pzL3JlbmRlci9jb21wb25lbnRzL2FkZFRhc2tGb3JtXCI7XG5pbXBvcnQge1xuXHRhZGRQcm9qZWN0U3VibWl0LFxuXHRyZW5kZXJBZGRQcm9qZWN0Rm9ybSxcbn0gZnJvbSBcIi4vanMvcmVuZGVyL2NvbXBvbmVudHMvYWRkUHJvamVjdEZvcm1cIjtcbmltcG9ydCB7IHNldEN1cnJlbnRUYXNrcywgc2V0Q3VycmVudFByb2plY3RzIH0gZnJvbSBcIi4vanMvc3RhdGVcIjtcbmltcG9ydCB7IHNlZWRQcm9qZWN0RGF0YSB9IGZyb20gXCIuL2pzL2RhdGEvc2VlZFwiO1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuc2Nzc1wiO1xuLy8gaW1wb3J0IHsgcmVuZGVyU2l0ZSB9IGZyb20gXCIuL2pzL3JlbmRlci9yZW5kZXJQYWdlc1wiO1xuLy9URVNUIERBVEFcbi8vIGltcG9ydCB7IHRhc2tEYXRhIH0gZnJvbSBcIi4vanMvZGF0YS90YXNrRGF0YVwiO1xuLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCB0YXNrRGF0YSk7XG5pbXBvcnQgeyByZW5kZXJEYXNoYm9hcmRQYWdlIH0gZnJvbSBcIi4vanMvcmVuZGVyL3JlbmRlclBhZ2VzXCI7XG5cbi8vIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4vLyBjb25zb2xlLmxvZyhcImJlZm9yZVwiKTtcbi8vIGxldCBlbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcImV4YW1wbGVcIiB9KTtcbi8vIGNvbnNvbGUubG9nKFwiYWZ0ZXJcIik7XG4vLyBjb25zb2xlLmxvZyh7IGVsIH0pO1xuLy8gZWwudGV4dENvbnRlbnQgPSBcIlRFU1RcIjtcbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZWwpO1xuXG4vL1NFRUQgREFUQSBCVE5cbi8vIGRvY3VtZW50XG4vLyBcdC5xdWVyeVNlbGVjdG9yKFwiI3NlZWQtcHJvamVjdHMtYnRuXCIpXG4vLyBcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VlZFByb2plY3REYXRhKTtcblxuLy8vLyBTVEFURSAvLy8vXG4vL0RFRkFVTFRTXG5jb25zdCBERUZBVUxUX1RIRU1FID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSB8fCBcImxpZ2h0XCI7XG5jb25zdCBzYXZlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcbmNvbnN0IHNhdmVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuLy8gY29uc3QgY3VycmVudGx5RG9uZSA9IHNhdmVkVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmNvbXBsZXRlID09PSB0cnVlKTtcbi8vIGNvbnN0IERFRkFVTFRfVEFTS1NfRE9ORSA9IGN1cnJlbnRseURvbmUubGVuZ3RoO1xuLy8gY29uc3QgREVGQVVMVF9UQVNLU19UT1RBTCA9IHNhdmVkQm9va3MubGVuZ3RoO1xuXG5sZXQgY3VycmVudFRhc2tzID0gc2F2ZWRUYXNrcztcbmxldCBjdXJyZW50UHJvamVjdHMgPSBzYXZlZFByb2plY3RzO1xubGV0IGN1cnJlbnRUaGVtZSA9IERFRkFVTFRfVEhFTUU7XG4vLyBsZXQgY3VycmVudFRhc2tzRG9uZUNvdW50ID0gREVGQVVMVF9UQVNLU19ET05FO1xuLy8gbGV0IGN1cnJlbnRUYXNrc1RvdGFsQ291bnQgPSBERUZBVUxUX1RBU0tTX1RPVEFMO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXHRyZW5kZXJEYXNoYm9hcmRQYWdlKCk7XG5cdC8vIHJlbmRlclNpdGUoKTtcblx0Ly8gc2V0Q3VycmVudFRoZW1lKERFRkFVTFRfVEhFTUUpO1xuXHQvLyBzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0Ly8gc2V0Q3VycmVudFByb2plY3RzKGN1cnJlbnRQcm9qZWN0cyk7XG5cdC8vIHJlbmRlclByb2plY3RBc2lkZUxpc3QoKTtcblx0Ly8gXHRyZW5kZXJEYXNoYm9hcmQoKTtcblx0Ly8gfSk7XG5cdC8vXG5cdC8vIFx0cmVuZGVyUHJvamVjdHNBbGwoKTtcblx0Ly8gfSk7XG5cdC8vIHJlbmRlckRhc2hib2FyZCgpO1xufTtcbiIsIi8vIERPTSBDUkVBVEUgRlVOQ1RJT05cblxuLy9hcmcgMSA9IG5hbWUgb2YgSFRNTCBlbGVtZW50XG4vLyBhcmcgMiA9IGNsYXNzIG5hbWVzIHRvIGFkZFxuLy8gYXJnIDMgPSBvYmplY3QgLSBhdHRyaWJ1dGVzIHRvIGFkZCAtPiBhdHRyaWJ1dGUgOiB2YWx1ZVxuZnVuY3Rpb24gZG9tQ3JlYXRlKGFyZzEsIGFyZzIsIGFyZzMpIHtcblx0Ly8vLyBhcmcgMSA9IFwic3RyaW5nXCIgLSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmcxKTtcblx0Ly8vLyBhcmcgMiA9IFtcImFycmF5IG9mIHN0cmluZ3NcIl0gLSBjbGFzcyBuYW1lcyB0byBhZGRcblx0aWYgKEFycmF5LmlzQXJyYXkoYXJnMikgJiYgYXJnMi5sZW5ndGggPiAwKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmcyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBjbGFzc05hbWUgPSBhcmcyW2ldO1xuXHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0fVxuXHR9XG5cdC8vLy8gYXJnIDMgPSB7b2JqZWN0fSAtIGF0dHJpYnV0ZSBuYW1lIDogdmFsdWVcblx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgaW4gYXJnMykge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXJnM1thdHRyaWJ1dGVdKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IHsgZG9tQ3JlYXRlIH07XG4iLCIvL0RFTU9cblxuLy8gY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4vLyBjb25zdCB0YXNrRGVtbzEgPSBjcmVhdGVUYXNrKHtcbi8vIFx0dGl0bGU6IFwiV2FsayB0aGUgRG9nXCIsXG4vLyBcdGRlc2NyaXB0aW9uOiBcInRha2UgdGhlIGRvZ2dvIG9uIGEgbGlsIHN0cm9sbFwiLFxuLy8gXHRkdWVEYXRlOiBkYXRlLFxuLy8gXHRwcmlvcml0eTogMyxcbi8vIFx0bm90ZXM6IFwiYXZvaWQgOXRoIGFuZCBFbG0gLSBhZ2dyZXNzaXZlIGRvZ1wiLFxuLy8gfSk7XG4vLyBjb25zdCBwcm9qZWN0RGVtbzEgPSBjcmVhdGVQcm9qZWN0KHtcbi8vIFx0dGl0bGU6IFwiUGVyc29uYWxcIixcbi8vIFx0ZGVzY3JpcHRpb246IFwicGxlYXN1cmUsIG5vdCBidXNpbmVzc1wiLFxuLy8gfSk7XG4vLyBwcm9qZWN0RGVtbzEuYWRkVGFza3RvUHJvamVjdCh0YXNrRGVtbzEpO1xuXG5jb25zdCBjcmVhdGVUYXNrID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMgfSkgPT4gKHtcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHRkdWVEYXRlLFxuXHRwcmlvcml0eSxcblx0bm90ZXMsXG5cdHByaW50VGFzaygpIHtcblx0XHRyZXR1cm4gYCR7dGhpcy50aXRsZX06ICR7dGhpcy5kZXNjcmlwdGlvbn1gO1xuXHR9LFxufSk7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4gKHtcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHR0YXNrczogW10sXG5cdHByaW50UHJvamVjdCgpIHtcblx0XHRyZXR1cm4gYFByb2plY3QgJHt0aGlzLnRpdGxlfTogJHt0aGlzLmRlc2NyaXB0aW9ufWA7XG5cdH0sXG5cdHByaW50VGFza3MoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy50YXNrcyk7XG5cdH0sXG5cdGFkZFRhc2t0b1Byb2plY3QodGFzaykge1xuXHRcdHRoaXMudGFza3MucHVzaCh0YXNrKTtcblx0fSxcbn0pO1xuXG5leHBvcnQgeyBjcmVhdGVUYXNrLCBjcmVhdGVQcm9qZWN0IH07XG4iLCJjb25zdCBwcm9qZWN0RGF0YSA9IFtcblx0e1xuXHRcdHRpdGxlOiBcIkxhd25tb3dlclwiLFxuXHRcdGRlc2NyaXB0aW9uOiBcImxhbmRzY2FwaW5nIHByb2plY3RcIixcblx0XHR0YXNrczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJNb3cgdGhlIGxhd25cIixcblx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0XCJnZXQgb3V0IHRoZXJlIHdpdGggdGhlIGRhbmcgbW93ZXIgYW5kIG1vdyB0aGF0IHRoZXJlIGxhd24gdGhlcmVcIixcblx0XHRcdFx0ZHVlRGF0ZTogXCIyMDIyLTA3LTI5XCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcIjFcIixcblx0XHRcdFx0bm90ZXM6IFwiUmV0dXJuIG1vd2VyIHRvIG5laWdoYm9yIHdoZW4gZmluaXNoZWRcIixcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIkFub3RoZXIgUHJvamVjdFwiLFxuXHRcdGRlc2NyaXB0aW9uOiBcIm1pc2NlbGxhbmVvdXMgdGFza3NcIixcblx0XHR0YXNrczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJXYWxrIHRoZSBkb2dcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwibGVhc2gsIG9wZW4gZG9vciwgd2FsayBhcm91bmQsIGNvbWUgYmFja1wiLFxuXHRcdFx0XHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwiMlwiLFxuXHRcdFx0XHRub3RlczogXCJhdm9pZCBvdGhlciBkb2dzIVwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiQ29vayBkaW5uZXJcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiY2hpY2tlbiB0aWtrYSBtYXNhbGEsIHcvIGphc21pbmUgcmljZSwgYW5kIHNhbW9zYXNcIixcblx0XHRcdFx0ZHVlRGF0ZTogXCIyMDIyLTA2LTEyXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcIjNcIixcblx0XHRcdFx0bm90ZXM6IFwibm8gcGVhbnV0cyFcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIlJlYWQgJ09jdG9iZXInIEJvb2tcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwicmVhZCBhdCBsZWFzdCA0MCBwYWdlcyB0b2RheVwiLFxuXHRcdFx0XHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwiNVwiLFxuXHRcdFx0XHRub3RlczogXCJcIixcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIkEgVGhpcmQgUHJvamVjdCBmb3IgdGhlIExpc3RcIixcblx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFwibG9uZ2VyIGRlc2NyaXB0aW9uIGZvciBhIG1vcmUgY29tcGxpY2F0ZWQgdGFzayBwcm9qZWN0IGJyZWFrZG93blwiLFxuXHRcdHRhc2tzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIlJlYWQgJ09jdG9iZXInIEJvb2tcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwicmVhZCBhdCBsZWFzdCA0MCBwYWdlcyB0b2RheVwiLFxuXHRcdFx0XHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwiNVwiLFxuXHRcdFx0XHRub3RlczogXCJcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIkJ1eSByb3Nlc1wiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCIyIGRvemVuIHJvc2VzIGZyb20gU2FmZXdheVwiLFxuXHRcdFx0XHRkdWVEYXRlOiBcIjIwMjItMDgtMTJcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwiNVwiLFxuXHRcdFx0XHRub3RlczogXCJyZWQgcm9zZXNcIixcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcbl07XG5cbmV4cG9ydCB7IHByb2plY3REYXRhIH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0RGF0YSB9IGZyb20gXCIuL3Byb2plY3REYXRhXCI7XG5cbmZ1bmN0aW9uIHNlZWRQcm9qZWN0RGF0YSgpIHtcblx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpKTtcbn1cbmV4cG9ydCB7IHNlZWRQcm9qZWN0RGF0YSB9O1xuIiwiY29uc3QgYWRkVGFza0Zvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Rhc2tfc2VjdGlvblwiKTtcbmZ1bmN0aW9uIHJlbmRlclRhc2tGb3JtKCkge1xuXHRhZGRUYXNrRm9ybUVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogYmxvY2s7XCIpO1xufVxuY29uc3QgYWRkUHJvamVjdEZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Byb2plY3Rfc2VjdGlvblwiKTtcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RGb3JtKCkge1xuXHRhZGRQcm9qZWN0Rm9ybUVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogYmxvY2s7XCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tGb3JtKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtdGl0bGVcIikudmFsdWUgPSBcIlwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtZGVzY1wiKS52YWx1ZSA9IFwiXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kYXRlXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXByaW9yaXR5XCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LW5vdGVzXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRhc2stYWRkXCIpLm9wdGlvbnMuc2VsZWN0ZWRJbmRleCA9IDA7XG59XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XG5cdGFkZFRhc2tGb3JtRWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0Rm9ybSgpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwLXRpdGxlXCIpLnZhbHVlID0gXCJcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwLWRlc2NcIikudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuXHRhZGRQcm9qZWN0Rm9ybUVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG59XG5cbmV4cG9ydCB7XG5cdHJlbmRlclRhc2tGb3JtLFxuXHRyZW5kZXJQcm9qZWN0Rm9ybSxcblx0Y2xlYXJUYXNrRm9ybSxcblx0Y2xvc2VUYXNrRm9ybSxcblx0Y2xlYXJQcm9qZWN0Rm9ybSxcblx0Y2xvc2VQcm9qZWN0Rm9ybSxcbn07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vLi4vRE9NXCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50UHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IGNsZWFyUHJvamVjdEZvcm0sIGNsb3NlUHJvamVjdEZvcm0gfSBmcm9tIFwiLi4vLi4vZm9ybVwiO1xuaW1wb3J0IHsgcmVuZGVyRGFzaGJvYXJkIH0gZnJvbSBcIi4uL3BhZ2VzL2Rhc2hib2FyZFwiO1xuXG5jb25zdCBzYXZlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdFN1Ym1pdCgpIHtcblx0Y29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3Qoe1xuXHRcdHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtdGl0bGVcIikudmFsdWUsXG5cdFx0ZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcC1kZXNjXCIpLnZhbHVlLFxuXHR9KTtcblx0c2F2ZWRQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXHRzZXRDdXJyZW50UHJvamVjdHMoc2F2ZWRQcm9qZWN0cyk7XG5cdHJlbmRlckRhc2hib2FyZCgpO1xuXHRjbG9zZVByb2plY3RGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFkZFByb2plY3RGb3JtKCkge1xuXHQvL2Zvcm0gY29udGVudFxuXHRjb25zdCBmb3JtVGl0bGUgPSBkb21DcmVhdGUoXCJoMlwiLCBbXCJmb3JtX3RpdGxlXCJdKTtcblx0Zm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgbmV3IHByb2plY3RcIjtcblx0Y29uc3QgZm9ybVN1YnRpdGxlID0gZG9tQ3JlYXRlKFwiaDJcIiwgW1wiZm9ybV9zdWJ0aXRsZVwiXSk7XG5cdGZvcm1TdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiKiByZXF1aXJlZFwiO1xuXHRjb25zdCBjbG9zZUJ0biA9IGRvbUNyZWF0ZShcInNwYW5cIiwgW1wibWF0ZXJpYWwtaWNvbnNcIiwgXCJjbG9zZS1mb3JtXCJdLCB7XG5cdFx0aWQ6IFwiY2xvc2UtcHJvamVjdC1mb3JtXCIsXG5cdH0pO1xuXHRjbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwiIFggXCI7XG5cdGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVByb2plY3RGb3JtKTtcblx0Ly90aXRsZVxuXHRjb25zdCB0aXRsZUxhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwidC10aXRsZVwiIH0pO1xuXHR0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZSAqXCI7XG5cdGNvbnN0IHRpdGxlSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LXRpdGxlXCIsXG5cdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0bmFtZTogXCJwLXRpdGxlXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiVGl0bGVcIixcblx0fSk7XG5cdGNvbnN0IHRpdGxlRXJyTXNnID0gZG9tQ3JlYXRlKFwic21hbGxcIiwgW1wiZXJyLW1zZ1wiXSk7XG5cdHRpdGxlRXJyTXNnLnRleHRDb250ZW50ID0gXCIgKiBUaXRsZSBpcyByZXF1aXJlZFwiO1xuXHR0aXRsZUlucHV0LmFwcGVuZENoaWxkKHRpdGxlRXJyTXNnKTtcblx0dGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblx0Ly9kZXNjcmlwdGlvblxuXHRjb25zdCBkZXNjTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJ0LWRlc2NcIiB9KTtcblx0ZGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXHRjb25zdCBkZXNjSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LWRlc2NcIixcblx0XHR0eXBlOiBcInRleHRhcmVhXCIsXG5cdFx0bmFtZTogXCJ0LWRlc2NcIixcblx0XHRwbGFjZWhvbGRlcjogXCJEZXNjcmlwdGlvblwiLFxuXHR9KTtcblx0ZGVzY0xhYmVsLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG5cdC8vYWRkL2NsZWFyIGJ0bnNcblx0Y29uc3QgcHJvamVjdEZvcm1CdG5zID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcIm5ldy1wcm9qZWN0LWJ1dHRvbnNcIl0pO1xuXHRjb25zdCBhZGRCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgW1wiYnRuXCJdLCB7XG5cdFx0aWQ6IFwiYWRkLXByb2plY3QtYnRuXCIsXG5cdH0pO1xuXHRhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXHRhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3RTdWJtaXQpO1xuXHRjb25zdCBjbGVhckJ0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBbXCJidG5cIl0sIHtcblx0XHRpZDogXCJwcm9qZWN0LWNsZWFyXCIsXG5cdH0pO1xuXHRjbGVhckJ0bi50ZXh0Q29udGVudCA9IFwiQ2xlYXIgZmllbGRzXCI7XG5cdGNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclByb2plY3RGb3JtKTtcblx0cHJvamVjdEZvcm1CdG5zLmFwcGVuZChhZGRCdG4sIGNsZWFyQnRuKTtcblx0Ly9mb3JtIGNvbnRhaW5lclxuXHRjb25zdCBmb3JtQ29udGFpbmVyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcImZvcm0tY29udGFpbmVyXCJdLCB7XG5cdFx0aWQ6IFwibmV3LXByb2plY3QtZm9ybVwiLFxuXHR9KTtcblx0Zm9ybUNvbnRhaW5lci5hcHBlbmQoXG5cdFx0Zm9ybVRpdGxlLFxuXHRcdGZvcm1TdWJ0aXRsZSxcblx0XHRjbG9zZUJ0bixcblx0XHR0aXRsZUxhYmVsLFxuXHRcdGRlc2NMYWJlbCxcblx0XHRwcm9qZWN0Rm9ybUJ0bnNcblx0KTtcblx0Ly93cmFwcGVyXG5cdGNvbnN0IGFkZFByb2plY3RTZWN0aW9uID0gZG9tQ3JlYXRlKFwic2VjdGlvblwiLCBbXCJhZGRfcHJvamVjdF9zZWN0aW9uXCJdKTtcblx0YWRkUHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7IHJlbmRlckFkZFByb2plY3RGb3JtIH07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vLi4vRE9NXCI7XG5pbXBvcnQgeyBjbG9zZVRhc2tGb3JtLCBjbGVhclRhc2tGb3JtIH0gZnJvbSBcIi4uLy4uL2Zvcm1cIjtcbmltcG9ydCB7IHJlbmRlckRhc2hib2FyZCB9IGZyb20gXCIuLi9wYWdlcy9kYXNoYm9hcmRcIjtcblxuY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5cbmZ1bmN0aW9uIGFkZFRhc2tTdWJtaXQoKSB7XG5cdC8vdmFsaWRhdGlvblxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0LXRpdGxlXCIpLnZhbHVlID09PSBcIlwiKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlLWVyci1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1wcmlvcml0eVwiKS52YWx1ZSA9PT0gXCJcIikge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eS1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHByb2plY3RBc3NvY2lhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10YXNrLWFkZFwiKTtcblx0aWYgKHByb2plY3RBc3NvY2lhdGlvbi52YWx1ZSA9PT0gXCJudWxsXCIpIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJvamVjdC1lcnItbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly90YXNrIGZhY3Rvcnlcblx0Y29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2soe1xuXHRcdHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtdGl0bGVcIikudmFsdWUsXG5cdFx0ZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kZXNjXCIpLnZhbHVlLFxuXHRcdGR1ZURhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1kYXRlXCIpLnZhbHVlLFxuXHRcdHByaW9yaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3QtcHJpb3JpdHlcIikudmFsdWUsXG5cdFx0bm90ZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdC1ub3Rlc1wiKS52YWx1ZSxcblx0fSk7XG5cdGZvciAoY29uc3QgcHJvamVjdCBpbiBzYXZlZFByb2plY3RzKSB7XG5cdFx0Y29uc3QgdGl0bGUgPSBzYXZlZFByb2plY3RzW3Byb2plY3RdLnRpdGxlO1xuXG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10YXNrLWFkZFwiKS52YWx1ZSA9PT0gdGl0bGUpIHtcblx0XHRcdHNhdmVkUHJvamVjdHNbcHJvamVjdF0uYWRkVGFza3RvUHJvamVjdChuZXdUYXNrKTtcblx0XHRcdGNvbnNvbGUubG9nKHNhdmVkUHJvamVjdHNbcHJvamVjdF0udGFza3MpO1xuXHRcdH1cblx0fVxuXHQvLyBzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShzYXZlZFByb2plY3RzKSk7XG5cdHJlbmRlckRhc2hib2FyZCgpO1xuXHRjbG9zZVRhc2tGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFkZFRhc2tGb3JtKCkge1xuXHQvL2Zvcm0gY29udGVudFxuXHRjb25zdCBmb3JtVGl0bGUgPSBkb21DcmVhdGUoXCJoMlwiLCBbXCJmb3JtX3RpdGxlXCJdKTtcblx0Zm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgbmV3IHRhc2tcIjtcblx0Y29uc3QgZm9ybVN1YnRpdGxlID0gZG9tQ3JlYXRlKFwiaDJcIiwgW1wiZm9ybV9zdWJ0aXRsZVwiXSk7XG5cdGZvcm1TdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiKiByZXF1aXJlZFwiO1xuXHRjb25zdCBjbG9zZUJ0biA9IGRvbUNyZWF0ZShcInNwYW5cIiwgW1wibWF0ZXJpYWwtaWNvbnNcIiwgXCJjbG9zZS1mb3JtXCJdLCB7XG5cdFx0aWQ6IFwiY2xvc2UtdGFzay1mb3JtXCIsXG5cdH0pO1xuXHRjbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwiIFggXCI7XG5cdGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVRhc2tGb3JtKTtcblx0Ly90aXRsZVxuXHRjb25zdCB0aXRsZUxhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwidC10aXRsZVwiIH0pO1xuXHR0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZSAqXCI7XG5cdGNvbnN0IHRpdGxlSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LXRpdGxlXCIsXG5cdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0bmFtZTogXCJ0YXNrLXRpdGxlXCIsXG5cdFx0cGxhY2Vob2xkZXI6IFwiVGl0bGVcIixcblx0fSk7XG5cdGNvbnN0IHRpdGxlRXJyTXNnID0gZG9tQ3JlYXRlKFwic21hbGxcIiwgW1wiZXJyLW1zZ1wiXSk7XG5cdHRpdGxlRXJyTXNnLnRleHRDb250ZW50ID0gXCIgKiBUYXNrIHRpdGxlIGlzIHJlcXVpcmVkXCI7XG5cdHRpdGxlSW5wdXQuYXBwZW5kQ2hpbGQodGl0bGVFcnJNc2cpO1xuXHR0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXHQvL2Rlc2NyaXB0aW9uXG5cdGNvbnN0IGRlc2NMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHsgZm9yOiBcInQtZGVzY1wiIH0pO1xuXHRkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG5cdGNvbnN0IGRlc2NJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtcImZvcm0tY29udHJvbFwiXSwge1xuXHRcdGlkOiBcInQtZGVzY1wiLFxuXHRcdHR5cGU6IFwidGV4dGFyZWFcIixcblx0XHRuYW1lOiBcInQtZGVzY1wiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIkRlc2NyaXB0aW9uXCIsXG5cdH0pO1xuXHRkZXNjTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcblx0Ly9kYXRlXG5cdGNvbnN0IGRhdGVMYWJlbCA9IGRvbUNyZWF0ZShcImxhYmVsXCIsIFwiXCIsIHsgZm9yOiBcInQtZGF0ZVwiIH0pO1xuXHRkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG5cdGNvbnN0IGRhdGVJbnB1dCA9IGRvbUNyZWF0ZShcImlucHV0XCIsIFtcImZvcm0tY29udHJvbFwiXSwge1xuXHRcdGlkOiBcInQtZGF0ZVwiLFxuXHRcdHR5cGU6IFwiZGF0ZVwiLFxuXHRcdG5hbWU6IFwidC1kYXRlXCIsXG5cdH0pO1xuXHRkYXRlTGFiZWwuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblx0Ly9wcmlvcml0eVxuXHRjb25zdCBwcmlvcml0eUxhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwidC1wcmlvcml0eVwiIH0pO1xuXHRwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eSAoNSBpcyBoaWdoZXN0KSAqXCI7XG5cdGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LXByaW9yaXR5XCIsXG5cdFx0dHlwZTogXCJudW1iZXJcIixcblx0XHRuYW1lOiBcInQtcHJpb3JpdHlcIixcblx0XHRwbGFjZWhvbGRlcjogXCIzXCIsXG5cdFx0bWluOiBcIjFcIixcblx0XHRtYXg6IFwiNVwiLFxuXHR9KTtcblx0Y29uc3QgcHJpb3JpdHlFcnJNc2cgPSBkb21DcmVhdGUoXCJzbWFsbFwiLCBbXCJlcnItbXNnXCJdKTtcblx0cHJpb3JpdHlFcnJNc2cudGV4dENvbnRlbnQgPSBcIiAqIFByaW9yaXR5IGlzIHJlcXVpcmVkXCI7XG5cdHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlFcnJNc2cpO1xuXHRwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXHQvL25vdGVzXG5cdGNvbnN0IG5vdGVzTGFiZWwgPSBkb21DcmVhdGUoXCJsYWJlbFwiLCBcIlwiLCB7IGZvcjogXCJ0LW5vdGVzXCIgfSk7XG5cdG5vdGVzTGFiZWwudGV4dENvbnRlbnQgPSBcIk5vdGVzXCI7XG5cdGNvbnN0IG5vdGVzSW5wdXQgPSBkb21DcmVhdGUoXCJpbnB1dFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJ0LW5vdGVzXCIsXG5cdFx0dHlwZTogXCJ0ZXh0YXJlYVwiLFxuXHRcdG5hbWU6IFwidC1ub3Rlc1wiLFxuXHRcdHBsYWNlaG9sZGVyOiBcIk5vdGVzXCIsXG5cdH0pO1xuXHRub3Rlc0xhYmVsLmFwcGVuZENoaWxkKG5vdGVzSW5wdXQpO1xuXHQvL3Byb2plY3QgbGlzdFxuXHRjb25zdCBwcm9qZWN0TGlzdExhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwge1xuXHRcdGZvcjogXCJwcm9qZWN0LXRhc2stYWRkXCIsXG5cdH0pO1xuXHRwcm9qZWN0TGlzdExhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgdG8gRXhpc3RpbmcgUHJvamVjdFwiO1xuXHRjb25zdCBwcm9qZWN0TGlzdFNlbGVjdCA9IGRvbUNyZWF0ZShcInNlbGVjdFwiLCBbXCJmb3JtLWNvbnRyb2xcIl0sIHtcblx0XHRpZDogXCJwcm9qZWN0LXRhc2stYWRkXCIsXG5cdFx0bmFtZTogXCJwcm9qZWN0LXRhc2stYWRkXCIsXG5cdH0pO1xuXHRjb25zdCBwcm9qZWN0TGlzdE9wdGlvbkRFRkFVTFQgPSBkb21DcmVhdGUoXCJvcHRpb25cIiwgXCJcIiwge1xuXHRcdHZhbHVlOiBcIm51bGxcIixcblx0XHRkaXNhYmxlZDogXCJcIixcblx0XHRzZWxlY3RlZDogXCJcIixcblx0fSk7XG5cdHByb2plY3RMaXN0T3B0aW9uREVGQVVMVC50ZXh0Q29udGVudCA9IFwiLS1TZWxlY3QgZXhpc3RpbmcgcHJvamVjdC0tXCI7XG5cdHByb2plY3RMaXN0U2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RMaXN0T3B0aW9uREVGQVVMVCk7XG5cdC8vLy8gIGdldCBuYW1lcyBvZiBhbGwgcHJvamVjdHNcblx0Y29uc3QgdG90YWxQcm9qZWN0TmFtZXMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzYXZlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IHNhdmVkUHJvamVjdHNbaV07XG5cdFx0dG90YWxQcm9qZWN0TmFtZXMucHVzaChwcm9qZWN0LnRpdGxlKTtcblx0fVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsUHJvamVjdE5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRvdGFsUHJvamVjdE5hbWVzW2ldO1xuXHRcdGNvbnN0IHByb2plY3RMaXN0T3B0aW9uID0gZG9tQ3JlYXRlKFwib3B0aW9uXCIsIFwiXCIsIHtcblx0XHRcdHZhbHVlOiBuYW1lLFxuXHRcdH0pO1xuXHRcdHByb2plY3RMaXN0T3B0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcblx0XHRwcm9qZWN0TGlzdFNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdE9wdGlvbik7XG5cdH1cblx0Y29uc3QgcHJvamVjdExpc3RFcnJNc2cgPSBkb21DcmVhdGUoXCJzbWFsbFwiLCBbXCJlcnItbXNnXCJdKTtcblx0cHJvamVjdExpc3RFcnJNc2cudGV4dENvbnRlbnQgPSBcIiAqIFByb2plY3QgYXNzb2NpYXRpb24gaXMgcmVxdWlyZWRcIjtcblx0cHJvamVjdExpc3RMYWJlbC5hcHBlbmQocHJvamVjdExpc3RTZWxlY3QsIHByb2plY3RMaXN0RXJyTXNnKTtcblx0Ly9hZGQvY2xlYXIgYnRuc1xuXHRjb25zdCB0YXNrRm9ybUJ0bnMgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wibmV3LXRhc2stYnV0dG9uc1wiXSk7XG5cdGNvbnN0IGFkZEJ0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBbXCJidG5cIl0sIHtcblx0XHRpZDogXCJhZGQtdGFzay1idG5cIixcblx0fSk7XG5cdGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cdGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza1N1Ym1pdCk7XG5cdGNvbnN0IGNsZWFyQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFtcImJ0blwiXSwge1xuXHRcdGlkOiBcInRhc2stY2xlYXJcIixcblx0fSk7XG5cdGNsZWFyQnRuLnRleHRDb250ZW50ID0gXCJDbGVhciBmaWVsZHNcIjtcblx0Y2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyVGFza0Zvcm0pO1xuXHR0YXNrRm9ybUJ0bnMuYXBwZW5kKGFkZEJ0biwgY2xlYXJCdG4pO1xuXHQvL2Zvcm0gY29udGFpbmVyXG5cdGNvbnN0IGZvcm1Db250YWluZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1wiZm9ybS1jb250YWluZXJcIl0sIHtcblx0XHRpZDogXCJuZXctcHJvamVjdC1mb3JtXCIsXG5cdH0pO1xuXHRmb3JtQ29udGFpbmVyLmFwcGVuZChcblx0XHRmb3JtVGl0bGUsXG5cdFx0Zm9ybVN1YnRpdGxlLFxuXHRcdGNsb3NlQnRuLFxuXHRcdHRpdGxlTGFiZWwsXG5cdFx0ZGVzY0xhYmVsLFxuXHRcdGRhdGVMYWJlbCxcblx0XHRwcmlvcml0eUxhYmVsLFxuXHRcdG5vdGVzTGFiZWwsXG5cdFx0cHJvamVjdExpc3RMYWJlbCxcblx0XHR0YXNrRm9ybUJ0bnNcblx0KTtcblx0Ly93cmFwcGVyXG5cdGNvbnN0IGFkZFRhc2tTZWN0aW9uID0gZG9tQ3JlYXRlKFwic2VjdGlvblwiLCBbXCJhZGRfdGFza19zZWN0aW9uXCJdKTtcblx0YWRkVGFza1NlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7IGFkZFRhc2tTdWJtaXQsIHJlbmRlckFkZFRhc2tGb3JtIH07XG4iLCJpbXBvcnQgeyBkb21DcmVhdGUgfSBmcm9tIFwiLi4vLi4vLi4vRE9NXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0VGFza3MgfSBmcm9tIFwiLi4vLi4vcGFnZXMvcHJvamVjdFRhc2tzXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RBc2lkZUxpc3QoKSB7XG5cdGNvbnN0IHNhdmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXHRjb25zdCB0b3RhbFByb2plY3ROYW1lcyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNhdmVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gc2F2ZWRQcm9qZWN0c1tpXTtcblx0XHR0b3RhbFByb2plY3ROYW1lcy5wdXNoKHByb2plY3QudGl0bGUpO1xuXHR9XG5cdC8vLy9kb20gbG9naWNcblx0Y29uc3QgcHJvamVjdExpc3QgPSBkb21DcmVhdGUoXCJ1bFwiLCBcIlwiLCB7IGlkOiBcInByb2plY3QtcGFuZWwtbGlzdFwiIH0pO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsUHJvamVjdE5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRvdGFsUHJvamVjdE5hbWVzW2ldO1xuXHRcdGNvbnN0IGxpRWwgPSBkb21DcmVhdGUoXCJsaVwiLCBbXCJwcm9qZWN0LWxpc3QtaXRlbVwiXSwge1xuXHRcdFx0XCJkYXRhLXByb2plY3QtaW5kZXhcIjogaSxcblx0XHR9KTtcblx0XHRsaUVsLnRleHRDb250ZW50ID0gbmFtZTtcblx0XHRsaUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBkYXNoYm9hcmRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFzaC1hc2lkZVwiKTtcblx0XHRcdGNvbnN0IHByb2plY3RMaXN0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdC1hc2lkZVwiKTtcblx0XHRcdGNvbnN0IGFsbFByb2plY3RzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1wcm9qZWN0cy1hc2lkZVwiKTtcblx0XHRcdGNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1saXN0LWl0ZW1cIik7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RJdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBpdGVtID0gcHJvamVjdEl0ZW1zW2ldO1xuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0LWxpc3Qtc2VsZWN0ZWRcIik7XG5cdFx0XHR9XG5cdFx0XHRsaUVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3Qtc2VsZWN0ZWRcIik7XG5cblx0XHRcdGlmICghcHJvamVjdExpc3RFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhc2lkZS1zZWxlY3RlZFwiKSkge1xuXHRcdFx0XHRwcm9qZWN0TGlzdEVsLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdFx0ZGFzaGJvYXJkRWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0XHRhbGxQcm9qZWN0c0VsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdH1cblx0XHRcdGxldCBpbmRleCA9IGxpRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIpO1xuXHRcdFx0cmVuZGVyUHJvamVjdFRhc2tzKGluZGV4KTtcblx0XHR9KTtcblx0XHRwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaUVsKTtcblx0fVxuXHRyZXR1cm4gcHJvamVjdExpc3Q7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFzaWRlKCkge1xuXHQvL0RBU0hCT0FSRFxuXHRjb25zdCBkYXNoYm9hcmRFbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJhc2lkZS1pdGVtXCIsIFwiYXNpZGUtc2VsZWN0ZWRcIl0sIHtcblx0XHRpZDogXCJkYXNoLWFzaWRlXCIsXG5cdH0pO1xuXHRkYXNoYm9hcmRFbC50ZXh0Q29udGVudCA9IFwiREFTSEJPQVJEXCI7XG5cblx0Ly9BTEwgUFJPSkVDVFNcblx0Y29uc3QgYWxsUHJvamVjdHNFbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJhc2lkZS1pdGVtXCJdLCB7XG5cdFx0aWQ6IFwiYWxsLXByb2plY3RzLWFzaWRlXCIsXG5cdH0pO1xuXHRhbGxQcm9qZWN0c0VsLnRleHRDb250ZW50ID0gXCJBTEwgUFJPSkVDVFNcIjtcblx0Ly9QUk9KRUNUIExJU1Rcblx0Y29uc3QgcHJvamVjdExpc3RCdG4gPSBkb21DcmVhdGUoXCJidXR0b25cIiwgXCJcIiwge1xuXHRcdGlkOiBcInByb2plY3QtYWNjb3JkaW9uLWJ0blwiLFxuXHR9KTtcblx0cHJvamVjdExpc3RCdG4udGV4dENvbnRlbnQgPSBcIlBST0pFQ1RTXCI7XG5cblx0Y29uc3QgcHJvamVjdFBhbmVsID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwicHJvamVjdC1wYW5lbC1kaXNwbGF5XCIgfSk7XG5cdGNvbnN0IHByb2plY3RMaXN0VUwgPSByZW5kZXJQcm9qZWN0QXNpZGVMaXN0KCk7XG5cdHByb2plY3RQYW5lbC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdFVMKTtcblx0Y29uc3QgcHJvamVjdExpc3RFbCA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJhc2lkZS1pdGVtXCJdLCB7XG5cdFx0aWQ6IFwicHJvamVjdC1saXN0LWFzaWRlXCIsXG5cdH0pO1xuXHRmdW5jdGlvbiBhY2NvcmRpb25Ub2dnbGUoKSB7XG5cdFx0cHJvamVjdExpc3RCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0XHRpZiAocHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuXHRcdFx0cHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJvamVjdFBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0fVxuXHR9XG5cdHByb2plY3RMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2NvcmRpb25Ub2dnbGUpO1xuXHRwcm9qZWN0TGlzdEVsLmFwcGVuZChwcm9qZWN0TGlzdEJ0biwgcHJvamVjdFBhbmVsKTtcblx0Ly9zZWxlY3QgdG9nZ2xlIGV2ZW50IGxpc3RlbmVyc1xuXHRkYXNoYm9hcmRFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGlmICghZGFzaGJvYXJkRWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXNpZGUtc2VsZWN0ZWRcIikpIHtcblx0XHRcdGRhc2hib2FyZEVsLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHRcdGFsbFByb2plY3RzRWwuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlLXNlbGVjdGVkXCIpO1xuXHRcdFx0cHJvamVjdExpc3RFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0fVxuXHR9KTtcblx0YWxsUHJvamVjdHNFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGlmICghYWxsUHJvamVjdHNFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhc2lkZS1zZWxlY3RlZFwiKSkge1xuXHRcdFx0YWxsUHJvamVjdHNFbC5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRkYXNoYm9hcmRFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtc2VsZWN0ZWRcIik7XG5cdFx0XHRwcm9qZWN0TGlzdEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1zZWxlY3RlZFwiKTtcblx0XHR9XG5cdH0pO1xuXHQvL0ZVTEwgQVNJREUgQVBQRU5EXG5cdGNvbnN0IGFzaWRlRWwgPSBkb21DcmVhdGUoXCJhc2lkZVwiLCBcIlwiLCB7IGlkOiBcIm1haW4tYXNpZGVcIiB9KTtcblx0YXNpZGVFbC5hcHBlbmQoZGFzaGJvYXJkRWwsIGFsbFByb2plY3RzRWwsIHByb2plY3RMaXN0RWwpO1xuXHQvL2FwcGx5IG90aGVyIHN0eWxpbmcgLyBlbGVtZW50cyAvIGNsaWNrIGV2ZW50c1xuXHRyZW5kZXJQcm9qZWN0QXNpZGVMaXN0KCk7XG5cdHJldHVybiBhc2lkZUVsO1xufVxuXG5leHBvcnQgeyByZW5kZXJBc2lkZSB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IGNoZWNrTG9nbyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2NoZWNrYm94LW1hcmtlZC1jaXJjbGUucG5nXCI7XG5pbXBvcnQgYWRkSWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL3BsdXMtY2lyY2xlLW91dGxpbmUucG5nXCI7XG5pbXBvcnQgYWRkVGFza0ljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9jaGVja2JveC1tYXJrZWQtY2lyY2xlLXBsdXMtb3V0bGluZS5wbmdcIjtcbmltcG9ydCBhZGRQcm9qZWN0SWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2xpc3QtZ3JvdXAtcGx1cy5wbmdcIjtcbmltcG9ydCBnZWFySWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2NvZy1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IHsgcmVuZGVyVGFza0Zvcm0sIHJlbmRlclByb2plY3RGb3JtIH0gZnJvbSBcIi4uLy4uL2Zvcm1cIjtcblxuZnVuY3Rpb24gcmVuZGVyQWRkTWVudSgpIHtcblx0Y29uc3QgYWRkSWNvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1pY29uLW1lbnVcIik7XG5cdGFkZEljb25NZW51LmNsYXNzTGlzdC50b2dnbGUoXCJpY29uLW1lbnUtdG9nZ2xlXCIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG5cdC8vLy9oZWFkZXIgTEVGVFxuXHRjb25zdCBzaXRlTG9nbyA9IGRvbUNyZWF0ZShcImltZ1wiLCBbXCJmYWtlLWNsYXNzXCJdLCB7XG5cdFx0c3JjOiBjaGVja0xvZ28sXG5cdFx0YWx0OiBcImNoZWNrZWQgY2lyY2xlIGxvZ29cIixcblx0fSk7XG5cdGNvbnN0IHNpdGVUaXRsZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcImhlYWRlci1zaXRlLXRpdGxlXCIgfSk7XG5cdHNpdGVUaXRsZS50ZXh0Q29udGVudCA9IFwiVE9ETyBMSVNUXCI7XG5cdC8vc2VlZCBkYXRhXG5cdGNvbnN0IHNlZWREYXRhQnRuID0gZG9tQ3JlYXRlKFwiYnV0dG9uXCIsIFwiXCIsIHsgaWQ6IFwic2VlZC1wcm9qZWN0cy1idG5cIiB9KTtcblx0c2VlZERhdGFCdG4udGV4dENvbnRlbnQgPSBcIlNFRUQgREFUQVwiO1xuXHRjb25zdCBoZWFkZXJMZWZ0ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwiaGVhZGVyTGVmdFwiIH0pO1xuXHRoZWFkZXJMZWZ0LmFwcGVuZChzaXRlTG9nbywgc2l0ZVRpdGxlLCBzZWVkRGF0YUJ0bik7XG5cdC8vLy9oZWFkZXIgQ0VOVEVSXG5cdGNvbnN0IHNlYXJjaExhYmVsID0gZG9tQ3JlYXRlKFwibGFiZWxcIiwgXCJcIiwgeyBmb3I6IFwic2l0ZS1zZWFyY2hcIiB9KTtcblx0c2VhcmNoTGFiZWwudGV4dENvbnRlbnQgPSBcIlNlYXJjaCB0aGUgc2l0ZTogXCI7XG5cdGNvbnN0IHNlYXJjaElucHV0ID0gZG9tQ3JlYXRlKFwiaW5wdXRcIiwgXCJcIiwge1xuXHRcdGlkOiBcInNpdGUtc2VhcmNoXCIsXG5cdFx0dHlwZTogXCJzZWFyY2hcIixcblx0XHRuYW1lOiBcInFcIixcblx0fSk7XG5cdGNvbnN0IHNlYXJjaEJ0biA9IGRvbUNyZWF0ZShcImJ1dHRvblwiLCBcIlwiKTtcblx0c2VhcmNoQnRuLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIjtcblx0Y29uc3QgaGVhZGVyQ2VudGVyID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwiaGVhZGVyQ2VudGVyXCIgfSk7XG5cdGhlYWRlckNlbnRlci5hcHBlbmQoc2VhcmNoTGFiZWwsIHNlYXJjaElucHV0LCBzZWFyY2hCdG4pO1xuXHQvLy8vaGVhZGVyIFJJR0hUXG5cdC8vYWRkIGljb24gbWVudVxuXHRjb25zdCBhZGRCdG5JY29uID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFwiXCIsIHtcblx0XHRpZDogXCJhZGQtaWNvblwiLFxuXHRcdHNyYzogYWRkSWNvbixcblx0XHRhbHQ6IFwiYWRkIGJ1dHRvbiBwbHVzIGljb25cIixcblx0fSk7XG5cdGFkZEJ0bkljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckFkZE1lbnUpO1xuXHRjb25zdCBhZGRJY29uTWVudSA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcImFkZC1pY29uLW1lbnVcIiB9KTtcblx0Y29uc3QgYWRkVGFza0ltZyA9IGRvbUNyZWF0ZShcImltZ1wiLCBcIlwiLCB7XG5cdFx0aWQ6IFwiYWRkLXRhc2stZm9ybVwiLFxuXHRcdHNyYzogYWRkVGFza0ljb24sXG5cdFx0YWx0OiBcImFkZCB0YXNrIHBsdXMgaWNvblwiLFxuXHR9KTtcblx0YWRkVGFza0ltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyVGFza0Zvcm0pO1xuXHRjb25zdCBhZGRQcm9qZWN0SW1nID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFwiXCIsIHtcblx0XHRpZDogXCJhZGQtcHJvamVjdC1mb3JtXCIsXG5cdFx0c3JjOiBhZGRQcm9qZWN0SWNvbixcblx0XHRhbHQ6IFwiYWRkIHByb2plY3QgcGx1cyBpY29uXCIsXG5cdH0pO1xuXHRhZGRQcm9qZWN0SW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJQcm9qZWN0Rm9ybSk7XG5cdGFkZEljb25NZW51LmFwcGVuZChhZGRUYXNrSW1nLCBhZGRQcm9qZWN0SW1nKTtcblx0Y29uc3QgYWRkQnRuRWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJhZGRCdG5cIiB9KTtcblx0YWRkQnRuRWwuYXBwZW5kKGFkZEJ0bkljb24sIGFkZEljb25NZW51KTtcblx0Ly9sb2dpblxuXHRjb25zdCBsb2dpbkVsID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwibG9naW5cIiB9KTtcblx0bG9naW5FbC50ZXh0Q29udGVudCA9IFwiTE9HSU5cIjtcblx0Ly9zZXR0aW5nc1xuXHRjb25zdCBzZXR0aW5nc0ljb24gPSBkb21DcmVhdGUoXCJpbWdcIiwgXCJcIiwge1xuXHRcdGlkOiBcInNldHRpbmdzIGdlYXIgaWNvblwiLFxuXHRcdHNyYzogZ2Vhckljb24sXG5cdFx0YWx0OiBcInNldHRpbmdzIGdlYXIgb3V0bGluZVwiLFxuXHR9KTtcblx0Y29uc3Qgc2V0dGluZ3NMaW5rID0gZG9tQ3JlYXRlKFwiYVwiLCBcIlwiLCB7XG5cdFx0aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vYWxleGdlaXMvdG9kby1saXN0XCIsXG5cdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHR9KTtcblx0c2V0dGluZ3NMaW5rLmFwcGVuZENoaWxkKHNldHRpbmdzSWNvbik7XG5cdGNvbnN0IHNldHRpbmdzRWwgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJzZXR0aW5nc1wiIH0pO1xuXHRzZXR0aW5nc0VsLmFwcGVuZENoaWxkKHNldHRpbmdzTGluayk7XG5cdGNvbnN0IGhlYWRlclJpZ2h0ID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFwiXCIsIHsgaWQ6IFwiaGVhZGVyUmlnaHRcIiB9KTtcblx0aGVhZGVyUmlnaHQuYXBwZW5kKGFkZEJ0bkVsLCBsb2dpbkVsLCBzZXR0aW5nc0VsKTtcblx0Ly9GVUxMIEhFQURFUiBBUFBFTkRcblx0Y29uc3QgaGVhZGVyID0gZG9tQ3JlYXRlKFwiaGVhZGVyXCIsIFwiXCIsIHsgaWQ6IFwiaGVhZGVyXCIgfSk7XG5cdGhlYWRlci5hcHBlbmQoaGVhZGVyTGVmdCwgaGVhZGVyQ2VudGVyLCBoZWFkZXJSaWdodCk7XG5cdHJldHVybiBoZWFkZXI7XG5cdC8vIC8vQ09OVEVOVCBBUFBFTkRcblx0Ly8gY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblx0Ly8gcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5leHBvcnQgeyByZW5kZXJIZWFkZXIgfTtcbiIsImltcG9ydCB7IGRvbUNyZWF0ZSB9IGZyb20gXCIuLi8uLi9ET01cIjtcbmltcG9ydCB7IHJlbmRlckFzaWRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXNpZGUvYXNpZGVcIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckRhc2hib2FyZENvbnRlbnQoKSB7XG5cdC8vZ2V0IGFsbCB0YXNrcyBmcm9tIGFsbCBwcm9qZWN0c1xuXHRjb25zdCBjdXJyZW50UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuXHRjb25zdCBjdXJyZW50VGFza3MgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3RzW2ldO1xuXHRcdGN1cnJlbnRUYXNrcy5wdXNoKC4uLnByb2plY3QudGFza3MpO1xuXHR9XG5cdC8vdXBkYXRlIG1haW4gaGVhZGVyXG5cdGNvbnN0IG1haW5IZWFkZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJtYWluLWhlYWRlclwiIH0pO1xuXHRtYWluSGVhZGVyLnRleHRDb250ZW50ID0gXCJEQVNIQk9BUkRcIjtcblx0Ly9jbGVhciBjdXJyZW50IHRhc2tzXG5cdGNvbnN0IHRhc2tDb250YWluZXIgPSBkb21DcmVhdGUoXCJkaXZcIiwgXCJcIiwgeyBpZDogXCJtYWluLWNvbnRlbnRcIiB9KTtcblx0dGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXHQvL3JlbmRlciBjdXJyZW50VGFza3MgdGFza3Ncblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50VGFza3MubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCB0YXNrID0gY3VycmVudFRhc2tzW2ldO1xuXHRcdGNvbnN0IHRhc2tDYXJkID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stY2FyZFwiXSwgeyBcImRhdGEtdGFzay1pbmRleFwiOiBpIH0pO1xuXHRcdC8vaW5uZXIgdGFzayBjYXJkIGRpdiBpdGVtc1xuXHRcdC8vVElUTEVcblx0XHRjb25zdCB0YXNrVGl0bGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay10aXRsZVwiXSk7XG5cdFx0dGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0XHQvL0RFU0NSSVBUSU9OXG5cdFx0Y29uc3QgdGFza0Rlc2MgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1kZXNjcmlwdGlvblwiXSk7XG5cdFx0dGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXHRcdC8vRFVFIERBVEVcblx0XHRjb25zdCB0YXNrRGF0ZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRhdGVcIl0pO1xuXHRcdHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXHRcdC8vUFJJT1JJVFlcblx0XHRjb25zdCB0YXNrUHJpb3JpdHkgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1wcmlvcml0eVwiXSk7XG5cdFx0dGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblx0XHQvL05PVEVTXG5cdFx0Y29uc3QgdGFza05vdGVzID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stbm90ZXNcIl0pO1xuXHRcdHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9IHRhc2subm90ZXM7XG5cdFx0Ly9ERUxFVEUgSUNPTlxuXHRcdGNvbnN0IHRhc2tEZWxldGVJY29uID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFtcInRhc2stZGVsZXRlXCJdLCB7XG5cdFx0XHRzcmM6IGRlbGV0ZUljb24sXG5cdFx0XHRhbHQ6IFwidHJhc2ggY2FuIGRlbGV0ZSBpY29uXCIsXG5cdFx0fSk7XG5cdFx0dGFza0RlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHRhc2tEZWxldGVJY29uLnBhcmVudEVsZW1lbnQucmVtb3ZlKHRhc2tDYXJkKTtcblx0XHRcdGxldCBpbmRleCA9IHRhc2tEZWxldGVJY29uLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWluZGV4XCIpO1xuXHRcdFx0Y3VycmVudFRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHQvLyBzZXRDdXJyZW50VGFza3MoY3VycmVudFRhc2tzKTtcblx0XHRcdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG5cdFx0XHRyZW5kZXJUYXNrcygpO1xuXHRcdH0pO1xuXHRcdC8vQVBQRU5EIEVMRU1FTlRTXG5cdFx0dGFza0NhcmQuYXBwZW5kKFxuXHRcdFx0dGFza1RpdGxlLFxuXHRcdFx0dGFza0Rlc2MsXG5cdFx0XHR0YXNrRGF0ZSxcblx0XHRcdHRhc2tQcmlvcml0eSxcblx0XHRcdHRhc2tOb3Rlcyxcblx0XHRcdHRhc2tEZWxldGVJY29uXG5cdFx0KTtcblx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblx0fVxuXHRjb25zdCBtYWluU2VjdGlvbiA9IGRvbUNyZWF0ZShcImRpdlwiLCBcIlwiLCB7IGlkOiBcIm1haW4tc2VjdGlvblwiIH0pO1xuXHRtYWluU2VjdGlvbi5hcHBlbmQobWFpbkhlYWRlciwgdGFza0NvbnRhaW5lcik7XG5cdHJldHVybiBtYWluU2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRGFzaGJvYXJkKCkge1xuXHRjb25zdCBhc2lkZSA9IHJlbmRlckFzaWRlKCk7XG5cdGNvbnN0IG1haW5TZWN0aW9uID0gcmVuZGVyRGFzaGJvYXJkQ29udGVudCgpO1xuXHRjb25zdCBtYWluRGl2ID0gZG9tQ3JlYXRlKFwibWFpblwiLCBcIlwiLCB7IGlkOiBcIm1haW5cIiB9KTtcblx0bWFpbkRpdi5hcHBlbmQoYXNpZGUsIG1haW5TZWN0aW9uKTtcblx0cmV0dXJuIG1haW5EaXY7XG59XG5cbmV4cG9ydCB7IHJlbmRlckRhc2hib2FyZCB9O1xuIiwiaW1wb3J0IHsgZG9tQ3JlYXRlIH0gZnJvbSBcIi4uLy4uL0RPTVwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRhc2tzKGluZGV4KSB7XG5cdC8vZ2V0IGFsbCB0YXNrcyBmcm9tIGFsbCBwcm9qZWN0c1xuXHRjb25zdCBjdXJyZW50UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuXHRjb25zdCByZW5kZXJQcm9qZWN0ID0gY3VycmVudFByb2plY3RzW2luZGV4XTtcblx0Y29uc29sZS5sb2cocmVuZGVyUHJvamVjdC50YXNrcyk7XG5cdGNvbnN0IGN1cnJlbnRUYXNrcyA9IHJlbmRlclByb2plY3QudGFza3MgfHwgW107XG5cdC8vdXBkYXRlIG1haW4gaGVhZGVyXG5cdGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4taGVhZGVyXCIpO1xuXHRtYWluSGVhZGVyLnRleHRDb250ZW50ID0gcmVuZGVyUHJvamVjdC50aXRsZS50b1VwcGVyQ2FzZSgpO1xuXHQvL2NsZWFyIGN1cnJlbnQgdGFza3Ncblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuXHR0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cdC8vcmVuZGVyIGN1cnJlbnRUYXNrcyB0YXNrc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRUYXNrcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHRhc2sgPSBjdXJyZW50VGFza3NbaV07XG5cdFx0Y29uc3QgdGFza0NhcmQgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1jYXJkXCJdLCB7IFwiZGF0YS1pbmRleFwiOiBpIH0pO1xuXHRcdC8vaW5uZXIgdGFzayBjYXJkIGRpdiBpdGVtc1xuXHRcdC8vVElUTEVcblx0XHRjb25zdCB0YXNrVGl0bGUgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay10aXRsZVwiXSk7XG5cdFx0dGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0XHQvL0RFU0NSSVBUSU9OXG5cdFx0Y29uc3QgdGFza0Rlc2MgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1kZXNjcmlwdGlvblwiXSk7XG5cdFx0dGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXHRcdC8vRFVFIERBVEVcblx0XHRjb25zdCB0YXNrRGF0ZSA9IGRvbUNyZWF0ZShcImRpdlwiLCBbXCJ0YXNrLWRhdGVcIl0pO1xuXHRcdHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXHRcdC8vUFJJT1JJVFlcblx0XHRjb25zdCB0YXNrUHJpb3JpdHkgPSBkb21DcmVhdGUoXCJkaXZcIiwgW1widGFzay1wcmlvcml0eVwiXSk7XG5cdFx0dGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblx0XHQvL05PVEVTXG5cdFx0Y29uc3QgdGFza05vdGVzID0gZG9tQ3JlYXRlKFwiZGl2XCIsIFtcInRhc2stbm90ZXNcIl0pO1xuXHRcdHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9IHRhc2subm90ZXM7XG5cdFx0Ly9ERUxFVEUgSUNPTlxuXHRcdGNvbnN0IHRhc2tEZWxldGVJY29uID0gZG9tQ3JlYXRlKFwiaW1nXCIsIFtcInRhc2stZGVsZXRlXCJdLCB7XG5cdFx0XHRzcmM6IGRlbGV0ZUljb24sXG5cdFx0XHRhbHQ6IFwidHJhc2ggY2FuIGRlbGV0ZSBpY29uXCIsXG5cdFx0fSk7XG5cdFx0dGFza0RlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHRhc2tEZWxldGVJY29uLnBhcmVudEVsZW1lbnQucmVtb3ZlKHRhc2tDYXJkKTtcblx0XHRcdGxldCBpbmRleCA9IHRhc2tEZWxldGVJY29uLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKTtcblx0XHRcdGN1cnJlbnRUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0Ly8gc2V0Q3VycmVudFRhc2tzKGN1cnJlbnRUYXNrcyk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrcykpO1xuXHRcdFx0cmVuZGVyVGFza3MoKTtcblx0XHR9KTtcblx0XHQvL0FQUEVORCBFTEVNRU5UU1xuXHRcdHRhc2tDYXJkLmFwcGVuZChcblx0XHRcdHRhc2tUaXRsZSxcblx0XHRcdHRhc2tEZXNjLFxuXHRcdFx0dGFza0RhdGUsXG5cdFx0XHR0YXNrUHJpb3JpdHksXG5cdFx0XHR0YXNrTm90ZXMsXG5cdFx0XHR0YXNrRGVsZXRlSWNvblxuXHRcdCk7XG5cdFx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG5cdH1cbn1cblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdFRhc2tzIH07XG4iLCJpbXBvcnQgeyByZW5kZXJEYXNoYm9hcmQgfSBmcm9tIFwiLi9wYWdlcy9kYXNoYm9hcmRcIjtcbmltcG9ydCB7IHJlbmRlckhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XG4vLyBpbXBvcnQgeyByZW5kZXJQcm9qZWN0c0FsbCB9IGZyb20gXCIuL3Byb2plY3RzQWxsXCI7XG4vLyBpbXBvcnQgeyByZW5kZXJQcm9qZWN0VGFza3MgfSBmcm9tIFwiLi9wcm9qZWN0VGFza3NcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnN0IGhlYWRlciA9IHJlbmRlckhlYWRlcigpO1xuXG5mdW5jdGlvbiByZW5kZXJEYXNoYm9hcmRQYWdlKCkge1xuXHRjb25zdCBkYXNoYm9hcmQgPSByZW5kZXJEYXNoYm9hcmQoKTtcblx0Y29udGVudC5hcHBlbmQoaGVhZGVyLCBkYXNoYm9hcmQpO1xufVxuLy8gZnVuY3Rpb24gcmVuZGVyQWxsUHJvamVjdHNQYWdlKCkge1xuLy8gXHRjb25zdCBhbGxQcm9qZWN0cyA9IHJlbmRlclByb2plY3RzQWxsKCk7XG4vLyBcdGNvbnRlbnQuYXBwZW5kKGhlYWRlciwgYWxsUHJvamVjdHMpO1xuLy8gfVxuLy8gZnVuY3Rpb24gcmVuZGVyUHJvamVjdFBhZ2UoKSB7XG4vLyBcdGNvbnN0IHByb2plY3RUYXNrcyA9IHJlbmRlclByb2plY3RUYXNrcygpO1xuLy8gXHRjb250ZW50LmFwcGVuZChoZWFkZXIsIHByb2plY3RUYXNrcyk7XG4vLyB9XG4vLyBmdW5jdGlvbiByZW5kZXJTZWFyY2hQYWdlKCkge1xuLy8gXHRjb25zdCBzZWFyY2ggPSByZW5kZXJTZWFyY2goKTtcbi8vIFx0Y29udGVudC5hcHBlbmQoaGVhZGVyLCBzZWFyY2gpO1xuLy8gfVxuXG5leHBvcnQgeyByZW5kZXJEYXNoYm9hcmRQYWdlIH07XG4iLCJjb25zdCBzYXZlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcbmNvbnN0IHNhdmVkVGFza3MgPSBbXTtcbmxldCBjdXJyZW50VGFza3MgPSBzYXZlZFRhc2tzO1xubGV0IGN1cnJlbnRQcm9qZWN0cyA9IHNhdmVkUHJvamVjdHM7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRUYXNrcyhuZXdUYXNrcykge1xuXHRjdXJyZW50VGFza3MgPSBuZXdUYXNrcztcblx0Ly8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza3MpKTtcbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3RzKG5ld1Byb2plY3RzKSB7XG5cdGN1cnJlbnRQcm9qZWN0cyA9IG5ld1Byb2plY3RzO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0cykpO1xufVxuXG5leHBvcnQgeyBzZXRDdXJyZW50VGFza3MsIHNldEN1cnJlbnRQcm9qZWN0cyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9