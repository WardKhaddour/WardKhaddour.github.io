import projectsData from '../data/projects.js';
import projectCard from './projectCard.js';

const html = projectsData
  .map(el =>
    projectCard(
      el.id,
      el.imgs,
      el.name,
      el.description,
      el.codeLink,
      el.liveLink
    )
  )
  .join('');

export const projectsHtml =
  /*html*/
  `
<section class="section-projects" id="#projects">
  <div class="projects__title heading-linear">MY PROJECTS</div>
  <div class="projects">
    ${html}
  </div>
  <div class="project__popup">
      <div class="project__popup-content">
        <div class="project__popup--images">
          <img class="project__popup--image"  />
        </div>
        <button  class="project__popup--right project__popup--btn">&rarr;</button>
        <button class="project__popup--left project__popup--btn">&larr;</button>
        <button  class="project__popup--close project__popup--btn">&#x2715;</button>
      </div>
  </div>
</section>
`;

let curImg = 0;
let imgsLength;
let projectImgs;
export function fullScreenImgs(e) {
  if (e.target.tagName !== 'svg') {
    return;
  }
  const { id } = e.target.dataset;
  projectImgs = projectsData.filter(el => el.id.toString() === id.toString())[0]
    .imgs;

  imgsLength = projectImgs.length;

  const popup = document.querySelector('.project__popup');
  const popupImg = document.querySelector('.project__popup--image');
  popupImg.src = projectImgs[curImg];
  popup.classList.add('project__popup--visible');
}

export function closePopup(e) {
  if (
    e.target.classList.contains('project__popup') ||
    e.target.classList.contains('project__popup--close')
  ) {
    const popup = document.querySelector('.project__popup');

    popup.classList.remove('project__popup--visible');
  }
}

export function changeImage(e, dir) {
  if (e.target.tagName !== 'BUTTON' && !dir) {
    return;
  }
  if (e.target.classList.contains('project__popup--left') || dir === 'left') {
    curImg === 0 ? (curImg = imgsLength - 1) : curImg--;
    setImage(curImg);
  } else if (
    e.target.classList.contains('project__popup--right') ||
    dir === 'right'
  ) {
    curImg + 1 === imgsLength ? (curImg = 0) : curImg++;
    setImage(curImg);
  }
}

function setImage(curImg) {
  const popupImg = document.querySelector('.project__popup--image');
  popupImg.style.opacity = 0;
  setTimeout(() => {
    popupImg.src = projectImgs[curImg];
    popupImg.style.opacity = 1;
  }, 300);
}
