var o = require("observable");

var todos = o([
		{text: "Take out the trash", date: "1-20-14"},
		{text: "Use attractor", date: "2-12-14"},
		{text: "Buy milk", date: "1-17-14"}
	]);

var repeat = require("../index")({
	todos: todos
});

var items = document.querySelectorAll("[data-repeat]");

for (var i = 0; i < items.length; i++) {
	repeat(items[i], "data-repeat");
}

document.querySelector("#new").addEventListener("submit", function (e) {
	e.preventDefault();
	var t = todos();
	if (e.target.children[0].value !== "") {
		t.push({text: e.target.children[0].value});
		e.target.children[0].value = "";
	}
	todos(t);
});
