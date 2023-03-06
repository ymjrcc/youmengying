import{d as V,y as p,l as P,g as y,r as _,j as D,o as r,c,a as g,b as x,w as z,u as h,E as M,G as b,H as f,F as k,I as R,J as T,e as L,R as w,f as O}from"./index-361ab8d6.js";import{o as I}from"./original-07cec935.js";import{c as Z}from"./comments-659845ec.js";import{c as F,d as q,e as S,f as G,u as K,g as H,h as J,i as U,j as W,k as A,l as E,N as Q,a as X,b as Y}from"./Button-c095ab55.js";const ee=V({name:"Empty",render(){return p("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),p("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),te={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},ne=t=>{const{textColorDisabled:i,iconColor:l,textColor2:d,fontSizeSmall:a,fontSizeMedium:o,fontSizeLarge:u,fontSizeHuge:m}=t;return Object.assign(Object.assign({},te),{fontSizeSmall:a,fontSizeMedium:o,fontSizeLarge:u,fontSizeHuge:m,textColor:i,iconColor:l,extraTextColor:d})},oe={name:"Empty",common:F,self:ne},se=oe,ie=q("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[S("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[G("+",[S("description",`
 margin-top: 8px;
 `)])]),S("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),S("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),re=Object.assign(Object.assign({},H.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),le=V({name:"Empty",props:re,setup(t){const{mergedClsPrefixRef:i,inlineThemeDisabled:l}=K(t),d=H("Empty","-empty",ie,se,t,i),{localeRef:a}=J("Empty"),o=P(U,null),u=y(()=>{var n,e,v;return(n=t.description)!==null&&n!==void 0?n:(v=(e=o==null?void 0:o.mergedComponentPropsRef.value)===null||e===void 0?void 0:e.Empty)===null||v===void 0?void 0:v.description}),m=y(()=>{var n,e;return((e=(n=o==null?void 0:o.mergedComponentPropsRef.value)===null||n===void 0?void 0:n.Empty)===null||e===void 0?void 0:e.renderIcon)||(()=>p(ee,null))}),C=y(()=>{const{size:n}=t,{common:{cubicBezierEaseInOut:e},self:{[E("iconSize",n)]:v,[E("fontSize",n)]:$,textColor:B,iconColor:N,extraTextColor:j}}=d.value;return{"--n-icon-size":v,"--n-font-size":$,"--n-bezier":e,"--n-text-color":B,"--n-icon-color":N,"--n-extra-text-color":j}}),s=l?W("empty",y(()=>{let n="";const{size:e}=t;return n+=e[0],n}),C,t):void 0;return{mergedClsPrefix:i,mergedRenderIcon:m,localizedDescription:y(()=>u.value||a.value.description),cssVars:l?void 0:C,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){const{$slots:t,mergedClsPrefix:i,onRender:l}=this;return l==null||l(),p("div",{class:[`${i}-empty`,this.themeClass],style:this.cssVars},this.showIcon?p("div",{class:`${i}-empty__icon`},t.icon?t.icon():p(A,{clsPrefix:i},{default:this.mergedRenderIcon})):null,this.showDescription?p("div",{class:`${i}-empty__description`},t.default?t.default():this.localizedDescription):null,t.extra?p("div",{class:`${i}-empty__extra`},t.extra()):null)}}),ae={class:"root"},ce={class:"w-100"},de={class:"pt-5 mt-5 border-t-1"},ue={key:1},me={class:"text-gray-600 mb-2"},ve={class:"truncate text-gray-400"},pe={key:2},fe={class:"text-gray-600 mb-2"},ge={class:"truncate text-gray-400"},he={key:3},Ce={class:"text-gray-600 mb-2"},be=V({__name:"Search",setup(t){const i=T(),l=O(),d=_(i.query.keyword||""),a=_(""),o=_([]),u=_([]),m=_([]),C=()=>{d.value&&(a.value=d.value,l.replace({query:{keyword:d.value}}),o.value=I.filter(s=>s.text.join("").includes(a.value)),u.value=I.filter(s=>s.comments&&s.comments.join("").includes(a.value)),m.value=Z.filter(s=>s.name.includes(a.value)))};return D(()=>{C()}),(s,n)=>(r(),c("div",ae,[g("div",ce,[x(h(Y),null,{default:z(()=>[x(h(Q),{value:d.value,"onUpdate:value":n[0]||(n[0]=e=>d.value=e),clearable:"",placeholder:"请输入关键词",size:"large",onChange:C},null,8,["value"]),x(h(X),{type:"primary",size:"large",onClick:C},{default:z(()=>[L(" 搜索 ")]),_:1})]),_:1})]),g("div",de,[o.value.length||u.value.length||m.value.length?b("",!0):(r(),M(h(le),{key:0,description:"没有匹配的结果"})),o.value.length?(r(),c("div",ue,[g("div",me,"【原文】("+f(o.value.length)+")",1),(r(!0),c(k,null,R(o.value,e=>(r(),c("div",{key:e.id,class:"mb-5 indent"},[x(h(w),{to:`/original?id=${e.id}`,class:"text-green-500 underline mb-2 block"},{default:z(()=>[L(f(e.title||`第 ${e.id} 则`),1)]),_:2},1032,["to"]),g("div",ve,f(e.text.find(v=>v.includes(a.value))),1)]))),128))])):b("",!0),u.value.length?(r(),c("div",pe,[g("div",fe,"【评论】("+f(u.value.length)+")",1),(r(!0),c(k,null,R(u.value,e=>(r(),c("div",{key:e.id,class:"mb-5 indent"},[x(h(w),{to:`/original?id=${e.id}`,class:"text-green-500 underline mb-2 block"},{default:z(()=>[L(f(e.title||`第 ${e.id} 则`),1)]),_:2},1032,["to"]),g("div",ge,f(e.comments.find(v=>v.includes(a.value))),1)]))),128))])):b("",!0),m.value.length?(r(),c("div",he,[g("div",Ce,"【文友】("+f(m.value.length)+")",1),(r(!0),c(k,null,R(m.value,e=>(r(),c("div",{key:e.name,class:"mb-5 indent"},[x(h(w),{to:`/comments?name=${e.name}`,class:"text-green-500 underline mb-2 block"},{default:z(()=>[L(f(e.name),1)]),_:2},1032,["to"])]))),128))])):b("",!0)])]))}});export{be as default};
