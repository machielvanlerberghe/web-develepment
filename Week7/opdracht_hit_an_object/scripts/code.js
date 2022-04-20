let timerId=0;
const setup = () => {
    window.addEventListener("resize", updateSize);
    updateSize();

    let button=document.getElementsByTagName("button")[0];
    button.addEventListener("click", startgame);
    let foto = document.getElementsByClassName("sprite")[0];
    foto.addEventListener("click", aantalhits)
}

const startgame = () => {
    timerId=setInterval(moveSprite, 1000);
    let button = document.getElementsByTagName("button")[0];
    button.style.display = 'none';
}

const aantalhits = () => {
    let hits = document.getElementsByTagName("span")[0];
    let sprite = document.getElementsByClassName("sprite")[0];
    if (sprite.getAttribute("src") == "images/0.png")
    {
        clearInterval(timerId);
        alert("GAME OVER");
    }
    else
    {
        hits.innerHTML ++;
        sprite.style.display = 'none';
    }

}

const updateSize = () => {

    let speelveld=document.getElementById("playField");
    speelveld.style.width=window.innerWidth+"px";
    speelveld.style.height=window.innerHeight+"px";
}

const moveSprite = () => {
    // Deze function wordt opgeroepen telkens de gebruiker
    // op het speelveld klikt.
    let sprite=document.getElementsByClassName("sprite")[0];
    sprite.style.display = 'block';
    let getal = Math.floor( Math.random() * 5);
    sprite.setAttribute("src", "images/"+ getal +".png")
    let speelveld=document.getElementById("playField");
    let maxLeft=speelveld.clientWidth - sprite.offsetWidth;
    let maxHeight=speelveld.clientHeight - sprite.offsetHeight;

    // verplaats de sprite
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    sprite.style.left=left+"px";
    sprite.style.top=top+"px";
}
window.addEventListener("load", setup);