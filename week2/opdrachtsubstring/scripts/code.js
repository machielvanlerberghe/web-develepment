const setup = () => {
    let btn = document.getElementById("btnsubstring");
    btn.addEventListener("click", substring);

}

const substring = (text, start, end) => {
    text = document.getElementById("tekst").value;
    start = document.getElementById("getal1").value;
    end = document.getElementById("getal2").value;
    document.getElementById("txtOutput").innerHTML = text.substring(start, end);
}
window.addEventListener("load", setup);