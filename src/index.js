import './styles.css';
import countryTemplate from './templates/country-card.hbs';

console.log(countryTemplate);

const refs = {
    marcupContainer: document.querySelector('.js-card-container'),
}



fetch(`https://restcountries.eu/rest/v2/name/ukraine`).then(response => {
    return response.json();
}).then(country => {
    console.log(country[0]);
    const marcup = countryTemplate(country[0]);
    console.log(marcup);
    refs.marcupContainer.innerHTML = marcup;
    
}).catch(error => {
    console.log(error)
});
