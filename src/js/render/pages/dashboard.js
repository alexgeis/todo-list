import { domCreate } from "../../DOM";
import deleteIcon from "../../../assets/trash-can-outline.png";
import { renderProjectTasks } from "../pages/projectTasks";

function renderDashboard() {
	//get all tasks from all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects"));
	// console.log({ currentProjects });

	const projectTaskData = [];
	for (let i = 0; i < currentProjects.length; i++) {
		const project = currentProjects[i];
		const data = {
			projectTitle: project.title,
			tasks: project.tasks,
			index: i,
		};
		projectTaskData.push(data);
	}
	// console.table(projectTaskData);
	//clear current tasks
	const taskContainer = domCreate("div", "", { id: "main-content" });
	taskContainer.innerHTML = "";
	//render currentTasks tasks
	for (let i = 0; i < projectTaskData.length; i++) {
		const data = projectTaskData[i];
		// console.log({ data });
		//inner task card div items
		//task card renders
		let taskData = data.tasks;
		// console.log({ taskData }); /////////////////////
		for (let i = 0; i < taskData.length; i++) {
			const task = taskData[i];
			console.log({ task });
			const taskCard = domCreate("div", ["task-card"], {
				"data-task-index": i,
			});
			//TITLE
			const taskTitle = domCreate("div", ["task-title"]);
			taskTitle.textContent = task.title;
			//PROJECT TITLE
			const projectTitle = domCreate("div", ["project-title-dash"]);
			projectTitle.textContent = data.projectTitle;
			projectTitle.addEventListener("click", function () {
				renderProjectTasks(data.index);
			});
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
				let index =
					taskDeleteIcon.parentElement.getAttribute("data-task-index");
				currentTasks.splice(index, 1);
				// setCurrentTasks(currentTasks);
				// localStorage.setItem("tasks", JSON.stringify(currentTasks));
				renderDashboard();
			});
			//APPEND ELEMENTS
			taskCard.append(
				taskTitle,
				projectTitle,
				taskDesc,
				taskDate,
				taskPriority,
				taskNotes,
				taskDeleteIcon
			);
			// taskCard.insertBefore(projectTitle, taskCard.childNodes[1]);
			taskContainer.appendChild(taskCard);
		}
	}
	return taskContainer;
}

export { renderDashboard };
