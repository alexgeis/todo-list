import { domCreate } from "../DOM";
import deleteIcon from "../../assets/trash-can-outline.png";

function renderProjectsAll() {
	//get all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects"));
	console.log(currentProjects);
	//update main header
	const mainHeader = document.querySelector("#main-header");
	mainHeader.textContent = "PROJECTS";
	//clear current content
	const projectContainer = document.querySelector("#main-content");
	projectContainer.innerHTML = "";
	//render currentProjects projects
	for (let i = 0; i < currentProjects.length; i++) {
		const project = currentProjects[i];
		const projectCard = domCreate("div", ["project-card"], { "data-index": i });
		//inner project card div items
		//TITLE
		const projectTitle = domCreate("div", ["project-title"]);
		projectTitle.textContent = project.title;
		//DESCRIPTION
		const projectDesc = domCreate("div", ["project-description"]);
		projectDesc.textContent = project.description;
		//TASKS
		const projectTasks = domCreate("div", ["project-tasks"]);
		const projectTasksList = domCreate("ul", ["project-tasks-list"]);
		let taskArray = project.tasks;
		for (let i = 0; i < taskArray.length; i++) {
			const task = taskArray[i];
			const li = domCreate("li", ["project-task-list-item"]);
			li.textContent = task.title;
			projectTasksList.appendChild(li);
		}
		projectTasks.appendChild(projectTasksList);
		//DELETE ICON
		const projectDeleteIcon = domCreate("img", ["project-delete"], {
			src: deleteIcon,
			alt: "trash can delete icon",
		});
		projectDeleteIcon.addEventListener("click", function () {
			taskDeleteIcon.parentElement.remove(projectCard);
			let index = taskDeleteIcon.parentElement.getAttribute("data-index");
			currentTasks.splice(index, 1);
			setCurrentTasks(currentTasks);
			localStorage.setItem("tasks", JSON.stringify(currentTasks));
			renderTasks();
		});
		//APPEND ELEMENTS
		projectCard.append(
			taskTitle,
			taskDesc,
			taskDate,
			taskPriority,
			taskNotes,
			taskDeleteIcon
		);
		projectContainer.appendChild(projectCard);
	}
}

export { renderProjectsAll };
