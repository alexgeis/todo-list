import { domCreate } from "../../DOM";
import checkLogo from "../../../assets/checkbox-marked-circle.png";
import addIcon from "../../../assets/plus-circle-outline.png";
import addTaskIcon from "../../../assets/checkbox-marked-circle-plus-outline.png";
import addProjectIcon from "../../../assets/list-group-plus.png";
import gearIcon from "../../../assets/cog-outline.png";
import { seedProjectData } from "../../data/seed";
import { renderTaskForm, renderProjectForm } from "../../form";
import { renderDashboardPage } from "../renderPages";
import { renderSearch } from "../pages/search";

function renderAddMenu() {
	const addIconMenu = document.querySelector("#add-icon-menu");
	addIconMenu.classList.toggle("icon-menu-toggle");
}

function renderHeader() {
	////header LEFT
	function createHeaderLeft() {
		const siteLogo = domCreate("img", ["fake-class"], {
			src: checkLogo,
			alt: "checked circle logo",
		});
		const siteTitle = domCreate("div", "", { id: "header-site-title" });
		siteTitle.textContent = "TODO LIST";
		//add icon menu
		const addBtnIcon = domCreate("img", "", {
			id: "add-icon",
			src: addIcon,
			alt: "add button plus icon",
		});
		addBtnIcon.addEventListener("click", renderAddMenu);
		const addIconMenu = domCreate("div", "", { id: "add-icon-menu" });
		const addTaskImg = domCreate("img", "", {
			id: "add-task-form",
			src: addTaskIcon,
			alt: "add task plus icon",
		});

		addTaskImg.addEventListener("click", renderTaskForm);
		const addProjectImg = domCreate("img", "", {
			id: "add-project-form",
			src: addProjectIcon,
			alt: "add project plus icon",
		});
		addProjectImg.addEventListener("click", renderProjectForm);
		addIconMenu.append(addTaskImg, addProjectImg);
		const addBtnEl = domCreate("div", "", { id: "addBtn" });
		addBtnEl.append(addBtnIcon, addIconMenu);
		const headerLeft = domCreate("div", "", { id: "headerLeft" });
		headerLeft.append(siteLogo, siteTitle, addBtnEl);
		return headerLeft;
	}
	////header CENTER
	function createHeaderCenter() {
		const searchLabel = domCreate("label", "", { for: "site-search" });
		searchLabel.textContent = "Search: ";
		const searchInput = domCreate("input", "", {
			id: "site-search",
			type: "search",
			name: "q",
			placeholder: " type here...",
		});
		searchInput.addEventListener("keyup", (e) => {
			let currentVal = e.target.value; // "mow"
			renderSearch(currentVal);
			if (currentVal === "") renderDashboardPage();
		});
		// const searchBtn = domCreate("button", "");
		// searchBtn.textContent = "Search";

		const headerCenter = domCreate("div", "", { id: "headerCenter" });
		headerCenter.append(searchLabel, searchInput);
		return headerCenter;
	}
	////header RIGHT
	function createHeaderRight() {
		//seed data
		const seedDataBtn = domCreate("div", ["nav-item"], {
			id: "seed-projects-btn",
		});
		seedDataBtn.textContent = "SEED DATA";
		seedDataBtn.addEventListener("click", seedProjectData);
		//login
		const loginEl = domCreate("div", ["nav-item"], { id: "login" });
		loginEl.textContent = "LOGIN";
		//settings
		const settingsIcon = domCreate("img", "", {
			id: "settings gear icon",
			src: gearIcon,
			alt: "settings gear outline",
		});
		const settingsLink = domCreate("a", "", {
			href: "https://github.com/alexgeis/todo-list",
			target: "_blank",
		});
		settingsLink.appendChild(settingsIcon);
		const settingsEl = domCreate("div", ["nav-item"], { id: "settings" });
		settingsEl.appendChild(settingsLink);
		//mobile responsive code for settings links
		const smallDevice = window.matchMedia("(max-width: 778px)");
		smallDevice.addEventListener("change", handleSmallDeviceChange);
		function handleSmallDeviceChange(e) {
			if (e.matches) {
				settingsLink.removeChild(settingsIcon);
				settingsLink.textContent = "SETTINGS";
			}
		}
		const largeDevice = window.matchMedia("(min-width: 778px)");
		largeDevice.addEventListener("change", handleLargeDeviceChange);
		function handleLargeDeviceChange(e) {
			if (e.matches) {
				settingsLink.textContent = "";
				settingsLink.appendChild(settingsIcon);
			}
		}
		//
		const navMenuLI1 = domCreate("li", ["nav-item"]);
		navMenuLI1.appendChild(seedDataBtn);
		const navMenuLI2 = domCreate("li", ["nav-item"]);
		navMenuLI2.appendChild(loginEl);
		const navMenuLI3 = domCreate("li", ["nav-item"]);
		navMenuLI3.appendChild(settingsEl);
		const navMenuUL = domCreate("ul", ["nav-menu"]);
		navMenuUL.append(navMenuLI1, navMenuLI2, navMenuLI3);

		// //hamburger menu
		// const bar1 = domCreate("span", ["bar"]);
		// const bar2 = domCreate("span", ["bar"]);
		// const bar3 = domCreate("span", ["bar"]);
		// const hamburgerDiv = domCreate("div", ["hamburger"]);
		// hamburgerDiv.append(bar1, bar2, bar3);
		// hamburgerDiv.addEventListener("click", () => {
		// 	hamburgerDiv.classList.toggle("active");
		// 	navMenuUL.classList.toggle("active");
		// });
		//headerRight append
		const headerRight = domCreate("div", "", { id: "headerRight" });
		headerRight.appendChild(navMenuUL);
		return headerRight;
	}
	//hamburger menu
	const bar1 = domCreate("span", ["bar"]);
	const bar2 = domCreate("span", ["bar"]);
	const bar3 = domCreate("span", ["bar"]);
	const hamburgerDiv = domCreate("div", ["hamburger"]);
	hamburgerDiv.append(bar1, bar2, bar3);
	hamburgerDiv.addEventListener("click", () => {
		hamburgerDiv.classList.toggle("active");
		const navMenu = document.querySelector(".nav-menu");
		navMenu.classList.toggle("active");
	});
	//FULL HEADER APPEND
	const header = domCreate("header", "", { id: "header" });
	header.append(
		createHeaderLeft(),
		createHeaderCenter(),
		createHeaderRight(),
		hamburgerDiv
	);
	return header;
	// //CONTENT APPEND
	// const pageContainer = document.getElementById("content");
	// pageContainer.appendChild(header);
}

export { renderHeader };
