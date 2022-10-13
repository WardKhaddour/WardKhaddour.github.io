export default message => {
  const nav = document.querySelector('.header__nav');
  const navHTML = nav.innerHTML;
  const html = /*html*/ `
  <div class="notification">${message}</div>
  `;

  nav.innerHTML = navHTML + html;
  setTimeout(() => {
    if (document.querySelector('.notification')) {
      document.querySelector('.notification').remove();
    }
    nav.innerHTML = navHTML;
  }, 3000);
};
