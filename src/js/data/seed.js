import { projectData } from "./projectData";

function seedProjectData() {
	localStorage.setItem("projects", JSON.stringify(projectData));
}
export { seedProjectData };
