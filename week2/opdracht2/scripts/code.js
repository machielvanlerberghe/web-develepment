const setup = () => {
    console.log(document.getElementById("abc"));
    console.log(document.getElementsByClassName("xyz"));
    console.log(document.getElementsByTagName("img"));
}
window.addEventListener("load", setup);