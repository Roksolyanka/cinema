!function(){var e=document.querySelector("button.switch"),t=document.querySelector("button.remove-btn"),n=document.querySelector("button.add-btn"),o=document.querySelector("body"),a=e.querySelector(".first"),i=e.querySelector(".second"),r=document.querySelector(".global-search-btn"),c=window.innerWidth,l=function(e){e>=768?(i.classList.remove("not-active"),a.classList.add("not-active")):(i.classList.add("not-active"),a.classList.remove("not-active"))};function s(e,t){var n=t?t.slice(0,4):"";return e.length>2?e[0].name+", others | "+n:e.map((function(e){return e.name})).join(", ")+" | "+n}l(c),e.addEventListener("click",(function(e){var a=e.currentTarget;null!==t&&t.classList.toggle("day"),null!==n&&n.classList.toggle("day"),null!==r&&r.classList.toggle("day"),a.classList.toggle("day"),a.classList.contains("day")?o.style.backgroundColor="#FFFFFF":o.style.backgroundColor="#111111"})),window.addEventListener("resize",(function(){c=window.innerWidth,l(c)})),window.addEventListener("DOMContentLoaded",(function(){var e;e="839ee1ac45e2249141bd738796b376ad",fetch("https://api.themoviedb.org/3/trending/movie/week?api_key="+e).then((function(e){return e.json()})).then((function(t){var n=t.results.slice(0,3),o=document.getElementById("weekly-trends-movies-container");n.forEach((function(t){var n=t.id;fetch("https://api.themoviedb.org/3/movie/"+n+"?api_key="+e).then((function(e){return e.json()})).then((function(e){var n=function(e,t){var n=document.createElement("div");if(n.className="weekly-trends-movie-card",e.poster_path){var o="https://image.tmdb.org/t/p/w500"+e.poster_path,a=document.createElement("img");a.src=o,a.alt=e.title+" Poster",n.appendChild(a);var i=document.createElement("div");i.className="weekly-trends-movie-info";var r=document.createElement("div");r.className="title-genres-wrapper";var c=document.createElement("h2");c.classList.add("weekly-trends-movie-title"),c.textContent=e.title,r.appendChild(c);var l=document.createElement("p");l.classList.add("weekly-trends-movie-genres"),l.textContent=s(t.genres,t.release_date),r.appendChild(l),i.appendChild(r);var d=document.createElement("div");d.className="rating-container",i.appendChild(d);var u=document.createElement("div");u.className="movie-rating",d.appendChild(u),$(u).rateYo({rating:t.vote_average/2,readOnly:!0,starWidth:"18px",precision:2}),n.appendChild(i),n.addEventListener("click",(function(){!function(e,t){console.log("Open Modal"),console.log("Movie Title:",e.title),console.log("Movie Genres:",s(t.genres,t.release_date)),console.log("Movie Rating:",t.vote_average)}(e,t)}))}return n}(t,e);o.appendChild(n)})).catch((function(e){console.log(e)}))}))})).catch((function(e){console.log(e)}))}))}();
//# sourceMappingURL=index.6c8e2eb8.js.map
