const rootEl = document.documentElement;

const cssVariables = getComputedStyle(rootEl);

const themeSelector = document.querySelector('.color-theme__selector');

const colorPrimary = cssVariables.getPropertyValue('--color-primary');

const colorPrimary2 = cssVariables.getPropertyValue('--color-primary-2');

const colorSecondary = cssVariables.getPropertyValue('--color-secondary');

const colorTertiary = cssVariables.getPropertyValue('--color-tertiary');

const colorGreyD1 = cssVariables.getPropertyValue('--color-grey-dark-1');

const colorGreyD2 = cssVariables.getPropertyValue('--color-grey-dark-2');

const colorGreyL1 = cssVariables.getPropertyValue('--color-grey-light-1');

const colorGreyL2 = cssVariables.getPropertyValue('--color-grey-light-2');

let colorTheme = localStorage.getItem('colorTheme') || 'Dark';

function changeTheme(e) {
  colorTheme = colorTheme === 'Dark' ? 'Light' : 'Dark';
  localStorage.setItem('colorTheme', colorTheme);
  initTheme();
}

export function initTheme() {
  if (colorTheme === 'Light') {
    rootEl.style.setProperty('--color-grey-light-1', colorGreyD1);
    rootEl.style.setProperty('--color-grey-light-2', colorGreyD2);
    rootEl.style.setProperty('--color-grey-dark-1', colorGreyL1);
    rootEl.style.setProperty('--color-grey-dark-2', colorGreyL2);
    rootEl.style.setProperty('--color-tertiary', colorSecondary);
    rootEl.style.setProperty('--color-secondary', colorTertiary);
    themeSelector.children[0].setAttribute(
      'xlink:href',
      '/sprite.svg#icon-Light'
    );
  } else {
    rootEl.style.setProperty('--color-grey-light-1', colorGreyL1);
    rootEl.style.setProperty('--color-grey-light-2', colorGreyL2);
    rootEl.style.setProperty('--color-grey-dark-1', colorGreyD1);
    rootEl.style.setProperty('--color-grey-dark-2', colorGreyD2);
    rootEl.style.setProperty('--color-secondary', colorSecondary);
    rootEl.style.setProperty('--color-tertiary', colorTertiary);
    themeSelector.children[0].setAttribute(
      'xlink:href',
      '/sprite.svg#icon-Dark'
    );
  }
}

themeSelector.addEventListener('click', changeTheme);
