import { domCreate } from "../../DOM";
import deleteIcon from "../../../assets/trash-can-outline.png";
import { renderProjectTasks } from "./projectTasks";

function renderProjectsAll() {
	//get all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects")) || [];
	console.log(currentProjects);
	//clear current content
	const projectContainer = domCreate("div", "", { id: "main-content" });
	// projectContainer.innerHTML = "";
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
		const projectTasksList = domCreate("ul", ["project-tasks-list"]);
		let taskArray = project.tasks;
		for (let i = 0; i < taskArray.length; i++) {
			const task = taskArray[i];
			const li = domCreate("li", ["project-task-list-item"]);
			li.textContent = task.title;
			projectTasksList.appendChild(li);
		}
		const projectTasks = domCreate("div", ["project-tasks"]);
		projectTasks.appendChild(projectTasksList);
		//DELETE ICON
		const projectDeleteIcon = domCreate("img", ["project-delete"], {
			src: deleteIcon,
			alt: "trash can delete icon",
		});
		projectDeleteIcon.addEventListener("click", function () {
			projectDeleteIcon.parentElement.remove(projectCard);
			let index = projectDeleteIcon.parentElement.getAttribute("data-index");
			currentProjects.splice(index, 1);
			// setCurrentProjects(currentProjects);
			localStorage.setItem("projects", JSON.stringify(currentProjects));
			renderProjectsAll();
		});
		//APPEND ELEMENTS
		projectCard.append(
			projectTitle,
			projectDesc,
			projectTasks,
			projectDeleteIcon
		);
		projectCard.addEventListener("click", function () {
			const dashboardEl = document.getElementById("dash-aside");
			const projectListEl = document.getElementById("project-list-aside");
			const allProjectsEl = document.getElementById("all-projects-aside");
			if (!projectListEl.classList.contains("aside-selected")) {
				projectListEl.classList.add("aside-selected");
				dashboardEl.classList.remove("aside-selected");
				allProjectsEl.classList.remove("aside-selected");
			}
			function accordionToggle() {
				const projectListBtn = document.getElementById("project-accordion-btn");
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
			projectPanelList.childNodes[i].classList.add("project-list-selected");
			renderProjectTasks(i);
		});
		projectContainer.appendChild(projectCard);
	}
	return projectContainer;
}

export { renderProjectsAll };
