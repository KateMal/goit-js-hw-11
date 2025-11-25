import{a as d,S as f,i as g}from"./assets/vendor-CNqCr-V-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="53405019-6c96446ba48ce1565d886076e",p="https://pixabay.com/api/";async function y(o){const s={key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await d.get(p,{params:s})).data}catch(r){throw console.error("Error fetching images:",r),r}}const h=new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function L(o){const s=document.querySelector(".gallery"),r=o.map(({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:c,comments:l,downloads:u})=>`
        <li class="gallery-item">
          <a href="${e}">
            <img src="${i}" alt="${t}" loading="lazy" />
          </a>
          <div class="info">
            <p><strong>Likes:</strong> ${n}</p>
            <p><strong>Views:</strong> ${c}</p>
            <p><strong>Comments:</strong> ${l}</p>
            <p><strong>Downloads:</strong> ${u}</p>
          </div>
        </li>
      `).join("");s.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){const o=document.querySelector(".gallery");o.innerHTML=""}function E(){document.querySelector("#loader").classList.add("is-visible")}function S(){document.querySelector("#loader").classList.remove("is-visible")}const a="Sorry, there are no images matching your search query. Please try again!",q=document.querySelector("#search-form");q.addEventListener("submit",o=>{o.preventDefault();const s=o.currentTarget.searchQuery.value;b(),E(),y(s).then(r=>{if(console.log("data",r.hits),r.hits.length===0)throw new Error(a);L(r.hits)}).catch(r=>{console.error("Error in main.js:",r),g.error({title:"Error",message:a,position:"topRight"})}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
