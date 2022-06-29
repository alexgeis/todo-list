import "./css/style.scss";
// import { } from "./js/";

const task1 = document.querySelector("#task-1");
const task2 = document.querySelector("#task-2");

task1.addEventListener("click", function (event) {
	console.log(event);
});
task2.addEventListener("click", function (event) {
	console.log(event);
	console.log(event.target.id);
	let id1 = event.target.id;
	let id2 = id1.console.log();
	// squaresGrid = document.getElementsByClassName("grid-squares");
	// squaresGrid[0].style.gridTemplateColumns = "1000px";
});

const mainContentEl = document.querySelector("#main-content");

//add to DOM function
function domCreate(arg1, arg2, arg3) {
	//arg 1 = name of HTML element
	const element = document.createElement(arg1);
	// arg 2 = class names to add
	for (let i = 0; i < arg2.length; i++) {
		const className = arg2[i];
		element.classList.add(className);
		element.dataset.index = i;
	}
	// arg 3 = object - attribute : value
	for (const attribute in arg3) {
		element.setAttribute(attribute, arg3[attribute]);
	}
	return mainContentEl.appendChild(element);
	// return element;
}
domCreate("div", ["task-card"], { "data-attribute-test": "heybuddy!" });
// console.log(
// 	domCreate("div", ["task-card"], { "data-attribute-test": "heybuddy!" })
// );
// taskCardsNodeList = document.getElementsByClassName("task-card");
// for (let i = 0; i < taskCardsNodeList.length; i++) {
// 	taskCardsNodeList[i].style.gridColumn = "1/3";
// }

// document.addEventListener("click", function (event) {
// 	console.log(event);
// });
