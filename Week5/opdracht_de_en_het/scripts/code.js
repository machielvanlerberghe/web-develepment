const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let split = zin.split(' ');
    for (let i = 0;i < split.length; i++)
    {
        if (split[i] === 'de')
        {
            split[i] = 'het';
        }
    }
    console.log( split.join(' '));
}
window.addEventListener("load", setup);