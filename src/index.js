import { dom } from './js/dom';
import { events } from './js/events';
import './style/style.css';

const event = events();

const submit = document.getElementById('submit');
submit.addEventListener('click', event.getSearch.bind(this, 'search'));

const submit2 = document.getElementById('submit2');
submit2.addEventListener('click', event.getForecast.bind(this));

const search2 = document.getElementById('search2');
search2.addEventListener('click', event.getSearch.bind(this, 'searchBar'));

const home = document.getElementById('home');
home.addEventListener('click', () => { dom().show('aaa'); });
