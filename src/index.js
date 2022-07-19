import { createTask, createProject } from "./js/create";
import {
	renderTaskForm,
	renderProjectForm,
	clearTaskForm,
	closeTaskForm,
	clearProjectForm,
	closeProjectForm,
} from "./js/form";
import { domCreate } from "./js/DOM";
import { renderAddMenu, renderHeader } from "./js/render/header";
import { renderDashboard } from "./js/render/dashboard";
import { renderProjectAsideList } from "./js/render/projectsAside";
import { renderProjectsAll } from "./js/render/projectsAll";
import { addTaskSubmit, renderAddTaskForm } from "./js/render/addTaskForm";
import {
	addProjectSubmit,
	renderAddProjectForm,
} from "./js/render/addProjectForm";
import { setCurrentTasks, setCurrentProjects } from "./js/state";
import { seedProjectData } from "./js/data/seed";
import { accordionToggle } from "./js/projectAcc";
import "./css/style.scss";
//TEST DATA
// import { taskData } from "./js/data/taskData";
// localStorage.setItem("tasks", taskData);

// renderHeader();

//SEED DATA BTN
document
	.querySelector("#seed-projects-btn")
	.addEventListener("click", seedProjectData);

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
	.addEventListener("click", accordionToggle);

//TASK/PROJECT FORMS
document.querySelector("#add-icon").addEventListener("click", renderAddMenu);
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

const dashboardEl = document.getElementById("dash-aside");
const allProjectsEl = document.getElementById("all-projects-aside");
const projectListEl = document.getElementById("project-list-aside");

window.onload = () => {
	// setCurrentTheme(DEFAULT_THEME);
	setCurrentTasks(currentTasks);
	setCurrentProjects(currentProjects);
	renderProjectAsideList();
	dashboardEl.addEventListener("click", function () {
		if (!dashboardEl.classList.contains("aside-selected")) {
			dashboardEl.classList.add("aside-selected");
			allProjectsEl.classList.remove("aside-selected");
			projectListEl.classList.remove("aside-selected");
		}
		renderDashboard();
	});
	allProjectsEl.addEventListener("click", function () {
		if (!allProjectsEl.classList.contains("aside-selected")) {
			allProjectsEl.classList.add("aside-selected");
			dashboardEl.classList.remove("aside-selected");
			projectListEl.classList.remove("aside-selected");
		}
		renderProjectsAll();
	});
	renderDashboard();
};
