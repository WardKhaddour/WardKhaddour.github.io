export default (id, imgs, name, description, codeLink, liveLink) => /*html*/ `
<div class="project__card">
  <div class="project__img-container">
    <img src="${imgs[0]}" alt="" class="project__img" />
    <svg class="project__img--full-screen" data-id='${id}'>
      <use xlink:href="/assets/icons/sprite.svg#icon-fullscreen"></use>
    </svg>
    <div class="project__img--placeholder"></div>
  </div>
  <div class="project__about">
    <h1 class="project__about--title">${name}</h1>
    <p class="project__about--description">
      ${description}
    </p>
  </div>
  <div class="project__links">
    ${
      liveLink
        ? `<a href="${liveLink}" class="project__link"> Live Project &rarr; </a>`
        : ''
    }
    ${
      codeLink
        ? `<a href="${codeLink}" class="project__link"> Source Code &rarr; </a>`
        : ''
    }
  </div>
</div>
`;
