(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[385],{84858:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wiki/[...mdPath]",function(){return n(47495)}])},79813:function(e,t,n){"use strict";n.d(t,{y:function(){return MarkdownLayout}});var s=n(85893),l=n(67294),r=n(35005),a=n(10682),i=n(44874),o=n(45697),c=n.n(o),d=["color","size","title","className"];function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var u=(0,l.forwardRef)(function(e,t){var n=e.color,s=e.size,r=e.title,a=e.className,i=function(e,t){if(null==e)return{};var n,s,l=function(e,t){if(null==e)return{};var n,s,l={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,d);return l.createElement("svg",_extends({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:s,height:s,fill:n,className:["bi","bi-list-ul",a].filter(Boolean).join(" ")},i),r?l.createElement("title",null,r):null,l.createElement("path",{fillRule:"evenodd",d:"M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"}))});u.propTypes={color:c().string,size:c().oneOfType([c().string,c().number]),title:c().string,className:c().string},u.defaultProps={color:"currentColor",size:"1em",title:null,className:""};var m=n(22133),p=n(66760),h=n(37),f=n(34252),v=n(81333),x=n(93967),w=n.n(x),N=n(66409);let ModHelperOffCanvas=e=>{let{show:t,setShowing:n,title:l,placement:r,children:a}=e,o=(0,N.g)()||"100vh";return(0,s.jsx)(i.Z,{show:t,responsive:p.wN,onHide:()=>n(!1),scroll:!0,className:"main-panel w-auto btd6-panel blue p-0 overflow-hidden sticky-top-lg",restoreFocus:!1,placement:r,style:{maxHeight:o},children:(0,s.jsxs)(p.VO,{autoHeightMax:o,children:[(0,s.jsx)(i.Z.Header,{className:"pt-2 pb-0 ps-3 pe-4",closeButton:!0,closeVariant:"white",children:(0,s.jsx)(i.Z.Title,{children:l})}),(0,s.jsx)(i.Z.Body,{className:"py-2 px-3 d-block btd6-panel blue-insert-round",children:a})]})})},MarkdownLayout=e=>{var t,n,i;let{data:o,sidebar:c,noToc:d,noTitle:x,description:N,children:g,className:b}=e,j=!d&&(null==o?void 0:null===(t=o.tableOfContentsHtml)||void 0===t?void 0:t.includes("li")),[y,Z]=(0,l.useState)(!1),[k,O]=(0,l.useState)(!1),H=(0,l.useMemo)(()=>(0,f.vn)().processSync(null==o?void 0:o.contentHtml).result,[null==o?void 0:o.contentHtml]),_=(0,l.useMemo)(()=>(0,f.vn)().processSync(null==c?void 0:c.contentHtml).result,[null==c?void 0:c.contentHtml]),C=(0,l.useMemo)(()=>(0,f.vn)().processSync(null==o?void 0:o.tableOfContentsHtml).result,[null==o?void 0:o.tableOfContentsHtml]);return(0,s.jsxs)(p.ZP,{children:[(0,s.jsx)(v.Z,{title:null==o?void 0:o.title,description:null!==(i=null==o?void 0:o.subtitle)&&void 0!==i?i:N}),(0,s.jsxs)("div",{className:"d-flex flex-grow-1",children:[(0,s.jsx)("div",{className:"d-flex flex-1 justify-content-end align-items-start pe-".concat(p.wN,"-4 ps-").concat(p.wN,"-4"),children:j&&(0,s.jsx)(ModHelperOffCanvas,{title:"Table of Contents",show:y,setShowing:Z,placement:"start",children:C})}),(0,s.jsx)("div",{className:"d-flex flex-1 justify-content-start align-items-start ps-".concat(p.wN,"-4 pe-").concat(p.wN,"-4 order-1"),children:c&&(0,s.jsx)(ModHelperOffCanvas,{show:k,setShowing:O,title:"Wiki",placement:"end",children:_})}),(0,s.jsx)(h.w,{}),(0,s.jsxs)(a.Z,{fluid:p.wN,className:"main-panel py-2 px-3 d-flex flex-column btd6-panel blue",children:[!(x&&!j&&!c)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"my-1 btd6-panel blue-insert-round",children:[(0,s.jsxs)("h1",{className:"d-flex",children:[(0,s.jsx)("div",{className:"flex-1 d-".concat(p.wN,"-none text-start"),children:j&&(0,s.jsx)(r.Z,{className:"d-".concat(p.wN,"-none me-2 btd6-button blue p-2"),variant:"outline-light",onClick:()=>Z(!0),children:(0,s.jsx)(u,{size:"2rem"})})}),(0,s.jsx)("div",{className:"text-center text-".concat(p.wN,"-start mt-1 mt-").concat(p.wN,"-start"),children:null==o?void 0:null===(n=o.title)||void 0===n?void 0:n.replace(/\./g,"​.")}),(0,s.jsx)("div",{className:"flex-1 d-".concat(p.wN,"-none text-end"),children:c&&(0,s.jsx)(r.Z,{className:"d-".concat(p.wN,"-none ms-auto btd6-button blue p-2"),variant:"outline-light",onClick:()=>O(!0),children:(0,s.jsx)(m.Z,{size:"2rem"})})})]}),(null==o?void 0:o.subtitle)&&(0,s.jsx)("div",{children:o.subtitle})]}),(0,s.jsx)("hr",{})]}),g||(0,s.jsx)("div",{className:w()("d-block","btd6-panel","blue-insert-round",b),children:H})]})]})]})}},34252:function(e,t,n){"use strict";n.d(t,{c8:function(){return markdownToHtml},vn:function(){return htmlToReact}});var s=n(85893),l=n(14640),r=n(83415),a=n(62398),i=n(73398),o=n(86073),c=n(80983),d=n(52935),u=n(71810),m=n(63570),p=n(6100),h=n(16861),f=n(7685),v=n(67294),x=n(41664),w=n.n(x),N=n(19523);n(26362);var g=n(93967),b=n.n(g),j=n(34e3);let rewrittenUrl=(e,t)=>(e.startsWith("https://github.com/gurrenm3/BTD-Mod-Helper/wiki")&&(e=(e=e.replace("https://github.com/gurrenm3/BTD-Mod-Helper","")).replace(encodeURIComponent("[3.0]-"),"").replace(encodeURIComponent("-(ModHelperComponents)"),"")),!t||e.startsWith("http")||(e.startsWith("/")||(e="/"+e),t.endsWith("/")&&(t=t.substring(0,t.length-1)),e.startsWith(t)||(e=t+e)),e.startsWith("http")||(e=e.replace(/\.md/,"")),e),rewrite=(e,t)=>({rewrite:n=>{var s,l,r,a;if("element"===n.type&&n.properties){if("code"===n.tagName&&(n.properties.className=[...new Set([...null!==(a=n.properties.className)&&void 0!==a?a:[],"hljs"])]),"a"===n.tagName&&(null===(s=n.properties)||void 0===s?void 0:s.href)){let t=n.properties.href;n.properties.href=rewrittenUrl(t,e)}if("img"===n.tagName&&(null===(l=n.properties)||void 0===l?void 0:l.src)){let e=n.properties.src;n.properties.src=rewrittenUrl(e,t)}"img"===n.tagName&&(null===(r=n.properties)||void 0===r?void 0:r.src)==="https://raw.githubusercontent.com/gurrenm3/BTD-Mod-Helper/master/banner.png"&&(n.tagName="div")}}}),markdownToHtml=(e,t)=>(0,l.j)().use(r.Z).use(a.Z,{allowDangerousHtml:!0}).use(i.Z).use(o.Z,{detect:!0,ignoreMissing:!0,aliases:{json:"json5"}}).use(c.Z).use(d.Z,{properties:{"aria-hidden":"true",tabIndex:-1,className:["position-relative"]}}).use(u.Z,rewrite(e,t)).use(m.Z),htmlToReact=e=>(0,p.a)().use(h.Z,{fragment:!0}).use(e?N.Z:()=>{}).use(f.Z,{createElement:v.createElement,Fragment:v.Fragment,components:{a:e=>{let{className:t,href:n,...l}=e;return n?(0,s.jsx)(w(),{className:b()(t,"next-link"),href:n,...l}):(0,s.jsx)("a",{className:t,...l})},span:e=>{let{className:t,children:n,...l}=e;return"icon icon-link"!==t||n?(0,s.jsx)("span",{className:t,children:n,...l}):(0,s.jsx)(j.Z,{className:"hide-unless-hover position-absolute ms-1 mt-1 end-0"})}}})},47495:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var s=n(85893);n(67294);var l=n(79813),r=!0;t.default=e=>{let{data:t,sidebar:n}=e;return(0,s.jsx)(l.y,{data:t,sidebar:n,description:"Wiki for the modding api for BloonsTD6. Learn how to download, install and make BTD6 mods."})}}},function(e){e.O(0,[132,774,888,179],function(){return e(e.s=84858)}),_N_E=e.O()}]);