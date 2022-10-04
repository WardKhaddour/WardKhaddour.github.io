import header from './header.js';
import about from './data/about.js';

const container = document.querySelector('.container');

container.innerHTML += header(
  "Hello, I'am",
  about.name,
  about.job,
  about.summary,
  about.img
);
