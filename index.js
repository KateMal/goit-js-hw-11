import{a as d,S as f,i as p}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y="53405019-6c96446ba48ce1565d886076e",m="https://pixabay.com/api/";async function g(t){const o={key:y,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await d.get(m,{params:o})).data}catch(s){throw s}}const h=new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function L(t){const o=document.querySelector(".gallery"),s=t.map(({webformatURL:i,largeImageURL:e,tags:r,likes:n,views:c,comments:l,downloads:u})=>`
        <li class="gallery-item">
          <a href="${e}">
            <img src="${i}" alt="${r}" loading="lazy" />
          </a>
          <div class="info">
            <p><strong>Likes:</strong> ${n}</p>
            <p><strong>Views:</strong> ${c}</p>
            <p><strong>Comments:</strong> ${l}</p>
            <p><strong>Downloads:</strong> ${u}</p>
          </div>
        </li>
      `).join("");o.insertAdjacentHTML("beforeend",s),h.refresh()}function b(){const t=document.querySelector(".gallery");t.innerHTML=""}function S(){document.querySelector("#loader").classList.add("is-visible")}function q(){document.querySelector("#loader").classList.remove("is-visible")}const a="Sorry, there are no images matching your search query. Please try again!",v=document.querySelector("#search-form");v.addEventListener("submit",t=>{t.preventDefault();const o=t.currentTarget.searchQuery.value;o&&(b(),S(),g(o).then(s=>{if(s.hits.length===0)throw new Error(a);L(s.hits)}).catch(s=>{p.error({title:"Error",message:a,position:"topRight"})}).finally(()=>{q()}))});
//# sourceMappingURL=index.js.map
