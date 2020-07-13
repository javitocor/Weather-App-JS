import {dom} from './dom';

const events = function () {
    
    async function getSearch() {
        try {
            const value = (document.getElementById('search').value).toLowerCase();
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=903507f17d707fecd352d38301efba77&units=metric`;
            const url2 = `http://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=903507f17d707fecd352d38301efba77&unitsimperial`;
            const response = await fetch(url, { mode: 'cors' });
            const response2 = await fetch(url2, { mode: 'cors' });
            const cityData = await response.json();
            const cityData2 = await response2.json();
            showFlow(cityData);
        } catch (error) {
            console.error('Error:', error);
        }
    };  

    function showFlow(data) {
        dom().fillCard(data);
        dom().imageSwitch(data);
        dom().show();
    };

    return { getSearch, showFlow, }
};

export { events }