import { domCreate } from "../../DOM";
import { renderProjectTasks } from "../pages/projectTasks";
import { renderDashboardPage, renderAllProjectsPage } from "../renderPages";

function renderProjectAsideList() {
	const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
	const projectList = domCreate("ul", "", { id: "project-panel-list" });

	if (savedProjects.length === 0) return projectList;
	const totalProjectNames = [];
	for (let i = 0; i < savedProjects.length; i++) {
		const project = savedProjects[i];
		totalProjectNames.push(project.title);
	}
	////dom logic
	for (let i = 0; i < totalProjectNames.length; i++) {
		const name = totalProjectNames[i];
		const liEl = domCreate("li", ["project-list-item"], {
			"data-project-index": i,
		});
		liEl.textContent = name;
		liEl.addEventListener("click", function () {
			const dashboardEl = document.getElementById("dash-aside");
			const projectListEl = document.getElementById("project-list-aside");
			const allProjectsEl = document.getElementById("all-projects-aside");
			const projectItems = document.querySelectorAll(".project-list-item");
			for (let i = 0; i < projectItems.length; i++) {
				const item = projectItems[i];
				item.classList.remove("project-list-selected");
			}
			liEl.classList.add("project-list-selected");

			if (!projectListEl.classList.contains("aside-selected")) {
				projectListEl.classList.add("aside-selected");
				dashboardEl.classList.remove("aside-selected");
				allProjectsEl.classList.remove("aside-selected");
			}
			let index = liEl.getAttribute("data-project-index");
			renderProjectTasks(index);
		});
		projectList.appendChild(liEl);
	}
	return projectList;
}

function renderAside() {
	//DASHBOARD
	const dashboardEl = domCreate("div", ["aside-item", "aside-selected"], {
		id: "dash-aside",
	});
	dashboardEl.textContent = "DASHBOARD";

	//ALL PROJECTS
	const allProjectsEl = domCreate("div", ["aside-item"], {
		id: "all-projects-aside",
	});
	allProjectsEl.textContent = "ALL PROJECTS";
	//PROJECT LIST
	const projectListBtn = domCreate("button", "", {
		id: "project-accordion-btn",
	});
	projectListBtn.textContent = "PROJECTS";

	const projectPanel = domCreate("div", "", { id: "project-panel-display" });
	const projectListUL = renderProjectAsideList();
	projectPanel.appendChild(projectListUL);
	const projectListEl = domCreate("div", ["aside-item"], {
		id: "project-list-aside",
	});
	function accordionToggle() {
		projectListBtn.classList.toggle("active");
		if (projectPanel.style.display === "block") {
			projectPanel.style.display = "none";
		} else {
			projectPanel.style.display = "block";
		}
	}
	projectListBtn.addEventListener("click", accordionToggle);
	projectListEl.append(projectListBtn, projectPanel);
	//select toggle event listeners
	dashboardEl.addEventListener("click", function () {
		if (!dashboardEl.classList.contains("aside-selected")) {
			dashboardEl.classList.add("aside-selected");
			allProjectsEl.classList.remove("aside-selected");
			projectListEl.classList.remove("aside-selected");
		}
		projectPanel.style.display = "none";
		renderDashboardPage();
	});
	allProjectsEl.addEventListener("click", function () {
		if (!allProjectsEl.classList.contains("aside-selected")) {
			allProjectsEl.classList.add("aside-selected");
			dashboardEl.classList.remove("aside-selected");
			projectListEl.classList.remove("aside-selected");
		}
		projectPanel.style.display = "none";
		renderAllProjectsPage();
	});
	//FULL ASIDE APPEND
	const asideEl = domCreate("aside", "", { id: "main-aside" });
	asideEl.append(dashboardEl, allProjectsEl, projectListEl);
	//apply other styling / elements / click events
	renderProjectAsideList();
	return asideEl;
}

export { renderProjectAsideList, renderAside };
