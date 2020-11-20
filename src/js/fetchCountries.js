// const { defaults } = require("@pnotify/core");

function fetchCountry(countryName) {
    return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`).then(response => {
    return response.json();
})
};

// function handleError(response) {
//     if (!response.ok) {
//         throw Error(response.statusText);    
//     }
//     return response;
// }

export default { fetchCountry };