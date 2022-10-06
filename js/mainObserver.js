export const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const { id } = entry.target;
      console.log(id);
      if (entry.isIntersecting) {
        console.log('ddd');
        handleColorAndTitle(document.querySelectorAll(`a[href='${id}']`)[0]);
        location.href = id;
      }
    });
  },
  {
    threshold: 0.5,
  }
);

export function handleColorAndTitle(el) {
  document.title =
    `${document.title.split('|')[0]} | ${el.textContent}` ||
    'Ward Khaddour | Front-End developer';
  document
    .querySelectorAll('.nav__link')
    .forEach(el => el.classList.remove('nav__link-active'));
  el.classList.add('nav__link-active');
}
