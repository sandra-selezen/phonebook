"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[796],{3017:function(n,e,r){r.d(e,{t:function(){return m}});var t=r(2392),i=r(8208),c=r(4363),s=r(5442),o=r(4224),u=r(5705),a=(r(2791),r(8007)),l=r(9482),d=r(184),h=a.Ry().shape({name:a.Z_().required(),number:a.Z_().required()}),x={name:"",number:""},m=function(){return(0,d.jsx)(u.J9,{initialValues:x,validationSchema:h,onSubmit:function(n,e){alert(JSON.stringify(n,null,2)),e.resetForm()},children:function(n){var e=n.handleSubmit;return(0,d.jsxs)(u.l0,{onSubmit:e,children:[(0,d.jsxs)(t.NI,{isRequired:!0,children:[(0,d.jsxs)(i.l,{htmlFor:"name",children:[(0,d.jsx)(c.J,{as:l.dgb}),"Name"]}),(0,d.jsx)(u.gN,{as:s.I,id:"name",name:"name",type:"text",placeholder:"Enter contact name"})]}),(0,d.jsxs)(t.NI,{isRequired:!0,children:[(0,d.jsxs)(i.l,{htmlFor:"number",children:[(0,d.jsx)(c.J,{as:l.XAr}),"Number"]}),(0,d.jsx)(u.gN,{as:s.I,id:"number",name:"number",type:"tel",placeholder:"Enter contact phone number"})]}),(0,d.jsxs)(o.z,{type:"submit",children:[(0,d.jsx)(c.J,{as:l.jus}),"Add contact"]})]})}})}},3611:function(n,e,r){r.d(e,{_:function(){return c}});var t=r(8206),i=(r(2791),r(184)),c=function(n){var e=n.children;return(0,i.jsx)(t.W,{width:["container.sm","container.md","container.lg","container.xl"],children:e})}},9796:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t=r(8348),i=r(2347),c=r(4224),s=r(9975),o=r(581),u=r(3182),a=r(1211),l=r(7970),d=r(1216),h=r(3017),x=r(9434),m=r(8097),j=r(4087),f=r(2610),p=r(176),b=r(6916),g=function(n){return n.contacts.isLoading},v=function(n){return n.contacts.error},_=(0,b.P1)([function(n){return n.contacts.items},function(n){return n.filter}],(function(n,e){if(!e)return n;var r=e.toLowerCase();return n.filter((function(n){var e=n.name,t=n.number;return e.toLowerCase().trim().includes(r)||t.trim().includes(r)}))})),k=(r(2791),r(9482)),w=r(184),C=function(){var n=(0,x.v9)(_),e=(0,x.v9)(g),r=(0,x.v9)(v),t=(0,x.I0)();return(0,w.jsxs)(w.Fragment,{children:[!n.length&&!r&&!e&&(0,w.jsx)(j.xu,{children:(0,w.jsx)(i.x,{children:"Your Phonebook is empty"})}),!r&&!e&&(null===n||void 0===n?void 0:n.length)>0&&(0,w.jsx)(f.g,{spacing:"24px",children:n.map((function(n){return(0,w.jsxs)(p.k,{alignItems:"center",gap:"24px",children:[(0,w.jsx)(j.xu,{children:(0,w.jsxs)(i.x,{children:[n.name,": ",n.number]})}),(0,w.jsx)(j.xu,{children:(0,w.jsx)(c.z,{title:"Delete contact","aria-label":"Delete contact",onClick:function(){return e=n.id,t((0,m.GK)(e));var e},children:(0,w.jsx)(k.qNE,{})})})]},n.id)}))})]})},N=r(3611),q=function(){var n=(0,t.q)(),e=n.isOpen,r=n.onOpen,x=n.onClose;return(0,w.jsxs)(N._,{children:[(0,w.jsx)(i.x,{children:"Contacts Page"}),(0,w.jsx)(c.z,{onClick:r,children:"Add new contact"}),(0,w.jsxs)(s.u_,{isOpen:e,onClose:x,children:[(0,w.jsx)(o.Z,{}),(0,w.jsxs)(u.h,{children:[(0,w.jsx)(a.x,{children:"Add new contact"}),(0,w.jsx)(l.o,{}),(0,w.jsx)(d.f,{children:(0,w.jsx)(h.t,{})})]})]}),(0,w.jsx)(C,{})]})}}}]);
//# sourceMappingURL=796.cad5fe30.chunk.js.map