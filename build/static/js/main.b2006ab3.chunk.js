(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={record:"Contact_record__3442a",name:"Contact_name__1HyIU",number:"Contact_number__1BPs3",spacing:"Contact_spacing__HuWNc"}},17:function(e,t,n){e.exports={list:"ContactList_list__1kXTC",line:"ContactList_line__22Pr0",deleteButton:"ContactList_deleteButton__3ivaE"}},18:function(e,t,n){e.exports={App:"App_App__1sn4Y","App-logo":"App_App-logo__KkjdP","App-logo-spin":"App_App-logo-spin__3vqZp","App-header":"App_App-header__3cEyg","App-link":"App_App-link__2NzkC",headline:"App_headline__3hn97",container:"App_container__1V3uc"}},21:function(e,t,n){e.exports={filter:"Filter_filter__3NbYw",filterLabel:"Filter_filterLabel__R66G0"}},29:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),o=n(13),s=n.n(o),i=(n(29),n(22)),u=n(4),l=n(6),p=n.n(l),b=n(15),d="https://618eda9450e24d0017ce14a1.mockapi.io/contacts",j={readContacts:function(){return fetch(d).then((function(e){return e.json()}))},addContacts:function(e){return console.log("contact=",JSON.stringify(e)),fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},deleteContacts:function(e){return fetch(d+"/"+e,{method:"delete"}).then((function(e){return e.json()}))}},f=n(3),m=Object(f.c)("contacts/readContacts",function(){var e=Object(b.a)(p.a.mark((function e(t,n){var r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,j.readContacts();case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),h=Object(f.c)("contacts/addContacts",function(){var e=Object(b.a)(p.a.mark((function e(t,n){var r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,j.addContacts(t).then((function(e){return e.json()}));case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),O=Object(f.c)("contacts/deleteContacts",function(){var e=Object(b.a)(p.a.mark((function e(t,n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,j.deleteContacts(t);case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),_=n(16),v=n.n(_),x=n(8),C=n.n(x),g=n(1),A=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(i.a)(c,2),s=o[0],l=o[1],p=Object(u.b)(),b=v.a.generate(),d=v.a.generate(),j=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":r(a);break;case"number":l(a);break;default:return}},f=function(){r(""),l("")};return Object(g.jsxs)("form",{className:C.a.form,onSubmit:function(e){e.preventDefault();var t=v.a.generate();p(h({name:n,phone:s,id:t})),f()},children:[Object(g.jsxs)("div",{className:C.a.wrapper,children:[Object(g.jsxs)("label",{htmlFor:b,children:["Name",Object(g.jsx)("input",{className:C.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:b,value:n,onChange:j})]}),Object(g.jsxs)("label",{htmlFor:d,children:["Phone Number",Object(g.jsx)("input",{className:C.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:d,value:s,onChange:j})]})]}),Object(g.jsx)("button",{className:C.a.submitButton,type:"submit",children:"Add contact"})]})},N=n(7),w=function(e){return e.contacts.items},y=function(e){return e.contacts.filter},k=Object(N.a)([w,y],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),L={getItems:w,getFilter:y,getVisible:k},S=n(10),B=n.n(S),F=function(e){var t=e.name,n=e.number;return Object(g.jsxs)("p",{className:B.a.record,children:[Object(g.jsxs)("span",{className:B.a.name,children:[" ",t]})," ",Object(g.jsx)("span",{className:B.a.spacing,children:":"}),Object(g.jsx)("span",{className:B.a.number,children:n})]})},P=n(17),E=n.n(P),T=function(){var e=Object(u.b)();Object(a.useEffect)((function(){e(m())}),[]);var t=Object(u.c)((function(e){return L.getVisible(e)}));return Object(g.jsx)("ul",{className:E.a.list,children:t.map((function(t){return Object(g.jsxs)("li",{className:E.a.line,children:[Object(g.jsx)(F,{name:t.name,number:t.phone}),Object(g.jsx)("button",{type:"button",className:E.a.deleteButton,onClick:function(){return e(O(t.id))}})]},t.id)}))})},z=Object(f.b)("contacts/changeFilter"),I=n(21),V=n.n(I),Z=function(){var e=Object(u.c)((function(e){return e.contacts.filter})),t=Object(u.b)();return Object(g.jsxs)("label",{className:V.a.filterLabel,children:["Search by name",Object(g.jsx)("input",{type:"text",className:V.a.filter,value:e,onChange:function(e){return t(z(e.currentTarget.value))}})]})},J=n(18),H=n.n(J),M=function(){return Object(g.jsxs)("div",{className:H.a.container,children:[Object(g.jsx)("h1",{className:H.a.headline,children:"Phone book"}),Object(g.jsx)(A,{}),Object(g.jsx)("h2",{className:H.a.headline,children:"Contacts"}),Object(g.jsx)(Z,{}),Object(g.jsx)(T,{})]})},W=n(11),q=n(24),R=n(2),Y=Object(f.d)([],(r={},Object(W.a)(r,m.fulfilled,(function(e,t){return t.payload})),Object(W.a)(r,h.fulfilled,(function(e,t){var n=t.payload;return function(e,t){var n=t.name.toLowerCase();return!e.some((function(e){return e.name.toLowerCase()===n}))}(e,n)?[].concat(Object(q.a)(e),[n]):alert("THIS NAME IS ALREADY PRESENT IN A PHONEBOOK")})),Object(W.a)(r,O.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),r)),D=Object(f.d)("",Object(W.a)({},z,(function(e,t){return t.payload}))),K=Object(R.b)({items:Y,filter:D});var G=n(5),U=Object(f.a)({reducer:{contacts:K},devTools:!1,middleware:function(e){return e({serializableCheck:{ignoredActions:[G.a,G.f,G.b,G.c,G.d,G.e]}})}}),X={store:U,persistor:Object(G.g)(U)};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(u.a,{store:X.store,children:Object(g.jsx)(M,{})})}),document.getElementById("root"))},8:function(e,t,n){e.exports={form:"ContactForm_form__Zizry",wrapper:"ContactForm_wrapper__3P4ZI",input:"ContactForm_input__2Vf47",submitButton:"ContactForm_submitButton__iPdwM"}}},[[46,1,2]]]);
//# sourceMappingURL=main.b2006ab3.chunk.js.map