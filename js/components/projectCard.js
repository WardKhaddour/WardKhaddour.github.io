export default (id, imgs, name, description, codeLink, liveLink) => /*html*/ `
<div class="project__card ${
  id !== 1 ? 'project__card--hidden' : ''
}" data-id='${id}'>
  <div class="project__img-container">
    <img src="${imgs[0]}" alt="" class="project__img" />
    <svg class="project__img--full-screen" data-id='${id}'>
      <use href="/assets/icons/sprite.svg#icon-fullscreen"></use>
    </svg>
    <div class="project__img--placeholder"></div>
  </div>
  <div class="project__about">
    <h1 class="project__about--title">${name}</h1>
    <p class="project__about--description">
      ${description}
    </p>
  </div>
  <div class="project__links ">
    ${
      liveLink
        ? `<a href="${liveLink}" target="_blank" class="project__link"> Live Project &rarr; </a>`
        : ''
    }
    ${
      codeLink
        ? `<a href="${codeLink}" target="_blank" class="project__link"> Source Code &rarr; </a>`
        : ''
    }
    ${
      !liveLink && !codeLink
        ? `<span class="heading-secondary">No links Available</span>`
        : ''
    }
  </div>
</div>
`;
