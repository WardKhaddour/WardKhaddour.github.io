export const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const { id } = entry.target;

      if (entry.isIntersecting) {
        colorNavItem(document.querySelectorAll(`a[href='${id}']`)[0]);
        location.href = id;
      }
    });
  },
  {
    threshold: 0.5,
  }
);

export function colorNavItem(el) {
  document
    .querySelectorAll('.nav__link')
    .forEach(el => el.classList.remove('nav__link-active'));
  el.classList.add('nav__link-active');
}
