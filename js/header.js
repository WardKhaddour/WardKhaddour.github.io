export default (welcome, name, job, about, img) => {
  return /*html*/ `
<header class="header" id="#about">
  <div class="header__about">
    <span class="header__about--welcome heading-secondary heading-secondary__italic">${welcome}</span>
    <span class="header__about--name heading-primary">${name}</span>
    <span class="header__about--job heading-tertiary">${job}</span>
    <p class="header__about--paragraph paragraph">
      ${about}
    </p>
    <a href="assets/pdf/Ward_Khaddour's_Resume.pdf" download class="link header__about--link">My Resume</a>
  </div>
  <div class="header__img">
    <figure class="header__img-container">
      <img src=${img} alt="Ward Khaddour Photo" class="header__img-img" />
    </figure>
  </div>
</header>
      `;
};
