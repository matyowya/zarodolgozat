import { apiKey } from "./apiKey.js";
import { getData } from "./getData.js";
 
const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'afe1a3577bmsha8113fdb0f8344cp1c29d7jsn0ae6fcc5fce0',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
};
 
const quoteContainer = document.getElementById('quote-container');
const refreshButton = document.getElementById('refresh');
 
// Első idézet megjelenítése az oldal betöltésekor
refreshQuotes();
 
refreshButton.addEventListener('click', refreshQuotes);
 
function refreshQuotes() {
    //Frissítse az oldalt egy új idézettel
    getData(url, options, renderFc);
}
 
function renderFc(data) {
    const quoteText = data.content;
    const author = data.originator.name;
 
    //Törölje a meglévő idézeteket
    quoteContainer.innerHTML = '';
 
    const quoteBox = document.createElement('div');
    quoteBox.classList.add('quote-box');
 
    const quoteElement = document.createElement('p');
    quoteElement.textContent = `"${quoteText}" - ${author}`;
 
    quoteBox.appendChild(quoteElement);
    quoteContainer.appendChild(quoteBox);
}