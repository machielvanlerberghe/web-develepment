const setup = () => {
    let an = "De man van An geeft geen hand aan ambetante verwanten"
    let woorden = an.split(" ");
    let aantal = 0;
    let woord
    for(let i = 0; i < woorden.length; i++)
    {
        woord = woorden[i]
        if(woord.toLowerCase().indexOf('an') >= 0)
        {
            aantal ++;
        }
    }
    console.log(aantal);
}
window.addEventListener("load", setup);