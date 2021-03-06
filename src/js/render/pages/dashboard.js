import { domCreate } from "../../DOM";
import deleteIcon from "../../../assets/trash-can-outline.png";
import { renderProjectTasks } from "../pages/projectTasks";
import { renderTaskForm, renderProjectForm } from "../../form";

function renderDashboard() {
	//get all tasks from all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects")) || [];
	console.log({ currentProjects });

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
	//no project results backup
	if (currentProjects.length === 0) {
		taskContainer.textContent = "No projects";
		const emptyDiv = domCreate("div");
		const emptyProjectBtn = domCreate("button", ["empty-btn"], {
			id: "empty-project-btn-dash",
		});
		emptyProjectBtn.textContent = "CREATE PROJECT";
		emptyProjectBtn.addEventListener("click", renderProjectForm);
		taskContainer.append(emptyDiv, emptyProjectBtn);
	}
	//no task results backup
	const currentTasks = [];
	for (let i = 0; i < currentProjects.length; i++) {
		const project = currentProjects[i];
		currentTasks.push(...project.tasks);
	}
	if (currentProjects.length > 0 && currentTasks.length === 0) {
		taskContainer.textContent = "No tasks";
		const emptyDiv = domCreate("div");
		const emptyTaskBtn = domCreate("button", ["empty-btn"], {
			id: "empty-task-btn-dash",
		});
		emptyTaskBtn.textContent = "CREATE TASK";
		emptyTaskBtn.addEventListener("click", renderTaskForm);
		taskContainer.append(emptyDiv, emptyTaskBtn);
	}
	//render projectTaskData tasks
	for (let i = 0; i < projectTaskData.length; i++) {
		const data = projectTaskData[i];
		console.log({ data });
		//inner task card div items
		//task card renders
		let taskData = data.tasks;
		// console.log({ taskData }); /////////////////////
		for (let i = 0; i < taskData.length; i++) {
			const task = taskData[i];
			// console.log({ task });
			const taskCard = domCreate("div", ["task-card"], {
				"data-task-index": i,
			});
			//TITLE
			const taskTitle = domCreate("div", ["task-title-dash"]);
			taskTitle.textContent = task.title;
			//PROJECT TITLE
			const projectTitle = domCreate("div", ["project-title-dash"]);
			projectTitle.textContent = data.projectTitle;
			projectTitle.addEventListener("click", function () {
				const dashboardEl = document.getElementById("dash-aside");
				const projectListEl = document.getElementById("project-list-aside");
				const allProjectsEl = document.getElementById("all-projects-aside");
				if (!projectListEl.classList.contains("aside-selected")) {
					projectListEl.classList.add("aside-selected");
					dashboardEl.classList.remove("aside-selected");
					allProjectsEl.classList.remove("aside-selected");
				}
				function accordionToggle() {
					const projectListBtn = document.getElementById(
						"project-accordion-btn"
					);
					const projectPanel = document.getElementById("project-panel-display");
					projectListBtn.classList.toggle("active");
					if (projectPanel.style.display === "block") {
						projectPanel.style.display = "none";
					} else {
						projectPanel.style.display = "block";
					}
				}
				accordionToggle();
				const projectPanelList = document.getElementById("project-panel-list");
				projectPanelList.childNodes[data.index].classList.add(
					"project-list-selected"
				);
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
				const taskTitle =
					taskDeleteIcon.parentElement.childNodes[0].textContent;
				const projectTitle =
					taskDeleteIcon.parentElement.childNodes[1].textContent;
				for (let i = 0; i < currentProjects.length; i++) {
					const project = currentProjects[i];
					for (let j = 0; j < project.tasks.length; j++) {
						const task = project.tasks[j];
						if (projectTitle === project.title && taskTitle === task.title) {
							project.tasks.splice(j, 1);
						}
					}
				}
				localStorage.setItem("projects", JSON.stringify(currentProjects));
				//// superficial delete
				// let index =
				// 	taskDeleteIcon.parentElement.getAttribute("data-task-index");
				// currentTasks.splice(index, 1);
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
