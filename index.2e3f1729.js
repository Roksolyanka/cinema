function e(e,t){const n=t?t.slice(0,4):"";return e.length>2?e[0].name+", others | "+n:e.map((function(e){return e.name})).join(", ")+" | "+n}window.addEventListener("DOMContentLoaded",(function(){!function(){const t="839ee1ac45e2249141bd738796b376ad";fetch("https://api.themoviedb.org/3/trending/movie/week?api_key="+t).then((function(e){return e.json()})).then((function(n){const o=n.results.slice(0,3),c=document.getElementById("weekly-trends-movies-container");o.forEach((function(n){const o=n.id;fetch("https://api.themoviedb.org/3/movie/"+o+"?api_key="+t).then((function(e){return e.json()})).then((function(t){const o=function(t,n){const o=document.createElement("div");if(o.className="weekly-trends-movie-card",t.poster_path){const c="https://image.tmdb.org/t/p/w500"+t.poster_path,i=document.createElement("img");i.src=c,i.alt=t.title+" Poster",o.appendChild(i);const s=document.createElement("div");s.className="weekly-trends-movie-info";const a=document.createElement("div");a.className="title-genres-wrapper";const d=document.createElement("h2");d.classList.add("weekly-trends-movie-title"),d.textContent=t.title,a.appendChild(d);const l=document.createElement("p");l.classList.add("weekly-trends-movie-genres"),l.textContent=e(n.genres,n.release_date),a.appendChild(l),s.appendChild(a);const r=document.createElement("p");r.textContent=n.vote_average,s.appendChild(r),o.appendChild(s),o.addEventListener("click",(function(){!function(t,n){console.log("Open Modal"),console.log("Movie Title:",t.title),console.log("Movie Genres:",e(n.genres,n.release_date)),console.log("Movie Rating:",n.vote_average)}(t,n)}))}return o}(n,t);c.appendChild(o)})).catch((function(e){console.log(e)}))}))})).catch((function(e){console.log(e)}))}()})),document.querySelector(".movies-container");
//# sourceMappingURL=index.2e3f1729.js.map