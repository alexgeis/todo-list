const dash = document.querySelector("#dash-aside");
const asideNodeList = document.querySelectorAll(".aside-item");
const asideItems = Array.from(asideNodeList);
console.log(asideItems);
const acc = document.querySelector("#project-accordion-btn");
const accPanel = document.querySelector("#project-panel-display");

function asideSelectToggle() {
	acc.classList.toggle("aside-selected");
	if (accPanel.style.display === "block") {
		accPanel.style.display = "none";
	} else {
		accPanel.style.display = "block";
	}
}

export { asideSelectToggle };
