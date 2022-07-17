import { domCreate } from "../DOM";

function renderAddTaskForm() {
	//get all tasks from all projects
	const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
	const totalProjectNames = [];
	for (let i = 0; i < savedProjects.length; i++) {
		const project = savedProjects[i];
		totalProjectNames.push(project.title);
	}

	//form container
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
	//date
	const dateLabel = domCreate("label", [""], { for: "t-date" });
	dateLabel.textContent = "Due Date";
	const dateInput = domCreate("input", ["form-control"], {
		id: "t-date",
		type: "date",
		name: "t-date",
	});
	dateLabel.appendChild(dateInput);
	//priority
	const priorityLabel = domCreate("label", [""], { for: "t-priority" });
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
	const notesLabel = domCreate("label", [""], { for: "t-notes" });
	notesLabel.textContent = "Notes";
	const notesInput = domCreate("input", ["form-control"], {
		id: "t-notes",
		type: "textarea",
		name: "t-notes",
		placeholder: "Notes",
	});
	notesLabel.appendChild(notesInput);

	//form container
	const formContainer = domCreate("div", ["form-container"], {
		id: "new-project-form",
	});
	formContainer.append(formTitle, formSubtitle, closeBtn);
	//wrapper
	const addTaskSection = domCreate("section", ["add_task_section"]);
	addTaskSection.appendChild(formContainer);

	//update main header
	const mainHeader = document.querySelector("#main-header");
	mainHeader.textContent = "DASHBOARD";
	//clear current tasks
	const taskContainer = document.querySelector("#main-content");
	taskContainer.innerHTML = "";
	//render currentTasks tasks
	for (let i = 0; i < currentTasks.length; i++) {
		const task = currentTasks[i];
		const taskCard = domCreate("div", ["task-card"], { "data-task-index": i });
		//inner task card div items
		//TITLE
		const taskTitle = domCreate("div", ["task-title"]);
		taskTitle.textContent = task.title;
		//DESCRIPTION
		const taskDesc = domCreate("div", ["task-description"]);
		taskDesc.textContent = task.description;
		//DUE DATE
		const taskDate = domCreate("div", ["task-date"]);
		taskDate.textContent = task.dueDate;
		//PRIORITY
		const taskPriority = domCreate("div", ["task-priority"]);
		taskPriority.textContent = task.priority;
		//NOTES
		const taskNotes = domCreate("div", ["task-notes"]);
		taskNotes.textContent = task.notes;
		//DELETE ICON
		const taskDeleteIcon = domCreate("img", ["task-delete"], {
			src: deleteIcon,
			alt: "trash can delete icon",
		});
		taskDeleteIcon.addEventListener("click", function () {
			taskDeleteIcon.parentElement.remove(taskCard);
			let index = taskDeleteIcon.parentElement.getAttribute("data-task-index");
			currentTasks.splice(index, 1);
			setCurrentTasks(currentTasks);
			localStorage.setItem("tasks", JSON.stringify(currentTasks));
			renderTasks();
		});
		//APPEND ELEMENTS
		taskCard.append(
			taskTitle,
			taskDesc,
			taskDate,
			taskPriority,
			taskNotes,
			taskDeleteIcon
		);
		taskContainer.appendChild(taskCard);
	}
}

export { renderAddTaskForm };
