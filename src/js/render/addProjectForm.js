import { domCreate } from "../DOM";
import { setCurrentProjects } from "../state";
import { closeProjectForm } from "../form";
import { renderDashboard } from "./dashboard";

const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];

function addProjectSubmit() {
	const newProject = createProject({
		title: document.querySelector("#p-title").value,
		description: document.querySelector("#p-desc").value,
	});
	savedProjects.push(newProject);
	setCurrentProjects(savedProjects);
	renderDashboard();
	closeProjectForm();
}

function renderAddProjectForm() {
	//form content
	const formTitle = domCreate("h2", ["form_title"]);
	formTitle.textContent = "Add new task";
	const formSubtitle = domCreate("h2", ["form_subtitle"]);
	formSubtitle.textContent = "* required";
	const closeBtn = domCreate("span", ["material-icons", "close-form"], {
		id: "close-task-form",
	});
	closeBtn.textContent = " X ";
	//title
	const titleLabel = domCreate("label", [""], { for: "t-title" });
	titleLabel.textContent = "Title *";
	const titleInput = domCreate("input", ["form-control"], {
		id: "t-title",
		type: "text",
		name: "task-title",
		placeholder: "Title",
	});
	const titleErrMsg = domCreate("small", ["err-msg"]);
	titleErrMsg.textContent = " * Task title is required";
	titleInput.appendChild(titleErrMsg);
	titleLabel.appendChild(titleInput);
	//description
	const descLabel = domCreate("label", [""], { for: "t-desc" });
	descLabel.textContent = "Description";
	const descInput = domCreate("input", ["form-control"], {
		id: "t-desc",
		type: "textarea",
		name: "t-desc",
		placeholder: "Description",
	});
	descLabel.appendChild(descInput);
	//add/clear btns
	const projectFormBtns = domCreate("div", ["new-task-buttons"]);
	const addBtn = domCreate("button", ["btn"], {
		id: "add-task-btn",
	});
	addBtn.textContent = "Add";
	const clearBtn = domCreate("button", ["btn"], {
		id: "task-clear",
	});
	clearBtn.textContent = "Clear fields";
	projectFormBtns.append(addBtn, clearBtn);
	//form container
	const formContainer = domCreate("div", ["form-container"], {
		id: "new-project-form",
	});
	formContainer.append(
		formTitle,
		formSubtitle,
		closeBtn,
		titleLabel,
		descLabel,
		projectFormBtns
	);
	//wrapper
	const addProjectSection = domCreate("section", ["add_project_section"]);
	addProjectSection.appendChild(formContainer);
}

export { addProjectSubmit, renderAddProjectForm };
