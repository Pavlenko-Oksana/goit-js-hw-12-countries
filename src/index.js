import './styles.css';

fetch(`https://restcountries.eu/rest/v2/name/ukraine`).then(response => {
    return response.json();
}).then(country => {
    console.log(country)
});
