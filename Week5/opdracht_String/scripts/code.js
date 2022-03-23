const setup = () => {
    let string1 = 'Machiel';
    let string2 = 'Machiel';
    let string3 = 'Mac'+'hiel';

    console.log(1);
    console.log(string1 == string2);
    console.log(string1 === string2);
    console.log(2);
    console.log(string1 == string2.slice(0));
    console.log(string1 === string2.slice(0));
    console.log(3);
    console.log(string1.slice(0) == string3);
    console.log(string1.slice(0) === string3);
}
window.addEventListener("load", setup);