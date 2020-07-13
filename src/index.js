import './style/style.css';


async function defaulta() {
  try {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=903507f17d707fecd352d38301efba77&units=metric', { mode: 'cors' });
    const catData = await response.json();
    console.log(catData);
  } catch (error) {
    console.error('Error:', error);
    window.alert(error);
  }
};
const submit = document.getElementById('submit');
async function getSearch() {
  try {
    const value = (document.getElementById('search').value).toLowerCase();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=903507f17d707fecd352d38301efba77&units=metric`;
    const response = await fetch(url, { mode: 'cors' });
    const cityData = await response.json();
    return cityData;
  } catch (error) {
    console.error('Error:', error);
  }
};
submit.addEventListener('click', getSearch);