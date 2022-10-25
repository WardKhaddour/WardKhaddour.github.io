import skillElement from './skillElement.js';
import skills from '../data/skills.js';

const skillsEls = skills.map(el => skillElement(el.skill, el.percentage));

const skillsHTML = /*html*/ `
<section class="skills" id="#skills">
    <div class="skills__title heading-linear">MY SKILLS</div>
      <ul class="skills__list">
        ${skillsEls.join('')}
      </ul>
  </section>`;

export default skillsHTML;
