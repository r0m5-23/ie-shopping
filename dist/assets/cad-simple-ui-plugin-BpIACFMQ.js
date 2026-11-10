import{h as T,H as nt,u as me,p as Q,v as y,a as st,Y as dt,A as W,q as S,b as re,c as Ne,d as X,E as ct,T as pe,$ as ee,V as ut,g as ht,e as be,f as Z,i as ae,G as mt,k as U,o as pt,j as bt,s as ft,n as vt,l as xt,m as fe,r as yt,t as kt,w as gt,x as Pt,y as wt,I as ve,z as Ct,B as Et,C as Mt,D as Tt,F as It,J as St,K as ze,L as xe,M as ye,N as ke,O as Lt,U as Ot,P as Dt,Q as At}from"./cad-simple-viewer-CigycaTg.js";import{R as zo,S as Ro,W as Bo,X as Vo}from"./cad-simple-viewer-CigycaTg.js";import{c as G,I as Re,a as Be,b as Ve,d as Ue,e as He,f as Nt,g as zt,h as Rt,i as Bt,j as Vt,k as Ut,l as _e,m as Ht,n as _t,o as ge,p as Ft,q as Kt,r as Gt,s as $t,t as Wt,u as jt,v as Yt,w as qt,x as Xt,y as Fe,z as Ke,A as Zt,B as Ge,C as $e,D as Qt,E as Jt,F as ea,G as ta,H as aa,J as oa,K as ia,L as ra,M as la,N as na,O as sa,P as da,Q as ca,R as ua,S as Pe,T as ha,U as ma,V as pa,W as we,X as ba,Y as fa,Z as va}from"./register-BqJpKb0b.js";import{_ as Ho}from"./register-BqJpKb0b.js";import"./index-DvHUCZ0c.js";const We=500,xa=/[̀-ͯ]/g,se=/\s+/g;function J(i,e=!1){let t=i.normalize("NFKC").replace(se," ").trim();return e||(t=t.normalize("NFD").replace(xa,"").toLowerCase()),t}function j(i){const e=/\\(U\+[0-9a-fA-F]{4}|[PX~SfFHWTQCcAaRrpLlOoKk\\{}])|[{}]/g,t=[];let a=0,o=!1,r;for(;r=e.exec(i);){t.push(i.slice(a,r.index));const l=r[1];let n="";if(l!=null&&l.startsWith("U+"))n=String.fromCharCode(parseInt(l.slice(2),16));else if(l==="P"||l==="X"||l==="~")n=" ";else if(l==="\\"||l==="{"||l==="}")n=l;else if(l&&/[SfFHWTQCcAaRrp]/.test(l)){const s=o?-1:i.indexOf(";",e.lastIndex);if(s===-1)o=!0,n=r[0];else{if(l==="S"){const c=i.slice(e.lastIndex,s),d=c.search(/[\^#/]/);if(d===-1)n=c;else{const h=c.slice(d+1);n=c.slice(0,d)+(h?`/${h}`:"")}}e.lastIndex=s+1}}t.push(n),a=e.lastIndex}return t.push(i.slice(a)),je(t.join("")).replace(se," ").trim()}function je(i){return i.replace(/%%[cC]/g,"Ø").replace(/%%[dD]/g,"°").replace(/%%[pP]/g,"±")}function Y(i){return typeof i=="string"?je(i).normalize("NFKC").replace(se," ").trim():""}function Ce(i,e,t){var l;const a=t.get(e);if(a!==void 0)return a;const o=(l=i.tables.layerTable)==null?void 0:l.getAt(e),r=!(o!=null&&o.isOff||o!=null&&o.isFrozen);return t.set(e,r),r}function q(i){const e=i.position??i.location??i.textLocation??i.textPosition??{x:0,y:0};return{x:Number(e.x)||0,y:Number(e.y)||0}}function ya(i,e){const t=new Array(16);for(let a=0;a<4;a++)for(let o=0;o<4;o++){let r=0;for(let l=0;l<4;l++)r+=i[l*4+o]*e[a*4+l];t[a*4+o]=r}return t}function Ye(i,e){if(!i)return{x:e.x,y:e.y};const t=Number(e.z)||0;return{x:i[0]*e.x+i[4]*e.y+i[8]*t+i[12],y:i[1]*e.x+i[5]*e.y+i[9]*t+i[13]}}function Ee(i){var e;try{const t=(e=i.blockTransform)==null?void 0:e.elements;return Array.isArray(t)&&t.length===16?t:void 0}catch{return}}function ka(i,e){var o,r;let t;try{t=i.geometricExtents}catch{return}if(!t||!isFinite((o=t.min)==null?void 0:o.x)||!isFinite((r=t.max)==null?void 0:r.x))return;if(!e)return{min:{...t.min},max:{...t.max}};const a=[{x:t.min.x,y:t.min.y},{x:t.max.x,y:t.min.y},{x:t.min.x,y:t.max.y},{x:t.max.x,y:t.max.y}].map(l=>Ye(e,l));return{min:{x:Math.min(...a.map(l=>l.x)),y:Math.min(...a.map(l=>l.y))},max:{x:Math.max(...a.map(l=>l.x)),y:Math.max(...a.map(l=>l.y))}}}const ga=8;function Pa(i,e,t,a={}){var L,N,z,R;const o=a.matchCase===!0,r=a.maxResults??We,l=J(t,o),n={hits:[],truncated:!1};if(!l)return n;const s=i.tables.blockTable.getIdAt(e);if(!s)return n;const c=new Map,d=u=>u!==""&&J(u,o).includes(l);let h=!1;const b=u=>{if(n.hits.length>=r){n.truncated=!0,h=!0;return}n.hits.push(u)},m=(u,p,g,k,w,v,E={})=>{const I=ka(g,v);b({entityId:u.entity.objectId,textEntityId:`${p}/${g.objectId}`,kind:k,text:w,layer:u.layer,position:Ye(v,q(g)),...I?{extents:I}:{},...E})},f=(u,p,g,k,w,v)=>{var E,I,M;for(const x of u){if(h)return;const C=x.dxfTypeName;if(C!=="TEXT"&&C!=="MTEXT"&&C!=="INSERT"&&C!=="ATTRIB"&&C!=="ATTDEF"||x.visibility===!1||C==="ATTDEF"&&(x.isInvisible||!(x.isConst||x.isConstMTextAttribute))||x.layer&&x.layer!=="0"&&!Ce(i,x.layer,c))continue;if(C==="INSERT"){if(w>=ga)continue;const te=Ee(x),lt=g&&te?ya(g,te):te??g,ce=`${k}/${x.objectId}`;for(const V of((E=x.attributeIterator)==null?void 0:E.call(x))??[]){if(h)return;if(V.visibility===!1||V.isInvisible)continue;const he=Y(V.textString);d(he)&&m(p,ce,V,"block",he,g,{tag:V.tag,blockName:x.blockName})}const B=x.blockName;if(!B||v.has(B))continue;const ue=(M=(I=i.tables.blockTable).getAt)==null?void 0:M.call(I,B);if(!ue)continue;v.add(B),f(ue.newIterator(),p,lt,ce,w+1,v),v.delete(B);continue}const de=C==="MTEXT"||C==="ATTDEF"&&x.isConstMTextAttribute&&x.mtext?j(String((C==="MTEXT"?x:x.mtext).contents??"")):Y(x.textString);d(de)&&m(p,k,x,p.kind,de,g,C==="ATTDEF"?{tag:x.tag}:{})}},P=u=>{var p,g;try{const k=u.blockTableRecord;if(k!=null&&k.newIterator)return k;const w=u.dimBlockId,v=w?i.tables.blockTable.getIdAt(w):void 0;if(v)return v;const E=u.blockName;return E?(g=(p=i.tables.blockTable).getAt)==null?void 0:g.call(p,E):void 0}catch{return}};for(const u of s.newIterator()){if(h)break;const p=u.dxfTypeName;if(p!=="TEXT"&&p!=="MTEXT"&&p!=="INSERT"&&p!=="DIMENSION"&&p!=="MULTILEADER"&&p!=="ACAD_TABLE"||u.visibility===!1||!Ce(i,u.layer,c))continue;if(p==="INSERT"){for(const v of((L=u.attributeIterator)==null?void 0:L.call(u))??[]){if(h)break;if(v.visibility===!1||v.isInvisible)continue;const E=Y(v.textString);d(E)&&b({entityId:u.objectId,textEntityId:v.objectId,kind:"attribute",text:E,tag:v.tag,blockName:u.blockName,layer:u.layer,position:q(v)})}const k=u.blockName,w=k?(z=(N=i.tables.blockTable).getAt)==null?void 0:z.call(N,k):void 0;w&&!h&&f(w.newIterator(),{entity:u,kind:"block",layer:u.layer},Ee(u),String(u.objectId),1,new Set([k]));continue}if(p==="DIMENSION"||p==="ACAD_TABLE"){const k=p==="DIMENSION"?"dimension":"table",w={entity:u,kind:k,layer:u.layer},v=P(u),E=n.hits.length;if(v&&f(v.newIterator(),w,void 0,String(u.objectId),1,new Set),v&&n.hits.length>E)continue;const I=[];if(p==="DIMENSION"){const M=String(u.dimensionText??"");M&&M!=="<>"&&M!==" "&&I.push(j(M.replace("<>","")))}else{const M=Number(u.numRows)||0,x=Number(u.numColumns)||0;for(let C=0;C<M;C++)for(let $=0;$<x;$++)try{I.push(j(String(((R=u.textString)==null?void 0:R.call(u,C,$))??"")))}catch{}}for(const M of I){if(h)break;d(M)&&b({entityId:u.objectId,textEntityId:`${u.objectId}/${n.hits.length}`,kind:k,text:M,layer:u.layer,position:q(u)})}continue}const g=p==="MTEXT"||p==="MULTILEADER"?j(String(u.contents??"")):Y(u.textString);d(g)&&b({entityId:u.objectId,textEntityId:u.objectId,kind:p==="MTEXT"?"mtext":p==="MULTILEADER"?"leader":"text",text:g,layer:u.layer,position:q(u)})}return n}function wa(i,e,t=!1,a=60){if(i.length<=a)return i;const o=J(e,t),r=J(i,t).indexOf(o),l=Math.max(0,Math.min(r-15,i.length-a)),n=i.slice(l,l+a);return`${l>0?"…":""}${n}${l+a<i.length?"…":""}`}function Ca(i){var a;const e=(a=i.objects)==null?void 0:a.layout;if(!(e!=null&&e.newIterator))return[];const t=[];for(const o of e.newIterator())o.blockTableRecordId&&t.push({name:o.layoutName??"",btrId:o.blockTableRecordId,tabOrder:Number(o.tabOrder)||0});return t.sort((o,r)=>o.tabOrder-r.tabOrder||o.name.localeCompare(r.name))}function Ea(i,e,t){const a=t.maxResults??We,o=Ca(i),r=s=>{var c;return((c=o.find(d=>d.btrId===s))==null?void 0:c.name)??""};let l;t.scope==="layout"||o.length===0?l=[{btrId:t.currentLayoutId,name:r(t.currentLayoutId)}]:l=o.map(s=>({btrId:s.btrId,name:s.name}));const n={hits:[],truncated:!1};for(const s of l){const c=Pa(i,s.btrId,e,{matchCase:t.matchCase,maxResults:a-n.hits.length});for(const d of c.hits)n.hits.push({...d,layoutId:s.btrId,layoutName:s.name});if(c.truncated){n.truncated=!0;break}}return n}const Ma="1.7.8",Ta={version:Ma};class Ia extends ee{constructor(e){super(),this.actions=e}async execute(e){this.actions.prepare(),this.actions.toggle()}}class Me{constructor(e,t="layers"){this.dockPanel=e,this.layersTabId=t,this.handleCloseLayerManager=()=>{this.hide()},be.on("close-layer-manager",this.handleCloseLayerManager)}toggleFromCommand(){this.dockPanel.hasTab(this.layersTabId)&&this.dockPanel.open(this.layersTabId)}hide(){this.dockPanel.close()}refreshLocale(){this.dockPanel.refreshLocale()}destroy(){be.off("close-layer-manager",this.handleCloseLayerManager)}}class Sa{toggleFromCommand(){var e;(e=this.current)==null||e.toggleFromCommand()}hide(){var e;(e=this.current)==null||e.hide()}refreshLocale(){var e;(e=this.current)==null||e.refreshLocale()}}class La extends ee{constructor(e){super(),this.actions=e}async execute(e){this.actions.prepare(),this.actions.toggle()}}class Oa extends ee{constructor(e){super(),this.actions=e}async execute(e){this.actions.prepare(),this.actions.toggle()}}class Da extends ee{constructor(e){super(),this.actions=e}async execute(e){this.actions.prepare(),this.actions.toggle()}}const Aa='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>';function Te(i,e){return[e,{type:"separator",id:"toolbar-layout-switcher-separator"},...i]}const Na=["select","pan"];function za(i){if(i==="phone")return{enabled:!0,placement:"bottom",items:"default",collapsible:!1,defaultCollapsed:!1,edgeOffset:0,sideOffset:0,showLabels:!0,size:"stretch",overflow:"menu",showBorder:!0,showButtonBorder:!1,showSeparators:!0,showChildrenIndicator:!1,subToolbar:{showLabels:!0,showSeparators:!1,size:"stretch",overflow:"wrap",replaceOnNested:!0}};const e={enabled:!0,placement:"right",items:"default",collapsible:!1,defaultCollapsed:!1,edgeOffset:8,sideOffset:0,showLabels:!1,size:"auto",overflow:"menu",showBorder:!0,showButtonBorder:!1,showSeparators:!0,showChildrenIndicator:!0,subToolbar:{replaceOnNested:!1}};return i==="pad"?{...e,excludeItems:[...Na]}:e}const Ra=["mountTarget","enabled","inCanvasParent","showButtonBorder"];function Ba(i,e,t){const a=za(i),o={};if(e)if(i==="phone")for(const r of Ra)e[r]!==void 0&&(o[r]=e[r]);else Object.assign(o,e);return{...a,...o,...t}}function Va(i={}){var e,t,a,o,r,l,n,s,c,d,h,b,m,f,P,L,N,z,R,u,p,g,k,w;const v=((e=i.dockPanel)==null?void 0:e.enabled)===!0;return{host:i.host,layout:i.layout??"auto",layouts:i.layouts??{},dockPanel:{enabled:v,defaultOpen:((t=i.dockPanel)==null?void 0:t.defaultOpen)??!1,defaultSide:((a=i.dockPanel)==null?void 0:a.defaultSide)??"left",defaultHeight:((o=i.dockPanel)==null?void 0:o.defaultHeight)??240,defaultWidth:((r=i.dockPanel)==null?void 0:r.defaultWidth)??280},toolbar:{enabled:((l=i.toolbar)==null?void 0:l.enabled)===!1?!1:((n=i.toolbar)==null?void 0:n.enabled)??!0,placement:((s=i.toolbar)==null?void 0:s.placement)??"right",items:((c=i.toolbar)==null?void 0:c.items)??"default",...i.toolbar&&"excludeItems"in i.toolbar?{excludeItems:i.toolbar.excludeItems}:{},appendItems:(d=i.toolbar)==null?void 0:d.appendItems,appendItemsAfter:(h=i.toolbar)==null?void 0:h.appendItemsAfter,appendItemsBefore:(b=i.toolbar)==null?void 0:b.appendItemsBefore,collapsible:((m=i.toolbar)==null?void 0:m.collapsible)??!1,defaultCollapsed:((f=i.toolbar)==null?void 0:f.defaultCollapsed)??!1,edgeOffset:((P=i.toolbar)==null?void 0:P.edgeOffset)??8,sideOffset:((L=i.toolbar)==null?void 0:L.sideOffset)??0,showLabels:(N=i.toolbar)==null?void 0:N.showLabels,size:(z=i.toolbar)==null?void 0:z.size,overflow:(R=i.toolbar)==null?void 0:R.overflow,showBorder:((u=i.toolbar)==null?void 0:u.showBorder)??!0,showButtonBorder:((p=i.toolbar)==null?void 0:p.showButtonBorder)??!1,showSeparators:((g=i.toolbar)==null?void 0:g.showSeparators)??!0,inCanvasParent:((k=i.toolbar)==null?void 0:k.inCanvasParent)===!0,subToolbar:(w=i.toolbar)==null?void 0:w.subToolbar},shouldCreateDockPanel:v}}const Ua=["ml-ex-ui-dock-main","ml-ex-ui-toolbar-main"];function qe(i,e,t=Ua){let a=i;for(;a!==e&&a.parentElement&&t.some(o=>{var r;return((r=a.classList)==null?void 0:r.contains(o))===!0});)a=a.parentElement;return a}function oe(i,e){var t;if(e)return e;const a=(t=y.instance.curView)==null?void 0:t.container,o=a==null?void 0:a.parentElement;return o&&(o===i||i.contains(o))?qe(o,i):i}function Ha(){var i,e;const t=(i=y.instance.curDocument)==null?void 0:i.database,a=(e=t==null?void 0:t.objects)==null?void 0:e.layout;if(!t||!(a!=null&&a.newIterator))return[];const o=[],r=new Set;for(const l of t.objects.layout.newIterator()){const n=l.blockTableRecordId;!n||r.has(n)||(r.add(n),o.push({name:l.layoutName,tabOrder:l.tabOrder,blockTableRecordId:n,isActive:n===t.currentSpaceId}))}return o.sort((l,n)=>l.tabOrder-n.tabOrder),o}function _a(i){At().layoutManager.setCurrentLayoutBtrId(i)}function Fa(){return Ha().map(i=>({id:`layout-${i.blockTableRecordId}`,label:i.name,action:()=>_a(i.blockTableRecordId),toggle:{getValue:()=>{var e;const t=(e=y.instance.curDocument)==null?void 0:e.database;return(t==null?void 0:t.currentSpaceId)===i.blockTableRecordId},on:{},off:{}}}))}function Xe(){return ze({id:"layout",label:"toolbar.layout",icon:da,requiresDocument:!0,childrenUi:"menu",children:[]},Fa)}const Ka=["top","bottom","left","right"],Ga={top:Re,bottom:Be,left:Ve,right:Ue},$a={top:"toolbar.placementTop",bottom:"toolbar.placementBottom",left:"toolbar.placementLeft",right:"toolbar.placementRight"};function Wa(i){return{id:"toolbar-placement",label:"toolbar.placement",icon:ha,requiresDocument:!1,childrenUi:"toolbar",childIcon:"selected",selectedChildId:`placement-${(i==null?void 0:i.getPlacement())??"right"}`,children:Ka.map(e=>({id:`placement-${e}`,label:$a[e],icon:Ga[e],requiresDocument:!1,action:()=>i==null?void 0:i.setPlacement(e)}))}}const ja=["en","zh","cs","tr","ar"],Ya={en:"EN",zh:"中",cs:"CS",tr:"TR",ar:"AR"},qa={en:"toolbar.localeEn",zh:"toolbar.localeZh",cs:"toolbar.localeCs",tr:"toolbar.localeTr",ar:"toolbar.localeAr"};function Xa(i){return`<span class="ml-ex-ui-locale-badge">${i}</span>`}function Za(i){const e=(i==null?void 0:i.getLocale())??"en";return{id:"locale",label:"toolbar.locale",icon:ba,requiresDocument:!1,childrenUi:"toolbar",childIcon:"selected",selectedChildId:`locale-${e}`,children:ja.map(t=>({id:`locale-${t}`,label:qa[t],icon:Xa(Ya[t]),requiresDocument:!1,action:()=>i==null?void 0:i.setLocale(t)}))}}function Qa(i){const e=()=>(i==null?void 0:i.getTheme())??"light",t=()=>{const a=e()==="dark"?"light":"dark";i==null||i.setTheme(a)};return{id:"theme",requiresDocument:!1,toggle:{getValue:()=>e()==="light",on:{label:"toolbar.themeLight",icon:pa,action:t},off:{label:"toolbar.themeDark",icon:ma,action:t}}}}function Ja(){const i=()=>Q.instance.toggle("useSimulatedMouseOnTouch");return{id:"simulated-mouse",requiresDocument:!1,toggle:{getValue:()=>!!Q.instance.get("useSimulatedMouseOnTouch"),on:{label:"toolbar.simulatedMouseOn",icon:Pe,action:i},off:{label:"toolbar.simulatedMouseOff",icon:Pe,action:i}}}}function Ze(){try{return y.instance.isReadingModeEnabled()}catch{return!1}}function eo(){return{id:"reading-mode",requiresDocument:!0,toggle:{getValue:Ze,on:{label:"toolbar.readingMode",icon:we,command:"readingmode"},off:{label:"toolbar.readingMode",icon:we,command:"readingmode"}}}}function Qe(){return{id:"find",label:"toolbar.find",icon:Aa,command:"find"}}function Je(){return{id:"measure",label:"toolbar.measure",icon:Qt,childrenUi:"toolbar",children:[{id:"measure-distance",label:"toolbar.measureDistance",icon:Gt,command:"measuredistance"},{id:"measure-continuous",label:"toolbar.measureContinuous",icon:$t,command:"measurecontinuous"},{id:"measure-angle",label:"toolbar.measureAngle",icon:Wt,command:"measureangle"},{id:"measure-area",label:"toolbar.measureArea",icon:jt,command:"measurearea"},{id:"measure-arc",label:"toolbar.measureArc",icon:Yt,command:"measurearc"},{id:"measure-point",label:"toolbar.measurePoint",icon:qt,command:"measurepoint"},{id:"measurement-panel",label:"toolbar.measurementPanel",icon:Xt,command:"measurementpanel"},{id:"measurement-vis",toggle:{getValue:Lt,on:{label:"toolbar.showMeasurements",icon:Ke,command:"measurementvis"},off:{label:"toolbar.hideMeasurements",icon:Fe,command:"measurementvis"}}},{id:"clear-measurements",label:"toolbar.clearMeasurements",icon:Zt,command:"clearmeasurements"},{type:"separator",id:"sep-measure-import-export"},{id:"measurement-import",label:"toolbar.measurementImport",icon:Ge,command:"measurementimport"},{id:"measurement-export",label:"toolbar.measurementExport",icon:$e,command:"measurementexport"}]}}function et(){return{id:"annotation",label:"toolbar.annotation",icon:sa,minOpenMode:Dt.Review,childrenUi:"toolbar",children:[{id:"markup-cloud",label:"toolbar.markupCloud",icon:Jt,command:"markupcloud"},{id:"markup-callout",label:"toolbar.markupCallout",icon:ea,command:"markupcallout"},{id:"markup-text",label:"toolbar.markupText",icon:ta,command:"markuptext"},{id:"markup-rect",label:"toolbar.markupRect",icon:aa,command:"markuprect"},{id:"markup-circle",label:"toolbar.markupCircle",icon:oa,command:"markupcircle"},{id:"markup-arrow",label:"toolbar.markupArrow",icon:ia,command:"markuparrow"},{id:"markup-stamp",label:"toolbar.markupStamp",icon:ra,command:"markupstamp"},{id:"markup-panel",label:"toolbar.markupPanel",icon:la,command:"markuppanel"},{id:"markup-vis",toggle:{getValue:Ot,on:{label:"toolbar.showMarkup",icon:Ke,command:"markupvis"},off:{label:"toolbar.hideMarkup",icon:Fe,command:"markupvis"}}},{id:"clear-markups",label:"toolbar.clearMarkups",icon:na,command:"clearmarkups"},{type:"separator",id:"sep-markup-import-export"},{id:"markup-import",label:"toolbar.markupImport",icon:Ge,command:"markupimport"},{id:"markup-export",label:"toolbar.markupExport",icon:$e,command:"markupexport"}]}}function tt(){return{id:"zoom",label:"toolbar.zoom",icon:ge,childrenUi:"toolbar",childIcon:"selected",selectedChildId:"zoom-extent",children:[{id:"zoom-saved",label:"toolbar.zoomSaved",icon:_t,command:`zoom
saved`},{id:"zoom-extent",label:"toolbar.zoomExtent",icon:ge,command:`zoom
all`},{id:"zoom-smart-extents",label:"toolbar.zoomSmartExtents",icon:Ft,command:`zoom
smart`},{id:"zoom-window",label:"toolbar.zoomWindow",icon:Kt,command:`zoom
window`}]}}function at(i){return{id:"settings",label:"toolbar.settings",icon:ua,requiresDocument:!1,childrenUi:"toolbar",children:[Ja(),Wa(i),Qa(i),{id:"switch-bg",label:"toolbar.switchBg",icon:ca,command:"switchbg",disabled:Ze},eo(),Za(i)]}}function to(){return ze({id:"open",label:"toolbar.open",icon:Ht,requiresDocument:!1,childrenUi:"menu",action:()=>{try{const i=y.instance.dataSourceManager.list();if(xe(i)){const e=ye(i)[0];e&&ke(e)}}catch{}}},()=>{try{const i=y.instance.dataSourceManager.list();return xe(i)?[]:ye(i).map(e=>({id:`ds-${e.id}`,label:e.label,requiresDocument:!1,action:()=>{ke(e)}}))}catch{return[]}})}function ot(i){return[{id:"select",label:"toolbar.select",icon:Nt,command:"select"},{id:"pan",label:"toolbar.pan",icon:zt,command:"pan"},tt(),Qe(),{id:"layer",label:"toolbar.layer",icon:He,command:"layer"},Xe(),Je(),et(),{id:"export",label:"toolbar.export",icon:Ut,childrenUi:"toolbar",children:[{id:"export-html",label:"toolbar.exportHtml",icon:Rt,command:"chtml"},{id:"export-pdf",label:"toolbar.exportPdf",icon:Bt,command:"cpdf"},{id:"export-svg",label:"toolbar.exportSvg",icon:Vt,command:"csvg"}]},{type:"separator",id:"sep-settings"},at(i)]}function it(i){return[tt(),Qe(),Je(),{...et(),label:"toolbar.annotationShort"},{id:"layer",label:"toolbar.layerShort",icon:He,command:"layer"},Xe(),at(i)]}function le(i,e){var t;for(const a of i)It(a)||(e.has(a.id)||e.set(a.id,a),!St(a)&&(t=a.children)!=null&&t.length&&le(a.children,e))}function ao(i,e="desktop"){const t=new Map;ve(ot(i),t),le([to()],t);const a=it(i);return e==="phone"?ve(a,t):le(a,t),t}function oo(i,e,t){if(!e.length)return i;const a=(t==null?void 0:t.before)??(t==null?void 0:t.after);if(!a)return[...i,...e];const o=i.findIndex(l=>l.id===a);if(o===-1)return[...i,...e];const r=t!=null&&t.before?o:o+1;return[...i.slice(0,r),...e,...i.slice(r)]}function Ie(i,e,t="desktop"){var a,o;const r=i??{},l=ao(e,t);let n;if(r.items==="default"||r.items==null?n=t==="phone"?it(e):ot(e):n=pe(r.items,l),(a=r.appendItems)!=null&&a.length&&(n=oo(n,pe(r.appendItems,l),{after:r.appendItemsAfter,before:r.appendItemsBefore})),(o=r.excludeItems)!=null&&o.length){const s=new Set(r.excludeItems);n=n.filter(c=>!c.id||!s.has(c.id))}return n}function io(i,e){var t;if(e)return e;const a=(t=y.instance.curView)==null?void 0:t.container,o=a==null?void 0:a.parentElement;return o&&(o===i||i.contains(o))?qe(o,i,["ml-ex-ui-toolbar-main"]):a&&(a===i||i.contains(a))?a:i}const ro="SimpleUiPlugin",lo={"toolbar.select":"تحديد","toolbar.open":"فتح","toolbar.pan":"تحريك العرض","toolbar.zoom":"تكبير","toolbar.zoomExtent":"ملاءمة","toolbar.zoomSmartExtents":"ذكية","toolbar.zoomWindow":"نافذة","toolbar.zoomSaved":"محفوظ","toolbar.zoomOriginal":"محفوظ","toolbar.layer":"مدير الطبقات","toolbar.find":"بحث","toolbar.layerShort":"الطبقات","toolbar.layout":"المخطط","toolbar.settings":"الإعدادات","toolbar.simulatedMouseOn":"ماوس","toolbar.simulatedMouseOff":"عدسة","toolbar.measure":"القياس","toolbar.measureDistance":"مسافة","toolbar.measureContinuous":"مستمر","toolbar.measureAngle":"زاوية","toolbar.measureArea":"مساحة","toolbar.measureArc":"قوس","toolbar.measurePoint":"XY","toolbar.showMeasurements":"إظهار","toolbar.hideMeasurements":"إخفاء","toolbar.measurementImport":"استيراد","toolbar.measurementExport":"تصدير","toolbar.clearMeasurements":"مسح","toolbar.measurementPanel":"نتائج","toolbar.switchBg":"خلفية","toolbar.readingMode":"قراءة","toolbar.annotation":"أدوات المراجعة","toolbar.annotationShort":"مراجعة","toolbar.markupCloud":"سحابة","toolbar.markupCallout":"وسيلة شرح","toolbar.markupText":"نص","toolbar.markupRect":"مستطيل","toolbar.markupCircle":"دائرة","toolbar.markupArrow":"سهم","toolbar.markupStamp":"ختم","toolbar.markupPanel":"نتائج","toolbar.markupImport":"استيراد","toolbar.markupExport":"تصدير","toolbar.clearMarkups":"مسح","toolbar.showMarkup":"إظهار","toolbar.hideMarkup":"إخفاء","toolbar.export":"تصدير","toolbar.exportHtml":"تصدير HTML","toolbar.exportPdf":"تصدير PDF","toolbar.exportSvg":"تصدير SVG","toolbar.placement":"موضع شريط الأدوات","toolbar.placementTop":"أعلى","toolbar.placementBottom":"أسفل","toolbar.placementLeft":"يسار","toolbar.placementRight":"يمين","toolbar.themeLight":"فاتح","toolbar.themeDark":"داكن","toolbar.locale":"اللغة","toolbar.localeEn":"English","toolbar.localeZh":"中文","toolbar.localeCs":"Čeština","toolbar.localeTr":"Türkçe","toolbar.localeAr":"العربية","toolbar.collapse":"طي شريط الأدوات","toolbar.moreOverflow":"المزيد من الأدوات","toolbar.expand":"توسيع شريط الأدوات","layerManager.title":"مدير الطبقات","layerManager.name":"الاسم","layerManager.on":"تشغيل","layerManager.color":"اللون","layerManager.currentLayer":"الطبقة الحالية","layerManager.zoomToLayer":"تم التكبير إلى الطبقة: {layer}","layerManager.sortByNameAsc":"ترتيب حسب الاسم تصاعديًا","layerManager.sortByNameDesc":"ترتيب حسب الاسم تنازليًا","layerManager.sortByNameNone":"إلغاء ترتيب الاسم","colorPicker.title":"تحديد اللون","colorPicker.index":"فهرس اللون: ","colorPicker.rgb":"RGB: ","colorPicker.input":"اللون","colorPicker.inputPlaceholder":"1-255 أو #RRGGBB","colorPicker.ok":"موافق","colorPicker.cancel":"إلغاء","dockPanel.close":"إغلاق اللوحة","dockPanel.dockSide":"جهة الإرساء","dockPanel.dockTop":"إرساء بالأعلى","dockPanel.dockBottom":"إرساء بالأسفل","dockPanel.dockLeft":"إرساء باليسار","dockPanel.dockRight":"إرساء باليمين","dockPanel.moreTabs":"المزيد من علامات التبويب","dockPanel.tab.layers":"الطبقات","dockPanel.tab.review":"المراجعة","dockPanel.tab.find":"بحث","dockPanel.tab.measurements":"القياسات","dockPanel.resize":"تغيير ارتفاع اللوحة","reviewPalette.searchPlaceholder":"البحث في علامات المراجعة","reviewPalette.empty":"لا توجد علامات مراجعة حتى الآن","reviewPalette.type":"النوع","reviewPalette.status":"الحالة","reviewPalette.author":"المؤلف","reviewPalette.summary":"الملخص","reviewPalette.details":"التفاصيل","reviewPalette.closeDetails":"إغلاق التفاصيل","reviewPalette.label":"التسمية","reviewPalette.comment":"التعليق","reviewPalette.zoomTo":"تكبير إلى","reviewPalette.delete":"حذف","reviewPalette.clear":"مسح الكل","reviewPalette.statusValues.open":"مفتوح","reviewPalette.statusValues.question":"سؤال","reviewPalette.statusValues.answered":"تمت الإجابة","reviewPalette.statusValues.closed":"مغلق","reviewPalette.typeValues.cloud":"سحابة","reviewPalette.typeValues.callout":"وسيلة شرح","reviewPalette.typeValues.text":"نص","reviewPalette.typeValues.rect":"مستطيل","reviewPalette.typeValues.circle":"دائرة","reviewPalette.typeValues.arrow":"سهم","reviewPalette.typeValues.stamp":"ختم","reviewPalette.typeValues.line":"خط","reviewPalette.typeValues.highlight":"تمييز","reviewPalette.typeValues.symbol":"رمز","measurePalette.filterGroup":"التصفية حسب النوع","measurePalette.empty":"لا توجد قياسات حتى الآن","measurePalette.type":"النوع","measurePalette.value":"القيمة","measurePalette.delete":"حذف","measurePalette.clear":"مسح الكل","measurePalette.typeValues.distance":"مسافة","measurePalette.typeValues.angle":"زاوية","measurePalette.typeValues.area":"مساحة","measurePalette.typeValues.arc":"قوس","measurePalette.typeValues.point":"XY","findPalette.placeholder":"ابحث عن نص","findPalette.input":"نص البحث","findPalette.find":"بحث","findPalette.matchCase":"مطابقة حالة الأحرف","findPalette.currentLayoutOnly":"التخطيط الحالي فقط","findPalette.hint":"اضغط Enter للبحث عن النصوص والنصوص متعددة الأسطر والسمات والنص داخل الكتل والأبعاد وخطوط الإشارة والجداول في الرسم بالكامل (كل التخطيطات).","findPalette.hintLayout":"اضغط Enter للبحث عن النصوص والنصوص متعددة الأسطر والسمات والنص داخل الكتل والأبعاد وخطوط الإشارة والجداول في التخطيط الحالي.","findPalette.noResults":"لم يتم العثور على نص","findPalette.count":"عدد النتائج: {count}","findPalette.countLayouts":"عدد النتائج: {count} (عدد التخطيطات: {layouts})","findPalette.countTruncated":"تم عرض النتائج الأولى فقط (الحد الأقصى: {count}) — قم بتضييق البحث","findPalette.noDocument":"افتح رسمًا للبحث","findPalette.layoutUnavailable":'تعذر فتح التخطيط "{layout}"',"findPalette.kind.text":"نص","findPalette.kind.mtext":"نص متعدد الأسطر","findPalette.kind.attribute":"سمة","findPalette.kind.block":"نص كتلة","findPalette.kind.dimension":"بُعد","findPalette.kind.leader":"خط إشارة","findPalette.kind.table":"جدول","findPalette.unnamedLayout":"(تخطيط بلا اسم)"},no={ACAD:{layer:{description:"فتح أو إغلاق لوحة مدير الطبقات"},markuppanel:{description:"فتح لوحة المراجعة"},measurementpanel:{description:"فتح لوحة قائمة القياسات"},find:{description:"فتح لوحة البحث عن النص"}}},so={ACAD:{layer:{description:"Otevře nebo zavře dokovací panel správce hladin"},markuppanel:{description:"Otevře dokovací panel kontroly"},measurementpanel:{description:"Otevře dokovací panel seznamu měření"},find:{description:"Otevře dokovací panel hledání textu"}}},co={ACAD:{layer:{description:"Opens or closes the layer manager dock panel"},markuppanel:{description:"Opens the review palette dock panel"},measurementpanel:{description:"Opens the measurement list dock panel"},find:{description:"Opens the text search dock panel"}}},uo={ACAD:{layer:{description:"Katman yöneticisi yerleştirme panelini açar veya kapatır"},markuppanel:{description:"İnceleme paleti yerleştirme panelini açar"},measurementpanel:{description:"Ölçüm listesi yerleştirme panelini açar"},find:{description:"Metin arama yerleştirme panelini açar"}}},ho={ACAD:{layer:{description:"打开或关闭图层管理器停靠面板"},markuppanel:{description:"打开批注面板停靠页"},measurementpanel:{description:"打开测量列表面板"},find:{description:"打开文字查找面板"}}},mo={"toolbar.select":"Výběr","toolbar.open":"Otevřít","toolbar.pan":"Posun","toolbar.zoom":"Zoom","toolbar.zoomExtent":"Rozsah","toolbar.zoomSmartExtents":"Chytrý","toolbar.zoomWindow":"Okno","toolbar.zoomSaved":"Uložený","toolbar.zoomOriginal":"Uložený","toolbar.layer":"Správce hladin","toolbar.find":"Hledat","toolbar.layerShort":"Hladiny","toolbar.layout":"Rozvržení","toolbar.settings":"Nastavení","toolbar.simulatedMouseOn":"Myš","toolbar.simulatedMouseOff":"Lupa","toolbar.measure":"Měření","toolbar.measureDistance":"Vzdálenost","toolbar.measureContinuous":"Spojité","toolbar.measureAngle":"Úhel","toolbar.measureArea":"Plocha","toolbar.measureArc":"Oblouk","toolbar.measurePoint":"XY","toolbar.showMeasurements":"Zobrazit","toolbar.hideMeasurements":"Skrýt","toolbar.measurementImport":"Importovat","toolbar.measurementExport":"Exportovat","toolbar.clearMeasurements":"Vymazat","toolbar.measurementPanel":"Výsledky","toolbar.switchBg":"Pozadí","toolbar.readingMode":"Čtení","toolbar.annotation":"Nástroje kontroly","toolbar.annotationShort":"Kontrola","toolbar.markupCloud":"Obláček","toolbar.markupCallout":"Odkaz","toolbar.markupText":"Text","toolbar.markupRect":"Obdélník","toolbar.markupCircle":"Kružnice","toolbar.markupArrow":"Šipka","toolbar.markupStamp":"Razítko","toolbar.markupPanel":"Výsledky","toolbar.markupImport":"Importovat","toolbar.markupExport":"Exportovat","toolbar.clearMarkups":"Vymazat","toolbar.showMarkup":"Zobrazit","toolbar.hideMarkup":"Skrýt","toolbar.export":"Export","toolbar.exportHtml":"Exportovat HTML","toolbar.exportPdf":"Exportovat PDF","toolbar.exportSvg":"Exportovat SVG","toolbar.placement":"Pozice panelu nástrojů","toolbar.placementTop":"Nahoře","toolbar.placementBottom":"Dole","toolbar.placementLeft":"Vlevo","toolbar.placementRight":"Vpravo","toolbar.themeLight":"Světlý","toolbar.themeDark":"Tmavý","toolbar.locale":"Jazyk","toolbar.localeEn":"English","toolbar.localeZh":"中文","toolbar.localeCs":"Čeština","toolbar.localeTr":"Türkçe","toolbar.localeAr":"العربية","toolbar.collapse":"Sbalit panel nástrojů","toolbar.moreOverflow":"Další nástroje","toolbar.expand":"Rozbalit panel nástrojů","layerManager.title":"Správce hladin","layerManager.name":"Název","layerManager.on":"Zapnuto","layerManager.color":"Barva","layerManager.currentLayer":"Aktuální hladina","layerManager.zoomToLayer":"Přiblíženo na hladinu: {layer}","layerManager.sortByNameAsc":"Řadit podle názvu vzestupně","layerManager.sortByNameDesc":"Řadit podle názvu sestupně","layerManager.sortByNameNone":"Zrušit řazení podle názvu","colorPicker.title":"Vybrat barvu","colorPicker.index":"Index barvy: ","colorPicker.rgb":"RGB: ","colorPicker.input":"Barva","colorPicker.inputPlaceholder":"1-255 nebo #RRGGBB","colorPicker.ok":"OK","colorPicker.cancel":"Zrušit","dockPanel.close":"Zavřít panel","dockPanel.dockSide":"Strana ukotvení","dockPanel.dockTop":"Ukotvit nahoře","dockPanel.dockBottom":"Ukotvit dole","dockPanel.dockLeft":"Ukotvit vlevo","dockPanel.dockRight":"Ukotvit vpravo","dockPanel.moreTabs":"Další karty","dockPanel.tab.layers":"Hladiny","dockPanel.tab.review":"Kontrola","dockPanel.tab.find":"Hledat","dockPanel.tab.measurements":"Měření","dockPanel.resize":"Změnit velikost panelu","reviewPalette.searchPlaceholder":"Hledat poznámky","reviewPalette.empty":"Zatím žádné poznámky","reviewPalette.type":"Typ","reviewPalette.status":"Stav","reviewPalette.author":"Autor","reviewPalette.summary":"Souhrn","reviewPalette.details":"Podrobnosti","reviewPalette.closeDetails":"Zavřít podrobnosti","reviewPalette.label":"Popisek","reviewPalette.comment":"Komentář","reviewPalette.zoomTo":"Přiblížit na","reviewPalette.delete":"Odstranit","reviewPalette.clear":"Vymazat vše","reviewPalette.statusValues.open":"Otevřeno","reviewPalette.statusValues.question":"Otázka","reviewPalette.statusValues.answered":"Zodpovězeno","reviewPalette.statusValues.closed":"Uzavřeno","reviewPalette.typeValues.cloud":"Oblak","reviewPalette.typeValues.callout":"Odnož","reviewPalette.typeValues.text":"Text","reviewPalette.typeValues.rect":"Obdélník","reviewPalette.typeValues.circle":"Kružnice","reviewPalette.typeValues.arrow":"Šipka","reviewPalette.typeValues.stamp":"Razítko","reviewPalette.typeValues.line":"Čára","reviewPalette.typeValues.highlight":"Zvýraznění","reviewPalette.typeValues.symbol":"Symbol","measurePalette.filterGroup":"Filtrovat podle typu","measurePalette.empty":"Zatím žádná měření","measurePalette.type":"Typ","measurePalette.value":"Hodnota","measurePalette.delete":"Odstranit","measurePalette.clear":"Vymazat vše","measurePalette.typeValues.distance":"Vzdálenost","measurePalette.typeValues.angle":"Úhel","measurePalette.typeValues.area":"Plocha","measurePalette.typeValues.arc":"Oblouk","measurePalette.typeValues.point":"XY","findPalette.placeholder":"Hledat text","findPalette.input":"Hledaný text","findPalette.find":"Hledat","findPalette.matchCase":"Rozlišovat velikost písmen","findPalette.currentLayoutOnly":"Pouze aktuální layout","findPalette.hint":"Stiskněte Enter pro hledání textu, víceřádkového textu, atributů a textu v blocích, kótách, odkazech a tabulkách v celém výkresu (všechny layouty).","findPalette.hintLayout":"Stiskněte Enter pro hledání textu, víceřádkového textu, atributů a textu v blocích, kótách, odkazech a tabulkách v aktuálním layoutu.","findPalette.noResults":"Nebyl nalezen žádný text","findPalette.count":"Nalezeno: {count}","findPalette.countLayouts":"Nalezeno: {count} (layouty: {layouts})","findPalette.countTruncated":"Zobrazeno prvních {count} výsledků – upřesněte hledání","findPalette.noDocument":"Pro hledání otevřete výkres","findPalette.layoutUnavailable":"Layout „{layout}“ se nepodařilo otevřít","findPalette.kind.text":"Text","findPalette.kind.mtext":"Mtext","findPalette.kind.attribute":"Atribut","findPalette.kind.block":"Text bloku","findPalette.kind.dimension":"Kóta","findPalette.kind.leader":"Odkaz","findPalette.kind.table":"Tabulka","findPalette.unnamedLayout":"(nepojmenovaný layout)"},rt={"toolbar.select":"Select","toolbar.open":"Open","toolbar.pan":"Pan","toolbar.zoom":"Zoom","toolbar.zoomExtent":"Extents","toolbar.zoomSmartExtents":"Smart","toolbar.zoomWindow":"Window","toolbar.zoomSaved":"Saved","toolbar.zoomOriginal":"Saved","toolbar.layer":"Layer Manager","toolbar.find":"Find","toolbar.layerShort":"Layers","toolbar.layout":"Layout","toolbar.settings":"Settings","toolbar.simulatedMouseOn":"Mouse","toolbar.simulatedMouseOff":"Loupe","toolbar.measure":"Measure","toolbar.measureDistance":"Distance","toolbar.measureContinuous":"Continuous","toolbar.measureAngle":"Angle","toolbar.measureArea":"Area","toolbar.measureArc":"Arc","toolbar.measurePoint":"XY","toolbar.showMeasurements":"Show","toolbar.hideMeasurements":"Hide","toolbar.measurementImport":"Import","toolbar.measurementExport":"Export","toolbar.clearMeasurements":"Clear","toolbar.measurementPanel":"Results","toolbar.switchBg":"Background","toolbar.readingMode":"Reading","toolbar.annotation":"Review tools","toolbar.annotationShort":"Review","toolbar.markupCloud":"Cloud","toolbar.markupCallout":"Callout","toolbar.markupText":"Text","toolbar.markupRect":"Rect","toolbar.markupCircle":"Circle","toolbar.markupArrow":"Arrow","toolbar.markupStamp":"Stamp","toolbar.markupPanel":"Results","toolbar.markupImport":"Import","toolbar.markupExport":"Export","toolbar.clearMarkups":"Clear","toolbar.showMarkup":"Show","toolbar.hideMarkup":"Hide","toolbar.export":"Export","toolbar.exportHtml":"Export HTML","toolbar.exportPdf":"Export PDF","toolbar.exportSvg":"Export SVG","toolbar.placement":"Toolbar Position","toolbar.placementTop":"Top","toolbar.placementBottom":"Bottom","toolbar.placementLeft":"Left","toolbar.placementRight":"Right","toolbar.themeLight":"Light","toolbar.themeDark":"Dark","toolbar.locale":"Language","toolbar.localeEn":"English","toolbar.localeZh":"中文","toolbar.localeCs":"Čeština","toolbar.localeTr":"Türkçe","toolbar.localeAr":"العربية","toolbar.collapse":"Collapse toolbar","toolbar.moreOverflow":"More tools","toolbar.expand":"Expand toolbar","layerManager.title":"Layer Manager","layerManager.name":"Name","layerManager.on":"On","layerManager.color":"Color","layerManager.currentLayer":"Current layer","layerManager.zoomToLayer":"Zoomed to layer: {layer}","layerManager.sortByNameAsc":"Sort by name ascending","layerManager.sortByNameDesc":"Sort by name descending","layerManager.sortByNameNone":"Clear name sort","colorPicker.title":"Select Color","colorPicker.index":"Color Index: ","colorPicker.rgb":"RGB: ","colorPicker.input":"Color","colorPicker.inputPlaceholder":"1-255 or #RRGGBB","colorPicker.ok":"OK","colorPicker.cancel":"Cancel","dockPanel.close":"Close panel","dockPanel.dockSide":"Dock side","dockPanel.dockTop":"Dock to top","dockPanel.dockBottom":"Dock to bottom","dockPanel.dockLeft":"Dock to left","dockPanel.dockRight":"Dock to right","dockPanel.moreTabs":"More tabs","dockPanel.tab.layers":"Layers","dockPanel.tab.review":"Review","dockPanel.tab.find":"Find","dockPanel.tab.measurements":"Measurements","dockPanel.resize":"Resize panel","reviewPalette.searchPlaceholder":"Search markups","reviewPalette.empty":"No markups yet","reviewPalette.type":"Type","reviewPalette.status":"Status","reviewPalette.author":"Author","reviewPalette.summary":"Summary","reviewPalette.details":"Details","reviewPalette.closeDetails":"Close details","reviewPalette.label":"Label","reviewPalette.comment":"Comment","reviewPalette.zoomTo":"Zoom to","reviewPalette.delete":"Delete","reviewPalette.clear":"Clear all","reviewPalette.statusValues.open":"Open","reviewPalette.statusValues.question":"Question","reviewPalette.statusValues.answered":"Answered","reviewPalette.statusValues.closed":"Closed","reviewPalette.typeValues.cloud":"Cloud","reviewPalette.typeValues.callout":"Callout","reviewPalette.typeValues.text":"Text","reviewPalette.typeValues.rect":"Rectangle","reviewPalette.typeValues.circle":"Circle","reviewPalette.typeValues.arrow":"Arrow","reviewPalette.typeValues.stamp":"Stamp","reviewPalette.typeValues.line":"Line","reviewPalette.typeValues.highlight":"Highlight","reviewPalette.typeValues.symbol":"Symbol","measurePalette.filterGroup":"Filter by type","measurePalette.empty":"No measurements yet","measurePalette.type":"Type","measurePalette.value":"Value","measurePalette.delete":"Delete","measurePalette.clear":"Clear all","measurePalette.typeValues.distance":"Distance","measurePalette.typeValues.angle":"Angle","measurePalette.typeValues.area":"Area","measurePalette.typeValues.arc":"Arc","measurePalette.typeValues.point":"XY","findPalette.placeholder":"Find text","findPalette.input":"Search text","findPalette.find":"Find","findPalette.matchCase":"Match case","findPalette.currentLayoutOnly":"Current layout only","findPalette.hint":"Press Enter to search text, multiline text, attributes and the text in blocks, dimensions, leaders and tables in the whole drawing (all layouts).","findPalette.hintLayout":"Press Enter to search text, multiline text, attributes and the text in blocks, dimensions, leaders and tables in the current layout.","findPalette.noResults":"No text found","findPalette.count":"{count} found","findPalette.countLayouts":"{count} found in {layouts} layouts","findPalette.countTruncated":"First {count} results shown — refine the search","findPalette.noDocument":"Open a drawing to search","findPalette.layoutUnavailable":'Could not open layout "{layout}"',"findPalette.kind.text":"Text","findPalette.kind.mtext":"MText","findPalette.kind.attribute":"Attribute","findPalette.kind.block":"Block text","findPalette.kind.dimension":"Dimension","findPalette.kind.leader":"Leader","findPalette.kind.table":"Table","findPalette.unnamedLayout":"(unnamed layout)"},po={"toolbar.select":"Seç","toolbar.open":"Aç","toolbar.pan":"Kaydır","toolbar.zoom":"Yakınlaştır","toolbar.zoomExtent":"Sınırlar","toolbar.zoomSmartExtents":"Akıllı","toolbar.zoomWindow":"Pencere","toolbar.zoomSaved":"Kayıtlı","toolbar.zoomOriginal":"Kayıtlı","toolbar.layer":"Katman Yöneticisi","toolbar.find":"Bul","toolbar.layerShort":"Katman","toolbar.layout":"Düzen","toolbar.settings":"Ayarlar","toolbar.simulatedMouseOn":"Fare","toolbar.simulatedMouseOff":"Büyüteç","toolbar.measure":"Ölçüm","toolbar.measureDistance":"Mesafe","toolbar.measureContinuous":"Sürekli","toolbar.measureAngle":"Açı","toolbar.measureArea":"Alan","toolbar.measureArc":"Yay","toolbar.measurePoint":"XY","toolbar.showMeasurements":"Göster","toolbar.hideMeasurements":"Gizle","toolbar.measurementImport":"İçe Aktar","toolbar.measurementExport":"Dışa Aktar","toolbar.clearMeasurements":"Temizle","toolbar.measurementPanel":"Sonuç","toolbar.switchBg":"Arka Plan","toolbar.readingMode":"Okuma","toolbar.annotation":"İnceleme araçları","toolbar.annotationShort":"İnceleme","toolbar.markupCloud":"Bulut","toolbar.markupCallout":"Çağrı","toolbar.markupText":"Metin","toolbar.markupRect":"Dikdörtgen","toolbar.markupCircle":"Daire","toolbar.markupArrow":"Ok","toolbar.markupStamp":"Damga","toolbar.markupPanel":"Sonuç","toolbar.markupImport":"İçe Aktar","toolbar.markupExport":"Dışa Aktar","toolbar.clearMarkups":"Temizle","toolbar.showMarkup":"Göster","toolbar.hideMarkup":"Gizle","toolbar.export":"Dışa Aktar","toolbar.exportHtml":"HTML Dışa Aktar","toolbar.exportPdf":"PDF Dışa Aktar","toolbar.exportSvg":"SVG Dışa Aktar","toolbar.placement":"Araç Çubuğu Konumu","toolbar.placementTop":"Üst","toolbar.placementBottom":"Alt","toolbar.placementLeft":"Sol","toolbar.placementRight":"Sağ","toolbar.themeLight":"Açık","toolbar.themeDark":"Koyu","toolbar.locale":"Dil","toolbar.localeEn":"English","toolbar.localeZh":"中文","toolbar.localeCs":"Čeština","toolbar.localeTr":"Türkçe","toolbar.localeAr":"العربية","toolbar.collapse":"Araç çubuğunu daralt","toolbar.moreOverflow":"Diğer araçlar","toolbar.expand":"Araç çubuğunu genişlet","layerManager.title":"Katman Yöneticisi","layerManager.name":"Ad","layerManager.on":"Açık","layerManager.color":"Renk","layerManager.currentLayer":"Geçerli katman","layerManager.zoomToLayer":"Katmana yakınlaştırıldı: {layer}","layerManager.sortByNameAsc":"Ada göre artan sırala","layerManager.sortByNameDesc":"Ada göre azalan sırala","layerManager.sortByNameNone":"Ad sıralamasını temizle","colorPicker.title":"Renk Seç","colorPicker.index":"Renk İndeksi: ","colorPicker.rgb":"RGB: ","colorPicker.input":"Renk","colorPicker.inputPlaceholder":"1-255 veya #RRGGBB","colorPicker.ok":"Tamam","colorPicker.cancel":"İptal","dockPanel.close":"Paneli kapat","dockPanel.dockSide":"Yerleşim kenarı","dockPanel.dockTop":"Üste yerleştir","dockPanel.dockBottom":"Alta yerleştir","dockPanel.dockLeft":"Sola yerleştir","dockPanel.dockRight":"Sağa yerleştir","dockPanel.moreTabs":"Diğer sekmeler","dockPanel.tab.layers":"Katmanlar","dockPanel.tab.review":"İnceleme","dockPanel.tab.find":"Bul","dockPanel.tab.measurements":"Ölçümler","dockPanel.resize":"Panel boyutunu ayarla","reviewPalette.searchPlaceholder":"İşaretlerde ara","reviewPalette.empty":"Henüz işaret yok","reviewPalette.type":"Tür","reviewPalette.status":"Durum","reviewPalette.author":"Yazar","reviewPalette.summary":"Özet","reviewPalette.details":"Ayrıntılar","reviewPalette.closeDetails":"Ayrıntıları kapat","reviewPalette.label":"Etiket","reviewPalette.comment":"Yorum","reviewPalette.zoomTo":"Yakınlaştır","reviewPalette.delete":"Sil","reviewPalette.clear":"Tümünü temizle","reviewPalette.statusValues.open":"Açık","reviewPalette.statusValues.question":"Soru","reviewPalette.statusValues.answered":"Yanıtlandı","reviewPalette.statusValues.closed":"Kapalı","reviewPalette.typeValues.cloud":"Bulut","reviewPalette.typeValues.callout":"Çağrı","reviewPalette.typeValues.text":"Metin","reviewPalette.typeValues.rect":"Dikdörtgen","reviewPalette.typeValues.circle":"Daire","reviewPalette.typeValues.arrow":"Ok","reviewPalette.typeValues.stamp":"Damga","reviewPalette.typeValues.line":"Çizgi","reviewPalette.typeValues.highlight":"Vurgu","reviewPalette.typeValues.symbol":"Sembol","measurePalette.filterGroup":"Türe göre filtrele","measurePalette.empty":"Henüz ölçüm yok","measurePalette.type":"Tür","measurePalette.value":"Değer","measurePalette.delete":"Sil","measurePalette.clear":"Tümünü temizle","measurePalette.typeValues.distance":"Mesafe","measurePalette.typeValues.angle":"Açı","measurePalette.typeValues.area":"Alan","measurePalette.typeValues.arc":"Yay","measurePalette.typeValues.point":"XY","findPalette.placeholder":"Metin ara","findPalette.input":"Aranacak metin","findPalette.find":"Bul","findPalette.matchCase":"Büyük/küçük harf duyarlı","findPalette.currentLayoutOnly":"Yalnızca geçerli yerleşim","findPalette.hint":"Tüm çizimde (tüm yerleşimler) metin, çok satırlı metin, öznitelikler ile blok, ölçü, kılavuz ve tablolardaki metni aramak için Enter tuşuna basın.","findPalette.hintLayout":"Geçerli yerleşimde metin, çok satırlı metin, öznitelikler ile blok, ölçü, kılavuz ve tablolardaki metni aramak için Enter tuşuna basın.","findPalette.noResults":"Metin bulunamadı","findPalette.count":"{count} sonuç","findPalette.countLayouts":"{layouts} yerleşimde {count} sonuç","findPalette.countTruncated":"İlk {count} sonuç gösteriliyor — aramayı daraltın","findPalette.noDocument":"Aramak için bir çizim açın","findPalette.layoutUnavailable":'"{layout}" yerleşimi açılamadı',"findPalette.kind.text":"Metin","findPalette.kind.mtext":"Çok satırlı metin","findPalette.kind.attribute":"Öznitelik","findPalette.kind.block":"Blok metni","findPalette.kind.dimension":"Ölçü","findPalette.kind.leader":"Kılavuz","findPalette.kind.table":"Tablo","findPalette.unnamedLayout":"(adsız yerleşim)"},bo={"toolbar.select":"选择","toolbar.open":"打开","toolbar.pan":"平移","toolbar.zoom":"缩放","toolbar.zoomExtent":"范围","toolbar.zoomSmartExtents":"智能","toolbar.zoomWindow":"窗口","toolbar.zoomSaved":"保存的视图","toolbar.zoomOriginal":"保存的视图","toolbar.layer":"图层管理器","toolbar.find":"查找","toolbar.layerShort":"图层","toolbar.layout":"布局","toolbar.settings":"设置","toolbar.simulatedMouseOn":"鼠标","toolbar.simulatedMouseOff":"放大","toolbar.measure":"测量","toolbar.measureDistance":"测距离","toolbar.measureContinuous":"连续测","toolbar.measureAngle":"测角度","toolbar.measureArea":"测面积","toolbar.measureArc":"测弧长","toolbar.measurePoint":"测坐标","toolbar.showMeasurements":"显示","toolbar.hideMeasurements":"隐藏","toolbar.measurementImport":"导入","toolbar.measurementExport":"导出","toolbar.clearMeasurements":"清除","toolbar.measurementPanel":"看结果","toolbar.switchBg":"背景","toolbar.readingMode":"阅读","toolbar.annotation":"审阅工具","toolbar.annotationShort":"批注","toolbar.markupCloud":"云线","toolbar.markupCallout":"标注","toolbar.markupText":"文字","toolbar.markupRect":"矩形","toolbar.markupCircle":"圆","toolbar.markupArrow":"箭头","toolbar.markupStamp":"图章","toolbar.markupPanel":"看结果","toolbar.markupImport":"导入","toolbar.markupExport":"导出","toolbar.clearMarkups":"清除","toolbar.showMarkup":"显示","toolbar.hideMarkup":"隐藏","toolbar.export":"导出","toolbar.exportHtml":"导出 HTML","toolbar.exportPdf":"导出 PDF","toolbar.exportSvg":"导出 SVG","toolbar.placement":"工具栏位置","toolbar.placementTop":"上方","toolbar.placementBottom":"下方","toolbar.placementLeft":"左侧","toolbar.placementRight":"右侧","toolbar.themeLight":"浅色","toolbar.themeDark":"深色","toolbar.locale":"语言","toolbar.localeEn":"English","toolbar.localeZh":"中文","toolbar.localeCs":"Čeština","toolbar.localeTr":"Türkçe","toolbar.localeAr":"العربية","toolbar.collapse":"收起工具栏","toolbar.moreOverflow":"更多工具","toolbar.expand":"展开工具栏","layerManager.title":"图层管理器","layerManager.name":"名称","layerManager.on":"开","layerManager.color":"颜色","layerManager.currentLayer":"当前图层","layerManager.zoomToLayer":"已缩放至图层：{layer}","layerManager.sortByNameAsc":"按名称升序排序","layerManager.sortByNameDesc":"按名称降序排序","layerManager.sortByNameNone":"取消名称排序","colorPicker.title":"选择颜色","colorPicker.index":"颜色索引：","colorPicker.rgb":"RGB：","colorPicker.input":"颜色","colorPicker.inputPlaceholder":"1-255 或 #RRGGBB","colorPicker.ok":"确定","colorPicker.cancel":"取消","dockPanel.close":"关闭面板","dockPanel.dockSide":"停靠位置","dockPanel.dockTop":"停靠在顶部","dockPanel.dockBottom":"停靠在底部","dockPanel.dockLeft":"停靠在左侧","dockPanel.dockRight":"停靠在右侧","dockPanel.moreTabs":"更多标签页","dockPanel.tab.layers":"图层","dockPanel.tab.review":"批注","dockPanel.tab.find":"查找","dockPanel.tab.measurements":"测量","dockPanel.resize":"调整面板高度","reviewPalette.searchPlaceholder":"搜索批注","reviewPalette.empty":"暂无批注","reviewPalette.type":"类型","reviewPalette.status":"状态","reviewPalette.author":"作者","reviewPalette.summary":"摘要","reviewPalette.details":"详情","reviewPalette.closeDetails":"关闭详情","reviewPalette.label":"标签","reviewPalette.comment":"评论","reviewPalette.zoomTo":"缩放到","reviewPalette.delete":"删除","reviewPalette.clear":"全部清除","reviewPalette.statusValues.open":"打开","reviewPalette.statusValues.question":"疑问","reviewPalette.statusValues.answered":"已答复","reviewPalette.statusValues.closed":"已关闭","reviewPalette.typeValues.cloud":"云线","reviewPalette.typeValues.callout":"标注","reviewPalette.typeValues.text":"文字","reviewPalette.typeValues.rect":"矩形","reviewPalette.typeValues.circle":"圆","reviewPalette.typeValues.arrow":"箭头","reviewPalette.typeValues.stamp":"图章","reviewPalette.typeValues.line":"直线","reviewPalette.typeValues.highlight":"高亮","reviewPalette.typeValues.symbol":"符号","measurePalette.filterGroup":"按类型筛选","measurePalette.empty":"暂无测量","measurePalette.type":"类型","measurePalette.value":"数值","measurePalette.delete":"删除","measurePalette.clear":"全部清除","measurePalette.typeValues.distance":"距离","measurePalette.typeValues.angle":"角度","measurePalette.typeValues.area":"面积","measurePalette.typeValues.arc":"弧长","measurePalette.typeValues.point":"坐标","findPalette.placeholder":"查找文字","findPalette.input":"搜索文字","findPalette.find":"查找","findPalette.matchCase":"区分大小写","findPalette.currentLayoutOnly":"仅当前布局","findPalette.hint":"按回车键在整个图纸（所有布局）中搜索文字、多行文字、属性，以及块、标注、引线和表格中的文字。","findPalette.hintLayout":"按回车键在当前布局中搜索文字、多行文字、属性，以及块、标注、引线和表格中的文字。","findPalette.noResults":"未找到文字","findPalette.count":"找到 {count} 项","findPalette.countLayouts":"在 {layouts} 个布局中找到 {count} 项","findPalette.countTruncated":"仅显示前 {count} 项结果，请缩小搜索范围","findPalette.noDocument":"请先打开图纸再搜索","findPalette.layoutUnavailable":"无法打开布局“{layout}”","findPalette.kind.text":"文字","findPalette.kind.mtext":"多行文字","findPalette.kind.attribute":"属性","findPalette.kind.block":"块文字","findPalette.kind.dimension":"标注","findPalette.kind.leader":"引线","findPalette.kind.table":"表格","findPalette.unnamedLayout":"（未命名布局）"},D="simpleUi";let Se=!1;function H(i){const e={};for(const[t,a]of Object.entries(i)){const o=t.split(".");let r=e;for(let l=0;l<o.length-1;l++){const n=o[l],s=r[n];(!s||typeof s=="string")&&(r[n]={}),r=r[n]}r[o[o.length-1]]=a}return e}function fo(){Se||(T.mergeLocaleMessage("en",{command:co,[D]:H(rt)}),T.mergeLocaleMessage("zh",{command:ho,[D]:H(bo)}),T.mergeLocaleMessage("cs",{command:so,[D]:H(mo)}),T.mergeLocaleMessage("tr",{command:uo,[D]:H(po)}),T.mergeLocaleMessage("ar",{command:no,[D]:H(lo)}),Se=!0)}class vo{t(e,t){const a=`${D}.${e}`;let o=T.t(a,{fallback:e});return o===e&&(o=rt[e]??e),t?Object.keys(t).reduce((r,l)=>r.replace(`{${l}}`,t[l]),o):o}}function Le(i){const e=i.getAttribute("data-ml-ui-theme");if(e==="light"||e==="dark")return e}function Oe(i){const e=X.instance().getVar(re.COLORTHEME,i);return Ne(e)?"light":"dark"}class xo{constructor(e,t){this.host=e,this.onThemeChanged=t,this.handleSysVarChanged=a=>{var o;const r=(o=y.instance.curDocument)==null?void 0:o.database;!r||a.database!==r||a.name.toLowerCase()===re.COLORTHEME.toLowerCase()&&this.applyTheme(Ne(a.newVal)?"light":"dark")},this.handleDocumentActivated=a=>{this.applyTheme(Oe(a.doc.database))}}start(){this.syncFromCurrentSource(),X.instance().events.sysVarChanged.addEventListener(this.handleSysVarChanged),y.instance.events.documentActivated.addEventListener(this.handleDocumentActivated)}stop(){X.instance().events.sysVarChanged.removeEventListener(this.handleSysVarChanged),y.instance.events.documentActivated.removeEventListener(this.handleDocumentActivated)}getTheme(){return Le(this.host)??"dark"}setTheme(e){var t;const a=(t=y.instance.curDocument)==null?void 0:t.database;if(a){X.instance().setVar(re.COLORTHEME,e==="light"?1:0,a);return}this.applyTheme(e)}syncFromCurrentSource(){var e;const t=(e=y.instance.curDocument)==null?void 0:e.database;if(t){this.applyTheme(Oe(t));return}Le(this.host)}applyTheme(e){var t;ct(e,this.host),(t=this.onThemeChanged)==null||t.call(this)}}const ne="ml-ex-ui-styles";function A(){if(Ct(),document.getElementById(ne))return;const i=document.createElement("style");i.id=ne,i.textContent=`
    .ml-ex-ui-layer-manager {
      position: absolute;
      z-index: 100;
      width: min(280px, calc(100% - 16px));
      max-width: calc(100% - 16px);
      min-height: 120px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      background: var(--ml-ui-bg, #ffffff);
      border: 1px solid var(--ml-ui-border, #dcdfe6);
      box-shadow: var(--ml-ui-shadow, 0 6px 18px rgba(0, 0, 0, 0.35));
      border-radius: 8px;
      overflow: hidden;
      color: var(--ml-ui-text, #303133);
      font-size: 12px;
    }

    .ml-ex-ui-layer-manager.is-compact {
      width: calc(100% - 16px);
      max-width: none;
      border-radius: 12px 12px 8px 8px;
    }

    .ml-ex-ui-layer-manager.is-compact .ml-ex-ui-layer-table th:first-child,
    .ml-ex-ui-layer-manager.is-compact .ml-ex-ui-layer-table td:first-child {
      width: 100%;
      max-width: 0;
    }

    .ml-ex-ui-layer-manager.is-compact .ml-ex-ui-layer-name {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ml-ex-ui-layer-manager.is-hidden {
      display: none;
    }

    .ml-ex-ui-layer-manager .ml-ex-ui-layer-list {
      flex: 1;
      min-height: 0;
    }

    .ml-ex-ui-layer-manager-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 10px;
      border-bottom: 1px solid var(--ml-ui-border, #dcdfe6);
      user-select: none;
      font-weight: 600;
      flex: 0 0 auto;
    }

    .ml-ex-ui-layer-table-wrap {
      overflow: auto;
      flex: 1;
    }

    .ml-ex-ui-layer-table {
      width: 100%;
      border-collapse: collapse;
    }

    .ml-ex-ui-layer-table th,
    .ml-ex-ui-layer-table td {
      padding: 4px 8px;
      border-bottom: 1px solid var(--ml-ui-border, #dcdfe6);
      text-align: left;
    }

    .ml-ex-ui-layer-table th {
      position: sticky;
      top: 0;
      background: var(--ml-ui-bg, #ffffff);
      z-index: 1;
    }

    .ml-ex-ui-layer-table td.center,
    .ml-ex-ui-layer-table th.center {
      text-align: center;
      vertical-align: middle;
    }

    .ml-ex-ui-layer-name-header.is-sortable {
      padding: 0;
    }

    .ml-ex-ui-layer-name-sort {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      width: 100%;
      margin: 0;
      padding: 4px 8px;
      border: 0;
      background: transparent;
      color: inherit;
      font: inherit;
      text-align: left;
      cursor: pointer;
    }

    .ml-ex-ui-layer-name-sort:hover {
      color: var(--ml-ui-accent, #409eff);
    }

    .ml-ex-ui-layer-name-header.is-sorted-asc .ml-ex-ui-layer-name-sort,
    .ml-ex-ui-layer-name-header.is-sorted-desc .ml-ex-ui-layer-name-sort {
      color: var(--ml-ui-accent, #409eff);
    }

    .ml-ex-ui-layer-sort-indicator {
      display: inline-block;
      min-width: 0.75em;
      font-size: 10px;
      line-height: 1;
      opacity: 0.85;
    }

    .ml-ex-ui-layer-header-on {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }

    .ml-ex-ui-layer-header-on span {
      line-height: 1;
    }

    .ml-ex-ui-layer-header-on input[type='checkbox'] {
      margin: 0;
    }

    .ml-ex-ui-layer-name {
      display: inline-flex;
      align-items: center;
      gap: 2px;
    }

    .ml-ex-ui-layer-current-marker {
      color: var(--ml-ui-accent, #409eff);
      font-weight: 600;
    }

    .ml-ex-ui-layer-color {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid var(--ml-ui-border, #dcdfe6);
      border-radius: 3px;
      cursor: pointer;
    }

    .ml-ex-ui-color-dialog-backdrop {
      position: fixed;
      inset: 0;
      z-index: 120;
      background: var(--ml-ui-overlay, rgba(0, 0, 0, 0.18));
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ml-ex-ui-color-dialog {
      width: fit-content;
      max-width: calc(100vw - 24px);
      background: var(--ml-ui-bg, #ffffff);
      border: 1px solid var(--ml-ui-border, #dcdfe6);
      border-radius: 8px;
      box-shadow: var(--ml-ui-shadow, 0 6px 18px rgba(0, 0, 0, 0.35));
      padding: 12px;
      color: var(--ml-ui-text, #303133);
      font-family: Arial, sans-serif;
      font-size: 12px;
    }

    .ml-ex-ui-color-dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .ml-ex-ui-color-dialog-title {
      font-weight: 600;
    }

    .ml-ex-ui-color-dialog-close {
      border: none;
      background: transparent;
      color: var(--ml-ui-text-muted, #606266);
      cursor: pointer;
      font-size: 16px;
      line-height: 1;
      padding: 2px 6px;
    }

    .ml-ex-ui-dialog-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      margin-top: 8px;
    }

    .ml-ex-ui-btn {
      padding: 4px 12px;
      border-radius: 4px;
      border: 1px solid var(--ml-ui-border, #dcdfe6);
      background: var(--ml-ui-bg, #ffffff);
      color: var(--ml-ui-text, #303133);
      cursor: pointer;
      font-size: 12px;
    }

    .ml-ex-ui-btn-primary {
      border-color: var(--ml-ui-accent, #409eff);
      background: var(--ml-ui-accent, #409eff);
      color: #fff;
    }

    .ml-ex-ui-toast {
      position: fixed;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 200;
      padding: 8px 14px;
      border-radius: 6px;
      background: var(--ml-ui-bg, #ffffff);
      color: var(--ml-ui-text, #303133);
      border: 1px solid var(--ml-ui-border, #dcdfe6);
      box-shadow: var(--ml-ui-shadow, 0 2px 6px rgba(0, 0, 0, 0.12));
    }

    .ml-ex-ui-layer-list {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 0;
      overflow: hidden;
    }

    .ml-ex-ui-review-palette {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 0;
      gap: 8px;
      padding: 8px;
      box-sizing: border-box;
      color: var(--ml-ui-text, #303133);
      font-size: 12px;
    }

    .ml-ex-ui-review-toolbar {
      display: flex;
      gap: 8px;
      align-items: center;
      flex: 0 0 auto;
    }

    .ml-ex-ui-review-search,
    .ml-ex-ui-review-input,
    .ml-ex-ui-review-select,
    .ml-ex-ui-review-textarea {
      box-sizing: border-box;
      width: 100%;
      border: 1px solid var(--ml-ui-border, #dcdfe6);
      border-radius: 4px;
      background: var(--ml-ui-bg, #ffffff);
      color: var(--ml-ui-text, #303133);
      font: inherit;
      padding: 4px 8px;
    }

    .ml-ex-ui-review-search {
      flex: 1;
      min-width: 0;
    }

    .ml-ex-ui-review-textarea {
      resize: vertical;
      min-height: 44px;
    }

    .ml-ex-ui-review-btn {
      flex: 0 0 auto;
      border: 1px solid var(--ml-ui-border, #dcdfe6);
      border-radius: 4px;
      background: var(--ml-ui-bg, #ffffff);
      color: var(--ml-ui-text, #303133);
      font: inherit;
      padding: 4px 8px;
      cursor: pointer;
    }

    .ml-ex-ui-review-btn:hover:not(:disabled) {
      background: var(--ml-ui-border, rgba(0, 0, 0, 0.06));
    }

    .ml-ex-ui-review-btn:disabled {
      opacity: 0.5;
      cursor: default;
    }

    .ml-ex-ui-review-btn-danger {
      color: var(--ml-ui-danger, #f56c6c);
      border-color: var(--ml-ui-danger, #f56c6c);
    }

    .ml-ex-ui-review-table-wrap {
      flex: 1;
      min-height: 120px;
      overflow: auto;
    }

    .ml-ex-ui-review-table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
    }

    .ml-ex-ui-review-table th,
    .ml-ex-ui-review-table td {
      padding: 4px 6px;
      text-align: left;
      border-bottom: 1px solid var(--ml-ui-border, #dcdfe6);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ml-ex-ui-review-table th {
      font-weight: 600;
      position: sticky;
      top: 0;
      background: var(--ml-ui-bg, #ffffff);
    }

    .ml-ex-ui-review-table th:nth-child(1),
    .ml-ex-ui-review-table td:nth-child(1) {
      width: 88px;
    }

    .ml-ex-ui-review-table th:nth-child(2),
    .ml-ex-ui-review-table td:nth-child(2) {
      width: 96px;
    }

    .ml-ex-ui-review-row {
      cursor: pointer;
    }

    .ml-ex-ui-review-row:hover {
      background: var(--ml-ui-border, rgba(0, 0, 0, 0.06));
    }

    .ml-ex-ui-review-row.is-selected {
      background: var(--ml-ui-accent-soft, rgba(64, 158, 255, 0.12));
    }

    .ml-ex-ui-review-empty-row td {
      text-align: center;
      color: var(--ml-ui-muted, #909399);
      white-space: normal;
      padding: 16px 8px;
    }

    .ml-ex-ui-review-detail {
      border-top: 1px solid var(--ml-ui-border, #dcdfe6);
      padding-top: 6px;
      max-height: 46%;
      overflow: auto;
      flex: 0 0 auto;
    }

    .ml-ex-ui-review-detail-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
      margin-bottom: 4px;
    }

    .ml-ex-ui-review-detail-title {
      font-weight: 600;
    }

    .ml-ex-ui-review-detail-close {
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      margin-left: auto;
      border: none;
      border-radius: 50%;
      background: transparent;
      color: var(--ml-ui-text, #303133);
      cursor: pointer;
      padding: 0;
    }

    .ml-ex-ui-review-detail-close:hover {
      background: var(--ml-ui-border, rgba(0, 0, 0, 0.06));
    }

    .ml-ex-ui-review-field {
      margin-bottom: 4px;
    }

    .ml-ex-ui-review-field-label {
      display: block;
      margin-bottom: 2px;
      line-height: 1.2;
    }

    .ml-ex-ui-review-detail-actions {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 4px;
      margin-top: 4px;
    }

    .ml-ex-ui-review-detail-actions .ml-ex-ui-review-btn {
      flex: 0 0 auto;
      width: auto;
    }

    .ml-ex-ui-measure-palette {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 0;
      gap: 8px;
      padding: 8px;
      box-sizing: border-box;
      color: var(--ml-ui-text, #303133);
      font-size: 12px;
    }

    .ml-ex-ui-measure-toolbar {
      display: flex;
      gap: 8px;
      align-items: center;
      flex: 0 0 auto;
    }

    .ml-ex-ui-measure-filter {
      display: flex;
      flex: 1 1 auto;
      min-width: 0;
      overflow: hidden;
      border: 1px solid var(--ml-ui-border, #dcdfe6);
      border-radius: 4px;
    }

    .ml-ex-ui-measure-filter-btn {
      flex: 1 1 0;
      min-width: 0;
      border: none;
      border-right: 1px solid var(--ml-ui-border, #dcdfe6);
      background: var(--ml-ui-bg, #ffffff);
      color: var(--ml-ui-text, #303133);
      font: inherit;
      font-size: 11px;
      padding: 4px 2px;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .ml-ex-ui-measure-filter-btn:last-child {
      border-right: none;
    }

    .ml-ex-ui-measure-filter-btn:hover:not(.is-active) {
      background: var(--ml-ui-border, rgba(0, 0, 0, 0.06));
    }

    .ml-ex-ui-measure-filter-btn.is-active {
      background: var(--ml-ui-accent-soft, rgba(64, 158, 255, 0.16));
      color: var(--ml-ui-accent, #409eff);
    }

    .ml-ex-ui-measure-btn {
      flex: 0 0 auto;
      border: 1px solid var(--ml-ui-border, #dcdfe6);
      border-radius: 4px;
      background: var(--ml-ui-bg, #ffffff);
      color: var(--ml-ui-text, #303133);
      font: inherit;
      padding: 4px 8px;
      cursor: pointer;
    }

    .ml-ex-ui-measure-btn:hover:not(:disabled) {
      background: var(--ml-ui-border, rgba(0, 0, 0, 0.06));
    }

    .ml-ex-ui-measure-btn:disabled {
      opacity: 0.5;
      cursor: default;
    }

    .ml-ex-ui-measure-btn-danger {
      color: #f56c6c;
      border-color: rgba(245, 108, 108, 0.55);
    }

    .ml-ex-ui-measure-table-wrap {
      flex: 1 1 auto;
      min-height: 0;
      overflow: auto;
    }

    .ml-ex-ui-measure-table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
    }

    .ml-ex-ui-measure-table th,
    .ml-ex-ui-measure-table td {
      padding: 6px 8px;
      text-align: left;
      border-bottom: 1px solid var(--ml-ui-border, #dcdfe6);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ml-ex-ui-measure-table th {
      font-weight: 600;
      color: var(--ml-ui-text-muted, #606266);
    }

    .ml-ex-ui-measure-table th:nth-child(1),
    .ml-ex-ui-measure-table td:nth-child(1) {
      width: 28%;
    }

    .ml-ex-ui-measure-actions-col {
      width: 72px;
      text-align: right;
    }

    .ml-ex-ui-measure-row {
      cursor: pointer;
    }

    .ml-ex-ui-measure-row:hover {
      background: var(--ml-ui-border, rgba(0, 0, 0, 0.04));
    }

    .ml-ex-ui-measure-row.is-selected {
      background: var(--ml-ui-accent-soft, rgba(64, 158, 255, 0.12));
    }

    .ml-ex-ui-measure-empty-row td {
      text-align: center;
      color: var(--ml-ui-text-muted, #606266);
      cursor: default;
    }

    .ml-ex-ui-measure-row-delete {
      padding: 2px 6px;
      font-size: 11px;
    }

    .ml-ex-ui-find-palette {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 0;
      gap: 8px;
      padding: 8px;
      box-sizing: border-box;
      color: var(--ml-ui-text, #303133);
      font-size: 12px;
    }

    .ml-ex-ui-find-form {
      display: flex;
      gap: 8px;
      align-items: center;
      flex: 0 0 auto;
    }

    .ml-ex-ui-find-input {
      flex: 1 1 auto;
      min-width: 0;
      box-sizing: border-box;
      border: 1px solid var(--ml-ui-border, #dcdfe6);
      border-radius: 4px;
      background: var(--ml-ui-bg, #ffffff);
      color: var(--ml-ui-text, #303133);
      font: inherit;
      /* 16px avoids iOS focus zoom on touch screens. */
      font-size: 16px;
      padding: 4px 8px;
    }

    .ml-ex-ui-find-option {
      display: flex;
      gap: 6px;
      align-items: center;
      flex: 0 0 auto;
      cursor: pointer;
    }

    .ml-ex-ui-find-status {
      flex: 0 0 auto;
      color: var(--ml-ui-text-muted, #606266);
    }

    .ml-ex-ui-find-list {
      flex: 1 1 auto;
      min-height: 0;
      margin: 0;
      padding: 0;
      list-style: none;
      overflow: auto;
      touch-action: pan-y;
    }

    .ml-ex-ui-find-row {
      padding: 6px 8px;
      border-bottom: 1px solid var(--ml-ui-border, #dcdfe6);
      cursor: pointer;
    }

    .ml-ex-ui-find-row:hover {
      background: var(--ml-ui-border, rgba(0, 0, 0, 0.04));
    }

    .ml-ex-ui-find-row.is-selected {
      background: var(--ml-ui-accent-soft, rgba(64, 158, 255, 0.12));
    }

    .ml-ex-ui-find-layout {
      color: var(--ml-ui-text-muted, #606266);
      font-size: 11px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ml-ex-ui-find-text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ml-ex-ui-find-meta {
      color: var(--ml-ui-text-muted, #606266);
      font-size: 11px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ml-ex-ui-layer-list .ml-ex-ui-layer-table-wrap {
      flex: 1;
      min-height: 0;
    }

    .ml-ex-ui-host-dock {
      min-height: 0;
      min-width: 0;
    }

    .ml-ex-ui-host-dock:not([class*='ml-ex-ui-host-dock-']) {
      display: flex;
      flex-direction: column;
    }

    .ml-ex-ui-host-dock-top,
    .ml-ex-ui-host-dock-bottom,
    .ml-ex-ui-host-dock-sheet {
      display: flex;
      flex-direction: column;
      min-height: 0;
    }

    .ml-ex-ui-host-dock-left,
    .ml-ex-ui-host-dock-right {
      display: flex;
      flex-direction: row;
      min-width: 0;
      min-height: 0;
    }

    .ml-ex-ui-dock-main {
      flex: 1 1 auto;
      min-height: 0;
      min-width: 0;
      position: relative;
      overflow: hidden;
    }

    .ml-ex-ui-dock-panel {
      --ml-ex-ui-dock-size: 240px;
      display: flex;
      flex-direction: column;
      flex: 0 0 auto;
      background: var(--ml-ui-bg, #ffffff);
      color: var(--ml-ui-text, #303133);
      border: 1px solid var(--ml-ui-border, #dcdfe6);
      font-size: 12px;
      z-index: 25;
      min-height: 0;
      min-width: 0;
      overflow: hidden;
    }

    .ml-ex-ui-dock-panel[data-open='false'] {
      display: none;
    }

    .ml-ex-ui-dock-panel[data-side='bottom'],
    .ml-ex-ui-dock-panel[data-side='top'] {
      width: 100%;
      height: var(--ml-ex-ui-dock-size);
      border-left: none;
      border-right: none;
    }

    .ml-ex-ui-dock-panel[data-side='bottom'] {
      border-bottom: none;
      border-top: none;
    }

    .ml-ex-ui-dock-panel[data-side='top'] {
      border-top: none;
      border-bottom: none;
    }

    .ml-ex-ui-dock-panel[data-side='left'],
    .ml-ex-ui-dock-panel[data-side='right'] {
      flex-direction: row;
      height: 100%;
      width: var(--ml-ex-ui-dock-size);
      border-top: none;
      border-bottom: none;
    }

    .ml-ex-ui-dock-content {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      min-height: 0;
      min-width: 0;
      overflow: hidden;
    }

    .ml-ex-ui-dock-panel[data-side='left'] {
      border-left: none;
      border-right: none;
    }

    .ml-ex-ui-dock-panel[data-side='right'] {
      border-right: none;
      border-left: none;
    }

    .ml-ex-ui-dock-resize-handle {
      flex: 0 0 auto;
      background: transparent;
      touch-action: none;
      z-index: 1;
    }

    .ml-ex-ui-dock-resize-handle:hover,
    .ml-ex-ui-dock-resize-handle:active {
      background: var(--ml-ui-border, rgba(0, 0, 0, 0.08));
    }

    .ml-ex-ui-dock-panel[data-side='bottom'] .ml-ex-ui-dock-resize-handle {
      order: -1;
      width: 100%;
      height: 6px;
      cursor: ns-resize;
      border-top: 1px solid var(--ml-ui-border, #dcdfe6);
    }

    .ml-ex-ui-dock-panel[data-side='top'] .ml-ex-ui-dock-resize-handle {
      order: 2;
      width: 100%;
      height: 6px;
      cursor: ns-resize;
      border-bottom: 1px solid var(--ml-ui-border, #dcdfe6);
    }

    .ml-ex-ui-dock-panel[data-side='left'] .ml-ex-ui-dock-resize-handle {
      order: 2;
      align-self: stretch;
      width: 6px;
      cursor: ew-resize;
      border-right: 1px solid var(--ml-ui-border, #dcdfe6);
    }

    .ml-ex-ui-dock-panel[data-side='right'] .ml-ex-ui-dock-resize-handle {
      order: -1;
      align-self: stretch;
      width: 6px;
      cursor: ew-resize;
      border-left: 1px solid var(--ml-ui-border, #dcdfe6);
    }

    .ml-ex-ui-dock-sheet-chrome {
      display: none;
      position: relative;
    }

    .ml-ex-ui-dock-sheet-grabber {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 20px;
      cursor: ns-resize;
      touch-action: none;
    }

    .ml-ex-ui-dock-sheet-grabber::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 36px;
      height: 4px;
      border-radius: 2px;
      background: var(--ml-ui-text-muted, #909399);
      opacity: 0.7;
    }

    .ml-ex-ui-dock-sheet-close {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 28px;
      border: none;
      background: transparent;
      color: var(--ml-ui-text-muted, #606266);
      cursor: pointer;
      flex: 0 0 auto;
      position: relative;
      z-index: 1;
    }

    .ml-ex-ui-dock-sheet-close:hover {
      color: var(--ml-ui-text, #303133);
    }

    .ml-ex-ui-dock-header {
      display: flex;
      align-items: stretch;
      flex: 0 0 auto;
      border-bottom: 1px solid var(--ml-ui-border, #dcdfe6);
      background: var(--ml-ui-bg, #ffffff);
      min-height: 28px;
    }

    .ml-ex-ui-dock-tabs-wrap {
      display: flex;
      align-items: stretch;
      flex: 1 1 auto;
      min-width: 0;
    }

    .ml-ex-ui-dock-tabs {
      display: flex;
      align-items: stretch;
      flex: 1 1 auto;
      min-width: 0;
      overflow: hidden;
    }

    .ml-ex-ui-dock-tab-overflow-btn {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      border: none;
      border-bottom: 2px solid transparent;
      background: transparent;
      color: var(--ml-ui-text-muted, #606266);
      font-size: 14px;
      line-height: 1;
      cursor: pointer;
    }

    .ml-ex-ui-dock-tab-overflow-btn[hidden] {
      display: none !important;
    }

    .ml-ex-ui-dock-tab-overflow-btn:hover,
    .ml-ex-ui-dock-tab-overflow-btn.is-active {
      color: var(--ml-ui-text, #303133);
      background: var(--ml-ui-border, rgba(0, 0, 0, 0.04));
    }

    .ml-ex-ui-dock-tab-overflow-btn.is-active {
      border-bottom-color: var(--ml-ui-accent, #409eff);
    }

    .ml-ex-ui-dock-tab[hidden] {
      display: none;
    }

    .ml-ex-ui-dock-tab {
      flex: 0 0 auto;
      border: none;
      border-bottom: 2px solid transparent;
      background: transparent;
      color: var(--ml-ui-text-muted, #606266);
      padding: 6px 12px;
      font-size: 12px;
      cursor: pointer;
      white-space: nowrap;
    }

    .ml-ex-ui-dock-tab:hover {
      color: var(--ml-ui-text, #303133);
      background: var(--ml-ui-border, rgba(0, 0, 0, 0.04));
    }

    .ml-ex-ui-dock-tab.is-active {
      color: var(--ml-ui-text, #303133);
      border-bottom-color: var(--ml-ui-accent, #409eff);
    }

    .ml-ex-ui-dock-actions {
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      gap: 2px;
      padding: 0 4px;
    }

    .ml-ex-ui-dock-action-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border: none;
      border-radius: 4px;
      background: transparent;
      color: var(--ml-ui-text-muted, #606266);
      cursor: pointer;
    }

    .ml-ex-ui-dock-action-btn:hover {
      background: var(--ml-ui-border, rgba(0, 0, 0, 0.06));
      color: var(--ml-ui-text, #303133);
    }

    .ml-ex-ui-dock-body {
      flex: 1 1 auto;
      min-height: 0;
      min-width: 0;
      overflow: hidden;
      position: relative;
    }

    .ml-ex-ui-dock-tab-panel {
      position: absolute;
      inset: 0;
      overflow: auto;
    }

    .ml-ex-ui-dock-tab-panel:has(> .ml-ex-ui-review-palette),
    .ml-ex-ui-dock-tab-panel:has(> .ml-ex-ui-measure-palette),
    .ml-ex-ui-dock-tab-panel:has(> .ml-ex-ui-find-palette),
    .ml-ex-ui-dock-tab-panel:has(> .ml-ex-ui-layer-list) {
      overflow: hidden;
    }

    .ml-ex-ui-dock-tab-panel[hidden] {
      display: none;
    }

    .ml-ex-ui-dock-side-menu {
      position: fixed;
      z-index: 110;
      min-width: 160px;
      padding: 4px 0;
      background: var(--ml-ui-bg, #ffffff);
      border: 1px solid var(--ml-ui-border, #dcdfe6);
      border-radius: 6px;
      box-shadow: var(--ml-ui-shadow, 0 6px 18px rgba(0, 0, 0, 0.35));
    }

    .ml-ex-ui-dock-side-menu-item {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      border: none;
      background: transparent;
      color: var(--ml-ui-text, #303133);
      padding: 6px 12px;
      font-size: 12px;
      cursor: pointer;
      text-align: left;
    }

    .ml-ex-ui-dock-side-menu-item:hover {
      background: var(--ml-ui-border, rgba(0, 0, 0, 0.06));
    }

    .ml-ex-ui-dock-side-menu-item.is-selected {
      color: var(--ml-ui-accent, #409eff);
    }

    .ml-ex-ui-dock-tab-overflow-menu {
      position: fixed;
      z-index: 110;
      min-width: 160px;
      padding: 4px 0;
      background: var(--ml-ui-bg, #ffffff);
      border: 1px solid var(--ml-ui-border, #dcdfe6);
      border-radius: 6px;
      box-shadow: var(--ml-ui-shadow, 0 6px 18px rgba(0, 0, 0, 0.35));
    }

    .ml-ex-ui-dock-tab-overflow-menu-item {
      display: block;
      width: 100%;
      border: none;
      background: transparent;
      color: var(--ml-ui-text, #303133);
      padding: 6px 12px;
      font-size: 12px;
      cursor: pointer;
      text-align: left;
      white-space: nowrap;
    }

    .ml-ex-ui-dock-tab-overflow-menu-item:hover {
      background: var(--ml-ui-border, rgba(0, 0, 0, 0.06));
    }

    .ml-ex-ui-dock-tab-overflow-menu-item.is-selected {
      color: var(--ml-ui-accent, #409eff);
    }

    @media (max-width: ${Et}px) {
      .ml-ex-ui-dock-panel[data-open='true'][data-phone-sheet='true'] {
        position: absolute;
        left: 0;
        right: 0;
        top: auto;
        bottom: var(--ml-ex-ui-phone-sheet-inset, 0px);
        width: 100%;
        height: var(--ml-ex-ui-dock-size);
        max-height: calc(100% - var(--ml-ex-ui-phone-sheet-inset, 0px));
        flex: none;
        flex-direction: column;
        z-index: 35;
        border: none;
        border-top: 1px solid var(--ml-ui-border, #dcdfe6);
        border-radius: 12px 12px 0 0;
        box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.18);
      }

      .ml-ex-ui-dock-panel[data-phone-sheet='true'] .ml-ex-ui-dock-resize-handle {
        display: none;
      }

      .ml-ex-ui-dock-panel[data-phone-sheet='true'] .ml-ex-ui-dock-sheet-chrome {
        display: flex;
        align-items: center;
        flex: 0 0 auto;
        min-height: 28px;
      }

      .ml-ex-ui-dock-panel[data-phone-sheet='true'] .ml-ex-ui-dock-header {
        display: none;
      }

      .ml-ex-ui-host-dock-sheet .ml-ex-ui-dock-main {
        flex: 1 1 auto;
      }
    }
  `,document.head.appendChild(i)}function yo(){var i;wt(),!document.querySelector(".ml-ex-ui-layer-manager, .ml-ex-ui-dock-panel, .ml-ex-ui-review-palette, .ml-ex-ui-measure-palette, .ml-ex-ui-find-palette")&&((i=document.getElementById(ne))==null||i.remove())}const ie=120,De=.75,ko=28;class go{constructor(e){this.tabs=new Map,this.overflowTabIds=[],this.resizeStartPos=0,this.resizeStartSize=0,this.handleResizePointerDown=o=>{if(o.button!==0||!this.isPanelOpen)return;o.preventDefault(),this.resizePointerId=o.pointerId,this.resizeStartPos=this.usesVerticalResize()?o.clientY:o.clientX,this.resizeStartSize=this.size;const r=o.currentTarget instanceof HTMLElement?o.currentTarget:this.resizeHandle;this.resizeCaptureTarget=r,r.setPointerCapture(o.pointerId),document.addEventListener("pointermove",this.handleResizePointerMove),document.addEventListener("pointerup",this.handleResizePointerUp),document.addEventListener("pointercancel",this.handleResizePointerUp)},this.handleResizePointerMove=o=>{if(this.resizePointerId!==o.pointerId)return;o.preventDefault();const r=this.usesPhoneSheet()?this.resizeStartPos-o.clientY:this.side==="bottom"?this.resizeStartPos-o.clientY:this.side==="top"?o.clientY-this.resizeStartPos:this.side==="right"?this.resizeStartPos-o.clientX:o.clientX-this.resizeStartPos;this.setSize(this.resizeStartSize+r)},this.handleResizePointerUp=o=>{if(this.resizePointerId!==o.pointerId)return;this.resizePointerId=void 0;const r=this.resizeCaptureTarget??this.resizeHandle;r.hasPointerCapture(o.pointerId)&&r.releasePointerCapture(o.pointerId),this.resizeCaptureTarget=void 0,document.removeEventListener("pointermove",this.handleResizePointerMove),document.removeEventListener("pointerup",this.handleResizePointerUp),document.removeEventListener("pointercancel",this.handleResizePointerUp)},this.handleDocumentPointerDown=o=>{o.target instanceof Node&&(this.sideMenuRoot&&!this.sideMenuRoot.contains(o.target)&&!this.sideMenuButton.contains(o.target)&&this.closeSideMenu(),this.overflowMenuRoot&&!this.overflowMenuRoot.contains(o.target)&&!this.overflowButton.contains(o.target)&&this.closeOverflowMenu())},this.handleMobileMediaChange=()=>{this.usesPhoneSheet()&&this.side!=="bottom"&&this.side!=="top"&&(this.size=this.defaultHeight),this.applyLayoutState()},this.host=e.host,this.i18n=e.i18n,this.side=e.defaultSide??"left",this.isPanelOpen=e.defaultOpen??!1,this.defaultHeight=e.defaultHeight??240,this.defaultWidth=e.defaultWidth??280,this.onOpen=e.onOpen,this.size=this.side==="bottom"||this.side==="top"?this.defaultHeight:this.defaultWidth,A(),this.ensureHostLayout(),this.root=document.createElement("div"),this.root.className="ml-ex-ui-dock-panel",this.root.dataset.side=this.side,this.root.dataset.open=String(this.isPanelOpen),this.resizeHandle=document.createElement("div"),this.resizeHandle.className="ml-ex-ui-dock-resize-handle",this.resizeHandle.addEventListener("pointerdown",this.handleResizePointerDown),this.contentEl=document.createElement("div"),this.contentEl.className="ml-ex-ui-dock-content";const t=document.createElement("div");t.className="ml-ex-ui-dock-header",this.tabsWrap=document.createElement("div"),this.tabsWrap.className="ml-ex-ui-dock-tabs-wrap",this.tabsEl=document.createElement("div"),this.tabsEl.className="ml-ex-ui-dock-tabs",this.tabsEl.setAttribute("role","tablist"),this.overflowButton=document.createElement("button"),this.overflowButton.type="button",this.overflowButton.className="ml-ex-ui-dock-tab-overflow-btn",this.overflowButton.hidden=!0,this.overflowButton.textContent="»",this.overflowButton.title=this.i18n.t("dockPanel.moreTabs"),this.overflowButton.setAttribute("aria-label",this.i18n.t("dockPanel.moreTabs")),this.overflowButton.addEventListener("click",o=>{o.stopPropagation(),this.toggleOverflowMenu()}),this.tabsWrap.appendChild(this.tabsEl),this.tabsWrap.appendChild(this.overflowButton),this.tabOverflowObserver=new ResizeObserver(()=>{this.scheduleUpdateTabOverflow()}),this.tabOverflowObserver.observe(this.tabsWrap);const a=document.createElement("div");a.className="ml-ex-ui-dock-actions",this.sideMenuButton=document.createElement("button"),this.sideMenuButton.type="button",this.sideMenuButton.className="ml-ex-ui-dock-action-btn",this.sideMenuButton.title=this.i18n.t("dockPanel.dockSide"),this.sideMenuButton.setAttribute("aria-label",this.i18n.t("dockPanel.dockSide")),this.sideMenuButton.appendChild(G(fa)),this.sideMenuButton.addEventListener("click",o=>{o.stopPropagation(),this.toggleSideMenu()}),this.closeButton=document.createElement("button"),this.closeButton.type="button",this.closeButton.className="ml-ex-ui-dock-action-btn",this.closeButton.title=this.i18n.t("dockPanel.close"),this.closeButton.setAttribute("aria-label",this.i18n.t("dockPanel.close")),this.closeButton.appendChild(G(_e)),this.closeButton.addEventListener("click",()=>this.close()),a.appendChild(this.sideMenuButton),a.appendChild(this.closeButton),t.appendChild(this.tabsWrap),t.appendChild(a),this.bodyEl=document.createElement("div"),this.bodyEl.className="ml-ex-ui-dock-body",this.contentEl.appendChild(t),this.contentEl.appendChild(this.bodyEl),this.sheetChrome=document.createElement("div"),this.sheetChrome.className="ml-ex-ui-dock-sheet-chrome",this.sheetGrabber=document.createElement("div"),this.sheetGrabber.className="ml-ex-ui-dock-sheet-grabber",this.sheetGrabber.setAttribute("role","separator"),this.sheetGrabber.setAttribute("aria-orientation","horizontal"),this.sheetGrabber.title=this.i18n.t("dockPanel.resize"),this.sheetGrabber.setAttribute("aria-label",this.i18n.t("dockPanel.resize")),this.sheetGrabber.addEventListener("pointerdown",this.handleResizePointerDown),this.sheetCloseButton=document.createElement("button"),this.sheetCloseButton.type="button",this.sheetCloseButton.className="ml-ex-ui-dock-sheet-close",this.sheetCloseButton.title=this.i18n.t("dockPanel.close"),this.sheetCloseButton.setAttribute("aria-label",this.i18n.t("dockPanel.close")),this.sheetCloseButton.appendChild(G(va)),this.sheetCloseButton.addEventListener("click",()=>this.close()),this.sheetChrome.append(this.sheetGrabber,this.sheetCloseButton),this.root.appendChild(this.sheetChrome),this.root.appendChild(this.contentEl),this.root.appendChild(this.resizeHandle),this.ensureDockMainWrapper(),this.mountToHost(),this.bindMobileMediaQuery(),this.applyLayoutState()}hasTab(e){return this.tabs.has(e)}addTab(e){if(this.tabs.has(e.id)||!e.labelKey&&!e.label)return!1;const t=`ml-ex-ui-dock-tab-${e.id}`,a=`ml-ex-ui-dock-tabpanel-${e.id}`,o=document.createElement("button");o.type="button",o.className="ml-ex-ui-dock-tab",o.id=t,o.setAttribute("role","tab"),o.setAttribute("aria-controls",a),o.dataset.tabId=e.id,o.textContent=this.getTabLabel(e),o.addEventListener("click",()=>{this.openPanel(e.id)});const r=document.createElement("div");return r.className="ml-ex-ui-dock-tab-panel",r.id=a,r.setAttribute("role","tabpanel"),r.setAttribute("aria-labelledby",t),r.dataset.tabId=e.id,r.hidden=!0,r.tabIndex=-1,r.appendChild(e.content),this.tabs.set(e.id,{id:e.id,labelKey:e.labelKey,label:e.label,tabButton:o,panel:r}),this.tabsEl.appendChild(o),this.bodyEl.appendChild(r),this.activeTabId||this.setActiveTab(e.id),this.scheduleUpdateTabOverflow(),!0}reparentTo(e){if(this.host===e){this.ensureMounted(),this.applyLayoutState();return}const t=this.isPanelOpen,a=this.activeTabId;this.closeSideMenu(),this.closeOverflowMenu(),this.releaseDockMainWrapper(),this.root.remove(),this.clearHostLayoutClasses(),this.host=e,this.ensureHostLayout(),this.ensureDockMainWrapper(),this.mountToHost(),this.isPanelOpen=t,a&&this.tabs.has(a)&&this.setActiveTab(a),this.ensureMounted(),this.applyLayoutState()}ensureMounted(){this.root.isConnected||this.mountToHost()}removeTab(e){const t=this.tabs.get(e);if(t){if(t.tabButton.remove(),t.panel.remove(),this.tabs.delete(e),this.activeTabId===e){const a=this.tabs.keys().next().value;this.activeTabId=void 0,a&&this.setActiveTab(a)}this.scheduleUpdateTabOverflow()}}get hasTabs(){return this.tabs.size>0}open(e){var t;(t=this.onOpen)==null||t.call(this),e?this.setActiveTab(e):this.activeTabId?this.setActiveTab(this.activeTabId):this.tabs.size>0&&this.setActiveTab(this.tabs.keys().next().value),this.isPanelOpen=!0,this.ensureMounted(),this.applyLayoutState()}close(){this.isPanelOpen=!1,this.closeSideMenu(),this.closeOverflowMenu(),this.applyLayoutState()}toggle(e){if(this.isPanelOpen&&(!e||this.activeTabId===e)){this.close();return}this.open(e)}setSide(e){if(this.side===e)return;const t=this.side;this.side=e,(t==="left"||t==="right")&&(e==="left"||e==="right")||(t==="top"||t==="bottom")&&(e==="top"||e==="bottom")||(this.size=e==="bottom"||e==="top"?this.defaultHeight:this.defaultWidth),this.closeSideMenu(),this.closeOverflowMenu(),this.mountToHost(),this.applyLayoutState(),this.scheduleUpdateTabOverflow()}getMountHost(){return this.host}get isOpen(){return this.isPanelOpen}getSide(){return this.side}getSize(){return this.size}setPanelSize(e){this.setSize(e)}get activeTab(){return this.activeTabId}refreshLocale(){for(const e of this.tabs.values())e.tabButton.textContent=this.getTabLabel(e);this.sideMenuButton.title=this.i18n.t("dockPanel.dockSide"),this.sideMenuButton.setAttribute("aria-label",this.i18n.t("dockPanel.dockSide")),this.closeButton.title=this.i18n.t("dockPanel.close"),this.closeButton.setAttribute("aria-label",this.i18n.t("dockPanel.close")),this.overflowButton.title=this.i18n.t("dockPanel.moreTabs"),this.overflowButton.setAttribute("aria-label",this.i18n.t("dockPanel.moreTabs")),this.sheetGrabber.title=this.i18n.t("dockPanel.resize"),this.sheetGrabber.setAttribute("aria-label",this.i18n.t("dockPanel.resize")),this.sheetCloseButton.title=this.i18n.t("dockPanel.close"),this.sheetCloseButton.setAttribute("aria-label",this.i18n.t("dockPanel.close")),this.sideMenuRoot&&this.renderSideMenuItems(),this.overflowMenuRoot&&this.renderOverflowMenuItems(),this.scheduleUpdateTabOverflow()}destroy(){var e;document.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),document.removeEventListener("pointermove",this.handleResizePointerMove),document.removeEventListener("pointerup",this.handleResizePointerUp),document.removeEventListener("pointercancel",this.handleResizePointerUp),this.tabOverflowFrame!==void 0&&(cancelAnimationFrame(this.tabOverflowFrame),this.tabOverflowFrame=void 0),(e=this.tabOverflowObserver)==null||e.disconnect(),this.tabOverflowObserver=void 0,this.unbindMobileMediaQuery(),this.closeSideMenu(),this.closeOverflowMenu(),this.releaseDockMainWrapper(),this.clearHostLayoutClasses(),this.root.remove()}openPanel(e){this.setActiveTab(e),this.isPanelOpen=!0,this.applyLayoutState()}setActiveTab(e){if(this.tabs.has(e)){this.activeTabId=e;for(const t of this.tabs.values()){const a=t.id===e;t.tabButton.classList.toggle("is-active",a),t.tabButton.setAttribute("aria-selected",String(a)),t.tabButton.tabIndex=a?0:-1,t.panel.hidden=!a,a?t.panel.removeAttribute("aria-hidden"):t.panel.setAttribute("aria-hidden","true")}this.scheduleUpdateTabOverflow()}}ensureHostLayout(){getComputedStyle(this.host).position==="static"&&(this.host.style.position="relative"),this.host.classList.contains("ml-ex-ui-host-dock")||this.host.classList.add("ml-ex-ui-host-dock")}ensureDockMainWrapper(){var e;if((e=this.dockMainWrapper)!=null&&e.isConnected)return;const t=[];if(Array.from(this.host.childNodes).forEach(o=>{o instanceof HTMLElement&&o.classList.contains("ml-ex-ui-dock-panel")||t.push(o)}),t.length===0)return;const a=document.createElement("div");a.className="ml-ex-ui-dock-main",t.forEach(o=>a.appendChild(o)),this.host.appendChild(a),this.dockMainWrapper=a}releaseDockMainWrapper(){var e;if(!((e=this.dockMainWrapper)!=null&&e.isConnected)){this.dockMainWrapper=void 0;return}for(;this.dockMainWrapper.firstChild;)this.host.insertBefore(this.dockMainWrapper.firstChild,this.dockMainWrapper);this.dockMainWrapper.remove(),this.dockMainWrapper=void 0}clearHostLayoutClasses(){this.host.classList.remove("ml-ex-ui-host-dock","ml-ex-ui-host-dock-top","ml-ex-ui-host-dock-bottom","ml-ex-ui-host-dock-left","ml-ex-ui-host-dock-right","ml-ex-ui-host-dock-sheet")}mountToHost(){if(this.ensureDockMainWrapper(),this.root.isConnected&&this.root.remove(),this.side==="left"||this.side==="top"){this.host.insertBefore(this.root,this.host.firstChild);return}this.host.appendChild(this.root)}applyLayoutState(){const e=this.usesPhoneSheet();this.root.dataset.side=this.side,this.root.dataset.open=String(this.isPanelOpen),this.root.dataset.phoneSheet=String(e),this.host.classList.remove("ml-ex-ui-host-dock-top","ml-ex-ui-host-dock-bottom","ml-ex-ui-host-dock-left","ml-ex-ui-host-dock-right","ml-ex-ui-host-dock-sheet"),this.isPanelOpen&&this.host.classList.add(e?"ml-ex-ui-host-dock-sheet":`ml-ex-ui-host-dock-${this.side}`),e?this.syncPhoneSheetInset():this.root.style.removeProperty("--ml-ex-ui-phone-sheet-inset"),this.root.style.setProperty("--ml-ex-ui-dock-size",`${this.size}px`),this.scheduleUpdateTabOverflow()}setSize(e){const t=this.getMaxSize();this.size=Math.max(ie,Math.min(t,e)),this.root.style.setProperty("--ml-ex-ui-dock-size",`${this.size}px`),this.scheduleUpdateTabOverflow()}getMaxSize(){if(this.usesPhoneSheet()||this.side==="bottom"||this.side==="top"){const e=this.usesPhoneSheet()?this.host.clientHeight-this.getPhoneChromeInset():this.host.clientHeight;return Math.max(ie,e*De)}return Math.max(ie,this.host.clientWidth*De)}usesPhoneSheet(){return ut()}usesVerticalResize(){return this.usesPhoneSheet()||this.side==="bottom"||this.side==="top"}bindMobileMediaQuery(){typeof window.matchMedia=="function"&&(this.mobileMediaQuery=window.matchMedia(ht),this.mobileMediaQuery.addEventListener("change",this.handleMobileMediaChange))}unbindMobileMediaQuery(){var e;(e=this.mobileMediaQuery)==null||e.removeEventListener("change",this.handleMobileMediaChange),this.mobileMediaQuery=void 0}syncPhoneSheetInset(){this.root.style.setProperty("--ml-ex-ui-phone-sheet-inset",`${this.getPhoneChromeInset()}px`)}getPhoneChromeInset(){let e=0;const t=this.host.querySelector(".ml-ex-ui-toolbar");return t instanceof HTMLElement&&this.isElementVisible(t)&&(e+=t.offsetHeight),this.host.querySelectorAll(".ml-ex-ui-subtoolbar").forEach(a=>{a instanceof HTMLElement&&this.isElementVisible(a)&&(e+=a.offsetHeight)}),e}isElementVisible(e){return e.hidden?!1:e.offsetParent!==null||e.getClientRects().length>0}toggleSideMenu(){if(this.sideMenuRoot){this.closeSideMenu();return}this.closeOverflowMenu(),this.openSideMenu()}openSideMenu(){this.sideMenuRoot=document.createElement("div"),this.sideMenuRoot.className="ml-ex-ui-dock-side-menu",this.sideMenuRoot.setAttribute("role","menu"),this.renderSideMenuItems();const e=this.sideMenuButton.getBoundingClientRect();this.host.appendChild(this.sideMenuRoot),this.sideMenuRoot.style.top=`${e.bottom+4}px`,this.sideMenuRoot.style.left=`${Math.max(8,e.right-160)}px`,this.syncOutsidePointerListener()}renderSideMenuItems(){this.sideMenuRoot&&(this.sideMenuRoot.replaceChildren(),[{side:"top",labelKey:"dockPanel.dockTop",icon:Re},{side:"bottom",labelKey:"dockPanel.dockBottom",icon:Be},{side:"left",labelKey:"dockPanel.dockLeft",icon:Ve},{side:"right",labelKey:"dockPanel.dockRight",icon:Ue}].forEach(e=>{const t=document.createElement("button");t.type="button",t.className="ml-ex-ui-dock-side-menu-item",t.setAttribute("role","menuitem"),e.side===this.side&&t.classList.add("is-selected"),t.appendChild(G(e.icon));const a=document.createElement("span");a.textContent=this.i18n.t(e.labelKey),t.appendChild(a),t.addEventListener("click",o=>{o.stopPropagation(),this.setSide(e.side),this.closeSideMenu()}),this.sideMenuRoot.appendChild(t)}))}closeSideMenu(){var e;(e=this.sideMenuRoot)==null||e.remove(),this.sideMenuRoot=void 0,this.syncOutsidePointerListener()}syncOutsidePointerListener(){document.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),(this.sideMenuRoot||this.overflowMenuRoot)&&document.addEventListener("pointerdown",this.handleDocumentPointerDown,!0)}scheduleUpdateTabOverflow(){this.tabOverflowFrame===void 0&&(this.tabOverflowFrame=requestAnimationFrame(()=>{this.tabOverflowFrame=void 0,this.updateTabOverflow()}))}updateTabOverflow(){const e=Array.from(this.tabs.values());if(e.length===0){this.overflowButton.hidden=!0,this.overflowTabIds=[];return}this.overflowButton.hidden=!0,e.forEach(s=>{s.tabButton.hidden=!1});const t=this.tabsWrap.clientWidth;if(t<=0)return;if(e.reduce((s,c)=>s+c.tabButton.offsetWidth,0)<=t){this.overflowTabIds=[],this.overflowButton.hidden=!0,this.overflowButton.classList.remove("is-active"),this.overflowMenuRoot&&this.closeOverflowMenu();return}const a=this.activeTabId??e[0].id,o=t-ko,r=new Set(e.map(s=>s.id)),l=new Set,n=()=>e.filter(s=>r.has(s.id)).reduce((s,c)=>s+c.tabButton.offsetWidth,0);for(;r.size>1&&n()>o;){let s;for(let c=e.length-1;c>=0;c-=1){const d=e[c].id;if(!(d===a||!r.has(d))){s=d;break}}if(!s)break;r.delete(s),l.add(s)}if(!r.has(a))for(l.delete(a),r.add(a);r.size>1&&n()>o;){let s;for(let c=e.length-1;c>=0;c-=1){const d=e[c].id;if(!(d===a||!r.has(d))){s=d;break}}if(!s)break;r.delete(s),l.add(s)}e.forEach(s=>{s.tabButton.hidden=l.has(s.id)}),this.overflowTabIds=e.filter(s=>l.has(s.id)).map(s=>s.id),this.overflowButton.hidden=this.overflowTabIds.length===0,this.overflowButton.classList.toggle("is-active",this.overflowTabIds.includes(a)),this.overflowMenuRoot&&this.overflowTabIds.length===0?this.closeOverflowMenu():this.overflowMenuRoot&&this.renderOverflowMenuItems()}getTabLabel(e){return e.label?e.label:e.labelKey?this.i18n.t(e.labelKey):""}toggleOverflowMenu(){if(this.overflowMenuRoot){this.closeOverflowMenu();return}this.closeSideMenu(),this.openOverflowMenu()}openOverflowMenu(){if(this.overflowTabIds.length===0)return;this.overflowMenuRoot=document.createElement("div"),this.overflowMenuRoot.className="ml-ex-ui-dock-tab-overflow-menu",this.overflowMenuRoot.setAttribute("role","menu"),this.renderOverflowMenuItems();const e=this.overflowButton.getBoundingClientRect();this.host.appendChild(this.overflowMenuRoot),this.overflowMenuRoot.style.top=`${e.bottom+4}px`,this.overflowMenuRoot.style.left=`${Math.max(8,e.right-180)}px`,this.syncOutsidePointerListener()}renderOverflowMenuItems(){this.overflowMenuRoot&&(this.overflowMenuRoot.replaceChildren(),this.overflowTabIds.forEach(e=>{const t=this.tabs.get(e);if(!t)return;const a=document.createElement("button");a.type="button",a.className="ml-ex-ui-dock-tab-overflow-menu-item",a.setAttribute("role","menuitem"),e===this.activeTabId&&a.classList.add("is-selected"),a.textContent=this.getTabLabel(t),a.addEventListener("click",o=>{o.stopPropagation(),this.openPanel(e),this.closeOverflowMenu()}),this.overflowMenuRoot.appendChild(a)}))}closeOverflowMenu(){var e;(e=this.overflowMenuRoot)==null||e.remove(),this.overflowMenuRoot=void 0,this.syncOutsidePointerListener()}}class Po{constructor(e){this.result={hits:[],truncated:!1},this.activeIndex=-1,this.searchState="idle",this.navigationNote="",this.editor=e.editor,this.i18n=e.i18n,A(),this.element=document.createElement("div"),this.element.className="ml-ex-ui-find-palette",this.buildDom(),this.refreshLocale()}refreshLocale(){this.inputEl.placeholder=this.i18n.t("findPalette.placeholder"),this.inputEl.setAttribute("aria-label",this.i18n.t("findPalette.input")),this.findButton.textContent=this.i18n.t("findPalette.find"),this.matchCaseLabelEl.lastChild.textContent=this.i18n.t("findPalette.matchCase"),this.layoutOnlyLabelEl.lastChild.textContent=this.i18n.t("findPalette.currentLayoutOnly"),this.renderResults()}focus(){this.inputEl.focus(),this.inputEl.select()}search(e,t=this.matchCaseEl.checked,a=this.scope){this.inputEl.value=e,this.matchCaseEl.checked=t,this.layoutOnlyEl.checked=a==="layout",this.runSearch()}get hits(){return this.result.hits}get scope(){return this.layoutOnlyEl.checked?"layout":"drawing"}destroy(){this.result={hits:[],truncated:!1}}buildDom(){const e=document.createElement("div");e.className="ml-ex-ui-find-form",this.inputEl=document.createElement("input"),this.inputEl.type="search",this.inputEl.className="ml-ex-ui-find-input",this.inputEl.autocomplete="off",this.inputEl.spellcheck=!1,this.inputEl.addEventListener("keydown",t=>{t.key==="Enter"&&(t.preventDefault(),this.handleEnter(t.shiftKey))}),this.inputEl.addEventListener("keyup",t=>t.stopPropagation()),this.findButton=document.createElement("button"),this.findButton.type="button",this.findButton.className="ml-ex-ui-measure-btn ml-ex-ui-find-btn",this.findButton.addEventListener("click",()=>{this.runSearch(),this.result.hits.length>0&&this.navigateTo(0)}),e.append(this.inputEl,this.findButton),this.matchCaseLabelEl=document.createElement("label"),this.matchCaseLabelEl.className="ml-ex-ui-find-option",this.matchCaseEl=document.createElement("input"),this.matchCaseEl.type="checkbox",this.matchCaseEl.addEventListener("change",()=>{this.searched&&this.runSearch()}),this.matchCaseLabelEl.append(this.matchCaseEl,document.createTextNode("")),this.layoutOnlyLabelEl=document.createElement("label"),this.layoutOnlyLabelEl.className="ml-ex-ui-find-option",this.layoutOnlyEl=document.createElement("input"),this.layoutOnlyEl.type="checkbox",this.layoutOnlyEl.dataset.findScope="layout",this.layoutOnlyEl.addEventListener("change",()=>{this.searched?this.runSearch():this.renderResults()}),this.layoutOnlyLabelEl.append(this.layoutOnlyEl,document.createTextNode("")),this.statusEl=document.createElement("div"),this.statusEl.className="ml-ex-ui-find-status",this.statusEl.setAttribute("role","status"),this.statusEl.setAttribute("aria-live","polite"),this.listEl=document.createElement("ul"),this.listEl.className="ml-ex-ui-find-list",this.listEl.addEventListener("click",t=>{const a=t.target;if(!(a instanceof Element))return;const o=a.closest("li[data-find-index]");!(o instanceof HTMLElement)||!this.listEl.contains(o)||this.navigateTo(Number(o.dataset.findIndex))}),this.element.append(e,this.matchCaseLabelEl,this.layoutOnlyLabelEl,this.statusEl,this.listEl)}handleEnter(e){const t=this.inputEl.value;if(!(this.searched&&this.searched.query===t&&this.searched.matchCase===this.matchCaseEl.checked&&this.searched.scope===this.scope)||this.result.hits.length===0){this.runSearch(),this.result.hits.length>0&&this.navigateTo(0);return}const a=this.result.hits.length,o=this.activeIndex<0?0:(this.activeIndex+(e?a-1:1))%a;this.navigateTo(o)}runSearch(){var e;const t=this.editor.curView,a=(e=this.editor.curDocument)==null?void 0:e.database,o=this.inputEl.value;if(this.activeIndex=-1,this.navigationNote="",!t||!a||!o.trim()){this.result={hits:[],truncated:!1},this.searched=void 0,this.searchState=t&&a?"idle":"no-document",this.renderResults();return}const r=t.activeLayoutBtrId,l=this.matchCaseEl.checked,n=this.scope;this.result=Ea(a,o,{matchCase:l,scope:n,currentLayoutId:r}),this.searched={query:o,matchCase:l,scope:n,layoutId:r},this.searchState="done",this.renderResults()}renderResults(){var e,t;this.listEl.replaceChildren();const a=this.result.hits;if(this.searchState==="no-document"){this.statusEl.textContent=this.i18n.t("findPalette.noDocument");return}if(this.searchState==="idle"){this.statusEl.textContent=this.i18n.t(this.scope==="layout"?"findPalette.hintLayout":"findPalette.hint");return}if(a.length===0){this.statusEl.textContent=this.i18n.t("findPalette.noResults");return}const o=new Set(a.map(s=>s.layoutId)).size,r=this.result.truncated?"findPalette.countTruncated":o>1?"findPalette.countLayouts":"findPalette.count";this.statusEl.textContent=this.i18n.t(r,{count:String(a.length),layouts:String(o)})+(this.navigationNote?` — ${this.navigationNote}`:"");const l=((e=this.searched)==null?void 0:e.query)??"",n=((t=this.searched)==null?void 0:t.matchCase)??!1;a.forEach((s,c)=>{const d=document.createElement("li");d.className="ml-ex-ui-find-row",d.dataset.findIndex=String(c),d.tabIndex=0,d.addEventListener("keydown",P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),this.navigateTo(c))}),c===this.activeIndex&&d.classList.add("is-selected");const h=document.createElement("div");h.className="ml-ex-ui-find-layout",h.dataset.layoutId=s.layoutId;const b=this.layoutLabel(s.layoutName);h.textContent=b,h.title=b;const m=document.createElement("div");m.className="ml-ex-ui-find-text",m.textContent=wa(s.text,l,n),m.title=s.text;const f=document.createElement("div");f.className="ml-ex-ui-find-meta",f.textContent=this.describeHit(s),d.append(h,m,f),this.listEl.appendChild(d)})}layoutLabel(e){return e.trim()?e:this.i18n.t("findPalette.unnamedLayout")}describeHit(e){let t=this.i18n.t(`findPalette.kind.${e.kind}`);if(e.kind==="attribute"||e.kind==="block"&&e.tag){const o=[e.blockName,e.tag].filter(Boolean).join(" / ");o&&(t=`${t} ${o}`)}const a=`(${Ae(e.position.x)}, ${Ae(e.position.y)})`;return`${t} · ${e.layer} · ${a}`}dockInsets(){var e;const t=(e=this.editor.curView)==null?void 0:e.canvas,a=this.element.closest(".ml-ex-ui-dock-panel");if(!t||!a||a.dataset.open==="false")return;const o=t.getBoundingClientRect(),r=a.getBoundingClientRect(),l=r.right>o.left&&r.left<o.right,n=r.bottom>o.top&&r.top<o.bottom;if(!l||!n||r.width===0||r.height===0)return;switch(a.dataset.side){case"left":return{left:Math.min(o.width,Math.max(0,r.right-o.left))};case"right":return{right:Math.min(o.width,Math.max(0,o.right-r.left))};case"top":return{top:Math.min(o.height,Math.max(0,r.bottom-o.top))};case"bottom":return{bottom:Math.min(o.height,Math.max(0,o.bottom-r.top))}}const s=Math.max(0,Math.min(o.width,r.right-o.left)),c=Math.max(0,Math.min(o.width,o.right-r.left)),d=Math.max(0,Math.min(o.height,r.bottom-o.top)),h=Math.max(0,Math.min(o.height,o.bottom-r.top)),b=Math.max(s,c,d,h);if(!(b<=0))return b===s?{left:s}:b===c?{right:c}:b===d?{top:d}:{bottom:h}}navigateTo(e){var t;const a=this.editor.curView,o=(t=this.editor.curDocument)==null?void 0:t.database,r=this.result.hits[e];if(!(!a||!o||!r||!this.searched)){if(this.searched.scope==="layout"&&a.activeLayoutBtrId!==this.searched.layoutId){this.runSearch();return}this.activeIndex=e,this.navigationNote="",this.listEl.querySelectorAll("li[data-find-index]").forEach(l=>{var n;const s=Number(l.dataset.findIndex)===e;l.classList.toggle("is-selected",s),s&&((n=l.scrollIntoView)==null||n.call(l,{block:"nearest"}))}),Pt(this.editor,r,{insets:this.dockInsets()}).then(l=>{l!=="layout-missing"&&l!=="layout-switch-failed"&&l!=="layout-mismatch"||(this.navigationNote=this.i18n.t("findPalette.layoutUnavailable",{layout:this.layoutLabel(r.layoutName)}),this.renderResults())})}}}function Ae(i){return String(Math.round(i*100)/100)}class wo{constructor(e,t,a){this.i18n=e,A(),this.backdrop=document.createElement("div"),this.backdrop.className="ml-ex-ui-color-dialog-backdrop",this.backdrop.addEventListener("mousedown",h=>{h.target===this.backdrop&&this.finish(null)});const o=document.createElement("div");o.className="ml-ex-ui-color-dialog",o.addEventListener("mousedown",h=>h.stopPropagation());const r=document.createElement("div");r.className="ml-ex-ui-color-dialog-header";const l=document.createElement("div");l.className="ml-ex-ui-color-dialog-title",l.textContent=this.i18n.t("colorPicker.title");const n=document.createElement("button");n.type="button",n.className="ml-ex-ui-color-dialog-close",n.setAttribute("aria-label","Close"),n.textContent="×",n.addEventListener("click",()=>this.finish(null)),r.appendChild(l),r.appendChild(n),o.appendChild(r),this.picker=Mt({labels:{index:this.i18n.t("colorPicker.index"),rgb:this.i18n.t("colorPicker.rgb"),input:this.i18n.t("colorPicker.input"),inputPlaceholder:this.i18n.t("colorPicker.inputPlaceholder")},initialIndex:this.toColorIndex(a)}),o.appendChild(this.picker.root);const s=document.createElement("div");s.className="ml-ex-ui-dialog-actions";const c=document.createElement("button");c.type="button",c.className="ml-ex-ui-btn",c.textContent=this.i18n.t("colorPicker.cancel"),c.addEventListener("click",()=>this.finish(null));const d=document.createElement("button");d.type="button",d.className="ml-ex-ui-btn ml-ex-ui-btn-primary",d.textContent=this.i18n.t("colorPicker.ok"),d.addEventListener("click",()=>this.finish(this.toSelectedColor())),s.appendChild(c),s.appendChild(d),o.appendChild(s),this.backdrop.appendChild(o),t.appendChild(this.backdrop)}open(){return new Promise(e=>{this.resolve=e})}finish(e){var t;this.picker.dispose(),this.backdrop.remove(),(t=this.resolve)==null||t.call(this,e),this.resolve=void 0}toColorIndex(e){return e?e.isByLayer?256:e.isByBlock?0:e.isByACI&&e.colorIndex!=null?e.colorIndex:null:null}toSelectedColor(){const e=this.picker.getIndex();if(e==null)return null;if(e===256){const t=new Z;return t.setByLayer(),t}if(e===0){const t=new Z;return t.setByBlock(),t}return new Z(Tt.ByACI,e)}}class Co{constructor(e){if(this.nameSortOrder="none",this.handleDocumentActivated=()=>{this.bindToActiveDocument(),this.renderRows()},this.handleLayersChanged=()=>{this.renderRows()},this.editor=e.editor,this.i18n=e.i18n,this.host=e.host,this.showHeader=e.showHeader??!1,A(),this.element=document.createElement("div"),this.element.className="ml-ex-ui-layer-list",this.showHeader){const f=document.createElement("div");f.className="ml-ex-ui-layer-manager-header";const P=document.createElement("span");this.titleEl=P,P.textContent=e.i18n.t("layerManager.title"),f.appendChild(P),this.element.appendChild(f)}const t=document.createElement("div");t.className="ml-ex-ui-layer-table-wrap";const a=document.createElement("table");a.className="ml-ex-ui-layer-table";const o=document.createElement("thead"),r=document.createElement("tr"),l=document.createElement("th");this.nameHeaderEl=l,l.className="ml-ex-ui-layer-name-header is-sortable",l.setAttribute("role","columnheader"),l.setAttribute("aria-sort","none");const n=document.createElement("button");n.type="button",n.className="ml-ex-ui-layer-name-sort";const s=document.createElement("span");this.nameHeaderLabelEl=s,s.textContent=e.i18n.t("layerManager.name");const c=document.createElement("span");this.nameSortIndicatorEl=c,c.className="ml-ex-ui-layer-sort-indicator",c.setAttribute("aria-hidden","true"),n.appendChild(s),n.appendChild(c),n.addEventListener("click",()=>{this.cycleNameSortOrder()}),l.appendChild(n),this.updateNameSortHeader();const d=document.createElement("th");d.className="center";const h=document.createElement("div");h.className="ml-ex-ui-layer-header-on";const b=document.createElement("span");this.onLabelEl=b,b.textContent=e.i18n.t("layerManager.on"),this.masterCheckbox=document.createElement("input"),this.masterCheckbox.type="checkbox",this.masterCheckbox.addEventListener("change",()=>{const f=this.activeLayerStore;f&&(this.masterCheckbox.checked?f.setAllLayersOn():f.setAllLayersOffExceptCurrent())}),h.appendChild(b),h.appendChild(this.masterCheckbox),d.appendChild(h);const m=document.createElement("th");m.className="center",this.colorHeaderEl=m,m.textContent=e.i18n.t("layerManager.color"),r.appendChild(l),r.appendChild(d),r.appendChild(m),o.appendChild(r),this.tbody=document.createElement("tbody"),a.appendChild(o),a.appendChild(this.tbody),t.appendChild(a),this.element.appendChild(t),this.editor.events.documentActivated.addEventListener(this.handleDocumentActivated),this.bindToActiveDocument(),this.renderRows()}get activeLayerStore(){var e;return(e=this.editor.curDocument)==null?void 0:e.layerStore}bindToActiveDocument(){this.subscribedLayerStore&&this.subscribedLayerStore.events.changed.removeEventListener(this.handleLayersChanged),this.subscribedLayerStore=this.activeLayerStore,this.subscribedLayerStore&&this.subscribedLayerStore.events.changed.addEventListener(this.handleLayersChanged)}refreshLocale(){this.titleEl&&(this.titleEl.textContent=this.i18n.t("layerManager.title")),this.nameHeaderLabelEl.textContent=this.i18n.t("layerManager.name"),this.onLabelEl.textContent=this.i18n.t("layerManager.on"),this.colorHeaderEl.textContent=this.i18n.t("layerManager.color"),this.updateNameSortHeader()}cycleNameSortOrder(){this.nameSortOrder==="none"?this.nameSortOrder="asc":this.nameSortOrder==="asc"?this.nameSortOrder="desc":this.nameSortOrder="none",this.updateNameSortHeader(),this.renderRows()}updateNameSortHeader(){var e;const t=this.nameSortOrder==="asc"?"layerManager.sortByNameDesc":this.nameSortOrder==="desc"?"layerManager.sortByNameNone":"layerManager.sortByNameAsc",a=this.i18n.t(t);this.nameHeaderEl.title=a,(e=this.nameHeaderEl.querySelector("button"))==null||e.setAttribute("aria-label",a),this.nameHeaderEl.setAttribute("aria-sort",this.nameSortOrder==="asc"?"ascending":this.nameSortOrder==="desc"?"descending":"none"),this.nameHeaderEl.classList.toggle("is-sorted-asc",this.nameSortOrder==="asc"),this.nameHeaderEl.classList.toggle("is-sorted-desc",this.nameSortOrder==="desc"),this.nameSortIndicatorEl.textContent=this.nameSortOrder==="asc"?"▲":this.nameSortOrder==="desc"?"▼":""}getSortedLayers(e){if(this.nameSortOrder==="none")return e;const t=this.nameSortOrder==="asc"?1:-1;return[...e].sort((a,o)=>t*a.name.localeCompare(o.name,void 0,{numeric:!0,sensitivity:"base"}))}destroy(){this.editor.events.documentActivated.removeEventListener(this.handleDocumentActivated),this.subscribedLayerStore&&this.subscribedLayerStore.events.changed.removeEventListener(this.handleLayersChanged)}renderRows(){const e=this.activeLayerStore;if(this.tbody.replaceChildren(),!e){this.masterCheckbox.checked=!1,this.masterCheckbox.indeterminate=!1;return}const t=this.getSortedLayers(e.getLayers()),a=e.getCurrentLayerName();t.forEach(l=>{this.tbody.appendChild(this.createRow(l,a))});const o=t.length>0&&t.every(l=>l.isOn),r=t.some(l=>l.isOn);this.masterCheckbox.checked=o,this.masterCheckbox.indeterminate=r&&!o}createRow(e,t){const a=document.createElement("tr");a.addEventListener("dblclick",()=>{var d;(d=y.instance.curView)!=null&&d.zoomToFitLayer(e.name)&&this.showToast(this.i18n.t("layerManager.zoomToLayer",{layer:e.name}))});const o=document.createElement("td"),r=document.createElement("span");if(r.className="ml-ex-ui-layer-name",r.textContent=e.name,e.name===t){const d=document.createElement("span");d.className="ml-ex-ui-layer-current-marker",d.textContent="*",d.title=this.i18n.t("layerManager.currentLayer"),d.setAttribute("aria-hidden","true"),r.appendChild(d)}o.appendChild(r);const l=document.createElement("td");l.className="center";const n=document.createElement("input");n.type="checkbox",n.checked=e.isOn,n.addEventListener("change",()=>{var d;(d=this.activeLayerStore)==null||d.setLayerOn(e.name,n.checked)}),l.appendChild(n);const s=document.createElement("td");s.className="center";const c=document.createElement("span");return c.className="ml-ex-ui-layer-color",c.style.background=e.cssColor,c.addEventListener("click",async()=>{var d;const h=Z.fromString(e.color),b=await new wo(this.i18n,this.host,h??void 0).open();b&&((d=this.activeLayerStore)==null||d.setLayerColor(e.name,b))}),s.appendChild(c),a.appendChild(o),a.appendChild(l),a.appendChild(s),a}showToast(e){const t=document.createElement("div");t.className="ml-ex-ui-toast",t.textContent=e,document.body.appendChild(t),window.setTimeout(()=>t.remove(),1500)}}const Eo=["distance","arc","angle","area"];class Mo{constructor(e){this.filterButtons=new Map,this.measurements=[],this.tableContentKey="",this.editor=e.editor,this.i18n=e.i18n,A(),this.element=document.createElement("div"),this.element.className="ml-ex-ui-measure-palette",this.buildDom(),this.refreshLocale(),this.unsubscribeList=bt(()=>this.syncFromStore()),this.unsubscribeSelection=ft(()=>this.syncFromStore()),this.syncFromStore()}refreshLocale(){this.filterGroup.setAttribute("aria-label",this.i18n.t("measurePalette.filterGroup"));for(const[e,t]of this.filterButtons){const a=this.i18n.t(`measurePalette.typeValues.${e}`);t.textContent=a,t.title=a,t.setAttribute("aria-label",a)}this.clearButton.textContent=this.i18n.t("measurePalette.clear"),this.typeHeaderEl.textContent=this.i18n.t("measurePalette.type"),this.valueHeaderEl.textContent=this.i18n.t("measurePalette.value"),this.renderTable()}destroy(){var e,t;(e=this.unsubscribeList)==null||e.call(this),this.unsubscribeList=void 0,(t=this.unsubscribeSelection)==null||t.call(this),this.unsubscribeSelection=void 0}buildDom(){const e=document.createElement("div");e.className="ml-ex-ui-measure-toolbar",this.filterGroup=document.createElement("div"),this.filterGroup.className="ml-ex-ui-measure-filter",this.filterGroup.setAttribute("role","group");for(const l of Eo){const n=document.createElement("button");n.type="button",n.className="ml-ex-ui-measure-filter-btn",n.dataset.measureFilter=l,n.setAttribute("aria-pressed","false"),n.addEventListener("click",()=>this.toggleFilter(l)),this.filterButtons.set(l,n),this.filterGroup.appendChild(n)}e.appendChild(this.filterGroup),this.clearButton=document.createElement("button"),this.clearButton.type="button",this.clearButton.className="ml-ex-ui-measure-btn",this.clearButton.addEventListener("click",()=>this.clearAll()),e.appendChild(this.clearButton),this.element.appendChild(e);const t=document.createElement("div");t.className="ml-ex-ui-measure-table-wrap";const a=document.createElement("table");a.className="ml-ex-ui-measure-table";const o=document.createElement("thead"),r=document.createElement("tr");this.typeHeaderEl=document.createElement("th"),this.valueHeaderEl=document.createElement("th"),this.actionsHeaderEl=document.createElement("th"),this.actionsHeaderEl.className="ml-ex-ui-measure-actions-col",r.append(this.typeHeaderEl,this.valueHeaderEl,this.actionsHeaderEl),o.appendChild(r),a.appendChild(o),this.tbody=document.createElement("tbody"),this.tbody.addEventListener("click",l=>{const n=l.target;if(!(n instanceof Element))return;const s=n.closest("button[data-measure-delete]");if(s instanceof HTMLElement&&this.tbody.contains(s)){l.stopPropagation();const d=s.dataset.measureDelete;d&&this.removeOne(d);return}const c=this.rowMeasurementId(l);c&&this.handleRowClick(c)}),a.appendChild(this.tbody),t.appendChild(a),this.element.appendChild(t)}syncFromStore(){const e=this.editor.curView;this.measurements=e?vt(e):[],this.selectedId=xt(),this.clearButton.disabled=this.measurements.length===0,this.refreshTable()}rowMeasurementId(e){const t=e.target;if(!(t instanceof Element))return;const a=t.closest("tr[data-measure-id]");if(!(!a||!this.tbody.contains(a)))return a instanceof HTMLElement?a.dataset.measureId:void 0}refreshTable(){var e;const t=(e=this.editor.curDocument)==null?void 0:e.database,a=this.measurements.map(o=>`${o.id}	${o.type}	${fe(o.id,t)}`).join(`
`);if(a===this.tableContentKey&&this.tbody.querySelector("tr[data-measure-id], .ml-ex-ui-measure-empty-row")){this.syncRowSelection();return}this.tableContentKey=a,this.renderTable()}syncRowSelection(){this.tbody.querySelectorAll("tr[data-measure-id]").forEach(e=>{e.classList.toggle("is-selected",e.dataset.measureId===this.selectedId)})}renderTable(){var e;const t=this.filteredMeasurements(),a=(e=this.editor.curDocument)==null?void 0:e.database;if(this.tbody.replaceChildren(),t.length===0){const r=document.createElement("tr");r.className="ml-ex-ui-measure-empty-row";const l=document.createElement("td");l.colSpan=3,l.textContent=this.i18n.t("measurePalette.empty"),r.appendChild(l),this.tbody.appendChild(r);return}const o=this.i18n.t("measurePalette.delete");for(const r of t){const l=document.createElement("tr");l.className="ml-ex-ui-measure-row",l.dataset.measureId=r.id,r.id===this.selectedId&&l.classList.add("is-selected");const n=document.createElement("td");n.textContent=this.typeLabel(r.type);const s=document.createElement("td"),c=fe(r.id,a)||"—";s.textContent=c,s.title=c;const d=document.createElement("td");d.className="ml-ex-ui-measure-actions-col";const h=document.createElement("button");h.type="button",h.className="ml-ex-ui-measure-btn ml-ex-ui-measure-btn-danger ml-ex-ui-measure-row-delete",h.dataset.measureDelete=r.id,h.textContent=o,h.title=o,h.setAttribute("aria-label",o),d.appendChild(h),l.append(n,s,d),this.tbody.appendChild(l)}}filteredMeasurements(){return this.activeFilter?this.measurements.filter(e=>e.type===this.activeFilter):this.measurements}toggleFilter(e){this.activeFilter=this.activeFilter===e?void 0:e;for(const[t,a]of this.filterButtons){const o=this.activeFilter===t;a.classList.toggle("is-active",o),a.setAttribute("aria-pressed",String(o))}this.renderTable()}handleRowClick(e){const t=this.measurements.find(o=>o.id===e),a=this.editor.curView;!t||!a||yt(a,t)}removeOne(e){const t=this.editor.curView;t&&kt(t,e)}clearAll(){const e=this.editor.curView;e&&gt(e)}typeLabel(e){const t=`measurePalette.typeValues.${e}`,a=this.i18n.t(t);return a===t?e:a}}class To{constructor(e){this.markups=[],this.tableContentKey="",this.detailsOpen=!0,this.editor=e.editor,this.i18n=e.i18n,A(),this.element=document.createElement("div"),this.element.className="ml-ex-ui-review-palette",this.buildDom(),this.refreshLocale(),this.unsubscribeStore=ae().subscribe(()=>{this.syncFromStore()}),this.syncFromStore()}refreshLocale(){this.searchInput.placeholder=this.i18n.t("reviewPalette.searchPlaceholder"),this.clearButton.textContent=this.i18n.t("reviewPalette.clear"),this.typeHeaderEl.textContent=this.i18n.t("reviewPalette.type"),this.statusHeaderEl.textContent=this.i18n.t("reviewPalette.status"),this.authorHeaderEl.textContent=this.i18n.t("reviewPalette.author"),this.summaryHeaderEl.textContent=this.i18n.t("reviewPalette.summary"),this.detailTitleEl.textContent=this.i18n.t("reviewPalette.details");const e=this.i18n.t("reviewPalette.closeDetails");this.closeDetailsButton.title=e,this.closeDetailsButton.setAttribute("aria-label",e),this.statusFieldLabelEl.textContent=this.i18n.t("reviewPalette.status"),this.authorFieldLabelEl.textContent=this.i18n.t("reviewPalette.author"),this.textFieldLabelEl.textContent=this.i18n.t("reviewPalette.label"),this.commentFieldLabelEl.textContent=this.i18n.t("reviewPalette.comment"),this.zoomButton.textContent=this.i18n.t("reviewPalette.zoomTo"),this.deleteButton.textContent=this.i18n.t("reviewPalette.delete"),this.rebuildStatusOptions(),this.renderTable(),this.updateDetailFields({preserveDrafts:!0})}destroy(){var e;(e=this.unsubscribeStore)==null||e.call(this),this.unsubscribeStore=void 0}buildDom(){const e=document.createElement("div");e.className="ml-ex-ui-review-toolbar",this.searchInput=document.createElement("input"),this.searchInput.type="search",this.searchInput.className="ml-ex-ui-review-search",this.searchInput.addEventListener("input",()=>this.renderTable()),e.appendChild(this.searchInput),this.clearButton=document.createElement("button"),this.clearButton.type="button",this.clearButton.className="ml-ex-ui-review-btn",this.clearButton.addEventListener("click",()=>this.clearAll()),e.appendChild(this.clearButton),this.element.appendChild(e);const t=document.createElement("div");t.className="ml-ex-ui-review-table-wrap";const a=document.createElement("table");a.className="ml-ex-ui-review-table";const o=document.createElement("thead"),r=document.createElement("tr");this.typeHeaderEl=document.createElement("th"),this.statusHeaderEl=document.createElement("th"),this.authorHeaderEl=document.createElement("th"),this.summaryHeaderEl=document.createElement("th"),r.append(this.typeHeaderEl,this.statusHeaderEl,this.authorHeaderEl,this.summaryHeaderEl),o.appendChild(r),a.appendChild(o),this.tbody=document.createElement("tbody"),this.tbody.addEventListener("click",m=>{const f=this.rowMarkupId(m);f&&this.handleRowClick(f)}),this.tbody.addEventListener("dblclick",m=>{const f=this.rowMarkupId(m);if(!f)return;const P=this.markups.find(L=>L.id===f);P&&this.handleRowDblClick(P)}),a.appendChild(this.tbody),t.appendChild(a),this.element.appendChild(t),this.detailEl=document.createElement("div"),this.detailEl.className="ml-ex-ui-review-detail",this.detailEl.hidden=!0;const l=document.createElement("div");l.className="ml-ex-ui-review-detail-header",this.detailTitleEl=document.createElement("div"),this.detailTitleEl.className="ml-ex-ui-review-detail-title",this.closeDetailsButton=document.createElement("button"),this.closeDetailsButton.type="button",this.closeDetailsButton.className="ml-ex-ui-review-detail-close",this.closeDetailsButton.appendChild(G(_e)),this.closeDetailsButton.addEventListener("click",()=>this.closeDetails()),l.append(this.detailTitleEl,this.closeDetailsButton),this.detailEl.appendChild(l);const n=document.createElement("div");n.className="ml-ex-ui-review-detail-form";const s=this.createField();this.statusFieldLabelEl=s.label,this.statusSelect=document.createElement("select"),this.statusSelect.className="ml-ex-ui-review-select",this.statusSelect.addEventListener("change",()=>{const m=this.selectedMarkup();m&&this.updateMeta(m.id,{status:this.statusSelect.value})}),s.body.appendChild(this.statusSelect),n.appendChild(s.root);const c=this.createField();this.authorFieldLabelEl=c.label,this.authorInput=document.createElement("input"),this.authorInput.type="text",this.authorInput.className="ml-ex-ui-review-input",this.authorInput.disabled=!0,c.body.appendChild(this.authorInput),n.appendChild(c.root);const d=this.createField();this.textFieldLabelEl=d.label,this.textInput=document.createElement("input"),this.textInput.type="text",this.textInput.className="ml-ex-ui-review-input",this.textInput.addEventListener("blur",()=>this.commitText()),this.textInput.addEventListener("keydown",m=>{m.key!=="Enter"||m.isComposing||m.keyCode===229||(m.preventDefault(),this.commitText(),this.textInput.blur())}),d.body.appendChild(this.textInput),n.appendChild(d.root);const h=this.createField();this.commentFieldLabelEl=h.label,this.commentInput=document.createElement("textarea"),this.commentInput.className="ml-ex-ui-review-textarea",this.commentInput.rows=2,this.commentInput.addEventListener("blur",()=>this.commitComment()),h.body.appendChild(this.commentInput),n.appendChild(h.root);const b=document.createElement("div");b.className="ml-ex-ui-review-detail-actions",this.zoomButton=document.createElement("button"),this.zoomButton.type="button",this.zoomButton.className="ml-ex-ui-review-btn",this.zoomButton.addEventListener("click",()=>{const m=this.selectedMarkup();m&&this.focusMarkup(m)}),this.deleteButton=document.createElement("button"),this.deleteButton.type="button",this.deleteButton.className="ml-ex-ui-review-btn ml-ex-ui-review-btn-danger",this.deleteButton.addEventListener("click",()=>{const m=this.selectedMarkup();m&&this.removeMarkup(m.id)}),b.append(this.zoomButton,this.deleteButton),n.appendChild(b),this.detailEl.appendChild(n),this.element.appendChild(this.detailEl)}createField(){const e=document.createElement("div");e.className="ml-ex-ui-review-field";const t=document.createElement("label");t.className="ml-ex-ui-review-field-label";const a=document.createElement("div");return a.className="ml-ex-ui-review-field-body",e.append(t,a),{root:e,label:t,body:a}}rebuildStatusOptions(){const e=this.statusSelect.value;this.statusSelect.replaceChildren();for(const t of mt){const a=document.createElement("option");a.value=t,a.textContent=this.statusLabel(t),this.statusSelect.appendChild(a)}e&&(this.statusSelect.value=e)}syncFromStore(){const e=ae(),t=this.lastSelectedId;this.markups=e.list(),this.selectedId=e.selectedId,t&&t!==this.selectedId&&this.commitDraftsFor(t),this.selectedId&&this.selectedId!==t&&(this.loadDrafts(),this.detailsOpen=!0),this.selectedId||(this.detailsOpen=!1),this.lastSelectedId=this.selectedId,this.clearButton.disabled=this.markups.length===0,this.refreshTable(),this.updateDetailFields({preserveDrafts:this.selectedId===t})}rowMarkupId(e){const t=e.target;if(!(t instanceof Element))return;const a=t.closest("tr[data-markup-id]");if(!(!a||!this.tbody.contains(a)))return a instanceof HTMLElement?a.dataset.markupId:void 0}refreshTable(){const e=this.markups.map(t=>`${t.id}	${t.type}	${t.status}	${t.author}	${t.text??""}	${t.comment}`).join(`
`);if(e===this.tableContentKey&&this.tbody.querySelector("tr[data-markup-id], .ml-ex-ui-review-empty-row")){this.syncRowSelection();return}this.tableContentKey=e,this.renderTable()}syncRowSelection(){this.tbody.querySelectorAll("tr[data-markup-id]").forEach(e=>{e.classList.toggle("is-selected",e.dataset.markupId===this.selectedId)})}renderTable(){const e=this.filteredMarkups();if(this.tbody.replaceChildren(),e.length===0){const t=document.createElement("tr");t.className="ml-ex-ui-review-empty-row";const a=document.createElement("td");a.colSpan=4,a.textContent=this.i18n.t("reviewPalette.empty"),t.appendChild(a),this.tbody.appendChild(t);return}for(const t of e){const a=document.createElement("tr");a.className="ml-ex-ui-review-row",a.dataset.markupId=t.id,t.id===this.selectedId&&a.classList.add("is-selected");const o=document.createElement("td");o.textContent=this.typeLabel(t.type);const r=document.createElement("td");r.textContent=this.statusLabel(t.status);const l=document.createElement("td");l.textContent=t.author,l.title=t.author;const n=document.createElement("td"),s=t.text||t.comment||"—";n.textContent=s,n.title=s,a.append(o,r,l,n),this.tbody.appendChild(a)}}updateDetailFields(e){const t=this.selectedMarkup(),a=!!(t&&this.detailsOpen);if(this.detailEl.hidden=!a,!(!t||!a)){if(this.statusSelect.value=t.status,this.authorInput.value=t.author,e.preserveDrafts){const o=document.activeElement;o!==this.textInput&&(this.textInput.value=t.text??""),o!==this.commentInput&&(this.commentInput.value=t.comment??"");return}this.loadDrafts()}}loadDrafts(){const e=this.selectedMarkup();this.textInput.value=(e==null?void 0:e.text)??"",this.commentInput.value=(e==null?void 0:e.comment)??"",this.authorInput.value=(e==null?void 0:e.author)??"",e&&(this.statusSelect.value=e.status)}filteredMarkups(){const e=this.searchInput.value.trim().toLowerCase();return e?this.markups.filter(t=>`${t.type} ${t.status} ${t.author} ${t.text??""} ${t.comment}`.toLowerCase().includes(e)):this.markups}selectedMarkup(){return this.markups.find(e=>e.id===this.selectedId)}handleRowClick(e){this.detailsOpen=!0;const t=this.editor.curView;t&&U().select(t,e),this.updateDetailFields({preserveDrafts:!0})}handleRowDblClick(e){this.handleRowClick(e.id),this.focusMarkup(e)}closeDetails(){this.commitText(),this.commitComment(),this.detailsOpen=!1,this.detailEl.hidden=!0}commitText(){const e=this.selectedId;if(!e)return;const t=this.markups.find(r=>r.id===e),a=this.textInput.value,o=(t==null?void 0:t.text)??"";a!==o&&this.updateMeta(e,{text:a})}commitComment(){const e=this.selectedId;if(!e)return;const t=this.markups.find(r=>r.id===e),a=this.commentInput.value,o=(t==null?void 0:t.comment)??"";a!==o&&this.updateMeta(e,{comment:a})}commitDraftsFor(e){const t=this.markups.find(l=>l.id===e);if(!t)return;const a=this.textInput.value,o=this.commentInput.value,r={};a!==(t.text??"")&&(r.text=a),o!==(t.comment??"")&&(r.comment=o),Object.keys(r).length!==0&&this.updateMeta(e,r)}updateMeta(e,t){const a=this.editor.curView;a&&pt(a,"Edit Markup",()=>{const o=ae().updateMeta(e,t);o&&(t.text!==void 0||t.comment!==void 0)&&U().publish(a,o)})}focusMarkup(e){const t=this.editor.curView;t&&U().focus(t,e)}removeMarkup(e){const t=this.editor.curView;t&&U().unpublish(t,e)}clearAll(){const e=this.editor.curView;e&&U().clearVisuals(e,{clearStore:!0})}statusLabel(e){return this.i18n.t(`reviewPalette.statusValues.${e}`)}typeLabel(e){const t=`reviewPalette.typeValues.${e}`,a=this.i18n.t(t);return a===t?e:a}}const O="layers",_="review",F="measurements",K="find";class Io{constructor(e={}){this.options=e,this.name=ro,this.version=Ta.version,this.description="Framework-agnostic toolbar, layer manager, and review palette UI",this.layerUiControllerHolder=new Sa,this.baseToolbarItems=[],this.toolbarItemsInput="default",this.toolbarItemsOverridden=!1,this.hasLayerToolbarItem=!1,this.hasMarkupPanelToolbarItem=!1,this.hasMeasurementPanelToolbarItem=!1,this.hasFindToolbarItem=!1,this.dockPanelExplicitlyEnabled=!1,this.toolbarPlacement="right",this.toolbarCollapsible=!1,this.toolbarEdgeOffset=8,this.toolbarSideOffset=0,this.toolbarInCanvasParent=!1,this.toolbarShowLabels=!1,this.toolbarShowChildrenIndicator=!0,this.toolbarShowBorder=!0,this.toolbarShowButtonBorder=!1,this.toolbarShowSeparators=!0,this.toolbarSize="auto",this.toolbarOverflow="menu",this.layoutMode="auto",this.activeLayoutKind="desktop",this.registeredCommands=[],this.handleLocaleChanged=()=>{var t,a,o,r,l,n;this.rebuildToolbarItems(this.activeLayoutKind),(t=this.toolbar)==null||t.setSelectedChild("locale",`locale-${T.currentLocale}`),(a=this.layerListView)==null||a.refreshLocale(),(o=this.reviewPaletteView)==null||o.refreshLocale(),(r=this.measurementPaletteView)==null||r.refreshLocale(),(l=this.findPaletteView)==null||l.refreshLocale(),(n=this.dockPanel)==null||n.refreshLocale(),this.toolbar&&(this.toolbar.updateItems(this.baseToolbarItems),this.toolbar.refreshLocale())},this.handleDocumentActivatedForDock=()=>{var t,a;this.hasLayerToolbarItem&&this.mountLayerDockUi(),this.hasMarkupPanelToolbarItem&&this.mountReviewDockUi(),this.hasMeasurementPanelToolbarItem&&this.mountMeasurementDockUi(),this.hasFindToolbarItem&&this.mountFindDockUi(),this.tryUpgradeDockMountTarget(),(t=this.dockPanel)==null||t.ensureMounted(),this.ensureViewerToolbar(),this.tryUpgradeToolbarMountTarget(),(a=this.toolbar)==null||a.syncInParentLayout()}}addDockPanelTab(e){return!e.labelKey&&!e.label||(this.ensureDockReady(),!this.dockPanel)||!this.dockPanel.addTab(e)?!1:(this.dockPanel.open(e.id),!0)}isDockPanelOpen(){var e;return((e=this.dockPanel)==null?void 0:e.isOpen)??!1}hasDockPanelTab(e){var t;return((t=this.dockPanel)==null?void 0:t.hasTab(e))??!1}toggleDockPanelTab(e){var t;return!((t=this.dockPanel)!=null&&t.hasTab(e))||(this.ensureDockReady(),!this.dockPanel)?!1:(this.dockPanel.toggle(e),!0)}setDockPanelOpen(e){return e?(this.ensureDockReady(),this.dockPanel?(this.dockPanel.open(),!0):(console.warn("[SimpleUiPlugin] setDockPanelOpen skipped: dock panel is unavailable."),!1)):(this.dockPanel&&this.dockPanel.close(),!0)}getDockPanelSide(){var e;return(e=this.dockPanel)==null?void 0:e.getSide()}getDockPanelSize(){var e;return(e=this.dockPanel)==null?void 0:e.getSize()}setDockPanelSize(e){return this.ensureDockReady(),this.dockPanel?(this.dockPanel.setPanelSize(e),!0):(console.warn("[SimpleUiPlugin] setDockPanelSize skipped: dock panel is unavailable."),!1)}getToolbarItems(){return this.toolbarItemsInput}setToolbarItems(e,t){if(!this.toolbar)return;this.toolbarItemsOverridden=!0,this.toolbarLayoutSwitcher=t,this.toolbarItemsInput=e;const a=this.resolveBaseToolbarItems(e);this.baseToolbarItems=t?Te(a,t):a,this.syncLayerToolbarItem(),this.syncReviewToolbarItem(),this.syncMeasurementToolbarItem(),this.syncFindToolbarItem(),this.renderToolbarItems()}getToolbarPlacement(){return this.toolbarPlacement}setToolbarPlacement(e){return this.toolbar?(this.applyToolbarPlacement(e),!0):(console.warn("[SimpleUiPlugin] setToolbarPlacement skipped: toolbar is unavailable."),!1)}isToolbarVisible(){var e;return((e=this.toolbar)==null?void 0:e.isVisible)??!1}setToolbarVisible(e){var t;return this.toolbar?(this.toolbar.setVisible(e),e||(t=this.dockPanel)==null||t.close(),!0):(console.warn("[SimpleUiPlugin] setToolbarVisible skipped: toolbar is unavailable."),!1)}isToolbarCollapsed(){var e;return((e=this.toolbar)==null?void 0:e.isCollapsed)??!1}setToolbarCollapsed(e){return this.toolbar?this.toolbarCollapsible?(this.toolbar.setCollapsed(e),!0):(console.warn("[SimpleUiPlugin] setToolbarCollapsed skipped: toolbar is not collapsible."),!1):(console.warn("[SimpleUiPlugin] setToolbarCollapsed skipped: toolbar is unavailable."),!1)}getToolbarEdgeOffset(){var e;return((e=this.toolbar)==null?void 0:e.getEdgeOffset())??this.toolbarEdgeOffset}getLayout(){return this.activeLayoutKind}setLayout(e){var t;return!this.toolbar&&e!==this.layoutMode?(this.layoutMode=e,!0):this.toolbar?(this.layoutMode=e,(t=this.unsubscribeLayout)==null||t.call(this),this.unsubscribeLayout=void 0,e==="auto"?(this.unsubscribeLayout=nt(a=>{a!==this.activeLayoutKind&&this.applyLayoutKind(a)}),this.applyLayoutKind(me())):this.applyLayoutKind(e),!0):!1}setToolbarEdgeOffset(e){return this.toolbar?(this.toolbarEdgeOffset=Math.max(0,e),this.toolbar.setEdgeOffset(this.toolbarEdgeOffset),!0):(console.warn("[SimpleUiPlugin] setToolbarEdgeOffset skipped: toolbar is unavailable."),!1)}onLoad(e,t){var a,o,r;fo(),this.commandManager=t,Q.instance.set("isShowRibbon",!1,{persist:!1});const l=Va(this.options),n=l.host??((a=y.instance.curView)==null?void 0:a.container)??document.body;this.hostEl=n,this.dockPanelMountTargetOption=(o=this.options.dockPanel)==null?void 0:o.mountTarget,this.toolbarMountTargetOption=(r=this.options.toolbar)==null?void 0:r.mountTarget,this.layoutMode=l.layout,this.dockPanelExplicitlyEnabled=l.dockPanel.enabled===!0,this.dockPanelDefaults={defaultOpen:l.dockPanel.defaultOpen??!1,defaultSide:l.dockPanel.defaultSide??"left",defaultHeight:l.dockPanel.defaultHeight??240,defaultWidth:l.dockPanel.defaultWidth??280},this.themeSync=new xo(n,()=>{var d;return(d=this.toolbar)==null?void 0:d.refresh()}),this.themeSync.start(),this.i18n=new vo,T.events.localeChanged.addEventListener(this.handleLocaleChanged),y.instance.events.documentActivated.addEventListener(this.handleDocumentActivatedForDock);const s=this.layoutMode==="auto"?me():this.layoutMode,c=this.isViewerToolbarEnabled();this.applyLayoutKind(s,{skipToolbarApply:!c}),l.shouldCreateDockPanel&&this.ensureDockPanel(),this.hasLayerToolbarItem&&(this.mountLayerDockUi(),this.ensureLayerCommandRegistered()),this.hasMarkupPanelToolbarItem&&(this.mountReviewDockUi(),this.ensureMarkupPanelCommandRegistered()),this.hasMeasurementPanelToolbarItem&&(this.mountMeasurementDockUi(),this.ensureMeasurementPanelCommandRegistered()),this.hasFindToolbarItem&&(this.mountFindDockUi(),this.ensureFindCommandRegistered()),this.ensureViewerToolbar(n)}isViewerToolbarEnabled(){var e;return((e=this.options.toolbar)==null?void 0:e.enabled)!==!1}ensureViewerToolbar(e){var t;if(!this.isViewerToolbarEnabled())return;if(this.toolbar){if(this.toolbar.isRootConnected())return;(t=this.toolbarDocUnbind)==null||t.call(this),this.toolbarDocUnbind=void 0,this.toolbar.destroy(),this.toolbar=void 0,this.toolbarMountEl=void 0}const a=e??this.hostEl;if(!a||!this.i18n)return;const o=this.getToolbarMountEl()??a;this.toolbarMountEl=o;const r=this.getMergedToolbarOptions(this.activeLayoutKind);try{this.toolbar=new st({host:o,themeHost:a,placement:this.toolbarPlacement,edgeOffset:this.toolbarEdgeOffset,sideOffset:this.toolbarSideOffset,items:this.baseToolbarItems,i18n:this.i18n,collapsible:this.toolbarCollapsible,defaultCollapsed:r.defaultCollapsed,showLabels:this.toolbarShowLabels,showChildrenIndicator:this.toolbarShowChildrenIndicator,size:this.toolbarSize,overflow:this.toolbarOverflow,showBorder:this.toolbarShowBorder,showButtonBorder:this.toolbarShowButtonBorder,showSeparators:this.toolbarShowSeparators,inCanvasParent:this.toolbarInCanvasParent,subToolbar:this.toolbarSubToolbar,onCollapse:()=>{var l;(l=this.dockPanel)==null||l.close()},onExclusiveOpen:()=>this.dismissDockForExclusiveChrome(),onCommand:l=>{y.instance.sendStringToExecute(l)}}),this.toolbarDocUnbind=dt(this.toolbar)}catch(l){console.error("[SimpleUiPlugin] Failed to create viewer toolbar:",l);return}try{this.setLayout(this.layoutMode)}catch(l){console.warn("[SimpleUiPlugin] setLayout failed during toolbar setup:",l)}}getToolbarMountEl(){if(this.hostEl)return this.toolbarInCanvasParent?oe(this.hostEl,this.toolbarMountTargetOption):io(this.hostEl,this.toolbarMountTargetOption)}tryUpgradeToolbarMountTarget(){var e;if(this.toolbarMountTargetOption||!this.hostEl||!this.toolbar)return;const t=this.getToolbarMountEl();if(!t||t===this.toolbarMountEl)return;const a=(e=y.instance.curView)==null?void 0:e.container,o=a==null?void 0:a.parentElement;this.toolbarMountEl!==this.hostEl&&this.toolbarMountEl!==a&&this.toolbarMountEl!==o||(this.toolbar.reparentTo(t),this.toolbarMountEl=t,this.toolbar.syncInParentLayout())}getMergedToolbarOptions(e){var t,a;return Ba(e,this.options.toolbar,(a=(t=this.options.layouts)==null?void 0:t[e])==null?void 0:a.toolbar)}applyLayoutKind(e,t){this.activeLayoutKind=e;const a=this.getMergedToolbarOptions(e);this.toolbarPlacement=a.placement??"right",this.toolbarCollapsible=a.collapsible??!1,this.toolbarEdgeOffset=a.edgeOffset??8,this.toolbarSideOffset=a.sideOffset??0,this.toolbarShowLabels=a.showLabels??!1,this.toolbarShowChildrenIndicator=a.showChildrenIndicator??!0,this.toolbarShowBorder=a.showBorder??!0,this.toolbarShowButtonBorder=a.showButtonBorder??!1,this.toolbarShowSeparators=a.showSeparators??!0,this.toolbarSize=a.size??"auto",this.toolbarOverflow=a.overflow??"menu",this.toolbarSubToolbar=a.subToolbar;const o=a.inCanvasParent===!0,r=o!==this.toolbarInCanvasParent;if(this.toolbarInCanvasParent=o,this.rebuildToolbarItems(e,a),this.syncLayerToolbarItem(),this.syncReviewToolbarItem(),this.syncMeasurementToolbarItem(),this.syncFindToolbarItem(),!(t!=null&&t.skipToolbarApply||!this.toolbar)){if(this.toolbar.applyViewOptions({placement:this.toolbarPlacement,edgeOffset:this.toolbarEdgeOffset,sideOffset:this.toolbarSideOffset,collapsible:this.toolbarCollapsible,defaultCollapsed:a.defaultCollapsed,showLabels:this.toolbarShowLabels,showChildrenIndicator:this.toolbarShowChildrenIndicator,size:this.toolbarSize,overflow:this.toolbarOverflow,showBorder:this.toolbarShowBorder,showButtonBorder:this.toolbarShowButtonBorder,showSeparators:this.toolbarShowSeparators,subToolbar:this.toolbarSubToolbar,inCanvasParent:this.toolbarInCanvasParent,items:this.baseToolbarItems}),r||!this.toolbar.isRootConnected()){const l=this.getToolbarMountEl();l&&(this.toolbar.reparentTo(l),this.toolbarMountEl=l)}this.toolbar.syncInParentLayout()}}getToolbarContext(){return{getTheme:()=>{var e;return((e=this.themeSync)==null?void 0:e.getTheme())??"dark"},setTheme:e=>{var t;return(t=this.themeSync)==null?void 0:t.setTheme(e)},getLocale:()=>T.currentLocale,setLocale:e=>this.setLocale(e),getPlacement:()=>this.toolbarPlacement,setPlacement:e=>{this.applyToolbarPlacement(e)}}}rebuildToolbarItems(e,t){if(this.toolbarItemsOverridden){const o=this.resolveBaseToolbarItems(this.toolbarItemsInput);this.baseToolbarItems=this.toolbarLayoutSwitcher?Te(o,this.toolbarLayoutSwitcher):o;return}const a=t??this.getMergedToolbarOptions(e);this.toolbarItemsInput=a.items??"default",this.baseToolbarItems=Ie(a,this.getToolbarContext(),e)}resolveBaseToolbarItems(e){return Ie({items:e,appendItems:void 0},this.getToolbarContext(),this.activeLayoutKind)}renderToolbarItems(){var e;(e=this.toolbar)==null||e.updateItems(this.baseToolbarItems)}syncLayerToolbarItem(){const e=this.hasLayerToolbarItem,t=W(this.baseToolbarItems,"layer");this.hasLayerToolbarItem=t,t&&!e?(this.ensureLayerCommandRegistered(),this.mountLayerDockUi()):!t&&e&&(this.teardownLayerUi(),this.unregisterLayerCommand())}syncReviewToolbarItem(){const e=this.hasMarkupPanelToolbarItem,t=W(this.baseToolbarItems,"markup-panel");this.hasMarkupPanelToolbarItem=t,t&&!e?(this.ensureMarkupPanelCommandRegistered(),this.mountReviewDockUi()):!t&&e&&(this.teardownReviewUi(),this.unregisterMarkupPanelCommand())}syncMeasurementToolbarItem(){const e=this.hasMeasurementPanelToolbarItem,t=W(this.baseToolbarItems,"measurement-panel");this.hasMeasurementPanelToolbarItem=t,t&&!e?(this.ensureMeasurementPanelCommandRegistered(),this.mountMeasurementDockUi()):!t&&e&&(this.teardownMeasurementUi(),this.unregisterMeasurementPanelCommand())}syncFindToolbarItem(){const e=this.hasFindToolbarItem,t=W(this.baseToolbarItems,"find");this.hasFindToolbarItem=t,t&&!e?(this.ensureFindCommandRegistered(),this.mountFindDockUi()):!t&&e&&(this.teardownFindUi(),this.unregisterFindCommand())}unregisterLayerCommand(){if(!this.commandManager)return;const e=S.SYSTEMT_COMMAND_GROUP_NAME,t=this.registeredCommands.findIndex(a=>a.name==="layer");t!==-1&&(this.commandManager.removeCmd(e,"layer"),this.registeredCommands.splice(t,1))}ensureLayerCommandRegistered(){this.commandManager&&(this.registeredCommands.some(e=>e.name==="layer")||this.registerLayerCommand(this.commandManager))}unregisterMarkupPanelCommand(){if(!this.commandManager)return;const e=S.SYSTEMT_COMMAND_GROUP_NAME,t=this.registeredCommands.findIndex(a=>a.name==="markuppanel");t!==-1&&(this.commandManager.removeCmd(e,"markuppanel"),this.registeredCommands.splice(t,1))}ensureMarkupPanelCommandRegistered(){this.commandManager&&(this.registeredCommands.some(e=>e.name==="markuppanel")||this.registerMarkupPanelCommand(this.commandManager))}unregisterMeasurementPanelCommand(){if(!this.commandManager)return;const e=S.SYSTEMT_COMMAND_GROUP_NAME,t=this.registeredCommands.findIndex(a=>a.name==="measurementpanel");t!==-1&&(this.commandManager.removeCmd(e,"measurementpanel"),this.registeredCommands.splice(t,1))}ensureMeasurementPanelCommandRegistered(){this.commandManager&&(this.registeredCommands.some(e=>e.name==="measurementpanel")||this.registerMeasurementPanelCommand(this.commandManager))}unregisterFindCommand(){if(!this.commandManager)return;const e=S.SYSTEMT_COMMAND_GROUP_NAME,t=this.registeredCommands.findIndex(a=>a.name==="find");t!==-1&&(this.commandManager.removeCmd(e,"find"),this.registeredCommands.splice(t,1))}ensureFindCommandRegistered(){if(!this.commandManager||this.registeredCommands.some(t=>t.name==="find"))return;const e=S.SYSTEMT_COMMAND_GROUP_NAME;this.commandManager.addCommand(e,"find","find",new Ia({prepare:()=>{this.mountFindDockUi(),this.tryUpgradeDockMountTarget()},toggle:()=>{var t,a;(t=this.dockPanel)==null||t.open(K),(a=this.findPaletteView)==null||a.focus()}})),this.registeredCommands.push({group:e,name:"find"})}registerLayerCommand(e){if(this.registeredCommands.some(a=>a.name==="layer"))return;const t=S.SYSTEMT_COMMAND_GROUP_NAME;e.addCommand(t,"layer","layer",this.createLayerCommand()),this.registeredCommands.push({group:t,name:"layer"})}createLayerCommand(){return new La({prepare:()=>this.prepareLayerDockForCommand(),toggle:()=>this.layerUiControllerHolder.toggleFromCommand()})}prepareLayerDockForCommand(){this.mountLayerDockUi(),this.tryUpgradeDockMountTarget()}registerMarkupPanelCommand(e){if(this.registeredCommands.some(a=>a.name==="markuppanel"))return;const t=S.SYSTEMT_COMMAND_GROUP_NAME;e.addCommand(t,"markuppanel","markuppanel",this.createMarkupPanelCommand()),this.registeredCommands.push({group:t,name:"markuppanel"})}createMarkupPanelCommand(){return new Oa({prepare:()=>this.prepareReviewDockForCommand(),toggle:()=>{var e;return(e=this.dockPanel)==null?void 0:e.open(_)}})}prepareReviewDockForCommand(){this.mountReviewDockUi(),this.tryUpgradeDockMountTarget()}registerMeasurementPanelCommand(e){if(this.registeredCommands.some(a=>a.name==="measurementpanel"))return;const t=S.SYSTEMT_COMMAND_GROUP_NAME;e.addCommand(t,"measurementpanel","measurementpanel",this.createMeasurementPanelCommand()),this.registeredCommands.push({group:t,name:"measurementpanel"})}createMeasurementPanelCommand(){return new Da({prepare:()=>this.prepareMeasurementDockForCommand(),toggle:()=>{var e;return(e=this.dockPanel)==null?void 0:e.open(F)}})}prepareMeasurementDockForCommand(){this.mountMeasurementDockUi(),this.tryUpgradeDockMountTarget()}ensureDockReady(){var e;if(!this.dockPanel){this.prepareDockPanel();return}this.hasLayerToolbarItem&&!this.dockPanel.hasTab(O)&&this.mountLayerDockUi(),this.hasMarkupPanelToolbarItem&&!this.dockPanel.hasTab(_)&&this.mountReviewDockUi(),this.hasMeasurementPanelToolbarItem&&!this.dockPanel.hasTab(F)&&this.mountMeasurementDockUi(),this.hasFindToolbarItem&&!this.dockPanel.hasTab(K)&&this.mountFindDockUi(),this.tryUpgradeDockMountTarget(),this.dockPanel.ensureMounted(),(e=this.toolbar)==null||e.syncInParentLayout()}prepareDockPanel(){this.hasLayerToolbarItem&&this.mountLayerDockUi(),this.hasMarkupPanelToolbarItem&&this.mountReviewDockUi(),this.hasMeasurementPanelToolbarItem&&this.mountMeasurementDockUi(),this.hasFindToolbarItem&&this.mountFindDockUi(),this.dockPanel||this.ensureDockPanel(),this.tryUpgradeDockMountTarget()}dismissStripsForDockPanel(){var e;(e=this.toolbar)!=null&&e.replaceOnNested&&this.toolbar.dismissOpenChildren()}dismissDockForExclusiveChrome(){var e,t;(e=this.toolbar)!=null&&e.replaceOnNested&&((t=this.dockPanel)==null||t.close())}ensureDockPanel(){const e=this.getDockMountEl();!e||!this.i18n||!this.dockPanelDefaults||this.dockPanel||(this.dockPanel=new go({host:e,i18n:this.i18n,defaultSide:this.dockPanelDefaults.defaultSide,defaultOpen:this.dockPanelDefaults.defaultOpen,defaultHeight:this.dockPanelDefaults.defaultHeight,defaultWidth:this.dockPanelDefaults.defaultWidth,onOpen:()=>this.dismissStripsForDockPanel()}),this.syncToolbarMountAfterDockChange())}getDockMountEl(){if(this.hostEl)return oe(this.hostEl,this.dockPanelMountTargetOption)}tryUpgradeDockMountTarget(){if(this.dockPanelMountTargetOption||!this.hostEl||!this.dockPanel)return;const e=oe(this.hostEl),t=this.dockPanel.getMountHost();t!==e&&(t!==this.hostEl||e===this.hostEl||(this.dockPanel.reparentTo(e),this.refreshLayerDockController(),this.syncToolbarMountAfterDockChange()))}refreshLayerDockController(){var e,t;(e=this.dockPanel)!=null&&e.hasTab(O)&&((t=this.layerDockController)==null||t.destroy(),this.layerDockController=new Me(this.dockPanel,O),this.layerUiControllerHolder.current=this.layerDockController)}mountLayerDockUi(){if(!(!this.hostEl||!this.i18n||(this.ensureDockPanel(),!this.dockPanel))){if(this.dockPanel.hasTab(O)){this.refreshLayerDockController();return}if(this.layerListView=new Co({editor:y.instance,i18n:this.i18n,host:this.hostEl,showHeader:!1}),!this.dockPanel.addTab({id:O,labelKey:"dockPanel.tab.layers",content:this.layerListView.element})){this.layerListView.destroy(),this.layerListView=void 0;return}this.layerDockController=new Me(this.dockPanel,O),this.layerUiControllerHolder.current=this.layerDockController}}teardownLayerUi(){var e,t,a;(e=this.dockPanel)==null||e.removeTab(O),(t=this.layerListView)==null||t.destroy(),this.layerListView=void 0,(a=this.layerDockController)==null||a.destroy(),this.layerDockController=void 0,this.layerUiControllerHolder.current=void 0,this.destroyDockIfUnused()}mountReviewDockUi(){!this.hostEl||!this.i18n||(this.ensureDockPanel(),!this.dockPanel)||this.dockPanel.hasTab(_)||(this.reviewPaletteView=new To({editor:y.instance,i18n:this.i18n}),this.dockPanel.addTab({id:_,labelKey:"dockPanel.tab.review",content:this.reviewPaletteView.element})||(this.reviewPaletteView.destroy(),this.reviewPaletteView=void 0))}teardownReviewUi(){var e,t;(e=this.dockPanel)==null||e.removeTab(_),(t=this.reviewPaletteView)==null||t.destroy(),this.reviewPaletteView=void 0,this.destroyDockIfUnused()}mountMeasurementDockUi(){!this.hostEl||!this.i18n||(this.ensureDockPanel(),!this.dockPanel)||this.dockPanel.hasTab(F)||(this.measurementPaletteView=new Mo({editor:y.instance,i18n:this.i18n}),this.dockPanel.addTab({id:F,labelKey:"dockPanel.tab.measurements",content:this.measurementPaletteView.element})||(this.measurementPaletteView.destroy(),this.measurementPaletteView=void 0))}teardownMeasurementUi(){var e,t;(e=this.dockPanel)==null||e.removeTab(F),(t=this.measurementPaletteView)==null||t.destroy(),this.measurementPaletteView=void 0,this.destroyDockIfUnused()}mountFindDockUi(){!this.hostEl||!this.i18n||(this.ensureDockPanel(),!this.dockPanel)||this.dockPanel.hasTab(K)||(this.findPaletteView=new Po({editor:y.instance,i18n:this.i18n}),this.dockPanel.addTab({id:K,labelKey:"dockPanel.tab.find",content:this.findPaletteView.element})||(this.findPaletteView.destroy(),this.findPaletteView=void 0))}teardownFindUi(){var e,t;(e=this.dockPanel)==null||e.removeTab(K),(t=this.findPaletteView)==null||t.destroy(),this.findPaletteView=void 0,this.destroyDockIfUnused()}destroyDockIfUnused(){this.dockPanel&&(this.dockPanel.hasTabs||(this.dockPanel.close(),!this.dockPanelExplicitlyEnabled&&(this.dockPanel.destroy(),this.dockPanel=void 0,this.syncToolbarMountAfterDockChange())))}syncToolbarMountAfterDockChange(){if(!this.toolbar||!this.hostEl)return;const e=this.getToolbarMountEl();e&&((e!==this.toolbarMountEl||!this.toolbar.isRootConnected())&&(this.toolbar.reparentTo(e),this.toolbarMountEl=e),this.toolbar.syncInParentLayout())}applyToolbarPlacement(e){var t;this.toolbarPlacement=e,(t=this.toolbar)==null||t.setPlacement(e)}onUnload(e,t){var a,o,r,l,n;(a=this.unsubscribeLayout)==null||a.call(this),this.unsubscribeLayout=void 0,T.events.localeChanged.removeEventListener(this.handleLocaleChanged),y.instance.events.documentActivated.removeEventListener(this.handleDocumentActivatedForDock);for(const s of this.registeredCommands)t.removeCmd(s.group,s.name);this.registeredCommands=[],this.teardownLayerUi(),this.teardownReviewUi(),this.teardownMeasurementUi(),this.teardownFindUi(),(o=this.toolbarDocUnbind)==null||o.call(this),this.toolbarDocUnbind=void 0,(r=this.toolbar)==null||r.destroy(),(l=this.dockPanel)==null||l.destroy(),this.toolbar=void 0,this.toolbarMountEl=void 0,this.toolbarMountTargetOption=void 0,this.dockPanel=void 0,this.hostEl=void 0,this.dockPanelMountTargetOption=void 0,this.baseToolbarItems=[],this.toolbarItemsInput="default",this.toolbarItemsOverridden=!1,this.toolbarLayoutSwitcher=void 0,this.hasLayerToolbarItem=!1,this.hasMarkupPanelToolbarItem=!1,this.hasMeasurementPanelToolbarItem=!1,this.hasFindToolbarItem=!1,this.commandManager=void 0,this.i18n=void 0,(n=this.themeSync)==null||n.stop(),this.themeSync=void 0,Q.instance.clearSessionOverride("isShowRibbon"),yo()}setLocale(e){T.setCurrentLocale(e)}}function Do(i={}){return new Io(i)}export{zo as AcApLayerStore,Io as AcApSimpleUiPlugin,vo as AcUiI18n,st as AcUiToolbar,ro as SIMPLE_UI_PLUGIN_NAME,ot as acuiCreateDefaultToolbarItems,ao as acuiCreateDefaultToolbarPresetMap,to as acuiCreateOpenToolbarItem,it as acuiCreatePhoneToolbarItems,at as acuiCreateSettingsToolbarItem,Do as acuiCreateSimpleUiPlugin,Ro as acuiCreateToolbarSeparator,tt as acuiCreateZoomToolbarItem,Ba as acuiMergeToolbarOptionsForLayout,Te as acuiPrependToolbarLayoutSwitcher,fo as acuiRegisterSimpleUiI18n,Ho as acuiRegisterSimpleUiPlugin,Bo as acuiResolveToolbarChrome,Ie as acuiResolveToolbarItems,Vo as acuiToolbarPreset};
