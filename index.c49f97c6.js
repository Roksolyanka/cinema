!function(){function e(e,t){var n=t?t.slice(0,4):"";return e.length>2?e[0].name+", others | "+n:e.map((function(e){return e.name})).join(", ")+" | "+n}window.addEventListener("DOMContentLoaded",(function(){var t;t="839ee1ac45e2249141bd738796b376ad",fetch("https://api.themoviedb.org/3/trending/movie/week?api_key="+t).then((function(e){return e.json()})).then((function(n){var o=n.results.slice(0,3),a=document.getElementById("weekly-trends-movies-container");o.forEach((function(n){var o=n.id;fetch("https://api.themoviedb.org/3/movie/"+o+"?api_key="+t).then((function(e){return e.json()})).then((function(t){var o=function(t,n){var o=document.createElement("div");if(o.className="weekly-trends-movie-card",t.poster_path){var a="https://image.tmdb.org/t/p/w500"+t.poster_path,i=document.createElement("img");i.src=a,i.alt=t.title+" Poster",o.appendChild(i);var r=document.createElement("div");r.className="weekly-trends-movie-info";var c=document.createElement("div");c.className="title-genres-wrapper";var d=document.createElement("h2");d.classList.add("weekly-trends-movie-title"),d.textContent=t.title,c.appendChild(d);var l=document.createElement("p");l.classList.add("weekly-trends-movie-genres"),l.textContent=e(n.genres,n.release_date),c.appendChild(l),r.appendChild(c);var s=document.createElement("p");s.textContent=n.vote_average,r.appendChild(s),o.appendChild(r),o.addEventListener("click",(function(){!function(t,n){console.log("Open Modal"),console.log("Movie Title:",t.title),console.log("Movie Genres:",e(n.genres,n.release_date)),console.log("Movie Rating:",n.vote_average)}(t,n)}))}return o}(n,t);a.appendChild(o)})).catch((function(e){console.log(e)}))}))})).catch((function(e){console.log(e)}))})),document.querySelector(".movies-container")}();
//# sourceMappingURL=index.c49f97c6.js.map
