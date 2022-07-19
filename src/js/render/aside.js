import { domCreate } from "../DOM";

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

export { renderAside };
