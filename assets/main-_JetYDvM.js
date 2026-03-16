/* empty css               */(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s=document.querySelector("#app");if(!s)throw new Error("App root not found.");const r={brand:"twobitsprite labs",contactHref:"mailto:twobitsprite@gmail.com?subject=%5Btwobitsprite%5D%20Your%20question%20here",contactLabel:"Contact us",privacyHref:"./privacy.html",privacyLabel:"Privacy Policy",legal:'Copyright 2026 twobitsprite labs. All rights reserved. "twobitsprite" is claimed as a trademark for downloadable software and related digital products.'};s.innerHTML=`
  <main class="site-shell">
    <section class="site-main" aria-label="Brand introduction">
      <section class="brand-panel">
        <h1>${r.brand}</h1>
      </section>
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
