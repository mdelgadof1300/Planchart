(function(e){function t(t){for(var c,n,i=t[0],o=t[1],s=t[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);p&&p(t);while(d.length)d.shift()();return l.push.apply(l,s||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],c=!0,n=1;n<a.length;n++){var i=a[n];0!==r[i]&&(c=!1)}c&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var c={},n={app:0},r={app:0},l=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"00155ae3"}[e]+".js"}function o(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={about:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var c="css/"+({about:"about"}[e]||e)+"."+{about:"c8c3adfa"}[e]+".css",r=o.p+c,l=document.getElementsByTagName("link"),i=0;i<l.length;i++){var s=l[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===c||u===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],u=s.getAttribute("data-href");if(u===c||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var c=t&&t.target&&t.target.src||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=c,delete n[e],p.parentNode.removeChild(p),a(l)},p.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){n[e]=0})));var c=r[e];if(0!==c)if(c)t.push(c[2]);else{var l=new Promise((function(t,a){c=r[e]=[t,a]}));t.push(c[2]=l);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(p);var a=r[e];if(0!==a){if(a){var c=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+n+")",d.name="ChunkLoadError",d.type=c,d.request=n,a[1](d)}r[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=c,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(a,c,function(t){return e[t]}.bind(null,c));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=u;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"055b":function(e,t,a){"use strict";a("bd4b")},"2f64":function(e,t,a){},"33a6":function(e,t,a){"use strict";a("cfa3")},5682:function(e,t,a){e.exports=a.p+"img/planchartLogo.ed594e9b.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("7a23");function n(e,t){var a=Object(c["B"])("router-view");return Object(c["u"])(),Object(c["d"])(a)}a("7581");var r=a("d959"),l=a.n(r);const i={},o=l()(i,[["render",n]]);var s=o,u=a("a18c"),d=a("5502"),p=Object(d["a"])({state:{token:localStorage.getItem("token")},mutations:{},actions:{},modules:{}}),b=a("8a9c"),f=a("d327"),g=(a("eb46"),a("260b")),j=a("320b"),m={apiKey:"AIzaSyDwdmQvEsHEjLO2BmAb7iOnNAm4Fidi1Yk",authDomain:"udemy-api-556f0.firebaseapp.com",databaseURL:"https://udemy-api-556f0-default-rtdb.firebaseio.com",projectId:"udemy-api-556f0",storageBucket:"udemy-api-556f0.appspot.com",messagingSenderId:"989968827674",appId:"1:989968827674:web:1188dd8b7e8b6ae84c58a3"};Object(g["a"])(m),b["a"].add([f["c"],f["d"],f["b"],f["a"]]),Object(c["c"])(s).use(b["a"]).use(p).use(j["a"],{load:{key:"AIzaSyCGjumjuvGvyJDJCJCNjTjFuICjWAGPTts",libraries:"places"}}).use(u["a"]).mount("#app")},"5b96":function(e,t,a){},"5e32":function(e,t,a){"use strict";a("5b96")},"5f5f":function(e,t,a){"use strict";a("f303")},7581:function(e,t,a){"use strict";a("2f64")},"760e":function(e,t,a){},a18c:function(e,t,a){"use strict";a("d3b7"),a("3ca3"),a("ddb0");var c=a("6c02"),n=a("7a23"),r={class:"home"};function l(e,t,a,c,l,i){var o=Object(n["B"])("Navbar"),s=Object(n["B"])("Slider"),u=Object(n["B"])("Precios"),d=Object(n["B"])("Contacto"),p=Object(n["B"])("Footer");return Object(n["u"])(),Object(n["f"])("div",r,[Object(n["j"])(o),Object(n["j"])(s),Object(n["j"])(u),Object(n["j"])(d),Object(n["j"])(p)])}var i=a("5682"),o=a.n(i),s={class:"navbar",role:"navigation","aria-label":"main navigation"},u=Object(n["g"])("div",{class:"navbar-brand"},[Object(n["g"])("a",{class:"navbar-item",href:"https://bulma.io"},[Object(n["g"])("img",{src:o.a,width:"50"})]),Object(n["g"])("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},[Object(n["g"])("span",{"aria-hidden":"true"}),Object(n["g"])("span",{"aria-hidden":"true"}),Object(n["g"])("span",{"aria-hidden":"true"})])],-1),d={id:"navbarBasicExample",class:"navbar-menu"},p=Object(n["h"])('<div class="navbar-start"><a class="navbar-item" href="#"> Inicio </a><a class="navbar-item" href="#sobre"> Nosotros </a><a class="navbar-item" href="#galeria"> Precios </a><a class="navbar-item" href="#contacto"> Contacto </a></div>',1),b={class:"navbar-end"},f={class:"navbar-item"},g={class:"buttons"},j={class:"button is-light"},m=Object(n["i"])("Registro"),O={class:"button is-link"},h=Object(n["i"])("Ingreso");function v(e,t,a,c,r,l){var i=Object(n["B"])("router-link");return Object(n["u"])(),Object(n["f"])("nav",s,[u,Object(n["g"])("div",d,[p,Object(n["g"])("div",b,[Object(n["g"])("div",f,[Object(n["g"])("div",g,[Object(n["g"])("a",j,[Object(n["j"])(i,{to:"/registro"},{default:Object(n["H"])((function(){return[m]})),_:1})]),Object(n["g"])("a",O,[Object(n["j"])(i,{to:"/login"},{default:Object(n["H"])((function(){return[h]})),_:1})])])])])])])}var y={},w=(a("5e32"),a("d959")),k=a.n(w);const x=k()(y,[["render",v]]);var E=x,S=function(e){return Object(n["x"])("data-v-fa38ac1e"),e=e(),Object(n["v"])(),e},C={id:"container-slider"},P=S((function(){return Object(n["g"])("i",{class:"fas fa-chevron-circle-left"},null,-1)})),A=[P],_=S((function(){return Object(n["g"])("i",{class:"fas fa-chevron-circle-right"},null,-1)})),B=[_],N={class:"listslider"},L=Object(n["h"])('<ul id="slider" data-v-fa38ac1e><li style="background-image:url(&#39;https://blog.flota.es/wp-content/uploads/2016/06/guia-basica-planchado-ropa.jpg&#39;);opacity:1;" data-v-fa38ac1e><div class="content_slider" data-v-fa38ac1e><div data-v-fa38ac1e><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&amp;family=Nanum+Brush+Script&amp;display=swap" rel="stylesheet" data-v-fa38ac1e><link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&amp;family=Sansita+Swashed:wght@300&amp;display=swap" rel="stylesheet" data-v-fa38ac1e><link href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@400;500&amp;display=swap" rel="stylesheet" data-v-fa38ac1e><link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&amp;family=Josefin+Slab&amp;family=Sansita+Swashed:wght@300&amp;display=swap" rel="stylesheet" data-v-fa38ac1e><h1 id="sobre" data-v-fa38ac1e>Sobre nosotros</h1><br data-v-fa38ac1e><h2 data-v-fa38ac1e>Simplificamos tu vida</h2><br data-v-fa38ac1e><h2 data-v-fa38ac1e>Planchart</h2><p data-v-fa38ac1e>El arte de planchar.</p></div></div></li><li style="background-image:url(&#39;https://www.65ymas.com/uploads/s1/89/19/3/bigstock-electric-iron-and-pile-of-clot-181401475.jpeg&#39;);" data-v-fa38ac1e><div class="content_slider" data-v-fa38ac1e><div data-v-fa38ac1e><h2 data-v-fa38ac1e>Empresa 100% Mexicana</h2><p data-v-fa38ac1e>Y tú, ¿Ya te liberaste de planchar?</p><p data-v-fa38ac1e>Vamos desde Coacalco hasta Aragón por tu ropa.</p></div></div></li><li style="background-image:url(&#39;https://blog.flota.es/wp-content/uploads/2017/03/consejos-planchar-ropa-algodon.jpg&#39;);" data-v-fa38ac1e><div class="content_slider" data-v-fa38ac1e><div data-v-fa38ac1e><h2 data-v-fa38ac1e>Planchamos por ti en 4 pasos</h2><p data-v-fa38ac1e>1.- Junta tu ropa</p><p data-v-fa38ac1e>2.- Llámanos</p><p data-v-fa38ac1e>3.- Vamos por tu ropa</p><p data-v-fa38ac1e>4.- Recíbela en máximo 24 horas</p></div></div></li><li style="background-image:url(&#39;https://chontalpa.tecnm.mx/img/web-pc%20-%20copia.jpg&#39;);" data-v-fa38ac1e><div class="content_slider" data-v-fa38ac1e><div data-v-fa38ac1e><h2 data-v-fa38ac1e>Espera próximamente:</h2><p data-v-fa38ac1e>Solicitar tus pedidos en línea</p><p data-v-fa38ac1e>y un sistema de puntos de plataforma</p></div></div></li></ul>',1);function M(e,t,a,c,r,l){var i=this;return Object(n["u"])(),Object(n["f"])("section",C,[Object(n["g"])("a",{onClick:t[0]||(t[0]=function(e){return l.fntExecuteSlide("prev")}),class:"arrowPrev"},A),Object(n["g"])("a",{onClick:t[1]||(t[1]=function(e){return l.fntExecuteSlide("next")}),class:"arrowNext"},B),Object(n["g"])("ul",N,[Object(n["g"])("li",null,[Object(n["g"])("a",{onClick:t[2]||(t[2]=function(){return i.accionar&&i.accionar.apply(i,arguments)}),itlist:"itList_0",class:"item-select-slid"})]),Object(n["g"])("li",null,[Object(n["g"])("a",{onClick:t[3]||(t[3]=function(){return i.accionar&&i.accionar.apply(i,arguments)}),itlist:"itList_1"})]),Object(n["g"])("li",null,[Object(n["g"])("a",{onClick:t[4]||(t[4]=function(){return i.accionar&&i.accionar.apply(i,arguments)}),itlist:"itList_2"})]),Object(n["g"])("li",null,[Object(n["g"])("a",{onClick:t[5]||(t[5]=function(){return i.accionar&&i.accionar.apply(i,arguments)}),itlist:"itList_3"})])]),L])}a("ac1f"),a("1276"),a("4795");var I={methods:{fntExecuteSlide:function(e){for(var t,a,c=document.getElementById("slider"),n=c.getElementsByTagName("li"),r=0;r<n.length;r++)if(1==n[r].style.opacity){t=r;break}"prev"==e||"next"==e?a="prev"==e?0==t?n.length-1:t-1:t==n.length-1?0:t+1:(a=e,e=t>a?"prev":"next");var l=document.getElementsByClassName("listslider")[0].getElementsByTagName("a");l[t].classList.remove("item-select-slid"),l[a].classList.add("item-select-slid"),n[t].style.opacity=0,n[a].style.opacity=1},accionar:function(e){e.preventDefault();var t=e.target.getAttribute("itlist"),a=t.split("_");return this.fntExecuteSlide(a[1]),!1}},mounted:function(){var e=this;document.querySelector("#container-slider")&&setInterval((function(){e.fntExecuteSlide("next")}),5e3)}};a("e33e");const T=k()(I,[["render",M],["__scopeId","data-v-fa38ac1e"]]);var R=T,q={class:"galeria"},H=Object(n["g"])("section",{class:"layer plans"},[Object(n["g"])("h1",{id:"galeria"},"Paquetes"),Object(n["g"])("section",null,[Object(n["g"])("section",{class:"third lift plan-tier",onclick:"location.href='#';"},[Object(n["g"])("h4",null,"Individual"),Object(n["g"])("h5",null,[Object(n["g"])("sup",{class:"superscript"},"$"),Object(n["g"])("span",{class:"plan-price"},"12"),Object(n["g"])("sub",null,"MXN")]),Object(n["g"])("ul",null,[Object(n["g"])("li",null,[Object(n["g"])("strong",null,"Por prenda"),Object(n["i"])(" a partir de 6 piezas")]),Object(n["g"])("li",null,[Object(n["g"])("strong",null,"Recolecta y entrega"),Object(n["i"])(" sin costo extra.")]),Object(n["g"])("li",null,[Object(n["g"])("strong",null,"Recolecta"),Object(n["i"])(" de 1 a 3 horas.")]),Object(n["g"])("li",null,[Object(n["g"])("strong",null,"Entrega"),Object(n["i"])(" de 24 a 48 horas.")]),Object(n["g"])("li",null,[Object(n["g"])("strong",null,"Equipo"),Object(n["i"])(" profesional.")])])]),Object(n["g"])("section",{class:"third lift plan-tier callout",onclick:"location.href='#';"},[Object(n["g"])("h6",null,"Gran familia"),Object(n["g"])("h4",null,"Oferta especial"),Object(n["g"])("h5",null,[Object(n["g"])("sup",{class:"superscript"},"$"),Object(n["g"])("span",{class:"plan-price"},"10"),Object(n["g"])("sub",null,"MXN")]),Object(n["g"])("p",{class:"early-adopter-price"},"Antes"),Object(n["g"])("br"),Object(n["g"])("del",null,"$15MXN"),Object(n["g"])("ul",null,[Object(n["g"])("li",null,[Object(n["g"])("strong",null,"Por prenda"),Object(n["i"])(" a partir de la séptima docena")]),Object(n["g"])("li",null,[Object(n["g"])("strong",null,"Recolecta y entrega"),Object(n["i"])(" sin costo extra.")]),Object(n["g"])("li",null,[Object(n["g"])("strong",null,"Recolecta"),Object(n["i"])(" de 1 a 3 horas.")]),Object(n["g"])("li",null,[Object(n["g"])("strong",null,"Entrega"),Object(n["i"])(" de 24 a 48 horas.")]),Object(n["g"])("li",null,[Object(n["g"])("strong",null,"Equipo"),Object(n["i"])(" profesional.")]),Object(n["g"])("li",null,[Object(n["g"])("strong",null,"Portatrajes"),Object(n["i"])(" personalizado.")])])]),Object(n["g"])("section",{class:"third lift plan-tier",onclick:"location.href='#';"},[Object(n["g"])("h4",null,"Mini familia"),Object(n["g"])("h5",null,[Object(n["g"])("sup",{class:"superscript"},"$"),Object(n["g"])("span",{class:"plan-price"},"11"),Object(n["g"])("sub",null,"MXN")]),Object(n["g"])("ul",null,[Object(n["g"])("li",null,[Object(n["g"])("strong",null,"Por prenda"),Object(n["i"])(" a partir de la cuarta docena")]),Object(n["g"])("li",null,[Object(n["g"])("strong",null,"Recolecta y entrega"),Object(n["i"])(" sin costo extra.")]),Object(n["g"])("li",null,[Object(n["g"])("strong",null,"Recolecta"),Object(n["i"])(" de 1 a 3 horas.")]),Object(n["g"])("li",null,[Object(n["g"])("strong",null,"Entrega"),Object(n["i"])(" de 24 a 48 horas.")]),Object(n["g"])("li",null,[Object(n["g"])("strong",null,"Equipo"),Object(n["i"])(" profesional.")])])]),Object(n["g"])("div",{style:{clear:"both"}})])],-1),z=[H];function J(e,t,a,c,r,l){return Object(n["u"])(),Object(n["f"])("div",q,z)}var D={};a("055b");const F=k()(D,[["render",J]]);var G=F,X={class:"contacto"},$=Object(n["g"])("h1",{id:"contacto"},"Contacto",-1),Y=Object(n["i"])(" Tecpanecas #134 Mza 327. Lte. 8 Ecatepec de Morelos "),K=Object(n["i"])(" 5576270580"),U=Object(n["i"])(" planchartgroup@gmail.com"),V=Object(n["i"])(" Horario de atención: Lunes a sábado, de 09:00 a 19:00 hrs "),Q=Object(n["g"])("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.983610588969!2d-99.02824768509157!3d19.542317186822075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f00faf4a9455%3A0x8a5d9c9626611740!2sC.%20Tepanecas%20134%2C%20Cd%20Azteca%201ra%20Secc%2C%2055120%20Ecatepec%20de%20Morelos%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1632592158323!5m2!1ses!2smx",width:"600",height:"300",style:{border:"0"},allowfullscreen:"",loading:"lazy"},null,-1);function W(e,t,a,c,r,l){var i=Object(n["B"])("unicon");return Object(n["u"])(),Object(n["f"])("div",X,[$,Object(n["g"])("h2",null,[Object(n["g"])("p",null,[Object(n["j"])(i,{name:"location-point",fill:"white"}),Y]),Object(n["g"])("p",null,[Object(n["j"])(i,{name:"whatsapp",fill:"white"}),K]),Object(n["g"])("p",null,[Object(n["j"])(i,{name:"envelope",fill:"white"}),U]),Object(n["g"])("p",null,[Object(n["j"])(i,{name:"clock",fill:"white"}),V])]),Q])}var Z={};a("5f5f");const ee=k()(Z,[["render",W]]);var te=ee,ae={class:"footer-distributed"},ce=Object(n["h"])('<div class="footer-left"><h3>Planch<span>Art</span></h3><p class="footer-links"><a href="index.html">Inicio</a> · <a href="precios.html">Nosotros</a> · <a href="acerca.html">Precios</a> · <a href="contacto.html">Contacto</a></p><p>Todos los derechos reservados</p><p class="footer-company-name">PlanchArt © 2021</p></div><div class="footer-center"><div><p><span>Tecpanecas #134 Mza 327. Lte. 8</span> Ecatepec de Morelos, México </p></div><div><i class="fa fa-phone"></i><p>5576270580</p></div><div><i class="fa fa-envelope"></i><p><a href="mailto:planchartgroup@gmail.com">planchartgroup@gmail.com</a></p></div></div><div class="footer-right"><p class="footer-company-about"><span>Acerca de...</span> PlanchArt es una empresa  que te ayudará a simplificar tu vida con el planchado de tu ropa mediante paquetes a precios muy accesibles. </p></div>',3),ne=[ce];function re(e,t,a,c,r,l){return Object(n["u"])(),Object(n["f"])("footer",ae,ne)}var le={};a("33a6");const ie=k()(le,[["render",re]]);var oe=ie,se={name:"Home",components:{Navbar:E,Slider:R,Precios:G,Contacto:te,Footer:oe}};const ue=k()(se,[["render",l]]);var de=ue,pe=[{path:"/",name:"Home",component:de},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/registro",name:"Registro",component:function(){return a.e("about").then(a.bind(null,"0d36"))}},{path:"/login",name:"Login",component:function(){return a.e("about").then(a.bind(null,"a55b"))}}],be=Object(c["a"])({history:Object(c["b"])("/"),routes:pe});t["a"]=be},bd4b:function(e,t,a){},cfa3:function(e,t,a){},e33e:function(e,t,a){"use strict";a("760e")},f303:function(e,t,a){}});
//# sourceMappingURL=app.0de0051b.js.map