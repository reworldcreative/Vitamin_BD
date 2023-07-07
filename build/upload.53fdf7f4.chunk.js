"use strict";(self.webpackChunkvitamin_bd=self.webpackChunkvitamin_bd||[]).push([[3650],{17316:($,M,t)=>{t.r(M),t.d(M,{default:()=>At});var e=t(67294),c=t(185),a=t(86819),C=t(64593),E=t(86896),T=t(16550),y=t(60862),S=t(55994),r=t(57197),H=t(41580),Q=t(75515),G=t(17034),g=t(36989),x=t(92155),B=t(12028),L=t(49066),F=t(67819),A=t(11047),V=t(63237),N=t(70004),ee=t(78114),Y=t(50738),Ie=t(29729),be=t(4585),ge=t(80129),Ue=t(73727),te=t(88972),We=t(92585),ze=t(80845),Ke=t(78971),J=t(98101),$e=t(24652),He=t(45697),v=t.n(He);const ne=({pagination:s})=>e.createElement(H.x,{paddingTop:6},e.createElement(A.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(a.v4,null),e.createElement(a.tU,{pagination:s})));ne.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ne.propTypes={pagination:v().shape({page:v().number,pageCount:v().number,pageSize:v().number,total:v().number})};var Qe=t(27954),Ve=t(78521),Ge=t(33012),h=t(49826),Ne=t(73817),Ye=t(42047),Je=t(44466),Xe=t(31817),we=t(15537),z=t(29728),ke=t(20022),qe=t(2967);const fe=({selected:s,onSuccess:o})=>{const{formatMessage:i}=(0,E.Z)(),[d,u]=(0,e.useState)(!1),{isLoading:m,remove:O}=(0,qe.K)(),p=async()=>{await O(s),o()};return e.createElement(e.Fragment,null,e.createElement(z.z,{variant:"danger-light",size:"S",startIcon:e.createElement(ke.Z,null),onClick:()=>u(!0)},i({id:"global.delete",defaultMessage:"Delete"})),e.createElement(a.QH,{isConfirmButtonLoading:m,isOpen:d,onToggleDialog:()=>u(!1),onConfirm:p}))};fe.propTypes={selected:v().arrayOf(h.pw,h.nx).isRequired,onSuccess:v().func.isRequired};var _e=t(32605),ve=t(42866),he=t(59946),et=t(77197),tt=t(24969),nt=t(11276),at=t(19270),st=t(36856),lt=t(41054),ot=t(41609),rt=t.n(ot),Ee=t(88767);const it=()=>{const s=(0,a.lm)(),o=(0,Ee.useQueryClient)(),i=(0,r.IF)("actions/bulk-move"),{post:d}=(0,a.kY)(),u=({destinationFolderId:p,filesAndFolders:f})=>{const Z=f.reduce((D,l)=>{const{id:U,type:P}=l,K=P==="asset"?"fileIds":"folderIds";return D[K]||(D[K]=[]),D[K].push(U),D},{});return d(i,{...Z,destinationFolderId:p})},m=(0,Ee.useMutation)(u,{onSuccess(p){const{data:{data:f}}=p;f?.files?.length>0&&(o.refetchQueries([S.Z,"assets"],{active:!0}),o.refetchQueries([S.Z,"asset-count"],{active:!0})),o.refetchQueries([S.Z,"folders"],{active:!0}),s({type:"success",message:{id:(0,r.OB)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}});return{...m,move:(p,f)=>m.mutateAsync({destinationFolderId:p,filesAndFolders:f})}};var dt=t(20796),ct=t(66951);const ae=({onClose:s,selected:o,currentFolder:i})=>{const{formatMessage:d}=(0,E.Z)(),{data:u,isLoading:m}=(0,dt.v)(),{move:O}=it();if(!u)return null;const p=async(D,{setErrors:l})=>{try{await O(D.destination.value,o),s()}catch(U){const K=(0,a.OT)(U).errors.reduce((X,I)=>(X[I.values?.path?.length||"destination"]=I.defaultMessage,X),{});rt()(K)||l(K)}},f=()=>{s()};if(m)return e.createElement(ve.P,{onClose:f,labelledBy:"title"},e.createElement(he.f,null,e.createElement(A.k,{justifyContent:"center",paddingTop:4,paddingBottom:4},e.createElement(et.a,null,d({id:(0,r.OB)("content.isLoading"),defaultMessage:"Content is loading."})))));const Z={destination:{value:i?.id||"",label:i?.name||u[0].label}};return e.createElement(ve.P,{onClose:f,labelledBy:"title"},e.createElement(lt.J9,{validateOnChange:!1,onSubmit:p,initialValues:Z},({values:D,errors:l,setFieldValue:U})=>e.createElement(a.l0,{noValidate:!0},e.createElement(tt.x,null,e.createElement(Q.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},d({id:(0,r.OB)("modal.folder.move.title"),defaultMessage:"Move elements to"}))),e.createElement(he.f,null,e.createElement(nt.r,{gap:4},e.createElement(F.P,{xs:12,col:12},e.createElement(A.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(at.Q,{htmlFor:"folder-destination"},d({id:(0,r.OB)("form.input.label.folder-location"),defaultMessage:"Location"})),e.createElement(ct.Z,{options:u,onChange:P=>{U("destination",P)},defaultValue:D.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:l?.destination,ariaErrorMessage:"destination-error"}),l.destination&&e.createElement(Q.Z,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600"},l.destination))))),e.createElement(st.m,{startActions:e.createElement(z.z,{onClick:f,variant:"tertiary",name:"cancel"},d({id:"cancel",defaultMessage:"Cancel"})),endActions:e.createElement(z.z,{type:"submit",loading:m},d({id:"modal.folder.move.submit",defaultMessage:"Move"}))}))))};ae.defaultProps={currentFolder:void 0},ae.propTypes={onClose:v().func.isRequired,currentFolder:h.nx,selected:v().arrayOf(h.nx,h.pw).isRequired};const se=({selected:s,onSuccess:o,currentFolder:i})=>{const{formatMessage:d}=(0,E.Z)(),[u,m]=(0,e.useState)(!1),O=()=>{m(!1),o()};return e.createElement(e.Fragment,null,e.createElement(z.z,{variant:"secondary",size:"S",startIcon:e.createElement(_e.Z,null),onClick:()=>m(!0)},d({id:"global.move",defaultMessage:"Move"})),u&&e.createElement(ae,{currentFolder:i,onClose:O,selected:s}))};se.defaultProps={currentFolder:void 0},se.propTypes={onSuccess:v().func.isRequired,currentFolder:h.nx,selected:v().arrayOf(h.pw,h.nx).isRequired};const le=({selected:s,onSuccess:o,currentFolder:i})=>{const{formatMessage:d}=(0,E.Z)();return e.createElement(A.k,{gap:2,paddingBottom:5},e.createElement(Q.Z,{variant:"epsilon",textColor:"neutral600"},d({id:(0,we.Z)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:s.filter(({type:u})=>u==="folder").length,numberAssets:s.filter(({type:u})=>u==="asset").length})),e.createElement(fe,{selected:s,onSuccess:o}),e.createElement(se,{currentFolder:i,selected:s,onSuccess:o}))};le.defaultProps={currentFolder:void 0},le.propTypes={onSuccess:v().func.isRequired,currentFolder:h.nx,selected:v().arrayOf(h.pw,h.nx).isRequired};var ut=t(65169),oe=t(96315),mt=t(70088);const gt=({isFiltering:s,canCreate:o,canRead:i})=>s?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:i?o?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},pe=({canCreate:s,isFiltering:o,canRead:i,onActionClick:d})=>{const{formatMessage:u}=(0,E.Z)(),m=gt({isFiltering:o,canCreate:s,canRead:i});return e.createElement(mt.i,{icon:i?null:ut.Z,action:s&&!o&&e.createElement(z.z,{variant:"secondary",startIcon:e.createElement(oe.Z,null),onClick:d},u({id:(0,r.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})),content:u({...m,id:(0,r.OB)(m.id)})})};pe.propTypes={canCreate:v().bool.isRequired,canRead:v().bool.isRequired,isFiltering:v().bool.isRequired,onActionClick:v().func.isRequired};var ft=t(89597),vt=t(51386),ht=t(45219),ye=t(97581);const Et=()=>{const s=(0,e.useRef)(null),[o,i]=(0,e.useState)(!1),{formatMessage:d}=(0,E.Z)(),{trackUsage:u}=(0,a.rS)(),[{query:m},O]=(0,a.Kx)(),p=m?.filters?.$and||[],f=()=>i(l=>!l),Z=l=>{O({filters:{$and:l},page:1})},D=l=>{u("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(l[l.length-1])[0]}),O({filters:{$and:l},page:1})};return e.createElement(e.Fragment,null,e.createElement(z.z,{variant:"tertiary",ref:s,startIcon:e.createElement(ft.Z,null),onClick:f,size:"S"},d({id:"app.utils.filters",defaultMessage:"Filters"})),o&&e.createElement(ht.Z,{displayedFilters:ye.Z,filters:p,onSubmit:D,onToggle:f,source:s}),e.createElement(vt.Z,{appliedFilters:p,filtersSchema:ye.Z,onRemoveFilter:Z}))};var pt=t(53979),yt=t(23620),xt=t(67109),Mt=t(48038);const re=({breadcrumbs:s,canCreate:o,folder:i,onToggleEditFolderDialog:d,onToggleUploadAssetDialog:u})=>{const{formatMessage:m}=(0,E.Z)(),{pathname:O}=(0,T.TH)(),[{query:p}]=(0,a.Kx)(),f={...p,folder:i?.parent?.id??void 0};return e.createElement(pt.T,{title:m({id:(0,r.OB)("plugin.name"),defaultMessage:"Media Library"}),subtitle:s&&i&&e.createElement(Mt.O,{as:"nav",label:m({id:(0,r.OB)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:s,currentFolderId:i?.id}),navigationAction:i&&e.createElement(yt.r,{startIcon:e.createElement(xt.Z,null),to:`${O}?${(0,ge.stringify)(f,{encode:!1})}`},m({id:(0,r.OB)("header.actions.folder-level-up"),defaultMessage:"Back"})),primaryAction:o&&e.createElement(A.k,{gap:2},e.createElement(z.z,{startIcon:e.createElement(oe.Z,null),variant:"secondary",onClick:d},m({id:(0,r.OB)("header.actions.add-folder"),defaultMessage:"Add new folder"})),e.createElement(z.z,{startIcon:e.createElement(oe.Z,null),onClick:u},m({id:(0,r.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})))})};re.defaultProps={breadcrumbs:!1,folder:null},re.propTypes={breadcrumbs:v().oneOfType([h.Fv,v().bool]),canCreate:v().bool.isRequired,folder:h.nx,onToggleEditFolderDialog:v().func.isRequired,onToggleUploadAssetDialog:v().func.isRequired};const Ct=(0,te.ZP)(H.x)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,xe=(0,te.ZP)(Q.Z)`
  max-width: 100%;
`,Me=(0,te.ZP)(H.x)`
  svg {
    path {
      fill: ${({theme:s})=>s.colors.neutral500};
    }
  }
`,Bt=()=>{const{push:s}=(0,T.k6)(),{canRead:o,canCreate:i,canUpdate:d,canCopyLink:u,canDownload:m,isLoading:O}=(0,Xe.y)(),p=(0,e.useRef)(),{formatMessage:f}=(0,E.Z)(),{pathname:Z}=(0,T.TH)(),{trackUsage:D}=(0,a.rS)(),[{query:l},U]=(0,a.Kx)(),P=Boolean(l._q||l.filters),[K,X]=(0,a.Yw)(h.uf.view,h.Uk.GRID),I=K===h.Uk.GRID,{data:b,isLoading:Ft,errors:Ot}=(0,Ne.L)({skipWhen:!o,query:l}),{data:St,isLoading:Dt,errors:Tt}=(0,Je.j)({enabled:o&&b?.pagination?.page===1&&!(0,r.rV)(l),query:l}),{data:ie,isLoading:Ce,error:Zt}=(0,Ye.W)(l?.folder,{enabled:o&&!!l?.folder});Zt?.response?.status===404&&s(Z);const w=St?.map(n=>({...n,type:"folder",folderURL:(0,r.Km)(Z,l,n.id),isSelectable:d}))??[],R=w?.length||0,k=b?.results?.map(n=>({...n,type:"asset",isSelectable:d}))||[],j=k?.length??0,Rt=b?.pagination?.total,Be=Ce||Dt||O||Ft,[jt,Pt]=(0,e.useState)(!1),[It,Le]=(0,e.useState)(!1),[Ae,de]=(0,e.useState)(void 0),[ce,Fe]=(0,e.useState)(void 0),[W,{selectOne:q,selectAll:Oe}]=(0,a.Uq)(["type","id"],[]),Se=W?.length>0&&W?.length!==j+R,ue=()=>Pt(n=>!n),De=({created:n=!1}={})=>{n&&l?.page!=="1"&&U({...l,page:1}),Le(_=>!_)},Te=(n,_)=>{n.target.checked&&D("didSelectAllMediaLibraryElements"),Oe(_)},Ze=n=>{D("didSortMediaLibraryElements",{location:"upload",sort:n}),U({sort:n})},Re=n=>{Fe(n),Le(!0)},bt=n=>{Fe(null),De(n),p.current&&p.current.focus()},je=n=>{n===j&&b.pagination.page===b.pagination.pageCount&&b.pagination.page>1&&U({...l,page:b.pagination.page-1})},Ut=()=>{Oe(),je(W.length)};return(0,a.go)(),e.createElement(G.A,null,e.createElement(c.o,{"aria-busy":Be},e.createElement(re,{breadcrumbs:!Ce&&(0,r.M4)(ie,{pathname:Z,query:l}),canCreate:i,onToggleEditFolderDialog:De,onToggleUploadAssetDialog:ue,folder:ie}),e.createElement(g.Z,{startActions:e.createElement(e.Fragment,null,d&&I&&(j>0||R>0)&&e.createElement(Ct,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},e.createElement(x.C,{"aria-label":f({id:(0,r.OB)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:Se,value:(j>0||R>0)&&W.length===j+R,onChange:n=>Te(n,[...k,...w])})),o&&I&&e.createElement(Qe.Z,{onChangeSort:Ze}),o&&e.createElement(Et,null)),endActions:e.createElement(e.Fragment,null,e.createElement(a.jW,{permissions:h._I.configureView},e.createElement(Me,{paddingTop:1,paddingBottom:1},e.createElement(B.h,{forwardedAs:Ue.rU,to:{pathname:`${Z}/configuration`,search:(0,ge.stringify)(l,{encode:!1})},icon:e.createElement(ee.Z,null),label:f({id:"app.links.configure-view",defaultMessage:"Configure the view"})}))),e.createElement(Me,{paddingTop:1,paddingBottom:1},e.createElement(B.h,{icon:I?e.createElement(Y.Z,null):e.createElement(Ie.Z,null),label:f(I?{id:(0,r.OB)("view-switch.list"),defaultMessage:"List View"}:{id:(0,r.OB)("view-switch.grid"),defaultMessage:"Grid View"}),onClick:()=>X(I?h.Uk.LIST:h.Uk.GRID)})),e.createElement(a.m,{label:f({id:(0,r.OB)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}}))}),e.createElement(L.D,null,W.length>0&&e.createElement(le,{currentFolder:ie,selected:W,onSuccess:Ut}),Be&&e.createElement(a.dO,null),(Ot||Tt)&&e.createElement(a.Hn,null),R===0&&j===0&&e.createElement(pe,{canCreate:i,canRead:o,isFiltering:P,onActionClick:ue}),o&&!I&&(j>0||R>0)&&e.createElement(Ve.b,{assetCount:j,folderCount:R,indeterminate:Se,onChangeSort:Ze,onChangeFolder:n=>s((0,r.Km)(Z,l,n)),onEditAsset:de,onEditFolder:Re,onSelectOne:q,onSelectAll:Te,rows:[...w,...k],selected:W,shouldDisableBulkSelect:!d,sortQuery:l?.sort??""}),o&&I&&e.createElement(e.Fragment,null,R>0&&e.createElement($e.a,{title:(P&&j>0||!P)&&f({id:(0,r.OB)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:R})||""},w.map(n=>{const Wt=!!W.filter(({type:me})=>me==="folder").find(me=>me.id===n.id),Pe=(0,r.Km)(Z,l,n?.id);return e.createElement(F.P,{col:3,key:`folder-${n.id}`},e.createElement(J.Ac,{ref:ce&&n.id===ce.id?p:void 0,ariaLabel:n.name,id:`folder-${n.id}`,to:Pe,startAction:q&&n.isSelectable?e.createElement(J.MM,{"data-testid":`folder-checkbox-${n.id}`,value:Wt,onChange:()=>q(n)}):null,cardActions:e.createElement(B.h,{icon:e.createElement(be.Z,null),"aria-label":f({id:(0,r.OB)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>Re(n)})},e.createElement(J.Bu,null,e.createElement(J.u6,{to:Pe},e.createElement(A.k,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%"},e.createElement(xe,{fontWeight:"semiBold",ellipsis:!0},n.name,e.createElement(V.T,null,":")),e.createElement(xe,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0},f({id:(0,r.OB)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:n.children.count,filesCount:n.files.count})))))))})),j>0&&R>0&&e.createElement(H.x,{paddingTop:6,paddingBottom:4},e.createElement(N.i,null)),j>0&&e.createElement(We.r,{assets:k,onEditAsset:de,onSelectAsset:q,selectedAssets:W.filter(({type:n})=>n==="asset"),title:(!P||P&&R>0)&&b?.pagination?.page===1&&f({id:(0,r.OB)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:Rt})||""})),b?.pagination&&e.createElement(ne,{pagination:b.pagination}))),jt&&e.createElement(Ge.x,{onClose:ue,trackedLocation:"upload",folderId:l?.folder}),It&&e.createElement(Ke.f,{onClose:bt,folder:ce,parentFolderId:l?.folder,location:"upload"}),Ae&&e.createElement(ze.s,{onClose:n=>{n===null&&je(1),de(void 0)},asset:Ae,canUpdate:d,canCopyLink:u,canDownload:m,trackedLocation:"upload"}))},Lt=(0,e.lazy)(()=>t.e(9514).then(t.bind(t,87532))),At=()=>{const{config:{isLoading:s,isError:o,data:i}}=(0,y.Z)(),[{rawQuery:d},u]=(0,a.Kx)(),{formatMessage:m}=(0,E.Z)(),O=m({id:(0,r.OB)("plugin.name"),defaultMessage:"Media Library"});return(0,e.useEffect)(()=>{s||o||d||u({sort:i.sort,page:1,pageSize:i.pageSize})},[s,o,i,d,u]),(0,a.go)(),e.createElement(c.o,{"aria-busy":s},e.createElement(C.q,{title:O}),s&&e.createElement(a.dO,null),d?e.createElement(e.Suspense,{fallback:e.createElement(a.dO,null)},e.createElement(T.rs,null,e.createElement(T.AW,{exact:!0,path:`/plugins/${S.Z}`,component:Bt}),e.createElement(T.AW,{exact:!0,path:`/plugins/${S.Z}/configuration`,render:()=>e.createElement(Lt,{config:i})}))):null)}},36989:($,M,t)=>{t.d(M,{Z:()=>a});var e=t(85893),c=t(11047);const a=({startActions:C,endActions:E})=>!C&&!E?null:(0,e.jsxs)(c.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(c.k,{gap:2,wrap:"wrap",children:C}),(0,e.jsx)(c.k,{gap:2,shrink:0,wrap:"wrap",children:E})]})},49066:($,M,t)=>{t.d(M,{D:()=>a});var e=t(85893),c=t(41580);const a=({children:C})=>(0,e.jsx)(c.x,{paddingLeft:10,paddingRight:10,children:C})},53979:($,M,t)=>{t.d(M,{T:()=>H});var e=t(85893),c=t(67294),a=t(88972);const C=g=>{const x=(0,c.useRef)(null),[B,L]=(0,c.useState)(!0),F=([A])=>{L(A.isIntersecting)};return(0,c.useEffect)(()=>{const A=x.current,V=new IntersectionObserver(F,g);return A&&V.observe(x.current),()=>{A&&V.disconnect()}},[x,g]),[x,B]};var E=t(79698);const T=(g,x)=>{const B=(0,E.W)(x);(0,c.useLayoutEffect)(()=>{const L=new ResizeObserver(B);return Array.isArray(g)?g.forEach(F=>{F.current&&L.observe(F.current)}):g.current&&L.observe(g.current),()=>{L.disconnect()}},[g,B])};var y=t(41580),S=t(11047),r=t(75515);const H=g=>{const x=(0,c.useRef)(null),[B,L]=(0,c.useState)(null),[F,A]=C({root:null,rootMargin:"0px",threshold:0});return T(F,()=>{F.current&&L(F.current.getBoundingClientRect())}),(0,c.useEffect)(()=>{x.current&&L(x.current.getBoundingClientRect())},[x]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:B?.height},ref:F,children:A&&(0,e.jsx)(G,{ref:x,...g})}),!A&&(0,e.jsx)(G,{...g,sticky:!0,width:B?.width})]})};H.displayName="HeaderLayout";const Q=(0,a.ZP)(y.x)`
  width: ${({width:g})=>g?`${g/16}rem`:void 0};
  z-index: ${({theme:g})=>g.zIndices[1]};
`,G=c.forwardRef(({navigationAction:g,primaryAction:x,secondaryAction:B,subtitle:L,title:F,sticky:A,width:V,...N},ee)=>{const Y=typeof L=="string";return A?(0,e.jsx)(Q,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:V,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(S.k,{justifyContent:"space-between",children:[(0,e.jsxs)(S.k,{children:[g&&(0,e.jsx)(y.x,{paddingRight:3,children:g}),(0,e.jsxs)(y.x,{children:[(0,e.jsx)(r.Z,{variant:"beta",as:"h1",...N,children:F}),Y?(0,e.jsx)(r.Z,{variant:"pi",textColor:"neutral600",children:L}):L]}),B?(0,e.jsx)(y.x,{paddingLeft:4,children:B}):null]}),(0,e.jsx)(S.k,{children:x?(0,e.jsx)(y.x,{paddingLeft:2,children:x}):void 0})]})}):(0,e.jsxs)(y.x,{ref:ee,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:g?6:8,background:"neutral100","data-strapi-header":!0,children:[g?(0,e.jsx)(y.x,{paddingBottom:2,children:g}):null,(0,e.jsxs)(S.k,{justifyContent:"space-between",children:[(0,e.jsxs)(S.k,{minWidth:0,children:[(0,e.jsx)(r.Z,{as:"h1",variant:"alpha",...N,children:F}),B?(0,e.jsx)(y.x,{paddingLeft:4,children:B}):null]}),x]}),Y?(0,e.jsx)(r.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:L}):L]})})},17034:($,M,t)=>{t.d(M,{A:()=>T});var e=t(85893),c=t(88972),a=t(41580);const C=(0,c.ZP)(a.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:y})=>y?"auto 1fr":"1fr"};
`,E=(0,c.ZP)(a.x)`
  overflow-x: hidden;
`,T=({sideNav:y,children:S})=>(0,e.jsxs)(C,{hasSideNav:!!y,children:[y,(0,e.jsx)(E,{paddingBottom:10,children:S})]})},185:($,M,t)=>{t.d(M,{o:()=>E});var e=t(85893),c=t(88972),a=t(41580);const C=(0,c.ZP)(a.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,E=({labelledBy:T="main-content-title",...y})=>(0,e.jsx)(C,{"aria-labelledby":T,as:"main",id:"main-content",tabIndex:-1,...y})},67109:($,M,t)=>{t.d(M,{Z:()=>a});var e=t(85893);const c=C=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),a=c},78114:($,M,t)=>{t.d(M,{Z:()=>a});var e=t(85893);const c=C=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),a=c}}]);
