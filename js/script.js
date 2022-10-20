//Init the website

import { initTheme } from './themeSelector.js';

emailjs.init('sKpMTvWB51yA23Cto');

initTheme();

//IMPORTS
import about from './about.js';
import header from './header.js';
import skills from './skills.js';

import {
  projectsHtml,
  fullScreenImgs,
  closePopup,
  changeImage,
} from './projects.js';

import experience from './experience.js';
import education from './education.js';
import contact from './contact.js';
import footer from './footer.js';
import { observer, handleColorAndTitle } from './mainObserver.js';
import underlineObserver from './underlineObserver.js';
import skillsObserver from './skillsObserver.js';
import notify from './notify.js';

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

function submitHandler(e) {
  e.preventDefault();

  const clearForm = (name, email, subject, content, btn) => {
    name.value = '';
    email.value = '';
    subject.value = '';
    content.value = '';
    btn.textContent = 'send';
  };

  const name = document.querySelector('.form__input--name');
  const email = document.querySelector('.form__input--email');
  const subject = document.querySelector('.form__input--subject');
  const content = document.querySelector('.form__input--content');

  const contactFormBtn = contactForm.querySelector('.form__input--btn');

  contactFormBtn.textContent = 'Sending..';

  emailjs
    .send('service_3sd8mti', 'template_8pf877b', {
      name: name.value,
      email: email.value,
      subject: subject.value,
      content: content.value,
    })
    .then(
      response => {
        notify('Message sent successfully');
        console.log('SUCCESS!', response.status, response.text);
        clearForm(name, email, subject, content, contactFormBtn);
      },
      error => {
        notify('Sending message failed');
        console.log('FAILED...', error);
        clearForm(name, email, subject, content, contactFormBtn);
      }
    );
}
