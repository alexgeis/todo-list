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
import { renderAddMenu, renderHeader } from "./js/render/components/header";
import { renderDashboard } from "./js/render/pages/dashboard";
import { renderProjectAsideList } from "./js/render/components/aside/projectsAside";
import { renderProjectsAll } from "./js/render/projectsAll";
import {
	addTaskSubmit,
	renderAddTaskForm,
} from "./js/render/components/addTaskForm";
import {
	addProjectSubmit,
	renderAddProjectForm,
} from "./js/render/components/addProjectForm";
import { setCurrentTasks, setCurrentProjects } from "./js/state";
import { seedProjectData } from "./js/data/seed";
import { accordionToggle } from "./js/projectAcc";
import "./css/style.scss";
import { renderSite } from "./js/render/renderPages";
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

//PAGE RENDERING

// //PROJECT ASIDE ACCORDIAN

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

//// task submit

//project form

// ////project submit

window.onload = () => {
	renderSite();
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
