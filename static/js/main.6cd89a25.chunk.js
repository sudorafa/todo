(this["webpackJsonptodo-app-web"]=this["webpackJsonptodo-app-web"]||[]).push([[0],{127:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return Te}));var a=t(15),r=t(0),c=t.n(r),i=t(13),o=t.n(i),s=t(180),d=t(167),u=t(179),l=t(177),p=t(168),b=t(169),j=t(45),x=t(170),h=t(171),f=t(79),O=t.n(f),g=t(80),m=t.n(g),v=t(4),w=t(181),k=t(132),y=t(172),C=t(81),S=t.n(C),T=t(129),N=t(165),D=t(166),B=t(76),I=t.n(B),z=t(77),P=t.n(z),_=0,E=1,M=t(2);function F(n){var e=n.handleMenu;return Object(M.jsxs)("div",{children:[Object(M.jsxs)(T.a,{button:!0,onClick:function(){return e(_)},children:[Object(M.jsx)(N.a,{children:Object(M.jsx)(I.a,{})}),Object(M.jsx)(D.a,{primary:"Tarefas"})]}),Object(M.jsxs)(T.a,{button:!0,onClick:function(){return e(E)},children:[Object(M.jsx)(N.a,{children:Object(M.jsx)(P.a,{})}),Object(M.jsx)(D.a,{primary:"Sobre"})]})]})}var L=t(53),H=t(78),W=Object(d.a)((function(n){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(H.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},n.mixins.toolbar),appBar:{zIndex:n.zIndex.drawer+1,transition:n.transitions.create(["width","margin"],{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:n.transitions.create(["width","margin"],{easing:n.transitions.easing.sharp,duration:n.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.enteringScreen})},drawerPaperClose:Object(L.a)({overflowX:"hidden",transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),width:n.spacing(7)},n.breakpoints.up("sm"),{width:n.spacing(9)})}}));function R(n){var e=n.title,t=n.handleMenu,r=c.a.useState(!0),i=Object(a.a)(r,2),o=i[0],s=i[1],d=W();return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(p.a,{position:"absolute",className:Object(v.a)(d.appBar,o&&d.appBarShift),children:Object(M.jsxs)(b.a,{className:d.toolbar,children:[Object(M.jsx)(x.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){s(!0)},className:Object(v.a)(d.menuButton,o&&d.menuButtonHidden),children:Object(M.jsx)(O.a,{})}),Object(M.jsx)(j.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:d.title,children:e}),Object(M.jsx)(x.a,{color:"inherit",children:Object(M.jsx)(h.a,{badgeContent:4,color:"secondary",children:Object(M.jsx)(m.a,{})})})]})}),Object(M.jsxs)(w.a,{variant:"permanent",classes:{paper:Object(v.a)(d.drawerPaper,!o&&d.drawerPaperClose)},open:o,children:[Object(M.jsx)("div",{className:d.toolbarIcon,children:Object(M.jsx)(x.a,{onClick:function(){s(!1)},children:Object(M.jsx)(S.a,{})})}),Object(M.jsx)(y.a,{}),Object(M.jsx)(k.a,{children:Object(M.jsx)(F,{handleMenu:t})})]})]})}var A=t(173);function G(){return Object(M.jsxs)(j.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(M.jsx)(A.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var J=t(33),Y=t(11),q=t.n(Y),U=t(17),X=t(176),K=t(131),Q=t(182),V=t(178),Z=t(87),$=t.n(Z),nn=Object(d.a)((function(n){return{container:{paddingTop:n.spacing(4),paddingBottom:n.spacing(4)},paper:{padding:n.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:20},name:{width:400},button:{marginLeft:20}}})),en=t(175),tn=t(174),an=t(37),rn=t.n(an),cn=t(83),on=t.n(cn),sn=t(82),dn=t.n(sn).a.create({baseURL:"http://todo-api-rafa.herokuapp.com/"}),un=function(){var n=Object(U.a)(q.a.mark((function n(e){var t;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,dn.get(e);case 2:return t=n.sent,n.next=5,t.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),ln=function(){var n=Object(U.a)(q.a.mark((function n(e,t){var a;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,dn.post(e,t);case 2:return a=n.sent,n.next=5,a.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),pn=function(){var n=Object(U.a)(q.a.mark((function n(e){var t;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,dn.delete(e);case 2:return t=n.sent,n.next=5,t.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),bn=function(){var n=Object(U.a)(q.a.mark((function n(e,t){var a;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,dn.put(e,t);case 2:return a=n.sent,n.next=5,a.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function jn(n){var e=n.todos,t=n.selectTodoMenu,c=Object(r.useState)([]),i=Object(a.a)(c,2),o=i[0],s=i[1];return Object(r.useEffect)((function(){e&&s(e)}),[e]),Object(M.jsx)(tn.a,{children:!!e&&o.map((function(n,e){return Object(M.jsx)(en.a,{onClick:function(){return t(n)},children:Object(M.jsxs)(X.a,{container:!0,children:[Object(M.jsx)(X.a,{item:!0,xs:12,md:8,lg:9,children:n.description}),Object(M.jsxs)(X.a,{item:!0,xs:12,md:4,lg:3,children:[" ",Object(M.jsx)(rn.a,{onClick:function(){return function(n,e){pn("todo/"+n);var t=o;t.splice(e,1),s(t)}(n._id,e)}})," ",Object(M.jsx)(on.a,{}),"  "]})]})},e)}))})}var xn,hn,fn,On,gn,mn,vn,wn,kn,yn,Cn,Sn,Tn,Nn,Dn,Bn,In,zn,Pn,_n,En,Mn,Fn,Ln,Hn,Wn,Rn,An,Gn,Jn,Yn,qn=t(32),Un=t(8),Xn=t(9),Kn=Xn.a.div(xn||(xn=Object(Un.a)(["\n  border-radius: 3px;\n  border-bottom: 1px solid #ccc;\n  background-color: #fff;\n  position: relative;\n  padding: 10px;\n  cursor: pointer;\n  max-width: 250px;\n  margin-bottom: 7px;\n  min-width: 230px;\n"]))),Qn=Xn.a.div(hn||(hn=Object(Un.a)([""]))),Vn=function(n){var e=n.card,t=n.deleteSubTask,a=n.index;return Object(M.jsx)(qn.Draggable,{children:Object(M.jsx)(Kn,{className:"card",children:Object(M.jsx)(Qn,{children:Object(M.jsxs)(X.a,{container:!0,children:[Object(M.jsx)(X.a,{item:!0,xs:12,md:8,lg:9,children:e.description}),Object(M.jsx)(X.a,{item:!0,xs:12,md:4,lg:3,children:Object(M.jsx)(rn.a,{onClick:function(){return t(e,a)}})})]})})})},e.id)},Zn=Xn.a.div(fn||(fn=Object(Un.a)(["\n  display: inline-block;\n  height: 100%;\n  vertical-align: top;\n  white-space: normal;\n  opacity: ",";\n"])),(function(n){return n.isDragging?0:1})),$n=Xn.a.section(On||(On=Object(Un.a)(["\n  width: 280px;\n  background-color: #e3e3e3;\n  border-radius: 3px;\n  margin: 5px 5px;\n  padding: 10px;\n  position: relative;\n  display: inline-flex;\n  height: auto;\n  max-height: 90%;\n  flex-direction: column;\n"]))),ne=Xn.a.header(gn||(gn=Object(Un.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),ee=Xn.a.span(mn||(mn=Object(Un.a)(["\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 18px;\n  cursor: grab;\n  width: 70%;\n"]))),te=Xn.a.div(vn||(vn=Object(Un.a)(["\n  flex: 1;\n  overflow-y: auto;\n  align-self: center;\n  max-height: 90vh;\n  margin-top: 10px;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),ae=Xn.a.div(wn||(wn=Object(Un.a)(["\n  min-height: 24px;\n  max-height: 24px;\n  cursor: pointer;\n\n  :hover {\n    background-color: rgba(9, 30, 66, 0.08);\n    color: #172b4d;\n  }\n"]))),re=Xn.a.span(kn||(kn=Object(Un.a)(["\n  color: #5e6c84;\n"]))),ce=Xn.a.div(yn||(yn=Object(Un.a)([""]))),ie=Xn.a.div(Cn||(Cn=Object(Un.a)(["\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);\n  cursor: pointer;\n  display: block;\n  margin-bottom: 8px;\n  max-width: 300px;\n  min-height: 20px;\n  position: relative;\n  text-decoration: none;\n  z-index: 0;\n"]))),oe=Xn.a.div(Sn||(Sn=Object(Un.a)(["\n  overflow: hidden;\n  padding: 6px 8px 2px;\n  position: relative;\n  z-index: 10;\n"]))),se=Xn.a.textarea(Tn||(Tn=Object(Un.a)(["\n  overflow: hidden;\n  overflow-wrap: break-word;\n  resize: none;\n  height: 54px;\n  background: none;\n  border: none;\n  box-shadow: none;\n  margin-bottom: 4px;\n  max-height: 162px;\n  min-height: 54px;\n  padding: 0;\n  width: 100%;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 400;\n  outline: none;\n"]))),de=Xn.a.div(Nn||(Nn=Object(Un.a)(["\n  height: 32px;\n"]))),ue=Xn.a.input(Dn||(Dn=Object(Un.a)(["\n  background-color: #5aac44;\n  box-shadow: none;\n  border: none;\n  color: #fff;\n  height: 100%;\n  cursor: pointer;\n"]))),le=Xn.a.input(Bn||(Bn=Object(Un.a)(["\n  background-color: red;\n  box-shadow: none;\n  border: none;\n  color: #fff;\n  height: 100%;\n  cursor: pointer;\n"]))),pe=(Xn.a.a(In||(In=Object(Un.a)(["\n  height: 32px;\n  line-height: 32px;\n  width: 32px;\n"]))),function(n){var e=n.item,t=n.deleteTask,c=n.index,i=n.updateTodos,o=Object(r.useState)(null),s=Object(a.a)(o,2),d=s[0],u=s[1],l=Object(r.useState)(!1),p=Object(a.a)(l,2),b=p[0],j=p[1],x=Object(r.useState)(""),h=Object(a.a)(x,2),f=h[0],O=h[1];Object(r.useEffect)((function(){e&&(null===e||void 0===e?void 0:e.subTasks)&&u(null===e||void 0===e?void 0:e.subTasks)}),[e]);var g=function(){var n=Object(U.a)(q.a.mark((function n(t){return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),f&&m(f,e._id);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=Object(U.a)(q.a.mark((function n(e,t){var a,r,c,o;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=d||[],n.next=3,ln("subTask",{description:e,taskId:t});case 3:r=n.sent,c=r.subTask,o=[].concat(Object(J.a)(a),[c]),u(o),O(""),i();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),v=function(n,e){var t=d||[];bn("subTask/"+n._id,{description:n.description,taskId:e});var a=[].concat(Object(J.a)(t),[n]);u(a),O(""),i()},w=function(n,e){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t&&pn("subTask/"+n._id);var a=d;a.splice(e,1),u(a),t&&i()};return Object(M.jsx)(qn.Draggable,{children:Object(M.jsx)(Zn,{className:"card-container",children:Object(M.jsxs)($n,{children:[Object(M.jsx)(ne,{className:"column-drag-handle",children:Object(M.jsx)(ee,{children:Object(M.jsxs)(X.a,{container:!0,children:[Object(M.jsx)(X.a,{item:!0,xs:12,md:8,lg:9,children:null===e||void 0===e?void 0:e.description}),Object(M.jsx)(X.a,{item:!0,xs:12,md:4,lg:3,children:Object(M.jsx)(ae,{onClick:function(){return t(e,c)},children:Object(M.jsx)(rn.a,{})})})]})})}),Object(M.jsxs)(te,{children:[Object(M.jsx)(qn.Container,{orientation:"vertical",groupName:"col",onDrop:function(n){var t,a,r,c;t=null===e||void 0===e?void 0:e._id,a=n.addedIndex,r=n.removedIndex,c=n.payload,null===r||null===a?null!==r?w(c,r,!1):null!==a&&v(c,t):console.log("rafa")},dragClass:"card-ghost",dropClass:"card-ghost-drop",onDragEnter:function(){},getChildPayload:function(n){return d[n]},onDragLeave:function(){},dropPlaceholder:{animationDuration:150,showOnTop:!0,className:"drop-preview"},dropPlaceholderAnimationDuration:200,children:d&&(null===d||void 0===d?void 0:d.map((function(n,e){return Object(M.jsx)(Vn,{card:n,deleteSubTask:w,index:e},n.id)})))}),b?Object(M.jsxs)(ce,{children:[Object(M.jsx)(ie,{children:Object(M.jsx)(oe,{children:Object(M.jsx)(se,{value:f,placeholder:"Criar Sub Tarefa",onChange:function(n){O(n.target.value)}})})}),Object(M.jsxs)(de,{children:[Object(M.jsx)(ue,{type:"button",value:"Salvar",onClick:g}),Object(M.jsx)(le,{type:"button",value:"Fechar",onClick:function(){return j(!1)}})]})]}):Object(M.jsx)(ae,{onClick:function(){j(!0)},children:Object(M.jsx)(re,{children:"Criar sub tarefa"})})]})]})})},null===e||void 0===e?void 0:e._id)}),be=Xn.a.div(zn||(zn=Object(Un.a)(["\n  background-color: rgb(49, 121, 186);\n  \n  display: flex;\n  flex-direction: row;\n  color: #393939;\n  overflow-y: hidden;\n  overflow-x: auto;\n  position: absolute;\n  padding: 5px;\n  align-items: flex-start;\n  max-width: 900px;\n  min-width: 900px;\n  min-height: 700px;\n"]))),je=(Xn.a.div(Pn||(Pn=Object(Un.a)([""]))),Xn.a.div(_n||(_n=Object(Un.a)(["\n  background-color: rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  border-radius: 3px;\n  height: auto;\n  min-height: 32px;\n  padding: 4px;\n  width: 272px;\n  transition: background 85ms ease-in, opacity 40ms ease-in,\n    border-color 85ms ease-in;\n"])))),xe=Xn.a.form(En||(En=Object(Un.a)([""]))),he=Xn.a.a(Mn||(Mn=Object(Un.a)(["\n  text-decoration: none;\n  color: #fff;\n"]))),fe=Xn.a.span(Fn||(Fn=Object(Un.a)(["\n  color: #99999;\n"]))),Oe=(Object(Xn.a)(fe)(Ln||(Ln=Object(Un.a)(["\n  color: #fff;\n  display: none;\n  padding: 6px 8px;\n  transition: color 85ms ease-in;\n"]))),Xn.a.span(Hn||(Hn=Object(Un.a)([""]))),Xn.a.input(Wn||(Wn=Object(Un.a)(["\n  background: none;\n  border-color: transparent;\n  box-shadow: none;\n  cursor: pointer;\n  display: none;\n  margin: 0;\n"])))),ge=Object(Xn.a)(Oe)(Rn||(Rn=Object(Un.a)(["\n  background: #fff;\n  border: none;\n  box-shadow: inset 0 0 0 2px #0079bf;\n  box-sizing: border-box;\n  display: block;\n  margin: 0;\n  transition: margin 85ms ease-in, background 85ms ease-in;\n  width: 100%;\n  border-radius: 3px;\n  padding: 8px 12px;\n  color: #172b4d;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 400;\n"]))),me=Xn.a.div(An||(An=Object(Un.a)(["\n  height: 32px;\n"]))),ve=Xn.a.input(Gn||(Gn=Object(Un.a)(["\n  background-color: #5aac44;\n  box-shadow: none;\n  border: none;\n  color: #fff;\n  border-radius: 3px;\n  height: 100%;\n  cursor: pointer;\n"]))),we=(Xn.a.a(Jn||(Jn=Object(Un.a)(["\n  height: 32px;\n  line-height: 32px;\n  width: 32px;\n"]))),Xn.a.input(Yn||(Yn=Object(Un.a)(["\n  background-color: red;\n  box-shadow: none;\n  border: none;\n  color: #fff;\n  height: 100%;\n  cursor: pointer;\n"])))),ke=function(n){var e=n.todoSelected,t=n.updateTodos,c=Object(r.useState)(!1),i=Object(a.a)(c,2),o=i[0],s=i[1],d=Object(r.useState)(""),u=Object(a.a)(d,2),l=u[0],p=u[1],b=Object(r.useState)([]),j=Object(a.a)(b,2),x=j[0],h=j[1];Object(r.useEffect)((function(){e.tasks&&h(e.tasks)}),[e.tasks]);var f=function(){var n=Object(U.a)(q.a.mark((function n(){var a,r,c,i;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=x||[],!l){n.next=10;break}return p(""),n.next=5,ln("task",{description:l,todoId:e._id});case 5:r=n.sent,c=r.task,i=[].concat(Object(J.a)(a),[c]),h(i),t();case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),O=function(){var n=Object(U.a)(q.a.mark((function n(e,a){var r;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,pn("task/"+e._id);case 2:(r=x).splice(a,1),h(r),t();case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return Object(M.jsxs)(be,{children:[Object(M.jsx)(qn.Container,{orientation:"horizontal",onDragStart:function(){console.log("on drag start")},getChildPayload:function(n){return x[n]},dragHandleSelector:".column-drag-handle",dropPlaceholder:{animationDuration:150,showOnTop:!0,className:"cards-drop-preview"},children:x.length>0&&x.map((function(n,e){return Object(M.jsx)(pe,{item:n,index:e,deleteTask:O,updateTodos:t})}))}),Object(M.jsx)(je,{children:Object(M.jsx)(xe,{children:o?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(ge,{value:l,onChange:function(n){return p(n.target.value)}}),Object(M.jsxs)(me,{children:[Object(M.jsx)(ve,{type:"button",value:"Add Tarefa",onClick:f}),Object(M.jsx)(we,{type:"button",value:"Fechar",onClick:function(){return s(!1)}})]})]}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(he,{onClick:function(){s(!0)},children:Object(M.jsx)(fe,{children:"Criar Tarefa"})}),Object(M.jsx)(Oe,{})]})})})]})};function ye(){var n=nn(),e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1],o=Object(r.useState)(null),d=Object(a.a)(o,2),u=d[0],p=d[1],b=Object(r.useState)(""),j=Object(a.a)(b,2),x=j[0],h=j[1],f=function(){var n=Object(U.a)(q.a.mark((function n(){var e,t;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,un("todo");case 3:e=n.sent,t=e.todos,i(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),alert("Ocorreu um erro ao buscar os todos");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();Object(r.useEffect)((function(){function n(){return(n=Object(U.a)(q.a.mark((function n(){var e,t;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,u){n.next=7;break}return n.next=4,un("todo");case 4:e=n.sent,t=e.todos,i(t);case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),alert("Ocorreu um erro ao buscar os todos");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[u]);var O=function(){var n=Object(U.a)(q.a.mark((function n(){var e,t;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!x){n.next=6;break}return n.next=3,ln("todo",{description:x});case 3:e=n.sent,t=e.todo,i([].concat(Object(J.a)(c),[t]));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(M.jsx)(l.a,{maxWidth:"lg",className:n.container,children:Object(M.jsxs)(X.a,{container:!0,spacing:3,children:[Object(M.jsx)(X.a,{item:!0,xs:12,children:Object(M.jsxs)(K.a,{className:n.paper,children:["Criar lista de tarefas:",Object(M.jsxs)(s.a,{pt:4,children:[Object(M.jsx)(Q.a,{onChange:function(n){h(n.target.value)},placeholder:"Nome",className:n.name,inputProps:{"aria-label":"nome"}}),Object(M.jsx)(V.a,{variant:"contained",color:"primary",size:"small",className:n.button,startIcon:Object(M.jsx)($.a,{}),onClick:O,children:"Criar"})]})]})}),Object(M.jsx)(X.a,{item:!0,xs:12,md:8,lg:9,children:(null===u||void 0===u?void 0:u._id)&&Object(M.jsx)(ke,{todoSelected:u,updateTodos:f})}),Object(M.jsx)(X.a,{item:!0,xs:12,md:4,lg:3,children:Object(M.jsxs)(K.a,{className:n.paper,children:[Object(M.jsx)(s.a,{paddingLeft:2,pt:2,children:"Lista de tarefas:"}),Object(M.jsx)(jn,{todos:c,selectTodoMenu:function(n){p(n)}})]})})]})})}var Ce=Object(d.a)((function(n){return{root:{display:"flex"},content:{flexGrow:1,height:"100vh",overflow:"auto"},appBarSpacer:n.mixins.toolbar,container:{paddingTop:n.spacing(4),paddingBottom:n.spacing(4)},paper:{padding:n.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),Se=function(n){switch(n){case _:return"Tarefas";case E:return"Sobre";default:return"Tarefas"}};function Te(){var n=Ce(),e=c.a.useState(_),t=Object(a.a)(e,2),r=t[0],i=t[1];return Object(M.jsxs)("div",{className:n.root,children:[Object(M.jsx)(u.a,{}),Object(M.jsx)(R,{title:Se(r),handleMenu:function(n){i(n)}}),Object(M.jsxs)("main",{className:n.content,children:[Object(M.jsx)("div",{className:n.appBarSpacer}),r===_&&Object(M.jsx)(ye,{}),r===E&&Object(M.jsx)(l.a,{maxWidth:"lg",className:n.container,children:"Essa aplica\xe7\xe3o permite que voc\xea crie listas de tarefas, onde voc\xea consegue cadastrar tarefas e subtarefas, ainda pode contar com a transi\xe7\xe3o de subtarefas entre tarefas."}),Object(M.jsx)(s.a,{pt:4,children:Object(M.jsx)(G,{})})]})]})}o.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(Te,{})}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.6cd89a25.chunk.js.map