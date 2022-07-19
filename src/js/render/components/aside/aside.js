import { domCreate } from "../../../DOM";
import { renderProjectTasks } from "./projectTasks";

function asideSelectToggle() {
	const dashboardEl = document.getElementById("dash-aside");
	const allProjectsEl = document.getElementById("all-projects-aside");
	const projectListEl = document.getElementById("project-list-aside");
	dashboardEl.addEventListener("click", function () {
		if (!dashboardEl.classList.contains("aside-selected")) {
			dashboardEl.classList.add("aside-selected");
			allProjectsEl.classList.remove("aside-selected");
			projectListEl.classList.remove("aside-selected");
		}
	});
	allProjectsEl.addEventListener("click", function () {
		if (!allProjectsEl.classList.contains("aside-selected")) {
			allProjectsEl.classList.add("aside-selected");
			dashboardEl.classList.remove("aside-selected");
			projectListEl.classList.remove("aside-selected");
		}
	});
}

function renderAccToggle() {
	const acc = document.querySelector("#project-accordion-btn");
	const accPanel = document.querySelector("#project-panel-display");
	function accordionToggle() {
		acc.classList.toggle("active");
		if (accPanel.style.display === "block") {
			accPanel.style.display = "none";
		} else {
			accPanel.style.display = "block";
		}
	}
	acc.addEventListener("click", accordionToggle);
}

function renderAsideItems() {
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
	const projectListBtn = domCreate("button", [""], {
		id: "project-accordion-btn",
	});
	projectListBtn.textContent = "PROJECTS";
	const projectPanel = domCreate("div", [""], { id: "project-panel-display" });
	const projectListUL = domCreate("ul", [""], { id: "project-panel-list" });
	projectPanel.appendChild(projectListUL);
	const projectListEl = domCreate("div", ["aside-item"], {
		id: "project-list-aside",
	});
	projectListEl.append(projectListBtn, projectPanel);
	//FULL HEADER APPEND
	const asideEl = domCreate("aside", [""], { id: "main-aside" });
	asideEl.append(dashboardEl, allProjectsEl, projectListEl);
}

function renderProjectAsideList() {
	const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
	const totalProjectNames = [];
	for (let i = 0; i < savedProjects.length; i++) {
		const project = savedProjects[i];
		totalProjectNames.push(project.title);
	}
	////dom logic
	const dashboardEl = document.getElementById("dash-aside");
	const projectListEl = document.getElementById("project-list-aside");
	const allProjectsEl = document.getElementById("all-projects-aside");
	const projectList = document.querySelector("#project-panel-list");
	for (let i = 0; i < totalProjectNames.length; i++) {
		const name = totalProjectNames[i];
		const liEl = domCreate("li", ["project-list-item"], {
			"data-project-index": i,
		});
		liEl.textContent = name;
		liEl.addEventListener("click", function () {
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
}

function renderAside() {
	renderAsideItems();
	renderProjectAsideList();
	renderAccToggle();
	asideSelectToggle();
}

export { renderAside };
