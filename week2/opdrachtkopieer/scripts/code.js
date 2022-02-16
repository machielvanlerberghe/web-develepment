const setup = () => {
    let pElement=document.getElementById("txtOutput");
    const kopieer = () => {
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;
        pElement.innerHTML=tekst;

        console.log(tekst);
    }
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);


}
window.addEventListener("load", setup);