export const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const { id } = entry.target;
      if (entry.isIntersecting) {
        handleColorAndTitle(document.querySelectorAll(`a[href='${id}']`)[0]);
        location.href = id;
      }
    });
  },
  {
    threshold: 0.3,
  }
);

export function handleColorAndTitle(el) {
  document.title =
    `${document.title.split('|')[0]} | ${el.textContent}` ||
    'Ward Khaddour | Front-End developer';
  document
    .querySelectorAll('.header__nav-link')
    .forEach(el => el.classList.remove('header__nav-link--active'));
  el.classList.add('header__nav-link--active');
}
