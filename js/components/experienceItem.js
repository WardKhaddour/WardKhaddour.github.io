export default (companyName, companyLink, job, date) => /*html*/ `
<li class="experience-list__item">
  <div class="experience-list__item--details">
    <div class="experience-list__item--company">
      
      <h3 class="heading-tertiary experience-list__item--company">
        <a href="${companyLink}" target="_blank">${companyName}</a>
      </h3>
    </div>
    <h1 class="heading-primary experience-list__item--job">
      ${job}
    </h1>
    <div class="experience-list__item--line"></div>
  </div>
  <h5 class="heading-secondary experience-list__item--date">
    ${date}
  </h5>
</li>
`;
