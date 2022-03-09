const setup = () => {
    let aantal =document.getElementsByTagName("input");
    let btw =document.getElementsByClassName("btw");
    let prijzen =document.getElementsByClassName("prijs");
    let element =  document.getElementsByTagName("button");
    element.addEventListener('click', bereken);
}
const bereken = () => {
    let aantal =document.getElementsByTagName("input");
    let btw =document.getElementsByClassName("btw");
    let prijzen =document.getElementsByClassName("prijs");
    let subtotaal = document.getElementsByClassName("prijs");
    let totaal = document.getElementsByClassName("prijs");
    for (let i = 0; i < subtotaal.length; i++) {
        subtotaal[i] = (prijzen[i].value * aantal[i].value) * (1 + (btw[i].value / 100));
        totaal[0] = 0;
        totaal[0] += subtotaal[i].value;
        console.log('1');
    }
}
window.addEventListener("load", setup);
