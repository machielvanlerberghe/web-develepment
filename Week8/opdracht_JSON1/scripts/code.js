const setup = () => {
    let student1 ={
        voornaam : "machiel",
        familienaam : "Vanlerberghe",
        geboorteDatum : new Date("2003‐09‐25"),
        adres : { // een object
            straat : "kouterweg 21",
            postcode : "8720",
            gemeente : "Markegem"
        },
        isIngeschreven : true,
        aantalAutos : 2
    }

    console.log(JSON.stringify(student1))
}
window.addEventListener("load", setup);