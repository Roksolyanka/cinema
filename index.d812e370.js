!function(){function e(e,t){var n=t?t.slice(0,4):"Not yet";return 0===e.length?"Not yet | "+n:e.length>2?e[0].name+", others | "+n:e.map((function(e){return e.name})).join(", ")+" | "+n}window.addEventListener("DOMContentLoaded",(function(){var t,n;n="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(t="839ee1ac45e2249141bd738796b376ad"),fetch(n).then((function(e){return e.json()})).then((function(n){var a=n.results,o=document.getElementById("weekly-trends-movies-container");a.forEach((function(n){var a=n.id,r="https://api.themoviedb.org/3/movie/".concat(a,"?api_key=").concat(t);fetch(r).then((function(e){return e.json()})).then((function(t){var a=function(t,n){var a=document.createElement("div");if(a.className="weekly-trends-movie-card",t.poster_path){var o=t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):"/src/images/coming_soon_default.jpg",r=document.createElement("img");r.src=o,r.alt="".concat(t.title," Poster"),a.appendChild(r);var i=document.createElement("div");i.className="weekly-trends-movie-info";var c=document.createElement("div");c.className="title-genres-wrapper";var l=document.createElement("h2");l.classList.add("weekly-trends-movie-title"),l.textContent=t.title,c.appendChild(l);var d=document.createElement("p");d.classList.add("weekly-trends-movie-genres"),d.textContent=e(n.genres,n.release_date),c.appendChild(d),i.appendChild(c);var s=document.createElement("div");s.className="weekly-trends-rating";var m=document.createElement("div");m.className="weekly-trends-rating-body";var v=document.createElement("div");v.className="weekly-trends-rating-active";var p=document.createElement("div");p.className="weekly-trends-rating-items";for(var u=1;u<=5;u++){var g=document.createElement("input");g.type="radio",g.className="weekly-trends-rating-item",g.value=u,g.name="rating-".concat(t.title),p.appendChild(g)}v.appendChild(p),m.appendChild(v),s.appendChild(m),i.appendChild(s);var h=document.querySelectorAll(".weekly-trends-rating");function f(){for(var e,t,a=0;a<h.length;a++)o(h[a]);function o(e){r(e),i()}function r(a){e=a.querySelector(".weekly-trends-rating-active"),t=n.vote_average}function i(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:t)/10*100;e.style.width="".concat(n,"%")}}h.length>0&&f(),a.appendChild(i),a.addEventListener("click",(function(){!function(t,n){console.log("Open Modal"),console.log("Movie Title:",t.title),console.log("Movie Genres:",e(n.genres,n.release_date)),console.log("Movie Rating:",n.vote_average)}(t,n)}))}return a}(n,t);o.appendChild(a)})).catch((function(e){console.log(e)}))}))})).catch((function(e){console.log(e)}))}))}();
//# sourceMappingURL=index.d812e370.js.map
