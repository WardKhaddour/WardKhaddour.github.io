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

const dots = projectsData
  .map(
    el => /*html*/ `
      <span class="projects__navigation--dot ${
        el.id === 1 ? 'projects__navigation--dot-selected' : ''
      }" data-id="${el.id}"></span>
`
  )
  .join('');

export const projectsHtml = /*html*/ `
<section class="section-projects" id="#projects">
  <div class="${projectsData.length < 2 ? 'hidden' : ''}">
    <button class="btn-left btn-navigation projects__navigation projects__navigation--left">&nbsp;</button>
    <button class="btn-right btn-navigation projects__navigation projects__navigation--right">&nbsp;</button>
  </div>
  <div class="projects__title heading-linear">MY PROJECTS</div>
  <div class="projects">
    ${html}
  </div>
  <div class="project__popup">
    <div class="project__popup-content">
      <div class="project__popup--images">
        <img class="project__popup--image" />
      </div>

    <div class="project__popup--navigation">
        <button class="btn-navigation btn-right project__popup--right ">&nbsp;</button>
        <button class="btn-navigation btn-left project__popup--left">&nbsp;</button>
    </div>

      <button class="btn-navigation btn-close project__popup--close">&nbsp;</button>
    </div>
  </div>
  <div class="projects__navigation--dots">
    ${dots}
  </div>
</section>
`;

let curSlide = 0;
const maxSlides = projectsData.length;
export function goToRightSlide() {
  if (curSlide === maxSlides - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  changeSlide();
}
export function goToLeftSlide() {
  if (curSlide === 0) {
    curSlide = maxSlides - 1;
  } else {
    curSlide--;
  }

  changeSlide();
}
export function changeSlide() {
  const slides = document.querySelectorAll('.project__card');

  slides.forEach((slide, idx) => {
    slide.classList.forEach(cl => {
      if (cl.split('-')[0] === 'slide') {
        slide.classList.remove(cl);
      }
    });
    slide.classList.add(`slide-${idx - curSlide}`);
  });
}

export function handleNavigation(e) {
  if (
    e.target.tagName !== 'BUTTON' &&
    e.target.tagName !== 'SPAN' &&
    !e.target.classList.contains('projects__navigation--left') &&
    !e.target.classList.contains('projects__navigation--right') &&
    !e.target.classList.contains('projects__navigation--dot')
  ) {
    return;
  }

  if (e.target.tagName === 'BUTTON') {
    if (e.target.classList.contains('projects__navigation--left')) {
      goToLeftSlide();
    } else if (e.target.classList.contains('projects__navigation--right')) {
      goToRightSlide();
    }
    dotSelection();
    return;
  }

  dotsHandler(e.target.dataset.id);
}
function dotSelection() {
  const dotsContainer = document.querySelector('.projects__navigation--dots');
  const dots = document.querySelectorAll('.projects__navigation--dot');
  [...dots].forEach(dot =>
    dot.classList.remove('projects__navigation--dot-selected')
  );

  const dot = dotsContainer.querySelector(`[data-id="${curSlide + 1}"]`);
  dot.classList.add('projects__navigation--dot-selected');
}

function dotsHandler(id) {
  id--;
  while (curSlide != id) {
    if (id < curSlide) {
      goToLeftSlide();
    } else if (curSlide < id) {
      goToRightSlide();
    }
  }
  dotSelection();
}

//POPUP
let curImg = 0;
let imgsLength;
let projectImgs;
export function fullScreenImgs(e) {
  if (e.target.tagName !== 'svg') {
    return;
  }
  const { id } = e.target.dataset;
  curImg = 0;
  projectImgs = projectsData.filter(el => el.id.toString() === id.toString())[0]
    .imgs;

  imgsLength = projectImgs.length;

  const popup = document.querySelector('.project__popup');
  const popupImg = document.querySelector('.project__popup--image');
  const popupNavigation = document.querySelector('.project__popup--navigation');
  if (imgsLength < 2) {
    popupNavigation.classList.add('hidden');
  } else {
    popupNavigation.classList.remove('hidden');
  }
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
  popupImg.style.visibility = 'hidden';
  popupImg.style.width = '0';
  popupImg.src = '';
  popupImg.src = projectImgs[curImg];
  setTimeout(() => {
    popupImg.style.visibility = 'visible';
    popupImg.style.width = '100%';
    popupImg.style.opacity = 1;
  }, 300);
}
