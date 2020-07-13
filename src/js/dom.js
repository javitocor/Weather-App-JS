import {helpers} from './helpers';

const dom = function () {

    function show() {
        if(document.getElementById('main').style.display = 'block'){
            document.getElementById('main').style.display = 'none';
            document.getElementById('section').style.display = 'block';
        } else {
            document.getElementById('main').style.display = 'block';
            document.getElementById('section').style.display = 'none';
        }
    }

    function fillCard(data) {
        helpers.addInnerText('temp', data['main']['temp'] + ' Celsius');
        helpers.addInnerText('feel', data['main']['feels_like'] + ' Celsius');
        helpers.addInnerText('desc', data['weather']['main']);
        helpers.addInnerText('pressure', data['main']['pressure'] + ' hPa');
        helpers.addInnerText('humidity', data['main']['humidity'] + '%');
        helpers.addInnerText('minTemp', data['main']['temp_min'] + ' Celsius');
        helpers.addInnerText('maxTemp', data['main']['temp_max'] + ' Celsius');
        helpers.addInnerText('wind', data['wind']['speed'] + ' meter/sec');
        helpers.addInnerText('windDir', data['wind']['deg'] + ' degrees');
        helpers.addInnerText('clouds', data['clouds']['all'] + '%');
    }



    return { show, fillCard, }
};

export { dom }