import { createTask, createProject } from "./js/create";
import { renderTaskForm, closeForm, clearForm } from "./js/taskForm";
import { domCreate } from "./js/DOM";
import { renderTasks } from "./js/render";
import "./css/style.scss";
// import { } from "./js/";

//DEFAULTS
const DEFAULT_THEME = localStorage.getItem("theme") || "light";
// const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

//filter example
// const currentlyDone = savedTasks.filter((task) => task.complete === true);
// const DEFAULT_TASKS_DONE = currentlyDone.length;
// const DEFAULT_TASKS_TOTAL = savedBooks.length;

//TEST DATA
const savedTasks = [
	{
		title: "Mow the lawn",
		description:
			"get out there with the dang mower and mow that there lawn there",
		dueDate: "2022-07-29",
		priority: "1",
		notes: "Return mower to neighbor when finished",
	},
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
	{
		title: "Buy roses",
		description: "2 dozen roses from Safeway",
		dueDate: "2022-08-12",
		priority: "5",
		notes: "red roses",
	},
];

//state variables
let currentTasks = savedTasks;
let currentTheme = DEFAULT_THEME;
// let currentTasksDoneCount = DEFAULT_TASKS_DONE;
// let currentTasksTotalCount = DEFAULT_TASKS_TOTAL;
//state variable updates
function setCurrentTasks(newTasks) {
	currentTasks = newTasks;
	localStorage.setItem("tasks", JSON.stringify(currentTasks));
}
// function setTaskCounts() {
// 	currentTasksDoneCount = DEFAULT_TASKS_DONE;
// 	currentTasksTotalCount = DEFAULT_TASKS_TOTAL;
// }

// arg 1 = name of HTML element
// arg 2 = class names to add
// arg 3 = object - attributes to add -> attribute : value
domCreate("div", ["task-card"], { "data-attribute-test": "heybuddy!" });

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
document
	.querySelector("#add-task-form")
	.addEventListener("click", renderTaskForm);
// document.querySelector("#add-icon").addEventListener("click", renderTaskForm);
document.querySelector("#close-form").addEventListener("click", closeForm);
document.querySelector(".clear").addEventListener("click", clearForm);

const addTaskFormBtn = document.querySelector(".add-task");
addTaskFormBtn.addEventListener("click", addTaskSubmit);
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
	renderTasks();
	closeForm();
}

window.onload = () => {
	// setCurrentTheme(DEFAULT_THEME);
	setCurrentTasks(currentTasks);
	renderTasks();
};
