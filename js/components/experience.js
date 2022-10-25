import experienceItem from './experienceItem.js';
import experienceData from '../data/experience.js';

const html = experienceData
  .map(el => experienceItem(el.companyName, el.companyLink, el.job, el.date))
  .join('');

export default /*html*/ `
<section class="section-experience" id="#experience">
  <h1 class="heading-linear mb-md">my Experience</h1>
  <ul class="experience-list">
    ${html}
  </ul>
</section>
`;
