import { dom } from './js/dom';
import { events } from './js/events';
import { helpers } from './js/helpers';
import './style/style.css';

let manip = dom();
let event = events();
let help = helpers();

const submit = document.getElementById('submit');
submit.addEventListener('click', event.getSearch.bind(this,'search'));

const search2 = document.getElementById('search2');
search2.addEventListener('click', event.getSearch.bind(this, 'searchBar'));

const home = document.getElementById('home');
home.addEventListener('click', ()=>{ location.reload(); });



