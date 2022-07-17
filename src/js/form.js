const addTaskFormEl = document.querySelector(".add_task_section");
function renderTaskForm() {
	addTaskFormEl.setAttribute("style", "display: block;");
}
const addProjectFormEl = document.querySelector(".add_project_section");
function renderProjectForm() {
	addProjectFormEl.setAttribute("style", "display: block;");
}

// function addTaskSubmit() {
// 	const newTask = createTask({
// 		title: document.querySelector("#t-title").value.value,
// 		description: document.querySelector("#t-desc").value.value,
// 		dueDate: document.querySelector("#t-date").value.value,
// 		priority: document.querySelector("#t-priority").value.value,
// 		notes: document.querySelector("#t-notes").value.value,
// 	});
// 	currentTasks.push(newTask);
// 	setCurrentTasks(currentTasks);
// 	console.log(currentTasks);
// 	localStorage.setItem("tasks", JSON.stringify(currentTasks));
// 	renderTasks();
// 	closeForm();
// }

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

export {
	renderTaskForm,
	renderProjectForm,
	clearTaskForm,
	closeTaskForm,
	clearProjectForm,
	closeProjectForm,
};
