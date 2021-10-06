/*! For license information please see 36.js.LICENSE.txt */
"use strict";(self.webpackChunkcar_tube=self.webpackChunkcar_tube||[]).push([[36],{645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var h=this[a][0];null!=h&&(o[h]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);i&&o[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var h=t[a],c=i.base?h[0]+i.base:h[0],l=r[c]||0,p="".concat(c," ").concat(l);r[c]=l+1;var u=n(p),d={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(-1!==u)e[u].references++,e[u].updater(d);else{var f=s(d,i);i.byIndex=a,e.splice(a,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var h=i(t,s),c=0;c<r.length;c++){var l=n(r[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=h}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},345:(t,e,n)=>{n.d(e,{C:()=>a});var i=n(602),s=n(445);const r=new WeakMap,o=2147483647,a=(0,s.XM)(((...t)=>e=>{let n=r.get(e);void 0===n&&(n={lastRenderedIndex:o,values:[]},r.set(e,n));const s=n.values;let a=s.length;n.values=t;for(let r=0;r<t.length&&!(r>n.lastRenderedIndex);r++){const h=t[r];if((0,i.pt)(h)||"function"!=typeof h.then){e.setValue(h),n.lastRenderedIndex=r;break}r<a&&h===s[r]||(n.lastRenderedIndex=o,a=0,Promise.resolve(h).then((t=>{const i=n.values.indexOf(h);i>-1&&i<n.lastRenderedIndex&&(n.lastRenderedIndex=i,e.setValue(t),e.commit())})))}}))},229:(t,e,n)=>{n.d(e,{X:()=>s,w:()=>r});const i=new WeakMap,s=t=>(...e)=>{const n=t(...e);return i.set(n,!0),n},r=t=>"function"==typeof t&&i.has(t)},105:(t,e,n)=>{n.d(e,{eC:()=>i,r4:()=>s});const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}}},356:(t,e,n)=>{n.d(e,{J:()=>i,L:()=>s});const i={},s={}},602:(t,e,n)=>{n.d(e,{pt:()=>c,QG:()=>p,nt:()=>d,JG:()=>f,m:()=>m,K1:()=>_});var i=n(229),s=n(105),r=n(356),o=n(622),a=n(817),h=n(557);const c=t=>null===t||!("object"==typeof t||"function"==typeof t),l=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class p{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new u(this)}_getValue(){const t=this.strings,e=t.length-1,n=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=n[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!l(t))return t}let i="";for(let s=0;s<e;s++){i+=t[s];const e=n[s];if(void 0!==e){const t=e.value;if(c(t)||!l(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class u{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r.J||c(t)&&t===this.value||(this.value=t,(0,i.w)(t)||(this.committer.dirty=!0))}commit(){for(;(0,i.w)(this.value);){const t=this.value;this.value=r.J,t(this)}this.value!==r.J&&this.committer.commit()}}class d{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild((0,h.IW)()),this.endNode=t.appendChild((0,h.IW)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=(0,h.IW)()),t.__insert(this.endNode=(0,h.IW)())}insertAfterPart(t){t.__insert(this.startNode=(0,h.IW)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;(0,i.w)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.J,t(this)}const t=this.__pendingValue;t!==r.J&&(c(t)?t!==this.value&&this.__commitText(t):t instanceof a.j?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):l(t)?this.__commitIterable(t):t===r.L?(this.value=r.L,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof o.R&&this.value.template===e)this.value.update(t.values);else{const n=new o.R(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const s of t)n=e[i],void 0===n&&(n=new d(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(s),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){(0,s.r4)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class f{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;(0,i.w)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.J,t(this)}if(this.__pendingValue===r.J)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=r.J}}class m extends p{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new v(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class v extends u{}let g=!1;(()=>{try{const t={get capture(){return g=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class _{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;(0,i.w)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.J,t(this)}if(this.__pendingValue===r.J)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=y(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=r.J}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const y=t=>t&&(g?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},622:(t,e,n)=>{n.d(e,{R:()=>r});var i=n(105),s=n(557);class r{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=i.eC?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let o,a=0,h=0,c=r.nextNode();for(;a<n.length;)if(o=n[a],(0,s.pC)(o)){for(;h<o.index;)h++,"TEMPLATE"===c.nodeName&&(e.push(c),r.currentNode=c.content),null===(c=r.nextNode())&&(r.currentNode=e.pop(),c=r.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return i.eC&&(document.adoptNode(t),customElements.upgrade(t)),t}}},817:(t,e,n)=>{n.d(e,{j:()=>o}),n(105);var i=n(557);const s=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),r=` ${i.Jw} `;class o{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let s=0;s<t;s++){const t=this.strings[s],o=t.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===t.indexOf("--\x3e",o+1);const a=i.W5.exec(t);e+=null===a?t+(n?r:i.N):t.substr(0,a.index)+a[1]+a[2]+i.$E+a[3]+i.Jw}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==s&&(e=s.createHTML(e)),t.innerHTML=e,t}}},557:(t,e,n)=>{n.d(e,{Jw:()=>i,N:()=>s,$E:()=>o,YS:()=>a,pC:()=>c,IW:()=>l,W5:()=>p});const i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${s}`),o="$lit$";class a{constructor(t,e){this.parts=[],this.element=e;const n=[],s=[],a=document.createTreeWalker(e.content,133,null,!1);let c=0,u=-1,d=0;const{strings:f,values:{length:m}}=t;for(;d<m;){const t=a.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)h(e[t].name,o)&&i++;for(;i-- >0;){const e=f[d],n=p.exec(e)[2],i=n.toLowerCase()+o,s=t.getAttribute(i);t.removeAttribute(i);const a=s.split(r);this.parts.push({type:"attribute",index:u,name:n,strings:a}),d+=a.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,s=e.split(r),a=s.length-1;for(let e=0;e<a;e++){let n,r=s[e];if(""===r)n=l();else{const t=p.exec(r);null!==t&&h(t[2],o)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-o.length)+t[3]),n=document.createTextNode(r)}i.insertBefore(n,t),this.parts.push({type:"node",index:++u})}""===s[a]?(i.insertBefore(l(),t),n.push(t)):t.data=s[a],d+=a}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&u!==c||(u++,e.insertBefore(l(),t)),c=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(n.push(t),u--),d++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),d++}}else a.currentNode=s.pop()}for(const t of n)t.parentNode.removeChild(t)}}const h=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},445:(t,e,n)=>{n.d(e,{XM:()=>o.X,dy:()=>d,sY:()=>u});var i=n(602);const s=new class{handleAttributeExpressions(t,e,n,s){const r=e[0];return"."===r?new i.m(t,e.slice(1),n).parts:"@"===r?[new i.K1(t,e.slice(1),s.eventContext)]:"?"===r?[new i.JG(t,e.slice(1),n)]:new i.QG(t,e,n).parts}handleTextExpression(t){return new i.nt(t)}};var r=n(817),o=n(229),a=n(105),h=(n(356),n(557));function c(t){let e=l.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},l.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(h.Jw);return n=e.keyString.get(i),void 0===n&&(n=new h.YS(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const l=new Map,p=new WeakMap,u=(t,e,n)=>{let s=p.get(e);void 0===s&&((0,a.r4)(e,e.firstChild),p.set(e,s=new i.nt(Object.assign({templateFactory:c},n))),s.appendInto(e)),s.setValue(t),s.commit()};n(622),"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const d=(t,...e)=>new r.j(t,e,"html",s)},481:(t,e,n)=>{n.d(e,{Z:()=>A});var i=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},s=function t(e,n,s){return i(n=n||[])?s||(s={}):(s=n,n=[]),e instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return d(t,e)}(e,n):i(e)?function(e,n,i){for(var s=[],r=0;r<e.length;r++)s.push(t(e[r],n,i).source);return d(new RegExp("(?:"+s.join("|")+")",f(i)),n)}(e,n,s):function(t,e,n){for(var i=c(t),s=m(i,n),r=0;r<i.length;r++)"string"!=typeof i[r]&&e.push(i[r]);return d(s,e)}(e,n,s)},r=c,o=l,a=m,h=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function c(t){for(var e,n=[],i=0,s=0,r="";null!=(e=h.exec(t));){var o=e[0],a=e[1],c=e.index;if(r+=t.slice(s,c),s=c+o.length,a)r+=a[1];else{r&&(n.push(r),r="");var l=e[2],p=e[3],d=e[4],f=e[5],m=e[6],v=e[7],g="+"===m||"*"===m,_="?"===m||"*"===m,y=l||"/",w=d||f||(v?".*":"[^"+y+"]+?");n.push({name:p||i++,prefix:l||"",delimiter:y,optional:_,repeat:g,pattern:u(w)})}}return s<t.length&&(r+=t.substr(s)),r&&n.push(r),n}function l(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^"+t[n].pattern+"$"));return function(n){for(var s="",r=n||{},o=0;o<t.length;o++){var a=t[o];if("string"!=typeof a){var h,c=r[a.name];if(null==c){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(i(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+c+'"');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var l=0;l<c.length;l++){if(h=encodeURIComponent(c[l]),!e[o].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+h+'"');s+=(0===l?a.prefix:a.delimiter)+h}}else{if(h=encodeURIComponent(c),!e[o].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+h+'"');s+=a.prefix+h}}else s+=a}return s}}function p(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function u(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function d(t,e){return t.keys=e,t}function f(t){return t.sensitive?"":"i"}function m(t,e){for(var n=(e=e||{}).strict,i=!1!==e.end,s="",r=t[t.length-1],o="string"==typeof r&&/\/$/.test(r),a=0;a<t.length;a++){var h=t[a];if("string"==typeof h)s+=p(h);else{var c=p(h.prefix),l=h.pattern;h.repeat&&(l+="(?:"+c+l+")*"),s+=l=h.optional?c?"(?:"+c+"("+l+"))?":"("+l+")?":c+"("+l+")"}}return n||(s=(o?s.slice(0,-2):s)+"(?:\\/(?=$))?"),s+=i?"$":n&&o?"":"(?=\\/|$)",new RegExp("^"+s,f(e))}s.parse=r,s.compile=function(t){return l(c(t))},s.tokensToFunction=o,s.tokensToRegExp=a;var v,g="undefined"!=typeof document,_="undefined"!=typeof window,y="undefined"!=typeof history,w="undefined"!=typeof process,x=g&&document.ontouchstart?"touchstart":"click",b=_&&!(!window.history.location&&!window.location);function E(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function N(t,e){if("function"==typeof t)return N.call(this,"*",t);if("function"==typeof e)for(var n=new k(t,null,this),i=1;i<arguments.length;++i)this.callbacks.push(n.middleware(arguments[i]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function C(t){if(!t.handled){var e=this,n=e._window;(e._hashbang?b&&this._getBase()+n.location.hash.replace("#!",""):b&&n.location.pathname+n.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,b&&(n.location.href=t.canonicalPath))}}function T(t,e,n){var i=this.page=n||N,s=i._window,r=i._hashbang,o=i._getBase();"/"===t[0]&&0!==t.indexOf(o)&&(t=o+(r?"#!":"")+t);var a=t.indexOf("?");this.canonicalPath=t;var h=new RegExp("^"+o.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"));if(this.path=t.replace(h,"")||"/",r&&(this.path=this.path.replace("#!","")||"/"),this.title=g&&s.document.title,this.state=e||{},this.state.path=t,this.querystring=~a?i._decodeURLEncodedURIComponent(t.slice(a+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~a?t.slice(0,a):t),this.params={},this.hash="",!r){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=i._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}function k(t,e,n){var i=this.page=n||R,r=e||{};r.strict=r.strict||i._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=s(this.path,this.keys=[],r)}E.prototype.configure=function(t){var e=t||{};this._window=e.window||_&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&_,this._click=!1!==e.click&&g,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):_&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(x,this.clickHandler,!1):g&&n.document.removeEventListener(x,this.clickHandler,!1),this._hashbang&&_&&!y?n.addEventListener("hashchange",this._onpopstate,!1):_&&n.removeEventListener("hashchange",this._onpopstate,!1)},E.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},E.prototype._getBase=function(){var t=this._base;if(t)return t;var e=_&&this._window&&this._window.location;return _&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},E.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},E.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var n;if(this._running=!0,b){var i=this._window.location;n=this._hashbang&&~i.hash.indexOf("#!")?i.hash.substr(2)+i.search:this._hashbang?i.search+i.hash:i.pathname+i.search+i.hash}this.replace(n,null,!0,e.dispatch)}},E.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(x,this.clickHandler,!1),_&&t.removeEventListener("popstate",this._onpopstate,!1),_&&t.removeEventListener("hashchange",this._onpopstate,!1)}},E.prototype.show=function(t,e,n,i){var s=new T(t,e,this),r=this.prevContext;return this.prevContext=s,this.current=s.path,!1!==n&&this.dispatch(s,r),!1!==s.handled&&!1!==i&&s.pushState(),s},E.prototype.back=function(t,e){var n=this;if(this.len>0){var i=this._window;y&&i.history.back(),this.len--}else t?setTimeout((function(){n.show(t,e)})):setTimeout((function(){n.show(n._getBase(),e)}))},E.prototype.redirect=function(t,e){var n=this;"string"==typeof t&&"string"==typeof e&&N.call(this,t,(function(t){setTimeout((function(){n.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){n.replace(t)}),0)},E.prototype.replace=function(t,e,n,i){var s=new T(t,e,this),r=this.prevContext;return this.prevContext=s,this.current=s.path,s.init=n,s.save(),!1!==i&&this.dispatch(s,r),s},E.prototype.dispatch=function(t,e){var n=0,i=0,s=this;function r(){var e=s.callbacks[n++];if(t.path===s.current)return e?void e(t,r):C.call(s,t);t.handled=!1}e?function t(){var n=s.exits[i++];if(!n)return r();n(e,t)}():r()},E.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var n=new k(t,null,this),i=1;i<arguments.length;++i)this.exits.push(n.middleware(arguments[i]))},E.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,n=t.path||(t.composedPath?t.composedPath():null);if(n)for(var i=0;i<n.length;i++)if(n[i].nodeName&&"A"===n[i].nodeName.toUpperCase()&&n[i].href){e=n[i];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var s="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var r=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==r)&&!(r&&r.indexOf("mailto:")>-1)&&!(s?e.target.baseVal:e.target)&&(s||this.sameOrigin(e.href))){var o=s?e.href.baseVal:e.pathname+e.search+(e.hash||"");o="/"!==o[0]?"/"+o:o,w&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var a=o,h=this._getBase();0===o.indexOf(h)&&(o=o.substr(h.length)),this._hashbang&&(o=o.replace("#!","")),(!h||a!==o||b&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(a))}}}}},E.prototype._onpopstate=(v=!1,_?(g&&"complete"===document.readyState?v=!0:window.addEventListener("load",(function(){setTimeout((function(){v=!0}),0)})),function(t){if(v){var e=this;if(t.state){var n=t.state.path;e.replace(n,t.state)}else if(b){var i=e._window.location;e.show(i.pathname+i.search+i.hash,void 0,void 0,!1)}}}):function(){}),E.prototype._which=function(t){return null==(t=t||_&&this._window.event).which?t.button:t.which},E.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&b)return new URL(t,e.location.toString());if(g){var n=e.document.createElement("a");return n.href=t,n}},E.prototype.sameOrigin=function(t){if(!t||!b)return!1;var e=this._toURL(t),n=this._window.location;return n.protocol===e.protocol&&n.hostname===e.hostname&&(n.port===e.port||""===n.port&&(80==e.port||443==e.port))},E.prototype._samePath=function(t){if(!b)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},E.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},T.prototype.pushState=function(){var t=this.page,e=t._window,n=t._hashbang;t.len++,y&&e.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},T.prototype.save=function(){var t=this.page;y&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},k.prototype.middleware=function(t){var e=this;return function(n,i){if(e.match(n.path,n.params))return n.routePath=e.path,t(n,i);i()}},k.prototype.match=function(t,e){var n=this.keys,i=t.indexOf("?"),s=~i?t.slice(0,i):t,r=this.regexp.exec(decodeURIComponent(s));if(!r)return!1;delete e[0];for(var o=1,a=r.length;o<a;++o){var h=n[o-1],c=this.page._decodeURLEncodedURIComponent(r[o]);void 0===c&&hasOwnProperty.call(e,h.name)||(e[h.name]=c)}return!0};var R=function t(){var e=new E;function n(){return N.apply(e,arguments)}return n.callbacks=e.callbacks,n.exits=e.exits,n.base=e.base.bind(e),n.strict=e.strict.bind(e),n.start=e.start.bind(e),n.stop=e.stop.bind(e),n.show=e.show.bind(e),n.back=e.back.bind(e),n.redirect=e.redirect.bind(e),n.replace=e.replace.bind(e),n.dispatch=e.dispatch.bind(e),n.exit=e.exit.bind(e),n.configure=e.configure.bind(e),n.sameOrigin=e.sameOrigin.bind(e),n.clickHandler=e.clickHandler.bind(e),n.create=t,Object.defineProperty(n,"len",{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(n,"current",{get:function(){return e.current},set:function(t){e.current=t}}),n.Context=T,n.Route=k,n}(),L=R,V=R;L.default=V;const A=L}}]);