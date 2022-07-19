import { domCreate } from "../../DOM";
import checkLogo from "../../../assets/checkbox-marked-circle.png";
import addIcon from "../../../assets/plus-circle-outline.png";
import addTaskIcon from "../../../assets/checkbox-marked-circle-plus-outline.png";
import addProjectIcon from "../../../assets/list-group-plus.png";
import gearIcon from "../../../assets/cog-outline.png";
import { renderTaskForm, renderProjectForm } from "../../form";

function renderAddMenu() {
	const addIconMenu = document.querySelector("#add-icon-menu");
	addIconMenu.classList.toggle("icon-menu-toggle");
}

function renderHeader() {
	////header LEFT
	const siteLogo = domCreate("img", ["fake-class"], {
		src: checkLogo,
		alt: "checked circle logo",
	});
	const siteTitle = domCreate("div", [""], { id: "header-site-title" });
	//seed data
	const seedDataBtn = domCreate("button", [""], { id: "seed-projects-btn" });
	const headerLeft = domCreate("div", [""], { id: "headerLeft" });
	headerLeft.append(siteLogo, siteTitle, seedDataBtn);
	////header CENTER
	const searchLabel = domCreate("label", [""], { for: "site-search" });
	searchLabel.textContent = "Search the site: ";
	const searchInput = domCreate("input", [""], {
		id: "site-search",
		type: "search",
		name: "q",
	});
	const searchBtn = domCreate("button", [""]);
	searchBtn.textContent = "Search";
	const headerCenter = domCreate("div", [""], { id: "headerCenter" });
	headerCenter.append(searchLabel, searchInput, searchBtn);
	////header RIGHT
	//add icon menu
	const addBtnIcon = domCreate("img", [""], {
		id: "add-icon",
		src: addIcon,
		alt: "add button plus icon",
	});
	addBtnIcon.addEventListener("click", renderAddMenu);
	const addIconMenu = domCreate("div", [""], { id: "add-icon-menu" });
	const addTaskImg = domCreate("img", [""], {
		id: "add-task-form",
		src: addTaskIcon,
		alt: "add task plus icon",
	});
	addTaskImg.addEventListener("click", renderTaskForm);
	const addProjectImg = domCreate("img", [""], {
		id: "add-project-form",
		src: addProjectIcon,
		alt: "add project plus icon",
	});
	addProjectImg.addEventListener("click", renderProjectForm);
	addIconMenu.append(addTaskImg, addProjectImg);
	const addBtnEl = domCreate("div", [""], { id: "addBtn" });
	addBtnEl.append(addBtnIcon, addIconMenu);
	//login
	const loginEl = domCreate("div", [""], { id: "login" });
	loginEl.textContent = "LOGIN";
	//settings
	const settingsIcon = domCreate("img", [""], {
		id: "settings gear icon",
		src: gearIcon,
		alt: "settings gear outline",
	});
	const settingsLink = domCreate("a", [""], {
		href: "https://github.com/alexgeis/todo-list",
		target: "_blank",
	});
	settingsLink.appendChild(settingsIcon);
	const settingsEl = domCreate("div", [""], { id: "settings" });
	settingsEl.appendChild(settingsLink);
	const headerRight = domCreate("div", [""], { id: "headerRight" });
	headerRight.append(addBtnEl, loginEl, settingsEl);
	//FULL HEADER APPEND
	const header = domCreate("header", [""], { id: "header" });
	header.append(headerLeft, headerCenter, headerRight);
	//CONTENT APPEND
	const pageContainer = document.getElementById("content");
	pageContainer.appendChild(header);
}

export { renderAddMenu, renderHeader };
