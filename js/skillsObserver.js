const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      console.log(entry.target);
      if (entry.isIntersecting) {
        entry.target.classList.add('vis');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 1,
  }
);

export default observer;
