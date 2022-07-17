import { projectData } from "./projectData";

function seedProjectData() {
	localStorage.clear();
	localStorage.setItem("projects", JSON.stringify(projectData));
}
export { seedProjectData };
