const addTaskFormEl = document.querySelector(".add_task_section");
function renderTaskForm() {
	addTaskFormEl.setAttribute("style", "display: block;");
}

function clearForm() {
	document.querySelector("#t-title").value = "";
	document.querySelector("#t-desc").value = "";
	document.querySelector("#t-date").value = "";
	document.querySelector("#t-priority").value = "";
	document.querySelector("#t-notes").value = "";
	document.querySelector("#project-task-add").options.selectedIndex = 0;
}

function closeForm() {
	addTaskFormEl.setAttribute("style", "display: none;");
}

export { renderTaskForm, closeForm, clearForm };
