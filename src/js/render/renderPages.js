import { domCreate } from "../DOM";
import { renderDashboard } from "./pages/dashboard";
import { renderHeader } from "./components/header";
import { renderAside } from "./components/aside";
import { renderProjectsAll } from "./pages/projectsAll";
// import { renderProjectTasks } from "./projectTasks";

const content = document.getElementById("content");
const header = renderHeader();
const aside = renderAside();
const mainSection = domCreate("div", "", { id: "main-section" });
const mainHeader = domCreate("div", "", { id: "main-header" });
mainSection.appendChild(mainHeader);
const mainDiv = domCreate("main", "", { id: "main" });
mainDiv.append(aside, mainSection);
content.append(header, mainDiv);

function renderDashboardPage() {
	mainHeader.textContent = "DASHBOARD";
	const dashboard = renderDashboard();
	if (mainHeader.nextSibling) {
		const nextSib = mainHeader.nextSibling;
		mainSection.replaceChild(dashboard, nextSib);
	} else {
		mainSection.appendChild(dashboard);
	}
}
function renderAllProjectsPage() {
	mainHeader.textContent = "PROJECTS";
	const allProjects = renderProjectsAll();
	if (mainHeader.nextSibling) {
		const nextSib = mainHeader.nextSibling;
		mainSection.replaceChild(allProjects, nextSib);
	} else {
		mainSection.appendChild(allProjects);
	}
}
function renderProjectPage() {
	content.innerHTML = "";
	const projectTasks = renderProjectTasks();
	content.append(header, projectTasks);
}
// function renderSearchPage() {
// content.innerHTML = "";
// 	const search = renderSearch();
// 	content.append(header, search);
// }

export { renderDashboardPage, renderAllProjectsPage };
