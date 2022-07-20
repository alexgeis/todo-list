import { domCreate } from "../DOM";
import { renderDashboard } from "./pages/dashboard";
import { renderHeader } from "./components/header";
import { renderAside } from "./components/aside";
import { renderAddTaskForm } from "./components/addTaskForm";
import { renderAddProjectForm } from "./components/addProjectForm";
import { renderProjectsAll } from "./pages/projectsAll";

const content = document.getElementById("content");
const header = renderHeader();
const aside = renderAside();
const mainSection = domCreate("div", "", { id: "main-section" });
const mainHeader = domCreate("div", "", { id: "main-header" });
mainSection.appendChild(mainHeader);
const mainDiv = domCreate("main", "", { id: "main" });
mainDiv.append(aside, mainSection);
const taskForm = renderAddTaskForm();
const projectForm = renderAddProjectForm();
content.append(header, mainDiv, taskForm, projectForm);

function replaceHelper(newSib) {
	if (mainHeader.nextSibling) {
		const nextSib = mainHeader.nextSibling;
		mainSection.replaceChild(newSib, nextSib);
	} else {
		mainSection.appendChild(newSib);
	}
}

function renderDashboardPage() {
	mainHeader.textContent = "DASHBOARD";
	const dashboard = renderDashboard();
	replaceHelper(dashboard);
}
function renderAllProjectsPage() {
	mainHeader.textContent = "PROJECTS";
	const allProjects = renderProjectsAll();
	replaceHelper(allProjects);
}
// function renderSearchPage() {
// 	mainHeader.textContent = "SEARCH RESULTS";
// 	// const allProjects = renderProjectsAll();
// 	// replaceHelper(allProjects);
// }

export { renderDashboardPage, renderAllProjectsPage };
