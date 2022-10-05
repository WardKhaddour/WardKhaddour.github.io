import header from './header.js';
import nav from './nav.js';
import about from './data/about.js';

// const body = document.querySelector('body');
const container = document.querySelector('.container');

// container.insertAdjacentHTML('beforebegin', nav);
container.innerHTML += header(
  "Hello, I'am",
  about.name,
  about.job,
  about.summary,
  about.img
);
