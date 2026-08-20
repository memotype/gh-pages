/* empty css               */(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const l=new URL(""+new URL("screen-calibration-icon-igaT0kMD.png",import.meta.url).href,import.meta.url).href,p=new URL(""+new URL("settle-icon-C_PnDtuE.png",import.meta.url).href,import.meta.url).href,n=document.querySelector("#app");if(!n)throw new Error("App root not found.");const r={brand:"twobitsprite labs",motto:"Simple apps. No fluff. No gimmicks.",blurb:"Twobitsprite is an independent software brand focused on straightforward, useful apps with clear purpose and clean design.",apps:[{name:"Screen Calibration",description:"A quick and easy way to help you calibrate your screen's display settings.",availability:"published",href:"https://play.google.com/store/apps/details?id=com.twobitsprite.screencalibration",icon:l},{name:"Settle",description:"Settle your mind with these relaxing breath-timing animations",availability:"upcoming",icon:p}],contactHref:"mailto:twobitsprite@gmail.com?subject=%5Btwobitsprite%5D%20Your%20question%20here",contactLabel:"Contact us",privacyHref:"./privacy.html",privacyLabel:"Privacy Policy",legal:'Copyright 2026 twobitsprite labs. All rights reserved. "twobitsprite" is claimed as a trademark for downloadable software and related digital products.'};function d(a){const i=`
    <img
      class="app-icon"
      src="${a.icon}"
      alt="${a.name} app icon"
      width="1024"
      height="1024"
    />
    <strong class="app-name">${a.name}</strong>
    <span class="app-description">${a.description}</span>
  `;return a.availability==="upcoming"?`
      <li class="app-list-item">
        <article class="app-card app-card-upcoming">
          ${i}
          <span class="app-status">COMING SOON</span>
        </article>
      </li>
    `:`
    <li class="app-list-item">
      <a
        class="app-card"
        href="${a.href}"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${i}
      </a>
    </li>
  `}const u=r.apps.map(d).join("");n.innerHTML=`
  <main class="site-shell">
    <section class="site-main" aria-label="Brand introduction">
      <section class="brand-panel">
        <h1>${r.brand}</h1>
        <p class="brand-motto">${r.motto}</p>
      </section>
      <p class="site-blurb">${r.blurb}</p>
      <section
        class="app-panel"
        aria-label="Published and upcoming apps"
      >
        <ul class="app-list">
          ${u}
        </ul>
      </section>
    </section>
    <footer class="site-footer">
      <p class="footer-links">
        <a href="${r.contactHref}">${r.contactLabel}</a>
        <span aria-hidden="true">|</span>
        <a href="${r.privacyHref}">${r.privacyLabel}</a>
      </p>
      <p>${r.legal}</p>
    </footer>
  </main>
`;
