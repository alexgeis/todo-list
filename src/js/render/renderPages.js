import { renderDashboard } from "./pages/dashboard";
import { renderHeader } from "./components/header";
import { renderProjectsAll } from "./pages/projectsAll";
// import { renderProjectTasks } from "./projectTasks";

const content = document.getElementById("content");
const header = renderHeader();

function renderDashboardPage() {
	content.innerHTML = "";
	const dashboard = renderDashboard();
	content.append(header, dashboard);
}
function renderAllProjectsPage() {
	content.innerHTML = "";
	const allProjects = renderProjectsAll();
	content.append(header, allProjects);
}
// function renderProjectPage() {
// content.innerHTML = "";
// 	const projectTasks = renderProjectTasks();
// 	content.append(header, projectTasks);
// }
// function renderSearchPage() {
// content.innerHTML = "";
// 	const search = renderSearch();
// 	content.append(header, search);
// }

export { renderDashboardPage, renderAllProjectsPage };
