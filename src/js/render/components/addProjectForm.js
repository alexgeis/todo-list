import { domCreate } from "../../DOM";
import { createProject } from "../../create";
import { setCurrentProjects } from "../../state";
import { clearProjectForm, closeProjectForm } from "../../form";
import { renderAllProjectsPage } from "../renderPages";
import { renderProjectTasks } from "../pages/projectTasks";

const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];

function addProjectSubmit() {
	//validation
	if (document.getElementById("p-title").value === "") {
		document.getElementById("project-title-err-msg").style.display = "block";
		return;
	} else if (document.getElementById("p-title").value !== "") {
		document.getElementById("project-title-err-msg").style.display = "none";
	}

	//project factory
	const newProject = createProject({
		title: document.querySelector("#p-title").value,
		description: document.querySelector("#p-desc").value,
	});
	savedProjects.push(newProject);
	// setCurrentProjects(savedProjects);
	localStorage.setItem("projects", JSON.stringify(savedProjects));
	closeProjectForm();
	let newIndex = savedProjects.length - 1;
	renderProjectTasks(newIndex);
}

function renderAddProjectForm() {
	//form content
	const formTitle = domCreate("h2", ["form_title"]);
	formTitle.textContent = "Add new project";
	const formSubtitle = domCreate("h2", ["form_subtitle"]);
	formSubtitle.textContent = "* required";
	const closeBtn = domCreate("span", ["material-icons", "close-form"], {
		id: "close-project-form",
	});
	closeBtn.textContent = " X ";
	closeBtn.addEventListener("click", closeProjectForm);
	//title
	const titleLabel = domCreate("label", "", { for: "p-title" });
	titleLabel.textContent = "Title *";
	const titleInput = domCreate("input", ["form-control"], {
		id: "p-title",
		type: "text",
		name: "p-title",
		placeholder: "Title",
	});
	const titleErrMsg = domCreate("small", ["err-msg"], {
		id: "project-title-err-msg",
	});
	titleErrMsg.textContent = " * Title is required";
	titleInput.appendChild(titleErrMsg);
	titleLabel.appendChild(titleInput);
	//description
	const descLabel = domCreate("label", "", { for: "p-desc" });
	descLabel.textContent = "Description";
	const descInput = domCreate("input", ["form-control"], {
		id: "p-desc",
		type: "textarea",
		name: "p-desc",
		placeholder: "Description",
	});
	descLabel.appendChild(descInput);
	//add/clear btns
	const projectFormBtns = domCreate("div", ["new-project-buttons"]);
	const addBtn = domCreate("button", ["btn"], {
		id: "add-project-btn",
	});
	addBtn.textContent = "Add";
	addBtn.addEventListener("click", addProjectSubmit);
	const clearBtn = domCreate("button", ["btn"], {
		id: "project-clear",
	});
	clearBtn.textContent = "Clear fields";
	clearBtn.addEventListener("click", clearProjectForm);
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
	return addProjectSection;
}

export { addProjectSubmit, renderAddProjectForm };
