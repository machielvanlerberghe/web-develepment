const setup = () => {
    let antwoorden = "";
    const array = [];
    let values = document.getElementById("gemeenten");

    while(antwoorden.toLowerCase() != 'stop') {
        antwoorden = window.prompt("Gemeente:");
        if (antwoorden != 'stop')
        {
            array.push(antwoorden);
            array.rem
        }


    }
    array.sort();

    var lijst = document.getElementById("TABEL");

    for(let i = 0; i < array.length;i++) {
        var danku = array[i];
        var maken = document.createElement('option');
        maken.textContent = danku;
        maken.value = danku;
        lijst.appendChild(maken);
    }
}
window.addEventListener("load",setup);