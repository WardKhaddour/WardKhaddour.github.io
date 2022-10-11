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
import contact from './contact.js';
import footer from './footer.js';
import { observer, handleColorAndTitle } from './mainObserver.js';
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
mainContent.innerHTML += contact;

container.insertAdjacentHTML('afterend', footer);
//SELECT ELEMENTS
const navList = document.querySelector('.header__nav-list');
const contactForm = document.querySelector('.form');
const skillsElement = document.querySelectorAll('.skills__item-percentage');

const projectsEl = document.querySelector('.projects');
const popup = document.querySelector('.project__popup');
const popupContent = document.querySelector('.project__popup-content');
const closePopupBtn = document.querySelector('.project__popup--close');

popup.addEventListener('click', closePopup);
popupContent.addEventListener('click', changeImage);
closePopupBtn.addEventListener('click', closePopup);
projectsEl.addEventListener('click', fullScreenImgs);

//EVENT LISTENERS
contactForm.addEventListener('submit', submitHandler);

navList.addEventListener('click', e => {
  if (e.target.tagName !== 'A') return;
  navScroll(e.target);
});

//OBSERVERS
[...mainContent.children].forEach(child => {
  observer.observe(child);
});

[...skillsElement].forEach(child => {
  skillsObserver.observe(child);
});

//FUNCTIONS
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
