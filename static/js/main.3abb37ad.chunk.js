(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",input:"ContactForm_input__gm87B",btn:"ContactForm_btn__2Bpnz"}},,,,,function(t,e,n){t.exports={contactsList:"ContactsItem_contactsList__g9F8K",btn:"ContactsItem_btn__3ZS0g"}},,,,function(t,e,n){t.exports={input:"Filter_input__2DoVp"}},function(t,e,n){t.exports={container:"App_container__6j1zw"}},,function(t,e,n){t.exports=n(20)},,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=n(12),u=n(2),l=n(3),m=n(5),s=n(4),d=n(9),f=n(22),b=n(1),p=n.n(b),h=function(t){Object(m.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.value,r=n.name;t.setState(Object(d.a)({},r,a))},t.handleSubmitForm=function(e){var n=t.state,a=n.name,r=n.number;e.preventDefault();var c={name:a,number:r,id:Object(f.a)()};t.props.onAddContact(c),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:p.a.form,onSubmit:this.handleSubmitForm},r.a.createElement("label",null,"Name",r.a.createElement("input",{className:p.a.input,name:"name",type:"text",value:this.state.name,onChange:this.handleChange,required:!0})),r.a.createElement("label",null,"Number",r.a.createElement("input",{className:p.a.input,name:"number",type:"text",value:this.state.number,onChange:this.handleChange,required:!0})),r.a.createElement("button",{className:p.a.btn,type:"submit"},"Add contact")))}}]),n}(a.Component),v=n(6),C=n.n(v);var g=function(t){var e=t.contact,n=e.name,a=e.number,c=e.id,o=t.onRemoveContact;return r.a.createElement("li",{className:C.a.contactsList},r.a.createElement("span",null,n,": ",a),r.a.createElement("button",{className:C.a.btn,type:"button","data-id":c,onClick:function(t){o(t.target.dataset.id)}},"delete"))};var E=function(t){var e=t.contacts,n=t.onRemoveContact;return r.a.createElement("ul",null,e.map((function(t){return r.a.createElement(g,{key:t.id,contact:t,onRemoveContact:n})})))},_=n(10),y=n.n(_);var F=function(t){var e=t.value,n=t.onChangeFilter;return r.a.createElement("label",null,"Find contacts by name",r.a.createElement("input",{className:y.a.input,name:"filter",type:"text",value:e,onChange:function(t){return n(t.target.value)}}))},j=n(11),O=n.n(j),S=function(t){Object(m.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleChange=function(e){t.setState({name:e.target.value})},t.addContact=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},t.onChangeFilter=function(e){t.setState({filter:e})},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=e.filter((function(t){return t.name.toLowerCase().includes(n)}));return r.a.createElement("div",{className:O.a.container},r.a.createElement("h1",null,"Phonebook"),r.a.createElement(h,{onAddContact:this.addContact}),r.a.createElement("h2",null,"Contacts"),e.length>1?r.a.createElement(F,{value:n,onChangeFilter:this.onChangeFilter}):null,r.a.createElement(E,{contacts:a,onRemoveContact:this.removeContact}))}}]),n}(a.Component);n(18),n(19);o.a.render(r.a.createElement(S,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.3abb37ad.chunk.js.map