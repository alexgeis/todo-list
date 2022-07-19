// DOM CREATE FUNCTION

//arg 1 = name of HTML element
// arg 2 = class names to add
// arg 3 = object - attributes to add -> attribute : value
function domCreate(arg1, arg2, arg3) {
	//// arg 1 = "string" - name of HTML element
	const element = document.createElement(arg1);
	//// arg 2 = ["array of strings"] - class names to add
	if (Array.isArray(arg2) && arg2.length > 0) {
		for (let i = 0; i < arg2.length; i++) {
			const className = arg2[i];
			element.classList.add(className);
		}
	}
	//// arg 3 = {object} - attribute name : value
	for (const attribute in arg3) {
		element.setAttribute(attribute, arg3[attribute]);
	}
	return element;
}

export { domCreate };
