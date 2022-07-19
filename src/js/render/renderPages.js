import { renderDashboard } from "./pages/dashboard";
import { renderHeader } from "./components/header";
import { renderProjectsAll } from "./projectsAll";
import { renderProjectAsideList } from "./components/aside/projectsAside";
import { renderProjectTasks } from "./projectTasks";

// const content = document.getElementById("content")
// const header = renderHeader();

function renderDashboardPage() {
	const dashboard = renderDashboard();
	content.append(header, dashboard);
}
function renderAllProjectsPage() {
	const allProjects = renderProjectsAll();
	content.append(header, allProjects);
}
function renderProjectPage() {
	const projectTasks = renderProjectTasks();
	content.append(header, projectTasks);
}
// function renderSearchPage() {
// 	const search = renderSearch();
// 	content.append(header, search);
// }

export { renderDashboardPage, renderAllProjectsPage, renderProjectPage };
