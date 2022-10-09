import data from './data/about.js';

export default /*html*/ `
<section class="section-about" id="#about">
  <div class="about">
    <span class="about__welcome heading-secondary heading-secondary__italic">Hello, I'm</span>
    <span class="about__name heading-primary">${data.name}</span>
    <span class="about__job heading-tertiary">${data.job}</span>
    <p class="about__paragraph paragraph">
      ${data.summary}
    </p>
    <a href="assets/pdf/Ward_Khaddour's_Resume.pdf" download class="link about__link">My Resume</a>
  </div>
  <div class="about__img">
    <figure class="about__img-container">
      <img src=${data.img} alt="Ward Khaddour Photo" class="about__img-img" />
    </figure>
  </div>
</section>
      `;
