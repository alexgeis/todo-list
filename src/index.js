import deleteIcon from "./assets/trash-can-outline.png";
import { createTask, createProject } from "./js/create";
import { renderTaskForm, closeForm, clearForm } from "./js/taskForm";
import { domCreate } from "./js/DOM";
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
// let currentBooksReadCount = DEFAULT_BOOKS_READ;
// let currentBooksTotalCount = DEFAULT_BOOKS_TOTAL;
//state variable updates
function setCurrentTasks(newTasks) {
	currentTasks = newTasks;
}
// function setBookReadTotals() {
// 	currentBooksReadCount = DEFAULT_BOOKS_READ;
// 	currentBooksTotalCount = DEFAULT_BOOKS_TOTAL;
// }
const taskContainer = document.querySelector("#main-content");

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

//TASK FORM

const addTaskHeaderBtn = document.querySelector("#addTask");
addTaskHeaderBtn.addEventListener("click", renderTaskForm);

const closeFormBtn = document.querySelector("#close-form");
closeFormBtn.addEventListener("click", closeForm);

const clearFormBtn = document.querySelector(".clear");
clearFormBtn.addEventListener("click", clearForm);

const addTaskFormBtn = document.querySelector(".add-task");
addTaskFormBtn.addEventListener("click", addTaskSubmit);
function addTaskSubmit() {
	const newTask = createTask({
		title: document.querySelector("#t-title").value.value,
		description: document.querySelector("#t-desc").value.value,
		dueDate: document.querySelector("#t-date").value.value,
		priority: document.querySelector("#t-priority").value.value,
		notes: document.querySelector("#t-notes").value.value,
	});
	currentTasks.push(newTask);
	setCurrentTasks(currentTasks);
	console.log(currentTasks);
	localStorage.setItem("tasks", JSON.stringify(currentTasks));
	renderTasks();
	closeForm();
}

function renderTasks() {
	console.log("enter render task f(n)");
	//clear current tasks
	taskContainer.innerHTML = "";
	for (let i = 0; i < currentTasks.length; i++) {
		const task = currentTasks[i];

		//task card containing div
		const taskCard = document.createElement("div");
		taskCard.classList.add("task-card");
		taskCard.setAttribute("data-index", i);
		// taskCard.setAttribute("id", `task-${i}`);

		//inner task card div items
		//TITLE
		const taskTitle = document.createElement("div");
		taskTitle.classList.add("task-title");
		taskTitle.textContent = task.title;
		//DESCRIPTION
		const taskDesc = document.createElement("div");
		taskDesc.classList.add("task-description");
		taskDesc.textContent = task.description;
		//DUE DATE
		const taskDate = document.createElement("div");
		taskDate.classList.add("task-date");
		taskDate.textContent = task.dueDate;
		//PRIORITY
		const taskPriority = document.createElement("div");
		taskPriority.classList.add("task-priority");
		taskPriority.textContent = task.priority;
		console.log(task.priority);
		//NOTES
		const taskNotes = document.createElement("div");
		taskNotes.classList.add("task-notes");
		taskNotes.textContent = task.notes;
		//DELETE ICON
		const taskDeleteIcon = document.createElement("img");
		console.log({ taskDeleteIcon });
		taskDeleteIcon.classList.add("task-delete");
		taskDeleteIcon.setAttribute("src", deleteIcon);
		taskDeleteIcon.setAttribute("alt", "trash can delete icon");
		taskDeleteIcon.addEventListener("click", function () {
			taskDeleteIcon.parentElement.remove(taskCard);
			let index = taskDeleteIcon.parentElement.getAttribute("data-index");
			currentTasks.splice(index, 1);
			setCurrentTasks(currentTasks);
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

window.onload = () => {
	// setCurrentTheme(DEFAULT_THEME);
	setCurrentTasks(currentTasks);
	renderTasks();
};

//TASK GRID RESPONSIVENESS
// const task1 = document.querySelector("#task-1");
// const task2 = document.querySelector("#task-2");

// task1.addEventListener("click", function (event) {
// 	console.log(event);
// });
// task2.addEventListener("click", function (event) {
// 	console.log(event);
// 	console.log(event.target.id);
// 	let id1 = event.target.id;
// 	let id2 = id1.console.log();
// 	// squaresGrid = document.getElementsByClassName("grid-squares");
// 	// squaresGrid[0].style.gridTemplateColumns = "1000px";
// });

// taskCardsNodeList = document.getElementsByClassName("task-card");
// for (let i = 0; i < taskCardsNodeList.length; i++) {
// 	taskCardsNodeList[i].style.gridColumn = "1/3";
// }
