import { initTheme } from './themeSelector.js';
emailjs.init('sKpMTvWB51yA23Cto');

initTheme();

import header from './header.js';

import nav from './nav.js';
import about from './data/about.js';
import skills from './skills.js';
import { observer, handleColorAndTitle } from './mainObserver.js';
import skillsObserver from './skillsObserver.js';
import contact from './contact.js';
const container = document.querySelector('.container');

import notify from './notify.js';
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
mainContent.innerHTML += contact;

const headerItem = document.querySelector('.header');
const contactForm = document.querySelector('.form');

contactForm.addEventListener('submit', submitHandler);

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

function submitHandler(e) {
  e.preventDefault();

  const name = document.querySelector('.form__input--name').value;
  const email = document.querySelector('.form__input--email').value;
  const subject = document.querySelector('.form__input--subject').value;
  const content = document.querySelector('.form__input--content').value;

  emailjs
    .send('service_3sd8mti', 'template_8pf877b', {
      name,
      email,
      subject,
      content,
    })
    .then(
      response => {
        notify('Message sent successfully');
        console.log('SUCCESS!', response.status, response.text);
      },
      error => {
        notify('Sending message failed');
        console.log('FAILED...', error);
      }
    );
}

[...mainContent.children, headerItem].forEach(child => {
  observer.observe(child);
});

const skillsElement = document.querySelectorAll('.skills__item-percentage');
[...skillsElement].forEach(child => {
  skillsObserver.observe(child);
});
