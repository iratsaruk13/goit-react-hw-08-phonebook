"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[571],{2561:function(n,e,r){r.d(e,{Gq:function(){return d},jj:function(){return b},lX:function(){return l},xj:function(){return f},yt:function(){return x}});var o,t,i,a,s,c=r(168),u=r(7691),d=u.ZP.form(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 0 auto;\n"]))),l=u.ZP.label(t||(t=(0,c.Z)(["\n  margin-right: auto;\n  font-size: 20px;\n  color: #1677FF;\n"]))),x=u.ZP.input(i||(i=(0,c.Z)(["\n  padding: 10px;\n  border: 2px solid #ccc;\n  border-radius: 5px;\n  font-size: 16px;\n  color: #555;\n  outline: none;\n  min-width: 300px;\n  &:focus {\n  border-color: #1677FF;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n  }\n"]))),b=u.ZP.div(a||(a=(0,c.Z)(["\n  position: absolute;\n  color: #cb1717;\n  font-size: 14px;\n"]))),f=u.ZP.button(s||(s=(0,c.Z)(["\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  font-weight: 500;\n  color: #300339;\n  background-color: #e1bbe3;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  width: 100%;\n  border-radius: 10px;\n  border: none;\n  padding: 16px;\n  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);\n  :hover {\n    box-shadow: 0 2px 5px rgba(51, 0, 66, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);\n  }\n"])))},571:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var o,t,i,a,s,c,u,d=r(2606),l=r(2791),x=r(168),b=r(7691),f=b.ZP.ul(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),m=b.ZP.li(t||(t=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),p=b.ZP.p(i||(i=(0,x.Z)(["\n  color: #300339;\n  font-size: 18px;\n"]))),h=b.ZP.button(a||(a=(0,x.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  color: #300339;\n  background-color: #e1bbe3;\n  width: 100px;\n  border-radius: 10px;\n  border: none;\n  padding: 16px;\n  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);\n  :hover {\n    box-shadow: 0 2px 5px rgba(51, 0, 66, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);\n  }\n"]))),g=r(9126),j=r(9434),v=function(n){return n.contacts.array},Z=function(n){return n.filters.value},y=function(n){return n.contacts.isLoading},w=function(n){return n.contacts.error},k=r(208),P=r(184),z=function(){var n=(0,j.v9)(v),e=(0,j.v9)(Z),r=(0,j.I0)(),o=function(){var r=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))}(),t=function(n){if(/^\d{3}-\d{2}(-\d{2})+$/.test(n))return n;for(var e=n.replace(/\D/g,""),r=e.substring(0,3)+"-",o=3;o<e.length;o+=1)(o-3)%2===0&&3!==o&&(r+="-"),r+=e[o];return r};return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(f,{children:o.map((function(n){var e=n.id,o=n.name,i=n.number;return(0,P.jsxs)(m,{children:[(0,P.jsxs)(p,{children:[o,": ",t(i)]}),(0,P.jsx)(h,{type:"button",onClick:function(){return function(n){r((0,k.zY)(n))}(e)},children:(0,P.jsx)(g._y7,{})})]},e)}))})})},_=b.ZP.form(s||(s=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n"]))),C=b.ZP.label(c||(c=(0,x.Z)(["\n  display: block;\n  margin-right: auto;\n  font-size: 18px;\n  color: #300339;\n"]))),F=b.ZP.input(u||(u=(0,x.Z)(["\n  font-size: 16px;\n  color: #300339;\n  border-radius: 15px;\n  border: none;\n  &:hover,\n  &:focus {\n    border: 1px solid #a942d9;\n  }\n  padding: 15px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  width: 100%;\n  background-color: #e9d8f9;\n  &:hover {\n    background-color: #ddaaeb;\n  }\n  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);\n  :hover {\n    box-shadow: 0 0 0 5px rgba(96, 0, 118, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2);\n  }\n\n  &:focus {\n    outline: none;\n    border-color: #00aeef;\n  }\n"]))),q=r(1429),T=function(n){var e=n.label,r=(0,j.v9)(Z),o=(0,j.I0)();return(0,P.jsxs)(_,{initialValues:{filter:""},children:[(0,P.jsx)(C,{htmlFor:"filter",children:e}),(0,P.jsx)(F,{type:"text",id:"filter",name:r.query,onChange:function(n){o((0,q.T)(n.currentTarget.value))}})]})},I=r(1413),L=r(6727),N=r(4695),X=r(1134),S=r(2561),G=r(3728),V=L.Ry().shape({name:L.Z_().required("The field Name is required"),number:L.Z_().required("The field Number is required").min(7,"The number must be at least 7 digits long").max(14,"The number can consist of maximum 14 digits").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"The number must consist of digits")}),Y=function(){var n,e,r=(0,j.v9)(v),o=(0,j.I0)(),t=(0,X.cI)({resolver:(0,N.X)(V)}),i=t.register,a=t.handleSubmit,s=t.reset,c=t.formState.errors,u=function(n,e){if(r.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return alert("".concat(n," is already in contacts."));o((0,k.el)({name:n,number:e}))};return(0,P.jsxs)(S.Gq,{onSubmit:a((function(n){u(n.name,n.number),s()})),children:[(0,P.jsxs)("div",{children:[(0,P.jsx)(S.lX,{htmlFor:"name",children:"Name:"}),(0,P.jsx)(S.yt,(0,I.Z)({type:"text",id:"name"},i("name"))),c.name&&(0,P.jsxs)(S.jj,{children:[" ",null===(n=c.name)||void 0===n?void 0:n.message]})]}),(0,P.jsxs)("div",{children:[(0,P.jsx)(S.lX,{htmlFor:"number",children:"Number:"}),(0,P.jsx)(S.yt,(0,I.Z)({type:"tel",id:"number"},i("number"))),c.number&&(0,P.jsxs)(S.jj,{children:[" ",null===(e=c.number)||void 0===e?void 0:e.message]})]}),(0,P.jsxs)(S.xj,{type:"submit",children:["Add contact ",(0,P.jsx)(G.qVg,{})]})]})},$=r(3521),A=function(){var n=(0,j.v9)(v),e=(0,j.v9)(y),r=(0,j.v9)(w),o=(0,j.I0)();return(0,l.useEffect)((function(){o((0,k.yF)())}),[o]),(0,P.jsx)("div",{children:(0,P.jsxs)(d.W2,{children:[(0,P.jsx)(d.U3,{children:"Phonebook"}),(0,P.jsx)(Y,{}),e&&!r&&(0,P.jsx)($.a,{}),(0,P.jsx)(d.Ct,{children:"Contacts"}),(0,P.jsx)(T,{label:"Find contacts by name"}),0===n.length?(0,P.jsx)(d.v0,{children:"You don't have contacts yet"}):(0,P.jsx)(z,{})]})})}}}]);
//# sourceMappingURL=571.149fd097.chunk.js.map