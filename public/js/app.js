(()=>{var e={69:function(e){e.exports=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t,r){return(s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&i(o,r.prototype),o}).apply(null,arguments)}function a(e){var t="function"==typeof Map?new Map:void 0;return(a=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return s(e,arguments,o(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,e)})(e)}function c(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var u;!function(e){e[e.off=0]="off",e[e.error=1]="error",e[e.warning=2]="warning",e[e.info=3]="info",e[e.debug=4]="debug"}(u||(u={}));var h=u.off,l=function(){function e(e){this.t=e}e.getLevel=function(){return h},e.setLevel=function(e){return h=u[e]};var t=e.prototype;return t.error=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.i(console.error,u.error,t)},t.warn=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.i(console.warn,u.warning,t)},t.info=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.i(console.info,u.info,t)},t.debug=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.i(console.log,u.debug,t)},t.i=function(t,r,n){r<=e.getLevel()&&t.apply(console,["["+this.t+"] "].concat(n))},e}(),f=L,d=b,v=y,p=w,m=k,g=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function y(e,t){for(var r,n=[],o=0,i=0,s="",a=t&&t.delimiter||"/",c=t&&t.whitelist||void 0,u=!1;null!==(r=g.exec(e));){var h=r[0],l=r[1],f=r.index;if(s+=e.slice(i,f),i=f+h.length,l)s+=l[1],u=!0;else{var d="",v=r[2],p=r[3],m=r[4],y=r[5];if(!u&&s.length){var b=s.length-1,w=s[b];(!c||c.indexOf(w)>-1)&&(d=w,s=s.slice(0,b))}s&&(n.push(s),s="",u=!1);var E=p||m,k=d||a;n.push({name:v||o++,prefix:d,delimiter:k,optional:"?"===y||"*"===y,repeat:"+"===y||"*"===y,pattern:E?P(E):"[^"+x(k===a?k:k+a)+"]+?"})}}return(s||i<e.length)&&n.push(s+e.substr(i)),n}function b(e,t){return function(r,n){var o=e.exec(r);if(!o)return!1;for(var i=o[0],s=o.index,a={},c=n&&n.decode||decodeURIComponent,u=1;u<o.length;u++)if(void 0!==o[u]){var h=t[u-1];a[h.name]=h.repeat?o[u].split(h.delimiter).map((function(e){return c(e,h)})):c(o[u],h)}return{path:i,index:s,params:a}}}function w(e,t){for(var r=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(r[n]=new RegExp("^(?:"+e[n].pattern+")$",E(t)));return function(t,n){for(var o="",i=n&&n.encode||encodeURIComponent,s=!n||!1!==n.validate,a=0;a<e.length;a++){var c=e[a];if("string"!=typeof c){var u,h=t?t[c.name]:void 0;if(Array.isArray(h)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but got array');if(0===h.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var l=0;l<h.length;l++){if(u=i(h[l],c),s&&!r[a].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'"');o+=(0===l?c.prefix:c.delimiter)+u}}else if("string"!=typeof h&&"number"!=typeof h&&"boolean"!=typeof h){if(!c.optional)throw new TypeError('Expected "'+c.name+'" to be '+(c.repeat?"an array":"a string"))}else{if(u=i(String(h),c),s&&!r[a].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but got "'+u+'"');o+=c.prefix+u}}else o+=c}return o}}function x(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function P(e){return e.replace(/([=!:$/()])/g,"\\$1")}function E(e){return e&&e.sensitive?"":"i"}function k(e,t,r){for(var n=(r=r||{}).strict,o=!1!==r.start,i=!1!==r.end,s=r.delimiter||"/",a=[].concat(r.endsWith||[]).map(x).concat("$").join("|"),c=o?"^":"",u=0;u<e.length;u++){var h=e[u];if("string"==typeof h)c+=x(h);else{var l=h.repeat?"(?:"+h.pattern+")(?:"+x(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;t&&t.push(h),c+=h.optional?h.prefix?"(?:"+x(h.prefix)+"("+l+"))?":"("+l+")?":x(h.prefix)+"("+l+")"}}if(i)n||(c+="(?:"+x(s)+")?"),c+="$"===a?"$":"(?="+a+")";else{var f=e[e.length-1],d="string"==typeof f?f[f.length-1]===s:void 0===f;n||(c+="(?:"+x(s)+"(?="+a+"))?"),d||(c+="(?="+x(s)+"|"+a+")")}return new RegExp(c,E(r))}function L(e,t,r){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(L(e[o],t,r).source);return new RegExp("(?:"+n.join("|")+")",E(r))}(e,t,r):function(e,t,r){return k(y(e,r),t,r)}(e,t,r)}f.match=function(e,t){var r=[];return b(L(e,r,t),r)},f.regexpToFunction=d,f.parse=v,f.compile=function(e,t){return w(y(e,t),t)},f.tokensToFunction=p,f.tokensToRegExp=m;var S={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},j=new(function(){function e(){this.o=S,this.u=new DOMParser}var t=e.prototype;return t.toString=function(e){return e.outerHTML},t.toDocument=function(e){return this.u.parseFromString(e,"text/html")},t.toElement=function(e){var t=document.createElement("div");return t.innerHTML=e,t},t.getHtml=function(e){return void 0===e&&(e=document),this.toString(e.documentElement)},t.getWrapper=function(e){return void 0===e&&(e=document),e.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},t.getContainer=function(e){return void 0===e&&(e=document),e.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},t.removeContainer=function(e){document.body.contains(e)&&e.parentNode.removeChild(e)},t.addContainer=function(e,t){var r=this.getContainer();r?this.s(e,r):t.appendChild(e)},t.getNamespace=function(e){void 0===e&&(e=document);var t=e.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return t?t.getAttribute(this.o.prefix+"-"+this.o.namespace):null},t.getHref=function(e){if(e.tagName&&"a"===e.tagName.toLowerCase()){if("string"==typeof e.href)return e.href;var t=e.getAttribute("href")||e.getAttribute("xlink:href");if(t)return this.resolveUrl(t.baseVal||t)}return null},t.resolveUrl=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t.length;if(0===n)throw new Error("resolveUrl requires at least one argument; got none.");var o=document.createElement("base");if(o.href=arguments[0],1===n)return o.href;var i=document.getElementsByTagName("head")[0];i.insertBefore(o,i.firstChild);for(var s,a=document.createElement("a"),c=1;c<n;c++)a.href=arguments[c],o.href=s=a.href;return i.removeChild(o),s},t.s=function(e,t){t.parentNode.insertBefore(e,t.nextSibling)},e}()),O=new(function(){function e(){this.h=[],this.v=-1}var n=e.prototype;return n.init=function(e,t){this.l="barba";var r={ns:t,scroll:{x:window.scrollX,y:window.scrollY},url:e};this.h.push(r),this.v=0;var n={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(n,"",e)},n.change=function(e,t,r){if(r&&r.state){var n=r.state,o=n.index;t=this.m(this.v-o),this.replace(n.states),this.v=o}else this.add(e,t);return t},n.add=function(e,t){var r=this.size,n=this.p(t),o={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:e};this.h.push(o),this.v=r;var i={from:this.l,index:r,states:[].concat(this.h)};switch(n){case"push":window.history&&window.history.pushState(i,"",e);break;case"replace":window.history&&window.history.replaceState(i,"",e)}},n.update=function(e,t){var n=t||this.v,o=r({},this.get(n),{},e);this.set(n,o)},n.remove=function(e){e?this.h.splice(e,1):this.h.pop(),this.v--},n.clear=function(){this.h=[],this.v=-1},n.replace=function(e){this.h=e},n.get=function(e){return this.h[e]},n.set=function(e,t){return this.h[e]=t},n.p=function(e){var t="push",r=e,n=S.prefix+"-"+S.history;return r.hasAttribute&&r.hasAttribute(n)&&(t=r.getAttribute(n)),t},n.m=function(e){return Math.abs(e)>1?e>0?"forward":"back":0===e?"popstate":e>0?"back":"forward"},t(e,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),e}()),q=function(e,t){try{var r=function(){if(!t.next.html)return Promise.resolve(e).then((function(e){var r=t.next;if(e){var n=j.toElement(e);r.namespace=j.getNamespace(n),r.container=j.getContainer(n),r.html=e,O.update({ns:r.namespace});var o=j.toDocument(e);document.title=o.title}}))}();return Promise.resolve(r&&r.then?r.then((function(){})):void 0)}catch(e){return Promise.reject(e)}},A=f,R={__proto__:null,update:q,nextTick:function(){return new Promise((function(e){window.requestAnimationFrame(e)}))},pathToRegexp:A},T=function(){return window.location.origin},C=function(e){return void 0===e&&(e=window.location.href),_(e).port},_=function(e){var t,r=e.match(/:\d+/);if(null===r)/^http/.test(e)&&(t=80),/^https/.test(e)&&(t=443);else{var n=r[0].substring(1);t=parseInt(n,10)}var o,i=e.replace(T(),""),s={},a=i.indexOf("#");a>=0&&(o=i.slice(a+1),i=i.slice(0,a));var c=i.indexOf("?");return c>=0&&(s=H(i.slice(c+1)),i=i.slice(0,c)),{hash:o,path:i,port:t,query:s}},H=function(e){return e.split("&").reduce((function(e,t){var r=t.split("=");return e[r[0]]=r[1],e}),{})},M=function(e){return void 0===e&&(e=window.location.href),e.replace(/(\/#.*|\/|#.*)$/,"")},I={__proto__:null,getHref:function(){return window.location.href},getOrigin:T,getPort:C,getPath:function(e){return void 0===e&&(e=window.location.href),_(e).path},parse:_,parseQuery:H,clean:M};function N(e,t,r){return void 0===t&&(t=2e3),new Promise((function(n,o){var i=new XMLHttpRequest;i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE)if(200===i.status)n(i.responseText);else if(i.status){var t={status:i.status,statusText:i.statusText};r(e,t),o(t)}},i.ontimeout=function(){var n=new Error("Timeout error ["+t+"]");r(e,n),o(n)},i.onerror=function(){var t=new Error("Fetch error");r(e,t),o(t)},i.open("GET",e),i.timeout=t,i.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),i.setRequestHeader("x-barba","yes"),i.send()}))}var B=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then};function D(e,t){return void 0===t&&(t={}),function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=!1;return new Promise((function(r,o){t.async=function(){return i=!0,function(e,t){e?o(e):r(t)}};var s=e.apply(t,n);i||(B(s)?s.then(r,o):r(s))}))}}var U=new(function(e){function t(){var t;return(t=e.call(this)||this).logger=new l("@barba/core"),t.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],t.registered=new Map,t.init(),t}n(t,e);var r=t.prototype;return r.init=function(){var e=this;this.registered.clear(),this.all.forEach((function(t){e[t]||(e[t]=function(r,n){e.registered.has(t)||e.registered.set(t,new Set),e.registered.get(t).add({ctx:n||{},fn:r})})}))},r.do=function(e){for(var t=this,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];if(this.registered.has(e)){var i=Promise.resolve();return this.registered.get(e).forEach((function(e){i=i.then((function(){return D(e.fn,e.ctx).apply(void 0,n)}))})),i.catch((function(r){t.logger.debug("Hook error ["+e+"]"),t.logger.error(r)}))}return Promise.resolve()},r.clear=function(){var e=this;this.all.forEach((function(t){delete e[t]})),this.init()},r.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var e=[];this.registered.forEach((function(t,r){return e.push(r)})),this.logger.info("Registered hooks: "+e.join(","))},t}((function(){}))),$=function(){function e(e){if(this.P=[],"boolean"==typeof e)this.g=e;else{var t=Array.isArray(e)?e:[e];this.P=t.map((function(e){return A(e)}))}}return e.prototype.checkHref=function(e){if("boolean"==typeof this.g)return this.g;var t=_(e).path;return this.P.some((function(e){return null!==e.exec(t)}))},e}(),F=function(e){function t(t){var r;return(r=e.call(this,t)||this).k=new Map,r}n(t,e);var o=t.prototype;return o.set=function(e,t,r){return this.k.set(e,{action:r,request:t}),{action:r,request:t}},o.get=function(e){return this.k.get(e)},o.getRequest=function(e){return this.k.get(e).request},o.getAction=function(e){return this.k.get(e).action},o.has=function(e){return!this.checkHref(e)&&this.k.has(e)},o.delete=function(e){return this.k.delete(e)},o.update=function(e,t){var n=r({},this.k.get(e),{},t);return this.k.set(e,n),n},t}($),Y=function(){return!window.history.pushState},W=function(e){return!e.el||!e.href},z=function(e){var t=e.event;return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey},K=function(e){var t=e.el;return t.hasAttribute("target")&&"_blank"===t.target},X=function(e){var t=e.el;return void 0!==t.protocol&&window.location.protocol!==t.protocol||void 0!==t.hostname&&window.location.hostname!==t.hostname},G=function(e){var t=e.el;return void 0!==t.port&&C()!==C(t.href)},Q=function(e){var t=e.el;return t.getAttribute&&"string"==typeof t.getAttribute("download")},V=function(e){return e.el.hasAttribute(S.prefix+"-"+S.prevent)},J=function(e){return Boolean(e.el.closest("["+S.prefix+"-"+S.prevent+'="all"]'))},Z=function(e){var t=e.href;return M(t)===M()&&C(t)===C()},ee=function(e){function t(t){var r;return(r=e.call(this,t)||this).suite=[],r.tests=new Map,r.init(),r}n(t,e);var r=t.prototype;return r.init=function(){this.add("pushState",Y),this.add("exists",W),this.add("newTab",z),this.add("blank",K),this.add("corsDomain",X),this.add("corsPort",G),this.add("download",Q),this.add("preventSelf",V),this.add("preventAll",J),this.add("sameUrl",Z,!1)},r.add=function(e,t,r){void 0===r&&(r=!0),this.tests.set(e,t),r&&this.suite.push(e)},r.run=function(e,t,r,n){return this.tests.get(e)({el:t,event:r,href:n})},r.checkLink=function(e,t,r){var n=this;return this.suite.some((function(o){return n.run(o,e,t,r)}))},t}($),te=function(e){function t(r,n){var o;void 0===n&&(n="Barba error");for(var i=arguments.length,s=new Array(i>2?i-2:0),a=2;a<i;a++)s[a-2]=arguments[a];return(o=e.call.apply(e,[this].concat(s))||this).error=r,o.label=n,Error.captureStackTrace&&Error.captureStackTrace(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o),t),o.name="BarbaError",o}return n(t,e),t}(a(Error)),re=function(){function e(e){void 0===e&&(e=[]),this.logger=new l("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],e&&(this.all=this.all.concat(e)),this.update()}var t=e.prototype;return t.add=function(e,t){switch(e){case"rule":this.A.splice(t.position||0,0,t.value);break;case"transition":default:this.all.push(t)}this.update()},t.resolve=function(e,t){var r=this;void 0===t&&(t={});var n=t.once?this.once:this.page;n=n.filter(t.self?function(e){return e.name&&"self"===e.name}:function(e){return!e.name||"self"!==e.name});var o=new Map,i=n.find((function(n){var i=!0,s={};return!(!t.self||"self"!==n.name)||(r.A.reverse().forEach((function(t){i&&(i=r.R(n,t,e,s),n.from&&n.to&&(i=r.R(n,t,e,s,"from")&&r.R(n,t,e,s,"to")),n.from&&!n.to&&(i=r.R(n,t,e,s,"from")),!n.from&&n.to&&(i=r.R(n,t,e,s,"to")))})),o.set(n,s),i)})),s=o.get(i),a=[];if(a.push(t.once?"once":"page"),t.self&&a.push("self"),s){var c,u=[i];Object.keys(s).length>0&&u.push(s),(c=this.logger).info.apply(c,["Transition found ["+a.join(",")+"]"].concat(u))}else this.logger.info("No transition found ["+a.join(",")+"]");return i},t.update=function(){var e=this;this.all=this.all.map((function(t){return e.T(t)})).sort((function(e,t){return e.priority-t.priority})).reverse().map((function(e){return delete e.priority,e})),this.page=this.all.filter((function(e){return void 0!==e.leave||void 0!==e.enter})),this.once=this.all.filter((function(e){return void 0!==e.once}))},t.R=function(e,t,r,n,o){var i=!0,s=!1,a=e,c=t.name,u=c,h=c,l=c,f=o?a[o]:a,d="to"===o?r.next:r.current;if(o?f&&f[c]:f[c]){switch(t.type){case"strings":default:var v=Array.isArray(f[u])?f[u]:[f[u]];d[u]&&-1!==v.indexOf(d[u])&&(s=!0),-1===v.indexOf(d[u])&&(i=!1);break;case"object":var p=Array.isArray(f[h])?f[h]:[f[h]];d[h]?(d[h].name&&-1!==p.indexOf(d[h].name)&&(s=!0),-1===p.indexOf(d[h].name)&&(i=!1)):i=!1;break;case"function":f[l](r)?s=!0:i=!1}s&&(o?(n[o]=n[o]||{},n[o][c]=a[o][c]):n[c]=a[c])}return i},t.O=function(e,t,r){var n=0;return(e[t]||e.from&&e.from[t]||e.to&&e.to[t])&&(n+=Math.pow(10,r),e.from&&e.from[t]&&(n+=1),e.to&&e.to[t]&&(n+=2)),n},t.T=function(e){var t=this;e.priority=0;var r=0;return this.A.forEach((function(n,o){r+=t.O(e,n.name,o+1)})),e.priority=r,e},e}(),ne=function(){function e(e){void 0===e&&(e=[]),this.logger=new l("@barba/core"),this.S=!1,this.store=new re(e)}var r=e.prototype;return r.get=function(e,t){return this.store.resolve(e,t)},r.doOnce=function(e){var t=e.data,r=e.transition;try{var n=function(){o.S=!1},o=this,i=r||{};o.S=!0;var s=c((function(){return Promise.resolve(o.j("beforeOnce",t,i)).then((function(){return Promise.resolve(o.once(t,i)).then((function(){return Promise.resolve(o.j("afterOnce",t,i)).then((function(){}))}))}))}),(function(e){o.S=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(e)}));return Promise.resolve(s&&s.then?s.then(n):n())}catch(e){return Promise.reject(e)}},r.doPage=function(e){var t=e.data,r=e.transition,n=e.page,o=e.wrapper;try{var i=function(e){if(s)return e;a.S=!1},s=!1,a=this,u=r||{},h=!0===u.sync||!1;a.S=!0;var l=c((function(){function e(){return Promise.resolve(a.j("before",t,u)).then((function(){function e(e){return Promise.resolve(a.remove(t)).then((function(){return Promise.resolve(a.j("after",t,u)).then((function(){}))}))}var r=function(){if(h)return c((function(){return Promise.resolve(a.add(t,o)).then((function(){return Promise.resolve(a.j("beforeLeave",t,u)).then((function(){return Promise.resolve(a.j("beforeEnter",t,u)).then((function(){return Promise.resolve(Promise.all([a.leave(t,u),a.enter(t,u)])).then((function(){return Promise.resolve(a.j("afterLeave",t,u)).then((function(){return Promise.resolve(a.j("afterEnter",t,u)).then((function(){}))}))}))}))}))}))}),(function(e){if(a.M(e))throw new te(e,"Transition error [sync]")}));var e=function(e){return c((function(){var e=function(){if(!1!==r)return Promise.resolve(a.add(t,o)).then((function(){return Promise.resolve(a.j("beforeEnter",t,u)).then((function(){return Promise.resolve(a.enter(t,u,r)).then((function(){return Promise.resolve(a.j("afterEnter",t,u)).then((function(){}))}))}))}))}();if(e&&e.then)return e.then((function(){}))}),(function(e){if(a.M(e))throw new te(e,"Transition error [before/after/enter]")}))},r=!1,i=c((function(){return Promise.resolve(a.j("beforeLeave",t,u)).then((function(){return Promise.resolve(Promise.all([a.leave(t,u),q(n,t)]).then((function(e){return e[0]}))).then((function(e){return r=e,Promise.resolve(a.j("afterLeave",t,u)).then((function(){}))}))}))}),(function(e){if(a.M(e))throw new te(e,"Transition error [before/after/leave]")}));return i&&i.then?i.then(e):e()}();return r&&r.then?r.then(e):e()}))}var r=function(){if(h)return Promise.resolve(q(n,t)).then((function(){}))}();return r&&r.then?r.then(e):e()}),(function(e){if(a.S=!1,e.name&&"BarbaError"===e.name)throw a.logger.debug(e.label),a.logger.error(e.error),e;throw a.logger.debug("Transition error [page]"),a.logger.error(e),e}));return Promise.resolve(l&&l.then?l.then(i):i(l))}catch(e){return Promise.reject(e)}},r.once=function(e,t){try{return Promise.resolve(U.do("once",e,t)).then((function(){return t.once?D(t.once,t)(e):Promise.resolve()}))}catch(e){return Promise.reject(e)}},r.leave=function(e,t){try{return Promise.resolve(U.do("leave",e,t)).then((function(){return t.leave?D(t.leave,t)(e):Promise.resolve()}))}catch(e){return Promise.reject(e)}},r.enter=function(e,t,r){try{return Promise.resolve(U.do("enter",e,t)).then((function(){return t.enter?D(t.enter,t)(e,r):Promise.resolve()}))}catch(e){return Promise.reject(e)}},r.add=function(e,t){try{return j.addContainer(e.next.container,t),U.do("nextAdded",e),Promise.resolve()}catch(e){return Promise.reject(e)}},r.remove=function(e){try{return j.removeContainer(e.current.container),U.do("currentRemoved",e),Promise.resolve()}catch(e){return Promise.reject(e)}},r.M=function(e){return e.message?!/Timeout error|Fetch error/.test(e.message):!e.status},r.j=function(e,t,r){try{return Promise.resolve(U.do(e,t,r)).then((function(){return r[e]?D(r[e],r)(t):Promise.resolve()}))}catch(e){return Promise.reject(e)}},t(e,[{key:"isRunning",get:function(){return this.S},set:function(e){this.S=e}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some((function(e){return"self"===e.name}))}},{key:"shouldWait",get:function(){return this.store.all.some((function(e){return e.to&&!e.to.route||e.sync}))}}]),e}(),oe=function(){function e(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,0!==e.length&&(e.forEach((function(e){t.byNamespace.set(e.namespace,e)})),this.names.forEach((function(e){U[e](t.L(e))})))}return e.prototype.L=function(e){var t=this;return function(r){var n=e.match(/enter/i)?r.next:r.current,o=t.byNamespace.get(n.namespace);return o&&o[e]?D(o[e],o)(r):Promise.resolve()}},e}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});var ie={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}};return new(function(){function e(){this.version="2.9.7",this.schemaPage=ie,this.Logger=l,this.logger=new l("@barba/core"),this.plugins=[],this.hooks=U,this.dom=j,this.helpers=R,this.history=O,this.request=N,this.url=I}var n=e.prototype;return n.use=function(e,t){var r=this.plugins;r.indexOf(e)>-1?this.logger.warn("Plugin ["+e.name+"] already installed."):"function"==typeof e.install?(e.install(this,t),r.push(e)):this.logger.warn("Plugin ["+e.name+'] has no "install" method.')},n.init=function(e){var t=void 0===e?{}:e,n=t.transitions,o=void 0===n?[]:n,i=t.views,s=void 0===i?[]:i,a=t.schema,c=void 0===a?S:a,u=t.requestError,h=t.timeout,f=void 0===h?2e3:h,d=t.cacheIgnore,v=void 0!==d&&d,p=t.prefetchIgnore,m=void 0!==p&&p,g=t.preventRunning,y=void 0!==g&&g,b=t.prevent,w=void 0===b?null:b,x=t.debug,P=t.logLevel;if(l.setLevel(!0===(void 0!==x&&x)?"debug":void 0===P?"off":P),this.logger.info(this.version),Object.keys(c).forEach((function(e){S[e]&&(S[e]=c[e])})),this.$=u,this.timeout=f,this.cacheIgnore=v,this.prefetchIgnore=m,this.preventRunning=y,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var E=this.data.current;if(!E.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new F(v),this.prevent=new ee(m),this.transitions=new ne(o),this.views=new oe(s),null!==w){if("function"!=typeof w)throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",w)}this.history.init(E.url.href,E.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach((function(e){return e.init()}));var k=this.data;k.trigger="barba",k.next=k.current,k.current=r({},this.schemaPage),this.hooks.do("ready",k),this.once(k),this.q()},n.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},n.force=function(e){window.location.assign(e)},n.go=function(e,t,r){var n;if(void 0===t&&(t="barba"),this.transitions.isRunning)this.force(e);else if(!(n="popstate"===t?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(e):this.prevent.run("sameUrl",null,null,e))||this.transitions.hasSelf)return t=this.history.change(e,t,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(e,t,n)},n.once=function(e){try{var t=this;return Promise.resolve(t.hooks.do("beforeEnter",e)).then((function(){function r(){return Promise.resolve(t.hooks.do("afterEnter",e)).then((function(){}))}var n=function(){if(t.transitions.hasOnce){var r=t.transitions.get(e,{once:!0});return Promise.resolve(t.transitions.doOnce({transition:r,data:e})).then((function(){}))}}();return n&&n.then?n.then(r):r()}))}catch(e){return Promise.reject(e)}},n.page=function(e,t,n){try{var o=function(){var e=i.data;return Promise.resolve(i.hooks.do("page",e)).then((function(){var t=c((function(){var t=i.transitions.get(e,{once:!1,self:n});return Promise.resolve(i.transitions.doPage({data:e,page:s,transition:t,wrapper:i._})).then((function(){i.q()}))}),(function(){0===l.getLevel()&&i.force(e.current.url.href)}));if(t&&t.then)return t.then((function(){}))}))},i=this;i.data.next.url=r({href:e},i.url.parse(e)),i.data.trigger=t;var s=i.cache.has(e)?i.cache.update(e,{action:"click"}).request:i.cache.set(e,i.request(e,i.timeout,i.onRequestError.bind(i,t)),"click").request,a=function(){if(i.transitions.shouldWait)return Promise.resolve(q(s,i.data)).then((function(){}))}();return Promise.resolve(a&&a.then?a.then(o):o())}catch(e){return Promise.reject(e)}},n.onRequestError=function(e){this.transitions.isRunning=!1;for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=r[0],i=r[1],s=this.cache.getAction(o);return this.cache.delete(o),!(this.$&&!1===this.$(e,s,o,i)||("click"===s&&this.force(o),1))},n.prefetch=function(e){var t=this;this.cache.has(e)||this.cache.set(e,this.request(e,this.timeout,this.onRequestError.bind(this,"barba")).catch((function(e){t.logger.error(e)})),"prefetch")},n.F=function(){!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},n.H=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},n.B=function(e){var t=this,r=this.I(e);if(r){var n=this.dom.getHref(r);this.prevent.checkHref(n)||this.cache.has(n)||this.cache.set(n,this.request(n,this.timeout,this.onRequestError.bind(this,r)).catch((function(e){t.logger.error(e)})),"enter")}},n.U=function(e){var t=this.I(e);if(t)return this.transitions.isRunning&&this.preventRunning?(e.preventDefault(),void e.stopPropagation()):void this.go(this.dom.getHref(t),t,e)},n.D=function(e){this.go(this.url.getHref(),"popstate",e)},n.I=function(e){for(var t=e.target;t&&!this.dom.getHref(t);)t=t.parentNode;if(t&&!this.prevent.checkLink(t,e,this.dom.getHref(t)))return t},n.q=function(){var e=this.url.getHref(),t={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:r({href:e},this.url.parse(e))};this.C={current:t,next:r({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},t(e,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),e}())}()},931:function(e){e.exports=("2.1.15",new(function(){function e(){this.name="@barba/css",this.version="2.1.15",this.prefix="barba",this.callbacks={},this.t=!1}var t=e.prototype;return t.install=function(e){this.logger=new e.Logger(this.name),this.logger.info(this.version),this.barba=e,this.i=this.i.bind(this),this.s=this.s.bind(this),this.h=this.h.bind(this)},t.init=function(){this.barba.hooks.before(this.o,this),this.barba.hooks.beforeOnce(this.o,this),this.barba.hooks.beforeOnce(this.u,this),this.barba.hooks.afterOnce(this.m,this),this.barba.hooks.beforeLeave(this.P,this),this.barba.hooks.afterLeave(this.v,this),this.barba.hooks.beforeEnter(this.l,this),this.barba.hooks.afterEnter(this.p,this),this.barba.transitions.once=this.i,this.barba.transitions.leave=this.s,this.barba.transitions.enter=this.h,this.barba.transitions.store.all.unshift({name:"barba",once:function(){},leave:function(){},enter:function(){}}),this.barba.transitions.store.update()},t.start=function(e,t){try{var r=this;return r.add(e,t),Promise.resolve(r.barba.helpers.nextTick()).then((function(){return r.add(e,t+"-active"),Promise.resolve(r.barba.helpers.nextTick()).then((function(){}))}))}catch(e){return Promise.reject(e)}},t.next=function(e,t){try{var r=this;return r.t=r.g(e),Promise.resolve(r.t?new Promise((function(n){try{return r.cb=n,r.callbacks[t]=n,e.addEventListener("transitionend",n,!1),Promise.resolve(r.barba.helpers.nextTick()).then((function(){return r.remove(e,t),r.add(e,t+"-to"),Promise.resolve(r.barba.helpers.nextTick()).then((function(){}))}))}catch(e){return Promise.reject(e)}})):(r.remove(e,t),Promise.resolve(r.barba.helpers.nextTick()).then((function(){return r.add(e,t+"-to"),Promise.resolve(r.barba.helpers.nextTick()).then((function(){}))}))))}catch(e){return Promise.reject(e)}},t.end=function(e,t){try{return this.remove(e,t+"-to"),this.remove(e,t+"-active"),e.removeEventListener("transitionend",this.callbacks[t]),this.t=!1,Promise.resolve()}catch(e){return Promise.reject(e)}},t.add=function(e,t){e.classList.add(this.prefix+"-"+t)},t.remove=function(e,t){e.classList.remove(this.prefix+"-"+t)},t.o=function(e,t){this.prefix=t.name||"barba"},t.g=function(e){return"0s"!==getComputedStyle(e).transitionDuration},t.u=function(e){return this.start(e.next.container,"once")},t.i=function(e,t){try{var r=this;return Promise.resolve(r.barba.hooks.do("once",e,t)).then((function(){return r.next(e.next.container,"once")}))}catch(e){return Promise.reject(e)}},t.m=function(e){return this.end(e.next.container,"once")},t.P=function(e){return this.start(e.current.container,"leave")},t.s=function(e,t){try{var r=this;return Promise.resolve(r.barba.hooks.do("leave",e,t)).then((function(){return r.next(e.current.container,"leave")}))}catch(e){return Promise.reject(e)}},t.v=function(e){return this.end(e.current.container,"leave"),this.barba.transitions.remove(e),Promise.resolve()},t.l=function(e){return 1===this.barba.history.size?Promise.resolve():this.start(e.next.container,"enter")},t.h=function(e,t){try{var r=this;return Promise.resolve(r.barba.hooks.do("enter",e,t)).then((function(){return r.next(e.next.container,"enter")}))}catch(e){return Promise.reject(e)}},t.p=function(e){return 1===this.barba.history.size?Promise.resolve():this.end(e.next.container,"enter")},e}()))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(69),t=r.n(e),n=r(931),o=r.n(n);t().use(o()),t().init({transitions:[{name:"fade",beforeEnter({current:e,next:t,trigger:r}){window.scrollTo({top:0,behavior:"smooth"})}}],views:[{namespace:"index",beforeEnter(){console.log("before enter")},afterLeave(){console.log(indexStyle())}}]}),function(){const e=document.querySelector("body"),r=document.querySelector("header"),n=(document.querySelectorAll("section"),document.querySelector("main"),r.querySelector(".navbar")),o=r.querySelector(".navbar-brand"),s=r.querySelectorAll(".nav-link"),a=r.querySelector(".btn"),c=(r.querySelectorAll(".social-link"),r.querySelector(".menu-item")),u=r.querySelector(".nav-center"),h=r.querySelector(".nav-right"),l=r.querySelector("a.github"),f=r.querySelector("a.linkedin"),d=r.querySelector("a.github img"),v=r.querySelector("a.linkedin img"),p="/images/icons/11-linkedin-white.svg",m="/images/icons/11-linkedin-gradient.svg",g="/images/icons/11-linkedin.svg",y="/images/icons/41-github-rounded-white.svg",b="/images/icons/41-github-rounded-gradient.svg",w="/images/icons/41-github-rounded.svg";t().hooks.beforeEnter((t=>{const x=t.next.namespace,P=function(){r.classList.add("scrolled"),o.classList.add("scrolledColor"),s.forEach((e=>{e.classList.add("scrolledColor")})),a.classList.add("btn-tertiary"),a.classList.remove("btn-secondary"),d.src=w,v.src=g,l.addEventListener("mouseover",(function(){d.src=b})),l.addEventListener("mouseout",(function(){d.src=w})),f.addEventListener("mouseover",(function(){v.src=m})),f.addEventListener("mouseout",(function(){v.src=g}))},E=function(){r.classList.remove("scrolled"),o.classList.remove("scrolledColor"),s.forEach((e=>{e.classList.remove("scrolledColor")})),a.classList.remove("btn-tertiary"),a.classList.add("btn-secondary"),d.src=y,v.src=p,l.addEventListener("mouseover",(function(e){d.src=b})),l.addEventListener("mouseout",(function(e){d.src=y})),f.addEventListener("mouseover",(function(e){v.src=m})),f.addEventListener("mouseout",(function(e){v.src=p}))};!function(){window.onscroll=function(){"index"==x?(0==e&&window.pageYOffset>68&&(P(),console.log("change images to light"),e++),1==e&&window.pageYOffset<68&&(E(),console.log("change images to dark"),e--)):(0==e&&window.pageYOffset>68&&(P(),console.log("change images to light"),e++),1==e&&window.pageYOffset<68&&(P(),console.log("change images to dark"),e--))};let e=0}(),function(){let e=window.pageYOffset;"index"==x?e>68?P():E():(console.log("not on homepage"),P())}(),"index"==x?(o.classList.add("nav-light"),s.forEach((e=>{e.classList.add("nav-light")})),r.dataset.home=!0,d.src=y,v.src=p,a.classList.remove("btn-tertiary"),a.classList.add("btn-secondary"),console.log("Index menu runs once")):(o.classList.remove("nav-light"),s.forEach((e=>{e.classList.remove("nav-light")})),r.dataset.home=!1,d.src=w,v.src=g,a.classList.remove("btn-secondary"),a.classList.add("btn-tertiary"),console.log("Index menu doesn't run")),i=0,c.addEventListener("click",(function(){0===i?(u.style.display="flex",h.style.display="flex",n.style.backgroundColor="var(--primary-text-color)",console.log("menu open"),i=1,console.log(i),r.classList.remove("scrolled"),o.classList.remove("scrolledColor"),s.forEach((e=>{e.classList.remove("scrolledColor")})),r.style.height="100vh",e.style.height="100vh",n.style.height="100%"):(u.style.display="none",h.style.display="none",n.style.backgroundColor="transparent",console.log("menu closed"),i=0,console.log(i),r.classList.add("scrolled"),o.classList.add("scrolledColor"),s.forEach((e=>{e.classList.add("scrolledColor")})),r.style.height="auto",n.style.height="auto",e.style.height="auto")}))}))}()})()})();