import {helpers} from './helpers';

const dom = function () {

    function show() {
        if(document.getElementById('main').style.display == 'block'){
            document.getElementById('main').style.display = 'none';
            document.getElementById('section').style.display = 'block';
        } else {
            document.getElementById('main').style.display = 'none';
            document.getElementById('section').style.display = 'block';
        }
    }

    function fillCard(data) {
        helpers().addInnerText('title', data['name']);
        helpers().addInnerText('temp', '<i class="fas fa-thermometer-half text-warning my-2"></i> Temp: ' + data['main']['temp'] + ' Celsius');
        helpers().addInnerText('feel', '<i class="fas fa-meteor text-warning my-2"></i> Feel: ' + data['main']['feels_like'] + ' Celsius');
        helpers().addInnerText('desc', '<i class="fas fa-cloud-sun-rain text-warning my-2"></i> ' + data['weather'][0]['main']);
        helpers().addInnerText('pressure', '<i class="fas fa-compress-arrows-alt text-warning my-2"></i> Pressure: ' + data['main']['pressure'] + ' hPa');
        helpers().addInnerText('humidity', '<i class="fas fa-percent text-warning my-2"></i> Humidity: ' + data['main']['humidity'] + '%');
        helpers().addInnerText('minTemp','<i class="fas fa-temperature-low text-warning my-2"></i> Min: ' + data['main']['temp_min'] + ' Celsius');
        helpers().addInnerText('maxTemp','<i class="fas fa-temperature-high text-warning my-2"></i> Max: ' + data['main']['temp_max'] + ' Celsius');
        helpers().addInnerText('wind','<i class="fas fa-wind text-warning my-2"></i> ' + data['wind']['speed'] + ' meter/sec');
        helpers().addInnerText('windDir','<i class="fas fa-compass text-warning my-2"></i> ' + data['wind']['deg'] + ' degrees');
        helpers().addInnerText('clouds','<i class="fas fa-cloud text-warning my-2"></i> Clouds: ' + data['clouds']['all'] + '%');
        helpers().addInnerText('sunrise','<i class="fas fa-sun text-warning my-2"></i> ' + `Sunrise: ${new Date((data.sys.sunrise + data.timezone) * 1000).toUTCString().slice(-11, -7)} AM`);
        helpers().addInnerText('sunset','<i class="fas fa-sun text-warning my-2"></i> ' + `Sunset: ${new Date((data.sys.sunset + data.timezone) * 1000).toUTCString().slice(-11, -7)} PM`);
    }

    function imageSwitch(data) {
        const code = data['weather'][0]['id'];
        switch (true) {
            case code >= 200 && code <= 232:
                document.getElementById('image').style.backgroundImage = "url('../src/images/lighting.jpg')";
                break;
            case code >= 300 && code <= 321:
                document.getElementById('image').style.backgroundImage = "url('../src/images/drizzle.jpg')";
                break;
            case code >= 500 && code <= 531:
                document.getElementById('image').style.backgroundImage = "url('../src/images/rain.jpg')";
                break;
            case code >= 600 && code <= 622:
                document.getElementById('image').style.backgroundImage = "url('../src/images/snow.jpg')";
                break;
            case code >= 701 && code <= 781:
                document.getElementById('image').style.backgroundImage = "url('../src/images/mist.jpg')";
                break;
            case code >= 801 && code <= 804:
                document.getElementById('image').style.backgroundImage = "url('../src/images/rainclouds.jpg')";
                break;
            case code==800:
                document.getElementById('image').style.backgroundImage = "url('../src/images/shiningsun.jpg')";
                break;
            default:
                document.getElementById('image').style.backgroundImage = "url('../src/images/bluesky.jpg')";
                break;
        }
    };



    return { show, fillCard, imageSwitch, }
};

export { dom }