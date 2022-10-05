import { initTheme } from './themeSelector.js';

initTheme();

import header from './header.js';

// import nav from './nav.js';
import about from './data/about.js';

const container = document.querySelector('.container');
const themeSelector = document.querySelector('.color-theme__selector');

// container.insertAdjacentHTML('beforebegin', nav);
container.innerHTML += header(
  "Hello, I'am",
  about.name,
  about.job,
  about.summary,
  about.img
);
