export default (university, study, date, description) => /*html*/ `
<div class="education__item">
  <div class="education__item--timeline">
    <svg class="education__item--timeline--icon">
      <use xlink:href="/sprite.svg#icon-calendar"></use>
    </svg>
    <div class="education__item--timeline--line"></div>
  </div>
  <div class="education__item--details">
    <h3 class="heading-tertiary education__item--subtitle">
      ${university}
    </h3>
    <h1 class="heading-primary education__item--title">
      ${study}
    </h1>
    <h5 class="heading-secondary education__item--date">
      ${date}
    </h5>
    <p class="education__item--description">
      ${description || ''}
    </p>
  </div>
</div>
`;
