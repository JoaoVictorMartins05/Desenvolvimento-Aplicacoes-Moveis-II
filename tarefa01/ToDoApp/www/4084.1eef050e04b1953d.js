"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4084],{7464:(oe,W,y)=>{y.d(W,{E_:()=>P,F3:()=>T});var u=y(467);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var s=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(s||{});class _ extends Error{constructor(e,t,o){super(e),this.message=e,this.code=t,this.data=o}}const K=n=>{var e,t,o,a,r;const d=n.CapacitorCustomPlatform||null,i=n.Capacitor||{},v=i.Plugins=i.Plugins||{},f=n.CapacitorPlatforms,S=(null===(e=null==f?void 0:f.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==d?d.name:(n=>{var e,t;return null!=n&&n.androidBridge?"android":null!==(t=null===(e=null==n?void 0:n.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(n)),le=(null===(t=null==f?void 0:f.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==S()),ue=(null===(o=null==f?void 0:f.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||(m=>{const h=Y.get(m);return!!(null!=h&&h.platforms.has(S())||te(m))}),te=(null===(a=null==f?void 0:f.currentPlatform)||void 0===a?void 0:a.getPluginHeader)||(m=>{var h;return null===(h=i.PluginHeaders)||void 0===h?void 0:h.find(U=>U.name===m)}),Y=new Map,ve=(null===(r=null==f?void 0:f.currentPlatform)||void 0===r?void 0:r.registerPlugin)||((m,h={})=>{const U=Y.get(m);if(U)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),U.proxy;const H=S(),B=te(m);let k;const pe=function(){var p=(0,u.A)(function*(){return!k&&H in h?k=k="function"==typeof h[H]?yield h[H]():h[H]:null!==d&&!k&&"web"in h&&(k=k="function"==typeof h.web?yield h.web():h.web),k});return function(){return p.apply(this,arguments)}}(),X=p=>{let C;const x=(...j)=>{const $=pe().then(E=>{const I=((p,C)=>{var x,j;if(!B){if(p)return null===(j=p[C])||void 0===j?void 0:j.bind(p);throw new _(`"${m}" plugin is not implemented on ${H}`,s.Unimplemented)}{const $=null==B?void 0:B.methods.find(E=>C===E.name);if($)return"promise"===$.rtype?E=>i.nativePromise(m,C.toString(),E):(E,I)=>i.nativeCallback(m,C.toString(),E,I);if(p)return null===(x=p[C])||void 0===x?void 0:x.bind(p)}})(E,p);if(I){const G=I(...j);return C=null==G?void 0:G.remove,G}throw new _(`"${m}.${p}()" is not implemented on ${H}`,s.Unimplemented)});return"addListener"===p&&($.remove=(0,u.A)(function*(){return C()})),$};return x.toString=()=>`${p.toString()}() { [capacitor code] }`,Object.defineProperty(x,"name",{value:p,writable:!1,configurable:!1}),x},ne=X("addListener"),re=X("removeListener"),be=(p,C)=>{const x=ne({eventName:p},C),j=function(){var E=(0,u.A)(function*(){const I=yield x;re({eventName:p,callbackId:I},C)});return function(){return E.apply(this,arguments)}}(),$=new Promise(E=>x.then(()=>E({remove:j})));return $.remove=(0,u.A)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield j()}),$},q=new Proxy({},{get(p,C){switch(C){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return B?be:ne;case"removeListener":return re;default:return X(C)}}});return v[m]=q,Y.set(m,{name:m,proxy:q,platforms:new Set([...Object.keys(h),...B?[H]:[]])}),q});return i.convertFileSrc||(i.convertFileSrc=m=>m),i.getPlatform=S,i.handleError=m=>n.console.error(m),i.isNativePlatform=le,i.isPluginAvailable=ue,i.pluginMethodNoop=(m,h,U)=>Promise.reject(`${U} does not have an implementation of "${h}".`),i.registerPlugin=ve,i.Exception=_,i.DEBUG=!!i.DEBUG,i.isLoggingEnabled=!!i.isLoggingEnabled,i.platform=i.getPlatform(),i.isNative=i.isNativePlatform(),i},D=(n=>n.Capacitor=K(n))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),T=D.registerPlugin;class P{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var o=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r);const d=function(){var v=(0,u.A)(function*(){return o.removeListener(e,t)});return function(){return v.apply(this,arguments)}}(),i=Promise.resolve({remove:d});return Object.defineProperty(i,"remove",{value:(v=(0,u.A)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield d()}),function(){return v.apply(this,arguments)})}),i;var v}removeAllListeners(){var e=this;return(0,u.A)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const o=this.listeners[e];o&&o.forEach(a=>a(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:o=>{this.notifyListeners(t,o)}}}unimplemented(e="not implemented"){return new D.Exception(e,s.Unimplemented)}unavailable(e="not available"){return new D.Exception(e,s.Unavailable)}removeListener(e,t){var o=this;return(0,u.A)(function*(){const a=o.listeners[e];if(!a)return;const r=a.indexOf(t);o.listeners[e].splice(r,1),o.listeners[e].length||o.removeWindowListener(o.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const l=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),g=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class A extends P{getCookies(){return(0,u.A)(function*(){const e=document.cookie,t={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[a,r]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=g(a).trim(),r=g(r).trim(),t[a]=r}),t})()}setCookie(e){return(0,u.A)(function*(){try{const t=l(e.key),o=l(e.value),a=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),d=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${o||""}${a}; path=${r}; ${d};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,u.A)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,u.A)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,u.A)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}T("CapacitorCookies",{web:()=>new A});const b=function(){var n=(0,u.A)(function*(e){return new Promise((t,o)=>{const a=new FileReader;a.onload=()=>{const r=a.result;t(r.indexOf(",")>=0?r.split(",")[1]:r)},a.onerror=r=>o(r),a.readAsDataURL(e)})});return function(t){return n.apply(this,arguments)}}();class ce extends P{request(e){return(0,u.A)(function*(){const t=((n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),a=((n={})=>{const e=Object.keys(n);return Object.keys(n).map(a=>a.toLocaleLowerCase()).reduce((a,r,d)=>(a[r]=n[e[d]],a),{})})(n.headers)["content-type"]||"";if("string"==typeof n.data)t.body=n.data;else if(a.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[d,i]of Object.entries(n.data||{}))r.set(d,i);t.body=r.toString()}else if(a.includes("multipart/form-data")||n.data instanceof FormData){const r=new FormData;if(n.data instanceof FormData)n.data.forEach((i,v)=>{r.append(v,i)});else for(const i of Object.keys(n.data))r.append(i,n.data[i]);t.body=r;const d=new Headers(t.headers);d.delete("content-type"),t.headers=d}else(a.includes("application/json")||"object"==typeof n.data)&&(t.body=JSON.stringify(n.data));return t})(e,e.webFetchExtra),o=((n,e=!0)=>n?Object.entries(n).reduce((o,a)=>{const[r,d]=a;let i,v;return Array.isArray(d)?(v="",d.forEach(f=>{i=e?encodeURIComponent(f):f,v+=`${r}=${i}&`}),v.slice(0,-1)):(i=e?encodeURIComponent(d):d,v=`${r}=${i}`),`${o}&${v}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),a=o?`${e.url}?${o}`:e.url,r=yield fetch(a,t),d=r.headers.get("content-type")||"";let v,f,{responseType:i="text"}=r.ok?e:{};switch(d.includes("application/json")&&(i="json"),i){case"arraybuffer":case"blob":f=yield r.blob(),v=yield b(f);break;case"json":v=yield r.json();break;default:v=yield r.text()}const F={};return r.headers.forEach((S,J)=>{F[J]=S}),{data:v,headers:F,status:r.status,url:r.url}})()}get(e){var t=this;return(0,u.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,u.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,u.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,u.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,u.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}T("CapacitorHttp",{web:()=>new ce})},4084:(oe,W,y)=>{y.r(W),y.d(W,{HomePageModule:()=>ee});var u=y(177),O=y(9364),N=y(4341),M=y(70),Q=y(8968);const z=(0,y(7464).F3)("SplashScreen",{web:()=>y.e(4292).then(y.bind(y,4292)).then(c=>new c.SplashScreenWeb)});var s=y(4438),_=y(467);let V=(()=>{var c;class P{constructor(){this.items=[],this.initializeIndexedDB()}initializeIndexedDB(){var l=this;return(0,_.A)(function*(){return new Promise((g,A)=>{const w=indexedDB.open("totodb",1);w.onupgradeneeded=b=>{b.target.result.createObjectStore("items",{keyPath:"id",autoIncrement:!0})},w.onsuccess=b=>{l.indexedDB=b.target.result,l.getItems(),g(l.items)},w.onerror=b=>{console.error("Error initializing IndexedDB:",b.target.error),A(b.target.error)}})})()}getItems(){var l=this;return(0,_.A)(function*(){const w=l.indexedDB.transaction(["items"],"readonly").objectStore("items").getAll();w.onsuccess=b=>{l.items=b.target.result},w.onerror=b=>{console.error("Error fetching items from IndexedDB:",b.target.error)}})()}addItem(l){var g=this;return(0,_.A)(function*(){const b=g.indexedDB.transaction(["items"],"readwrite").objectStore("items").add(l);b.onsuccess=()=>{g.getItems()},b.onerror=R=>{console.error("Error adding item to IndexedDB:",R.target.error)}})()}fetchData(){return this.items}}return(c=P).\u0275fac=function(l){return new(l||c)},c.\u0275prov=s.jDH({token:c,factory:c.\u0275fac,providedIn:"root"}),P})();function K(c,P){if(1&c){const L=s.RV6();s.j41(0,"ion-item",6),s.bIt("click",function(){const g=s.eBV(L).$implicit,A=s.XpG();return s.Njj(A.viewItem(g))}),s.EFF(1),s.k0s()}if(2&c){const L=P.$implicit;s.R7$(),s.JRh(L.title)}}const D=[{path:"",component:(()=>{var c;class P{constructor(l,g,A){this.modalController=l,this.router=g,this.dataService=A,this.items=[],z.hide()}addItem(){const l=this.modalController.create({component:Q.q,componentProps:{},cssClass:"my-custom-modal-css",backdropDismiss:!1,animated:!0});l.then(g=>{g.present()}),l.then(g=>{g.onDidDismiss().then(A=>{const w=null==A?void 0:A.data;"success"===(null==w?void 0:w.role)&&null!=w&&w.item&&this.dataService.addItem(w.item)})})}viewItem(l){this.router.navigate(["/item-detail",{item:JSON.stringify(l)}])}}return(c=P).\u0275fac=function(l){return new(l||c)(s.rXU(O.W3),s.rXU(M.Ix),s.rXU(V))},c.\u0275cmp=s.VBU({type:c,selectors:[["app-home"]],decls:10,vars:3,consts:[[3,"translucent"],["slot","end"],["ion-button","","ion-only","",3,"click"],["name","add-circle-outline"],[3,"fullscreen"],[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(l,g){1&l&&(s.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),s.EFF(3," TO_DO! "),s.k0s(),s.j41(4,"ion-button",1)(5,"button",2),s.bIt("click",function(){return g.addItem()}),s.nrm(6,"ion-icon",3),s.k0s()()()(),s.j41(7,"ion-content",4)(8,"ion-list"),s.DNE(9,K,2,1,"ion-item",5),s.k0s()()),2&l&&(s.Y8G("translucent",!0),s.R7$(7),s.Y8G("fullscreen",!0),s.R7$(2),s.Y8G("ngForOf",g.items))},dependencies:[u.Sq,O.Jm,O.W9,O.eU,O.iq,O.uz,O.nf,O.BC,O.ai],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),P})()}];let T=(()=>{var c;class P{}return(c=P).\u0275fac=function(l){return new(l||c)},c.\u0275mod=s.$C({type:c}),c.\u0275inj=s.G2t({imports:[M.iI.forChild(D),M.iI]}),P})(),ee=(()=>{var c;class P{}return(c=P).\u0275fac=function(l){return new(l||c)},c.\u0275mod=s.$C({type:c}),c.\u0275inj=s.G2t({imports:[u.MD,N.YN,O.bv,T]}),P})()}}]);