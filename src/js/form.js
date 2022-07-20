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

export {
	renderTaskForm,
	renderProjectForm,
	clearTaskForm,
	closeTaskForm,
	clearProjectForm,
	closeProjectForm,
};
