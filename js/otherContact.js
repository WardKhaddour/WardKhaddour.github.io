const generateElement = (name, link, icon) => /*html*/ `
 <li class="other-contact__list-item">
   <a href="${link}" target="_blank" class="other-contact__list-item--link">
     <svg class="other-contact__list-item--icon">
       <use xlink:href="/assets/icons/sprite.svg#icon-${icon}"></use>
     </svg>
     <p>${name}</p>
   </a>
 </li>
`;

import contactData from './data/contact.js';

const html = contactData
  .map(el => generateElement(el.name, el.link, el.icon))
  .join('');

export default html;
