let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    let invalid = document.getElementsByClassName("invalid");
    if(invalid.length === 0) {
        let option = document.createElement("option")
        let persoon = {
            voornaam: document.getElementById("txtVoornaam").value,
            familienaam: document.getElementById("txtFamilienaam").value,
            geboortedatum: document.getElementById("txtGeboorteDatum").value,
            email: document.getElementById("txtEmail").value,
            kinderen: document.getElementById("txtAantalKinderen").value
        }
        let lijst = document.getElementById("lstPersonen");
        let index = lijst.selectedIndex;

        if(index != -1)
        {
            option.value = persoon.voornaam + persoon.familienaam
            option.innerHTML = persoon.voornaam + " " + persoon.familienaam
            let list = document.getElementById("lstPersonen")
            list.options[index] = option;
            personen[index] = persoon;
        }
        else{
            option.value = persoon.voornaam + persoon.familienaam
            option.innerHTML = persoon.voornaam + " " + persoon.familienaam
            let list = document.getElementById("lstPersonen")
            list.appendChild(option);
            personen.push(persoon);
        }

    }
    // indien ok, bewaar de ingegeven data.
    // een nieuw aangemaakte persoon voegen we toe
    // een bestaande persoon in de lijst passen we aan
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    let voornaam = document.getElementById("txtVoornaam");
    let naam = document.getElementById("txtFamilienaam");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let aantalkinderen = document.getElementById("txtAantalKinderen");
    voornaam.value = "";
    naam.value = "";
    geboortedatum.value = "";
    email.value = "";
    aantalkinderen.value = "";
    console.log("Klik op de knop nieuw");
    let lijst = document.getElementById("lstPersonen")
    lijst.selectedIndex = -1;
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

const selecteerPersoon = () => {
    let voornaam = document.getElementById("txtVoornaam");
    let naam = document.getElementById("txtFamilienaam");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let aantalkinderen = document.getElementById("txtAantalKinderen");
    let lijst = document.getElementById("lstPersonen");
    let index = lijst.selectedIndex;
    voornaam.value = personen[index].voornaam;
    naam.value = personen[index].familienaam;
    geboortedatum.value = personen[index].geboortedatum;
    email.value = personen[index].email;
    aantalkinderen.value = personen[index].kinderen;
}
// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lijst = document.getElementById("lstPersonen");
    lijst.addEventListener("click", selecteerPersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);