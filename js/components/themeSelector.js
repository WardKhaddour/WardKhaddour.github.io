const rootEl = document.documentElement;

const cssVariables = getComputedStyle(rootEl);

const themeSelector = document.querySelector('.color-theme__selector');

const colorSecondary = cssVariables.getPropertyValue('--color-secondary');

const colorSecondaryRGB = cssVariables.getPropertyValue(
  '--color-secondary-rgb'
);

const colorTertiary = cssVariables.getPropertyValue('--color-tertiary');
const colorTertiaryRGB = cssVariables.getPropertyValue('--color-tertiary-rgb');

const colorGreyD1 = cssVariables.getPropertyValue('--color-grey-dark-1');

const colorGreyD1RGB = cssVariables.getPropertyValue('--color-grey-dark-1-rgb');

const colorGreyD2 = cssVariables.getPropertyValue('--color-grey-dark-2');

const colorGreyD2RGB = cssVariables.getPropertyValue('--color-grey-dark-2-rgb');

const colorGreyL1 = cssVariables.getPropertyValue('--color-grey-light-1');

const colorGreyL1RGB = cssVariables.getPropertyValue(
  '--color-grey-light-1-rgb'
);

const colorGreyL2 = cssVariables.getPropertyValue('--color-grey-light-2');

const colorGreyL2RGB = cssVariables.getPropertyValue(
  '--color-grey-light-2-rgb'
);

let colorTheme = localStorage.getItem('colorTheme') || 'Dark';

function changeTheme(e) {
  colorTheme = colorTheme === 'Dark' ? 'Light' : 'Dark';
  localStorage.setItem('colorTheme', colorTheme);
  initTheme();
}

export function initTheme() {
  if (colorTheme === 'Light') {
    rootEl.style.setProperty('--color-grey-light-1', colorGreyD1);
    rootEl.style.setProperty('--color-grey-light-1-rgb', colorGreyD1RGB);
    rootEl.style.setProperty('--color-grey-light-2', colorGreyD2);
    rootEl.style.setProperty('--color-grey-light-2-rgb', colorGreyD2RGB);
    rootEl.style.setProperty('--color-grey-dark-1', colorGreyL1);
    rootEl.style.setProperty('--color-grey-dark-1-rgb', colorGreyL1RGB);
    rootEl.style.setProperty('--color-grey-dark-2', colorGreyL2);
    rootEl.style.setProperty('--color-grey-dark-2-rgb', colorGreyL2RGB);
    rootEl.style.setProperty('--color-tertiary', colorSecondary);
    rootEl.style.setProperty('--color-tertiary-rgb', colorSecondaryRGB);
    rootEl.style.setProperty('--color-secondary', colorTertiary);
    rootEl.style.setProperty('--color-secondary-rgb', colorTertiaryRGB);
    themeSelector.children[0].setAttribute(
      'xlink:href',
      '/assets/icons/sprite.svg#icon-Light'
    );
  } else {
    rootEl.style.setProperty('--color-grey-light-1', colorGreyL1);
    rootEl.style.setProperty('--color-grey-light-1-rgb', colorGreyL1RGB);
    rootEl.style.setProperty('--color-grey-light-2', colorGreyL2);
    rootEl.style.setProperty('--color-grey-light-2-rgb', colorGreyL2RGB);
    rootEl.style.setProperty('--color-grey-dark-1', colorGreyD1);
    rootEl.style.setProperty('--color-grey-dark-1-rgb', colorGreyD1RGB);
    rootEl.style.setProperty('--color-grey-dark-2', colorGreyD2);
    rootEl.style.setProperty('--color-grey-dark-2-rgb', colorGreyD2RGB);
    rootEl.style.setProperty('--color-secondary', colorSecondary);
    rootEl.style.setProperty('--color-secondary-rgb', colorSecondaryRGB);
    rootEl.style.setProperty('--color-tertiary', colorTertiary);
    rootEl.style.setProperty('--color-tertiary-rgb', colorTertiaryRGB);
    themeSelector.children[0].setAttribute(
      'xlink:href',
      '/assets/icons/sprite.svg#icon-Dark'
    );
  }
}

themeSelector.addEventListener('click', changeTheme);
