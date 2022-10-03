export default (name, job, about, img) => /*html*/ `
<header class="header">
  <div class="header__about">
    <span class="header__about--job">${job}</span>
    <span class="header__about--name heading-primary">${name}</span>
    <p class="header__about--paragraph">
      ${about}
    </p>
    <a href="assets/pdf/Ward_Khaddour's_Resume.pdf" download class="link header__about--link">My Resume</a>
  </div>
  <figure class="header__img-container">
    <img src=${img} alt="Ward Khaddour Photo" class="header__img" />
  </figure>
</header>
`;
