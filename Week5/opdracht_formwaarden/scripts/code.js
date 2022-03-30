const setup = () => {
    let submit = document.getElementById('submit');
    submit.addEventListener("click", setup2);
}

const setup2 = () => {

    let isRoker = false;
    let roker = document.getElementById("isroker").checked;

    let moedertaal = "";
    let moedertalen = document.getElementsByName("moeder");

    for(let i = 0; i < moedertalen.length;i++) {
        if(moedertalen[i].checked === true){
            moedertaal = moedertalen[i].value;
        }
    }

    if(roker === true) {
        isRoker = "is een roker";
    }
    else
    {
        isRoker = "is geen roker"
    }

    var getValue = document.getElementsByName('buurland')[0];

    let buurland = getValue.value;

    var select = document.getElementById('tabel');
    var option = select.options[select.selectedIndex].text;

    console.log(isRoker);

    if(moedertaal === "Nederlands") {
        console.log("moedertaal is nl");
    }
    else if( moedertaal === "Frans") {
        console.log("moedertaal is fr");
    }
    else if(moedertaal === "Engels") {
        console.log("moedertaal is en");
    }
    console.log("Favoriete buurland is " + buurland);
    console.log(option);



}

window.addEventListener("load",setup);