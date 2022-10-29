export default message => {
  const nav = document.querySelector('.header__nav');
  const el = document.createElement('div');
  el.classList.add('notification');
  el.innerText = message;
  nav.append(el);
  setTimeout(() => {
    if (document.querySelector('.notification')) {
      el.remove();
    }
  }, 3000);
};
