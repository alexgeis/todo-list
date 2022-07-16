import { createTask, createProject } from "./js/create";
import {
	renderTaskForm,
	renderProjectForm,
	clearTaskForm,
	closeTaskForm,
	clearProjectForm,
	closeProjectForm,
} from "./js/taskForm";
import { domCreate } from "./js/DOM";
import { renderDashboard } from "./js/render/dashboard";
// import { renderProjectsAll } from "./js/render/projectsAll";
import { accordionToggle } from "./js/projectAcc";
import "./css/style.scss";
//Demo data
// import { savedTasks } from "./js/data/taskData";
// import { savedProjects } from "./js/data/projectData";
// localStorage.setItem("tasks", savedTasks);
// localStorage.setItem("projects", savedProjects);

//DEFAULTS
const DEFAULT_THEME = localStorage.getItem("theme") || "light";
const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
// const currentlyDone = savedTasks.filter((task) => task.complete === true);
// const DEFAULT_TASKS_DONE = currentlyDone.length;
// const DEFAULT_TASKS_TOTAL = savedBooks.length;
console.log(savedProjects);
//TEST DATA

//state variables
//ALL TASKS

//ALL PROJECTS (FOR PROJECT ACCORDION ASIDE)
////names
const totalProjectNames = [];
for (let i = 0; i < savedProjects.length; i++) {
	const project = savedProjects[i];
	totalProjectNames.push(project.title);
}
////dom logic
const projectList = document.querySelector("#project-panel-list");
for (let i = 0; i < totalProjectNames.length; i++) {
	const name = totalProjectNames[i];
	const liEl = domCreate("li", ["project-list-item"]);
	liEl.textContent = name;
	projectList.appendChild(liEl);
}

//TASKS FOR EACH PROJECT
// projectDemo1.tasks;

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

//PROJECT ASIDE ACCORDIAN
document
	.querySelector("#project-accordion")
	.addEventListener("click", accordionToggle);

const date = new Date();
const taskDemo1 = createTask({
	title: "Walk the Dog",
	description: "take the doggo on a lil stroll",
	dueDate: date,
	priority: 3,
	notes: "avoid 9th and Elm - aggressive dog",
});
// console.log(taskDemo1);

const projectDemo1 = createProject({
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
	.addEventListener("click", renderTaskForm);
document
	.querySelector("#add-project-form")
	.addEventListener("click", renderProjectForm);
//task form
document
	.querySelector("#close-task-form")
	.addEventListener("click", closeTaskForm);
document.querySelector("#task-clear").addEventListener("click", clearTaskForm);
//// task submit
document
	.querySelector("#add-task-btn")
	.addEventListener("click", addTaskSubmit);
function addTaskSubmit() {
	const newTask = createTask({
		title: document.querySelector("#t-title").value,
		description: document.querySelector("#t-desc").value,
		dueDate: document.querySelector("#t-date").value,
		priority: document.querySelector("#t-priority").value,
		notes: document.querySelector("#t-notes").value,
	});
	currentTasks.push(newTask);
	setCurrentTasks(currentTasks);
	localStorage.setItem("tasks", JSON.stringify(currentTasks));
	renderDashboard();
	closeTaskForm();
}
//project form
document
	.querySelector("#close-project-form")
	.addEventListener("click", closeProjectForm);
document
	.querySelector("#project-clear")
	.addEventListener("click", clearProjectForm);
////project submit
document
	.querySelector("#add-project-btn")
	.addEventListener("click", addProjectSubmit);
function addProjectSubmit() {
	const newProject = createProject({
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
	closeProjectForm();
}

window.onload = () => {
	// setCurrentTheme(DEFAULT_THEME);
	setCurrentTasks(currentTasks);
	setCurrentProjects(currentProjects);
	renderDashboard();
};
