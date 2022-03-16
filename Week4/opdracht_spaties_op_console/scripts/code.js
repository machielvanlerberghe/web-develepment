const setup = () => {
    let Btn = document.getElementsByTagName("button");
    Btn[0].addEventListener("click", print);
}

const print = () => {
    let word = "";
    let input = document.getElementsByTagName("input");
    let newinput = input[0].value.replace(/\s/g, "")
    let letters = newinput.split("");
    for (let i = 0;i < letters.length; i++)
    {
        word += letters[i] + " ";
    }
    console.log(word);

}
window.addEventListener("load", setup);