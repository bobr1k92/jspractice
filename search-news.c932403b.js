!function(){var e="b5f9a10038a94cda93723e0a1eeb5c6e",n=document.getElementById("searchCtr"),t=document.getElementById("searchNewsField"),c=document.getElementById("articles");n.addEventListener("click",(function(n){!function(n){var t=n.query,r="https://newsapi.org/v2/everything?q=".concat(t,"&from=2022-12-12&apiKey=").concat(e);fetch(r).then((function(e){if(!e.ok)throw new Error(e.message);return e.json()})).then((function(e){!function(e){c.innerHTML="";var n=e.map((function(e){var n=e.title,t=e.description,c=e.url,r=e.urlToImage;return'<article class="news">\n        <h2>'.concat(n,"</h2>\n        <div>").concat(t,'</div>\n        <img src="').concat(r,'" alt="').concat(n,'" />\n        <a href="').concat(c,'">more</a>\n      </article>')}));c.insertAdjacentHTML("beforeend",n.join(""))}(e.articles)}))}({query:t.value}),console.log(query)}))}();
//# sourceMappingURL=search-news.c932403b.js.map
