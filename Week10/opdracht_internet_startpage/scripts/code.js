let storageHistory = [];
const setup = () => {
    let go = document.getElementsByClassName('go')[0]
    go.addEventListener('click', search)
    let searchbar = document.getElementsByClassName("searchBar")[0]
    searchbar.addEventListener('keydown', log)
    reloadHistory()
}
const log = (e) =>{
    if(e.key === "Enter"){
        search();
    }
}
const search = () =>{
    let searchBar = document.getElementsByClassName('searchBar')[0]
    let input = searchBar.value.split(" ")
    let commando = input[0]
    let zoekTerm = ''
    let kleur = '';
    let url ='';
    for (let woord = 1; woord < input.length; woord++) {
        if(woord === 1){
            zoekTerm += input[woord];
        } else {
            zoekTerm += ' ' + input[woord];
        }
    }
    if(commando.includes("/") && commando.length === 2){
        switch (commando.substr(1,2)) {
            case 'g':
                commando = 'Google'
                kleur = 'lightblue'
                url = 'https://google.com/search?q=' + zoekTerm
                window.open( url, '_blank').focus()
                break;
            case 'y':
                commando = 'Youtube'
                kleur = 'red'
                url = 'https://youtube.com/results?search_query='+ zoekTerm
                window.open( url, '_blank').focus()
                break;
            case 't':
                commando = 'Twitter'
                kleur = 'blue'
                url = 'https://twitter.com/hashtag/' + zoekTerm
                window.open(url, '_blank').focus()
                break;
            case 'i':
                commando = 'Instagram'
                kleur = 'purple'
                url = 'https://www.instagram.com/explore/tags/' + zoekTerm + '/'
                window.open(url, '_blank').focus()
                break;
        }
        let h ={
            title: commando,
            text: zoekTerm,
            url: url,
            kleur: kleur
        }
        storageHistory.unshift(h)
        localStorage.setItem('storageHistory', JSON.stringify(storageHistory))
        vulHistoryAan()
    }else{
        if(commando.length === 2){
            alert('Unknown command prefix')
        } else {
            alert('Invalid command')
        }
    }
}
const vulHistoryAan = () =>{
    document.getElementsByClassName('searchBar')[0].value = '';
    if(storageHistory.length === 7){
        document.getElementsByClassName('history')[0].removeChild(document.getElementsByClassName('history')[0].children[5])
        storageHistory.pop()
        console.log(storageHistory)
        localStorage.setItem('storageHistory', JSON.stringify(storageHistory))
    }
    reloadHistory();
}
const reloadHistory = () =>{
    if(JSON.parse(localStorage.getItem('storageHistory')) != null){
        storageHistory = JSON.parse(localStorage.getItem('storageHistory'));
    }
    let historyDiv =document.getElementsByClassName('history')[0];
    historyDiv.innerHTML = '';
    for (let div = 0; div < storageHistory.length; div++) {
        historyDiv.innerHTML +=
            `
                <div class="card" style="width: 18rem; background-color: ${storageHistory[div].kleur}">
                    <h2 class="card-title">${storageHistory[div].title}</h2>
                    <p class="card-text">${storageHistory[div].text}</p>
                    <a type="button"href="${storageHistory[div].url}" target="_blank">Go!</a>
                </div>
        `
    }
}
window.addEventListener("load", setup);