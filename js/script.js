//Init the website
import { initTheme } from './components/themeSelector.js';
import { navigateToHome } from './splash.js';
import submitHandler from './helpers/emailjs.js';
initTheme();
setTimeout(navigateToHome, 8000);

//IMPORTS
import about from './components/about.js';
import header from './components/header.js';
import skills from './components/skills.js';

import {
  projectsHtml,
  handleNavigation,
  fullScreenImgs,
  closePopup,
  changeImage,
} from './components/projects.js';

import experience from './components/experience.js';
import education from './components/education.js';
import contact from './components/contact.js';
import footer from './components/footer.js';
import { observer, handleColorAndTitle } from './observers/mainObserver.js';

import underlineObserver from './observers/underlineObserver.js';
import skillsObserver from './observers/skillsObserver.js';

//ELEMENTS
const body = document.querySelector('body');
const container = document.querySelector('.container');
const mainContent = document.querySelector('.main');

//INSERT ELEMENTS

container.insertAdjacentHTML('beforebegin', header);
mainContent.innerHTML += about;
mainContent.innerHTML += skills;
mainContent.innerHTML += projectsHtml;
mainContent.innerHTML += experience;
mainContent.innerHTML += education;
mainContent.innerHTML += contact;

container.insertAdjacentHTML('afterend', footer);

//SELECT ELEMENTS
const projectsSection = document.querySelector('.section-projects');
const navList = document.querySelector('.header__nav-list');
const contactForm = document.querySelector('.form');
const skillsElement = document.querySelectorAll('.skills__item-percentage');

const projectsEl = document.querySelector('.projects');
const popup = document.querySelector('.project__popup');
const popupContent = document.querySelector('.project__popup-content');
const popupImg = document.querySelector('.project__popup--image');
const closePopupBtn = document.querySelector('.project__popup--close');
const toggleNavBtn = document.querySelector('.header__toggle--button');

//EVENT LISTENERS
let x;
let y;
let isSwapping = false;
popup.addEventListener('click', !isSwapping ? closePopup : '');

popupImg.addEventListener('mousedown', e => {
  e.preventDefault();
  x = e.offsetX;
  y = e.offsetY;
  isSwapping = true;
  popup.addEventListener('mousemove', handleSwapping);
});

popup.addEventListener('mouseup', e => {
  e.preventDefault();

  isSwapping = false;
  x = y = undefined;
});

popupContent.addEventListener('click', changeImage);
closePopupBtn.addEventListener('click', closePopup);
projectsEl.addEventListener('click', fullScreenImgs);
contactForm.addEventListener('submit', submitHandler);

navList.addEventListener('click', e => {
  if (e.target.tagName !== 'A') return;
  navScroll(e.target);
});

toggleNavBtn.addEventListener('click', toggleNav);
projectsSection.addEventListener('click', handleNavigation);

//OBSERVERS
[...mainContent.children].forEach(child => {
  observer.observe(child);
  underlineObserver.observe(child);
});

[...skillsElement].forEach(child => {
  skillsObserver.observe(child);
});

//FUNCTIONS
function toggleNav(e) {
  const nav = document.querySelector('.header__nav');
  nav.classList.toggle('header__nav--open');
}

function handleSwapping(e) {
  e.preventDefault();
  if (!isSwapping) return;
  if (e.offsetX < x) {
    changeImage(e, 'right');
  } else if (e.offsetX > x) {
    changeImage(e, 'left');
  }
  popup.removeEventListener('mousemove', handleSwapping);
}

function navScroll(el) {
  handleColorAndTitle(el);
  document
    .getElementById(`#${el.href.split('#')[1]}`)
    .scrollIntoView({ behavior: 'smooth' });
}
