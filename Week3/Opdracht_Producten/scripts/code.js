let aantal =document.getElementsByTagName("input");
let btw =document.getElementsByClassName("btw");
let prijzen =document.getElementsByClassName("prijs");
let subtotaal = document.getElementsByClassName("subtotaal");
let totaal = document.getElementsByClassName("totaal");

const setup = () => {
    let element =  document.getElementsByTagName("button");
    element.addEventListener('click', Bereken);
}

const Bereken = () => {
    for (let i = 0; i < subtotaal.length; i++) {
        console.log('1');
        subtotaal[i] = (prijzen[i].value * aantal[i].value) * (1 + (btw[i].value / 100));
        totaal[0] = 0;
        totaal[0] += subtotaal[i].value;
    }
}

window.addEventListener("load", setup);
