(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[667],{52123:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/[...mdPath]",function(){return n(68118)}])},79813:function(e,t,n){"use strict";n.d(t,{y:function(){return MarkdownLayout}});var r=n(85893),s=n(67294),l=n(35005),a=n(10682),o=n(44874),i=n(45697),c=n.n(i),d=["color","size","title","className"];function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=(0,s.forwardRef)(function(e,t){var n=e.color,r=e.size,l=e.title,a=e.className,o=function(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,d);return s.createElement("svg",_extends({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:n,className:["bi","bi-list-ul",a].filter(Boolean).join(" ")},o),l?s.createElement("title",null,l):null,s.createElement("path",{fillRule:"evenodd",d:"M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"}))});u.propTypes={color:c().string,size:c().oneOfType([c().string,c().number]),title:c().string,className:c().string},u.defaultProps={color:"currentColor",size:"1em",title:null,className:""};var p=n(22133),m=n(66760),h=n(37),f=n(34252),v=n(81333),w=n(93967),x=n.n(w),g=n(66409);let ModHelperOffCanvas=e=>{let{show:t,setShowing:n,title:s,placement:l,children:a}=e,i=(0,g.g)()||"100vh";return(0,r.jsx)(o.Z,{show:t,responsive:m.wN,onHide:()=>n(!1),scroll:!0,className:"main-panel w-auto btd6-panel blue p-0 overflow-hidden sticky-top-lg",restoreFocus:!1,placement:l,style:{maxHeight:i},children:(0,r.jsxs)(m.VO,{autoHeightMax:i,children:[(0,r.jsx)(o.Z.Header,{className:"pt-2 pb-0 ps-3 pe-4",closeButton:!0,closeVariant:"white",children:(0,r.jsx)(o.Z.Title,{children:s})}),(0,r.jsx)(o.Z.Body,{className:"py-2 px-3 d-block btd6-panel blue-insert-round",children:a})]})})},MarkdownLayout=e=>{var t,n,o;let{data:i,sidebar:c,noToc:d,noTitle:w,description:g,children:N,className:b}=e,j=!d&&(null==i?void 0:null===(t=i.tableOfContentsHtml)||void 0===t?void 0:t.includes("li")),[y,Z]=(0,s.useState)(!1),[H,O]=(0,s.useState)(!1),k=(0,s.useMemo)(()=>(0,f.vn)().processSync(null==i?void 0:i.contentHtml).result,[null==i?void 0:i.contentHtml]),_=(0,s.useMemo)(()=>(0,f.vn)().processSync(null==c?void 0:c.contentHtml).result,[null==c?void 0:c.contentHtml]),M=(0,s.useMemo)(()=>(0,f.vn)().processSync(null==i?void 0:i.tableOfContentsHtml).result,[null==i?void 0:i.tableOfContentsHtml]);return(0,r.jsxs)(m.ZP,{children:[(0,r.jsx)(v.Z,{title:null==i?void 0:i.title,description:null!==(o=null==i?void 0:i.subtitle)&&void 0!==o?o:g}),(0,r.jsxs)("div",{className:"d-flex flex-grow-1",children:[(0,r.jsx)("div",{className:"d-flex flex-1 justify-content-end align-items-start pe-".concat(m.wN,"-4 ps-").concat(m.wN,"-4"),children:j&&(0,r.jsx)(ModHelperOffCanvas,{title:"Table of Contents",show:y,setShowing:Z,placement:"start",children:M})}),(0,r.jsx)("div",{className:"d-flex flex-1 justify-content-start align-items-start ps-".concat(m.wN,"-4 pe-").concat(m.wN,"-4 order-1"),children:c&&(0,r.jsx)(ModHelperOffCanvas,{show:H,setShowing:O,title:"Wiki",placement:"end",children:_})}),(0,r.jsx)(h.w,{}),(0,r.jsxs)(a.Z,{fluid:m.wN,className:"main-panel py-2 px-3 d-flex flex-column btd6-panel blue",children:[!(w&&!j&&!c)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"my-1 btd6-panel blue-insert-round",children:[(0,r.jsxs)("h1",{className:"d-flex",children:[(0,r.jsx)("div",{className:"flex-1 d-".concat(m.wN,"-none text-start"),children:j&&(0,r.jsx)(l.Z,{className:"d-".concat(m.wN,"-none me-2 btd6-button blue p-2"),variant:"outline-light",onClick:()=>Z(!0),children:(0,r.jsx)(u,{size:"2rem"})})}),(0,r.jsx)("div",{className:"text-center text-".concat(m.wN,"-start mt-1 mt-").concat(m.wN,"-start"),children:null==i?void 0:null===(n=i.title)||void 0===n?void 0:n.replace(/\./g,"​.")}),(0,r.jsx)("div",{className:"flex-1 d-".concat(m.wN,"-none text-end"),children:c&&(0,r.jsx)(l.Z,{className:"d-".concat(m.wN,"-none ms-auto btd6-button blue p-2"),variant:"outline-light",onClick:()=>O(!0),children:(0,r.jsx)(p.Z,{size:"2rem"})})})]}),(null==i?void 0:i.subtitle)&&(0,r.jsx)("div",{children:i.subtitle})]}),(0,r.jsx)("hr",{})]}),N||(0,r.jsx)("div",{className:x()("d-block","btd6-panel","blue-insert-round",b),children:k})]})]})]})}},34252:function(e,t,n){"use strict";n.d(t,{c8:function(){return markdownToHtml},vn:function(){return htmlToReact}});var r=n(85893),s=n(14640),l=n(83415),a=n(62398),o=n(73398),i=n(86073),c=n(80983),d=n(52935),u=n(71810),p=n(63570),m=n(6100),h=n(16861),f=n(7685),v=n(67294),w=n(41664),x=n.n(w),g=n(19523);n(26362);var N=n(93967),b=n.n(N),j=n(34e3);let rewrittenUrl=(e,t)=>(e.startsWith("https://github.com/gurrenm3/BTD-Mod-Helper/wiki")&&(e=(e=e.replace("https://github.com/gurrenm3/BTD-Mod-Helper","")).replace(encodeURIComponent("[3.0]-"),"").replace(encodeURIComponent("-(ModHelperComponents)"),"")),!t||e.startsWith("http")||(e.startsWith("/")||(e="/"+e),t.endsWith("/")&&(t=t.substring(0,t.length-1)),e.startsWith(t)||(e=t+e)),e.startsWith("http")||(e=e.replace(/\.md/,"")),e),rewrite=(e,t)=>({rewrite:n=>{var r,s,l,a;if("element"===n.type&&n.properties){if("code"===n.tagName&&(n.properties.className=[...new Set([...null!==(a=n.properties.className)&&void 0!==a?a:[],"hljs"])]),"a"===n.tagName&&(null===(r=n.properties)||void 0===r?void 0:r.href)){let t=n.properties.href;n.properties.href=rewrittenUrl(t,e)}if("img"===n.tagName&&(null===(s=n.properties)||void 0===s?void 0:s.src)){let e=n.properties.src;n.properties.src=rewrittenUrl(e,t)}"img"===n.tagName&&(null===(l=n.properties)||void 0===l?void 0:l.src)==="https://raw.githubusercontent.com/gurrenm3/BTD-Mod-Helper/master/banner.png"&&(n.tagName="div")}}}),markdownToHtml=(e,t)=>(0,s.j)().use(l.Z).use(a.Z,{allowDangerousHtml:!0}).use(o.Z).use(i.Z,{detect:!0,ignoreMissing:!0,aliases:{json:"json5"}}).use(c.Z).use(d.Z,{properties:{"aria-hidden":"true",tabIndex:-1,className:["position-relative"]}}).use(u.Z,rewrite(e,t)).use(p.Z),htmlToReact=e=>(0,m.a)().use(h.Z,{fragment:!0}).use(e?g.Z:()=>{}).use(f.Z,{createElement:v.createElement,Fragment:v.Fragment,components:{a:e=>{let{className:t,href:n,...s}=e;return n?(0,r.jsx)(x(),{className:b()(t,"next-link"),href:n,...s}):(0,r.jsx)("a",{className:t,...s})},span:e=>{let{className:t,children:n,...s}=e;return"icon icon-link"!==t||n?(0,r.jsx)("span",{className:t,children:n,...s}):(0,r.jsx)(j.Z,{className:"hide-unless-hover position-absolute ms-1 mt-1 end-0"})}}})},68118:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return o}});var r=n(85893),s=n(5379),l=n.n(s);n(67294);var a=n(79813),o=!0;t.default=e=>{let{data:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{id:"3627f9574c889f9b",children:"td{word-wrap:anywhere;overflow-wrap:anywhere}h2{word-wrap:anywhere;overflow-wrap:anywhere}"}),(0,r.jsx)(a.y,{data:t,description:"Documentation for the modding api for BloonsTD6. Learn how to make BTD6 mods using BTD Mod Helper."})]})}}},function(e){e.O(0,[132,774,888,179],function(){return e(e.s=52123)}),_N_E=e.O()}]);