export default (skill, percentage) => {
  const html = /*html*/ `
  <li class="skills__item">
    <span class="skills__item-skill">${skill}</span>
    <span class="skills__item-percentage percent-${percentage}"></span>
  </li>
`;
  return html;
};
