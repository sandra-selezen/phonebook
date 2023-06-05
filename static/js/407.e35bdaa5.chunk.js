"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[407],{3611:function(n,e,r){r.d(e,{_:function(){return s}});var t=r(8206),i=(r(2791),r(184)),s=function(n){var e=n.children;return(0,i.jsx)(t.W,{width:["container.sm","container.md","container.lg","container.xl"],children:e})}},9407:function(n,e,r){r.r(e),r.d(e,{default:function(){return z}});var t=r(8348),i=r(2347),s=r(4224),a=r(9975),c=r(581),o=r(3182),l=r(1211),u=r(7970),d=r(1216),x=r(1413),h=r(2392),m=r(8208),j=r(4363),b=r(5442),f=r(5705),p=(r(2791),r(8007)),g=r(9482),v=r(4857),_=r(9434),C=r(5218),k=r(208),w=r(184),I=p.Ry().shape({name:p.Z_().required(),number:p.Z_().required()}),y={name:"",number:""},N=function(){var n=(0,v.gW)(),e=(0,_.I0)(),r=function(r){var t=r.name,i=r.number;!function(e){var r=e.name,t=e.number,i=r.toLowerCase().trim(),s=t.trim(),a=n.find((function(n){return n.name.toLowerCase().trim()===i&&n.number.trim()===s}));return Boolean(a)}({name:t,number:i})?e((0,k.uK)({name:t,number:i})):(0,C.Am)("This contact is already in your Phonebook!",{icon:"\ud83d\udc7b"})};return(0,w.jsx)(f.J9,{initialValues:y,validationSchema:I,onSubmit:function(n,e){console.log(n),r((0,x.Z)({},n)),e.resetForm()},children:(0,w.jsxs)(f.l0,{children:[(0,w.jsxs)(h.NI,{isRequired:!0,children:[(0,w.jsxs)(m.l,{htmlFor:"name",children:[(0,w.jsx)(j.J,{as:g.dgb}),"Name"]}),(0,w.jsx)(f.gN,{as:b.I,id:"name",name:"name",type:"text",placeholder:"Enter contact name"})]}),(0,w.jsxs)(h.NI,{isRequired:!0,children:[(0,w.jsxs)(m.l,{htmlFor:"number",children:[(0,w.jsx)(j.J,{as:g.XAr}),"Number"]}),(0,w.jsx)(f.gN,{as:b.I,id:"number",name:"number",type:"tel",placeholder:"Enter contact phone number"})]}),(0,w.jsxs)(s.z,{type:"submit",children:[(0,w.jsx)(j.J,{as:g.jus}),"Add contact"]})]})})},q=r(4087),F=r(2610),A=r(176),J=function(){var n=(0,v.Nh)(),e=(0,v.nR)(),r=(0,v.VI)(),t=(0,_.I0)();return(0,w.jsxs)(w.Fragment,{children:[!n.length&&!r&&!e&&(0,w.jsx)(q.xu,{children:(0,w.jsx)(i.x,{children:"Your Phonebook is empty"})}),!r&&!e&&(null===n||void 0===n?void 0:n.length)>0&&(0,w.jsx)(F.g,{spacing:"24px",children:n.map((function(n){return(0,w.jsxs)(A.k,{alignItems:"center",gap:"24px",children:[(0,w.jsx)(q.xu,{children:(0,w.jsxs)(i.x,{children:[n.name,": ",n.number]})}),(0,w.jsx)(q.xu,{children:(0,w.jsx)(s.z,{title:"Delete contact","aria-label":"Delete contact",onClick:function(){return e=n.id,t((0,k.GK)(e));var e},children:(0,w.jsx)(g.qNE,{})})})]},n.id)}))})]})},L=r(3611),R=r(6895),Z=function(){var n=(0,v.L0)(),e=(0,_.I0)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(i.x,{children:[(0,w.jsx)(j.J,{as:g._m8})," Find contact by name "]}),(0,w.jsx)(b.I,{value:n,onChange:function(n){e((0,R.T)(n.target.value.toLowerCase()))},autoComplete:"off"})]})},z=function(){var n=(0,t.q)(),e=n.isOpen,r=n.onOpen,x=n.onClose;return(0,w.jsxs)(L._,{children:[(0,w.jsx)(i.x,{children:"Contacts Page"}),(0,w.jsx)(s.z,{onClick:r,children:"Add new contact"}),(0,w.jsx)(Z,{}),(0,w.jsxs)(a.u_,{isOpen:e,onClose:x,children:[(0,w.jsx)(c.Z,{}),(0,w.jsxs)(o.h,{children:[(0,w.jsx)(l.x,{children:"Add new contact"}),(0,w.jsx)(u.o,{}),(0,w.jsx)(d.f,{children:(0,w.jsx)(N,{})})]})]}),(0,w.jsx)(J,{})]})}}}]);
//# sourceMappingURL=407.e35bdaa5.chunk.js.map