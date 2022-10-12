import educationItem from './educationItem.js';
import educationData from './data/education.js';

const html = educationData
  .map(el => educationItem(el.study, el.university, el.date))
  .join('');

export default /*html */ `
  <section class="section-education" id="#education">
   <h1 class="heading-linear mb-xl education__header">education</h1>
    <div>
    ${html}
    </div>
  </section>
`;
