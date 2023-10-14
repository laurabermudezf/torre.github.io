const searchContainer = document.querySelector('.search-input-box');
const inputSearch = searchContainer.querySelector('input');
const boxSuggestions = document.querySelector('.container-suggestions');
const searchLink = document.querySelector('a');

let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

inputSearch.onkeyup = e => {
    let userData = e.target.value;
    let emptyArray = [];

    if (userData) {
        emptyArray = suggestions.filter(data => {
            return data.toLowerCase().startsWith(userData.toLowerCase());
        });

        emptyArray = emptyArray.map(data => {
            return `<li>${data}</li>`;
        });

        searchContainer.classList.add('active');
        showSuggestions(emptyArray);

        let allList = boxSuggestions.querySelectorAll('li');

        allList.forEach(li => {
            li.addEventListener('click', function () {
                select(this.textContent); 
            });
        });
    } else {
        searchContainer.classList.add('active');
        showSearchHistory();;
    }
};

function select(userValue) { 
    inputSearch.value = userValue;

    
    switch (userValue) {
        case 'Andres Cajiao':
            searchLink.href = 'https://torre.ai/ac?r=OLa4fiXR';
            break;
        case 'Laura Vanessa Bermudez Florez':
            searchLink.href = 'https://torre.ai/lvbermudezf?r=op6wFJFC';
            break;
        case 'Alexa Marcela Ortiz':
            searchLink.href = 'https://torre.ai/alexamarcelaortizcardona?r=aobvvmP5';
            break;
        case 'Alexander Torrenegra' : 
            searchLink.href = 'https://torre.ai/torrenegra?r=Qa6A5E32';
            break;
        case  'Renan Paixoto Da Silva':
            searchLink.href = 'https://torre.ai/renanpeixotox?r=hl5l4hAP';
            break;
        case  'Luisa Jaramillo':
            searchLink.href = 'https://torre.ai/luisajaramillo?r=EJ44ZjaO';
            break;    
        case  'luisa Fernandia Mejia':
            searchLink.href = 'https://torre.ai/luisafernandamejiamejia?r=KMEwj9eN';
            break;
        case  'Juan Sebastian Mejia':
            searchLink.href = 'https://torre.ai/juansebastianmejiamejia?r=2I8zcwpk';
            break;
        case  'Daniel Felipe Valencia':
            searchLink.href = 'https://torre.ai/danielfelipevalencia?r=B5dhbjXh';
            break;
        case  'Nicolas Giraldo Montes':
            searchLink.href = 'https://torre.ai/nigiraldomo?r=j2PopJFd';
            break;

        default:
            searchLink.href = `https://torre.ai/search/${userValue}`;
    }

    searchContainer.classList.remove('active');

    
    searchHistory.push(userValue);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

function showSuggestions(list) {
    let listData;

    if (!list.length) {
        listData = `<li>${inputSearch.value}</li>`;
    } else {
        listData = list.join(' ');
    }
    boxSuggestions.innerHTML = listData;
}

function showSearchHistory() {
    let historyList = searchHistory.slice(-10).reverse().map(data => `<li>${data}</li>`).join(' ');
    boxSuggestions.innerHTML = historyList;
}

    



