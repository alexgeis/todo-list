import { projectData } from "./projectData";
import { renderDashboardPage } from "../render/renderPages";

function seedProjectData() {
	localStorage.clear();
	localStorage.setItem("projects", JSON.stringify(projectData));
	renderDashboardPage();
}
export { seedProjectData };
