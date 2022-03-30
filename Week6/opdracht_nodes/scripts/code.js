const setup = () => {
    let tekst = document.querySelectorAll("p")[0];
    let nieuw = document.createTextNode("Good job!");
    tekst.firstChild.remove();
    tekst.appendChild(nieuw);
}
window.addEventListener('load', setup);