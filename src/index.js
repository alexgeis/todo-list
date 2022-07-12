import deleteIcon from "./assets/trash-can-outline.png";
import "./css/style.scss";
// import { } from "./js/";

//DEFAULTS
const DEFAULT_THEME = localStorage.getItem("theme") || "light";
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
// const currentlyRead = savedBooks.filter((book) => book.readStatus === true);
// const DEFAULT_BOOKS_READ = currentlyRead.length;
// const DEFAULT_BOOKS_TOTAL = savedBooks.length;

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

const task1 = document.querySelector("#task-1");
const task2 = document.querySelector("#task-2");

task1.addEventListener("click", function (event) {
	console.log(event);
});
task2.addEventListener("click", function (event) {
	console.log(event);
	console.log(event.target.id);
	let id1 = event.target.id;
	let id2 = id1.console.log();
	// squaresGrid = document.getElementsByClassName("grid-squares");
	// squaresGrid[0].style.gridTemplateColumns = "1000px";
});

// const mainContentEl = document.querySelector("#main-content");

//add to DOM function
//arg 1 = name of HTML element
// arg 2 = class names to add
// arg 3 = object - attributes to add -> attribute : value
function domCreate(arg1, arg2, arg3) {
	//arg 1 = name of HTML element
	const element = document.createElement(arg1);
	// arg 2 = class names to add
	for (let i = 0; i < arg2.length; i++) {
		const className = arg2[i];
		element.classList.add(className);
		// //set data attribute "data-index" to the current index
		// element.dataset.index = i;
	}
	// arg 3 = object - attribute : value
	for (const attribute in arg3) {
		element.setAttribute(attribute, arg3[attribute]);
	}
	// return mainContentEl.appendChild(element);
	// return element;
}
domCreate("div", ["task-card"], { "data-attribute-test": "heybuddy!" });

// taskCardsNodeList = document.getElementsByClassName("task-card");
// for (let i = 0; i < taskCardsNodeList.length; i++) {
// 	taskCardsNodeList[i].style.gridColumn = "1/3";
// }

const date = new Date();
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

const taskDemo1 = createTask({
	title: "Walk the Dog",
	description: "take the doggo on a lil stroll",
	dueDate: date,
	priority: "high",
	notes: "avoid 9th and Elm - aggressive dog",
});
// console.log(taskDemo1);

const createProject = ({ title, description }) => ({
	title,
	description,
	tasks: [],
	printProject() {
		return `Project ${this.title}: ${this.description}`;
	},
	addTasktoProject(task) {
		this.tasks.push(task);
	},
});

const projectDemo1 = createProject({
	title: "Personal",
	description: "pleasure, not business",
});
projectDemo1.addTasktoProject(taskDemo1);
console.log(projectDemo1.tasks);

const addTaskFormEl = document.querySelector(".add_task_section");
const addTaskHeaderBtn = document.querySelector("#addTask");
addTaskHeaderBtn.addEventListener("click", renderTaskForm);

function renderTaskForm() {
	addTaskFormEl.setAttribute("style", "display: block;");
}

const closeFormBtn = document.querySelector("#close-form");
closeFormBtn.addEventListener("click", closeForm);
function closeForm() {
	addTaskFormEl.setAttribute("style", "display: none;");
}

const taskTitleEl = document.querySelector("#t-title");
const taskDescEl = document.querySelector("#t-desc");
const taskDateEl = document.querySelector("#t-date");
const taskPriorityEl = document.querySelector("#t-priority");
const taskNotesEl = document.querySelector("#t-notes");
const projectTaskAddEl = document.querySelector("#project-task-add");

const clearFormBtn = document.querySelector(".clear");
clearFormBtn.addEventListener("click", clearForm);
function clearForm() {
	taskTitleEl.value = "";
	taskDescEl.value = "";
	taskDateEl.value = "";
	taskPriorityEl.value = "";
	taskNotesEl.value = "";
	projectTaskAddEl.options.selectedIndex = 0;
}

// let currentTasks = [
// 	{
// 		title: "Walk the Dog",
// 		description: "take the doggo on a lil stroll",
// 		dueDate: "2022-07-12T13:27:19.568Z",
// 		priority: "high",
// 		notes: "avoid 9th and Elm - aggressive dog",
// 	},
// ];
const addTaskFormBtn = document.querySelector(".add-task");
addTaskFormBtn.addEventListener("click", addTaskSubmit);
function addTaskSubmit() {
	const newTask = createTask({
		title: taskTitleEl.value,
		description: taskDescEl.value,
		dueDate: taskDateEl.value,
		priority: taskPriorityEl.value,
		notes: taskNotesEl.value,
	});

	currentTasks.push(newTask);
	// setCurrentTasks(currentTasks);
	console.log(currentTasks);
	localStorage.setItem("tasks", JSON.stringify(currentTasks));
	closeForm();
	// renderTasks();
}

const taskContainer = document.querySelector("#main-content");

function renderTasks() {
	//clear current tasks
	taskContainer.innerhtml = "";
	for (let i = 0; i < currentTasks.length; i++) {
		const task = currentTasks[i];

		//task card containing div
		const taskCard = document.createElement("div");
		taskCard.classList.add("task-card");
		taskCard.setAttribute("id", `task-${i}`);
		//maybe use data attributes?

		//inner task card div items
		//TITLE
		const taskTitle = document.createElement("div");
		taskTitle.classList.add("task-title");
		taskTitle.textContent = "Title";
		//DESCRIPTION
		const taskDesc = document.createElement("div");
		taskDesc.classList.add("task-description");
		taskDesc.textContent = "Description";
		//DUE DATE
		const taskDate = document.createElement("div");
		taskDate.classList.add("task-date");
		taskDate.textContent = "Due Date";
		//PRIORITY
		const taskPriority = document.createElement("div");
		taskPriority.classList.add("task-priority");
		taskPriority.textContent = "Priority";
		//NOTES
		const taskNotes = document.createElement("div");
		taskNotes.classList.add("task-notes");
		taskNotes.textContent = "Notes";
		//DELETE ICON
		const taskDeleteIcon = document.createElement("img");
		taskDeleteIcon.classList.add("task-delete");
		taskDeleteIcon.setAttribute("src", "./assets/trash-can-outline.png");
		taskDeleteIcon.setAttribute("alt", "trash can delete icon");
	}
}

// window.onload = () => {
// 	// setCurrentTheme(DEFAULT_THEME);
// 	setCurrentTasks(currentTasks);
// 	// renderTasks();
// };
