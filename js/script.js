import { initTheme } from './themeSelector.js';

initTheme();

import header from './header.js';

import nav from './nav.js';
import about from './data/about.js';
import { observer, handleColorAndTitle } from './observer.js';
const container = document.querySelector('.container');
const mainContent = document.querySelector('.main');
// const themeSelector = document.querySelector('.color-theme__selector');

container.insertAdjacentHTML('beforebegin', nav);
const navList = document.querySelector('.nav__list');

container.innerHTML = `${header(
  "Hello, I'am",
  about.name,
  about.job,
  about.summary,
  about.img
)} ${container.innerHTML}`;

const headerItem = document.querySelector('.header');

navList.addEventListener('click', e => {
  if (e.target.tagName !== 'A') return;
  navScroll(e.target);
});

function navScroll(el) {
  handleColorAndTitle(el);
  document
    .getElementById(`#${el.href.split('#')[1]}`)
    .scrollIntoView({ behavior: 'smooth' });
}

[...mainContent.children, headerItem].forEach(child => {
  observer.observe(child);
});
