const setup = () => {
    let word = "onoorbaar";
    for (let i = 0; i+2 < word.length; i++){
        console.log(word[i] + word[i+1] + word[i+2]);
    }
}
window.addEventListener("load", setup);