const setup = () => {

    let Btn = document.getElementsByTagName("button");
    Btn[0].addEventListener("click", getinput);
}
const getinput = () => {
    let input = document.getElementsByTagName("input");
    maakMetSpaties(input)
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

const maakMetSpaties = (input) => {
    let result="";
    let newinput = input[0].value.replace(/\s/g, "")
    let letters = newinput.split("");
    for (let i = 0;i < letters.length; i++)
    {
        result += letters[i] + " ";
    }
    console.log(result);
    return result;
}
window.addEventListener("load", setup);