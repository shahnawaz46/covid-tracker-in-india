(this.webpackJsonpcovid_cases_in_india=this.webpackJsonpcovid_cases_in_india||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(6),r=c.n(n),i=(c(12),c(3)),d=c.n(i),j=c(7),l=c(4),o=(c(5),c(0)),b=function(e){return Object(o.jsxs)("div",{className:"card-style",style:{background:e.color},children:[Object(o.jsx)("h2",{style:{fontSize:"15px",paddingBottom:"5px"},children:e.value1}),Object(o.jsx)("h1",{style:{fontSize:"28px"},children:e.value2})]})},h=function(e){var t=e.covidData;return Object(o.jsxs)("div",{className:"main-div",children:[Object(o.jsx)("h2",{children:"Covid Cases In INDIA"}),Object(o.jsx)("span",{className:"live",children:"\ud83d\udd34 LIVE"}),Object(o.jsxs)("div",{className:"cards",children:[Object(o.jsx)(b,{value1:"Country",value2:"INDIA",color:"blue"}),Object(o.jsx)(b,{value1:"Total Case",value2:t.confirmed,color:"Grey"}),Object(o.jsx)(b,{value1:"Recoverd",value2:t.recovered,color:"green"}),Object(o.jsx)(b,{value1:"Deaths",value2:t.deaths,color:"red"}),Object(o.jsx)(b,{value1:"Active Case",value2:t.active,color:"Grey"}),Object(o.jsx)(b,{value1:"Last Update",value2:t.lastupdatedtime,color:"black"})]})]})},u=(c(15),function(e){var t=e.covidData;return Object(o.jsxs)("div",{className:"main-div",children:[Object(o.jsx)("h2",{children:"Covid Cases In INDIA State Wise"}),Object(o.jsx)("div",{className:"table-div",children:Object(o.jsx)("table",{className:"main-table",cellSpacing:"0",children:Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{id:"ddd",children:[Object(o.jsx)("th",{children:"S.No"}),Object(o.jsx)("th",{children:"State"}),Object(o.jsx)("th",{children:"Total"}),Object(o.jsx)("th",{children:"Recover"}),Object(o.jsx)("th",{children:"Deaths"}),Object(o.jsx)("th",{children:"Active"}),Object(o.jsx)("th",{children:"Date and Time"})]}),t.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t+1}),Object(o.jsx)("td",{children:e.state}),Object(o.jsx)("td",{children:e.confirmed}),Object(o.jsx)("td",{children:e.recovered}),Object(o.jsx)("td",{children:e.deaths}),Object(o.jsx)("td",{children:e.active}),Object(o.jsx)("td",{children:e.lastupdatedtime})]},t)}))]})})})]})});var v=function(){var e=Object(s.useState)({}),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),r=Object(l.a)(n,2),i=r[0],b=r[1],v=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,a(c.statewise[0]),s=c.statewise.slice(1),b(s),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){v()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h,{covidData:c}),Object(o.jsx)(u,{covidData:i})]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))},5:function(e,t,c){}},[[16,1,2]]]);
//# sourceMappingURL=main.30a3e22f.chunk.js.map