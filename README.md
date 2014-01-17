# attr-repeat

## Description
Repeat an element for each item in an [observable](https://github.com/dominictarr/observable) array.

## Installation
```
npm install attr-repeat
```

## Usage

Without [attractor](https://github.com/substack/attractor)
```javascript
var o 		= require("observable");
var repeat 	= require("attr-repeat")({
	items: o([
		{name: "Milk", importance: 5},
		{name: "Soda", importance: 1},
		{name: "Pizza", importance: 3}
	])
});


var items = document.querySelector("[data-repeat]");

for (var i = 0; i < item.length; i++) {
	repeat(items[i], "data-repeat");
}
```

With attractor:
```javascript
var attractor 	= require("attractor");
var o 			= require("observable");
var repeat 		= require("attr-repeat")({
	items: o([
		{name: "Milk", importance: 5},
		{name: "Soda", importance: 1},
		{name: "Pizza", importance: 3}
	])
});

var attr = attractor({repeat: repeat});
attr.scan(document);

```

In your HTML:
```HTML
<!doctype html>
<html>
<body>
	<ul>
		<li repeat="items">
			<p data-bind="name"></p>
			<div class="badge" data-bind="importance"></div>
		</li>
	</ul>
</body>
</html>
```