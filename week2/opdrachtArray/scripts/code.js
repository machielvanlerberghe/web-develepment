const setup = () => {
}
window.addEventListener("load", setup);
const familieleden = ['milan','michiel','gilles','yassin','machiel']
console.log(familieleden.length);
console.log(familieleden[0]);
console.log(familieleden[2]);
console.log(familieleden[4]);

const voegNaamToe = () =>{
    naam = prompt("Geef een extra naam.");
    familieleden.push(naam);
    console.log(familieleden);
}
voegNaamToe();
console.log(familieleden.join(", "));



