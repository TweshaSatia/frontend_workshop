(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t(23)},17:function(e,a,t){},19:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(1),A=t.n(n),r=t(8),c=t.n(r),l=(t(17),t(2)),s=(t(19),t(4)),o=function(){return A.a.createElement("div",null,A.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark"},A.a.createElement("div",{className:"container-fluid"},A.a.createElement(s.b,{className:"navbar-brand",to:"/"},"News"),A.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},A.a.createElement("span",{className:"navbar-toggler-icon"})),A.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},A.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},A.a.createElement("li",{className:"nav-item"},A.a.createElement(s.b,{className:"nav-link","aria-current":"page",to:"/"},"Home")),A.a.createElement("li",{className:"nav-item"},A.a.createElement(s.b,{className:"nav-link",to:"/business"},"Business")),A.a.createElement("li",{className:"nav-item"},A.a.createElement(s.b,{className:"nav-link",to:"/entertainment"},"Entertainment")),A.a.createElement("li",{className:"nav-item"},A.a.createElement(s.b,{className:"nav-link",to:"/general"},"General")),A.a.createElement("li",{className:"nav-item"},A.a.createElement(s.b,{className:"nav-link",to:"/health"},"Health")),A.a.createElement("li",{className:"nav-item"},A.a.createElement(s.b,{className:"nav-link",to:"/science"},"Science")),A.a.createElement("li",{className:"nav-item"},A.a.createElement(s.b,{className:"nav-link",to:"/sports"},"Sports")),A.a.createElement("li",{className:"nav-item"},A.a.createElement(s.b,{className:"nav-link",to:"/technology"},"Technology")))))))},i=t(5),m=t.n(i),g=t(6),p=function(e){var a=e.title,t=e.description,n=e.imageUrl,r=e.newsUrl,c=e.author,l=e.date,s=e.source;return A.a.createElement("div",{className:"my-3"},A.a.createElement("div",{className:"card"},A.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}},A.a.createElement("span",{className:"badge rounded-pill bg-danger"}," ",s," ")),A.a.createElement("img",{src:n||"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg",className:"card-img-top",alt:"..."}),A.a.createElement("div",{className:"card-body"},A.a.createElement("h5",{className:"card-title"},a,"  "),A.a.createElement("p",{className:"card-text"},t),A.a.createElement("p",{className:"card-text"},A.a.createElement("small",{className:"text-muted"},"By ",c||"Unknown"," on  ",new Date(l).toGMTString())),A.a.createElement("a",{rel:"noreferrer",href:r,target:"_blank",className:"btn btn-sm btn-dark"},"Read More"))))},E=t(9),h=t.n(E),u=function(){return A.a.createElement("div",{className:"text-center"},A.a.createElement("img",{className:"my-3",src:h.a,alt:"loading"}))},d=t(10),C=function(e){var a=Object(n.useState)([]),t=Object(l.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)(!0),o=Object(l.a)(s,2),i=o[0],E=o[1],h=Object(n.useState)(1),C=Object(l.a)(h,2),y=C[0],I=C[1],B=Object(n.useState)(0),S=Object(l.a)(B,2),k=S[0],w=S[1],N=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},K=function(){var a=Object(g.a)(m.a.mark(function a(){var t,n,A;return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.setProgress(10),t="https://newsapi.org/v2/top-headlines?country=".concat(e.country,"&category=").concat(e.category,"&apiKey=").concat(e.apiKey,"&page=").concat(y,"&pageSize=").concat(e.pageSize),E(!0),a.next=5,fetch(t);case 5:return n=a.sent,e.setProgress(30),a.next=9,n.json();case 9:A=a.sent,e.setProgress(70),c(A.articles),w(A.totalResults),E(!1),e.setProgress(100);case 15:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}();Object(n.useEffect)(function(){document.title="".concat(N(e.category)," - News"),K()},[]);var b=function(){var a=Object(g.a)(m.a.mark(function a(){var t,n,A;return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t="https://newsapi.org/v2/top-headlines?country=".concat(e.country,"&category=").concat(e.category,"&apiKey=").concat(e.apiKey,"&page=").concat(y+1,"&pageSize=").concat(e.pageSize),I(y+1),a.next=4,fetch(t);case 4:return n=a.sent,a.next=7,n.json();case 7:A=a.sent,c(r.concat(A.articles)),w(A.totalResults);case 10:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}();return A.a.createElement(A.a.Fragment,null,A.a.createElement("h1",{className:"text-center",style:{margin:"35px 0px",marginTop:"90px"}},"News - Top ",N(e.category)," Headlines"),i&&A.a.createElement(u,null),A.a.createElement(d.a,{dataLength:r.length,next:b,hasMore:r.length!==k,loader:A.a.createElement(u,null)},A.a.createElement("div",{className:"container"},A.a.createElement("div",{className:"row"},r.map(function(e){return A.a.createElement("div",{className:"col-md-4",key:e.url},A.a.createElement(p,{title:e.title?e.title:"",description:e.description?e.description:"",imageUrl:e.urlToImage,newsUrl:e.url,author:e.author,date:e.publishedAt,source:e.source.name}))})))))};C.defaultProps={country:"in",pageSize:8,category:"general"};var y=C,I=t(0),B=t(11),S=function(){var e="609b4df8eef543babd9fc8c8b26da8d6",a=Object(n.useState)(0),t=Object(l.a)(a,2),r=t[0],c=t[1];return A.a.createElement("div",null,A.a.createElement(s.a,null,A.a.createElement(o,null),A.a.createElement(B.a,{height:3,color:"#f11946",progress:r}),A.a.createElement(I.c,null,A.a.createElement(I.a,{exact:!0,path:"/",element:A.a.createElement(y,{setProgress:c,apiKey:e,key:"general",pageSize:5,country:"in",category:"general"})}),A.a.createElement(I.a,{exact:!0,path:"/business",element:A.a.createElement(y,{setProgress:c,apiKey:e,key:"business",pageSize:5,country:"in",category:"business"})}),A.a.createElement(I.a,{exact:!0,path:"/entertainment",element:A.a.createElement(y,{setProgress:c,apiKey:e,key:"entertainment",pageSize:5,country:"in",category:"entertainment"})}),A.a.createElement(I.a,{exact:!0,path:"/general",element:A.a.createElement(y,{setProgress:c,apiKey:e,key:"general",pageSize:5,country:"in",category:"general"})}),A.a.createElement(I.a,{exact:!0,path:"/health",element:A.a.createElement(y,{setProgress:c,apiKey:e,key:"health",pageSize:5,country:"in",category:"health"})}),A.a.createElement(I.a,{exact:!0,path:"/science",element:A.a.createElement(y,{setProgress:c,apiKey:e,key:"science",pageSize:5,country:"in",category:"science"})}),A.a.createElement(I.a,{exact:!0,path:"/sports",element:A.a.createElement(y,{setProgress:c,apiKey:e,key:"sports",pageSize:5,country:"in",category:"sports"})}),A.a.createElement(I.a,{exact:!0,path:"/technology",element:A.a.createElement(y,{setProgress:c,apiKey:e,key:"technology",pageSize:5,country:"in",category:"technology"})}))))};c.a.render(A.a.createElement(A.a.StrictMode,null,A.a.createElement(S,null)),document.getElementById("root"))},9:function(e,a){e.exports="data:image/gif;base64,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"}},[[12,2,1]]]);
//# sourceMappingURL=main.5898f099.chunk.js.map