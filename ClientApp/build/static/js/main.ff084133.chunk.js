(this.webpackJsonpsearchbar=this.webpackJsonpsearchbar||[]).push([[0],{25:function(e,t,n){e.exports=n(38)},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);n(26);var a=n(0),r=n.n(a),o=n(20),i=n.n(o),c=n(24),s=n(8),l=n(9),u=n(12),h=n(11),d=n(13),f=n(4),m=n(15),g=n.n(m),p=n(21),v=n(10),w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={searchString:"",data:null,loaded:!1,loading:!1},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(g.a.mark((function e(){var t=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/getAll").then((function(e){return e.json()})).then((function(e){return t.setState({records:e,loaded:!0})}));case 2:this.refs.search.focus();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(){var e=this,t=this.state.loading;this.setState({searchString:this.refs.search.value}),t||this.setState({loading:!0}),setTimeout((function(){e.setState({loading:!1}),e.refs.search.focus()}),2e3)}},{key:"render",value:function(){var e=this.state,t=(e.searchString,e.records),n=e.loaded,a=e.loading;if(n){var o=this.state.searchString.trim().toLowerCase();return o.length>0&&(t=t.filter((function(e){return(e.first_name.toLowerCase()+e.last_name.toLowerCase()).match(o)}))),r.a.createElement("div",null,r.a.createElement("h3",null,"Search by first and last name"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:this.state.searchString,ref:"search",onChange:this.handleChange,placeholder:"type name here"})),a?r.a.createElement("div",{class:"spinner",role:"status"}):r.a.createElement("div",null,r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",null,e.first_name," ",e.last_name," ",e.email," ",e.city," ",e.state," ",e.zip," ",e.phone)})))))}return r.a.createElement("div",null,"Loading App...")}}]),t}(r.a.Component),b=(n(32),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{exact:!0,path:"/",component:w})}}]),t}(a.Component));b.displayName=b.name;var E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var y=document.getElementsByTagName("base")[0].getAttribute("href"),k=document.getElementById("root");i.a.render(r.a.createElement(c.a,{basename:y},r.a.createElement(b,null)),k),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");E?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):j(e)}))}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.ff084133.chunk.js.map