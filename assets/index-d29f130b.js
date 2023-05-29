(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const r=document.documentElement,p=getComputedStyle(r),j=document.querySelector(".color-theme__selector");p.getPropertyValue("--color-primary");p.getPropertyValue("--color-primary-2");const w=p.getPropertyValue("--color-secondary"),T=p.getPropertyValue("--color-tertiary"),x=p.getPropertyValue("--color-grey-dark-1"),E=p.getPropertyValue("--color-grey-dark-2"),C=p.getPropertyValue("--color-grey-light-1"),$=p.getPropertyValue("--color-grey-light-2");let v=localStorage.getItem("colorTheme")||"Dark";function z(e){v=v==="Dark"?"Light":"Dark",localStorage.setItem("colorTheme",v),A()}function A(){v==="Light"?(r.style.setProperty("--color-grey-light-1",x),r.style.setProperty("--color-grey-light-2",E),r.style.setProperty("--color-grey-dark-1",C),r.style.setProperty("--color-grey-dark-2",$),r.style.setProperty("--color-tertiary",w),r.style.setProperty("--color-secondary",T),j.children[0].setAttribute("xlink:href","/sprite.svg#icon-Light")):(r.style.setProperty("--color-grey-light-1",C),r.style.setProperty("--color-grey-light-2",$),r.style.setProperty("--color-grey-dark-1",x),r.style.setProperty("--color-grey-dark-2",E),r.style.setProperty("--color-secondary",w),r.style.setProperty("--color-tertiary",T),j.children[0].setAttribute("xlink:href","/sprite.svg#icon-Dark"))}j.addEventListener("click",z);const Z=document.querySelector(".splash-screen"),ee="&lt;Ward&gt; Javascript Developer &lt;/Khaddour&gt;",te=ee.split(" ").map((e,t)=>t%2==1?e:`<tspan class="splash-screen__text--span" >${e}</tspan>`).join(" "),ie=`
 <svg class="splash-screen__svg" id="svgwave" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 301 301">
  <path class="splash-screen__path" id="wavepath" d="M145.5 301.5H13C6.09645 301.5 0.5 295.904 0.5 289V13C0.5 6.09645 6.09644 0.5 13 0.5H289C295.904 0.5 301.5 6.09644 301.5 13V289C301.5 295.904 295.904 301.5 289 301.5H156.5 H13C6.09645 301.5 0.5 295.904 0.5 289V13C0.5 6.09645 6.09644 0.5 13 0.5H289C295.904 0.5 301.5 6.09644 301.5 13V289C301.5 295.904 295.904 301.5 289 301.5H156.5 H13C6.09645 301.5 0.5 295.904 0.5 289V13C0.5 6.09645 6.09644 0.5 13 0.5H289C295.904 0.5 301.5 6.09644 301.5 13V289C301.5 295.904 295.904 301.5 289 301.5H156.5 H13C6.09645 301.5 0.5 295.904 0.5 289V13C0.5 6.09645 6.09644 0.5 13 0.5H289C295.904 0.5 301.5 6.09644 301.5 13V289C301.5 295.904 295.904 301.5 289 301.5H156.5"></path>

  <foreignObject x="6" y="6" width="300px" height="300px">
    <div class="splash-screen__image--container" >
      <!--<img class="splash-screen__image" src="/public/img/Ward_Khaddour's_photo.jpg" clip-path="url(#svgwave)" />-->
      <div class="splash-screen__image"></div>
    </div>
  </foreignObject>
  <text class="splash-screen__text" text-anchor="left">
    <textPath class="splash-screen__textpath" style="fill-opacity: 1" href="#wavepath" side="left" startOffset="0%" >
     <animate attributeName="startOffset" from="42%" to="20%" begin="0s" dur="10s" repeatCount="indefinite"></animate>
      ${te}
    </textPath>
  </text>
</svg>`;Z.innerHTML=ie;function se(){document.querySelector(".splash-screen").classList.add("hidden-animated"),document.querySelector(".container").classList.remove("hidden")}const g={_origin:"https://api.emailjs.com"},oe=(e,t="https://api.emailjs.com")=>{g._userID=e,g._origin=t},H=(e,t,i)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class q{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const I=(e,t,i={})=>new Promise((n,s)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:a})=>{const d=new q(a);d.status===200||d.text==="OK"?n(d):s(d)}),o.addEventListener("error",({target:a})=>{s(new q(a))}),o.open("POST",g._origin+e,!0),Object.keys(i).forEach(a=>{o.setRequestHeader(a,i[a])}),o.send(t)}),ne=(e,t,i,n)=>{const s=n||g._userID;return H(s,e,t),I("/api/v1.0/email/send",JSON.stringify({lib_version:"3.10.0",user_id:s,service_id:e,template_id:t,template_params:i}),{"Content-type":"application/json"})},ae=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},re=(e,t,i,n)=>{const s=n||g._userID,o=ae(i);H(s,e,t);const a=new FormData(o);return a.append("lib_version","3.10.0"),a.append("service_id",e),a.append("template_id",t),a.append("user_id",s),I("/api/v1.0/email/send-form",a)},O={init:oe,send:ne,sendForm:re},N=e=>{const t=document.querySelector(".header__nav"),i=document.createElement("div");i.classList.add("notification"),i.innerText=e,t.append(i),setTimeout(()=>{document.querySelector(".notification")&&i.remove()},3e3)};O.init("sKpMTvWB51yA23Cto");function ce(e){e.preventDefault();const t=(m,X,G,Q,Y)=>{m.value="",X.value="",G.value="",Q.value="",Y.textContent="send"},i=document.querySelector(".form__input--name"),n=document.querySelector(".form__input--email"),s=document.querySelector(".form__input--subject"),o=document.querySelector(".form__input--content"),d=document.querySelector(".form").querySelector(".form__input--btn");d.textContent="Sending..",O.send("service_3sd8mti","template_8pf877b",{name:i.value,email:n.value,subject:s.value,content:o.value}).then(m=>{N("Message sent successfully"),console.log("SUCCESS!",m.status,m.text),t(i,n,s,o,d)},m=>{N("Sending message failed"),console.log("FAILED...",m),t(i,n,s,o,d)})}const _={name:"Ward Khaddour",job:"Javascript developer",summary:`
  Software Engineering Student with 1 year of experience in web development.
  <br/>
  Specializing in building responsive web applications using React.
  <br />
  Skilled in React, JavaScript, Typescript, HTML, CSS, and SASS <br/>
  Highly motivated and enthusiastic about learning and growing in the field of web development.
  `,img:"/img/Ward_Khaddour's_photo.jpg"},le=`
<section class="section-about" id="#about">
  <div class="about">
    <span class="about__welcome heading-secondary heading-secondary__italic">Hello, I'm</span>
    <span class="about__name heading-primary">${_.name}</span>
    <span class="about__job heading-tertiary">${_.job}</span>
    <p class="about__paragraph paragraph">
      ${_.summary}
    </p>
    <a href="/pdf/Ward_Khaddour's_Resume.pdf" download class="link about__link">My Resume</a>
  </div>
  <!--<div class="about__img">
    <figure class="about__img-container">
      <img src=${_.img} alt="Ward Khaddour Photo" class="about__img-img" />
    </figure>
  </div>-->
</section>
      `,de=`
<header class="header">
  <div class="header__toggle">
    <input type="checkbox" id="header__checkbox" class="header__toggle--checkbox" />
    <label for="header__checkbox" class="header__toggle--button">
      <span class="header__toggle--icon">&nbsp;</span>
    </label>
  </div>

  <nav class="header__nav">
    <ul class="header__nav-list">
      <li class="header__nav-item"><a class="header__nav-link" href="#about">About</a></li>
      <li class="header__nav-item"><a class="header__nav-link" href="#skills">Skills</a></li>
      <li class="header__nav-item"><a class="header__nav-link" href="#projects">Projects</a></li>
      <li class="header__nav-item"><a class="header__nav-link" href="#experience">Experience</a></li>
      <li class="header__nav-item"><a class="header__nav-link" href="#education">Education</a></li>
      <li class="header__nav-item"><a class="header__nav-link" href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
        `,pe=(e,t)=>`
  <li class="skills__item">
    <span class="skills__item-skill">${e}</span>
    <span class="skills__item-percentage percent-${t}"></span>
  </li>
`,ue=[{skill:"React",percentage:"70"},{skill:"Redux",percentage:"70"},{skill:"Typescript",percentage:"70"},{skill:"Javascript",percentage:"80"},{skill:"SASS",percentage:"85"},{skill:"HTML",percentage:"90"},{skill:"CSS",percentage:"85"},{skill:"Node.js",percentage:"80"},{skill:"Restful API",percentage:"80"},{skill:"Git",percentage:"70"},{skill:"Algorithms and Data Structures",percentage:"60"}],me=ue.map(e=>pe(e.skill,e.percentage)),ge=`
<section class="skills" id="#skills">
    <div class="skills__title heading-linear">MY SKILLS</div>
      <ul class="skills__list">
        ${me.join("")}
      </ul>
  </section>`,h=[{id:1,imgs:["/img/9-1.png"],name:"Topic Nexus",description:"Social Media application built with React, Redux toolkit and Typescript",liveLink:"https://topic-nexus.vercel.app",codeLink:"https://github.com/WardKhaddour/TopicNexus"},{id:2,imgs:["/img/10-1.png"],name:"Protected Routes with React",description:"This project is about routing with React and React Router V6 and how to protect routes",codeLink:"https://github.com/WardKhaddour/React-Protected-Routes"},{id:3,imgs:["/img/1-1.png","/img/1-2.png"],name:"Tic Tac Toe",description:"Online Tic Tac Toe game, with private chat between each two player. All in real time",liveLink:"https://tic-tac-toe-22.glitch.me/",codeLink:"https://github.com/WardKhaddour/Tic-Tac-Toe"},{id:4,imgs:["/img/7-1.png","/img/7-2.png","/img/7-3.png","/img/7-4.png"],name:"Learning System",description:"Learning System Landing page with complete Authentication System, Built with Vue.js & Quasar (NOT completed)"},{id:5,imgs:["/img/8-1.png","/img/8-2.png"],name:"Simple landing page",description:`Created a simple landing page with about, products, contact and docs sections. 
    Built with: Vue.js, SCSS, Typescript
    `,codeLink:"https://github.com/WardKhaddour/Landing-Page",liveLink:"https://wardkhaddour.github.io/Landing-Page/"},{id:6,imgs:["/img/6-1.png"],name:"Online Shop",description:"Convert The online shop app front-end from server side rendering with EJS templates to separate Vue.js App (NOT completed)",codeLink:"https://github.com/WardKhaddour/Online-Shop-frontend"},{id:7,imgs:["/img/5-1.png"],name:"Natours",description:"Built with Node.js & Express course, Using Node.js, Express, MongoDB and pug templates",codeLink:"https://github.com/WardKhaddour/Learning-node-js/tree/main/Natours"},{id:8,imgs:["/img/2-1.png","/img/2-2.png"],name:"Landing page for Natours",description:`Built with Advanced CSS and SASS.
      `,liveLink:"https://wardkhaddour.github.io/NATOURS-Advanced-CSS-Course/",codeLink:"https://github.com/WardKhaddour/NATOURS-Advanced-CSS-Course"},{id:9,imgs:["/img/3-1.png"],name:"Nexter",description:`Built with Advanced CSS and SASS.
      `,liveLink:"https://wardkhaddour.github.io/NEXTER-Advanced-CSS-Course/",codeLink:"https://github.com/WardKhaddour/NEXTER-Advanced-CSS-Course"},{id:10,imgs:["/img/4-1.png"],name:"Trillo",description:`Built with Advanced CSS and SASS.
      `,liveLink:"https://wardkhaddour.github.io/TRILLO-Advanced-CSS-Course/",codeLink:"https://github.com/WardKhaddour/TRILLO-Advanced-CSS-Course"}],he=(e,t,i,n,s,o)=>`
<div class="project__card slide-${e-1}" data-id='${e}'>
  <div class="project__img-container">
    <img src="${t[0]}" alt="" class="project__img" />
    <svg class="project__img--full-screen" data-id='${e}'>
      <use href="/sprite.svg#icon-fullscreen"></use>
    </svg>
    <div class="project__img--placeholder"></div>
  </div>
  <div class="project__about">
    <h1 class="project__about--title">${i}</h1>
    <p class="project__about--description">
      ${n}
    </p>
  </div>
  <div class="project__links ">
    ${o?`<a href="${o}" target="_blank" class="project__link"> Live Project &rarr; </a>`:""}
    ${s?`<a href="${s}" target="_blank" class="project__link"> Source Code &rarr; </a>`:""}
    ${!o&&!s?'<span class="heading-secondary">No links Available</span>':""}
  </div>
</div>
`,_e=h.map(e=>he(e.id,e.imgs,e.name,e.description,e.codeLink,e.liveLink)).join(""),ve=h.map(e=>`
      <span class="projects__navigation--dot ${e.id===1?"projects__navigation--dot-selected":""}" data-id="${e.id}"></span>
`).join(""),fe=`
<section class="section-projects" id="#projects">
  <div class="${h.length<2?"hidden":""}">
    <button class="btn-left btn-navigation projects__navigation projects__navigation--left">&nbsp;</button>
    <button class="btn-right btn-navigation projects__navigation projects__navigation--right">&nbsp;</button>
  </div>
  <div class="projects__title heading-linear">MY PROJECTS</div>
  <div class="projects">
    ${_e}
  </div>
  <div class="project__popup">
    <div class="project__popup-content">
      <div class="project__popup--images">
        <img class="project__popup--image" />
      </div>

    <div class="project__popup--navigation">
        <button class="btn-navigation btn-right project__popup--right ">&nbsp;</button>
        <button class="btn-navigation btn-left project__popup--left">&nbsp;</button>
    </div>

      <button class="btn-navigation btn-close project__popup--close">&nbsp;</button>
    </div>
  </div>
  <div class="projects__navigation--dots">
    ${ve}
  </div>
</section>
`;let c=0;const M=h.length;function R(){c===M-1?c=0:c++,W()}function V(){c===0?c=M-1:c--,W()}function W(){document.querySelectorAll(".project__card").forEach((t,i)=>{t.classList.forEach(n=>{n.split("-")[0]==="slide"&&t.classList.remove(n)}),t.classList.add(`slide-${i-c}`)})}function ye(e){if(!(e.target.tagName!=="BUTTON"&&e.target.tagName!=="SPAN"&&!e.target.classList.contains("projects__navigation--left")&&!e.target.classList.contains("projects__navigation--right")&&!e.target.classList.contains("projects__navigation--dot"))){if(e.target.tagName==="BUTTON"){e.target.classList.contains("projects__navigation--left")?V():e.target.classList.contains("projects__navigation--right")&&R(),D();return}be(e.target.dataset.id)}}function D(){const e=document.querySelector(".projects__navigation--dots");[...document.querySelectorAll(".projects__navigation--dot")].forEach(n=>n.classList.remove("projects__navigation--dot-selected")),e.querySelector(`[data-id="${c+1}"]`).classList.add("projects__navigation--dot-selected")}function be(e){for(e--;c!=e;)e<c?V():c<e&&R();D()}let l=0,y,f;function Se(e){if(e.target.tagName!=="svg")return;const{id:t}=e.target.dataset;l=0,f=h.filter(o=>o.id.toString()===t.toString())[0].imgs,y=f.length;const i=document.querySelector(".project__popup"),n=document.querySelector(".project__popup--image"),s=document.querySelector(".project__popup--navigation");y<2?s.classList.add("hidden"):s.classList.remove("hidden"),n.src=f[l],i.classList.add("project__popup--visible")}function K(e){(e.target.classList.contains("project__popup")||e.target.classList.contains("project__popup--close"))&&document.querySelector(".project__popup").classList.remove("project__popup--visible")}function L(e,t){e.target.tagName!=="BUTTON"&&!t||(e.target.classList.contains("project__popup--left")||t==="left"?(l===0?l=y-1:l--,P(l)):(e.target.classList.contains("project__popup--right")||t==="right")&&(l+1===y?l=0:l++,P(l)))}function P(e){const t=document.querySelector(".project__popup--image");t.style.opacity=0,t.style.visibility="hidden",t.style.width="0",t.src="",t.src=f[e],setTimeout(()=>{t.style.visibility="visible",t.style.width="100%",t.style.opacity=1},300)}const ke=(e,t,i,n,s)=>`
<li class="experience-list__item">
  <div class="experience-list__item--details">
    <div class="experience-list__item--company">
      
      <h3 class="heading-tertiary experience-list__item--company">
        <a href="${t}" target="_blank">${e}</a>
      </h3>
    </div>
    <h1 class="heading-primary experience-list__item--job">
      ${i}
    </h1>
    <div class="experience-list__item--line"></div>
  </div>
  <h5 class="heading-secondary experience-list__item--date">
    ${n}
  </h5>
  <ul class="experience-list__item--description">
      ${s.map(o=>`<li>${o}</li>`).join("")}
    </ul>
</li>
`,je=[{companyName:"TasQment",companyLink:"https://www.tasqment.com",job:"Front-End Intern",date:"03-2021 / 11-2021",description:["Learned about Web development and started to work with HTML, CSS, Javascript"]},{companyName:"TasQment",companyLink:"https://www.tasqment.com",job:"Front-End Developer",date:"12-2021 / 04-2022",description:["Worked with UI/UX designers to transform the design into responsive web app.","Worked with Back-end developers to implement APIs in the front-end app.","Engaged in daily scrum meetings with the team."]}],Le=je.map(e=>ke(e.companyName,e.companyLink,e.job,e.date,e.description)).join(""),we=`
<section class="section-experience" id="#experience">
  <h1 class="heading-linear mb-md">my Experience</h1>
  <ul class="experience-list">
    ${Le}
  </ul>
</section>
`,Te=(e,t,i,n)=>`
<div class="education__item">
  <div class="education__item--timeline">
    <svg class="education__item--timeline--icon">
      <use xlink:href="/sprite.svg#icon-calendar"></use>
    </svg>
    <div class="education__item--timeline--line"></div>
  </div>
  <div class="education__item--details">
    <h3 class="heading-tertiary education__item--subtitle">
      ${e}
    </h3>
    <h1 class="heading-primary education__item--title">
      ${t}
    </h1>
    <h5 class="heading-secondary education__item--date">
      ${i}
    </h5>
    <p class="education__item--description">
      ${n||""}
    </p>
  </div>
</div>
`,xe=[{study:"Software Engineering",university:"Tishreen University",date:"2019 - Present",description:"Software Engineering and Information Systems student at 4th year"}],Ee=xe.map(e=>Te(e.study,e.university,e.date,e.description)).join(""),Ce=`
  <section class="section-education" id="#education">
   <h1 class="heading-linear mb-xl education__header">education</h1>
    <div>
    ${Ee}
    </div>
  </section>
`,$e=[{name:"wardkhaddot@gmail.com",link:"mailto:wardkhaddot@gmail.com",icon:"email"},{name:"Linkedin",link:"https://www.linkedin.com/in/ward-khaddour/",icon:"linkedin"},{name:"Github",link:"https://github.com/WardKhaddour",icon:"github"},{name:"Codeforces",link:"https://codeforces.com/profile/WardKhaddour",icon:"codeforces"},{name:"Telegram",link:"https://t.me/WardKhaddour",icon:"telegram"},{name:"Whatsapp",link:"https://api.whatsapp.com/send?phone=963933141787",icon:"whatsapp"},{name:"+963 933 141 787",link:"tel:+963933141787",icon:"phone"}],qe=(e,t,i)=>`
 <li class="other-contact__list-item">
   <a href="${t}" target="_blank" class="other-contact__list-item--link">
     <svg class="other-contact__list-item--icon">
       <use href="/sprite.svg#icon-${i}"></use>
     </svg>
     <p>${e}</p>
   </a>
 </li>
`,Ne=$e.map(e=>qe(e.name,e.link,e.icon)).join(""),Pe=`
<section class="section-contact" id="#contact">
  <h1 class="heading-linear mb-md">Contact</h1>
  <div class="contact">
    <form action="#" class="form">
      <h1 class="heading-secondary">Send me a private message</h1>
      <div class="form__group">
        <input autocomplete="off" id="name" type="text" class="form__input form__input--name" required placeholder="Name" />
        <label class="form__label" for="name">Name</label>
      </div>

      <div class="form__group">
        <input autocomplete="off" id="email" type="email" class="form__input form__input--email" required placeholder="Email" />
        <label class="form__label" for="email">Email</label>
      </div>

      <div class="form__group">
        <input autocomplete="off" id="subject" type="subject" class="form__input form__input--subject" required placeholder="Subject" />
        <label class="form__label" for="subject">Subject</label>
      </div>

      <div class="form__group">
        <textarea id="content" type="content" class="form__input form__input--content" required rows="3" placeholder="Content"></textarea>
        <label class="form__label" for="content">Content</label>
      </div>
      <div class="form__group">
        <button class="link btn form__input--btn" type="submit">Send</button>
      </div>
    </form>
    <div class="other-contact">
      <h1 class="heading-secondary other-contact__title">OR</h1>
      <ul class="other-contact__list">
        ${Ne}
      </ul>
    </div>
  </div>
</section>
`,Ae=`
<footer class="footer">&copy;&nbsp;By Ward Khaddour 2022</footer>
`,He=new IntersectionObserver(e=>{e.forEach(t=>{const{id:i}=t.target;t.isIntersecting&&(B(document.querySelectorAll(`a[href='${i}']`)[0]),location.href=i)})},{threshold:.3});function B(e){document.title=`${document.title.split("|")[0]} | ${e.textContent}`||"Ward Khaddour | Front-End developer",document.querySelectorAll(".header__nav-link").forEach(t=>t.classList.remove("header__nav-link--active")),e.classList.add("header__nav-link--active")}const Ie=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){const i=t.target.querySelector(".heading-linear");i&&i.classList.add("underline")}})},{threshold:.1}),F=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("vis"),F.unobserve(t.target))})},{threshold:1});A();setTimeout(se,8e3);document.querySelector("body");const U=document.querySelector(".container"),u=document.querySelector(".main");U.insertAdjacentHTML("beforebegin",de);u.innerHTML+=le;u.innerHTML+=ge;u.innerHTML+=fe;u.innerHTML+=we;u.innerHTML+=Ce;u.innerHTML+=Pe;U.insertAdjacentHTML("afterend",Ae);const Oe=document.querySelector(".section-projects"),Me=document.querySelector(".header__nav-list"),Re=document.querySelector(".form"),Ve=document.querySelectorAll(".skills__item-percentage"),We=document.querySelector(".projects"),S=document.querySelector(".project__popup"),De=document.querySelector(".project__popup-content"),Ke=document.querySelector(".project__popup--image"),Be=document.querySelector(".project__popup--close"),Fe=document.querySelector(".header__toggle--button");let b,k=!1;S.addEventListener("click",k?"":K);Ke.addEventListener("mousedown",e=>{e.preventDefault(),b=e.offsetX,e.offsetY,k=!0,S.addEventListener("mousemove",J)});S.addEventListener("mouseup",e=>{e.preventDefault(),k=!1,b=void 0});De.addEventListener("click",L);Be.addEventListener("click",K);We.addEventListener("click",Se);Re.addEventListener("submit",ce);Me.addEventListener("click",e=>{e.target.tagName==="A"&&Je(e.target)});Fe.addEventListener("click",Ue);Oe.addEventListener("click",ye);[...u.children].forEach(e=>{He.observe(e),Ie.observe(e)});[...Ve].forEach(e=>{F.observe(e)});function Ue(e){document.querySelector(".header__nav").classList.toggle("header__nav--open")}function J(e){e.preventDefault(),k&&(e.offsetX<b?L(e,"right"):e.offsetX>b&&L(e,"left"),S.removeEventListener("mousemove",J))}function Je(e){B(e),document.getElementById(`#${e.href.split("#")[1]}`).scrollIntoView({behavior:"smooth"})}
