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
    let swatches = document.getElementsByClassName("swatch");
    console.log(swatches)
    localStorage.setItem("swatches[0]", red);
    let lijst = {};
    lijst.add(buildSwatchComponent(red, green, blue));
};


const restoreSwatches = () => {

};
