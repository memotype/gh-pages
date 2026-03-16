/* empty css               */(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=document.querySelector("#app");if(!a)throw new Error("App root not found.");const r={brand:"twobitsprite labs",motto:"Simple apps. No fluff. No gimmicks.",blurb:"Twobitsprite is an independent software brand focused on straightforward, useful apps with clear purpose and clean design.",contactHref:"mailto:twobitsprite@gmail.com?subject=%5Btwobitsprite%5D%20Your%20question%20here",contactLabel:"Contact us",privacyHref:"./privacy.html",privacyLabel:"Privacy Policy",legal:'Copyright 2026 twobitsprite labs. All rights reserved. "twobitsprite" is claimed as a trademark for downloadable software and related digital products.'};a.innerHTML=`
  <main class="site-shell">
    <section class="site-main" aria-label="Brand introduction">
      <section class="brand-panel">
        <h1>${r.brand}</h1>
        <p class="brand-motto">${r.motto}</p>
      </section>
      <p class="site-blurb">${r.blurb}</p>
      <section
        class="app-panel"
        aria-label="Published apps"
        aria-hidden="true"
      ></section>
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
