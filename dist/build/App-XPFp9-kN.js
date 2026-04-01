import{r as y,i7 as ht,j as g,i9 as rt,ia as $p,ib as Dh,ic as Ke,id as Yt,it as si,ij as zr,iu as Cp,ee as $i,il as Sp,im as kp,ip as r$,iv as i$,iw as Ap,ej as Mp,i8 as o$,ie as Oh,ig as Eh,ih as Tp,ik as s$,io as Ll,ii as Rp,is as sf,iq as a$,ir as l$,iy as Ki,h as I,lI as Dp,iz as q,jP as h$,jN as c$,jO as u$,jQ as d$,lJ as Op,iA as Ep,iB as Ip,iC as _p,dz as yt,iF as jp,i_ as f$,i$ as p$,lK as Er,iZ as g$,j0 as m$,j1 as v$,j4 as b$,j5 as x$,j6 as w$,j7 as y$,j8 as Lp,j9 as $$,ja as C$,jb as S$,jc as k$,lL as Ih,jd as A$,je as M$,lM as T$,j2 as R$,j3 as D$,lN as Pp,iV as O$,iW as E$,iX as I$,iY as _$,lO as Ci,iK as j$,iN as L$,iT as P$,iU as z$,iL as B$,iM as N$,iO as F$,iP as W$,jf as V$,jg as Pl,jh as _h,lP as H$,ji as zl,jj as Bl,jk as U$,jl as q$,jm as K$,jn as G$,jo as Y$,jp as X$,jq as J$,jr as zp,js as Z$,jt as Bp,ju as Q$,jv as eC,jw as tC,lQ as nC,jx as rC,jy as iC,jz as oC,jA as sC,iG as aC,iI as lC,iQ as hC,iR as cC,iJ as uC,iH as dC,jB as fC,jC as pC,jD as gC,jE as mC,jF as vC,jG as bC,jH as xC,jI as wC,jJ as yC,jK as $C,lR as CC,jL as SC,jM as kC,iS as Np,ix as AC,jR as MC,jS as TC,jT as af,jU as Fp,lS as RC,dw as DC,lT as OC,lU as EC,lV as IC,lW as _C,S as jC,W as lf,P as LC}from"./strapi-10jyCeqB.js";var PC=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},ri=new WeakMap,gs=new WeakMap,ms={},$l=0,Wp=function(n){return n&&(n.host||Wp(n.parentNode))},zC=function(n,e){return e.map(function(t){if(n.contains(t))return t;var r=Wp(t);return r&&n.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",n,". Doing nothing"),null)}).filter(function(t){return!!t})},BC=function(n,e,t,r){var o=zC(e,Array.isArray(n)?n:[n]);ms[t]||(ms[t]=new WeakMap);var s=ms[t],l=[],h=new Set,u=new Set(o),f=function(m){!m||h.has(m)||(h.add(m),f(m.parentNode))};o.forEach(f);var d=function(m){!m||u.has(m)||Array.prototype.forEach.call(m.children,function(v){if(h.has(v))d(v);else try{var x=v.getAttribute(r),w=x!==null&&x!=="false",S=(ri.get(v)||0)+1,k=(s.get(v)||0)+1;ri.set(v,S),s.set(v,k),l.push(v),S===1&&w&&gs.set(v,!0),k===1&&v.setAttribute(t,"true"),w||v.setAttribute(r,"true")}catch(A){console.error("aria-hidden: cannot operate on ",v,A)}})};return d(e),h.clear(),$l++,function(){l.forEach(function(m){var v=ri.get(m)-1,x=s.get(m)-1;ri.set(m,v),s.set(m,x),v||(gs.has(m)||m.removeAttribute(r),gs.delete(m)),x||m.removeAttribute(t)}),$l--,$l||(ri=new WeakMap,ri=new WeakMap,gs=new WeakMap,ms={})}},Vp=function(n,e,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(n)?n:[n]),o=PC(n);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),BC(r,o,t,"aria-hidden")):function(){return null}};function NC(n){const e=`${n}CollectionProvider`,[t,r]=Sp(e),[o,s]=t(e,{collectionRef:{current:null},itemMap:new Map,listeners:new Set}),l=x=>{const{scope:w,children:S}=x,k=y.useRef(null),A=y.useRef(new Map).current,T=y.useRef(new Set).current;return g.jsx(o,{scope:w,itemMap:A,collectionRef:k,listeners:T,children:S})};l.displayName=e;const h=`${n}CollectionSlot`,u=y.forwardRef((x,w)=>{const{scope:S,children:k}=x,A=s(h,S),T=ht(w,A.collectionRef);return g.jsx(Ll,{ref:T,children:k})});u.displayName=h;const f=`${n}CollectionItemSlot`,d="data-radix-collection-item",m=y.forwardRef((x,w)=>{const{scope:S,children:k,...A}=x,T=y.useRef(null),D=ht(w,T),j=s(f,S);return y.useEffect(()=>{const F=Array.from(j.itemMap.values());return j.itemMap.set(T,{ref:T,...A}),j.listeners.forEach(B=>B(Array.from(j.itemMap.values()),F)),()=>{const B=Array.from(j.itemMap.values());j.itemMap.delete(T),j.listeners.forEach(W=>W(Array.from(j.itemMap.values()),B))}}),g.jsx(Ll,{[d]:"",ref:D,children:k})});m.displayName=f;function v(x){const w=s(`${n}CollectionConsumer`,x),S=y.useCallback(()=>{const A=w.collectionRef.current;if(!A)return[];const T=Array.from(A.querySelectorAll(`[${d}]`));return Array.from(w.itemMap.values()).sort((D,j)=>T.indexOf(D.ref.current)-T.indexOf(j.ref.current))},[w.collectionRef,w.itemMap]),k=y.useCallback(A=>(w.listeners.add(A),()=>w.listeners.delete(A)),[w.listeners]);return{getItems:S,subscribe:k}}return[{Provider:l,Slot:u,ItemSlot:m},v,r]}const Cl=new Map;function FC(n,e){const t=n+(e?Object.entries(e).sort((o,s)=>o[0]<s[0]?-1:1).join():"");if(Cl.has(t))return Cl.get(t);const r=new Intl.Collator(n,e);return Cl.set(t,r),r}function jh(n,e){const t=FC(n,{usage:"search",...e});return{startsWith(r,o){return o.length===0?!0:(r=r.normalize("NFC"),o=o.normalize("NFC"),t.compare(r.slice(0,o.length),o)===0)},endsWith(r,o){return o.length===0?!0:(r=r.normalize("NFC"),o=o.normalize("NFC"),t.compare(r.slice(-o.length),o)===0)},contains(r,o){if(o.length===0)return!0;r=r.normalize("NFC"),o=o.normalize("NFC");let s=0;const l=o.length;for(;s+l<=r.length;s++){const h=r.slice(s,s+l);if(t.compare(o,h)===0)return!0}return!1}}}const WC=n=>{const e=y.useRef();return y.useEffect(()=>{e.current=n}),e.current},Hp=y.forwardRef(({children:n,estimatedItemSize:e=40,overscan:t=5,getItemCount:r,onViewportChange:o,...s},l)=>{const h=y.useRef(null),u=ht(l,h,o),f=y.useMemo(()=>y.Children.toArray(n),[n]),d=o$({count:r(),getScrollElement:()=>h.current,estimateSize:()=>e,overscan:t}),m=d.getVirtualItems();return g.jsxs(g.Fragment,{children:[g.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),g.jsx(rt.div,{"data-radix-combobox-viewport":"",role:"presentation",...s,ref:u,style:{position:"relative",flex:1,overflow:"auto",...s.style},children:g.jsx("div",{style:{height:`${d.getTotalSize()}px`,width:"100%",position:"relative"},children:m.map(v=>{const x=f[v.index];return g.jsx("div",{"data-index":v.index,ref:d.measureElement,style:{position:"absolute",top:0,left:0,width:"100%",transform:`translateY(${v.start}px)`},children:x},v.key)})})})]})});Hp.displayName="VirtualizedViewport";const VC=[" ","Enter","ArrowUp","ArrowDown"],HC=["Enter"],UC=n=>!!(n.length===1&&n.match(/\S| /)),Up="Combobox",[Ir,vo]=NC(Up),[qC,Rn]=Mp(Up),KC=({children:n})=>g.jsx(Ap,{children:g.jsx(Ir.Provider,{scope:void 0,children:n})}),GC=n=>typeof n=="string"?n==="none"?{type:n,filter:void 0}:{type:n,filter:"startsWith"}:n,YC=n=>{const{allowCustomValue:e=!1,autocomplete:t="none",children:r,open:o,defaultOpen:s,onOpenChange:l,value:h,defaultValue:u,onValueChange:f,disabled:d,required:m=!1,locale:v="en-EN",onTextValueChange:x,textValue:w,defaultTextValue:S,filterValue:k,defaultFilterValue:A,onFilterValueChange:T,isPrintableCharacter:D=UC,visible:j=!1,virtualized:F="auto",estimatedItemSize:B=40,overscan:W=5}=n,[re,ae]=y.useState(null),[ie,$e]=y.useState(null),[he,ne]=y.useState(null),[ue,Te]=y.useState(null),[Re=!1,oe]=si({prop:o,defaultProp:s,onChange:l}),[se,Me]=si({prop:h,defaultProp:u,onChange:f}),[Se,Ee]=si({prop:w,defaultProp:e&&!S?h:S,onChange:x}),[Ie,Je]=si({prop:k,defaultProp:A,onChange:T}),Ze=zr(),Pe=y.useCallback((J,de)=>{var pe;const me=de.map(fe=>fe.ref.current),[xe,...Ae]=me,[ct]=Ae.slice(-1),Fe=ue??((pe=de.find(fe=>fe.value===se))==null?void 0:pe.ref.current);for(const fe of J){if(fe===Fe)return;if(fe?.scrollIntoView({block:"nearest"}),fe===xe&&ie&&(ie.scrollTop=0),fe===ct&&ie&&(ie.scrollTop=ie.scrollHeight),Te(fe),t==="both"){const At=de.find(ft=>ft.ref.current===fe);At&&Ee(At.textValue)}if(fe!==Fe)return}},[t,Ee,ie,ue,se]),st=GC(t);return y.useEffect(()=>{t!=="both"&&Te(null)},[Se,t]),y.useEffect(()=>{if(he&&re)return Vp([he,re])},[he,re]),g.jsx(KC,{children:g.jsx(qC,{allowCustomValue:e,autocomplete:st,required:m,trigger:re,onTriggerChange:ae,contentId:Ze,value:se,onValueChange:Me,open:Re,onOpenChange:oe,disabled:d,locale:v,focusFirst:Pe,textValue:Se,onTextValueChange:Ee,onViewportChange:$e,onContentChange:ne,visuallyFocussedItem:ue,filterValue:Ie,onFilterValueChange:Je,onVisuallyFocussedItemChange:Te,isPrintableCharacter:D,visible:j,virtualized:F,estimatedItemSize:B,overscan:W,children:r})})},qp="ComboboxTrigger",Kp=y.forwardRef((n,e)=>{const{...t}=n,r=Rn(qp),o=()=>{r.disabled||r.onOpenChange(!0)};return g.jsx($p,{asChild:!0,children:g.jsx(Dh,{asChild:!0,trapped:r.open,onMountAutoFocus:s=>{s.preventDefault()},onUnmountAutoFocus:s=>{var l,h;(l=r.trigger)==null||l.focus({preventScroll:!0}),(h=document.getSelection())==null||h.empty(),s.preventDefault()},children:g.jsx("div",{ref:e,"data-disabled":r.disabled?"":void 0,...t,onClick:Ke(t.onClick,s=>{var l;if(r.disabled){s.preventDefault();return}(l=r.trigger)==null||l.focus()}),onPointerDown:Ke(t.onPointerDown,s=>{var l;if(r.disabled){s.preventDefault();return}const h=s.target;h.hasPointerCapture(s.pointerId)&&h.releasePointerCapture(s.pointerId),(h.closest("button")??h.closest("div"))===s.currentTarget&&s.button===0&&s.ctrlKey===!1&&(o(),(l=r.trigger)==null||l.focus())})})})})});Kp.displayName=qp;const Gp="ComboboxInput",Yp=y.forwardRef((n,e)=>{var t;const r=Rn(Gp),o=y.useRef(null),{getItems:s}=vo(void 0),{startsWith:l}=jh(r.locale,{sensitivity:"base"}),h=r.disabled,u=ht(o,e,r.onTriggerChange),f=()=>{h||r.onOpenChange(!0)},d=WC(r.filterValue);return Yt(()=>{const m=setTimeout(()=>{var v;if(r.textValue===""||r.textValue===void 0||r.filterValue===""||r.filterValue===void 0)return;const x=s().find(S=>S.type==="option"&&l(S.textValue,r.textValue)),w=cS(d??"",r.filterValue);x&&!r.visuallyFocussedItem&&w===r.filterValue.length&&((v=o.current)==null||v.setSelectionRange(r.filterValue.length,r.textValue.length))});return()=>clearTimeout(m)},[r.textValue,r.filterValue,l,r.visuallyFocussedItem,s,d]),g.jsx("input",{type:"text",role:"combobox","aria-controls":r.contentId,"aria-expanded":r.open,"aria-required":r.required,"aria-autocomplete":r.autocomplete.type,"data-state":r.open?"open":"closed","aria-disabled":h,"aria-activedescendant":(t=r.visuallyFocussedItem)==null?void 0:t.id,disabled:h,"data-disabled":h?"":void 0,"data-placeholder":r.textValue===void 0?"":void 0,value:r.textValue??"",...n,ref:u,onKeyDown:Ke(n.onKeyDown,m=>{var v,x;if(["ArrowUp","ArrowDown","Home","End"].includes(m.key))r.open||f(),setTimeout(()=>{var w;let S=s().filter(k=>!k.disabled&&k.isVisible).map(k=>k.ref.current);if(["ArrowUp","End"].includes(m.key)&&(S=S.slice().reverse()),["ArrowUp","ArrowDown"].includes(m.key)){const k=r.visuallyFocussedItem??((w=s().find(A=>A.value===r.value))==null?void 0:w.ref.current);if(k){let A=S.indexOf(k);A===S.length-1&&(A=-1),S=S.slice(A+1)}}if(["ArrowDown"].includes(m.key)&&r.autocomplete.type==="both"&&S.length>1){const[k,...A]=S,T=s().find(D=>D.ref.current===k).textValue;r.textValue===T&&(S=A)}r.focusFirst(S,s())}),m.preventDefault();else if(["Tab"].includes(m.key)&&r.open)m.preventDefault();else if(["Escape"].includes(m.key))r.open?r.onOpenChange(!1):(r.onValueChange(void 0),r.onTextValueChange("")),m.preventDefault();else if(HC.includes(m.key)){if(r.visuallyFocussedItem){const w=s().find(S=>S.ref.current===r.visuallyFocussedItem);w&&(r.onValueChange(w.value),r.onTextValueChange(w.textValue),r.autocomplete.type==="both"&&r.onFilterValueChange(w.textValue),(v=w.ref.current)==null||v.click())}else{const w=s().find(S=>S.type==="option"&&!S.disabled&&S.textValue===r.textValue);w&&(r.onValueChange(w.value),r.onTextValueChange(w.textValue),r.autocomplete.type==="both"&&r.onFilterValueChange(w.textValue),(x=w.ref.current)==null||x.click())}r.onOpenChange(!1),m.preventDefault()}else r.onVisuallyFocussedItemChange(null)}),onChange:Ke(n.onChange,m=>{r.onTextValueChange(m.currentTarget.value),r.autocomplete.type==="both"&&r.onFilterValueChange(m.currentTarget.value)}),onKeyUp:Ke(n.onKeyUp,m=>{var v;if(!r.open&&(r.isPrintableCharacter(m.key)||["Backspace"].includes(m.key))&&f(),setTimeout(()=>{if(r.autocomplete.type==="both"&&r.isPrintableCharacter(m.key)&&r.filterValue!==void 0){const x=r.filterValue,w=s().find(S=>l(S.textValue,x));w&&r.onTextValueChange(w.textValue)}}),r.autocomplete.type==="none"&&r.isPrintableCharacter(m.key)){const x=r.textValue??"",w=s().find(S=>l(S.textValue,x));w&&(r.onVisuallyFocussedItemChange(w.ref.current),(v=w.ref.current)==null||v.scrollIntoView())}}),onBlur:Ke(n.onBlur,()=>{if(r.open)return;r.onVisuallyFocussedItemChange(null);const[m]=s().filter(x=>x.textValue===r.textValue&&x.type==="option");if(m){r.onValueChange(m.value),r.autocomplete.type==="both"&&r.onFilterValueChange(m.textValue);return}if(r.allowCustomValue){r.onValueChange(r.textValue),r.autocomplete.type==="both"&&r.onFilterValueChange(r.textValue);return}const[v]=s().filter(x=>x.value===r.value&&x.type==="option");v&&r.textValue!==""?(r.onTextValueChange(v.textValue),r.autocomplete.type==="both"&&r.onFilterValueChange(v.textValue)):(r.onValueChange(void 0),r.onTextValueChange(""))})})});Yp.displayName="ComboboxTextInput";const Xp=y.forwardRef((n,e)=>{const{children:t,...r}=n,o=Rn(Gp),s=o.disabled,l=()=>{var h;s||(o.onOpenChange(!0),(h=o.trigger)==null||h.focus())};return g.jsx(rt.button,{"aria-hidden":!0,type:"button","aria-disabled":s,"aria-controls":o.contentId,"aria-expanded":o.open,disabled:s,"data-disabled":s?"":void 0,...r,tabIndex:-1,ref:e,onClick:Ke(r.onClick,()=>{var h;(h=o.trigger)==null||h.focus()}),onPointerDown:Ke(r.onPointerDown,h=>{h.button===0&&h.ctrlKey===!1&&(l(),h.preventDefault())}),onKeyDown:Ke(r.onKeyDown,h=>{VC.includes(h.key)&&(l(),h.preventDefault())}),children:t||"▼"})});Xp.displayName="ComboboxIcon";const XC="ComboboxPortal",Jp=n=>g.jsx(Cp,{asChild:!0,...n});Jp.displayName=XC;const Lh="ComboboxContent",Zp=y.forwardRef((n,e)=>{const t=Rn(Lh),{getItems:r}=vo(void 0),[o,s]=y.useState();if(Yt(()=>{s(new DocumentFragment)},[]),Yt(()=>{t.open&&t.autocomplete.type==="none"&&setTimeout(()=>{var l;const h=r().find(u=>u.value===t.value);(l=h?.ref.current)==null||l.scrollIntoView({block:"nearest"})})},[r,t.autocomplete,t.value,t.open]),!t.open){const l=o;return l?$i.createPortal(g.jsx(Ir.Slot,{scope:void 0,children:g.jsx("div",{children:n.children})}),l):null}return g.jsx(Qp,{...n,ref:e})});Zp.displayName=Lh;const JC=10,Qp=y.forwardRef((n,e)=>{const{onEscapeKeyDown:t,onPointerDownOutside:r,...o}=n,s=Rn(Lh),l=ht(e,u=>s.onContentChange(u)),{onOpenChange:h}=s;return Oh(),y.useEffect(()=>{const u=()=>{h(!1)};return window.addEventListener("blur",u),window.addEventListener("resize",u),()=>{window.removeEventListener("blur",u),window.removeEventListener("resize",u)}},[h]),g.jsx(Eh,{allowPinchZoom:!0,children:g.jsx(Tp,{asChild:!0,onEscapeKeyDown:t,onPointerDownOutside:r,onFocusOutside:u=>{u.preventDefault()},onDismiss:()=>{var u;s.onOpenChange(!1),(u=s.trigger)==null||u.focus({preventScroll:!0})},children:g.jsx(eg,{role:"listbox",id:s.contentId,"data-state":s.open?"open":"closed",onContextMenu:u=>u.preventDefault(),...o,ref:l,style:{display:"flex",flexDirection:"column",outline:"none",...o.style}})})})});Qp.displayName="ComboboxContentImpl";const eg=y.forwardRef((n,e)=>{const{align:t="start",collisionPadding:r=JC,...o}=n;return g.jsx(Rp,{...o,ref:e,align:t,collisionPadding:r,style:{boxSizing:"border-box",...o.style,"--radix-combobox-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-combobox-content-available-width":"var(--radix-popper-available-width)","--radix-combobox-content-available-height":"var(--radix-popper-available-height)","--radix-combobox-trigger-width":"var(--radix-popper-anchor-width)","--radix-combobox-trigger-height":"var(--radix-popper-anchor-height)"}})});eg.displayName="ComboboxPopperPosition";const tg="ComboboxViewport",ng=y.forwardRef((n,e)=>{const t=Rn(tg),r=ht(e,t.onViewportChange),o=y.useMemo(()=>y.Children.toArray(n.children),[n.children]).length;return t.virtualized===!0||t.virtualized==="auto"&&o>100?g.jsx(Ir.Slot,{scope:void 0,children:g.jsx(Hp,{...n,ref:r,getItemCount:()=>o,estimatedItemSize:t.estimatedItemSize,overscan:t.overscan,onViewportChange:t.onViewportChange})}):g.jsxs(g.Fragment,{children:[g.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),g.jsx(Ir.Slot,{scope:void 0,children:g.jsx(rt.div,{"data-radix-combobox-viewport":"",role:"presentation",...n,ref:r,style:{position:"relative",flex:1,overflow:"auto",...n.style}})})]})});ng.displayName=tg;const qs="ComboboxItem",[hf,Ph]=Mp(qs),zh=y.forwardRef((n,e)=>{const{value:t,disabled:r=!1,textValue:o,...s}=n,[l,h]=y.useState();Yt(()=>{h(new DocumentFragment)},[]);const{onTextValueChange:u,textValue:f,...d}=Rn(qs),m=zr(),[v,x]=y.useState(o??""),w=d.value===t,{startsWith:S,contains:k}=jh(d.locale,{sensitivity:"base"}),A=y.useCallback(T=>{x(D=>D||(T?.textContent??"").trim())},[]);return y.useEffect(()=>{w&&f===void 0&&v!==""&&u(v)},[v,w,f,u]),d.autocomplete.type==="both"&&v&&d.filterValue&&!S(v,d.filterValue)||d.autocomplete.type==="list"&&d.autocomplete.filter==="startsWith"&&v&&f&&!S(v,f)||d.autocomplete.type==="list"&&d.autocomplete.filter==="contains"&&v&&f&&!k(v,f)?l?$i.createPortal(g.jsx(hf,{textId:m,onTextValueChange:A,isSelected:w,textValue:v,children:g.jsx(Ir.ItemSlot,{scope:void 0,value:t,textValue:v,disabled:r,type:"option",isVisible:!1,children:g.jsx(Nl,{ref:e,value:t,disabled:r,...s})})}),l):null:g.jsx(hf,{textId:m,onTextValueChange:A,isSelected:w,textValue:v,children:g.jsx(Ir.ItemSlot,{scope:void 0,value:t,textValue:v,disabled:r,type:"option",isVisible:!0,children:g.jsx(Nl,{ref:e,value:t,disabled:r,...s})})})});zh.displayName=qs;const rg="ComboboxItemImpl",Nl=y.forwardRef((n,e)=>{const{value:t,disabled:r=!1,...o}=n,s=y.useRef(null),l=ht(e,s),{getItems:h}=vo(void 0),{onTextValueChange:u,visuallyFocussedItem:f,...d}=Rn(qs),{isSelected:m,textValue:v,textId:x}=Ph(rg),w=()=>{var A;r||(d.onValueChange(t),u(v),d.onOpenChange(!1),d.autocomplete.type==="both"&&d.onFilterValueChange(v),(A=d.trigger)==null||A.focus({preventScroll:!0}))},S=y.useMemo(()=>{var A;return f===((A=h().find(T=>T.ref.current===s.current))==null?void 0:A.ref.current)},[h,f]),k=zr();return g.jsx(rt.div,{role:"option","aria-labelledby":x,"data-highlighted":S?"":void 0,"aria-selected":m&&S,"data-state":m?"checked":"unchecked","aria-disabled":r||void 0,"data-disabled":r?"":void 0,tabIndex:r?void 0:-1,...o,id:k,ref:l,onPointerUp:Ke(o.onPointerUp,w)})});Nl.displayName=rg;const ig="ComboboxItemText",og=y.forwardRef((n,e)=>{const{className:t,style:r,...o}=n,s=Ph(ig),l=ht(e,s.onTextValueChange);return g.jsx(rt.span,{id:s.textId,...o,ref:l})});og.displayName=ig;const sg="ComboboxItemIndicator",ag=y.forwardRef((n,e)=>{const{isSelected:t}=Ph(sg);return t?g.jsx(rt.span,{"aria-hidden":!0,...n,ref:e}):null});ag.displayName=sg;const Bh="ComboboxNoValueFound",lg=y.forwardRef((n,e)=>{const{textValue:t="",filterValue:r="",visible:o=!1,locale:s,autocomplete:l}=Rn(Bh),[h,u]=y.useState([]),{subscribe:f}=vo(void 0),{startsWith:d,contains:m}=jh(s,{sensitivity:"base"});return y.useEffect(()=>{const v=f(x=>{if(o){const w=x.filter(S=>S.type!=="create");u(w)}else u(x)});return()=>{v()}},[o,f]),l.type==="none"&&h.length>0||l.type==="list"&&l.filter==="startsWith"&&h.some(v=>d(v.textValue,t))||l.type==="both"&&h.some(v=>d(v.textValue,r))||l.type==="list"&&l.filter==="contains"&&h.some(v=>m(v.textValue,t))?null:g.jsx(rt.div,{...n,ref:e})});lg.displayName=Bh;const hg=y.forwardRef((n,e)=>{const{disabled:t=!1,...r}=n,o=Rn(Bh),{textValue:s,visuallyFocussedItem:l}=o,{getItems:h,subscribe:u}=vo(void 0),f=y.useRef(null),[d,m]=y.useState(!1),v=ht(e,f),x=y.useMemo(()=>{var k;return l===((k=h().find(A=>A.ref.current===f.current))==null?void 0:k.ref.current)},[h,l]),w=zr(),S=()=>{var k;!t&&s&&(o.onValueChange(s),o.onTextValueChange(s),o.onOpenChange(!1),o.autocomplete.type==="both"&&o.onFilterValueChange(s),(k=o.trigger)==null||k.focus({preventScroll:!0}))};return Yt(()=>{const k=u(A=>{m(!A.some(T=>T.textValue===s&&T.type!=="create"))});return h().length===0&&m(!0),()=>{k()}},[s,u,h]),(!s||!d)&&!o.visible?null:g.jsx(Ir.ItemSlot,{scope:void 0,value:s??"",textValue:s??"",disabled:t,isVisible:!0,type:"create",children:g.jsx(rt.div,{role:"option",tabIndex:t?void 0:-1,"aria-disabled":t||void 0,"data-disabled":t?"":void 0,"data-highlighted":x?"":void 0,...r,id:w,ref:v,onPointerUp:Ke(r.onPointerUp,S)})})});hg.displayName="ComboboxCreateItem";const ZC=YC,QC=Kp,eS=Yp,tS=Xp,nS=Jp,rS=Zp,iS=ng,oS=zh,sS=og,aS=ag,lS=lg,hS=hg;function cS(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++)if(n[r]!==e[r])return r;return t}const gn=Object.freeze(Object.defineProperty({__proto__:null,ComboboxItem:zh,Content:rS,CreateItem:hS,Icon:tS,Item:oS,ItemIndicator:aS,ItemText:sS,NoValueFound:lS,Portal:nS,Root:ZC,TextInput:eS,Trigger:QC,Viewport:iS},Symbol.toStringTag,{value:"Module"}));function Nh(n){const e=y.useRef(n);return y.useEffect(()=>{e.current=n}),y.useMemo(()=>(...t)=>{var r;return(r=e.current)==null?void 0:r.call(e,...t)},[])}const uS=[" ","Enter","ArrowUp","ArrowDown"],dS=[" ","Enter"],bo="Select",[Ks,xo,fS]=s$(bo),[Si,pS]=Sp(bo,[fS,kp]),Gs=kp(),[gS,Gn]=Si(bo),[mS,vS]=Si(bo),Fh=n=>{const{__scopeSelect:e,children:t,open:r,defaultOpen:o,onOpenChange:s,value:l,defaultValue:h,onValueChange:u,dir:f,disabled:d,required:m,multi:v=!1}=n,x=Gs(e),[w,S]=y.useState(null),[k,A]=y.useState(null),[T,D]=y.useState(!1),j=i$(f),[F=!1,B]=si({prop:r,defaultProp:o,onChange:s}),[W,re]=si({prop:l,defaultProp:h,onChange(he){u&&u(he)}}),ae=y.useRef(null),[ie,$e]=y.useState(new Set);return g.jsx(Ap,{...x,children:g.jsx(gS,{required:m,scope:e,trigger:w,onTriggerChange:S,valueNode:k,onValueNodeChange:A,valueNodeHasChildren:T,onValueNodeHasChildrenChange:D,contentId:zr(),value:W,onValueChange:re,open:F,onOpenChange:B,dir:j,triggerPointerDownPosRef:ae,disabled:d,multi:v,children:g.jsx(Ks.Provider,{scope:e,children:g.jsx(mS,{scope:n.__scopeSelect,onNativeOptionAdd:y.useCallback(he=>{$e(ne=>new Set(ne).add(he))},[]),onNativeOptionRemove:y.useCallback(he=>{$e(ne=>{const ue=new Set(ne);return ue.delete(he),ue})},[]),children:t})})})})};Fh.displayName=bo;const cg="SelectTrigger",Wh=y.forwardRef((n,e)=>{const{__scopeSelect:t,...r}=n,o=Gs(t),s=Gn(cg,t),l=s.disabled,h=ht(e,s.onTriggerChange),u=xo(t),[f,d,m]=xg(x=>{const w=u().filter(A=>!A.disabled),S=w.find(A=>A.value===s.value),k=wg(w,x,S);if(k!==void 0&&!Array.isArray(k.value)){const A=s.multi?[k.value]:k.value;s.onValueChange(A)}}),v=()=>{l||(s.onOpenChange(!0),m())};return g.jsx($p,{asChild:!0,...o,children:g.jsx(rt.div,{role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed","data-disabled":l?"":void 0,"data-placeholder":s.value===void 0?"":void 0,tabIndex:l?void 0:0,...r,ref:h,onClick:Ke(r.onClick,x=>{x.currentTarget.focus()}),onPointerDown:Ke(r.onPointerDown,x=>{const w=x.target;w.hasPointerCapture(x.pointerId)&&w.releasePointerCapture(x.pointerId),(w.closest("button")??w.closest("div"))===x.currentTarget&&x.button===0&&x.ctrlKey===!1&&(v(),s.triggerPointerDownPosRef.current={x:Math.round(x.pageX),y:Math.round(x.pageY)},x.preventDefault())}),onKeyDown:Ke(r.onKeyDown,x=>{const w=f.current!=="",S=x.ctrlKey||x.altKey||x.metaKey,k=x.target;(k.closest("button")??k.closest("div"))===x.currentTarget&&(!S&&x.key.length===1&&d(x.key),!(w&&x.key===" ")&&uS.includes(x.key)&&(v(),x.preventDefault()))})})})});Wh.displayName=cg;const ug="SelectValue",Vh=y.forwardRef((n,e)=>{const{__scopeSelect:t,children:r,placeholder:o,...s}=n,l=Gn(ug,t),{onValueNodeHasChildrenChange:h}=l,u=r!==void 0,f=ht(e,l.onValueNodeChange),[d,m]=y.useState([]),v=xo(t);Yt(()=>{h(u)},[h,u]),y.useLayoutEffect(()=>{if(Array.isArray(l.value)){const w=new Set(d.map(k=>k.value)),S=new Set(l.value);if(!(w.size===S.size&&Array.from(S).every(k=>w.has(k)))){const k=setTimeout(()=>{const A=v().filter(T=>{var D;return Array.isArray(T.value)?!1:(D=l.value)==null?void 0:D.includes(T.value)});m(A)});return()=>{clearTimeout(k)}}}},[l.value,v,d]);let x;if((l.value===void 0||l.value.length===0)&&o!==void 0)x=g.jsx("span",{children:o});else if(typeof r=="function")if(Array.isArray(l.value)){const w=l.value.map(S=>{const k=d.find(A=>A.value===S);return k?r({value:S,textValue:k?.textValue}):null});x=w.every(S=>S===null)?o:w}else x=r(l.value);else x=r;return g.jsx(rt.span,{...s,ref:f,children:x||null})});Vh.displayName=ug;const bS="SelectIcon",Hh=y.forwardRef((n,e)=>{const{__scopeSelect:t,children:r,...o}=n;return g.jsx(rt.span,{"aria-hidden":!0,...o,ref:e,children:r||"▼"})});Hh.displayName=bS;const xS="SelectPortal",Uh=n=>g.jsx(Cp,{asChild:!0,...n});Uh.displayName=xS;const _r="SelectContent",qh=y.forwardRef((n,e)=>{const t=Gn(_r,n.__scopeSelect),[r,o]=y.useState();if(Yt(()=>{o(new DocumentFragment)},[]),!t.open){const s=r;return s?$i.createPortal(g.jsx(dg,{scope:n.__scopeSelect,children:g.jsx(Ks.Slot,{scope:n.__scopeSelect,children:g.jsx("div",{children:n.children})})}),s):null}return g.jsx(fg,{...n,ref:e})});qh.displayName=_r;const Bn=10,[dg,fr]=Si(_r),wS="SelectContentImpl",fg=y.forwardRef((n,e)=>{const{__scopeSelect:t,position:r="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:s,onPointerDownOutside:l,side:h,sideOffset:u,align:f,alignOffset:d,arrowPadding:m,collisionBoundary:v,collisionPadding:x,sticky:w,hideWhenDetached:S,avoidCollisions:k,...A}=n,T=Gn(_r,t),[D,j]=y.useState(null),[F,B]=y.useState(null),W=ht(e,J=>j(J)),[re,ae]=y.useState(null),[ie,$e]=y.useState(null),he=xo(t),[ne,ue]=y.useState(!1),Te=y.useRef(!1);y.useEffect(()=>{if(D)return Vp(D)},[D]),Oh();const Re=y.useCallback(J=>{const[de,...pe]=he().map(Ae=>Ae.ref.current),[me]=pe.slice(-1),xe=document.activeElement;for(const Ae of J)if(Ae===xe||(Ae?.scrollIntoView({block:"nearest"}),Ae===de&&F&&(F.scrollTop=0),Ae===me&&F&&(F.scrollTop=F.scrollHeight),Ae?.focus(),document.activeElement!==xe))return},[he,F]),oe=y.useCallback(()=>Re([re,D]),[Re,re,D]);y.useEffect(()=>{ne&&oe()},[ne,oe]);const{onOpenChange:se,triggerPointerDownPosRef:Me}=T;y.useEffect(()=>{if(D){let J={x:0,y:0};const de=me=>{var xe,Ae;J={x:Math.abs(Math.round(me.pageX)-(((xe=Me.current)==null?void 0:xe.x)??0)),y:Math.abs(Math.round(me.pageY)-(((Ae=Me.current)==null?void 0:Ae.y)??0))}},pe=me=>{J.x<=10&&J.y<=10?me.preventDefault():D.contains(me.target)||se(!1),document.removeEventListener("pointermove",de),Me.current=null};return Me.current!==null&&(document.addEventListener("pointermove",de),document.addEventListener("pointerup",pe,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",de),document.removeEventListener("pointerup",pe,{capture:!0})}}},[D,se,Me]),y.useEffect(()=>{const J=()=>se(!1);return window.addEventListener("blur",J),window.addEventListener("resize",J),()=>{window.removeEventListener("blur",J),window.removeEventListener("resize",J)}},[se]);const[Se,Ee]=xg(J=>{const de=he().filter(xe=>!xe.disabled),pe=de.find(xe=>xe.ref.current===document.activeElement),me=wg(de,J,pe);me&&setTimeout(()=>me.ref.current.focus())}),Ie=y.useCallback((J,de,pe)=>{const me=!Te.current&&!pe;(T.value!==void 0&&T.value===de||me)&&(ae(J),me&&(Te.current=!0))},[T.value]),Je=y.useCallback(()=>D?.focus(),[D]),Ze=y.useCallback((J,de,pe)=>{const me=!Te.current&&!pe;(T.value!==void 0&&(Array.isArray(de)?de.every(xe=>{var Ae;return(Ae=T.value)==null?void 0:Ae.includes(xe)}):T.value===de)||me)&&$e(J)},[T.value]),Pe=r==="popper"?Fl:pg,st=Pe===Fl?{side:h,sideOffset:u,align:f,alignOffset:d,arrowPadding:m,collisionBoundary:v,collisionPadding:x,sticky:w,hideWhenDetached:S,avoidCollisions:k}:{};return g.jsx(dg,{scope:t,content:D,viewport:F,onViewportChange:B,itemRefCallback:Ie,selectedItem:re,onItemLeave:Je,itemTextRefCallback:Ze,focusSelectedItem:oe,selectedItemText:ie,position:r,isPositioned:ne,searchRef:Se,children:g.jsx(Eh,{as:Ll,allowPinchZoom:!0,children:g.jsx(Dh,{asChild:!0,trapped:T.open,onMountAutoFocus:J=>{J.preventDefault()},onUnmountAutoFocus:Ke(o,J=>{var de,pe;(de=T.trigger)==null||de.focus({preventScroll:!0}),(pe=document.getSelection())==null||pe.empty(),J.preventDefault()}),children:g.jsx(Tp,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:J=>J.preventDefault(),onDismiss:()=>T.onOpenChange(!1),children:g.jsx(Pe,{role:"listbox",id:T.contentId,"data-state":T.open?"open":"closed","aria-multiselectable":T.multi?"true":void 0,dir:T.dir,onContextMenu:J=>J.preventDefault(),...A,...st,onPlaced:()=>ue(!0),ref:W,style:{display:"flex",flexDirection:"column",outline:"none",...A.style},onKeyDown:Ke(A.onKeyDown,J=>{const de=J.ctrlKey||J.altKey||J.metaKey;if(J.key==="Tab"&&J.preventDefault(),!de&&J.key.length===1&&Ee(J.key),["ArrowUp","ArrowDown","Home","End"].includes(J.key)){let pe=he().filter(me=>!me.disabled).map(me=>me.ref.current);if(["ArrowUp","End"].includes(J.key)&&(pe=pe.slice().reverse()),["ArrowUp","ArrowDown"].includes(J.key)){const me=J.target,xe=pe.indexOf(me);pe=pe.slice(xe+1)}setTimeout(()=>Re(pe)),J.preventDefault()}})})})})})})});fg.displayName=wS;const yS="SelectItemAlignedPosition",pg=y.forwardRef((n,e)=>{const{__scopeSelect:t,onPlaced:r,...o}=n,s=Gn(_r,t),l=fr(_r,t),[h,u]=y.useState(null),[f,d]=y.useState(null),m=ht(e,W=>d(W)),v=xo(t),x=y.useRef(!1),w=y.useRef(!0),{viewport:S,selectedItem:k,selectedItemText:A,focusSelectedItem:T}=l,D=y.useCallback(()=>{if(s.trigger&&s.valueNode&&h&&f&&S&&k&&A){const W=s.trigger.getBoundingClientRect(),re=f.getBoundingClientRect(),ae=s.valueNode.getBoundingClientRect(),ie=A.getBoundingClientRect();if(s.dir!=="rtl"){const me=ie.left-re.left,xe=ae.left-me,Ae=W.left-xe,ct=W.width+Ae,Fe=Math.max(ct,re.width),fe=window.innerWidth-Bn,At=sf(xe,[Bn,fe-Fe]);h.style.minWidth=`${ct}px`,h.style.left=`${At}px`}else{const me=re.right-ie.right,xe=window.innerWidth-ae.right-me,Ae=window.innerWidth-W.right-xe,ct=W.width+Ae,Fe=Math.max(ct,re.width),fe=window.innerWidth-Bn,At=sf(xe,[Bn,fe-Fe]);h.style.minWidth=`${ct}px`,h.style.right=`${At}px`}const $e=v(),he=window.innerHeight-Bn*2,ne=S.scrollHeight,ue=window.getComputedStyle(f),Te=parseInt(ue.borderTopWidth,10),Re=parseInt(ue.paddingTop,10),oe=parseInt(ue.borderBottomWidth,10),se=parseInt(ue.paddingBottom,10),Me=Te+Re+ne+se+oe,Se=Math.min(k.offsetHeight*5,Me),Ee=window.getComputedStyle(S),Ie=parseInt(Ee.paddingTop,10),Je=parseInt(Ee.paddingBottom,10),Ze=W.top+W.height/2-Bn,Pe=he-Ze,st=k.offsetHeight/2,J=k.offsetTop+st,de=Te+Re+J,pe=Me-de;if(de<=Ze){const me=k===$e[$e.length-1].ref.current;h.style.bottom="0px";const xe=f.clientHeight-S.offsetTop-S.offsetHeight,Ae=Math.max(Pe,st+(me?Je:0)+xe+oe),ct=de+Ae;h.style.height=`${ct}px`}else{const me=k===$e[0].ref.current;h.style.top="0px";const xe=Math.max(Ze,Te+S.offsetTop+(me?Ie:0)+st)+pe;h.style.height=`${xe}px`,S.scrollTop=de-Ze+S.offsetTop}h.style.margin=`${Bn}px 0`,h.style.minHeight=`${Se}px`,h.style.maxHeight=`${he}px`,r?.(),requestAnimationFrame(()=>x.current=!0)}},[v,s.trigger,s.valueNode,h,f,S,k,A,s.dir,r]);Yt(()=>D(),[D]);const[j,F]=y.useState();Yt(()=>{f&&F(window.getComputedStyle(f).zIndex)},[f]);const B=y.useCallback(W=>{W&&w.current===!0&&(D(),T?.(),w.current=!1)},[D,T]);return g.jsx(CS,{scope:t,contentWrapper:h,shouldExpandOnScrollRef:x,onScrollButtonChange:B,children:g.jsx("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:j},children:g.jsx(rt.div,{...o,ref:m,style:{boxSizing:"border-box",maxHeight:"100%",...o.style}})})})});pg.displayName=yS;const $S="SelectPopperPosition",Fl=y.forwardRef((n,e)=>{const{__scopeSelect:t,align:r="start",collisionPadding:o=Bn,...s}=n,l=Gs(t);return g.jsx(Rp,{...l,...s,ref:e,align:r,collisionPadding:o,style:{boxSizing:"border-box",...s.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Fl.displayName=$S;const[CS,Kh]=Si(_r,{}),Wl="SelectViewport",Gh=y.forwardRef((n,e)=>{const{__scopeSelect:t,...r}=n,o=fr(Wl,t),s=Kh(Wl,t),l=ht(e,o.onViewportChange),h=y.useRef(0);return g.jsxs(g.Fragment,{children:[g.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),g.jsx(Ks.Slot,{scope:t,children:g.jsx(rt.div,{"data-radix-select-viewport":"",role:"presentation",...r,ref:l,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:Ke(r.onScroll,u=>{const f=u.currentTarget,{contentWrapper:d,shouldExpandOnScrollRef:m}=s;if(m!=null&&m.current&&d){const v=Math.abs(h.current-f.scrollTop);if(v>0){const x=window.innerHeight-Bn*2,w=parseFloat(d.style.minHeight),S=parseFloat(d.style.height),k=Math.max(w,S);if(k<x){const A=k+v,T=Math.min(x,A),D=A-T;d.style.height=`${T}px`,d.style.bottom==="0px"&&(f.scrollTop=D>0?D:0,d.style.justifyContent="flex-end")}}}h.current=f.scrollTop})})})]})});Gh.displayName=Wl;const gg="SelectGroup",[SS,kS]=Si(gg),Yh=y.forwardRef((n,e)=>{const{__scopeSelect:t,...r}=n,o=zr();return g.jsx(SS,{scope:t,id:o,children:g.jsx(rt.div,{role:"group","aria-labelledby":o,...r,ref:e})})});Yh.displayName=gg;const mg="SelectLabel",Xh=y.forwardRef((n,e)=>{const{__scopeSelect:t,...r}=n,o=kS(mg,t);return g.jsx(rt.div,{id:o.id,...r,ref:e})});Xh.displayName=mg;const js="SelectItem",[AS,vg]=Si(js),Jh=y.forwardRef((n,e)=>{const{__scopeSelect:t,value:r,disabled:o=!1,textValue:s,...l}=n,h=Gn(js,t),u=fr(js,t),f=typeof r=="string"?Array.isArray(h.value)?h.value.includes(r):h.value===r:r.every(T=>{var D;return(D=h.value)==null?void 0:D.includes(T)}),d=Array.isArray(h.value)&&Array.isArray(r)&&r.some(T=>{var D;return(D=h.value)==null?void 0:D.includes(T)}),[m,v]=y.useState(s??""),[x,w]=y.useState(!1),S=ht(e,T=>{var D;return(D=u.itemRefCallback)==null?void 0:D.call(u,T,r,o)}),k=zr(),A=()=>{if(!o){let T=h.multi&&typeof r=="string"?[r]:r;d&&!f?h.onValueChange(T):Array.isArray(h.value)&&(T=yg(r,h.value)),h.onValueChange(T),h.multi||h.onOpenChange(!1)}};if(!h.multi&&Array.isArray(r))throw new Error("You can only pass an array of values in multi selects");return g.jsx(AS,{scope:t,value:r,disabled:o,textId:k,isSelected:f,isIntermediate:d,onItemTextChange:y.useCallback(T=>{v(D=>D||(T?.textContent??"").trim())},[]),children:g.jsx(Ks.ItemSlot,{scope:t,value:r,disabled:o,textValue:m,children:g.jsx(rt.div,{role:"option","aria-labelledby":k,"data-highlighted":x?"":void 0,"aria-selected":h.multi?void 0:f&&x,"aria-checked":h.multi?f:void 0,"data-state":f?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...l,ref:S,onFocus:Ke(l.onFocus,()=>w(!0)),onBlur:Ke(l.onBlur,()=>w(!1)),onPointerUp:Ke(l.onPointerUp,A),onPointerMove:Ke(l.onPointerMove,T=>{var D;o?(D=u.onItemLeave)==null||D.call(u):T.currentTarget.focus({preventScroll:!0})}),onPointerLeave:Ke(l.onPointerLeave,T=>{var D;T.currentTarget===document.activeElement&&((D=u.onItemLeave)==null||D.call(u))}),onKeyDown:Ke(l.onKeyDown,T=>{var D;((D=u.searchRef)==null?void 0:D.current)!==""&&T.key===" "||(dS.includes(T.key)&&A(),T.key===" "&&T.preventDefault())})})})})});Jh.displayName=js;const Zi="SelectItemText",Zh=y.forwardRef((n,e)=>{const{__scopeSelect:t,className:r,style:o,...s}=n,l=Gn(Zi,t),h=fr(Zi,t),u=vg(Zi,t),f=vS(Zi,t),[d,m]=y.useState(null),v=ht(e,A=>m(A),u.onItemTextChange,A=>{var T;return(T=h.itemTextRefCallback)==null?void 0:T.call(h,A,u.value,u.disabled)}),x=d?.textContent,w=y.useMemo(()=>g.jsx("option",{value:u.value,disabled:u.disabled,children:x},Array.isArray(u.value)?u.value.join(";"):u.value),[u.disabled,u.value,x]),{onNativeOptionAdd:S,onNativeOptionRemove:k}=f;return Yt(()=>(S(w),()=>k(w)),[S,k,w]),g.jsxs(g.Fragment,{children:[g.jsx(rt.span,{id:u.textId,...s,ref:v}),u.isSelected&&l.valueNode&&!l.valueNodeHasChildren?$i.createPortal(s.children,l.valueNode):null]})});Zh.displayName=Zi;const bg="SelectItemIndicator",Qh=y.forwardRef((n,e)=>{const{__scopeSelect:t,children:r,...o}=n,s=vg(bg,t);return typeof r=="function"?g.jsx(rt.span,{"aria-hidden":!0,...o,ref:e,children:r({isSelected:s.isSelected,isIntermediate:s.isIntermediate})}):s.isSelected?g.jsx(rt.span,{"aria-hidden":!0,...o,ref:e,children:r}):null});Qh.displayName=bg;const Vl="SelectScrollUpButton",ec=y.forwardRef((n,e)=>{const t=fr(Vl,n.__scopeSelect),r=Kh(Vl,n.__scopeSelect),[o,s]=y.useState(!1),l=ht(e,r.onScrollButtonChange);return Yt(()=>{if(t.viewport&&t.isPositioned){const h=t.viewport,u=()=>{const f=h.scrollTop>0;s(f)};return u(),h.addEventListener("scroll",u),()=>h.removeEventListener("scroll",u)}},[t.viewport,t.isPositioned]),o?g.jsx(nc,{...n,ref:l,onAutoScroll:()=>{const{viewport:h,selectedItem:u}=t;h&&u&&(h.scrollTop-=u.offsetHeight)}}):null});ec.displayName=Vl;const Hl="SelectScrollDownButton",tc=y.forwardRef((n,e)=>{const t=fr(Hl,n.__scopeSelect),r=Kh(Hl,n.__scopeSelect),[o,s]=y.useState(!1),l=ht(e,r.onScrollButtonChange);return Yt(()=>{if(t.viewport&&t.isPositioned){const h=t.viewport,u=()=>{const f=h.scrollHeight-h.clientHeight,d=Math.ceil(h.scrollTop)<f;s(d)};return u(),h.addEventListener("scroll",u),()=>h.removeEventListener("scroll",u)}},[t.viewport,t.isPositioned]),o?g.jsx(nc,{...n,ref:l,onAutoScroll:()=>{const{viewport:h,selectedItem:u}=t;h&&u&&(h.scrollTop+=u.offsetHeight)}}):null});tc.displayName=Hl;const nc=y.forwardRef((n,e)=>{const{__scopeSelect:t,onAutoScroll:r,...o}=n,s=fr("SelectScrollButton",t),l=y.useRef(null),h=xo(t),u=y.useCallback(()=>{l.current!==null&&(window.clearInterval(l.current),l.current=null)},[]);return y.useEffect(()=>()=>u(),[u]),Yt(()=>{var f;const d=h().find(m=>m.ref.current===document.activeElement);(f=d?.ref.current)==null||f.scrollIntoView({block:"nearest"})},[h]),g.jsx(rt.div,{"aria-hidden":!0,...o,ref:e,style:{flexShrink:0,...o.style},onPointerMove:Ke(o.onPointerMove,()=>{var f;(f=s.onItemLeave)==null||f.call(s),l.current===null&&(l.current=window.setInterval(r,50))}),onPointerLeave:Ke(o.onPointerLeave,()=>{u()})})});nc.displayName="SelectScrollButtonImpl";const MS="SelectSeparator",rc=y.forwardRef((n,e)=>{const{__scopeSelect:t,...r}=n;return g.jsx(rt.div,{"aria-hidden":!0,...r,ref:e})});rc.displayName=MS;const Ul="SelectArrow",ic=y.forwardRef((n,e)=>{const{__scopeSelect:t,...r}=n,o=Gs(t),s=Gn(Ul,t),l=fr(Ul,t);return s.open&&l.position==="popper"?g.jsx(r$,{...o,...r,ref:e}):null});ic.displayName=Ul;const TS="BubbleSelect",RS=y.forwardRef((n,e)=>{const{value:t,...r}=n,o=y.useRef(null),s=ht(e,o),l=a$(t),h=Gn(TS,void 0);y.useEffect(()=>{const f=o.current,d=window.HTMLSelectElement.prototype,m=Object.getOwnPropertyDescriptor(d,"value").set;if(l!==t&&m){const v=new Event("change",{bubbles:!0});m.call(f,t),f.dispatchEvent(v)}},[l,t]);let u=t;return h.multi&&!Array.isArray(t)&&(u=[]),g.jsx(l$,{asChild:!0,children:g.jsx("select",{...r,multiple:h.multi?!0:void 0,ref:s,defaultValue:u})})});RS.displayName="BubbleSelect";function xg(n){const e=Nh(n),t=y.useRef(""),r=y.useRef(0),o=y.useCallback(l=>{const h=t.current+l;e(h),function u(f){t.current=f,window.clearTimeout(r.current),f!==""&&(r.current=window.setTimeout(()=>u(""),1e3))}(h)},[e]),s=y.useCallback(()=>{t.current="",window.clearTimeout(r.current)},[]);return y.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,o,s]}function wg(n,e,t){const r=e.length>1&&Array.from(e).every(h=>h===e[0])?e[0]:e,o=t?n.indexOf(t):-1;let s=DS(n,Math.max(o,0));r.length===1&&(s=s.filter(h=>h!==t));const l=s.find(h=>h.textValue.toLowerCase().startsWith(r.toLowerCase()));return l!==t?l:void 0}function DS(n,e){return n.map((t,r)=>n[(e+r)%n.length])}const yg=(n,e=[])=>{if(Array.isArray(n))return n.reduce((r,o)=>yg(o,r),e);const t=e.indexOf(n);return t===-1?[...e,n]:[...e.slice(0,t),...e.slice(t+1)]},OS=Fh,ES=Wh,IS=Vh,_S=Hh,jS=Uh,LS=qh,PS=Gh,zS=Yh,BS=Xh,NS=Jh,FS=Zh,WS=Qh,VS=ec,HS=tc,US=rc,qS=ic,bn=Object.freeze(Object.defineProperty({__proto__:null,Arrow:qS,Content:LS,Group:zS,Icon:_S,Item:NS,ItemIndicator:WS,ItemText:FS,Label:BS,Portal:jS,Root:OS,ScrollDownButton:HS,ScrollUpButton:VS,Select:Fh,SelectArrow:ic,SelectContent:qh,SelectGroup:Yh,SelectIcon:Hh,SelectItem:Jh,SelectItemIndicator:Qh,SelectItemText:Zh,SelectLabel:Xh,SelectPortal:Uh,SelectScrollDownButton:tc,SelectScrollUpButton:ec,SelectSeparator:rc,SelectTrigger:Wh,SelectValue:Vh,SelectViewport:Gh,Separator:US,Trigger:ES,Value:IS,Viewport:PS,createSelectScope:pS},Symbol.toStringTag,{value:"Module"}));function Or(n,e,{checkForDefaultPrevented:t=!0}={}){return function(r){if(n?.(r),t===!1||!r.defaultPrevented)return e?.(r)}}var Ls={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ls.exports;(function(n,e){(function(){var t,r="4.17.21",o=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",h="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",f=500,d="__lodash_placeholder__",m=1,v=2,x=4,w=1,S=2,k=1,A=2,T=4,D=8,j=16,F=32,B=64,W=128,re=256,ae=512,ie=30,$e="...",he=800,ne=16,ue=1,Te=2,Re=3,oe=1/0,se=9007199254740991,Me=17976931348623157e292,Se=NaN,Ee=4294967295,Ie=Ee-1,Je=Ee>>>1,Ze=[["ary",W],["bind",k],["bindKey",A],["curry",D],["curryRight",j],["flip",ae],["partial",F],["partialRight",B],["rearg",re]],Pe="[object Arguments]",st="[object Array]",J="[object AsyncFunction]",de="[object Boolean]",pe="[object Date]",me="[object DOMException]",xe="[object Error]",Ae="[object Function]",ct="[object GeneratorFunction]",Fe="[object Map]",fe="[object Number]",At="[object Null]",ft="[object Object]",Ao="[object Promise]",ia="[object Proxy]",Yn="[object RegExp]",Nt="[object Set]",Xn="[object String]",Jn="[object Symbol]",Fr="[object Undefined]",gr="[object WeakMap]",Di="[object WeakSet]",mr="[object ArrayBuffer]",Zn="[object DataView]",Wr="[object Float32Array]",Oi="[object Float64Array]",vr="[object Int8Array]",pt="[object Int16Array]",oa="[object Int32Array]",sa="[object Uint8Array]",aa="[object Uint8ClampedArray]",la="[object Uint16Array]",ha="[object Uint32Array]",S0=/\b__p \+= '';/g,k0=/\b(__p \+=) '' \+/g,A0=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Dc=/&(?:amp|lt|gt|quot|#39);/g,Oc=/[&<>"']/g,M0=RegExp(Dc.source),T0=RegExp(Oc.source),R0=/<%-([\s\S]+?)%>/g,D0=/<%([\s\S]+?)%>/g,Ec=/<%=([\s\S]+?)%>/g,O0=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E0=/^\w*$/,I0=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ca=/[\\^$.*+?()[\]{}|]/g,_0=RegExp(ca.source),ua=/^\s+/,j0=/\s/,L0=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,P0=/\{\n\/\* \[wrapped with (.+)\] \*/,z0=/,? & /,B0=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,N0=/[()=,{}\[\]\/\s]/,F0=/\\(\\)?/g,W0=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ic=/\w*$/,V0=/^[-+]0x[0-9a-f]+$/i,H0=/^0b[01]+$/i,U0=/^\[object .+?Constructor\]$/,q0=/^0o[0-7]+$/i,K0=/^(?:0|[1-9]\d*)$/,G0=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Mo=/($^)/,Y0=/['\n\r\u2028\u2029\\]/g,To="\\ud800-\\udfff",X0="\\u0300-\\u036f",J0="\\ufe20-\\ufe2f",Z0="\\u20d0-\\u20ff",_c=X0+J0+Z0,jc="\\u2700-\\u27bf",Lc="a-z\\xdf-\\xf6\\xf8-\\xff",Q0="\\xac\\xb1\\xd7\\xf7",e1="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",t1="\\u2000-\\u206f",n1=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Pc="A-Z\\xc0-\\xd6\\xd8-\\xde",zc="\\ufe0e\\ufe0f",Bc=Q0+e1+t1+n1,da="['’]",r1="["+To+"]",Nc="["+Bc+"]",Ro="["+_c+"]",Fc="\\d+",i1="["+jc+"]",Wc="["+Lc+"]",Vc="[^"+To+Bc+Fc+jc+Lc+Pc+"]",fa="\\ud83c[\\udffb-\\udfff]",o1="(?:"+Ro+"|"+fa+")",Hc="[^"+To+"]",pa="(?:\\ud83c[\\udde6-\\uddff]){2}",ga="[\\ud800-\\udbff][\\udc00-\\udfff]",Vr="["+Pc+"]",Uc="\\u200d",qc="(?:"+Wc+"|"+Vc+")",s1="(?:"+Vr+"|"+Vc+")",Kc="(?:"+da+"(?:d|ll|m|re|s|t|ve))?",Gc="(?:"+da+"(?:D|LL|M|RE|S|T|VE))?",Yc=o1+"?",Xc="["+zc+"]?",a1="(?:"+Uc+"(?:"+[Hc,pa,ga].join("|")+")"+Xc+Yc+")*",l1="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",h1="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Jc=Xc+Yc+a1,c1="(?:"+[i1,pa,ga].join("|")+")"+Jc,u1="(?:"+[Hc+Ro+"?",Ro,pa,ga,r1].join("|")+")",d1=RegExp(da,"g"),f1=RegExp(Ro,"g"),ma=RegExp(fa+"(?="+fa+")|"+u1+Jc,"g"),p1=RegExp([Vr+"?"+Wc+"+"+Kc+"(?="+[Nc,Vr,"$"].join("|")+")",s1+"+"+Gc+"(?="+[Nc,Vr+qc,"$"].join("|")+")",Vr+"?"+qc+"+"+Kc,Vr+"+"+Gc,h1,l1,Fc,c1].join("|"),"g"),g1=RegExp("["+Uc+To+_c+zc+"]"),m1=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,v1=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],b1=-1,Ve={};Ve[Wr]=Ve[Oi]=Ve[vr]=Ve[pt]=Ve[oa]=Ve[sa]=Ve[aa]=Ve[la]=Ve[ha]=!0,Ve[Pe]=Ve[st]=Ve[mr]=Ve[de]=Ve[Zn]=Ve[pe]=Ve[xe]=Ve[Ae]=Ve[Fe]=Ve[fe]=Ve[ft]=Ve[Yn]=Ve[Nt]=Ve[Xn]=Ve[gr]=!1;var We={};We[Pe]=We[st]=We[mr]=We[Zn]=We[de]=We[pe]=We[Wr]=We[Oi]=We[vr]=We[pt]=We[oa]=We[Fe]=We[fe]=We[ft]=We[Yn]=We[Nt]=We[Xn]=We[Jn]=We[sa]=We[aa]=We[la]=We[ha]=!0,We[xe]=We[Ae]=We[gr]=!1;var x1={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},w1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y1={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},$1={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},C1=parseFloat,S1=parseInt,Zc=typeof Ki=="object"&&Ki&&Ki.Object===Object&&Ki,k1=typeof self=="object"&&self&&self.Object===Object&&self,gt=Zc||k1||Function("return this")(),va=e&&!e.nodeType&&e,br=va&&!0&&n&&!n.nodeType&&n,Qc=br&&br.exports===va,ba=Qc&&Zc.process,Jt=function(){try{var O=br&&br.require&&br.require("util").types;return O||ba&&ba.binding&&ba.binding("util")}catch{}}(),eu=Jt&&Jt.isArrayBuffer,tu=Jt&&Jt.isDate,nu=Jt&&Jt.isMap,ru=Jt&&Jt.isRegExp,iu=Jt&&Jt.isSet,ou=Jt&&Jt.isTypedArray;function Ft(O,L,_){switch(_.length){case 0:return O.call(L);case 1:return O.call(L,_[0]);case 2:return O.call(L,_[0],_[1]);case 3:return O.call(L,_[0],_[1],_[2])}return O.apply(L,_)}function A1(O,L,_,K){for(var le=-1,De=O==null?0:O.length;++le<De;){var at=O[le];L(K,at,_(at),O)}return K}function Zt(O,L){for(var _=-1,K=O==null?0:O.length;++_<K&&L(O[_],_,O)!==!1;);return O}function M1(O,L){for(var _=O==null?0:O.length;_--&&L(O[_],_,O)!==!1;);return O}function su(O,L){for(var _=-1,K=O==null?0:O.length;++_<K;)if(!L(O[_],_,O))return!1;return!0}function Qn(O,L){for(var _=-1,K=O==null?0:O.length,le=0,De=[];++_<K;){var at=O[_];L(at,_,O)&&(De[le++]=at)}return De}function Do(O,L){var _=O==null?0:O.length;return!!_&&Hr(O,L,0)>-1}function xa(O,L,_){for(var K=-1,le=O==null?0:O.length;++K<le;)if(_(L,O[K]))return!0;return!1}function Ge(O,L){for(var _=-1,K=O==null?0:O.length,le=Array(K);++_<K;)le[_]=L(O[_],_,O);return le}function er(O,L){for(var _=-1,K=L.length,le=O.length;++_<K;)O[le+_]=L[_];return O}function wa(O,L,_,K){var le=-1,De=O==null?0:O.length;for(K&&De&&(_=O[++le]);++le<De;)_=L(_,O[le],le,O);return _}function T1(O,L,_,K){var le=O==null?0:O.length;for(K&&le&&(_=O[--le]);le--;)_=L(_,O[le],le,O);return _}function ya(O,L){for(var _=-1,K=O==null?0:O.length;++_<K;)if(L(O[_],_,O))return!0;return!1}var R1=$a("length");function D1(O){return O.split("")}function O1(O){return O.match(B0)||[]}function au(O,L,_){var K;return _(O,function(le,De,at){if(L(le,De,at))return K=De,!1}),K}function Oo(O,L,_,K){for(var le=O.length,De=_+(K?1:-1);K?De--:++De<le;)if(L(O[De],De,O))return De;return-1}function Hr(O,L,_){return L===L?V1(O,L,_):Oo(O,lu,_)}function E1(O,L,_,K){for(var le=_-1,De=O.length;++le<De;)if(K(O[le],L))return le;return-1}function lu(O){return O!==O}function hu(O,L){var _=O==null?0:O.length;return _?Sa(O,L)/_:Se}function $a(O){return function(L){return L==null?t:L[O]}}function Ca(O){return function(L){return O==null?t:O[L]}}function cu(O,L,_,K,le){return le(O,function(De,at,ze){_=K?(K=!1,De):L(_,De,at,ze)}),_}function I1(O,L){var _=O.length;for(O.sort(L);_--;)O[_]=O[_].value;return O}function Sa(O,L){for(var _,K=-1,le=O.length;++K<le;){var De=L(O[K]);De!==t&&(_=_===t?De:_+De)}return _}function ka(O,L){for(var _=-1,K=Array(O);++_<O;)K[_]=L(_);return K}function _1(O,L){return Ge(L,function(_){return[_,O[_]]})}function uu(O){return O&&O.slice(0,gu(O)+1).replace(ua,"")}function Wt(O){return function(L){return O(L)}}function Aa(O,L){return Ge(L,function(_){return O[_]})}function Ei(O,L){return O.has(L)}function du(O,L){for(var _=-1,K=O.length;++_<K&&Hr(L,O[_],0)>-1;);return _}function fu(O,L){for(var _=O.length;_--&&Hr(L,O[_],0)>-1;);return _}function j1(O,L){for(var _=O.length,K=0;_--;)O[_]===L&&++K;return K}var L1=Ca(x1),P1=Ca(w1);function z1(O){return"\\"+$1[O]}function B1(O,L){return O==null?t:O[L]}function Ur(O){return g1.test(O)}function N1(O){return m1.test(O)}function F1(O){for(var L,_=[];!(L=O.next()).done;)_.push(L.value);return _}function Ma(O){var L=-1,_=Array(O.size);return O.forEach(function(K,le){_[++L]=[le,K]}),_}function pu(O,L){return function(_){return O(L(_))}}function tr(O,L){for(var _=-1,K=O.length,le=0,De=[];++_<K;){var at=O[_];(at===L||at===d)&&(O[_]=d,De[le++]=_)}return De}function Eo(O){var L=-1,_=Array(O.size);return O.forEach(function(K){_[++L]=K}),_}function W1(O){var L=-1,_=Array(O.size);return O.forEach(function(K){_[++L]=[K,K]}),_}function V1(O,L,_){for(var K=_-1,le=O.length;++K<le;)if(O[K]===L)return K;return-1}function H1(O,L,_){for(var K=_+1;K--;)if(O[K]===L)return K;return K}function qr(O){return Ur(O)?q1(O):R1(O)}function cn(O){return Ur(O)?K1(O):D1(O)}function gu(O){for(var L=O.length;L--&&j0.test(O.charAt(L)););return L}var U1=Ca(y1);function q1(O){for(var L=ma.lastIndex=0;ma.test(O);)++L;return L}function K1(O){return O.match(ma)||[]}function G1(O){return O.match(p1)||[]}var Y1=function O(L){L=L==null?gt:Kr.defaults(gt.Object(),L,Kr.pick(gt,v1));var _=L.Array,K=L.Date,le=L.Error,De=L.Function,at=L.Math,ze=L.Object,Ta=L.RegExp,X1=L.String,Qt=L.TypeError,Io=_.prototype,J1=De.prototype,Gr=ze.prototype,_o=L["__core-js_shared__"],jo=J1.toString,je=Gr.hasOwnProperty,Z1=0,mu=function(){var i=/[^.]+$/.exec(_o&&_o.keys&&_o.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),Lo=Gr.toString,Q1=jo.call(ze),ev=gt._,tv=Ta("^"+jo.call(je).replace(ca,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Po=Qc?L.Buffer:t,nr=L.Symbol,zo=L.Uint8Array,vu=Po?Po.allocUnsafe:t,Bo=pu(ze.getPrototypeOf,ze),bu=ze.create,xu=Gr.propertyIsEnumerable,No=Io.splice,wu=nr?nr.isConcatSpreadable:t,Ii=nr?nr.iterator:t,xr=nr?nr.toStringTag:t,Fo=function(){try{var i=Sr(ze,"defineProperty");return i({},"",{}),i}catch{}}(),nv=L.clearTimeout!==gt.clearTimeout&&L.clearTimeout,rv=K&&K.now!==gt.Date.now&&K.now,iv=L.setTimeout!==gt.setTimeout&&L.setTimeout,Wo=at.ceil,Vo=at.floor,Ra=ze.getOwnPropertySymbols,ov=Po?Po.isBuffer:t,yu=L.isFinite,sv=Io.join,av=pu(ze.keys,ze),lt=at.max,xt=at.min,lv=K.now,hv=L.parseInt,$u=at.random,cv=Io.reverse,Da=Sr(L,"DataView"),_i=Sr(L,"Map"),Oa=Sr(L,"Promise"),Yr=Sr(L,"Set"),ji=Sr(L,"WeakMap"),Li=Sr(ze,"create"),Ho=ji&&new ji,Xr={},uv=kr(Da),dv=kr(_i),fv=kr(Oa),pv=kr(Yr),gv=kr(ji),Uo=nr?nr.prototype:t,Pi=Uo?Uo.valueOf:t,Cu=Uo?Uo.toString:t;function $(i){if(Xe(i)&&!ce(i)&&!(i instanceof Ce)){if(i instanceof en)return i;if(je.call(i,"__wrapped__"))return Sd(i)}return new en(i)}var Jr=function(){function i(){}return function(a){if(!Ye(a))return{};if(bu)return bu(a);i.prototype=a;var c=new i;return i.prototype=t,c}}();function qo(){}function en(i,a){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=t}$.templateSettings={escape:R0,evaluate:D0,interpolate:Ec,variable:"",imports:{_:$}},$.prototype=qo.prototype,$.prototype.constructor=$,en.prototype=Jr(qo.prototype),en.prototype.constructor=en;function Ce(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ee,this.__views__=[]}function mv(){var i=new Ce(this.__wrapped__);return i.__actions__=_t(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=_t(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=_t(this.__views__),i}function vv(){if(this.__filtered__){var i=new Ce(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function bv(){var i=this.__wrapped__.value(),a=this.__dir__,c=ce(i),p=a<0,b=c?i.length:0,C=Db(0,b,this.__views__),M=C.start,R=C.end,E=R-M,P=p?R:M-1,z=this.__iteratees__,N=z.length,V=0,Y=xt(E,this.__takeCount__);if(!c||!p&&b==E&&Y==E)return Ku(i,this.__actions__);var ee=[];e:for(;E--&&V<Y;){P+=a;for(var ve=-1,te=i[P];++ve<N;){var ye=z[ve],ke=ye.iteratee,Ut=ye.type,Rt=ke(te);if(Ut==Te)te=Rt;else if(!Rt){if(Ut==ue)continue e;break e}}ee[V++]=te}return ee}Ce.prototype=Jr(qo.prototype),Ce.prototype.constructor=Ce;function wr(i){var a=-1,c=i==null?0:i.length;for(this.clear();++a<c;){var p=i[a];this.set(p[0],p[1])}}function xv(){this.__data__=Li?Li(null):{},this.size=0}function wv(i){var a=this.has(i)&&delete this.__data__[i];return this.size-=a?1:0,a}function yv(i){var a=this.__data__;if(Li){var c=a[i];return c===u?t:c}return je.call(a,i)?a[i]:t}function $v(i){var a=this.__data__;return Li?a[i]!==t:je.call(a,i)}function Cv(i,a){var c=this.__data__;return this.size+=this.has(i)?0:1,c[i]=Li&&a===t?u:a,this}wr.prototype.clear=xv,wr.prototype.delete=wv,wr.prototype.get=yv,wr.prototype.has=$v,wr.prototype.set=Cv;function Dn(i){var a=-1,c=i==null?0:i.length;for(this.clear();++a<c;){var p=i[a];this.set(p[0],p[1])}}function Sv(){this.__data__=[],this.size=0}function kv(i){var a=this.__data__,c=Ko(a,i);if(c<0)return!1;var p=a.length-1;return c==p?a.pop():No.call(a,c,1),--this.size,!0}function Av(i){var a=this.__data__,c=Ko(a,i);return c<0?t:a[c][1]}function Mv(i){return Ko(this.__data__,i)>-1}function Tv(i,a){var c=this.__data__,p=Ko(c,i);return p<0?(++this.size,c.push([i,a])):c[p][1]=a,this}Dn.prototype.clear=Sv,Dn.prototype.delete=kv,Dn.prototype.get=Av,Dn.prototype.has=Mv,Dn.prototype.set=Tv;function On(i){var a=-1,c=i==null?0:i.length;for(this.clear();++a<c;){var p=i[a];this.set(p[0],p[1])}}function Rv(){this.size=0,this.__data__={hash:new wr,map:new(_i||Dn),string:new wr}}function Dv(i){var a=os(this,i).delete(i);return this.size-=a?1:0,a}function Ov(i){return os(this,i).get(i)}function Ev(i){return os(this,i).has(i)}function Iv(i,a){var c=os(this,i),p=c.size;return c.set(i,a),this.size+=c.size==p?0:1,this}On.prototype.clear=Rv,On.prototype.delete=Dv,On.prototype.get=Ov,On.prototype.has=Ev,On.prototype.set=Iv;function yr(i){var a=-1,c=i==null?0:i.length;for(this.__data__=new On;++a<c;)this.add(i[a])}function _v(i){return this.__data__.set(i,u),this}function jv(i){return this.__data__.has(i)}yr.prototype.add=yr.prototype.push=_v,yr.prototype.has=jv;function un(i){var a=this.__data__=new Dn(i);this.size=a.size}function Lv(){this.__data__=new Dn,this.size=0}function Pv(i){var a=this.__data__,c=a.delete(i);return this.size=a.size,c}function zv(i){return this.__data__.get(i)}function Bv(i){return this.__data__.has(i)}function Nv(i,a){var c=this.__data__;if(c instanceof Dn){var p=c.__data__;if(!_i||p.length<o-1)return p.push([i,a]),this.size=++c.size,this;c=this.__data__=new On(p)}return c.set(i,a),this.size=c.size,this}un.prototype.clear=Lv,un.prototype.delete=Pv,un.prototype.get=zv,un.prototype.has=Bv,un.prototype.set=Nv;function Su(i,a){var c=ce(i),p=!c&&Ar(i),b=!c&&!p&&ar(i),C=!c&&!p&&!b&&ti(i),M=c||p||b||C,R=M?ka(i.length,X1):[],E=R.length;for(var P in i)(a||je.call(i,P))&&!(M&&(P=="length"||b&&(P=="offset"||P=="parent")||C&&(P=="buffer"||P=="byteLength"||P=="byteOffset")||jn(P,E)))&&R.push(P);return R}function ku(i){var a=i.length;return a?i[Wa(0,a-1)]:t}function Fv(i,a){return ss(_t(i),$r(a,0,i.length))}function Wv(i){return ss(_t(i))}function Ea(i,a,c){(c!==t&&!dn(i[a],c)||c===t&&!(a in i))&&En(i,a,c)}function zi(i,a,c){var p=i[a];(!(je.call(i,a)&&dn(p,c))||c===t&&!(a in i))&&En(i,a,c)}function Ko(i,a){for(var c=i.length;c--;)if(dn(i[c][0],a))return c;return-1}function Vv(i,a,c,p){return rr(i,function(b,C,M){a(p,b,c(b),M)}),p}function Au(i,a){return i&&yn(a,ut(a),i)}function Hv(i,a){return i&&yn(a,Lt(a),i)}function En(i,a,c){a=="__proto__"&&Fo?Fo(i,a,{configurable:!0,enumerable:!0,value:c,writable:!0}):i[a]=c}function Ia(i,a){for(var c=-1,p=a.length,b=_(p),C=i==null;++c<p;)b[c]=C?t:fl(i,a[c]);return b}function $r(i,a,c){return i===i&&(c!==t&&(i=i<=c?i:c),a!==t&&(i=i>=a?i:a)),i}function tn(i,a,c,p,b,C){var M,R=a&m,E=a&v,P=a&x;if(c&&(M=b?c(i,p,b,C):c(i)),M!==t)return M;if(!Ye(i))return i;var z=ce(i);if(z){if(M=Eb(i),!R)return _t(i,M)}else{var N=wt(i),V=N==Ae||N==ct;if(ar(i))return Xu(i,R);if(N==ft||N==Pe||V&&!b){if(M=E||V?{}:gd(i),!R)return E?yb(i,Hv(M,i)):wb(i,Au(M,i))}else{if(!We[N])return b?i:{};M=Ib(i,N,R)}}C||(C=new un);var Y=C.get(i);if(Y)return Y;C.set(i,M),Hd(i)?i.forEach(function(te){M.add(tn(te,a,c,te,i,C))}):Wd(i)&&i.forEach(function(te,ye){M.set(ye,tn(te,a,c,ye,i,C))});var ee=P?E?Qa:Za:E?Lt:ut,ve=z?t:ee(i);return Zt(ve||i,function(te,ye){ve&&(ye=te,te=i[ye]),zi(M,ye,tn(te,a,c,ye,i,C))}),M}function Uv(i){var a=ut(i);return function(c){return Mu(c,i,a)}}function Mu(i,a,c){var p=c.length;if(i==null)return!p;for(i=ze(i);p--;){var b=c[p],C=a[b],M=i[b];if(M===t&&!(b in i)||!C(M))return!1}return!0}function Tu(i,a,c){if(typeof i!="function")throw new Qt(l);return Ui(function(){i.apply(t,c)},a)}function Bi(i,a,c,p){var b=-1,C=Do,M=!0,R=i.length,E=[],P=a.length;if(!R)return E;c&&(a=Ge(a,Wt(c))),p?(C=xa,M=!1):a.length>=o&&(C=Ei,M=!1,a=new yr(a));e:for(;++b<R;){var z=i[b],N=c==null?z:c(z);if(z=p||z!==0?z:0,M&&N===N){for(var V=P;V--;)if(a[V]===N)continue e;E.push(z)}else C(a,N,p)||E.push(z)}return E}var rr=td(wn),Ru=td(ja,!0);function qv(i,a){var c=!0;return rr(i,function(p,b,C){return c=!!a(p,b,C),c}),c}function Go(i,a,c){for(var p=-1,b=i.length;++p<b;){var C=i[p],M=a(C);if(M!=null&&(R===t?M===M&&!Ht(M):c(M,R)))var R=M,E=C}return E}function Kv(i,a,c,p){var b=i.length;for(c=ge(c),c<0&&(c=-c>b?0:b+c),p=p===t||p>b?b:ge(p),p<0&&(p+=b),p=c>p?0:qd(p);c<p;)i[c++]=a;return i}function Du(i,a){var c=[];return rr(i,function(p,b,C){a(p,b,C)&&c.push(p)}),c}function mt(i,a,c,p,b){var C=-1,M=i.length;for(c||(c=jb),b||(b=[]);++C<M;){var R=i[C];a>0&&c(R)?a>1?mt(R,a-1,c,p,b):er(b,R):p||(b[b.length]=R)}return b}var _a=nd(),Ou=nd(!0);function wn(i,a){return i&&_a(i,a,ut)}function ja(i,a){return i&&Ou(i,a,ut)}function Yo(i,a){return Qn(a,function(c){return Ln(i[c])})}function Cr(i,a){a=or(a,i);for(var c=0,p=a.length;i!=null&&c<p;)i=i[$n(a[c++])];return c&&c==p?i:t}function Eu(i,a,c){var p=a(i);return ce(i)?p:er(p,c(i))}function Mt(i){return i==null?i===t?Fr:At:xr&&xr in ze(i)?Rb(i):Wb(i)}function La(i,a){return i>a}function Gv(i,a){return i!=null&&je.call(i,a)}function Yv(i,a){return i!=null&&a in ze(i)}function Xv(i,a,c){return i>=xt(a,c)&&i<lt(a,c)}function Pa(i,a,c){for(var p=c?xa:Do,b=i[0].length,C=i.length,M=C,R=_(C),E=1/0,P=[];M--;){var z=i[M];M&&a&&(z=Ge(z,Wt(a))),E=xt(z.length,E),R[M]=!c&&(a||b>=120&&z.length>=120)?new yr(M&&z):t}z=i[0];var N=-1,V=R[0];e:for(;++N<b&&P.length<E;){var Y=z[N],ee=a?a(Y):Y;if(Y=c||Y!==0?Y:0,!(V?Ei(V,ee):p(P,ee,c))){for(M=C;--M;){var ve=R[M];if(!(ve?Ei(ve,ee):p(i[M],ee,c)))continue e}V&&V.push(ee),P.push(Y)}}return P}function Jv(i,a,c,p){return wn(i,function(b,C,M){a(p,c(b),C,M)}),p}function Ni(i,a,c){a=or(a,i),i=xd(i,a);var p=i==null?i:i[$n(rn(a))];return p==null?t:Ft(p,i,c)}function Iu(i){return Xe(i)&&Mt(i)==Pe}function Zv(i){return Xe(i)&&Mt(i)==mr}function Qv(i){return Xe(i)&&Mt(i)==pe}function Fi(i,a,c,p,b){return i===a?!0:i==null||a==null||!Xe(i)&&!Xe(a)?i!==i&&a!==a:eb(i,a,c,p,Fi,b)}function eb(i,a,c,p,b,C){var M=ce(i),R=ce(a),E=M?st:wt(i),P=R?st:wt(a);E=E==Pe?ft:E,P=P==Pe?ft:P;var z=E==ft,N=P==ft,V=E==P;if(V&&ar(i)){if(!ar(a))return!1;M=!0,z=!1}if(V&&!z)return C||(C=new un),M||ti(i)?dd(i,a,c,p,b,C):Mb(i,a,E,c,p,b,C);if(!(c&w)){var Y=z&&je.call(i,"__wrapped__"),ee=N&&je.call(a,"__wrapped__");if(Y||ee){var ve=Y?i.value():i,te=ee?a.value():a;return C||(C=new un),b(ve,te,c,p,C)}}return V?(C||(C=new un),Tb(i,a,c,p,b,C)):!1}function tb(i){return Xe(i)&&wt(i)==Fe}function za(i,a,c,p){var b=c.length,C=b,M=!p;if(i==null)return!C;for(i=ze(i);b--;){var R=c[b];if(M&&R[2]?R[1]!==i[R[0]]:!(R[0]in i))return!1}for(;++b<C;){R=c[b];var E=R[0],P=i[E],z=R[1];if(M&&R[2]){if(P===t&&!(E in i))return!1}else{var N=new un;if(p)var V=p(P,z,E,i,a,N);if(!(V===t?Fi(z,P,w|S,p,N):V))return!1}}return!0}function _u(i){if(!Ye(i)||Pb(i))return!1;var a=Ln(i)?tv:U0;return a.test(kr(i))}function nb(i){return Xe(i)&&Mt(i)==Yn}function rb(i){return Xe(i)&&wt(i)==Nt}function ib(i){return Xe(i)&&ds(i.length)&&!!Ve[Mt(i)]}function ju(i){return typeof i=="function"?i:i==null?Pt:typeof i=="object"?ce(i)?zu(i[0],i[1]):Pu(i):rf(i)}function Ba(i){if(!Hi(i))return av(i);var a=[];for(var c in ze(i))je.call(i,c)&&c!="constructor"&&a.push(c);return a}function ob(i){if(!Ye(i))return Fb(i);var a=Hi(i),c=[];for(var p in i)p=="constructor"&&(a||!je.call(i,p))||c.push(p);return c}function Na(i,a){return i<a}function Lu(i,a){var c=-1,p=jt(i)?_(i.length):[];return rr(i,function(b,C,M){p[++c]=a(b,C,M)}),p}function Pu(i){var a=tl(i);return a.length==1&&a[0][2]?vd(a[0][0],a[0][1]):function(c){return c===i||za(c,i,a)}}function zu(i,a){return rl(i)&&md(a)?vd($n(i),a):function(c){var p=fl(c,i);return p===t&&p===a?pl(c,i):Fi(a,p,w|S)}}function Xo(i,a,c,p,b){i!==a&&_a(a,function(C,M){if(b||(b=new un),Ye(C))sb(i,a,M,c,Xo,p,b);else{var R=p?p(ol(i,M),C,M+"",i,a,b):t;R===t&&(R=C),Ea(i,M,R)}},Lt)}function sb(i,a,c,p,b,C,M){var R=ol(i,c),E=ol(a,c),P=M.get(E);if(P){Ea(i,c,P);return}var z=C?C(R,E,c+"",i,a,M):t,N=z===t;if(N){var V=ce(E),Y=!V&&ar(E),ee=!V&&!Y&&ti(E);z=E,V||Y||ee?ce(R)?z=R:Qe(R)?z=_t(R):Y?(N=!1,z=Xu(E,!0)):ee?(N=!1,z=Ju(E,!0)):z=[]:qi(E)||Ar(E)?(z=R,Ar(R)?z=Kd(R):(!Ye(R)||Ln(R))&&(z=gd(E))):N=!1}N&&(M.set(E,z),b(z,E,p,C,M),M.delete(E)),Ea(i,c,z)}function Bu(i,a){var c=i.length;if(c)return a+=a<0?c:0,jn(a,c)?i[a]:t}function Nu(i,a,c){a.length?a=Ge(a,function(C){return ce(C)?function(M){return Cr(M,C.length===1?C[0]:C)}:C}):a=[Pt];var p=-1;a=Ge(a,Wt(Q()));var b=Lu(i,function(C,M,R){var E=Ge(a,function(P){return P(C)});return{criteria:E,index:++p,value:C}});return I1(b,function(C,M){return xb(C,M,c)})}function ab(i,a){return Fu(i,a,function(c,p){return pl(i,p)})}function Fu(i,a,c){for(var p=-1,b=a.length,C={};++p<b;){var M=a[p],R=Cr(i,M);c(R,M)&&Wi(C,or(M,i),R)}return C}function lb(i){return function(a){return Cr(a,i)}}function Fa(i,a,c,p){var b=p?E1:Hr,C=-1,M=a.length,R=i;for(i===a&&(a=_t(a)),c&&(R=Ge(i,Wt(c)));++C<M;)for(var E=0,P=a[C],z=c?c(P):P;(E=b(R,z,E,p))>-1;)R!==i&&No.call(R,E,1),No.call(i,E,1);return i}function Wu(i,a){for(var c=i?a.length:0,p=c-1;c--;){var b=a[c];if(c==p||b!==C){var C=b;jn(b)?No.call(i,b,1):Ua(i,b)}}return i}function Wa(i,a){return i+Vo($u()*(a-i+1))}function hb(i,a,c,p){for(var b=-1,C=lt(Wo((a-i)/(c||1)),0),M=_(C);C--;)M[p?C:++b]=i,i+=c;return M}function Va(i,a){var c="";if(!i||a<1||a>se)return c;do a%2&&(c+=i),a=Vo(a/2),a&&(i+=i);while(a);return c}function be(i,a){return sl(bd(i,a,Pt),i+"")}function cb(i){return ku(ni(i))}function ub(i,a){var c=ni(i);return ss(c,$r(a,0,c.length))}function Wi(i,a,c,p){if(!Ye(i))return i;a=or(a,i);for(var b=-1,C=a.length,M=C-1,R=i;R!=null&&++b<C;){var E=$n(a[b]),P=c;if(E==="__proto__"||E==="constructor"||E==="prototype")return i;if(b!=M){var z=R[E];P=p?p(z,E,R):t,P===t&&(P=Ye(z)?z:jn(a[b+1])?[]:{})}zi(R,E,P),R=R[E]}return i}var Vu=Ho?function(i,a){return Ho.set(i,a),i}:Pt,db=Fo?function(i,a){return Fo(i,"toString",{configurable:!0,enumerable:!1,value:ml(a),writable:!0})}:Pt;function fb(i){return ss(ni(i))}function nn(i,a,c){var p=-1,b=i.length;a<0&&(a=-a>b?0:b+a),c=c>b?b:c,c<0&&(c+=b),b=a>c?0:c-a>>>0,a>>>=0;for(var C=_(b);++p<b;)C[p]=i[p+a];return C}function pb(i,a){var c;return rr(i,function(p,b,C){return c=a(p,b,C),!c}),!!c}function Jo(i,a,c){var p=0,b=i==null?p:i.length;if(typeof a=="number"&&a===a&&b<=Je){for(;p<b;){var C=p+b>>>1,M=i[C];M!==null&&!Ht(M)&&(c?M<=a:M<a)?p=C+1:b=C}return b}return Ha(i,a,Pt,c)}function Ha(i,a,c,p){var b=0,C=i==null?0:i.length;if(C===0)return 0;a=c(a);for(var M=a!==a,R=a===null,E=Ht(a),P=a===t;b<C;){var z=Vo((b+C)/2),N=c(i[z]),V=N!==t,Y=N===null,ee=N===N,ve=Ht(N);if(M)var te=p||ee;else P?te=ee&&(p||V):R?te=ee&&V&&(p||!Y):E?te=ee&&V&&!Y&&(p||!ve):Y||ve?te=!1:te=p?N<=a:N<a;te?b=z+1:C=z}return xt(C,Ie)}function Hu(i,a){for(var c=-1,p=i.length,b=0,C=[];++c<p;){var M=i[c],R=a?a(M):M;if(!c||!dn(R,E)){var E=R;C[b++]=M===0?0:M}}return C}function Uu(i){return typeof i=="number"?i:Ht(i)?Se:+i}function Vt(i){if(typeof i=="string")return i;if(ce(i))return Ge(i,Vt)+"";if(Ht(i))return Cu?Cu.call(i):"";var a=i+"";return a=="0"&&1/i==-oe?"-0":a}function ir(i,a,c){var p=-1,b=Do,C=i.length,M=!0,R=[],E=R;if(c)M=!1,b=xa;else if(C>=o){var P=a?null:kb(i);if(P)return Eo(P);M=!1,b=Ei,E=new yr}else E=a?[]:R;e:for(;++p<C;){var z=i[p],N=a?a(z):z;if(z=c||z!==0?z:0,M&&N===N){for(var V=E.length;V--;)if(E[V]===N)continue e;a&&E.push(N),R.push(z)}else b(E,N,c)||(E!==R&&E.push(N),R.push(z))}return R}function Ua(i,a){return a=or(a,i),i=xd(i,a),i==null||delete i[$n(rn(a))]}function qu(i,a,c,p){return Wi(i,a,c(Cr(i,a)),p)}function Zo(i,a,c,p){for(var b=i.length,C=p?b:-1;(p?C--:++C<b)&&a(i[C],C,i););return c?nn(i,p?0:C,p?C+1:b):nn(i,p?C+1:0,p?b:C)}function Ku(i,a){var c=i;return c instanceof Ce&&(c=c.value()),wa(a,function(p,b){return b.func.apply(b.thisArg,er([p],b.args))},c)}function qa(i,a,c){var p=i.length;if(p<2)return p?ir(i[0]):[];for(var b=-1,C=_(p);++b<p;)for(var M=i[b],R=-1;++R<p;)R!=b&&(C[b]=Bi(C[b]||M,i[R],a,c));return ir(mt(C,1),a,c)}function Gu(i,a,c){for(var p=-1,b=i.length,C=a.length,M={};++p<b;){var R=p<C?a[p]:t;c(M,i[p],R)}return M}function Ka(i){return Qe(i)?i:[]}function Ga(i){return typeof i=="function"?i:Pt}function or(i,a){return ce(i)?i:rl(i,a)?[i]:Cd(_e(i))}var gb=be;function sr(i,a,c){var p=i.length;return c=c===t?p:c,!a&&c>=p?i:nn(i,a,c)}var Yu=nv||function(i){return gt.clearTimeout(i)};function Xu(i,a){if(a)return i.slice();var c=i.length,p=vu?vu(c):new i.constructor(c);return i.copy(p),p}function Ya(i){var a=new i.constructor(i.byteLength);return new zo(a).set(new zo(i)),a}function mb(i,a){var c=a?Ya(i.buffer):i.buffer;return new i.constructor(c,i.byteOffset,i.byteLength)}function vb(i){var a=new i.constructor(i.source,Ic.exec(i));return a.lastIndex=i.lastIndex,a}function bb(i){return Pi?ze(Pi.call(i)):{}}function Ju(i,a){var c=a?Ya(i.buffer):i.buffer;return new i.constructor(c,i.byteOffset,i.length)}function Zu(i,a){if(i!==a){var c=i!==t,p=i===null,b=i===i,C=Ht(i),M=a!==t,R=a===null,E=a===a,P=Ht(a);if(!R&&!P&&!C&&i>a||C&&M&&E&&!R&&!P||p&&M&&E||!c&&E||!b)return 1;if(!p&&!C&&!P&&i<a||P&&c&&b&&!p&&!C||R&&c&&b||!M&&b||!E)return-1}return 0}function xb(i,a,c){for(var p=-1,b=i.criteria,C=a.criteria,M=b.length,R=c.length;++p<M;){var E=Zu(b[p],C[p]);if(E){if(p>=R)return E;var P=c[p];return E*(P=="desc"?-1:1)}}return i.index-a.index}function Qu(i,a,c,p){for(var b=-1,C=i.length,M=c.length,R=-1,E=a.length,P=lt(C-M,0),z=_(E+P),N=!p;++R<E;)z[R]=a[R];for(;++b<M;)(N||b<C)&&(z[c[b]]=i[b]);for(;P--;)z[R++]=i[b++];return z}function ed(i,a,c,p){for(var b=-1,C=i.length,M=-1,R=c.length,E=-1,P=a.length,z=lt(C-R,0),N=_(z+P),V=!p;++b<z;)N[b]=i[b];for(var Y=b;++E<P;)N[Y+E]=a[E];for(;++M<R;)(V||b<C)&&(N[Y+c[M]]=i[b++]);return N}function _t(i,a){var c=-1,p=i.length;for(a||(a=_(p));++c<p;)a[c]=i[c];return a}function yn(i,a,c,p){var b=!c;c||(c={});for(var C=-1,M=a.length;++C<M;){var R=a[C],E=p?p(c[R],i[R],R,c,i):t;E===t&&(E=i[R]),b?En(c,R,E):zi(c,R,E)}return c}function wb(i,a){return yn(i,nl(i),a)}function yb(i,a){return yn(i,fd(i),a)}function Qo(i,a){return function(c,p){var b=ce(c)?A1:Vv,C=a?a():{};return b(c,i,Q(p,2),C)}}function Zr(i){return be(function(a,c){var p=-1,b=c.length,C=b>1?c[b-1]:t,M=b>2?c[2]:t;for(C=i.length>3&&typeof C=="function"?(b--,C):t,M&&Tt(c[0],c[1],M)&&(C=b<3?t:C,b=1),a=ze(a);++p<b;){var R=c[p];R&&i(a,R,p,C)}return a})}function td(i,a){return function(c,p){if(c==null)return c;if(!jt(c))return i(c,p);for(var b=c.length,C=a?b:-1,M=ze(c);(a?C--:++C<b)&&p(M[C],C,M)!==!1;);return c}}function nd(i){return function(a,c,p){for(var b=-1,C=ze(a),M=p(a),R=M.length;R--;){var E=M[i?R:++b];if(c(C[E],E,C)===!1)break}return a}}function $b(i,a,c){var p=a&k,b=Vi(i);function C(){var M=this&&this!==gt&&this instanceof C?b:i;return M.apply(p?c:this,arguments)}return C}function rd(i){return function(a){a=_e(a);var c=Ur(a)?cn(a):t,p=c?c[0]:a.charAt(0),b=c?sr(c,1).join(""):a.slice(1);return p[i]()+b}}function Qr(i){return function(a){return wa(tf(ef(a).replace(d1,"")),i,"")}}function Vi(i){return function(){var a=arguments;switch(a.length){case 0:return new i;case 1:return new i(a[0]);case 2:return new i(a[0],a[1]);case 3:return new i(a[0],a[1],a[2]);case 4:return new i(a[0],a[1],a[2],a[3]);case 5:return new i(a[0],a[1],a[2],a[3],a[4]);case 6:return new i(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new i(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var c=Jr(i.prototype),p=i.apply(c,a);return Ye(p)?p:c}}function Cb(i,a,c){var p=Vi(i);function b(){for(var C=arguments.length,M=_(C),R=C,E=ei(b);R--;)M[R]=arguments[R];var P=C<3&&M[0]!==E&&M[C-1]!==E?[]:tr(M,E);if(C-=P.length,C<c)return ld(i,a,es,b.placeholder,t,M,P,t,t,c-C);var z=this&&this!==gt&&this instanceof b?p:i;return Ft(z,this,M)}return b}function id(i){return function(a,c,p){var b=ze(a);if(!jt(a)){var C=Q(c,3);a=ut(a),c=function(R){return C(b[R],R,b)}}var M=i(a,c,p);return M>-1?b[C?a[M]:M]:t}}function od(i){return _n(function(a){var c=a.length,p=c,b=en.prototype.thru;for(i&&a.reverse();p--;){var C=a[p];if(typeof C!="function")throw new Qt(l);if(b&&!M&&is(C)=="wrapper")var M=new en([],!0)}for(p=M?p:c;++p<c;){C=a[p];var R=is(C),E=R=="wrapper"?el(C):t;E&&il(E[0])&&E[1]==(W|D|F|re)&&!E[4].length&&E[9]==1?M=M[is(E[0])].apply(M,E[3]):M=C.length==1&&il(C)?M[R]():M.thru(C)}return function(){var P=arguments,z=P[0];if(M&&P.length==1&&ce(z))return M.plant(z).value();for(var N=0,V=c?a[N].apply(this,P):z;++N<c;)V=a[N].call(this,V);return V}})}function es(i,a,c,p,b,C,M,R,E,P){var z=a&W,N=a&k,V=a&A,Y=a&(D|j),ee=a&ae,ve=V?t:Vi(i);function te(){for(var ye=arguments.length,ke=_(ye),Ut=ye;Ut--;)ke[Ut]=arguments[Ut];if(Y)var Rt=ei(te),qt=j1(ke,Rt);if(p&&(ke=Qu(ke,p,b,Y)),C&&(ke=ed(ke,C,M,Y)),ye-=qt,Y&&ye<P){var et=tr(ke,Rt);return ld(i,a,es,te.placeholder,c,ke,et,R,E,P-ye)}var fn=N?c:this,zn=V?fn[i]:i;return ye=ke.length,R?ke=Vb(ke,R):ee&&ye>1&&ke.reverse(),z&&E<ye&&(ke.length=E),this&&this!==gt&&this instanceof te&&(zn=ve||Vi(zn)),zn.apply(fn,ke)}return te}function sd(i,a){return function(c,p){return Jv(c,i,a(p),{})}}function ts(i,a){return function(c,p){var b;if(c===t&&p===t)return a;if(c!==t&&(b=c),p!==t){if(b===t)return p;typeof c=="string"||typeof p=="string"?(c=Vt(c),p=Vt(p)):(c=Uu(c),p=Uu(p)),b=i(c,p)}return b}}function Xa(i){return _n(function(a){return a=Ge(a,Wt(Q())),be(function(c){var p=this;return i(a,function(b){return Ft(b,p,c)})})})}function ns(i,a){a=a===t?" ":Vt(a);var c=a.length;if(c<2)return c?Va(a,i):a;var p=Va(a,Wo(i/qr(a)));return Ur(a)?sr(cn(p),0,i).join(""):p.slice(0,i)}function Sb(i,a,c,p){var b=a&k,C=Vi(i);function M(){for(var R=-1,E=arguments.length,P=-1,z=p.length,N=_(z+E),V=this&&this!==gt&&this instanceof M?C:i;++P<z;)N[P]=p[P];for(;E--;)N[P++]=arguments[++R];return Ft(V,b?c:this,N)}return M}function ad(i){return function(a,c,p){return p&&typeof p!="number"&&Tt(a,c,p)&&(c=p=t),a=Pn(a),c===t?(c=a,a=0):c=Pn(c),p=p===t?a<c?1:-1:Pn(p),hb(a,c,p,i)}}function rs(i){return function(a,c){return typeof a=="string"&&typeof c=="string"||(a=on(a),c=on(c)),i(a,c)}}function ld(i,a,c,p,b,C,M,R,E,P){var z=a&D,N=z?M:t,V=z?t:M,Y=z?C:t,ee=z?t:C;a|=z?F:B,a&=~(z?B:F),a&T||(a&=-4);var ve=[i,a,b,Y,N,ee,V,R,E,P],te=c.apply(t,ve);return il(i)&&wd(te,ve),te.placeholder=p,yd(te,i,a)}function Ja(i){var a=at[i];return function(c,p){if(c=on(c),p=p==null?0:xt(ge(p),292),p&&yu(c)){var b=(_e(c)+"e").split("e"),C=a(b[0]+"e"+(+b[1]+p));return b=(_e(C)+"e").split("e"),+(b[0]+"e"+(+b[1]-p))}return a(c)}}var kb=Yr&&1/Eo(new Yr([,-0]))[1]==oe?function(i){return new Yr(i)}:xl;function hd(i){return function(a){var c=wt(a);return c==Fe?Ma(a):c==Nt?W1(a):_1(a,i(a))}}function In(i,a,c,p,b,C,M,R){var E=a&A;if(!E&&typeof i!="function")throw new Qt(l);var P=p?p.length:0;if(P||(a&=-97,p=b=t),M=M===t?M:lt(ge(M),0),R=R===t?R:ge(R),P-=b?b.length:0,a&B){var z=p,N=b;p=b=t}var V=E?t:el(i),Y=[i,a,c,p,b,z,N,C,M,R];if(V&&Nb(Y,V),i=Y[0],a=Y[1],c=Y[2],p=Y[3],b=Y[4],R=Y[9]=Y[9]===t?E?0:i.length:lt(Y[9]-P,0),!R&&a&(D|j)&&(a&=-25),!a||a==k)var ee=$b(i,a,c);else a==D||a==j?ee=Cb(i,a,R):(a==F||a==(k|F))&&!b.length?ee=Sb(i,a,c,p):ee=es.apply(t,Y);var ve=V?Vu:wd;return yd(ve(ee,Y),i,a)}function cd(i,a,c,p){return i===t||dn(i,Gr[c])&&!je.call(p,c)?a:i}function ud(i,a,c,p,b,C){return Ye(i)&&Ye(a)&&(C.set(a,i),Xo(i,a,t,ud,C),C.delete(a)),i}function Ab(i){return qi(i)?t:i}function dd(i,a,c,p,b,C){var M=c&w,R=i.length,E=a.length;if(R!=E&&!(M&&E>R))return!1;var P=C.get(i),z=C.get(a);if(P&&z)return P==a&&z==i;var N=-1,V=!0,Y=c&S?new yr:t;for(C.set(i,a),C.set(a,i);++N<R;){var ee=i[N],ve=a[N];if(p)var te=M?p(ve,ee,N,a,i,C):p(ee,ve,N,i,a,C);if(te!==t){if(te)continue;V=!1;break}if(Y){if(!ya(a,function(ye,ke){if(!Ei(Y,ke)&&(ee===ye||b(ee,ye,c,p,C)))return Y.push(ke)})){V=!1;break}}else if(!(ee===ve||b(ee,ve,c,p,C))){V=!1;break}}return C.delete(i),C.delete(a),V}function Mb(i,a,c,p,b,C,M){switch(c){case Zn:if(i.byteLength!=a.byteLength||i.byteOffset!=a.byteOffset)return!1;i=i.buffer,a=a.buffer;case mr:return!(i.byteLength!=a.byteLength||!C(new zo(i),new zo(a)));case de:case pe:case fe:return dn(+i,+a);case xe:return i.name==a.name&&i.message==a.message;case Yn:case Xn:return i==a+"";case Fe:var R=Ma;case Nt:var E=p&w;if(R||(R=Eo),i.size!=a.size&&!E)return!1;var P=M.get(i);if(P)return P==a;p|=S,M.set(i,a);var z=dd(R(i),R(a),p,b,C,M);return M.delete(i),z;case Jn:if(Pi)return Pi.call(i)==Pi.call(a)}return!1}function Tb(i,a,c,p,b,C){var M=c&w,R=Za(i),E=R.length,P=Za(a),z=P.length;if(E!=z&&!M)return!1;for(var N=E;N--;){var V=R[N];if(!(M?V in a:je.call(a,V)))return!1}var Y=C.get(i),ee=C.get(a);if(Y&&ee)return Y==a&&ee==i;var ve=!0;C.set(i,a),C.set(a,i);for(var te=M;++N<E;){V=R[N];var ye=i[V],ke=a[V];if(p)var Ut=M?p(ke,ye,V,a,i,C):p(ye,ke,V,i,a,C);if(!(Ut===t?ye===ke||b(ye,ke,c,p,C):Ut)){ve=!1;break}te||(te=V=="constructor")}if(ve&&!te){var Rt=i.constructor,qt=a.constructor;Rt!=qt&&"constructor"in i&&"constructor"in a&&!(typeof Rt=="function"&&Rt instanceof Rt&&typeof qt=="function"&&qt instanceof qt)&&(ve=!1)}return C.delete(i),C.delete(a),ve}function _n(i){return sl(bd(i,t,Md),i+"")}function Za(i){return Eu(i,ut,nl)}function Qa(i){return Eu(i,Lt,fd)}var el=Ho?function(i){return Ho.get(i)}:xl;function is(i){for(var a=i.name+"",c=Xr[a],p=je.call(Xr,a)?c.length:0;p--;){var b=c[p],C=b.func;if(C==null||C==i)return b.name}return a}function ei(i){var a=je.call($,"placeholder")?$:i;return a.placeholder}function Q(){var i=$.iteratee||vl;return i=i===vl?ju:i,arguments.length?i(arguments[0],arguments[1]):i}function os(i,a){var c=i.__data__;return Lb(a)?c[typeof a=="string"?"string":"hash"]:c.map}function tl(i){for(var a=ut(i),c=a.length;c--;){var p=a[c],b=i[p];a[c]=[p,b,md(b)]}return a}function Sr(i,a){var c=B1(i,a);return _u(c)?c:t}function Rb(i){var a=je.call(i,xr),c=i[xr];try{i[xr]=t;var p=!0}catch{}var b=Lo.call(i);return p&&(a?i[xr]=c:delete i[xr]),b}var nl=Ra?function(i){return i==null?[]:(i=ze(i),Qn(Ra(i),function(a){return xu.call(i,a)}))}:wl,fd=Ra?function(i){for(var a=[];i;)er(a,nl(i)),i=Bo(i);return a}:wl,wt=Mt;(Da&&wt(new Da(new ArrayBuffer(1)))!=Zn||_i&&wt(new _i)!=Fe||Oa&&wt(Oa.resolve())!=Ao||Yr&&wt(new Yr)!=Nt||ji&&wt(new ji)!=gr)&&(wt=function(i){var a=Mt(i),c=a==ft?i.constructor:t,p=c?kr(c):"";if(p)switch(p){case uv:return Zn;case dv:return Fe;case fv:return Ao;case pv:return Nt;case gv:return gr}return a});function Db(i,a,c){for(var p=-1,b=c.length;++p<b;){var C=c[p],M=C.size;switch(C.type){case"drop":i+=M;break;case"dropRight":a-=M;break;case"take":a=xt(a,i+M);break;case"takeRight":i=lt(i,a-M);break}}return{start:i,end:a}}function Ob(i){var a=i.match(P0);return a?a[1].split(z0):[]}function pd(i,a,c){a=or(a,i);for(var p=-1,b=a.length,C=!1;++p<b;){var M=$n(a[p]);if(!(C=i!=null&&c(i,M)))break;i=i[M]}return C||++p!=b?C:(b=i==null?0:i.length,!!b&&ds(b)&&jn(M,b)&&(ce(i)||Ar(i)))}function Eb(i){var a=i.length,c=new i.constructor(a);return a&&typeof i[0]=="string"&&je.call(i,"index")&&(c.index=i.index,c.input=i.input),c}function gd(i){return typeof i.constructor=="function"&&!Hi(i)?Jr(Bo(i)):{}}function Ib(i,a,c){var p=i.constructor;switch(a){case mr:return Ya(i);case de:case pe:return new p(+i);case Zn:return mb(i,c);case Wr:case Oi:case vr:case pt:case oa:case sa:case aa:case la:case ha:return Ju(i,c);case Fe:return new p;case fe:case Xn:return new p(i);case Yn:return vb(i);case Nt:return new p;case Jn:return bb(i)}}function _b(i,a){var c=a.length;if(!c)return i;var p=c-1;return a[p]=(c>1?"& ":"")+a[p],a=a.join(c>2?", ":" "),i.replace(L0,`{
/* [wrapped with `+a+`] */
`)}function jb(i){return ce(i)||Ar(i)||!!(wu&&i&&i[wu])}function jn(i,a){var c=typeof i;return a=a??se,!!a&&(c=="number"||c!="symbol"&&K0.test(i))&&i>-1&&i%1==0&&i<a}function Tt(i,a,c){if(!Ye(c))return!1;var p=typeof a;return(p=="number"?jt(c)&&jn(a,c.length):p=="string"&&a in c)?dn(c[a],i):!1}function rl(i,a){if(ce(i))return!1;var c=typeof i;return c=="number"||c=="symbol"||c=="boolean"||i==null||Ht(i)?!0:E0.test(i)||!O0.test(i)||a!=null&&i in ze(a)}function Lb(i){var a=typeof i;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?i!=="__proto__":i===null}function il(i){var a=is(i),c=$[a];if(typeof c!="function"||!(a in Ce.prototype))return!1;if(i===c)return!0;var p=el(c);return!!p&&i===p[0]}function Pb(i){return!!mu&&mu in i}var zb=_o?Ln:yl;function Hi(i){var a=i&&i.constructor,c=typeof a=="function"&&a.prototype||Gr;return i===c}function md(i){return i===i&&!Ye(i)}function vd(i,a){return function(c){return c==null?!1:c[i]===a&&(a!==t||i in ze(c))}}function Bb(i){var a=cs(i,function(p){return c.size===f&&c.clear(),p}),c=a.cache;return a}function Nb(i,a){var c=i[1],p=a[1],b=c|p,C=b<(k|A|W),M=p==W&&c==D||p==W&&c==re&&i[7].length<=a[8]||p==(W|re)&&a[7].length<=a[8]&&c==D;if(!(C||M))return i;p&k&&(i[2]=a[2],b|=c&k?0:T);var R=a[3];if(R){var E=i[3];i[3]=E?Qu(E,R,a[4]):R,i[4]=E?tr(i[3],d):a[4]}return R=a[5],R&&(E=i[5],i[5]=E?ed(E,R,a[6]):R,i[6]=E?tr(i[5],d):a[6]),R=a[7],R&&(i[7]=R),p&W&&(i[8]=i[8]==null?a[8]:xt(i[8],a[8])),i[9]==null&&(i[9]=a[9]),i[0]=a[0],i[1]=b,i}function Fb(i){var a=[];if(i!=null)for(var c in ze(i))a.push(c);return a}function Wb(i){return Lo.call(i)}function bd(i,a,c){return a=lt(a===t?i.length-1:a,0),function(){for(var p=arguments,b=-1,C=lt(p.length-a,0),M=_(C);++b<C;)M[b]=p[a+b];b=-1;for(var R=_(a+1);++b<a;)R[b]=p[b];return R[a]=c(M),Ft(i,this,R)}}function xd(i,a){return a.length<2?i:Cr(i,nn(a,0,-1))}function Vb(i,a){for(var c=i.length,p=xt(a.length,c),b=_t(i);p--;){var C=a[p];i[p]=jn(C,c)?b[C]:t}return i}function ol(i,a){if(!(a==="constructor"&&typeof i[a]=="function")&&a!="__proto__")return i[a]}var wd=$d(Vu),Ui=iv||function(i,a){return gt.setTimeout(i,a)},sl=$d(db);function yd(i,a,c){var p=a+"";return sl(i,_b(p,Hb(Ob(p),c)))}function $d(i){var a=0,c=0;return function(){var p=lv(),b=ne-(p-c);if(c=p,b>0){if(++a>=he)return arguments[0]}else a=0;return i.apply(t,arguments)}}function ss(i,a){var c=-1,p=i.length,b=p-1;for(a=a===t?p:a;++c<a;){var C=Wa(c,b),M=i[C];i[C]=i[c],i[c]=M}return i.length=a,i}var Cd=Bb(function(i){var a=[];return i.charCodeAt(0)===46&&a.push(""),i.replace(I0,function(c,p,b,C){a.push(b?C.replace(F0,"$1"):p||c)}),a});function $n(i){if(typeof i=="string"||Ht(i))return i;var a=i+"";return a=="0"&&1/i==-oe?"-0":a}function kr(i){if(i!=null){try{return jo.call(i)}catch{}try{return i+""}catch{}}return""}function Hb(i,a){return Zt(Ze,function(c){var p="_."+c[0];a&c[1]&&!Do(i,p)&&i.push(p)}),i.sort()}function Sd(i){if(i instanceof Ce)return i.clone();var a=new en(i.__wrapped__,i.__chain__);return a.__actions__=_t(i.__actions__),a.__index__=i.__index__,a.__values__=i.__values__,a}function Ub(i,a,c){(c?Tt(i,a,c):a===t)?a=1:a=lt(ge(a),0);var p=i==null?0:i.length;if(!p||a<1)return[];for(var b=0,C=0,M=_(Wo(p/a));b<p;)M[C++]=nn(i,b,b+=a);return M}function qb(i){for(var a=-1,c=i==null?0:i.length,p=0,b=[];++a<c;){var C=i[a];C&&(b[p++]=C)}return b}function Kb(){var i=arguments.length;if(!i)return[];for(var a=_(i-1),c=arguments[0],p=i;p--;)a[p-1]=arguments[p];return er(ce(c)?_t(c):[c],mt(a,1))}var Gb=be(function(i,a){return Qe(i)?Bi(i,mt(a,1,Qe,!0)):[]}),Yb=be(function(i,a){var c=rn(a);return Qe(c)&&(c=t),Qe(i)?Bi(i,mt(a,1,Qe,!0),Q(c,2)):[]}),Xb=be(function(i,a){var c=rn(a);return Qe(c)&&(c=t),Qe(i)?Bi(i,mt(a,1,Qe,!0),t,c):[]});function Jb(i,a,c){var p=i==null?0:i.length;return p?(a=c||a===t?1:ge(a),nn(i,a<0?0:a,p)):[]}function Zb(i,a,c){var p=i==null?0:i.length;return p?(a=c||a===t?1:ge(a),a=p-a,nn(i,0,a<0?0:a)):[]}function Qb(i,a){return i&&i.length?Zo(i,Q(a,3),!0,!0):[]}function ex(i,a){return i&&i.length?Zo(i,Q(a,3),!0):[]}function tx(i,a,c,p){var b=i==null?0:i.length;return b?(c&&typeof c!="number"&&Tt(i,a,c)&&(c=0,p=b),Kv(i,a,c,p)):[]}function kd(i,a,c){var p=i==null?0:i.length;if(!p)return-1;var b=c==null?0:ge(c);return b<0&&(b=lt(p+b,0)),Oo(i,Q(a,3),b)}function Ad(i,a,c){var p=i==null?0:i.length;if(!p)return-1;var b=p-1;return c!==t&&(b=ge(c),b=c<0?lt(p+b,0):xt(b,p-1)),Oo(i,Q(a,3),b,!0)}function Md(i){var a=i==null?0:i.length;return a?mt(i,1):[]}function nx(i){var a=i==null?0:i.length;return a?mt(i,oe):[]}function rx(i,a){var c=i==null?0:i.length;return c?(a=a===t?1:ge(a),mt(i,a)):[]}function ix(i){for(var a=-1,c=i==null?0:i.length,p={};++a<c;){var b=i[a];p[b[0]]=b[1]}return p}function Td(i){return i&&i.length?i[0]:t}function ox(i,a,c){var p=i==null?0:i.length;if(!p)return-1;var b=c==null?0:ge(c);return b<0&&(b=lt(p+b,0)),Hr(i,a,b)}function sx(i){var a=i==null?0:i.length;return a?nn(i,0,-1):[]}var ax=be(function(i){var a=Ge(i,Ka);return a.length&&a[0]===i[0]?Pa(a):[]}),lx=be(function(i){var a=rn(i),c=Ge(i,Ka);return a===rn(c)?a=t:c.pop(),c.length&&c[0]===i[0]?Pa(c,Q(a,2)):[]}),hx=be(function(i){var a=rn(i),c=Ge(i,Ka);return a=typeof a=="function"?a:t,a&&c.pop(),c.length&&c[0]===i[0]?Pa(c,t,a):[]});function cx(i,a){return i==null?"":sv.call(i,a)}function rn(i){var a=i==null?0:i.length;return a?i[a-1]:t}function ux(i,a,c){var p=i==null?0:i.length;if(!p)return-1;var b=p;return c!==t&&(b=ge(c),b=b<0?lt(p+b,0):xt(b,p-1)),a===a?H1(i,a,b):Oo(i,lu,b,!0)}function dx(i,a){return i&&i.length?Bu(i,ge(a)):t}var fx=be(Rd);function Rd(i,a){return i&&i.length&&a&&a.length?Fa(i,a):i}function px(i,a,c){return i&&i.length&&a&&a.length?Fa(i,a,Q(c,2)):i}function gx(i,a,c){return i&&i.length&&a&&a.length?Fa(i,a,t,c):i}var mx=_n(function(i,a){var c=i==null?0:i.length,p=Ia(i,a);return Wu(i,Ge(a,function(b){return jn(b,c)?+b:b}).sort(Zu)),p});function vx(i,a){var c=[];if(!(i&&i.length))return c;var p=-1,b=[],C=i.length;for(a=Q(a,3);++p<C;){var M=i[p];a(M,p,i)&&(c.push(M),b.push(p))}return Wu(i,b),c}function al(i){return i==null?i:cv.call(i)}function bx(i,a,c){var p=i==null?0:i.length;return p?(c&&typeof c!="number"&&Tt(i,a,c)?(a=0,c=p):(a=a==null?0:ge(a),c=c===t?p:ge(c)),nn(i,a,c)):[]}function xx(i,a){return Jo(i,a)}function wx(i,a,c){return Ha(i,a,Q(c,2))}function yx(i,a){var c=i==null?0:i.length;if(c){var p=Jo(i,a);if(p<c&&dn(i[p],a))return p}return-1}function $x(i,a){return Jo(i,a,!0)}function Cx(i,a,c){return Ha(i,a,Q(c,2),!0)}function Sx(i,a){var c=i==null?0:i.length;if(c){var p=Jo(i,a,!0)-1;if(dn(i[p],a))return p}return-1}function kx(i){return i&&i.length?Hu(i):[]}function Ax(i,a){return i&&i.length?Hu(i,Q(a,2)):[]}function Mx(i){var a=i==null?0:i.length;return a?nn(i,1,a):[]}function Tx(i,a,c){return i&&i.length?(a=c||a===t?1:ge(a),nn(i,0,a<0?0:a)):[]}function Rx(i,a,c){var p=i==null?0:i.length;return p?(a=c||a===t?1:ge(a),a=p-a,nn(i,a<0?0:a,p)):[]}function Dx(i,a){return i&&i.length?Zo(i,Q(a,3),!1,!0):[]}function Ox(i,a){return i&&i.length?Zo(i,Q(a,3)):[]}var Ex=be(function(i){return ir(mt(i,1,Qe,!0))}),Ix=be(function(i){var a=rn(i);return Qe(a)&&(a=t),ir(mt(i,1,Qe,!0),Q(a,2))}),_x=be(function(i){var a=rn(i);return a=typeof a=="function"?a:t,ir(mt(i,1,Qe,!0),t,a)});function jx(i){return i&&i.length?ir(i):[]}function Lx(i,a){return i&&i.length?ir(i,Q(a,2)):[]}function Px(i,a){return a=typeof a=="function"?a:t,i&&i.length?ir(i,t,a):[]}function ll(i){if(!(i&&i.length))return[];var a=0;return i=Qn(i,function(c){if(Qe(c))return a=lt(c.length,a),!0}),ka(a,function(c){return Ge(i,$a(c))})}function Dd(i,a){if(!(i&&i.length))return[];var c=ll(i);return a==null?c:Ge(c,function(p){return Ft(a,t,p)})}var zx=be(function(i,a){return Qe(i)?Bi(i,a):[]}),Bx=be(function(i){return qa(Qn(i,Qe))}),Nx=be(function(i){var a=rn(i);return Qe(a)&&(a=t),qa(Qn(i,Qe),Q(a,2))}),Fx=be(function(i){var a=rn(i);return a=typeof a=="function"?a:t,qa(Qn(i,Qe),t,a)}),Wx=be(ll);function Vx(i,a){return Gu(i||[],a||[],zi)}function Hx(i,a){return Gu(i||[],a||[],Wi)}var Ux=be(function(i){var a=i.length,c=a>1?i[a-1]:t;return c=typeof c=="function"?(i.pop(),c):t,Dd(i,c)});function Od(i){var a=$(i);return a.__chain__=!0,a}function qx(i,a){return a(i),i}function as(i,a){return a(i)}var Kx=_n(function(i){var a=i.length,c=a?i[0]:0,p=this.__wrapped__,b=function(C){return Ia(C,i)};return a>1||this.__actions__.length||!(p instanceof Ce)||!jn(c)?this.thru(b):(p=p.slice(c,+c+(a?1:0)),p.__actions__.push({func:as,args:[b],thisArg:t}),new en(p,this.__chain__).thru(function(C){return a&&!C.length&&C.push(t),C}))});function Gx(){return Od(this)}function Yx(){return new en(this.value(),this.__chain__)}function Xx(){this.__values__===t&&(this.__values__=Ud(this.value()));var i=this.__index__>=this.__values__.length,a=i?t:this.__values__[this.__index__++];return{done:i,value:a}}function Jx(){return this}function Zx(i){for(var a,c=this;c instanceof qo;){var p=Sd(c);p.__index__=0,p.__values__=t,a?b.__wrapped__=p:a=p;var b=p;c=c.__wrapped__}return b.__wrapped__=i,a}function Qx(){var i=this.__wrapped__;if(i instanceof Ce){var a=i;return this.__actions__.length&&(a=new Ce(this)),a=a.reverse(),a.__actions__.push({func:as,args:[al],thisArg:t}),new en(a,this.__chain__)}return this.thru(al)}function ew(){return Ku(this.__wrapped__,this.__actions__)}var tw=Qo(function(i,a,c){je.call(i,c)?++i[c]:En(i,c,1)});function nw(i,a,c){var p=ce(i)?su:qv;return c&&Tt(i,a,c)&&(a=t),p(i,Q(a,3))}function rw(i,a){var c=ce(i)?Qn:Du;return c(i,Q(a,3))}var iw=id(kd),ow=id(Ad);function sw(i,a){return mt(ls(i,a),1)}function aw(i,a){return mt(ls(i,a),oe)}function lw(i,a,c){return c=c===t?1:ge(c),mt(ls(i,a),c)}function Ed(i,a){var c=ce(i)?Zt:rr;return c(i,Q(a,3))}function Id(i,a){var c=ce(i)?M1:Ru;return c(i,Q(a,3))}var hw=Qo(function(i,a,c){je.call(i,c)?i[c].push(a):En(i,c,[a])});function cw(i,a,c,p){i=jt(i)?i:ni(i),c=c&&!p?ge(c):0;var b=i.length;return c<0&&(c=lt(b+c,0)),fs(i)?c<=b&&i.indexOf(a,c)>-1:!!b&&Hr(i,a,c)>-1}var uw=be(function(i,a,c){var p=-1,b=typeof a=="function",C=jt(i)?_(i.length):[];return rr(i,function(M){C[++p]=b?Ft(a,M,c):Ni(M,a,c)}),C}),dw=Qo(function(i,a,c){En(i,c,a)});function ls(i,a){var c=ce(i)?Ge:Lu;return c(i,Q(a,3))}function fw(i,a,c,p){return i==null?[]:(ce(a)||(a=a==null?[]:[a]),c=p?t:c,ce(c)||(c=c==null?[]:[c]),Nu(i,a,c))}var pw=Qo(function(i,a,c){i[c?0:1].push(a)},function(){return[[],[]]});function gw(i,a,c){var p=ce(i)?wa:cu,b=arguments.length<3;return p(i,Q(a,4),c,b,rr)}function mw(i,a,c){var p=ce(i)?T1:cu,b=arguments.length<3;return p(i,Q(a,4),c,b,Ru)}function vw(i,a){var c=ce(i)?Qn:Du;return c(i,us(Q(a,3)))}function bw(i){var a=ce(i)?ku:cb;return a(i)}function xw(i,a,c){(c?Tt(i,a,c):a===t)?a=1:a=ge(a);var p=ce(i)?Fv:ub;return p(i,a)}function ww(i){var a=ce(i)?Wv:fb;return a(i)}function yw(i){if(i==null)return 0;if(jt(i))return fs(i)?qr(i):i.length;var a=wt(i);return a==Fe||a==Nt?i.size:Ba(i).length}function $w(i,a,c){var p=ce(i)?ya:pb;return c&&Tt(i,a,c)&&(a=t),p(i,Q(a,3))}var Cw=be(function(i,a){if(i==null)return[];var c=a.length;return c>1&&Tt(i,a[0],a[1])?a=[]:c>2&&Tt(a[0],a[1],a[2])&&(a=[a[0]]),Nu(i,mt(a,1),[])}),hs=rv||function(){return gt.Date.now()};function Sw(i,a){if(typeof a!="function")throw new Qt(l);return i=ge(i),function(){if(--i<1)return a.apply(this,arguments)}}function _d(i,a,c){return a=c?t:a,a=i&&a==null?i.length:a,In(i,W,t,t,t,t,a)}function jd(i,a){var c;if(typeof a!="function")throw new Qt(l);return i=ge(i),function(){return--i>0&&(c=a.apply(this,arguments)),i<=1&&(a=t),c}}var hl=be(function(i,a,c){var p=k;if(c.length){var b=tr(c,ei(hl));p|=F}return In(i,p,a,c,b)}),Ld=be(function(i,a,c){var p=k|A;if(c.length){var b=tr(c,ei(Ld));p|=F}return In(a,p,i,c,b)});function Pd(i,a,c){a=c?t:a;var p=In(i,D,t,t,t,t,t,a);return p.placeholder=Pd.placeholder,p}function zd(i,a,c){a=c?t:a;var p=In(i,j,t,t,t,t,t,a);return p.placeholder=zd.placeholder,p}function Bd(i,a,c){var p,b,C,M,R,E,P=0,z=!1,N=!1,V=!0;if(typeof i!="function")throw new Qt(l);a=on(a)||0,Ye(c)&&(z=!!c.leading,N="maxWait"in c,C=N?lt(on(c.maxWait)||0,a):C,V="trailing"in c?!!c.trailing:V);function Y(et){var fn=p,zn=b;return p=b=t,P=et,M=i.apply(zn,fn),M}function ee(et){return P=et,R=Ui(ye,a),z?Y(et):M}function ve(et){var fn=et-E,zn=et-P,of=a-fn;return N?xt(of,C-zn):of}function te(et){var fn=et-E,zn=et-P;return E===t||fn>=a||fn<0||N&&zn>=C}function ye(){var et=hs();if(te(et))return ke(et);R=Ui(ye,ve(et))}function ke(et){return R=t,V&&p?Y(et):(p=b=t,M)}function Ut(){R!==t&&Yu(R),P=0,p=E=b=R=t}function Rt(){return R===t?M:ke(hs())}function qt(){var et=hs(),fn=te(et);if(p=arguments,b=this,E=et,fn){if(R===t)return ee(E);if(N)return Yu(R),R=Ui(ye,a),Y(E)}return R===t&&(R=Ui(ye,a)),M}return qt.cancel=Ut,qt.flush=Rt,qt}var kw=be(function(i,a){return Tu(i,1,a)}),Aw=be(function(i,a,c){return Tu(i,on(a)||0,c)});function Mw(i){return In(i,ae)}function cs(i,a){if(typeof i!="function"||a!=null&&typeof a!="function")throw new Qt(l);var c=function(){var p=arguments,b=a?a.apply(this,p):p[0],C=c.cache;if(C.has(b))return C.get(b);var M=i.apply(this,p);return c.cache=C.set(b,M)||C,M};return c.cache=new(cs.Cache||On),c}cs.Cache=On;function us(i){if(typeof i!="function")throw new Qt(l);return function(){var a=arguments;switch(a.length){case 0:return!i.call(this);case 1:return!i.call(this,a[0]);case 2:return!i.call(this,a[0],a[1]);case 3:return!i.call(this,a[0],a[1],a[2])}return!i.apply(this,a)}}function Tw(i){return jd(2,i)}var Rw=gb(function(i,a){a=a.length==1&&ce(a[0])?Ge(a[0],Wt(Q())):Ge(mt(a,1),Wt(Q()));var c=a.length;return be(function(p){for(var b=-1,C=xt(p.length,c);++b<C;)p[b]=a[b].call(this,p[b]);return Ft(i,this,p)})}),cl=be(function(i,a){var c=tr(a,ei(cl));return In(i,F,t,a,c)}),Nd=be(function(i,a){var c=tr(a,ei(Nd));return In(i,B,t,a,c)}),Dw=_n(function(i,a){return In(i,re,t,t,t,a)});function Ow(i,a){if(typeof i!="function")throw new Qt(l);return a=a===t?a:ge(a),be(i,a)}function Ew(i,a){if(typeof i!="function")throw new Qt(l);return a=a==null?0:lt(ge(a),0),be(function(c){var p=c[a],b=sr(c,0,a);return p&&er(b,p),Ft(i,this,b)})}function Iw(i,a,c){var p=!0,b=!0;if(typeof i!="function")throw new Qt(l);return Ye(c)&&(p="leading"in c?!!c.leading:p,b="trailing"in c?!!c.trailing:b),Bd(i,a,{leading:p,maxWait:a,trailing:b})}function _w(i){return _d(i,1)}function jw(i,a){return cl(Ga(a),i)}function Lw(){if(!arguments.length)return[];var i=arguments[0];return ce(i)?i:[i]}function Pw(i){return tn(i,x)}function zw(i,a){return a=typeof a=="function"?a:t,tn(i,x,a)}function Bw(i){return tn(i,m|x)}function Nw(i,a){return a=typeof a=="function"?a:t,tn(i,m|x,a)}function Fw(i,a){return a==null||Mu(i,a,ut(a))}function dn(i,a){return i===a||i!==i&&a!==a}var Ww=rs(La),Vw=rs(function(i,a){return i>=a}),Ar=Iu(function(){return arguments}())?Iu:function(i){return Xe(i)&&je.call(i,"callee")&&!xu.call(i,"callee")},ce=_.isArray,Hw=eu?Wt(eu):Zv;function jt(i){return i!=null&&ds(i.length)&&!Ln(i)}function Qe(i){return Xe(i)&&jt(i)}function Uw(i){return i===!0||i===!1||Xe(i)&&Mt(i)==de}var ar=ov||yl,qw=tu?Wt(tu):Qv;function Kw(i){return Xe(i)&&i.nodeType===1&&!qi(i)}function Gw(i){if(i==null)return!0;if(jt(i)&&(ce(i)||typeof i=="string"||typeof i.splice=="function"||ar(i)||ti(i)||Ar(i)))return!i.length;var a=wt(i);if(a==Fe||a==Nt)return!i.size;if(Hi(i))return!Ba(i).length;for(var c in i)if(je.call(i,c))return!1;return!0}function Yw(i,a){return Fi(i,a)}function Xw(i,a,c){c=typeof c=="function"?c:t;var p=c?c(i,a):t;return p===t?Fi(i,a,t,c):!!p}function ul(i){if(!Xe(i))return!1;var a=Mt(i);return a==xe||a==me||typeof i.message=="string"&&typeof i.name=="string"&&!qi(i)}function Jw(i){return typeof i=="number"&&yu(i)}function Ln(i){if(!Ye(i))return!1;var a=Mt(i);return a==Ae||a==ct||a==J||a==ia}function Fd(i){return typeof i=="number"&&i==ge(i)}function ds(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=se}function Ye(i){var a=typeof i;return i!=null&&(a=="object"||a=="function")}function Xe(i){return i!=null&&typeof i=="object"}var Wd=nu?Wt(nu):tb;function Zw(i,a){return i===a||za(i,a,tl(a))}function Qw(i,a,c){return c=typeof c=="function"?c:t,za(i,a,tl(a),c)}function e2(i){return Vd(i)&&i!=+i}function t2(i){if(zb(i))throw new le(s);return _u(i)}function n2(i){return i===null}function r2(i){return i==null}function Vd(i){return typeof i=="number"||Xe(i)&&Mt(i)==fe}function qi(i){if(!Xe(i)||Mt(i)!=ft)return!1;var a=Bo(i);if(a===null)return!0;var c=je.call(a,"constructor")&&a.constructor;return typeof c=="function"&&c instanceof c&&jo.call(c)==Q1}var dl=ru?Wt(ru):nb;function i2(i){return Fd(i)&&i>=-se&&i<=se}var Hd=iu?Wt(iu):rb;function fs(i){return typeof i=="string"||!ce(i)&&Xe(i)&&Mt(i)==Xn}function Ht(i){return typeof i=="symbol"||Xe(i)&&Mt(i)==Jn}var ti=ou?Wt(ou):ib;function o2(i){return i===t}function s2(i){return Xe(i)&&wt(i)==gr}function a2(i){return Xe(i)&&Mt(i)==Di}var l2=rs(Na),h2=rs(function(i,a){return i<=a});function Ud(i){if(!i)return[];if(jt(i))return fs(i)?cn(i):_t(i);if(Ii&&i[Ii])return F1(i[Ii]());var a=wt(i),c=a==Fe?Ma:a==Nt?Eo:ni;return c(i)}function Pn(i){if(!i)return i===0?i:0;if(i=on(i),i===oe||i===-oe){var a=i<0?-1:1;return a*Me}return i===i?i:0}function ge(i){var a=Pn(i),c=a%1;return a===a?c?a-c:a:0}function qd(i){return i?$r(ge(i),0,Ee):0}function on(i){if(typeof i=="number")return i;if(Ht(i))return Se;if(Ye(i)){var a=typeof i.valueOf=="function"?i.valueOf():i;i=Ye(a)?a+"":a}if(typeof i!="string")return i===0?i:+i;i=uu(i);var c=H0.test(i);return c||q0.test(i)?S1(i.slice(2),c?2:8):V0.test(i)?Se:+i}function Kd(i){return yn(i,Lt(i))}function c2(i){return i?$r(ge(i),-se,se):i===0?i:0}function _e(i){return i==null?"":Vt(i)}var u2=Zr(function(i,a){if(Hi(a)||jt(a)){yn(a,ut(a),i);return}for(var c in a)je.call(a,c)&&zi(i,c,a[c])}),Gd=Zr(function(i,a){yn(a,Lt(a),i)}),ps=Zr(function(i,a,c,p){yn(a,Lt(a),i,p)}),d2=Zr(function(i,a,c,p){yn(a,ut(a),i,p)}),f2=_n(Ia);function p2(i,a){var c=Jr(i);return a==null?c:Au(c,a)}var g2=be(function(i,a){i=ze(i);var c=-1,p=a.length,b=p>2?a[2]:t;for(b&&Tt(a[0],a[1],b)&&(p=1);++c<p;)for(var C=a[c],M=Lt(C),R=-1,E=M.length;++R<E;){var P=M[R],z=i[P];(z===t||dn(z,Gr[P])&&!je.call(i,P))&&(i[P]=C[P])}return i}),m2=be(function(i){return i.push(t,ud),Ft(Yd,t,i)});function v2(i,a){return au(i,Q(a,3),wn)}function b2(i,a){return au(i,Q(a,3),ja)}function x2(i,a){return i==null?i:_a(i,Q(a,3),Lt)}function w2(i,a){return i==null?i:Ou(i,Q(a,3),Lt)}function y2(i,a){return i&&wn(i,Q(a,3))}function $2(i,a){return i&&ja(i,Q(a,3))}function C2(i){return i==null?[]:Yo(i,ut(i))}function S2(i){return i==null?[]:Yo(i,Lt(i))}function fl(i,a,c){var p=i==null?t:Cr(i,a);return p===t?c:p}function k2(i,a){return i!=null&&pd(i,a,Gv)}function pl(i,a){return i!=null&&pd(i,a,Yv)}var A2=sd(function(i,a,c){a!=null&&typeof a.toString!="function"&&(a=Lo.call(a)),i[a]=c},ml(Pt)),M2=sd(function(i,a,c){a!=null&&typeof a.toString!="function"&&(a=Lo.call(a)),je.call(i,a)?i[a].push(c):i[a]=[c]},Q),T2=be(Ni);function ut(i){return jt(i)?Su(i):Ba(i)}function Lt(i){return jt(i)?Su(i,!0):ob(i)}function R2(i,a){var c={};return a=Q(a,3),wn(i,function(p,b,C){En(c,a(p,b,C),p)}),c}function D2(i,a){var c={};return a=Q(a,3),wn(i,function(p,b,C){En(c,b,a(p,b,C))}),c}var O2=Zr(function(i,a,c){Xo(i,a,c)}),Yd=Zr(function(i,a,c,p){Xo(i,a,c,p)}),E2=_n(function(i,a){var c={};if(i==null)return c;var p=!1;a=Ge(a,function(C){return C=or(C,i),p||(p=C.length>1),C}),yn(i,Qa(i),c),p&&(c=tn(c,m|v|x,Ab));for(var b=a.length;b--;)Ua(c,a[b]);return c});function I2(i,a){return Xd(i,us(Q(a)))}var _2=_n(function(i,a){return i==null?{}:ab(i,a)});function Xd(i,a){if(i==null)return{};var c=Ge(Qa(i),function(p){return[p]});return a=Q(a),Fu(i,c,function(p,b){return a(p,b[0])})}function j2(i,a,c){a=or(a,i);var p=-1,b=a.length;for(b||(b=1,i=t);++p<b;){var C=i==null?t:i[$n(a[p])];C===t&&(p=b,C=c),i=Ln(C)?C.call(i):C}return i}function L2(i,a,c){return i==null?i:Wi(i,a,c)}function P2(i,a,c,p){return p=typeof p=="function"?p:t,i==null?i:Wi(i,a,c,p)}var Jd=hd(ut),Zd=hd(Lt);function z2(i,a,c){var p=ce(i),b=p||ar(i)||ti(i);if(a=Q(a,4),c==null){var C=i&&i.constructor;b?c=p?new C:[]:Ye(i)?c=Ln(C)?Jr(Bo(i)):{}:c={}}return(b?Zt:wn)(i,function(M,R,E){return a(c,M,R,E)}),c}function B2(i,a){return i==null?!0:Ua(i,a)}function N2(i,a,c){return i==null?i:qu(i,a,Ga(c))}function F2(i,a,c,p){return p=typeof p=="function"?p:t,i==null?i:qu(i,a,Ga(c),p)}function ni(i){return i==null?[]:Aa(i,ut(i))}function W2(i){return i==null?[]:Aa(i,Lt(i))}function V2(i,a,c){return c===t&&(c=a,a=t),c!==t&&(c=on(c),c=c===c?c:0),a!==t&&(a=on(a),a=a===a?a:0),$r(on(i),a,c)}function H2(i,a,c){return a=Pn(a),c===t?(c=a,a=0):c=Pn(c),i=on(i),Xv(i,a,c)}function U2(i,a,c){if(c&&typeof c!="boolean"&&Tt(i,a,c)&&(a=c=t),c===t&&(typeof a=="boolean"?(c=a,a=t):typeof i=="boolean"&&(c=i,i=t)),i===t&&a===t?(i=0,a=1):(i=Pn(i),a===t?(a=i,i=0):a=Pn(a)),i>a){var p=i;i=a,a=p}if(c||i%1||a%1){var b=$u();return xt(i+b*(a-i+C1("1e-"+((b+"").length-1))),a)}return Wa(i,a)}var q2=Qr(function(i,a,c){return a=a.toLowerCase(),i+(c?Qd(a):a)});function Qd(i){return gl(_e(i).toLowerCase())}function ef(i){return i=_e(i),i&&i.replace(G0,L1).replace(f1,"")}function K2(i,a,c){i=_e(i),a=Vt(a);var p=i.length;c=c===t?p:$r(ge(c),0,p);var b=c;return c-=a.length,c>=0&&i.slice(c,b)==a}function G2(i){return i=_e(i),i&&T0.test(i)?i.replace(Oc,P1):i}function Y2(i){return i=_e(i),i&&_0.test(i)?i.replace(ca,"\\$&"):i}var X2=Qr(function(i,a,c){return i+(c?"-":"")+a.toLowerCase()}),J2=Qr(function(i,a,c){return i+(c?" ":"")+a.toLowerCase()}),Z2=rd("toLowerCase");function Q2(i,a,c){i=_e(i),a=ge(a);var p=a?qr(i):0;if(!a||p>=a)return i;var b=(a-p)/2;return ns(Vo(b),c)+i+ns(Wo(b),c)}function ey(i,a,c){i=_e(i),a=ge(a);var p=a?qr(i):0;return a&&p<a?i+ns(a-p,c):i}function ty(i,a,c){i=_e(i),a=ge(a);var p=a?qr(i):0;return a&&p<a?ns(a-p,c)+i:i}function ny(i,a,c){return c||a==null?a=0:a&&(a=+a),hv(_e(i).replace(ua,""),a||0)}function ry(i,a,c){return(c?Tt(i,a,c):a===t)?a=1:a=ge(a),Va(_e(i),a)}function iy(){var i=arguments,a=_e(i[0]);return i.length<3?a:a.replace(i[1],i[2])}var oy=Qr(function(i,a,c){return i+(c?"_":"")+a.toLowerCase()});function sy(i,a,c){return c&&typeof c!="number"&&Tt(i,a,c)&&(a=c=t),c=c===t?Ee:c>>>0,c?(i=_e(i),i&&(typeof a=="string"||a!=null&&!dl(a))&&(a=Vt(a),!a&&Ur(i))?sr(cn(i),0,c):i.split(a,c)):[]}var ay=Qr(function(i,a,c){return i+(c?" ":"")+gl(a)});function ly(i,a,c){return i=_e(i),c=c==null?0:$r(ge(c),0,i.length),a=Vt(a),i.slice(c,c+a.length)==a}function hy(i,a,c){var p=$.templateSettings;c&&Tt(i,a,c)&&(a=t),i=_e(i),a=ps({},a,p,cd);var b=ps({},a.imports,p.imports,cd),C=ut(b),M=Aa(b,C),R,E,P=0,z=a.interpolate||Mo,N="__p += '",V=Ta((a.escape||Mo).source+"|"+z.source+"|"+(z===Ec?W0:Mo).source+"|"+(a.evaluate||Mo).source+"|$","g"),Y="//# sourceURL="+(je.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++b1+"]")+`
`;i.replace(V,function(te,ye,ke,Ut,Rt,qt){return ke||(ke=Ut),N+=i.slice(P,qt).replace(Y0,z1),ye&&(R=!0,N+=`' +
__e(`+ye+`) +
'`),Rt&&(E=!0,N+=`';
`+Rt+`;
__p += '`),ke&&(N+=`' +
((__t = (`+ke+`)) == null ? '' : __t) +
'`),P=qt+te.length,te}),N+=`';
`;var ee=je.call(a,"variable")&&a.variable;if(!ee)N=`with (obj) {
`+N+`
}
`;else if(N0.test(ee))throw new le(h);N=(E?N.replace(S0,""):N).replace(k0,"$1").replace(A0,"$1;"),N="function("+(ee||"obj")+`) {
`+(ee?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(R?", __e = _.escape":"")+(E?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+N+`return __p
}`;var ve=nf(function(){return De(C,Y+"return "+N).apply(t,M)});if(ve.source=N,ul(ve))throw ve;return ve}function cy(i){return _e(i).toLowerCase()}function uy(i){return _e(i).toUpperCase()}function dy(i,a,c){if(i=_e(i),i&&(c||a===t))return uu(i);if(!i||!(a=Vt(a)))return i;var p=cn(i),b=cn(a),C=du(p,b),M=fu(p,b)+1;return sr(p,C,M).join("")}function fy(i,a,c){if(i=_e(i),i&&(c||a===t))return i.slice(0,gu(i)+1);if(!i||!(a=Vt(a)))return i;var p=cn(i),b=fu(p,cn(a))+1;return sr(p,0,b).join("")}function py(i,a,c){if(i=_e(i),i&&(c||a===t))return i.replace(ua,"");if(!i||!(a=Vt(a)))return i;var p=cn(i),b=du(p,cn(a));return sr(p,b).join("")}function gy(i,a){var c=ie,p=$e;if(Ye(a)){var b="separator"in a?a.separator:b;c="length"in a?ge(a.length):c,p="omission"in a?Vt(a.omission):p}i=_e(i);var C=i.length;if(Ur(i)){var M=cn(i);C=M.length}if(c>=C)return i;var R=c-qr(p);if(R<1)return p;var E=M?sr(M,0,R).join(""):i.slice(0,R);if(b===t)return E+p;if(M&&(R+=E.length-R),dl(b)){if(i.slice(R).search(b)){var P,z=E;for(b.global||(b=Ta(b.source,_e(Ic.exec(b))+"g")),b.lastIndex=0;P=b.exec(z);)var N=P.index;E=E.slice(0,N===t?R:N)}}else if(i.indexOf(Vt(b),R)!=R){var V=E.lastIndexOf(b);V>-1&&(E=E.slice(0,V))}return E+p}function my(i){return i=_e(i),i&&M0.test(i)?i.replace(Dc,U1):i}var vy=Qr(function(i,a,c){return i+(c?" ":"")+a.toUpperCase()}),gl=rd("toUpperCase");function tf(i,a,c){return i=_e(i),a=c?t:a,a===t?N1(i)?G1(i):O1(i):i.match(a)||[]}var nf=be(function(i,a){try{return Ft(i,t,a)}catch(c){return ul(c)?c:new le(c)}}),by=_n(function(i,a){return Zt(a,function(c){c=$n(c),En(i,c,hl(i[c],i))}),i});function xy(i){var a=i==null?0:i.length,c=Q();return i=a?Ge(i,function(p){if(typeof p[1]!="function")throw new Qt(l);return[c(p[0]),p[1]]}):[],be(function(p){for(var b=-1;++b<a;){var C=i[b];if(Ft(C[0],this,p))return Ft(C[1],this,p)}})}function wy(i){return Uv(tn(i,m))}function ml(i){return function(){return i}}function yy(i,a){return i==null||i!==i?a:i}var $y=od(),Cy=od(!0);function Pt(i){return i}function vl(i){return ju(typeof i=="function"?i:tn(i,m))}function Sy(i){return Pu(tn(i,m))}function ky(i,a){return zu(i,tn(a,m))}var Ay=be(function(i,a){return function(c){return Ni(c,i,a)}}),My=be(function(i,a){return function(c){return Ni(i,c,a)}});function bl(i,a,c){var p=ut(a),b=Yo(a,p);c==null&&!(Ye(a)&&(b.length||!p.length))&&(c=a,a=i,i=this,b=Yo(a,ut(a)));var C=!(Ye(c)&&"chain"in c)||!!c.chain,M=Ln(i);return Zt(b,function(R){var E=a[R];i[R]=E,M&&(i.prototype[R]=function(){var P=this.__chain__;if(C||P){var z=i(this.__wrapped__),N=z.__actions__=_t(this.__actions__);return N.push({func:E,args:arguments,thisArg:i}),z.__chain__=P,z}return E.apply(i,er([this.value()],arguments))})}),i}function Ty(){return gt._===this&&(gt._=ev),this}function xl(){}function Ry(i){return i=ge(i),be(function(a){return Bu(a,i)})}var Dy=Xa(Ge),Oy=Xa(su),Ey=Xa(ya);function rf(i){return rl(i)?$a($n(i)):lb(i)}function Iy(i){return function(a){return i==null?t:Cr(i,a)}}var _y=ad(),jy=ad(!0);function wl(){return[]}function yl(){return!1}function Ly(){return{}}function Py(){return""}function zy(){return!0}function By(i,a){if(i=ge(i),i<1||i>se)return[];var c=Ee,p=xt(i,Ee);a=Q(a),i-=Ee;for(var b=ka(p,a);++c<i;)a(c);return b}function Ny(i){return ce(i)?Ge(i,$n):Ht(i)?[i]:_t(Cd(_e(i)))}function Fy(i){var a=++Z1;return _e(i)+a}var Wy=ts(function(i,a){return i+a},0),Vy=Ja("ceil"),Hy=ts(function(i,a){return i/a},1),Uy=Ja("floor");function qy(i){return i&&i.length?Go(i,Pt,La):t}function Ky(i,a){return i&&i.length?Go(i,Q(a,2),La):t}function Gy(i){return hu(i,Pt)}function Yy(i,a){return hu(i,Q(a,2))}function Xy(i){return i&&i.length?Go(i,Pt,Na):t}function Jy(i,a){return i&&i.length?Go(i,Q(a,2),Na):t}var Zy=ts(function(i,a){return i*a},1),Qy=Ja("round"),e$=ts(function(i,a){return i-a},0);function t$(i){return i&&i.length?Sa(i,Pt):0}function n$(i,a){return i&&i.length?Sa(i,Q(a,2)):0}return $.after=Sw,$.ary=_d,$.assign=u2,$.assignIn=Gd,$.assignInWith=ps,$.assignWith=d2,$.at=f2,$.before=jd,$.bind=hl,$.bindAll=by,$.bindKey=Ld,$.castArray=Lw,$.chain=Od,$.chunk=Ub,$.compact=qb,$.concat=Kb,$.cond=xy,$.conforms=wy,$.constant=ml,$.countBy=tw,$.create=p2,$.curry=Pd,$.curryRight=zd,$.debounce=Bd,$.defaults=g2,$.defaultsDeep=m2,$.defer=kw,$.delay=Aw,$.difference=Gb,$.differenceBy=Yb,$.differenceWith=Xb,$.drop=Jb,$.dropRight=Zb,$.dropRightWhile=Qb,$.dropWhile=ex,$.fill=tx,$.filter=rw,$.flatMap=sw,$.flatMapDeep=aw,$.flatMapDepth=lw,$.flatten=Md,$.flattenDeep=nx,$.flattenDepth=rx,$.flip=Mw,$.flow=$y,$.flowRight=Cy,$.fromPairs=ix,$.functions=C2,$.functionsIn=S2,$.groupBy=hw,$.initial=sx,$.intersection=ax,$.intersectionBy=lx,$.intersectionWith=hx,$.invert=A2,$.invertBy=M2,$.invokeMap=uw,$.iteratee=vl,$.keyBy=dw,$.keys=ut,$.keysIn=Lt,$.map=ls,$.mapKeys=R2,$.mapValues=D2,$.matches=Sy,$.matchesProperty=ky,$.memoize=cs,$.merge=O2,$.mergeWith=Yd,$.method=Ay,$.methodOf=My,$.mixin=bl,$.negate=us,$.nthArg=Ry,$.omit=E2,$.omitBy=I2,$.once=Tw,$.orderBy=fw,$.over=Dy,$.overArgs=Rw,$.overEvery=Oy,$.overSome=Ey,$.partial=cl,$.partialRight=Nd,$.partition=pw,$.pick=_2,$.pickBy=Xd,$.property=rf,$.propertyOf=Iy,$.pull=fx,$.pullAll=Rd,$.pullAllBy=px,$.pullAllWith=gx,$.pullAt=mx,$.range=_y,$.rangeRight=jy,$.rearg=Dw,$.reject=vw,$.remove=vx,$.rest=Ow,$.reverse=al,$.sampleSize=xw,$.set=L2,$.setWith=P2,$.shuffle=ww,$.slice=bx,$.sortBy=Cw,$.sortedUniq=kx,$.sortedUniqBy=Ax,$.split=sy,$.spread=Ew,$.tail=Mx,$.take=Tx,$.takeRight=Rx,$.takeRightWhile=Dx,$.takeWhile=Ox,$.tap=qx,$.throttle=Iw,$.thru=as,$.toArray=Ud,$.toPairs=Jd,$.toPairsIn=Zd,$.toPath=Ny,$.toPlainObject=Kd,$.transform=z2,$.unary=_w,$.union=Ex,$.unionBy=Ix,$.unionWith=_x,$.uniq=jx,$.uniqBy=Lx,$.uniqWith=Px,$.unset=B2,$.unzip=ll,$.unzipWith=Dd,$.update=N2,$.updateWith=F2,$.values=ni,$.valuesIn=W2,$.without=zx,$.words=tf,$.wrap=jw,$.xor=Bx,$.xorBy=Nx,$.xorWith=Fx,$.zip=Wx,$.zipObject=Vx,$.zipObjectDeep=Hx,$.zipWith=Ux,$.entries=Jd,$.entriesIn=Zd,$.extend=Gd,$.extendWith=ps,bl($,$),$.add=Wy,$.attempt=nf,$.camelCase=q2,$.capitalize=Qd,$.ceil=Vy,$.clamp=V2,$.clone=Pw,$.cloneDeep=Bw,$.cloneDeepWith=Nw,$.cloneWith=zw,$.conformsTo=Fw,$.deburr=ef,$.defaultTo=yy,$.divide=Hy,$.endsWith=K2,$.eq=dn,$.escape=G2,$.escapeRegExp=Y2,$.every=nw,$.find=iw,$.findIndex=kd,$.findKey=v2,$.findLast=ow,$.findLastIndex=Ad,$.findLastKey=b2,$.floor=Uy,$.forEach=Ed,$.forEachRight=Id,$.forIn=x2,$.forInRight=w2,$.forOwn=y2,$.forOwnRight=$2,$.get=fl,$.gt=Ww,$.gte=Vw,$.has=k2,$.hasIn=pl,$.head=Td,$.identity=Pt,$.includes=cw,$.indexOf=ox,$.inRange=H2,$.invoke=T2,$.isArguments=Ar,$.isArray=ce,$.isArrayBuffer=Hw,$.isArrayLike=jt,$.isArrayLikeObject=Qe,$.isBoolean=Uw,$.isBuffer=ar,$.isDate=qw,$.isElement=Kw,$.isEmpty=Gw,$.isEqual=Yw,$.isEqualWith=Xw,$.isError=ul,$.isFinite=Jw,$.isFunction=Ln,$.isInteger=Fd,$.isLength=ds,$.isMap=Wd,$.isMatch=Zw,$.isMatchWith=Qw,$.isNaN=e2,$.isNative=t2,$.isNil=r2,$.isNull=n2,$.isNumber=Vd,$.isObject=Ye,$.isObjectLike=Xe,$.isPlainObject=qi,$.isRegExp=dl,$.isSafeInteger=i2,$.isSet=Hd,$.isString=fs,$.isSymbol=Ht,$.isTypedArray=ti,$.isUndefined=o2,$.isWeakMap=s2,$.isWeakSet=a2,$.join=cx,$.kebabCase=X2,$.last=rn,$.lastIndexOf=ux,$.lowerCase=J2,$.lowerFirst=Z2,$.lt=l2,$.lte=h2,$.max=qy,$.maxBy=Ky,$.mean=Gy,$.meanBy=Yy,$.min=Xy,$.minBy=Jy,$.stubArray=wl,$.stubFalse=yl,$.stubObject=Ly,$.stubString=Py,$.stubTrue=zy,$.multiply=Zy,$.nth=dx,$.noConflict=Ty,$.noop=xl,$.now=hs,$.pad=Q2,$.padEnd=ey,$.padStart=ty,$.parseInt=ny,$.random=U2,$.reduce=gw,$.reduceRight=mw,$.repeat=ry,$.replace=iy,$.result=j2,$.round=Qy,$.runInContext=O,$.sample=bw,$.size=yw,$.snakeCase=oy,$.some=$w,$.sortedIndex=xx,$.sortedIndexBy=wx,$.sortedIndexOf=yx,$.sortedLastIndex=$x,$.sortedLastIndexBy=Cx,$.sortedLastIndexOf=Sx,$.startCase=ay,$.startsWith=ly,$.subtract=e$,$.sum=t$,$.sumBy=n$,$.template=hy,$.times=By,$.toFinite=Pn,$.toInteger=ge,$.toLength=qd,$.toLower=cy,$.toNumber=on,$.toSafeInteger=c2,$.toString=_e,$.toUpper=uy,$.trim=dy,$.trimEnd=fy,$.trimStart=py,$.truncate=gy,$.unescape=my,$.uniqueId=Fy,$.upperCase=vy,$.upperFirst=gl,$.each=Ed,$.eachRight=Id,$.first=Td,bl($,function(){var i={};return wn($,function(a,c){je.call($.prototype,c)||(i[c]=a)}),i}(),{chain:!1}),$.VERSION=r,Zt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){$[i].placeholder=$}),Zt(["drop","take"],function(i,a){Ce.prototype[i]=function(c){c=c===t?1:lt(ge(c),0);var p=this.__filtered__&&!a?new Ce(this):this.clone();return p.__filtered__?p.__takeCount__=xt(c,p.__takeCount__):p.__views__.push({size:xt(c,Ee),type:i+(p.__dir__<0?"Right":"")}),p},Ce.prototype[i+"Right"]=function(c){return this.reverse()[i](c).reverse()}}),Zt(["filter","map","takeWhile"],function(i,a){var c=a+1,p=c==ue||c==Re;Ce.prototype[i]=function(b){var C=this.clone();return C.__iteratees__.push({iteratee:Q(b,3),type:c}),C.__filtered__=C.__filtered__||p,C}}),Zt(["head","last"],function(i,a){var c="take"+(a?"Right":"");Ce.prototype[i]=function(){return this[c](1).value()[0]}}),Zt(["initial","tail"],function(i,a){var c="drop"+(a?"":"Right");Ce.prototype[i]=function(){return this.__filtered__?new Ce(this):this[c](1)}}),Ce.prototype.compact=function(){return this.filter(Pt)},Ce.prototype.find=function(i){return this.filter(i).head()},Ce.prototype.findLast=function(i){return this.reverse().find(i)},Ce.prototype.invokeMap=be(function(i,a){return typeof i=="function"?new Ce(this):this.map(function(c){return Ni(c,i,a)})}),Ce.prototype.reject=function(i){return this.filter(us(Q(i)))},Ce.prototype.slice=function(i,a){i=ge(i);var c=this;return c.__filtered__&&(i>0||a<0)?new Ce(c):(i<0?c=c.takeRight(-i):i&&(c=c.drop(i)),a!==t&&(a=ge(a),c=a<0?c.dropRight(-a):c.take(a-i)),c)},Ce.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},Ce.prototype.toArray=function(){return this.take(Ee)},wn(Ce.prototype,function(i,a){var c=/^(?:filter|find|map|reject)|While$/.test(a),p=/^(?:head|last)$/.test(a),b=$[p?"take"+(a=="last"?"Right":""):a],C=p||/^find/.test(a);b&&($.prototype[a]=function(){var M=this.__wrapped__,R=p?[1]:arguments,E=M instanceof Ce,P=R[0],z=E||ce(M),N=function(ye){var ke=b.apply($,er([ye],R));return p&&V?ke[0]:ke};z&&c&&typeof P=="function"&&P.length!=1&&(E=z=!1);var V=this.__chain__,Y=!!this.__actions__.length,ee=C&&!V,ve=E&&!Y;if(!C&&z){M=ve?M:new Ce(this);var te=i.apply(M,R);return te.__actions__.push({func:as,args:[N],thisArg:t}),new en(te,V)}return ee&&ve?i.apply(this,R):(te=this.thru(N),ee?p?te.value()[0]:te.value():te)})}),Zt(["pop","push","shift","sort","splice","unshift"],function(i){var a=Io[i],c=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",p=/^(?:pop|shift)$/.test(i);$.prototype[i]=function(){var b=arguments;if(p&&!this.__chain__){var C=this.value();return a.apply(ce(C)?C:[],b)}return this[c](function(M){return a.apply(ce(M)?M:[],b)})}}),wn(Ce.prototype,function(i,a){var c=$[a];if(c){var p=c.name+"";je.call(Xr,p)||(Xr[p]=[]),Xr[p].push({name:a,func:c})}}),Xr[es(t,A).name]=[{name:"wrapper",func:t}],Ce.prototype.clone=mv,Ce.prototype.reverse=vv,Ce.prototype.value=bv,$.prototype.at=Kx,$.prototype.chain=Gx,$.prototype.commit=Yx,$.prototype.next=Xx,$.prototype.plant=Zx,$.prototype.reverse=Qx,$.prototype.toJSON=$.prototype.valueOf=$.prototype.value=ew,$.prototype.first=$.prototype.head,Ii&&($.prototype[Ii]=Jx),$},Kr=Y1();br?((br.exports=Kr)._=Kr,va._=Kr):gt._=Kr}).call(Ki)})(Ls,Ls.exports);Ls.exports;const ki=(n,e)=>{const t=y.createContext(e),r=s=>{const{children:l,...h}=s,u=y.useMemo(()=>h,Object.values(h));return g.jsx(t.Provider,{value:u,children:l})};function o(s){const l=y.useContext(t);if(l)return l;if(e!==void 0)return e;throw new Error(`\`${s}\` must be used within \`${n}\``)}return r.displayName=`${n}Provider`,[r,o]};function KS(n,e){return typeof n=="string"?!1:e in n}function Ts(n,e,t){return n&&e&&KS(n,e)?n[e]:t}const cf={padding:["padding-block-start","padding-inline-end","padding-block-end","padding-inline-start"],paddingTop:"padding-block-start",paddingRight:"padding-inline-end",paddingBottom:"padding-block-end",paddingLeft:"padding-inline-start",margin:["margin-block-start","margin-inline-end","margin-block-end","margin-inline-start"],marginLeft:"margin-inline-start",marginRight:"margin-inline-end",marginTop:"margin-block-start",marginBottom:"margin-block-end",borderRadius:"border-radius",borderStyle:"border-style",borderWidth:"border-width",borderColor:"border-color",fontSize:"font-size",fontWeight:"font-weight",lineHeight:"line-height",zIndex:"z-index",boxShadow:"box-shadow",pointerEvents:"pointer-events",textAlign:"text-align",textTransform:"text-transform",textDecoration:"text-decoration",flexGrow:"flex-grow",flexShrink:"flex-shrink",flexBasis:"flex-basis",minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height",order:"order",flexDirection:"flex-direction",flexWrap:"flex-wrap",justifyContent:"justify-content",alignItems:"align-items"},GS=n=>{const[e,t,r,o]=n,s=t??e;return[e,s,r??e,o??s]};function YS(n,e){switch(n){case"gap":case"padding":case"margin":case"paddingTop":case"paddingLeft":case"paddingRight":case"paddingBottom":case"marginTop":case"marginLeft":case"marginRight":case"marginBottom":case"left":case"right":case"top":case"bottom":case"width":case"maxWidth":case"minWidth":case"height":case"maxHeight":case"minHeight":case"borderRadius":case"borderWidth":return e.spaces;case"color":case"background":case"borderColor":return e.colors;case"fontSize":return e.fontSizes;case"fontWeight":return e.fontWeights;case"lineHeight":return e.lineHeights;case"zIndex":return e.zIndices;case"boxShadow":return e.shadows;default:return null}}const ui=(n,e)=>{const t=Object.entries(n).reduce((r,o)=>{const[s,l]=o,h=YS(s,e),u=Object.prototype.hasOwnProperty.call(cf,s)?cf[s]:s;return u&&(l||l===0)&&(typeof l=="object"&&!Array.isArray(l)?Object.entries(l).forEach(([f,d])=>{r[f]={...r[f],...uf(u,d,h)}}):r.initial={...r.initial,...uf(u,l,h)}),r},{initial:{},small:{},medium:{},large:{}});return Object.entries(t).reduce((r,[o,s])=>{if(s&&Object.keys(s).length>0){const l=Object.entries(s).reduce((h,[u,f])=>(h.push(`${u}: ${f};`),h),[]).join(`
`);o==="initial"?r.push(l):r.push(`${e.breakpoints[o]}{ ${l} }`)}return r},[]).join(`
`)},uf=(n,e,t)=>{if(Array.isArray(n)&&Array.isArray(e)){const r=GS(e);return n.reduce((o,s,l)=>(o[s]=Ts(t,r[l],r[l]),o),{})}else return Array.isArray(n)&&!Array.isArray(e)?n.reduce((r,o)=>(r[o]=Ts(t,e,e),r),{}):!Array.isArray(n)&&!Array.isArray(e)?{[n]:Ts(t,e,e)}:(console.warn("You've passed an array of values to a property that does not support it. Please check the property and value you're passing."),{})},It=y.forwardRef,H=It((n,e)=>{const{animation:t,background:r,basis:o,borderColor:s,borderRadius:l,borderStyle:h,borderWidth:u,bottom:f,color:d,cursor:m,display:v,flex:x,fontSize:w,fontWeight:S,grow:k,hasRadius:A,height:T,left:D,lineHeight:j,margin:F,marginBottom:B,marginLeft:W,marginRight:re,marginTop:ae,maxHeight:ie,maxWidth:$e,minHeight:he,minWidth:ne,order:ue,overflow:Te,padding:Re,paddingBottom:oe,paddingLeft:se,paddingRight:Me,paddingTop:Se,pointerEvents:Ee,position:Ie,right:Je,shadow:Ze,shrink:Pe,tag:st,textAlign:J,textTransform:de,top:pe,transform:me,transition:xe,width:Ae,zIndex:ct,...Fe}=n;return g.jsx(XS,{as:st||"div",ref:e,$animation:t,$background:r,$basis:o,$borderColor:s,$borderRadius:l,$borderStyle:h,$borderWidth:u,$bottom:f,$color:d,$cursor:m,$display:v,$flex:x,$fontSize:w,$fontWeight:S,$grow:k,$hasRadius:A,$height:T,$left:D,$lineHeight:j,$margin:F,$marginBottom:B,$marginLeft:W,$marginRight:re,$marginTop:ae,$maxHeight:ie,$maxWidth:$e,$minHeight:he,$minWidth:ne,$order:ue,$overflow:Te,$padding:Re,$paddingBottom:oe,$paddingLeft:se,$paddingRight:Me,$paddingTop:Se,$pointerEvents:Ee,$position:Ie,$right:Je,$shadow:Ze,$shrink:Pe,$textAlign:J,$textTransform:de,$top:pe,$transform:me,$transition:xe,$width:Ae,$zIndex:ct,...Fe})}),XS=I.div`
  ${({theme:n,...e})=>ui({animation:e.$animation,background:e.$background,borderColor:e.$borderColor,borderRadius:e.$hasRadius?n.borderRadius:e.$borderRadius,borderStyle:e.$borderColor&&!e.$borderStyle?"solid":e.$borderStyle,borderWidth:e.$borderColor&&!e.$borderWidth?"1px":e.$borderWidth,bottom:e.$bottom,boxShadow:e.$shadow,color:e.$color,cursor:e.$cursor,display:e.$display,flex:e.$flex,flexBasis:e.$basis,flexGrow:e.$grow,flexShrink:e.$shrink,fontSize:e.$fontSize,fontWeight:e.$fontWeight,height:e.$height,left:e.$left,lineHeight:e.$lineHeight,margin:e.$margin,marginBottom:e.$marginBottom,marginLeft:e.$marginLeft,marginRight:e.$marginRight,marginTop:e.$marginTop,maxHeight:e.$maxHeight,maxWidth:e.$maxWidth,minHeight:e.$minHeight,minWidth:e.$minWidth,order:e.$order,overflow:e.$overflow,padding:e.$padding,paddingBottom:e.$paddingBottom,paddingLeft:e.$paddingLeft,paddingRight:e.$paddingRight,paddingTop:e.$paddingTop,pointerEvents:e.$pointerEvents,position:e.$position,right:e.$right,textAlign:e.$textAlign,textTransform:e.$textTransform,top:e.$top,transform:e.$transform,transition:e.$transition,width:e.$width,zIndex:e.$zIndex},n)};
`,U=It((n,e)=>{const{className:t,alignItems:r,direction:o,inline:s,gap:l,justifyContent:h,wrap:u,...f}=n;return g.jsx(JS,{className:t,ref:e,$alignItems:r,$direction:o,$gap:l,$justifyContent:h,$wrap:u,$inline:s,...f})}),JS=I(H)`
  ${({theme:n,$display:e="flex",$alignItems:t="center",$direction:r="row",...o})=>ui({gap:o.$gap,alignItems:t,justifyContent:o.$justifyContent,flexWrap:o.$wrap,flexDirection:r,display:o.$inline?"inline-flex":e},n)};
`,ZS="alpha",QS="beta",ek="delta",tk="epsilon",df="omega",nk="pi",rk="sigma",$g=q`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ik=({$variant:n=df,theme:e,$fontSize:t,$lineHeight:r})=>{const o=t&&ui({fontSize:t},e),s=r&&ui({lineHeight:r},e);switch(n){case ZS:return q`
        font-weight: ${e.fontWeights.bold};

        /* -------------------------------------------------------------
         * Font Size
         * -------------------------------------------------------------*/
        ${o||q`
          /* Mobile: 2.8rem */
          font-size: ${e.fontSizes[6]};

          ${e.breakpoints.medium} {
            /* Tablet + Desktop: 3.2rem */
            font-size: ${e.fontSizes[7]};
          }
        `}

        /* -------------------------------------------------------------
         * Line Height
         * -------------------------------------------------------------*/
        ${s||q`
          /* Mobile: 3.2rem */
          line-height: ${e.lineHeights[0]};

          ${e.breakpoints.medium} {
            /* Tablet + Desktop: 4rem */
            line-height: ${e.lineHeights[2]};
          }
        `}
      `;case QS:return q`
        font-weight: ${e.fontWeights.bold};

        /* -------------------------------------------------------------
         * Font Size
         * -------------------------------------------------------------*/
        ${o||q`
          /* Mobile: 2rem */
          font-size: ${e.fontSizes[5]};

          ${e.breakpoints.medium} {
            /* Tablet + Desktop: 1.8rem */
            font-size: ${e.fontSizes[4]};
          }
        `}

        /* -------------------------------------------------------------
         * Line Height
         * -------------------------------------------------------------*/
        ${s||q`
          /* Mobile: 2.4rem */
          line-height: ${e.lineHeights[1]};
        `}
      `;case ek:return q`
        font-weight: ${e.fontWeights.semiBold};

        /* -------------------------------------------------------------
         * Font Size
         * -------------------------------------------------------------*/
        ${o||q`
          /* Mobile: 1.8rem */
          font-size: ${e.fontSizes[4]};

          ${e.breakpoints.medium} {
            /* Tablet + Desktop: 1.6rem */
            font-size: ${e.fontSizes[3]};
          }
        `}

        /* -------------------------------------------------------------
         * Line Height
         * -------------------------------------------------------------*/
        ${s||q`
          /* Mobile: 2.4rem */
          line-height: ${e.lineHeights[3]};

          ${e.breakpoints.medium} {
            /* Tablet + Desktop: 2rem */
            line-height: ${e.lineHeights[2]};
          }
        `}
      `;case tk:return q`
        /* -------------------------------------------------------------
         * Font Size
         * -------------------------------------------------------------*/
        ${o||q`
          /* Mobile: 1.8rem */
          font-size: ${e.fontSizes[4]};

          ${e.breakpoints.medium} {
            /* Tablet + Desktop: 1.6rem */
            font-size: ${e.fontSizes[3]};
          }
        `}

        /* -------------------------------------------------------------
         * Line Height
         * -------------------------------------------------------------*/
        ${s||q`
          /* Mobile: 2.4rem */
          line-height: ${e.lineHeights[3]};

          ${e.breakpoints.medium} {
            /* Tablet + Desktop: 2.4rem */
            line-height: ${e.lineHeights[6]};
          }
        `}
      `;case df:return q`
        /* -------------------------------------------------------------
         * Font Size
         * -------------------------------------------------------------*/
        ${o||q`
          /* Mobile: 1.6rem */
          font-size: ${e.fontSizes[3]};

          ${e.breakpoints.medium} {
            /* Tablet + Desktop: 1.4rem */
            font-size: ${e.fontSizes[2]};
          }
        `}

        /* -------------------------------------------------------------
         * Line Height
         * -------------------------------------------------------------*/
        ${s||q`
          /* Mobile: 2.4rem */
          line-height: ${e.lineHeights[6]};

          ${e.breakpoints.medium} {
            /* Tablet + Desktop: 2.0rem */
            line-height: ${e.lineHeights[4]};
          }
        `}
      `;case nk:return q`
        /* -------------------------------------------------------------
         * Font Size
         * -------------------------------------------------------------*/
        ${o||q`
          /* All: 1.2rem */
          font-size: ${e.fontSizes[1]};
        `}

        /* -------------------------------------------------------------
         * Line Height
         * -------------------------------------------------------------*/
        ${s||q`
          /* All: 1.6rem */
          line-height: ${e.lineHeights[3]};
        `}
      `;case rk:return q`
        font-weight: ${e.fontWeights.bold};
        text-transform: uppercase;

        /* -------------------------------------------------------------
         * Font Size
         * -------------------------------------------------------------*/
        ${o||q`
          /* All: 1.1rem */
          font-size: ${e.fontSizes[0]};
        `}

        /* -------------------------------------------------------------
         * Line Height
         * -------------------------------------------------------------*/
        ${s||q`
          /* All: 1.6rem */
          line-height: ${e.lineHeights[5]};
        `}
      `;default:return q`
        /* -------------------------------------------------------------
         * Font Size
         * -------------------------------------------------------------*/
        ${o||q`
          /* Mobile: 1.6rem */
          font-size: ${e.fontSizes[3]};

          ${e.breakpoints.medium} {
            /* Tablet + Desktop: 1.4rem */
            font-size: ${e.fontSizes[2]};
          }
        `}
      `}},Z=It((n,e)=>{const{ellipsis:t,textColor:r="currentcolor",textDecoration:o,textTransform:s,variant:l,lineHeight:h,fontWeight:u,fontSize:f,...d}=n;return g.jsx(ok,{ref:e,tag:"span",$ellipsis:t,$textColor:r,$textDecoration:o,$textTransform:s,$variant:l,$lineHeight:h,$fontWeight:u,$fontSize:f,...d})}),ok=I(H)`
  ${({$variant:n,$fontSize:e,$lineHeight:t,theme:r})=>ik({$variant:n,theme:r,$fontSize:e,$lineHeight:t})}
  ${({$ellipsis:n})=>n?$g:""}

  ${({theme:n,...e})=>ui({color:e.$textColor,textDecoration:e.$textDecoration,textTransform:e.$textTransform,lineHeight:e.$lineHeight,fontWeight:e.$fontWeight,fontSize:e.$fontSize},n)}
`,[sk,oc]=ki("Accordion");y.forwardRef(({children:n,size:e="S",...t},r)=>g.jsx(ak,{ref:r,$size:e,collapsible:!0,...t,type:"single",children:g.jsx(sk,{size:e,children:n})}));const ak=I(f$)`
  background-color: ${n=>n.theme.colors.neutral0};

  ${n=>n.$size==="S"?q`
        border-radius: ${e=>e.theme.borderRadius};
        border: solid 1px ${e=>e.theme.colors.neutral200};
      `:q`
        
      `}
`;y.forwardRef((n,e)=>{const{size:t}=oc("Item");return g.jsx(lk,{$size:t,"data-size":t,ref:e,...n})});const lk=I(p$)`
  overflow: hidden;
  margin: 1px 0;

  &:first-child {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    margin-top: 0;
  }

  &:last-child {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    margin-bottom: 0;
  }

  &[data-size='S'] {
    & + & {
      border-top: solid 1px ${n=>n.theme.colors.neutral200};
    }
  }

  &[data-state='open'] {
    box-shadow: 0 0 0 1px ${n=>n.theme.colors.primary600};
  }

  &:not([data-disabled]):hover {
    box-shadow: 0 0 0 1px ${n=>n.theme.colors.primary600};
  }

  /* This applies our desired focus effect correctly. */
  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 1px ${n=>n.theme.colors.primary600};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow ${n=>n.theme.motion.timings[120]}
      ${n=>n.theme.motion.easings.easeOutQuad};
  }
`;y.forwardRef(({caretPosition:n="left",description:e,icon:t,iconProps:r,children:o,...s},l)=>{const{size:h}=oc("Trigger");return g.jsxs(Sg,{$caretPosition:n,$size:h,ref:l,...s,children:[n==="left"?g.jsx(Ps,{$size:h,children:g.jsx(Er,{width:h==="S"?"1.2rem":"1.6rem",height:h==="S"?"1.2rem":"1.6rem"})}):null,g.jsxs(U,{tag:"span",gap:2,overflow:"hidden",children:[t&&h==="S"?g.jsx(Cg,{children:g.jsx(t,{...r})}):null,g.jsxs(U,{alignItems:"flex-start",direction:"column",tag:"span",ref:l,overflow:"hidden",children:[g.jsx(Z,{fontWeight:h==="S"?"bold":void 0,ellipsis:!0,variant:h==="M"?"delta":void 0,textAlign:"left",width:"100%",children:o}),e&&h==="M"?g.jsx(Z,{textAlign:"left",children:e}):null]})]}),n==="right"?g.jsx(Ps,{$size:h,children:g.jsx(Er,{width:h==="S"?"1.2rem":"1.6rem",height:h==="S"?"1.2rem":"1.6rem"})}):null]})});const Cg=I(H)`
  color: ${n=>n.theme.colors.neutral500};
  display: flex;

  @media (prefers-reduced-motion: no-preference) {
    transition: ${n=>n.theme.transitions.color};
  }
`,Ps=I(U).attrs(n=>({...n,tag:"span"}))`
  background-color: ${n=>n.theme.colors.neutral200};
  width: ${n=>n.$size==="S"?"2.4rem":"3.2rem"};
  height: ${n=>n.$size==="S"?"2.4rem":"3.2rem"};
  flex: ${n=>n.$size==="S"?"0 0 2.4rem":"0 0 3.2rem"};
  border-radius: 50%;
  justify-content: center;

  @media (prefers-reduced-motion: no-preference) {
    transition:
      transform ${n=>n.theme.motion.timings[200]} ${n=>n.theme.motion.easings.authenticMotion},
      ${n=>n.theme.transitions.backgroundColor};
  }
`,Sg=I(g$)`
  display: flex;
  align-items: center;
  justify-content: ${n=>n.$caretPosition==="left"?"flex-start":"space-between"};
  width: 100%;
  gap: ${n=>n.theme.spaces[4]};
  padding-inline: ${n=>n.$size==="S"?n.theme.spaces[4]:n.theme.spaces[6]};
  padding-block: ${n=>n.$size==="S"?n.theme.spaces[3]:n.theme.spaces[6]};
  cursor: pointer;
  color: ${n=>n.theme.colors.neutral800};
  overflow: hidden;

  &[data-disabled] {
    cursor: default;
    color: ${n=>n.theme.colors.neutral600};
  }

  &[data-state='open'] > ${Ps} {
    transform: rotate(180deg);
  }

  /* we remove the default focus because the entire item should have the focus style and the default would be hidden. */
  &:focus-visible {
    outline: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${n=>n.theme.transitions.color};
  }
`;y.forwardRef((n,e)=>{const{size:t}=oc("Trigger");return g.jsx(kg,{$size:t,...n,ref:e})});const kg=I(U).attrs(n=>({...n,tag:"span"}))`
  padding-inline: ${n=>n.$size==="S"?n.theme.spaces[2]:n.theme.spaces[6]};
  padding-block: ${n=>n.$size==="S"?n.theme.spaces[2]:n.theme.spaces[6]};

  // Remove default IconButton styles so there are no backgrounds or borders.
  & > button {
    border: none;
    background: none;
    color: ${n=>n.theme.colors.neutral600};

    @media (prefers-reduced-motion: no-preference) {
      transition: ${n=>n.theme.transitions.color};
    }
  }
`;y.forwardRef(({variant:n="primary",...e},t)=>g.jsx(hk,{$variant:n,ref:t,...e}));const hk=I(m$)`
  display: flex;
  align-items: center;
  background-color: ${n=>n.$variant==="primary"?n.theme.colors.neutral0:n.theme.colors.neutral100};

  &[data-disabled] {
    background-color: ${n=>n.theme.colors.neutral150};
  }

  &:not([data-disabled]) {
    &:hover,
    &[data-state='open'] {
      background-color: ${n=>n.theme.colors.primary100};

      & > ${Sg} {
        color: ${n=>n.theme.colors.primary600};

        & ${Cg} {
          color: ${n=>n.theme.colors.primary600};
        }

        & ${Ps} {
          background-color: ${n=>n.theme.colors.primary200};
        }
      }

      & > ${kg} > button {
        color: ${n=>n.theme.colors.primary600};
      }
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${n=>n.theme.transitions.backgroundColor};
  }
`;y.forwardRef((n,e)=>g.jsx(dk,{ref:e,...n}));const ck=yt`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`,uk=yt`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`,dk=I(v$)`
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${ck} ${n=>n.theme.motion.timings[320]}
        ${n=>n.theme.motion.easings.authenticMotion};
    }

    &[data-state='closed'] {
      animation: ${uk} ${n=>n.theme.motion.timings[320]}
        ${n=>n.theme.motion.easings.authenticMotion};
    }
  }
`,Ys=q`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;

    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${n=>n.theme.colors.primary600};
    }
  }
`,Ai=({tag:n,...e})=>g.jsx(fk,{...e,as:n||"span"}),fk=I.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,ao=({children:n,label:e})=>{const t=y.Children.only(n);return g.jsxs(g.Fragment,{children:[y.cloneElement(t,{"aria-hidden":"true",focusable:"false"}),g.jsx(Ai,{children:e})]})};ao.displayName="AccessibleIcon";const ql=({theme:n,$variant:e})=>e==="danger"?n.colors.danger700:e==="success"?n.colors.success700:e==="warning"?n.colors.warning700:n.colors.primary700;I(H)`
  ${Ys};
`;I(U)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${ql};
    }
  }
`;I(H)`
  & a > span {
    color: ${ql};
  }

  svg path {
    fill: ${ql};
  }
`;function An({prop:n,defaultProp:e,onChange:t=()=>{}}){const[r,o]=Ag({defaultProp:e,onChange:t}),s=n!==void 0,l=s?n:r,h=Np(t),u=y.useCallback(f=>{if(s){const d=typeof f=="function"?f(n):f;d!==n&&h(d)}else o(f)},[s,n,o,h]);return[l,u]}function Ag({defaultProp:n,onChange:e}){const t=y.useState(n),[r]=t,o=y.useRef(r),s=Np(e);return y.useEffect(()=>{o.current!==r&&(s(r),o.current=r)},[r,o,s]),t}const ff={easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},pf={120:"120ms"};`${pf[120]}${ff.easeOutQuad}`,`${pf[120]}${ff.easeOutQuad}`;const nt={overlayFadeIn:yt`
    from {
      opacity: 0;
    }
    to {
      opacity: 0.2;
    }
  `,modalPopIn:yt`
    from {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  `,modalPopOut:yt`
    from {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    to {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
  `,popIn:yt`
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  `,popOut:yt`
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.8);
      opacity: 0;
    }
  `,slideDownIn:yt`
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideDownOut:yt`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  `,slideUpIn:yt`
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideUpOut:yt`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(10px);
    }
  `,fadeIn:yt`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,fadeOut:yt`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `},lo=32,gf=2;y.forwardRef(({onLoadingStatusChange:n,delayMs:e=600,src:t,alt:r,fallback:o,preview:s=!1,...l},h)=>{const[u,f]=An({onChange:n}),[d,m]=y.useState(!1),v=s&&u==="loaded",x=w=>{v&&m(w)};return g.jsxs(Ep,{onOpenChange:x,children:[g.jsx(Ip,{asChild:!0,children:g.jsxs(Kl,{ref:h,...l,children:[v?g.jsx(pk,{width:"100%",height:"100%",position:"absolute",background:"neutral0",zIndex:"overlay",style:{opacity:d?.4:0}}):null,g.jsx(gk,{src:t,alt:r,onLoadingStatusChange:f}),g.jsx(b$,{delayMs:e,children:g.jsx(Z,{fontWeight:"bold",textTransform:"uppercase",children:o})})]})}),v?g.jsx(_p,{children:g.jsx(mk,{side:"top",sideOffset:4,children:g.jsx(vk,{src:t,alt:r})})}):null]})});const Mg=q`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  overflow: hidden;
  border-radius: 50%;
`,Tg=q`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`,Kl=I(x$)`
  position: relative;
  z-index: 0;
  ${Mg}
  width: ${lo/10}rem;
  height: ${lo/10}rem;
  /* TODO: we should get the user email & hash it to turn it into a hex-value so different emails can consistently get a different background */
  background-color: ${n=>n.theme.colors.primary600};
  color: ${n=>n.theme.colors.neutral0};
`,pk=I(H)`
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity ${n=>n.theme.motion.timings[200]}
      ${n=>n.theme.motion.easings.authenticMotion};
  }
`,gk=I(w$)`
  ${Tg}
`,mk=I(jp)`
  ${Mg}
  width: ${lo*gf/10}rem;
  height: ${lo*gf/10}rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${nt.fadeIn} ${n=>n.theme.motion.timings[200]}
      ${n=>n.theme.motion.easings.authenticMotion};
  }
`,vk=I.img`
  ${Tg}
`;y.forwardRef((n,e)=>g.jsx(bk,{...n,ref:e,tag:"div"}));const bk=I(U)`
  & > ${Kl} + ${Kl} {
    margin-left: -${lo/10/2}rem;
  }
`,Rg=({active:n=!1,size:e="M",textColor:t="neutral600",backgroundColor:r="neutral150",variant:o,children:s,minWidth:l=5,...h})=>{const u=e==="S"?1:2,f=o?{backgroundColor:`${o}200`,textColor:`${o}700`}:{backgroundColor:r,textColor:t};return g.jsx(xk,{inline:!0,alignItems:"center",justifyContent:"center",minWidth:l,paddingLeft:u,paddingRight:u,background:n?"primary200":f.backgroundColor,$size:e,...h,children:g.jsx(Z,{variant:"sigma",textColor:n?"primary600":f.textColor,lineHeight:"1rem",children:s})})},xk=I(U)`
  border-radius: ${({theme:n,$size:e})=>e==="S"?"2px":n.borderRadius};
  ${({$size:n,theme:e})=>n==="S"?q`
        padding-block: 0.3rem;
        padding-inline ${e.spaces[1]}
      `:q`
      padding-block: 0.7rem;
      padding-inline ${e.spaces[2]}
    `};
`,wk=I(H)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`,Mi=It(({href:n,disabled:e=!1,isExternal:t=!1,...r},o)=>g.jsx(wk,{tag:"a",ref:o,target:t?"_blank":void 0,rel:t?"noreferrer noopener":void 0,href:n,tabIndex:e?-1:void 0,"aria-disabled":e,pointerEvents:e?"none":void 0,cursor:e?void 0:"pointer",...r})),Dg=()=>g.jsx(H,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:g.jsx(Z,{variant:"pi",textColor:"neutral500",children:"/"})});Dg.displayName="Divider";const yk=I(U)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  & > *:first-child {
    margin-left: ${({theme:n})=>`calc(-1*${n.spaces[2]})`};
  }
`,$k=y.forwardRef(({label:n,children:e,...t},r)=>{const o=y.Children.toArray(e);return g.jsx(H,{"aria-label":n,tag:"nav",...t,ref:r,children:g.jsx(yk,{tag:"ol",children:y.Children.map(o,(s,l)=>{const h=o.length>1&&l+1<o.length;return g.jsxs(U,{inline:!0,tag:"li",children:[s,h&&g.jsx(Dg,{})]})})})})});$k.displayName="Breadcrumbs";const Ck=y.forwardRef(({children:n,isCurrent:e=!1,...t},r)=>g.jsx(H,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,ref:r,children:g.jsx(Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"regular","aria-current":e,...t,children:n})}));Ck.displayName="Crumb";const Sk=I(Mi)`
  border-radius: ${({theme:n})=>n.borderRadius};
  color: ${({theme:n})=>n.colors.neutral600};
  font-size: ${({theme:n})=>n.fontSizes[1]};
  line-height: ${({theme:n})=>n.lineHeights[4]};
  padding: ${({theme:n})=>`${n.spaces[1]} ${n.spaces[2]}`};
  text-decoration: none;

  :hover,
  :focus {
    background-color: ${({theme:n})=>n.colors.neutral200};
    color: ${({theme:n})=>n.colors.neutral700};
  }
`,kk=y.forwardRef(({children:n,...e},t)=>g.jsx(Sk,{ref:t,...e,children:n}));kk.displayName="CrumbLink";const di=n=>n.replaceAll(":","");function Ak(n,e){typeof n=="function"?n(e):n!=null&&(n.current=e)}function Og(...n){return e=>n.forEach(t=>Ak(t,e))}function Bt(...n){return y.useCallback(Og(...n),n)}const Mk=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),cr=Mk()?y.useEffect:y.useLayoutEffect,Tk=y.useId||(()=>{});let Rk=0;const xn=n=>{const[e,t]=y.useState(Tk());return cr(()=>{n||t(r=>r??String(Rk++))},[n]),n?.toString()??(e||"")},wo=(n,e,{selectorToWatch:t,skipWhen:r=!1})=>{const o=Nh(e);y.useEffect(()=>{if(r||!n.current)return;const s={root:n.current,rootMargin:"0px"},l=f=>{f.forEach(d=>{d.isIntersecting&&n.current&&n.current.scrollHeight>n.current.clientHeight&&o(d)})},h=new IntersectionObserver(l,s),u=n.current.querySelector(t);return u&&h.observe(u),()=>{h.disconnect()}},[r,o,t,n])},sc="success-light",ac="danger-light",Xs="default",yo="tertiary",$o="secondary",Eg="danger",Ig="success",Js="ghost",lc=[sc,ac],Dk=[Xs,yo,$o,Eg,Ig,Js,...lc],Ok=["XS","S","M","L"],pn=n=>n===sc||n===ac?`${n.substring(0,n.lastIndexOf("-"))}`:n===yo?"neutral":n===Xs||n===$o||Dk.every(e=>e!==n)?"primary":`${n}`,_g=({theme:n})=>q`
    border: 1px solid ${n.colors.neutral200};
    background: ${n.colors.neutral150};
    color: ${n.colors.neutral600};
    cursor: default;
  `,jg=({theme:n,$variant:e})=>[...lc,$o].includes(e)?q`
      background-color: ${n.colors.neutral0};
    `:e===yo?q`
      background-color: ${n.colors.neutral100};
    `:e===Js?q`
      background-color: ${n.colors.neutral100};
    `:e===Xs?q`
      border: 1px solid ${n.colors.buttonPrimary500};
      background: ${n.colors.buttonPrimary500};
    `:q`
    border: 1px solid ${n.colors[`${pn(e)}500`]};
    background: ${n.colors[`${pn(e)}500`]};
  `,Lg=({theme:n,$variant:e})=>[...lc,$o].includes(e)?q`
      background-color: ${n.colors.neutral0};
      border: 1px solid ${n.colors[`${pn(e)}600`]};
      color: ${n.colors[`${pn(e)}600`]};
    `:e===yo||e===Js?q`
      background-color: ${n.colors.neutral150};
    `:q`
    border: 1px solid ${n.colors[`${pn(e)}600`]};
    background: ${n.colors[`${pn(e)}600`]};
  `,Pg=({theme:n,$variant:e})=>{switch(e){case ac:case sc:case $o:return q`
        border: 1px solid ${n.colors[`${pn(e)}200`]};
        background: ${n.colors[`${pn(e)}100`]};
        color: ${n.colors[`${pn(e)}700`]};
      `;case yo:return q`
        border: 1px solid ${n.colors.neutral200};
        background: ${n.colors.neutral0};
        color: ${n.colors.neutral800};
      `;case Js:return q`
        border: 1px solid transparent;
        background: transparent;
        color: ${n.colors.neutral800};

        svg {
          fill: ${n.colors.neutral500};
        }
      `;case Ig:case Eg:return q`
        border: 1px solid ${n.colors[`${pn(e)}600`]};
        background: ${n.colors[`${pn(e)}600`]};
        color: ${n.colors.neutral0};
      `;default:return q`
        border: 1px solid ${n.colors.buttonPrimary600};
        background: ${n.colors.buttonPrimary600};
        color: ${n.colors.buttonNeutral0};
      `}},Gl=It(({variant:n=Xs,startIcon:e,endIcon:t,disabled:r=!1,children:o,onClick:s,size:l=Ok[1],loading:h=!1,fullWidth:u=!1,type:f="button",...d},m)=>{const v=r||h,x=S=>{!v&&s&&s(S)},w=d.tag??"button";return g.jsxs(_k,{ref:m,"aria-disabled":v,disabled:v,$size:l,$variant:n,tag:"button",onClick:x,hasRadius:!0,gap:2,inline:!0,alignItems:"center",justifyContent:"center",width:u?"100%":void 0,paddingLeft:4,paddingRight:4,cursor:"pointer",type:w==="button"||w==="input"?f:void 0,...d,children:[(e||h)&&g.jsx(U,{tag:"span","aria-hidden":!0,children:h?g.jsx(Ik,{}):e}),g.jsx(Z,{variant:l==="S"?"pi":void 0,fontWeight:"bold",children:o}),t&&g.jsx(U,{tag:"span","aria-hidden":!0,children:t})]})}),Ek=yt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Ik=I(Op)`
  animation: ${Ek} 2s infinite linear;
  will-change: transform;
`,_k=I(U)`
  ${({theme:n,$size:e})=>{const t=n.sizes.button[e];if(typeof t=="string")return`height: ${t};`;const r=[];return Object.entries(t).forEach(([o,s])=>{if(s){if(o==="initial")r.push(`height: ${s};`);else if(o in n.breakpoints){const l=n.breakpoints[o];r.push(`${l} { height: ${s}; }`)}}}),r.join(`
`)}}
  text-decoration: none;
  ${Pg}

  &:hover {
    ${jg}
  }

  &:active {
    ${Lg}
  }

  &[aria-disabled='true'] {
    ${_g}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${n=>n.theme.transitions.backgroundColor},
      ${n=>n.theme.transitions.color},
      border-color ${n=>n.theme.motion.timings[200]} ${n=>n.theme.motion.easings.easeOutQuad};
  }
`,hc=y.forwardRef(({children:n,description:e,label:t,defaultOpen:r,open:o,onOpenChange:s,delayDuration:l=500,disableHoverableContent:h,...u},f)=>!t&&!e?n:g.jsxs(Ep,{defaultOpen:r,open:o,onOpenChange:s,delayDuration:l,disableHoverableContent:h,children:[g.jsx(Ip,{asChild:!0,children:n}),g.jsx(_p,{children:g.jsx(jk,{ref:f,sideOffset:8,...u,children:g.jsx(Z,{variant:"pi",fontWeight:"bold",children:t||e})})})]})),jk=I(jp)`
  background-color: ${n=>n.theme.colors.neutral900};
  color: ${n=>n.theme.colors.neutral0};
  padding-inline: ${n=>n.theme.spaces[2]};
  padding-block: ${n=>n.theme.spaces[2]};
  border-radius: ${n=>n.theme.borderRadius};
  z-index: ${n=>n.theme.zIndices.tooltip};
  will-change: opacity;
  transform-origin: var(--radix-tooltip-content-transform-origin);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${nt.fadeIn} ${n=>n.theme.motion.timings[200]}
      ${n=>n.theme.motion.easings.authenticMotion};
  }
`,ur=It(({label:n,background:e,children:t,disabled:r=!1,onClick:o,size:s="S",variant:l="tertiary",withTooltip:h=!0,type:u="button",...f},d)=>{const m=g.jsx(Qi,{"aria-disabled":r,background:r?"neutral150":e,tag:"button",display:"inline-flex",justifyContent:"center",hasRadius:!0,cursor:"pointer",...f,ref:d,$size:s,onClick:v=>{!r&&o&&o(v)},$variant:l,type:u,children:g.jsx(ao,{label:n,children:t})});return h?g.jsx(hc,{label:n,children:m}):m}),Qi=I(U)`
  text-decoration: none;

  ${n=>{switch(n.$size){case"XS":return q`
          padding-block: 0.7rem;
          padding-inline: 0.7rem;

          ${({theme:e})=>e.breakpoints.medium} {
            padding-block: 0.2rem;
            padding-inline: 0.2rem;
          }
        `;case"S":return q`
          padding-block: 1.1rem;
          padding-inline: 1.1rem;

          ${({theme:e})=>e.breakpoints.medium} {
            padding-block: 0.7rem;
            padding-inline: 0.7rem;
          }
        `;case"M":return q`
          padding-block: 1.1rem;
          padding-inline: 1.1rem;

          ${({theme:e})=>e.breakpoints.medium} {
            padding-block: 0.9rem;
            padding-inline: 0.9rem;
          }
        `;case"L":return q`
          padding-block: 1.5rem;
          padding-inline: 1.5rem;

          ${({theme:e})=>e.breakpoints.medium} {
            padding-block: 1.1rem;
            padding-inline: 1.1rem;
          }
        `}}}
  ${Pg}
  ${n=>n.$variant==="tertiary"?q`
          color: ${n.theme.colors.neutral500};
        `:""}

  &:hover {
    ${jg}
    ${n=>n.$variant==="tertiary"?q`
            color: ${n.theme.colors.neutral600};
          `:""}
  }

  &:active {
    ${Lg}
  }

  &[aria-disabled='true'] {
    ${_g}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${n=>n.theme.transitions.backgroundColor},
      ${n=>n.theme.transitions.color},
      border-color ${n=>n.theme.motion.timings[200]} ${n=>n.theme.motion.easings.easeOutQuad};
  }
`;I(U)`
  & ${Qi}:first-child {
    border-radius: ${({theme:n})=>`${n.borderRadius} 0 0 ${n.borderRadius}`};
  }

  & ${Qi}:last-child {
    border-radius: ${({theme:n})=>`0 ${n.borderRadius} ${n.borderRadius} 0`};
  }

  & ${Qi} {
    border-radius: 0;

    & + ${Qi} {
      border-left: none;
    }
  }
`;const Yl=It(({children:n,href:e,disabled:t=!1,startIcon:r,endIcon:o,isExternal:s=!1,color:l="primary600",activeColor:h="primary700",...u},f)=>g.jsxs(Lk,{ref:f,href:e,disabled:t,isExternal:s,$activeColor:h,$color:l,...u,children:[r,g.jsx(Z,{textColor:t?"neutral600":l,children:n}),o,e&&!o&&s&&g.jsx(Dp,{fill:l})]})),Lk=I(Mi)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:n})=>n.spaces[2]};
  pointer-events: ${({disabled:n})=>n?"none":void 0};

  svg {
    font-size: 1rem;

    path {
      fill: ${({disabled:n,$color:e,theme:t})=>n?t.colors.neutral600:t.colors[e||"primary600"]};
    }
  }

  &:hover {
    & > span {
      color: ${({theme:n,$color:e})=>n.colors[e||"primary600"]};
    }

    svg path {
      fill: ${({theme:n,$color:e})=>n.colors[e||"primary600"]};
    }
  }

  &:active {
    color: ${({theme:n,$activeColor:e})=>n.colors[e||"primary700"]};
  }

  ${Ys};
`,Pk=n=>{switch(n){case"danger":return"danger100";default:return"primary100"}},zk=(n,e)=>{switch(n){case"danger":return"danger700";default:return"neutral800"}},Sl=(n,e)=>{switch(n){case"danger":return e?"danger500":"danger700";default:return e?"neutral300":"neutral500"}},Bk=M$,Nk=y.forwardRef(({label:n,endIcon:e=g.jsx(Er,{width:"1.2rem",height:"1.2rem","aria-hidden":!0}),tag:t=Gl,icon:r,...o},s)=>{const l={...o,ref:s,type:"button"};return g.jsx(y$,{asChild:!0,disabled:l.disabled,children:t===ur?g.jsx(ur,{label:n,variant:"tertiary",...l,children:r}):g.jsx(Gl,{endIcon:e,variant:"ghost",...l})})}),Fk=y.forwardRef(({children:n,intersectionId:e,onCloseAutoFocus:t,popoverPlacement:r="bottom-start",...o},s)=>{const[l,h]=r.split("-");return g.jsx(Lp,{children:g.jsx(Wk,{align:h,side:l,loop:!0,onCloseAutoFocus:t,asChild:!0,children:g.jsxs(zg,{ref:s,direction:"column",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,marginTop:1,marginBottom:1,alignItems:"flex-start",position:"relative",overflow:"auto",...o,children:[n,g.jsx(H,{id:e,width:"100%",height:"1px"})]})})})}),zg=I(U)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  z-index: ${n=>n.theme.zIndices.popover};

  &::-webkit-scrollbar {
    display: none;
  }
`,Wk=I($$)`
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${n=>n.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${n=>n.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${nt.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${nt.slideDownIn};
      }
    }
  }
`,Bg=({theme:n,$variant:e})=>q`
  text-align: left;
  width: 100%;
  border-radius: ${n.borderRadius};
  padding: ${n.spaces[2]} ${n.spaces[4]};

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }

  &[data-highlighted] {
    background-color: ${n.colors[Pk(e)]};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }

  color: ${n.colors[zk(e)]};
`,Vk=I(U)`
  ${({theme:n,$variant:e})=>Bg({theme:n,$variant:e})}
`;I(Yl)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:n,color:e})=>Ts(n.colors,e,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;

    > svg {
      path {
        fill: ${({theme:n,$variant:e})=>n.colors[Sl(e,!1)]};
      }
    }
  }
  > svg {
    path {
      fill: ${({theme:n,$variant:e})=>n.colors[Sl(e,!1)]};
    }
  }
  &[aria-disabled='true'] {
    pointer-events: none;

    > svg {
      path {
        fill: ${({theme:n,$variant:e})=>n.colors[Sl(e,!0)]};
      }
    }
  }

  ${({theme:n,$variant:e})=>Bg({theme:n,$variant:e})}
`;const Hk=I(H)`
  /* Negative horizontal margin to compensate Menu.Content's padding */
  margin: ${({theme:n})=>n.spaces[1]} -${({theme:n})=>n.spaces[1]};
  width: calc(100% + ${({theme:n})=>n.spaces[2]});
  /* Hide separator if there's nothing above in the menu */
  &:first-child {
    display: none;
  }
`;y.forwardRef((n,e)=>g.jsx(C$,{...n,asChild:!0,children:g.jsx(Hk,{height:"1px",shrink:0,background:"neutral150",ref:e})}));y.forwardRef((n,e)=>g.jsx(S$,{asChild:!0,children:g.jsx(Uk,{ref:e,variant:"sigma",textColor:"neutral600",...n})}));const Uk=I(Z)`
  padding: ${({theme:n})=>n.spaces[2]} ${({theme:n})=>n.spaces[4]};
`;y.forwardRef(({disabled:n=!1,...e},t)=>g.jsx(k$,{asChild:!0,disabled:n,children:g.jsxs(qk,{ref:t,color:"neutral800",tag:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...e,children:[g.jsx(Z,{children:e.children}),g.jsx(Ih,{fill:"neutral500",height:"1.2rem",width:"1.2rem"})]})}));const qk=I(Vk)`
  &[data-state='open'] {
    background-color: ${({theme:n})=>n.colors.primary100};
  }
`;y.forwardRef((n,e)=>g.jsx(Lp,{children:g.jsx(A$,{sideOffset:8,asChild:!0,children:g.jsx(zg,{ref:e,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...n})})}));const Kk=Bk,Gk=Nk,Yk=Fk,Xk=y.forwardRef(({children:n,onOpen:e,onClose:t,popoverPlacement:r,onReachEnd:o,...s},l)=>{const h=y.useRef(null),u=Bt(l,h),f=y.useRef(null),[d,m]=y.useState(!1),v=k=>{o&&o(k)},x=k=>{k&&typeof e=="function"?e():!k&&typeof t=="function"&&t(),m(k)},w=xn(),S=`intersection-${di(w)}`;return wo(f,v,{selectorToWatch:`#${S}`,skipWhen:!d}),g.jsxs(Kk,{onOpenChange:x,children:[g.jsx(Gk,{ref:u,...s,children:s.label}),g.jsx(Yk,{ref:f,intersectionId:S,popoverPlacement:r,children:n})]})}),Jk=I(Xk)`
  padding: ${({theme:n})=>`${n.spaces[1]} ${n.spaces[2]}`};
  height: unset;

  :hover,
  :focus {
    background-color: ${({theme:n})=>n.colors.neutral200};
  }
`,Zk=y.forwardRef(({children:n,...e},t)=>g.jsx(Jk,{ref:t,endIcon:null,size:"S",...e,children:n}));Zk.displayName="CrumbSimpleMenu";const Ng=y.createContext({id:""}),Qk=()=>y.useContext(Ng);y.forwardRef(({id:n,...e},t)=>{const r=xn(n),o=y.useMemo(()=>({id:r}),[r]);return g.jsx(Ng.Provider,{value:o,children:g.jsx(H,{ref:t,id:n,tabIndex:0,hasRadius:!0,background:"neutral0",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",shadow:"tableShadow",tag:"article","aria-labelledby":`${r}-title`,...e})})});const e3=y.forwardRef(({position:n,...e},t)=>g.jsx(t3,{ref:t,$position:n,...e,direction:"row",gap:2})),t3=I(U)`
  position: absolute;
  top: ${({theme:n})=>n.spaces[3]};
  right: ${({$position:n,theme:e})=>{if(n==="end")return e.spaces[3]}};
  left: ${({$position:n,theme:e})=>{if(n==="start")return e.spaces[3]}};
`;I.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;I.div`
  display: flex;
  justify-content: center;
  height: ${({$size:n})=>n==="S"?"8.8rem":"16.4rem"};
  width: 100%;
  background: repeating-conic-gradient(${({theme:n})=>n.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({theme:n})=>n.borderRadius};
  border-top-right-radius: ${({theme:n})=>n.borderRadius};
`;I.div`
  margin-left: auto;
  flex-shrink: 0;
`;I(Rg)`
  margin-left: ${({theme:n})=>n.spaces[1]};
`;const n3=({fill:n,...e})=>{const{colors:t}=AC();return g.jsx(H,{tag:"svg",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:n?t[n]:void 0,...e,children:g.jsx("path",{d:"M29.0613 10.0613L13.0613 26.0613C12.9219 26.2011 12.7563 26.3121 12.574 26.3878C12.3917 26.4635 12.1962 26.5024 11.9988 26.5024C11.8013 26.5024 11.6059 26.4635 11.4235 26.3878C11.2412 26.3121 11.0756 26.2011 10.9363 26.0613L3.93626 19.0613C3.79673 18.9217 3.68605 18.7561 3.61053 18.5738C3.53502 18.3915 3.49615 18.1961 3.49615 17.9988C3.49615 17.8014 3.53502 17.606 3.61053 17.4237C3.68605 17.2414 3.79673 17.0758 3.93626 16.9363C4.07579 16.7967 4.24143 16.686 4.42374 16.6105C4.60604 16.535 4.80143 16.4962 4.99876 16.4962C5.19608 16.4962 5.39147 16.535 5.57378 16.6105C5.75608 16.686 5.92173 16.7967 6.06126 16.9363L12 22.875L26.9388 7.93876C27.2205 7.65697 27.6027 7.49866 28.0013 7.49866C28.3998 7.49866 28.782 7.65697 29.0638 7.93876C29.3455 8.22055 29.5039 8.60274 29.5039 9.00126C29.5039 9.39977 29.3455 9.78197 29.0638 10.0638L29.0613 10.0613Z"})})},mf=y.forwardRef(({defaultChecked:n,checked:e,onCheckedChange:t,...r},o)=>{const s=y.useRef(null),[l,h]=An({defaultProp:n,prop:e,onChange:t}),u=Bt(s,o);return g.jsx(r3,{ref:u,checked:l,onCheckedChange:h,...r,children:g.jsxs(i3,{forceMount:!0,children:[l===!0?g.jsx(n3,{width:"1.6rem",fill:"neutral0"}):null,l==="indeterminate"?g.jsx(T$,{fill:"neutral0"}):null]})})}),r3=I(R$)`
  background: ${n=>n.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  border-radius: ${n=>n.theme.borderRadius};
  border: 1px solid ${n=>n.theme.colors.neutral300};
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // this ensures the checkbox is always a square even in flex-containers.
  flex: 0 0 2rem;

  &[data-state='checked']:not([data-disabled]),
  &[data-state='indeterminate']:not([data-disabled]) {
    border: 1px solid ${n=>n.theme.colors.primary600};
    background-color: ${n=>n.theme.colors.primary600};
  }

  &[data-disabled] {
    background-color: ${n=>n.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: -1;
    min-width: 44px;
    min-height: 44px;
  }
`,i3=I(D$)`
  display: inline-flex;
  pointer-events: auto !important;
  width: 100%;
  height: 100%;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,cc=y.forwardRef(({children:n,...e},t)=>{const r=xn(e.id);return n?g.jsxs(U,{gap:2,children:[g.jsx(mf,{id:r,...e}),g.jsx(Z,{tag:"label",textColor:"neutral800",htmlFor:r,children:n})]}):g.jsx(mf,{ref:t,...e})});y.forwardRef((n,e)=>{const{id:t}=Qk();return g.jsx(e3,{position:"start",children:g.jsx(cc,{"aria-labelledby":`${t}-title`,...n,ref:e})})});I(H)`
  word-break: break-all;
`;I(U)`
  border-bottom: 1px solid ${({theme:n})=>n.colors.neutral150};
`;const $t={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",END:"End",HOME:"Home",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown"},o3=I(H)`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`,s3=I(U)`
  grid-area: slides;
`,vf=I(H)`
  grid-area: ${({$area:n})=>n};

  &:focus svg path,
  &:hover svg path {
    fill: ${({theme:n})=>n.colors.neutral900};
  }
`,a3=y.forwardRef(({actions:n,children:e,label:t,nextLabel:r,onNext:o,onPrevious:s,previousLabel:l,secondaryLabel:h,selectedSlide:u,...f},d)=>{const m=y.useRef(null),v=y.useRef(null),x=y.Children.map(e,(w,S)=>y.cloneElement(w,{selected:S===u}));return g.jsx(H,{ref:d,...f,onKeyDown:w=>{switch(w.key){case $t.RIGHT:{w.preventDefault(),v!=null&&v.current&&v.current.focus(),o&&o();break}case $t.LEFT:{w.preventDefault(),m!=null&&m.current&&m.current.focus(),s&&s();break}}},children:g.jsxs(H,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100",children:[g.jsxs(o3,{tag:"section","aria-roledescription":"carousel","aria-label":t,display:"grid",position:"relative",children:[x&&x.length>1&&g.jsxs(g.Fragment,{children:[g.jsx(vf,{tag:"button",onClick:s,$area:"startAction",ref:m,type:"button",children:g.jsx(ao,{label:l,children:g.jsx(Pp,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})}),g.jsx(vf,{tag:"button",onClick:o,$area:"endAction",ref:v,type:"button",children:g.jsx(ao,{label:r,children:g.jsx(Ih,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})})]}),g.jsx(s3,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%",overflow:"hidden",children:x}),n]}),h&&g.jsx(H,{paddingTop:2,paddingLeft:4,paddingRight:4,children:g.jsx(hc,{label:h,children:g.jsx(U,{justifyContent:"center",children:g.jsx(Z,{variant:"pi",textColor:"neutral600",ellipsis:!0,children:h})})})})]})})}),pr=(n="&")=>({theme:e,$hasError:t=!1})=>q`
    outline: none;
    box-shadow: none;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${n}:focus-within {
      border: 1px solid ${t?e.colors.danger600:e.colors.primary600};
      box-shadow: ${t?e.colors.danger600:e.colors.primary600} 0px 0px 0px 2px;
    }
  `,[l3,Xt]=ki("Field",{}),fi=y.forwardRef(({children:n,name:e,error:t=!1,hint:r,id:o,required:s=!1,...l},h)=>{const u=xn(o),[f,d]=y.useState();return g.jsx(l3,{name:e,id:u,error:t,hint:r,required:s,labelNode:f,setLabelNode:d,children:g.jsx(U,{direction:"column",alignItems:"stretch",gap:1,ref:h,...l,children:n})})}),Fg=y.forwardRef(({children:n,action:e,...t},r)=>{const{id:o,required:s,setLabelNode:l}=Xt("Label"),h=Bt(r,l);return n?g.jsxs(U,{alignItems:"center",children:[g.jsxs(h3,{ref:h,variant:"pi",textColor:"neutral800",fontWeight:"bold",...t,id:`${o}-label`,htmlFor:o,tag:"label",ellipsis:!0,children:[n,s&&g.jsx(Z,{"aria-hidden":!0,lineHeight:"1em",textColor:"danger600",children:"*"})]}),e&&g.jsx(c3,{marginLeft:1,children:e})]}):null}),h3=I(Z)`
  display: block;
`,c3=I(U)`
  line-height: 0;
  color: ${({theme:n})=>n.colors.neutral500};
`,uc=y.forwardRef(({endAction:n,startAction:e,disabled:t=!1,onChange:r,hasError:o,required:s,className:l,size:h="M",...u},f)=>{const{id:d,error:m,hint:v,name:x,required:w}=Xt("Input");let S;m?S=`${d}-error`:v&&(S=`${d}-hint`);const k=!!m,A=y.useRef(null),T=y.useRef(null),D=Bt(T,f),j=F=>{!t&&r&&r(F)};return y.useLayoutEffect(()=>{if(A.current&&T.current){const F=A.current.offsetWidth,B=T.current;if(B){const W=F+8+16;B.style.paddingRight=`${W}px`}}},[n]),g.jsxs(f3,{gap:2,justifyContent:"space-between",$hasError:k||o,$disabled:t,$size:h,$hasLeftAction:!!e,$hasRightAction:!!n,className:l,children:[e,g.jsx(u3,{id:d,name:x,ref:D,$size:h,"aria-describedby":S,"aria-invalid":k||o,"aria-disabled":t,disabled:t,"data-disabled":t?"":void 0,onChange:j,"aria-required":w||s,$hasLeftAction:!!e,$hasRightAction:!!n,...u}),n&&g.jsx(d3,{ref:A,children:n})]})}),u3=I.input`
  border: none;
  border-radius: ${({theme:n})=>n.borderRadius};
  cursor: ${n=>n["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:n})=>n.colors.neutral800};
  font-weight: 400;
  font-size: ${n=>n.theme.fontSizes[3]};
  line-height: 2.4rem;
  display: block;
  width: 100%;
  background: inherit;

  ${({theme:n})=>n.breakpoints.medium} {
    font-size: ${({theme:n})=>n.fontSizes[2]};
    line-height: 2.2rem;
  }

  &::placeholder {
    color: ${({theme:n})=>n.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${n=>{switch(n.$size){case"S":return q`
          padding-inline-start: ${n.$hasLeftAction?0:n.theme.spaces[4]};
          padding-inline-end: ${n.$hasRightAction?0:n.theme.spaces[4]};
          padding-block: ${n.theme.spaces[2]};

          ${({theme:e})=>e.breakpoints.medium} {
            padding-block: ${n.theme.spaces[1]};
          }
        `;default:return q`
          padding-inline-start: ${n.$hasLeftAction?0:n.theme.spaces[4]};
          padding-inline-end: ${n.$hasRightAction?0:n.theme.spaces[4]};
          padding-block: ${n.theme.spaces[3]};

          ${({theme:e})=>e.breakpoints.medium} {
            padding-block: ${n.theme.spaces[2]};
          }
        `}}}
`,d3=I(U)`
  position: absolute;
  right: ${({theme:n})=>n.spaces[4]};
  top: 50%;
  transform: translateY(-50%);
`,f3=I(U)`
  border: 1px solid ${({theme:n,$hasError:e})=>e?n.colors.danger600:n.colors.neutral200};
  border-radius: ${({theme:n})=>n.borderRadius};
  background: ${({theme:n})=>n.colors.neutral0};
  padding-inline-start: ${({$hasLeftAction:n,theme:e})=>n?e.spaces[4]:0};
  position: relative;

  ${pr()}
  ${({theme:n,$disabled:e})=>e?q`
          color: ${n.colors.neutral600};
          background: ${n.colors.neutral150};
        `:void 0};
`,p3=()=>{const{id:n,hint:e,error:t}=Xt("Hint");return!e||t?null:g.jsx(Z,{variant:"pi",tag:"p",id:`${n}-hint`,textColor:"neutral600",children:e})},g3=()=>{const{id:n,error:e}=Xt("Error");return!e||typeof e!="string"?null:g.jsx(Z,{variant:"pi",tag:"p",id:`${n}-error`,textColor:"danger600","data-strapi-field-error":!0,children:e})};y.forwardRef(({label:n,children:e,...t},r)=>g.jsx(m3,{justifyContent:"unset",background:"transparent",borderStyle:"none",...t,type:"button",tag:"button",ref:r,children:g.jsx(ao,{label:n,children:e})}));const m3=I(U)`
  font-size: 1.6rem;
  padding: 0;
`;y.forwardRef(({actions:n,children:e,error:t,hint:r,label:o,labelAction:s,nextLabel:l,onNext:h,onPrevious:u,previousLabel:f,required:d,secondaryLabel:m,selectedSlide:v,id:x,...w},S)=>{const k=xn(x);return g.jsx(fi,{hint:r,error:t,id:k,required:d,children:g.jsxs(U,{direction:"column",alignItems:"stretch",gap:1,children:[o&&g.jsx(Fg,{action:s,children:o}),g.jsx(a3,{ref:S,actions:n,label:o,nextLabel:l,onNext:h,onPrevious:u,previousLabel:f,secondaryLabel:m,selectedSlide:v,id:k,...w,children:e}),g.jsx(p3,{}),g.jsx(g3,{})]})})});I(H)`
  ${$g}
`;I(U)`
  display: ${({$selected:n})=>n?"flex":"none"};
`;const Wg=q`
  font-size: 1.6rem;
  line-height: 2.4rem;

  ${({theme:n})=>n.breakpoints.medium} {
    font-size: 1.4rem;
    line-height: 2.2rem;
  }
`,dc=({$size:n="M",$hasValue:e=!1,$hasClear:t=!1,theme:r})=>{switch(n){case"S":return q`
        padding-block: calc(
          ${e&&t?r.spaces[1]:r.spaces[2]} - 1px
        ); // 1px to compensate for the border

        ${r.breakpoints.medium} {
          padding-block: ${r.spaces[1]};
        }
      `;default:return q`
        padding-block: calc(
          ${e&&t?r.spaces[2]:r.spaces[3]} - 1px
        ); // 1px to compensate for the border

        ${r.breakpoints.medium} {
          padding-block: ${r.spaces[2]};
        }
      `}},Zs=y.forwardRef(({children:n,viewportRef:e,...t},r)=>g.jsxs(v3,{ref:r,...t,children:[g.jsx(b3,{ref:e,children:n}),g.jsx(bf,{orientation:"vertical",children:g.jsx(xf,{})}),g.jsx(bf,{orientation:"horizontal",children:g.jsx(xf,{})})]})),v3=I(O$)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`,b3=I(E$)`
  min-width: 100%;
`,bf=I(I$)`
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;

  &[data-orientation='vertical'] {
    width: 0.4rem;
    margin: 0.4rem;
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: 0.4rem;
    margin: 0.4rem;
  }
`,xf=I(_$)`
  position: relative;
  flex: 1;
  background-color: ${n=>n.theme.colors.neutral150};
  border-radius: 0.4rem;

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  @media (hover: none), (pointer: coarse) {
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      min-width: 44px;
      min-height: 44px;
    }
  }
`,x3="data:image/svg+xml,%3csvg%20width='63'%20height='63'%20viewBox='0%200%2063%2063'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42.5563%2011.9816C39.484%2010.3071%2035.8575%209.29097%2032.3354%209.13521C28.6443%208.92888%2024.8295%209.72318%2021.3336%2011.4129C20.9123%2011.5901%2020.5376%2011.8101%2020.1722%2012.0249L20.0108%2012.1179C19.8774%2012.1951%2019.7441%2012.2724%2019.608%2012.3536C19.3253%2012.5146%2019.0492%2012.6744%2018.7544%2012.8792C18.5463%2013.0329%2018.3395%2013.1759%2018.1301%2013.323C17.5658%2013.7208%2016.9868%2014.1317%2016.4983%2014.5979C14.8476%2015.9524%2013.5571%2017.6075%2012.6071%2018.9214C10.4365%2022.1566%209.08622%2025.9567%208.80702%2029.6143L8.7764%2030.1588C8.73328%2030.9196%208.68476%2031.7057%208.75353%2032.4555C8.76648%2032.6084%208.7661%2032.7638%208.77506%2032.914C8.78895%2033.229%208.80152%2033.5373%208.846%2033.8672L9.07396%2035.4221C9.09756%2035.5764%209.1198%2035.7413%209.1633%2035.9263L9.65919%2037.9272L10.138%2039.2823C10.2729%2039.6673%2010.4158%2040.0751%2010.6%2040.43C12.0292%2043.637%2014.1425%2046.4578%2016.7063%2048.585C19.0508%2050.5296%2021.824%2052.0023%2024.7491%2052.8452L26.2371%2053.2376C26.3781%2053.2693%2026.4926%2053.2889%2026.6031%2053.3058L26.7775%2053.3311C27.0052%2053.3636%2027.2195%2053.3986%2027.4445%2053.435C27.8598%2053.5076%2028.2672%2053.5748%2028.7079%2053.6183L30.5641%2053.7229C30.9516%2053.7249%2031.3352%2053.7068%2031.7081%2053.6874C31.9039%2053.681%2032.0984%2053.6681%2032.3288%2053.662C34.5253%2053.4772%2036.5106%2053.0634%2038.0516%2052.4652C38.1769%2052.4171%2038.3008%2052.3796%2038.4234%2052.3355C38.6727%2052.2499%2038.9259%2052.167%2039.1432%2052.0599L40.8591%2051.2626L42.5702%2050.266C42.9009%2050.0682%2043.0205%2049.6414%2042.8282%2049.2984C42.632%2048.9526%2042.2034%2048.8308%2041.8634%2049.0166L40.1792%2049.9218L38.4995%2050.6224C38.3169%2050.6953%2038.121%2050.7534%2037.9224%2050.8155C37.7838%2050.8489%2037.6518%2050.8983%2037.5012%2050.9408C36.0711%2051.435%2034.2445%2051.7425%2032.244%2051.8346C32.0442%2051.8383%2031.8471%2051.8379%2031.654%2051.8403C31.3051%2051.8414%2030.9602%2051.8451%2030.6392%2051.8305L28.9177%2051.6725C28.5476%2051.619%2028.1695%2051.5427%2027.7848%2051.4678C27.5639%2051.4167%2027.3376%2051.3737%2027.1299%2051.3374L26.9529%2051.2987C26.8704%2051.2834%2026.7772%2051.2667%2026.7333%2051.2543L25.3466%2050.8322C22.7651%2049.9789%2020.33%2048.5729%2018.2942%2046.7557C16.1056%2044.7951%2014.3339%2042.2335%2013.1742%2039.3582C12.0276%2036.6013%2011.5988%2033.2792%2011.9716%2030.0076C12.3145%2027.0213%2013.3948%2024.1635%2015.1858%2021.5083C15.3034%2021.3339%2015.421%2021.1596%2015.5212%2021.0196C16.4309%2019.8688%2017.5408%2018.5589%2018.9483%2017.496C19.3367%2017.1525%2019.7862%2016.856%2020.2611%2016.5478C20.4878%2016.4009%2020.7079%2016.2553%2020.8907%2016.1306C21.0974%2016.0048%2021.3188%2015.8831%2021.5348%2015.7694C21.6761%2015.6975%2021.8162%2015.619%2021.9388%2015.5576L22.1002%2015.4646C22.4002%2015.3037%2022.6749%2015.1546%2022.9908%2015.039L24.1186%2014.5715C24.3399%2014.4844%2024.5718%2014.4159%2024.7997%2014.3447C24.953%2014.2982%2025.0982%2014.2635%2025.2635%2014.2078C25.786%2014.0182%2026.3283%2013.9112%2026.9105%2013.7965C27.117%2013.7571%2027.3302%2013.7163%2027.5608%2013.6585C27.7553%2013.611%2027.9737%2013.5969%2028.2082%2013.5762C28.364%2013.5603%2028.5172%2013.5483%2028.6318%2013.5333C28.7876%2013.5173%2028.9342%2013.5066%2029.0927%2013.4867C29.3285%2013.4555%2029.5456%2013.4347%2029.7494%2013.4337C30.0237%2013.44%2030.2994%2013.4357%2030.5777%2013.4274C31.0811%2013.421%2031.5579%2013.4197%2032.0318%2013.4914C34.9664%2013.7352%2037.7144%2014.6085%2040.2052%2016.0868C42.3489%2017.3655%2044.2716%2019.1525%2045.7607%2021.264C47.0255%2023.0628%2047.9756%2025.0528%2048.4928%2027.0393C48.572%2027.3176%2048.6299%2027.5931%2048.6839%2027.8659C48.7154%2028.0428%2048.7563%2028.2145%2048.7892%2028.3636C48.8037%2028.4541%2048.8208%2028.5406%2048.8445%2028.6258C48.8749%2028.7443%2048.8986%2028.864%2048.9116%2028.9651L48.9793%2029.6047C48.9922%2029.7748%2049.0132%2029.9331%2049.0301%2030.0887C49.0668%2030.3268%2049.0889%2030.5608%2049.0964%2030.7561L49.1083%2031.9001C49.1312%2032.3307%2049.089%2032.7116%2049.0522%2033.0673C49.0384%2033.2598%2049.0126%2033.4443%2049.0123%2033.5824C48.9961%2033.6926%2048.9918%2033.7935%2048.9836%2033.8917C48.9753%2034.0072%2048.9724%2034.1148%2048.9414%2034.2554L48.5449%2036.3059C48.3134%2037.8623%2049.3793%2039.3365%2050.9488%2039.5822C52.0417%2039.7601%2053.1536%2039.2819%2053.7711%2038.3664C54.0063%2038.0176%2054.1604%2037.6257%2054.2227%2037.2064L54.5217%2035.2574C54.5514%2035.0756%2054.572%2034.83%2054.5846%2034.5791L54.6028%2034.2338C54.6098%2034.0598%2054.6223%2033.8779%2054.6347%2033.6788C54.6734%2033.1052%2054.7163%2032.4479%2054.6619%2031.8058L54.5867%2030.4289C54.5622%2030.0952%2054.5097%2029.76%2054.4559%2029.4181C54.431%2029.2572%2054.4048%2029.0896%2054.3826%2028.9074L54.2687%2028.104C54.2332%2027.9244%2054.1804%2027.7273%2054.1329%2027.5396L54.0643%2027.2454C54.0195%2027.071%2053.9773%2026.8927%2053.9338%2026.7076C53.8455%2026.3309%2053.7479%2025.9422%2053.613%2025.5571C52.84%2023.0292%2051.5383%2020.5194%2049.8338%2018.2799C47.8544%2015.682%2045.3333%2013.5087%2042.5563%2011.9816Z'%20fill='%234945FF'/%3e%3c/svg%3e",w3=y.forwardRef(({children:n,small:e=!1,...t},r)=>g.jsxs("div",{role:"alert","aria-live":"assertive",ref:r,...t,children:[g.jsx(Ai,{children:n}),g.jsx($3,{src:x3,"aria-hidden":!0,$small:e})]})),y3=yt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,$3=I.img`
  animation: ${y3} 1s infinite linear;
  will-change: transform;
  ${({$small:n,theme:e})=>n&&`width: ${e.spaces[6]}; height: ${e.spaces[6]};`}
`;function ii(n,e,t){let r=t.initialDeps??[],o;function s(){var l,h,u,f;let d;t.key&&(l=t.debug)!=null&&l.call(t)&&(d=Date.now());const m=n();if(!(m.length!==r.length||m.some((x,w)=>r[w]!==x)))return o;r=m;let v;if(t.key&&(h=t.debug)!=null&&h.call(t)&&(v=Date.now()),o=e(...m),t.key&&(u=t.debug)!=null&&u.call(t)){const x=Math.round((Date.now()-d)*100)/100,w=Math.round((Date.now()-v)*100)/100,S=w/16,k=(A,T)=>{for(A=String(A);A.length<T;)A=" "+A;return A};console.info(`%c⏱ ${k(w,5)} /${k(x,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*S,120))}deg 100% 31%);`,t?.key)}return(f=t?.onChange)==null||f.call(t,o),o}return s.updateDeps=l=>{r=l},s}function wf(n,e){if(n===void 0)throw new Error("Unexpected undefined");return n}const C3=(n,e)=>Math.abs(n-e)<1.01,S3=(n,e,t)=>{let r;return function(...o){n.clearTimeout(r),r=n.setTimeout(()=>e.apply(this,o),t)}},yf=n=>{const{offsetWidth:e,offsetHeight:t}=n;return{width:e,height:t}},k3=n=>n,A3=n=>{const e=Math.max(n.startIndex-n.overscan,0),t=Math.min(n.endIndex+n.overscan,n.count-1),r=[];for(let o=e;o<=t;o++)r.push(o);return r},M3=(n,e)=>{const t=n.scrollElement;if(!t)return;const r=n.targetWindow;if(!r)return;const o=l=>{const{width:h,height:u}=l;e({width:Math.round(h),height:Math.round(u)})};if(o(yf(t)),!r.ResizeObserver)return()=>{};const s=new r.ResizeObserver(l=>{const h=()=>{const u=l[0];if(u!=null&&u.borderBoxSize){const f=u.borderBoxSize[0];if(f){o({width:f.inlineSize,height:f.blockSize});return}}o(yf(t))};n.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(h):h()});return s.observe(t,{box:"border-box"}),()=>{s.unobserve(t)}},$f={passive:!0},Cf=typeof window>"u"?!0:"onscrollend"in window,T3=(n,e)=>{const t=n.scrollElement;if(!t)return;const r=n.targetWindow;if(!r)return;let o=0;const s=n.options.useScrollendEvent&&Cf?()=>{}:S3(r,()=>{e(o,!1)},n.options.isScrollingResetDelay),l=d=>()=>{const{horizontal:m,isRtl:v}=n.options;o=m?t.scrollLeft*(v&&-1||1):t.scrollTop,s(),e(o,d)},h=l(!0),u=l(!1);u(),t.addEventListener("scroll",h,$f);const f=n.options.useScrollendEvent&&Cf;return f&&t.addEventListener("scrollend",u,$f),()=>{t.removeEventListener("scroll",h),f&&t.removeEventListener("scrollend",u)}},R3=(n,e,t)=>{if(e!=null&&e.borderBoxSize){const r=e.borderBoxSize[0];if(r)return Math.round(r[t.options.horizontal?"inlineSize":"blockSize"])}return n[t.options.horizontal?"offsetWidth":"offsetHeight"]},D3=(n,{adjustments:e=0,behavior:t},r)=>{var o,s;const l=n+e;(s=(o=r.scrollElement)==null?void 0:o.scrollTo)==null||s.call(o,{[r.options.horizontal?"left":"top"]:l,behavior:t})};class O3{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let t=null;const r=()=>t||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:t=new this.targetWindow.ResizeObserver(o=>{o.forEach(s=>{const l=()=>{this._measureElement(s.target,s)};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(l):l()})}));return{disconnect:()=>{var o;(o=r())==null||o.disconnect(),t=null},observe:o=>{var s;return(s=r())==null?void 0:s.observe(o,{box:"border-box"})},unobserve:o=>{var s;return(s=r())==null?void 0:s.unobserve(o)}}})(),this.range=null,this.setOptions=t=>{Object.entries(t).forEach(([r,o])=>{typeof o>"u"&&delete t[r]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:k3,rangeExtractor:A3,onChange:()=>{},measureElement:R3,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,...t}},this.notify=t=>{var r,o;(o=(r=this.options).onChange)==null||o.call(r,this,t)},this.maybeNotify=ii(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),t=>{this.notify(t)},{key:"maybeNotify",debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(t=>t()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var t;const r=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==r){if(this.cleanup(),!r){this.maybeNotify();return}this.scrollElement=r,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((t=this.scrollElement)==null?void 0:t.window)??null,this.elementsCache.forEach(o=>{this.observer.observe(o)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,o=>{this.scrollRect=o,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(o,s)=>{this.scrollAdjustments=0,this.scrollDirection=s?this.getScrollOffset()<o?"forward":"backward":null,this.scrollOffset=o,this.isScrolling=s,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(t,r)=>{const o=new Map,s=new Map;for(let l=r-1;l>=0;l--){const h=t[l];if(o.has(h.lane))continue;const u=s.get(h.lane);if(u==null||h.end>u.end?s.set(h.lane,h):h.end<u.end&&o.set(h.lane,!0),o.size===this.options.lanes)break}return s.size===this.options.lanes?Array.from(s.values()).sort((l,h)=>l.end===h.end?l.index-h.index:l.end-h.end)[0]:void 0},this.getMeasurementOptions=ii(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(t,r,o,s,l)=>(this.pendingMeasuredCacheIndexes=[],{count:t,paddingStart:r,scrollMargin:o,getItemKey:s,enabled:l}),{key:!1}),this.getMeasurements=ii(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:t,paddingStart:r,scrollMargin:o,getItemKey:s,enabled:l},h)=>{if(!l)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(d=>{this.itemSizeCache.set(d.key,d.size)}));const u=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const f=this.measurementsCache.slice(0,u);for(let d=u;d<t;d++){const m=s(d),v=this.options.lanes===1?f[d-1]:this.getFurthestMeasurement(f,d),x=v?v.end+this.options.gap:r+o,w=h.get(m),S=typeof w=="number"?w:this.options.estimateSize(d),k=x+S,A=v?v.lane:d%this.options.lanes;f[d]={index:d,start:x,size:S,end:k,key:m,lane:A}}return this.measurementsCache=f,f},{key:"getMeasurements",debug:()=>this.options.debug}),this.calculateRange=ii(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(t,r,o,s)=>this.range=t.length>0&&r>0?E3({measurements:t,outerSize:r,scrollOffset:o,lanes:s}):null,{key:"calculateRange",debug:()=>this.options.debug}),this.getVirtualIndexes=ii(()=>{let t=null,r=null;const o=this.calculateRange();return o&&(t=o.startIndex,r=o.endIndex),this.maybeNotify.updateDeps([this.isScrolling,t,r]),[this.options.rangeExtractor,this.options.overscan,this.options.count,t,r]},(t,r,o,s,l)=>s===null||l===null?[]:t({startIndex:s,endIndex:l,overscan:r,count:o}),{key:"getVirtualIndexes",debug:()=>this.options.debug}),this.indexFromElement=t=>{const r=this.options.indexAttribute,o=t.getAttribute(r);return o?parseInt(o,10):(console.warn(`Missing attribute name '${r}={index}' on measured element.`),-1)},this._measureElement=(t,r)=>{const o=this.indexFromElement(t),s=this.measurementsCache[o];if(!s)return;const l=s.key,h=this.elementsCache.get(l);h!==t&&(h&&this.observer.unobserve(h),this.observer.observe(t),this.elementsCache.set(l,t)),t.isConnected&&this.resizeItem(o,this.options.measureElement(t,r,this))},this.resizeItem=(t,r)=>{const o=this.measurementsCache[t];if(!o)return;const s=this.itemSizeCache.get(o.key)??o.size,l=r-s;l!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(o,l,this):o.start<this.getScrollOffset()+this.scrollAdjustments)&&(this.options.debug&&console.info("correction",l),this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=l,behavior:void 0})),this.pendingMeasuredCacheIndexes.push(o.index),this.itemSizeCache=new Map(this.itemSizeCache.set(o.key,r)),this.notify(!1))},this.measureElement=t=>{if(!t){this.elementsCache.forEach((r,o)=>{r.isConnected||(this.observer.unobserve(r),this.elementsCache.delete(o))});return}this._measureElement(t,void 0)},this.getVirtualItems=ii(()=>[this.getVirtualIndexes(),this.getMeasurements()],(t,r)=>{const o=[];for(let s=0,l=t.length;s<l;s++){const h=t[s],u=r[h];o.push(u)}return o},{key:"getVirtualItems",debug:()=>this.options.debug}),this.getVirtualItemForOffset=t=>{const r=this.getMeasurements();if(r.length!==0)return wf(r[Vg(0,r.length-1,o=>wf(r[o]).start,t)])},this.getOffsetForAlignment=(t,r,o=0)=>{const s=this.getSize(),l=this.getScrollOffset();r==="auto"&&(r=t>=l+s?"end":"start"),r==="center"?t+=(o-s)/2:r==="end"&&(t-=s);const h=this.getTotalSize()+this.options.scrollMargin-s;return Math.max(Math.min(h,t),0)},this.getOffsetForIndex=(t,r="auto")=>{t=Math.max(0,Math.min(t,this.options.count-1));const o=this.measurementsCache[t];if(!o)return;const s=this.getSize(),l=this.getScrollOffset();if(r==="auto")if(o.end>=l+s-this.options.scrollPaddingEnd)r="end";else if(o.start<=l+this.options.scrollPaddingStart)r="start";else return[l,r];const h=r==="end"?o.end+this.options.scrollPaddingEnd:o.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(h,r,o.size),r]},this.isDynamicMode=()=>this.elementsCache.size>0,this.scrollToOffset=(t,{align:r="start",behavior:o}={})=>{o==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(t,r),{adjustments:void 0,behavior:o})},this.scrollToIndex=(t,{align:r="auto",behavior:o}={})=>{o==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),t=Math.max(0,Math.min(t,this.options.count-1));let s=0;const l=10,h=f=>{if(!this.targetWindow)return;const d=this.getOffsetForIndex(t,f);if(!d){console.warn("Failed to get offset for index:",t);return}const[m,v]=d;this._scrollToOffset(m,{adjustments:void 0,behavior:o}),this.targetWindow.requestAnimationFrame(()=>{const x=this.getScrollOffset(),w=this.getOffsetForIndex(t,v);if(!w){console.warn("Failed to get offset for index:",t);return}C3(w[0],x)||u(v)})},u=f=>{this.targetWindow&&(s++,s<l?(this.options.debug&&console.info("Schedule retry",s,l),this.targetWindow.requestAnimationFrame(()=>h(f))):console.warn(`Failed to scroll to index ${t} after ${l} attempts.`))};h(r)},this.scrollBy=(t,{behavior:r}={})=>{r==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+t,{adjustments:void 0,behavior:r})},this.getTotalSize=()=>{var t;const r=this.getMeasurements();let o;if(r.length===0)o=this.options.paddingStart;else if(this.options.lanes===1)o=((t=r[r.length-1])==null?void 0:t.end)??0;else{const s=Array(this.options.lanes).fill(null);let l=r.length-1;for(;l>=0&&s.some(h=>h===null);){const h=r[l];s[h.lane]===null&&(s[h.lane]=h.end),l--}o=Math.max(...s.filter(h=>h!==null))}return Math.max(o-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(t,{adjustments:r,behavior:o})=>{this.options.scrollToFn(t,{behavior:o,adjustments:r},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(e)}}const Vg=(n,e,t,r)=>{for(;n<=e;){const o=(n+e)/2|0,s=t(o);if(s<r)n=o+1;else if(s>r)e=o-1;else return o}return n>0?n-1:0};function E3({measurements:n,outerSize:e,scrollOffset:t,lanes:r}){const o=n.length-1,s=u=>n[u].start;if(n.length<=r)return{startIndex:0,endIndex:o};let l=Vg(0,o,s,t),h=l;if(r===1)for(;h<o&&n[h].end<t+e;)h++;else if(r>1){const u=Array(r).fill(0);for(;h<o&&u.some(d=>d<t+e);){const d=n[h];u[d.lane]=d.end,h++}const f=Array(r).fill(t+e);for(;l>=0&&f.some(d=>d>=t);){const d=n[l];f[d.lane]=d.start,l--}l=Math.max(0,l-l%r),h=Math.min(o,h+(r-1-h%r))}return{startIndex:l,endIndex:h}}const Sf=typeof document<"u"?y.useLayoutEffect:y.useEffect;function I3(n){const e=y.useReducer(()=>({}),{})[1],t={...n,onChange:(o,s)=>{var l;s?$i.flushSync(e):e(),(l=n.onChange)==null||l.call(n,o,s)}},[r]=y.useState(()=>new O3(t));return r.setOptions(t),Sf(()=>r._didMount(),[]),Sf(()=>r._willUpdate()),r}function _3(n){return I3({observeElementRect:M3,observeElementOffset:T3,scrollToFn:D3,...n})}It((n,e)=>{const{gap:t=0,gridCols:r=12,...o}=n;return g.jsx(j3,{ref:e,$gap:t,$gridCols:r,...o})});const j3=I(H)`
  display: grid;
  grid-template-columns: repeat(${({$gridCols:n})=>n}, 1fr);
  ${({theme:n,$gap:e})=>ui({gap:e},n)}
`;It(({col:n,s:e,xs:t,m:r,...o},s)=>g.jsx(L3,{ref:s,$col:n,$s:e,$xs:t,$m:r,...o}));const L3=I(U)`
  grid-column: span ${({$xs:n,$col:e})=>n??e??12};
  max-width: 100%;

  ${({theme:n})=>n.breakpoints.small} {
    grid-column: span ${({$s:n,$xs:e,$col:t})=>n??e??t??12};
  }

  ${({theme:n})=>n.breakpoints.medium} {
    grid-column: span ${({$m:n,$s:e,$xs:t,$col:r})=>n??e??t??r??12};
  }

  ${({theme:n})=>n.breakpoints.large} {
    grid-column: span ${({$col:n,$m:e,$s:t,$xs:r})=>n??e??t??r??12};
  }
`,P3=({children:n,estimatedItemSize:e=40,overscan:t=10,itemCount:r,renderItem:o})=>{const s=y.useRef(null),[l,h]=y.useState(!1),u=y.useRef(!0);y.useEffect(()=>(u.current=!0,typeof y.startTransition=="function"&&y.startTransition(()=>{u.current&&h(!0)}),()=>{u.current=!1}),[]);const f=y.useMemo(()=>o&&r!==void 0?[]:y.Children.toArray(n),[n,o,r]),d=r??f.length,m=_3({count:d,getScrollElement:()=>s.current??null,estimateSize:y.useCallback(()=>e,[e]),overscan:t,scrollMargin:0,measureElement:void 0,lanes:1}),v=l&&u.current?m.getVirtualItems():[];return l?g.jsx(H,{ref:s,height:`${m.getTotalSize()>0?m.getTotalSize():0}px`,width:"100%",position:"relative","data-testid":"virtualized-list",style:{willChange:"transform"},children:v.map(x=>{const w=o?o(x.index):f[x.index];return g.jsx(H,{"data-index":x.index,style:{position:"absolute",top:0,left:0,width:"100%",transform:`translate3d(0, ${x.start}px, 0)`},children:w},x.key)})}):g.jsx(H,{ref:s,height:"40px",width:"100%",position:"relative"})},z3=y.forwardRef(({allowCustomValue:n,autocomplete:e,children:t,className:r,clearLabel:o="Clear",creatable:s=!1,creatableDisabled:l=!1,creatableStartIcon:h,createMessage:u=Je=>`Create "${Je}"`,defaultFilterValue:f,defaultTextValue:d,defaultOpen:m=!1,open:v,onOpenChange:x,disabled:w=!1,hasError:S,id:k,filterValue:A,hasMoreItems:T=!1,isPrintableCharacter:D,loading:j=!1,loadingMessage:F="Loading content...",name:B,noOptionsMessage:W=()=>"No results found",onChange:re,onClear:ae,onCreateOption:ie,onFilterValueChange:$e,onInputChange:he,onTextValueChange:ne,onLoadMore:ue,placeholder:Te="Select or enter a value",required:Re=!1,size:oe="M",startIcon:se,textValue:Me,value:Se,...Ee},Ie)=>{const[Je,Ze]=An({prop:v,defaultProp:m,onChange:x}),[Pe,st]=An({prop:Me,defaultProp:n&&!d?Se:d,onChange:ne}),[J,de]=An({prop:A,defaultProp:f,onChange:$e}),pe=y.useRef(null),me=y.useRef(null),xe=Bt(me,Ie),Ae=y.useRef(null),ct=pt=>{ae&&!w&&(st(""),de(""),ae(pt),me.current.focus())},Fe=pt=>{Ze(pt)},fe=pt=>{st(pt)},At=pt=>{de(pt)},ft=pt=>{he&&he(pt)},Ao=pt=>{re&&re(pt)},ia=pt=>{ue&&T&&!j&&ue(pt)},Yn=()=>{ie&&Pe&&s!=="visible"?ie(Pe):ie&&s==="visible"&&(ie(),Ze(!1))},Nt=xn(),Xn=`intersection-${di(Nt)}`;wo(pe,ia,{selectorToWatch:`#${Xn}`,skipWhen:!Je});const{error:Jn,...Fr}=Xt("Combobox"),gr=!!Jn||S,Di=Fr.id??k,mr=Fr.name??B,Zn=Fr.required||Re,Wr=y.Children.toArray(t).filter(Boolean).length,Oi=!(Pe&&Pe!==""||J&&J!=="")&&Wr>100;let vr;return Jn?vr=`${Di}-error`:Fr.hint&&(vr=`${Di}-hint`),g.jsxs(gn.Root,{autocomplete:e||(s===!0?"list":"both"),onOpenChange:Fe,open:Je,onTextValueChange:fe,textValue:Pe,allowCustomValue:!!s||n,disabled:w,required:Zn,value:Se,onValueChange:Ao,filterValue:J,onFilterValueChange:At,isPrintableCharacter:D,visible:s==="visible",children:[g.jsxs(B3,{$hasError:gr,$size:oe,$hasTextValue:!!Pe,$hasClear:!!(Pe&&ae),className:r,children:[g.jsxs(U,{flex:"1",tag:"span",gap:3,children:[se?g.jsx(U,{flex:"0 0 1.6rem",tag:"span","aria-hidden":!0,children:se}):null,g.jsx(N3,{placeholder:Te,id:Di,"aria-invalid":!!Jn,onChange:ft,ref:xe,name:mr,"aria-describedby":vr,...Ee})]}),g.jsxs(U,{tag:"span",gap:3,children:[Pe&&ae?g.jsx(ur,{size:"XS",variant:"ghost",onClick:ct,"aria-disabled":w,"aria-label":o,label:o,ref:Ae,children:g.jsx(Ci,{})}):null,g.jsx(F3,{children:g.jsx(Er,{fill:"neutral500"})})]})]}),g.jsx(gn.Portal,{children:g.jsxs(W3,{sideOffset:4,children:[g.jsx(Zs,{children:g.jsx(gn.Viewport,{ref:pe,children:g.jsxs(H,{padding:1,children:[Oi?g.jsx(P3,{itemCount:Wr,children:t}):t,s!==!0&&!j?g.jsx(gn.NoValueFound,{asChild:!0,children:g.jsx(Xl,{$hasHover:!1,children:g.jsx(Z,{children:W(Pe??"")})})}):null,j?g.jsx(U,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:g.jsx(w3,{small:!0,children:F})}):null,g.jsx(H,{id:Xn,width:"100%",height:"1px"})]})})}),s?g.jsx(V3,{onPointerUp:Yn,onClick:Yn,disabled:l,asChild:!0,children:g.jsx(Xl,{children:g.jsxs(U,{gap:2,children:[h&&g.jsx(H,{tag:"span","aria-hidden":!0,display:"inline-flex",children:h}),g.jsx(Z,{children:u(Pe??"")})]})})}):null]})})]})}),B3=I(gn.Trigger)`
  position: relative;
  border: 1px solid ${({theme:n,$hasError:e})=>e?n.colors.danger600:n.colors.neutral200};
  border-radius: ${({theme:n})=>n.borderRadius};
  background: ${({theme:n})=>n.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:n})=>n.spaces[4]};
  padding-inline-start: ${({theme:n})=>n.spaces[4]};
  padding-inline-end: ${({theme:n})=>n.spaces[3]};
  ${({$size:n,$hasTextValue:e,$hasClear:t,theme:r})=>dc({$size:n||"M",$hasValue:e||!1,$hasClear:t||!1,theme:r})}

  &[data-disabled] {
    color: ${({theme:n})=>n.colors.neutral600};
    background: ${({theme:n})=>n.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:n,$hasError:e})=>pr()({theme:n,$hasError:e})};
`,N3=I(gn.TextInput)`
  width: 100%;
  ${Wg}
  color: ${({theme:n})=>n.colors.neutral800};
  padding: 0;
  border: none;
  background-color: transparent;
  text-overflow: ellipsis;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({theme:n})=>n.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,F3=I(gn.Icon)`
  border: none;
  background: transparent;
  padding: 0;
  color: ${({theme:n})=>n.colors.neutral600};
  display: flex;

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,W3=I(gn.Content)`
  background: ${({theme:n})=>n.colors.neutral0};
  box-shadow: ${({theme:n})=>n.shadows.filterShadow};
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:n})=>n.zIndices.popover};

  &:focus-visible {
    outline: ${({theme:n})=>`2px solid ${n.colors.primary600}`};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${n=>n.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${n=>n.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${nt.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${nt.slideDownIn};
      }
    }
  }
`,V3=I(gn.CreateItem)`
  && {
    border-top: 1px solid ${({theme:n})=>n.colors.neutral150};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background: ${({theme:n})=>n.colors.neutral0};
    cursor: pointer;
    padding: ${({theme:n})=>n.spaces[1]};
    position: sticky;
    bottom: 0;
    left: 0;
  }
  &&:hover,
  &&[data-highlighted] {
    background: ${({theme:n})=>n.colors.neutral0};
  }
  &&[data-disabled] {
    color: ${({theme:n})=>n.colors.neutral600};
    cursor: not-allowed;
  }
  &&[data-disabled] svg {
    fill: ${({theme:n})=>n.colors.neutral300};
  }
  && > div {
    padding: ${({theme:n})=>n.spaces[2]} ${({theme:n})=>n.spaces[4]};
  }
  && > div:hover,
  &&[data-highlighted] > div {
    background-color: ${({theme:n})=>n.colors.primary100};
    border-radius: ${({theme:n})=>n.borderRadius};
  }
  &&[data-disabled] > div {
    background-color: inherit;
  }
`,H3=y.forwardRef(({children:n,value:e,disabled:t,textValue:r,...o},s)=>g.jsx(gn.ComboboxItem,{asChild:!0,value:e,disabled:t,textValue:r,children:g.jsx(Xl,{ref:s,...o,children:g.jsx(gn.ItemText,{asChild:!0,children:g.jsx(Z,{children:n})})})})),Xl=I.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:n})=>n.spaces[2]} ${({theme:n})=>n.spaces[4]};
  background-color: ${({theme:n})=>n.colors.neutral0};
  border-radius: ${({theme:n})=>n.borderRadius};
  user-select: none;

  &[data-state='checked'] {
    background-color: ${({theme:n})=>n.colors.primary100};
    color: ${({theme:n})=>n.colors.primary600};
    font-weight: bold;
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:n,$hasHover:e=!0})=>e?n.colors.primary100:n.colors.neutral0};
  }

  &[data-highlighted] {
    color: ${({theme:n})=>n.colors.primary600};
    font-weight: bold;
  }
`,Hg=(n,e)=>`${n}${Math.floor(e*255).toString(16).padStart(2,"0")}`;y.forwardRef((n,e)=>g.jsx(j$,{...n,asChild:!0,ref:e}));y.forwardRef((n,e)=>g.jsx(L$,{children:g.jsx(U3,{children:g.jsx(q3,{ref:e,...n})})}));const U3=I(P$)`
  background: ${n=>Hg(n.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${n=>n.theme.zIndices.overlay};
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${nt.overlayFadeIn} ${n=>n.theme.motion.timings[200]}
      ${n=>n.theme.motion.easings.authenticMotion};
  }
`,q3=I(z$)`
  max-width: 42rem;
  height: min-content;
  width: calc(100% - ${({theme:n})=>n.spaces[8]});
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${n=>n.theme.borderRadius};
  background-color: ${n=>n.theme.colors.neutral0};
  box-shadow: ${n=>n.theme.shadows.popupShadow};
  z-index: ${n=>n.theme.zIndices.modal};

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${n=>n.theme.motion.timings[200]};
      animation-timing-function: ${n=>n.theme.motion.easings.authenticMotion};
      animation-name: ${nt.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${n=>n.theme.motion.timings[120]};
      animation-timing-function: ${n=>n.theme.motion.easings.easeOutQuad};
      animation-name: ${nt.modalPopOut};
    }
  }
`;y.forwardRef(({children:n,...e},t)=>g.jsx(B$,{asChild:!0,children:g.jsx(K3,{tag:"h2",variant:"beta",ref:t,padding:6,fontWeight:"bold",...e,children:n})}));const K3=I(Z)`
  display: flex;
  justify-content: center;
  border-bottom: solid 1px ${n=>n.theme.colors.neutral150};
`;y.forwardRef(({children:n,icon:e,...t},r)=>g.jsx(U,{ref:r,gap:2,direction:"column",paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,...t,children:typeof n=="string"?g.jsxs(g.Fragment,{children:[e?y.cloneElement(e,{width:24,height:24}):null,g.jsx(G3,{children:n})]}):n}));const G3=y.forwardRef((n,e)=>g.jsx(N$,{asChild:!0,children:g.jsx(Z,{ref:e,variant:"omega",...n,tag:"p"})}));y.forwardRef((n,e)=>g.jsx(Y3,{ref:e,gap:2,padding:4,justifyContent:"space-between",...n,tag:"footer"}));const Y3=I(U)`
  border-top: solid 1px ${n=>n.theme.colors.neutral150};
  flex: 1;
`;y.forwardRef((n,e)=>g.jsx(F$,{...n,asChild:!0,ref:e}));y.forwardRef((n,e)=>g.jsx(W$,{...n,asChild:!0,ref:e}));function Nn(n,e){const t=y.useRef(null);return e&&t.current&&X3(e,t.current)&&(e=t.current),t.current=e??null,y.useMemo(()=>new MC(n,e),[n,e])}function X3(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(const o of t)if(e[o]!==n[o])return!1;return!0}V$`
${q`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
    /* Sets 1rem === 10px */
    font-size: 62.5%;
  }

  body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    color: ${({theme:n})=>n.colors.neutral800};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    padding: 0;
    font: inherit;
  }

  button {
    border: unset;
    background: unset;
    padding: unset;
    margin: unset;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    font: unset;
  }

  #root {
    isolation: isolate;
  }

  ol,
  ul {
    list-style: none;
    padding: unset;
    margin: unset;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *:focus-visible {
    outline: 2px solid ${({theme:n})=>n.colors.primary600};
    outline-offset: 2px;
  }

  *:has(> :disabled:not(button)) {
    cursor: not-allowed !important;
  }

  [aria-disabled='true']:not(button) {
    cursor: not-allowed !important;
  }

  /* Focusing the button with a mouse, touch, or stylus will show a subtle drop shadow. */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  .lock-body-scroll {
    height: 100vh;
    overflow-y: hidden;
  }
`}
`;const kf="en-EN",J3=()=>typeof navigator>"u"?kf:navigator.language?navigator.language:kf,[sM,Qs]=ki("StrapiDesignSystem",{locale:J3()}),Z3=X$,Ug=y.forwardRef(({container:n=(r=>(r=globalThis?.document)==null?void 0:r.body)(),...e},t)=>n?$i.createPortal(g.jsx(H,{ref:t,...e}),n):null);Ug.displayName="Portal";const Q3=y.forwardRef(({onClear:n,clearLabel:e="Clear",startIcon:t,disabled:r,hasError:o,children:s,id:l,size:h="M",withTags:u,...f},d)=>{const m=y.useRef(null),v=S=>{n&&!r&&(n(S),m.current.focus())},{labelNode:x}=Xt("SelectTrigger"),w=Bt(m,d);return g.jsx(bn.Trigger,{asChild:!0,children:g.jsxs(e5,{"aria-disabled":r,$hasError:o,ref:w,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:r?"neutral150":"neutral0",gap:4,cursor:"default","aria-labelledby":x?`${l}-label`:void 0,$size:h,$withTags:u,$hasClear:!!n,...f,children:[g.jsxs(U,{flex:"1",tag:"span",gap:3,overflow:"hidden",children:[t&&g.jsx(U,{tag:"span","aria-hidden":!0,children:t}),s]}),g.jsxs(U,{tag:"span",gap:3,children:[n?g.jsx(ur,{size:"XS",variant:"ghost",onClick:v,"aria-disabled":r,"aria-label":e,label:e,children:g.jsx(Ci,{})}):null,g.jsx(t5,{children:g.jsx(Er,{})})]})]})})}),e5=I(U)`
  border: 1px solid ${({theme:n,$hasError:e})=>e?n.colors.danger600:n.colors.neutral200};
  padding-inline-start: ${({theme:n})=>n.spaces[4]};
  padding-inline-end: ${({theme:n})=>n.spaces[3]};

  ${({$size:n,$hasClear:e,$withTags:t,theme:r})=>t?q`
        padding-inline-start: calc(${r.spaces[2]} - 1px);
        padding-block: calc(${r.spaces[2]} - 1px);

        ${r.breakpoints.medium} {
          padding-inline-start: 0.3rem;
          padding-block: 0.3rem;
        }
      `:dc({$size:n||"M",$hasValue:e,$hasClear:e,theme:r})}
  cursor: pointer;

  &[aria-disabled='true'] {
    color: ${n=>n.theme.colors.neutral500};
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:n,$hasError:e})=>pr()({theme:n,$hasError:e})};
`,t5=I(bn.Icon)`
  display: flex;
  & > svg {
    fill: ${({theme:n})=>n.colors.neutral500};
  }
`,n5=y.forwardRef(({children:n,placeholder:e,withTags:t,...r},o)=>g.jsx(r5,{ref:o,ellipsis:!0,...r,children:g.jsx(i5,{placeholder:e,$withTags:t,children:n})})),r5=I(Z)`
  flex: 1;
  min-height: 2.4rem;

  ${({theme:n})=>n.breakpoints.medium} {
    min-height: 2.2rem;
  }
`,i5=I(bn.Value)`
  ${({$withTags:n})=>n?q`
          display: flex;
          flex-wrap: wrap;
          gap: ${({theme:e})=>e.spaces[1]};
        `:null};
`,o5=y.forwardRef((n,e)=>g.jsx(s5,{ref:e,...n,children:g.jsx(Zs,{children:n.children})})),s5=I(bn.Content)`
  background: ${({theme:n})=>n.colors.neutral0};
  box-shadow: ${({theme:n})=>n.shadows.filterShadow};
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};
  min-width: var(--radix-select-trigger-width);
  max-height: 15.6rem;
  z-index: ${({theme:n})=>n.zIndices.popover};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${n=>n.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${n=>n.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${nt.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${nt.slideDownIn};
      }
    }
  }
`,a5=I(bn.Viewport)`
  padding: ${({theme:n})=>n.spaces[1]};
`,l5=y.forwardRef((n,e)=>g.jsx(c5,{ref:e,...n})),h5=q`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  border-radius: ${n=>n.theme.borderRadius};
  padding: ${n=>`${n.theme.spaces[2]} ${n.theme.spaces[4]}`};
  padding-left: ${({theme:n})=>n.spaces[4]};
  background-color: ${({theme:n})=>n.colors.neutral0};
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spaces[2]};
  white-space: nowrap;
  user-select: none;
  color: ${({theme:n})=>n.colors.neutral800};

  &:focus-visible {
    outline: none;
    background-color: ${({theme:n})=>n.colors.primary100};
    cursor: pointer;
  }
`,c5=I(bn.Item)`
  ${h5}

  &:hover {
    background-color: ${({theme:n})=>n.colors.primary100};
    cursor: pointer;
  }
`,qg=bn.Root,Kg=Q3,Gg=n5,Yg=bn.Portal,Xg=o5,Jg=a5,fc=l5,Zg=bn.ItemIndicator,Qg=bn.ItemText,u5=bn.Group,Af=y.forwardRef(({children:n,clearLabel:e="Clear",customizeContent:t,disabled:r,hasError:o,id:s,name:l,onChange:h,onClear:u,onCloseAutoFocus:f,onReachEnd:d,placeholder:m,required:v,size:x,startIcon:w,value:S,...k},A)=>{const[T,D]=y.useState(),[j,F]=y.useState(!1),B=Se=>{F(Se)},W=Se=>{u&&u(Se),h||D("")},re=Se=>{h?h(typeof S=="number"?Number(Se):Se):D(Se)},ae=y.useRef(null),ie=xn(),$e=`intersection-${di(ie)}`;wo(ae,Se=>{d&&d(Se)},{selectorToWatch:`#${$e}`,skipWhen:!j});const{error:he,required:ne,...ue}=Xt("SingleSelect"),Te=!!he||o,Re=ue.id??s,oe=ue.name??l;let se;he?se=`${Re}-error`:ue.hint&&(se=`${Re}-hint`);const Me=(typeof S<"u"&&S!==null?S.toString():T)??"";return g.jsxs(qg,{onOpenChange:B,disabled:r,required:ne??v,onValueChange:re,value:Me,...k,children:[g.jsx(Kg,{ref:A,id:Re,name:oe,startIcon:w,hasError:Te,disabled:r,clearLabel:e,onClear:Me&&u?W:void 0,"aria-label":k["aria-label"],"aria-describedby":se??k["aria-describedby"],size:x,children:g.jsx(Gg,{placeholder:m,textColor:Me?"neutral800":"neutral600",children:Me&&t?t(Me):void 0})}),g.jsx(Yg,{children:g.jsx(Xg,{position:"popper",sideOffset:4,onCloseAutoFocus:f,children:g.jsxs(Jg,{ref:ae,children:[n,g.jsx(H,{id:$e,width:"100%",height:"1px"})]})})})]})}),Mf=y.forwardRef(({value:n,startIcon:e,children:t,...r},o)=>g.jsxs(fc,{ref:o,value:n.toString(),...r,children:[e&&g.jsx(U,{tag:"span","aria-hidden":!0,children:e}),g.jsx(Z,{lineHeight:"20px",width:"100%",children:g.jsx(Qg,{children:t})})]})),d5=200,Tf=15,[f5,Ti]=ki("DatePicker"),p5=y.forwardRef(({calendarLabel:n,className:e,initialDate:t,locale:r,maxDate:o,minDate:s,monthSelectLabel:l="Month",onChange:h,value:u,yearSelectLabel:f="Year",hasError:d,id:m,name:v,disabled:x=!1,required:w=!1,onClear:S,clearLabel:k="Clear",size:A="M",...T},D)=>{const j=Pl(),F=Qs("DatePicker"),B=r??F.locale,W=Nn(B,{day:"2-digit",month:"2-digit",year:"numeric"}),[re,ae]=y.useState(!1),[ie,$e]=y.useState(null),[he,ne]=y.useState(null),[ue,Te]=y.useState(null),[Re,oe]=y.useState(),[se,Me]=An({defaultProp:t?Mr(t):void 0,prop:u?Mr(u):void 0,onChange(fe){h&&h(fe?.toDate(j))}}),[Se,Ee]=y.useMemo(()=>{const fe=t?Mr(t):_h("UTC"),At=s?Mr(s):fe.set({day:1,month:1,year:fe.year-d5});let ft=o?Mr(o):fe.set({day:31,month:12,year:fe.year+Tf});return ft.compare(At)<0&&(ft=At.set({day:31,month:12,year:At.year+Tf})),[At,ft]},[s,o,t]),[Ie,Je]=y.useState(g5({currentValue:se,minDate:Se,maxDate:Ee})),Ze=xn(),Pe=y.useRef(null),st=fe=>{S&&!x&&(oe(""),Me(void 0),S(fe),he?.focus())},J=y.useCallback(fe=>{fe&&se&&Je(se),ae(fe)},[se]);cr(()=>{if(u){const fe=Mr(u);oe(W.format(fe.toDate(j))),Je(fe)}else oe("")},[u,W,j]),cr(()=>{if(t&&Re===void 0){const fe=Mr(t);oe(W.format(fe.toDate(j)))}},[t,Re,W,j]);const{error:de,...pe}=Xt("Combobox"),me=!!de||d,xe=pe.id??m,Ae=pe.name??v,ct=pe.required||w;let Fe;return de?Fe=`${xe}-error`:pe.hint&&(Fe=`${xe}-hint`),g.jsxs(f5,{calendarDate:Ie,content:ue,contentId:Ze,disabled:x,locale:B,minDate:Se,maxDate:Ee,open:re,onCalendarDateChange:Je,onContentChange:Te,onOpenChange:J,onTextInputChange:ne,onTextValueChange:oe,onTriggerChange:$e,onValueChange:Me,onClear:S,required:ct,textInput:he,textValue:Re,timeZone:j,trigger:ie,value:se,children:[g.jsxs(v5,{className:e,hasError:me,size:A,children:[g.jsx(H$,{fill:"neutral500","aria-hidden":!0}),g.jsx(w5,{ref:D,"aria-describedby":Fe,id:xe,name:Ae,...T}),Re&&S?g.jsx(ur,{size:"XS",variant:"ghost",onClick:st,"aria-disabled":x,"aria-label":k,label:k,ref:Pe,children:g.jsx(Ci,{})}):null]}),g.jsx(Ug,{children:g.jsx(S5,{label:n,children:g.jsx(O5,{monthSelectLabel:l,yearSelectLabel:f})})})]})}),Rf=n=>!!n.match(/^[^a-zA-Z]*$/),g5=({currentValue:n,minDate:e,maxDate:t})=>{const r=_h("UTC");return n||(zl(e,r)===e&&Bl(t,r)===t?r:zl(e,r)===r?e:Bl(t,r)===r?t:r)},m5="DatePickerTrigger",v5=y.forwardRef(({hasError:n,size:e,...t},r)=>{const o=Ti(m5),s=Bt(r,h=>o.onTriggerChange(h)),l=()=>{o.disabled||o.onOpenChange(!0)};return g.jsx(Dh,{asChild:!0,trapped:o.open,onMountAutoFocus:h=>{h.preventDefault()},onUnmountAutoFocus:h=>{var u;(u=document.getSelection())==null||u.empty(),h.preventDefault()},children:g.jsx(b5,{ref:s,$hasError:n,$hasTextValue:!!o.textValue,$size:e,$hasOnClear:!!o.onClear,...t,hasRadius:!0,gap:3,overflow:"hidden",background:o.disabled?"neutral150":"neutral0",onClick:Or(t.onClick,()=>{var h;(h=o.textInput)==null||h.focus()}),onPointerDown:Or(t.onPointerDown,h=>{var u;const f=h.target;f.hasPointerCapture(h.pointerId)&&f.releasePointerCapture(h.pointerId),(f.closest("button")??f.closest("div"))===h.currentTarget&&h.button===0&&h.ctrlKey===!1&&(l(),(u=o.textInput)==null||u.focus())})})})}),b5=I(U)`
  min-width: ${({$hasOnClear:n})=>n?"160px":"130px"};
  border: 1px solid ${({theme:n,$hasError:e})=>e?n.colors.danger600:n.colors.neutral200};
  padding-inline: ${({theme:n})=>n.spaces[3]};
  ${({$size:n,$hasTextValue:e,$hasOnClear:t,theme:r})=>dc({$size:n||"M",$hasValue:e||!1,$hasClear:t||!1,theme:r})}

  & > svg {
    flex: 1 0 auto;
  }

  &[data-disabled] {
    color: ${({theme:n})=>n.colors.neutral600};
    background: ${({theme:n})=>n.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:n,$hasError:e})=>pr()({theme:n,$hasError:e})};
`,x5="DatePickerTextInput",w5=y.forwardRef(({placeholder:n,...e},t)=>{const r=Ti(x5),{onTextValueChange:o,textValue:s,onTextInputChange:l,onOpenChange:h,disabled:u,locale:f}=r,d=Bt(t,A=>l(A)),m=()=>{u||h(!0)},v=Nn(f,{year:"numeric",month:"2-digit",day:"2-digit"}),[x,w,S]=y.useMemo(()=>{var A;const T=v.formatToParts(new Date),D=T.filter(B=>B.type==="year"||B.type==="month"||B.type==="day"),j=D.map(B=>{switch(B.type){case"day":return"DD";case"month":return"MM";case"year":return"YYYY";default:return""}}),F=((A=T.find(B=>B.type==="literal"))==null?void 0:A.value)??"";return[j,F,D]},[v]),k=x.map(A=>`\\d{${A.length}}`).join(`\\${w}`);return g.jsx($5,{role:"combobox",type:"text",inputMode:"numeric",ref:d,"aria-autocomplete":"none","aria-controls":r.contentId,"aria-disabled":r.disabled,"aria-expanded":r.open,"aria-required":r.required,"aria-haspopup":"dialog","data-state":r.open?"open":"closed",disabled:u,"data-disabled":u?"":void 0,pattern:k,placeholder:n??x.join(w),...e,value:s??"",onBlur:Or(e.onBlur,()=>{if(!r.textValue){r.onValueChange(void 0);return}r.onTextValueChange(v.format(r.calendarDate.toDate(r.timeZone))),r.onValueChange(r.calendarDate)}),onChange:Or(e.onChange,A=>{if(Rf(A.target.value)){const T=A.target.value.split(w),[D,j,F]=S.map((ne,ue)=>{const Te=T[ue];return{...ne,value:Te}}).sort((ne,ue)=>ne.type==="year"?1:ue.type==="year"?-1:ne.type==="month"?1:ue.type==="month"?-1:0).map(ne=>ne.value),B=r.calendarDate.year;let W=r.calendarDate.year;if(F){const ne=F.length===1?`0${F}`:F;W=F.length<3?Number(`${B}`.slice(0,4-ne.length)+ne):Number(ne)}F&&F.length<3&&W>r.maxDate.year&&(W-=100);const re=r.calendarDate.set({year:W}),ae=re.calendar.getMonthsInYear(re),ie=re.set({month:j&&Number(j)<=ae?Number(j):void 0}),$e=ie.calendar.getDaysInMonth(ie),he=ie.set({day:D&&Number(D)<=$e?Number(D):void 0});r.onCalendarDateChange(y5(he,r.minDate,r.maxDate)),r.onTextValueChange(A.target.value)}}),onKeyDown:Or(e.onKeyDown,A=>{if(!r.open&&(Rf(A.key)||["ArrowDown","Backspace"].includes(A.key)))m();else if(["Tab"].includes(A.key)&&r.open)A.preventDefault();else if(["Escape"].includes(A.key))r.open?r.onOpenChange(!1):(r.onValueChange(void 0),r.onTextValueChange("")),A.preventDefault();else if(r.open&&["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(A.key))switch(A.preventDefault(),A.key){case"ArrowDown":{const T=r.calendarDate.add({weeks:1});if(r.maxDate&&T.compare(r.maxDate)>0)return;r.onCalendarDateChange(T);return}case"ArrowRight":{const T=r.calendarDate.add({days:1});if(r.maxDate&&T.compare(r.maxDate)>0)return;r.onCalendarDateChange(T);return}case"ArrowUp":{const T=r.calendarDate.subtract({weeks:1});if(r.minDate&&T.compare(r.minDate)<0)return;r.onCalendarDateChange(T);return}case"ArrowLeft":{const T=r.calendarDate.subtract({days:1});if(r.minDate&&T.compare(r.minDate)<0)return;r.onCalendarDateChange(T)}}else r.open&&["Enter"].includes(A.key)&&(A.preventDefault(),o(v.format(r.calendarDate.toDate(r.timeZone))),r.onValueChange(r.calendarDate),r.onOpenChange(!1))})})});function y5(n,e,t){return e&&(n=Bl(n,e)),t&&(n=zl(n,t)),n}const $5=I.input`
  width: 100%;
  ${Wg}
  color: ${({theme:n})=>n.colors.neutral800};
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({theme:n})=>n.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,C5="DatePickerContent",S5=y.forwardRef((n,e)=>{const t=Ti(C5),[r,o]=y.useState(!1);return y.useEffect(()=>{t.open&&!r&&o(!0)},[t.open,r]),!t.open&&!r||!t.open?null:g.jsx(A5,{...n,ref:e})}),k5="DatePickerContent",A5=y.forwardRef((n,e)=>{const{label:t="Choose date",...r}=n,{onOpenChange:o,...s}=Ti(k5),{x:l,y:h,refs:u,strategy:f,placement:d}=U$({strategy:"fixed",placement:"bottom-start",middleware:[K$({mainAxis:4}),G$(),Y$()],elements:{reference:s.trigger},whileElementsMounted:q$});y.useEffect(()=>{const v=()=>{o(!1)};return window.addEventListener("blur",v),window.addEventListener("resize",v),()=>{window.removeEventListener("blur",v),window.removeEventListener("resize",v)}},[o]);const m=Bt(e,v=>s.onContentChange(v),u.setFloating);return Oh(),g.jsx(Eh,{allowPinchZoom:!0,children:g.jsx(Z3,{asChild:!0,onFocusOutside:v=>{v.preventDefault()},onDismiss:()=>{o(!1)},children:g.jsx(M5,{ref:m,"data-state":s.open?"open":"closed","data-side":d.includes("top")?"top":"bottom",onContextMenu:v=>v.preventDefault(),id:s.contentId,role:"dialog","aria-modal":"true","aria-label":t,style:{left:l,top:h,position:f},hasRadius:!0,background:"neutral0",padding:1,...r})})})}),M5=I(H)`
  box-shadow: ${({theme:n})=>n.shadows.filterShadow};
  z-index: ${({theme:n})=>n.zIndices.popover};
  border: 1px solid ${({theme:n})=>n.colors.neutral150};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${n=>n.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${n=>n.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${nt.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${nt.slideDownIn};
      }
    }
  }
`,T5="DatePickerCalendar",[R5,D5]=ki("DateFormatters"),O5=y.forwardRef(({monthSelectLabel:n,yearSelectLabel:e,...t},r)=>{const{locale:o,timeZone:s,minDate:l,maxDate:h,calendarDate:u,onCalendarDateChange:f}=Ti(T5),d=J$(u),m=y.useMemo(()=>{const B=l.year,W=h.year;return[...Array(W-B+1).keys()].map(re=>(B+re).toString())},[l,h]),v=Nn(o,{month:"long"}),x=y.useMemo(()=>[...Array(u.calendar.getMonthsInYear(u)).keys()].map(B=>v.format(u.set({month:B+1}).toDate(s))),[u,v,s]),w=Nn(o,{weekday:"short"}),S=y.useMemo(()=>{const B=zp(_h(s),o);return[...new Array(7).keys()].map(W=>{const re=B.add({days:W}).toDate(s);return w.format(re)})},[s,o,w]),k=Nn(o,{weekday:"long",day:"numeric",month:"long",year:"numeric"}),A=Nn(o,{day:"numeric",calendar:u.calendar.identifier}),T=Nn(o,{day:"2-digit",month:"2-digit",year:"numeric"}),D=B=>{if(typeof B=="number")return;const W=u.set({month:x.indexOf(B)+1});f(W)},j=B=>{if(typeof B=="number")return;const W=u.set({year:parseInt(B,10)});f(W)},F=E5(d,o);return g.jsx(R5,{dateFormatter:k,cellDateFormatter:A,textValueFormatter:T,children:g.jsxs(U,{ref:r,direction:"column",alignItems:"stretch",padding:4,...t,children:[g.jsxs(I5,{justifyContent:"flex-start",paddingBottom:4,paddingLeft:2,paddingRight:2,gap:2,children:[g.jsx(fi,{children:g.jsx(Af,{"aria-label":n,value:x[u.month-1],onChange:D,children:x.map(B=>g.jsx(Mf,{value:B,children:B},B))})}),g.jsx(fi,{children:g.jsx(Af,{value:u.year.toString(),"aria-label":e,onChange:j,children:m.map(B=>g.jsx(Mf,{value:B,children:B},B))})})]}),g.jsxs("table",{role:"grid",children:[g.jsx("thead",{"aria-hidden":!0,children:g.jsx("tr",{"aria-rowindex":0,children:S.map((B,W)=>g.jsx(_5,{"aria-colindex":W,children:B},B))})}),g.jsx("tbody",{children:[...new Array(6).keys()].map(B=>g.jsx("tr",{"aria-rowindex":B+2,children:F(B).map((W,re)=>W?g.jsx(P5,{"aria-colindex":re+1,date:W,startDate:d,disabled:l.compare(W)>0||W.compare(h)>0},W.toString()):g.jsx(em,{"aria-colindex":re+1},re+1))},B))})]})]})})}),E5=(n,e)=>t=>{let r=n.add({weeks:t});const o=[];r=zp(r,e);const s=Z$(r,e);for(let l=0;l<s;l++)o.push(null);for(;o.length<7;){o.push(r);const l=r.add({days:1});if(Bp(r,l))break;r=l}for(;o.length<7;)o.push(null);return o},I5=I(U)`
  div[role='combobox'] {
    border: 1px solid transparent;
    background: transparent;
    font-weight: ${n=>n.theme.fontWeights.bold};

    svg {
      fill: ${({theme:n})=>n.colors.neutral500};
    }

    &:hover {
      background-color: ${({theme:n})=>n.colors.neutral100};
    }
  }
`,_5=y.forwardRef(({children:n,...e},t)=>g.jsx(j5,{tag:"th",role:"gridcell",ref:t,...e,height:"2.4rem",width:"3.2rem",children:g.jsx(Z,{variant:"pi",fontWeight:"bold",color:"neutral800",children:n.slice(0,2)})})),j5=I(H)`
  border-radius: ${({theme:n})=>n.borderRadius};
  text-transform: capitalize;
`,L5="DatePickerCalendarCell",P5=y.forwardRef(({date:n,startDate:e,disabled:t,...r},o)=>{const{timeZone:s,calendarDate:l,onValueChange:h,onOpenChange:u,onTextValueChange:f,onCalendarDateChange:d}=Ti(L5),{dateFormatter:m,cellDateFormatter:v,textValueFormatter:x}=D5("DatePickerCalendarCell"),w=Bp(l,n),S=y.useMemo(()=>m.format(n.toDate(s)),[m,n,s]),k=y.useMemo(()=>v.formatToParts(n.toDate(s)).find(j=>j.type==="day").value,[v,n,s]),A=Q$(e),T=n.compare(e)<0||n.compare(A)>0;let D="neutral900";return w?D="primary600":T&&(D="neutral600"),g.jsx(em,{tag:"td",role:"gridcell",ref:o,"aria-selected":w,...r,hasRadius:!0,"aria-label":S,tabIndex:w?0:-1,background:w?"primary100":"neutral0",cursor:"pointer",onPointerDown:Or(r.onPointerDown,j=>{j.preventDefault(),d(n),h(n),f(x.format(n.toDate(s))),u(!1)}),"aria-disabled":t,children:g.jsx(Z,{variant:"pi",textColor:D,children:k})})}),em=I(H)`
  text-align: center;
  padding: 0.7rem;
  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px !important;
  &[aria-disabled='true'] {
    pointer-events: none;
    opacity: 0.5;
  }

  &[aria-disabled='false'] {
    &:hover {
      background: ${({theme:n})=>n.colors.primary100};
      color: ${({theme:n})=>n.colors.primary600};
    }
  }
`,Mr=n=>{const e=n.toISOString(),t=eC(e,"UTC");return tC(t)},z5=y.memo(p5),kl=n=>!!n.match(/^[^a-zA-Z]*$/);function B5(n=""){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const N5=I(z3)`
  min-width: ${({onClear:n})=>n?"160px":"130px"};
`,F5=y.forwardRef(({step:n=15,value:e,defaultValue:t,onChange:r,...o},s)=>{const l=Qs("TimePicker"),[h,u]=y.useState(""),[f,d]=An({prop:e,defaultProp:t,onChange:r}),m=Nn(l.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),v=y.useMemo(()=>{const D=m.formatToParts(new Date),{value:j}=D.find(F=>F.type==="literal");return j},[m]),x=y.useMemo(()=>{const D=60/n;return[...Array(24).keys()].flatMap(j=>[...Array(D).keys()].map(F=>m.format(new Date(0,0,0,j,F*n))))},[n,m]),w=D=>{(!D||kl(D))&&u(D)},S=D=>{const[j,F]=D.split(v);if(!j&&!F)return;const B=Number(j??"0"),W=Number(F??"0");if(!(B>23||W>59))return m.format(new Date(0,0,0,B,W))},k=D=>{const j=S(D.target.value);j?(u(j),d(j)):u(f)},A=D=>{if(typeof D<"u"){const j=S(D);d(j)}else d(D)};y.useEffect(()=>{const D=typeof e>"u"?"":e;kl(D)&&u(D)},[e,u]);const T=`\\d{2}${B5(v)}\\d{2}`;return g.jsx(N5,{...o,ref:s,value:f,onChange:A,isPrintableCharacter:kl,allowCustomValue:!0,placeholder:`--${v}--`,autocomplete:"none",startIcon:g.jsx(nC,{fill:"neutral500"}),inputMode:"numeric",pattern:T,textValue:h,onTextValueChange:w,onBlur:k,children:x.map(D=>g.jsx(H3,{value:D,children:D},D))})});y.forwardRef(({clearLabel:n="clear",dateLabel:e="Choose date",timeLabel:t="Choose time",disabled:r=!1,hasError:o,onChange:s,onClear:l,required:h=!1,step:u,value:f,initialDate:d,size:m,...v},x)=>{const w=y.useRef(null),[S,k]=y.useState(!1),A=f?Gi(f,!1):void 0,[T,D]=An({defaultProp:d?Gi(d,!1):void 0,prop:S?void 0:A,onChange(oe){s&&s(oe?.toDate(Pl()))}}),j=Qs("DateTimePicker"),F=Nn(j.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),B=T?F.format(T.toDate(Pl())):"",W=y.useRef(f);cr(()=>{S&&T&&D(void 0)},[S,T,D]),cr(()=>{const oe=W.current;f==null&&oe!=null&&T&&D(void 0),S&&f!==oe&&k(!1),W.current=f},[f,T,S,D,k]),cr(()=>{S&&T===void 0&&f==null&&k(!1)},[S,T,f,k]);const re=oe=>{let se=oe?Gi(oe):void 0;if(B&&se){const[Me,Se]=B.split(":");se=se.set({hour:parseInt(Me,10),minute:parseInt(Se,10)})}D(se)},ae=oe=>{if(!oe)return;const[se,Me]=oe.split(":"),Se=T?T.set({hour:parseInt(se,10),minute:parseInt(Me,10)}):Gi(new Date).set({hour:parseInt(se,10),minute:parseInt(Me,10)});D(Se)},ie=oe=>{oe.preventDefault(),k(!0),l&&l(oe)},$e=()=>{const oe=T?T.set({hour:0,minute:0}):Gi(new Date);D(oe)},he=Bt(w,x),{error:ne,id:ue,labelNode:Te}=Xt("DateTimePicker"),Re=!!ne||o;return g.jsxs(U,{"aria-labelledby":Te?`${ue}-label`:void 0,role:"group",flex:"1",gap:1,wrap:"wrap",children:[g.jsx(fi,{flex:"1",children:g.jsx(z5,{...v,hasError:Re,size:m,value:T?.toDate("UTC"),onChange:re,required:h,onClear:l?ie:void 0,clearLabel:`${n} date`,disabled:r,ref:he,"aria-label":e})}),g.jsx(fi,{flex:"1",children:g.jsx(F5,{size:m,hasError:Re,value:B,onChange:ae,onClear:l&&B!==void 0&&B!=="00:00"?$e:void 0,clearLabel:`${n} time`,required:h,disabled:r,step:u,"aria-label":t})})]})});const Gi=(n,e=!0)=>{const t=n.toISOString();let r=rC(t);return e&&(r=r.set({hour:0,minute:0})),iC(r)},W5=y.forwardRef((n,e)=>g.jsx(V5,{ref:e,background:"neutral150",...n,"data-orientation":"horizontal",role:"separator",tag:"div"})),V5=I(H)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
`,H5=I(H)`
  svg {
    height: 8.8rem;
  }
`;y.forwardRef(({icon:n,content:e,action:t,hasRadius:r=!0,shadow:o="tableShadow"},s)=>g.jsxs(U,{ref:s,alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:r,shadow:o,children:[n?g.jsx(H5,{paddingBottom:6,"aria-hidden":!0,children:n}):null,g.jsx(H,{paddingBottom:4,children:g.jsx(Z,{variant:"delta",tag:"p",textAlign:"center",textColor:"neutral600",children:e})}),t]}));let Jl=[],tm=[];(()=>{let n="lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(e=>e?parseInt(e,36):1);for(let e=0,t=0;e<n.length;e++)(e%2?tm:Jl).push(t=t+n[e])})();function U5(n){if(n<768)return!1;for(let e=0,t=Jl.length;;){let r=e+t>>1;if(n<Jl[r])t=r;else if(n>=tm[r])e=r+1;else return!0;if(e==t)return!1}}function Df(n){return n>=127462&&n<=127487}const Of=8205;function q5(n,e,t=!0,r=!0){return(t?nm:K5)(n,e,r)}function nm(n,e,t){if(e==n.length)return e;e&&rm(n.charCodeAt(e))&&im(n.charCodeAt(e-1))&&e--;let r=Al(n,e);for(e+=Ef(r);e<n.length;){let o=Al(n,e);if(r==Of||o==Of||t&&U5(o))e+=Ef(o),r=o;else if(Df(o)){let s=0,l=e-2;for(;l>=0&&Df(Al(n,l));)s++,l-=2;if(s%2==0)break;e+=2}else break}return e}function K5(n,e,t){for(;e>0;){let r=nm(n,e-2,t);if(r<e)return r;e--}return 0}function Al(n,e){let t=n.charCodeAt(e);if(!im(t)||e+1==n.length)return t;let r=n.charCodeAt(e+1);return rm(r)?(t-55296<<10)+(r-56320)+65536:t}function rm(n){return n>=56320&&n<57344}function im(n){return n>=55296&&n<56320}function Ef(n){return n<65536?1:2}class Oe{lineAt(e){if(e<0||e>this.length)throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);return this.lineInner(e,!1,1,0)}line(e){if(e<1||e>this.lines)throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);return this.lineInner(e,!0,1,0)}replace(e,t,r){[e,t]=pi(this,e,t);let o=[];return this.decompose(0,e,o,2),r.length&&r.decompose(0,r.length,o,3),this.decompose(t,this.length,o,1),Sn.from(o,this.length-(t-e)+r.length)}append(e){return this.replace(this.length,this.length,e)}slice(e,t=this.length){[e,t]=pi(this,e,t);let r=[];return this.decompose(e,t,r,0),Sn.from(r,t-e)}eq(e){if(e==this)return!0;if(e.length!=this.length||e.lines!=this.lines)return!1;let t=this.scanIdentical(e,1),r=this.length-this.scanIdentical(e,-1),o=new ro(this),s=new ro(e);for(let l=t,h=t;;){if(o.next(l),s.next(l),l=0,o.lineBreak!=s.lineBreak||o.done!=s.done||o.value!=s.value)return!1;if(h+=o.value.length,o.done||h>=r)return!0}}iter(e=1){return new ro(this,e)}iterRange(e,t=this.length){return new om(this,e,t)}iterLines(e,t){let r;if(e==null)r=this.iter();else{t==null&&(t=this.lines+1);let o=this.line(e).from;r=this.iterRange(o,Math.max(o,t==this.lines+1?this.length:t<=1?0:this.line(t-1).to))}return new sm(r)}toString(){return this.sliceString(0)}toJSON(){let e=[];return this.flatten(e),e}constructor(){}static of(e){if(e.length==0)throw new RangeError("A document must have at least one line");return e.length==1&&!e[0]?Oe.empty:e.length<=32?new tt(e):Sn.from(tt.split(e,[]))}}class tt extends Oe{constructor(e,t=G5(e)){super(),this.text=e,this.length=t}get lines(){return this.text.length}get children(){return null}lineInner(e,t,r,o){for(let s=0;;s++){let l=this.text[s],h=o+l.length;if((t?r:h)>=e)return new Y5(o,h,r,l);o=h+1,r++}}decompose(e,t,r,o){let s=e<=0&&t>=this.length?this:new tt(If(this.text,e,t),Math.min(t,this.length)-Math.max(0,e));if(o&1){let l=r.pop(),h=Rs(s.text,l.text.slice(),0,s.length);if(h.length<=32)r.push(new tt(h,l.length+s.length));else{let u=h.length>>1;r.push(new tt(h.slice(0,u)),new tt(h.slice(u)))}}else r.push(s)}replace(e,t,r){if(!(r instanceof tt))return super.replace(e,t,r);[e,t]=pi(this,e,t);let o=Rs(this.text,Rs(r.text,If(this.text,0,e)),t),s=this.length+r.length-(t-e);return o.length<=32?new tt(o,s):Sn.from(tt.split(o,[]),s)}sliceString(e,t=this.length,r=`
`){[e,t]=pi(this,e,t);let o="";for(let s=0,l=0;s<=t&&l<this.text.length;l++){let h=this.text[l],u=s+h.length;s>e&&l&&(o+=r),e<u&&t>s&&(o+=h.slice(Math.max(0,e-s),t-s)),s=u+1}return o}flatten(e){for(let t of this.text)e.push(t)}scanIdentical(){return 0}static split(e,t){let r=[],o=-1;for(let s of e)r.push(s),o+=s.length+1,r.length==32&&(t.push(new tt(r,o)),r=[],o=-1);return o>-1&&t.push(new tt(r,o)),t}}class Sn extends Oe{constructor(e,t){super(),this.children=e,this.length=t,this.lines=0;for(let r of e)this.lines+=r.lines}lineInner(e,t,r,o){for(let s=0;;s++){let l=this.children[s],h=o+l.length,u=r+l.lines-1;if((t?u:h)>=e)return l.lineInner(e,t,r,o);o=h+1,r=u+1}}decompose(e,t,r,o){for(let s=0,l=0;l<=t&&s<this.children.length;s++){let h=this.children[s],u=l+h.length;if(e<=u&&t>=l){let f=o&((l<=e?1:0)|(u>=t?2:0));l>=e&&u<=t&&!f?r.push(h):h.decompose(e-l,t-l,r,f)}l=u+1}}replace(e,t,r){if([e,t]=pi(this,e,t),r.lines<this.lines)for(let o=0,s=0;o<this.children.length;o++){let l=this.children[o],h=s+l.length;if(e>=s&&t<=h){let u=l.replace(e-s,t-s,r),f=this.lines-l.lines+u.lines;if(u.lines<f>>4&&u.lines>f>>6){let d=this.children.slice();return d[o]=u,new Sn(d,this.length-(t-e)+r.length)}return super.replace(s,h,u)}s=h+1}return super.replace(e,t,r)}sliceString(e,t=this.length,r=`
`){[e,t]=pi(this,e,t);let o="";for(let s=0,l=0;s<this.children.length&&l<=t;s++){let h=this.children[s],u=l+h.length;l>e&&s&&(o+=r),e<u&&t>l&&(o+=h.sliceString(e-l,t-l,r)),l=u+1}return o}flatten(e){for(let t of this.children)t.flatten(e)}scanIdentical(e,t){if(!(e instanceof Sn))return 0;let r=0,[o,s,l,h]=t>0?[0,0,this.children.length,e.children.length]:[this.children.length-1,e.children.length-1,-1,-1];for(;;o+=t,s+=t){if(o==l||s==h)return r;let u=this.children[o],f=e.children[s];if(u!=f)return r+u.scanIdentical(f,t);r+=u.length+1}}static from(e,t=e.reduce((r,o)=>r+o.length+1,-1)){let r=0;for(let x of e)r+=x.lines;if(r<32){let x=[];for(let w of e)w.flatten(x);return new tt(x,t)}let o=Math.max(32,r>>5),s=o<<1,l=o>>1,h=[],u=0,f=-1,d=[];function m(x){let w;if(x.lines>s&&x instanceof Sn)for(let S of x.children)m(S);else x.lines>l&&(u>l||!u)?(v(),h.push(x)):x instanceof tt&&u&&(w=d[d.length-1])instanceof tt&&x.lines+w.lines<=32?(u+=x.lines,f+=x.length+1,d[d.length-1]=new tt(w.text.concat(x.text),w.length+1+x.length)):(u+x.lines>o&&v(),u+=x.lines,f+=x.length+1,d.push(x))}function v(){u!=0&&(h.push(d.length==1?d[0]:Sn.from(d,f)),f=-1,u=d.length=0)}for(let x of e)m(x);return v(),h.length==1?h[0]:new Sn(h,t)}}Oe.empty=new tt([""],0);function G5(n){let e=-1;for(let t of n)e+=t.length+1;return e}function Rs(n,e,t=0,r=1e9){for(let o=0,s=0,l=!0;s<n.length&&o<=r;s++){let h=n[s],u=o+h.length;u>=t&&(u>r&&(h=h.slice(0,r-o)),o<t&&(h=h.slice(t-o)),l?(e[e.length-1]+=h,l=!1):e.push(h)),o=u+1}return e}function If(n,e,t){return Rs(n,[""],e,t)}class ro{constructor(e,t=1){this.dir=t,this.done=!1,this.lineBreak=!1,this.value="",this.nodes=[e],this.offsets=[t>0?1:(e instanceof tt?e.text.length:e.children.length)<<1]}nextInner(e,t){for(this.done=this.lineBreak=!1;;){let r=this.nodes.length-1,o=this.nodes[r],s=this.offsets[r],l=s>>1,h=o instanceof tt?o.text.length:o.children.length;if(l==(t>0?h:0)){if(r==0)return this.done=!0,this.value="",this;t>0&&this.offsets[r-1]++,this.nodes.pop(),this.offsets.pop()}else if((s&1)==(t>0?0:1)){if(this.offsets[r]+=t,e==0)return this.lineBreak=!0,this.value=`
`,this;e--}else if(o instanceof tt){let u=o.text[l+(t<0?-1:0)];if(this.offsets[r]+=t,u.length>Math.max(0,e))return this.value=e==0?u:t>0?u.slice(e):u.slice(0,u.length-e),this;e-=u.length}else{let u=o.children[l+(t<0?-1:0)];e>u.length?(e-=u.length,this.offsets[r]+=t):(t<0&&this.offsets[r]--,this.nodes.push(u),this.offsets.push(t>0?1:(u instanceof tt?u.text.length:u.children.length)<<1))}}}next(e=0){return e<0&&(this.nextInner(-e,-this.dir),e=this.value.length),this.nextInner(e,this.dir)}}class om{constructor(e,t,r){this.value="",this.done=!1,this.cursor=new ro(e,t>r?-1:1),this.pos=t>r?e.length:0,this.from=Math.min(t,r),this.to=Math.max(t,r)}nextInner(e,t){if(t<0?this.pos<=this.from:this.pos>=this.to)return this.value="",this.done=!0,this;e+=Math.max(0,t<0?this.pos-this.to:this.from-this.pos);let r=t<0?this.pos-this.from:this.to-this.pos;e>r&&(e=r),r-=e;let{value:o}=this.cursor.next(e);return this.pos+=(o.length+e)*t,this.value=o.length<=r?o:t<0?o.slice(o.length-r):o.slice(0,r),this.done=!this.value,this}next(e=0){return e<0?e=Math.max(e,this.from-this.pos):e>0&&(e=Math.min(e,this.to-this.pos)),this.nextInner(e,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&this.value!=""}}class sm{constructor(e){this.inner=e,this.afterBreak=!0,this.value="",this.done=!1}next(e=0){let{done:t,lineBreak:r,value:o}=this.inner.next(e);return t&&this.afterBreak?(this.value="",this.afterBreak=!1):t?(this.done=!0,this.value=""):r?this.afterBreak?this.value="":(this.afterBreak=!0,this.next()):(this.value=o,this.afterBreak=!1),this}get lineBreak(){return!1}}typeof Symbol<"u"&&(Oe.prototype[Symbol.iterator]=function(){return this.iter()},ro.prototype[Symbol.iterator]=om.prototype[Symbol.iterator]=sm.prototype[Symbol.iterator]=function(){return this});class Y5{constructor(e,t,r,o){this.from=e,this.to=t,this.number=r,this.text=o}get length(){return this.to-this.from}}function pi(n,e,t){return e=Math.max(0,Math.min(n.length,e)),[e,Math.max(e,Math.min(n.length,t))]}function Wn(n,e,t=!0,r=!0){return q5(n,e,t,r)}const Zl=/\r\n?|\n/;var Gt=function(n){return n[n.Simple=0]="Simple",n[n.TrackDel=1]="TrackDel",n[n.TrackBefore=2]="TrackBefore",n[n.TrackAfter=3]="TrackAfter",n}(Gt||(Gt={}));class Un{constructor(e){this.sections=e}get length(){let e=0;for(let t=0;t<this.sections.length;t+=2)e+=this.sections[t];return e}get newLength(){let e=0;for(let t=0;t<this.sections.length;t+=2){let r=this.sections[t+1];e+=r<0?this.sections[t]:r}return e}get empty(){return this.sections.length==0||this.sections.length==2&&this.sections[1]<0}iterGaps(e){for(let t=0,r=0,o=0;t<this.sections.length;){let s=this.sections[t++],l=this.sections[t++];l<0?(e(r,o,s),o+=s):o+=l,r+=s}}iterChangedRanges(e,t=!1){Ql(this,e,t)}get invertedDesc(){let e=[];for(let t=0;t<this.sections.length;){let r=this.sections[t++],o=this.sections[t++];o<0?e.push(r,o):e.push(o,r)}return new Un(e)}composeDesc(e){return this.empty?e:e.empty?this:am(this,e)}mapDesc(e,t=!1){return e.empty?this:eh(this,e,t)}mapPos(e,t=-1,r=Gt.Simple){let o=0,s=0;for(let l=0;l<this.sections.length;){let h=this.sections[l++],u=this.sections[l++],f=o+h;if(u<0){if(f>e)return s+(e-o);s+=h}else{if(r!=Gt.Simple&&f>=e&&(r==Gt.TrackDel&&o<e&&f>e||r==Gt.TrackBefore&&o<e||r==Gt.TrackAfter&&f>e))return null;if(f>e||f==e&&t<0&&!h)return e==o||t<0?s:s+u;s+=u}o=f}if(e>o)throw new RangeError(`Position ${e} is out of range for changeset of length ${o}`);return s}touchesRange(e,t=e){for(let r=0,o=0;r<this.sections.length&&o<=t;){let s=this.sections[r++],l=this.sections[r++],h=o+s;if(l>=0&&o<=t&&h>=e)return o<e&&h>t?"cover":!0;o=h}return!1}toString(){let e="";for(let t=0;t<this.sections.length;){let r=this.sections[t++],o=this.sections[t++];e+=(e?" ":"")+r+(o>=0?":"+o:"")}return e}toJSON(){return this.sections}static fromJSON(e){if(!Array.isArray(e)||e.length%2||e.some(t=>typeof t!="number"))throw new RangeError("Invalid JSON representation of ChangeDesc");return new Un(e)}static create(e){return new Un(e)}}class dt extends Un{constructor(e,t){super(e),this.inserted=t}apply(e){if(this.length!=e.length)throw new RangeError("Applying change set to a document with the wrong length");return Ql(this,(t,r,o,s,l)=>e=e.replace(o,o+(r-t),l),!1),e}mapDesc(e,t=!1){return eh(this,e,t,!0)}invert(e){let t=this.sections.slice(),r=[];for(let o=0,s=0;o<t.length;o+=2){let l=t[o],h=t[o+1];if(h>=0){t[o]=h,t[o+1]=l;let u=o>>1;for(;r.length<u;)r.push(Oe.empty);r.push(l?e.slice(s,s+l):Oe.empty)}s+=l}return new dt(t,r)}compose(e){return this.empty?e:e.empty?this:am(this,e,!0)}map(e,t=!1){return e.empty?this:eh(this,e,t,!0)}iterChanges(e,t=!1){Ql(this,e,t)}get desc(){return Un.create(this.sections)}filter(e){let t=[],r=[],o=[],s=new ho(this);e:for(let l=0,h=0;;){let u=l==e.length?1e9:e[l++];for(;h<u||h==u&&s.len==0;){if(s.done)break e;let d=Math.min(s.len,u-h);Ct(o,d,-1);let m=s.ins==-1?-1:s.off==0?s.ins:0;Ct(t,d,m),m>0&&lr(r,t,s.text),s.forward(d),h+=d}let f=e[l++];for(;h<f;){if(s.done)break e;let d=Math.min(s.len,f-h);Ct(t,d,-1),Ct(o,d,s.ins==-1?-1:s.off==0?s.ins:0),s.forward(d),h+=d}}return{changes:new dt(t,r),filtered:Un.create(o)}}toJSON(){let e=[];for(let t=0;t<this.sections.length;t+=2){let r=this.sections[t],o=this.sections[t+1];o<0?e.push(r):o==0?e.push([r]):e.push([r].concat(this.inserted[t>>1].toJSON()))}return e}static of(e,t,r){let o=[],s=[],l=0,h=null;function u(d=!1){if(!d&&!o.length)return;l<t&&Ct(o,t-l,-1);let m=new dt(o,s);h=h?h.compose(m.map(h)):m,o=[],s=[],l=0}function f(d){if(Array.isArray(d))for(let m of d)f(m);else if(d instanceof dt){if(d.length!=t)throw new RangeError(`Mismatched change set length (got ${d.length}, expected ${t})`);u(),h=h?h.compose(d.map(h)):d}else{let{from:m,to:v=m,insert:x}=d;if(m>v||m<0||v>t)throw new RangeError(`Invalid change range ${m} to ${v} (in doc of length ${t})`);let w=x?typeof x=="string"?Oe.of(x.split(r||Zl)):x:Oe.empty,S=w.length;if(m==v&&S==0)return;m<l&&u(),m>l&&Ct(o,m-l,-1),Ct(o,v-m,S),lr(s,o,w),l=v}}return f(e),u(!h),h}static empty(e){return new dt(e?[e,-1]:[],[])}static fromJSON(e){if(!Array.isArray(e))throw new RangeError("Invalid JSON representation of ChangeSet");let t=[],r=[];for(let o=0;o<e.length;o++){let s=e[o];if(typeof s=="number")t.push(s,-1);else{if(!Array.isArray(s)||typeof s[0]!="number"||s.some((l,h)=>h&&typeof l!="string"))throw new RangeError("Invalid JSON representation of ChangeSet");if(s.length==1)t.push(s[0],0);else{for(;r.length<o;)r.push(Oe.empty);r[o]=Oe.of(s.slice(1)),t.push(s[0],r[o].length)}}}return new dt(t,r)}static createSet(e,t){return new dt(e,t)}}function Ct(n,e,t,r=!1){if(e==0&&t<=0)return;let o=n.length-2;o>=0&&t<=0&&t==n[o+1]?n[o]+=e:o>=0&&e==0&&n[o]==0?n[o+1]+=t:r?(n[o]+=e,n[o+1]+=t):n.push(e,t)}function lr(n,e,t){if(t.length==0)return;let r=e.length-2>>1;if(r<n.length)n[n.length-1]=n[n.length-1].append(t);else{for(;n.length<r;)n.push(Oe.empty);n.push(t)}}function Ql(n,e,t){let r=n.inserted;for(let o=0,s=0,l=0;l<n.sections.length;){let h=n.sections[l++],u=n.sections[l++];if(u<0)o+=h,s+=h;else{let f=o,d=s,m=Oe.empty;for(;f+=h,d+=u,u&&r&&(m=m.append(r[l-2>>1])),!(t||l==n.sections.length||n.sections[l+1]<0);)h=n.sections[l++],u=n.sections[l++];e(o,f,s,d,m),o=f,s=d}}}function eh(n,e,t,r=!1){let o=[],s=r?[]:null,l=new ho(n),h=new ho(e);for(let u=-1;;){if(l.done&&h.len||h.done&&l.len)throw new Error("Mismatched change set lengths");if(l.ins==-1&&h.ins==-1){let f=Math.min(l.len,h.len);Ct(o,f,-1),l.forward(f),h.forward(f)}else if(h.ins>=0&&(l.ins<0||u==l.i||l.off==0&&(h.len<l.len||h.len==l.len&&!t))){let f=h.len;for(Ct(o,h.ins,-1);f;){let d=Math.min(l.len,f);l.ins>=0&&u<l.i&&l.len<=d&&(Ct(o,0,l.ins),s&&lr(s,o,l.text),u=l.i),l.forward(d),f-=d}h.next()}else if(l.ins>=0){let f=0,d=l.len;for(;d;)if(h.ins==-1){let m=Math.min(d,h.len);f+=m,d-=m,h.forward(m)}else if(h.ins==0&&h.len<d)d-=h.len,h.next();else break;Ct(o,f,u<l.i?l.ins:0),s&&u<l.i&&lr(s,o,l.text),u=l.i,l.forward(l.len-d)}else{if(l.done&&h.done)return s?dt.createSet(o,s):Un.create(o);throw new Error("Mismatched change set lengths")}}}function am(n,e,t=!1){let r=[],o=t?[]:null,s=new ho(n),l=new ho(e);for(let h=!1;;){if(s.done&&l.done)return o?dt.createSet(r,o):Un.create(r);if(s.ins==0)Ct(r,s.len,0,h),s.next();else if(l.len==0&&!l.done)Ct(r,0,l.ins,h),o&&lr(o,r,l.text),l.next();else{if(s.done||l.done)throw new Error("Mismatched change set lengths");{let u=Math.min(s.len2,l.len),f=r.length;if(s.ins==-1){let d=l.ins==-1?-1:l.off?0:l.ins;Ct(r,u,d,h),o&&d&&lr(o,r,l.text)}else l.ins==-1?(Ct(r,s.off?0:s.len,u,h),o&&lr(o,r,s.textBit(u))):(Ct(r,s.off?0:s.len,l.off?0:l.ins,h),o&&!l.off&&lr(o,r,l.text));h=(s.ins>u||l.ins>=0&&l.len>u)&&(h||r.length>f),s.forward2(u),l.forward(u)}}}}class ho{constructor(e){this.set=e,this.i=0,this.next()}next(){let{sections:e}=this.set;this.i<e.length?(this.len=e[this.i++],this.ins=e[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return this.ins==-2}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:e}=this.set,t=this.i-2>>1;return t>=e.length?Oe.empty:e[t]}textBit(e){let{inserted:t}=this.set,r=this.i-2>>1;return r>=t.length&&!e?Oe.empty:t[r].slice(this.off,e==null?void 0:this.off+e)}forward(e){e==this.len?this.next():(this.len-=e,this.off+=e)}forward2(e){this.ins==-1?this.forward(e):e==this.ins?this.next():(this.ins-=e,this.off+=e)}}class Rr{constructor(e,t,r){this.from=e,this.to=t,this.flags=r}get anchor(){return this.flags&32?this.to:this.from}get head(){return this.flags&32?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return this.flags&8?-1:this.flags&16?1:0}get bidiLevel(){let e=this.flags&7;return e==7?null:e}get goalColumn(){let e=this.flags>>6;return e==16777215?void 0:e}map(e,t=-1){let r,o;return this.empty?r=o=e.mapPos(this.from,t):(r=e.mapPos(this.from,1),o=e.mapPos(this.to,-1)),r==this.from&&o==this.to?this:new Rr(r,o,this.flags)}extend(e,t=e){if(e<=this.anchor&&t>=this.anchor)return X.range(e,t);let r=Math.abs(e-this.anchor)>Math.abs(t-this.anchor)?e:t;return X.range(this.anchor,r)}eq(e,t=!1){return this.anchor==e.anchor&&this.head==e.head&&(!t||!this.empty||this.assoc==e.assoc)}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(e){if(!e||typeof e.anchor!="number"||typeof e.head!="number")throw new RangeError("Invalid JSON representation for SelectionRange");return X.range(e.anchor,e.head)}static create(e,t,r){return new Rr(e,t,r)}}class X{constructor(e,t){this.ranges=e,this.mainIndex=t}map(e,t=-1){return e.empty?this:X.create(this.ranges.map(r=>r.map(e,t)),this.mainIndex)}eq(e,t=!1){if(this.ranges.length!=e.ranges.length||this.mainIndex!=e.mainIndex)return!1;for(let r=0;r<this.ranges.length;r++)if(!this.ranges[r].eq(e.ranges[r],t))return!1;return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return this.ranges.length==1?this:new X([this.main],0)}addRange(e,t=!0){return X.create([e].concat(this.ranges),t?0:this.mainIndex+1)}replaceRange(e,t=this.mainIndex){let r=this.ranges.slice();return r[t]=e,X.create(r,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(e=>e.toJSON()),main:this.mainIndex}}static fromJSON(e){if(!e||!Array.isArray(e.ranges)||typeof e.main!="number"||e.main>=e.ranges.length)throw new RangeError("Invalid JSON representation for EditorSelection");return new X(e.ranges.map(t=>Rr.fromJSON(t)),e.main)}static single(e,t=e){return new X([X.range(e,t)],0)}static create(e,t=0){if(e.length==0)throw new RangeError("A selection needs at least one range");for(let r=0,o=0;o<e.length;o++){let s=e[o];if(s.empty?s.from<=r:s.from<r)return X.normalized(e.slice(),t);r=s.to}return new X(e,t)}static cursor(e,t=0,r,o){return Rr.create(e,e,(t==0?0:t<0?8:16)|(r==null?7:Math.min(6,r))|(o??16777215)<<6)}static range(e,t,r,o){let s=(r??16777215)<<6|(o==null?7:Math.min(6,o));return t<e?Rr.create(t,e,48|s):Rr.create(e,t,(t>e?8:0)|s)}static normalized(e,t=0){let r=e[t];e.sort((o,s)=>o.from-s.from),t=e.indexOf(r);for(let o=1;o<e.length;o++){let s=e[o],l=e[o-1];if(s.empty?s.from<=l.to:s.from<l.to){let h=l.from,u=Math.max(s.to,l.to);o<=t&&t--,e.splice(--o,2,s.anchor>s.head?X.range(u,h):X.range(h,u))}}return new X(e,t)}}function lm(n,e){for(let t of n.ranges)if(t.to>e)throw new RangeError("Selection points outside of document")}let pc=0;class we{constructor(e,t,r,o,s){this.combine=e,this.compareInput=t,this.compare=r,this.isStatic=o,this.id=pc++,this.default=e([]),this.extensions=typeof s=="function"?s(this):s}get reader(){return this}static define(e={}){return new we(e.combine||(t=>t),e.compareInput||((t,r)=>t===r),e.compare||(e.combine?(t,r)=>t===r:gc),!!e.static,e.enables)}of(e){return new Ds([],this,0,e)}compute(e,t){if(this.isStatic)throw new Error("Can't compute a static facet");return new Ds(e,this,1,t)}computeN(e,t){if(this.isStatic)throw new Error("Can't compute a static facet");return new Ds(e,this,2,t)}from(e,t){return t||(t=r=>r),this.compute([e],r=>t(r.field(e)))}}function gc(n,e){return n==e||n.length==e.length&&n.every((t,r)=>t===e[r])}class Ds{constructor(e,t,r,o){this.dependencies=e,this.facet=t,this.type=r,this.value=o,this.id=pc++}dynamicSlot(e){var t;let r=this.value,o=this.facet.compareInput,s=this.id,l=e[s]>>1,h=this.type==2,u=!1,f=!1,d=[];for(let m of this.dependencies)m=="doc"?u=!0:m=="selection"?f=!0:((t=e[m.id])!==null&&t!==void 0?t:1)&1||d.push(e[m.id]);return{create(m){return m.values[l]=r(m),1},update(m,v){if(u&&v.docChanged||f&&(v.docChanged||v.selection)||th(m,d)){let x=r(m);if(h?!_f(x,m.values[l],o):!o(x,m.values[l]))return m.values[l]=x,1}return 0},reconfigure:(m,v)=>{let x,w=v.config.address[s];if(w!=null){let S=Bs(v,w);if(this.dependencies.every(k=>k instanceof we?v.facet(k)===m.facet(k):k instanceof Br?v.field(k,!1)==m.field(k,!1):!0)||(h?_f(x=r(m),S,o):o(x=r(m),S)))return m.values[l]=S,0}else x=r(m);return m.values[l]=x,1}}}}function _f(n,e,t){if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(!t(n[r],e[r]))return!1;return!0}function th(n,e){let t=!1;for(let r of e)io(n,r)&1&&(t=!0);return t}function X5(n,e,t){let r=t.map(u=>n[u.id]),o=t.map(u=>u.type),s=r.filter(u=>!(u&1)),l=n[e.id]>>1;function h(u){let f=[];for(let d=0;d<r.length;d++){let m=Bs(u,r[d]);if(o[d]==2)for(let v of m)f.push(v);else f.push(m)}return e.combine(f)}return{create(u){for(let f of r)io(u,f);return u.values[l]=h(u),1},update(u,f){if(!th(u,s))return 0;let d=h(u);return e.compare(d,u.values[l])?0:(u.values[l]=d,1)},reconfigure(u,f){let d=th(u,r),m=f.config.facets[e.id],v=f.facet(e);if(m&&!d&&gc(t,m))return u.values[l]=v,0;let x=h(u);return e.compare(x,v)?(u.values[l]=v,0):(u.values[l]=x,1)}}}const vs=we.define({static:!0});class Br{constructor(e,t,r,o,s){this.id=e,this.createF=t,this.updateF=r,this.compareF=o,this.spec=s,this.provides=void 0}static define(e){let t=new Br(pc++,e.create,e.update,e.compare||((r,o)=>r===o),e);return e.provide&&(t.provides=e.provide(t)),t}create(e){let t=e.facet(vs).find(r=>r.field==this);return(t?.create||this.createF)(e)}slot(e){let t=e[this.id]>>1;return{create:r=>(r.values[t]=this.create(r),1),update:(r,o)=>{let s=r.values[t],l=this.updateF(s,o);return this.compareF(s,l)?0:(r.values[t]=l,1)},reconfigure:(r,o)=>{let s=r.facet(vs),l=o.facet(vs),h;return(h=s.find(u=>u.field==this))&&h!=l.find(u=>u.field==this)?(r.values[t]=h.create(r),1):o.config.address[this.id]!=null?(r.values[t]=o.field(this),0):(r.values[t]=this.create(r),1)}}}init(e){return[this,vs.of({field:this,create:e})]}get extension(){return this}}const Tr={lowest:4,low:3,default:2,high:1,highest:0};function Yi(n){return e=>new hm(e,n)}const J5={highest:Yi(Tr.highest),high:Yi(Tr.high),default:Yi(Tr.default),low:Yi(Tr.low),lowest:Yi(Tr.lowest)};class hm{constructor(e,t){this.inner=e,this.prec=t}}class ea{of(e){return new nh(this,e)}reconfigure(e){return ea.reconfigure.of({compartment:this,extension:e})}get(e){return e.config.compartments.get(this)}}class nh{constructor(e,t){this.compartment=e,this.inner=t}}class zs{constructor(e,t,r,o,s,l){for(this.base=e,this.compartments=t,this.dynamicSlots=r,this.address=o,this.staticValues=s,this.facets=l,this.statusTemplate=[];this.statusTemplate.length<r.length;)this.statusTemplate.push(0)}staticFacet(e){let t=this.address[e.id];return t==null?e.default:this.staticValues[t>>1]}static resolve(e,t,r){let o=[],s=Object.create(null),l=new Map;for(let v of Z5(e,t,l))v instanceof Br?o.push(v):(s[v.facet.id]||(s[v.facet.id]=[])).push(v);let h=Object.create(null),u=[],f=[];for(let v of o)h[v.id]=f.length<<1,f.push(x=>v.slot(x));let d=r?.config.facets;for(let v in s){let x=s[v],w=x[0].facet,S=d&&d[v]||[];if(x.every(k=>k.type==0))if(h[w.id]=u.length<<1|1,gc(S,x))u.push(r.facet(w));else{let k=w.combine(x.map(A=>A.value));u.push(r&&w.compare(k,r.facet(w))?r.facet(w):k)}else{for(let k of x)k.type==0?(h[k.id]=u.length<<1|1,u.push(k.value)):(h[k.id]=f.length<<1,f.push(A=>k.dynamicSlot(A)));h[w.id]=f.length<<1,f.push(k=>X5(k,w,x))}}let m=f.map(v=>v(h));return new zs(e,l,m,h,u,s)}}function Z5(n,e,t){let r=[[],[],[],[],[]],o=new Map;function s(l,h){let u=o.get(l);if(u!=null){if(u<=h)return;let f=r[u].indexOf(l);f>-1&&r[u].splice(f,1),l instanceof nh&&t.delete(l.compartment)}if(o.set(l,h),Array.isArray(l))for(let f of l)s(f,h);else if(l instanceof nh){if(t.has(l.compartment))throw new RangeError("Duplicate use of compartment in extensions");let f=e.get(l.compartment)||l.inner;t.set(l.compartment,f),s(f,h)}else if(l instanceof hm)s(l.inner,l.prec);else if(l instanceof Br)r[h].push(l),l.provides&&s(l.provides,h);else if(l instanceof Ds)r[h].push(l),l.facet.extensions&&s(l.facet.extensions,Tr.default);else{let f=l.extension;if(!f)throw new Error(`Unrecognized extension value in extension set (${l}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);s(f,h)}}return s(n,Tr.default),r.reduce((l,h)=>l.concat(h))}function io(n,e){if(e&1)return 2;let t=e>>1,r=n.status[t];if(r==4)throw new Error("Cyclic dependency between fields and/or facets");if(r&2)return r;n.status[t]=4;let o=n.computeSlot(n,n.config.dynamicSlots[t]);return n.status[t]=2|o}function Bs(n,e){return e&1?n.config.staticValues[e>>1]:n.values[e>>1]}const cm=we.define(),rh=we.define({combine:n=>n.some(e=>e),static:!0}),um=we.define({combine:n=>n.length?n[0]:void 0,static:!0}),dm=we.define(),fm=we.define(),pm=we.define(),gm=we.define({combine:n=>n.length?n[0]:!1});class Ri{constructor(e,t){this.type=e,this.value=t}static define(){return new Q5}}class Q5{of(e){return new Ri(this,e)}}class eA{constructor(e){this.map=e}of(e){return new ot(this,e)}}class ot{constructor(e,t){this.type=e,this.value=t}map(e){let t=this.type.map(this.value,e);return t===void 0?void 0:t==this.value?this:new ot(this.type,t)}is(e){return this.type==e}static define(e={}){return new eA(e.map||(t=>t))}static mapEffects(e,t){if(!e.length)return e;let r=[];for(let o of e){let s=o.map(t);s&&r.push(s)}return r}}ot.reconfigure=ot.define();ot.appendConfig=ot.define();class kt{constructor(e,t,r,o,s,l){this.startState=e,this.changes=t,this.selection=r,this.effects=o,this.annotations=s,this.scrollIntoView=l,this._doc=null,this._state=null,r&&lm(r,t.newLength),s.some(h=>h.type==kt.time)||(this.annotations=s.concat(kt.time.of(Date.now())))}static create(e,t,r,o,s,l){return new kt(e,t,r,o,s,l)}get newDoc(){return this._doc||(this._doc=this.changes.apply(this.startState.doc))}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(e){for(let t of this.annotations)if(t.type==e)return t.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(e){let t=this.annotation(kt.userEvent);return!!(t&&(t==e||t.length>e.length&&t.slice(0,e.length)==e&&t[e.length]=="."))}}kt.time=Ri.define();kt.userEvent=Ri.define();kt.addToHistory=Ri.define();kt.remote=Ri.define();function tA(n,e){let t=[];for(let r=0,o=0;;){let s,l;if(r<n.length&&(o==e.length||e[o]>=n[r]))s=n[r++],l=n[r++];else if(o<e.length)s=e[o++],l=e[o++];else return t;!t.length||t[t.length-1]<s?t.push(s,l):t[t.length-1]<l&&(t[t.length-1]=l)}}function mm(n,e,t){var r;let o,s,l;return t?(o=e.changes,s=dt.empty(e.changes.length),l=n.changes.compose(e.changes)):(o=e.changes.map(n.changes),s=n.changes.mapDesc(e.changes,!0),l=n.changes.compose(o)),{changes:l,selection:e.selection?e.selection.map(s):(r=n.selection)===null||r===void 0?void 0:r.map(o),effects:ot.mapEffects(n.effects,o).concat(ot.mapEffects(e.effects,s)),annotations:n.annotations.length?n.annotations.concat(e.annotations):e.annotations,scrollIntoView:n.scrollIntoView||e.scrollIntoView}}function ih(n,e,t){let r=e.selection,o=li(e.annotations);return e.userEvent&&(o=o.concat(kt.userEvent.of(e.userEvent))),{changes:e.changes instanceof dt?e.changes:dt.of(e.changes||[],t,n.facet(um)),selection:r&&(r instanceof X?r:X.single(r.anchor,r.head)),effects:li(e.effects),annotations:o,scrollIntoView:!!e.scrollIntoView}}function vm(n,e,t){let r=ih(n,e.length?e[0]:{},n.doc.length);e.length&&e[0].filter===!1&&(t=!1);for(let s=1;s<e.length;s++){e[s].filter===!1&&(t=!1);let l=!!e[s].sequential;r=mm(r,ih(n,e[s],l?r.changes.newLength:n.doc.length),l)}let o=kt.create(n,r.changes,r.selection,r.effects,r.annotations,r.scrollIntoView);return rA(t?nA(o):o)}function nA(n){let e=n.startState,t=!0;for(let o of e.facet(dm)){let s=o(n);if(s===!1){t=!1;break}Array.isArray(s)&&(t=t===!0?s:tA(t,s))}if(t!==!0){let o,s;if(t===!1)s=n.changes.invertedDesc,o=dt.empty(e.doc.length);else{let l=n.changes.filter(t);o=l.changes,s=l.filtered.mapDesc(l.changes).invertedDesc}n=kt.create(e,o,n.selection&&n.selection.map(s),ot.mapEffects(n.effects,s),n.annotations,n.scrollIntoView)}let r=e.facet(fm);for(let o=r.length-1;o>=0;o--){let s=r[o](n);s instanceof kt?n=s:Array.isArray(s)&&s.length==1&&s[0]instanceof kt?n=s[0]:n=vm(e,li(s),!1)}return n}function rA(n){let e=n.startState,t=e.facet(pm),r=n;for(let o=t.length-1;o>=0;o--){let s=t[o](n);s&&Object.keys(s).length&&(r=mm(r,ih(e,s,n.changes.newLength),!0))}return r==n?n:kt.create(e,n.changes,n.selection,r.effects,r.annotations,r.scrollIntoView)}const iA=[];function li(n){return n==null?iA:Array.isArray(n)?n:[n]}var Vn=function(n){return n[n.Word=0]="Word",n[n.Space=1]="Space",n[n.Other=2]="Other",n}(Vn||(Vn={}));const oA=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;let oh;try{oh=new RegExp("[\\p{Alphabetic}\\p{Number}_]","u")}catch{}function sA(n){if(oh)return oh.test(n);for(let e=0;e<n.length;e++){let t=n[e];if(/\w/.test(t)||t>""&&(t.toUpperCase()!=t.toLowerCase()||oA.test(t)))return!0}return!1}function aA(n){return e=>{if(!/\S/.test(e))return Vn.Space;if(sA(e))return Vn.Word;for(let t=0;t<n.length;t++)if(e.indexOf(n[t])>-1)return Vn.Word;return Vn.Other}}class Ue{constructor(e,t,r,o,s,l){this.config=e,this.doc=t,this.selection=r,this.values=o,this.status=e.statusTemplate.slice(),this.computeSlot=s,l&&(l._state=this);for(let h=0;h<this.config.dynamicSlots.length;h++)io(this,h<<1);this.computeSlot=null}field(e,t=!0){let r=this.config.address[e.id];if(r==null){if(t)throw new RangeError("Field is not present in this state");return}return io(this,r),Bs(this,r)}update(...e){return vm(this,e,!0)}applyTransaction(e){let t=this.config,{base:r,compartments:o}=t;for(let h of e.effects)h.is(ea.reconfigure)?(t&&(o=new Map,t.compartments.forEach((u,f)=>o.set(f,u)),t=null),o.set(h.value.compartment,h.value.extension)):h.is(ot.reconfigure)?(t=null,r=h.value):h.is(ot.appendConfig)&&(t=null,r=li(r).concat(h.value));let s;t?s=e.startState.values.slice():(t=zs.resolve(r,o,this),s=new Ue(t,this.doc,this.selection,t.dynamicSlots.map(()=>null),(h,u)=>u.reconfigure(h,this),null).values);let l=e.startState.facet(rh)?e.newSelection:e.newSelection.asSingle();new Ue(t,e.newDoc,l,s,(h,u)=>u.update(h,e),e)}replaceSelection(e){return typeof e=="string"&&(e=this.toText(e)),this.changeByRange(t=>({changes:{from:t.from,to:t.to,insert:e},range:X.cursor(t.from+e.length)}))}changeByRange(e){let t=this.selection,r=e(t.ranges[0]),o=this.changes(r.changes),s=[r.range],l=li(r.effects);for(let h=1;h<t.ranges.length;h++){let u=e(t.ranges[h]),f=this.changes(u.changes),d=f.map(o);for(let v=0;v<h;v++)s[v]=s[v].map(d);let m=o.mapDesc(f,!0);s.push(u.range.map(m)),o=o.compose(d),l=ot.mapEffects(l,d).concat(ot.mapEffects(li(u.effects),m))}return{changes:o,selection:X.create(s,t.mainIndex),effects:l}}changes(e=[]){return e instanceof dt?e:dt.of(e,this.doc.length,this.facet(Ue.lineSeparator))}toText(e){return Oe.of(e.split(this.facet(Ue.lineSeparator)||Zl))}sliceDoc(e=0,t=this.doc.length){return this.doc.sliceString(e,t,this.lineBreak)}facet(e){let t=this.config.address[e.id];return t==null?e.default:(io(this,t),Bs(this,t))}toJSON(e){let t={doc:this.sliceDoc(),selection:this.selection.toJSON()};if(e)for(let r in e){let o=e[r];o instanceof Br&&this.config.address[o.id]!=null&&(t[r]=o.spec.toJSON(this.field(e[r]),this))}return t}static fromJSON(e,t={},r){if(!e||typeof e.doc!="string")throw new RangeError("Invalid JSON representation for EditorState");let o=[];if(r){for(let s in r)if(Object.prototype.hasOwnProperty.call(e,s)){let l=r[s],h=e[s];o.push(l.init(u=>l.spec.fromJSON(h,u)))}}return Ue.create({doc:e.doc,selection:X.fromJSON(e.selection),extensions:t.extensions?o.concat([t.extensions]):o})}static create(e={}){let t=zs.resolve(e.extensions||[],new Map),r=e.doc instanceof Oe?e.doc:Oe.of((e.doc||"").split(t.staticFacet(Ue.lineSeparator)||Zl)),o=e.selection?e.selection instanceof X?e.selection:X.single(e.selection.anchor,e.selection.head):X.single(0);return lm(o,r.length),t.staticFacet(rh)||(o=o.asSingle()),new Ue(t,r,o,t.dynamicSlots.map(()=>null),(s,l)=>l.create(s),null)}get tabSize(){return this.facet(Ue.tabSize)}get lineBreak(){return this.facet(Ue.lineSeparator)||`
`}get readOnly(){return this.facet(gm)}phrase(e,...t){for(let r of this.facet(Ue.phrases))if(Object.prototype.hasOwnProperty.call(r,e)){e=r[e];break}return t.length&&(e=e.replace(/\$(\$|\d*)/g,(r,o)=>{if(o=="$")return"$";let s=+(o||1);return!s||s>t.length?r:t[s-1]})),e}languageDataAt(e,t,r=-1){let o=[];for(let s of this.facet(cm))for(let l of s(this,t,r))Object.prototype.hasOwnProperty.call(l,e)&&o.push(l[e]);return o}charCategorizer(e){return aA(this.languageDataAt("wordChars",e).join(""))}wordAt(e){let{text:t,from:r,length:o}=this.doc.lineAt(e),s=this.charCategorizer(e),l=e-r,h=e-r;for(;l>0;){let u=Wn(t,l,!1);if(s(t.slice(u,l))!=Vn.Word)break;l=u}for(;h<o;){let u=Wn(t,h);if(s(t.slice(h,u))!=Vn.Word)break;h=u}return l==h?null:X.range(l+r,h+r)}}Ue.allowMultipleSelections=rh;Ue.tabSize=we.define({combine:n=>n.length?n[0]:4});Ue.lineSeparator=um;Ue.readOnly=gm;Ue.phrases=we.define({compare(n,e){let t=Object.keys(n),r=Object.keys(e);return t.length==r.length&&t.every(o=>n[o]==e[o])}});Ue.languageData=cm;Ue.changeFilter=dm;Ue.transactionFilter=fm;Ue.transactionExtender=pm;ea.reconfigure=ot.define();class gi{eq(e){return this==e}range(e,t=e){return co.create(e,t,this)}}gi.prototype.startSide=gi.prototype.endSide=0;gi.prototype.point=!1;gi.prototype.mapMode=Gt.TrackDel;class co{constructor(e,t,r){this.from=e,this.to=t,this.value=r}static create(e,t,r){return new co(e,t,r)}}function sh(n,e){return n.from-e.from||n.value.startSide-e.value.startSide}class mc{constructor(e,t,r,o){this.from=e,this.to=t,this.value=r,this.maxPoint=o}get length(){return this.to[this.to.length-1]}findIndex(e,t,r,o=0){let s=r?this.to:this.from;for(let l=o,h=s.length;;){if(l==h)return l;let u=l+h>>1,f=s[u]-e||(r?this.value[u].endSide:this.value[u].startSide)-t;if(u==l)return f>=0?l:h;f>=0?h=u:l=u+1}}between(e,t,r,o){for(let s=this.findIndex(t,-1e9,!0),l=this.findIndex(r,1e9,!1,s);s<l;s++)if(o(this.from[s]+e,this.to[s]+e,this.value[s])===!1)return!1}map(e,t){let r=[],o=[],s=[],l=-1,h=-1;for(let u=0;u<this.value.length;u++){let f=this.value[u],d=this.from[u]+e,m=this.to[u]+e,v,x;if(d==m){let w=t.mapPos(d,f.startSide,f.mapMode);if(w==null||(v=x=w,f.startSide!=f.endSide&&(x=t.mapPos(d,f.endSide),x<v)))continue}else if(v=t.mapPos(d,f.startSide),x=t.mapPos(m,f.endSide),v>x||v==x&&f.startSide>0&&f.endSide<=0)continue;(x-v||f.endSide-f.startSide)<0||(l<0&&(l=v),f.point&&(h=Math.max(h,x-v)),r.push(f),o.push(v-l),s.push(x-l))}return{mapped:r.length?new mc(o,s,r,h):null,pos:l}}}class qe{constructor(e,t,r,o){this.chunkPos=e,this.chunk=t,this.nextLayer=r,this.maxPoint=o}static create(e,t,r,o){return new qe(e,t,r,o)}get length(){let e=this.chunk.length-1;return e<0?0:Math.max(this.chunkEnd(e),this.nextLayer.length)}get size(){if(this.isEmpty)return 0;let e=this.nextLayer.size;for(let t of this.chunk)e+=t.value.length;return e}chunkEnd(e){return this.chunkPos[e]+this.chunk[e].length}update(e){let{add:t=[],sort:r=!1,filterFrom:o=0,filterTo:s=this.length}=e,l=e.filter;if(t.length==0&&!l)return this;if(r&&(t=t.slice().sort(sh)),this.isEmpty)return t.length?qe.of(t):this;let h=new bm(this,null,-1).goto(0),u=0,f=[],d=new Ns;for(;h.value||u<t.length;)if(u<t.length&&(h.from-t[u].from||h.startSide-t[u].value.startSide)>=0){let m=t[u++];d.addInner(m.from,m.to,m.value)||f.push(m)}else h.rangeIndex==1&&h.chunkIndex<this.chunk.length&&(u==t.length||this.chunkEnd(h.chunkIndex)<t[u].from)&&(!l||o>this.chunkEnd(h.chunkIndex)||s<this.chunkPos[h.chunkIndex])&&d.addChunk(this.chunkPos[h.chunkIndex],this.chunk[h.chunkIndex])?h.nextChunk():((!l||o>h.to||s<h.from||l(h.from,h.to,h.value))&&(d.addInner(h.from,h.to,h.value)||f.push(co.create(h.from,h.to,h.value))),h.next());return d.finishInner(this.nextLayer.isEmpty&&!f.length?qe.empty:this.nextLayer.update({add:f,filter:l,filterFrom:o,filterTo:s}))}map(e){if(e.empty||this.isEmpty)return this;let t=[],r=[],o=-1;for(let l=0;l<this.chunk.length;l++){let h=this.chunkPos[l],u=this.chunk[l],f=e.touchesRange(h,h+u.length);if(f===!1)o=Math.max(o,u.maxPoint),t.push(u),r.push(e.mapPos(h));else if(f===!0){let{mapped:d,pos:m}=u.map(h,e);d&&(o=Math.max(o,d.maxPoint),t.push(d),r.push(m))}}let s=this.nextLayer.map(e);return t.length==0?s:new qe(r,t,s||qe.empty,o)}between(e,t,r){if(!this.isEmpty){for(let o=0;o<this.chunk.length;o++){let s=this.chunkPos[o],l=this.chunk[o];if(t>=s&&e<=s+l.length&&l.between(s,e-s,t-s,r)===!1)return}this.nextLayer.between(e,t,r)}}iter(e=0){return uo.from([this]).goto(e)}get isEmpty(){return this.nextLayer==this}static iter(e,t=0){return uo.from(e).goto(t)}static compare(e,t,r,o,s=-1){let l=e.filter(m=>m.maxPoint>0||!m.isEmpty&&m.maxPoint>=s),h=t.filter(m=>m.maxPoint>0||!m.isEmpty&&m.maxPoint>=s),u=jf(l,h,r),f=new Xi(l,u,s),d=new Xi(h,u,s);r.iterGaps((m,v,x)=>Lf(f,m,d,v,x,o)),r.empty&&r.length==0&&Lf(f,0,d,0,0,o)}static eq(e,t,r=0,o){o==null&&(o=999999999);let s=e.filter(d=>!d.isEmpty&&t.indexOf(d)<0),l=t.filter(d=>!d.isEmpty&&e.indexOf(d)<0);if(s.length!=l.length)return!1;if(!s.length)return!0;let h=jf(s,l),u=new Xi(s,h,0).goto(r),f=new Xi(l,h,0).goto(r);for(;;){if(u.to!=f.to||!ah(u.active,f.active)||u.point&&(!f.point||!u.point.eq(f.point)))return!1;if(u.to>o)return!0;u.next(),f.next()}}static spans(e,t,r,o,s=-1){let l=new Xi(e,null,s).goto(t),h=t,u=l.openStart;for(;;){let f=Math.min(l.to,r);if(l.point){let d=l.activeForPoint(l.to),m=l.pointFrom<t?d.length+1:l.point.startSide<0?d.length:Math.min(d.length,u);o.point(h,f,l.point,d,m,l.pointRank),u=Math.min(l.openEnd(f),d.length)}else f>h&&(o.span(h,f,l.active,u),u=l.openEnd(f));if(l.to>r)return u+(l.point&&l.to>r?1:0);h=l.to,l.next()}}static of(e,t=!1){let r=new Ns;for(let o of e instanceof co?[e]:t?lA(e):e)r.add(o.from,o.to,o.value);return r.finish()}static join(e){if(!e.length)return qe.empty;let t=e[e.length-1];for(let r=e.length-2;r>=0;r--)for(let o=e[r];o!=qe.empty;o=o.nextLayer)t=new qe(o.chunkPos,o.chunk,t,Math.max(o.maxPoint,t.maxPoint));return t}}qe.empty=new qe([],[],null,-1);function lA(n){if(n.length>1)for(let e=n[0],t=1;t<n.length;t++){let r=n[t];if(sh(e,r)>0)return n.slice().sort(sh);e=r}return n}qe.empty.nextLayer=qe.empty;class Ns{finishChunk(e){this.chunks.push(new mc(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,e&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(e,t,r){this.addInner(e,t,r)||(this.nextLayer||(this.nextLayer=new Ns)).add(e,t,r)}addInner(e,t,r){let o=e-this.lastTo||r.startSide-this.last.endSide;if(o<=0&&(e-this.lastFrom||r.startSide-this.last.startSide)<0)throw new Error("Ranges must be added sorted by `from` position and `startSide`");return o<0?!1:(this.from.length==250&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=e),this.from.push(e-this.chunkStart),this.to.push(t-this.chunkStart),this.last=r,this.lastFrom=e,this.lastTo=t,this.value.push(r),r.point&&(this.maxPoint=Math.max(this.maxPoint,t-e)),!0)}addChunk(e,t){if((e-this.lastTo||t.value[0].startSide-this.last.endSide)<0)return!1;this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,t.maxPoint),this.chunks.push(t),this.chunkPos.push(e);let r=t.value.length-1;return this.last=t.value[r],this.lastFrom=t.from[r]+e,this.lastTo=t.to[r]+e,!0}finish(){return this.finishInner(qe.empty)}finishInner(e){if(this.from.length&&this.finishChunk(!1),this.chunks.length==0)return e;let t=qe.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(e):e,this.setMaxPoint);return this.from=null,t}}function jf(n,e,t){let r=new Map;for(let s of n)for(let l=0;l<s.chunk.length;l++)s.chunk[l].maxPoint<=0&&r.set(s.chunk[l],s.chunkPos[l]);let o=new Set;for(let s of e)for(let l=0;l<s.chunk.length;l++){let h=r.get(s.chunk[l]);h!=null&&(t?t.mapPos(h):h)==s.chunkPos[l]&&!(t!=null&&t.touchesRange(h,h+s.chunk[l].length))&&o.add(s.chunk[l])}return o}class bm{constructor(e,t,r,o=0){this.layer=e,this.skip=t,this.minPoint=r,this.rank=o}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(e,t=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(e,t,!1),this}gotoInner(e,t,r){for(;this.chunkIndex<this.layer.chunk.length;){let o=this.layer.chunk[this.chunkIndex];if(!(this.skip&&this.skip.has(o)||this.layer.chunkEnd(this.chunkIndex)<e||o.maxPoint<this.minPoint))break;this.chunkIndex++,r=!1}if(this.chunkIndex<this.layer.chunk.length){let o=this.layer.chunk[this.chunkIndex].findIndex(e-this.layer.chunkPos[this.chunkIndex],t,!0);(!r||this.rangeIndex<o)&&this.setRangeIndex(o)}this.next()}forward(e,t){(this.to-e||this.endSide-t)<0&&this.gotoInner(e,t,!0)}next(){for(;;)if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null;break}else{let e=this.layer.chunkPos[this.chunkIndex],t=this.layer.chunk[this.chunkIndex],r=e+t.from[this.rangeIndex];if(this.from=r,this.to=e+t.to[this.rangeIndex],this.value=t.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}setRangeIndex(e){if(e==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;this.rangeIndex=0}else this.rangeIndex=e}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(e){return this.from-e.from||this.startSide-e.startSide||this.rank-e.rank||this.to-e.to||this.endSide-e.endSide}}class uo{constructor(e){this.heap=e}static from(e,t=null,r=-1){let o=[];for(let s=0;s<e.length;s++)for(let l=e[s];!l.isEmpty;l=l.nextLayer)l.maxPoint>=r&&o.push(new bm(l,t,r,s));return o.length==1?o[0]:new uo(o)}get startSide(){return this.value?this.value.startSide:0}goto(e,t=-1e9){for(let r of this.heap)r.goto(e,t);for(let r=this.heap.length>>1;r>=0;r--)Ml(this.heap,r);return this.next(),this}forward(e,t){for(let r of this.heap)r.forward(e,t);for(let r=this.heap.length>>1;r>=0;r--)Ml(this.heap,r);(this.to-e||this.value.endSide-t)<0&&this.next()}next(){if(this.heap.length==0)this.from=this.to=1e9,this.value=null,this.rank=-1;else{let e=this.heap[0];this.from=e.from,this.to=e.to,this.value=e.value,this.rank=e.rank,e.value&&e.next(),Ml(this.heap,0)}}}function Ml(n,e){for(let t=n[e];;){let r=(e<<1)+1;if(r>=n.length)break;let o=n[r];if(r+1<n.length&&o.compare(n[r+1])>=0&&(o=n[r+1],r++),t.compare(o)<0)break;n[r]=t,n[e]=o,e=r}}class Xi{constructor(e,t,r){this.minPoint=r,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=uo.from(e,t,r)}goto(e,t=-1e9){return this.cursor.goto(e,t),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=e,this.endSide=t,this.openStart=-1,this.next(),this}forward(e,t){for(;this.minActive>-1&&(this.activeTo[this.minActive]-e||this.active[this.minActive].endSide-t)<0;)this.removeActive(this.minActive);this.cursor.forward(e,t)}removeActive(e){bs(this.active,e),bs(this.activeTo,e),bs(this.activeRank,e),this.minActive=Pf(this.active,this.activeTo)}addActive(e){let t=0,{value:r,to:o,rank:s}=this.cursor;for(;t<this.activeRank.length&&(s-this.activeRank[t]||o-this.activeTo[t])>0;)t++;xs(this.active,t,r),xs(this.activeTo,t,o),xs(this.activeRank,t,s),e&&xs(e,t,this.cursor.from),this.minActive=Pf(this.active,this.activeTo)}next(){let e=this.to,t=this.point;this.point=null;let r=this.openStart<0?[]:null;for(;;){let o=this.minActive;if(o>-1&&(this.activeTo[o]-this.cursor.from||this.active[o].endSide-this.cursor.startSide)<0){if(this.activeTo[o]>e){this.to=this.activeTo[o],this.endSide=this.active[o].endSide;break}this.removeActive(o),r&&bs(r,o)}else if(this.cursor.value)if(this.cursor.from>e){this.to=this.cursor.from,this.endSide=this.cursor.startSide;break}else{let s=this.cursor.value;if(!s.point)this.addActive(r),this.cursor.next();else if(t&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)this.cursor.next();else{this.point=s,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=s.endSide,this.cursor.next(),this.forward(this.to,this.endSide);break}}else{this.to=this.endSide=1e9;break}}if(r){this.openStart=0;for(let o=r.length-1;o>=0&&r[o]<e;o--)this.openStart++}}activeForPoint(e){if(!this.active.length)return this.active;let t=[];for(let r=this.active.length-1;r>=0&&!(this.activeRank[r]<this.pointRank);r--)(this.activeTo[r]>e||this.activeTo[r]==e&&this.active[r].endSide>=this.point.endSide)&&t.push(this.active[r]);return t.reverse()}openEnd(e){let t=0;for(let r=this.activeTo.length-1;r>=0&&this.activeTo[r]>e;r--)t++;return t}}function Lf(n,e,t,r,o,s){n.goto(e),t.goto(r);let l=r+o,h=r,u=r-e;for(;;){let f=n.to+u-t.to,d=f||n.endSide-t.endSide,m=d<0?n.to+u:t.to,v=Math.min(m,l);if(n.point||t.point?n.point&&t.point&&(n.point==t.point||n.point.eq(t.point))&&ah(n.activeForPoint(n.to),t.activeForPoint(t.to))||s.comparePoint(h,v,n.point,t.point):v>h&&!ah(n.active,t.active)&&s.compareRange(h,v,n.active,t.active),m>l)break;(f||n.openEnd!=t.openEnd)&&s.boundChange&&s.boundChange(m),h=m,d<=0&&n.next(),d>=0&&t.next()}}function ah(n,e){if(n.length!=e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!=e[t]&&!n[t].eq(e[t]))return!1;return!0}function bs(n,e){for(let t=e,r=n.length-1;t<r;t++)n[t]=n[t+1];n.pop()}function xs(n,e,t){for(let r=n.length-1;r>=e;r--)n[r+1]=n[r];n[e]=t}function Pf(n,e){let t=-1,r=1e9;for(let o=0;o<e.length;o++)(e[o]-r||n[o].endSide-n[t].endSide)<0&&(t=o,r=e[o]);return t}function hA(n,e,t,r){for(let o=0,s=0;;){if(s>=e)return o;if(o==n.length)break;s+=n.charCodeAt(o)==9?t-s%t:1,o=Wn(n,o)}return n.length}const lh="ͼ",zf=typeof Symbol>"u"?"__"+lh:Symbol.for(lh),hh=typeof Symbol>"u"?"__styleSet"+Math.floor(Math.random()*1e8):Symbol("styleSet"),Bf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:{};class mi{constructor(e,t){this.rules=[];let{finish:r}=t||{};function o(l){return/^@/.test(l)?[l]:l.split(/,\s*/)}function s(l,h,u,f){let d=[],m=/^@(\w+)\b/.exec(l[0]),v=m&&m[1]=="keyframes";if(m&&h==null)return u.push(l[0]+";");for(let x in h){let w=h[x];if(/&/.test(x))s(x.split(/,\s*/).map(S=>l.map(k=>S.replace(/&/,k))).reduce((S,k)=>S.concat(k)),w,u);else if(w&&typeof w=="object"){if(!m)throw new RangeError("The value of a property ("+x+") should be a primitive value.");s(o(x),w,d,v)}else w!=null&&d.push(x.replace(/_.*/,"").replace(/[A-Z]/g,S=>"-"+S.toLowerCase())+": "+w+";")}(d.length||v)&&u.push((r&&!m&&!f?l.map(r):l).join(", ")+" {"+d.join(" ")+"}")}for(let l in e)s(o(l),e[l],this.rules)}getRules(){return this.rules.join(`
`)}static newName(){let e=Bf[zf]||1;return Bf[zf]=e+1,lh+e.toString(36)}static mount(e,t,r){let o=e[hh],s=r&&r.nonce;o?s&&o.setNonce(s):o=new cA(e,s),o.mount(Array.isArray(t)?t:[t],e)}}let Nf=new Map;class cA{constructor(e,t){let r=e.ownerDocument||e,o=r.defaultView;if(!e.head&&e.adoptedStyleSheets&&o.CSSStyleSheet){let s=Nf.get(r);if(s)return e[hh]=s;this.sheet=new o.CSSStyleSheet,Nf.set(r,this)}else this.styleTag=r.createElement("style"),t&&this.styleTag.setAttribute("nonce",t);this.modules=[],e[hh]=this}mount(e,t){let r=this.sheet,o=0,s=0;for(let l=0;l<e.length;l++){let h=e[l],u=this.modules.indexOf(h);if(u<s&&u>-1&&(this.modules.splice(u,1),s--,u=-1),u==-1){if(this.modules.splice(s++,0,h),r)for(let f=0;f<h.rules.length;f++)r.insertRule(h.rules[f],o++)}else{for(;s<u;)o+=this.modules[s++].rules.length;o+=h.rules.length,s++}}if(r)t.adoptedStyleSheets.indexOf(this.sheet)<0&&(t.adoptedStyleSheets=[this.sheet,...t.adoptedStyleSheets]);else{let l="";for(let u=0;u<this.modules.length;u++)l+=this.modules[u].getRules()+`
`;this.styleTag.textContent=l;let h=t.head||t;this.styleTag.parentNode!=h&&h.insertBefore(this.styleTag,h.firstChild)}}setNonce(e){this.styleTag&&this.styleTag.getAttribute("nonce")!=e&&this.styleTag.setAttribute("nonce",e)}}var vi={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},ch={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'};for(var bt=0;bt<10;bt++)vi[48+bt]=vi[96+bt]=String(bt);for(var bt=1;bt<=24;bt++)vi[bt+111]="F"+bt;for(var bt=65;bt<=90;bt++)vi[bt]=String.fromCharCode(bt+32),ch[bt]=String.fromCharCode(bt);for(var Tl in vi)ch.hasOwnProperty(Tl)||(ch[Tl]=vi[Tl]);function fo(n){let e;return n.nodeType==11?e=n.getSelection?n:n.ownerDocument:e=n,e.getSelection()}function uh(n,e){return e?n==e||n.contains(e.nodeType!=1?e.parentNode:e):!1}function Os(n,e){if(!e.anchorNode)return!1;try{return uh(n,e.anchorNode)}catch{return!1}}function po(n){return n.nodeType==3?Lr(n,0,n.nodeValue.length).getClientRects():n.nodeType==1?n.getClientRects():[]}function oo(n,e,t,r){return t?Ff(n,e,t,r,-1)||Ff(n,e,t,r,1):!1}function jr(n){for(var e=0;;e++)if(n=n.previousSibling,!n)return e}function Fs(n){return n.nodeType==1&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName)}function Ff(n,e,t,r,o){for(;;){if(n==t&&e==r)return!0;if(e==(o<0?0:Tn(n))){if(n.nodeName=="DIV")return!1;let s=n.parentNode;if(!s||s.nodeType!=1)return!1;e=jr(n)+(o<0?0:1),n=s}else if(n.nodeType==1){if(n=n.childNodes[e+(o<0?-1:0)],n.nodeType==1&&n.contentEditable=="false")return!1;e=o<0?Tn(n):0}else return!1}}function Tn(n){return n.nodeType==3?n.nodeValue.length:n.childNodes.length}function ta(n,e){let t=e?n.left:n.right;return{left:t,right:t,top:n.top,bottom:n.bottom}}function uA(n){let e=n.visualViewport;return e?{left:0,right:e.width,top:0,bottom:e.height}:{left:0,right:n.innerWidth,top:0,bottom:n.innerHeight}}function xm(n,e){let t=e.width/n.offsetWidth,r=e.height/n.offsetHeight;return(t>.995&&t<1.005||!isFinite(t)||Math.abs(e.width-n.offsetWidth)<1)&&(t=1),(r>.995&&r<1.005||!isFinite(r)||Math.abs(e.height-n.offsetHeight)<1)&&(r=1),{scaleX:t,scaleY:r}}function dA(n,e,t,r,o,s,l,h){let u=n.ownerDocument,f=u.defaultView||window;for(let d=n,m=!1;d&&!m;)if(d.nodeType==1){let v,x=d==u.body,w=1,S=1;if(x)v=uA(f);else{if(/^(fixed|sticky)$/.test(getComputedStyle(d).position)&&(m=!0),d.scrollHeight<=d.clientHeight&&d.scrollWidth<=d.clientWidth){d=d.assignedSlot||d.parentNode;continue}let T=d.getBoundingClientRect();({scaleX:w,scaleY:S}=xm(d,T)),v={left:T.left,right:T.left+d.clientWidth*w,top:T.top,bottom:T.top+d.clientHeight*S}}let k=0,A=0;if(o=="nearest")e.top<v.top?(A=e.top-(v.top+l),t>0&&e.bottom>v.bottom+A&&(A=e.bottom-v.bottom+l)):e.bottom>v.bottom&&(A=e.bottom-v.bottom+l,t<0&&e.top-A<v.top&&(A=e.top-(v.top+l)));else{let T=e.bottom-e.top,D=v.bottom-v.top;A=(o=="center"&&T<=D?e.top+T/2-D/2:o=="start"||o=="center"&&t<0?e.top-l:e.bottom-D+l)-v.top}if(r=="nearest"?e.left<v.left?(k=e.left-(v.left+s),t>0&&e.right>v.right+k&&(k=e.right-v.right+s)):e.right>v.right&&(k=e.right-v.right+s,t<0&&e.left<v.left+k&&(k=e.left-(v.left+s))):k=(r=="center"?e.left+(e.right-e.left)/2-(v.right-v.left)/2:r=="start"==h?e.left-s:e.right-(v.right-v.left)+s)-v.left,k||A)if(x)f.scrollBy(k,A);else{let T=0,D=0;if(A){let j=d.scrollTop;d.scrollTop+=A/S,D=(d.scrollTop-j)*S}if(k){let j=d.scrollLeft;d.scrollLeft+=k/w,T=(d.scrollLeft-j)*w}e={left:e.left-T,top:e.top-D,right:e.right-T,bottom:e.bottom-D},T&&Math.abs(T-k)<1&&(r="nearest"),D&&Math.abs(D-A)<1&&(o="nearest")}if(x)break;(e.top<v.top||e.bottom>v.bottom||e.left<v.left||e.right>v.right)&&(e={left:Math.max(e.left,v.left),right:Math.min(e.right,v.right),top:Math.max(e.top,v.top),bottom:Math.min(e.bottom,v.bottom)}),d=d.assignedSlot||d.parentNode}else if(d.nodeType==11)d=d.host;else break}function fA(n){let e=n.ownerDocument,t,r;for(let o=n.parentNode;o&&!(o==e.body||t&&r);)if(o.nodeType==1)!r&&o.scrollHeight>o.clientHeight&&(r=o),!t&&o.scrollWidth>o.clientWidth&&(t=o),o=o.assignedSlot||o.parentNode;else if(o.nodeType==11)o=o.host;else break;return{x:t,y:r}}class pA{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(e){return this.anchorNode==e.anchorNode&&this.anchorOffset==e.anchorOffset&&this.focusNode==e.focusNode&&this.focusOffset==e.focusOffset}setRange(e){let{anchorNode:t,focusNode:r}=e;this.set(t,Math.min(e.anchorOffset,t?Tn(t):0),r,Math.min(e.focusOffset,r?Tn(r):0))}set(e,t,r,o){this.anchorNode=e,this.anchorOffset=t,this.focusNode=r,this.focusOffset=o}}let oi=null;function wm(n){if(n.setActive)return n.setActive();if(oi)return n.focus(oi);let e=[];for(let t=n;t&&(e.push(t,t.scrollTop,t.scrollLeft),t!=t.ownerDocument);t=t.parentNode);if(n.focus(oi==null?{get preventScroll(){return oi={preventScroll:!0},!0}}:void 0),!oi){oi=!1;for(let t=0;t<e.length;){let r=e[t++],o=e[t++],s=e[t++];r.scrollTop!=o&&(r.scrollTop=o),r.scrollLeft!=s&&(r.scrollLeft=s)}}}let Wf;function Lr(n,e,t=e){let r=Wf||(Wf=document.createRange());return r.setEnd(n,t),r.setStart(n,e),r}function hi(n,e,t,r){let o={key:e,code:e,keyCode:t,which:t,cancelable:!0};r&&({altKey:o.altKey,ctrlKey:o.ctrlKey,shiftKey:o.shiftKey,metaKey:o.metaKey}=r);let s=new KeyboardEvent("keydown",o);s.synthetic=!0,n.dispatchEvent(s);let l=new KeyboardEvent("keyup",o);return l.synthetic=!0,n.dispatchEvent(l),s.defaultPrevented||l.defaultPrevented}function gA(n){for(;n;){if(n&&(n.nodeType==9||n.nodeType==11&&n.host))return n;n=n.assignedSlot||n.parentNode}return null}function ym(n){for(;n.attributes.length;)n.removeAttributeNode(n.attributes[0])}function mA(n,e){let t=e.focusNode,r=e.focusOffset;if(!t||e.anchorNode!=t||e.anchorOffset!=r)return!1;for(r=Math.min(r,Tn(t));;)if(r){if(t.nodeType!=1)return!1;let o=t.childNodes[r-1];o.contentEditable=="false"?r--:(t=o,r=Tn(t))}else{if(t==n)return!0;r=jr(t),t=t.parentNode}}function $m(n){return n.scrollTop>Math.max(1,n.scrollHeight-n.clientHeight-4)}function Cm(n,e){for(let t=n,r=e;;){if(t.nodeType==3&&r>0)return{node:t,offset:r};if(t.nodeType==1&&r>0){if(t.contentEditable=="false")return null;t=t.childNodes[r-1],r=Tn(t)}else if(t.parentNode&&!Fs(t))r=jr(t),t=t.parentNode;else return null}}function Sm(n,e){for(let t=n,r=e;;){if(t.nodeType==3&&r<t.nodeValue.length)return{node:t,offset:r};if(t.nodeType==1&&r<t.childNodes.length){if(t.contentEditable=="false")return null;t=t.childNodes[r],r=0}else if(t.parentNode&&!Fs(t))r=jr(t)+1,t=t.parentNode;else return null}}class St{constructor(e,t,r=!0){this.node=e,this.offset=t,this.precise=r}static before(e,t){return new St(e.parentNode,jr(e),t)}static after(e,t){return new St(e.parentNode,jr(e)+1,t)}}const vc=[];class Ne{constructor(){this.parent=null,this.dom=null,this.flags=2}get overrideDOMText(){return null}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(e){let t=this.posAtStart;for(let r of this.children){if(r==e)return t;t+=r.length+r.breakAfter}throw new RangeError("Invalid child in posBefore")}posAfter(e){return this.posBefore(e)+e.length}sync(e,t){if(this.flags&2){let r=this.dom,o=null,s;for(let l of this.children){if(l.flags&7){if(!l.dom&&(s=o?o.nextSibling:r.firstChild)){let h=Ne.get(s);(!h||!h.parent&&h.canReuseDOM(l))&&l.reuseDOM(s)}l.sync(e,t),l.flags&=-8}if(s=o?o.nextSibling:r.firstChild,t&&!t.written&&t.node==r&&s!=l.dom&&(t.written=!0),l.dom.parentNode==r)for(;s&&s!=l.dom;)s=Vf(s);else r.insertBefore(l.dom,s);o=l.dom}for(s=o?o.nextSibling:r.firstChild,s&&t&&t.node==r&&(t.written=!0);s;)s=Vf(s)}else if(this.flags&1)for(let r of this.children)r.flags&7&&(r.sync(e,t),r.flags&=-8)}reuseDOM(e){}localPosFromDOM(e,t){let r;if(e==this.dom)r=this.dom.childNodes[t];else{let o=Tn(e)==0?0:t==0?-1:1;for(;;){let s=e.parentNode;if(s==this.dom)break;o==0&&s.firstChild!=s.lastChild&&(e==s.firstChild?o=-1:o=1),e=s}o<0?r=e:r=e.nextSibling}if(r==this.dom.firstChild)return 0;for(;r&&!Ne.get(r);)r=r.nextSibling;if(!r)return this.length;for(let o=0,s=0;;o++){let l=this.children[o];if(l.dom==r)return s;s+=l.length+l.breakAfter}}domBoundsAround(e,t,r=0){let o=-1,s=-1,l=-1,h=-1;for(let u=0,f=r,d=r;u<this.children.length;u++){let m=this.children[u],v=f+m.length;if(f<e&&v>t)return m.domBoundsAround(e,t,f);if(v>=e&&o==-1&&(o=u,s=f),f>t&&m.dom.parentNode==this.dom){l=u,h=d;break}d=v,f=v+m.breakAfter}return{from:s,to:h<0?r+this.length:h,startDOM:(o?this.children[o-1].dom.nextSibling:null)||this.dom.firstChild,endDOM:l<this.children.length&&l>=0?this.children[l].dom:null}}markDirty(e=!1){this.flags|=2,this.markParentsDirty(e)}markParentsDirty(e){for(let t=this.parent;t;t=t.parent){if(e&&(t.flags|=2),t.flags&1)return;t.flags|=1,e=!1}}setParent(e){this.parent!=e&&(this.parent=e,this.flags&7&&this.markParentsDirty(!0))}setDOM(e){this.dom!=e&&(this.dom&&(this.dom.cmView=null),this.dom=e,e.cmView=this)}get rootView(){for(let e=this;;){let t=e.parent;if(!t)return e;e=t}}replaceChildren(e,t,r=vc){this.markDirty();for(let o=e;o<t;o++){let s=this.children[o];s.parent==this&&r.indexOf(s)<0&&s.destroy()}r.length<250?this.children.splice(e,t-e,...r):this.children=[].concat(this.children.slice(0,e),r,this.children.slice(t));for(let o=0;o<r.length;o++)r[o].setParent(this)}ignoreMutation(e){return!1}ignoreEvent(e){return!1}childCursor(e=this.length){return new km(this.children,e,this.children.length)}childPos(e,t=1){return this.childCursor().findPos(e,t)}toString(){let e=this.constructor.name.replace("View","");return e+(this.children.length?"("+this.children.join()+")":this.length?"["+(e=="Text"?this.text:this.length)+"]":"")+(this.breakAfter?"#":"")}static get(e){return e.cmView}get isEditable(){return!0}get isWidget(){return!1}get isHidden(){return!1}merge(e,t,r,o,s,l){return!1}become(e){return!1}canReuseDOM(e){return e.constructor==this.constructor&&!((this.flags|e.flags)&8)}getSide(){return 0}destroy(){for(let e of this.children)e.parent==this&&e.destroy();this.parent=null}}Ne.prototype.breakAfter=0;function Vf(n){let e=n.nextSibling;return n.parentNode.removeChild(n),e}class km{constructor(e,t,r){this.children=e,this.pos=t,this.i=r,this.off=0}findPos(e,t=1){for(;;){if(e>this.pos||e==this.pos&&(t>0||this.i==0||this.children[this.i-1].breakAfter))return this.off=e-this.pos,this;let r=this.children[--this.i];this.pos-=r.length+r.breakAfter}}}function Am(n,e,t,r,o,s,l,h,u){let{children:f}=n,d=f.length?f[e]:null,m=s.length?s[s.length-1]:null,v=m?m.breakAfter:l;if(!(e==r&&d&&!l&&!v&&s.length<2&&d.merge(t,o,s.length?m:null,t==0,h,u))){if(r<f.length){let x=f[r];x&&(o<x.length||x.breakAfter&&m!=null&&m.breakAfter)?(e==r&&(x=x.split(o),o=0),!v&&m&&x.merge(0,o,m,!0,0,u)?s[s.length-1]=x:((o||x.children.length&&!x.children[0].length)&&x.merge(0,o,null,!1,0,u),s.push(x))):x!=null&&x.breakAfter&&(m?m.breakAfter=1:l=1),r++}for(d&&(d.breakAfter=l,t>0&&(!l&&s.length&&d.merge(t,d.length,s[0],!1,h,0)?d.breakAfter=s.shift().breakAfter:(t<d.length||d.children.length&&d.children[d.children.length-1].length==0)&&d.merge(t,d.length,null,!1,h,0),e++));e<r&&s.length;)if(f[r-1].become(s[s.length-1]))r--,s.pop(),u=s.length?0:h;else if(f[e].become(s[0]))e++,s.shift(),h=s.length?0:u;else break;!s.length&&e&&r<f.length&&!f[e-1].breakAfter&&f[r].merge(0,0,f[e-1],!1,h,u)&&e--,(e<r||s.length)&&n.replaceChildren(e,r,s)}}function Mm(n,e,t,r,o,s){let l=n.childCursor(),{i:h,off:u}=l.findPos(t,1),{i:f,off:d}=l.findPos(e,-1),m=e-t;for(let v of r)m+=v.length;n.length+=m,Am(n,f,d,h,u,r,0,o,s)}let an=typeof navigator<"u"?navigator:{userAgent:"",vendor:"",platform:""},dh=typeof document<"u"?document:{documentElement:{style:{}}};const fh=/Edge\/(\d+)/.exec(an.userAgent),Tm=/MSIE \d/.test(an.userAgent),ph=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(an.userAgent),na=!!(Tm||ph||fh),Hf=!na&&/gecko\/(\d+)/i.test(an.userAgent),Rl=!na&&/Chrome\/(\d+)/.exec(an.userAgent),vA="webkitFontSmoothing"in dh.documentElement.style,Rm=!na&&/Apple Computer/.test(an.vendor),Uf=Rm&&(/Mobile\/\w+/.test(an.userAgent)||an.maxTouchPoints>2);var G={mac:Uf||/Mac/.test(an.platform),ie:na,ie_version:Tm?dh.documentMode||6:ph?+ph[1]:fh?+fh[1]:0,gecko:Hf,gecko_version:Hf?+(/Firefox\/(\d+)/.exec(an.userAgent)||[0,0])[1]:0,chrome:!!Rl,chrome_version:Rl?+Rl[1]:0,ios:Uf,android:/Android\b/.test(an.userAgent),safari:Rm,webkit_version:vA?+(/\bAppleWebKit\/(\d+)/.exec(an.userAgent)||[0,0])[1]:0,tabSize:dh.documentElement.style.tabSize!=null?"tab-size":"-moz-tab-size"};const bA=256;class mn extends Ne{constructor(e){super(),this.text=e}get length(){return this.text.length}createDOM(e){this.setDOM(e||document.createTextNode(this.text))}sync(e,t){this.dom||this.createDOM(),this.dom.nodeValue!=this.text&&(t&&t.node==this.dom&&(t.written=!0),this.dom.nodeValue=this.text)}reuseDOM(e){e.nodeType==3&&this.createDOM(e)}merge(e,t,r){return this.flags&8||r&&(!(r instanceof mn)||this.length-(t-e)+r.length>bA||r.flags&8)?!1:(this.text=this.text.slice(0,e)+(r?r.text:"")+this.text.slice(t),this.markDirty(),!0)}split(e){let t=new mn(this.text.slice(e));return this.text=this.text.slice(0,e),this.markDirty(),t.flags|=this.flags&8,t}localPosFromDOM(e,t){return e==this.dom?t:t?this.text.length:0}domAtPos(e){return new St(this.dom,e)}domBoundsAround(e,t,r){return{from:r,to:r+this.length,startDOM:this.dom,endDOM:this.dom.nextSibling}}coordsAt(e,t){return xA(this.dom,e,t)}}class Kn extends Ne{constructor(e,t=[],r=0){super(),this.mark=e,this.children=t,this.length=r;for(let o of t)o.setParent(this)}setAttrs(e){if(ym(e),this.mark.class&&(e.className=this.mark.class),this.mark.attrs)for(let t in this.mark.attrs)e.setAttribute(t,this.mark.attrs[t]);return e}canReuseDOM(e){return super.canReuseDOM(e)&&!((this.flags|e.flags)&8)}reuseDOM(e){e.nodeName==this.mark.tagName.toUpperCase()&&(this.setDOM(e),this.flags|=6)}sync(e,t){this.dom?this.flags&4&&this.setAttrs(this.dom):this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),super.sync(e,t)}merge(e,t,r,o,s,l){return r&&(!(r instanceof Kn&&r.mark.eq(this.mark))||e&&s<=0||t<this.length&&l<=0)?!1:(Mm(this,e,t,r?r.children.slice():[],s-1,l-1),this.markDirty(),!0)}split(e){let t=[],r=0,o=-1,s=0;for(let h of this.children){let u=r+h.length;u>e&&t.push(r<e?h.split(e-r):h),o<0&&r>=e&&(o=s),r=u,s++}let l=this.length-e;return this.length=e,o>-1&&(this.children.length=o,this.markDirty()),new Kn(this.mark,t,l)}domAtPos(e){return Dm(this,e)}coordsAt(e,t){return Em(this,e,t)}}function xA(n,e,t){let r=n.nodeValue.length;e>r&&(e=r);let o=e,s=e,l=0;e==0&&t<0||e==r&&t>=0?G.chrome||G.gecko||(e?(o--,l=1):s<r&&(s++,l=-1)):t<0?o--:s<r&&s++;let h=Lr(n,o,s).getClientRects();if(!h.length)return null;let u=h[(l?l<0:t>=0)?0:h.length-1];return G.safari&&!l&&u.width==0&&(u=Array.prototype.find.call(h,f=>f.width)||u),l?ta(u,l<0):u||null}class Dr extends Ne{static create(e,t,r){return new Dr(e,t,r)}constructor(e,t,r){super(),this.widget=e,this.length=t,this.side=r,this.prevWidget=null}split(e){let t=Dr.create(this.widget,this.length-e,this.side);return this.length-=e,t}sync(e){(!this.dom||!this.widget.updateDOM(this.dom,e))&&(this.dom&&this.prevWidget&&this.prevWidget.destroy(this.dom),this.prevWidget=null,this.setDOM(this.widget.toDOM(e)),this.widget.editable||(this.dom.contentEditable="false"))}getSide(){return this.side}merge(e,t,r,o,s,l){return r&&(!(r instanceof Dr)||!this.widget.compare(r.widget)||e>0&&s<=0||t<this.length&&l<=0)?!1:(this.length=e+(r?r.length:0)+(this.length-t),!0)}become(e){return e instanceof Dr&&e.side==this.side&&this.widget.constructor==e.widget.constructor?(this.widget.compare(e.widget)||this.markDirty(!0),this.dom&&!this.prevWidget&&(this.prevWidget=this.widget),this.widget=e.widget,this.length=e.length,!0):!1}ignoreMutation(){return!0}ignoreEvent(e){return this.widget.ignoreEvent(e)}get overrideDOMText(){if(this.length==0)return Oe.empty;let e=this;for(;e.parent;)e=e.parent;let{view:t}=e,r=t&&t.state.doc,o=this.posAtStart;return r?r.slice(o,o+this.length):Oe.empty}domAtPos(e){return(this.length?e==0:this.side>0)?St.before(this.dom):St.after(this.dom,e==this.length)}domBoundsAround(){return null}coordsAt(e,t){let r=this.widget.coordsAt(this.dom,e,t);if(r)return r;let o=this.dom.getClientRects(),s=null;if(!o.length)return null;let l=this.side?this.side<0:e>0;for(let h=l?o.length-1:0;s=o[h],!(e>0?h==0:h==o.length-1||s.top<s.bottom);h+=l?-1:1);return ta(s,!l)}get isEditable(){return!1}get isWidget(){return!0}get isHidden(){return this.widget.isHidden}destroy(){super.destroy(),this.dom&&this.widget.destroy(this.dom)}}class bi extends Ne{constructor(e){super(),this.side=e}get length(){return 0}merge(){return!1}become(e){return e instanceof bi&&e.side==this.side}split(){return new bi(this.side)}sync(){if(!this.dom){let e=document.createElement("img");e.className="cm-widgetBuffer",e.setAttribute("aria-hidden","true"),this.setDOM(e)}}getSide(){return this.side}domAtPos(e){return this.side>0?St.before(this.dom):St.after(this.dom)}localPosFromDOM(){return 0}domBoundsAround(){return null}coordsAt(e){return this.dom.getBoundingClientRect()}get overrideDOMText(){return Oe.empty}get isHidden(){return!0}}mn.prototype.children=Dr.prototype.children=bi.prototype.children=vc;function Dm(n,e){let t=n.dom,{children:r}=n,o=0;for(let s=0;o<r.length;o++){let l=r[o],h=s+l.length;if(!(h==s&&l.getSide()<=0)){if(e>s&&e<h&&l.dom.parentNode==t)return l.domAtPos(e-s);if(e<=s)break;s=h}}for(let s=o;s>0;s--){let l=r[s-1];if(l.dom.parentNode==t)return l.domAtPos(l.length)}for(let s=o;s<r.length;s++){let l=r[s];if(l.dom.parentNode==t)return l.domAtPos(0)}return new St(t,0)}function Om(n,e,t){let r,{children:o}=n;t>0&&e instanceof Kn&&o.length&&(r=o[o.length-1])instanceof Kn&&r.mark.eq(e.mark)?Om(r,e.children[0],t-1):(o.push(e),e.setParent(n)),n.length+=e.length}function Em(n,e,t){let r=null,o=-1,s=null,l=-1;function h(f,d){for(let m=0,v=0;m<f.children.length&&v<=d;m++){let x=f.children[m],w=v+x.length;w>=d&&(x.children.length?h(x,d-v):(!s||s.isHidden&&(t>0||yA(s,x)))&&(w>d||v==w&&x.getSide()>0)?(s=x,l=d-v):(v<d||v==w&&x.getSide()<0&&!x.isHidden)&&(r=x,o=d-v)),v=w}}h(n,e);let u=(t<0?r:s)||r||s;return u?u.coordsAt(Math.max(0,u==r?o:l),t):wA(n)}function wA(n){let e=n.dom.lastChild;if(!e)return n.dom.getBoundingClientRect();let t=po(e);return t[t.length-1]||null}function yA(n,e){let t=n.coordsAt(0,1),r=e.coordsAt(0,1);return t&&r&&r.top<t.bottom}function gh(n,e){for(let t in n)t=="class"&&e.class?e.class+=" "+n.class:t=="style"&&e.style?e.style+=";"+n.style:e[t]=n[t];return e}const qf=Object.create(null);function Ws(n,e,t){if(n==e)return!0;n||(n=qf),e||(e=qf);let r=Object.keys(n),o=Object.keys(e);if(r.length-(t&&r.indexOf(t)>-1?1:0)!=o.length-(t&&o.indexOf(t)>-1?1:0))return!1;for(let s of r)if(s!=t&&(o.indexOf(s)==-1||n[s]!==e[s]))return!1;return!0}function mh(n,e,t){let r=!1;if(e)for(let o in e)t&&o in t||(r=!0,o=="style"?n.style.cssText="":n.removeAttribute(o));if(t)for(let o in t)e&&e[o]==t[o]||(r=!0,o=="style"?n.style.cssText=t[o]:n.setAttribute(o,t[o]));return r}function $A(n){let e=Object.create(null);for(let t=0;t<n.attributes.length;t++){let r=n.attributes[t];e[r.name]=r.value}return e}class bc{eq(e){return!1}updateDOM(e,t){return!1}compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(e){return!0}coordsAt(e,t,r){return null}get isHidden(){return!1}get editable(){return!1}destroy(e){}}var Mn=function(n){return n[n.Text=0]="Text",n[n.WidgetBefore=1]="WidgetBefore",n[n.WidgetAfter=2]="WidgetAfter",n[n.WidgetRange=3]="WidgetRange",n}(Mn||(Mn={}));class Ot extends gi{constructor(e,t,r,o){super(),this.startSide=e,this.endSide=t,this.widget=r,this.spec=o}get heightRelevant(){return!1}static mark(e){return new Co(e)}static widget(e){let t=Math.max(-1e4,Math.min(1e4,e.side||0)),r=!!e.block;return t+=r&&!e.inlineOrder?t>0?3e8:-4e8:t>0?1e8:-1e8,new dr(e,t,t,r,e.widget||null,!1)}static replace(e){let t=!!e.block,r,o;if(e.isBlockGap)r=-5e8,o=4e8;else{let{start:s,end:l}=Im(e,t);r=(s?t?-3e8:-1:5e8)-1,o=(l?t?2e8:1:-6e8)+1}return new dr(e,r,o,t,e.widget||null,!0)}static line(e){return new So(e)}static set(e,t=!1){return qe.of(e,t)}hasHeight(){return this.widget?this.widget.estimatedHeight>-1:!1}}Ot.none=qe.empty;class Co extends Ot{constructor(e){let{start:t,end:r}=Im(e);super(t?-1:5e8,r?1:-6e8,null,e),this.tagName=e.tagName||"span",this.class=e.class||"",this.attrs=e.attributes||null}eq(e){var t,r;return this==e||e instanceof Co&&this.tagName==e.tagName&&(this.class||((t=this.attrs)===null||t===void 0?void 0:t.class))==(e.class||((r=e.attrs)===null||r===void 0?void 0:r.class))&&Ws(this.attrs,e.attrs,"class")}range(e,t=e){if(e>=t)throw new RangeError("Mark decorations may not be empty");return super.range(e,t)}}Co.prototype.point=!1;class So extends Ot{constructor(e){super(-2e8,-2e8,null,e)}eq(e){return e instanceof So&&this.spec.class==e.spec.class&&Ws(this.spec.attributes,e.spec.attributes)}range(e,t=e){if(t!=e)throw new RangeError("Line decoration ranges must be zero-length");return super.range(e,t)}}So.prototype.mapMode=Gt.TrackBefore;So.prototype.point=!0;class dr extends Ot{constructor(e,t,r,o,s,l){super(t,r,s,e),this.block=o,this.isReplace=l,this.mapMode=o?t<=0?Gt.TrackBefore:Gt.TrackAfter:Gt.TrackDel}get type(){return this.startSide!=this.endSide?Mn.WidgetRange:this.startSide<=0?Mn.WidgetBefore:Mn.WidgetAfter}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(e){return e instanceof dr&&CA(this.widget,e.widget)&&this.block==e.block&&this.startSide==e.startSide&&this.endSide==e.endSide}range(e,t=e){if(this.isReplace&&(e>t||e==t&&this.startSide>0&&this.endSide<=0))throw new RangeError("Invalid range for replacement decoration");if(!this.isReplace&&t!=e)throw new RangeError("Widget decorations can only have zero-length ranges");return super.range(e,t)}}dr.prototype.point=!0;function Im(n,e=!1){let{inclusiveStart:t,inclusiveEnd:r}=n;return t==null&&(t=n.inclusive),r==null&&(r=n.inclusive),{start:t??e,end:r??e}}function CA(n,e){return n==e||!!(n&&e&&n.compare(e))}function Es(n,e,t,r=0){let o=t.length-1;o>=0&&t[o]+r>=n?t[o]=Math.max(t[o],e):t.push(n,e)}class it extends Ne{constructor(){super(...arguments),this.children=[],this.length=0,this.prevAttrs=void 0,this.attrs=null,this.breakAfter=0}merge(e,t,r,o,s,l){if(r){if(!(r instanceof it))return!1;this.dom||r.transferDOM(this)}return o&&this.setDeco(r?r.attrs:null),Mm(this,e,t,r?r.children.slice():[],s,l),!0}split(e){let t=new it;if(t.breakAfter=this.breakAfter,this.length==0)return t;let{i:r,off:o}=this.childPos(e);o&&(t.append(this.children[r].split(o),0),this.children[r].merge(o,this.children[r].length,null,!1,0,0),r++);for(let s=r;s<this.children.length;s++)t.append(this.children[s],0);for(;r>0&&this.children[r-1].length==0;)this.children[--r].destroy();return this.children.length=r,this.markDirty(),this.length=e,t}transferDOM(e){this.dom&&(this.markDirty(),e.setDOM(this.dom),e.prevAttrs=this.prevAttrs===void 0?this.attrs:this.prevAttrs,this.prevAttrs=void 0,this.dom=null)}setDeco(e){Ws(this.attrs,e)||(this.dom&&(this.prevAttrs=this.attrs,this.markDirty()),this.attrs=e)}append(e,t){Om(this,e,t)}addLineDeco(e){let t=e.spec.attributes,r=e.spec.class;t&&(this.attrs=gh(t,this.attrs||{})),r&&(this.attrs=gh({class:r},this.attrs||{}))}domAtPos(e){return Dm(this,e)}reuseDOM(e){e.nodeName=="DIV"&&(this.setDOM(e),this.flags|=6)}sync(e,t){var r;this.dom?this.flags&4&&(ym(this.dom),this.dom.className="cm-line",this.prevAttrs=this.attrs?null:void 0):(this.setDOM(document.createElement("div")),this.dom.className="cm-line",this.prevAttrs=this.attrs?null:void 0),this.prevAttrs!==void 0&&(mh(this.dom,this.prevAttrs,this.attrs),this.dom.classList.add("cm-line"),this.prevAttrs=void 0),super.sync(e,t);let o=this.dom.lastChild;for(;o&&Ne.get(o)instanceof Kn;)o=o.lastChild;if(!o||!this.length||o.nodeName!="BR"&&((r=Ne.get(o))===null||r===void 0?void 0:r.isEditable)==!1&&(!G.ios||!this.children.some(s=>s instanceof mn))){let s=document.createElement("BR");s.cmIgnore=!0,this.dom.appendChild(s)}}measureTextSize(){if(this.children.length==0||this.length>20)return null;let e=0,t;for(let r of this.children){if(!(r instanceof mn)||/[^ -~]/.test(r.text))return null;let o=po(r.dom);if(o.length!=1)return null;e+=o[0].width,t=o[0].height}return e?{lineHeight:this.dom.getBoundingClientRect().height,charWidth:e/this.length,textHeight:t}:null}coordsAt(e,t){let r=Em(this,e,t);if(!this.children.length&&r&&this.parent){let{heightOracle:o}=this.parent.view.viewState,s=r.bottom-r.top;if(Math.abs(s-o.lineHeight)<2&&o.textHeight<s){let l=(s-o.textHeight)/2;return{top:r.top+l,bottom:r.bottom-l,left:r.left,right:r.left}}}return r}become(e){return e instanceof it&&this.children.length==0&&e.children.length==0&&Ws(this.attrs,e.attrs)&&this.breakAfter==e.breakAfter}covers(){return!0}static find(e,t){for(let r=0,o=0;r<e.children.length;r++){let s=e.children[r],l=o+s.length;if(l>=t){if(s instanceof it)return s;if(l>t)break}o=l+s.breakAfter}return null}}class qn extends Ne{constructor(e,t,r){super(),this.widget=e,this.length=t,this.deco=r,this.breakAfter=0,this.prevWidget=null}merge(e,t,r,o,s,l){return r&&(!(r instanceof qn)||!this.widget.compare(r.widget)||e>0&&s<=0||t<this.length&&l<=0)?!1:(this.length=e+(r?r.length:0)+(this.length-t),!0)}domAtPos(e){return e==0?St.before(this.dom):St.after(this.dom,e==this.length)}split(e){let t=this.length-e;this.length=e;let r=new qn(this.widget,t,this.deco);return r.breakAfter=this.breakAfter,r}get children(){return vc}sync(e){(!this.dom||!this.widget.updateDOM(this.dom,e))&&(this.dom&&this.prevWidget&&this.prevWidget.destroy(this.dom),this.prevWidget=null,this.setDOM(this.widget.toDOM(e)),this.widget.editable||(this.dom.contentEditable="false"))}get overrideDOMText(){return this.parent?this.parent.view.state.doc.slice(this.posAtStart,this.posAtEnd):Oe.empty}domBoundsAround(){return null}become(e){return e instanceof qn&&e.widget.constructor==this.widget.constructor?(e.widget.compare(this.widget)||this.markDirty(!0),this.dom&&!this.prevWidget&&(this.prevWidget=this.widget),this.widget=e.widget,this.length=e.length,this.deco=e.deco,this.breakAfter=e.breakAfter,!0):!1}ignoreMutation(){return!0}ignoreEvent(e){return this.widget.ignoreEvent(e)}get isEditable(){return!1}get isWidget(){return!0}coordsAt(e,t){return this.widget.coordsAt(this.dom,e,t)||(this.widget instanceof vh?null:ta(this.dom.getBoundingClientRect(),this.length?e==0:t<=0))}destroy(){super.destroy(),this.dom&&this.widget.destroy(this.dom)}covers(e){let{startSide:t,endSide:r}=this.deco;return t==r?!1:e<0?t<0:r>0}}class vh extends bc{constructor(e){super(),this.height=e}toDOM(){let e=document.createElement("div");return e.className="cm-gap",this.updateDOM(e),e}eq(e){return e.height==this.height}updateDOM(e){return e.style.height=this.height+"px",!0}get editable(){return!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}}class so{constructor(e,t,r,o){this.doc=e,this.pos=t,this.end=r,this.disallowBlockEffectsFor=o,this.content=[],this.curLine=null,this.breakAtStart=0,this.pendingBuffer=0,this.bufferMarks=[],this.atCursorPos=!0,this.openStart=-1,this.openEnd=-1,this.text="",this.textOff=0,this.cursor=e.iter(),this.skip=t}posCovered(){if(this.content.length==0)return!this.breakAtStart&&this.doc.lineAt(this.pos).from!=this.pos;let e=this.content[this.content.length-1];return!(e.breakAfter||e instanceof qn&&e.deco.endSide<0)}getLine(){return this.curLine||(this.content.push(this.curLine=new it),this.atCursorPos=!0),this.curLine}flushBuffer(e=this.bufferMarks){this.pendingBuffer&&(this.curLine.append(ws(new bi(-1),e),e.length),this.pendingBuffer=0)}addBlockWidget(e){this.flushBuffer(),this.curLine=null,this.content.push(e)}finish(e){this.pendingBuffer&&e<=this.bufferMarks.length?this.flushBuffer():this.pendingBuffer=0,!this.posCovered()&&!(e&&this.content.length&&this.content[this.content.length-1]instanceof qn)&&this.getLine()}buildText(e,t,r){for(;e>0;){if(this.textOff==this.text.length){let{value:s,lineBreak:l,done:h}=this.cursor.next(this.skip);if(this.skip=0,h)throw new Error("Ran out of text content when drawing inline views");if(l){this.posCovered()||this.getLine(),this.content.length?this.content[this.content.length-1].breakAfter=1:this.breakAtStart=1,this.flushBuffer(),this.curLine=null,this.atCursorPos=!0,e--;continue}else this.text=s,this.textOff=0}let o=Math.min(this.text.length-this.textOff,e,512);this.flushBuffer(t.slice(t.length-r)),this.getLine().append(ws(new mn(this.text.slice(this.textOff,this.textOff+o)),t),r),this.atCursorPos=!0,this.textOff+=o,e-=o,r=0}}span(e,t,r,o){this.buildText(t-e,r,o),this.pos=t,this.openStart<0&&(this.openStart=o)}point(e,t,r,o,s,l){if(this.disallowBlockEffectsFor[l]&&r instanceof dr){if(r.block)throw new RangeError("Block decorations may not be specified via plugins");if(t>this.doc.lineAt(this.pos).to)throw new RangeError("Decorations that replace line breaks may not be specified via plugins")}let h=t-e;if(r instanceof dr)if(r.block)r.startSide>0&&!this.posCovered()&&this.getLine(),this.addBlockWidget(new qn(r.widget||xi.block,h,r));else{let u=Dr.create(r.widget||xi.inline,h,h?0:r.startSide),f=this.atCursorPos&&!u.isEditable&&s<=o.length&&(e<t||r.startSide>0),d=!u.isEditable&&(e<t||s>o.length||r.startSide<=0),m=this.getLine();this.pendingBuffer==2&&!f&&!u.isEditable&&(this.pendingBuffer=0),this.flushBuffer(o),f&&(m.append(ws(new bi(1),o),s),s=o.length+Math.max(0,s-o.length)),m.append(ws(u,o),s),this.atCursorPos=d,this.pendingBuffer=d?e<t||s>o.length?1:2:0,this.pendingBuffer&&(this.bufferMarks=o.slice())}else this.doc.lineAt(this.pos).from==this.pos&&this.getLine().addLineDeco(r);h&&(this.textOff+h<=this.text.length?this.textOff+=h:(this.skip+=h-(this.text.length-this.textOff),this.text="",this.textOff=0),this.pos=t),this.openStart<0&&(this.openStart=s)}static build(e,t,r,o,s){let l=new so(e,t,r,s);return l.openEnd=qe.spans(o,t,r,l),l.openStart<0&&(l.openStart=l.openEnd),l.finish(l.openEnd),l}}function ws(n,e){for(let t of e)n=new Kn(t,[n],n.length);return n}class xi extends bc{constructor(e){super(),this.tag=e}eq(e){return e.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(e){return e.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}}xi.inline=new xi("span");xi.block=new xi("div");var Dt=function(n){return n[n.LTR=0]="LTR",n[n.RTL=1]="RTL",n}(Dt||(Dt={}));const Pr=Dt.LTR,xc=Dt.RTL;function _m(n){let e=[];for(let t=0;t<n.length;t++)e.push(1<<+n[t]);return e}const SA=_m("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),kA=_m("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),bh=Object.create(null),Cn=[];for(let n of["()","[]","{}"]){let e=n.charCodeAt(0),t=n.charCodeAt(1);bh[e]=t,bh[t]=-e}function jm(n){return n<=247?SA[n]:1424<=n&&n<=1524?2:1536<=n&&n<=1785?kA[n-1536]:1774<=n&&n<=2220?4:8192<=n&&n<=8204?256:64336<=n&&n<=65023?4:1}const AA=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;class hr{get dir(){return this.level%2?xc:Pr}constructor(e,t,r){this.from=e,this.to=t,this.level=r}side(e,t){return this.dir==t==e?this.to:this.from}forward(e,t){return e==(this.dir==t)}static find(e,t,r,o){let s=-1;for(let l=0;l<e.length;l++){let h=e[l];if(h.from<=t&&h.to>=t){if(h.level==r)return l;(s<0||(o!=0?o<0?h.from<t:h.to>t:e[s].level>h.level))&&(s=l)}}if(s<0)throw new RangeError("Index out of range");return s}}function Lm(n,e){if(n.length!=e.length)return!1;for(let t=0;t<n.length;t++){let r=n[t],o=e[t];if(r.from!=o.from||r.to!=o.to||r.direction!=o.direction||!Lm(r.inner,o.inner))return!1}return!0}const Be=[];function MA(n,e,t,r,o){for(let s=0;s<=r.length;s++){let l=s?r[s-1].to:e,h=s<r.length?r[s].from:t,u=s?256:o;for(let f=l,d=u,m=u;f<h;f++){let v=jm(n.charCodeAt(f));v==512?v=d:v==8&&m==4&&(v=16),Be[f]=v==4?2:v,v&7&&(m=v),d=v}for(let f=l,d=u,m=u;f<h;f++){let v=Be[f];if(v==128)f<h-1&&d==Be[f+1]&&d&24?v=Be[f]=d:Be[f]=256;else if(v==64){let x=f+1;for(;x<h&&Be[x]==64;)x++;let w=f&&d==8||x<t&&Be[x]==8?m==1?1:8:256;for(let S=f;S<x;S++)Be[S]=w;f=x-1}else v==8&&m==1&&(Be[f]=1);d=v,v&7&&(m=v)}}}function TA(n,e,t,r,o){let s=o==1?2:1;for(let l=0,h=0,u=0;l<=r.length;l++){let f=l?r[l-1].to:e,d=l<r.length?r[l].from:t;for(let m=f,v,x,w;m<d;m++)if(x=bh[v=n.charCodeAt(m)])if(x<0){for(let S=h-3;S>=0;S-=3)if(Cn[S+1]==-x){let k=Cn[S+2],A=k&2?o:k&4?k&1?s:o:0;A&&(Be[m]=Be[Cn[S]]=A),h=S;break}}else{if(Cn.length==189)break;Cn[h++]=m,Cn[h++]=v,Cn[h++]=u}else if((w=Be[m])==2||w==1){let S=w==o;u=S?0:1;for(let k=h-3;k>=0;k-=3){let A=Cn[k+2];if(A&2)break;if(S)Cn[k+2]|=2;else{if(A&4)break;Cn[k+2]|=4}}}}}function RA(n,e,t,r){for(let o=0,s=r;o<=t.length;o++){let l=o?t[o-1].to:n,h=o<t.length?t[o].from:e;for(let u=l;u<h;){let f=Be[u];if(f==256){let d=u+1;for(;;)if(d==h){if(o==t.length)break;d=t[o++].to,h=o<t.length?t[o].from:e}else if(Be[d]==256)d++;else break;let m=s==1,v=(d<e?Be[d]:r)==1,x=m==v?m?1:2:r;for(let w=d,S=o,k=S?t[S-1].to:n;w>u;)w==k&&(w=t[--S].from,k=S?t[S-1].to:n),Be[--w]=x;u=d}else s=f,u++}}}function xh(n,e,t,r,o,s,l){let h=r%2?2:1;if(r%2==o%2)for(let u=e,f=0;u<t;){let d=!0,m=!1;if(f==s.length||u<s[f].from){let S=Be[u];S!=h&&(d=!1,m=S==16)}let v=!d&&h==1?[]:null,x=d?r:r+1,w=u;e:for(;;)if(f<s.length&&w==s[f].from){if(m)break e;let S=s[f];if(!d)for(let k=S.to,A=f+1;;){if(k==t)break e;if(A<s.length&&s[A].from==k)k=s[A++].to;else{if(Be[k]==h)break e;break}}if(f++,v)v.push(S);else{S.from>u&&l.push(new hr(u,S.from,x));let k=S.direction==Pr!=!(x%2);wh(n,k?r+1:r,o,S.inner,S.from,S.to,l),u=S.to}w=S.to}else{if(w==t||(d?Be[w]!=h:Be[w]==h))break;w++}v?xh(n,u,w,r+1,o,v,l):u<w&&l.push(new hr(u,w,x)),u=w}else for(let u=t,f=s.length;u>e;){let d=!0,m=!1;if(!f||u>s[f-1].to){let S=Be[u-1];S!=h&&(d=!1,m=S==16)}let v=!d&&h==1?[]:null,x=d?r:r+1,w=u;e:for(;;)if(f&&w==s[f-1].to){if(m)break e;let S=s[--f];if(!d)for(let k=S.from,A=f;;){if(k==e)break e;if(A&&s[A-1].to==k)k=s[--A].from;else{if(Be[k-1]==h)break e;break}}if(v)v.push(S);else{S.to<u&&l.push(new hr(S.to,u,x));let k=S.direction==Pr!=!(x%2);wh(n,k?r+1:r,o,S.inner,S.from,S.to,l),u=S.from}w=S.from}else{if(w==e||(d?Be[w-1]!=h:Be[w-1]==h))break;w--}v?xh(n,w,u,r+1,o,v,l):w<u&&l.push(new hr(w,u,x)),u=w}}function wh(n,e,t,r,o,s,l){let h=e%2?2:1;MA(n,o,s,r,h),TA(n,o,s,r,h),RA(o,s,r,h),xh(n,o,s,e,t,r,l)}function DA(n,e,t){if(!n)return[new hr(0,0,e==xc?1:0)];if(e==Pr&&!t.length&&!AA.test(n))return Pm(n.length);if(t.length)for(;n.length>Be.length;)Be[Be.length]=256;let r=[],o=e==Pr?0:1;return wh(n,o,o,t,0,n.length,r),r}function Pm(n){return[new hr(0,n,0)]}let zm="";function OA(n,e,t,r,o){var s;let l=r.head-n.from,h=hr.find(e,l,(s=r.bidiLevel)!==null&&s!==void 0?s:-1,r.assoc),u=e[h],f=u.side(o,t);if(l==f){let v=h+=o?1:-1;if(v<0||v>=e.length)return null;u=e[h=v],l=u.side(!o,t),f=u.side(o,t)}let d=Wn(n.text,l,u.forward(o,t));(d<u.from||d>u.to)&&(d=f),zm=n.text.slice(Math.min(l,d),Math.max(l,d));let m=h==(o?e.length-1:0)?null:e[h+(o?1:-1)];return m&&d==f&&m.level+(o?0:1)<u.level?X.cursor(m.side(!o,t)+n.from,m.forward(o,t)?1:-1,m.level):X.cursor(d+n.from,u.forward(o,t)?-1:1,u.level)}function EA(n,e,t){for(let r=e;r<t;r++){let o=jm(n.charCodeAt(r));if(o==1)return Pr;if(o==2||o==4)return xc}return Pr}const Bm=we.define(),Nm=we.define(),Fm=we.define(),Wm=we.define(),yh=we.define(),Vm=we.define(),Hm=we.define(),wc=we.define(),yc=we.define(),Um=we.define({combine:n=>n.some(e=>e)}),IA=we.define({combine:n=>n.some(e=>e)}),qm=we.define();class ci{constructor(e,t="nearest",r="nearest",o=5,s=5,l=!1){this.range=e,this.y=t,this.x=r,this.yMargin=o,this.xMargin=s,this.isSnapshot=l}map(e){return e.empty?this:new ci(this.range.map(e),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}clip(e){return this.range.to<=e.doc.length?this:new ci(X.cursor(e.doc.length),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}}const ys=ot.define({map:(n,e)=>n.map(e)}),Km=ot.define();function Hn(n,e,t){let r=n.facet(Wm);r.length?r[0](e):window.onerror&&window.onerror(String(e),t,void 0,void 0,e)||(t?console.error(t+":",e):console.error(e))}const Fn=we.define({combine:n=>n.length?n[0]:!0});let _A=0;const ai=we.define({combine(n){return n.filter((e,t)=>{for(let r=0;r<t;r++)if(n[r].plugin==e.plugin)return!1;return!0})}});class go{constructor(e,t,r,o,s){this.id=e,this.create=t,this.domEventHandlers=r,this.domEventObservers=o,this.baseExtensions=s(this),this.extension=this.baseExtensions.concat(ai.of({plugin:this,arg:void 0}))}of(e){return this.baseExtensions.concat(ai.of({plugin:this,arg:e}))}static define(e,t){const{eventHandlers:r,eventObservers:o,provide:s,decorations:l}=t||{};return new go(_A++,e,r,o,h=>{let u=[];return l&&u.push(mo.of(f=>{let d=f.plugin(h);return d?l(d):Ot.none})),s&&u.push(s(h)),u})}static fromClass(e,t){return go.define((r,o)=>new e(r,o),t)}}class Dl{constructor(e){this.spec=e,this.mustUpdate=null,this.value=null}get plugin(){return this.spec&&this.spec.plugin}update(e){if(this.value){if(this.mustUpdate){let t=this.mustUpdate;if(this.mustUpdate=null,this.value.update)try{this.value.update(t)}catch(r){if(Hn(t.state,r,"CodeMirror plugin crashed"),this.value.destroy)try{this.value.destroy()}catch{}this.deactivate()}}}else if(this.spec)try{this.value=this.spec.plugin.create(e,this.spec.arg)}catch(t){Hn(e.state,t,"CodeMirror plugin crashed"),this.deactivate()}return this}destroy(e){var t;if(!((t=this.value)===null||t===void 0)&&t.destroy)try{this.value.destroy()}catch(r){Hn(e.state,r,"CodeMirror plugin crashed")}}deactivate(){this.spec=this.value=null}}const Gm=we.define(),$c=we.define(),mo=we.define(),Ym=we.define(),Cc=we.define(),Xm=we.define();function Kf(n,e){let t=n.state.facet(Xm);if(!t.length)return t;let r=t.map(s=>s instanceof Function?s(n):s),o=[];return qe.spans(r,e.from,e.to,{point(){},span(s,l,h,u){let f=s-e.from,d=l-e.from,m=o;for(let v=h.length-1;v>=0;v--,u--){let x=h[v].spec.bidiIsolate,w;if(x==null&&(x=EA(e.text,f,d)),u>0&&m.length&&(w=m[m.length-1]).to==f&&w.direction==x)w.to=d,m=w.inner;else{let S={from:f,to:d,direction:x,inner:[]};m.push(S),m=S.inner}}}}),o}const Jm=we.define();function Zm(n){let e=0,t=0,r=0,o=0;for(let s of n.state.facet(Jm)){let l=s(n);l&&(l.left!=null&&(e=Math.max(e,l.left)),l.right!=null&&(t=Math.max(t,l.right)),l.top!=null&&(r=Math.max(r,l.top)),l.bottom!=null&&(o=Math.max(o,l.bottom)))}return{left:e,right:t,top:r,bottom:o}}const eo=we.define();class ln{constructor(e,t,r,o){this.fromA=e,this.toA=t,this.fromB=r,this.toB=o}join(e){return new ln(Math.min(this.fromA,e.fromA),Math.max(this.toA,e.toA),Math.min(this.fromB,e.fromB),Math.max(this.toB,e.toB))}addToSet(e){let t=e.length,r=this;for(;t>0;t--){let o=e[t-1];if(!(o.fromA>r.toA)){if(o.toA<r.fromA)break;r=r.join(o),e.splice(t-1,1)}}return e.splice(t,0,r),e}static extendWithRanges(e,t){if(t.length==0)return e;let r=[];for(let o=0,s=0,l=0,h=0;;o++){let u=o==e.length?null:e[o],f=l-h,d=u?u.fromB:1e9;for(;s<t.length&&t[s]<d;){let m=t[s],v=t[s+1],x=Math.max(h,m),w=Math.min(d,v);if(x<=w&&new ln(x+f,w+f,x,w).addToSet(r),v>d)break;s+=2}if(!u)return r;new ln(u.fromA,u.toA,u.fromB,u.toB).addToSet(r),l=u.toA,h=u.toB}}}class Vs{constructor(e,t,r){this.view=e,this.state=t,this.transactions=r,this.flags=0,this.startState=e.state,this.changes=dt.empty(this.startState.doc.length);for(let s of r)this.changes=this.changes.compose(s.changes);let o=[];this.changes.iterChangedRanges((s,l,h,u)=>o.push(new ln(s,l,h,u))),this.changedRanges=o}static create(e,t,r){return new Vs(e,t,r)}get viewportChanged(){return(this.flags&4)>0}get viewportMoved(){return(this.flags&8)>0}get heightChanged(){return(this.flags&2)>0}get geometryChanged(){return this.docChanged||(this.flags&18)>0}get focusChanged(){return(this.flags&1)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(e=>e.selection)}get empty(){return this.flags==0&&this.transactions.length==0}}class Gf extends Ne{get length(){return this.view.state.doc.length}constructor(e){super(),this.view=e,this.decorations=[],this.dynamicDecorationMap=[!1],this.domChanged=null,this.hasComposition=null,this.markedForComposition=new Set,this.editContextFormatting=Ot.none,this.lastCompositionAfterCursor=!1,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.setDOM(e.contentDOM),this.children=[new it],this.children[0].setParent(this),this.updateDeco(),this.updateInner([new ln(0,0,0,e.state.doc.length)],0,null)}update(e){var t;let r=e.changedRanges;this.minWidth>0&&r.length&&(r.every(({fromA:f,toA:d})=>d<this.minWidthFrom||f>this.minWidthTo)?(this.minWidthFrom=e.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=e.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0),this.updateEditContextFormatting(e);let o=-1;this.view.inputState.composing>=0&&!this.view.observer.editContext&&(!((t=this.domChanged)===null||t===void 0)&&t.newSel?o=this.domChanged.newSel.head:!FA(e.changes,this.hasComposition)&&!e.selectionSet&&(o=e.state.selection.main.head));let s=o>-1?LA(this.view,e.changes,o):null;if(this.domChanged=null,this.hasComposition){this.markedForComposition.clear();let{from:f,to:d}=this.hasComposition;r=new ln(f,d,e.changes.mapPos(f,-1),e.changes.mapPos(d,1)).addToSet(r.slice())}this.hasComposition=s?{from:s.range.fromB,to:s.range.toB}:null,(G.ie||G.chrome)&&!s&&e&&e.state.doc.lines!=e.startState.doc.lines&&(this.forceSelection=!0);let l=this.decorations,h=this.updateDeco(),u=BA(l,h,e.changes);return r=ln.extendWithRanges(r,u),!(this.flags&7)&&r.length==0?!1:(this.updateInner(r,e.startState.doc.length,s),e.transactions.length&&(this.lastUpdate=Date.now()),!0)}updateInner(e,t,r){this.view.viewState.mustMeasureContent=!0,this.updateChildren(e,t,r);let{observer:o}=this.view;o.ignore(()=>{this.dom.style.height=this.view.viewState.contentHeight/this.view.scaleY+"px",this.dom.style.flexBasis=this.minWidth?this.minWidth+"px":"";let l=G.chrome||G.ios?{node:o.selectionRange.focusNode,written:!1}:void 0;this.sync(this.view,l),this.flags&=-8,l&&(l.written||o.selectionRange.focusNode!=l.node)&&(this.forceSelection=!0),this.dom.style.height=""}),this.markedForComposition.forEach(l=>l.flags&=-9);let s=[];if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let l of this.children)l instanceof qn&&l.widget instanceof vh&&s.push(l.dom);o.updateGaps(s)}updateChildren(e,t,r){let o=r?r.range.addToSet(e.slice()):e,s=this.childCursor(t);for(let l=o.length-1;;l--){let h=l>=0?o[l]:null;if(!h)break;let{fromA:u,toA:f,fromB:d,toB:m}=h,v,x,w,S;if(r&&r.range.fromB<m&&r.range.toB>d){let j=so.build(this.view.state.doc,d,r.range.fromB,this.decorations,this.dynamicDecorationMap),F=so.build(this.view.state.doc,r.range.toB,m,this.decorations,this.dynamicDecorationMap);x=j.breakAtStart,w=j.openStart,S=F.openEnd;let B=this.compositionView(r);F.breakAtStart?B.breakAfter=1:F.content.length&&B.merge(B.length,B.length,F.content[0],!1,F.openStart,0)&&(B.breakAfter=F.content[0].breakAfter,F.content.shift()),j.content.length&&B.merge(0,0,j.content[j.content.length-1],!0,0,j.openEnd)&&j.content.pop(),v=j.content.concat(B).concat(F.content)}else({content:v,breakAtStart:x,openStart:w,openEnd:S}=so.build(this.view.state.doc,d,m,this.decorations,this.dynamicDecorationMap));let{i:k,off:A}=s.findPos(f,1),{i:T,off:D}=s.findPos(u,-1);Am(this,T,D,k,A,v,x,w,S)}r&&this.fixCompositionDOM(r)}updateEditContextFormatting(e){this.editContextFormatting=this.editContextFormatting.map(e.changes);for(let t of e.transactions)for(let r of t.effects)r.is(Km)&&(this.editContextFormatting=r.value)}compositionView(e){let t=new mn(e.text.nodeValue);t.flags|=8;for(let{deco:o}of e.marks)t=new Kn(o,[t],t.length);let r=new it;return r.append(t,0),r}fixCompositionDOM(e){let t=(s,l)=>{l.flags|=8|(l.children.some(u=>u.flags&7)?1:0),this.markedForComposition.add(l);let h=Ne.get(s);h&&h!=l&&(h.dom=null),l.setDOM(s)},r=this.childPos(e.range.fromB,1),o=this.children[r.i];t(e.line,o);for(let s=e.marks.length-1;s>=-1;s--)r=o.childPos(r.off,1),o=o.children[r.i],t(s>=0?e.marks[s].node:e.text,o)}updateSelection(e=!1,t=!1){(e||!this.view.observer.selectionRange.focusNode)&&this.view.observer.readSelectionRange();let r=this.view.root.activeElement,o=r==this.dom,s=!o&&!(this.view.state.facet(Fn)||this.dom.tabIndex>-1)&&Os(this.dom,this.view.observer.selectionRange)&&!(r&&this.dom.contains(r));if(!(o||t||s))return;let l=this.forceSelection;this.forceSelection=!1;let h=this.view.state.selection.main,u=this.moveToLine(this.domAtPos(h.anchor)),f=h.empty?u:this.moveToLine(this.domAtPos(h.head));if(G.gecko&&h.empty&&!this.hasComposition&&jA(u)){let m=document.createTextNode("");this.view.observer.ignore(()=>u.node.insertBefore(m,u.node.childNodes[u.offset]||null)),u=f=new St(m,0),l=!0}let d=this.view.observer.selectionRange;(l||!d.focusNode||(!oo(u.node,u.offset,d.anchorNode,d.anchorOffset)||!oo(f.node,f.offset,d.focusNode,d.focusOffset))&&!this.suppressWidgetCursorChange(d,h))&&(this.view.observer.ignore(()=>{G.android&&G.chrome&&this.dom.contains(d.focusNode)&&NA(d.focusNode,this.dom)&&(this.dom.blur(),this.dom.focus({preventScroll:!0}));let m=fo(this.view.root);if(m)if(h.empty){if(G.gecko){let v=PA(u.node,u.offset);if(v&&v!=3){let x=(v==1?Cm:Sm)(u.node,u.offset);x&&(u=new St(x.node,x.offset))}}m.collapse(u.node,u.offset),h.bidiLevel!=null&&m.caretBidiLevel!==void 0&&(m.caretBidiLevel=h.bidiLevel)}else if(m.extend){m.collapse(u.node,u.offset);try{m.extend(f.node,f.offset)}catch{}}else{let v=document.createRange();h.anchor>h.head&&([u,f]=[f,u]),v.setEnd(f.node,f.offset),v.setStart(u.node,u.offset),m.removeAllRanges(),m.addRange(v)}s&&this.view.root.activeElement==this.dom&&(this.dom.blur(),r&&r.focus())}),this.view.observer.setSelectionRange(u,f)),this.impreciseAnchor=u.precise?null:new St(d.anchorNode,d.anchorOffset),this.impreciseHead=f.precise?null:new St(d.focusNode,d.focusOffset)}suppressWidgetCursorChange(e,t){return this.hasComposition&&t.empty&&oo(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset)&&this.posFromDOM(e.focusNode,e.focusOffset)==t.head}enforceCursorAssoc(){if(this.hasComposition)return;let{view:e}=this,t=e.state.selection.main,r=fo(e.root),{anchorNode:o,anchorOffset:s}=e.observer.selectionRange;if(!r||!t.empty||!t.assoc||!r.modify)return;let l=it.find(this,t.head);if(!l)return;let h=l.posAtStart;if(t.head==h||t.head==h+l.length)return;let u=this.coordsAt(t.head,-1),f=this.coordsAt(t.head,1);if(!u||!f||u.bottom>f.top)return;let d=this.domAtPos(t.head+t.assoc);r.collapse(d.node,d.offset),r.modify("move",t.assoc<0?"forward":"backward","lineboundary"),e.observer.readSelectionRange();let m=e.observer.selectionRange;e.docView.posFromDOM(m.anchorNode,m.anchorOffset)!=t.from&&r.collapse(o,s)}moveToLine(e){let t=this.dom,r;if(e.node!=t)return e;for(let o=e.offset;!r&&o<t.childNodes.length;o++){let s=Ne.get(t.childNodes[o]);s instanceof it&&(r=s.domAtPos(0))}for(let o=e.offset-1;!r&&o>=0;o--){let s=Ne.get(t.childNodes[o]);s instanceof it&&(r=s.domAtPos(s.length))}return r?new St(r.node,r.offset,!0):e}nearest(e){for(let t=e;t;){let r=Ne.get(t);if(r&&r.rootView==this)return r;t=t.parentNode}return null}posFromDOM(e,t){let r=this.nearest(e);if(!r)throw new RangeError("Trying to find position for a DOM position outside of the document");return r.localPosFromDOM(e,t)+r.posAtStart}domAtPos(e){let{i:t,off:r}=this.childCursor().findPos(e,-1);for(;t<this.children.length-1;){let o=this.children[t];if(r<o.length||o instanceof it)break;t++,r=0}return this.children[t].domAtPos(r)}coordsAt(e,t){let r=null,o=0;for(let s=this.length,l=this.children.length-1;l>=0;l--){let h=this.children[l],u=s-h.breakAfter,f=u-h.length;if(u<e)break;if(f<=e&&(f<e||h.covers(-1))&&(u>e||h.covers(1))&&(!r||h instanceof it&&!(r instanceof it&&t>=0)))r=h,o=f;else if(r&&f==e&&u==e&&h instanceof qn&&Math.abs(t)<2){if(h.deco.startSide<0)break;l&&(r=null)}s=f}return r?r.coordsAt(e-o,t):null}coordsForChar(e){let{i:t,off:r}=this.childPos(e,1),o=this.children[t];if(!(o instanceof it))return null;for(;o.children.length;){let{i:h,off:u}=o.childPos(r,1);for(;;h++){if(h==o.children.length)return null;if((o=o.children[h]).length)break}r=u}if(!(o instanceof mn))return null;let s=Wn(o.text,r);if(s==r)return null;let l=Lr(o.dom,r,s).getClientRects();for(let h=0;h<l.length;h++){let u=l[h];if(h==l.length-1||u.top<u.bottom&&u.left<u.right)return u}return null}measureVisibleLineHeights(e){let t=[],{from:r,to:o}=e,s=this.view.contentDOM.clientWidth,l=s>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,h=-1,u=this.view.textDirection==Dt.LTR;for(let f=0,d=0;d<this.children.length;d++){let m=this.children[d],v=f+m.length;if(v>o)break;if(f>=r){let x=m.dom.getBoundingClientRect();if(t.push(x.height),l){let w=m.dom.lastChild,S=w?po(w):[];if(S.length){let k=S[S.length-1],A=u?k.right-x.left:x.right-k.left;A>h&&(h=A,this.minWidth=s,this.minWidthFrom=f,this.minWidthTo=v)}}}f=v+m.breakAfter}return t}textDirectionAt(e){let{i:t}=this.childPos(e,1);return getComputedStyle(this.children[t].dom).direction=="rtl"?Dt.RTL:Dt.LTR}measureTextSize(){for(let s of this.children)if(s instanceof it){let l=s.measureTextSize();if(l)return l}let e=document.createElement("div"),t,r,o;return e.className="cm-line",e.style.width="99999px",e.style.position="absolute",e.textContent="abc def ghi jkl mno pqr stu",this.view.observer.ignore(()=>{this.dom.appendChild(e);let s=po(e.firstChild)[0];t=e.getBoundingClientRect().height,r=s?s.width/27:7,o=s?s.height:t,e.remove()}),{lineHeight:t,charWidth:r,textHeight:o}}childCursor(e=this.length){let t=this.children.length;return t&&(e-=this.children[--t].length),new km(this.children,e,t)}computeBlockGapDeco(){let e=[],t=this.view.viewState;for(let r=0,o=0;;o++){let s=o==t.viewports.length?null:t.viewports[o],l=s?s.from-1:this.length;if(l>r){let h=(t.lineBlockAt(l).bottom-t.lineBlockAt(r).top)/this.view.scaleY;e.push(Ot.replace({widget:new vh(h),block:!0,inclusive:!0,isBlockGap:!0}).range(r,l))}if(!s)break;r=s.to+1}return Ot.set(e)}updateDeco(){let e=1,t=this.view.state.facet(mo).map(s=>(this.dynamicDecorationMap[e++]=typeof s=="function")?s(this.view):s),r=!1,o=this.view.state.facet(Ym).map((s,l)=>{let h=typeof s=="function";return h&&(r=!0),h?s(this.view):s});for(o.length&&(this.dynamicDecorationMap[e++]=r,t.push(qe.join(o))),this.decorations=[this.editContextFormatting,...t,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco];e<this.decorations.length;)this.dynamicDecorationMap[e++]=!1;return this.decorations}scrollIntoView(e){if(e.isSnapshot){let f=this.view.viewState.lineBlockAt(e.range.head);this.view.scrollDOM.scrollTop=f.top-e.yMargin,this.view.scrollDOM.scrollLeft=e.xMargin;return}for(let f of this.view.state.facet(qm))try{if(f(this.view,e.range,e))return!0}catch(d){Hn(this.view.state,d,"scroll handler")}let{range:t}=e,r=this.coordsAt(t.head,t.empty?t.assoc:t.head>t.anchor?-1:1),o;if(!r)return;!t.empty&&(o=this.coordsAt(t.anchor,t.anchor>t.head?-1:1))&&(r={left:Math.min(r.left,o.left),top:Math.min(r.top,o.top),right:Math.max(r.right,o.right),bottom:Math.max(r.bottom,o.bottom)});let s=Zm(this.view),l={left:r.left-s.left,top:r.top-s.top,right:r.right+s.right,bottom:r.bottom+s.bottom},{offsetWidth:h,offsetHeight:u}=this.view.scrollDOM;dA(this.view.scrollDOM,l,t.head<t.anchor?-1:1,e.x,e.y,Math.max(Math.min(e.xMargin,h),-h),Math.max(Math.min(e.yMargin,u),-u),this.view.textDirection==Dt.LTR)}}function jA(n){return n.node.nodeType==1&&n.node.firstChild&&(n.offset==0||n.node.childNodes[n.offset-1].contentEditable=="false")&&(n.offset==n.node.childNodes.length||n.node.childNodes[n.offset].contentEditable=="false")}function Qm(n,e){let t=n.observer.selectionRange;if(!t.focusNode)return null;let r=Cm(t.focusNode,t.focusOffset),o=Sm(t.focusNode,t.focusOffset),s=r||o;if(o&&r&&o.node!=r.node){let h=Ne.get(o.node);if(!h||h instanceof mn&&h.text!=o.node.nodeValue)s=o;else if(n.docView.lastCompositionAfterCursor){let u=Ne.get(r.node);!u||u instanceof mn&&u.text!=r.node.nodeValue||(s=o)}}if(n.docView.lastCompositionAfterCursor=s!=r,!s)return null;let l=e-s.offset;return{from:l,to:l+s.node.nodeValue.length,node:s.node}}function LA(n,e,t){let r=Qm(n,t);if(!r)return null;let{node:o,from:s,to:l}=r,h=o.nodeValue;if(/[\n\r]/.test(h)||n.state.doc.sliceString(r.from,r.to)!=h)return null;let u=e.invertedDesc,f=new ln(u.mapPos(s),u.mapPos(l),s,l),d=[];for(let m=o.parentNode;;m=m.parentNode){let v=Ne.get(m);if(v instanceof Kn)d.push({node:m,deco:v.mark});else{if(v instanceof it||m.nodeName=="DIV"&&m.parentNode==n.contentDOM)return{range:f,text:o,marks:d,line:m};if(m!=n.contentDOM)d.push({node:m,deco:new Co({inclusive:!0,attributes:$A(m),tagName:m.tagName.toLowerCase()})});else return null}}}function PA(n,e){return n.nodeType!=1?0:(e&&n.childNodes[e-1].contentEditable=="false"?1:0)|(e<n.childNodes.length&&n.childNodes[e].contentEditable=="false"?2:0)}let zA=class{constructor(){this.changes=[]}compareRange(n,e){Es(n,e,this.changes)}comparePoint(n,e){Es(n,e,this.changes)}boundChange(n){Es(n,n,this.changes)}};function BA(n,e,t){let r=new zA;return qe.compare(n,e,t,r),r.changes}function NA(n,e){for(let t=n;t&&t!=e;t=t.assignedSlot||t.parentNode)if(t.nodeType==1&&t.contentEditable=="false")return!0;return!1}function FA(n,e){let t=!1;return e&&n.iterChangedRanges((r,o)=>{r<e.to&&o>e.from&&(t=!0)}),t}function WA(n,e,t=1){let r=n.charCategorizer(e),o=n.doc.lineAt(e),s=e-o.from;if(o.length==0)return X.cursor(e);s==0?t=1:s==o.length&&(t=-1);let l=s,h=s;t<0?l=Wn(o.text,s,!1):h=Wn(o.text,s);let u=r(o.text.slice(l,h));for(;l>0;){let f=Wn(o.text,l,!1);if(r(o.text.slice(f,l))!=u)break;l=f}for(;h<o.length;){let f=Wn(o.text,h);if(r(o.text.slice(h,f))!=u)break;h=f}return X.range(l+o.from,h+o.from)}function VA(n,e){return e.left>n?e.left-n:Math.max(0,n-e.right)}function HA(n,e){return e.top>n?e.top-n:Math.max(0,n-e.bottom)}function Ol(n,e){return n.top<e.bottom-1&&n.bottom>e.top+1}function Yf(n,e){return e<n.top?{top:e,left:n.left,right:n.right,bottom:n.bottom}:n}function Xf(n,e){return e>n.bottom?{top:n.top,left:n.left,right:n.right,bottom:e}:n}function $h(n,e,t){let r,o,s,l,h=!1,u,f,d,m;for(let w=n.firstChild;w;w=w.nextSibling){let S=po(w);for(let k=0;k<S.length;k++){let A=S[k];o&&Ol(o,A)&&(A=Yf(Xf(A,o.bottom),o.top));let T=VA(e,A),D=HA(t,A);if(T==0&&D==0)return w.nodeType==3?Jf(w,e,t):$h(w,e,t);(!r||l>D||l==D&&s>T)&&(r=w,o=A,s=T,l=D,h=T?e<A.left?k>0:k<S.length-1:!0),T==0?t>A.bottom&&(!d||d.bottom<A.bottom)?(u=w,d=A):t<A.top&&(!m||m.top>A.top)&&(f=w,m=A):d&&Ol(d,A)?d=Xf(d,A.bottom):m&&Ol(m,A)&&(m=Yf(m,A.top))}}if(d&&d.bottom>=t?(r=u,o=d):m&&m.top<=t&&(r=f,o=m),!r)return{node:n,offset:0};let v=Math.max(o.left,Math.min(o.right,e));if(r.nodeType==3)return Jf(r,v,t);if(h&&r.contentEditable!="false")return $h(r,v,t);let x=Array.prototype.indexOf.call(n.childNodes,r)+(e>=(o.left+o.right)/2?1:0);return{node:n,offset:x}}function Jf(n,e,t){let r=n.nodeValue.length,o=-1,s=1e9,l=0;for(let h=0;h<r;h++){let u=Lr(n,h,h+1).getClientRects();for(let f=0;f<u.length;f++){let d=u[f];if(d.top==d.bottom)continue;l||(l=e-d.left);let m=(d.top>t?d.top-t:t-d.bottom)-1;if(d.left-1<=e&&d.right+1>=e&&m<s){let v=e>=(d.left+d.right)/2,x=v;if((G.chrome||G.gecko)&&Lr(n,h).getBoundingClientRect().left==d.right&&(x=!v),m<=0)return{node:n,offset:h+(x?1:0)};o=h+(x?1:0),s=m}}}return{node:n,offset:o>-1?o:l>0?n.nodeValue.length:0}}function e0(n,e,t,r=-1){var o,s;let l=n.contentDOM.getBoundingClientRect(),h=l.top+n.viewState.paddingTop,u,{docHeight:f}=n.viewState,{x:d,y:m}=e,v=m-h;if(v<0)return 0;if(v>f)return n.state.doc.length;for(let j=n.viewState.heightOracle.textHeight/2,F=!1;u=n.elementAtHeight(v),u.type!=Mn.Text;)for(;v=r>0?u.bottom+j:u.top-j,!(v>=0&&v<=f);){if(F)return t?null:0;F=!0,r=-r}m=h+v;let x=u.from;if(x<n.viewport.from)return n.viewport.from==0?0:t?null:Zf(n,l,u,d,m);if(x>n.viewport.to)return n.viewport.to==n.state.doc.length?n.state.doc.length:t?null:Zf(n,l,u,d,m);let w=n.dom.ownerDocument,S=n.root.elementFromPoint?n.root:w,k=S.elementFromPoint(d,m);k&&!n.contentDOM.contains(k)&&(k=null),k||(d=Math.max(l.left+1,Math.min(l.right-1,d)),k=S.elementFromPoint(d,m),k&&!n.contentDOM.contains(k)&&(k=null));let A,T=-1;if(k&&((o=n.docView.nearest(k))===null||o===void 0?void 0:o.isEditable)!=!1){if(w.caretPositionFromPoint){let j=w.caretPositionFromPoint(d,m);j&&({offsetNode:A,offset:T}=j)}else if(w.caretRangeFromPoint){let j=w.caretRangeFromPoint(d,m);j&&({startContainer:A,startOffset:T}=j,(!n.contentDOM.contains(A)||G.safari&&UA(A,T,d)||G.chrome&&qA(A,T,d))&&(A=void 0))}A&&(T=Math.min(Tn(A),T))}if(!A||!n.docView.dom.contains(A)){let j=it.find(n.docView,x);if(!j)return v>u.top+u.height/2?u.to:u.from;({node:A,offset:T}=$h(j.dom,d,m))}let D=n.docView.nearest(A);if(!D)return null;if(D.isWidget&&((s=D.dom)===null||s===void 0?void 0:s.nodeType)==1){let j=D.dom.getBoundingClientRect();return e.y<j.top||e.y<=j.bottom&&e.x<=(j.left+j.right)/2?D.posAtStart:D.posAtEnd}else return D.localPosFromDOM(A,T)+D.posAtStart}function Zf(n,e,t,r,o){let s=Math.round((r-e.left)*n.defaultCharacterWidth);if(n.lineWrapping&&t.height>n.defaultLineHeight*1.5){let h=n.viewState.heightOracle.textHeight,u=Math.floor((o-t.top-(n.defaultLineHeight-h)*.5)/h);s+=u*n.viewState.heightOracle.lineLength}let l=n.state.sliceDoc(t.from,t.to);return t.from+hA(l,s,n.state.tabSize)}function UA(n,e,t){let r,o=n;if(n.nodeType!=3||e!=(r=n.nodeValue.length))return!1;for(;;){let s=o.nextSibling;if(s){if(s.nodeName=="BR")break;return!1}else{let l=o.parentNode;if(!l||l.nodeName=="DIV")break;o=l}}return Lr(n,r-1,r).getBoundingClientRect().right>t}function qA(n,e,t){if(e!=0)return!1;for(let o=n;;){let s=o.parentNode;if(!s||s.nodeType!=1||s.firstChild!=o)return!1;if(s.classList.contains("cm-line"))break;o=s}let r=n.nodeType==1?n.getBoundingClientRect():Lr(n,0,Math.max(n.nodeValue.length,1)).getBoundingClientRect();return t-r.left>5}function KA(n,e,t){let r=n.lineBlockAt(e);if(Array.isArray(r.type)){let o;for(let s of r.type){if(s.from>e)break;if(!(s.to<e)){if(s.from<e&&s.to>e)return s;(!o||s.type==Mn.Text&&(o.type!=s.type||(t<0?s.from<e:s.to>e)))&&(o=s)}}return o||r}return r}function GA(n,e,t,r){let o=KA(n,e.head,e.assoc||-1),s=!r||o.type!=Mn.Text||!(n.lineWrapping||o.widgetLineBreaks)?null:n.coordsAtPos(e.assoc<0&&e.head>o.from?e.head-1:e.head);if(s){let l=n.dom.getBoundingClientRect(),h=n.textDirectionAt(o.from),u=n.posAtCoords({x:t==(h==Dt.LTR)?l.right-1:l.left+1,y:(s.top+s.bottom)/2});if(u!=null)return X.cursor(u,t?-1:1)}return X.cursor(t?o.to:o.from,t?-1:1)}function Qf(n,e,t,r){let o=n.state.doc.lineAt(e.head),s=n.bidiSpans(o),l=n.textDirectionAt(o.from);for(let h=e,u=null;;){let f=OA(o,s,l,h,t),d=zm;if(!f){if(o.number==(t?n.state.doc.lines:1))return h;d=`
`,o=n.state.doc.line(o.number+(t?1:-1)),s=n.bidiSpans(o),f=n.visualLineSide(o,!t)}if(u){if(!u(d))return h}else{if(!r)return f;u=r(d)}h=f}}function YA(n,e,t){let r=n.state.charCategorizer(e),o=r(t);return s=>{let l=r(s);return o==Vn.Space&&(o=l),o==l}}function XA(n,e,t,r){let o=e.head,s=t?1:-1;if(o==(t?n.state.doc.length:0))return X.cursor(o,e.assoc);let l=e.goalColumn,h,u=n.contentDOM.getBoundingClientRect(),f=n.coordsAtPos(o,e.assoc||-1),d=n.documentTop;if(f)l==null&&(l=f.left-u.left),h=s<0?f.top:f.bottom;else{let x=n.viewState.lineBlockAt(o);l==null&&(l=Math.min(u.right-u.left,n.defaultCharacterWidth*(o-x.from))),h=(s<0?x.top:x.bottom)+d}let m=u.left+l,v=r??n.viewState.heightOracle.textHeight>>1;for(let x=0;;x+=10){let w=h+(v+x)*s,S=e0(n,{x:m,y:w},!1,s);if(w<u.top||w>u.bottom||(s<0?S<o:S>o)){let k=n.docView.coordsForChar(S),A=!k||w<k.top?-1:1;return X.cursor(S,A,void 0,l)}}}function Is(n,e,t){for(;;){let r=0;for(let o of n)o.between(e-1,e+1,(s,l,h)=>{if(e>s&&e<l){let u=r||t||(e-s<l-e?-1:1);e=u<0?s:l,r=u}});if(!r)return e}}function El(n,e,t){let r=Is(n.state.facet(Cc).map(o=>o(n)),t.from,e.head>t.from?-1:1);return r==t.from?t:X.cursor(r,r<t.from?1:-1)}const to="￿";class JA{constructor(e,t){this.points=e,this.text="",this.lineSeparator=t.facet(Ue.lineSeparator)}append(e){this.text+=e}lineBreak(){this.text+=to}readRange(e,t){if(!e)return this;let r=e.parentNode;for(let o=e;;){this.findPointBefore(r,o);let s=this.text.length;this.readNode(o);let l=o.nextSibling;if(l==t)break;let h=Ne.get(o),u=Ne.get(l);(h&&u?h.breakAfter:(h?h.breakAfter:Fs(o))||Fs(l)&&(o.nodeName!="BR"||o.cmIgnore)&&this.text.length>s)&&this.lineBreak(),o=l}return this.findPointBefore(r,t),this}readTextNode(e){let t=e.nodeValue;for(let r of this.points)r.node==e&&(r.pos=this.text.length+Math.min(r.offset,t.length));for(let r=0,o=this.lineSeparator?null:/\r\n?|\n/g;;){let s=-1,l=1,h;if(this.lineSeparator?(s=t.indexOf(this.lineSeparator,r),l=this.lineSeparator.length):(h=o.exec(t))&&(s=h.index,l=h[0].length),this.append(t.slice(r,s<0?t.length:s)),s<0)break;if(this.lineBreak(),l>1)for(let u of this.points)u.node==e&&u.pos>this.text.length&&(u.pos-=l-1);r=s+l}}readNode(e){if(e.cmIgnore)return;let t=Ne.get(e),r=t&&t.overrideDOMText;if(r!=null){this.findPointInside(e,r.length);for(let o=r.iter();!o.next().done;)o.lineBreak?this.lineBreak():this.append(o.value)}else e.nodeType==3?this.readTextNode(e):e.nodeName=="BR"?e.nextSibling&&this.lineBreak():e.nodeType==1&&this.readRange(e.firstChild,null)}findPointBefore(e,t){for(let r of this.points)r.node==e&&e.childNodes[r.offset]==t&&(r.pos=this.text.length)}findPointInside(e,t){for(let r of this.points)(e.nodeType==3?r.node==e:e.contains(r.node))&&(r.pos=this.text.length+(ZA(e,r.node,r.offset)?t:0))}}function ZA(n,e,t){for(;;){if(!e||t<Tn(e))return!1;if(e==n)return!0;t=jr(e)+1,e=e.parentNode}}class ep{constructor(e,t){this.node=e,this.offset=t,this.pos=-1}}class QA{constructor(e,t,r,o){this.typeOver=o,this.bounds=null,this.text="",this.domChanged=t>-1;let{impreciseHead:s,impreciseAnchor:l}=e.docView;if(e.state.readOnly&&t>-1)this.newSel=null;else if(t>-1&&(this.bounds=e.docView.domBoundsAround(t,r,0))){let h=s||l?[]:n4(e),u=new JA(h,e.state);u.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=u.text,this.newSel=r4(h,this.bounds.from)}else{let h=e.observer.selectionRange,u=s&&s.node==h.focusNode&&s.offset==h.focusOffset||!uh(e.contentDOM,h.focusNode)?e.state.selection.main.head:e.docView.posFromDOM(h.focusNode,h.focusOffset),f=l&&l.node==h.anchorNode&&l.offset==h.anchorOffset||!uh(e.contentDOM,h.anchorNode)?e.state.selection.main.anchor:e.docView.posFromDOM(h.anchorNode,h.anchorOffset),d=e.viewport;if((G.ios||G.chrome)&&e.state.selection.main.empty&&u!=f&&(d.from>0||d.to<e.state.doc.length)){let m=Math.min(u,f),v=Math.max(u,f),x=d.from-m,w=d.to-v;(x==0||x==1||m==0)&&(w==0||w==-1||v==e.state.doc.length)&&(u=0,f=e.state.doc.length)}this.newSel=X.single(f,u)}}}function t0(n,e){let t,{newSel:r}=e,o=n.state.selection.main,s=n.inputState.lastKeyTime>Date.now()-100?n.inputState.lastKeyCode:-1;if(e.bounds){let{from:l,to:h}=e.bounds,u=o.from,f=null;(s===8||G.android&&e.text.length<h-l)&&(u=o.to,f="end");let d=t4(n.state.doc.sliceString(l,h,to),e.text,u-l,f);d&&(G.chrome&&s==13&&d.toB==d.from+2&&e.text.slice(d.from,d.toB)==to+to&&d.toB--,t={from:l+d.from,to:l+d.toA,insert:Oe.of(e.text.slice(d.from,d.toB).split(to))})}else r&&(!n.hasFocus&&n.state.facet(Fn)||r.main.eq(o))&&(r=null);if(!t&&!r)return!1;if(!t&&e.typeOver&&!o.empty&&r&&r.main.empty?t={from:o.from,to:o.to,insert:n.state.doc.slice(o.from,o.to)}:(G.mac||G.android)&&t&&t.from==t.to&&t.from==o.head-1&&/^\. ?$/.test(t.insert.toString())&&n.contentDOM.getAttribute("autocorrect")=="off"?(r&&t.insert.length==2&&(r=X.single(r.main.anchor-1,r.main.head-1)),t={from:t.from,to:t.to,insert:Oe.of([t.insert.toString().replace("."," ")])}):t&&t.from>=o.from&&t.to<=o.to&&(t.from!=o.from||t.to!=o.to)&&o.to-o.from-(t.to-t.from)<=4?t={from:o.from,to:o.to,insert:n.state.doc.slice(o.from,t.from).append(t.insert).append(n.state.doc.slice(t.to,o.to))}:G.chrome&&t&&t.from==t.to&&t.from==o.head&&t.insert.toString()==`
 `&&n.lineWrapping&&(r&&(r=X.single(r.main.anchor-1,r.main.head-1)),t={from:o.from,to:o.to,insert:Oe.of([" "])}),t)return Sc(n,t,r,s);if(r&&!r.main.eq(o)){let l=!1,h="select";return n.inputState.lastSelectionTime>Date.now()-50&&(n.inputState.lastSelectionOrigin=="select"&&(l=!0),h=n.inputState.lastSelectionOrigin),n.dispatch({selection:r,scrollIntoView:l,userEvent:h}),!0}else return!1}function Sc(n,e,t,r=-1){if(G.ios&&n.inputState.flushIOSKey(e))return!0;let o=n.state.selection.main;if(G.android&&(e.to==o.to&&(e.from==o.from||e.from==o.from-1&&n.state.sliceDoc(e.from,o.from)==" ")&&e.insert.length==1&&e.insert.lines==2&&hi(n.contentDOM,"Enter",13)||(e.from==o.from-1&&e.to==o.to&&e.insert.length==0||r==8&&e.insert.length<e.to-e.from&&e.to>o.head)&&hi(n.contentDOM,"Backspace",8)||e.from==o.from&&e.to==o.to+1&&e.insert.length==0&&hi(n.contentDOM,"Delete",46)))return!0;let s=e.insert.toString();n.inputState.composing>=0&&n.inputState.composing++;let l,h=()=>l||(l=e4(n,e,t));return n.state.facet(Vm).some(u=>u(n,e.from,e.to,s,h))||n.dispatch(h()),!0}function e4(n,e,t){let r,o=n.state,s=o.selection.main;if(e.from>=s.from&&e.to<=s.to&&e.to-e.from>=(s.to-s.from)/3&&(!t||t.main.empty&&t.main.from==e.from+e.insert.length)&&n.inputState.composing<0){let h=s.from<e.from?o.sliceDoc(s.from,e.from):"",u=s.to>e.to?o.sliceDoc(e.to,s.to):"";r=o.replaceSelection(n.state.toText(h+e.insert.sliceString(0,void 0,n.state.lineBreak)+u))}else{let h=o.changes(e),u=t&&t.main.to<=h.newLength?t.main:void 0;if(o.selection.ranges.length>1&&n.inputState.composing>=0&&e.to<=s.to&&e.to>=s.to-10){let f=n.state.sliceDoc(e.from,e.to),d,m=t&&Qm(n,t.main.head);if(m){let w=e.insert.length-(e.to-e.from);d={from:m.from,to:m.to-w}}else d=n.state.doc.lineAt(s.head);let v=s.to-e.to,x=s.to-s.from;r=o.changeByRange(w=>{if(w.from==s.from&&w.to==s.to)return{changes:h,range:u||w.map(h)};let S=w.to-v,k=S-f.length;if(w.to-w.from!=x||n.state.sliceDoc(k,S)!=f||w.to>=d.from&&w.from<=d.to)return{range:w};let A=o.changes({from:k,to:S,insert:e.insert}),T=w.to-s.to;return{changes:A,range:u?X.range(Math.max(0,u.anchor+T),Math.max(0,u.head+T)):w.map(A)}})}else r={changes:h,selection:u&&o.selection.replaceRange(u)}}let l="input.type";return(n.composing||n.inputState.compositionPendingChange&&n.inputState.compositionEndedAt>Date.now()-50)&&(n.inputState.compositionPendingChange=!1,l+=".compose",n.inputState.compositionFirstChange&&(l+=".start",n.inputState.compositionFirstChange=!1)),o.update(r,{userEvent:l,scrollIntoView:!0})}function t4(n,e,t,r){let o=Math.min(n.length,e.length),s=0;for(;s<o&&n.charCodeAt(s)==e.charCodeAt(s);)s++;if(s==o&&n.length==e.length)return null;let l=n.length,h=e.length;for(;l>0&&h>0&&n.charCodeAt(l-1)==e.charCodeAt(h-1);)l--,h--;if(r=="end"){let u=Math.max(0,s-Math.min(l,h));t-=l+u-s}if(l<s&&n.length<e.length){let u=t<=s&&t>=l?s-t:0;s-=u,h=s+(h-l),l=s}else if(h<s){let u=t<=s&&t>=h?s-t:0;s-=u,l=s+(l-h),h=s}return{from:s,toA:l,toB:h}}function n4(n){let e=[];if(n.root.activeElement!=n.contentDOM)return e;let{anchorNode:t,anchorOffset:r,focusNode:o,focusOffset:s}=n.observer.selectionRange;return t&&(e.push(new ep(t,r)),(o!=t||s!=r)&&e.push(new ep(o,s))),e}function r4(n,e){if(n.length==0)return null;let t=n[0].pos,r=n.length==2?n[1].pos:t;return t>-1&&r>-1?X.single(t+e,r+e):null}class i4{setSelectionOrigin(e){this.lastSelectionOrigin=e,this.lastSelectionTime=Date.now()}constructor(e){this.view=e,this.lastKeyCode=0,this.lastKeyTime=0,this.lastTouchTime=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.pendingIOSKey=void 0,this.tabFocusMode=-1,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastContextMenu=0,this.scrollHandlers=[],this.handlers=Object.create(null),this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.mouseSelection=null,this.draggedContent=null,this.handleEvent=this.handleEvent.bind(this),this.notifiedFocused=e.hasFocus,G.safari&&e.contentDOM.addEventListener("input",()=>null),G.gecko&&y4(e.contentDOM.ownerDocument)}handleEvent(e){!f4(this.view,e)||this.ignoreDuringComposition(e)||e.type=="keydown"&&this.keydown(e)||(this.view.updateState!=0?Promise.resolve().then(()=>this.runHandlers(e.type,e)):this.runHandlers(e.type,e))}runHandlers(e,t){let r=this.handlers[e];if(r){for(let o of r.observers)o(this.view,t);for(let o of r.handlers){if(t.defaultPrevented)break;if(o(this.view,t)){t.preventDefault();break}}}}ensureHandlers(e){let t=o4(e),r=this.handlers,o=this.view.contentDOM;for(let s in t)if(s!="scroll"){let l=!t[s].handlers.length,h=r[s];h&&l!=!h.handlers.length&&(o.removeEventListener(s,this.handleEvent),h=null),h||o.addEventListener(s,this.handleEvent,{passive:l})}for(let s in r)s!="scroll"&&!t[s]&&o.removeEventListener(s,this.handleEvent);this.handlers=t}keydown(e){if(this.lastKeyCode=e.keyCode,this.lastKeyTime=Date.now(),e.keyCode==9&&this.tabFocusMode>-1&&(!this.tabFocusMode||Date.now()<=this.tabFocusMode))return!0;if(this.tabFocusMode>0&&e.keyCode!=27&&a4.indexOf(e.keyCode)<0&&(this.tabFocusMode=-1),G.android&&G.chrome&&!e.synthetic&&(e.keyCode==13||e.keyCode==8))return this.view.observer.delayAndroidKey(e.key,e.keyCode),!0;let t;return G.ios&&!e.synthetic&&!e.altKey&&!e.metaKey&&((t=n0.find(r=>r.keyCode==e.keyCode))&&!e.ctrlKey||s4.indexOf(e.key)>-1&&e.ctrlKey&&!e.shiftKey)?(this.pendingIOSKey=t||e,setTimeout(()=>this.flushIOSKey(),250),!0):(e.keyCode!=229&&this.view.observer.forceFlush(),!1)}flushIOSKey(e){let t=this.pendingIOSKey;return!t||t.key=="Enter"&&e&&e.from<e.to&&/^\S+$/.test(e.insert.toString())?!1:(this.pendingIOSKey=void 0,hi(this.view.contentDOM,t.key,t.keyCode,t instanceof KeyboardEvent?t:void 0))}ignoreDuringComposition(e){return/^key/.test(e.type)?this.composing>0?!0:G.safari&&!G.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100?(this.compositionPendingKey=!1,!0):!1:!1}startMouseSelection(e){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=e}update(e){this.view.observer.update(e),this.mouseSelection&&this.mouseSelection.update(e),this.draggedContent&&e.docChanged&&(this.draggedContent=this.draggedContent.map(e.changes)),e.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}}function tp(n,e){return(t,r)=>{try{return e.call(n,r,t)}catch(o){Hn(t.state,o)}}}function o4(n){let e=Object.create(null);function t(r){return e[r]||(e[r]={observers:[],handlers:[]})}for(let r of n){let o=r.spec,s=o&&o.plugin.domEventHandlers,l=o&&o.plugin.domEventObservers;if(s)for(let h in s){let u=s[h];u&&t(h).handlers.push(tp(r.value,u))}if(l)for(let h in l){let u=l[h];u&&t(h).observers.push(tp(r.value,u))}}for(let r in vn)t(r).handlers.push(vn[r]);for(let r in hn)t(r).observers.push(hn[r]);return e}const n0=[{key:"Backspace",keyCode:8,inputType:"deleteContentBackward"},{key:"Enter",keyCode:13,inputType:"insertParagraph"},{key:"Enter",keyCode:13,inputType:"insertLineBreak"},{key:"Delete",keyCode:46,inputType:"deleteContentForward"}],s4="dthko",a4=[16,17,18,20,91,92,224,225],$s=6;function Cs(n){return Math.max(0,n)*.7+8}function l4(n,e){return Math.max(Math.abs(n.clientX-e.clientX),Math.abs(n.clientY-e.clientY))}class h4{constructor(e,t,r,o){this.view=e,this.startEvent=t,this.style=r,this.mustSelect=o,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=t,this.scrollParents=fA(e.contentDOM),this.atoms=e.state.facet(Cc).map(l=>l(e));let s=e.contentDOM.ownerDocument;s.addEventListener("mousemove",this.move=this.move.bind(this)),s.addEventListener("mouseup",this.up=this.up.bind(this)),this.extend=t.shiftKey,this.multiple=e.state.facet(Ue.allowMultipleSelections)&&c4(e,t),this.dragging=d4(e,t)&&o0(t)==1?null:!1}start(e){this.dragging===!1&&this.select(e)}move(e){if(e.buttons==0)return this.destroy();if(this.dragging||this.dragging==null&&l4(this.startEvent,e)<10)return;this.select(this.lastEvent=e);let t=0,r=0,o=0,s=0,l=this.view.win.innerWidth,h=this.view.win.innerHeight;this.scrollParents.x&&({left:o,right:l}=this.scrollParents.x.getBoundingClientRect()),this.scrollParents.y&&({top:s,bottom:h}=this.scrollParents.y.getBoundingClientRect());let u=Zm(this.view);e.clientX-u.left<=o+$s?t=-Cs(o-e.clientX):e.clientX+u.right>=l-$s&&(t=Cs(e.clientX-l)),e.clientY-u.top<=s+$s?r=-Cs(s-e.clientY):e.clientY+u.bottom>=h-$s&&(r=Cs(e.clientY-h)),this.setScrollSpeed(t,r)}up(e){this.dragging==null&&this.select(this.lastEvent),this.dragging||e.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0);let e=this.view.contentDOM.ownerDocument;e.removeEventListener("mousemove",this.move),e.removeEventListener("mouseup",this.up),this.view.inputState.mouseSelection=this.view.inputState.draggedContent=null}setScrollSpeed(e,t){this.scrollSpeed={x:e,y:t},e||t?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){let{x:e,y:t}=this.scrollSpeed;e&&this.scrollParents.x&&(this.scrollParents.x.scrollLeft+=e,e=0),t&&this.scrollParents.y&&(this.scrollParents.y.scrollTop+=t,t=0),(e||t)&&this.view.win.scrollBy(e,t),this.dragging===!1&&this.select(this.lastEvent)}skipAtoms(e){let t=null;for(let r=0;r<e.ranges.length;r++){let o=e.ranges[r],s=null;if(o.empty){let l=Is(this.atoms,o.from,0);l!=o.from&&(s=X.cursor(l,-1))}else{let l=Is(this.atoms,o.from,-1),h=Is(this.atoms,o.to,1);(l!=o.from||h!=o.to)&&(s=X.range(o.from==o.anchor?l:h,o.from==o.head?l:h))}s&&(t||(t=e.ranges.slice()),t[r]=s)}return t?X.create(t,e.mainIndex):e}select(e){let{view:t}=this,r=this.skipAtoms(this.style.get(e,this.extend,this.multiple));(this.mustSelect||!r.eq(t.state.selection,this.dragging===!1))&&this.view.dispatch({selection:r,userEvent:"select.pointer"}),this.mustSelect=!1}update(e){e.transactions.some(t=>t.isUserEvent("input.type"))?this.destroy():this.style.update(e)&&setTimeout(()=>this.select(this.lastEvent),20)}}function c4(n,e){let t=n.state.facet(Bm);return t.length?t[0](e):G.mac?e.metaKey:e.ctrlKey}function u4(n,e){let t=n.state.facet(Nm);return t.length?t[0](e):G.mac?!e.altKey:!e.ctrlKey}function d4(n,e){let{main:t}=n.state.selection;if(t.empty)return!1;let r=fo(n.root);if(!r||r.rangeCount==0)return!0;let o=r.getRangeAt(0).getClientRects();for(let s=0;s<o.length;s++){let l=o[s];if(l.left<=e.clientX&&l.right>=e.clientX&&l.top<=e.clientY&&l.bottom>=e.clientY)return!0}return!1}function f4(n,e){if(!e.bubbles)return!0;if(e.defaultPrevented)return!1;for(let t=e.target,r;t!=n.contentDOM;t=t.parentNode)if(!t||t.nodeType==11||(r=Ne.get(t))&&r.ignoreEvent(e))return!1;return!0}const vn=Object.create(null),hn=Object.create(null),r0=G.ie&&G.ie_version<15||G.ios&&G.webkit_version<604;function p4(n){let e=n.dom.parentNode;if(!e)return;let t=e.appendChild(document.createElement("textarea"));t.style.cssText="position: fixed; left: -10000px; top: 10px",t.focus(),setTimeout(()=>{n.focus(),t.remove(),i0(n,t.value)},50)}function ra(n,e,t){for(let r of n.facet(e))t=r(t,n);return t}function i0(n,e){e=ra(n.state,wc,e);let{state:t}=n,r,o=1,s=t.toText(e),l=s.lines==t.selection.ranges.length;if(Ch!=null&&t.selection.ranges.every(h=>h.empty)&&Ch==s.toString()){let h=-1;r=t.changeByRange(u=>{let f=t.doc.lineAt(u.from);if(f.from==h)return{range:u};h=f.from;let d=t.toText((l?s.line(o++).text:e)+t.lineBreak);return{changes:{from:f.from,insert:d},range:X.cursor(u.from+d.length)}})}else l?r=t.changeByRange(h=>{let u=s.line(o++);return{changes:{from:h.from,to:h.to,insert:u.text},range:X.cursor(h.from+u.length)}}):r=t.replaceSelection(s);n.dispatch(r,{userEvent:"input.paste",scrollIntoView:!0})}hn.scroll=n=>{n.inputState.lastScrollTop=n.scrollDOM.scrollTop,n.inputState.lastScrollLeft=n.scrollDOM.scrollLeft};vn.keydown=(n,e)=>(n.inputState.setSelectionOrigin("select"),e.keyCode==27&&n.inputState.tabFocusMode!=0&&(n.inputState.tabFocusMode=Date.now()+2e3),!1);hn.touchstart=(n,e)=>{n.inputState.lastTouchTime=Date.now(),n.inputState.setSelectionOrigin("select.pointer")};hn.touchmove=n=>{n.inputState.setSelectionOrigin("select.pointer")};vn.mousedown=(n,e)=>{if(n.observer.flush(),n.inputState.lastTouchTime>Date.now()-2e3)return!1;let t=null;for(let r of n.state.facet(Fm))if(t=r(n,e),t)break;if(!t&&e.button==0&&(t=v4(n,e)),t){let r=!n.hasFocus;n.inputState.startMouseSelection(new h4(n,e,t,r)),r&&n.observer.ignore(()=>{wm(n.contentDOM);let s=n.root.activeElement;s&&!s.contains(n.contentDOM)&&s.blur()});let o=n.inputState.mouseSelection;if(o)return o.start(e),o.dragging===!1}return!1};function np(n,e,t,r){if(r==1)return X.cursor(e,t);if(r==2)return WA(n.state,e,t);{let o=it.find(n.docView,e),s=n.state.doc.lineAt(o?o.posAtEnd:e),l=o?o.posAtStart:s.from,h=o?o.posAtEnd:s.to;return h<n.state.doc.length&&h==s.to&&h++,X.range(l,h)}}let rp=(n,e,t)=>e>=t.top&&e<=t.bottom&&n>=t.left&&n<=t.right;function g4(n,e,t,r){let o=it.find(n.docView,e);if(!o)return 1;let s=e-o.posAtStart;if(s==0)return 1;if(s==o.length)return-1;let l=o.coordsAt(s,-1);if(l&&rp(t,r,l))return-1;let h=o.coordsAt(s,1);return h&&rp(t,r,h)?1:l&&l.bottom>=r?-1:1}function ip(n,e){let t=n.posAtCoords({x:e.clientX,y:e.clientY},!1);return{pos:t,bias:g4(n,t,e.clientX,e.clientY)}}const m4=G.ie&&G.ie_version<=11;let op=null,sp=0,ap=0;function o0(n){if(!m4)return n.detail;let e=op,t=ap;return op=n,ap=Date.now(),sp=!e||t>Date.now()-400&&Math.abs(e.clientX-n.clientX)<2&&Math.abs(e.clientY-n.clientY)<2?(sp+1)%3:1}function v4(n,e){let t=ip(n,e),r=o0(e),o=n.state.selection;return{update(s){s.docChanged&&(t.pos=s.changes.mapPos(t.pos),o=o.map(s.changes))},get(s,l,h){let u=ip(n,s),f,d=np(n,u.pos,u.bias,r);if(t.pos!=u.pos&&!l){let m=np(n,t.pos,t.bias,r),v=Math.min(m.from,d.from),x=Math.max(m.to,d.to);d=v<d.from?X.range(v,x):X.range(x,v)}return l?o.replaceRange(o.main.extend(d.from,d.to)):h&&r==1&&o.ranges.length>1&&(f=b4(o,u.pos))?f:h?o.addRange(d):X.create([d])}}}function b4(n,e){for(let t=0;t<n.ranges.length;t++){let{from:r,to:o}=n.ranges[t];if(r<=e&&o>=e)return X.create(n.ranges.slice(0,t).concat(n.ranges.slice(t+1)),n.mainIndex==t?0:n.mainIndex-(n.mainIndex>t?1:0))}return null}vn.dragstart=(n,e)=>{let{selection:{main:t}}=n.state;if(e.target.draggable){let o=n.docView.nearest(e.target);if(o&&o.isWidget){let s=o.posAtStart,l=s+o.length;(s>=t.to||l<=t.from)&&(t=X.range(s,l))}}let{inputState:r}=n;return r.mouseSelection&&(r.mouseSelection.dragging=!0),r.draggedContent=t,e.dataTransfer&&(e.dataTransfer.setData("Text",ra(n.state,yc,n.state.sliceDoc(t.from,t.to))),e.dataTransfer.effectAllowed="copyMove"),!1};vn.dragend=n=>(n.inputState.draggedContent=null,!1);function lp(n,e,t,r){if(t=ra(n.state,wc,t),!t)return;let o=n.posAtCoords({x:e.clientX,y:e.clientY},!1),{draggedContent:s}=n.inputState,l=r&&s&&u4(n,e)?{from:s.from,to:s.to}:null,h={from:o,insert:t},u=n.state.changes(l?[l,h]:h);n.focus(),n.dispatch({changes:u,selection:{anchor:u.mapPos(o,-1),head:u.mapPos(o,1)},userEvent:l?"move.drop":"input.drop"}),n.inputState.draggedContent=null}vn.drop=(n,e)=>{if(!e.dataTransfer)return!1;if(n.state.readOnly)return!0;let t=e.dataTransfer.files;if(t&&t.length){let r=Array(t.length),o=0,s=()=>{++o==t.length&&lp(n,e,r.filter(l=>l!=null).join(n.state.lineBreak),!1)};for(let l=0;l<t.length;l++){let h=new FileReader;h.onerror=s,h.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(h.result)||(r[l]=h.result),s()},h.readAsText(t[l])}return!0}else{let r=e.dataTransfer.getData("Text");if(r)return lp(n,e,r,!0),!0}return!1};vn.paste=(n,e)=>{if(n.state.readOnly)return!0;n.observer.flush();let t=r0?null:e.clipboardData;return t?(i0(n,t.getData("text/plain")||t.getData("text/uri-list")),!0):(p4(n),!1)};function x4(n,e){let t=n.dom.parentNode;if(!t)return;let r=t.appendChild(document.createElement("textarea"));r.style.cssText="position: fixed; left: -10000px; top: 10px",r.value=e,r.focus(),r.selectionEnd=e.length,r.selectionStart=0,setTimeout(()=>{r.remove(),n.focus()},50)}function w4(n){let e=[],t=[],r=!1;for(let o of n.selection.ranges)o.empty||(e.push(n.sliceDoc(o.from,o.to)),t.push(o));if(!e.length){let o=-1;for(let{from:s}of n.selection.ranges){let l=n.doc.lineAt(s);l.number>o&&(e.push(l.text),t.push({from:l.from,to:Math.min(n.doc.length,l.to+1)})),o=l.number}r=!0}return{text:ra(n,yc,e.join(n.lineBreak)),ranges:t,linewise:r}}let Ch=null;vn.copy=vn.cut=(n,e)=>{let{text:t,ranges:r,linewise:o}=w4(n.state);if(!t&&!o)return!1;Ch=o?t:null,e.type=="cut"&&!n.state.readOnly&&n.dispatch({changes:r,scrollIntoView:!0,userEvent:"delete.cut"});let s=r0?null:e.clipboardData;return s?(s.clearData(),s.setData("text/plain",t),!0):(x4(n,t),!1)};const s0=Ri.define();function a0(n,e){let t=[];for(let r of n.facet(Hm)){let o=r(n,e);o&&t.push(o)}return t.length?n.update({effects:t,annotations:s0.of(!0)}):null}function l0(n){setTimeout(()=>{let e=n.hasFocus;if(e!=n.inputState.notifiedFocused){let t=a0(n.state,e);t?n.dispatch(t):n.update([])}},10)}hn.focus=n=>{n.inputState.lastFocusTime=Date.now(),!n.scrollDOM.scrollTop&&(n.inputState.lastScrollTop||n.inputState.lastScrollLeft)&&(n.scrollDOM.scrollTop=n.inputState.lastScrollTop,n.scrollDOM.scrollLeft=n.inputState.lastScrollLeft),l0(n)};hn.blur=n=>{n.observer.clearSelectionRange(),l0(n)};hn.compositionstart=hn.compositionupdate=n=>{n.observer.editContext||(n.inputState.compositionFirstChange==null&&(n.inputState.compositionFirstChange=!0),n.inputState.composing<0&&(n.inputState.composing=0))};hn.compositionend=n=>{n.observer.editContext||(n.inputState.composing=-1,n.inputState.compositionEndedAt=Date.now(),n.inputState.compositionPendingKey=!0,n.inputState.compositionPendingChange=n.observer.pendingRecords().length>0,n.inputState.compositionFirstChange=null,G.chrome&&G.android?n.observer.flushSoon():n.inputState.compositionPendingChange?Promise.resolve().then(()=>n.observer.flush()):setTimeout(()=>{n.inputState.composing<0&&n.docView.hasComposition&&n.update([])},50))};hn.contextmenu=n=>{n.inputState.lastContextMenu=Date.now()};vn.beforeinput=(n,e)=>{var t,r;if(e.inputType=="insertReplacementText"&&n.observer.editContext){let s=(t=e.dataTransfer)===null||t===void 0?void 0:t.getData("text/plain"),l=e.getTargetRanges();if(s&&l.length){let h=l[0],u=n.posAtDOM(h.startContainer,h.startOffset),f=n.posAtDOM(h.endContainer,h.endOffset);return Sc(n,{from:u,to:f,insert:n.state.toText(s)},null),!0}}let o;if(G.chrome&&G.android&&(o=n0.find(s=>s.inputType==e.inputType))&&(n.observer.delayAndroidKey(o.key,o.keyCode),o.key=="Backspace"||o.key=="Delete")){let s=((r=window.visualViewport)===null||r===void 0?void 0:r.height)||0;setTimeout(()=>{var l;(((l=window.visualViewport)===null||l===void 0?void 0:l.height)||0)>s+10&&n.hasFocus&&(n.contentDOM.blur(),n.focus())},100)}return G.ios&&e.inputType=="deleteContentForward"&&n.observer.flushSoon(),G.safari&&e.inputType=="insertText"&&n.inputState.composing>=0&&setTimeout(()=>hn.compositionend(n,e),20),!1};const hp=new Set;function y4(n){hp.has(n)||(hp.add(n),n.addEventListener("copy",()=>{}),n.addEventListener("cut",()=>{}))}const cp=["pre-wrap","normal","pre-line","break-spaces"];let wi=!1;function up(){wi=!1}class $4{constructor(e){this.lineWrapping=e,this.doc=Oe.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30}heightForGap(e,t){let r=this.doc.lineAt(t).number-this.doc.lineAt(e).number+1;return this.lineWrapping&&(r+=Math.max(0,Math.ceil((t-e-r*this.lineLength*.5)/this.lineLength))),this.lineHeight*r}heightForLine(e){return this.lineWrapping?(1+Math.max(0,Math.ceil((e-this.lineLength)/Math.max(1,this.lineLength-5))))*this.lineHeight:this.lineHeight}setDoc(e){return this.doc=e,this}mustRefreshForWrapping(e){return cp.indexOf(e)>-1!=this.lineWrapping}mustRefreshForHeights(e){let t=!1;for(let r=0;r<e.length;r++){let o=e[r];o<0?r++:this.heightSamples[Math.floor(o*10)]||(t=!0,this.heightSamples[Math.floor(o*10)]=!0)}return t}refresh(e,t,r,o,s,l){let h=cp.indexOf(e)>-1,u=Math.round(t)!=Math.round(this.lineHeight)||this.lineWrapping!=h;if(this.lineWrapping=h,this.lineHeight=t,this.charWidth=r,this.textHeight=o,this.lineLength=s,u){this.heightSamples={};for(let f=0;f<l.length;f++){let d=l[f];d<0?f++:this.heightSamples[Math.floor(d*10)]=!0}}return u}}class C4{constructor(e,t){this.from=e,this.heights=t,this.index=0}get more(){return this.index<this.heights.length}}class kn{constructor(e,t,r,o,s){this.from=e,this.length=t,this.top=r,this.height=o,this._content=s}get type(){return typeof this._content=="number"?Mn.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof dr?this._content.widget:null}get widgetLineBreaks(){return typeof this._content=="number"?this._content:0}join(e){let t=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(e._content)?e._content:[e]);return new kn(this.from,this.length+e.length,this.top,this.height+e.height,t)}}var He=function(n){return n[n.ByPos=0]="ByPos",n[n.ByHeight=1]="ByHeight",n[n.ByPosNoHeight=2]="ByPosNoHeight",n}(He||(He={}));const _s=.001;class Et{constructor(e,t,r=2){this.length=e,this.height=t,this.flags=r}get outdated(){return(this.flags&2)>0}set outdated(e){this.flags=(e?2:0)|this.flags&-3}setHeight(e){this.height!=e&&(Math.abs(this.height-e)>_s&&(wi=!0),this.height=e)}replace(e,t,r){return Et.of(r)}decomposeLeft(e,t){t.push(this)}decomposeRight(e,t){t.push(this)}applyChanges(e,t,r,o){let s=this,l=r.doc;for(let h=o.length-1;h>=0;h--){let{fromA:u,toA:f,fromB:d,toB:m}=o[h],v=s.lineAt(u,He.ByPosNoHeight,r.setDoc(t),0,0),x=v.to>=f?v:s.lineAt(f,He.ByPosNoHeight,r,0,0);for(m+=x.to-f,f=x.to;h>0&&v.from<=o[h-1].toA;)u=o[h-1].fromA,d=o[h-1].fromB,h--,u<v.from&&(v=s.lineAt(u,He.ByPosNoHeight,r,0,0));d+=v.from-u,u=v.from;let w=kc.build(r.setDoc(l),e,d,m);s=Hs(s,s.replace(u,f,w))}return s.updateHeight(r,0)}static empty(){return new Kt(0,0)}static of(e){if(e.length==1)return e[0];let t=0,r=e.length,o=0,s=0;for(;;)if(t==r)if(o>s*2){let h=e[t-1];h.break?e.splice(--t,1,h.left,null,h.right):e.splice(--t,1,h.left,h.right),r+=1+h.break,o-=h.size}else if(s>o*2){let h=e[r];h.break?e.splice(r,1,h.left,null,h.right):e.splice(r,1,h.left,h.right),r+=2+h.break,s-=h.size}else break;else if(o<s){let h=e[t++];h&&(o+=h.size)}else{let h=e[--r];h&&(s+=h.size)}let l=0;return e[t-1]==null?(l=1,t--):e[t]==null&&(l=1,r++),new S4(Et.of(e.slice(0,t)),l,Et.of(e.slice(r)))}}function Hs(n,e){return n==e?n:(n.constructor!=e.constructor&&(wi=!0),e)}Et.prototype.size=1;class h0 extends Et{constructor(e,t,r){super(e,t),this.deco=r}blockAt(e,t,r,o){return new kn(o,this.length,r,this.height,this.deco||0)}lineAt(e,t,r,o,s){return this.blockAt(0,r,o,s)}forEachLine(e,t,r,o,s,l){e<=s+this.length&&t>=s&&l(this.blockAt(0,r,o,s))}updateHeight(e,t=0,r=!1,o){return o&&o.from<=t&&o.more&&this.setHeight(o.heights[o.index++]),this.outdated=!1,this}toString(){return`block(${this.length})`}}class Kt extends h0{constructor(e,t){super(e,t,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0}blockAt(e,t,r,o){return new kn(o,this.length,r,this.height,this.breaks)}replace(e,t,r){let o=r[0];return r.length==1&&(o instanceof Kt||o instanceof vt&&o.flags&4)&&Math.abs(this.length-o.length)<10?(o instanceof vt?o=new Kt(o.length,this.height):o.height=this.height,this.outdated||(o.outdated=!1),o):Et.of(r)}updateHeight(e,t=0,r=!1,o){return o&&o.from<=t&&o.more?this.setHeight(o.heights[o.index++]):(r||this.outdated)&&this.setHeight(Math.max(this.widgetHeight,e.heightForLine(this.length-this.collapsed))+this.breaks*e.lineHeight),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`}}class vt extends Et{constructor(e){super(e,0)}heightMetrics(e,t){let r=e.doc.lineAt(t).number,o=e.doc.lineAt(t+this.length).number,s=o-r+1,l,h=0;if(e.lineWrapping){let u=Math.min(this.height,e.lineHeight*s);l=u/s,this.length>s+1&&(h=(this.height-u)/(this.length-s-1))}else l=this.height/s;return{firstLine:r,lastLine:o,perLine:l,perChar:h}}blockAt(e,t,r,o){let{firstLine:s,lastLine:l,perLine:h,perChar:u}=this.heightMetrics(t,o);if(t.lineWrapping){let f=o+(e<t.lineHeight?0:Math.round(Math.max(0,Math.min(1,(e-r)/this.height))*this.length)),d=t.doc.lineAt(f),m=h+d.length*u,v=Math.max(r,e-m/2);return new kn(d.from,d.length,v,m,0)}else{let f=Math.max(0,Math.min(l-s,Math.floor((e-r)/h))),{from:d,length:m}=t.doc.line(s+f);return new kn(d,m,r+h*f,h,0)}}lineAt(e,t,r,o,s){if(t==He.ByHeight)return this.blockAt(e,r,o,s);if(t==He.ByPosNoHeight){let{from:x,to:w}=r.doc.lineAt(e);return new kn(x,w-x,0,0,0)}let{firstLine:l,perLine:h,perChar:u}=this.heightMetrics(r,s),f=r.doc.lineAt(e),d=h+f.length*u,m=f.number-l,v=o+h*m+u*(f.from-s-m);return new kn(f.from,f.length,Math.max(o,Math.min(v,o+this.height-d)),d,0)}forEachLine(e,t,r,o,s,l){e=Math.max(e,s),t=Math.min(t,s+this.length);let{firstLine:h,perLine:u,perChar:f}=this.heightMetrics(r,s);for(let d=e,m=o;d<=t;){let v=r.doc.lineAt(d);if(d==e){let w=v.number-h;m+=u*w+f*(e-s-w)}let x=u+f*v.length;l(new kn(v.from,v.length,m,x,0)),m+=x,d=v.to+1}}replace(e,t,r){let o=this.length-t;if(o>0){let s=r[r.length-1];s instanceof vt?r[r.length-1]=new vt(s.length+o):r.push(null,new vt(o-1))}if(e>0){let s=r[0];s instanceof vt?r[0]=new vt(e+s.length):r.unshift(new vt(e-1),null)}return Et.of(r)}decomposeLeft(e,t){t.push(new vt(e-1),null)}decomposeRight(e,t){t.push(null,new vt(this.length-e-1))}updateHeight(e,t=0,r=!1,o){let s=t+this.length;if(o&&o.from<=t+this.length&&o.more){let l=[],h=Math.max(t,o.from),u=-1;for(o.from>t&&l.push(new vt(o.from-t-1).updateHeight(e,t));h<=s&&o.more;){let d=e.doc.lineAt(h).length;l.length&&l.push(null);let m=o.heights[o.index++];u==-1?u=m:Math.abs(m-u)>=_s&&(u=-2);let v=new Kt(d,m);v.outdated=!1,l.push(v),h+=d+1}h<=s&&l.push(null,new vt(s-h).updateHeight(e,h));let f=Et.of(l);return(u<0||Math.abs(f.height-this.height)>=_s||Math.abs(u-this.heightMetrics(e,t).perLine)>=_s)&&(wi=!0),Hs(this,f)}else(r||this.outdated)&&(this.setHeight(e.heightForGap(t,t+this.length)),this.outdated=!1);return this}toString(){return`gap(${this.length})`}}class S4 extends Et{constructor(e,t,r){super(e.length+t+r.length,e.height+r.height,t|(e.outdated||r.outdated?2:0)),this.left=e,this.right=r,this.size=e.size+r.size}get break(){return this.flags&1}blockAt(e,t,r,o){let s=r+this.left.height;return e<s?this.left.blockAt(e,t,r,o):this.right.blockAt(e,t,s,o+this.left.length+this.break)}lineAt(e,t,r,o,s){let l=o+this.left.height,h=s+this.left.length+this.break,u=t==He.ByHeight?e<l:e<h,f=u?this.left.lineAt(e,t,r,o,s):this.right.lineAt(e,t,r,l,h);if(this.break||(u?f.to<h:f.from>h))return f;let d=t==He.ByPosNoHeight?He.ByPosNoHeight:He.ByPos;return u?f.join(this.right.lineAt(h,d,r,l,h)):this.left.lineAt(h,d,r,o,s).join(f)}forEachLine(e,t,r,o,s,l){let h=o+this.left.height,u=s+this.left.length+this.break;if(this.break)e<u&&this.left.forEachLine(e,t,r,o,s,l),t>=u&&this.right.forEachLine(e,t,r,h,u,l);else{let f=this.lineAt(u,He.ByPos,r,o,s);e<f.from&&this.left.forEachLine(e,f.from-1,r,o,s,l),f.to>=e&&f.from<=t&&l(f),t>f.to&&this.right.forEachLine(f.to+1,t,r,h,u,l)}}replace(e,t,r){let o=this.left.length+this.break;if(t<o)return this.balanced(this.left.replace(e,t,r),this.right);if(e>this.left.length)return this.balanced(this.left,this.right.replace(e-o,t-o,r));let s=[];e>0&&this.decomposeLeft(e,s);let l=s.length;for(let h of r)s.push(h);if(e>0&&dp(s,l-1),t<this.length){let h=s.length;this.decomposeRight(t,s),dp(s,h)}return Et.of(s)}decomposeLeft(e,t){let r=this.left.length;if(e<=r)return this.left.decomposeLeft(e,t);t.push(this.left),this.break&&(r++,e>=r&&t.push(null)),e>r&&this.right.decomposeLeft(e-r,t)}decomposeRight(e,t){let r=this.left.length,o=r+this.break;if(e>=o)return this.right.decomposeRight(e-o,t);e<r&&this.left.decomposeRight(e,t),this.break&&e<o&&t.push(null),t.push(this.right)}balanced(e,t){return e.size>2*t.size||t.size>2*e.size?Et.of(this.break?[e,null,t]:[e,t]):(this.left=Hs(this.left,e),this.right=Hs(this.right,t),this.setHeight(e.height+t.height),this.outdated=e.outdated||t.outdated,this.size=e.size+t.size,this.length=e.length+this.break+t.length,this)}updateHeight(e,t=0,r=!1,o){let{left:s,right:l}=this,h=t+s.length+this.break,u=null;return o&&o.from<=t+s.length&&o.more?u=s=s.updateHeight(e,t,r,o):s.updateHeight(e,t,r),o&&o.from<=h+l.length&&o.more?u=l=l.updateHeight(e,h,r,o):l.updateHeight(e,h,r),u?this.balanced(s,l):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?" ":"-")+this.right}}function dp(n,e){let t,r;n[e]==null&&(t=n[e-1])instanceof vt&&(r=n[e+1])instanceof vt&&n.splice(e-1,3,new vt(t.length+1+r.length))}const k4=5;class kc{constructor(e,t){this.pos=e,this.oracle=t,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=e}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(e,t){if(this.lineStart>-1){let r=Math.min(t,this.lineEnd),o=this.nodes[this.nodes.length-1];o instanceof Kt?o.length+=r-this.pos:(r>this.pos||!this.isCovered)&&this.nodes.push(new Kt(r-this.pos,-1)),this.writtenTo=r,t>r&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=t}point(e,t,r){if(e<t||r.heightRelevant){let o=r.widget?r.widget.estimatedHeight:0,s=r.widget?r.widget.lineBreaks:0;o<0&&(o=this.oracle.lineHeight);let l=t-e;r.block?this.addBlock(new h0(l,o,r)):(l||s||o>=k4)&&this.addLineDeco(o,s,l)}else t>e&&this.span(e,t);this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return;let{from:e,to:t}=this.oracle.doc.lineAt(this.pos);this.lineStart=e,this.lineEnd=t,this.writtenTo<e&&((this.writtenTo<e-1||this.nodes[this.nodes.length-1]==null)&&this.nodes.push(this.blankContent(this.writtenTo,e-1)),this.nodes.push(null)),this.pos>e&&this.nodes.push(new Kt(this.pos-e,-1)),this.writtenTo=this.pos}blankContent(e,t){let r=new vt(t-e);return this.oracle.doc.lineAt(e).to==t&&(r.flags|=4),r}ensureLine(){this.enterLine();let e=this.nodes.length?this.nodes[this.nodes.length-1]:null;if(e instanceof Kt)return e;let t=new Kt(0,-1);return this.nodes.push(t),t}addBlock(e){this.enterLine();let t=e.deco;t&&t.startSide>0&&!this.isCovered&&this.ensureLine(),this.nodes.push(e),this.writtenTo=this.pos=this.pos+e.length,t&&t.endSide>0&&(this.covering=e)}addLineDeco(e,t,r){let o=this.ensureLine();o.length+=r,o.collapsed+=r,o.widgetHeight=Math.max(o.widgetHeight,e),o.breaks+=t,this.writtenTo=this.pos=this.pos+r}finish(e){let t=this.nodes.length==0?null:this.nodes[this.nodes.length-1];this.lineStart>-1&&!(t instanceof Kt)&&!this.isCovered?this.nodes.push(new Kt(0,-1)):(this.writtenTo<this.pos||t==null)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos));let r=e;for(let o of this.nodes)o instanceof Kt&&o.updateHeight(this.oracle,r),r+=o?o.length:1;return this.nodes}static build(e,t,r,o){let s=new kc(r,e);return qe.spans(t,r,o,s,0),s.finish(r)}}function A4(n,e,t){let r=new M4;return qe.compare(n,e,t,r,0),r.changes}class M4{constructor(){this.changes=[]}compareRange(){}comparePoint(e,t,r,o){(e<t||r&&r.heightRelevant||o&&o.heightRelevant)&&Es(e,t,this.changes,5)}}function T4(n,e){let t=n.getBoundingClientRect(),r=n.ownerDocument,o=r.defaultView||window,s=Math.max(0,t.left),l=Math.min(o.innerWidth,t.right),h=Math.max(0,t.top),u=Math.min(o.innerHeight,t.bottom);for(let f=n.parentNode;f&&f!=r.body;)if(f.nodeType==1){let d=f,m=window.getComputedStyle(d);if((d.scrollHeight>d.clientHeight||d.scrollWidth>d.clientWidth)&&m.overflow!="visible"){let v=d.getBoundingClientRect();s=Math.max(s,v.left),l=Math.min(l,v.right),h=Math.max(h,v.top),u=Math.min(f==n.parentNode?o.innerHeight:u,v.bottom)}f=m.position=="absolute"||m.position=="fixed"?d.offsetParent:d.parentNode}else if(f.nodeType==11)f=f.host;else break;return{left:s-t.left,right:Math.max(s,l)-t.left,top:h-(t.top+e),bottom:Math.max(h,u)-(t.top+e)}}function R4(n){let e=n.getBoundingClientRect(),t=n.ownerDocument.defaultView||window;return e.left<t.innerWidth&&e.right>0&&e.top<t.innerHeight&&e.bottom>0}function D4(n,e){let t=n.getBoundingClientRect();return{left:0,right:t.right-t.left,top:e,bottom:t.bottom-(t.top+e)}}class Il{constructor(e,t,r,o){this.from=e,this.to=t,this.size=r,this.displaySize=o}static same(e,t){if(e.length!=t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],s=t[r];if(o.from!=s.from||o.to!=s.to||o.size!=s.size)return!1}return!0}draw(e,t){return Ot.replace({widget:new O4(this.displaySize*(t?e.scaleY:e.scaleX),t)}).range(this.from,this.to)}}class O4 extends bc{constructor(e,t){super(),this.size=e,this.vertical=t}eq(e){return e.size==this.size&&e.vertical==this.vertical}toDOM(){let e=document.createElement("div");return this.vertical?e.style.height=this.size+"px":(e.style.width=this.size+"px",e.style.height="2px",e.style.display="inline-block"),e}get estimatedHeight(){return this.vertical?this.size:-1}}class fp{constructor(e){this.state=e,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scrollTop=0,this.scrolledToBottom=!1,this.scaleX=1,this.scaleY=1,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=pp,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=Dt.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1;let t=e.facet($c).some(r=>typeof r!="function"&&r.class=="cm-lineWrapping");this.heightOracle=new $4(t),this.stateDeco=e.facet(mo).filter(r=>typeof r!="function"),this.heightMap=Et.empty().applyChanges(this.stateDeco,Oe.empty,this.heightOracle.setDoc(e.doc),[new ln(0,0,0,e.doc.length)]);for(let r=0;r<2&&(this.viewport=this.getViewport(0,null),!!this.updateForViewport());r++);this.updateViewportLines(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=Ot.set(this.lineGaps.map(r=>r.draw(this,!1))),this.computeVisibleRanges()}updateForViewport(){let e=[this.viewport],{main:t}=this.state.selection;for(let r=0;r<=1;r++){let o=r?t.head:t.anchor;if(!e.some(({from:s,to:l})=>o>=s&&o<=l)){let{from:s,to:l}=this.lineBlockAt(o);e.push(new Ss(s,l))}}return this.viewports=e.sort((r,o)=>r.from-o.from),this.updateScaler()}updateScaler(){let e=this.scaler;return this.scaler=this.heightMap.height<=7e6?pp:new Ac(this.heightOracle,this.heightMap,this.viewports),e.eq(this.scaler)?0:2}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,e=>{this.viewportLines.push(no(e,this.scaler))})}update(e,t=null){this.state=e.state;let r=this.stateDeco;this.stateDeco=this.state.facet(mo).filter(d=>typeof d!="function");let o=e.changedRanges,s=ln.extendWithRanges(o,A4(r,this.stateDeco,e?e.changes:dt.empty(this.state.doc.length))),l=this.heightMap.height,h=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollTop);up(),this.heightMap=this.heightMap.applyChanges(this.stateDeco,e.startState.doc,this.heightOracle.setDoc(this.state.doc),s),(this.heightMap.height!=l||wi)&&(e.flags|=2),h?(this.scrollAnchorPos=e.changes.mapPos(h.from,-1),this.scrollAnchorHeight=h.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=l);let u=s.length?this.mapViewport(this.viewport,e.changes):this.viewport;(t&&(t.range.head<u.from||t.range.head>u.to)||!this.viewportIsAppropriate(u))&&(u=this.getViewport(0,t));let f=u.from!=this.viewport.from||u.to!=this.viewport.to;this.viewport=u,e.flags|=this.updateForViewport(),(f||!e.changes.empty||e.flags&2)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,e.changes))),e.flags|=this.computeVisibleRanges(e.changes),t&&(this.scrollTarget=t),!this.mustEnforceCursorAssoc&&e.selectionSet&&e.view.lineWrapping&&e.state.selection.main.empty&&e.state.selection.main.assoc&&!e.state.facet(IA)&&(this.mustEnforceCursorAssoc=!0)}measure(e){let t=e.contentDOM,r=window.getComputedStyle(t),o=this.heightOracle,s=r.whiteSpace;this.defaultTextDirection=r.direction=="rtl"?Dt.RTL:Dt.LTR;let l=this.heightOracle.mustRefreshForWrapping(s),h=t.getBoundingClientRect(),u=l||this.mustMeasureContent||this.contentDOMHeight!=h.height;this.contentDOMHeight=h.height,this.mustMeasureContent=!1;let f=0,d=0;if(h.width&&h.height){let{scaleX:j,scaleY:F}=xm(t,h);(j>.005&&Math.abs(this.scaleX-j)>.005||F>.005&&Math.abs(this.scaleY-F)>.005)&&(this.scaleX=j,this.scaleY=F,f|=16,l=u=!0)}let m=(parseInt(r.paddingTop)||0)*this.scaleY,v=(parseInt(r.paddingBottom)||0)*this.scaleY;(this.paddingTop!=m||this.paddingBottom!=v)&&(this.paddingTop=m,this.paddingBottom=v,f|=18),this.editorWidth!=e.scrollDOM.clientWidth&&(o.lineWrapping&&(u=!0),this.editorWidth=e.scrollDOM.clientWidth,f|=16);let x=e.scrollDOM.scrollTop*this.scaleY;this.scrollTop!=x&&(this.scrollAnchorHeight=-1,this.scrollTop=x),this.scrolledToBottom=$m(e.scrollDOM);let w=(this.printing?D4:T4)(t,this.paddingTop),S=w.top-this.pixelViewport.top,k=w.bottom-this.pixelViewport.bottom;this.pixelViewport=w;let A=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left;if(A!=this.inView&&(this.inView=A,A&&(u=!0)),!this.inView&&!this.scrollTarget&&!R4(e.dom))return 0;let T=h.width;if((this.contentDOMWidth!=T||this.editorHeight!=e.scrollDOM.clientHeight)&&(this.contentDOMWidth=h.width,this.editorHeight=e.scrollDOM.clientHeight,f|=16),u){let j=e.docView.measureVisibleLineHeights(this.viewport);if(o.mustRefreshForHeights(j)&&(l=!0),l||o.lineWrapping&&Math.abs(T-this.contentDOMWidth)>o.charWidth){let{lineHeight:F,charWidth:B,textHeight:W}=e.docView.measureTextSize();l=F>0&&o.refresh(s,F,B,W,Math.max(5,T/B),j),l&&(e.docView.minWidth=0,f|=16)}S>0&&k>0?d=Math.max(S,k):S<0&&k<0&&(d=Math.min(S,k)),up();for(let F of this.viewports){let B=F.from==this.viewport.from?j:e.docView.measureVisibleLineHeights(F);this.heightMap=(l?Et.empty().applyChanges(this.stateDeco,Oe.empty,this.heightOracle,[new ln(0,0,0,e.state.doc.length)]):this.heightMap).updateHeight(o,0,l,new C4(F.from,B))}wi&&(f|=2)}let D=!this.viewportIsAppropriate(this.viewport,d)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to);return D&&(f&2&&(f|=this.updateScaler()),this.viewport=this.getViewport(d,this.scrollTarget),f|=this.updateForViewport()),(f&2||D)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(l?[]:this.lineGaps,e)),f|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,e.docView.enforceCursorAssoc()),f}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(e,t){let r=.5-Math.max(-.5,Math.min(.5,e/1e3/2)),o=this.heightMap,s=this.heightOracle,{visibleTop:l,visibleBottom:h}=this,u=new Ss(o.lineAt(l-r*1e3,He.ByHeight,s,0,0).from,o.lineAt(h+(1-r)*1e3,He.ByHeight,s,0,0).to);if(t){let{head:f}=t.range;if(f<u.from||f>u.to){let d=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),m=o.lineAt(f,He.ByPos,s,0,0),v;t.y=="center"?v=(m.top+m.bottom)/2-d/2:t.y=="start"||t.y=="nearest"&&f<u.from?v=m.top:v=m.bottom-d,u=new Ss(o.lineAt(v-1e3/2,He.ByHeight,s,0,0).from,o.lineAt(v+d+1e3/2,He.ByHeight,s,0,0).to)}}return u}mapViewport(e,t){let r=t.mapPos(e.from,-1),o=t.mapPos(e.to,1);return new Ss(this.heightMap.lineAt(r,He.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(o,He.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:e,to:t},r=0){if(!this.inView)return!0;let{top:o}=this.heightMap.lineAt(e,He.ByPos,this.heightOracle,0,0),{bottom:s}=this.heightMap.lineAt(t,He.ByPos,this.heightOracle,0,0),{visibleTop:l,visibleBottom:h}=this;return(e==0||o<=l-Math.max(10,Math.min(-r,250)))&&(t==this.state.doc.length||s>=h+Math.max(10,Math.min(r,250)))&&o>l-2*1e3&&s<h+2*1e3}mapLineGaps(e,t){if(!e.length||t.empty)return e;let r=[];for(let o of e)t.touchesRange(o.from,o.to)||r.push(new Il(t.mapPos(o.from),t.mapPos(o.to),o.size,o.displaySize));return r}ensureLineGaps(e,t){let r=this.heightOracle.lineWrapping,o=r?1e4:2e3,s=o>>1,l=o<<1;if(this.defaultTextDirection!=Dt.LTR&&!r)return[];let h=[],u=(d,m,v,x)=>{if(m-d<s)return;let w=this.state.selection.main,S=[w.from];w.empty||S.push(w.to);for(let A of S)if(A>d&&A<m){u(d,A-10,v,x),u(A+10,m,v,x);return}let k=I4(e,A=>A.from>=v.from&&A.to<=v.to&&Math.abs(A.from-d)<s&&Math.abs(A.to-m)<s&&!S.some(T=>A.from<T&&A.to>T));if(!k){if(m<v.to&&t&&r&&t.visibleRanges.some(D=>D.from<=m&&D.to>=m)){let D=t.moveToLineBoundary(X.cursor(m),!1,!0).head;D>d&&(m=D)}let A=this.gapSize(v,d,m,x),T=r||A<2e6?A:2e6;k=new Il(d,m,A,T)}h.push(k)},f=d=>{if(d.length<l||d.type!=Mn.Text)return;let m=E4(d.from,d.to,this.stateDeco);if(m.total<l)return;let v=this.scrollTarget?this.scrollTarget.range.head:null,x,w;if(r){let S=o/this.heightOracle.lineLength*this.heightOracle.lineHeight,k,A;if(v!=null){let T=As(m,v),D=((this.visibleBottom-this.visibleTop)/2+S)/d.height;k=T-D,A=T+D}else k=(this.visibleTop-d.top-S)/d.height,A=(this.visibleBottom-d.top+S)/d.height;x=ks(m,k),w=ks(m,A)}else{let S=m.total*this.heightOracle.charWidth,k=o*this.heightOracle.charWidth,A=0;if(S>2e6)for(let B of e)B.from>=d.from&&B.from<d.to&&B.size!=B.displaySize&&B.from*this.heightOracle.charWidth+A<this.pixelViewport.left&&(A=B.size-B.displaySize);let T=this.pixelViewport.left+A,D=this.pixelViewport.right+A,j,F;if(v!=null){let B=As(m,v),W=((D-T)/2+k)/S;j=B-W,F=B+W}else j=(T-k)/S,F=(D+k)/S;x=ks(m,j),w=ks(m,F)}x>d.from&&u(d.from,x,d,m),w<d.to&&u(w,d.to,d,m)};for(let d of this.viewportLines)Array.isArray(d.type)?d.type.forEach(f):f(d);return h}gapSize(e,t,r,o){let s=As(o,r)-As(o,t);return this.heightOracle.lineWrapping?e.height*s:o.total*this.heightOracle.charWidth*s}updateLineGaps(e){Il.same(e,this.lineGaps)||(this.lineGaps=e,this.lineGapDeco=Ot.set(e.map(t=>t.draw(this,this.heightOracle.lineWrapping))))}computeVisibleRanges(e){let t=this.stateDeco;this.lineGaps.length&&(t=t.concat(this.lineGapDeco));let r=[];qe.spans(t,this.viewport.from,this.viewport.to,{span(s,l){r.push({from:s,to:l})},point(){}},20);let o=0;if(r.length!=this.visibleRanges.length)o=12;else for(let s=0;s<r.length&&!(o&8);s++){let l=this.visibleRanges[s],h=r[s];(l.from!=h.from||l.to!=h.to)&&(o|=4,e&&e.mapPos(l.from,-1)==h.from&&e.mapPos(l.to,1)==h.to||(o|=8))}return this.visibleRanges=r,o}lineBlockAt(e){return e>=this.viewport.from&&e<=this.viewport.to&&this.viewportLines.find(t=>t.from<=e&&t.to>=e)||no(this.heightMap.lineAt(e,He.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(e){return e>=this.viewportLines[0].top&&e<=this.viewportLines[this.viewportLines.length-1].bottom&&this.viewportLines.find(t=>t.top<=e&&t.bottom>=e)||no(this.heightMap.lineAt(this.scaler.fromDOM(e),He.ByHeight,this.heightOracle,0,0),this.scaler)}scrollAnchorAt(e){let t=this.lineBlockAtHeight(e+8);return t.from>=this.viewport.from||this.viewportLines[0].top-e>200?t:this.viewportLines[0]}elementAtHeight(e){return no(this.heightMap.blockAt(this.scaler.fromDOM(e),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}}class Ss{constructor(e,t){this.from=e,this.to=t}}function E4(n,e,t){let r=[],o=n,s=0;return qe.spans(t,n,e,{span(){},point(l,h){l>o&&(r.push({from:o,to:l}),s+=l-o),o=h}},20),o<e&&(r.push({from:o,to:e}),s+=e-o),{total:s,ranges:r}}function ks({total:n,ranges:e},t){if(t<=0)return e[0].from;if(t>=1)return e[e.length-1].to;let r=Math.floor(n*t);for(let o=0;;o++){let{from:s,to:l}=e[o],h=l-s;if(r<=h)return s+r;r-=h}}function As(n,e){let t=0;for(let{from:r,to:o}of n.ranges){if(e<=o){t+=e-r;break}t+=o-r}return t/n.total}function I4(n,e){for(let t of n)if(e(t))return t}const pp={toDOM(n){return n},fromDOM(n){return n},scale:1,eq(n){return n==this}};class Ac{constructor(e,t,r){let o=0,s=0,l=0;this.viewports=r.map(({from:h,to:u})=>{let f=t.lineAt(h,He.ByPos,e,0,0).top,d=t.lineAt(u,He.ByPos,e,0,0).bottom;return o+=d-f,{from:h,to:u,top:f,bottom:d,domTop:0,domBottom:0}}),this.scale=(7e6-o)/(t.height-o);for(let h of this.viewports)h.domTop=l+(h.top-s)*this.scale,l=h.domBottom=h.domTop+(h.bottom-h.top),s=h.bottom}toDOM(e){for(let t=0,r=0,o=0;;t++){let s=t<this.viewports.length?this.viewports[t]:null;if(!s||e<s.top)return o+(e-r)*this.scale;if(e<=s.bottom)return s.domTop+(e-s.top);r=s.bottom,o=s.domBottom}}fromDOM(e){for(let t=0,r=0,o=0;;t++){let s=t<this.viewports.length?this.viewports[t]:null;if(!s||e<s.domTop)return r+(e-o)/this.scale;if(e<=s.domBottom)return s.top+(e-s.domTop);r=s.bottom,o=s.domBottom}}eq(e){return e instanceof Ac?this.scale==e.scale&&this.viewports.length==e.viewports.length&&this.viewports.every((t,r)=>t.from==e.viewports[r].from&&t.to==e.viewports[r].to):!1}}function no(n,e){if(e.scale==1)return n;let t=e.toDOM(n.top),r=e.toDOM(n.bottom);return new kn(n.from,n.length,t,r-t,Array.isArray(n._content)?n._content.map(o=>no(o,e)):n._content)}const Ms=we.define({combine:n=>n.join(" ")}),Sh=we.define({combine:n=>n.indexOf(!0)>-1}),kh=mi.newName(),c0=mi.newName(),u0=mi.newName(),d0={"&light":"."+c0,"&dark":"."+u0};function Ah(n,e,t){return new mi(e,{finish(r){return/&/.test(r)?r.replace(/&\w*/,o=>{if(o=="&")return n;if(!t||!t[o])throw new RangeError(`Unsupported selector: ${o}`);return t[o]}):n+" "+r}})}const _4=Ah("."+kh,{"&":{position:"relative !important",boxSizing:"border-box","&.cm-focused":{outline:"1px dotted #212121"},display:"flex !important",flexDirection:"column"},".cm-scroller":{display:"flex !important",alignItems:"flex-start !important",fontFamily:"monospace",lineHeight:1.4,height:"100%",overflowX:"auto",position:"relative",zIndex:0,overflowAnchor:"none"},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:"block",whiteSpace:"pre",wordWrap:"normal",boxSizing:"border-box",minHeight:"100%",padding:"4px 0",outline:"none","&[contenteditable=true]":{WebkitUserModify:"read-write-plaintext-only"}},".cm-lineWrapping":{whiteSpace_fallback:"pre-wrap",whiteSpace:"break-spaces",wordBreak:"break-word",overflowWrap:"anywhere",flexShrink:1},"&light .cm-content":{caretColor:"black"},"&dark .cm-content":{caretColor:"white"},".cm-line":{display:"block",padding:"0 2px 0 6px"},".cm-layer":{position:"absolute",left:0,top:0,contain:"size style","& > *":{position:"absolute"}},"&light .cm-selectionBackground":{background:"#d9d9d9"},"&dark .cm-selectionBackground":{background:"#222"},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#d7d4f0"},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#233"},".cm-cursorLayer":{pointerEvents:"none"},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:"steps(1) cm-blink 1.2s infinite"},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:"1.2px solid black",marginLeft:"-0.6px",pointerEvents:"none"},".cm-cursor":{display:"none"},"&dark .cm-cursor":{borderLeftColor:"#ddd"},".cm-dropCursor":{position:"absolute"},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:"block"},".cm-iso":{unicodeBidi:"isolate"},".cm-announced":{position:"fixed",top:"-10000px"},"@media print":{".cm-announced":{display:"none"}},"&light .cm-activeLine":{backgroundColor:"#cceeff44"},"&dark .cm-activeLine":{backgroundColor:"#99eeff33"},"&light .cm-specialChar":{color:"red"},"&dark .cm-specialChar":{color:"#f78"},".cm-gutters":{flexShrink:0,display:"flex",height:"100%",boxSizing:"border-box",zIndex:200},".cm-gutters-before":{insetInlineStart:0},".cm-gutters-after":{insetInlineEnd:0},"&light .cm-gutters":{backgroundColor:"#f5f5f5",color:"#6c6c6c",border:"0px solid #ddd","&.cm-gutters-before":{borderRightWidth:"1px"},"&.cm-gutters-after":{borderLeftWidth:"1px"}},"&dark .cm-gutters":{backgroundColor:"#333338",color:"#ccc"},".cm-gutter":{display:"flex !important",flexDirection:"column",flexShrink:0,boxSizing:"border-box",minHeight:"100%",overflow:"hidden"},".cm-gutterElement":{boxSizing:"border-box"},".cm-lineNumbers .cm-gutterElement":{padding:"0 3px 0 5px",minWidth:"20px",textAlign:"right",whiteSpace:"nowrap"},"&light .cm-activeLineGutter":{backgroundColor:"#e2f2ff"},"&dark .cm-activeLineGutter":{backgroundColor:"#222227"},".cm-panels":{boxSizing:"border-box",position:"sticky",left:0,right:0,zIndex:300},"&light .cm-panels":{backgroundColor:"#f5f5f5",color:"black"},"&light .cm-panels-top":{borderBottom:"1px solid #ddd"},"&light .cm-panels-bottom":{borderTop:"1px solid #ddd"},"&dark .cm-panels":{backgroundColor:"#333338",color:"white"},".cm-dialog":{padding:"2px 19px 4px 6px",position:"relative","& label":{fontSize:"80%"}},".cm-dialog-close":{position:"absolute",top:"3px",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",fontSize:"14px",padding:"0"},".cm-tab":{display:"inline-block",overflow:"hidden",verticalAlign:"bottom"},".cm-widgetBuffer":{verticalAlign:"text-top",height:"1em",width:0,display:"inline"},".cm-placeholder":{color:"#888",display:"inline-block",verticalAlign:"top",userSelect:"none"},".cm-highlightSpace":{backgroundImage:"radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",backgroundPosition:"center"},".cm-highlightTab":{backgroundImage:`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,backgroundSize:"auto 100%",backgroundPosition:"right 90%",backgroundRepeat:"no-repeat"},".cm-trailingSpace":{backgroundColor:"#ff332255"},".cm-button":{verticalAlign:"middle",color:"inherit",fontSize:"70%",padding:".2em 1em",borderRadius:"1px"},"&light .cm-button":{backgroundImage:"linear-gradient(#eff1f5, #d9d9df)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#b4b4b4, #d0d3d6)"}},"&dark .cm-button":{backgroundImage:"linear-gradient(#393939, #111)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#111, #333)"}},".cm-textfield":{verticalAlign:"middle",color:"inherit",fontSize:"70%",border:"1px solid silver",padding:".2em .5em"},"&light .cm-textfield":{backgroundColor:"white"},"&dark .cm-textfield":{border:"1px solid #555",backgroundColor:"inherit"}},d0),j4={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},_l=G.ie&&G.ie_version<=11;class L4{constructor(e){this.view=e,this.active=!1,this.editContext=null,this.selectionRange=new pA,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.printQuery=null,this.parentCheck=-1,this.dom=e.contentDOM,this.observer=new MutationObserver(t=>{for(let r of t)this.queue.push(r);(G.ie&&G.ie_version<=11||G.ios&&e.composing)&&t.some(r=>r.type=="childList"&&r.removedNodes.length||r.type=="characterData"&&r.oldValue.length>r.target.nodeValue.length)?this.flushSoon():this.flush()}),window.EditContext&&G.android&&e.constructor.EDIT_CONTEXT!==!1&&!(G.chrome&&G.chrome_version<126)&&(this.editContext=new z4(e),e.state.facet(Fn)&&(e.contentDOM.editContext=this.editContext.editContext)),_l&&(this.onCharData=t=>{this.queue.push({target:t.target,type:"characterData",oldValue:t.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),window.matchMedia&&(this.printQuery=window.matchMedia("print")),typeof ResizeObserver=="function"&&(this.resizeScroll=new ResizeObserver(()=>{var t;((t=this.view.docView)===null||t===void 0?void 0:t.lastUpdate)<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(e.scrollDOM)),this.addWindowListeners(this.win=e.win),this.start(),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(t=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),t.length>0&&t[t.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent("Event")))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(t=>{t.length>0&&t[t.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent("Event"))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(e){this.view.inputState.runHandlers("scroll",e),this.intersecting&&this.view.measure()}onScroll(e){this.intersecting&&this.flush(!1),this.editContext&&this.view.requestMeasure(this.editContext.measureReq),this.onScrollChanged(e)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(e){(e.type=="change"||!e.type)&&!e.matches||(this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500))}updateGaps(e){if(this.gapIntersection&&(e.length!=this.gaps.length||this.gaps.some((t,r)=>t!=e[r]))){this.gapIntersection.disconnect();for(let t of e)this.gapIntersection.observe(t);this.gaps=e}}onSelectionChange(e){let t=this.selectionChanged;if(!this.readSelectionRange()||this.delayedAndroidKey)return;let{view:r}=this,o=this.selectionRange;if(r.state.facet(Fn)?r.root.activeElement!=this.dom:!Os(this.dom,o))return;let s=o.anchorNode&&r.docView.nearest(o.anchorNode);if(s&&s.ignoreEvent(e)){t||(this.selectionChanged=!1);return}(G.ie&&G.ie_version<=11||G.android&&G.chrome)&&!r.state.selection.main.empty&&o.focusNode&&oo(o.focusNode,o.focusOffset,o.anchorNode,o.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:e}=this,t=fo(e.root);if(!t)return!1;let r=G.safari&&e.root.nodeType==11&&e.root.activeElement==this.dom&&P4(this.view,t)||t;if(!r||this.selectionRange.eq(r))return!1;let o=Os(this.dom,r);return o&&!this.selectionChanged&&e.inputState.lastFocusTime>Date.now()-200&&e.inputState.lastTouchTime<Date.now()-300&&mA(this.dom,r)?(this.view.inputState.lastFocusTime=0,e.docView.updateSelection(),!1):(this.selectionRange.setRange(r),o&&(this.selectionChanged=!0),!0)}setSelectionRange(e,t){this.selectionRange.set(e.node,e.offset,t.node,t.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1;let e=0,t=null;for(let r=this.dom;r;)if(r.nodeType==1)!t&&e<this.scrollTargets.length&&this.scrollTargets[e]==r?e++:t||(t=this.scrollTargets.slice(0,e)),t&&t.push(r),r=r.assignedSlot||r.parentNode;else if(r.nodeType==11)r=r.host;else break;if(e<this.scrollTargets.length&&!t&&(t=this.scrollTargets.slice(0,e)),t){for(let r of this.scrollTargets)r.removeEventListener("scroll",this.onScroll);for(let r of this.scrollTargets=t)r.addEventListener("scroll",this.onScroll)}}ignore(e){if(!this.active)return e();try{return this.stop(),e()}finally{this.start(),this.clear()}}start(){this.active||(this.observer.observe(this.dom,j4),_l&&this.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.active=!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),_l&&this.dom.removeEventListener("DOMCharacterDataModified",this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(e,t){var r;if(!this.delayedAndroidKey){let o=()=>{let s=this.delayedAndroidKey;s&&(this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=s.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&s.force&&hi(this.dom,s.key,s.keyCode))};this.flushingAndroidKey=this.view.win.requestAnimationFrame(o)}(!this.delayedAndroidKey||e=="Enter")&&(this.delayedAndroidKey={key:e,keyCode:t,force:this.lastChange<Date.now()-50||!!(!((r=this.delayedAndroidKey)===null||r===void 0)&&r.force)})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}processRecords(){let e=this.pendingRecords();e.length&&(this.queue=[]);let t=-1,r=-1,o=!1;for(let s of e){let l=this.readMutation(s);l&&(l.typeOver&&(o=!0),t==-1?{from:t,to:r}=l:(t=Math.min(l.from,t),r=Math.max(l.to,r)))}return{from:t,to:r,typeOver:o}}readChange(){let{from:e,to:t,typeOver:r}=this.processRecords(),o=this.selectionChanged&&Os(this.dom,this.selectionRange);if(e<0&&!o)return null;e>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1;let s=new QA(this.view,e,t,r);return this.view.docView.domChanged={newSel:s.newSel?s.newSel.main:null},s}flush(e=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1;e&&this.readSelectionRange();let t=this.readChange();if(!t)return this.view.requestMeasure(),!1;let r=this.view.state,o=t0(this.view,t);return this.view.state==r&&(t.domChanged||t.newSel&&!t.newSel.main.eq(this.view.state.selection.main))&&this.view.update([]),o}readMutation(e){let t=this.view.docView.nearest(e.target);if(!t||t.ignoreMutation(e))return null;if(t.markDirty(e.type=="attributes"),e.type=="attributes"&&(t.flags|=4),e.type=="childList"){let r=gp(t,e.previousSibling||e.target.previousSibling,-1),o=gp(t,e.nextSibling||e.target.nextSibling,1);return{from:r?t.posAfter(r):t.posAtStart,to:o?t.posBefore(o):t.posAtEnd,typeOver:!1}}else return e.type=="characterData"?{from:t.posAtStart,to:t.posAtEnd,typeOver:e.target.nodeValue==e.oldValue}:null}setWindow(e){e!=this.win&&(this.removeWindowListeners(this.win),this.win=e,this.addWindowListeners(this.win))}addWindowListeners(e){e.addEventListener("resize",this.onResize),this.printQuery?this.printQuery.addEventListener?this.printQuery.addEventListener("change",this.onPrint):this.printQuery.addListener(this.onPrint):e.addEventListener("beforeprint",this.onPrint),e.addEventListener("scroll",this.onScroll),e.document.addEventListener("selectionchange",this.onSelectionChange)}removeWindowListeners(e){e.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onResize),this.printQuery?this.printQuery.removeEventListener?this.printQuery.removeEventListener("change",this.onPrint):this.printQuery.removeListener(this.onPrint):e.removeEventListener("beforeprint",this.onPrint),e.document.removeEventListener("selectionchange",this.onSelectionChange)}update(e){this.editContext&&(this.editContext.update(e),e.startState.facet(Fn)!=e.state.facet(Fn)&&(e.view.contentDOM.editContext=e.state.facet(Fn)?this.editContext.editContext:null))}destroy(){var e,t,r;this.stop(),(e=this.intersection)===null||e===void 0||e.disconnect(),(t=this.gapIntersection)===null||t===void 0||t.disconnect(),(r=this.resizeScroll)===null||r===void 0||r.disconnect();for(let o of this.scrollTargets)o.removeEventListener("scroll",this.onScroll);this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey),this.editContext&&(this.view.contentDOM.editContext=null,this.editContext.destroy())}}function gp(n,e,t){for(;e;){let r=Ne.get(e);if(r&&r.parent==n)return r;let o=e.parentNode;e=o!=n.dom?o:t>0?e.nextSibling:e.previousSibling}return null}function mp(n,e){let t=e.startContainer,r=e.startOffset,o=e.endContainer,s=e.endOffset,l=n.docView.domAtPos(n.state.selection.main.anchor);return oo(l.node,l.offset,o,s)&&([t,r,o,s]=[o,s,t,r]),{anchorNode:t,anchorOffset:r,focusNode:o,focusOffset:s}}function P4(n,e){if(e.getComposedRanges){let o=e.getComposedRanges(n.root)[0];if(o)return mp(n,o)}let t=null;function r(o){o.preventDefault(),o.stopImmediatePropagation(),t=o.getTargetRanges()[0]}return n.contentDOM.addEventListener("beforeinput",r,!0),n.dom.ownerDocument.execCommand("indent"),n.contentDOM.removeEventListener("beforeinput",r,!0),t?mp(n,t):null}class z4{constructor(e){this.from=0,this.to=0,this.pendingContextChange=null,this.handlers=Object.create(null),this.composing=null,this.resetRange(e.state);let t=this.editContext=new window.EditContext({text:e.state.doc.sliceString(this.from,this.to),selectionStart:this.toContextPos(Math.max(this.from,Math.min(this.to,e.state.selection.main.anchor))),selectionEnd:this.toContextPos(e.state.selection.main.head)});this.handlers.textupdate=r=>{let o=e.state.selection.main,{anchor:s,head:l}=o,h=this.toEditorPos(r.updateRangeStart),u=this.toEditorPos(r.updateRangeEnd);e.inputState.composing>=0&&!this.composing&&(this.composing={contextBase:r.updateRangeStart,editorBase:h,drifted:!1});let f={from:h,to:u,insert:Oe.of(r.text.split(`
`))};if(f.from==this.from&&s<this.from?f.from=s:f.to==this.to&&s>this.to&&(f.to=s),f.from==f.to&&!f.insert.length){let d=X.single(this.toEditorPos(r.selectionStart),this.toEditorPos(r.selectionEnd));d.main.eq(o)||e.dispatch({selection:d,userEvent:"select"});return}if((G.mac||G.android)&&f.from==l-1&&/^\. ?$/.test(r.text)&&e.contentDOM.getAttribute("autocorrect")=="off"&&(f={from:h,to:u,insert:Oe.of([r.text.replace("."," ")])}),this.pendingContextChange=f,!e.state.readOnly){let d=this.to-this.from+(f.to-f.from+f.insert.length);Sc(e,f,X.single(this.toEditorPos(r.selectionStart,d),this.toEditorPos(r.selectionEnd,d)))}this.pendingContextChange&&(this.revertPending(e.state),this.setSelection(e.state))},this.handlers.characterboundsupdate=r=>{let o=[],s=null;for(let l=this.toEditorPos(r.rangeStart),h=this.toEditorPos(r.rangeEnd);l<h;l++){let u=e.coordsForChar(l);s=u&&new DOMRect(u.left,u.top,u.right-u.left,u.bottom-u.top)||s||new DOMRect,o.push(s)}t.updateCharacterBounds(r.rangeStart,o)},this.handlers.textformatupdate=r=>{let o=[];for(let s of r.getTextFormats()){let l=s.underlineStyle,h=s.underlineThickness;if(l!="None"&&h!="None"){let u=this.toEditorPos(s.rangeStart),f=this.toEditorPos(s.rangeEnd);if(u<f){let d=`text-decoration: underline ${l=="Dashed"?"dashed ":l=="Squiggle"?"wavy ":""}${h=="Thin"?1:2}px`;o.push(Ot.mark({attributes:{style:d}}).range(u,f))}}}e.dispatch({effects:Km.of(Ot.set(o))})},this.handlers.compositionstart=()=>{e.inputState.composing<0&&(e.inputState.composing=0,e.inputState.compositionFirstChange=!0)},this.handlers.compositionend=()=>{if(e.inputState.composing=-1,e.inputState.compositionFirstChange=null,this.composing){let{drifted:r}=this.composing;this.composing=null,r&&this.reset(e.state)}};for(let r in this.handlers)t.addEventListener(r,this.handlers[r]);this.measureReq={read:r=>{this.editContext.updateControlBounds(r.contentDOM.getBoundingClientRect());let o=fo(r.root);o&&o.rangeCount&&this.editContext.updateSelectionBounds(o.getRangeAt(0).getBoundingClientRect())}}}applyEdits(e){let t=0,r=!1,o=this.pendingContextChange;return e.changes.iterChanges((s,l,h,u,f)=>{if(r)return;let d=f.length-(l-s);if(o&&l>=o.to)if(o.from==s&&o.to==l&&o.insert.eq(f)){o=this.pendingContextChange=null,t+=d,this.to+=d;return}else o=null,this.revertPending(e.state);if(s+=t,l+=t,l<=this.from)this.from+=d,this.to+=d;else if(s<this.to){if(s<this.from||l>this.to||this.to-this.from+f.length>3e4){r=!0;return}this.editContext.updateText(this.toContextPos(s),this.toContextPos(l),f.toString()),this.to+=d}t+=d}),o&&!r&&this.revertPending(e.state),!r}update(e){let t=this.pendingContextChange,r=e.startState.selection.main;this.composing&&(this.composing.drifted||!e.changes.touchesRange(r.from,r.to)&&e.transactions.some(o=>!o.isUserEvent("input.type")&&o.changes.touchesRange(this.from,this.to)))?(this.composing.drifted=!0,this.composing.editorBase=e.changes.mapPos(this.composing.editorBase)):!this.applyEdits(e)||!this.rangeIsValid(e.state)?(this.pendingContextChange=null,this.reset(e.state)):(e.docChanged||e.selectionSet||t)&&this.setSelection(e.state),(e.geometryChanged||e.docChanged||e.selectionSet)&&e.view.requestMeasure(this.measureReq)}resetRange(e){let{head:t}=e.selection.main;this.from=Math.max(0,t-1e4),this.to=Math.min(e.doc.length,t+1e4)}reset(e){this.resetRange(e),this.editContext.updateText(0,this.editContext.text.length,e.doc.sliceString(this.from,this.to)),this.setSelection(e)}revertPending(e){let t=this.pendingContextChange;this.pendingContextChange=null,this.editContext.updateText(this.toContextPos(t.from),this.toContextPos(t.from+t.insert.length),e.doc.sliceString(t.from,t.to))}setSelection(e){let{main:t}=e.selection,r=this.toContextPos(Math.max(this.from,Math.min(this.to,t.anchor))),o=this.toContextPos(t.head);(this.editContext.selectionStart!=r||this.editContext.selectionEnd!=o)&&this.editContext.updateSelection(r,o)}rangeIsValid(e){let{head:t}=e.selection.main;return!(this.from>0&&t-this.from<500||this.to<e.doc.length&&this.to-t<500||this.to-this.from>1e4*3)}toEditorPos(e,t=this.to-this.from){e=Math.min(e,t);let r=this.composing;return r&&r.drifted?r.editorBase+(e-r.contextBase):e+this.from}toContextPos(e){let t=this.composing;return t&&t.drifted?t.contextBase+(e-t.editorBase):e-this.from}destroy(){for(let e in this.handlers)this.editContext.removeEventListener(e,this.handlers[e])}}class Le{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return!!this.inputState&&this.inputState.composing>0}get compositionStarted(){return!!this.inputState&&this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(e={}){var t;this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.contentDOM=document.createElement("div"),this.scrollDOM=document.createElement("div"),this.scrollDOM.tabIndex=-1,this.scrollDOM.className="cm-scroller",this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement("div"),this.announceDOM.className="cm-announced",this.announceDOM.setAttribute("aria-live","polite"),this.dom=document.createElement("div"),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),e.parent&&e.parent.appendChild(this.dom);let{dispatch:r}=e;this.dispatchTransactions=e.dispatchTransactions||r&&(o=>o.forEach(s=>r(s,this)))||(o=>this.update(o)),this.dispatch=this.dispatch.bind(this),this._root=e.root||gA(e.parent)||document,this.viewState=new fp(e.state||Ue.create(e)),e.scrollTo&&e.scrollTo.is(ys)&&(this.viewState.scrollTarget=e.scrollTo.value.clip(this.viewState.state)),this.plugins=this.state.facet(ai).map(o=>new Dl(o));for(let o of this.plugins)o.update(this);this.observer=new L4(this),this.inputState=new i4(this),this.inputState.ensureHandlers(this.plugins),this.docView=new Gf(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure(),!((t=document.fonts)===null||t===void 0)&&t.ready&&document.fonts.ready.then(()=>this.requestMeasure())}dispatch(...e){let t=e.length==1&&e[0]instanceof kt?e:e.length==1&&Array.isArray(e[0])?e[0]:[this.state.update(...e)];this.dispatchTransactions(t,this)}update(e){if(this.updateState!=0)throw new Error("Calls to EditorView.update are not allowed while an update is in progress");let t=!1,r=!1,o,s=this.state;for(let v of e){if(v.startState!=s)throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");s=v.state}if(this.destroyed){this.viewState.state=s;return}let l=this.hasFocus,h=0,u=null;e.some(v=>v.annotation(s0))?(this.inputState.notifiedFocused=l,h=1):l!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=l,u=a0(s,l),u||(h=1));let f=this.observer.delayedAndroidKey,d=null;if(f?(this.observer.clearDelayedAndroidKey(),d=this.observer.readChange(),(d&&!this.state.doc.eq(s.doc)||!this.state.selection.eq(s.selection))&&(d=null)):this.observer.clear(),s.facet(Ue.phrases)!=this.state.facet(Ue.phrases))return this.setState(s);o=Vs.create(this,s,e),o.flags|=h;let m=this.viewState.scrollTarget;try{this.updateState=2;for(let v of e){if(m&&(m=m.map(v.changes)),v.scrollIntoView){let{main:x}=v.state.selection;m=new ci(x.empty?x:X.cursor(x.head,x.head>x.anchor?-1:1))}for(let x of v.effects)x.is(ys)&&(m=x.value.clip(this.state))}this.viewState.update(o,m),this.bidiCache=Us.update(this.bidiCache,o.changes),o.empty||(this.updatePlugins(o),this.inputState.update(o)),t=this.docView.update(o),this.state.facet(eo)!=this.styleModules&&this.mountStyles(),r=this.updateAttrs(),this.showAnnouncements(e),this.docView.updateSelection(t,e.some(v=>v.isUserEvent("select.pointer")))}finally{this.updateState=0}if(o.startState.facet(Ms)!=o.state.facet(Ms)&&(this.viewState.mustMeasureContent=!0),(t||r||m||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),t&&this.docViewUpdate(),!o.empty)for(let v of this.state.facet(yh))try{v(o)}catch(x){Hn(this.state,x,"update listener")}(u||d)&&Promise.resolve().then(()=>{u&&this.state==u.startState&&this.dispatch(u),d&&!t0(this,d)&&f.force&&hi(this.contentDOM,f.key,f.keyCode)})}setState(e){if(this.updateState!=0)throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");if(this.destroyed){this.viewState.state=e;return}this.updateState=2;let t=this.hasFocus;try{for(let r of this.plugins)r.destroy(this);this.viewState=new fp(e),this.plugins=e.facet(ai).map(r=>new Dl(r)),this.pluginMap.clear();for(let r of this.plugins)r.update(this);this.docView.destroy(),this.docView=new Gf(this),this.inputState.ensureHandlers(this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}t&&this.focus(),this.requestMeasure()}updatePlugins(e){let t=e.startState.facet(ai),r=e.state.facet(ai);if(t!=r){let o=[];for(let s of r){let l=t.indexOf(s);if(l<0)o.push(new Dl(s));else{let h=this.plugins[l];h.mustUpdate=e,o.push(h)}}for(let s of this.plugins)s.mustUpdate!=e&&s.destroy(this);this.plugins=o,this.pluginMap.clear()}else for(let o of this.plugins)o.mustUpdate=e;for(let o=0;o<this.plugins.length;o++)this.plugins[o].update(this);t!=r&&this.inputState.ensureHandlers(this.plugins)}docViewUpdate(){for(let e of this.plugins){let t=e.value;if(t&&t.docViewUpdate)try{t.docViewUpdate(this)}catch(r){Hn(this.state,r,"doc view update listener")}}}measure(e=!0){if(this.destroyed)return;if(this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.observer.delayedAndroidKey){this.measureScheduled=-1,this.requestMeasure();return}this.measureScheduled=0,e&&this.observer.forceFlush();let t=null,r=this.scrollDOM,o=r.scrollTop*this.scaleY,{scrollAnchorPos:s,scrollAnchorHeight:l}=this.viewState;Math.abs(o-this.viewState.scrollTop)>1&&(l=-1),this.viewState.scrollAnchorHeight=-1;try{for(let h=0;;h++){if(l<0)if($m(r))s=-1,l=this.viewState.heightMap.height;else{let x=this.viewState.scrollAnchorAt(o);s=x.from,l=x.top}this.updateState=1;let u=this.viewState.measure(this);if(!u&&!this.measureRequests.length&&this.viewState.scrollTarget==null)break;if(h>5){console.warn(this.measureRequests.length?"Measure loop restarted more than 5 times":"Viewport failed to stabilize");break}let f=[];u&4||([this.measureRequests,f]=[f,this.measureRequests]);let d=f.map(x=>{try{return x.read(this)}catch(w){return Hn(this.state,w),vp}}),m=Vs.create(this,this.state,[]),v=!1;m.flags|=u,t?t.flags|=u:t=m,this.updateState=2,m.empty||(this.updatePlugins(m),this.inputState.update(m),this.updateAttrs(),v=this.docView.update(m),v&&this.docViewUpdate());for(let x=0;x<f.length;x++)if(d[x]!=vp)try{let w=f[x];w.write&&w.write(d[x],this)}catch(w){Hn(this.state,w)}if(v&&this.docView.updateSelection(!0),!m.viewportChanged&&this.measureRequests.length==0){if(this.viewState.editorHeight)if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null,l=-1;continue}else{let x=(s<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(s).top)-l;if(x>1||x<-1){o=o+x,r.scrollTop=o/this.scaleY,l=-1;continue}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(t&&!t.empty)for(let h of this.state.facet(yh))h(t)}get themeClasses(){return kh+" "+(this.state.facet(Sh)?u0:c0)+" "+this.state.facet(Ms)}updateAttrs(){let e=bp(this,Gm,{class:"cm-editor"+(this.hasFocus?" cm-focused ":" ")+this.themeClasses}),t={spellcheck:"false",autocorrect:"off",autocapitalize:"off",writingsuggestions:"false",translate:"no",contenteditable:this.state.facet(Fn)?"true":"false",class:"cm-content",style:`${G.tabSize}: ${this.state.tabSize}`,role:"textbox","aria-multiline":"true"};this.state.readOnly&&(t["aria-readonly"]="true"),bp(this,$c,t);let r=this.observer.ignore(()=>{let o=mh(this.contentDOM,this.contentAttrs,t),s=mh(this.dom,this.editorAttrs,e);return o||s});return this.editorAttrs=e,this.contentAttrs=t,r}showAnnouncements(e){let t=!0;for(let r of e)for(let o of r.effects)if(o.is(Le.announce)){t&&(this.announceDOM.textContent=""),t=!1;let s=this.announceDOM.appendChild(document.createElement("div"));s.textContent=o.value}}mountStyles(){this.styleModules=this.state.facet(eo);let e=this.state.facet(Le.cspNonce);mi.mount(this.root,this.styleModules.concat(_4).reverse(),e?{nonce:e}:void 0)}readMeasured(){if(this.updateState==2)throw new Error("Reading the editor layout isn't allowed during an update");this.updateState==0&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(e){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),e){if(this.measureRequests.indexOf(e)>-1)return;if(e.key!=null){for(let t=0;t<this.measureRequests.length;t++)if(this.measureRequests[t].key===e.key){this.measureRequests[t]=e;return}}this.measureRequests.push(e)}}plugin(e){let t=this.pluginMap.get(e);return(t===void 0||t&&t.plugin!=e)&&this.pluginMap.set(e,t=this.plugins.find(r=>r.plugin==e)||null),t&&t.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}get scaleX(){return this.viewState.scaleX}get scaleY(){return this.viewState.scaleY}elementAtHeight(e){return this.readMeasured(),this.viewState.elementAtHeight(e)}lineBlockAtHeight(e){return this.readMeasured(),this.viewState.lineBlockAtHeight(e)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(e){return this.viewState.lineBlockAt(e)}get contentHeight(){return this.viewState.contentHeight}moveByChar(e,t,r){return El(this,e,Qf(this,e,t,r))}moveByGroup(e,t){return El(this,e,Qf(this,e,t,r=>YA(this,e.head,r)))}visualLineSide(e,t){let r=this.bidiSpans(e),o=this.textDirectionAt(e.from),s=r[t?r.length-1:0];return X.cursor(s.side(t,o)+e.from,s.forward(!t,o)?1:-1)}moveToLineBoundary(e,t,r=!0){return GA(this,e,t,r)}moveVertically(e,t,r){return El(this,e,XA(this,e,t,r))}domAtPos(e){return this.docView.domAtPos(e)}posAtDOM(e,t=0){return this.docView.posFromDOM(e,t)}posAtCoords(e,t=!0){return this.readMeasured(),e0(this,e,t)}coordsAtPos(e,t=1){this.readMeasured();let r=this.docView.coordsAt(e,t);if(!r||r.left==r.right)return r;let o=this.state.doc.lineAt(e),s=this.bidiSpans(o),l=s[hr.find(s,e-o.from,-1,t)];return ta(r,l.dir==Dt.LTR==t>0)}coordsForChar(e){return this.readMeasured(),this.docView.coordsForChar(e)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(e){return!this.state.facet(Um)||e<this.viewport.from||e>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(e))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(e){if(e.length>B4)return Pm(e.length);let t=this.textDirectionAt(e.from),r;for(let s of this.bidiCache)if(s.from==e.from&&s.dir==t&&(s.fresh||Lm(s.isolates,r=Kf(this,e))))return s.order;r||(r=Kf(this,e));let o=DA(e.text,t,r);return this.bidiCache.push(new Us(e.from,e.to,t,r,!0,o)),o}get hasFocus(){var e;return(this.dom.ownerDocument.hasFocus()||G.safari&&((e=this.inputState)===null||e===void 0?void 0:e.lastContextMenu)>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{wm(this.contentDOM),this.docView.updateSelection()})}setRoot(e){this._root!=e&&(this._root=e,this.observer.setWindow((e.nodeType==9?e:e.ownerDocument).defaultView||window),this.mountStyles())}destroy(){this.root.activeElement==this.contentDOM&&this.contentDOM.blur();for(let e of this.plugins)e.destroy(this);this.plugins=[],this.inputState.destroy(),this.docView.destroy(),this.dom.remove(),this.observer.destroy(),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(e,t={}){return ys.of(new ci(typeof e=="number"?X.cursor(e):e,t.y,t.x,t.yMargin,t.xMargin))}scrollSnapshot(){let{scrollTop:e,scrollLeft:t}=this.scrollDOM,r=this.viewState.scrollAnchorAt(e);return ys.of(new ci(X.cursor(r.from),"start","start",r.top-e,t,!0))}setTabFocusMode(e){e==null?this.inputState.tabFocusMode=this.inputState.tabFocusMode<0?0:-1:typeof e=="boolean"?this.inputState.tabFocusMode=e?0:-1:this.inputState.tabFocusMode!=0&&(this.inputState.tabFocusMode=Date.now()+e)}static domEventHandlers(e){return go.define(()=>({}),{eventHandlers:e})}static domEventObservers(e){return go.define(()=>({}),{eventObservers:e})}static theme(e,t){let r=mi.newName(),o=[Ms.of(r),eo.of(Ah(`.${r}`,e))];return t&&t.dark&&o.push(Sh.of(!0)),o}static baseTheme(e){return J5.lowest(eo.of(Ah("."+kh,e,d0)))}static findFromDOM(e){var t;let r=e.querySelector(".cm-content"),o=r&&Ne.get(r)||Ne.get(e);return((t=o?.rootView)===null||t===void 0?void 0:t.view)||null}}Le.styleModule=eo;Le.inputHandler=Vm;Le.clipboardInputFilter=wc;Le.clipboardOutputFilter=yc;Le.scrollHandler=qm;Le.focusChangeEffect=Hm;Le.perLineTextDirection=Um;Le.exceptionSink=Wm;Le.updateListener=yh;Le.editable=Fn;Le.mouseSelectionStyle=Fm;Le.dragMovesSelection=Nm;Le.clickAddsSelectionRange=Bm;Le.decorations=mo;Le.outerDecorations=Ym;Le.atomicRanges=Cc;Le.bidiIsolatedRanges=Xm;Le.scrollMargins=Jm;Le.darkTheme=Sh;Le.cspNonce=we.define({combine:n=>n.length?n[0]:""});Le.contentAttributes=$c;Le.editorAttributes=Gm;Le.lineWrapping=Le.contentAttributes.of({class:"cm-lineWrapping"});Le.announce=ot.define();const B4=4096,vp={};class Us{constructor(e,t,r,o,s,l){this.from=e,this.to=t,this.dir=r,this.isolates=o,this.fresh=s,this.order=l}static update(e,t){if(t.empty&&!e.some(s=>s.fresh))return e;let r=[],o=e.length?e[e.length-1].dir:Dt.LTR;for(let s=Math.max(0,e.length-10);s<e.length;s++){let l=e[s];l.dir==o&&!t.touchesRange(l.from,l.to)&&r.push(new Us(t.mapPos(l.from,1),t.mapPos(l.to,-1),l.dir,l.isolates,!1,l.order))}return r}}function bp(n,e,t){for(let r=n.state.facet(e),o=r.length-1;o>=0;o--){let s=r[o],l=typeof s=="function"?s(n):s;l&&gh(l,t)}return t}class yi extends gi{compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}eq(e){return!1}destroy(e){}}yi.prototype.elementClass="";yi.prototype.toDOM=void 0;yi.prototype.mapMode=Gt.TrackBefore;yi.prototype.startSide=yi.prototype.endSide=-1;yi.prototype.point=!0;const f0=ot.define(),p0=ot.define(),N4=Ot.mark({attributes:{style:"background-color: yellow; color: black"}}),F4=Br.define({create(){return Ot.none},update(n,e){return n=n.map(e.changes),e.effects.forEach(t=>{t.is(f0)?n=n.update({add:t.value,sort:!0}):t.is(p0)&&(n=n.update({filter:t.value}))}),n},provide:n=>Le.decorations.from(n)});y.forwardRef(({hasError:n,required:e,id:t,value:r="",disabled:o=!1,onChange:s=()=>null,...l},h)=>{const u=y.useRef(),f=y.useRef(),d=y.useRef(),{error:m,...v}=Xt("JsonInput"),x=!!m||n,w=v.id??t,S=v.required||e;let k;m?k=`${w}-error`:v.hint&&(k=`${w}-hint`);const A=ae=>{var ie,$e;const he=(ie=f.current)==null?void 0:ie.doc;if(he){const{text:ne,to:ue}=he.line(ae),Te=ue-ne.trimStart().length;ue>Te&&(($e=d.current)==null||$e.dispatch({effects:f0.of([N4.range(Te,ue)])}))}},T=()=>{var ae,ie;const $e=(ae=f.current)==null?void 0:ae.doc;if($e){const he=$e.length||0;(ie=d.current)==null||ie.dispatch({effects:p0.of((ne,ue)=>ue<=0||ne>=he)})}},D=({state:ae,view:ie})=>{d.current=ie,f.current=ae,T();const $e=TC()(ie);$e.length&&A(ae.doc.lineAt($e[0].from).number)},j=(ae,ie)=>{D(ie),s(ae)},F=(ae,ie)=>{d.current=ae,f.current=ie,D({view:ae,state:ie})},{setContainer:B,view:W}=oC({value:r,onCreateEditor:F,container:u.current,editable:!o,extensions:[sC(),F4],onChange:j,theme:"dark",basicSetup:{lineNumbers:!0,bracketMatching:!0,closeBrackets:!0,indentOnInput:!0,syntaxHighlighting:!0,highlightSelectionMatches:!0,tabSize:2}}),re=Bt(u,B);return y.useImperativeHandle(h,()=>({...W?.dom,focus(){W&&W.focus()},scrollIntoView(ae){W&&W.dom.scrollIntoView(ae)}}),[W]),g.jsx(W4,{ref:re,$disabled:o,$hasError:x,alignItems:"stretch",hasRadius:!0,"aria-required":S,id:w,"aria-describedby":k,...l})});const W4=I(U)`
  font-size: ${({theme:n})=>n.fontSizes[3]};
  line-height: ${({theme:n})=>n.lineHeights[6]};

  ${({theme:n})=>n.breakpoints.medium} {
    font-size: ${({theme:n})=>n.fontSizes[2]};
    line-height: ${({theme:n})=>n.lineHeights[2]};
  }
  .cm-editor {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral800 changes between themes 
     */
    background-color: #32324d;
    width: 100%;
    outline: none;
    cursor: ${({$disabled:n})=>n?"not-allowed":"text"};
  }

  .cm-scroller {
    border: 1px solid ${({theme:n,$hasError:e})=>e?n.colors.danger600:n.colors.neutral200};
    /* inputFocusStyle will receive hasError prop */
    ${pr()}
  }

  .cm-editor,
  .cm-scroller {
    border-radius: ${({theme:n})=>n.borderRadius};
  }

  .cm-gutters,
  .cm-activeLineGutter {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral700 changes between themes 
     */
    background-color: #4a4a6a;
  }
`,V4=It(({disabled:n,...e},t)=>g.jsx(Gl,{ref:t,tag:Mi,tabIndex:n?-1:void 0,disabled:n,...e}));I(H)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`;I(H)`
  text-decoration: none;

  &:focus {
    left: ${({theme:n})=>n.spaces[3]};
    top: ${({theme:n})=>n.spaces[3]};
  }
`;y.forwardRef((n,e)=>g.jsx(aC,{...n,asChild:!0,ref:e}));y.forwardRef((n,e)=>g.jsx(lC,{children:g.jsx(H4,{children:g.jsx(U4,{ref:e,...n})})}));const H4=I(hC)`
  background: ${n=>Hg(n.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${n=>n.theme.zIndices.overlay};
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${nt.overlayFadeIn} ${n=>n.theme.motion.timings[200]}
      ${n=>n.theme.motion.easings.authenticMotion};
  }
`,U4=I(cC)`
  max-width: 83rem;
  max-height: 90vh;
  height: auto;
  width: calc(100% - ${({theme:n})=>n.spaces[8]});
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${n=>n.theme.borderRadius};
  background-color: ${n=>n.theme.colors.neutral0};
  box-shadow: ${n=>n.theme.shadows.popupShadow};
  z-index: ${n=>n.theme.zIndices.modal};

  ${({theme:n})=>n.breakpoints.medium} {
    width: calc(100% - ${({theme:n})=>n.spaces[9]});
  }
  > form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${n=>n.theme.motion.timings[200]};
      animation-timing-function: ${n=>n.theme.motion.easings.authenticMotion};
      animation-name: ${nt.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${n=>n.theme.motion.timings[120]};
      animation-timing-function: ${n=>n.theme.motion.easings.easeOutQuad};
      animation-name: ${nt.modalPopOut};
    }
  }
`,q4=y.forwardRef((n,e)=>g.jsx(uC,{...n,asChild:!0,ref:e}));y.forwardRef(({children:n,closeLabel:e="Close modal",...t},r)=>g.jsxs(K4,{ref:r,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...t,tag:"header",children:[n,g.jsx(q4,{children:g.jsx(ur,{withTooltip:!1,label:e,children:g.jsx(Ci,{})})})]}));const K4=I(U)`
  border-bottom: solid 1px ${n=>n.theme.colors.neutral150};
`;y.forwardRef((n,e)=>g.jsx(dC,{asChild:!0,children:g.jsx(Z,{tag:"h2",variant:"omega",fontWeight:"bold",ref:e,...n})}));y.forwardRef(({children:n,...e},t)=>g.jsx(G4,{ref:t,...e,children:n}));const G4=I(Zs)`
  padding-inline: ${n=>n.theme.spaces[7]};

  & > div {
    padding-block: ${n=>n.theme.spaces[8]};
    /* Add negative margin and padding to avoid cropping the box shadow when the inputs are focused */
    margin: 0 -2px 0 -2px;
    padding-left: 2px;
    padding-right: 2px;

    & > div {
      // the scroll area component applies a display: table to the child, which we don't want.
      display: block !important;
    }
  }
`;y.forwardRef((n,e)=>g.jsx(Y4,{ref:e,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...n,tag:"footer"}));const Y4=I(U)`
  border-top: solid 1px ${n=>n.theme.colors.neutral150};
  flex: 1;
`,X4="";y.forwardRef(({startAction:n,locale:e,onValueChange:t,value:r,step:o=1,disabled:s=!1,...l},h)=>{const u=Qs("NumberInput"),f=e||u.locale,d=y.useRef(new fC(f,{style:"decimal"})),m=y.useRef(new pC(f,{maximumFractionDigits:20})),[v,x]=J4({prop(D){const j=String(r);return isNaN(Number(j))||j!==D&&D!==""?D:m.current.format(Number(r))},defaultProp:X4,onChange(D){if(!t)return;const j=d.current.parse(D??"");t(isNaN(j)?void 0:j)}}),w=D=>{x(String(D))},S=({target:{value:D}})=>{d.current.isValidPartialNumber(D)&&w(D)},k=(D=>{const j=D.toString();return j.includes(".")?j.split(".")[1].length:0})(o),A=()=>{if(!v){w(o);return}const D=d.current.parse(v),j=isNaN(D)?o:D+o,F=parseFloat(j.toFixed(k));w(m.current.format(F))},T=()=>{if(!v){w(-o);return}const D=d.current.parse(v),j=isNaN(D)?-o:D-o,F=parseFloat(j.toFixed(k));w(m.current.format(F))};return g.jsx(uc,{ref:h,startAction:n,disabled:s,type:"text",inputMode:"decimal",onChange:S,onKeyDown:D=>{if(!s)switch(D.key){case $t.DOWN:{D.preventDefault(),T();break}case $t.UP:{D.preventDefault(),A();break}}},onBlur:()=>{if(v){const D=d.current.parse(v),j=isNaN(D)?"":m.current.format(D);w(j)}},value:v,endAction:g.jsxs(U,{direction:"column",children:[g.jsx(xp,{disabled:s,"aria-hidden":!0,$reverse:!0,onClick:A,tabIndex:-1,type:"button","data-testid":"ArrowUp",children:g.jsx(Er,{fill:"neutral500"})}),g.jsx(xp,{disabled:s,"aria-hidden":!0,onClick:T,tabIndex:-1,type:"button","data-testid":"ArrowDown",children:g.jsx(Er,{fill:"neutral500"})})]}),...l})});const xp=I.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(${({$reverse:n})=>n?"-2px":"2px"});
  cursor: ${({disabled:n})=>n?"not-allowed":void 0};
  height: 1.1rem;

  svg {
    width: 1.2rem;
    transform: ${({$reverse:n})=>n?"rotateX(180deg)":void 0};
  }
`;function J4({prop:n,defaultProp:e,onChange:t=()=>{}}){const[r,o]=Ag({defaultProp:e,onChange:t}),s=n!==void 0,l=n instanceof Function?n(r):n,h=s?l:r,u=Nh(t),f=y.useCallback(d=>{if(s){const m=typeof d=="function"?d(l):d;m!==l&&(u(m),o(d))}else o(d)},[s,l,o,u]);return[h,f]}const Z4=y.createContext({activePage:1,pageCount:1}),Mc=()=>y.useContext(Z4);It(({children:n,...e},t)=>{const{activePage:r}=Mc(),o=r===1;return g.jsxs(m0,{ref:t,"aria-disabled":o,tabIndex:o?-1:void 0,...e,children:[g.jsx(Ai,{children:n}),g.jsx(Pp,{"aria-hidden":!0})]})});It(({children:n,...e},t)=>{const{activePage:r,pageCount:o}=Mc(),s=r===o;return g.jsxs(m0,{ref:t,"aria-disabled":s,tabIndex:s?-1:void 0,...e,children:[g.jsx(Ai,{children:n}),g.jsx(Ih,{"aria-hidden":!0})]})});const g0=I(Mi)`
  padding: ${({theme:n})=>n.spaces[3]};
  border-radius: ${({theme:n})=>n.borderRadius};
  box-shadow: ${({$active:n,theme:e})=>n?e.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${Ys}
`,m0=I(g0)`
  font-size: 1.1rem;

  svg path {
    fill: ${n=>n["aria-disabled"]?n.theme.colors.neutral300:n.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${n=>n["aria-disabled"]?n.theme.colors.neutral300:n.theme.colors.neutral700};
    }
  }

  ${n=>n["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`;It(({number:n,children:e,...t},r)=>{const{activePage:o}=Mc(),s=o===n;return g.jsxs(Q4,{ref:r,...t,"aria-current":s,$active:s,children:[g.jsx(Ai,{children:e}),g.jsx(Z,{"aria-hidden":!0,fontWeight:s?"bold":void 0,lineHeight:"revert",variant:"pi",children:n})]})});const Q4=I(g0)`
  color: ${({theme:n,$active:e})=>e?n.colors.primary700:n.colors.neutral800};
  background: ${({theme:n,$active:e})=>e?n.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:n})=>n.shadows.filterShadow};
  }
`;y.forwardRef((n,e)=>g.jsx(gC,{...n,asChild:!0,ref:e}));y.forwardRef((n,e)=>g.jsx(mC,{children:g.jsx(e6,{sideOffset:4,side:"bottom",align:"start",...n,ref:e})}));const e6=I(vC)`
  box-shadow: ${({theme:n})=>n.shadows.filterShadow};
  z-index: ${({theme:n})=>n.zIndices.popover};
  background-color: ${n=>n.theme.colors.neutral0};
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${n=>n.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${n=>n.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${nt.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${nt.slideDownIn};
      }
    }

    &[data-state='closed'] {
      animation-timing-function: ${n=>n.theme.motion.easings.easeOutQuad};

      &[data-side='top'] {
        animation-name: ${nt.slideUpOut};
      }

      &[data-side='bottom'] {
        animation-name: ${nt.slideDownOut};
      }
    }
  }
`;y.forwardRef(({children:n,intersectionId:e,onReachEnd:t,...r},o)=>{const s=y.useRef(null),l=Bt(s,o),h=xn();return wo(s,t??(()=>{}),{selectorToWatch:`#${di(h)}`,skipWhen:!e||!t}),g.jsxs(t6,{ref:l,...r,children:[n,e&&t&&g.jsx(H,{id:di(h),width:"100%",height:"1px"})]})});const t6=I(Zs)`
  height: 20rem;
`;y.forwardRef(({size:n="M",value:e,...t},r)=>g.jsx(n6,{ref:r,$size:n,...t,children:g.jsx(r6,{style:{transform:`translate3D(-${100-(e??0)}%, 0, 0)`}})}));const n6=I(bC)`
  position: relative;
  overflow: hidden;
  width: ${n=>n.$size==="S"?"7.8rem":"10.2rem"};
  height: ${n=>n.$size==="S"?"0.4rem":"0.8rem"};
  background-color: ${n=>n.theme.colors.neutral600};
  border-radius: ${n=>n.theme.borderRadius};

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
`,r6=I(xC)`
  background-color: ${({theme:n})=>n.colors.neutral0};
  border-radius: ${({theme:n})=>n.borderRadius};
  width: 100%;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${n=>n.theme.motion.timings[320]}
      ${n=>n.theme.motion.easings.authenticMotion};
  }
`;y.forwardRef((n,e)=>g.jsx(i6,{ref:e,...n}));const i6=I(wC)`
  display: flex;
  flex-direction: column;
  gap: ${n=>n.theme.spaces[3]};
`;y.forwardRef(({children:n,id:e,...t},r)=>{const o=xn(e);return g.jsxs(U,{gap:2,children:[g.jsx(o6,{id:o,ref:r,...t,children:g.jsx(s6,{})}),g.jsx(Z,{tag:"label",htmlFor:o,children:n})]})});const o6=I(yC)`
  background: ${n=>n.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  flex: 0 0 2rem;
  border-radius: 50%;
  border: 1px solid ${n=>n.theme.colors.neutral300};
  position: relative;
  cursor: pointer;
  z-index: 0;

  @media (prefers-reduced-motion: no-preference) {
    transition: border-color ${n=>n.theme.motion.timings[120]}
      ${n=>n.theme.motion.easings.easeOutQuad};
  }

  &[data-state='checked'] {
    border: 1px solid ${n=>n.theme.colors.primary600};
  }

  &[data-disabled] {
    cursor: not-allowed;
    background-color: ${n=>n.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`,s6=I($C)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &[data-state='checked'] {
    @media (prefers-reduced-motion: no-preference) {
      animation: ${nt.popIn} ${n=>n.theme.motion.timings[200]};
    }
  }

  &::after {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${n=>n.theme.colors.primary600};
  }
`,a6=n=>{const e=n.querySelector('[tabindex="0"]');e&&e.focus()},v0=y.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),l6=()=>y.useContext(v0),h6=y.forwardRef(({colCount:n,rowCount:e,jumpStep:t=3,initialCol:r=0,initialRow:o=0,...s},l)=>{const h=y.useRef(null),u=y.useRef(!1),f=Bt(h,l),[d,m]=y.useState(o),[v,x]=y.useState(r),w=y.useCallback(({colIndex:A,rowIndex:T})=>{x(A),m(T)},[]);y.useEffect(()=>{u.current&&a6(h.current),u.current||(u.current=!0)},[v,d]);const S=A=>{switch(A.key){case $t.RIGHT:{A.preventDefault(),x(T=>T<n-1?T+1:T);break}case $t.LEFT:{A.preventDefault(),x(T=>T>0?T-1:T);break}case $t.UP:{A.preventDefault(),m(T=>T>0?T-1:T);break}case $t.DOWN:{A.preventDefault(),m(T=>T<e-1?T+1:T);break}case $t.HOME:{A.preventDefault(),A.ctrlKey&&m(0),x(0);break}case $t.END:{A.preventDefault(),A.ctrlKey&&m(e-1),x(n-1);break}case $t.PAGE_DOWN:{A.preventDefault(),m(T=>T+t<e?T+t:e-1);break}case $t.PAGE_UP:{A.preventDefault(),m(T=>T-t>0?T-t:0);break}}},k=y.useMemo(()=>({rowIndex:d,colIndex:v,setTableValues:w}),[v,d,w]);return g.jsx(v0.Provider,{value:k,children:g.jsx("table",{role:"grid",ref:f,"aria-rowcount":e,"aria-colcount":n,onKeyDown:S,...s})})}),Ji=(n,e)=>[...n.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(t=>!t.hasAttribute("disabled")),jl=n=>n.filter(e=>e.tagName==="INPUT"?e.type!=="checkbox"&&e.type!=="radio":!1),b0=y.forwardRef(({coords:n={col:0,row:0},tag:e="td",...t},r)=>{const o=y.useRef(null),s=Bt(r,o),{rowIndex:l,colIndex:h,setTableValues:u}=l6(),[f,d]=y.useState(!1),m=w=>{var S;const k=Ji(o.current);if(k.length===0||k.length===1&&jl(k).length===0)return;if(k.length>1&&!k.find(T=>T.tagName!=="BUTTON")){w.preventDefault();const T=k.findIndex(D=>D===document.activeElement);if(w.key===$t.RIGHT){const D=k[T+1];D&&(w.stopPropagation(),D.focus())}else if(w.key===$t.LEFT){const D=k[T-1];D&&(w.stopPropagation(),D.focus())}return}const A=w.key===$t.ENTER;if(A&&!f)d(!0);else if((w.key===$t.ESCAPE||A)&&f){if(A&&((S=document.activeElement)==null?void 0:S.tagName)==="A")return;d(!1),o.current.focus()}else f&&w.stopPropagation()},v=l===n.row-1&&h===n.col-1;cr(()=>{const w=Ji(o.current);w.length===0||w.length===1&&jl(w).length!==0||w.length>1&&w.find(S=>S.tagName!=="BUTTON")?(o.current.setAttribute("tabIndex",!f&&v?"0":"-1"),w.forEach((S,k)=>{S.setAttribute("tabIndex",f?"0":"-1"),f&&k===0&&S.focus()})):w.forEach(S=>{S.setAttribute("tabIndex",v?"0":"-1")})},[f,v]);const x=y.useCallback(()=>{const w=Ji(o.current);w.length>=1&&(jl(w).length!==0||!w.find(S=>S.tagName!=="BUTTON"))&&d(!0),u({rowIndex:n.row-1,colIndex:n.col-1})},[n,u]);return cr(()=>{const w=o.current;return Ji(w).forEach(S=>{S.addEventListener("focus",x)}),()=>{Ji(w).forEach(S=>{S.removeEventListener("focus",x)})}},[x]),g.jsx(H,{role:"gridcell",tag:e,ref:s,onKeyDown:m,...t})}),c6=n=>g.jsx(b0,{...n,tag:"th"}),u6=({children:n,...e})=>{const t=y.Children.toArray(n).map(r=>y.isValidElement(r)?y.cloneElement(r,{"aria-rowindex":1}):r);return g.jsx("thead",{...e,children:t})},d6=({children:n,...e})=>{const t=y.Children.toArray(n).map((r,o)=>y.isValidElement(r)?y.cloneElement(r,{"aria-rowindex":o+2}):r);return g.jsx("tbody",{...e,children:t})},f6=({children:n,...e})=>{const t=y.Children.toArray(n).map((r,o)=>y.isValidElement(r)?y.cloneElement(r,{"aria-colindex":o+1,coords:{col:o+1,row:e["aria-rowindex"]}}):r);return g.jsx(H,{tag:"tr",...e,children:t})},p6=I(Ci)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:n})=>n.colors.neutral500};
  }
`,x0=I(CC)`
  font-size: 1rem;
  path {
    fill: ${({theme:n})=>n.colors.neutral500};
  }
`,g6=I.div`
  border-radius: ${({theme:n})=>n.borderRadius};
  border: 1px solid ${({theme:n})=>n.colors.neutral150};

  &:focus-within {
    ${x0} {
      fill: ${({theme:n})=>n.colors.primary600};
    }
  }
`,m6=I(uc)`
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  padding: 0 0 0 8px;
  color: ${({theme:n})=>n.colors.neutral800};

  &:hover {
    button {
      cursor: pointer;
    }
  }

  ${pr()}

  > input::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  > input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  > input::-webkit-search-decoration,
  > input::-webkit-search-cancel-button,
  > input::-webkit-search-results-button,
  > input::-webkit-search-results-decoration {
    display: none;
  }
`;y.forwardRef(({name:n,children:e,value:t="",onClear:r,clearLabel:o="Clear",...s},l)=>{const h=y.useRef(null),u=t.length>0,f=m=>{r(m),h.current.focus()},d=Og(l,h);return g.jsx(g6,{children:g.jsxs(fi,{name:n,children:[g.jsx(Ai,{children:g.jsx(Fg,{children:e})}),g.jsx(m6,{size:"S",type:"search",ref:d,value:t,startAction:g.jsx(x0,{"aria-hidden":!0}),onKeyDown:m=>{m.stopPropagation(),m.key==="Escape"&&u&&f(m)},endAction:u?g.jsx(ur,{onClick:f,onMouseDown:m=>{m.preventDefault()},label:o,size:"XS",variant:"ghost",type:"button",children:g.jsx(p6,{})}):void 0,...s})]})})});const v6=I(H)`
  display: inline-flex;
  border: none;

  & > svg {
    height: 1.2rem;
    width: 1.2rem;
  }

  & > svg path {
    fill: ${({theme:n,...e})=>e["aria-disabled"]?n.colors.neutral600:n.colors.primary600};
  }

  &:hover {
    cursor: ${({$iconAction:n})=>n?"pointer":"initial"};
  }
`,b6=({children:n,icon:e,label:t,disabled:r=!1,onClick:o,...s})=>g.jsxs(U,{inline:!0,background:r?"neutral200":"primary100",color:r?"neutral700":"primary600",paddingLeft:3,paddingRight:1,borderColor:r?"neutral300":"primary200",hasRadius:!0,height:"3.2rem",...s,children:[g.jsx(x6,{$disabled:r,variant:"pi",fontWeight:"bold",children:n}),g.jsx(v6,{tag:"button",disabled:r,"aria-disabled":r,"aria-label":t,padding:2,onClick:l=>{r||!o||o(l)},$iconAction:!!o,children:e})]}),x6=I(Z)`
  color: inherit;
  border-right: 1px solid ${({theme:n,$disabled:e})=>e?n.colors.neutral300:n.colors.primary200};
  padding-right: ${({theme:n})=>n.spaces[2]};
`;y.forwardRef(({children:n,clearLabel:e="Clear",customizeContent:t,disabled:r,hasError:o,id:s,name:l,onChange:h,onClear:u,onCloseAutoFocus:f,onReachEnd:d,placeholder:m,required:v,size:x,startIcon:w,value:S,withTags:k,...A},T)=>{const D=y.useRef(null),[j,F]=y.useState(),[B,W]=y.useState(!1),re=Ie=>{h?h(Ie):F(Ie)},ae=Ie=>()=>{const Je=Array.isArray(S)?S.filter(Ze=>Ze!==Ie):(j??[]).filter(Ze=>Ze!==Ie);h?h(Je):F(Je)},ie=Ie=>{W(Ie)},$e=xn(),he=`intersection-${di($e)}`;wo(D,Ie=>{d&&d(Ie)},{selectorToWatch:`#${he}`,skipWhen:!B});const ne=typeof S<"u"&&S!==null?S:j,ue=Ie=>Ie&&typeof Ie=="object"&&Ie.value?g.jsx(b6,{tabIndex:-1,disabled:r,icon:g.jsx(Ci,{width:`${14/16}rem`,height:`${14/16}rem`}),onClick:ae(Ie.value),children:Ie.textValue},Ie.value):null,{error:Te,...Re}=Xt("MultiSelect"),oe=!!Te||o,se=Re.id??s,Me=Re.name??l,Se=Re.required??v;let Ee;return Te?Ee=`${se}-error`:Re.hint&&(Ee=`${se}-hint`),g.jsxs(qg,{onOpenChange:ie,disabled:r,required:Se,onValueChange:re,value:ne,...A,multi:!0,children:[g.jsx(Kg,{ref:T,id:se,name:Me,"aria-label":A["aria-label"],"aria-describedby":Ee??A["aria-describedby"],startIcon:w,hasError:oe,disabled:r,clearLabel:e,onClear:ne!=null&&ne.length?u:void 0,withTags:!!(k&&(ne?.length??!1)),size:x,children:g.jsx(Gg,{placeholder:m,textColor:ne!=null&&ne.length?"neutral800":"neutral600",withTags:k,children:ne!=null&&ne.length?k?ue:t?t(ne):void 0:void 0})}),g.jsx(Yg,{children:g.jsx(Xg,{position:"popper",sideOffset:4,onCloseAutoFocus:f,children:g.jsxs(Jg,{ref:D,children:[n,g.jsx(H,{id:he,width:"100%",height:"1px"})]})})})]})});const w6=y.forwardRef(({value:n,children:e,startIcon:t,...r},o)=>g.jsxs(fc,{ref:o,value:n.toString(),...r,children:[t&&g.jsx(H,{tag:"span","aria-hidden":!0,children:t}),g.jsx(Zg,{children:({isSelected:s,isIntermediate:l})=>g.jsx(cc,{checked:l?"indeterminate":s})}),g.jsx(Z,{children:g.jsx(Qg,{children:e})})]}));y.forwardRef(({children:n,label:e,startIcon:t,values:r=[],...o},s)=>g.jsxs(u5,{ref:s,children:[g.jsxs(fc,{value:r,...o,children:[t&&g.jsx(H,{tag:"span","aria-hidden":!0,children:t}),g.jsx(Zg,{children:({isSelected:l,isIntermediate:h})=>g.jsx(cc,{checked:h?"indeterminate":l})}),g.jsx(Z,{children:e})]}),n]}));I(w6)`
  padding-left: ${({theme:n})=>n.spaces[7]};
`;const y6="23.2rem";y.forwardRef(({...n},e)=>g.jsx($6,{ref:e,...n,tag:"nav"}));const $6=I(H)`
  width: ${y6};
  background: ${({theme:n})=>n.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:n})=>n.colors.neutral200};
  z-index: 1;
`;I(W5)`
  width: 2.4rem;
  background-color: ${({theme:n})=>n.colors.neutral200};
`;It(({active:n,children:e,icon:t=null,withBullet:r=!1,isSubSectionChild:o=!1,...s},l)=>g.jsxs(C6,{background:"neutral100",paddingLeft:o?9:7,paddingBottom:2,paddingTop:2,ref:l,...s,children:[g.jsxs(U,{children:[t?g.jsx(S6,{children:t}):g.jsx(Mh,{$active:n}),g.jsx(Z,{paddingLeft:2,children:e})]}),r&&g.jsx(U,{paddingRight:4,children:g.jsx(Mh,{$active:!0})})]}));const Mh=I.span`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${({theme:n,$active:e})=>e?n.colors.primary600:n.colors.neutral600};
  border-radius: 50%;
`,C6=I(Mi)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:n})=>n.colors.neutral800};
  svg > * {
    fill: ${({theme:n})=>n.colors.neutral600};
  }

  &.active {
    ${({theme:n})=>q`
        background-color: ${n.colors.primary100};
        border-right: 2px solid ${n.colors.primary600};
        color: ${n.colors.primary700};
        font-weight: 500;
      `}

    ${Mh} {
      background-color: ${({theme:n})=>n.colors.primary600};
    }
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,S6=I.div`
  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`;I.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`;I(H)`
  & > svg {
    height: 0.4rem;
    fill: ${({theme:n})=>n.colors.neutral500};
  }
`;y.forwardRef(({visibleLabels:n,onLabel:e="On",offLabel:t="Off",onCheckedChange:r,checked:o,defaultChecked:s,disabled:l,...h},u)=>{const[f,d]=An({prop:o,defaultProp:s});return g.jsxs(U,{gap:3,children:[g.jsx(k6,{ref:u,onCheckedChange:Or(r,m=>{d(m)}),checked:f,disabled:l,...h,children:g.jsx(A6,{})}),n?g.jsx(M6,{"aria-hidden":!0,"data-disabled":l,"data-state":f?"checked":"unchecked",children:f?e:t}):null]})});const k6=I(SC)`
  width: 4rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  background-color: ${({theme:n})=>n.colors.danger500};

  &[data-state='checked'] {
    background-color: ${({theme:n})=>n.colors.success500};
  }

  &[data-disabled] {
    background-color: ${({theme:n})=>n.colors.neutral300};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${n=>n.theme.transitions.backgroundColor};
  }
`,A6=I(kC)`
  display: block;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  background-color: ${({theme:n})=>n.colors.neutral0};
  transform: translateX(4px);

  &[data-state='checked'] {
    transform: translateX(20px);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${n=>n.theme.motion.timings[120]}
      ${n=>n.theme.motion.easings.authenticMotion};
  }
`,M6=I(Z)`
  color: ${n=>n.theme.colors.danger600};

  &[data-state='checked'] {
    color: ${n=>n.theme.colors.success600};
  }

  &[data-disabled='true'] {
    color: ${({theme:n})=>n.colors.neutral500};
  }
`,[T6,Tc]=ki("Tabs"),R6=y.forwardRef(({disabled:n=!1,variant:e="regular",hasError:t,...r},o)=>g.jsx(T6,{disabled:n,hasError:t,variant:e,children:g.jsx(D6,{ref:o,...r})})),D6=I(c$)`
  width: 100%;
  position: relative;
`,O6=y.forwardRef((n,e)=>{const{variant:t}=Tc("List");return g.jsx(E6,{ref:e,...n,$variant:t})}),E6=I(u$)`
  display: flex;
  align-items: ${n=>n.$variant==="regular"?"flex-end":"unset"};
  position: relative;
  z-index: 0;
`,I6=y.forwardRef(({children:n,disabled:e,...t},r)=>{const{disabled:o,variant:s,hasError:l}=Tc("Trigger"),h=o===!0||o===t.value||e,u=l===t.value;return g.jsxs(_6,{ref:r,...t,$hasError:u,$variant:s,disabled:h,children:[g.jsx(y0,{fontWeight:"bold",variant:s==="simple"?"sigma":void 0,children:n}),s==="simple"?g.jsx(w0,{}):null]})}),w0=I.span`
  display: block;
  width: 100%;
  background-color: currentColor;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  height: 0.2rem;
`,y0=I(Z)``,_6=I(h$)`
  position: relative;
  color: ${n=>n.$hasError?n.theme.colors.danger600:n.theme.colors.neutral600};
  cursor: pointer;
  z-index: 0;

  ${n=>n.$variant==="simple"?q`
        padding-block: ${e=>e.theme.spaces[4]};
        padding-inline: ${e=>e.theme.spaces[4]};

        & > ${y0} {
          line-height: 1.2rem;
        }

        &[data-state='active'] {
          color: ${n.$hasError?n.theme.colors.danger600:n.theme.colors.primary700};

          & > ${w0} {
            opacity: 1;
          }
        }
      `:q`
        padding-block: ${e=>e.theme.spaces[3]};
        padding-inline: ${e=>e.theme.spaces[3]};
        flex: 1;
        background-color: ${e=>e.theme.colors.neutral100};
        border-bottom: solid 1px ${e=>e.theme.colors.neutral150};

        &:not([data-state='active']) + &:not([data-state='active']) {
          border-left: solid 1px ${e=>e.theme.colors.neutral150};
        }

        &[data-state='active'] {
          padding-block: ${e=>e.theme.spaces[4]};
          padding-inline: ${e=>e.theme.spaces[4]};
          color: ${n.$hasError?n.theme.colors.danger600:n.theme.colors.primary700};
          border-top-right-radius: ${e=>e.theme.borderRadius};
          border-top-left-radius: ${e=>e.theme.borderRadius};
          background-color: ${e=>e.theme.colors.neutral0};
          border-bottom: solid 1px ${e=>e.theme.colors.neutral0};
          box-shadow: ${n.theme.shadows.tableShadow};
          z-index: 1;
        }
      `}

  &[data-disabled] {
    cursor: not-allowed;
    color: ${n=>n.theme.colors.neutral400};
  }
`,j6=y.forwardRef((n,e)=>{const{variant:t}=Tc("Content");return g.jsx(L6,{$variant:t,ref:e,...n})}),L6=I(d$)`
  ${n=>n.$variant==="simple"?q`
        
      `:q`
        position: relative;
        z-index: 1;
        background-color: ${e=>e.theme.colors.neutral0};
      `}
`,sn=Object.freeze(Object.defineProperty({__proto__:null,Content:j6,List:O6,Root:R6,Trigger:I6},Symbol.toStringTag,{value:"Module"})),P6=I(H)`
  overflow: hidden;
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
`,z6=I(h6)`
  width: 100%;
  white-space: nowrap;
`,B6=I(H)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:n})=>n==="both"||n==="left"?"''":void 0};
    box-shadow: ${({theme:n})=>n.shadows.tableShadow};
    width: ${({theme:n})=>n.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:n})=>n==="both"||n==="right"?"''":void 0};
    box-shadow: ${({theme:n})=>n.shadows.tableShadow};
    width: ${({theme:n})=>n.spaces[2]};
    right: 0;
    top: 0;
  }
`,N6=I(H)`
  overflow-x: auto;
`;y.forwardRef(({footer:n,...e},t)=>{const r=y.useRef(null),[o,s]=y.useState(),l=h=>{const u=h.target.scrollWidth-h.target.clientWidth;if(h.target.scrollLeft===0){s("right");return}if(h.target.scrollLeft===u){s("left");return}h.target.scrollLeft>0&&s("both")};return y.useEffect(()=>{r.current.scrollWidth>r.current.clientWidth&&s("right")},[]),g.jsxs(P6,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[g.jsx(B6,{$overflowing:o,position:"relative",children:g.jsx(N6,{ref:r,onScroll:l,paddingLeft:6,paddingRight:6,children:g.jsx(z6,{ref:t,...e})})}),n]})});I(d6)`
  & tr:last-of-type {
    border-bottom: none;
  }
`;I(u6)`
  border-bottom: 1px solid ${({theme:n})=>n.colors.neutral150};
`;I(f6)`
  border-bottom: 1px solid ${({theme:n})=>n.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:n})=>n.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:n})=>n.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: 5.6rem;
  }
`;const $0=I(b0)`
  vertical-align: middle;
  text-align: left;
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`;y.forwardRef(({children:n,action:e,...t},r)=>g.jsx($0,{color:"neutral600",as:c6,ref:r,...t,children:g.jsxs(U,{children:[n,e]})}));y.forwardRef(({children:n,...e},t)=>g.jsx($0,{color:"neutral800",ref:t,...e,children:n}));I(H)`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1rem;
    width: 1rem;
  }

  svg path {
    fill: ${({theme:n})=>n.colors.primary600};
  }
`;I(H)`
  border-radius: 0 0 ${({theme:n})=>n.borderRadius} ${({theme:n})=>n.borderRadius};
  display: block;
  width: 100%;
  border: none;
`;It(({children:n,startIcon:e,endIcon:t,disabled:r=!1,loading:o=!1,type:s="button",...l},h)=>{const u=r||o;return g.jsxs(V6,{ref:h,disabled:u,"aria-disabled":u,tag:"button",type:s,gap:2,...l,children:[o?g.jsx(W6,{"aria-hidden":!0,children:g.jsx(Op,{})}):e,g.jsx(Z,{variant:"pi",children:n}),t]})});const F6=yt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,W6=I.span`
  display: flex;
  animation: ${F6} 2s infinite linear;
  will-change: transform;
`,V6=I(U)`
  border: none;
  background-color: transparent;
  color: ${n=>n.theme.colors.primary600};
  cursor: pointer;

  &[aria-disabled='true'] {
    pointer-events: none;
    color: ${n=>n.theme.colors.neutral600};
  }

  ${Ys}
`,H6=y.forwardRef((n,e)=>g.jsx(uc,{ref:e,...n}));H6.displayName="TextInput";y.forwardRef(({disabled:n,hasError:e,id:t,name:r,required:o,resizable:s=!0,...l},h)=>{const{error:u,...f}=Xt("Textarea"),d=!!u||e,m=f.id??t,v=f.name??r,x=f.required||o;let w;return u?w=`${m}-error`:f.hint&&(w=`${m}-hint`),g.jsx(U6,{borderColor:d?"danger600":"neutral200",$hasError:d,hasRadius:!0,children:g.jsx(q6,{"aria-invalid":d,"aria-required":x,tag:"textarea",background:n?"neutral150":"neutral0",color:n?"neutral600":"neutral800",disabled:n,hasRadius:!0,ref:h,lineHeight:4,padding:4,width:"100%",height:"100%",id:m,name:v,"aria-describedby":w,$resizable:s,...l})})});const U6=I(H)`
  ${pr()}
`,q6=I(H)`
  display: block;
  border: none;
  resize: ${({$resizable:n})=>n?"vertical":"none"};
  min-height: ${({minHeight:n})=>n||"10.5rem"};
  font-size: ${({theme:n})=>n.fontSizes[3]};

  ${({theme:n})=>n.breakpoints.small} {
    font-size: ${({theme:n})=>n.fontSizes[2]};
  }

  &::placeholder {
    color: ${({theme:n})=>n.colors.neutral600};
    font-size: ${({theme:n})=>n.fontSizes[3]};
    opacity: 1;

    ${({theme:n})=>n.breakpoints.small} {
      font-size: ${({theme:n})=>n.fontSizes[2]};
    }
  }

  &:focus-within {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;y.forwardRef(({offLabel:n,onLabel:e,disabled:t,hasError:r,required:o,id:s,name:l,checked:h,onChange:u,...f},d)=>{const[m=!1,v]=An({prop:h}),x=m!==null&&!m,{error:w,...S}=Xt("Toggle"),k=!!w||r,A=S.id??s,T=S.name??l,D=S.required||o;let j;return w?j=`${A}-error`:S.hint&&(j=`${A}-hint`),g.jsxs(K6,{position:"relative",hasRadius:!0,padding:1,background:t?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:k?"danger600":"neutral200",wrap:"wrap",cursor:t?"not-allowed":"pointer",$hasError:k,children:[g.jsx(wp,{hasRadius:!0,flex:"1 1 50%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,justifyContent:"center",background:t&&x?"neutral200":x?"neutral0":"transparent",borderColor:t&&x?"neutral300":x?"neutral200":t?"neutral150":"neutral100",children:g.jsx(Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:t?"neutral700":x?"danger700":"neutral600",children:n})}),g.jsx(wp,{hasRadius:!0,flex:"1 1 50%",paddingLeft:3,paddingRight:3,justifyContent:"center",background:t&&m?"neutral200":m?"neutral0":"transparent",borderColor:t&&m?"neutral300":m?"neutral200":t?"neutral150":"neutral100",children:g.jsx(Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:t?"neutral700":m?"primary600":"neutral600",children:e})}),g.jsx(G6,{...f,id:A,name:T,ref:d,onChange:F=>{v(F.currentTarget.checked),u?.(F)},type:"checkbox","aria-required":D,disabled:t,"aria-disabled":t,checked:!!m,"aria-describedby":j})]})});const K6=I(U)`
  ${pr()}
`,wp=I(U)`
  padding-block: 0.6rem;
`,G6=I.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
`;function Y6(n,e,t){if(t===void 0&&(t=Error),!n)throw new t(e)}var X6=function(n){console.error(n)},J6=function(n){console.warn(n)},Z6={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:X6,onWarn:J6};function Q6(n){Y6(n,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}af(af({},Z6),{textComponent:y.Fragment});var Rc=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=y.createContext(null)):y.createContext(null);Rc.Consumer;Rc.Provider;var eM=Rc;function Nr(){var n=y.useContext(eM);return Q6(n),n}var Th;(function(n){n.formatDate="FormattedDate",n.formatTime="FormattedTime",n.formatNumber="FormattedNumber",n.formatList="FormattedList",n.formatDisplayName="FormattedDisplayName"})(Th||(Th={}));var Rh;(function(n){n.formatDate="FormattedDateParts",n.formatTime="FormattedTimeParts",n.formatNumber="FormattedNumberParts",n.formatList="FormattedListParts"})(Rh||(Rh={}));function C0(n){var e=function(t){var r=Nr(),o=t.value,s=t.children,l=Fp(t,["value","children"]),h=typeof o=="string"?new Date(o||0):o,u=n==="formatDate"?r.formatDateToParts(h,l):r.formatTimeToParts(h,l);return s(u)};return e.displayName=Rh[n],e}function ko(n){var e=function(t){var r=Nr(),o=t.value,s=t.children,l=Fp(t,["value","children"]),h=r[n](o,l);if(typeof s=="function")return s(h);var u=r.textComponent||y.Fragment;return y.createElement(u,null,h)};return e.displayName=Th[n],e}ko("formatDate");ko("formatTime");ko("formatNumber");ko("formatList");ko("formatDisplayName");C0("formatDate");C0("formatTime");const zt=n=>`${RC}.${n}`,yp=({command:n})=>{const{formatMessage:e}=Nr(),{copy:t}=DC(),r=e({id:zt("Homepage.deploy.cli.copy"),defaultMessage:"Copy"}),o=async()=>await t(n);return g.jsx(hc,{label:r,children:g.jsx(ur,{size:"XS",variant:"ghost",label:r,onClick:o,children:g.jsx(OC,{})})})},tM=()=>{const{formatMessage:n}=Nr();return g.jsx(H,{minWidth:"28em",maxWidth:"28em",paddingTop:8,children:g.jsxs(sn.Root,{defaultValue:"yarn",children:[g.jsxs(sn.List,{"aria-label":n({id:zt("Homepage.deploy.cli.ariaLabel"),defaultMessage:"Package manager"}),children:[g.jsx(sn.Trigger,{value:"yarn",children:g.jsx(Z,{variant:"omega",children:"Yarn"})}),g.jsx(sn.Trigger,{value:"npm",children:g.jsx(Z,{variant:"omega",children:"NPM"})})]}),g.jsx(sn.Content,{value:"yarn",children:g.jsx(H,{background:"neutral100",children:g.jsx(H,{padding:4,children:g.jsxs(U,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[g.jsx(Z,{tag:"code",textColor:"neutral800",children:"yarn strapi deploy"}),g.jsx(yp,{command:"yarn strapi deploy"})]})})})}),g.jsx(sn.Content,{value:"npm",children:g.jsx(H,{background:"neutral100",children:g.jsx(H,{padding:4,children:g.jsxs(U,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[g.jsx(Z,{tag:"code",textColor:"neutral800",children:"npm run deploy"}),g.jsx(yp,{command:"npm run deploy"})]})})})})]})})},nM=()=>{const{formatMessage:n}=Nr(),e=n({id:zt("Homepage.deploy.documentation"),defaultMessage:"Having trouble? Check our documentation"});return g.jsxs(H,{paddingBottom:5,children:[g.jsx(U,{direction:"column",children:g.jsx(Z,{variant:"delta",paddingBottom:5,paddingTop:2,children:n({id:zt("Homepage.deploy.title"),defaultMessage:"Choose your preferred deployment method"})})}),g.jsxs(sn.Root,{defaultValue:"cloud",variant:"simple",children:[g.jsx(U,{direction:"column",children:g.jsxs(sn.List,{"aria-label":n({id:zt("Homepage.deploy.ariaLabel"),defaultMessage:"Deployment options"}),children:[g.jsx(sn.Trigger,{value:"cloud",children:g.jsx(H,{minWidth:{initial:"10em",medium:"20em"},children:g.jsxs(U,{direction:"row",gap:2,justifyContent:"center",children:[g.jsx(Z,{variant:"omega",children:"Cloud"}),g.jsx(Rg,{active:!0,children:n({id:zt("Homepage.deploy.git.badge"),defaultMessage:"Recommended"})})]})})}),g.jsx(sn.Trigger,{value:"cli",children:g.jsx(H,{minWidth:{initial:"10em",medium:"20em"},children:g.jsx(U,{justifyContent:"center",children:g.jsx(Z,{variant:"omega",children:"CLI"})})})})]})}),g.jsxs(H,{children:[g.jsx(sn.Content,{value:"cloud",children:g.jsxs(U,{direction:"column",paddingTop:6,children:[g.jsx(H,{children:g.jsx(Mi,{isExternal:!0,href:"https://cloud.strapi.io/login?utm_campaign=Strapi%20Cloud%20Plugin&utm_source=In-Product&utm_medium=CTA",children:g.jsx(EC,{height:40,width:40,fill:"buttonPrimary600"})})}),g.jsx(H,{paddingBottom:2,paddingTop:5,children:g.jsx(Z,{variant:"delta",textColor:"neutral1000",children:n({id:zt("Homepage.deploy.git.title"),defaultMessage:"Deploy to Strapi Cloud"})})}),g.jsx(Z,{variant:"omega",textColor:"neutral600",children:n({id:zt("Homepage.deploy.git.subTitle"),defaultMessage:"Deploy a GitHub or GitLab project directly within Strapi Cloud"})}),g.jsx(H,{paddingTop:8,children:g.jsx(V4,{variant:"default",endIcon:g.jsx(Dp,{fill:"neutral0"}),href:"https://cloud.strapi.io/login?utm_campaign=Strapi%20Cloud%20Plugin&utm_source=In-Product&utm_medium=CTA",isExternal:!0,size:"M",children:n({id:zt("Homepage.deploy.git.button"),defaultMessage:"Deploy to Strapi Cloud"})})}),g.jsx(H,{paddingTop:5,children:g.jsx(Yl,{isExternal:!0,href:"https://docs.strapi.io/cloud/getting-started/deployment",children:e})})]})}),g.jsx(sn.Content,{value:"cli",children:g.jsxs(U,{direction:"column",paddingTop:6,children:[g.jsx(IC,{height:40,width:40,fill:"buttonPrimary600"}),g.jsx(H,{paddingBottom:2,paddingTop:5,children:g.jsx(Z,{variant:"delta",textColor:"neutral1000",children:n({id:zt("Homepage.deploy.cli.title"),defaultMessage:"Deploy via CLI"})})}),g.jsx(Z,{variant:"omega",textColor:"neutral600",children:n({id:zt("Homepage.deploy.cli.subTitle"),defaultMessage:"Use the command line to deploy your Strapi project directly"})}),g.jsx(tM,{}),g.jsx(H,{paddingTop:5,children:g.jsx(Yl,{isExternal:!0,href:"https://docs.strapi.io/cloud/getting-started/deployment-cli",children:e})})]})})]})]})]})},rM=()=>{const{formatMessage:n}=Nr(),e=[{id:"api",message:"2.5K API requests"},{id:"storage",message:"10 GB storage"},{id:"bandwidth",message:"10 GB asset bandwidth"},{id:"cdn",message:"Global CDN"},{id:"pushToDeploy",message:"Push to deploy"}];return g.jsx(H,{children:g.jsx(H,{paddingBottom:10,children:g.jsx(U,{direction:"column",children:g.jsx(U,{direction:"row",wrap:"wrap",children:e.map(({id:t,message:r})=>g.jsxs(U,{paddingRight:5,children:[g.jsx(_C,{fill:"primary500"}),g.jsx(Z,{variant:"omega",paddingLeft:1,children:n({id:zt(`Homepage.freePlan.${t}`),defaultMessage:r})})]},t))})})})})},iM=()=>{const{formatMessage:n}=Nr();return g.jsxs(H,{paddingLeft:6,paddingRight:6,paddingTop:5,paddingBottom:3,background:"neutral100",children:[g.jsxs(U,{direction:"column",gap:2,children:[g.jsx(Z,{variant:"alpha",children:n({id:zt("Homepage.title"),defaultMessage:"Deploy with Strapi Cloud for Free!"})}),g.jsx(U,{direction:{initial:"row",medium:"column"},children:g.jsx(Z,{variant:"epsilon",textColor:"neutral600",children:n({id:zt("Homepage.subTitle"),defaultMessage:"Start with our completely free plan - no credit card required, no time limits."})})})]}),g.jsxs(H,{padding:8,children:[g.jsx(rM,{}),g.jsx(H,{paddingTop:8,children:g.jsx(H,{padding:6,background:"neutral0",shadow:"tableShadow",children:g.jsx(nM,{})})})]})]})},aM=()=>g.jsx("div",{children:g.jsxs(jC,{children:[g.jsx(lf,{index:!0,element:g.jsx(iM,{})}),g.jsx(lf,{path:"*",element:g.jsx(LC.Error,{})})]})});export{aM as App};
