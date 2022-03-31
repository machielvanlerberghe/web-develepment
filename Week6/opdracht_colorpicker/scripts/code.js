const setup = () => {

	let sliders = document.getElementsByClassName("slider");
	let saveButton = document.getElementById("save");

	saveButton.addEventListener("click", saveColor)

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", changeColorBySliders);
		sliders[i].addEventListener("input", changeColorBySliders);
	}

}

const changeColorBySliders = () => {
	let sliders = document.getElementsByClassName("slider");
	let redLabel = document.getElementById("redLabel");
	let blueLabel = document.getElementById("blueLabel");
	let greenLabel = document.getElementById("greenLabel");
	let colorDiv = document.getElementById("color");

	let red = sliders[0].value;
	let green = sliders[1].value;
	let blue = sliders[2].value;

	redLabel.textContent = `Red: ${red}`;
	greenLabel.textContent = `Green: ${green}`;
	blueLabel.textContent = `Blue: ${blue}`;

	colorDiv.style.backgroundColor = "rgb(" + red +', '+ green +', '+ blue + ')'
}

const saveColor = () => {
	let colorPickerDiv = document.getElementById("color");
	let swatch = document.createElement("div")
	let deleteButton = document.createElement("button");
	let savedSwatches = document.getElementById("savedSwatches");

	deleteButton.textContent = "X"
	deleteButton.addEventListener("click", deleteSwatch);

	let color = "";
	colorPickerDiv.style.backgroundColor == ""? color = "black" : color = colorPickerDiv.style.backgroundColor

	swatch.style.backgroundColor = color;
	swatch.style.width = "50px";
	swatch.style.height = "50px";
	swatch.style.borderRadius = "10px";

	swatch.addEventListener("click", changeColor);
	swatch.appendChild(deleteButton)
	savedSwatches.appendChild(swatch)
}

const deleteSwatch = (event) => {
	let swatch = event.target.parentElement;
	swatch.remove();
}

const changeColor = (event) => {
	let swatch = event.target;
	let colorPickerDiv = document.getElementById("color");
	colorPickerDiv.style.backgroundColor = swatch.style.backgroundColor;
}





window.addEventListener("load", setup);