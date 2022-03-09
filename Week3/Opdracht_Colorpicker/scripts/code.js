let colorDemos=document.getElementsByClassName("colorDemo");


const setup = () => {

	let sliders = document.getElementsByClassName("slider");
	let valuered = sliders[0].value.toString(16);
	let valuegreen = sliders[1].value.toString(16);
	let valueblue = sliders[2].value.toString(16);
	var color = "rgb(" + valuered +', '+ valuegreen +', '+ valueblue + ')';

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	sliders[0].addEventListener("change", updatered,changeBackground(color));
	sliders[0].addEventListener("input", updatered, changeBackground(color));
	sliders[1].addEventListener("change", updategreen, changeBackground(color));
	sliders[1].addEventListener("input", updategreen, changeBackground(color));
	sliders[2].addEventListener("change", updateblue, changeBackground(color));
	sliders[2].addEventListener("input", updateblue, changeBackground(color));

	// maak het blokje rood

}

const updatered = () => {
	let sliders = document.getElementsByClassName("slider");
	let value =sliders[0].value;
	document.getElementById("red").innerHTML = value;
	console.log("de waarde van de rode slider is momenteel : "+value);
	let valuered = sliders[0].value.toString(16);
	let valuegreen = sliders[1].value.toString(16);
	let valueblue = sliders[2].value.toString(16);
	var color = "rgb(" + valuered +', '+ valuegreen +', '+ valueblue + ')';
	changeBackground(color);
}
const updategreen = () => {
	let sliders = document.getElementsByClassName("slider");
	let value =sliders[1].value;
	document.getElementById("green").innerHTML = value;
	console.log("de waarde van de groene slider is momenteel : "+value);
	let valuered = sliders[0].value.toString(16);
	let valuegreen = sliders[1].value.toString(16);
	let valueblue = sliders[2].value.toString(16);
	var color = "rgb(" + valuered +', '+ valuegreen +', '+ valueblue + ')';
	changeBackground(color);
}
const updateblue = () => {
	let sliders = document.getElementsByClassName("slider");
	let value =sliders[2].value;
	document.getElementById("blue").innerHTML = value;
	console.log("de waarde van de  blauwe slider is momenteel : "+value);
	let valuered = sliders[0].value.toString(16);
	let valuegreen = sliders[1].value.toString(16);
	let valueblue = sliders[2].value.toString(16);
	var color = "rgb(" + valuered +', '+ valuegreen +', '+ valueblue + ')';
	changeBackground(color);
}
// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
function changeBackground(color) {

	colorDemos[0].style.background = color;
}


window.addEventListener("load", setup);