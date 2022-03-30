const update = () => {
	let slider1 = document.getElementById("slider1");
	let slider2 = document.getElementById("slider2");
	let slider3 = document.getElementById("slider3");

	let value1 = slider1.value;
	let value2 = slider2.value;
	let value3 = slider3.value;

	let background = document.getElementsByClassName("swatch");
	background[0].style.backgroundColor = "rgb(" + value1 + ", " + value2 + ", " + value3 + ")";

	console.log(value1)
}

const setup = () => {
	slider1 = document.getElementById("slider1");
	slider2 = document.getElementById("slider2");
	slider3 = document.getElementById("slider3");
	slider1.addEventListener("change", update)
	slider2.addEventListener("change", update)
	slider3.addEventListener("change", update)
}
window.addEventListener("load", setup);