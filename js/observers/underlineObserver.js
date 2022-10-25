export default new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const title = entry.target.querySelector('.heading-linear');

        if (title) {
          title.classList.add('underline');
        }
      }
    });
  },
  {
    threshold: 0.1,
  }
);
