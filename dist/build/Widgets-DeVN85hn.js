import{aO as j,j as t,aP as o,aQ as w,aR as r,aS as C,b as T,a as L,aT as M,aU as W,i as l,aV as v,aW as S,aX as I,aY as $,aZ as D,a_ as A,a$ as K,b0 as N,b1 as m,ak as G}from"./strapi-DuvDkDuO.js";import{W as u}from"./WidgetHelpers-CZk4MXjL.js";import{g as R,a as E}from"./users-DLc-PG84.js";const P=l(r)`
  font-size: 2.4rem;
`,X=()=>{const e=j("User",s=>s.user),n=R(e),c=E(e);return t.jsxs(o,{direction:"column",gap:3,height:"100%",justifyContent:"center",children:[t.jsx(w.Item,{delayMs:0,fallback:c}),n&&t.jsx(P,{fontWeight:"bold",textTransform:"none",textAlign:"center",children:n}),e?.email&&t.jsx(r,{variant:"omega",textColor:"neutral600",children:e?.email}),e?.roles?.length&&t.jsx(o,{marginTop:2,gap:1,wrap:"wrap",children:e?.roles?.map(s=>t.jsx(C,{children:s.name},s.id))})]})},z=l(m)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  overflow: hidden;
`,O=l(m)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  &:nth-child(2n) {
    border-right: none;
  }
  &:nth-last-child(-n + 2) {
    border-bottom: none;
  }
`,Q=({locale:e,number:n})=>new Intl.NumberFormat(e,{notation:"compact",maximumFractionDigits:1}).format(n),U=l(G)`
  text-decoration: none;
  padding: ${({theme:e})=>e.spaces[3]};
`,Z=()=>{const{trackUsage:e}=T(),{formatMessage:n,locale:c}=L(),{data:s,isLoading:p}=M(),{data:d,isLoading:b}=W();if(b||p)return t.jsx(u.Loading,{});if(!d||!s)return t.jsx(u.Error,{});const k={entries:{label:{id:"widget.key-statistics.list.entries",defaultMessage:"Entries"},icon:{component:t.jsx(N,{}),background:"primary100",color:"primary600"},link:"/content-manager"},assets:{label:{id:"widget.key-statistics.list.assets",defaultMessage:"Assets"},icon:{component:t.jsx(K,{}),background:"warning100",color:"warning600"},link:"/plugins/upload"},contentTypes:{label:{id:"widget.key-statistics.list.contentTypes",defaultMessage:"Content-Types"},icon:{component:t.jsx(A,{}),background:"secondary100",color:"secondary600"},link:"/plugins/content-type-builder"},components:{label:{id:"widget.key-statistics.list.components",defaultMessage:"Components"},icon:{component:t.jsx(D,{}),background:"alternative100",color:"alternative600"},link:"/plugins/content-type-builder"},locales:{label:{id:"widget.key-statistics.list.locales",defaultMessage:"Locales"},icon:{component:t.jsx($,{}),background:"success100",color:"success600"},link:"/settings/internationalization"},admins:{label:{id:"widget.key-statistics.list.admins",defaultMessage:"Admins"},icon:{component:t.jsx(I,{}),background:"danger100",color:"danger600"},link:"/settings/users?pageSize=10&page=1&sort=firstname"},webhooks:{label:{id:"widget.key-statistics.list.webhooks",defaultMessage:"Webhooks"},icon:{component:t.jsx(S,{}),background:"alternative100",color:"alternative600"},link:"/settings/webhooks"},apiTokens:{label:{id:"widget.key-statistics.list.apiTokens",defaultMessage:"API Tokens"},icon:{component:t.jsx(v,{}),background:"neutral100",color:"neutral600"},link:"/settings/api-tokens?sort=name:ASC"}},{draft:x,published:f,modified:h}=s??{draft:0,published:0,modified:0},y=x+f+h;return t.jsx(z,{children:Object.entries(k).map(([a,i])=>{const g=d?.[a];return g!==null&&t.jsx(O,{as:U,to:i.link,"data-testid":`stat-${a}`,onClick:()=>e("didOpenKeyStatisticsWidgetLink",{itemKey:a}),children:t.jsxs(o,{alignItems:"center",gap:2,children:[t.jsx(o,{padding:2,borderRadius:1,background:i.icon.background,color:i.icon.color,children:i.icon.component}),t.jsxs(o,{direction:"column",alignItems:"flex-start",children:[t.jsx(r,{variant:"pi",fontWeight:"bold",textColor:"neutral500",children:n(i.label)}),t.jsx(r,{variant:"omega",fontWeight:"bold",textColor:"neutral800",children:Q({locale:c,number:a==="entries"?y:g})})]})]})},`key-statistics-${a}`)})})};export{Z as KeyStatisticsWidget,X as ProfileWidget};
