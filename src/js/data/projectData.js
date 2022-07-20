import { createTask, createProject } from "../create";

const project1task1 = createTask({
	title: "Mow the lawn",
	description:
		"get out there with the dang mower and mow that there lawn there",
	dueDate: "2022-07-29",
	priority: "1",
	notes: "Return mower to neighbor when finished",
});
const project1 = createProject({
	title: "Lawnmower",
	description: "landscaping project",
});
project1.addTasktoProject(project1task1);

const project2task1 = createTask({
	title: "Walk the dog",
	description: "leash, open door, walk around, come back",
	dueDate: "2022-08-12",
	priority: "2",
	notes: "avoid other dogs!",
});
const project2task2 = createTask({
	title: "Cook dinner",
	description: "chicken tikka masala, w/ jasmine rice, and samosas",
	dueDate: "2022-06-12",
	priority: "3",
	notes: "no peanuts!",
});
const project2task3 = createTask({
	title: "Read 'October' Book",
	description: "read at least 40 pages today",
	dueDate: "2022-08-12",
	priority: "5",
	notes: "",
});
const project2 = createProject({
	title: "Another Project",
	description: "miscellaneous tasks",
});
project2.addTasktoProject(project2task1, project2task2, project2task3);

const project3task1 = createTask({
	title: "Read 'October' Book",
	description: "read at least 40 pages today",
	dueDate: "2022-08-12",
	priority: "5",
	notes: "",
});
const project3task2 = createTask({
	title: "Buy roses",
	description: "2 dozen roses from Safeway",
	dueDate: "2022-08-12",
	priority: "5",
	notes: "red roses",
});
const project3 = createProject({
	title: "A Third Project for the List",
	description:
		"longer description for a more complicated task project breakdown",
});
project3.addTasktoProject(project3task1, project3task2);

let projectData = [];
projectData.push(project1, project2, project3);

export { projectData };
