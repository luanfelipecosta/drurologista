!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){e.fn.conformity=function(t){var i={mode:"min-height"},h=e(this),n=0,o=0,s=[],f=0;return t&&e.extend(i,t),h.each(function(){"min-height"===i.mode?(this.style.height="auto",this.style.minHeight=0):"height"===i.mode&&(this.style.height="auto"),this.style.height="auto",f=this.getBoundingClientRect().top;var e;if(o!=f){for(var t=s.length;t--;)s[t].style[i.mode]=n;s.length=0,o=f,n=this.offsetHeight,s.push(this)}else e=this.offsetHeight,s.push(this),n=e>n?e:n;for(var t=s.length;t--;)s[t].style[i.mode]=n+"px"})}});
//# sourceMappingURL=conformity.min.js.map