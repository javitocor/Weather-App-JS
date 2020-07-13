const img = document.getElementById('img1');
const button = document.getElementById('cats');
button.addEventListener('click', async () => {
  try {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=903507f17d707fecd352d38301efba77&units=metric', { mode: 'cors' });
    const catData = await response.json();
    console.log(catData);
  } catch (error) {
    console.error('Error:', error);
    window.alert(error);
  }
});
const img2 = document.getElementById('img2');
const submit = document.getElementById('submit');
async function getSearch() {
  try {
    const value = (document.getElementById('search1').value).toLowerCase();
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=KbBYu75kqhK4Hi0t5K5m3bZ03XoyJ7f7&s=${value}`;
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    img2.src = data.data.images.original.url;
  } catch (error) {
    img2.src = './error.jpg';
    console.error('Error:', error);
  }
}
submit.addEventListener('click', getSearch);