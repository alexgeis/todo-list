import { domCreate } from "../../DOM";
import deleteIcon from "../../../assets/trash-can-outline.png";
import { renderTaskForm } from "../../form";

function renderProjectTasks(index) {
	//get all tasks from all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects")) || [];
	const renderProject = currentProjects[index];
	const currentTasks = renderProject.tasks || [];
	//update main header
	const mainHeader = document.querySelector("#main-header");
	mainHeader.textContent = renderProject.title.toUpperCase();
	//clear current tasks
	const taskContainer = document.querySelector("#main-content");
	taskContainer.innerHTML = "";
	//backup text if no tasks
	if (currentTasks.length === 0) {
		taskContainer.textContent = "No tasks created yet";
		const emptyDiv = domCreate("div");
		const emptyTaskBtn = domCreate("button", ["empty-btn"], {
			id: "empty-task-btn-dash",
		});
		emptyTaskBtn.textContent = "CREATE TASK";
		emptyTaskBtn.addEventListener("click", renderTaskForm);
		taskContainer.append(emptyDiv, emptyTaskBtn);
		//autopopulate task form
		const existingProjectSelect = document.getElementById("project-task-add");
		const childArray = existingProjectSelect.childNodes;
		existingProjectSelect.childNodes[0].defaultSelected = false;
		for (let i = 1; i < childArray.length; i++) {
			const option = childArray[i];
			if (renderProject.title === option.value) {
				existingProjectSelect.childNodes[i].defaultSelected = true;
			}
		}
	}
	//render currentTasks tasks
	for (let i = 0; i < currentTasks.length; i++) {
		const task = currentTasks[i];
		const taskCard = domCreate("div", ["task-card"], { "data-index": i });
		//inner task card div items
		//TITLE
		const taskTitle = domCreate("div", ["task-title"]);
		taskTitle.textContent = task.title;
		//DESCRIPTION
		const taskDesc = domCreate("div", ["task-description"]);
		taskDesc.textContent = task.description;
		//DUE DATE
		const taskDate = domCreate("div", ["task-date"]);
		taskDate.textContent = task.dueDate;
		//PRIORITY
		const taskPriority = domCreate("div", ["task-priority"]);
		taskPriority.textContent = task.priority;
		//NOTES
		const taskNotes = domCreate("div", ["task-notes"]);
		taskNotes.textContent = task.notes;
		//DELETE ICON
		const taskDeleteIcon = domCreate("img", ["task-delete"], {
			src: deleteIcon,
			alt: "trash can delete icon",
		});
		taskDeleteIcon.addEventListener("click", function () {
			taskDeleteIcon.parentElement.remove(taskCard);
			let index = taskDeleteIcon.parentElement.getAttribute("data-index");
			currentTasks.splice(index, 1);
			// setCurrentTasks(currentTasks);
			localStorage.setItem("tasks", JSON.stringify(currentTasks));
			renderProjectTasks(index);
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

export { renderProjectTasks };
