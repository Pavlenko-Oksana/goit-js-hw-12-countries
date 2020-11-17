import './styles.css';
import countryTemplate from './templates/country-card.hbs';
import countryListTemplate from './templates/country-list.hbs';
import API from './js/fetchCountries';
import getRefs from './js/get-refs';
import { defaults } from '@pnotify/core';

defaults.icons = 'material';
defaults.width = '360px';
defaults.minHeight = '40px';
defaults.delay = '1000';
defaults.closer = false;
defaults.sticker = false;
defaults.addClass = 'error';
defaults.autoOpen = false;
import { error } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/BrightTheme.css';

const debounce = require('lodash.debounce');


const refs = getRefs();
    
refs.serchForm.addEventListener("input", debounce(onSerchCountry, 500));

function onSerchCountry(evt) {
    evt.preventDefault();
    const inputValue = evt.target.value;
    
   API.fetchCountry(inputValue).then(renderCountryCard).catch(onFetchError);
 };


function renderCountryCard(country) {
    
        onFetchError(country);
    
    if (country.length > 1 && country.length < 10) {
        const marcup = countryListTemplate(country);
        
        refs.marcupContainer.innerHTML = marcup;
    };
    if (country.length === 1 ) { 
    const marcup = countryTemplate(country[0]);
        refs.marcupContainer.innerHTML = marcup;
        
}
};

function onFetchError(country) {
    
    if (country.length > 10) {
        error({
            text: `Too many matches found. Please enter a more specific querty!`,
            type: error,
        });
    };
    
}


// function pushError(err = `Too many matches found. Please enter a more specific querty`) { 
//     error({ text: `${err}`,});
      
// };