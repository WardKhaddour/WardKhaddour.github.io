const splashScreen = document.querySelector('.splash-screen');
const str = '&lt;Ward&gt; Front End Developer &lt;/Khaddour&gt;';
const strHTML = str
  .split(' ')
  .map((word, i) => {
    return i % 2 == 1
      ? word
      : `<tspan class="splash-screen__text--span" >${word}</tspan>`;
  })
  .join(' ');
const html = /*html */ `
 <svg class="splash-screen__svg" id="svgwave" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 301 301">
  <path class="splash-screen__path" id="wavepath" d="M145.5 301.5H13C6.09645 301.5 0.5 295.904 0.5 289V13C0.5 6.09645 6.09644 0.5 13 0.5H289C295.904 0.5 301.5 6.09644 301.5 13V289C301.5 295.904 295.904 301.5 289 301.5H156.5 H13C6.09645 301.5 0.5 295.904 0.5 289V13C0.5 6.09645 6.09644 0.5 13 0.5H289C295.904 0.5 301.5 6.09644 301.5 13V289C301.5 295.904 295.904 301.5 289 301.5H156.5 H13C6.09645 301.5 0.5 295.904 0.5 289V13C0.5 6.09645 6.09644 0.5 13 0.5H289C295.904 0.5 301.5 6.09644 301.5 13V289C301.5 295.904 295.904 301.5 289 301.5H156.5 H13C6.09645 301.5 0.5 295.904 0.5 289V13C0.5 6.09645 6.09644 0.5 13 0.5H289C295.904 0.5 301.5 6.09644 301.5 13V289C301.5 295.904 295.904 301.5 289 301.5H156.5"></path>

  <foreignObject x="6" y="6" width="300px" height="300px">
    <div class="splash-screen__image--container" >
      <!--<img class="splash-screen__image" src="/assets/img/Ward_Khaddour's_photo.jpg" clip-path="url(#svgwave)" />-->
      <div class="splash-screen__image"></div>
    </div>
  </foreignObject>
  <text class="splash-screen__text" text-anchor="left">
    <textPath style="fill-opacity: 1" href="#wavepath" side="left" startOffset="0%" textLength="1175">
     <animate attributeName="startOffset" from="42%" to="20%" begin="0s" dur="12s" repeatCount="indefinite"></animate>
      ${strHTML}
    </textPath>
  </text>
</svg>`;

splashScreen.innerHTML = html;

setTimeout(navigateToHome, 8000);

function navigateToHome() {
  document.querySelector('.splash-screen').classList.add('hidden-animated');
  document.querySelector('.container').classList.remove('hidden');
}
