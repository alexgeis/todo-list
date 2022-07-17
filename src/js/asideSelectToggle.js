const dash = document.querySelector("#dash-aside");
const asideNodeList = document.querySelectorAll(".aside-item");
const asideItems = Array.from(asideNodeList);

// for (let i = 0; i < asideItems.length; i++) {
// 	const item = asideItems[i];
// 	item.classList.toggle("aside-selected");

// }

function asideSelectToggle() {
	acc.classList.toggle("aside-selected");
	if (accPanel.style.display === "block") {
		accPanel.style.display = "none";
	} else {
		accPanel.style.display = "block";
	}
}

export { asideSelectToggle };
