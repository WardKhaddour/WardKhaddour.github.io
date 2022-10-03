import header from './header.js';

const container = document.querySelector('.container');

container.innerHTML += header(
  'Ward Khaddour',
  'Front-End Developer',
  `Front-End developer with 1 year of experience working with Javascript and Vue.js.<br />
  Currently learning Back-End development with Node.js and Express
  `,
  `assets/img/Ward_Khaddour's_photo.jpg`
);
