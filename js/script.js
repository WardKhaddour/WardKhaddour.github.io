import { initTheme } from './themeSelector.js';

initTheme();

import header from './header.js';

import nav from './nav.js';
import about from './data/about.js';
import skills from './skills.js';
import { observer, handleColorAndTitle } from './mainObserver.js';
import skillsObserver from './skillsObserver.js';
const container = document.querySelector('.container');
// const themeSelector = document.querySelector('.color-theme__selector');

container.insertAdjacentHTML('beforebegin', nav);
const navList = document.querySelector('.nav__list');

container.innerHTML = `${header(
  "Hello, I'm",
  about.name,
  about.job,
  about.summary,
  about.img
)} ${container.innerHTML}`;

const mainContent = document.querySelector('.main');

mainContent.innerHTML += skills;

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

const skillsElement = document.querySelectorAll('.skills__item-percentage');
[...skillsElement].forEach(child => {
  skillsObserver.observe(child);
});
