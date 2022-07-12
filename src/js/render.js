import { domCreate } from "./DOM";
import deleteIcon from "../assets/trash-can-outline.png";

function renderTasks() {
	const currentTasks = JSON.parse(localStorage.getItem("tasks"));
	const taskContainer = document.querySelector("#main-content");
	//clear current tasks
	taskContainer.innerHTML = "";
	//render currentTasks tasks
	for (let i = 0; i < currentTasks.length; i++) {
		const task = currentTasks[i];
		const taskCard = domCreate("div", ["task-card"], { "data-index": i });
		// taskCard.setAttribute("id", `task-${i}`);

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
		console.log(task.priority);
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

export { renderTasks };
