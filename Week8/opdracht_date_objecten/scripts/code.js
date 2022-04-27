const setup = () => {
    let dag = 24*60*60*1000;
    let verjaardag = new Date(2003, 8, 25);
    let datum = new Date();
    let verschil = Math.round((datum.getTime() - verjaardag.getTime())/(dag));
    console.log(verschil)
}
window.addEventListener("load", setup)