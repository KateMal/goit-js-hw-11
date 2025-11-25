import{a as g,S as f,i as m}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="53405019-6c96446ba48ce1565d886076e",y="https://pixabay.com/api/";async function h(s){const o={key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await g.get(y,{params:o})).data}catch(r){throw console.error("Error fetching images:",r),r}}const L=new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function E(s){const o=document.querySelector(".gallery"),r=s.map(({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:l,comments:u,downloads:p})=>`
        <li class="gallery-item">
          <a href="${e}">
            <img src="${i}" alt="${t}" loading="lazy" />
          </a>
          <div class="info">
            <p><strong>Likes:</strong> ${n}</p>
            <p><strong>Views:</strong> ${l}</p>
            <p><strong>Comments:</strong> ${u}</p>
            <p><strong>Downloads:</strong> ${p}</p>
          </div>
        </li>
      `).join("");o.insertAdjacentHTML("beforeend",r),L.refresh()}let a=[];const c="Sorry, there are no images matching your search query. Please try again!",b=document.querySelector("#search-form");b.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.searchQuery.value;a=[],document.querySelector(".gallery").innerHTML="",h(o).then(r=>{if(console.log("data",r.hits),r.hits.length===0)throw new Error(c);a=r.hits,E(a)}).catch(r=>{console.error("Error in main.js:",r),m.error({title:"Error",message:c,position:"topRight"})})});
//# sourceMappingURL=index.js.map
