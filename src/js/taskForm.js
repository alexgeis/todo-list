const addTaskFormEl = document.querySelector(".add_task_section");
function renderTaskForm() {
	addTaskFormEl.setAttribute("style", "display: block;");
}

function closeForm() {
	addTaskFormEl.setAttribute("style", "display: none;");
}

export { renderTaskForm, closeForm };
