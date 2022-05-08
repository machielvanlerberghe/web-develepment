const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;

    let green = document.getElementById("sldGreen").value;

    let blue = document.getElementById("sldBlue").value;

    localStorage.setItem("red", red);
    localStorage.setItem("green", green);
    localStorage.setItem("blue", blue);
};

const restoreSliderValues = () => {
    document.getElementById("sldRed").value = localStorage.getItem("red");

    document.getElementById("sldGreen").value = localStorage.getItem("green");

    document.getElementById("sldBlue").value = localStorage.getItem("blue");
};

const storeSwatches = () => {
    let swatches = document.getElementsByClassName("swatch")
    kleuren = [];
    for (let i = 0; i < swatches.length; i++) {
        RGB ={
            rood: swatches[i].getAttribute('data-red'),
            groen: swatches[i].getAttribute('data-green'),
            blauw: swatches[i].getAttribute('data-blue')
        }
        kleuren.push(RGB);
    }
    localStorage.setItem('kleurenStorage', JSON.stringify(kleuren));
    console.log(localStorage.getItem('kleurenStorage'))
};


const restoreSwatches = () => {
    if(localStorage.getItem('kleurenStorage') !== null){
        kleuren = JSON.parse(localStorage.getItem('kleurenStorage'))
        for (let i = 0; i < kleuren.length; i++) {
            addSwatchComponent(kleuren[i].rood, kleuren[i].groen,kleuren[i].blauw)
        }
    }
};
