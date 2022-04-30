(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),i=(n(13),n(0)),o=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h2",{children:"Expense Tracker"})})},u=n(3),j=n(8),l=n(4),d=function(t,e){switch(e.type){case"ADD_TRANSACTION":return Object(l.a)(Object(l.a)({},t),{},{transactions:[].concat(Object(j.a)(t.transactions),[e.payload])});case"DELETE_TRANSACTION":return Object(l.a)(Object(l.a)({},t),{},{transactions:t.transactions.filter((function(t){return t.id!==e.payload}))});default:return t}},b={transactions:JSON.parse(localStorage.getItem("transactions"))},O=Object(c.createContext)(b),x=function(t){var e=t.children,n=Object(c.useReducer)(d,b),r=Object(u.a)(n,2),a=r[0],s=r[1],o=O.Provider;return Object(i.jsx)(o,{value:{transactions:a.transactions,deleteTransaction:function(t){s({type:"DELETE_TRANSACTION",payload:t})},addTransaction:function(t){s({type:"ADD_TRANSACTION",payload:t})}},children:e})},h=function(){var t=Object(c.useContext)(O).transactions.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0).toFixed(2);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:"Your Balance"}),Object(i.jsxs)("h1",{children:["Rs. ",t]})]})},m=function(){var t=Object(c.useContext)(O).transactions.map((function(t){return t.amount})),e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0).toFixed(2),n=(-1*t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0)).toFixed(2);return Object(i.jsxs)("div",{className:"inc-exp-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Income"}),Object(i.jsxs)("p",{className:"money plus",children:["+Rs. ",e]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Expense"}),Object(i.jsxs)("p",{className:"money minus",children:["-Rs. ",n]})]})]})},f=function(t){var e=t.transaction,n=Object(c.useContext)(O).deleteTransaction,r=e.amount<0?"-":"+";return Object(i.jsxs)("li",{className:e.amount<0?"minus":"plus",children:[e.text," ",Object(i.jsxs)("span",{children:[r,"Rs. ",Math.abs(e.amount)]}),Object(i.jsx)("button",{className:"delete-btn",onClick:function(){return n(e.id)},children:"x"})]})},p=function(){var t=Object(c.useContext)(O).transactions;return Object(c.useEffect)((function(){localStorage.setItem("transactions",JSON.stringify(t))}),[t]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"History"}),Object(i.jsx)("ul",{id:"list",className:"list",children:t.map((function(t){return Object(i.jsx)(f,{transaction:t},t.id)}))})]})},v=function(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(0),s=Object(u.a)(a,2),o=s[0],j=s[1],l=Object(c.useContext)(O).addTransaction;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"Add new transaction"}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:Math.floor(1e8*Math.random()),text:n,amount:+o};n&&o?(l(e),r(""),j("")):alert("Please enter a valid input text and amount !")},children:[Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("input",{type:"text",value:n,onChange:function(t){return r(t.target.value)},placeholder:"Enter text..."})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(i.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(i.jsx)("input",{type:"number",value:o,onChange:function(t){return j(t.target.value)},placeholder:"Enter amount..."})]}),Object(i.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};var N=function(){return Object(i.jsxs)(x,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(h,{}),Object(i.jsx)(m,{}),Object(i.jsx)(p,{}),Object(i.jsx)(v,{})]})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.2fd6d9fd.chunk.js.map