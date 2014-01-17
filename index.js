// normalize an array or an observable
function normalize(a) {
	return (typeof a === "function")?a():a;
}


function compileNode(node, item) {
	var elements = node.querySelectorAll("[data-bind]");

	for (var i = 0; i < elements.length; i++) {
		elements[i].innerHTML = item[elements[i].getAttribute("data-bind")] || item;
	}


	return node;
}

function repeat(map) {
	return function (el, attrName) {
		var attr = el.getAttribute(attrName);
		var tmpl = el.cloneNode(true);
		var root = document.createElement("div");
		el.parentElement.insertBefore(root, el);
		el.parentElement.removeChild(el);

		function onchange() {
			root.innerHTML = ""; // clear element
			normalize(map[attr]).forEach(function (item) {
				var n = tmpl.cloneNode(true);
				root.appendChild(compileNode(n, item));
			});
		}

		if (typeof map[attr] === "function") {
			// its an observable
			map[attr](onchange);
		}
	}
};


module.exports = repeat;