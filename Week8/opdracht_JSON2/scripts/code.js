const setup = () => {
    let tekst = "{\"voornaam\":\"machiel\",\"familienaam\":\"Vanlerberghe\",\"geboorteDatum\":null,\"adres\":{\"straat\":\"kouterweg 21\",\"postcode\":\"8720\",\"gemeente\":\"Markegem\"},\"isIngeschreven\":true,\"aantalAutos\":2}";
    let student1 = JSON.parse(tekst);
    console.log(student1.voornaam)
}
window.addEventListener("load", setup);