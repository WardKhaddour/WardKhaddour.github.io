const rootEl = document.documentElement;

const cssVariables = getComputedStyle(rootEl);

const themeSelector = document.querySelector('.color-theme__selector');

const colorPrimary = cssVariables.getPropertyValue('--color-primary');

const colorPrimary2 = cssVariables.getPropertyValue('--color-primary-2');

const colorSecondary = cssVariables.getPropertyValue('--color-secondary');

const colorTertiary = cssVariables.getPropertyValue('--color-tertiary');

let colorTheme = localStorage.getItem('colorTheme') || 'Dark';

function changeTheme(e) {
  colorTheme = colorTheme === 'Dark' ? 'Light' : 'Dark';
  localStorage.setItem('colorTheme', colorTheme);
  initTheme();
}

export function initTheme() {
  if (colorTheme === 'Light') {
    // rootEl.style.setProperty('--color-primary', colorPrimary2);
    rootEl.style.setProperty('--color-tertiary', colorSecondary);
    rootEl.style.setProperty('--color-secondary', colorTertiary);
    themeSelector.textContent = 'light_mode';
  } else {
    // rootEl.style.setProperty('--color-primary', colorPrimary);
    rootEl.style.setProperty('--color-secondary', colorSecondary);
    rootEl.style.setProperty('--color-tertiary', colorTertiary);
    themeSelector.textContent = 'dark_mode';
  }
}

themeSelector.addEventListener('click', changeTheme);
