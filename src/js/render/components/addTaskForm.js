import { domCreate } from "../../DOM";
import { closeTaskForm, clearTaskForm } from "../../form";
import { renderDashboard } from "../pages/dashboard";

const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];

function addTaskSubmit() {
	//validation
	if (document.querySelector("#t-title").value === "") {
		document.getElementById("task-title-err-msg").style.display = "block";
		return;
	}
	if (document.querySelector("#t-priority").value === "") {
		document.getElementById("task-priority-err-msg").style.display = "block";
		return;
	}
	const projectAssociation = document.querySelector("#project-task-add");
	if (projectAssociation.value === "null") {
		document.querySelector("#task-project-err-msg").style.display = "block";
		return;
	}

	//task factory
	const newTask = createTask({
		title: document.querySelector("#t-title").value,
		description: document.querySelector("#t-desc").value,
		dueDate: document.querySelector("#t-date").value,
		priority: document.querySelector("#t-priority").value,
		notes: document.querySelector("#t-notes").value,
	});
	for (const project in savedProjects) {
		const title = savedProjects[project].title;

		if (document.querySelector("#project-task-add").value === title) {
			savedProjects[project].addTasktoProject(newTask);
			console.log(savedProjects[project].tasks);
		}
	}
	// setCurrentTasks(currentTasks);
	localStorage.setItem("projects", JSON.stringify(savedProjects));
	renderDashboard();
	closeTaskForm();
}

function renderAddTaskForm() {
	//form content
	const formTitle = domCreate("h2", ["form_title"]);
	formTitle.textContent = "Add new task";
	const formSubtitle = domCreate("h2", ["form_subtitle"]);
	formSubtitle.textContent = "* required";
	const closeBtn = domCreate("span", ["material-icons", "close-form"], {
		id: "close-task-form",
	});
	closeBtn.textContent = " X ";
	closeBtn.addEventListener("click", closeTaskForm);
	//title
	const titleLabel = domCreate("label", "", { for: "t-title" });
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
	const descLabel = domCreate("label", "", { for: "t-desc" });
	descLabel.textContent = "Description";
	const descInput = domCreate("input", ["form-control"], {
		id: "t-desc",
		type: "textarea",
		name: "t-desc",
		placeholder: "Description",
	});
	descLabel.appendChild(descInput);
	//date
	const dateLabel = domCreate("label", "", { for: "t-date" });
	dateLabel.textContent = "Due Date";
	const dateInput = domCreate("input", ["form-control"], {
		id: "t-date",
		type: "date",
		name: "t-date",
	});
	dateLabel.appendChild(dateInput);
	//priority
	const priorityLabel = domCreate("label", "", { for: "t-priority" });
	priorityLabel.textContent = "Priority (5 is highest) *";
	const priorityInput = domCreate("input", ["form-control"], {
		id: "t-priority",
		type: "number",
		name: "t-priority",
		placeholder: "3",
		min: "1",
		max: "5",
	});
	const priorityErrMsg = domCreate("small", ["err-msg"]);
	priorityErrMsg.textContent = " * Priority is required";
	priorityInput.appendChild(priorityErrMsg);
	priorityLabel.appendChild(priorityInput);
	//notes
	const notesLabel = domCreate("label", "", { for: "t-notes" });
	notesLabel.textContent = "Notes";
	const notesInput = domCreate("input", ["form-control"], {
		id: "t-notes",
		type: "textarea",
		name: "t-notes",
		placeholder: "Notes",
	});
	notesLabel.appendChild(notesInput);
	//project list
	const projectListLabel = domCreate("label", "", {
		for: "project-task-add",
	});
	projectListLabel.textContent = "Add to Existing Project";
	const projectListSelect = domCreate("select", ["form-control"], {
		id: "project-task-add",
		name: "project-task-add",
	});
	const projectListOptionDEFAULT = domCreate("option", "", {
		value: "null",
		disabled: "",
		selected: "",
	});
	projectListOptionDEFAULT.textContent = "--Select existing project--";
	projectListSelect.appendChild(projectListOptionDEFAULT);
	////  get names of all projects
	const totalProjectNames = [];
	for (let i = 0; i < savedProjects.length; i++) {
		const project = savedProjects[i];
		totalProjectNames.push(project.title);
	}
	for (let i = 0; i < totalProjectNames.length; i++) {
		const name = totalProjectNames[i];
		const projectListOption = domCreate("option", "", {
			value: name,
		});
		projectListOption.textContent = name;
		projectListSelect.appendChild(projectListOption);
	}
	const projectListErrMsg = domCreate("small", ["err-msg"]);
	projectListErrMsg.textContent = " * Project association is required";
	projectListLabel.append(projectListSelect, projectListErrMsg);
	//add/clear btns
	const taskFormBtns = domCreate("div", ["new-task-buttons"]);
	const addBtn = domCreate("button", ["btn"], {
		id: "add-task-btn",
	});
	addBtn.textContent = "Add";
	addBtn.addEventListener("click", addTaskSubmit);
	const clearBtn = domCreate("button", ["btn"], {
		id: "task-clear",
	});
	clearBtn.textContent = "Clear fields";
	clearBtn.addEventListener("click", clearTaskForm);
	taskFormBtns.append(addBtn, clearBtn);
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
		dateLabel,
		priorityLabel,
		notesLabel,
		projectListLabel,
		taskFormBtns
	);
	//wrapper
	const addTaskSection = domCreate("section", ["add_task_section"]);
	addTaskSection.appendChild(formContainer);
	return addTaskSection;
}

export { addTaskSubmit, renderAddTaskForm };
